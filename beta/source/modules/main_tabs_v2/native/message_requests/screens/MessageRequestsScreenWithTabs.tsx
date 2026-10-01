// Module ID: 16697
// Function ID: 16698
// Name: MessageRequestsScreenWithTabs
// Dependencies: [32, 19, 17, 21, 4836, 576, 9083, 1115, 16698, 16714, 9084, 12113, 11375, 2]

// Module 16697 (MessageRequestsScreenWithTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import SegmentedControlState from "SegmentedControlState" /* 9083 */;
import SegmentedControl from "SegmentedControl" /* 9084 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11375 */;
import SegmentedControlPages from "SegmentedControlPages" /* 12113 */;
import MessageRequestListDefault from "MessageRequestList" /* 16698 */;
import SpamMessageListDefault from "SpamMessageList" /* 16714 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const constants = { REQUEST: "REQUEST", SPAM: "SPAM" };
let createStyles = createStyles_mod;
let obj = { container: obj2, messageRequestContent: { flex: 1 }, tabContainer: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 32, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const memoResult = react.memo((navigation) => {
  let closure_1;
  let first;
  let intl;
  let intl2;
  let items1;
  let items2;
  navigation = navigation.navigation;
  closure_1 = undefined;
  const tmp = closure_9();
  [first, closure_1] = react.useState(0);
  const items = [navigation];
  const callback = react.useCallback((channelId) => {
    const obj = { channelId };
    return navigation.push("preview", obj);
  }, items);
  const callback1 = react.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = { items: items1, pageWidth: first, defaultIndex: 0 };
  const obj2 = { label: intl.string(intl3.t["7RFcXZ"]), id: constants.REQUEST, page: metroRequire(MessageRequestListDefault, { goToMessageRequestPreview: callback }) };
  const useSegmentedControlState = SegmentedControlState.useSegmentedControlState;
  SegmentedControlState;
  intl = intl3.intl;
  items1 = [obj2, ];
  const obj3 = { label: intl2.string(intl3.t.ulKXHp), id: constants.SPAM, page: metroRequire(SpamMessageListDefault, { goToMessageRequestPreview: callback }) };
  intl2 = intl3.intl;
  items1[1] = obj3;
  const segmentedControlState = useSegmentedControlState(obj);
  const obj4 = { style: tmp.container, children: items2 };
  items2 = [, , ];
  const obj5 = { style: tmp.tabContainer, onLayout: callback1, children: metroRequire(SegmentedControl.SegmentedControl, { state: segmentedControlState }) };
  items2[0] = metroRequire(View, obj5);
  const obj6 = { style: tmp.messageRequestContent, children: metroRequire(SegmentedControlPages.SegmentedControlPages, { state: segmentedControlState }) };
  items2[1] = metroRequire(View, obj6);
  items2[2] = metroRequire(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "message_requests" });
  return metroImportDefault(View, obj4);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx");

export default memoResult;
