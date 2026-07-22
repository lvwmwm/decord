// Module ID: 6928
// Function ID: 55273
// Name: extractActivityBookmarkParams
// Dependencies: []
// Exports: extractActivityBookmarkParams

// Module 6928 (extractActivityBookmarkParams)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/applications/message_embed/utils/activityBookmarkUtils.tsx");

export const extractActivityBookmarkParams = function extractActivityBookmarkParams(url) {
  let obj = importDefault(dependencyMap[0]);
  const toURLSafeResult = obj.toURLSafe(url);
  obj = {};
  let value;
  if (null != toURLSafeResult) {
    const searchParams = toURLSafeResult.searchParams;
    value = searchParams.get("referrer_id");
  }
  let tmp3;
  if (null != value) {
    tmp3 = value;
  }
  obj.referrerId = tmp3;
  value = undefined;
  if (null != toURLSafeResult) {
    const searchParams2 = toURLSafeResult.searchParams;
    value = searchParams2.get("custom_id");
  }
  let tmp5;
  if (null != value) {
    tmp5 = value;
  }
  obj.customId = tmp5;
  let value1;
  if (null != toURLSafeResult) {
    const searchParams3 = toURLSafeResult.searchParams;
    value1 = searchParams3.get("link_id");
  }
  let tmp7;
  if (null != value1) {
    tmp7 = value1;
  }
  obj.linkId = tmp7;
  return obj;
};
