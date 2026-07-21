// Module ID: 490
// Function ID: 6416
// Name: extractId
// Dependencies: [284214097]
// Exports: maybeExtractId

// Module 490 (extractId)
function extractId(arg0) {
  return arg0.split(".")[0];
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx");

export { extractId };
export const maybeExtractId = function maybeExtractId(closure_1) {
  let tmp = null;
  if (null != closure_1) {
    tmp = extractId(closure_1);
  }
  return tmp;
};
