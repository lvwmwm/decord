// Module ID: 10616
// Function ID: 82808
// Name: StreamQualityLiveIndicator
// Dependencies: [31, 27, 653, 1851, 4191, 33, 4130, 689, 10559, 9419, 5462, 3991, 4131, 1273, 8895, 10617, 675, 8183, 8059, 3776, 4660, 5085, 8057, 2]
// Exports: default

// Module 10616 (StreamQualityLiveIndicator)
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import GuildFeatures from "GuildFeatures";
import { ResolutionTypes } from "DesktopSources";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ PremiumTypes: closure_6, PremiumUpsellTypes: closure_7 } = GuildFeatures);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { liveIndicator: { flexDirection: "row", alignItems: "center", height: 18 } };
_createForOfIteratorHelperLoose = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.none, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.none, height: 18, textAlign: "center" };
_createForOfIteratorHelperLoose.liveTag = _createForOfIteratorHelperLoose;
let obj1 = { borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_800, opacity: 0.8, paddingLeft: 8, paddingRight: 4, flexDirection: "row", alignItems: "center", height: 18 };
_createForOfIteratorHelperLoose.qualityTag = obj1;
_createForOfIteratorHelperLoose.qualityTagText = { color: "#fff", textAlign: "center", fontWeight: "700" };
_createForOfIteratorHelperLoose.reducedQualityTagText = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_300 };
_createForOfIteratorHelperLoose.nitroWheel = { width: 20, marginLeft: -4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { code: "function StreamQualityLiveIndicatorTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
let obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_300 };
const result = require("ME").fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default function StreamQualityLiveIndicator(participant) {
  participant = participant.participant;
  const style = participant.style;
  let _require;
  let importDefault;
  let c6;
  const tmp2 = _createForOfIteratorHelperLoose();
  reveal = _location.useContext(_require(reveal[8]).RevealContext).reveal;
  let obj = _require(reveal[9]);
  _location = obj.useAnalyticsContext().location;
  const analyticsLocations = importDefault(reveal[10])().analyticsLocations;
  let closure_5 = _location.useRef(false);
  let obj1 = _require(reveal[11]);
  const fn = function f() {
    let obj = {};
    let num = 0;
    if (reveal) {
      num = 1;
    }
    obj = { easing: _undefined(reveal[13]).STANDARD_EASING, duration: 250 };
    obj.opacity = _undefined(reveal[12]).withTiming(num, obj);
    return obj;
  };
  obj = { withTiming: _require(reveal[12]).withTiming, reveal, STANDARD_EASING: _require(reveal[13]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 14676679064575;
  fn.__initData = closure_12;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj3 = _require(reveal[14]);
  const maxQuality = obj3.useMaxQuality(participant);
  let obj4 = _require(reveal[14]);
  const isPremiumFPSResult = obj4.isPremiumFPS(maxQuality);
  _require = isPremiumFPSResult;
  let obj5 = _require(reveal[14]);
  const isPremiumResolutionResult = obj5.isPremiumResolution(maxQuality);
  importDefault = isPremiumResolutionResult;
  while (true) {
    let tmp10 = tmp7;
    let tmp11 = tmp7;
    if (tmp7) {
      break;
    } else {
      tmp11 = tmp9;
      break;
    }
    let tmp12 = tmp11;
    c6 = tmp11;
    let tmp14 = _location;
    let items = [analyticsLocations, tmp11, tmp7, tmp9];
    let tmp13 = tmp11;
    let effect = _location.useEffect(() => {
      if (tmp) {
        let obj = _undefined2(reveal[16]);
        obj = { type: outer1_7.STREAM_QUALITY_INDICATOR, has_premium_stream_fps: c0, has_premium_stream_resolution: _undefined2, location_stack: analyticsLocations };
        obj.track(ref.PREMIUM_UPSELL_VIEWED, obj);
        ref.current = true;
      }
    }, items);
    let tmp16 = _location;
    let items1 = [_location, analyticsLocations];
    let tmp18 = importDefault;
    let tmp19 = reveal;
    let num = 19;
    let callback = _location.useCallback(() => {
      const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: _undefined(reveal[18]).PremiumFeatureCardOrder.TIER_0_LEADING };
      _undefined2(reveal[17])(obj);
    }, items1);
    let obj7 = importDefault(reveal[19]);
    let tmp20 = participant;
    let tmp21 = c6;
    let tmp22 = !obj7.isPremium(tmp.user, c6.TIER_1);
    let tmp23 = tmp22;
    if (tmp22) {
      let tmp24 = importDefault;
      let tmp25 = reveal;
      let obj8 = importDefault(reveal[19]);
      let tmp26 = participant;
      tmp23 = !obj8.canStreamQuality(importDefault(reveal[19]).StreamQuality.MID, tmp.user);
    }
    let tmp27 = tmp23;
    let tmp28 = importDefault;
    let tmp29 = reveal;
    let obj9 = importDefault(reveal[19]);
    let tmp30 = c6;
    let isPremiumExactlyResult = obj9.isPremiumExactly(participant.user, c6.TIER_1);
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
      let tmp39 = reveal;
      let obj10 = importDefault(reveal[19]);
      tmp37 = !obj10.canStreamQuality(importDefault(reveal[19]).StreamQuality.HIGH);
    }
    let tmp40 = tmp37;
    let tmp41 = maxQuality;
    let tmp43Result = null;
    if (null != maxQuality) {
      let tmp44 = importDefault;
      let tmp45 = reveal;
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
      let tmp49 = _require;
      let tmp50 = reveal;
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
      let tmp52 = analyticsLocations;
      if (tmp12) {
        let tmp54 = callback;
        let tmp55 = importDefault;
        let tmp56 = reveal;
        let num3 = 21;
        obj3 = {};
        let num4 = 22;
        let tmp57 = importDefault(reveal[21]);
        obj3.source = importDefault(reveal[22]);
        let tmp58 = tmp2;
        obj3.style = tmp2.nitroWheel;
        let str4 = "contain";
        obj3.resizeMode = "contain";
        tmp53 = callback(tmp57, obj3);
      }
      let items4 = [tmp53, ];
      let tmp60 = _require;
      let tmp61 = reveal;
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
      let tmp65 = _require;
      let tmp66 = reveal;
      let obj16 = _require(reveal[14]);
      let resolutionText = obj16.getResolutionText(maxQuality.maxResolution);
      let obj17 = _require(reveal[14]);
      let tmp68 = globalThis;
      let _HermesInternal = HermesInternal;
      let str5 = "";
      let str6 = " ";
      obj4.children = "" + resolutionText + " " + obj17.getFPSText(maxQuality.maxFrameRate);
      items4[1] = tmp59(_require(reveal[13]).LegacyText, obj4);
      obj2.children = items4;
      let items6 = [tmp48(tmp52, obj2), ];
      let tmp69 = callback;
      obj5 = { style: tmp2.liveTag };
      items6[1] = callback(_require(reveal[13]).LiveTag, obj5);
      obj1.children = items6;
      obj.children = tmp48(_require(reveal[20]).PressableOpacity, obj1);
      tmp43Result = tmp43(importDefault(reveal[11]).View, obj);
    }
    return tmp43Result;
  }
};
