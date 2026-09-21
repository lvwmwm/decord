// Module ID: 18065
// Function ID: 18066
// Name: RoleIconUploadUtils
// Dependencies: [5, 1078, 1379, 1401, 1479, 2]
// Exports: fetchCustomEmojiAsPngDataUri

// Module 18065 (RoleIconUploadUtils)
import AvatarUtils from "AvatarUtils" /* 1401 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _fetchCustomEmojiAsPngDataUri(id) {
  c5 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp2;
    const _fetch = fetch;
    closure_132_0 = await fetch(AvatarUtils.getEmojiURL({ id, animated: false, size, forcePNG: true }));
    const tmp17 = closure_131_0(closure_131_1[4]);
    closure_2 = tmp17;
    readFileAsBase64 = tmp17.readFileAsBase64;
    await closure_132_0.blob();
    closure_132_1 = await readFileAsBase64(value);
    return closure_131_3 + closure_132_1.slice(closure_132_1.indexOf(",") + 1);
  })();
};
const Base64PNGPrefix = fn(1078).Base64PNGPrefix;
const EMOJI_URL_BASE_SIZE = fn(1379).EMOJI_URL_BASE_SIZE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/RoleIconUploadUtils.tsx");

export const ROLE_ICON_MAX_FILE_SIZE = 256000;
export const fetchCustomEmojiAsPngDataUri = function fetchCustomEmojiAsPngDataUri() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
