// Module ID: 11670
// Function ID: 90493
// Dependencies: [31, 27, 9313, 33, 4130, 689, 1557, 5160, 1450, 11671, 11672, 11673, 3991, 2]

// Module 11670
import importAllResult from "result";
import { useChatInputContainerHeight as closure_3 } from "getChatInputContainerHeight";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj["paddingBottom"] = require("_createForOfIteratorHelperLoose").space.PX_24;
obj["flexDirection"] = "column-reverse";
obj["overflow"] = "hidden";
obj.placeholder = obj;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function ChatPlaceholder(screenIndex) {
  let tmp2 = windowVerticalInset(screenIndex.screenIndex);
  const importDefault = tmp2;
  height = importDefault(height[8])().height;
  const rect = importDefault(height[6])();
  const insets = importDefault(height[7])({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets;
  let obj = { containerBottomInset: insets.bottom - rect.bottom, windowVerticalInset: rect.top + insets.bottom };
  const containerBottomInset = obj.containerBottomInset;
  windowVerticalInset = obj.windowVerticalInset;
  let items = [tmp2, containerBottomInset];
  const memo = containerBottomInset.useMemo(() => ({ marginBottom: closure_0 + containerBottomInset }), items);
  let tmp4 = (function useLinesForRowIndexCallback() {
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
  })();
  const jsx = tmp4;
  const items1 = [height, windowVerticalInset, tmp2, tmp4];
  let tmp = callback();
  const children = containerBottomInset.useMemo(() => {
    let diff;
    const items = [];
    let num = 0;
    let num2 = 0;
    do {
      let tmp = tmp4;
      let tmp2 = tmp4(num2);
      let tmp3 = tmp2;
      tmp4 = height;
      num = num + tmp2(height[10])(tmp2);
      let tmp5 = tmp4;
      let obj = { lines: tmp2 };
      let tmp6 = +num2;
      num2 = tmp6 + 1;
      let arr = items.push(tmp4(tmp2(height[11]), obj, tmp6));
      let tmp8 = height;
      let tmp9 = tmp2;
      let tmp10 = windowVerticalInset;
      diff = height - tmp2 - windowVerticalInset;
    } while (num < diff);
    return items;
  }, items1);
  const style = [tmp.placeholder, memo, importDefault(height[9])({ visible: true, animated: true })];
  return jsx(importDefault(height[12]).View, { style, pointerEvents: "none", children });
});
const result = require("getChatInputContainerHeight").fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default memoResult;
