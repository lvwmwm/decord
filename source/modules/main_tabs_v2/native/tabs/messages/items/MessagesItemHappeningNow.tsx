// Module ID: 14804
// Function ID: 111538
// Name: HappeningNowItem
// Dependencies: []
// Exports: getMessagesItemHappeningNowHeight

// Module 14804 (HappeningNowItem)
let HappeningNowItem;
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ HAPPENING_NOW_CARD_HEIGHT: closure_4, HappeningNowItem } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const items = [, , , , , , ];
({ LIVE_GUILD_STAGE: arr[0], VOICES: arr[1], EMBEDDED_ACTIVITY: arr[2], STREAMS: arr[3], ACTIVITIES: arr[4], USER_CUSTOM_STATUS: arr[5], USER: arr[6] } = HappeningNowItem);
const set = new Set(items);
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[6]).createStyles((height) => {
  let obj = {};
  obj = { height, paddingStart: importDefault(dependencyMap[5]).space.PX_8, overflow: "hidden" };
  obj.container = obj;
  return obj;
});
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function MessagesItemHappeningNow(listRef) {
  let obj = arg1(dependencyMap[7]);
  obj = { style: callback(closure_4 + obj.useToken(importDefault(dependencyMap[5]).modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(importDefault(dependencyMap[8]), obj) };
  obj = { cards: set, listRef: listRef.listRef };
  return <View {...obj} />;
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx");

export default memoResult;
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight(closure_16) {
  return arg1(dependencyMap[4]).resolveRefreshToken(importDefault(dependencyMap[5]).modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM, closure_16) + closure_4;
};
