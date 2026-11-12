// Module ID: 12685
// Function ID: 12686
// Name: PopoutMenu
// Dependencies: [32, 19, 17, 21, 5243, 575, 7835, 1187, 8041, 1493, 1627, 12, 1652, 5485, 1705, 5493, 5535, 2]
// Exports: default

// Module 12685 (PopoutMenu)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _mod1705 from "module_1705" /* 1705 */;
import Patterns from "Patterns" /* 5493 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5535 */;
import FormRowDefault from "FormRow" /* 7835 */;
import _mod8041 from "module_8041" /* 8041 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
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
  const obj2 = { leading: tmp3Result, label: tmp3(_mod8041.FormLabel, obj3), style: tmp.popoutMenuRow, onPress: callback };
  obj3 = { style: tmp.popoutMenuRowLabel, text };
  return tmp3(tmp5, obj2);
}
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { container: obj2, popoutMenuRow: { flex: 1 }, popoutMenuRowLabel: { width: "100%" } };
obj2 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm };
let closure_9 = createStyles.createStyles(obj);
let closure_11 = { code: "(function PopoutMenuTsx1(finished){let[scheduleOnRN,handleClose]=this.__closure;if(finished){scheduleOnRN(handleClose);}})" };
let closure_12 = { code: "(function PopoutMenuTsx2(){let[withTiming,animateIn,STANDARD_EASING,ANIMATION_DURATION,_worklet_6402723539301_init_data,scheduleOnRN,handleClose,EXTRA_PADDING]=this.__closure;return{opacity:withTiming(animateIn?1:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION},'respect-motion-settings',function PopoutMenuTsx1Factory([_worklet_6402723539301_init_data,scheduleOnRN,handleClose]){const PopoutMenuTsx1=function(finished){if(finished){scheduleOnRN(handleClose);}};PopoutMenuTsx1.__closure=[scheduleOnRN,handleClose];PopoutMenuTsx1.__workletHash=6402723539301;PopoutMenuTsx1.__initData=_worklet_6402723539301_init_data;return PopoutMenuTsx1;}([_worklet_6402723539301_init_data,scheduleOnRN,handleClose])),transform:[{translateY:withTiming(animateIn?-EXTRA_PADDING:0,{easing:STANDARD_EASING,duration:ANIMATION_DURATION})}]};})" };
let closure_13 = { code: "(function PopoutMenuTsx3(){let[scheduleOnRN,_setClose]=this.__closure;scheduleOnRN(_setClose,true);})" };
let closure_14 = { code: "(function PopoutMenuTsx4(){let[scheduleOnRN,handleLongPress]=this.__closure;scheduleOnRN(handleLongPress);})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PopoutMenu.tsx");

export default function PopoutMenu(onClose) {
  let disabled;
  let items10;
  let items9;
  let left;
  let obj3;
  let onOpen;
  let ref;
  let rows;
  let style;
  let title;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let top;
  let trigger;
  ({ title, trigger, rows, onOpen } = onClose);
  let width;
  closure_9 = undefined;
  onClose = undefined;
  let callback1;
  ({ disabled, style, ref } = onClose);
  const tmp3 = width;
  let tmp = closure_9();
  const tmp2 = onClose;
  size = onClose(width[9])();
  width = size.width;
  const height = size.height;
  const bottom = onClose(width[10])().bottom;
  let obj = bottom;
  const tmp4 = height(bottom.useState(0), 2);
  const tmp6 = tmp4[1];
  let closure_5 = tmp6;
  const first = tmp4[0];
  const tmp7 = height(bottom.useState(false), 2);
  const first1 = tmp7[0];
  const tmp9 = tmp7[1];
  let closure_7 = tmp9;
  const tmp10 = height(bottom.useState(false), 2);
  const first2 = tmp10[0];
  closure_9 = tmp10[1];
  const ref1 = bottom.useRef(null);
  const ref2 = bottom.useRef(null);
  const tmp14 = height(bottom.useState({ top: 0, left: 0, width: 0, height: 0 }), 2);
  const first3 = tmp14[0];
  closure_13 = tmp14[1];
  const tmp16 = height(bottom.useState({ width: 0, height: 0 }), 2);
  const first4 = tmp16[0];
  let closure_15 = tmp16[1];
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
  let items1 = [first4, bottom, height, width, first3];
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
  let items2 = [tmp9];
  ({ top, left } = memo);
  const imperativeHandle = bottom.useImperativeHandle(ref, () => ({
    close() {
      closure_1_7(true);
    }
  }), items2);
  let items3 = [tmp6];
  let closure_16 = bottom.useMemo(() => {
    const obj = _modDef12;
    return obj.debounce((arg0) => {
      closure_1_5(arg0);
    }, 16);
  }, items3);
  const items4 = [first1, onClose];
  const callback = bottom.useCallback(() => {
    const tmp = first1;
    if (tmp) {
      onClose();
      closure_9(false);
    }
  }, items4);
  const items5 = [first3, , , , , , , , ];
  const useAnimatedStyle = onOpen(width[12]).useAnimatedStyle;
  onOpen(width[12]);
  items5[1] = onOpen(width[13]).withTiming;
  items5[2] = first > 0 && !first1;
  items5[3] = onOpen(tmp3[7]).STANDARD_EASING;
  items5[4] = 250;
  items5[5] = ref2;
  items5[6] = onOpen(tmp3[14]).scheduleOnRN;
  items5[7] = callback;
  items5[8] = 8;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items5;
  class PopoutMenuTsx2 {
    constructor() {
      let items2;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp = c0;
      let num = 0;
      if (c1) {
        num = 1;
      }
      const items = [, , ];
      const obj = { easing, duration };
      items[0] = c4;
      items[1] = c5;
      items[2] = c6;
      [tmp5, tmp6, tmp7] = items;
      const obj2 = { opacity: tmp(num, obj, "respect-motion-settings", PopoutMenuTsx1), transform: items2 };
      class PopoutMenuTsx1 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp4 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp6, tmp7];
      PopoutMenuTsx1.__closure = items1;
      PopoutMenuTsx1.__workletHash = 6402723539301;
      PopoutMenuTsx1.__initData = tmp5;
      let num2 = 0;
      if (c1) {
        num2 = -c7;
      }
      items2 = [{ translateY: tmp(num2, { easing: tmp3, duration: tmp4 }) }];
      ({ translateY: tmp(num2, { easing, duration }) });
      return obj2;
    }
  }
  const items6 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  PopoutMenuTsx2.__closure = items6;
  PopoutMenuTsx2.__workletHash = 5794060579369;
  PopoutMenuTsx2.__initData = tmp24;
  const animatedStyle = useAnimatedStyle(PopoutMenuTsx2);
  onClose = obj.useCallback(() => closure_7(true), []);
  const items7 = [onOpen];
  callback1 = obj.useCallback(() => {
    closure_7(false);
    const obj = Patterns;
    obj.trigger("impactHeavy");
    closure_9(true);
    onOpen();
  }, items7);
  [][0] = callback1;
  let tmp37Result2 = trigger;
  if (!disabled) {
    let obj2 = { gesture: tmp35, children: first1(closure_5, obj3) };
    obj3 = { ref: ref1, children: trigger };
    const GestureDetector = tmp22(tmp3[16]).GestureDetector;
    const items8 = [first1(GestureDetector, obj2), ];
    let tmp37Result = null;
    if (first2) {
      const obj4 = {
        ref: ref2,
        style: items9,
        onLayout(nativeEvent) {
              closure_16(nativeEvent.nativeEvent.layout.height);
            },
        children: items10
      };
      items9 = [tmp.container, style, , ];
      const rect = { left, top };
      items9[2] = rect;
      items9[3] = animatedStyle;
      let tmp39Result = null;
      View = tmp2(tmp3[12]).View;
      if (null != title) {
        const obj5 = { text: title };
        tmp39Result = tmp39(ref1, obj5);
      }
      items10 = [tmp39Result, , ];
      let tmp39Result2 = null;
      if (null != title) {
        tmp39Result2 = tmp39(tmp22(tmp3[8]).FormDivider, {});
      }
      items10[1] = tmp39Result2;
      items10[2] = rows.map((item, index) => {
        const obj = { onClose };
        const merged = Object.assign(item);
        return metroRequire(PopoutMenuRow, obj, index);
      });
      tmp37Result = tmp37(View, obj4);
    }
    const obj6 = { children: items8 };
    items8[1] = tmp37Result;
    tmp37Result2 = tmp37(tmp38, obj6);
  }
  return tmp37Result2;
};
