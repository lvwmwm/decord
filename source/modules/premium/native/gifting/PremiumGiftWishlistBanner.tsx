// Module ID: 9762
// Function ID: 75821
// Name: PremiumGiftWishlistBanner
// Dependencies: [5, 31, 27, 5610, 1851, 653, 655, 8308, 33, 689, 4130, 8704, 8717, 9763, 9767, 5462, 5482, 675, 8537, 9716, 9768, 3982, 3831, 1212, 6773, 8813, 3969, 4126, 9785, 9790, 2]
// Exports: PremiumGiftWishlistBanner

// Module 9762 (PremiumGiftWishlistBanner)
import closure_3 from "ME";
import result from "result";
import get_ActivityIndicator from "Text";
import { WishlistRecommendationReason as closure_7 } from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import { CollectiblesMobileShopScreen as closure_12 } from "items";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ GiftingOrigin: closure_8, PremiumSubscriptionSKUToPremiumType: closure_9 } = GuildFeatures);
({ AnalyticEvents: closure_10, SKUProductLines: closure_11 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
let closure_18 = _createForOfIteratorHelperLoose.createStyles((width, height) => {
  let obj = {};
  obj = { marginBottom: importDefault(689).space.PX_4, paddingHorizontal: PX_16 };
  obj.title = obj;
  obj = { marginBottom: importDefault(689).space.PX_12, paddingHorizontal: PX_16 };
  obj.subtitle = obj;
  obj.placeholderRow = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  obj.placeholder = { width, height, borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.BACKGROUND_SECONDARY_ALT };
  const obj1 = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  const obj2 = { width, height, borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.BACKGROUND_SECONDARY_ALT };
  const merged = Object.assign(importDefault(689).shadows.SHADOW_LOW);
  obj.wishlistItemShadow = { width, height, borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.BG_SURFACE_RAISED };
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx");

export const PremiumGiftWishlistBanner = function PremiumGiftWishlistBanner(giftRecipient) {
  giftRecipient = giftRecipient.giftRecipient;
  let sku;
  const size = { width: giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[11]).COLLECTIBLES_SHOP_CARD_WIDTH, height: giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[11]).COLLECTIBLES_SHOP_CARD_WIDTH };
  WISHLIST_IN_DM_LENGTH_MOBILE = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WISHLIST_IN_DM_LENGTH_MOBILE;
  let obj = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[13]);
  obj = { userId: giftRecipient.id, numItems: WISHLIST_IN_DM_LENGTH_MOBILE };
  const wishlistRecommendationsForSingleUser = obj.useWishlistRecommendationsForSingleUser(obj);
  const wishlistAndRecommendations = wishlistRecommendationsForSingleUser.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistRecommendationsForSingleUser.skusToUserAndReason;
  const status = wishlistRecommendationsForSingleUser.status;
  let totalUnownedWishlistItemCount = wishlistRecommendationsForSingleUser.totalUnownedWishlistItemCount;
  const defaultWishlistId = wishlistRecommendationsForSingleUser.defaultWishlistId;
  const items = [wishlistAndRecommendations, giftRecipient.id, skusToUserAndReason];
  const memo = skusToUserAndReason.useMemo(() => {
    const found = wishlistAndRecommendations.filter((productLine) => {
      let tmp = productLine.productLine === selectPremiumGift.PREMIUM;
      if (!tmp) {
        tmp = productLine.productLine === selectPremiumGift.COLLECTIBLES;
      }
      if (!tmp) {
        tmp = productLine.productLine === selectPremiumGift.SOCIAL_LAYER_GAME_ITEM;
      }
      return tmp;
    });
    return found.map((sku) => {
      const obj = { sku };
      if (null != outer1_4[sku.id]) {
        if (outer1_4[sku.id][outer1_0.id] === defaultWishlistId.WISHLIST) {
          let POPULAR = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.WISHLIST;
        }
        obj.source = POPULAR;
        return obj;
      }
      POPULAR = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.POPULAR;
    });
  }, items);
  const items1 = [totalUnownedWishlistItemCount, WISHLIST_IN_DM_LENGTH_MOBILE, memo];
  const memo1 = skusToUserAndReason.useMemo(() => {
    let obj = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[14]);
    obj = { totalUnownedWishlistItemCount, wishlistInDmLength: WISHLIST_IN_DM_LENGTH_MOBILE, displayItems: memo };
    return obj.getBannerMode(obj);
  }, items1);
  const analyticsLocations = size(WISHLIST_IN_DM_LENGTH_MOBILE[15])(size(WISHLIST_IN_DM_LENGTH_MOBILE[16]).WISHLIST_BANNER).analyticsLocations;
  let closure_10 = skusToUserAndReason.useRef(false);
  const items2 = [status, memo, giftRecipient.id, analyticsLocations];
  const effect = skusToUserAndReason.useEffect(() => {
    let tmp = !ref.current;
    if (tmp) {
      tmp = "success" === status;
    }
    if (tmp) {
      tmp = memo.length > 0;
    }
    if (tmp) {
      let obj = size(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
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
  let callback = skusToUserAndReason.useCallback(() => {
    size(WISHLIST_IN_DM_LENGTH_MOBILE[18])({ userId: giftRecipient.id, initialSection: name.WISHLIST, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  let obj2 = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[19]);
  const selectPremiumGift = obj2.useSelectPremiumGift("PremiumGiftWishlistBanner");
  const items4 = [giftRecipient, defaultWishlistId, selectPremiumGift];
  let closure_12 = skusToUserAndReason.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = wishlistAndRecommendations(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items4);
  let obj3 = size(WISHLIST_IN_DM_LENGTH_MOBILE[26]);
  let name = obj3.getName(giftRecipient);
  let obj4 = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[14]).BANNER_CONFIG_MOBILE[memo1];
  const subtitle = obj4.getSubtitle(name);
  const tmp9 = callback2(size.width, size.height);
  callback = tmp9;
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
    const obj1 = { style: tmp9.title, variant: "text-lg/semibold", children: obj4.title };
    const items5 = [callback(giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[27]).Text, obj1), , ];
    obj2 = { style: tmp9.subtitle, variant: "text-sm/medium", color: "text-muted", children: subtitle };
    items5[1] = callback(giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[27]).Text, obj2);
    if (tmp10) {
      obj3 = { style: tmp9.placeholderRow };
      let _Array = Array;
      obj4 = { length: WISHLIST_IN_DM_LENGTH_MOBILE };
      obj3.children = Array.from(obj4, (arg0, arg1) => tmp9(totalUnownedWishlistItemCount, { style: tmp9.placeholder }, arg1));
      let tmp19Result = callback(totalUnownedWishlistItemCount, obj3);
    } else {
      const obj5 = { horizontal: true, showsHorizontalScrollIndicator: false, snapToInterval: giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[11]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16, snapToAlignment: "start", decelerationRate: "fast", nestedScrollEnabled: true };
      const obj6 = { gap: PX_16, paddingHorizontal: PX_16, paddingVertical: size(WISHLIST_IN_DM_LENGTH_MOBILE[9]).space.PX_8 };
      obj5.contentContainerStyle = obj6;
      const items6 = [
        substr.map((sku) => {
              sku = sku.sku;
              const source = sku.source;
              obj = { style: tmp9.wishlistItemShadow, children: tmp9(size(WISHLIST_IN_DM_LENGTH_MOBILE[28]), obj) };
              obj = {
                sku,
                size: source,
                source,
                recipientName: name,
                onPress() {
                  return outer1_12(sku, source);
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
        let tmp30 = size;
        if (tmp11) {
          tmp30 = tmp30(tmp31[29]);
          const obj8 = {};
          sku = sku.sku;
          obj8.sku = sku;
          obj8.size = size;
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
            size,
            source: sku.source,
            recipientName: name,
            onPress() {
                      return callback(sku.sku, sku.source);
                    }
          };
          obj7.children = tmp29(tmp30(tmp31[28]), obj9);
          tmp32 = obj7;
        }
        callback(totalUnownedWishlistItemCount, tmp32);
        const tmp27 = callback;
        const tmp28 = totalUnownedWishlistItemCount;
      }
      tmp19 = sku;
      tmp20 = status;
    }
    items5[2] = tmp19Result;
    obj.children = items5;
    return sku(totalUnownedWishlistItemCount, obj);
  }
  const tmp3 = size(WISHLIST_IN_DM_LENGTH_MOBILE[15]);
};
