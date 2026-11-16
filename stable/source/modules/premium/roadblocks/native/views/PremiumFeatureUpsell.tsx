// Module ID: 10199
// Function ID: 10200
// Name: PremiumFeatureUpsell
// Dependencies: [19, 17, 5925, 1387, 1072, 7726, 21, 9919, 2171, 1113, 5170, 575, 9908, 10127, 1252, 9916, 10184, 1187, 10200, 10201, 5783, 9645, 5747, 1092, 5793, 5794, 7420, 10202, 8948, 1652, 10115, 2]
// Exports: default

// Module 10199 (PremiumFeatureUpsell)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumUtils from "PremiumUtils" /* 2171 */;
import LinearGradientDefault from "LinearGradient" /* 5747 */;
import spring_spring from "spring/spring" /* 5793 */;
import springPresets from "springPresets" /* 5794 */;
import ColorConstants from "ColorConstants" /* 7726 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9916 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9919 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5925 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
function PremiumFeatureUpsellPill(featureName) {
  let _location;
  let formatResult;
  let items1;
  let items2;
  let showShadow;
  let stringResult;
  let tmpResult3;
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
  let obj2 = featureName(useTier0UpsellContent[13]);
  const result = obj2.isExpressionPickerUpsellFeature(featureName);
  let c4 = result;
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
  let tmpResult = tmp(tmp2[8]);
  const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(tmp8);
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
    const obj6 = { maxFileSize: tmpResult3.getMaxFileSizeForPremiumType(tmp8), nitroTierName: premiumTypeDisplayName, onClick: fn };
    const zzyLEK = tmp(tmp2[9]).t.zzyLEK;
    tmpResult3 = tmp(tmp2[8]);
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
  const tmpResult4 = tmp(tmp2[13]);
  const tmp12Result = tmp12(useTier0UpsellContent, onViewAllPerks, tmpResult4.getAnalyticsPage(featureName));
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
  let tmp17Result = !result;
  const obj10 = { style: tmp5.labelContainer, children: items1 };
  if (tmp17Result) {
    const obj11 = { source: tmp11(useTier0UpsellContent ? tmp2[18] : tmp2[19]), style: tmp5.nitroWheel, disableColor: true };
    const Icon = tmp(tmp2[17]).Icon;
    tmp17Result = closure_12(Icon, obj11);
  }
  items1 = [tmp17Result, ];
  const obj12 = { style: tmp5.text, variant: "body-sm/medium", children: formatResult };
  items1[1] = closure_12(tmp(tmp2[20]).Text, obj12);
  items2 = [closure_13(loading, obj10), ];
  const obj13 = {
    disabled: loading,
    shrink: true,
    style: tmp5.button,
    size: tmp(tmp2[17]).ButtonSizes.XSMALL,
    onPress,
    text: stringResult,
    color: tmp(tmp2[17]).ButtonColors.GREEN,
    renderIcon() {
      let items;
      let tmpResult;
      if (c4) {
        const obj2 = { size: "xxs", color: nativeDefault.colors.WHITE, style: items };
        const NitroWheelIcon = tmp2(9645).NitroWheelIcon;
        items = [closure_3.nitroWheelIcon, loading && closure_3.nitroWheelDisabled];
        tmpResult = tmp(NitroWheelIcon, obj2);
      } else {
        const items1 = [closure_3.nitroWheelButton, ];
        let nitroWheelDisabled = loading;
        const NitroWheel = tmp2(1187).NitroWheel;
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
      return authStore2(tmp2, obj);
    }
  };
  const ShinyButton = tmp(tmp2[17]).ShinyButton;
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
  size = { width: 20, height: 20, marginEnd: tmp(575).space.PX_4 };
  ({ flexDirection: "row", flexShrink: 1, alignItems: "center", marginEnd: nativeDefault.space.PX_4 });
  ({ alignSelf: "center", borderRadius: nativeDefault.radii.round });
  obj6 = {};
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
let items = [{ code: "(function animationEnterExit_PremiumFeatureUpsellTsx2(visible,cleanUp){let[withSpring,springStandard,_worklet_11223997992530_init_data]=this.__closure;return{opacity:withSpring(visible,springStandard,'respect-motion-settings',function animationEnterExit_PremiumFeatureUpsellTsx2([_worklet_11223997992530_init_data,cleanUp]){const PremiumFeatureUpsellTsx1=function(finished){cleanUp===null||cleanUp===void 0||cleanUp(finished);};PremiumFeatureUpsellTsx1.__closure=[cleanUp];PremiumFeatureUpsellTsx1.__workletHash=11223997992530;PremiumFeatureUpsellTsx1.__initData=_worklet_11223997992530_init_data;return PremiumFeatureUpsellTsx1;}([_worklet_11223997992530_init_data,cleanUp]))};})" }, spring_spring.withSpring, springPresets.springStandard, { code: "(function PremiumFeatureUpsellTsx1(finished){let[cleanUp]=this.__closure;var _cleanUp;(_cleanUp=cleanUp)===null||_cleanUp===void 0||_cleanUp(finished);})" }];
let c0;
let c1;
let c2;
[tmp5, tmp6, tmp7, tmp8] = items;
function animationEnterExit(arg0, arg1) {
  let tmp2;
  let tmp3;
  const tmp = c1;
  const items = [c2, arg1];
  [tmp2, tmp3] = items;
  const obj = { opacity: _undefined(arg0, tmp, "respect-motion-settings", PremiumFeatureUpsellTsx1) };
  class PremiumFeatureUpsellTsx1 {
    constructor(arg0) {
      if (closure_0 != null) {
        tmp2 = arg0;
        tmpResult = tmp(arg0);
      }
      return;
    }
  }
  const items1 = [tmp3];
  PremiumFeatureUpsellTsx1.__closure = items1;
  PremiumFeatureUpsellTsx1.__workletHash = 11223997992530;
  PremiumFeatureUpsellTsx1.__initData = tmp2;
  return obj;
}
let items1 = [tmp6, tmp7, tmp8];
animationEnterExit.__closure = items1;
animationEnterExit.__workletHash = 6017266156816;
animationEnterExit.__initData = tmp5;
let size = size_mod;
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumFeatureUpsell.tsx");

export default function PremiumFeatureUpsell(shouldShow) {
  shouldShow = shouldShow.shouldShow;
  let merged = Object.assign(shouldShow, Object.assign({ shouldShow: 0 }));
  let analyticsLocations;
  let _location;
  const ref = _location.useRef(false);
  analyticsLocations = ref(analyticsLocations[26])().analyticsLocations;
  let obj = merged(analyticsLocations[27]);
  _location = obj.useAnalyticsContext().location;
  const tmp3 = ref(analyticsLocations[28])(shouldShow);
  let closure_4 = tmp3;
  const items = [ref, _location, analyticsLocations, tmp3, merged.featureName];
  const callback = _location.useCallback((arg0, style) => {
    let obj2;
    const obj = { style, children: closure_1_12(PremiumFeatureUpsellPill, obj2) };
    obj2 = {};
    const View = ref(analyticsLocations[29]).View;
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
  const tmp7 = ref(analyticsLocations[30]);
  if (tmp3) {
    tmp8 = merged;
  }
  let obj2 = { useReducedMotion: false, item: tmp8, entering: animationEnterExit, exiting: animationEnterExit, renderItem: callback };
  return tmp6(tmp7, obj2);
};
