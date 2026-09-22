// Module ID: 16992
// Function ID: 16993
// Name: VibegrationsPatchNotesChannel
// Dependencies: [1119, 3682, 510, 2]
// Exports: formatPlaySuffix, lastPatchNotesChannel, rememberPatchNotesChannel

// Module 16992 (VibegrationsPatchNotesChannel)
import Storage3 from "Storage" /* 510 */;
import util from "util" /* 1119 */;
import _modDef3682 from "module_3682" /* 3682 */;
import size from "module_2" /* 2 */;

const VibegrationsPatchNotesLastChannels = "VibegrationsPatchNotesLastChannels";
const combined = "<#" + "9".repeat(20) + ">";
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPatchNotesChannel.tsx");

export const PLAY_LINE_CHANNEL_PLACEHOLDER = combined;
export const formatPlaySuffix = function formatPlaySuffix(PLAY_LINE_CHANNEL_PLACEHOLDER) {
  const intl = util.intl;
  return "\n\n" + intl.formatToPlainString(_modDef3682.bhoZhI, { channel: PLAY_LINE_CHANNEL_PLACEHOLDER });
};
export const lastPatchNotesChannel = function lastPatchNotesChannel(guildId) {
  const Storage = Storage3.Storage;
  value = Storage.get(VibegrationsPatchNotesLastChannels);
  let tmp2;
  if (value != null) {
    tmp2 = value[guildId];
  }
  return tmp2;
};
export const rememberPatchNotesChannel = function rememberPatchNotesChannel(arg0, id) {
  const Storage = Storage3.Storage;
  const obj = {};
  const Storage2 = Storage3.Storage;
  const merged = Object.assign(Storage2.get(VibegrationsPatchNotesLastChannels));
  obj[arg0] = id;
  const result = Storage.set(VibegrationsPatchNotesLastChannels, obj);
};
