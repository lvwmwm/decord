// Module ID: 9856
// Function ID: 9857
// Name: DetailsHeader
// Dependencies: [32, 19, 17, 21, 5142, 575, 1652, 9857, 11648, 8850, 6789, 7025, 5753, 1113, 5372, 5375, 1705, 7107, 5717, 1092, 2]

// Module 9856 (DetailsHeader)
import nativeDefault from "native" /* 575 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5372 */;
import timingPresets from "timingPresets" /* 5375 */;
import BioMarkupUtils from "BioMarkupUtils" /* 11648 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
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
let closure_13 = { code: "(function DetailsHeaderTsx1(){let[height]=this.__closure;return{height:height.get()};})" };
let closure_14 = { code: "(function DetailsHeaderTsx2(){let[scheduleOnRN,setShouldLineClamp]=this.__closure;scheduleOnRN(setShouldLineClamp,true);})" };
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
  let items12;
  let items13;
  let items15;
  let items16;
  let items17;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let mainContainerStyle;
  let obj10;
  let obj19;
  let obj21;
  let obj23;
  let obj6;
  let tmp12;
  let tmp13;
  let tmp20;
  let tmp47;
  ({ application, mainContainerStyle, hideName } = viewContainerStyle);
  let ref;
  let first1;
  react = undefined;
  let str;
  let num2;
  let closure_9;
  let num3;
  colors = undefined;
  let ref2;
  let ref3;
  c14 = undefined;
  let first2;
  let closure_16;
  let isScreenLandscape;
  let closure_18;
  viewContainerStyle = viewContainerStyle.viewContainerStyle;
  let tmp = ref2();
  let obj = ref(9857);
  const isPartnerApplicationResult = obj.isPartnerApplication(application);
  ref = react.useRef(null);
  let tmp7 = first1(react.useState(false), 2);
  const first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(react.useState(false), 2);
  first1 = tmp9[0];
  react = tmp9[1];
  let closure_5 = react.useRef(true);
  const obj3 = ref(1652);
  const sharedValue = obj3.useSharedValue(null);
  let items = [ref3, sharedValue];
  let c0;
  [tmp12, tmp13] = items;
  const obj4 = ref(1652);
  class DetailsHeaderTsx1 {
    constructor() {
      const obj = { height: _undefined.get() };
      return obj;
    }
  }
  let items1 = [tmp13];
  DetailsHeaderTsx1.__closure = items1;
  DetailsHeaderTsx1.__workletHash = 9372666213791;
  DetailsHeaderTsx1.__initData = tmp12;
  const animatedStyle = obj4.useAnimatedStyle(DetailsHeaderTsx1);
  const tmp2Result = ref(9857);
  const sectionName = tmp2Result.getSectionName(application);
  const tmp2Result3 = ref(9857);
  str = tmp2Result3.getSectionDescription(application);
  let tmp30Result5 = null != str;
  if (tmp30Result5) {
    tmp30Result5 = str.trim().length > 0;
  }
  const tmp6Result = first1(react.useState(null), 2);
  num2 = tmp6Result[0];
  closure_9 = tmp6Result[1];
  const tmp6Result4 = first1(react.useState(null), 2);
  num3 = tmp6Result4[0];
  colors = tmp6Result4[1];
  ref2 = obj2.useRef(0);
  ref3 = obj2.useRef(0);
  [tmp20, c14] = first1(react.useState(false), 2);
  first1(react.useState(false), 2);
  const tmp6Result6 = first1(react.useState(false), 2);
  first2 = tmp6Result6[0];
  closure_16 = tmp6Result6[1];
  const items2 = [str];
  const memo = obj2.useMemo(() => {
    let result = null;
    if (null != str) {
      const obj = BioMarkupUtils;
      result = obj.parseBioReactWithCachedAST(tmp);
    }
    return result;
  }, items2);
  const tmp2Result4 = ref(8850);
  isScreenLandscape = tmp2Result4.useIsScreenLandscape();
  const tmp25 = first;
  const tmp26 = first(6789)(isScreenLandscape);
  closure_18 = tmp26;
  const items3 = [isScreenLandscape, tmp26];
  const effect = obj2.useEffect(() => {
    if (isScreenLandscape !== closure_18) {
      closure_16(false);
      ref3.current = 0;
      ref2.current = 0;
    }
  }, items3);
  let tmp29 = first;
  first(7025)(ref);
  if (first) {
    tmp29 = !first1;
  }
  const obj5 = { style: items4, children: closure_9(tmp33, obj6) };
  items4 = [tmp.animatedViewContainer, animatedStyle, viewContainerStyle];
  obj6 = {
    style: items5,
    onLayout: function handleCollapsedContainerLayout(nativeEvent) {
      const tmp = first2;
      if (!tmp) {
        ref2.current = nativeEvent.nativeEvent.layout.height;
        const result = sharedValue.set(ref2.current);
        const tmp7 = ref3.current > 0 && ref2.current > 0;
        if (tmp7) {
          closure_16(true);
        }
      }
    },
    children: items7
  };
  items5 = [tmp.container, mainContainerStyle];
  let tmp32Result = !hideName;
  const obj7 = { style: tmp.nameContainer, children: items6 };
  const View = tmp25(1652).View;
  const tmp31 = num3;
  if (!hideName) {
    const obj8 = { style: tmp.nameText, variant: "heading-lg/semibold", color: "text-default", lineClamp: 1, children: sectionName };
    tmp32Result = tmp32(tmp2(5753).Heading, obj8);
  }
  items6 = [tmp32Result, ];
  let tmp32Result5 = null;
  if (isPartnerApplicationResult) {
    const obj9 = { style: tmp.partnerLabelWrapper, children: num2(Text, obj10) };
    obj10 = { variant: "body-xs/medium", color: "text-default", children: intl.string(ref(1113).t.LO4f0P) };
    Text = tmp2(5753).Text;
    intl = tmp2(1113).intl;
    tmp32Result5 = tmp32(tmp33, obj9);
  }
  items6[1] = tmp32Result5;
  items7 = [tmp30(tmp33, obj7), ];
  let tmp30Result4 = tmp30Result5;
  if (tmp30Result4) {
    let tmp32Result6;
    let descriptionContainer = !hideName;
    const tmp37 = sharedValue;
    if (!hideName) {
      descriptionContainer = tmp.descriptionContainer;
    }
    const obj12 = { style: null };
    const absoluteFill = str.absoluteFill;
    const obj11 = {
      style: descriptionContainer,
      onPress: function handleApplicationDescriptionPress() {
          let tmp25;
          let tmp26;
          let tmp27;
          const tmp = first;
          if (tmp) {
            closure_5.current = false;
            if (first1) {
              set2 = sharedValue.set;
              const current = ref2.current;
              const withTiming = timing_timing.withTiming;
              const timingStandard = timingPresets.timingStandard;
              const items = [closure_14, _mod1705.scheduleOnRN, _undefined];
              let c0;
              let c1;
              [tmp25, tmp26, tmp27] = items;
              class DetailsHeaderTsx2 {
                constructor() {
                  tmp = closure_0(closure_1, true);
                  return;
                }
              }
              const items1 = [tmp26, tmp27];
              DetailsHeaderTsx2.__closure = items1;
              DetailsHeaderTsx2.__workletHash = 15470146172891;
              DetailsHeaderTsx2.__initData = tmp25;
              set2(withTiming(current, timingStandard, "respect-motion-settings", DetailsHeaderTsx2));
            } else {
              _undefined(false);
              set = sharedValue.set;
              const obj = timing_timing;
              const result = set(obj.withTiming(ref3.current, timingPresets.timingStandard));
            }
            closure_4(!first1);
          }
        },
      accessibilityRole: "button",
      children: items12
    };
    const tmp25Result = tmp25(7107);
    if (tmp29) {
      const obj13 = { style: absoluteFill, children: items8 };
      obj12.style = tmp.maskFill;
      items8 = [num2(tmp33, obj12), ];
      const items9 = [tmp.maskLastLine, ];
      if (num3 == null) {
        num3 = 0;
      }
      const obj14 = { style: items9, children: items10 };
      const obj15 = { height: num3 };
      items9[1] = obj15;
      const obj16 = { style: tmp.maskFill };
      items10 = [num2(tmp33, obj16), , ];
      const obj17 = { start: ref(1092).HorizontalGradient.START, end: ref(1092).HorizontalGradient.END, colors, style: tmp.maskFade };
      const tmp25Result2 = tmp25(5717);
      items10[1] = num2(tmp25Result2, obj17);
      if (num2 == null) {
        num2 = 0;
      }
      const obj18 = { style: obj19 };
      obj19 = { width: num2 };
      items10[2] = num2(closure_5, obj18);
      items8[1] = closure_9(closure_5, obj14);
      tmp32Result6 = tmp30(tmp33, obj13);
    } else {
      const items11 = [absoluteFill, tmp.maskFill];
      obj12.style = items11;
      tmp32Result6 = tmp32(tmp33, obj12);
    }
    const obj20 = { maskElement: tmp32Result6, children: num2(Text2, obj21) };
    Text2 = tmp2(5753).Text;
    obj21 = { variant: "body-sm/medium", color: "text-default", lineClamp: num4, children: memo };
    items12 = [num2(tmp25Result, obj20), , ];
    let tmp32Result7 = null;
    if (tmp29) {
      const obj22 = { style: tmp.viewMoreCTA, children: closure_9(Text3, obj23) };
      obj23 = {
        onLayout(nativeEvent) {
              if (null == num2) {
                closure_9(nativeEvent.nativeEvent.layout.width);
              }
            },
        variant: "body-sm/medium",
        color: "text-brand",
        children: items13
      };
      Text3 = tmp2(5753).Text;
      const intl2 = tmp2(1113).intl;
      items13 = ["\u2026 ", intl2.string(tmp2(1113).t["OBCR+p"])];
      tmp32Result7 = tmp32(tmp33, obj22);
    }
    items12[1] = tmp32Result7;
    let tmp32Result8 = null;
    if (first) {
      tmp32Result8 = null;
      if (first1) {
        const obj24 = { variant: "body-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: intl3.string(ref(1113).t.D5xGUK) };
        const Text4 = tmp2(5753).Text;
        intl3 = tmp2(1113).intl;
        tmp32Result8 = tmp32(Text4, obj24);
      }
    }
    items12[2] = tmp32Result8;
    tmp30Result4 = tmp30(tmp37, obj11);
  }
  items7[1] = tmp30Result4;
  const children = [num2(View, obj5), ];
  let tmp30Result6 = !first2;
  if (tmp30Result6) {
    const obj25 = {
      style: items15,
      onLayout: function handleExpandedContainerLayout(nativeEvent) {
          ref3.current = nativeEvent.nativeEvent.layout.height;
          const tmp = ref3.current > 0 && ref2.current > 0;
          if (tmp) {
            closure_16(true);
          }
        },
      children: items16
    };
    items15 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
    let tmp32Result9 = !hideName;
    if (tmp32Result9) {
      const obj26 = { variant: "heading-lg/semibold", color: "text-default", children: sectionName };
      tmp32Result9 = tmp32(tmp2(5753).Heading, obj26);
    }
    items16 = [tmp32Result9, ];
    if (tmp30Result5) {
      const obj27 = { style: tmp47, children: items17 };
      const obj28 = {
        variant: "body-sm/medium",
        color: "text-default",
        onTextLayout: function handleApplicationDescriptionTextLayout(nativeEvent) {
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
      tmp47 = !hideName && tmp.descriptionContainer;
      items17 = [num2(tmp2(5753).Text, obj28), ];
      const obj29 = { variant: "body-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA, children: intl4.string(ref(1113).t.D5xGUK) };
      const Text5 = tmp2(5753).Text;
      intl4 = tmp2(1113).intl;
      items17[1] = num2(Text5, obj29);
      tmp30Result5 = tmp30(tmp33, obj27);
    }
    items16[1] = tmp30Result5;
    tmp30Result6 = tmp30(tmp33, obj25);
  }
  children[1] = tmp30Result6;
  return closure_9(tmp31, { children });
});
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default memoResult;
