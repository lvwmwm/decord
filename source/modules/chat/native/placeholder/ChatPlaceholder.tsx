// Module ID: 11659
// Function ID: 90431
// Dependencies: []

// Module 11659
const importAllResult = importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[2]).useChatInputContainerHeight;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = {};
obj = {};
const merged = Object.assign(arg1(dependencyMap[1]).StyleSheet.absoluteFillObject);
obj["paddingBottom"] = importDefault(dependencyMap[5]).space.PX_24;
obj["flexDirection"] = "column-reverse";
obj["overflow"] = "hidden";
obj.placeholder = obj;
let closure_5 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function ChatPlaceholder(screenIndex) {
  const tmp2 = callback(screenIndex.screenIndex);
  const importDefault = tmp2;
  const height = importDefault(dependencyMap[8])().height;
  const dependencyMap = height;
  const rect = importDefault(dependencyMap[6])();
  const insets = importDefault(dependencyMap[7])({}).insets;
  const obj = { containerBottomInset: insets.bottom - rect.bottom, windowVerticalInset: rect.top + insets.bottom };
  const containerBottomInset = obj.containerBottomInset;
  const windowVerticalInset = obj.windowVerticalInset;
  const callback = windowVerticalInset;
  const items = [tmp2, containerBottomInset];
  const memo = importAllResult.useMemo(() => ({ marginBottom: tmp2 + containerBottomInset }), items);
  const tmp4 = function useLinesForRowIndexCallback() {
    let closure_0 = containerBottomInset.useRef([]);
    return containerBottomInset.useCallback((arg0) => {
      let tmp = ref.current[arg0];
      if (null == tmp) {
        const _Math = Math;
        const _Math2 = Math;
        const sum = Math.floor(3 * Math.random()) + 1;
        ref.current[arg0] = sum;
        tmp = sum;
      }
      return tmp;
    }, []);
  }();
  const jsx = tmp4;
  const items1 = [height, windowVerticalInset, tmp2, tmp4];
  const tmp = callback2();
  const children = importAllResult.useMemo(() => {
    let diff;
    const items = [];
    let num = 0;
    let num2 = 0;
    do {
      let tmp = closure_4;
      let tmp2 = closure_4(num2);
      let tmp3 = closure_0;
      let tmp4 = closure_1;
      num = num + closure_0(closure_1[10])(tmp2);
      let tmp5 = closure_4;
      let obj = { lines: tmp2 };
      let tmp6 = +num2;
      num2 = tmp6 + 1;
      let arr = items.push(closure_4(closure_0(closure_1[11]), obj, tmp6));
      let tmp8 = closure_1;
      let tmp9 = closure_0;
      let tmp10 = closure_3;
      diff = closure_1 - closure_0 - closure_3;
    } while (num < diff);
    return items;
  }, items1);
  const style = [tmp.placeholder, memo, importDefault(dependencyMap[9])({ "Null": null, "Null": null })];
  return jsx(importDefault(dependencyMap[12]).View, { style, pointerEvents: "none", children });
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default memoResult;
