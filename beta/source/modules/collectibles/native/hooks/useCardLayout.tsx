// Module ID: 18231
// Function ID: 18232
// Name: useCardLayout
// Dependencies: [32, 19, 9573, 1493, 2]
// Exports: useCardLayout

// Module 18231 (useCardLayout)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useCardLayout.tsx");

export function useCardLayout() {
  let ref;
  let result4;
  let tmp3;
  const f115196 = () => {
    const obj = ref(dependencyMap[3]);
    return obj.getWindowDimensions().width;
  };
  _require = react.useRef(null);
  const callback = react.useCallback((getNativeScrollRef) => {
    let nativeScrollRef = getNativeScrollRef;
    const tmp = ref;
    if (null != getNativeScrollRef) {
      nativeScrollRef = getNativeScrollRef;
      if ("getNativeScrollRef" in getNativeScrollRef) {
        nativeScrollRef = getNativeScrollRef.getNativeScrollRef();
      }
    }
    tmp.current = nativeScrollRef;
  }, []);
  [tmp3, dependencyMap] = _slicedToArray(react.useState(f115196), 2);
  const tmp2 = _slicedToArray(react.useState(f115196), 2);
  const layoutEffect = react.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1, arg2) => {
        if (arg2 > 0) {
          closure_1_1(arg2);
        }
      });
    }
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    if (layout.width > 0) {
      dependencyMap(layout.width);
    }
  }, []);
  let num = 1;
  if (tmp3 >= 320) {
    num = 2;
  }
  if (num < 2) {
    return { columns: num, cardWidth: "r", rowWidth: "add", ref: callback, onLayout: callback1 };
  } else {
    let bound;
    let num2 = 2;
    if (tmp3 >= 768) {
      num2 = 4;
    }
    const result = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH * num;
    const diff = num - 1;
    const diff1 = tmp3 - (result + require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_GAP * diff);
    if (diff1 < 2 * require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_GAP) {
      const _Math = Math;
      bound = Math.max(4, diff1);
    } else {
      bound = 2 * tmp6(9573).COLLECTIBLES_SHOP_CARD_GAP;
    }
    const result1 = (tmp3 - (bound + tmp6(9573).COLLECTIBLES_SHOP_CARD_GAP * diff)) / num;
    let tmp15 = tmp6;
    let tmp16 = result1;
    let tmp17 = num;
    let tmp19 = tmp6;
    if (result1 > require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
      let tmp24 = num;
      tmp15 = tmp6;
      tmp16 = result1;
      tmp19 = tmp6;
      tmp17 = num;
      if (num < num2) {
        const sum = tmp24 + 1;
        const result2 = (tmp3 - (bound + require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_GAP * (sum - 1))) / sum;
        tmp15 = _require;
        tmp16 = result2;
        tmp17 = sum;
        tmp19 = _require;
        while (result2 > require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
          tmp24 = sum;
          tmp15 = tmp21;
          tmp16 = result2;
          tmp19 = tmp21;
          tmp17 = sum;
          if (sum >= num2) {
            break;
          }
        }
      }
    }
    const _Math2 = Math;
    const _Math3 = Math;
    const bound1 = Math.max(tmp16, tmp19(9573).COLLECTIBLES_SHOP_CARD_WIDTH);
    const minResult = min(bound1, tmp19(9573).COLLECTIBLES_SHOP_CARD_MAX_WIDTH);
    const result3 = minResult * tmp17;
    const diff2 = tmp17 - 1;
    if (result3 + (bound + tmp15(9573).COLLECTIBLES_SHOP_CARD_GAP * diff2) > tmp3) {
      let obj;
      if (1 < tmp17) {
        obj = { columns: 1, cardWidth: "r", rowWidth: "add", ref: callback, onLayout: callback1 };
        const obj3 = { columns: 1, cardWidth: "r", rowWidth: "add", ref: callback, onLayout: callback1 };
      }
      return obj;
    }
    obj = { columns: tmp17, cardWidth: minResult, rowWidth: result4 + tmp19(9573).COLLECTIBLES_SHOP_CARD_GAP * diff2, ref: callback, onLayout: callback1 };
    result4 = minResult * tmp17;
  }
}
