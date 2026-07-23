// Module ID: 14920
// Function ID: 113706
// Name: HappeningNowItem
// Dependencies: [31, 27, 14183, 33, 1324, 689, 4130, 3834, 14921, 2]
// Exports: getMessagesItemHappeningNowHeight

// Module 14920 (HappeningNowItem)
import { View } from "get ActivityIndicator";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import set from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";

let HappeningNowItem;
let closure_4;
const require = arg1;
({ HAPPENING_NOW_CARD_HEIGHT: closure_4, HappeningNowItem } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
const items = [, , , , , , ];
({ LIVE_GUILD_STAGE: arr[0], VOICES: arr[1], EMBEDDED_ACTIVITY: arr[2], STREAMS: arr[3], ACTIVITIES: arr[4], USER_CUSTOM_STATUS: arr[5], USER: arr[6] } = HappeningNowItem);
let set = new Set(items);
let closure_7 = _createForOfIteratorHelperLoose.createStyles((height) => {
  let obj = {};
  obj = { height, paddingStart: importDefault(689).space.PX_8, overflow: "hidden" };
  obj.container = obj;
  return obj;
});
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx");

export default require("result").memo(function MessagesItemHappeningNow(listRef) {
  let obj = require(3834) /* map */;
  obj = { style: callback(closure_4 + obj.useToken(importDefault(689).modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(importDefault(14921), obj) };
  obj = { cards: set, listRef: listRef.listRef };
  return <View cards={set} listRef={arg0.listRef} />;
});
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight(outer1_16) {
  return require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.resolveRefreshToken(importDefault(689).modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM, outer1_16) + closure_4;
};
