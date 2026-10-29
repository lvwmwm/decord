// Module ID: 7823
// Function ID: 7824
// Name: activityBookmarkUtils
// Dependencies: [1383, 2]
// Exports: extractActivityBookmarkParams, getLinkChannelId

// Module 7823 (activityBookmarkUtils)
import URLUtilsDefault from "URLUtils" /* 1383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/applications/message_embed/utils/activityBookmarkUtils.tsx");

export function getLinkChannelId(toURLSafeResult) {
  let value;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    value = searchParams.get("channel_id");
  }
  return value;
}
export function extractActivityBookmarkParams(url) {
  let value4;
  let value5;
  let value6;
  const obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(url);
  let value;
  if (toURLSafeResult != null) {
    const searchParams = toURLSafeResult.searchParams;
    value = searchParams.get("referrer_id");
  }
  const obj2 = { referrerId: value, customId: value4, linkId: value5, channelId: value6 };
  value4 = undefined;
  if (toURLSafeResult != null) {
    const searchParams2 = toURLSafeResult.searchParams;
    value4 = searchParams2.get("custom_id");
  }
  value5 = undefined;
  if (toURLSafeResult != null) {
    const searchParams3 = toURLSafeResult.searchParams;
    value5 = searchParams3.get("link_id");
  }
  value6 = undefined;
  if (toURLSafeResult != null) {
    const searchParams4 = toURLSafeResult.searchParams;
    value6 = searchParams4.get("channel_id");
  }
  return obj2;
}
