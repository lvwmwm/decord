// Module ID: 17635
// Function ID: 17636
// Name: MessagesItemHappeningNow
// Dependencies: [19, 17, 16761, 21, 12987, 575, 4823, 5387, 8930, 17636, 2]
// Exports: getMessagesItemHappeningNowHeight

// Module 17635 (MessagesItemHappeningNow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5387 */;
import CutoutBackgroundContext from "CutoutBackgroundContext" /* 8930 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12987 */;
import react from "react" /* 19 */;
import HappeningNowConstants from "HappeningNowConstants" /* 16761 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let HappeningNowItem;
let closure_4;
const View = react_native.View;
({ HAPPENING_NOW_CARD_HEIGHT: closure_4, HappeningNowItem } = HappeningNowConstants);
const jsx = Fragment.jsx;
const items = [, , , , , , ];
({ LIVE_GUILD_STAGE: arr[0], VOICES: arr[1], EMBEDDED_ACTIVITY: arr[2], STREAMS: arr[3], ACTIVITIES: arr[4], USER_CUSTOM_STATUS: arr[5], USER: arr[6] } = HappeningNowItem);
const set = new Set(items);
let closure_7 = createStyles.createStyles((height) => {
  const obj = { container: { height, paddingStart: nativeDefault.space.PX_8, overflow: "hidden" } };
  ({ height, paddingStart: nativeDefault.space.PX_8, overflow: "hidden" });
  return obj;
});
const memoResult = react.memo(function MessagesItemHappeningNow(listRef) {
  listRef = listRef.listRef;
  const obj = useToken;
  ({ style: closure_7(React3 + obj.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: null });
  const CutoutBackgroundProvider = CutoutBackgroundContext.CutoutBackgroundProvider;
  return <CutoutBackgroundProvider backgroundColor={null}>{null}</CutoutBackgroundProvider>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx");

export default memoResult;
export function getMessagesItemHappeningNowHeight() {
  const obj = MobileVisualRefreshExperiment;
  return obj.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM) + React3;
}
