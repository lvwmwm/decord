// Module ID: 16399
// Function ID: 16400
// Name: MessagesItemHappeningNow
// Dependencies: [19, 17, 15569, 21, 12469, 576, 4788, 4489, 9127, 16400, 2]
// Exports: getMessagesItemHappeningNowHeight

// Module 16399 (MessagesItemHappeningNow)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4489 */;
import CutoutBackgroundContext from "CutoutBackgroundContext" /* 9127 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12469 */;
import HappeningNowDefault from "HappeningNow" /* 16400 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(15569);
({ HAPPENING_NOW_CARD_HEIGHT: closure_4, HappeningNowItem } = HappeningNowConstants);
const jsx = fn(21).jsx;
const items = [, , , , , , ];
({ LIVE_GUILD_STAGE: arr[0], VOICES: arr[1], EMBEDDED_ACTIVITY: arr[2], STREAMS: arr[3], ACTIVITIES: arr[4], USER_CUSTOM_STATUS: arr[5], USER: arr[6] } = HappeningNowItem);
const set = new Set(items);
const createStyles = fn(4788);
let closure_7 = createStyles.createStyles((height) => {
  const obj = { container: { height, paddingStart: nativeDefault.space.PX_8, overflow: "hidden" } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx");

export default noop.memo(function MessagesItemHappeningNow(listRef) {
  const obj2 = { backgroundColor: null, children: null };
  const obj3 = { style: closure_7(React4 + useToken.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(HappeningNowDefault, { cards: set, listRef: listRef.listRef }) };
  obj2.children = <View style={closure_7(React4 + useToken.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container} collapsable={false}>{jsx(HappeningNowDefault, { cards: set, listRef: arg0.listRef })}</View>;
  return jsx(CutoutBackgroundContext.CutoutBackgroundProvider, { backgroundColor: null, children: null });
});
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight() {
  return MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM) + React4;
};
