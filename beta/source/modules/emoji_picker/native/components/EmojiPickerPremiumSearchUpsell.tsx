// Module ID: 9773
// Function ID: 9774
// Name: EmojiPickerPremiumSearchUpsell
// Dependencies: [19, 1372, 1074, 1374, 21, 4836, 1241, 7277, 8614, 9421, 7273, 9422, 4488, 4800, 8695, 8663, 9774, 1115, 8122, 576, 1177, 9775, 2]
// Exports: useEmojiPickerPremiumSearchUpsellClick, useEmojiPickerPremiumSearchUpsellViewed

// Module 9773 (EmojiPickerPremiumSearchUpsell)
import Fragment from "Fragment" /* 21 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

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
const memoResult = react.memo((analyticsLocations) => {
  let constants2;
  let constants3;
  let constants4;
  let formatToPlainStringResult;
  let stringResult;
  let tmp12Result;
  let tmp2Result;
  const tmp = closure_12();
  analyticsLocations = undefined;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let mobileEmojiPickerUpsellRestyleEnabled;
  let obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[7]);
  mobileEmojiPickerUpsellRestyleEnabled = obj.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  let tmp5 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[8]);
  const usePremiumUpsellConfig = tmp5.usePremiumUpsellConfig;
  let obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  const tmp7 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[11])(useTier0UpsellContent, usePremiumUpsellConfig(obj2.getUpsellType(analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]).EntitlementFeatureNames.EMOJIS_EVERYWHERE), analyticsLocations).onViewAllPerks, constants.PREMIUM_UPSELL_EMOJI_EVERYWHERE);
  const onPress = tmp7.onPress;
  const items = [analyticsLocations, useTier0UpsellContent, mobileEmojiPickerUpsellRestyleEnabled, onPress];
  const loading = tmp7.loading;
  const callback = onPress.useCallback(() => {
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
  }, items);
  let obj3 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[7]);
  const guildId = analyticsLocations.guildId;
  const analyticsLocations2 = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent2 = analyticsLocations.useTier0UpsellContent;
  const mobileEmojiPickerUpsellRestyleEnabled1 = obj3.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  const ref = onPress.useRef(false);
  const items1 = [analyticsLocations2, guildId, useTier0UpsellContent2, ref];
  const effect = onPress.useEffect(() => {
    let obj2;
    if (!ref.current) {
      let DM_CHANNEL;
      tmp.current = true;
      const obj = { type: constants4.EMOJI_PICKER_SEARCH, location: obj2, location_stack: analyticsLocations2, sku_id: useTier0UpsellContent2 ? closure_2_8.TIER_0 : closure_2_8.TIER_2 };
      const track = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[6]).track;
      const PREMIUM_UPSELL_VIEWED = constants.PREMIUM_UPSELL_VIEWED;
      useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[6]);
      if (null != guildId) {
        DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      obj2 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      track(PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items1);
  const useTier0UpsellContent3 = analyticsLocations.useTier0UpsellContent;
  const tmp13 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[16]);
  const intl = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[17]).intl;
  if (useTier0UpsellContent3) {
    const formatToPlainString = intl.formatToPlainString;
    const obj4 = { planName: tmp2Result.getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0) };
    const kWBwlJ = tmp2(tmp3[17]).t.kWBwlJ;
    tmp2Result = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]);
    formatToPlainStringResult = formatToPlainString(kWBwlJ, obj4);
  } else {
    formatToPlainStringResult = intl.string(tmp2(tmp3[17]).t["5t3lw+"]);
  }
  const useTier0UpsellContent4 = analyticsLocations.useTier0UpsellContent;
  const obj5 = { body: formatToPlainStringResult, ctaText: stringResult, icon: tmp12Result, loading, onPress: callback };
  const intl2 = tmp2(tmp3[17]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[17]).t;
  if (useTier0UpsellContent4) {
    stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  if (mobileEmojiPickerUpsellRestyleEnabled1) {
    const obj6 = { size: "sm", color: useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[19]).colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon };
    const NitroWheelIcon = tmp2(tmp3[18]).NitroWheelIcon;
    tmp12Result = tmp12(NitroWheelIcon, obj6);
  } else {
    const obj7 = { style: tmp.nitroIcon, source: useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[21]), disableColor: true, size: analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[20]).Icon.Sizes.MEDIUM };
    const Icon = tmp2(tmp3[20]).Icon;
    tmp12Result = tmp12(Icon, obj7);
  }
  return jsx(tmp13, obj5);
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export const useEmojiPickerPremiumSearchUpsellViewed = function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
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
      const track = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[6]).track;
      const PREMIUM_UPSELL_VIEWED = constants.PREMIUM_UPSELL_VIEWED;
      useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[6]);
      if (null != guildId) {
        DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      obj2 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      track(PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items);
};
export const useEmojiPickerPremiumSearchUpsellClick = function useEmojiPickerPremiumSearchUpsellClick(analyticsLocations) {
  let items;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let mobileEmojiPickerUpsellRestyleEnabled;
  const obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[7]);
  mobileEmojiPickerUpsellRestyleEnabled = obj.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  const usePremiumUpsellConfig = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[8]).usePremiumUpsellConfig;
  analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[8]);
  const obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  const tmp3 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[11])(useTier0UpsellContent, usePremiumUpsellConfig(obj2.getUpsellType(analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]).EntitlementFeatureNames.EMOJIS_EVERYWHERE), analyticsLocations).onViewAllPerks, constants.PREMIUM_UPSELL_EMOJI_EVERYWHERE);
  const onPress = tmp3.onPress;
  const obj3 = {
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
};
export const PremiumSearchUpsell = memoResult;
