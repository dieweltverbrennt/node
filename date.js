#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .command(
    'current',
    'Get current date',
    (yargs) => {
      return yargs
        .option('year', {
          alias: 'y',
          type: 'boolean',
          description: 'Show current year',
        })
        .option('month', {
          alias: 'm',
          type: 'boolean',
          description: 'Show current month',
        })
        .option('date', {
          alias: 'd',
          type: 'boolean',
          description: 'Show current day of month',
        })
    },
    (argv) => {
      const now = new Date()
      if (argv.year) {
        console.log(now.getFullYear())
      } else if (argv.month) {
        console.log(now.getMonth() + 1)
      } else if (argv.date) {
        console.log(now.getDate())
      } else {
        console.log(now.toISOString())
      }
    },
  )
  .command(
    'add',
    'Add time to current date',
    (yargs) => {
      return yargs
        .option('year', {
          alias: 'y',
          type: 'number',
          description: 'Years to add',
        })
        .option('month', {
          alias: 'm',
          type: 'number',
          description: 'Months to add',
        })
        .option('date', {
          alias: 'd',
          type: 'number',
          description: 'Days to add',
        })
    },
    (argv) => {
      const now = new Date()

      let result = new Date(now)

      if (argv.year) {
        result.setFullYear(result.getFullYear() + argv.year)
      }
      if (argv.month) {
        result.setMonth(result.getMonth() + argv.month)
      }
      if (argv.date) {
        result.setDate(result.getDate() + argv.date)
      }

      console.log(result.toISOString())
    },
  )
  .command(
    'sub',
    'Subtract time from current date',
    (yargs) => {
      return yargs
        .option('year', {
          alias: 'y',
          type: 'number',
          description: 'Years to subtract',
        })
        .option('month', {
          alias: 'm',
          type: 'number',
          description: 'Months to subtract',
        })
        .option('date', {
          alias: 'd',
          type: 'number',
          description: 'Days to subtract',
        })
    },
    (argv) => {
      const now = new Date()
      let result = new Date(now)

      if (argv.year) {
        result.setFullYear(result.getFullYear() - argv.year)
      }
      if (argv.month) {
        result.setMonth(result.getMonth() - argv.month)
      }
      if (argv.date) {
        result.setDate(result.getDate() - argv.date)
      }

      console.log(result.toISOString())
    },
  ).argv
