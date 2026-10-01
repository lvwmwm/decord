// Module ID: 8589
// Function ID: 8590
// Name: DetailsHeader
// Dependencies: [32, 19, 17, 21, 4836, 576, 4566, 8590, 8722, 5438, 7720, 5898, 4832, 1115, 4837, 4840, 5976, 5293, 1094, 2]

// Module 8589 (DetailsHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import BioMarkupUtils from "BioMarkupUtils" /* 8722 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, set, set2;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let colors = ["black", "transparent"];
let createStyles = createStyles_mod;
let obj = { animatedViewContainer: { overflow: "hidden" }, container: { position: "relative", width: "100%" }, measuringContainer: { width: "100%", position: "absolute" }, descriptionContainer: { marginTop: 8 }, viewMoreCTA: { position: "absolute", right: 0, bottom: 0, pointerEvents: "none" }, maskFill: { flex: 1, backgroundColor: "black" }, maskLastLine: { flexDirection: "row" }, maskFade: { width: 32 }, collapseDescriptionCTA: { marginTop: 4 }, nameContainer: obj2, nameText: { flexShrink: 1 }, partnerLabelWrapper: obj3 };
obj2 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "center", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: nativeDefault.radii.lg };
let closure_12 = createStyles(obj);
let __initData = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
let closure_14 = { code: "function DetailsHeaderTsx2(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}" };
const memoResult = react.memo(function DetailsHeader(viewContainerStyle) {
  let Text;
  let Text2;
  let Text3;
  let _undefined;
  let application;
  let c14;
  let closure_11;
  let closure_2;
  let closure_4;
  let hideName;
  let intl;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let items13;
  let items14;
  let items15;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items8;
  let mainContainerStyle;
  let obj12;
  let obj21;
  let obj23;
  let obj25;
  let obj8;
  let ref2;
  let tmp18;
  let tmp45;
  ({ application, mainContainerStyle, hideName } = viewContainerStyle);
  let first1;
  react = undefined;
  let num2;
  let closure_9;
  let num3;
  colors = undefined;
  let ref;
  __initData = undefined;
  c14 = undefined;
  let first2;
  let closure_16;
  let isScreenLandscape;
  let closure_18;
  viewContainerStyle = viewContainerStyle.viewContainerStyle;
  let tmp = ref();
  let obj = ref(8590);
  let obj2 = react;
  const isPartnerApplicationResult = obj.isPartnerApplication(application);
  ref = react.useRef(null);
  let tmp7 = first1(react.useState(false), 2);
  const first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(react.useState(false), 2);
  first1 = tmp9[0];
  react = tmp9[1];
  let closure_5 = react.useRef(true);
  const obj3 = ref(4566);
  const sharedValue = obj3.useSharedValue(null);
  let fn = function t() {
    const obj = { height: sharedValue.get() };
    return obj;
  };
  fn.__closure = { height: sharedValue };
  fn.__workletHash = 23826674246;
  fn.__initData = __initData;
  const obj4 = ref(4566);
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = ref(8590);
  const sectionName = obj5.getSectionName(application);
  const obj6 = ref(8590);
  const str = obj6.getSectionDescription(application);
  let tmp28Result5 = null != str;
  if (tmp28Result5) {
    tmp28Result5 = str.trim().length > 0;
  }
  const tmp6Result = first1(obj2.useState(null), 2);
  num2 = tmp6Result[0];
  closure_9 = tmp6Result[1];
  const tmp6Result4 = first1(obj2.useState(null), 2);
  num3 = tmp6Result4[0];
  colors = tmp6Result4[1];
  ref = obj2.useRef(0);
  __initData = obj2.useRef(0);
  [tmp18, c14] = first1(obj2.useState(false), 2);
  first1(obj2.useState(false), 2);
  const tmp6Result6 = first1(obj2.useState(false), 2);
  first2 = tmp6Result6[0];
  closure_16 = tmp6Result6[1];
  const items = [str];
  const memo = obj2.useMemo(() => {
    let result = null;
    if (null != str) {
      const obj = BioMarkupUtils;
      result = obj.parseBioReactWithCachedAST(tmp);
    }
    return result;
  }, items);
  const tmp2Result = ref(5438);
  isScreenLandscape = tmp2Result.useIsScreenLandscape();
  const tmp24 = first(7720)(isScreenLandscape);
  closure_18 = tmp24;
  const items1 = [isScreenLandscape, tmp24];
  const effect = obj2.useEffect(() => {
    if (isScreenLandscape !== closure_18) {
      closure_16(false);
      ref2.current = 0;
      ref.current = 0;
    }
  }, items1);
  let tmp27 = first;
  first(5898)(ref);
  if (first) {
    tmp27 = !first1;
  }
  const obj7 = { style: items2, children: closure_9(closure_5, obj8) };
  items2 = [tmp.animatedViewContainer, animatedStyle, viewContainerStyle];
  obj8 = {
    style: items3,
    onLayout(nativeEvent) {
      const tmp = first2;
      if (!tmp) {
        ref.current = nativeEvent.nativeEvent.layout.height;
        const result = sharedValue.set(ref.current);
        const tmp7 = ref2.current > 0 && ref.current > 0;
        if (tmp7) {
          closure_16(true);
        }
      }
    },
    children: items5
  };
  items3 = [tmp.container, mainContainerStyle];
  let tmp30Result = !hideName;
  const obj9 = { style: tmp.nameContainer, children: items4 };
  const View = tmp23(4566).View;
  const tmp29 = num3;
  if (!hideName) {
    const obj10 = { style: tmp.nameText, variant: "heading-lg/bold", color: "text-default", lineClamp: 1, children: sectionName };
    tmp30Result = tmp30(tmp2(4832).Heading, obj10);
  }
  items4 = [tmp30Result, ];
  let tmp30Result5 = null;
  if (isPartnerApplicationResult) {
    const obj11 = { style: tmp.partnerLabelWrapper, children: num2(Text, obj12) };
    obj12 = { variant: "text-xs/medium", color: "text-default", children: intl.string(ref(1115).t.LO4f0P) };
    Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    tmp30Result5 = tmp30(tmp31, obj11);
  }
  items4[1] = tmp30Result5;
  items5 = [tmp28(closure_5, obj9), ];
  let tmp28Result4 = tmp28Result5;
  if (tmp28Result4) {
    let tmp30Result6;
    let descriptionContainer = !hideName;
    const tmp35 = sharedValue;
    if (!hideName) {
      descriptionContainer = tmp.descriptionContainer;
    }
    const obj14 = { style: null };
    const absoluteFill = str.absoluteFill;
    const obj13 = {
      style: descriptionContainer,
      onPress() {
          const tmp = first;
          if (tmp) {
            closure_5.current = false;
            if (first1) {
              set2 = sharedValue.set;
              const current = ref.current;
              const withTiming = timing.withTiming;
              const fn = function t() {
                const obj = ref(closure_2[6]);
                obj.runOnJS(_undefined)(true);
              };
              const obj2 = { runOnJS: ReanimatedRexport.runOnJS, setShouldLineClamp: _undefined };
              const timingStandard = timingPresets.timingStandard;
              fn.__closure = obj2;
              fn.__workletHash = 6050776164847;
              fn.__initData = _undefined;
              set2(withTiming(current, timingStandard, "respect-motion-settings", fn));
            } else {
              _undefined(false);
              set = sharedValue.set;
              let obj = timing;
              const result = set(obj.withTiming(ref2.current, timingPresets.timingStandard));
            }
            closure_4(!first1);
          }
        },
      accessibilityRole: "button",
      children: items10
    };
    const tmp23Result = first(5976);
    if (tmp27) {
      const obj15 = { style: absoluteFill, children: items6 };
      obj14.style = tmp.maskFill;
      items6 = [num2(closure_5, obj14), ];
      const items7 = [tmp.maskLastLine, ];
      if (num3 == null) {
        num3 = 0;
      }
      const obj16 = { style: items7, children: items8 };
      const obj17 = { height: num3 };
      items7[1] = obj17;
      const obj18 = { style: tmp.maskFill };
      items8 = [num2(closure_5, obj18), , ];
      const obj19 = { start: ref(1094).HorizontalGradient.START, end: ref(1094).HorizontalGradient.END, colors, style: tmp.maskFade };
      const tmp23Result2 = first(5293);
      items8[1] = num2(tmp23Result2, obj19);
      if (num2 == null) {
        num2 = 0;
      }
      const obj20 = { style: obj21 };
      obj21 = { width: num2 };
      items8[2] = num2(closure_5, obj20);
      items6[1] = closure_9(closure_5, obj16);
      tmp30Result6 = tmp28(tmp31, obj15);
    } else {
      const items9 = [absoluteFill, tmp.maskFill];
      obj14.style = items9;
      tmp30Result6 = tmp30(tmp31, obj14);
    }
    const obj22 = { maskElement: tmp30Result6, children: num2(Text2, obj23) };
    Text2 = tmp2(4832).Text;
    obj23 = { variant: "text-sm/medium", color: "text-default", lineClamp: num4, children: memo };
    items10 = [num2(tmp23Result, obj22), , ];
    let tmp30Result7 = null;
    if (tmp27) {
      const obj24 = { style: tmp.viewMoreCTA, children: closure_9(Text3, obj25) };
      obj25 = {
        onLayout(nativeEvent) {
              if (null == num2) {
                closure_9(nativeEvent.nativeEvent.layout.width);
              }
            },
        variant: "text-sm/medium",
        color: "text-brand",
        children: items11
      };
      Text3 = tmp2(4832).Text;
      const intl2 = tmp2(1115).intl;
      items11 = ["\u2026 ", intl2.string(tmp2(1115).t["OBCR+p"])];
      tmp30Result7 = tmp30(tmp31, obj24);
    }
    items10[1] = tmp30Result7;
    let tmp30Result8 = null;
    if (first) {
      tmp30Result8 = null;
      if (first1) {
        const obj26 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: intl3.string(ref(1115).t.D5xGUK) };
        const Text4 = tmp2(4832).Text;
        intl3 = tmp2(1115).intl;
        tmp30Result8 = tmp30(Text4, obj26);
      }
    }
    items10[2] = tmp30Result8;
    tmp28Result4 = tmp28(tmp35, obj13);
  }
  items5[1] = tmp28Result4;
  const children = [num2(View, obj7), ];
  let tmp28Result6 = !first2;
  if (tmp28Result6) {
    const obj27 = {
      style: items13,
      onLayout(nativeEvent) {
          ref2.current = nativeEvent.nativeEvent.layout.height;
          const tmp = ref2.current > 0 && ref.current > 0;
          if (tmp) {
            closure_16(true);
          }
        },
      children: items14
    };
    items13 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
    let tmp30Result9 = !hideName;
    if (tmp30Result9) {
      const obj28 = { variant: "heading-lg/bold", color: "text-default", children: sectionName };
      tmp30Result9 = tmp30(tmp2(4832).Heading, obj28);
    }
    items14 = [tmp30Result9, ];
    if (tmp28Result5) {
      const obj29 = { style: tmp45, children: items15 };
      const obj30 = {
        variant: "text-sm/medium",
        color: "text-default",
        onTextLayout(nativeEvent) {
              const lines = nativeEvent.nativeEvent.lines;
              const tmp = null == num3 && null != lines[0];
              if (tmp) {
                closure_11(lines[0].height);
              }
              if (null == ref.current) {
                ref.current = lines.length;
              }
              if (lines.length > 3) {
                _undefined(true);
                closure_2(true);
              }
            },
        children: memo
      };
      tmp45 = !hideName && tmp.descriptionContainer;
      items15 = [num2(tmp2(4832).Text, obj30), ];
      const obj31 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: intl4.string(ref(1115).t.D5xGUK) };
      const Text5 = tmp2(4832).Text;
      intl4 = tmp2(1115).intl;
      items15[1] = num2(Text5, obj31);
      tmp28Result5 = tmp28(tmp31, obj29);
    }
    items14[1] = tmp28Result5;
    tmp28Result6 = tmp28(tmp31, obj27);
  }
  children[1] = tmp28Result6;
  return closure_9(tmp29, { children });
});
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default memoResult;
