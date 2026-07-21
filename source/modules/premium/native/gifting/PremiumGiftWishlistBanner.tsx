// Module ID: 9720
// Function ID: 75544
// Name: PremiumGiftWishlistBanner
// Dependencies: []
// Exports: PremiumGiftWishlistBanner

// Module 9720 (PremiumGiftWishlistBanner)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = arg1(dependencyMap[3]).WishlistRecommendationReason;
const tmp2 = arg1(dependencyMap[2]);
({ GiftingOrigin: closure_8, PremiumSubscriptionSKUToPremiumType: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ AnalyticEvents: closure_10, SKUProductLines: closure_11 } = arg1(dependencyMap[5]));
let closure_12 = arg1(dependencyMap[6]).CollectiblesMobileShopScreen;
const UserProfileSections = arg1(dependencyMap[7]).UserProfileSections;
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
let PX_16 = importDefault(dependencyMap[9]).space.PX_16;
PX_16 = importDefault(dependencyMap[9]).space.PX_16;
const tmp5 = arg1(dependencyMap[8]);
let closure_18 = arg1(dependencyMap[10]).createStyles((width, height) => {
  let obj = {};
  obj = { marginBottom: importDefault(dependencyMap[9]).space.PX_4, paddingHorizontal: PX_16 };
  obj.title = obj;
  obj = { marginBottom: importDefault(dependencyMap[9]).space.PX_12, paddingHorizontal: PX_16 };
  obj.subtitle = obj;
  obj.placeholderRow = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  obj.placeholder = { width, height, borderRadius: importDefault(dependencyMap[9]).radii.lg, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SECONDARY_ALT };
  const obj1 = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  const obj2 = { width, height, borderRadius: importDefault(dependencyMap[9]).radii.lg, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SECONDARY_ALT };
  const merged = Object.assign(importDefault(dependencyMap[9]).shadows.SHADOW_LOW);
  obj.wishlistItemShadow = { width, height, borderRadius: importDefault(dependencyMap[9]).radii.lg, backgroundColor: importDefault(dependencyMap[9]).colors.BG_SURFACE_RAISED };
  return obj;
});
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx");

export const PremiumGiftWishlistBanner = function PremiumGiftWishlistBanner(giftRecipient) {
  giftRecipient = giftRecipient.giftRecipient;
  const arg1 = giftRecipient;
  let sku;
  let obj = { width: arg1(dependencyMap[11]).COLLECTIBLES_SHOP_CARD_WIDTH, height: arg1(dependencyMap[11]).COLLECTIBLES_SHOP_CARD_HEIGHT };
  const importDefault = obj;
  const WISHLIST_IN_DM_LENGTH_MOBILE = arg1(dependencyMap[12]).WISHLIST_IN_DM_LENGTH_MOBILE;
  const dependencyMap = WISHLIST_IN_DM_LENGTH_MOBILE;
  let obj1 = arg1(dependencyMap[13]);
  obj = { userId: giftRecipient.id, numItems: WISHLIST_IN_DM_LENGTH_MOBILE };
  const wishlistRecommendationsForSingleUser = obj1.useWishlistRecommendationsForSingleUser(obj);
  const wishlistAndRecommendations = wishlistRecommendationsForSingleUser.wishlistAndRecommendations;
  let closure_3 = wishlistAndRecommendations;
  const skusToUserAndReason = wishlistRecommendationsForSingleUser.skusToUserAndReason;
  const React = skusToUserAndReason;
  const status = wishlistRecommendationsForSingleUser.status;
  let totalUnownedWishlistItemCount = wishlistRecommendationsForSingleUser.totalUnownedWishlistItemCount;
  const defaultWishlistId = wishlistRecommendationsForSingleUser.defaultWishlistId;
  let closure_7 = defaultWishlistId;
  const items = [wishlistAndRecommendations, giftRecipient.id, skusToUserAndReason];
  const memo = React.useMemo(() => {
    const found = wishlistAndRecommendations.filter((productLine) => {
      let tmp = productLine.productLine === constants2.PREMIUM;
      if (!tmp) {
        tmp = productLine.productLine === constants2.COLLECTIBLES;
      }
      if (!tmp) {
        tmp = productLine.productLine === constants2.SOCIAL_LAYER_GAME_ITEM;
      }
      return tmp;
    });
    return found.map((sku) => {
      const obj = { sku };
      if (null != closure_4[sku.id]) {
        if (closure_4[sku.id][closure_0.id] === constants.WISHLIST) {
          let POPULAR = callback(closure_2[12]).WishlistItemSource.WISHLIST;
        }
        obj.source = POPULAR;
        return obj;
      }
      POPULAR = callback(closure_2[12]).WishlistItemSource.POPULAR;
    });
  }, items);
  const items1 = [totalUnownedWishlistItemCount, WISHLIST_IN_DM_LENGTH_MOBILE, memo];
  const memo1 = React.useMemo(() => {
    let obj = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[14]);
    obj = { totalUnownedWishlistItemCount, wishlistInDmLength: WISHLIST_IN_DM_LENGTH_MOBILE, displayItems: memo };
    return obj.getBannerMode(obj);
  }, items1);
  const analyticsLocations = importDefault(dependencyMap[15])(importDefault(dependencyMap[16]).WISHLIST_BANNER).analyticsLocations;
  let closure_10 = React.useRef(false);
  const items2 = [status, memo, giftRecipient.id, analyticsLocations];
  const effect = React.useEffect(() => {
    let tmp = !ref.current;
    if (tmp) {
      tmp = "success" === status;
    }
    if (tmp) {
      tmp = memo.length > 0;
    }
    if (tmp) {
      let obj = obj(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
      obj = { gift_recipient_id: giftRecipient.id, sku_ids: memo.map((sku) => sku.sku.id), location_stack: analyticsLocations };
      const _Array = Array;
      const _Set = Set;
      const set = new Set(memo.map((sku) => sku.sku.productLine));
      obj.product_lines = Array.from(set);
      obj.track(ref.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, obj);
      ref.current = true;
    }
  }, items2);
  const items3 = [giftRecipient.id, analyticsLocations];
  const callback = React.useCallback(() => {
    const obj = { userId: giftRecipient.id, initialSection: name.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
    obj(WISHLIST_IN_DM_LENGTH_MOBILE[18])(obj);
  }, items3);
  let obj3 = arg1(dependencyMap[19]);
  const selectPremiumGift = obj3.useSelectPremiumGift("PremiumGiftWishlistBanner");
  const items4 = [giftRecipient, defaultWishlistId, selectPremiumGift];
  let closure_12 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = wishlistAndRecommendations(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items4);
  let obj4 = importDefault(dependencyMap[26]);
  let name = obj4.getName(giftRecipient);
  const UserProfileSections = name;
  let obj5 = arg1(dependencyMap[14]).BANNER_CONFIG_MOBILE[memo1];
  const subtitle = obj5.getSubtitle(name);
  const tmp9 = callback(arg1(dependencyMap[11]).COLLECTIBLES_SHOP_CARD_WIDTH, arg1(dependencyMap[11]).COLLECTIBLES_SHOP_CARD_HEIGHT);
  if ("error" === status) {
    return null;
  } else {
    let tmp10 = "loading" === status;
    if (!tmp10) {
      tmp10 = 0 === memo.length;
    }
    let substr = memo;
    if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
      substr = memo.slice(0, WISHLIST_IN_DM_LENGTH_MOBILE - 1);
    }
    sku = null;
    if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
      sku = memo[WISHLIST_IN_DM_LENGTH_MOBILE - 1];
    }
    obj = {};
    obj1 = { style: tmp9.title, variant: "text-lg/semibold", children: obj5.title };
    const items5 = [tmp9(arg1(dependencyMap[27]).Text, obj1), , ];
    const obj2 = { "Null": "<string:1178599425>", "Null": "<string:3295084545>", "Null": "<string:1689649153>", style: tmp9.subtitle, children: subtitle };
    items5[1] = tmp9(arg1(dependencyMap[27]).Text, obj2);
    if (tmp10) {
      obj3 = { style: tmp9.placeholderRow };
      const _Array = Array;
      obj4 = { length: WISHLIST_IN_DM_LENGTH_MOBILE };
      obj3.children = Array.from(obj4, (arg0, arg1) => tmp9(totalUnownedWishlistItemCount, { style: tmp9.placeholder }, arg1));
      let tmp19Result = tmp9(totalUnownedWishlistItemCount, obj3);
    } else {
      obj5 = { snapToInterval: arg1(dependencyMap[11]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16 };
      const obj6 = { gap: PX_16, paddingHorizontal: PX_16, paddingVertical: importDefault(dependencyMap[9]).space.PX_8 };
      obj5.contentContainerStyle = obj6;
      const items6 = [
        substr.map((sku) => {
              sku = sku.sku;
              const giftRecipient = sku;
              const source = sku.source;
              let obj = source;
              obj = { style: tmp9.wishlistItemShadow, children: tmp9(obj(WISHLIST_IN_DM_LENGTH_MOBILE[28]), obj) };
              obj = {
                sku,
                size: obj,
                source,
                recipientName: name,
                onPress() {
                  return callback(sku, source);
                }
              };
              return tmp9(totalUnownedWishlistItemCount, obj, sku.id);
            }),

      ];
      if (null == sku) {
        items6[1] = tmp26;
        obj5.children = items6;
        tmp19Result = tmp19(tmp20, obj5);
      } else {
        const obj7 = { style: tmp9.wishlistItemShadow };
        let tmp30 = importDefault;
        if (tmp11) {
          tmp30 = tmp30(tmp31[29]);
          const obj8 = {};
          sku = sku.sku;
          obj8.sku = sku;
          obj8.size = obj;
          obj8.recipientName = name;
          name = totalUnownedWishlistItemCount - WISHLIST_IN_DM_LENGTH_MOBILE;
          totalUnownedWishlistItemCount = name + 1;
          obj8.overflowCount = totalUnownedWishlistItemCount;
          obj8.onPress = callback;
          obj7.children = tmp29(tmp30, obj8);
          let tmp32 = obj7;
        } else {
          const obj9 = {
            sku: sku.sku,
            size: obj,
            source: sku.source,
            recipientName: name,
            onPress() {
                      return callback(sku.sku, sku.source);
                    }
          };
          obj7.children = tmp29(tmp30(tmp31[28]), obj9);
          tmp32 = obj7;
        }
        tmp9(totalUnownedWishlistItemCount, tmp32);
        const tmp27 = tmp9;
        const tmp28 = totalUnownedWishlistItemCount;
      }
      const tmp19 = sku;
      const tmp20 = status;
    }
    items5[2] = tmp19Result;
    obj.children = items5;
    return sku(totalUnownedWishlistItemCount, obj);
  }
  const tmp3 = importDefault(dependencyMap[15]);
};
