// Module ID: 9403
// Function ID: 73304
// Name: useEmojiPickerPremiumSearchUpsellViewed
// Dependencies: [31, 27, 1849, 653, 1851, 33, 4130, 689, 675, 3776, 4098, 8183, 8059, 1273, 9404, 4126, 1212, 4660, 2]

// Module 9403 (useEmojiPickerPremiumSearchUpsellViewed)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
  guildId = guildId.guildId;
  const analyticsLocations = guildId.analyticsLocations;
  const useTier0UpsellContent = guildId.useTier0UpsellContent;
  ref = ref.useRef(false);
  const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
  const effect = ref.useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      let trackResult = analyticsLocations(useTier0UpsellContent[8]);
      trackResult = { type: outer1_10.EMOJI_PICKER_SEARCH };
      const obj = {};
      if (null != guildId) {
        let DM_CHANNEL = outer1_7.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = outer1_7.DM_CHANNEL;
      }
      obj.page = DM_CHANNEL;
      obj.section = outer1_8.EMOJI_PICKER_POPOUT;
      trackResult.location = obj;
      trackResult.location_stack = analyticsLocations;
      trackResult.sku_id = useTier0UpsellContent ? outer1_9.TIER_0 : outer1_9.TIER_2;
      trackResult = trackResult.track(outer1_6.PREMIUM_UPSELL_VIEWED, trackResult);
    }
  }, items);
}
function useEmojiPickerPremiumSearchUpsellClick(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  const items = [analyticsLocations, useTier0UpsellContent];
  return importAllResult.useCallback(() => {
    const currentUser = outer1_5.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      let tmp8Result = useTier0UpsellContent(outer1_2[9]);
      result = tmp8Result.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      useTier0UpsellContent(outer1_2[10]).hideActionSheet();
      tmp8Result = { analyticsLocations };
      const obj2 = useTier0UpsellContent(outer1_2[10]);
      const PremiumFeatureCardOrder = analyticsLocations(outer1_2[12]).PremiumFeatureCardOrder;
      tmp8Result.premiumFeatureCardOrder = useTier0UpsellContent ? PremiumFeatureCardOrder.TIER_0_LEADING : PremiumFeatureCardOrder.TIER_2_LEADING;
      tmp8Result = useTier0UpsellContent(outer1_2[11])(tmp8Result);
      const tmp8 = useTier0UpsellContent(outer1_2[11]);
    }
  }, items);
}
({ AnalyticEvents: closure_6, AnalyticsPages: closure_7, AnalyticsSections: closure_8 } = ME);
({ PremiumSubscriptionSKUs: closure_9, PremiumUpsellTypes: closure_10, SubscriptionPlans: closure_11 } = GuildFeatures);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = {};
obj = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.container = obj;
_createForOfIteratorHelperLoose = { height: 56, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" };
obj.premiumSearchUpsell = _createForOfIteratorHelperLoose;
obj.premiumSearchUpsellContent = { flex: 0.8, flexDirection: "row" };
obj.nitroIcon = { marginRight: 8, alignSelf: "center" };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((useTier0UpsellContent) => {
  const tmp = callback2();
  useEmojiPickerPremiumSearchUpsellViewed(useTier0UpsellContent);
  let obj = { style: tmp.premiumSearchUpsellContent };
  obj = { style: tmp.nitroIcon, source: importDefault(9404), disableColor: true, size: require(1273) /* Button */.Icon.Sizes.MEDIUM };
  const items = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { lineClamp: 2, variant: "text-sm/medium", color: "interactive-text-active" };
  const intl = require(1212) /* getSystemLocale */.intl;
  if (useTier0UpsellContent.useTier0UpsellContent) {
    const obj1 = { planName: tmp7(3776).getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0) };
    let formatToPlainStringResult = intl.formatToPlainString(tmp7(1212).t.kWBwlJ, obj1);
    const tmp7Result = tmp7(3776);
  } else {
    formatToPlainStringResult = intl.string(tmp7(1212).t["5t3lw+"]);
  }
  obj.children = formatToPlainStringResult;
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  const tmp2 = useEmojiPickerPremiumSearchUpsellClick(useTier0UpsellContent);
  const tmp4 = closure_13;
  const tmp5 = View;
  const tmp6 = callback;
  const obj2 = { style: tmp.premiumSearchUpsell, accessibilityRole: "button", onPress: tmp2 };
  const items1 = [closure_13(View, obj), ];
  const obj3 = { variant: "text-sm/medium", color: "text-link" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const string = intl2.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (useTier0UpsellContent.useTier0UpsellContent) {
    let stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  obj3.children = stringResult;
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  obj2.children = items1;
  const tmp12 = closure_13;
  const tmp13 = callback;
  const tmp4Result = closure_13(View, obj);
  return callback(View, { style: tmp.container, collapsable: false, children: closure_13(require(4660) /* PressableBase */.PressableOpacity, obj2) });
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export const EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT = 56;
export { useEmojiPickerPremiumSearchUpsellViewed };
export { useEmojiPickerPremiumSearchUpsellClick };
export const PremiumSearchUpsell = memoResult;
