// Module ID: 9420
// Function ID: 9421
// Name: PremiumFeatureUpsell
// Dependencies: [19, 17, 4859, 1374, 1074, 6852, 21, 7273, 4488, 1115, 4836, 576, 8614, 9421, 7277, 8622, 1241, 7270, 9422, 1177, 9423, 9419, 4832, 8122, 5293, 1094, 5280, 5284, 6583, 8895, 7715, 4566, 9424, 2]
// Exports: default

// Module 9420 (PremiumFeatureUpsell)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7270 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7273 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
function PremiumFeatureUpsellPill(featureName) {
  let _location;
  let formatResult;
  let items1;
  let items2;
  let showShadow;
  let stringResult;
  let tmpResult5;
  featureName = featureName.featureName;
  ({ analyticsLocation: importDefault, showShadow } = featureName);
  if (showShadow === undefined) {
    showShadow = true;
  }
  let useTier0UpsellContent;
  let loading;
  let tmp = featureName;
  let tmp2 = useTier0UpsellContent;
  const style = featureName.style;
  let tmp3 = featureName(useTier0UpsellContent[12]);
  const usePremiumUpsellConfig = tmp3.usePremiumUpsellConfig;
  let obj = featureName(useTier0UpsellContent[13]);
  const premiumUpsellConfig = usePremiumUpsellConfig(obj.getUpsellType(featureName));
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const onViewAllPerks = premiumUpsellConfig.onViewAllPerks;
  const tmp5 = closure_14(useTier0UpsellContent);
  let closure_3 = tmp5;
  let obj2 = featureName(useTier0UpsellContent[14]);
  let mobileEmojiPickerUpsellRestyleEnabledForFeature = obj2.getMobileEmojiPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
  if (!mobileEmojiPickerUpsellRestyleEnabledForFeature) {
    let tmpResult = tmp(tmp2[15]);
    mobileEmojiPickerUpsellRestyleEnabledForFeature = tmpResult.getMobileStickerPickerUpsellRestyleEnabledForFeature(featureName, "native.PremiumFeatureUpsell");
  }
  const tmp8 = useTier0UpsellContent ? closure_8.TIER_0 : closure_8.TIER_2;
  const fn = () => {
    let tmp3 = featureName === EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE;
    const tmp = featureName;
    if (tmp3) {
      tmp3 = null != importDefault;
    }
    if (tmp3) {
      const obj2 = { location: importDefault };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PREMIUM_PROMOTION_OPENED, obj2);
    }
    openPremiumUpsellActionSheetDefault(tmp);
  };
  const tmpResult4 = tmp(tmp2[8]);
  const premiumTypeDisplayName = tmpResult4.getPremiumTypeDisplayName(tmp8);
  if (tmp(tmp2[7]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
    const intl5 = tmp(tmp2[9]).intl;
    const obj3 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl5.format(tmp(tmp2[9]).t["tw/SSq"], obj3);
  } else if (tmp(tmp2[7]).EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
    const intl4 = tmp(tmp2[9]).intl;
    const obj4 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl4.format(tmp(tmp2[9]).t.gMVjeS, obj4);
  } else if (tmp(tmp2[7]).EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
    const intl3 = tmp(tmp2[9]).intl;
    const obj5 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl3.format(tmp(tmp2[9]).t.eontIh, obj5);
  } else if (tmp(tmp2[7]).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
    const intl2 = tmp(tmp2[9]).intl;
    const format = intl2.format;
    const obj6 = { maxFileSize: tmpResult5.getMaxFileSizeForPremiumType(tmp8), nitroTierName: premiumTypeDisplayName, onClick: fn };
    const zzyLEK = tmp(tmp2[9]).t.zzyLEK;
    tmpResult5 = tmp(tmp2[8]);
    formatResult = format(zzyLEK, obj6);
  } else if (tmp(tmp2[7]).EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
    const intl = tmp(tmp2[9]).intl;
    const obj7 = { nitroTierName: premiumTypeDisplayName, onClick: fn };
    formatResult = intl.format(tmp(tmp2[9]).t.lyxfbj, obj7);
  } else if (tmp(tmp2[7]).EntitlementFeatureNames.APP_ICONS === featureName) {
    const intl7 = tmp(tmp2[9]).intl;
    const obj8 = { onClick: fn };
    formatResult = intl7.format(tmp(tmp2[9]).t.x2dQxN, obj8);
  }
  const tmp12 = require("usePremiumFeatureUpsellGetNitro");
  const tmpResult6 = tmp(tmp2[13]);
  const tmp12Result = tmp12(useTier0UpsellContent, onViewAllPerks, tmpResult6.getAnalyticsPage(featureName));
  loading = tmp12Result.loading;
  let items = [tmp5.container, , ];
  const onPress = tmp12Result.onPress;
  const tmp11 = importDefault;
  if (showShadow) {
    showShadow = tmp5.containerShadow;
  }
  const obj9 = { style: items, children: items2 };
  items[1] = showShadow;
  items[2] = style;
  let tmp17Result = !mobileEmojiPickerUpsellRestyleEnabledForFeature;
  const obj10 = { style: tmp5.labelContainer, children: items1 };
  if (tmp17Result) {
    const obj11 = { source: tmp11(useTier0UpsellContent ? tmp2[20] : tmp2[21]), style: tmp5.nitroWheel, disableColor: true };
    const Icon = tmp(tmp2[19]).Icon;
    tmp17Result = closure_12(Icon, obj11);
  }
  items1 = [tmp17Result, ];
  const obj12 = { style: tmp5.text, variant: "text-sm/medium", children: formatResult };
  items1[1] = closure_12(tmp(tmp2[22]).Text, obj12);
  items2 = [closure_13(loading, obj10), ];
  const obj13 = {
    disabled: loading,
    shrink: true,
    style: tmp5.button,
    size: tmp(tmp2[19]).ButtonSizes.XSMALL,
    onPress,
    text: stringResult,
    color: tmp(tmp2[19]).ButtonColors.GREEN,
    renderIcon() {
      let items;
      let tmpResult;
      if (mobileEmojiPickerUpsellRestyleEnabledForFeature) {
        const obj2 = { size: "xxs", color: nativeDefault.colors.WHITE, style: items };
        const NitroWheelIcon = tmp2(8122).NitroWheelIcon;
        items = [closure_3.nitroWheelIcon, loading && closure_3.nitroWheelDisabled];
        tmpResult = tmp(NitroWheelIcon, obj2);
      } else {
        const items1 = [closure_3.nitroWheelButton, ];
        let nitroWheelDisabled = loading;
        const NitroWheel = tmp2(1177).NitroWheel;
        if (loading) {
          nitroWheelDisabled = closure_3.nitroWheelDisabled;
        }
        const obj = { style: items1 };
        items1[1] = nitroWheelDisabled;
        tmpResult = tmp(NitroWheel, obj);
      }
      return tmpResult;
    },
    renderLinearGradient() {
      const obj = { style: closure_3.gradient, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: useTier0UpsellContent ? Gradients.PREMIUM_TIER_0 : Gradients.PREMIUM_TIER_2_TRI_COLOR };
      const tmp2 = LinearGradientDefault;
      return closure_12(tmp2, obj);
    }
  };
  const ShinyButton = tmp(tmp2[19]).ShinyButton;
  const intl6 = tmp(tmp2[9]).intl;
  const string = intl6.string;
  const t = tmp(tmp2[9]).t;
  const tmp18 = closure_12;
  if (useTier0UpsellContent) {
    stringResult = string(t.cM8bbx);
  } else {
    stringResult = string(t["8x0jKT"]);
  }
  items2[1] = tmp18(ShinyButton, obj13);
  return closure_13(loading, obj9);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ PremiumSubscriptionSKUs: metroImportDefault, PremiumTypes: metroImportAll, PremiumUpsellTypes: c9 } = PremiumConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const Gradients = ColorConstants.Gradients;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles((arg0) => {
  let obj3;
  let obj6;
  let unsafe_rawColors;
  const obj = { container: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_12, justifyContent: "space-between" }, containerShadow: obj3, nitroWheel: size, labelContainer: { flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 }, text: { flexShrink: 1, flexWrap: "wrap" }, nitroWheelButton: { marginStart: -2, width: 20, height: 20 }, nitroWheelIcon: { marginEnd: 4 }, nitroWheelDisabled: { opacity: 0.6 }, button: { alignSelf: "center", borderRadius: nativeDefault.radii.round }, gradient: obj6 };
  obj3 = { shadowColor: arg0 ? unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2 : unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2, shadowOpacity: 0.6 };
  ({ flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_12, justifyContent: "space-between" });
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  unsafe_rawColors = nativeDefault.unsafe_rawColors;
  size = { width: 20, height: 20, marginEnd: tmp(576).space.PX_4 };
  ({ flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 });
  ({ alignSelf: "center", borderRadius: nativeDefault.radii.round });
  obj6 = {};
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
const __initData = { code: "function PremiumFeatureUpsellTsx2(finished){const{cleanUp}=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);}" };
function animationEnterExit(targetHeight, cleanUp) {
  let fn;
  let obj2;
  let closure_0 = cleanUp;
  const obj = { opacity: obj2.withSpring(targetHeight, springPresets.springStandard, "respect-motion-settings", fn) };
  fn = function l(arg0) {
    if (closure_0 != null) {
      tmp(arg0);
    }
  };
  fn.__closure = { cleanUp };
  fn.__workletHash = 7812030105128;
  fn.__initData = __initData;
  obj2 = spring;
  return obj;
}
let obj = { withSpring: spring.withSpring, springStandard: springPresets.springStandard };
animationEnterExit.__closure = obj;
animationEnterExit.__workletHash = 15470414797897;
animationEnterExit.__initData = { code: "function animationEnterExit_PremiumFeatureUpsellTsx1(visible,cleanUp){const{withSpring,springStandard}=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);})};}" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default function PremiumFeatureUpsell(shouldShow) {
  shouldShow = shouldShow.shouldShow;
  let merged = Object.assign(shouldShow, Object.assign({ shouldShow: 0 }));
  let analyticsLocations;
  let _location;
  const ref = _location.useRef(false);
  analyticsLocations = ref(analyticsLocations[28])().analyticsLocations;
  let obj = merged(analyticsLocations[29]);
  _location = obj.useAnalyticsContext().location;
  const tmp3 = ref(analyticsLocations[30])(shouldShow);
  let closure_4 = tmp3;
  const items = [ref, _location, analyticsLocations, tmp3, merged.featureName];
  const callback = _location.useCallback((arg0, style) => {
    let obj2;
    const obj = { style, children: closure_1_12(PremiumFeatureUpsellPill, obj2) };
    obj2 = {};
    const View = ref(analyticsLocations[31]).View;
    merged = Object.assign(arg0);
    return closure_1_12(View, obj);
  }, []);
  const effect = _location.useEffect(() => {
    let guildId;
    let tmp8Result;
    const current = ref.current;
    let tmp2 = !current;
    const tmp = ref;
    if (!current) {
      tmp2 = closure_4;
    }
    if (tmp2) {
      let STREAM_QUALITY_UPSELL;
      const featureName = merged.featureName;
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_UPSELL_VIEWED = AnalyticEvents.PREMIUM_UPSELL_VIEWED;
      AnalyticsUtilsDefault;
      if (EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === featureName) {
        STREAM_QUALITY_UPSELL = constants.SOUNDBOARD_EVERYWHERE_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE === featureName) {
        STREAM_QUALITY_UPSELL = constants.EMOJI_EVERYWHERE_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE === featureName) {
        STREAM_QUALITY_UPSELL = constants.STICKERS_EVERYWHERE_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === featureName) {
        STREAM_QUALITY_UPSELL = constants.LARGER_FILE_UPLOAD_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.APP_ICONS === featureName) {
        STREAM_QUALITY_UPSELL = constants.APP_ICON_INLINE_UPSELL;
      } else if (EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY === featureName) {
        STREAM_QUALITY_UPSELL = constants.STREAM_QUALITY_UPSELL;
      }
      const obj = { type: STREAM_QUALITY_UPSELL, location: _location, location_stack: analyticsLocations, sku_id: tmp8Result.castPremiumSubscriptionAsSkuId(metroImportDefault.TIER_2), voice_guild_id: guildId };
      tmp8Result = PremiumUtils;
      guildId = RTCConnectionStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      track(PREMIUM_UPSELL_VIEWED, obj);
      tmp.current = true;
    }
  }, items);
  let tmp8;
  const tmp6 = closure_12;
  const tmp7 = ref(analyticsLocations[32]);
  if (tmp3) {
    tmp8 = merged;
  }
  let obj2 = { useReducedMotion: false, item: tmp8, entering: animationEnterExit, exiting: animationEnterExit, renderItem: callback };
  return tmp6(tmp7, obj2);
};
