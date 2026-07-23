// Module ID: 15558
// Function ID: 119999
// Dependencies: [57, 31, 27, 33, 4130, 689, 8360, 1212, 15559, 15575, 8760, 8758, 10025, 2]

// Module 15558
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = { REQUEST: "REQUEST", SPAM: "SPAM" };
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.messageRequestContent = { flex: 1 };
_createForOfIteratorHelperLoose = { minHeight: 32, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.tabContainer = _createForOfIteratorHelperLoose;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(0), 2);
  const importDefault = tmp2[1];
  const items = [navigation];
  callback = importAllResult.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = navigation(8360);
  obj = {};
  obj = {};
  const intl = navigation(1212).intl;
  obj.label = intl.string(navigation(1212).t["7RFcXZ"]);
  obj.id = constants.REQUEST;
  obj.page = callback2(importDefault(15559), { goToMessageRequestPreview: callback });
  const items1 = [obj, ];
  const obj1 = {};
  const intl2 = navigation(1212).intl;
  obj1.label = intl2.string(navigation(1212).t.ulKXHp);
  obj1.id = constants.SPAM;
  obj1.page = callback2(importDefault(15575), { goToMessageRequestPreview: callback });
  items1[1] = obj1;
  obj.items = items1;
  obj.pageWidth = tmp2[0];
  obj.defaultIndex = 0;
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const obj2 = { style: tmp.container };
  const items2 = [callback2(View, { style: tmp.tabContainer, onLayout: callback1, children: callback2(navigation(8760).SegmentedControl, { state: segmentedControlState }) }), , ];
  const obj3 = { style: tmp.tabContainer, onLayout: callback1, children: callback2(navigation(8760).SegmentedControl, { state: segmentedControlState }) };
  items2[1] = callback2(View, { style: tmp.messageRequestContent, children: callback2(navigation(8758).SegmentedControlPages, { state: segmentedControlState }) });
  items2[2] = callback2(navigation(10025).TTIFirstContentfulPaint, { label: "message_requests" });
  obj2.children = items2;
  return callback3(View, obj2);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsScreenWithTabs.tsx");

export default memoResult;
