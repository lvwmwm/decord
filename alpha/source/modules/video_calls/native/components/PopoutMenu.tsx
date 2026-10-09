// Module ID: 10924
// Function ID: 10925
// Name: PopoutMenu
// Dependencies: [32, 19, 17, 21, 5091, 587, 558, 576, 1200, 8563, 6824, 1497, 1631, 12, 4811, 5092, 5058, 6333, 2]

// Module 10924 (PopoutMenu)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Patterns from "Patterns" /* 5058 */;
import timing from "timing" /* 5092 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6333 */;
import FormRowDefault from "FormRow" /* 6824 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const native = tmp(1200);
const ReanimatedRexport = tmp(4811);
const Form = tmp(8563);
let react = react_mod;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let c9 = 250;
let obj = { container: obj2, popoutMenuRow: { flex: 1 }, popoutMenuRowLabel: { width: "100%" } };
obj2 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function PopoutMenuRow(onClose) {
  let icon;
  let onClick;
  let text;
  const tmp = require;
  const obj = react2;
  const cResult = obj.c(13);
  ({ icon, text, onClick } = onClose);
  onClose = onClose.onClose;
  const tmp4 = closure_10();
  if (cResult[0] === onClick) {
    let tmp5;
    let tmp6;
    if (cResult[1] === onClose) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== icon) {
      let tmp7 = null;
      if (null != icon) {
        const obj2 = { source: icon };
        tmp7 = metroRequire(native.Icon, obj2);
      }
      cResult[3] = icon;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.popoutMenuRowLabel) {
      let tmp9;
      if (cResult[6] === text) {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp4.popoutMenuRow) {
          if (cResult[10] === tmp6) {
            let tmp12;
            if (cResult[11] === tmp9) {
              tmp12 = cResult[12];
            }
            return tmp12;
          }
        }
      }
      const obj3 = { leading: tmp6, label: tmp9, style: tmp4.popoutMenuRow, onPress: tmp5 };
      const tmp15 = metroRequire(FormRowDefault, obj3);
      cResult[8] = tmp5;
      cResult[9] = tmp4.popoutMenuRow;
      cResult[10] = tmp6;
      cResult[11] = tmp9;
      cResult[12] = tmp15;
      tmp12 = tmp15;
    }
    const obj4 = { style: tmp4.popoutMenuRowLabel, text };
    const tmp11 = metroRequire(Form.FormLabel, obj4);
    cResult[5] = tmp4.popoutMenuRowLabel;
    cResult[6] = text;
    cResult[7] = tmp11;
    tmp9 = tmp11;
  }
  const fn = function t() {
    if (onClick != null) {
      tmp();
    }
    if (onClose != null) {
      tmp3();
    }
  };
  cResult[0] = onClick;
  cResult[1] = onClose;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function PopoutMenuRow(onClose) {
  let icon;
  let obj3;
  let onClick;
  ({ icon, onClick } = onClose);
  onClose = onClose.onClose;
  const text = onClose.text;
  const tmp = closure_10();
  const items = [onClick, onClose];
  const tmp3 = metroRequire;
  const callback = react.useCallback(() => {
    if (onClick != null) {
      tmp();
    }
    if (onClose != null) {
      tmp3();
    }
  }, items);
  let tmp3Result = null;
  const tmp5 = FormRowDefault;
  if (null != icon) {
    const obj = { source: icon };
    tmp3Result = tmp3(native.Icon, obj);
  }
  const obj2 = { leading: tmp3Result, label: tmp3(Form.FormLabel, obj3), style: tmp.popoutMenuRow, onPress: callback };
  obj3 = { style: tmp.popoutMenuRowLabel, text };
  return tmp3(tmp5, obj2);
});
let closure_12 = { code: "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},\"respect-motion-settings\",function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}" };
let __initData = { code: "function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}" };
let closure_14 = { code: "function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}" };
let closure_15 = { code: "function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}" };
let __initData2 = { code: "function PopoutMenuTsx5(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}" };
let closure_17 = { code: "function PopoutMenuTsx6(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}" };
let closure_18 = { code: "function PopoutMenuTsx7(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}" };
let closure_19 = { code: "function PopoutMenuTsx8(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PopoutMenu(onClose) {
  let c9;
  let closure_2;
  let closure_4;
  let disabled;
  let first1;
  let first3;
  let height;
  let left;
  let obj8;
  let onOpen;
  let rows;
  let size2;
  let style;
  let title;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp22;
  let top;
  let trigger;
  let width;
  let tmp = onOpen;
  let obj = onOpen(576);
  const cResult = obj.c(32);
  ({ disabled, title, trigger, rows, style, onOpen } = onClose);
  onClose = onClose.onClose;
  const ref = onClose.ref;
  const tmp4 = closure_10();
  let tmp5 = onClose(1497)();
  ({ width, height } = tmp5);
  let obj2 = react;
  const bottom = onClose(1631)().bottom;
  const tmp7 = first1(react.useState(0), 2);
  dependencyMap = tmp7[1];
  const first = tmp7[0];
  const tmp9 = first1(react.useState(false), 2);
  first1 = tmp9[0];
  react = tmp11;
  const tmp12 = first1(react.useState(false), 2);
  const first2 = tmp12[0];
  let closure_6 = tmp12[1];
  const ref1 = react.useRef(null);
  const ref2 = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const size1 = { top: 0, left: 0, width: 0, height: 0 };
    cResult[0] = size1;
    first3 = size1;
  } else {
    first3 = cResult[0];
  }
  [size, c9] = first1(obj2.useState(first3), 2);
  first1(obj2.useState(first3), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const size3 = { width: 0, height: 0 };
    let num = 1;
    cResult[1] = size3;
    tmp18 = size3;
  } else {
    tmp18 = cResult[1];
  }
  [size2, closure_10] = first1(obj2.useState(tmp18), 2);
  first1(obj2.useState(tmp18), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function calculateDimensions() {
      let ref;
      if (ref1 != null) {
        let current = ref1.current;
        if (current != null) {
          current.measureInWindow((left, arg1, width, height) => {
            size = { top: Math.max(arg1, 0), left, width, height };
            duration(size);
          });
        }
      }
      const timerId = setTimeout(() => {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.measureInWindow((arg0, arg1, width, height) => {
              size = { width, height };
              closure_1_10(size);
            });
          }
        }
      });
    }
    cResult[2] = calculateDimensions;
    tmp20 = calculateDimensions;
  } else {
    tmp20 = cResult[2];
  }
  closure_11 = tmp20;
  if (cResult[3] !== first2) {
    function ue() {
      let tmp = first2;
      if (tmp) {
        let current;
        if (ref1 != null) {
          current = ref1.current;
        }
        tmp = null != current;
      }
      if (tmp) {
        closure_11();
      }
    }
    let items = [first2];
    let num2 = 3;
    cResult[3] = first2;
    cResult[4] = ue;
    cResult[5] = items;
    tmp22 = items;
    tmp21 = ue;
  } else {
    tmp21 = cResult[4];
    tmp22 = cResult[5];
  }
  const effect = obj2.useEffect(tmp21, tmp22);
  let sum = -size2.height;
  if (size.top + size.height + size2.height + 8 + bottom < height) {
    sum = size.height + 16;
  }
  let num6 = 0;
  if (size.left + size2.width + 8 > width) {
    num6 = size.width - size2.width;
  }
  if (cResult[6] === num6) {
    let tmp25;
    if (cResult[7] === sum) {
      tmp25 = cResult[8];
    }
    ({ top, left } = tmp25);
    if (cResult[9] === left) {
      let tmp26;
      let tmp28;
      let tmp27;
      let debounceResult;
      let tmp30;
      let tmp37;
      if (cResult[10] === top) {
        tmp26 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class Ae {
          constructor() {
            return {
              close() {
                closure_1_4(true);
              }
            };
          }
        }
        const items1 = [tmp9[1]];
        cResult[12] = Ae;
        cResult[13] = items1;
        tmp28 = items1;
        tmp27 = Ae;
      } else {
        class Ae {
          constructor() {
            return {
              close() {
                closure_1_4(true);
              }
            };
          }
        }
        tmp28 = cResult[13];
      }
      const imperativeHandle = obj2.useImperativeHandle(ref, tmp27, tmp28);
      const _Symbol2 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class Ae {
          constructor() {
            return {
              close() {
                closure_1_4(true);
              }
            };
          }
        }
        debounceResult = obj7.debounce((arg0) => {
          closure_2(arg0);
        }, 16);
        cResult[14] = debounceResult;
        tmp30 = debounceResult;
      } else {
        class Ae {
          constructor() {
            return {
              close() {
                closure_1_4(true);
              }
            };
          }
        }
      }
      debounceResult = tmp30;
      __initData = tmp32;
      function handleClose() {
        const tmp = first1;
        if (tmp) {
          onClose();
          closure_6(false);
        }
      }
      const tmpResult = tmp(4811);
      class De {
        constructor() {
          let fn;
          let items;
          let obj2;
          let obj5;
          let tmp = require;
          let num = 0;
          const withTiming = timing.withTiming;
          if (__initData) {
            num = 1;
          }
          let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
          fn = function n(arg0) {
            const tmp = arg0;
            if (tmp) {
              const obj = onOpen(closure_2[14]);
              obj.runOnJS(handleClose)();
            }
          };
          obj2 = { easing: native.STANDARD_EASING, duration };
          fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
          fn.__workletHash = 7805688342878;
          fn.__initData = __initData;
          ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
          let num2 = 0;
          const withTiming2 = timing.withTiming;
          timing;
          const tmp5 = duration;
          if (__initData) {
            num2 = -8;
          }
          const obj4 = { translateY: withTiming2(num2, obj5) };
          items = [obj4];
          obj5 = { easing: native.STANDARD_EASING, duration: tmp5 };
          return obj;
        }
      }
      const obj3 = { withTiming: tmp(5092).withTiming, animateIn: first > 0 && !first1, STANDARD_EASING: tmp(1200).STANDARD_EASING, ANIMATION_DURATION: v250, runOnJS: tmp(4811).runOnJS, handleClose, EXTRA_PADDING: 8 };
      const useAnimatedStyle = tmpResult.useAnimatedStyle;
      De.__closure = obj3;
      De.__workletHash = 4709130936628;
      De.__initData = debounceResult;
      const animatedStyle = useAnimatedStyle(De);
      const _Symbol3 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class Ie {
          constructor() {
            return closure_4(true);
          }
        }
        cResult[15] = Ie;
        tmp37 = Ie;
      } else {
        class Ie {
          constructor() {
            return closure_4(true);
          }
        }
      }
      Ie = tmp37;
      if (cResult[16] !== onOpen) {
        class Oe {
          constructor() {
            closure_4(false);
            const obj = Patterns;
            obj.trigger("impactHeavy");
            closure_6(true);
            onOpen();
          }
        }
        cResult[16] = onOpen;
        cResult[17] = Oe;
      } else {
        class Oe {
          constructor() {
            closure_4(false);
            const obj = Patterns;
            obj.trigger("impactHeavy");
            closure_6(true);
            onOpen();
          }
        }
      }
      Oe = tmp38;
      if (cResult[18] !== tmp38) {
        class Oe {
          constructor() {
            closure_4(false);
            const obj = Patterns;
            obj.trigger("impactHeavy");
            closure_6(true);
            onOpen();
          }
        }
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class PopoutMenuTsx4 {
            constructor() {
              obj = closure_0(closure_2[14]);
              tmp = obj.runOnJS(closure_4)(true);
              return;
            }
          }
          let obj4 = { runOnJS: tmp(4811).runOnJS, _setClose: tmp9[1] };
          PopoutMenuTsx4.__closure = obj4;
          PopoutMenuTsx4.__workletHash = 15929711498886;
          PopoutMenuTsx4.__initData = Ie;
          cResult[20] = PopoutMenuTsx4;
        } else {
          class PopoutMenuTsx4 {
            constructor() {
              obj = closure_0(closure_2[14]);
              tmp = obj.runOnJS(closure_4)(true);
              return;
            }
          }
        }
        const Gesture = tmp(6333).Gesture;
        const LongPressResult = Gesture.LongPress();
        function be() {
          const obj = ReanimatedRexport;
          obj.runOnJS(Oe)();
        }
        let obj5 = { runOnJS: tmp(4811).runOnJS, handleLongPress: tmp38 };
        const onStart = LongPressResult.onBegin(tmp40).onStart;
        LongPressResult.onBegin(tmp40);
        be.__closure = obj5;
        be.__workletHash = 1649917173815;
        class De {
          constructor() {
            let fn;
            let items;
            let obj2;
            let obj5;
            let tmp = require;
            let num = 0;
            const withTiming = timing.withTiming;
            if (__initData) {
              num = 1;
            }
            let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
            fn = function n(arg0) {
              const tmp = arg0;
              if (tmp) {
                const obj = onOpen(closure_2[14]);
                obj.runOnJS(handleClose)();
              }
            };
            obj2 = { easing: native.STANDARD_EASING, duration };
            fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
            fn.__workletHash = 7805688342878;
            fn.__initData = __initData;
            ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
            let num2 = 0;
            const withTiming2 = timing.withTiming;
            timing;
            const tmp5 = duration;
            if (__initData) {
              num2 = -8;
            }
            const obj4 = { translateY: withTiming2(num2, obj5) };
            items = [obj4];
            obj5 = { easing: native.STANDARD_EASING, duration: tmp5 };
            return obj;
          }
        }
        be.__initData = handleClose;
        cResult[18] = tmp38;
        cResult[19] = onStart(be);
        const onStartResult = onStart(be);
      } else {
        class PopoutMenuTsx4 {
          constructor() {
            obj = closure_0(closure_2[14]);
            tmp = obj.runOnJS(closure_4)(true);
            return;
          }
        }
      }
      if (cResult[21] === animatedStyle) {
        class PopoutMenuTsx4 {
          constructor() {
            obj = closure_0(closure_2[14]);
            tmp = obj.runOnJS(closure_4)(true);
            return;
          }
        }
      }
      let tmp46Result = trigger;
      if (!disabled) {
        class PopoutMenuTsx4 {
          constructor() {
            obj = closure_0(closure_2[14]);
            tmp = obj.runOnJS(closure_4)(true);
            return;
          }
        }
        const obj6 = { gesture: tmp39, children: closure_6(first2, obj8) };
        obj8 = { ref: ref1, children: trigger };
        const GestureDetector = tmp(6333).GestureDetector;
        const items2 = [closure_6(GestureDetector, obj6), ];
        const tmp47 = ref2;
        class De {
          constructor() {
            let fn;
            let items;
            let obj2;
            let obj5;
            let tmp = require;
            let num = 0;
            const withTiming = timing.withTiming;
            if (__initData) {
              num = 1;
            }
            let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
            fn = function n(arg0) {
              const tmp = arg0;
              if (tmp) {
                const obj = onOpen(closure_2[14]);
                obj.runOnJS(handleClose)();
              }
            };
            obj2 = { easing: native.STANDARD_EASING, duration };
            fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
            fn.__workletHash = 7805688342878;
            fn.__initData = __initData;
            ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
            let num2 = 0;
            const withTiming2 = timing.withTiming;
            timing;
            const tmp5 = duration;
            if (__initData) {
              num2 = -8;
            }
            const obj4 = { translateY: withTiming2(num2, obj5) };
            items = [obj4];
            obj5 = { easing: native.STANDARD_EASING, duration: tmp5 };
            return obj;
          }
        }
        const obj9 = { children: items2 };
        items2[1] = null;
        tmp46Result = tmp46(tmp47, obj9);
      }
      cResult[21] = animatedStyle;
      cResult[22] = disabled;
      cResult[23] = tmp39;
      cResult[24] = tmp26;
      cResult[25] = first2;
      cResult[26] = rows;
      cResult[27] = style;
      cResult[28] = tmp4;
      cResult[29] = title;
      cResult[30] = trigger;
      cResult[31] = tmp46Result;
    }
    const rect = { left, top };
    cResult[9] = left;
    cResult[10] = top;
    cResult[11] = rect;
    tmp26 = rect;
  }
  const rect1 = { top: sum, left: num6 };
  cResult[6] = num6;
  cResult[7] = sum;
  cResult[8] = rect1;
  tmp25 = rect1;
}) : (function PopoutMenu(onClose) {
  let closure_16;
  let disabled;
  let items7;
  let items8;
  let left;
  let obj5;
  let onOpen;
  let ref;
  let rows;
  let style;
  let title;
  let top;
  let trigger;
  ({ title, trigger, rows, onOpen } = onClose);
  onClose = onClose.onClose;
  let width;
  let ref1;
  ({ disabled, style, ref } = onClose);
  let tmp3 = width;
  let tmp = ref1();
  const tmp2 = onClose;
  size = onClose(width[11])();
  width = size.width;
  const height = size.height;
  const bottom = onClose(width[12])().bottom;
  let obj = bottom;
  const tmp4 = height(bottom.useState(0), 2);
  let closure_5 = tmp6;
  const first = tmp4[0];
  const tmp7 = height(bottom.useState(false), 2);
  const first1 = tmp7[0];
  const _setClose = tmp9;
  const tmp10 = height(bottom.useState(false), 2);
  const first2 = tmp10[0];
  const v250 = tmp10[1];
  ref1 = bottom.useRef(null);
  const ref2 = bottom.useRef(null);
  const tmp14 = height(bottom.useState({ top: 0, left: 0, width: 0, height: 0 }), 2);
  const first3 = tmp14[0];
  let closure_13 = tmp14[1];
  const tmp16 = height(bottom.useState({ width: 0, height: 0 }), 2);
  const first4 = tmp16[0];
  closure_15 = tmp16[1];
  let items = [first2];
  const effect = bottom.useEffect(() => {
    let ref;
    let tmp = first2;
    if (tmp) {
      let current1;
      if (ref1 != null) {
        current1 = ref1.current;
      }
      tmp = null != current1;
    }
    if (tmp) {
      if (ref1 != null) {
        let current = ref1.current;
        if (current != null) {
          current.measureInWindow((left, arg1, width, height) => {
            size = { top: Math.max(arg1, 0), left, width, height };
            closure_1_13(size);
          });
        }
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.measureInWindow((arg0, arg1, width, height) => {
              size = { width, height };
              closure_1_15(size);
            });
          }
        }
      });
    }
  }, items);
  const items1 = [first4, bottom, height, width, first3];
  const memo = bottom.useMemo(() => {
    let top = -first4.height;
    size = first3;
    if (first3.top + first3.height + first4.height + 8 + bottom < height) {
      top = size.height + 16;
    }
    let left = 0;
    if (size.left + first4.width + 8 > width) {
      left = size.width - tmp.width;
    }
    return { top, left };
  }, items1);
  const items2 = [tmp7[1]];
  ({ top, left } = memo);
  const imperativeHandle = bottom.useImperativeHandle(ref, () => ({
    close() {
      _setClose(true);
    }
  }), items2);
  const items3 = [tmp6];
  __initData2 = bottom.useMemo(() => {
    const obj = _modDef12;
    return obj.debounce((arg0) => {
      closure_1_5(arg0);
    }, 16);
  }, items3);
  __initData = tmp21;
  const items4 = [first1, onClose];
  const callback = obj.useCallback(() => {
    const tmp = first1;
    if (tmp) {
      onClose();
      duration(false);
    }
  }, items4);
  let obj2 = onOpen(tmp3[14]);
  function ie() {
    let fn;
    let items;
    let obj2;
    let obj5;
    let tmp = require;
    let num = 0;
    const withTiming = timing.withTiming;
    if (__initData) {
      num = 1;
    }
    let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
    fn = function n(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = onOpen(width[14]);
        obj.runOnJS(__initData2)();
      }
    };
    obj2 = { easing: native.STANDARD_EASING, duration };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose: callback };
    fn.__workletHash = 523589016154;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, handleClose: callback });
    let num2 = 0;
    const withTiming2 = timing.withTiming;
    timing;
    const tmp5 = duration;
    if (__initData) {
      num2 = -8;
    }
    const obj4 = { translateY: withTiming2(num2, obj5) };
    items = [obj4];
    obj5 = { easing: native.STANDARD_EASING, duration: tmp5 };
    return obj;
  }
  const obj3 = { withTiming: onOpen(tmp3[15]).withTiming, animateIn: tmp21, STANDARD_EASING: onOpen(tmp3[8]).STANDARD_EASING, ANIMATION_DURATION: v250, runOnJS: onOpen(tmp3[14]).runOnJS, handleClose: callback, EXTRA_PADDING: 8 };
  ie.__closure = obj3;
  ie.__workletHash = 13033113644272;
  ie.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(ie);
  closure_19 = obj.useCallback(() => _setClose(true), []);
  const items5 = [onOpen];
  const callback1 = obj.useCallback(() => {
    _setClose(false);
    const obj = Patterns;
    obj.trigger("impactHeavy");
    duration(true);
    onOpen();
  }, items5);
  [][0] = callback1;
  let tmp28Result2 = trigger;
  if (!disabled) {
    let obj4 = { gesture: tmp26, children: first1(closure_5, obj5) };
    obj5 = { ref: ref1, children: trigger };
    const GestureDetector = tmp23(tmp3[17]).GestureDetector;
    const items6 = [first1(GestureDetector, obj4), ];
    let tmp28Result = null;
    if (first2) {
      const obj6 = {
        ref: ref2,
        style: items7,
        onLayout(nativeEvent) {
              closure_16(nativeEvent.nativeEvent.layout.height);
            },
        children: items8
      };
      items7 = [tmp.container, style, , ];
      const rect = { left, top };
      items7[2] = rect;
      items7[3] = animatedStyle;
      let tmp30Result = null;
      View = tmp2(tmp3[14]).View;
      if (null != title) {
        const obj7 = { text: title };
        tmp30Result = tmp30(ref2, obj7);
      }
      items8 = [tmp30Result, , ];
      let tmp30Result2 = null;
      if (null != title) {
        tmp30Result2 = tmp30(tmp23(tmp3[9]).FormDivider, {});
      }
      items8[1] = tmp30Result2;
      items8[2] = rows.map((item, index) => {
        const obj = { onClose };
        const merged = Object.assign(item);
        return metroRequire(closure_11, obj, index);
      });
      tmp28Result = tmp28(View, obj6);
    }
    const obj8 = { children: items6 };
    items6[1] = tmp28Result;
    tmp28Result2 = tmp28(tmp29, obj8);
  }
  return tmp28Result2;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PopoutMenu.tsx");

export default tmp3;
