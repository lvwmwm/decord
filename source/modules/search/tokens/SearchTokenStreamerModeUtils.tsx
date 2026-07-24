// Module ID: 10115
// Function ID: 78217
// Name: isFromUserFilterSupported
// Dependencies: [3970, 653, 10110, 2]
// Exports: getValidFilterTokens

// Module 10115 (isFromUserFilterSupported)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_3;
let closure_4;
const require = arg1;
function isFromUserFilterSupported(items1) {
  let tmp3;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [_isNativeReflectConstruct];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
}
function isMentionsUserFilterSupported(items3) {
  let tmp3;
  let tmp = items3;
  if (items3 === undefined) {
    const items = [_isNativeReflectConstruct];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
}
function isInChannelFilterSupported(selectedSearchContext, items2) {
  let tmp3;
  let tmp = items2;
  if (items2 === undefined) {
    const items = [_isNativeReflectConstruct];
    tmp = items;
  }
  [tmp3] = tmp;
  const tmp4 = !require(10110) /* _createForOfIteratorHelperLoose */.isGuildLikeSearchContext(selectedSearchContext);
  let tmp5 = !tmp4;
  if (tmp4) {
    tmp5 = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
    const tmp7 = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
  }
  return tmp5;
}
function getValidOrderedFilterTokens(closure_0, items) {
  let tmp;
  [tmp] = items;
  items = [];
  const items1 = [tmp];
  if (isFromUserFilterSupported(items1)) {
    items.push(constants.FILTER_FROM);
  }
  const items2 = [tmp];
  if (isInChannelFilterSupported(closure_0, items2)) {
    items.push(constants.FILTER_IN);
  }
  items.push(constants.FILTER_HAS);
  const items3 = [tmp];
  if (isMentionsUserFilterSupported(items3)) {
    items.push(constants.FILTER_MENTIONS);
  }
  items.push(constants.FILTER_ON);
  items.push(constants.FILTER_BEFORE);
  items.push(constants.FILTER_AFTER);
  items.push(constants.FILTER_AUTHOR_TYPE);
  return items;
}
({ SearchTokenTypes: closure_3, SearchTypes: closure_4 } = ME);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/search/tokens/SearchTokenStreamerModeUtils.tsx");

export { isFromUserFilterSupported };
export { isMentionsUserFilterSupported };
export { isInChannelFilterSupported };
export { getValidOrderedFilterTokens };
export const getValidFilterTokens = function getValidFilterTokens(closure_0, items) {
  return new Set(getValidOrderedFilterTokens(closure_0, items));
};
