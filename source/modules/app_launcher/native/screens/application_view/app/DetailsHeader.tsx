// Module ID: 8999
// Function ID: 70836
// Dependencies: []

// Module 8999
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, Pressable: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = { animatedViewContainer: { overflow: "hidden" }, container: { "Bool(true)": "Array", "Bool(true)": "DragIcon" }, measuringContainer: {}, descriptionContainer: { marginTop: 8 }, expandDescriptionCTAGradient: { onStartReachedThreshold: "png", HighContrastText: 18, createStageEndSystemMessage: 18, base64GIFRegex: 4, hoverGestureHandlerProps: "flex" } };
obj = { 73352003: 284172545, 73255168: 0, 73498112: 0, 1408196864: 0, -525931015: 0, backgroundColor: importDefault(dependencyMap[5]).colors.CARD_BACKGROUND_DEFAULT };
obj.expandDescriptionCTA = obj;
obj.collapseDescriptionCTA = { marginTop: 4 };
obj1 = { st: true, backgroundColor: "/assets/design/components/Icon/native/redesign/generated/images", borderWidth: 24, borderColor: 24, gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.nameContainer = obj1;
obj.nameText = { flexShrink: 1 };
const tmp3 = arg1(dependencyMap[3]);
obj.partnerLabelWrapper = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: importDefault(dependencyMap[5]).radii.lg };
let closure_10 = obj1.createStyles(obj);
let closure_11 = { code: "function DetailsHeaderTsx1(){const{height}=this.__closure;return{height:height.get()};}" };
let closure_12 = { code: "function DetailsHeaderTsx2(){const{runOnJS,setShouldLineClamp}=this.__closure;runOnJS(setShouldLineClamp)(true);}" };
const obj2 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_BACKGROUND_ACTIVE, borderRadius: importDefault(dependencyMap[5]).radii.lg };
const memoResult = importAllResult.memo(function DetailsHeader(viewContainerStyle) {
  let application;
  let containerStyle;
  let expandDescriptionCTAStyle;
  let hideName;
  let mainContainerStyle;
  let tmp15;
  ({ application, mainContainerStyle, expandDescriptionCTAStyle, hideName } = viewContainerStyle);
  let importDefault;
  let callback;
  let React;
  let closure_5;
  let closure_6;
  let first2;
  let closure_9;
  let callback2;
  let closure_11;
  let closure_12;
  let first3;
  let closure_14;
  let isScreenLandscape;
  let tmp20;
  function handleApplicationDescriptionPress() {
    if (first) {
      closure_5.current = false;
      if (first1) {
        const obj2 = ref(closure_2[12]);
        const current = closure_10.current;
        const fn = function t() {
          callback(closure_2[6]).runOnJS(closure_12)(true);
        };
        let obj = { runOnJS: ref(closure_2[6]).runOnJS, setShouldLineClamp: _undefined };
        fn.__closure = obj;
        fn.__workletHash = 6050776164847;
        fn.__initData = _undefined;
        const result = store.set(obj2.withTiming(current, ref(closure_2[13]).timingStandard, "respect-motion-settings", fn));
      } else {
        _undefined(false);
        obj = ref(closure_2[12]);
        const result1 = store.set(obj.withTiming(ref.current, ref(closure_2[13]).timingStandard));
      }
      callback2(!first1);
    }
  }
  const tmp = callback2();
  let obj = arg1(closure_2[7]);
  const ref = React.useRef(null);
  const arg1 = ref;
  const tmp4 = callback(React.useState(false), 2);
  let first = tmp4[0];
  importDefault = first;
  closure_2 = tmp4[1];
  const tmp6 = callback(React.useState(false), 2);
  const first1 = tmp6[0];
  callback = first1;
  React = tmp6[1];
  closure_5 = React.useRef(true);
  const isPartnerApplicationResult = obj.isPartnerApplication(application);
  ({ containerHeight: closure_6, containerStyle } = function useContainerAnimation() {
    let obj = ref(closure_2[6]);
    const sharedValue = obj.useSharedValue(null);
    obj = {};
    const fn = function t() {
      return { height: sharedValue.get() };
    };
    fn.__closure = { height: sharedValue };
    fn.__workletHash = 23826674246;
    fn.__initData = closure_11;
    obj.containerStyle = sharedValue(closure_2[6]).useAnimatedStyle(fn);
    obj.containerHeight = sharedValue;
    return obj;
  }());
  let obj1 = arg1(closure_2[7]);
  const sectionName = obj1.getSectionName(application);
  let obj2 = arg1(closure_2[7]);
  const str = obj2.getSectionDescription(application);
  let tmp64Result = null != str && str.trim().length > 0;
  const tmp11 = callback(React.useState(null), 2);
  first2 = tmp11[0];
  closure_9 = tmp11[1];
  let backgroundColor = tmp.expandDescriptionCTA.backgroundColor;
  let tmp13 = null != expandDescriptionCTAStyle && false !== expandDescriptionCTAStyle;
  if (tmp13) {
    tmp13 = "object" === typeof expandDescriptionCTAStyle;
  }
  if (tmp13) {
    tmp13 = "backgroundColor" in expandDescriptionCTAStyle;
  }
  if (tmp13) {
    tmp13 = "string" === typeof expandDescriptionCTAStyle.backgroundColor;
  }
  if (tmp13) {
    backgroundColor = expandDescriptionCTAStyle.backgroundColor;
  }
  let obj3 = arg1(closure_2[8]);
  const items = [obj3.hexOpacityToRgba(backgroundColor, 0), ];
  let obj4 = arg1(closure_2[8]);
  items[1] = obj4.hexOpacityToRgba(backgroundColor, 1);
  callback2 = React.useRef(0);
  closure_11 = React.useRef(0);
  const tmp8 = function useContainerAnimation() {
    let obj = ref(closure_2[6]);
    const sharedValue = obj.useSharedValue(null);
    obj = {};
    const fn = function t() {
      return { height: sharedValue.get() };
    };
    fn.__closure = { height: sharedValue };
    fn.__workletHash = 23826674246;
    fn.__initData = closure_11;
    obj.containerStyle = sharedValue(closure_2[6]).useAnimatedStyle(fn);
    obj.containerHeight = sharedValue;
    return obj;
  }();
  [tmp15, closure_12] = callback(React.useState(false), 2);
  const tmp16 = callback(React.useState(false), 2);
  first3 = tmp16[0];
  closure_14 = tmp16[1];
  const items1 = [str];
  const memo = React.useMemo(() => {
    let result = null;
    if (null != str) {
      result = ref(closure_2[9]).parseBioReactWithCachedAST(str);
      const obj = ref(closure_2[9]);
    }
    return result;
  }, items1);
  let obj5 = arg1(closure_2[10]);
  isScreenLandscape = obj5.useIsScreenLandscape();
  tmp20 = importDefault(closure_2[11])(isScreenLandscape);
  const items2 = [isScreenLandscape, tmp20];
  const effect = React.useEffect(() => {
    if (isScreenLandscape !== tmp20) {
      callback4(false);
      closure_11.current = 0;
      closure_10.current = 0;
    }
  }, items2);
  obj = {};
  const tmp14 = callback(React.useState(false), 2);
  obj = { style: items3 };
  const items3 = [tmp.animatedViewContainer, containerStyle, viewContainerStyle.viewContainerStyle];
  obj1 = {
    style: items4,
    onLayout(nativeEvent) {
      if (!first3) {
        closure_10.current = nativeEvent.nativeEvent.layout.height;
        const result = store.set(closure_10.current);
        let tmp7 = ref.current > 0;
        if (tmp7) {
          tmp7 = closure_10.current > 0;
        }
        if (tmp7) {
          callback4(true);
        }
      }
    }
  };
  const items4 = [tmp.container, mainContainerStyle];
  obj2 = { style: tmp.nameContainer };
  let tmp26 = !hideName;
  if (tmp26) {
    obj3 = { style: tmp.nameText, children: sectionName };
    tmp26 = str(arg1(closure_2[15]).Heading, obj3);
  }
  const items5 = [tmp26, ];
  let tmp30 = null;
  if (isPartnerApplicationResult) {
    obj4 = { style: tmp.partnerLabelWrapper };
    obj5 = {};
    const intl = arg1(closure_2[16]).intl;
    obj5.children = intl.string(arg1(closure_2[16]).t.LO4f0P);
    obj4.children = str(arg1(closure_2[15]).Text, obj5);
    tmp30 = str(closure_5, obj4);
  }
  items5[1] = tmp30;
  obj2.children = items5;
  const items6 = [first2(closure_5, obj2), ];
  let tmp36Result = tmp64Result;
  if (tmp64Result) {
    const obj6 = {};
    let descriptionContainer = !hideName;
    if (descriptionContainer) {
      descriptionContainer = tmp.descriptionContainer;
    }
    obj6.style = descriptionContainer;
    obj6.onPress = handleApplicationDescriptionPress;
    obj6.accessibilityRole = "button";
    const obj7 = { lineClamp: num5, children: memo };
    const items7 = [str(arg1(closure_2[15]).Text, obj7), ];
    let tmp41 = first;
    if (first) {
      let tmp42 = null;
      if (first1) {
        const obj8 = { INTEGRATION_CREATE: -436207324, ConstraintReasonCode: 301991094, style: tmp.collapseDescriptionCTA };
        const intl2 = arg1(closure_2[16]).intl;
        obj8.children = intl2.string(arg1(closure_2[16]).t.D5xGUK);
        tmp42 = str(arg1(closure_2[15]).Text, obj8);
      }
      tmp41 = tmp42;
    }
    items7[1] = tmp41;
    obj6.children = items7;
    tmp36Result = first2(closure_6, obj6);
    const tmp36 = first2;
    const tmp37 = closure_6;
    const tmp38 = str;
  }
  items6[1] = tmp36Result;
  obj1.children = items6;
  const items8 = [first2(closure_5, obj1), ];
  if (first) {
    let tmp47Result = null;
    if (!first1) {
      const obj9 = {};
      const items9 = [tmp.expandDescriptionCTA, expandDescriptionCTAStyle];
      obj9.style = items9;
      obj9.onPress = handleApplicationDescriptionPress;
      obj9.accessibilityRole = "button";
      const obj10 = { start: arg1(closure_2[18]).HorizontalGradient.START, end: arg1(closure_2[18]).HorizontalGradient.END, colors: items };
      const items10 = [tmp.expandDescriptionCTAGradient, ];
      const obj11 = {};
      let num9 = 0;
      if (null != first2) {
        num9 = first2 - 5;
      }
      obj11.right = num9;
      items10[1] = obj11;
      obj10.style = items10;
      const items11 = [str(importDefault(closure_2[17]), obj10), ];
      const obj12 = {
        onLayout(nativeEvent) {
              if (null == first2) {
                callback3(nativeEvent.nativeEvent.layout.width);
              }
            }
      };
      const intl3 = arg1(closure_2[16]).intl;
      const items12 = [false, intl3.string(arg1(closure_2[16]).t.OBCR+p)];
      obj12.children = items12;
      items11[1] = first2(arg1(closure_2[15]).Text, obj12);
      obj9.children = items11;
      tmp47Result = first2(closure_6, obj9);
      const tmp47 = first2;
      const tmp48 = closure_6;
      const tmp49 = str;
      const tmp52 = importDefault(closure_2[17]);
    }
    first = tmp47Result;
  }
  items8[1] = first;
  obj.children = items8;
  const items13 = [first2(importDefault(closure_2[6]).View, obj), ];
  let tmp58Result = !first3;
  if (tmp58Result) {
    const obj13 = {};
    const items14 = [mainContainerStyle, tmp.measuringContainer, {}];
    obj13.style = items14;
    obj13.onLayout = function onLayout(nativeEvent) {
      ref.current = nativeEvent.nativeEvent.layout.height;
      let tmp = ref.current > 0;
      if (tmp) {
        tmp = closure_10.current > 0;
      }
      if (tmp) {
        callback4(true);
      }
    };
    let tmp60 = !hideName;
    if (tmp60) {
      const obj14 = { INTEGRATION_CREATE: 58, ConstraintReasonCode: 85, children: sectionName };
      tmp60 = str(arg1(closure_2[15]).Heading, obj14);
    }
    const items15 = [tmp60, ];
    if (tmp64Result) {
      const obj15 = {};
      let descriptionContainer2 = !hideName;
      if (descriptionContainer2) {
        descriptionContainer2 = tmp.descriptionContainer;
      }
      obj15.style = descriptionContainer2;
      const obj16 = {
        onTextLayout(nativeEvent) {
              if (null == ref.current) {
                ref.current = length;
              }
              if (nativeEvent.nativeEvent.lines.length > 3) {
                _undefined(true);
                callback(true);
              }
            },
        children: memo
      };
      const items16 = [str(arg1(closure_2[15]).Text, obj16), ];
      const obj17 = { INTEGRATION_CREATE: -436207324, ConstraintReasonCode: 301991094, style: tmp.collapseDescriptionCTA };
      const intl4 = arg1(closure_2[16]).intl;
      obj17.children = intl4.string(arg1(closure_2[16]).t.D5xGUK);
      items16[1] = str(arg1(closure_2[15]).Text, obj17);
      obj15.children = items16;
      tmp64Result = first2(closure_5, obj15);
      const tmp64 = first2;
      const tmp65 = closure_5;
    }
    items15[1] = tmp64Result;
    obj13.children = items15;
    tmp58Result = first2(closure_5, obj13);
    const tmp58 = first2;
    const tmp59 = closure_5;
  }
  items13[1] = tmp58Result;
  obj.children = items13;
  return first2(closure_9, obj);
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/DetailsHeader.tsx");

export default memoResult;
