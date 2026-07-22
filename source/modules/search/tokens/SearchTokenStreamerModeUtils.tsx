// Module ID: 10075
// Function ID: 77983
// Name: isFromUserFilterSupported
// Dependencies: []
// Exports: getValidFilterTokens

// Module 10075 (isFromUserFilterSupported)
function isFromUserFilterSupported(items1) {
  let tmp3;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [closure_2];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
}
function isMentionsUserFilterSupported(items3) {
  let tmp3;
  let tmp = items3;
  if (items3 === undefined) {
    const items = [closure_2];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
}
function isInChannelFilterSupported(selectedSearchContext, items2) {
  let tmp3;
  let tmp = items2;
  if (items2 === undefined) {
    const items = [closure_2];
    tmp = items;
  }
  [tmp3] = tmp;
  const tmp4 = !items2(dependencyMap[2]).isGuildLikeSearchContext(selectedSearchContext);
  let tmp5 = !tmp4;
  if (tmp4) {
    tmp5 = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
    const tmp7 = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
  }
  return tmp5;
}
function getValidOrderedFilterTokens(selectedSearchContext, items) {
  let tmp;
  [tmp] = items;
  items = [];
  const items1 = [tmp];
  if (isFromUserFilterSupported(items1)) {
    items.push(constants.FILTER_FROM);
  }
  const items2 = [tmp];
  if (isInChannelFilterSupported(selectedSearchContext, items2)) {
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
let closure_2 = importDefault(dependencyMap[0]);
({ SearchTokenTypes: closure_3, SearchTypes: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/search/tokens/SearchTokenStreamerModeUtils.tsx");

export { isFromUserFilterSupported };
export { isMentionsUserFilterSupported };
export { isInChannelFilterSupported };
export { getValidOrderedFilterTokens };
export const getValidFilterTokens = function getValidFilterTokens(selectedSearchContext, items) {
  return new Set(getValidOrderedFilterTokens(selectedSearchContext, items));
};
