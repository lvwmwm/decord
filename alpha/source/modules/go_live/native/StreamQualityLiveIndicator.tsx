// Module ID: 12715
// Function ID: 12716
// Name: StreamQualityLiveIndicator
// Dependencies: [19, 17, 1072, 1387, 6012, 21, 5243, 575, 12625, 11236, 7852, 1652, 5485, 1187, 6189, 12716, 1252, 9513, 10891, 2171, 7364, 5957, 11153, 2]
// Exports: default

// Module 12715 (StreamQualityLiveIndicator)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Constants2 from "Constants" /* 6012 */;
import openPremiumModalDefault from "openPremiumModal" /* 9513 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10891 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, num, obj1;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
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
let closure_12 = { code: "(function StreamQualityLiveIndicatorTsx1(){let[withTiming,reveal,STANDARD_EASING]=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};})" };
const result = size.fileFinishedImporting("modules/go_live/native/StreamQualityLiveIndicator.tsx");

export default function StreamQualityLiveIndicator(arg0) {
  let PressableOpacity;
  let easing;
  let flag;
  let flag2;
  let has_premium_stream_fps;
  let has_premium_stream_resolution;
  let items3;
  let items4;
  let items5;
  let items7;
  let obj5;
  let participant;
  let resolutionText;
  let style;
  let tmp2Result6;
  function StreamQualityLiveIndicatorTsx1Factory(items) {
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    [tmp, tmp2, tmp3, tmp4] = items;
    class StreamQualityLiveIndicatorTsx1 {
      constructor() {
        num = 0;
        tmp = closure_0;
        if (closure_1) {
          num = 1;
        }
        obj = { opacity: null };
        obj1 = { easing: closure_2, duration: 250 };
        obj.opacity = tmp(num, obj1);
        return obj;
      }
    }
    items = [tmp2, tmp3, tmp4];
    StreamQualityLiveIndicatorTsx1.__closure = items;
    StreamQualityLiveIndicatorTsx1.__workletHash = 10822735912166;
    StreamQualityLiveIndicatorTsx1.__initData = tmp;
    return StreamQualityLiveIndicatorTsx1;
  }
  ({ participant, style } = arg0);
  _require = undefined;
  importDefault = undefined;
  let _location;
  let analyticsLocations;
  let closure_5;
  let tmp = closure_11();
  let obj = analyticsLocations;
  let tmp2 = _require;
  const tmp3 = _location;
  const reveal = analyticsLocations.useContext(require("RevealProvider").RevealContext).reveal;
  let obj2 = require("analytics");
  _location = obj2.useAnalyticsContext().location;
  const tmp4 = importDefault;
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const ref = analyticsLocations.useRef(false);
  let items = [closure_12, , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  const tmp5 = require("module_1652");
  items[1] = require("timing/timing").withTiming;
  items[2] = reveal;
  items[3] = require("native").STANDARD_EASING;
  const animatedStyle = useAnimatedStyle(StreamQualityLiveIndicatorTsx1Factory(items));
  const obj3 = require("StreamQualityUtils");
  const maxQuality = obj3.useMaxQuality(participant);
  const tmp8 = null != require("useStreamError")(participant);
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
  let tmp21Result = flag || flag2;
  closure_5 = tmp21Result;
  const items1 = [analyticsLocations, tmp21Result, flag, flag2];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    const tmp = ref;
    if (!current) {
      tmp2 = closure_5;
    }
    if (tmp2) {
      const obj2 = { type: metroImportDefault.STREAM_QUALITY_INDICATOR, has_premium_stream_fps, has_premium_stream_resolution, location_stack: analyticsLocations };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj2);
      tmp.current = true;
    }
  }, items1);
  const items2 = [_location, analyticsLocations];
  const callback = obj.useCallback(() => {
    const obj = { analyticsLocation: _location, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items2);
  const tmp4Result = tmp4(tmp3[19]);
  let tmp16 = !tmp4Result.isPremium(participant.user, TIER_1.TIER_1);
  tmp4Result.isPremium(participant.user, TIER_1.TIER_1);
  const tmp14 = TIER_1;
  if (tmp16) {
    const tmp4Result5 = tmp4(tmp3[19]);
    tmp16 = !tmp4Result5.canStreamQuality(tmp4(tmp3[19]).StreamQuality.MID, participant.user);
  }
  const tmp4Result6 = tmp4(tmp3[19]);
  let isPremiumExactlyResult = tmp4Result6.isPremiumExactly(participant.user, tmp14.TIER_1);
  if (isPremiumExactlyResult) {
    let type;
    if (maxQuality != null) {
      type = maxQuality.maxResolution.type;
    }
    isPremiumExactlyResult = type === ResolutionTypes.SOURCE;
  }
  if (isPremiumExactlyResult) {
    const tmp4Result7 = tmp4(tmp3[19]);
    isPremiumExactlyResult = !tmp4Result7.canStreamQuality(tmp4(tmp3[19]).StreamQuality.HIGH);
  }
  let tmp21Result2 = null;
  if (null != maxQuality) {
    let str2 = "none";
    View = tmp4(tmp3[11]).View;
    if (tmp21Result) {
      if (tmp16) {
        str2 = "auto";
      } else {
        str2 = "none";
      }
    }
    const obj4 = { pointerEvents: str2, style: items3, children: closure_10(PressableOpacity, obj5) };
    items3 = [style, animatedStyle];
    obj5 = { accessibilityRole: "button", style: items4, onPress: callback, children: items7 };
    items4 = [tmp.liveIndicator, style];
    const obj6 = { style: tmp.qualityTag, children: items5 };
    PressableOpacity = tmp2(tmp3[20]).PressableOpacity;
    const tmp23 = ref;
    if (tmp21Result) {
      const obj7 = { source: tmp4(tmp3[22]), style: tmp.nitroWheel, resizeMode: "contain" };
      const tmp4Result8 = tmp4(tmp3[21]);
      tmp21Result = tmp21(tmp4Result8, obj7);
    }
    items5 = [tmp21Result, ];
    const items6 = [tmp.qualityTagText, ];
    let prop = null;
    const LegacyText = tmp2(tmp3[13]).LegacyText;
    if (tmp8) {
      prop = tmp.reducedQualityTagText;
    }
    items6[1] = prop;
    const obj8 = { style: items6, children: "" + resolutionText + " " + tmp2Result6.getFPSText(maxQuality.maxFrameRate) };
    const tmp2Result5 = tmp2(tmp3[14]);
    resolutionText = tmp2Result5.getResolutionText(maxQuality.maxResolution);
    const _HermesInternal = HermesInternal;
    tmp2Result6 = tmp2(tmp3[14]);
    items5[1] = closure_9(LegacyText, obj8);
    items7 = [closure_10(tmp23, obj6), ];
    const obj9 = { style: tmp.liveTag };
    items7[1] = closure_9(tmp2(tmp3[13]).LiveTag, obj9);
    tmp21Result2 = tmp21(View, obj4);
  }
  return tmp21Result2;
};
