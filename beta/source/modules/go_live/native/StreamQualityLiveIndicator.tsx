// Module ID: 8894
// Function ID: 8895
// Name: StreamQualityLiveIndicator
// Dependencies: [19, 17, 1074, 1374, 4861, 21, 4836, 576, 8837, 8895, 6583, 4566, 4837, 1177, 8896, 8897, 1241, 8695, 8663, 4488, 5435, 5899, 8661, 2]
// Exports: default

// Module 8894 (StreamQualityLiveIndicator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import timing from "timing" /* 4837 */;
import Constants2 from "Constants" /* 4861 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let TIER_1, _require, importDefault;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
const native = tmp(1177);
let View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ PremiumTypes: metroRequire, PremiumUpsellTypes: metroImportDefault } = PremiumConstants);
const ResolutionTypes = Constants2.ResolutionTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { liveIndicator: { flexDirection: "row", alignItems: "center", height: 18 }, liveTag: obj2, qualityTag: obj3, qualityTagText: { color: "#fff", textAlign: "center", fontWeight: "700" }, reducedQualityTagText: obj4, nitroWheel: { width: 20, marginLeft: -4 } };
obj2 = { borderBottomLeftRadius: nativeDefault.radii.none, borderTopLeftRadius: nativeDefault.radii.none, height: 18, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800, opacity: 0.8, paddingLeft: 8, paddingRight: 4, flexDirection: "row", alignItems: "center", height: 18 };
obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_300 };
let closure_11 = createStyles(obj);
const __initData = { code: "function StreamQualityLiveIndicatorTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const result = size.fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default function StreamQualityLiveIndicator(arg0) {
  let PressableOpacity;
  let closure_6;
  let flag;
  let flag2;
  let has_premium_stream_fps;
  let has_premium_stream_resolution;
  let items2;
  let items3;
  let items4;
  let items6;
  let obj7;
  let participant;
  let resolutionText;
  let style;
  let tmp2Result6;
  ({ participant, style } = arg0);
  _require = undefined;
  importDefault = undefined;
  let reveal;
  let _location;
  TIER_1 = undefined;
  let tmp = closure_11();
  let obj = _location;
  let tmp2 = _require;
  const tmp3 = reveal;
  reveal = _location.useContext(require("RevealProvider").RevealContext).reveal;
  let obj2 = require("analytics");
  _location = obj2.useAnalyticsContext().location;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const ref = _location.useRef(false);
  const fn = function f() {
    let obj2;
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (reveal) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, obj2) };
    obj2 = { easing: native.STANDARD_EASING, duration: 250 };
    return obj;
  };
  const obj3 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING };
  fn.__workletHash = 14676679064575;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, reveal, STANDARD_EASING: require("native").STANDARD_EASING });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj5 = require("StreamQualityUtils");
  const maxQuality = obj5.useMaxQuality(participant);
  const tmp7 = null != require("useStreamError")(participant);
  try {
    const tmp2Result = tmp2(tmp3[14]);
    const isPremiumFPSResult = tmp2Result.isPremiumFPS(maxQuality);
    flag = isPremiumFPSResult;
    _require = isPremiumFPSResult;
  } catch (err) {
    flag = false;
    _require = false;
  }
  try {
    const tmp2Result4 = tmp2(tmp3[14]);
    const isPremiumResolutionResult = tmp2Result4.isPremiumResolution(maxQuality);
    flag2 = isPremiumResolutionResult;
    importDefault = isPremiumResolutionResult;
  } catch (err) {
    flag2 = false;
    importDefault = false;
  }
  let tmp20Result = flag || flag2;
  TIER_1 = tmp20Result;
  const items = [analyticsLocations, tmp20Result, flag, flag2];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    const tmp = ref;
    if (!current) {
      tmp2 = closure_6;
    }
    if (tmp2) {
      const obj2 = { type: metroImportDefault.STREAM_QUALITY_INDICATOR, has_premium_stream_fps, has_premium_stream_resolution, location_stack: analyticsLocations };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
      tmp.current = true;
    }
  }, items);
  const items1 = [_location, analyticsLocations];
  const callback = obj.useCallback(() => {
    const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items1);
  const tmp4Result = require("PremiumUtils");
  let tmp15 = !tmp4Result.isPremium(participant.user, TIER_1.TIER_1);
  tmp4Result.isPremium(participant.user, TIER_1.TIER_1);
  const tmp13 = TIER_1;
  if (tmp15) {
    const tmp4Result5 = require("PremiumUtils");
    tmp15 = !tmp4Result5.canStreamQuality(tmp4(tmp3[19]).StreamQuality.MID, participant.user);
  }
  const tmp4Result6 = require("PremiumUtils");
  let isPremiumExactlyResult = tmp4Result6.isPremiumExactly(participant.user, tmp13.TIER_1);
  if (isPremiumExactlyResult) {
    let type;
    if (maxQuality != null) {
      type = maxQuality.maxResolution.type;
    }
    isPremiumExactlyResult = type === ResolutionTypes.SOURCE;
  }
  if (isPremiumExactlyResult) {
    const tmp4Result7 = require("PremiumUtils");
    isPremiumExactlyResult = !tmp4Result7.canStreamQuality(tmp4(tmp3[19]).StreamQuality.HIGH);
  }
  let tmp20Result2 = null;
  if (null != maxQuality) {
    let str2 = "none";
    View = tmp4(tmp3[11]).View;
    if (tmp20Result) {
      if (tmp15) {
        str2 = "auto";
      } else {
        str2 = "none";
      }
    }
    const obj6 = { pointerEvents: str2, style: items2, children: closure_10(PressableOpacity, obj7) };
    items2 = [style, animatedStyle];
    obj7 = { accessibilityRole: "button", style: items3, onPress: callback, children: items6 };
    items3 = [tmp.liveIndicator, style];
    const obj8 = { style: tmp.qualityTag, children: items4 };
    PressableOpacity = tmp2(tmp3[20]).PressableOpacity;
    const tmp22 = analyticsLocations;
    if (tmp20Result) {
      const obj9 = { source: require("AssetRegistry"), style: tmp.nitroWheel, resizeMode: "contain" };
      const tmp4Result8 = require("FastImage");
      tmp20Result = tmp20(tmp4Result8, obj9);
    }
    items4 = [tmp20Result, ];
    const items5 = [tmp.qualityTagText, ];
    let prop = null;
    const LegacyText = tmp2(tmp3[13]).LegacyText;
    if (tmp7) {
      prop = tmp.reducedQualityTagText;
    }
    items5[1] = prop;
    const obj10 = { style: items5, children: "" + resolutionText + " " + tmp2Result6.getFPSText(maxQuality.maxFrameRate) };
    const tmp2Result5 = tmp2(tmp3[14]);
    resolutionText = tmp2Result5.getResolutionText(maxQuality.maxResolution);
    const _HermesInternal = HermesInternal;
    tmp2Result6 = tmp2(tmp3[14]);
    items4[1] = closure_9(LegacyText, obj10);
    items6 = [closure_10(tmp22, obj8), ];
    const obj11 = { style: tmp.liveTag };
    items6[1] = closure_9(tmp2(tmp3[13]).LiveTag, obj11);
    tmp20Result2 = tmp20(View, obj6);
  }
  return tmp20Result2;
};
