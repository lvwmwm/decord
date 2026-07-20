// Module ID: 10107
// Function ID: 78250
// Dependencies: []

// Module 10107
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[3]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_5 = arg1(dependencyMap[4]).createStyles({ search: { height: arg1(dependencyMap[2]).MIN_HEADER_HEIGHT } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((arg0) => {
  let channelId;
  let guildId;
  let isGuildMemberCountVisible;
  let isNavigationScreen;
  let pressable;
  let screenIndex;
  let searchPlaceholder;
  ({ channelId, guildId } = arg0);
  ({ screenIndex, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
  let obj = arg1(dependencyMap[5]);
  if (obj.useIsForumChannelSearchActive(channelId)) {
    obj = { style: tmp.search };
    obj = { channelId, guildId, placeholder: searchPlaceholder };
    obj.children = tmp2(arg1(dependencyMap[6]).ForumChannelSearchInput, obj);
    let tmp2Result = tmp2(View, obj);
  } else {
    const obj1 = { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex };
    tmp2Result = tmp2(importDefault(dependencyMap[7]), obj1);
  }
  return tmp2Result;
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default memoResult;
