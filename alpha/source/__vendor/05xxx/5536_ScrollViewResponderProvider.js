// Module ID: 5536
// Function ID: 5537
// Name: ScrollViewResponderProvider
// Dependencies: [19, 17, 21, 5505]
// Exports: ScrollViewResponderProvider

// Module 5536 (ScrollViewResponderProvider)
import Fragment from "Fragment" /* 21 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let dependencyMap, diff, sum;

let StyleSheet;
let c2;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useCallback: c2, useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
react = react_mod;
({ Keyboard: metroRequire, Platform: metroImportDefault, StyleSheet, TextInput: metroImportAll, View: c9 } = react_native);
const jsx = Fragment.jsx;
let c11 = 0;
let closure_12 = [];
const logicalResponder = StyleSheet.create({ logicalResponder: { display: "contents" } });

export const ScrollViewResponderProvider = (keyboardShouldPersistTaps) => {
  let isRNGHResponderEvent;
  let obj2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  keyboardShouldPersistTaps = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  const children = keyboardShouldPersistTaps.children;
  const tmp = closure_5(false);
  dependencyMap = tmp;
  const ref = closure_5(false);
  let items = [tmp, keyboardShouldPersistTaps];
  let tmp2 = closure_4(() => ({ isRNGHResponderEvent, keyboardShouldPersistTaps }), items);
  let tmp3 = closure_3(() => {
    sum = sum + 1;
    if (1 >= sum) {
      let obj = closure_1_6;
      let addListener;
      if (closure_1_6 != null) {
        addListener = obj.addListener;
      }
      if (null != addListener) {
        const metrics = obj.metrics;
        let height;
        let setKeyboardVisibility = keyboardShouldPersistTaps(isRNGHResponderEvent[3]).setKeyboardVisibility;
        keyboardShouldPersistTaps(isRNGHResponderEvent[3]);
        if (metrics != null) {
          const metricsResult = metrics();
          if (metricsResult != null) {
            height = metricsResult.height;
          }
        }
        let tmp5 = null != height;
        if (tmp5) {
          tmp5 = height > 0;
        }
        function setVisible(endCoordinates) {
          endCoordinates = endCoordinates.endCoordinates;
          let height;
          const setKeyboardVisibility = keyboardShouldPersistTaps(isRNGHResponderEvent[3]).setKeyboardVisibility;
          keyboardShouldPersistTaps(isRNGHResponderEvent[3]);
          if (endCoordinates != null) {
            height = endCoordinates.height;
          }
          const tmp3 = null != height && height > 0;
          const result = setKeyboardVisibility(tmp3);
        }
        let result = setKeyboardVisibility(tmp5);
        items = [
          obj.addListener("keyboardDidShow", setVisible),
          obj.addListener("keyboardWillShow", setVisible),
          obj.addListener("keyboardDidHide", () => {
                const obj = keyboardShouldPersistTaps(isRNGHResponderEvent[3]);
                const result = obj.setKeyboardVisibility(false);
              })
        ];
      }
    }
    return () => {
      function unsubscribeFromKeyboardVisibility() {
        diff = diff - 1;
        if (0 >= diff) {
          for (const item10008 of closure_12) {
            let removeResult = item10008.remove();
            continue;
          }
          closure_12 = [];
          const obj = closure_1_0(closure_1_1[3]);
          const result = obj.setKeyboardVisibility(false);
        }
      }
      unsubscribeFromKeyboardVisibility();
    };
  }, []);
  const tmp4 = ref(() => {
    isRNGHResponderEvent.current = false;
    return false;
  }, []);
  let tmp5 = ref((target) => {
    if (isRNGHResponderEvent.current) {
      tmp.current = false;
      ref.current = false;
      return true;
    } else {
      const State = metroImportAll.State;
      let flag = false;
      const tmp2 = metroImportAll;
      if (null != State.currentlyFocusedInput()) {
        const metrics = metroRequire.metrics;
        let metricsResult;
        if (metrics != null) {
          metricsResult = metrics();
        }
        let tmp5 = null != metricsResult;
        if (!tmp5) {
          const _Number = Number;
          tmp5 = Number(metroImportDefault.Version) < 30;
        }
        const tmp8 = null != metricsResult && 0 === metricsResult.height;
        if (tmp5) {
          tmp5 = !tmp8;
        }
        flag = tmp5;
      }
      if (flag) {
        const State2 = tmp2.State;
        flag = target.target !== State2.currentlyFocusedInput();
      }
      ref.current = flag;
      return flag;
    }
  }, []);
  let tmp8 = "handled" === keyboardShouldPersistTaps;
  const tmp6 = ref((target) => {
    if (ref.current) {
      tmp.current = false;
      const State = metroImportAll.State;
      const result = State.currentlyFocusedInput();
      let tmp5 = null != result;
      if (tmp5) {
        const State2 = tmp2.State;
        let flag2 = false;
        if (null != State2.currentlyFocusedInput()) {
          const metrics = metroRequire.metrics;
          let metricsResult;
          if (metrics != null) {
            metricsResult = metrics();
          }
          let tmp7 = null != metricsResult;
          if (!tmp7) {
            const _Number = Number;
            tmp7 = Number(metroImportDefault.Version) < 30;
          }
          const tmp10 = null != metricsResult && 0 === metricsResult.height;
          if (tmp7) {
            tmp7 = !tmp10;
          }
          flag2 = tmp7;
        }
        tmp5 = flag2;
      }
      if (tmp5) {
        tmp5 = target.target !== result;
      }
      if (tmp5) {
        const State3 = tmp2.State;
        State3.blurTextInput(result);
      }
    }
  }, []);
  let tmp7 = ref(() => {
    ref.current = false;
  }, []);
  let obj = { value: tmp2, children: tmp9(tmp10, obj2) };
  obj2 = { collapsable: false, pointerEvents: "box-none", style: logicalResponder.logicalResponder, onStartShouldSetResponderCapture: tmp11, onStartShouldSetResponder: tmp12, onResponderRelease: tmp13, onResponderTerminate: tmp14, children };
  tmp11 = undefined;
  const JSResponderContext = keyboardShouldPersistTaps(5505).JSResponderContext;
  tmp10 = closure_9;
  if (tmp8) {
    tmp11 = tmp4;
  }
  tmp12 = undefined;
  if (tmp8) {
    tmp12 = tmp5;
  }
  tmp13 = undefined;
  if (tmp8) {
    tmp13 = tmp6;
  }
  tmp14 = undefined;
  if (tmp8) {
    tmp14 = tmp7;
  }
  return jsx(JSResponderContext, obj);
};
