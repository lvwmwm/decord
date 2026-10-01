// Module ID: 8865
// Function ID: 8866
// Name: PopoutMenu
// Dependencies: [32, 19, 17, 21, 4836, 576, 6558, 1177, 8053, 1479, 1613, 12, 4566, 4837, 4803, 6073, 2]

// Module 8865 (PopoutMenu)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Patterns from "Patterns" /* 4803 */;
import timing from "timing" /* 4837 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import FormRowDefault from "FormRow" /* 6558 */;
import Form from "Form" /* 8053 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let __initData2;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const ReanimatedRexport = tmp(4566);
function PopoutMenuRow(onClose) {
  let icon;
  let obj3;
  let onClick;
  ({ icon, onClick } = onClose);
  onClose = onClose.onClose;
  const text = onClose.text;
  const tmp = closure_9();
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
}
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { container: obj2, popoutMenuRow: { flex: 1 }, popoutMenuRowLabel: { width: "100%" } };
obj2 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm };
let closure_9 = createStyles.createStyles(obj);
let closure_11 = { code: "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}" };
let closure_12 = { code: "function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}" };
let closure_13 = { code: "function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}" };
let closure_14 = { code: "function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}" };
const forwardRefResult = react.forwardRef(function PopoutMenu(onClose, ref) {
  let disabled;
  let items7;
  let items8;
  let left;
  let obj5;
  let onOpen;
  let rows;
  let style;
  let title;
  let top;
  let trigger;
  ({ title, trigger, rows, onOpen } = onClose);
  let width;
  closure_9 = undefined;
  onClose = undefined;
  ({ disabled, style } = onClose);
  let tmp3 = width;
  let tmp = closure_9();
  const tmp2 = onClose;
  size = onClose(width[9])();
  width = size.width;
  const height = size.height;
  const bottom = onClose(width[10])().bottom;
  let obj = bottom;
  const tmp4 = height(bottom.useState(0), 2);
  let closure_5 = tmp6;
  const first = tmp4[0];
  const tmp7 = height(bottom.useState(false), 2);
  const first1 = tmp7[0];
  const _setClose = tmp9;
  const tmp10 = height(bottom.useState(false), 2);
  const first2 = tmp10[0];
  closure_9 = tmp10[1];
  ref = bottom.useRef(null);
  const ref1 = bottom.useRef(null);
  const tmp14 = height(bottom.useState({ top: 0, left: 0, width: 0, height: 0 }), 2);
  const first3 = tmp14[0];
  __initData2 = tmp14[1];
  const tmp16 = height(bottom.useState({ width: 0, height: 0 }), 2);
  const first4 = tmp16[0];
  let closure_15 = tmp16[1];
  let items = [first2];
  const effect = bottom.useEffect(() => {
    let tmp = first2;
    if (tmp) {
      let current1;
      if (ref != null) {
        current1 = ref.current;
      }
      tmp = null != current1;
    }
    if (tmp) {
      if (ref != null) {
        let current = ref.current;
        if (current != null) {
          current.measureInWindow((left, arg1, width, height) => {
            size = { top: Math.max(arg1, 0), left, width, height };
            __initData2(size);
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
  let closure_16 = bottom.useMemo(() => {
    const obj = _modDef12;
    return obj.debounce((arg0) => {
      closure_1_5(arg0);
    }, 16);
  }, items3);
  let closure_17 = tmp21;
  const items4 = [first1, onClose];
  const handleClose = obj.useCallback(() => {
    const tmp = first1;
    if (tmp) {
      onClose();
      closure_9(false);
    }
  }, items4);
  let obj2 = onOpen(tmp3[12]);
  function te() {
    let fn;
    let items;
    let obj2;
    let obj5;
    let tmp = require;
    let num = 0;
    const withTiming = timing.withTiming;
    if (closure_17) {
      num = 1;
    }
    let obj = { opacity: withTiming(num, obj2, "respect-motion-settings", fn), transform: items };
    fn = function n(arg0) {
      const tmp = arg0;
      if (tmp) {
        const obj = onOpen(width[12]);
        obj.runOnJS(handleClose)();
      }
    };
    obj2 = { easing: native.STANDARD_EASING, duration: 250 };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, handleClose };
    fn.__workletHash = 7805688342878;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, handleClose });
    let num2 = 0;
    const withTiming2 = timing.withTiming;
    timing;
    if (closure_17) {
      num2 = -8;
    }
    const obj4 = { translateY: withTiming2(num2, obj5) };
    items = [obj4];
    obj5 = { easing: native.STANDARD_EASING, duration: 250 };
    return obj;
  }
  const obj3 = { withTiming: onOpen(tmp3[13]).withTiming, animateIn: tmp21, STANDARD_EASING: onOpen(tmp3[7]).STANDARD_EASING, ANIMATION_DURATION: 250, runOnJS: onOpen(tmp3[12]).runOnJS, handleClose, EXTRA_PADDING: 8 };
  te.__closure = obj3;
  te.__workletHash = 2727321893876;
  te.__initData = ref1;
  const animatedStyle = obj2.useAnimatedStyle(te);
  onClose = obj.useCallback(() => _setClose(true), []);
  const items5 = [onOpen];
  const callback1 = obj.useCallback(() => {
    _setClose(false);
    const obj = Patterns;
    obj.trigger("impactHeavy");
    closure_9(true);
    onOpen();
  }, items5);
  [][0] = callback1;
  let tmp28Result2 = trigger;
  if (!disabled) {
    let obj4 = { gesture: tmp26, children: first1(closure_5, obj5) };
    obj5 = { ref, children: trigger };
    const GestureDetector = tmp23(tmp3[15]).GestureDetector;
    const items6 = [first1(GestureDetector, obj4), ];
    let tmp28Result = null;
    if (first2) {
      const obj6 = {
        ref: ref1,
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
      View = tmp2(tmp3[12]).View;
      if (null != title) {
        const obj7 = { text: title };
        tmp30Result = tmp30(ref, obj7);
      }
      items8 = [tmp30Result, , ];
      let tmp30Result2 = null;
      if (null != title) {
        tmp30Result2 = tmp30(tmp23(tmp3[8]).FormDivider, {});
      }
      items8[1] = tmp30Result2;
      items8[2] = rows.map((item, index) => {
        const obj = { onClose };
        const merged = Object.assign(item);
        return metroRequire(PopoutMenuRow, obj, index);
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

export default forwardRefResult;
