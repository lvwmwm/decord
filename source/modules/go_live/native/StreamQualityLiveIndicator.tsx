// Module ID: 10576
// Function ID: 82542
// Name: StreamQualityLiveIndicator
// Dependencies: []
// Exports: default

// Module 10576 (StreamQualityLiveIndicator)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
({ PremiumTypes: closure_7, PremiumUpsellTypes: closure_8 } = arg1(dependencyMap[4]));
const ResolutionTypes = arg1(dependencyMap[5]).ResolutionTypes;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { liveIndicator: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null } };
obj = { borderBottomLeftRadius: importDefault(dependencyMap[8]).radii.none, borderTopLeftRadius: importDefault(dependencyMap[8]).radii.none, height: 18, textAlign: "center" };
obj.liveTag = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.qualityTag = { borderBottomLeftRadius: importDefault(dependencyMap[8]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[8]).radii.sm, backgroundColor: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_800 };
obj.qualityTagText = {};
const obj1 = { borderBottomLeftRadius: importDefault(dependencyMap[8]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[8]).radii.sm, backgroundColor: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_800 };
obj.reducedQualityTagText = { color: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_300 };
obj.nitroWheel = {};
let closure_12 = obj.createStyles(obj);
let closure_13 = { code: "function StreamQualityLiveIndicatorTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const obj2 = { color: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_300 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default function StreamQualityLiveIndicator(participant) {
  participant = participant.participant;
  const style = participant.style;
  let arg1;
  let importDefault;
  let tmp13;
  const tmp2 = callback3();
  const reveal = React.useContext(arg1(dependencyMap[9]).RevealContext).reveal;
  const dependencyMap = reveal;
  let obj = arg1(dependencyMap[10]);
  const _location = obj.useAnalyticsContext().location;
  let callback = _location;
  const analyticsLocations = importDefault(dependencyMap[11])().analyticsLocations;
  const React = analyticsLocations;
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  const View = first;
  let closure_6 = tmp3[1];
  let obj1 = arg1(dependencyMap[12]);
  const fn = function f() {
    let obj = {};
    let num = 0;
    if (reveal) {
      num = 1;
    }
    obj = { easing: isPremiumFPSResult(reveal[14]).STANDARD_EASING, duration: 250 };
    obj.opacity = isPremiumFPSResult(reveal[13]).withTiming(num, obj);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[13]).withTiming, reveal, STANDARD_EASING: arg1(dependencyMap[14]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 14676679064575;
  fn.__initData = closure_13;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj3 = arg1(dependencyMap[15]);
  const maxQuality = obj3.useMaxQuality(participant);
  let obj4 = arg1(dependencyMap[15]);
  const isPremiumFPSResult = obj4.isPremiumFPS(maxQuality);
  arg1 = isPremiumFPSResult;
  let obj5 = arg1(dependencyMap[15]);
  const isPremiumResolutionResult = obj5.isPremiumResolution(maxQuality);
  importDefault = isPremiumResolutionResult;
  while (true) {
    let tmp12 = tmp9;
    tmp13 = tmp9;
    if (tmp9) {
      break;
    } else {
      tmp13 = tmp11;
      // break
    }
    let tmp14 = tmp13;
    let tmp16 = React;
    let items = [analyticsLocations, first, tmp13, tmp9, tmp11];
    let tmp15 = tmp13;
    let effect = React.useEffect(() => {
      if (tmp) {
        let obj = isPremiumResolutionResult(reveal[17]);
        obj = { type: constants.STREAM_QUALITY_INDICATOR, has_premium_stream_fps: isPremiumFPSResult, has_premium_stream_resolution: isPremiumResolutionResult, location_stack: analyticsLocations };
        obj.track(lib.PREMIUM_UPSELL_VIEWED, obj);
        lib(true);
      }
    }, items);
    let tmp18 = _location;
    let items1 = [_location, analyticsLocations];
    let tmp20 = importDefault;
    let tmp21 = dependencyMap;
    let num = 22;
    callback = React.useCallback(() => {
      let obj = isPremiumResolutionResult(reveal[18]);
      obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: isPremiumFPSResult(reveal[21]).PremiumFeatureCardOrder.TIER_0_LEADING };
      obj.pushLazy(isPremiumFPSResult(reveal[20])(reveal[19], reveal.paths), obj);
    }, items1);
    let obj7 = importDefault(dependencyMap[22]);
    let tmp22 = participant;
    let tmp23 = tmp13;
    let tmp24 = !obj7.isPremium(tmp.user, tmp13.TIER_1);
    let tmp25 = tmp24;
    if (tmp24) {
      let tmp26 = importDefault;
      let tmp27 = dependencyMap;
      let obj8 = importDefault(dependencyMap[22]);
      let tmp28 = participant;
      tmp25 = !obj8.canStreamQuality(importDefault(dependencyMap[22]).StreamQuality.MID, tmp.user);
    }
    let tmp29 = tmp25;
    let tmp30 = importDefault;
    let tmp31 = dependencyMap;
    let obj9 = importDefault(dependencyMap[22]);
    let tmp32 = tmp13;
    let isPremiumExactlyResult = obj9.isPremiumExactly(participant.user, tmp13.TIER_1);
    let tmp34 = isPremiumExactlyResult;
    if (isPremiumExactlyResult) {
      let tmp35 = maxQuality;
      let type;
      if (null != maxQuality) {
        let tmp37 = maxQuality;
        type = maxQuality.maxResolution.type;
      }
      let tmp38 = ResolutionTypes;
      tmp34 = type === ResolutionTypes.SOURCE;
    }
    let tmp39 = tmp34;
    if (tmp34) {
      let tmp40 = importDefault;
      let tmp41 = dependencyMap;
      let obj10 = importDefault(dependencyMap[22]);
      tmp39 = !obj10.canStreamQuality(importDefault(dependencyMap[22]).StreamQuality.HIGH);
    }
    let tmp42 = tmp39;
    let tmp43 = maxQuality;
    let tmp45Result = null;
    if (null != maxQuality) {
      let tmp46 = importDefault;
      let tmp47 = dependencyMap;
      let tmp45 = callback2;
      obj = {};
      let tmp48 = tmp14;
      let str = "none";
      let str2 = "none";
      if (tmp15) {
        if (tmp25) {
          str2 = "auto";
        } else {
          str2 = "none";
        }
      }
      obj.pointerEvents = str2;
      let tmp49 = style;
      let items2 = [style, animatedStyle];
      obj.style = items2;
      let tmp50 = closure_11;
      let tmp51 = arg1;
      let tmp52 = dependencyMap;
      let num2 = 23;
      obj1 = {};
      let str3 = "button";
      obj1.accessibilityRole = "button";
      let tmp53 = tmp2;
      let items3 = [tmp2.liveIndicator, style];
      obj1.style = items3;
      obj1.onPress = callback;
      let obj2 = { style: tmp2.qualityTag };
      let tmp55 = tmp14;
      let tmp54 = View;
      if (tmp14) {
        let tmp56 = callback2;
        let tmp57 = importDefault;
        let tmp58 = dependencyMap;
        let num3 = 24;
        obj3 = {};
        let num4 = 25;
        let tmp59 = importDefault(dependencyMap[24]);
        obj3.source = importDefault(dependencyMap[25]);
        let tmp60 = tmp2;
        obj3.style = tmp2.nitroWheel;
        let str4 = "contain";
        obj3.resizeMode = "contain";
        tmp55 = callback2(tmp59, obj3);
      }
      let items4 = [tmp55, ];
      let tmp62 = arg1;
      let tmp63 = dependencyMap;
      let tmp61 = callback2;
      obj4 = {};
      let tmp64 = tmp2;
      let items5 = [tmp2.qualityTagText, ];
      let prop = null;
      if (tmp7) {
        let tmp66 = tmp2;
        prop = tmp2.reducedQualityTagText;
      }
      items5[1] = prop;
      obj4.style = items5;
      let tmp67 = arg1;
      let tmp68 = dependencyMap;
      let obj16 = arg1(dependencyMap[15]);
      let resolutionText = obj16.getResolutionText(maxQuality.maxResolution);
      let obj17 = arg1(dependencyMap[15]);
      let tmp70 = globalThis;
      let _HermesInternal = HermesInternal;
      let str5 = "";
      let str6 = " ";
      obj4.children = "" + resolutionText + " " + obj17.getFPSText(maxQuality.maxFrameRate);
      items4[1] = tmp61(arg1(dependencyMap[14]).LegacyText, obj4);
      obj2.children = items4;
      let items6 = [tmp50(tmp54, obj2), ];
      let tmp71 = callback2;
      obj5 = { style: tmp2.liveTag };
      items6[1] = callback2(arg1(dependencyMap[14]).LiveTag, obj5);
      obj1.children = items6;
      obj.children = tmp50(arg1(dependencyMap[23]).PressableOpacity, obj1);
      tmp45Result = tmp45(importDefault(dependencyMap[12]).View, obj);
    }
    return tmp45Result;
  }
};
