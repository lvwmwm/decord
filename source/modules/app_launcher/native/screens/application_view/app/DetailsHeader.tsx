// Module ID: 9050
// Function ID: 71128
// Dependencies: [57, 31, 27, 33, 4130, 689, 3991, 8006, 9051, 4663, 8328, 5122, 4126, 1212, 4131, 4134, 5109, 4554, 668, 2]

// Module 9050
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, Pressable: closure_6, StyleSheet: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
let closure_11 = ["black", "transparent"];
let obj = { animatedViewContainer: { overflow: "hidden" }, container: { position: "relative", width: "100%" }, measuringContainer: { width: "100%", position: "absolute" }, descriptionContainer: { marginTop: 8 }, viewMoreCTA: { position: "absolute", right: 0, bottom: 0, pointerEvents: "none" }, maskFill: { flex: 1, backgroundColor: "black" }, maskLastLine: { flexDirection: "row" }, maskFade: { width: 32 }, collapseDescriptionCTA: { marginTop: 4 } };
obj = { display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_4, overflow: "hidden" };
obj.nameContainer = obj;
obj.nameText = { flexShrink: 1 };
_createForOfIteratorHelperLoose = { justifyContent: "center", paddingVertical: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.partnerLabelWrapper = _createForOfIteratorHelperLoose;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
let closure_14 = { code: "function DetailsHeaderTsx2(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}" };
const memoResult = importAllResult.memo(function DetailsHeader(viewContainerStyle) {
  let application;
  let c14;
  let closure_6;
  let containerStyle;
  let hideName;
  let mainContainerStyle;
  let tmp16;
  ({ application, mainContainerStyle, hideName } = viewContainerStyle);
  let first2;
  let callback;
  let first3;
  let closure_11;
  let callback2;
  let closure_13;
  c14 = undefined;
  let first4;
  let closure_16;
  let isScreenLandscape;
  let c18;
  let tmp = callback2();
  let obj = ref(8006);
  ref = importAllResult.useRef(null);
  const tmp4 = first1(importAllResult.useState(false), 2);
  const first = tmp4[0];
  const dependencyMap = tmp4[1];
  const tmp6 = first1(importAllResult.useState(false), 2);
  first1 = tmp6[0];
  let closure_5 = importAllResult.useRef(true);
  const isPartnerApplicationResult = obj.isPartnerApplication(application);
  ({ containerHeight: closure_6, containerStyle } = (function useContainerAnimation() {
    let obj = ref(3991);
    const sharedValue = obj.useSharedValue(null);
    obj = {};
    const fn = function t() {
      return { height: sharedValue.get() };
    };
    fn.__closure = { height: sharedValue };
    fn.__workletHash = 23826674246;
    fn.__initData = closure_13;
    obj.containerStyle = ref(3991).useAnimatedStyle(fn);
    obj.containerHeight = sharedValue;
    return obj;
  })());
  let obj1 = ref(8006);
  const sectionName = obj1.getSectionName(application);
  let obj2 = ref(8006);
  const str = obj2.getSectionDescription(application);
  let tmp80Result = null != str && str.trim().length > 0;
  const tmp11 = first1(tmp6[1].useState(null), 2);
  first2 = tmp11[0];
  callback = tmp11[1];
  const tmp13 = first1(tmp6[1].useState(null), 2);
  first3 = tmp13[0];
  closure_11 = tmp13[1];
  callback2 = importAllResult.useRef(0);
  closure_13 = importAllResult.useRef(0);
  const tmp8 = (function useContainerAnimation() {
    let obj = ref(3991);
    const sharedValue = obj.useSharedValue(null);
    obj = {};
    const fn = function t() {
      return { height: sharedValue.get() };
    };
    fn.__closure = { height: sharedValue };
    fn.__workletHash = 23826674246;
    fn.__initData = closure_13;
    obj.containerStyle = ref(3991).useAnimatedStyle(fn);
    obj.containerHeight = sharedValue;
    return obj;
  })();
  [tmp16, c14] = first1(tmp6[1].useState(false), 2);
  const tmp17 = first1(tmp6[1].useState(false), 2);
  first4 = tmp17[0];
  closure_16 = tmp17[1];
  const items = [str];
  const memo = importAllResult.useMemo(() => {
    let result = null;
    if (null != str) {
      result = ref(9051).parseBioReactWithCachedAST(str);
      const obj = ref(9051);
    }
    return result;
  }, items);
  let obj3 = ref(4663);
  isScreenLandscape = obj3.useIsScreenLandscape();
  const tmp21 = first(8328)(isScreenLandscape);
  c18 = tmp21;
  const items1 = [isScreenLandscape, tmp21];
  const effect = importAllResult.useEffect(() => {
    if (isScreenLandscape !== c18) {
      callback4(false);
      closure_13.current = 0;
      closure_12.current = 0;
    }
  }, items1);
  let tmp24 = first;
  const tmp15 = first1(tmp6[1].useState(false), 2);
  if (first) {
    tmp24 = !first1;
  }
  obj = {};
  obj = { style: items2 };
  items2 = [tmp.animatedViewContainer, containerStyle, viewContainerStyle.viewContainerStyle];
  obj1 = {
    style: items3,
    onLayout(nativeEvent) {
      if (!first4) {
        closure_12.current = nativeEvent.nativeEvent.layout.height;
        const result = store.set(closure_12.current);
        let tmp7 = ref.current > 0;
        if (tmp7) {
          tmp7 = closure_12.current > 0;
        }
        if (tmp7) {
          callback4(true);
        }
      }
    }
  };
  items3 = [tmp.container, mainContainerStyle];
  obj2 = { style: tmp.nameContainer };
  let tmp29 = !hideName;
  if (tmp29) {
    obj3 = { style: tmp.nameText, variant: "heading-lg/bold", color: "text-default", lineClamp: 1, children: sectionName };
    tmp29 = first2(ref(4126).Heading, obj3);
  }
  const items4 = [tmp29, ];
  let tmp33 = null;
  if (isPartnerApplicationResult) {
    const obj4 = { style: tmp.partnerLabelWrapper };
    const obj5 = { variant: "text-xs/medium", color: "text-default" };
    const intl = ref(1212).intl;
    obj5.children = intl.string(ref(1212).t.LO4f0P);
    obj4.children = first2(ref(4126).Text, obj5);
    tmp33 = first2(closure_5, obj4);
  }
  items4[1] = tmp33;
  obj2.children = items4;
  const items5 = [callback(closure_5, obj2), ];
  let tmp39Result = tmp80Result;
  if (tmp80Result) {
    const obj6 = {};
    let descriptionContainer = !hideName;
    if (descriptionContainer) {
      descriptionContainer = tmp.descriptionContainer;
    }
    obj6.style = descriptionContainer;
    obj6.onPress = function onPress() {
      if (first) {
        closure_5.current = false;
        if (first1) {
          const obj2 = ref(4131);
          const current = closure_12.current;
          const fn = function t() {
            ref(table[6]).runOnJS(outer1_14)(true);
          };
          let obj = { runOnJS: ref(3991).runOnJS, setShouldLineClamp: _undefined };
          fn.__closure = obj;
          fn.__workletHash = 6050776164847;
          fn.__initData = _undefined;
          const result = store.set(obj2.withTiming(current, ref(4134).timingStandard, "respect-motion-settings", fn));
        } else {
          _undefined(false);
          obj = ref(4131);
          const result1 = store.set(obj.withTiming(ref.current, ref(4134).timingStandard));
        }
        callback(!first1);
      }
    };
    obj6.accessibilityRole = "button";
    const obj7 = {};
    if (tmp24) {
      const obj8 = { style: str.absoluteFill };
      const obj9 = { style: tmp.maskFill };
      const items6 = [first2(closure_5, obj9), ];
      const obj10 = {};
      const items7 = [tmp.maskLastLine, ];
      const obj11 = {};
      let num5 = 0;
      if (null != first3) {
        num5 = first3;
      }
      obj11.height = num5;
      items7[1] = obj11;
      obj10.style = items7;
      const obj12 = { style: tmp.maskFill };
      const items8 = [first2(closure_5, obj12), , ];
      const obj13 = { start: ref(668).HorizontalGradient.START, end: ref(668).HorizontalGradient.END, colors: closure_11, style: tmp.maskFade };
      items8[1] = first2(first(4554), obj13);
      const obj14 = {};
      const obj15 = {};
      let num8 = 0;
      if (null != first2) {
        num8 = first2;
      }
      obj15.width = num8;
      obj14.style = obj15;
      items8[2] = first2(closure_5, obj14);
      obj10.children = items8;
      items6[1] = callback(closure_5, obj10);
      obj8.children = items6;
      let tmp49Result = tmp49(tmp50, obj8);
      const tmp53 = first2;
      const tmp54 = closure_5;
      const tmp57 = first(4554);
    } else {
      const obj16 = {};
      const items9 = [str.absoluteFill, tmp.maskFill];
      obj16.style = items9;
      tmp49Result = first2(closure_5, obj16);
    }
    obj7.maskElement = tmp49Result;
    const obj17 = { variant: "text-sm/medium", color: "text-default", lineClamp: num10, children: memo };
    obj7.children = first2(ref(4126).Text, obj17);
    const items10 = [first2(first(5109), obj7), , ];
    let tmp63 = null;
    if (tmp24) {
      const obj18 = { style: tmp.viewMoreCTA };
      const obj19 = {
        onLayout(nativeEvent) {
              if (null == first2) {
                callback2(nativeEvent.nativeEvent.layout.width);
              }
            },
        variant: "text-sm/medium",
        color: "text-brand"
      };
      const intl2 = ref(1212).intl;
      const items11 = ["\u2026 ", intl2.string(ref(1212).t["OBCR+p"])];
      obj19.children = items11;
      obj18.children = callback(ref(4126).Text, obj19);
      tmp63 = first2(closure_5, obj18);
    }
    items10[1] = tmp63;
    let tmp69 = null;
    if (first) {
      tmp69 = null;
      if (first1) {
        const obj20 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA };
        const intl3 = ref(1212).intl;
        obj20.children = intl3.string(ref(1212).t.D5xGUK);
        tmp69 = first2(ref(4126).Text, obj20);
      }
    }
    items10[2] = tmp69;
    obj6.children = items10;
    tmp39Result = callback(closure_6, obj6);
    const tmp39 = callback;
    const tmp40 = closure_6;
    const tmp41 = first2;
    const tmp44 = first(5109);
    const tmp60 = first2;
  }
  items5[1] = tmp39Result;
  obj1.children = items5;
  obj.children = callback(closure_5, obj1);
  const items12 = [first2(first(3991).View, obj), ];
  let tmp74Result = !first4;
  if (tmp74Result) {
    const obj21 = {};
    const items13 = [mainContainerStyle, tmp.measuringContainer, { opacity: 0, pointerEvents: "none" }];
    obj21.style = items13;
    obj21.onLayout = function onLayout(nativeEvent) {
      ref.current = nativeEvent.nativeEvent.layout.height;
      let tmp = ref.current > 0;
      if (tmp) {
        tmp = closure_12.current > 0;
      }
      if (tmp) {
        callback4(true);
      }
    };
    let tmp76 = !hideName;
    if (tmp76) {
      const obj22 = { variant: "heading-lg/bold", color: "text-default", children: sectionName };
      tmp76 = first2(ref(4126).Heading, obj22);
    }
    const items14 = [tmp76, ];
    if (tmp80Result) {
      const obj23 = {};
      let descriptionContainer2 = !hideName;
      if (descriptionContainer2) {
        descriptionContainer2 = tmp.descriptionContainer;
      }
      obj23.style = descriptionContainer2;
      const obj24 = {
        variant: "text-sm/medium",
        color: "text-default",
        onTextLayout(nativeEvent) {
              const lines = nativeEvent.nativeEvent.lines;
              let tmp = null == first3;
              if (tmp) {
                tmp = null != lines[0];
              }
              if (tmp) {
                callback3(lines[0].height);
              }
              if (null == ref.current) {
                ref.current = length;
              }
              if (lines.length > 3) {
                _undefined(true);
                dependencyMap(true);
              }
            },
        children: memo
      };
      const items15 = [first2(ref(4126).Text, obj24), ];
      const obj25 = { variant: "text-sm/medium", color: "text-brand", style: tmp.collapseDescriptionCTA };
      const intl4 = ref(1212).intl;
      obj25.children = intl4.string(ref(1212).t.D5xGUK);
      items15[1] = first2(ref(4126).Text, obj25);
      obj23.children = items15;
      tmp80Result = callback(closure_5, obj23);
      const tmp80 = callback;
      const tmp81 = closure_5;
    }
    items14[1] = tmp80Result;
    obj21.children = items14;
    tmp74Result = callback(closure_5, obj21);
    const tmp74 = callback;
    const tmp75 = closure_5;
  }
  items12[1] = tmp74Result;
  obj.children = items12;
  return callback(first3, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default memoResult;
