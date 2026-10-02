// Module ID: 16306
// Function ID: 16307
// Name: VibegrationsPatchNotesChannel
// Dependencies: [1127, 3718, 510, 2]
// Exports: formatPlaySuffix, lastPatchNotesChannel, rememberPatchNotesChannel

// Module 16306 (VibegrationsPatchNotesChannel)
import Storage3 from "Storage" /* 510 */;
import intl2 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import size from "module_2" /* 2 */;

let set;

const VibegrationsPatchNotesLastChannelsByApp = "VibegrationsPatchNotesLastChannelsByApp";
const combined = "<#" + "9".repeat(20) + ">";
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPatchNotesChannel.tsx");

export const PLAY_LINE_CHANNEL_PLACEHOLDER = combined;
export const formatPlaySuffix = function formatPlaySuffix(PLAY_LINE_CHANNEL_PLACEHOLDER) {
  const intl = intl2.intl;
  const obj = { channel: PLAY_LINE_CHANNEL_PLACEHOLDER };
  return "\n\n" + intl.formatToPlainString(_modDef3718.bhoZhI, obj);
};
export const lastPatchNotesChannel = function lastPatchNotesChannel(applicationId) {
  const Storage = Storage3.Storage;
  const value = Storage.get(VibegrationsPatchNotesLastChannelsByApp);
  let tmp2;
  if (value != null) {
    tmp2 = value[applicationId];
  }
  return tmp2;
};
export const rememberPatchNotesChannel = function rememberPatchNotesChannel(arg0, id) {
  const Storage = Storage3.Storage;
  const obj = {};
  set = Storage.set;
  const Storage2 = Storage3.Storage;
  const merged = Object.assign(Storage2.get(VibegrationsPatchNotesLastChannelsByApp));
  obj[arg0] = id;
  const result = set(VibegrationsPatchNotesLastChannelsByApp, obj);
};
