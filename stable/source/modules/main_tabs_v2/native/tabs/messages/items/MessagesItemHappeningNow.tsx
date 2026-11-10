// Module ID: 18112
// Function ID: 18113
// Name: MessagesItemHappeningNow
// Dependencies: [19, 17, 17282, 21, 12522, 575, 5014, 5596, 9510, 18113, 2]
// Exports: getMessagesItemHappeningNowHeight

// Module 18112 (MessagesItemHappeningNow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5596 */;
import CutoutBackgroundContext from "CutoutBackgroundContext" /* 9510 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12522 */;
import react from "react" /* 19 */;
import HappeningNowConstants from "HappeningNowConstants" /* 17282 */;
import createStyles from "createStyles" /* 5014 */;
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
