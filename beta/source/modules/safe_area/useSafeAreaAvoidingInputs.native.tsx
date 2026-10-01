// Module ID: 10608
// Function ID: 10609
// Name: useSafeAreaAvoidingInputs
// Dependencies: [5, 19, 1479, 576, 10609, 5892, 2]
// Exports: default

// Module 10608 (useSafeAreaAvoidingInputs)
import nativeDefault from "native" /* 576 */;
import useKeyboardDuration from "useKeyboardDuration" /* 5892 */;
import ViewMeasureUtils from "ViewMeasureUtils" /* 10609 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c3, c4, inputInWindow, styles2;

let obj = function _calculateScrollOffset() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let extraOffset = arg0;
    const styles = arg1;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj5;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c4 = 0;
              styles2 = undefined;
              closure_3 = undefined;
              if (null == extraOffset) {
                c6 = 3;
                const obj4 = { value: nativeDefault.space.PX_16, done: true };
                return obj4;
              } else {
                const type = iter.type;
                if ("toRef" === type) {
                  c5 = 1;
                  c6 = 1;
                  const obj6 = { value: obj5.measureViewRefInWindow(extraOffset.ref), done: false };
                  obj5 = ViewMeasureUtils;
                  return obj6;
                } else if ("toValue" === type) {
                  c6 = 3;
                  return { value: extraOffset.value, done: true };
                } else if ("toBottom" === type) {
                  const _Number = Number;
                  c6 = 3;
                  return { value: Number.MAX_SAFE_INTEGER, done: true };
                } else {
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            let sum;
            styles2 = value;
            extraOffset = extraOffset.extraOffset;
            let c2 = extraOffset;
            if (extraOffset == null) {
              c2 = 0;
            }
            closure_3 = c2;
            if (null == styles2) {
              sum = closure_132_1(closure_132_2[3]).space.PX_16 + closure_3;
            } else {
              sum = styles2.y - (styles.y + styles.height) + styles2.height + closure_3;
            }
            c6 = 3;
            return { value: sum, done: true };
          }
        } catch (tmp25) {
          c6 = 3;
          throw tmp25;
        }
      }
    })();
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
const result = size.fileFinishedImporting("modules/safe_area/useSafeAreaAvoidingInputs.native.tsx");

export default function useSafeAreaAvoidingInputs(insets) {
  let closure_3;
  insets = insets.insets;
  const inputs = insets.inputs;
  const scrollViewRef = insets.scrollViewRef;
  let onFocus;
  _asyncToGenerator = onFocus.useRef(inputs);
  const items = [inputs];
  const effect = onFocus.useEffect(() => {
    closure_3.current = inputs;
  }, items);
  const items1 = [insets, scrollViewRef];
  onFocus = onFocus.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    function calculateScrollOffset() {
      return scrollOffset(...arguments);
    }
    function calculateTargetScrollY(scrollView) {
      const sum = scrollView.scrollView.y + scrollView.scrollView.height;
      obj = closure_1_0(inputInWindow[2]);
      const diff = obj.getWindowDimensions({ ignoreKeyboard: true }).height - scrollView.insets.bottom;
      if (scrollView.inputInWindow.y + scrollView.inputInWindow.height + scrollView.scrollOffset > diff) {
        const _Math = Math;
        const diff1 = scrollView.scrollView.height - Math.max(0, sum - diff);
        const sum1 = scrollView.inputInScrollView.y + scrollView.inputInScrollView.height + scrollView.scrollOffset;
        if (sum1 > diff1) {
          return sum1 - diff1;
        }
      }
    }
    function scrollToTargetY(current, y) {
      current = current.current;
      let scrollToResult;
      if (current != null) {
        const scrollTo = current.scrollTo;
        if (scrollTo != null) {
          const point = { x: 0, y, animated: true };
          scrollToResult = scrollTo(point);
        }
      }
      if (scrollToResult == null) {
        const current2 = current.current;
        if (current2 != null) {
          const scrollToOffset = current2.scrollToOffset;
          if (scrollToOffset != null) {
            obj = { offset: y, animated: true };
            scrollToOffset(obj);
          }
        }
      }
    }
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let inputInScrollView;
        let scrollView;
        let scrollOffset;
        let closure_6;
        let current2;
        let found;
        c3 = 2;
        if (0 === inputInWindow) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp4;
            inputInWindow = undefined;
            inputInScrollView = undefined;
            scrollView = undefined;
            scrollOffset = undefined;
            closure_6 = undefined;
            current2 = scrollViewRef.current;
            const current1 = inputInScrollView.current;
            found = current1.find((ref) => {
              const current = ref.ref.current;
              let isFocusedResult;
              if (current != null) {
                isFocusedResult = current.isFocused();
              }
              return isFocusedResult;
            });
            if (null != found) {
              if (null != current2) {
                const obj10 = tmp(inputInWindow[4]);
                inputInWindow = 1;
                c3 = 1;
                const obj4 = { value: obj10.measureViewRefInWindow(found.ref), done: false };
                return obj4;
              }
            }
          }
        } else if (1 === inputInWindow) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            inputInWindow = value;
            const obj7 = tmp(inputInWindow[4]);
            inputInWindow = 2;
            c3 = 1;
            const obj6 = { value: obj7.measureViewRefInView(found.ref, current2), done: false };
            return obj6;
          }
        } else if (2 === inputInWindow) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            inputInScrollView = value;
            if (null != inputInWindow) {
              if (null != inputInScrollView) {
                const obj14 = tmp(inputInWindow[4]);
                inputInWindow = 3;
                c3 = 1;
                const obj9 = { value: obj14.measureViewInWindow(current2), done: false };
                return obj9;
              }
            }
          }
        } else if (3 === inputInWindow) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            scrollView = value;
            inputInWindow = 4;
            c3 = 1;
            const obj12 = { value: calculateScrollOffset(found.offset, inputInWindow), done: false };
            return obj12;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          scrollOffset = value;
          const _Number = Number;
          if (scrollOffset !== Number.MAX_SAFE_INTEGER) {
            obj = { insets: closure_129_0, inputInScrollView, inputInWindow, scrollOffset, scrollView };
            closure_6 = calculateTargetScrollY(obj);
            if (null != closure_6) {
              scrollToTargetY(closure_129_2, closure_6);
            }
          } else {
            let current = closure_129_2.current;
            if (current != null) {
              current.scrollToEnd({ animated: true });
            }
          }
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp31) {
        c3 = 3;
        throw tmp31;
      }
    }
  }), items1);
  const items2 = [onFocus];
  const effect1 = onFocus.useEffect(() => {
    obj = useKeyboardDuration;
    const timeout = setTimeout(onFocus, obj.getKeyboardDuration());
    return () => clearTimeout(closure_0);
  }, items2);
  return { onFocus };
};
