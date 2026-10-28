// Module ID: 9949
// Function ID: 9950
// Name: EmojiPickerPremiumSearchUpsell
// Dependencies: [19, 1389, 1084, 1391, 21, 5004, 558, 576, 1264, 9717, 5063, 9706, 9950, 2050, 1125, 9456, 587, 9951, 2]

// Module 9949 (EmojiPickerPremiumSearchUpsell)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import PremiumUtils from "PremiumUtils" /* 2050 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9950 */;
import PremiumExpressionPickerSearchUpsellDefault from "PremiumExpressionPickerSearchUpsell" /* 9951 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1084 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;

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
  const fn = function l() {
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiPickerPremiumSearchUpsellClick(arg0) {
  let analyticsLocations;
  let first;
  let loading;
  let onPress;
  let tmp7;
  let useTier0UpsellContent;
  let obj = onPress(576);
  const cResult = obj.c(6);
  ({ analyticsLocations, useTier0UpsellContent } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = onPress(9717);
    const upsellType = tmpResult.getUpsellType(tmp(5063).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    cResult[0] = upsellType;
    first = upsellType;
  } else {
    first = cResult[0];
  }
  const tmpResult2 = onPress(9706);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, tmpResult2.usePremiumUpsellConfig(first, analyticsLocations).onViewAllPerks, constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE));
  const tmp6 = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, tmpResult2.usePremiumUpsellConfig(first, analyticsLocations).onViewAllPerks, constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE);
  if (cResult[1] !== onPress) {
    const fn = function u() {
      const currentUser = UserStore.getCurrentUser();
      let result = null == currentUser;
      if (!result) {
        const obj = PremiumUtilsDefault;
        result = obj.canUseEmojisEverywhere(currentUser);
      }
      if (!result) {
        onPress();
      }
    };
    cResult[1] = onPress;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === loading) {
    let tmp8;
    if (cResult[4] === tmp7) {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
  const obj2 = { loading, onPress: tmp7 };
  cResult[3] = loading;
  cResult[4] = tmp7;
  cResult[5] = obj2;
  tmp8 = obj2;
}) : (function useEmojiPickerPremiumSearchUpsellClick(arg0) {
  let analyticsLocations;
  let items;
  let useTier0UpsellContent;
  let onPress;
  ({ analyticsLocations, useTier0UpsellContent } = arg0);
  const usePremiumUpsellConfig = onPress(9706).usePremiumUpsellConfig;
  onPress(9706);
  let obj = onPress(9717);
  const tmp2 = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, usePremiumUpsellConfig(obj.getUpsellType(onPress(5063).EntitlementFeatureNames.EMOJIS_EVERYWHERE), analyticsLocations).onViewAllPerks, constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE);
  onPress = tmp2.onPress;
  const obj2 = {
    loading: tmp2.loading,
    onPress: react.useCallback(() => {
      const currentUser = UserStore.getCurrentUser();
      let result = null == currentUser;
      if (!result) {
        const obj = PremiumUtilsDefault;
        result = obj.canUseEmojisEverywhere(currentUser);
      }
      if (!result) {
        onPress();
      }
    }, items)
  };
  items = [onPress];
  return obj2;
});
let closure_14 = tmp6;
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerListPremiumSearchUpsell(useTier0UpsellContent) {
  let loading;
  let onPress;
  let tmp10;
  let tmp12;
  let tmp7;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(12);
  const tmp4 = closure_12();
  ({ loading, onPress } = closure_14(useTier0UpsellContent));
  closure_14(useTier0UpsellContent);
  closure_13(useTier0UpsellContent);
  if (cResult[0] !== useTier0UpsellContent.useTier0UpsellContent) {
    let formatToPlainStringResult;
    useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
    const intl = tmp(1125).intl;
    if (useTier0UpsellContent) {
      const formatToPlainString = intl.formatToPlainString;
      const obj2 = { planName: tmpResult.getTierDisplayNameByPlanId(authStore.PREMIUM_MONTH_TIER_0) };
      const kWBwlJ = tmp(1125).t.kWBwlJ;
      tmpResult = PremiumUtils;
      formatToPlainStringResult = formatToPlainString(kWBwlJ, obj2);
    } else {
      formatToPlainStringResult = intl.string(tmp(1125).t["5t3lw+"]);
    }
    cResult[0] = useTier0UpsellContent.useTier0UpsellContent;
    cResult[1] = formatToPlainStringResult;
    tmp7 = formatToPlainStringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== useTier0UpsellContent.useTier0UpsellContent) {
    let stringResult;
    const useTier0UpsellContent2 = useTier0UpsellContent.useTier0UpsellContent;
    const intl2 = tmp(1125).intl;
    const string = intl2.string;
    const t = tmp(1125).t;
    if (useTier0UpsellContent2) {
      stringResult = string(t["9CM5v9"]);
    } else {
      stringResult = string(t.pj0XBN);
    }
    cResult[2] = useTier0UpsellContent.useTier0UpsellContent;
    cResult[3] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.nitroIcon) {
    const NitroWheelIcon = tmp(9456).NitroWheelIcon;
    const tmp15 = <NitroWheelIcon size="sm" color={nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE} style={tmp4.nitroIcon} />;
    cResult[4] = tmp4.nitroIcon;
    cResult[5] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === loading) {
    if (cResult[7] === onPress) {
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp10) {
          let tmp16;
          if (cResult[10] === tmp12) {
            tmp16 = cResult[11];
          }
          return tmp16;
        }
      }
    }
  }
  const tmp17 = jsx(PremiumExpressionPickerSearchUpsellDefault, { body: tmp7, ctaText: tmp10, icon: tmp12, loading, onPress });
  cResult[6] = loading;
  cResult[7] = onPress;
  cResult[8] = tmp7;
  cResult[9] = tmp10;
  cResult[10] = tmp12;
  cResult[11] = tmp17;
  tmp16 = tmp17;
}) : (function EmojiPickerListPremiumSearchUpsell(useTier0UpsellContent) {
  let formatToPlainStringResult;
  let loading;
  let onPress;
  let stringResult;
  let tmp10;
  let tmp8Result;
  const tmp = closure_12();
  ({ loading, onPress } = closure_14(useTier0UpsellContent));
  closure_14(useTier0UpsellContent);
  closure_13(useTier0UpsellContent);
  useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
  PremiumExpressionPickerSearchUpsellDefault;
  const intl = intl3.intl;
  if (useTier0UpsellContent) {
    const formatToPlainString = intl.formatToPlainString;
    const obj = { planName: tmp8Result.getTierDisplayNameByPlanId(authStore.PREMIUM_MONTH_TIER_0) };
    const kWBwlJ = tmp8(1125).t.kWBwlJ;
    tmp8Result = PremiumUtils;
    formatToPlainStringResult = formatToPlainString(kWBwlJ, obj);
    tmp10 = tmp8;
  } else {
    formatToPlainStringResult = intl.string(tmp8(1125).t["5t3lw+"]);
    tmp10 = tmp8;
  }
  const useTier0UpsellContent2 = useTier0UpsellContent.useTier0UpsellContent;
  const intl2 = tmp10(1125).intl;
  const string = intl2.string;
  const t = tmp10(1125).t;
  if (useTier0UpsellContent2) {
    stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  ({ size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon });
  const NitroWheelIcon = tmp10(9456).NitroWheelIcon;
  return <tmp7 body={formatToPlainStringResult} ctaText={stringResult} icon={null} loading={loading} onPress={onPress} />;
}));
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export const useEmojiPickerPremiumSearchUpsellViewed = tmp5;
export const useEmojiPickerPremiumSearchUpsellClick = tmp6;
export const PremiumSearchUpsell = memoResult;
