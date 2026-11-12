// Module ID: 19548
// Function ID: 19549
// Name: MessageRequestsScreenWithTabs
// Dependencies: [19, 17, 21, 5243, 575, 7929, 7917, 1113, 19549, 19565, 11184, 14830, 14097, 2]

// Module 19548 (MessageRequestsScreenWithTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import SegmentedControlState from "SegmentedControlState" /* 7917 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7929 */;
import SegmentedControl from "SegmentedControl" /* 11184 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 14097 */;
import SegmentedControlPages from "SegmentedControlPages" /* 14830 */;
import MessageRequestListDefault from "MessageRequestList" /* 19549 */;
import SpamMessageListDefault from "SpamMessageList" /* 19565 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const constants = { REQUEST: "REQUEST", SPAM: "SPAM" };
let createStyles = createStyles_mod;
let obj = { container: obj2, messageRequestContent: { flex: 1 }, tabContainer: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const memoResult = react.memo(function MessageRequestsScreenWithTabs(navigation) {
  let intl;
  let intl2;
  let items1;
  let items2;
  let onLayout;
  let ref;
  navigation = navigation.navigation;
  const tmp = closure_8();
  const tmp4 = useMeasuredLayoutDefault();
  const width = tmp4.width;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  if (undefined !== width) {
    num = width;
  }
  const items = [navigation];
  const callback = react.useCallback((channelId) => {
    const obj = { channelId };
    return navigation.push("preview", obj);
  }, items);
  let obj = { items: items1, pageWidth: num, defaultIndex: 0 };
  const obj2 = { label: intl.string(intl3.t["7RFcXZ"]), id: constants.REQUEST, page: hasOwnProperty(MessageRequestListDefault, { goToMessageRequestPreview: callback }) };
  const useSegmentedControlState = SegmentedControlState.useSegmentedControlState;
  SegmentedControlState;
  intl = intl3.intl;
  items1 = [obj2, ];
  const obj3 = { label: intl2.string(intl3.t.ulKXHp), id: constants.SPAM, page: hasOwnProperty(SpamMessageListDefault, { goToMessageRequestPreview: callback }) };
  intl2 = intl3.intl;
  items1[1] = obj3;
  const segmentedControlState = useSegmentedControlState(obj);
  const obj4 = { style: tmp.container, children: items2 };
  items2 = [, , ];
  const obj5 = { style: tmp.tabContainer, ref, onLayout, children: hasOwnProperty(SegmentedControl.SegmentedControl, { state: segmentedControlState }) };
  items2[0] = hasOwnProperty(View, obj5);
  const obj6 = { style: tmp.messageRequestContent, children: hasOwnProperty(SegmentedControlPages.SegmentedControlPages, { state: segmentedControlState }) };
  items2[1] = hasOwnProperty(View, obj6);
  items2[2] = hasOwnProperty(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "message_requests" });
  return metroRequire(View, obj4);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx");

export default memoResult;
