// Module ID: 9517
// Function ID: 9518
// Name: EmojiPickerPremiumSearchUpsell
// Dependencies: [19, 1390, 1085, 1392, 21, 5092, 558, 576, 1265, 9281, 9461, 9280, 9269, 9518, 4769, 5056, 9393, 9394, 1126, 9035, 587, 1200, 9519, 9520, 2]

// Module 9517 (EmojiPickerPremiumSearchUpsell)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PremiumUtils from "PremiumUtils" /* 4769 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import MobileEmojiPickerUpsellRestyleExperiment from "MobileEmojiPickerUpsellRestyleExperiment" /* 9281 */;
import openPremiumModalDefault from "openPremiumModal" /* 9393 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9394 */;
import AssetRegistryDefault from "AssetRegistry" /* 9519 */;
import PremiumExpressionPickerSearchUpsellDefault from "PremiumExpressionPickerSearchUpsell" /* 9520 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;
let hideActionSheetResult, obj1, tmp10, tmp12, tmp14, tmp15, tmp9Result;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire, AnalyticsSections: metroImportDefault } = Constants);
({ PremiumSubscriptionSKUs: metroImportAll, PremiumUpsellTypes: c9, SubscriptionPlans: c10 } = PremiumConstants);
const jsx = Fragment.jsx;
let closure_12 = createStyles.createStyles({ nitroIcon: { marginRight: 8, alignSelf: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
  let ref;
  let useTier0UpsellContent;
  let obj = guildId(useTier0UpsellContent[7]);
  const cResult = obj.c(5);
  guildId = guildId.guildId;
  const analyticsLocations = guildId.analyticsLocations;
  useTier0UpsellContent = guildId.useTier0UpsellContent;
  let obj2 = ref;
  ref = ref.useRef(false);
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === guildId) {
      let tmp3;
      let tmp4;
      if (cResult[2] === useTier0UpsellContent) {
        tmp3 = cResult[3];
        tmp4 = cResult[4];
      }
      const effect = obj2.useEffect(tmp3, tmp4);
    }
  }
  const fn = function t() {
    let obj2;
    if (!ref.current) {
      let DM_CHANNEL;
      tmp.current = true;
      const obj = { type: constants.EMOJI_PICKER_SEARCH, location: obj2, location_stack: analyticsLocations, sku_id: useTier0UpsellContent ? metroImportAll.TIER_0 : metroImportAll.TIER_2 };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_UPSELL_VIEWED = hasOwnProperty.PREMIUM_UPSELL_VIEWED;
      AnalyticsUtilsDefault;
      if (null != guildId) {
        DM_CHANNEL = metroRequire.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = metroRequire.DM_CHANNEL;
      }
      obj2 = { page: DM_CHANNEL, section: metroImportDefault.EMOJI_PICKER_POPOUT };
      track(PREMIUM_UPSELL_VIEWED, obj);
    }
  };
  const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
  cResult[0] = analyticsLocations;
  cResult[1] = guildId;
  cResult[2] = useTier0UpsellContent;
  cResult[3] = fn;
  cResult[4] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
  guildId = guildId.guildId;
  const analyticsLocations = guildId.analyticsLocations;
  const useTier0UpsellContent = guildId.useTier0UpsellContent;
  let ref;
  ref = ref.useRef(false);
  const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
  const effect = ref.useEffect(() => {
    let obj2;
    if (!ref.current) {
      let DM_CHANNEL;
      tmp.current = true;
      const obj = { type: constants.EMOJI_PICKER_SEARCH, location: obj2, location_stack: analyticsLocations, sku_id: useTier0UpsellContent ? metroImportAll.TIER_0 : metroImportAll.TIER_2 };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_UPSELL_VIEWED = hasOwnProperty.PREMIUM_UPSELL_VIEWED;
      AnalyticsUtilsDefault;
      if (null != guildId) {
        DM_CHANNEL = metroRequire.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = metroRequire.DM_CHANNEL;
      }
      obj2 = { page: DM_CHANNEL, section: metroImportDefault.EMOJI_PICKER_POPOUT };
      track(PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items);
});
let closure_13 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiPickerPremiumSearchUpsellClick(analyticsLocations) {
  let first;
  let loading;
  let mobileEmojiPickerUpsellRestyleEnabled;
  let onPress;
  let obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[7]);
  const cResult = obj.c(9);
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  mobileEmojiPickerUpsellRestyleEnabled = obj2.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]);
    const upsellType = tmpResult.getUpsellType(tmp(tmp2[11]).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    cResult[0] = upsellType;
    first = upsellType;
  } else {
    first = cResult[0];
  }
  const tmpResult2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]);
  ({ loading, onPress } = useTier0UpsellContent(tmp2[13])(useTier0UpsellContent, tmpResult2.usePremiumUpsellConfig(first, analyticsLocations).onViewAllPerks, constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE));
  const tmp7 = useTier0UpsellContent(tmp2[13])(useTier0UpsellContent, tmpResult2.usePremiumUpsellConfig(first, analyticsLocations).onViewAllPerks, constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE);
  if (cResult[1] === analyticsLocations) {
    if (cResult[2] === onPress) {
      if (cResult[3] === mobileEmojiPickerUpsellRestyleEnabled) {
        let tmp8;
        if (cResult[4] === useTier0UpsellContent) {
          tmp8 = cResult[5];
        }
        if (cResult[6] === loading) {
          let tmp9;
          if (cResult[7] === tmp8) {
            tmp9 = cResult[8];
          }
          return tmp9;
        }
        let obj3 = { loading, onPress: tmp8 };
        cResult[6] = loading;
        cResult[7] = tmp8;
        cResult[8] = obj3;
        tmp9 = obj3;
      }
    }
  }
  class P {
    constructor() {
      currentUser = closure_4.getCurrentUser();
      result = null == currentUser;
      if (!result) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = closure_1(closure_2[14]);
        result = obj.canUseEmojisEverywhere(currentUser);
      }
      if (!result) {
        tmp5 = closure_2;
        if (tmp5) {
          tmp14 = onPress;
          tmp15 = onPress();
        } else {
          tmp6 = closure_1;
          tmp7 = closure_2;
          obj2 = closure_1(closure_2[15]);
          hideActionSheetResult = obj2.hideActionSheet();
          obj1 = { analyticsLocations: null, premiumFeatureCardOrder: null };
          tmp10 = analyticsLocations;
          obj1.analyticsLocations = analyticsLocations;
          tmp11 = useTier0UpsellContent;
          tmp12 = closure_0;
          tmp9 = closure_1(closure_2[16]);
          PremiumFeatureCardOrder = closure_0(closure_2[17]).PremiumFeatureCardOrder;
          obj1.premiumFeatureCardOrder = useTier0UpsellContent ? PremiumFeatureCardOrder.TIER_0_LEADING : PremiumFeatureCardOrder.TIER_2_LEADING;
          tmp9Result = tmp9(obj1);
        }
      }
      return;
    }
  }
  cResult[1] = analyticsLocations;
  cResult[2] = onPress;
  cResult[3] = mobileEmojiPickerUpsellRestyleEnabled;
  cResult[4] = useTier0UpsellContent;
  cResult[5] = P;
  tmp8 = P;
}) : (function useEmojiPickerPremiumSearchUpsellClick(analyticsLocations) {
  let items;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let mobileEmojiPickerUpsellRestyleEnabled;
  let obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  mobileEmojiPickerUpsellRestyleEnabled = obj.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  const usePremiumUpsellConfig = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]).usePremiumUpsellConfig;
  analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]);
  let obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]);
  const tmp3 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[13])(useTier0UpsellContent, usePremiumUpsellConfig(obj2.getUpsellType(analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[11]).EntitlementFeatureNames.EMOJIS_EVERYWHERE), analyticsLocations).onViewAllPerks, constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE);
  const onPress = tmp3.onPress;
  let obj3 = {
    loading: tmp3.loading,
    onPress: onPress.useCallback(() => {
      let PremiumFeatureCardOrder;
      const currentUser = UserStore.getCurrentUser();
      let result = null == currentUser;
      if (!result) {
        const obj = PremiumUtilsDefault;
        result = obj.canUseEmojisEverywhere(currentUser);
      }
      if (!result) {
        const tmp5 = mobileEmojiPickerUpsellRestyleEnabled;
        if (tmp5) {
          onPress();
        } else {
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
          const obj3 = { analyticsLocations, premiumFeatureCardOrder: useTier0UpsellContent ? PremiumFeatureCardOrder.TIER_0_LEADING : PremiumFeatureCardOrder.TIER_2_LEADING };
          const tmp9 = openPremiumModalDefault;
          PremiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder;
          tmp9(obj3);
        }
      }
    }, items)
  };
  items = [analyticsLocations, useTier0UpsellContent, mobileEmojiPickerUpsellRestyleEnabled, onPress];
  return obj3;
});
let closure_14 = tmp6;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerListPremiumSearchUpsell(useTier0UpsellContent) {
  let loading;
  let onPress;
  let tmp11;
  let tmp14Result;
  let tmp8;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(13);
  const tmp4 = closure_12();
  ({ loading, onPress } = closure_14(useTier0UpsellContent));
  closure_14(useTier0UpsellContent);
  const obj2 = MobileEmojiPickerUpsellRestyleExperiment;
  const mobileEmojiPickerUpsellRestyleEnabled = obj2.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  closure_13(useTier0UpsellContent);
  if (cResult[0] !== useTier0UpsellContent.useTier0UpsellContent) {
    let formatToPlainStringResult;
    useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
    const intl = tmp(1126).intl;
    if (useTier0UpsellContent) {
      const formatToPlainString = intl.formatToPlainString;
      const obj3 = { planName: tmpResult.getTierDisplayNameByPlanId(authStore.PREMIUM_MONTH_TIER_0) };
      const kWBwlJ = tmp(1126).t.kWBwlJ;
      tmpResult = PremiumUtils;
      formatToPlainStringResult = formatToPlainString(kWBwlJ, obj3);
    } else {
      formatToPlainStringResult = intl.string(tmp(1126).t["5t3lw+"]);
    }
    cResult[0] = useTier0UpsellContent.useTier0UpsellContent;
    cResult[1] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== useTier0UpsellContent.useTier0UpsellContent) {
    let stringResult;
    const useTier0UpsellContent2 = useTier0UpsellContent.useTier0UpsellContent;
    const intl2 = tmp(1126).intl;
    const string = intl2.string;
    const t = tmp(1126).t;
    if (useTier0UpsellContent2) {
      stringResult = string(t["9CM5v9"]);
    } else {
      stringResult = string(t.pj0XBN);
    }
    cResult[2] = useTier0UpsellContent.useTier0UpsellContent;
    cResult[3] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp4.nitroIcon) {
    let tmp13;
    if (cResult[5] === mobileEmojiPickerUpsellRestyleEnabled) {
      tmp13 = cResult[6];
    }
    if (cResult[7] === loading) {
      if (cResult[8] === onPress) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === tmp11) {
            let tmp18;
            if (cResult[11] === tmp13) {
              tmp18 = cResult[12];
            }
            return tmp18;
          }
        }
      }
    }
    const tmp21 = jsx(PremiumExpressionPickerSearchUpsellDefault, { body: tmp8, ctaText: tmp11, icon: tmp13, loading, onPress });
    cResult[7] = loading;
    cResult[8] = onPress;
    cResult[9] = tmp8;
    cResult[10] = tmp11;
    cResult[11] = tmp13;
    cResult[12] = tmp21;
    tmp18 = tmp21;
  }
  if (mobileEmojiPickerUpsellRestyleEnabled) {
    const obj5 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, style: tmp4.nitroIcon };
    const NitroWheelIcon = tmp(9035).NitroWheelIcon;
    tmp14Result = tmp14(NitroWheelIcon, obj5);
  } else {
    const obj6 = { style: tmp4.nitroIcon, source: AssetRegistryDefault, disableColor: true, size: native.Icon.Sizes.MEDIUM };
    const Icon = tmp(1200).Icon;
    tmp14Result = tmp14(Icon, obj6);
  }
  cResult[4] = tmp4.nitroIcon;
  cResult[5] = mobileEmojiPickerUpsellRestyleEnabled;
  cResult[6] = tmp14Result;
  tmp13 = tmp14Result;
}) : (function EmojiPickerListPremiumSearchUpsell(useTier0UpsellContent) {
  let formatToPlainStringResult;
  let loading;
  let onPress;
  let stringResult;
  let tmp3Result;
  let tmp7Result;
  const tmp = closure_12();
  ({ loading, onPress } = closure_14(useTier0UpsellContent));
  closure_14(useTier0UpsellContent);
  const obj = MobileEmojiPickerUpsellRestyleExperiment;
  const mobileEmojiPickerUpsellRestyleEnabled = obj.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  closure_13(useTier0UpsellContent);
  useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
  PremiumExpressionPickerSearchUpsellDefault;
  const intl = intl3.intl;
  if (useTier0UpsellContent) {
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { planName: tmp3Result.getTierDisplayNameByPlanId(authStore.PREMIUM_MONTH_TIER_0) };
    const kWBwlJ = tmp3(1126).t.kWBwlJ;
    tmp3Result = PremiumUtils;
    formatToPlainStringResult = formatToPlainString(kWBwlJ, obj2);
  } else {
    formatToPlainStringResult = intl.string(tmp3(1126).t["5t3lw+"]);
  }
  const useTier0UpsellContent2 = useTier0UpsellContent.useTier0UpsellContent;
  const intl2 = tmp3(1126).intl;
  const string = intl2.string;
  const t = tmp3(1126).t;
  if (useTier0UpsellContent2) {
    stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  if (mobileEmojiPickerUpsellRestyleEnabled) {
    const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon };
    const NitroWheelIcon = tmp3(9035).NitroWheelIcon;
    tmp7Result = tmp7(NitroWheelIcon, obj4);
  } else {
    const obj5 = { style: tmp.nitroIcon, source: AssetRegistryDefault, disableColor: true, size: native.Icon.Sizes.MEDIUM };
    const Icon = tmp3(1200).Icon;
    tmp7Result = tmp7(Icon, obj5);
  }
  return <tmp9 body={formatToPlainStringResult} ctaText={stringResult} icon={tmp7Result} loading={loading} onPress={onPress} />;
}));
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export const useEmojiPickerPremiumSearchUpsellViewed = tmp5;
export const useEmojiPickerPremiumSearchUpsellClick = tmp6;
export const PremiumSearchUpsell = memoResult;
