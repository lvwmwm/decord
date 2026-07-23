// Module ID: 9916
// Function ID: 76697
// Name: keyExtractor
// Dependencies: [57, 31, 27, 9532, 33, 4130, 689, 3991, 4542, 9917, 566, 8559, 480, 664, 9919, 9931, 7879, 2]

// Module 9916 (keyExtractor)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
function ForLaterPage(type) {
  type = type.type;
  const arr = importDefault(9917)(type);
  let obj = first(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getOverdueMessageReminderCount());
  obj = {};
  const tmp = callback4();
  obj.type = first(480).ImpressionTypes.MODAL;
  obj.name = first(480).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj.properties = { total_count: arr.length, overdue_count: stateFromStores };
  const items1 = [arr.length, stateFromStores];
  importDefault(8559)(obj, {}, items1);
  const tmp3 = importDefault(8559);
  const tmp6 = callback(importAllResult.useState(new Date()), 2);
  first = tmp6[0];
  importDefault = tmp6[1];
  const effect = importAllResult.useEffect(() => {
    const interval = setInterval(() => outer1_1(new Date()), callback(outer1_2[13]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = first;
  if (0 === arr.length) {
    obj = { type };
    let tmp14 = callback2(first(9931).ForLaterEmptyState, obj);
  } else {
    const obj1 = { data: arr, renderItem: tmp9, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: type.handleScroll };
    tmp14 = callback2(first(7879).FlashList, obj1);
  }
  return tmp14;
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
obj.container = obj;
_createForOfIteratorHelperLoose = { height: 1, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.headerBorder = _createForOfIteratorHelperLoose;
obj.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = importAllResult.memo((type) => {
  const tmp = callback4();
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const callback = importAllResult.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(sharedValue(outer1_2[8]).withSpring(num));
  }, items);
  const fn = function s() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 16693192032676;
  fn.__initData = closure_10;
  obj = { style: tmp.container };
  const animatedStyle = sharedValue(3991).useAnimatedStyle(fn);
  const items1 = [tmp.headerBorder, animatedStyle];
  const items2 = [callback2(importDefault(3991).View, { style: items1 }), callback2(ForLaterPage, { type: type.type, handleScroll: callback })];
  obj.children = items2;
  return callback3(View, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;
