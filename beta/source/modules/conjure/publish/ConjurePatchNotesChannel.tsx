// Module ID: 12898
// Function ID: 12899
// Name: ConjurePatchNotesChannel
// Dependencies: [1113, 4026, 510, 2]
// Exports: formatPlaySuffix, lastPatchNotesChannel, rememberPatchNotesChannel

// Module 12898 (ConjurePatchNotesChannel)
import Storage3 from "Storage" /* 510 */;
import intl2 from "intl" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import size from "module_2" /* 2 */;

let set;

const ConjurePatchNotesLastChannelsByApp = "ConjurePatchNotesLastChannelsByApp";
const combined = "<#" + "9".repeat(20) + ">";
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePatchNotesChannel.tsx");

export const PLAY_LINE_CHANNEL_PLACEHOLDER = combined;
export function formatPlaySuffix(PLAY_LINE_CHANNEL_PLACEHOLDER) {
  const intl = intl2.intl;
  const obj = { channel: PLAY_LINE_CHANNEL_PLACEHOLDER };
  return "\n\n" + intl.formatToPlainString(_modDef4026["2ECgBx"], obj);
}
export function lastPatchNotesChannel(applicationId) {
  const Storage = Storage3.Storage;
  const value = Storage.get(ConjurePatchNotesLastChannelsByApp);
  let tmp2;
  if (value != null) {
    tmp2 = value[applicationId];
  }
  return tmp2;
}
export function rememberPatchNotesChannel(arg0, id) {
  const Storage = Storage3.Storage;
  const obj = {};
  set = Storage.set;
  const Storage2 = Storage3.Storage;
  const merged = Object.assign(Storage2.get(ConjurePatchNotesLastChannelsByApp));
  obj[arg0] = id;
  const result = set(ConjurePatchNotesLastChannelsByApp, obj);
}
