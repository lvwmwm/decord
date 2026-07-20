// Module ID: 9902
// Function ID: 76614
// Name: keyExtractor
// Dependencies: []

// Module 9902 (keyExtractor)
function keyExtractor(messageId) {
  return messageId.messageId;
}
function ForLaterPage(handleScroll) {
  const arr = importDefault(dependencyMap[9])();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  obj = {};
  const tmp = callback4();
  obj.type = arg1(dependencyMap[12]).ImpressionTypes.MODAL;
  obj.name = arg1(dependencyMap[12]).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj.properties = { total_count: arr.length, overdue_count: stateFromStores };
  const items1 = [arr.length, stateFromStores];
  importDefault(dependencyMap[11])(obj, {}, items1);
  const tmp3 = importDefault(dependencyMap[11]);
  const tmp6 = callback(importAllResult.useState(new Date()), 2);
  const first = tmp6[0];
  const arg1 = first;
  const importDefault = tmp6[1];
  const effect = importAllResult.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), callback(closure_2[13]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = first;
  if (0 === arr.length) {
    let tmp14 = callback2(arg1(dependencyMap[15]).ForLaterEmptyState, {});
  } else {
    obj = { data: arr, renderItem: tmp9, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll.handleScroll };
    tmp14 = callback2(arg1(dependencyMap[16]).FlashList, obj);
  }
  return tmp14;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
obj.container = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.headerBorder = obj1;
obj.cardContainer = {};
let closure_9 = obj1.createStyles(obj);
let closure_10 = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((arg0) => {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let arg1;
    const tmp4 = callback4();
    let obj = arg1(dependencyMap[7]);
    const sharedValue = obj.useSharedValue(0);
    arg1 = sharedValue;
    const items = [sharedValue];
    const callback = importAllResult.useCallback((nativeEvent) => {
      let num = 0;
      if (nativeEvent.nativeEvent.contentOffset.y > 8) {
        num = 1;
      }
      const result = sharedValue.set(sharedValue(closure_2[8]).withSpring(num));
    }, items);
    let obj1 = arg1(dependencyMap[7]);
    const fn = function t() {
      return { opacity: sharedValue.get() };
    };
    obj = { borderOpacity: sharedValue };
    fn.__closure = obj;
    fn.__workletHash = 16693192032676;
    fn.__initData = closure_10;
    obj = { style: tmp4.container };
    const animatedStyle = obj1.useAnimatedStyle(fn);
    obj1 = {};
    const items1 = [tmp4.headerBorder, animatedStyle];
    obj1.style = items1;
    const items2 = [callback2(importDefault(dependencyMap[7]).View, obj1), ];
    const obj2 = { handleScroll: callback };
    items2[1] = callback2(ForLaterPage, obj2);
    obj.children = items2;
    return callback3(View, obj);
  }
});
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;
