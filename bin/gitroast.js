#!/usr/bin/env node

import { Command } from 'commander';
import ora from 'ora';
import chalk from 'chalk';
import { roastRepo } from '../src/roaster.js';
import { renderRoast } from '../src/ui.js';

const program = new Command();

program
  .name('gitroast')
  .description('🔥 Savage forensic code, commit, and hygiene roaster for any public GitHub repository.')
  .version('1.0.0')
  .argument('[repo]', 'Target GitHub repository slug (e.g. facebook/react) or full URL')
  .action(async (repo) => {
    if (!repo) {
      console.log(
        chalk.hex('#F97316')(`
🔥 GITROAST — Get your code roasted in seconds.
Usage: npx gitroast <owner/repo>
Example: npx gitroast facebook/react
         npx gitroast Tchapwo1/repospy
`)
      );
      process.exit(0);
    }

    const spinner = ora({
      text: chalk.yellow(`Excavating commit history & issue debt for ${chalk.bold.white(repo)}...`),
      color: 'yellow',
    }).start();

    try {
      const report = await roastRepo(repo);
      spinner.succeed(chalk.hex('#F97316')('Forensic code roast complete!'));
      renderRoast(report);
    } catch (err) {
      spinner.fail(chalk.red(`Roast failed: ${err.message}`));
      process.exit(1);
    }
  });

program.parse(process.argv);
