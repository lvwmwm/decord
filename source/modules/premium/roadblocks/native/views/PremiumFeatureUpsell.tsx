// Module ID: 9380
// Function ID: 73163
// Name: getPremiumUpsellType
// Dependencies: [31, 27, 1851, 653, 6671, 33, 7951, 3776, 1212, 4130, 689, 7941, 7957, 7949, 7958, 1273, 9381, 9382, 5459, 4554, 668, 4542, 4546, 5464, 9383, 8277, 3991, 675, 8569, 2]
// Exports: default

// Module 9380 (getPremiumUpsellType)
import result from "result";
import get_ActivityIndicator from "expandLocation";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getPremiumUpsellType(arg0) {
  if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === arg0) {
    return constants.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.EMOJIS_EVERYWHERE === arg0) {
    return constants.EMOJI_EVERYWHERE_INLINE_UPSELL;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === arg0) {
    return constants.LARGER_FILE_UPLOAD_INLINE_UPSELL;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.APP_ICONS === arg0) {
    return constants.APP_ICON_INLINE_UPSELL;
  } else if (require(7951) /* EntitlementFeatureNames */.EntitlementFeatureNames.STREAM_HIGH_QUALITY === arg0) {
    return constants.STREAM_QUALITY_UPSELL;
  }
}
function PremiumFeatureUpsellPill(featureName) {
  featureName = featureName.featureName;
  let flag = featureName.showShadow;
  if (flag === undefined) {
    flag = true;
  }
  let useTier0UpsellContent;
  let dependencyMap;
  let loading;
  let obj = featureName(7941);
  let obj1 = featureName(7957);
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(obj1.getUpsellType(featureName));
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp2 = callback2(useTier0UpsellContent);
  dependencyMap = tmp2;
  const tmp4 = useTier0UpsellContent ? closure_7.TIER_0 : closure_7.TIER_2;
  const fn = () => useTier0UpsellContent(_undefined[13])(featureName);
  let obj2 = featureName(3776);
  const premiumTypeDisplayName = obj2.getPremiumTypeDisplayName(tmp4);
  if (featureName(7951).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl4 = featureName(1212).intl;
    obj = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    let formatResult = intl4.format(featureName(1212).t["tw/SSq"], obj);
  } else if (featureName(7951).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl3 = featureName(1212).intl;
    obj = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl3.format(featureName(1212).t.gMVjeS, obj);
  } else if (featureName(7951).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl2 = featureName(1212).intl;
    obj1 = {};
    let obj5 = featureName(3776);
    obj1.maxFileSize = obj5.getMaxFileSizeForPremiumType(tmp4);
    obj1.nitroTierName = premiumTypeDisplayName;
    obj1.onClick = fn;
    formatResult = intl2.format(featureName(1212).t.zzyLEK, obj1);
  } else if (featureName(7951).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl = featureName(1212).intl;
    obj2 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl.format(featureName(1212).t.lyxfbj, obj2);
  } else if (featureName(7951).EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl6 = featureName(1212).intl;
    const obj3 = { onClick: fn };
    formatResult = intl6.format(featureName(1212).t.x2dQxN, obj3);
  }
  const tmp17 = useTier0UpsellContent(7958)(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants2.PREMIUM_UPSELL_FILE_UPLOAD);
  loading = tmp17.loading;
  const obj4 = {};
  let items = [tmp2.container, , ];
  if (flag) {
    flag = tmp2.containerShadow;
  }
  items[1] = flag;
  items[2] = featureName.style;
  obj4.style = items;
  obj5 = { style: tmp2.labelContainer };
  const obj6 = {};
  if (useTier0UpsellContent) {
    let tmp25 = 9381;
  } else {
    tmp25 = 9382;
  }
  obj6.source = useTier0UpsellContent(tmp25);
  obj6.style = tmp2.nitroWheel;
  obj6.disableColor = true;
  const items1 = [callback(featureName(1273).Icon, obj6), ];
  const obj7 = { style: tmp2.text, variant: "text-sm/medium", children: formatResult };
  items1[1] = callback(featureName(5459).TextWithIOSLinkWorkaround, obj7);
  obj5.children = items1;
  const items2 = [closure_13(closure_5, obj5), ];
  const obj8 = { disabled: loading, shrink: true, style: tmp2.button, size: featureName(1273).ButtonSizes.XSMALL, onPress: tmp17.onPress };
  const intl5 = featureName(1212).intl;
  const string = intl5.string;
  const t = featureName(1212).t;
  if (useTier0UpsellContent) {
    let stringResult = string(t.cM8bbx);
  } else {
    stringResult = string(t["8x0jKT"]);
  }
  obj8.text = stringResult;
  obj8.color = featureName(1273).ButtonColors.GREEN;
  obj8.renderIcon = function renderIcon() {
    const obj = {};
    const items = [_undefined.nitroWheelButton, ];
    let nitroWheelDisabled = loading;
    if (loading) {
      nitroWheelDisabled = _undefined.nitroWheelDisabled;
    }
    items[1] = nitroWheelDisabled;
    obj.style = items;
    return outer1_12(featureName(_undefined[15]).NitroWheel, obj);
  };
  obj8.renderLinearGradient = function renderLinearGradient() {
    const obj = { style: _undefined.gradient, start: featureName(_undefined[20]).HorizontalGradient.START, end: featureName(_undefined[20]).HorizontalGradient.END, colors: useTier0UpsellContent ? outer1_11.PREMIUM_TIER_0 : outer1_11.PREMIUM_TIER_2_TRI_COLOR };
    return outer1_12(useTier0UpsellContent(_undefined[19]), obj);
  };
  items2[1] = callback(featureName(1273).ShinyButton, obj8);
  obj4.children = items2;
  return closure_13(closure_5, obj4);
}
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ PremiumSubscriptionSKUs: closure_6, PremiumTypes: closure_7, PremiumUpsellTypes: closure_8 } = GuildFeatures);
({ AnalyticEvents: closure_9, AnalyticsPages: closure_10 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let closure_14 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { flexDirection: "row", backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).radii.round, padding: importDefault(689).space.PX_12, justifyContent: "space-between" };
  obj.container = obj;
  obj = {};
  const merged = Object.assign(importDefault(689).shadows.SHADOW_HIGH);
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  obj["shadowColor"] = arg0 ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2 : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
  obj["shadowOpacity"] = 0.6;
  obj.containerShadow = obj;
  const obj1 = { width: 20, height: 20, marginEnd: importDefault(689).space.PX_4 };
  obj.nitroWheel = obj1;
  const obj2 = { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: importDefault(689).space.PX_4 };
  obj.labelContainer = obj2;
  obj.text = { flexShrink: 1, flexWrap: "wrap" };
  obj.nitroWheelButton = { marginStart: -2, width: 20, height: 20 };
  obj.nitroWheelDisabled = { opacity: 0.6 };
  obj.button = { alignSelf: "center", borderRadius: importDefault(689).radii.round };
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.gradient = {};
  return obj;
});
let closure_15 = { code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
let closure_16 = { code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
let closure_17 = (() => {
  function animationEnterExit(targetHeight, cleanUp) {
    let closure_0 = cleanUp;
    const obj = {};
    const fn = function l(arg0) {
      if (null != cleanUp) {
        cleanUp(arg0);
      }
    };
    fn.__closure = { cleanUp };
    fn.__workletHash = 7812030105128;
    fn.__initData = outer1_16;
    obj.opacity = outer1_0(outer1_2[21]).withSpring(targetHeight, outer1_0(outer1_2[22]).springStandard, "respect-motion-settings", fn);
    return obj;
  }
  animationEnterExit.__closure = { withSpring: require(4542) /* withSpring */.withSpring, springStandard: require(4546) /* SUBTLE_SPRING */.springStandard };
  animationEnterExit.__workletHash = 15470414797897;
  animationEnterExit.__initData = closure_15;
  return animationEnterExit;
})();
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default function PremiumFeatureUpsell(shouldShow) {
  let obj = Object.create(null);
  obj.shouldShow = 0;
  let merged = Object.assign(shouldShow, obj);
  const ref = _location.useRef(false);
  analyticsLocations = ref(analyticsLocations[23])().analyticsLocations;
  obj = merged(analyticsLocations[24]);
  _location = obj.useAnalyticsContext().location;
  const tmp4 = ref(analyticsLocations[25])(shouldShow.shouldShow);
  let closure_4 = tmp4;
  const items = [ref, _location, analyticsLocations, tmp4, merged.featureName];
  const callback = _location.useCallback((arg0, style) => {
    let obj = { style };
    obj = {};
    const merged = Object.assign(arg0);
    obj.children = outer1_12(outer1_19, obj);
    return outer1_12(ref(analyticsLocations[26]).View, obj);
  }, []);
  const effect = _location.useEffect(() => {
    if (tmp) {
      let obj = ref(analyticsLocations[27]);
      obj = { type: outer1_18(merged.featureName), location: _location, location_stack: analyticsLocations, sku_id: merged(analyticsLocations[7]).castPremiumSubscriptionAsSkuId(outer1_6.TIER_2) };
      obj.track(outer1_9.PREMIUM_UPSELL_VIEWED, obj);
      ref.current = true;
      const obj3 = merged(analyticsLocations[7]);
    }
  }, items);
  obj = { useReducedMotion: false };
  let tmp9;
  if (tmp4) {
    tmp9 = merged;
  }
  obj.item = tmp9;
  obj.entering = closure_17;
  obj.exiting = closure_17;
  obj.renderItem = callback;
  return closure_12(ref(analyticsLocations[28]), obj);
};
