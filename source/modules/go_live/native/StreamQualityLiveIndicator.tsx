// Module ID: 10577
// Function ID: 82566
// Name: StreamQualityLiveIndicator
// Dependencies: []
// Exports: default

// Module 10577 (StreamQualityLiveIndicator)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
({ PremiumTypes: closure_6, PremiumUpsellTypes: closure_7 } = arg1(dependencyMap[3]));
const ResolutionTypes = arg1(dependencyMap[4]).ResolutionTypes;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { liveIndicator: { ellipsizeMode: null, lineClamp: null, variant: null } };
obj = { borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.none, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.none, height: 18, textAlign: "center" };
obj.liveTag = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.qualityTag = { borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.sm, backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_800 };
obj.qualityTagText = { minWidth: false, maxWidth: false, flexShrink: false };
const obj1 = { borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.sm, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.sm, backgroundColor: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_800 };
obj.reducedQualityTagText = { color: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_300 };
obj.nitroWheel = { marginHorizontal: null, borderRadius: null };
let closure_11 = obj.createStyles(obj);
let closure_12 = { code: "function StreamQualityLiveIndicatorTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const obj2 = { color: importDefault(dependencyMap[7]).unsafe_rawColors.PRIMARY_300 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default function StreamQualityLiveIndicator(participant) {
  participant = participant.participant;
  const style = participant.style;
  let arg1;
  let importDefault;
  let tmp11;
  const tmp2 = callback2();
  const reveal = React.useContext(arg1(dependencyMap[8]).RevealContext).reveal;
  const dependencyMap = reveal;
  let obj = arg1(dependencyMap[9]);
  const _location = obj.useAnalyticsContext().location;
  const React = _location;
  const analyticsLocations = importDefault(dependencyMap[10])().analyticsLocations;
  const View = analyticsLocations;
  let closure_5 = React.useRef(false);
  let obj1 = arg1(dependencyMap[11]);
  const fn = function f() {
    let obj = {};
    let num = 0;
    if (reveal) {
      num = 1;
    }
    obj = { easing: isPremiumFPSResult(reveal[13]).STANDARD_EASING, duration: 250 };
    obj.opacity = isPremiumFPSResult(reveal[12]).withTiming(num, obj);
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[12]).withTiming, reveal, STANDARD_EASING: arg1(dependencyMap[13]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 14676679064575;
  fn.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj3 = arg1(dependencyMap[14]);
  const maxQuality = obj3.useMaxQuality(participant);
  let obj4 = arg1(dependencyMap[14]);
  const isPremiumFPSResult = obj4.isPremiumFPS(maxQuality);
  arg1 = isPremiumFPSResult;
  let obj5 = arg1(dependencyMap[14]);
  const isPremiumResolutionResult = obj5.isPremiumResolution(maxQuality);
  importDefault = isPremiumResolutionResult;
  while (true) {
    let tmp10 = tmp7;
    tmp11 = tmp7;
    if (tmp7) {
      break;
    } else {
      tmp11 = tmp9;
      // break
    }
    let tmp12 = tmp11;
    let tmp14 = React;
    let items = [analyticsLocations, tmp11, tmp7, tmp9];
    let tmp13 = tmp11;
    let effect = React.useEffect(() => {
      if (tmp) {
        let obj = isPremiumResolutionResult(reveal[16]);
        obj = { type: constants.STREAM_QUALITY_INDICATOR, has_premium_stream_fps: isPremiumFPSResult, has_premium_stream_resolution: isPremiumResolutionResult, location_stack: analyticsLocations };
        obj.track(ref.PREMIUM_UPSELL_VIEWED, obj);
        ref.current = true;
      }
    }, items);
    let tmp16 = _location;
    let items1 = [_location, analyticsLocations];
    let tmp18 = importDefault;
    let tmp19 = dependencyMap;
    let num = 19;
    let callback = React.useCallback(() => {
      const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: isPremiumFPSResult(reveal[18]).PremiumFeatureCardOrder.TIER_0_LEADING };
      isPremiumResolutionResult(reveal[17])(obj);
    }, items1);
    let obj7 = importDefault(dependencyMap[19]);
    let tmp20 = participant;
    let tmp21 = tmp11;
    let tmp22 = !obj7.isPremium(tmp.user, tmp11.TIER_1);
    let tmp23 = tmp22;
    if (tmp22) {
      let tmp24 = importDefault;
      let tmp25 = dependencyMap;
      let obj8 = importDefault(dependencyMap[19]);
      let tmp26 = participant;
      tmp23 = !obj8.canStreamQuality(importDefault(dependencyMap[19]).StreamQuality.MID, tmp.user);
    }
    let tmp27 = tmp23;
    let tmp28 = importDefault;
    let tmp29 = dependencyMap;
    let obj9 = importDefault(dependencyMap[19]);
    let tmp30 = tmp11;
    let isPremiumExactlyResult = obj9.isPremiumExactly(participant.user, tmp11.TIER_1);
    let tmp32 = isPremiumExactlyResult;
    if (isPremiumExactlyResult) {
      let tmp33 = maxQuality;
      let type;
      if (null != maxQuality) {
        let tmp35 = maxQuality;
        type = maxQuality.maxResolution.type;
      }
      let tmp36 = ResolutionTypes;
      tmp32 = type === ResolutionTypes.SOURCE;
    }
    let tmp37 = tmp32;
    if (tmp32) {
      let tmp38 = importDefault;
      let tmp39 = dependencyMap;
      let obj10 = importDefault(dependencyMap[19]);
      tmp37 = !obj10.canStreamQuality(importDefault(dependencyMap[19]).StreamQuality.HIGH);
    }
    let tmp40 = tmp37;
    let tmp41 = maxQuality;
    let tmp43Result = null;
    if (null != maxQuality) {
      let tmp44 = importDefault;
      let tmp45 = dependencyMap;
      let tmp43 = callback;
      obj = {};
      let tmp46 = tmp12;
      let str = "none";
      let str2 = "none";
      if (tmp13) {
        if (tmp23) {
          str2 = "auto";
        } else {
          str2 = "none";
        }
      }
      obj.pointerEvents = str2;
      let tmp47 = style;
      let items2 = [style, animatedStyle];
      obj.style = items2;
      let tmp48 = closure_10;
      let tmp49 = arg1;
      let tmp50 = dependencyMap;
      let num2 = 20;
      obj1 = {};
      let str3 = "button";
      obj1.accessibilityRole = "button";
      let tmp51 = tmp2;
      let items3 = [tmp2.liveIndicator, style];
      obj1.style = items3;
      obj1.onPress = callback;
      let obj2 = { style: tmp2.qualityTag };
      let tmp53 = tmp12;
      let tmp52 = View;
      if (tmp12) {
        let tmp54 = callback;
        let tmp55 = importDefault;
        let tmp56 = dependencyMap;
        let num3 = 21;
        obj3 = {};
        let num4 = 22;
        let tmp57 = importDefault(dependencyMap[21]);
        obj3.source = importDefault(dependencyMap[22]);
        let tmp58 = tmp2;
        obj3.style = tmp2.nitroWheel;
        let str4 = "contain";
        obj3.resizeMode = "contain";
        tmp53 = callback(tmp57, obj3);
      }
      let items4 = [tmp53, ];
      let tmp60 = arg1;
      let tmp61 = dependencyMap;
      let tmp59 = callback;
      obj4 = {};
      let tmp62 = tmp2;
      let items5 = [tmp2.qualityTagText, ];
      let prop = null;
      if (tmp5) {
        let tmp64 = tmp2;
        prop = tmp2.reducedQualityTagText;
      }
      items5[1] = prop;
      obj4.style = items5;
      let tmp65 = arg1;
      let tmp66 = dependencyMap;
      let obj16 = arg1(dependencyMap[14]);
      let resolutionText = obj16.getResolutionText(maxQuality.maxResolution);
      let obj17 = arg1(dependencyMap[14]);
      let tmp68 = globalThis;
      let _HermesInternal = HermesInternal;
      let str5 = "";
      let str6 = " ";
      obj4.children = "" + resolutionText + " " + obj17.getFPSText(maxQuality.maxFrameRate);
      items4[1] = tmp59(arg1(dependencyMap[13]).LegacyText, obj4);
      obj2.children = items4;
      let items6 = [tmp48(tmp52, obj2), ];
      let tmp69 = callback;
      obj5 = { style: tmp2.liveTag };
      items6[1] = callback(arg1(dependencyMap[13]).LiveTag, obj5);
      obj1.children = items6;
      obj.children = tmp48(arg1(dependencyMap[20]).PressableOpacity, obj1);
      tmp43Result = tmp43(importDefault(dependencyMap[11]).View, obj);
    }
    return tmp43Result;
  }
};
