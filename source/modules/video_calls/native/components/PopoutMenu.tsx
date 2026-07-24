// Module ID: 10587
// Function ID: 82645
// Name: PopoutMenuRow
// Dependencies: [57, 31, 27, 33, 4130, 689, 5158, 1273, 7636, 1450, 1557, 22, 3991, 4131, 4101, 5217, 2]

// Module 10587 (PopoutMenuRow)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function PopoutMenuRow(onClose) {
  let icon;
  let onClick;
  ({ icon, onClick } = onClose);
  onClose = onClose.onClose;
  const tmp = callback2();
  const items = [onClick, onClose];
  const callback = importAllResult.useCallback(() => {
    if (null != onClick) {
      onClick();
    }
    if (null != onClose) {
      onClose();
    }
  }, items);
  let obj = {};
  let tmp5 = null;
  if (null != icon) {
    obj = { source: icon };
    tmp5 = callback(onClick(1273).Icon, obj);
  }
  obj.leading = tmp5;
  obj = { style: tmp.popoutMenuRowLabel, text: onClose.text };
  obj.label = callback(onClick(7636).FormLabel, obj);
  obj.style = tmp.popoutMenuRow;
  obj.onPress = callback;
  return callback(onClose(5158), obj);
}
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let obj = {};
obj = { position: "absolute", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.container = obj;
obj.popoutMenuRow = { flex: 1 };
obj.popoutMenuRowLabel = { width: "100%" };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { code: "function PopoutMenuTsx1(){const{withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,runOnJS,handleClose,EXTRA_PADDING}=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function(finished){if(finished){runOnJS(handleClose)();}}),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};}" };
let closure_11 = { code: "function PopoutMenuTsx2(finished){const{runOnJS,handleClose}=this.__closure;if(finished){runOnJS(handleClose)();}}" };
let closure_12 = { code: "function PopoutMenuTsx3(){const{runOnJS,handleLongPress}=this.__closure;runOnJS(handleLongPress)();}" };
let closure_13 = { code: "function PopoutMenuTsx4(){const{runOnJS,_setClose}=this.__closure;runOnJS(_setClose)(true);}" };
const forwardRefResult = importAllResult.forwardRef(function PopoutMenu(onClose) {
  let disabled;
  let left;
  let onOpen;
  let rows;
  let style;
  let title;
  let top;
  let trigger;
  ({ title, trigger, rows, onOpen } = onClose);
  onClose = onClose.onClose;
  let c17;
  let callback;
  let closure_19;
  let callback1;
  ({ disabled, style } = onClose);
  const size = onClose(width[9])();
  width = size.width;
  const height = size.height;
  const bottom = onClose(width[10])().bottom;
  const tmp2 = height(bottom.useState(0), 2);
  const View = tmp3;
  const tmp4 = height(bottom.useState(false), 2);
  const first = tmp4[0];
  let closure_7 = tmp6;
  const tmp7 = height(bottom.useState(false), 2);
  const first1 = tmp7[0];
  const callback2 = tmp7[1];
  const ref = bottom.useRef(null);
  const ref1 = bottom.useRef(null);
  const tmp11 = height(bottom.useState({ top: 0, left: 0, width: 0, height: 0 }), 2);
  const first2 = tmp11[0];
  let closure_13 = tmp11[1];
  const tmp13 = height(bottom.useState({ width: 0, height: 0 }), 2);
  const first3 = tmp13[0];
  let closure_15 = tmp13[1];
  let items = [first1];
  const effect = bottom.useEffect(() => {
    let tmp = first1;
    if (first1) {
      let current;
      if (null != ref) {
        current = ref.current;
      }
      tmp = null != current;
    }
    if (tmp) {
      (function calculateDimensions() {
        let tmp = null == outer1_10;
        if (!tmp) {
          let current = outer1_10.current;
          tmp = null == current;
          let obj = current;
        }
        if (!tmp) {
          obj.measureInWindow((left, arg1, width, height) => {
            outer2_13({ top: Math.max(arg1, 0), left, width, height });
          });
        }
        const timerId = setTimeout(() => {
          let tmp = null == outer2_11;
          if (!tmp) {
            const current = outer2_11.current;
            tmp = null == current;
            const obj = current;
          }
          if (!tmp) {
            obj.measureInWindow((arg0, arg1, width, height) => {
              outer3_15({ width, height });
            });
          }
        });
      })();
    }
  }, items);
  const items1 = [first3, bottom, height, width, first2];
  const memo = bottom.useMemo(() => {
    let sum = -first3.height;
    if (first2.top + first2.height + first3.height + 8 + bottom < height) {
      sum = first2.height + 16;
    }
    let num2 = 0;
    if (first2.left + first3.width + 8 > width) {
      num2 = first2.width - first3.width;
    }
    const obj = { top: sum, left: num2 };
    return obj;
  }, items1);
  const items2 = [tmp4[1]];
  ({ top, left } = memo);
  const imperativeHandle = bottom.useImperativeHandle(arg1, () => ({
    close() {
      outer1_7(true);
    }
  }), items2);
  const items3 = [tmp2[1]];
  let closure_16 = bottom.useMemo(() => onClose(width[11]).debounce((arg0) => {
    outer1_5(arg0);
  }, 16), items3);
  c17 = tmp18;
  const items4 = [first, onClose];
  callback = bottom.useCallback(() => {
    if (first) {
      onClose();
      callback(false);
    }
  }, items4);
  let obj = onOpen(width[12]);
  function te() {
    let obj = {};
    let obj1 = onOpen(width[13]);
    let num = 0;
    if (c17) {
      num = 1;
    }
    obj = { easing: onOpen(width[7]).STANDARD_EASING, duration: 250 };
    const fn = function n(arg0) {
      if (arg0) {
        onOpen(width[12]).runOnJS(outer1_18)();
        const obj = onOpen(width[12]);
      }
    };
    obj = { runOnJS: onOpen(width[12]).runOnJS, handleClose: callback };
    fn.__closure = obj;
    fn.__workletHash = 7805688342878;
    fn.__initData = ref1;
    obj.opacity = obj1.withTiming(num, obj, "respect-motion-settings", fn);
    obj1 = {};
    let num2 = 0;
    if (c17) {
      num2 = -8;
    }
    const obj6 = onOpen(width[13]);
    obj1.translateY = obj6.withTiming(num2, { easing: onOpen(width[7]).STANDARD_EASING, duration: 250 });
    const items = [obj1];
    obj.transform = items;
    return obj;
  }
  obj = { withTiming: onOpen(width[13]).withTiming, animateIn: tmp18, STANDARD_EASING: onOpen(width[7]).STANDARD_EASING, ANIMATION_DURATION: 250, runOnJS: onOpen(width[12]).runOnJS, handleClose: callback, EXTRA_PADDING: 8 };
  te.__closure = obj;
  te.__workletHash = 2727321893876;
  te.__initData = ref;
  const animatedStyle = obj.useAnimatedStyle(te);
  closure_19 = bottom.useCallback(() => tmp6(true), []);
  const items5 = [onOpen];
  callback1 = bottom.useCallback(() => {
    tmp6(false);
    onOpen(width[14]).trigger("impactHeavy");
    callback(true);
    onOpen();
  }, items5);
  [][0] = callback1;
  let tmp24Result = trigger;
  if (!disabled) {
    obj = {};
    let obj1 = { gesture: tmp22 };
    const obj2 = { ref, children: trigger };
    obj1.children = first(View, obj2);
    const items6 = [first(onOpen(width[15]).GestureDetector, obj1), ];
    let tmp32Result = null;
    if (first1) {
      const obj3 = { ref: ref1 };
      const items7 = [tmp.container, style, , ];
      const obj4 = { left, top };
      items7[2] = obj4;
      items7[3] = animatedStyle;
      obj3.style = items7;
      obj3.onLayout = function onLayout(nativeEvent) {
        callback2(nativeEvent.nativeEvent.layout.height);
      };
      let tmp35 = null;
      if (null != title) {
        const obj5 = { text: title };
        tmp35 = first(first3, obj5);
      }
      const items8 = [tmp35, , ];
      let tmp38 = null;
      if (null != title) {
        tmp38 = first(onOpen(width[8]).FormDivider, {});
      }
      items8[1] = tmp38;
      items8[2] = rows.map((arg0, arg1) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["onClose"] = closure_19;
        return first(first3, obj, arg1);
      });
      obj3.children = items8;
      tmp32Result = closure_7(onClose(width[12]).View, obj3);
      const tmp32 = closure_7;
    }
    items6[1] = tmp32Result;
    obj.children = items6;
    tmp24Result = closure_7(first1, obj);
    const tmp24 = closure_7;
    const tmp25 = first1;
  }
  return tmp24Result;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/PopoutMenu.tsx");

export default forwardRefResult;
