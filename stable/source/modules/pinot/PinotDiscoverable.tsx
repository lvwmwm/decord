// Module ID: 8144
// Function ID: 8145
// Name: PinotDiscoverable
// Dependencies: [8145, 3385, 1113, 2]
// Exports: getPinotCloneChannelFlags, getPinotDiscoverableFlags

// Module 8144 (PinotDiscoverable)
import intl from "intl" /* 1113 */;
import _modDef3385 from "module_3385" /* 3385 */;
import PinotConstants from "PinotConstants" /* 8145 */;
import size from "module_2" /* 2 */;

let ALL_CONTENT;
let MESSAGES;
let NONE;
let SUMMARIES;
let SWP_CHANNEL_MESSAGES_EXCLUDED;
let SWP_CHANNEL_SUMMARIES_EXCLUDED;
const PinotDiscoverableOption = { ALL_CONTENT: "all_content", SUMMARIES: "summaries", MESSAGES: "messages", NONE: "none" };
({ SWP_CHANNEL_SUMMARIES_EXCLUDED, SWP_CHANNEL_MESSAGES_EXCLUDED } = PinotConstants.PinotChannelFlags);
let closure_1 = tmp2;
let closure_2 = { [PinotDiscoverableOption.ALL_CONTENT]: 0, [PinotDiscoverableOption.SUMMARIES]: SWP_CHANNEL_MESSAGES_EXCLUDED, [PinotDiscoverableOption.MESSAGES]: SWP_CHANNEL_SUMMARIES_EXCLUDED, [PinotDiscoverableOption.NONE]: tmp2 };
const obj2 = { [ALL_CONTENT]: _modDef3385.QsbbMS, [SUMMARIES]: intl.t.q21fUr, [MESSAGES]: intl.t.OIgYlQ, [NONE]: intl.t.PoWNfe };
({ ALL_CONTENT, SUMMARIES, MESSAGES, NONE } = PinotDiscoverableOption);
const result = size.fileFinishedImporting("modules/pinot/PinotDiscoverable.tsx");

export { PinotDiscoverableOption };
export const PINOT_DISCOVERABLE_OPTION_LABELS = obj2;
export function getPinotDiscoverableFlags(arg0, serverFlags) {
  let tmp3;
  if (arg0 === obj.NONE) {
    tmp3 = closure_2[arg0];
  } else {
    tmp3 = closure_2[arg0] & ~serverFlags;
  }
  return tmp3;
}
export function getPinotCloneChannelFlags(flags) {
  let num;
  if (flags != null) {
    num = flags.flags;
  }
  if (num == null) {
    num = 0;
  }
  return num & closure_1;
}
