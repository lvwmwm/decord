// Module ID: 16853
// Function ID: 16854
// Name: SettingListItemHighlight
// Dependencies: [19, 17, 16848, 21, 5170, 575, 1652, 5400, 1705, 2]

// Module 16853 (SettingListItemHighlight)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16848 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let _undefined2, tmp2;

let obj2;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let obj = { background: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_HOVER };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = { code: "(function SettingListItemHighlightTsx1(finished){let[scheduleOnRN,clearSelectedSearchResult]=this.__closure;if(finished){scheduleOnRN(clearSelectedSearchResult);}})" };
let closure_9 = { code: "(function SettingListItemHighlightTsx2(){let[withSequence,withDelay,withTiming,Easing,_worklet_13822801574758_init_data,scheduleOnRN,clearSelectedSearchResult]=this.__closure;return{opacity:withSequence(withDelay(500,withTiming(0,{duration:0})),withTiming(0.2,{duration:300,easing:Easing.ease}),withTiming(0,{duration:300,easing:Easing.ease},'respect-motion-settings',function SettingListItemHighlightTsx1Factory([_worklet_13822801574758_init_data,scheduleOnRN,clearSelectedSearchResult]){const SettingListItemHighlightTsx1=function(finished){if(finished){scheduleOnRN(clearSelectedSearchResult);}};SettingListItemHighlightTsx1.__closure=[scheduleOnRN,clearSelectedSearchResult];SettingListItemHighlightTsx1.__workletHash=13822801574758;SettingListItemHighlightTsx1.__initData=_worklet_13822801574758_init_data;return SettingListItemHighlightTsx1;}([_worklet_13822801574758_init_data,scheduleOnRN,clearSelectedSearchResult])))};})" };
const memoResult = react.memo(function SettingListItemHighlight(start) {
  let state;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  start = start.start;
  const end = start.end;
  const style = start.style;
  let items = [end, start];
  let tmp = closure_7();
  const memo = react.useMemo(() => {
    let lg1;
    let lg2;
    let lg3;
    let lg;
    if (start) {
      lg = nativeDefault.radii.lg;
    }
    const obj = { borderTopStartRadius: lg, borderTopEndRadius: lg1, borderBottomStartRadius: lg2, borderBottomEndRadius: lg3 };
    lg1 = undefined;
    if (start) {
      lg1 = nativeDefault.radii.lg;
    }
    lg2 = undefined;
    if (end) {
      lg2 = nativeDefault.radii.lg;
    }
    lg3 = undefined;
    if (end) {
      lg3 = nativeDefault.radii.lg;
    }
    return obj;
  }, items);
  const callback = react.useCallback(() => {
    state.setState({ selected: null });
  }, []);
  let tmp4 = dependencyMap;
  const tmp5 = start(1652);
  let items1 = [closure_9, , , , , , , ];
  const useAnimatedStyle = tmp5.useAnimatedStyle;
  items1[1] = start(1652).withSequence;
  items1[2] = start(1652).withDelay;
  items1[3] = start(5400).withTiming;
  items1[4] = start(1652).Easing;
  items1[5] = closure_8;
  items1[6] = start(1705).scheduleOnRN;
  items1[7] = callback;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  class SettingListItemHighlightTsx2 {
    constructor() {
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp = c0;
      const obj = { duration: 300, easing: _undefined4.ease };
      const items = [, , ];
      const obj2 = { duration: 300, easing: _undefined4.ease };
      items[0] = c4;
      items[1] = c5;
      items[2] = c6;
      c0 = undefined;
      const tmp3 = _undefined2(500, _undefined3(0, { duration: 0 }));
      _undefined2 = undefined;
      [tmp5, tmp6, tmp7] = items;
      const obj3 = { opacity: tmp(tmp3, tmp4, _undefined3(0, obj2, "respect-motion-settings", SettingListItemHighlightTsx1)) };
      class SettingListItemHighlightTsx1 {
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
      SettingListItemHighlightTsx1.__closure = items1;
      SettingListItemHighlightTsx1.__workletHash = 13822801574758;
      SettingListItemHighlightTsx1.__initData = tmp5;
      tmp4 = _undefined3(0.2, obj);
      return obj3;
    }
  }
  const items2 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  SettingListItemHighlightTsx2.__closure = items2;
  SettingListItemHighlightTsx2.__workletHash = 15031503673005;
  SettingListItemHighlightTsx2.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(SettingListItemHighlightTsx2);
  const items3 = [StyleSheet.absoluteFill, tmp.background, memo, animatedStyle, style];
  return jsx(end(1652).View, { pointerEvents: "none", style: items3 });
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListItemHighlight.tsx");

export default memoResult;
