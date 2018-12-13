'use strict';

export default [

  {
    names: ['help', 'h'],
    type: 'bool',
    help: 'Print help info for `nlu init`, and exit 0.'
  },

  {
    names: ['verbosity', 'v'],
    type: 'positiveInteger',
    help: 'Verbosity level is an integer between 1 and 4, inclusive.',
    default: 2,
    env: 'nlu_verbosity_level'
  },

  {
    names: ['debug', 'd'],
    type: 'bool',
    help: 'Show debug logging.',
    default: false,
    hidden: true
  },

  {
    names: ['allow-unknown'],
    type: 'bool',
    help: 'Allow unknown/unrecognized options at the command line.',
    default: false,
    hidden: true
  },

  {
    names: ['force', 'f'],
    type: 'bool',
    help: 'Force execution at hand.',
    default: false
  }

];



export interface NLUInitOpts {
  _args: Array<string>,
  search_from_home: boolean,
  interactive: boolean,
  search_root: Array<string>,
  debug: boolean,
  allow_unknown: boolean,
  force: boolean,
  help: boolean,
  verbosity: number
}
