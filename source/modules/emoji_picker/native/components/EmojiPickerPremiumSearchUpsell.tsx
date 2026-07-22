// Module ID: 9360
// Function ID: 73054
// Name: useEmojiPickerPremiumSearchUpsellViewed
// Dependencies: []

// Module 9360 (useEmojiPickerPremiumSearchUpsellViewed)
function useEmojiPickerPremiumSearchUpsellViewed(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const analyticsLocations = guildId.analyticsLocations;
  const importDefault = analyticsLocations;
  const useTier0UpsellContent = guildId.useTier0UpsellContent;
  const dependencyMap = useTier0UpsellContent;
  const ref = importAllResult.useRef(false);
  const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
  const effect = importAllResult.useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      let trackResult = analyticsLocations(useTier0UpsellContent[8]);
      trackResult = { type: constants4.EMOJI_PICKER_SEARCH };
      const obj = {};
      if (null != guildId) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      obj.page = DM_CHANNEL;
      obj.section = constants3.EMOJI_PICKER_POPOUT;
      trackResult.location = obj;
      trackResult.location_stack = analyticsLocations;
      trackResult.sku_id = useTier0UpsellContent ? closure_9.TIER_0 : closure_9.TIER_2;
      trackResult = trackResult.track(constants.PREMIUM_UPSELL_VIEWED, trackResult);
    }
  }, items);
}
function useEmojiPickerPremiumSearchUpsellClick(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const arg1 = analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  const importDefault = useTier0UpsellContent;
  const items = [analyticsLocations, useTier0UpsellContent];
  return importAllResult.useCallback(() => {
    const currentUser = currentUser.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      let tmp8Result = useTier0UpsellContent(closure_2[9]);
      result = tmp8Result.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      useTier0UpsellContent(closure_2[10]).hideActionSheet();
      tmp8Result = { analyticsLocations };
      const obj2 = useTier0UpsellContent(closure_2[10]);
      const PremiumFeatureCardOrder = analyticsLocations(closure_2[12]).PremiumFeatureCardOrder;
      tmp8Result.premiumFeatureCardOrder = useTier0UpsellContent ? PremiumFeatureCardOrder.TIER_0_LEADING : PremiumFeatureCardOrder.TIER_2_LEADING;
      tmp8Result = useTier0UpsellContent(closure_2[11])(tmp8Result);
      const tmp8 = useTier0UpsellContent(closure_2[11]);
    }
  }, items);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticEvents: closure_6, AnalyticsPages: closure_7, AnalyticsSections: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ PremiumSubscriptionSKUs: closure_9, PremiumUpsellTypes: closure_10, SubscriptionPlans: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { paddingTop: importDefault(dependencyMap[7]).space.PX_8 };
obj.container = obj;
obj1 = { padding: importDefault(dependencyMap[7]).space.PX_8, borderRadius: importDefault(dependencyMap[7]).radii.xs, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
obj.premiumSearchUpsell = obj1;
obj.premiumSearchUpsellContent = { marginLeft: "ILLO_GREEN_50", marginVertical: 0.3 };
obj.nitroIcon = { WAVE_EMPHASIZE: null, marginVertical: null };
let closure_14 = obj1.createStyles(obj);
const tmp4 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo((useTier0UpsellContent) => {
  const tmp = callback2();
  useEmojiPickerPremiumSearchUpsellViewed(useTier0UpsellContent);
  let obj = { style: tmp.premiumSearchUpsellContent };
  obj = { style: tmp.nitroIcon, source: importDefault(dependencyMap[14]), disableColor: true, size: arg1(dependencyMap[13]).Icon.Sizes.MEDIUM };
  const items = [callback(arg1(dependencyMap[13]).Icon, obj), ];
  obj = {};
  const intl = arg1(dependencyMap[16]).intl;
  if (useTier0UpsellContent.useTier0UpsellContent) {
    const obj1 = { planName: tmp7(tmp8[9]).getTierDisplayNameByPlanId(PREMIUM_MONTH_TIER_0.PREMIUM_MONTH_TIER_0) };
    let formatToPlainStringResult = intl.formatToPlainString(tmp7(tmp8[16]).t.kWBwlJ, obj1);
    const tmp7Result = tmp7(tmp8[9]);
  } else {
    formatToPlainStringResult = intl.string(tmp7(tmp8[16]).t.5t3lw+);
  }
  obj.children = formatToPlainStringResult;
  items[1] = callback(arg1(dependencyMap[15]).Text, obj);
  obj.children = items;
  const tmp2 = useEmojiPickerPremiumSearchUpsellClick(useTier0UpsellContent);
  const tmp4 = closure_13;
  const tmp5 = View;
  const tmp6 = callback;
  const obj2 = { style: tmp.premiumSearchUpsell, accessibilityRole: "button", onPress: tmp2 };
  const items1 = [closure_13(View, obj), ];
  const obj3 = { cachedAt: "<string:3344105473>", edpbxy: "<string:3465102384>" };
  const intl2 = arg1(dependencyMap[16]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[16]).t;
  if (useTier0UpsellContent.useTier0UpsellContent) {
    let stringResult = string(t.9CM5v9);
  } else {
    stringResult = string(t.pj0XBN);
  }
  obj3.children = stringResult;
  items1[1] = callback(arg1(dependencyMap[15]).Text, obj3);
  obj2.children = items1;
  const tmp12 = closure_13;
  const tmp13 = callback;
  const tmp4Result = closure_13(View, obj);
  return callback(View, { style: tmp.container, collapsable: false, children: closure_13(arg1(dependencyMap[17]).PressableOpacity, obj2) });
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export const EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT = 56;
export { useEmojiPickerPremiumSearchUpsellViewed };
export { useEmojiPickerPremiumSearchUpsellClick };
export const PremiumSearchUpsell = memoResult;
