#!/usr/bin/env node
import { Command } from "commander"
import { getQuote } from "./dataSources";

const main = async () => {
  const program = new Command()

  program
    .option('-i, --slipId <num>', 'slip id for advice');

  program.parse();

  type ProgramInput = {
    slipId: string
  }

  const options = program.opts() satisfies ProgramInput;
  const { slipId } = options;

  const quote = await getQuote();
  if (slipId !== null && slipId !== undefined) {
    console.log(`slipid ${slipId} ${quote}`)
  } else {
    console.log('nothing')
  }
}

main()