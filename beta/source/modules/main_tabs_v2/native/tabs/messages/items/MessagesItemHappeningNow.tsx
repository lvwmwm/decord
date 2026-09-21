// Module ID: 16394
// Function ID: 16395
// Name: MessagesItemHappeningNow
// Dependencies: [19, 17, 15555, 21, 12329, 580, 4758, 558, 568, 4462, 16395, 9093, 2]
// Exports: getMessagesItemHappeningNowHeight

// Module 16394 (MessagesItemHappeningNow)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4462 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12329 */;
import HappeningNowDefault from "HappeningNow" /* 16395 */;
import noop from "module_19" /* 19 */;

const CutoutBackgroundContext = tmp(9093);
require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(15555);
({ HAPPENING_NOW_CARD_HEIGHT: closure_4, HappeningNowItem } = HappeningNowConstants);
const jsx = fn(21).jsx;
const items = [, , , , , , ];
({ LIVE_GUILD_STAGE: arr[0], VOICES: arr[1], EMBEDDED_ACTIVITY: arr[2], STREAMS: arr[3], ACTIVITIES: arr[4], USER_CUSTOM_STATUS: arr[5], USER: arr[6] } = HappeningNowItem);
const set = new Set(items);
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles((height) => {
  const obj = { container: { height, paddingStart: nativeDefault.space.PX_8, overflow: "hidden" } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemHappeningNow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((listRef) => {
  const cResult = c.c(5);
  listRef = listRef.listRef;
  const tmp5 = closure_7(React4 + useToken.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM));
  if (cResult[0] !== listRef) {
    const obj3 = { cards: set, listRef };
    const tmp9 = jsx(HappeningNowDefault, { cards: set, listRef });
    cResult[0] = listRef;
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5.container) {
    if (cResult[3] === tmp6) {
      let tmp10 = cResult[4];
    }
    return tmp10;
  }
  const obj4 = { backgroundColor: null, children: <View style={tmp5.container} collapsable={false}>{tmp6}</View> };
  const tmp11 = jsx(CutoutBackgroundContext.CutoutBackgroundProvider, { backgroundColor: null, children: <View style={tmp5.container} collapsable={false}>{tmp6}</View> });
  cResult[2] = tmp5.container;
  cResult[3] = tmp6;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((listRef) => {
  const obj2 = { backgroundColor: null, children: null };
  const obj3 = { style: closure_7(React4 + useToken.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container, collapsable: false, children: jsx(HappeningNowDefault, { cards: set, listRef: listRef.listRef }) };
  obj2.children = <View style={closure_7(React4 + useToken.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM)).container} collapsable={false}>{jsx(HappeningNowDefault, { cards: set, listRef: arg0.listRef })}</View>;
  return jsx(CutoutBackgroundContext.CutoutBackgroundProvider, { backgroundColor: null, children: null });
}));
export const getMessagesItemHappeningNowHeight = function getMessagesItemHappeningNowHeight() {
  return MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM) + React4;
};
