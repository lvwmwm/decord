// Module ID: 10029
// Function ID: 10030
// Name: EmojiPickerPremiumSearchUpsell
// Dependencies: [19, 1383, 1072, 1385, 21, 5014, 1252, 9785, 9796, 5073, 10030, 2047, 10031, 1113, 9528, 575, 2]
// Exports: useEmojiPickerPremiumSearchUpsellClick, useEmojiPickerPremiumSearchUpsellViewed

// Module 10029 (EmojiPickerPremiumSearchUpsell)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2047 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10030 */;
import PremiumExpressionPickerSearchUpsellDefault from "PremiumExpressionPickerSearchUpsell" /* 10031 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp5;
const nativeDefault = tmp5(575);
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire, AnalyticsSections: metroImportDefault } = Constants);
({ PremiumSubscriptionSKUs: metroImportAll, PremiumUpsellTypes: c9, SubscriptionPlans: c10 } = PremiumConstants);
const jsx = Fragment.jsx;
let closure_12 = createStyles.createStyles({ nitroIcon: { marginRight: 8, alignSelf: "center" } });
const memoResult = react.memo(function EmojiPickerListPremiumSearchUpsell(guildId) {
  let NitroWheelIcon;
  let analyticsLocations;
  let constants2;
  let constants3;
  let constants4;
  let formatToPlainStringResult;
  let obj4;
  let stringResult;
  let tmp2Result;
  let useTier0UpsellContent;
  let onPress;
  const tmp = closure_12();
  ({ analyticsLocations, useTier0UpsellContent } = guildId);
  const tmp4 = onPress(9785);
  const usePremiumUpsellConfig = tmp4.usePremiumUpsellConfig;
  let obj = onPress(9796);
  const tmp6 = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, usePremiumUpsellConfig(obj.getUpsellType(onPress(5073).EntitlementFeatureNames.EMOJIS_EVERYWHERE), analyticsLocations).onViewAllPerks, constants.PREMIUM_UPSELL_EMOJI_EVERYWHERE);
  onPress = tmp6.onPress;
  const items = [onPress];
  const loading = tmp6.loading;
  guildId = undefined;
  guildId = guildId.guildId;
  const analyticsLocations2 = guildId.analyticsLocations;
  const useTier0UpsellContent2 = guildId.useTier0UpsellContent;
  const callback = react.useCallback(() => {
    const currentUser = UserStore.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      const obj = PremiumUtilsDefault;
      result = obj.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      onPress();
    }
  }, items);
  const ref = react.useRef(false);
  const items1 = [analyticsLocations2, guildId, useTier0UpsellContent2, ref];
  const effect = react.useEffect(() => {
    let obj2;
    if (!ref.current) {
      let DM_CHANNEL;
      tmp.current = true;
      const obj = { type: constants4.EMOJI_PICKER_SEARCH, location: obj2, location_stack: analyticsLocations2, sku_id: useTier0UpsellContent2 ? closure_2_8.TIER_0 : closure_2_8.TIER_2 };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_UPSELL_VIEWED = constants.PREMIUM_UPSELL_VIEWED;
      AnalyticsUtilsDefault;
      if (null != guildId) {
        DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      obj2 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      track(PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items1);
  const useTier0UpsellContent3 = guildId.useTier0UpsellContent;
  const tmp11 = PremiumExpressionPickerSearchUpsellDefault;
  const intl = onPress(1113).intl;
  if (useTier0UpsellContent3) {
    const formatToPlainString = intl.formatToPlainString;
    let obj2 = { planName: tmp2Result.getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0) };
    const kWBwlJ = tmp2(1113).t.kWBwlJ;
    tmp2Result = onPress(2047);
    formatToPlainStringResult = formatToPlainString(kWBwlJ, obj2);
  } else {
    formatToPlainStringResult = intl.string(tmp2(1113).t["5t3lw+"]);
  }
  const useTier0UpsellContent4 = guildId.useTier0UpsellContent;
  const obj3 = { body: formatToPlainStringResult, ctaText: stringResult, icon: jsx(NitroWheelIcon, obj4), loading, onPress: callback };
  const intl2 = tmp2(1113).intl;
  const string = intl2.string;
  const t = tmp2(1113).t;
  if (useTier0UpsellContent4) {
    stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon };
  NitroWheelIcon = tmp2(9528).NitroWheelIcon;
  return jsx(tmp11, obj3);
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
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
      const obj = { type: constants4.EMOJI_PICKER_SEARCH, location: obj2, location_stack: analyticsLocations2, sku_id: useTier0UpsellContent2 ? closure_2_8.TIER_0 : closure_2_8.TIER_2 };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_UPSELL_VIEWED = constants.PREMIUM_UPSELL_VIEWED;
      AnalyticsUtilsDefault;
      if (null != guildId) {
        DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      obj2 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      track(PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items);
}
export function useEmojiPickerPremiumSearchUpsellClick(arg0) {
  let analyticsLocations;
  let items;
  let useTier0UpsellContent;
  let onPress;
  ({ analyticsLocations, useTier0UpsellContent } = arg0);
  const usePremiumUpsellConfig = onPress(9785).usePremiumUpsellConfig;
  onPress(9785);
  const obj = onPress(9796);
  const tmp2 = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, usePremiumUpsellConfig(obj.getUpsellType(onPress(5073).EntitlementFeatureNames.EMOJIS_EVERYWHERE), analyticsLocations).onViewAllPerks, constants.PREMIUM_UPSELL_EMOJI_EVERYWHERE);
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
}
export const PremiumSearchUpsell = memoResult;
