// Module ID: 10256
// Function ID: 10257
// Name: PremiumGiftWishlistBanner
// Dependencies: [5, 19, 17, 6648, 1374, 1074, 1076, 7628, 21, 576, 4836, 8226, 8238, 10257, 10261, 6583, 6603, 1241, 7624, 10206, 10262, 4693, 4528, 1115, 6961, 10473, 4678, 4832, 10499, 10504, 2]
// Exports: PremiumGiftWishlistBanner

// Module 10256 (PremiumGiftWishlistBanner)
import nativeDefault from "native" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import WishlistRecommendationRecord from "WishlistRecommendationRecord" /* 6648 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import Constants2 from "Constants" /* 7628 */;
import WishlistBannerUtils from "WishlistBannerUtils" /* 10261 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set, sku;

let c10;
let c9;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let unpackModuleId;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
let closure_7 = WishlistRecommendationRecord.WishlistRecommendationReason;
({ GiftingOrigin: metroImportAll, PremiumSubscriptionSKUToPremiumType: c9 } = PremiumConstants);
({ AnalyticEvents: c10, SKUProductLines: unpackModuleId } = Constants);
let closure_12 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const UserProfileSections = Constants2.UserProfileSections;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let closure_18 = createStyles.createStyles((width, height) => {
  let obj4;
  let size1;
  const obj = { title: { marginBottom: nativeDefault.space.PX_4, paddingHorizontal: PX_16 }, subtitle: { marginBottom: nativeDefault.space.PX_12, paddingHorizontal: PX_16 }, placeholderRow: obj4, placeholder: size, wishlistItemShadow: size1 };
  ({ marginBottom: nativeDefault.space.PX_4, paddingHorizontal: PX_16 });
  obj4 = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  ({ marginBottom: nativeDefault.space.PX_12, paddingHorizontal: PX_16 });
  size = { width, height, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT };
  size1 = { width, height, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx");

export const PremiumGiftWishlistBanner = function PremiumGiftWishlistBanner(giftRecipient) {
  let items6;
  let obj11;
  let obj9;
  giftRecipient = giftRecipient.giftRecipient;
  let WISHLIST_IN_DM_LENGTH_MOBILE;
  let closure_15;
  size = { width: giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[11]).COLLECTIBLES_SHOP_CARD_WIDTH, height: giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[11]).COLLECTIBLES_SHOP_CARD_WIDTH };
  let tmp = giftRecipient;
  let tmp2 = WISHLIST_IN_DM_LENGTH_MOBILE;
  WISHLIST_IN_DM_LENGTH_MOBILE = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WISHLIST_IN_DM_LENGTH_MOBILE;
  let obj = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[13]);
  let obj2 = { userId: giftRecipient.id, numItems: WISHLIST_IN_DM_LENGTH_MOBILE };
  const wishlistRecommendationsForSingleUser = obj.useWishlistRecommendationsForSingleUser(obj2);
  const wishlistAndRecommendations = wishlistRecommendationsForSingleUser.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistRecommendationsForSingleUser.skusToUserAndReason;
  const status = wishlistRecommendationsForSingleUser.status;
  const totalUnownedWishlistItemCount = wishlistRecommendationsForSingleUser.totalUnownedWishlistItemCount;
  const defaultWishlistId = wishlistRecommendationsForSingleUser.defaultWishlistId;
  let items = [wishlistAndRecommendations, giftRecipient.id, skusToUserAndReason];
  const memo = skusToUserAndReason.useMemo(() => {
    let id;
    const found = wishlistAndRecommendations.filter((productLine) => productLine.productLine === constants.PREMIUM || productLine.productLine === constants.COLLECTIBLES || productLine.productLine === constants.SOCIAL_LAYER_GAME_ITEM);
    return found.map((sku) => {
      const obj = { sku, source: null };
      if (null != skusToUserAndReason[sku.id]) {
        let POPULAR;
        if (tmp[sku.id][id.id] === defaultWishlistId.WISHLIST) {
          POPULAR = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.WISHLIST;
        }
        obj.source = POPULAR;
        return obj;
      }
      POPULAR = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.POPULAR;
    });
  }, items);
  let items1 = [totalUnownedWishlistItemCount, WISHLIST_IN_DM_LENGTH_MOBILE, memo];
  let tmp5 = size;
  const memo1 = skusToUserAndReason.useMemo(() => {
    const obj = WishlistBannerUtils;
    const obj2 = { totalUnownedWishlistItemCount, wishlistInDmLength: WISHLIST_IN_DM_LENGTH_MOBILE, displayItems: memo };
    return obj.getBannerMode(obj2);
  }, items1);
  const tmp6 = size(WISHLIST_IN_DM_LENGTH_MOBILE[15]);
  const analyticsLocations = tmp6(size(WISHLIST_IN_DM_LENGTH_MOBILE[16]).WISHLIST_BANNER).analyticsLocations;
  const ref = skusToUserAndReason.useRef(false);
  let items2 = [status, memo, giftRecipient.id, analyticsLocations];
  const effect = skusToUserAndReason.useEffect(function() {
    let from;
    const current = ref.current;
    let tmp2 = !current;
    const tmp = ref;
    if (!current) {
      tmp2 = "success" === status;
    }
    if (tmp2) {
      tmp2 = memo.length > 0;
    }
    if (tmp2) {
      const obj = { gift_recipient_id: giftRecipient.id, sku_ids: memo.map((sku) => sku.sku.id), location_stack: analyticsLocations, product_lines: from(set) };
      const track = AnalyticsUtilsDefault.track;
      const IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED = ref.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED;
      AnalyticsUtilsDefault;
      const _Array = Array;
      const _Set = Set;
      from = Array.from;
      const self = this;
      const self2 = this;
      set = new Set(memo.map((sku) => sku.sku.productLine));
      track(IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, obj);
      tmp.current = true;
    }
  }, items2);
  const items3 = [giftRecipient.id, analyticsLocations];
  const callback = skusToUserAndReason.useCallback(() => {
    const obj = { userId: giftRecipient.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items3);
  const obj3 = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[19]);
  const selectPremiumGift = obj3.useSelectPremiumGift("PremiumGiftWishlistBanner");
  const useCallback = skusToUserAndReason.useCallback;
  let closure_0 = wishlistAndRecommendations((lockedRecipientUser, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, value) {
      let intl;
      let items;
      let items1;
      let items2;
      let str;
      let tmp5;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
            } else {
              const obj4 = { sku_id: lockedRecipientUser.id, item_source: str, wishlist_id: tmp5, product_line: lockedRecipientUser.productLine };
              const track = size(WISHLIST_IN_DM_LENGTH_MOBILE[17]).track;
              const GIFTING_ITEM_CLICKED = constants2.GIFTING_ITEM_CLICKED;
              str = "shop";
              size(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
              const tmp28 = closure_1;
              if (closure_1 === lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.WISHLIST) {
                str = "wishlist";
              }
              tmp5 = null;
              if (tmp28 === lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.WISHLIST) {
                tmp5 = closure_1_7;
              }
              track(GIFTING_ITEM_CLICKED, obj4);
              if (lockedRecipientUser.productLine !== constants3.PREMIUM) {
                if (lockedRecipientUser.productLine !== tmp7.SOCIAL_LAYER_GAME_ITEM) {
                  const tmp33Result = lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[21]);
                  const rootNavigationRef = tmp33Result.getRootNavigationRef();
                  if (null != rootNavigationRef) {
                    if (rootNavigationRef.isReady()) {
                      const obj5 = { analyticsLocations: items, analyticsSource: size(WISHLIST_IN_DM_LENGTH_MOBILE[16]).GIFT_SELECTION_MODAL_WISHLIST, screen: constants4.FEATURED_PAGE };
                      const openCollectiblesShopMobile = lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[24]).openCollectiblesShopMobile;
                      items = [];
                      lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[24]);
                      items[0] = size(WISHLIST_IN_DM_LENGTH_MOBILE[16]).GIFT_SELECTION_MODAL_WISHLIST;
                      const result = openCollectiblesShopMobile(obj5);
                      const obj6 = { skuId: lockedRecipientUser.id, analyticsLocations: items1, lockedRecipientUser, giftingOrigin: constants.DM_CHANNEL_WISHLIST };
                      const openShopGiftModal = lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[25]).openShopGiftModal;
                      items1 = [];
                      lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[25]);
                      items1[0] = size(WISHLIST_IN_DM_LENGTH_MOBILE[16]).GIFT_SELECTION_MODAL_WISHLIST;
                      openShopGiftModal(obj6);
                    }
                  }
                  const obj7 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: intl.string(lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[23]).t["rTU7/z"]) };
                  const open = size(WISHLIST_IN_DM_LENGTH_MOBILE[22]).open;
                  size(WISHLIST_IN_DM_LENGTH_MOBILE[22]);
                  intl = tmp33(tmp30[23]).intl;
                  open(obj7);
                } else {
                  const obj8 = { skuId: lockedRecipientUser.id, analyticsLocations: items2, lockedRecipientUser, giftingOrigin: constants.DM_CHANNEL_WISHLIST };
                  const openSocialLayerStorefrontGiftModal = lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[20]).openSocialLayerStorefrontGiftModal;
                  items2 = [];
                  lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[20]);
                  items2[0] = size(WISHLIST_IN_DM_LENGTH_MOBILE[16]).GIFT_SELECTION_MODAL_WISHLIST;
                  const result1 = openSocialLayerStorefrontGiftModal(obj8);
                }
              } else {
                c3 = 1;
                c2 = 1;
                const obj9 = { value: closure_1_11(analyticsLocations[lockedRecipientUser.id]), done: false };
                return obj9;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp23) {
          c2 = 3;
          throw tmp23;
        }
      }
    })();
  });
  const items4 = [giftRecipient, defaultWishlistId, selectPremiumGift];
  closure_12 = useCallback(function() {
    return closure_0(...arguments);
  }, items4);
  let obj4 = size(WISHLIST_IN_DM_LENGTH_MOBILE[26]);
  const name = obj4.getName(giftRecipient);
  let obj5 = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[14]).BANNER_CONFIG_MOBILE[memo1];
  const title = obj5.title;
  const subtitle = obj5.getSubtitle(name);
  const tmp12 = closure_18(size.width, size.height);
  let closure_14 = tmp12;
  if ("error" === status) {
    return null;
  } else {
    let tmp17Result;
    let str = "loading";
    let tmp13 = "loading" === status;
    if (!tmp13) {
      tmp13 = 0 === memo.length;
    }
    let substr = memo;
    if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
      substr = memo.slice(0, WISHLIST_IN_DM_LENGTH_MOBILE - 1);
    }
    let tmp16 = null;
    if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
      tmp16 = memo[WISHLIST_IN_DM_LENGTH_MOBILE - 1];
    }
    closure_15 = tmp16;
    let obj6 = { style: tmp12.title, variant: "text-lg/semibold", children: title };
    const items5 = [closure_14(tmp(tmp2[27]).Text, obj6), , ];
    let obj7 = { style: tmp12.subtitle, variant: "text-sm/medium", color: "text-muted", children: subtitle };
    items5[1] = closure_14(tmp(tmp2[27]).Text, obj7);
    if (tmp13) {
      let obj8 = {
        style: tmp12.placeholderRow,
        children: Array.from(obj9, (arg0, arg1) => {
              const obj = { style: closure_14.placeholder };
              return authStore2(metroRequire, obj, arg1);
            })
      };
      let _Array = Array;
      obj9 = { length: WISHLIST_IN_DM_LENGTH_MOBILE };
      tmp17Result = tmp19(tmp18, obj8);
    } else {
      const obj10 = { horizontal: true, showsHorizontalScrollIndicator: false, snapToInterval: tmp(tmp2[11]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16, snapToAlignment: "start", decelerationRate: "fast", nestedScrollEnabled: true, contentContainerStyle: obj11, children: items6 };
      obj11 = { gap: PX_16, paddingHorizontal: PX_16, paddingVertical: tmp5(tmp2[9]).space.PX_8 };
      items6 = [
        substr.map((sku) => {
              let obj2;
              sku = sku.sku;
              const source = sku.source;
              const obj = { style: closure_14.wishlistItemShadow, children: closure_14(size(WISHLIST_IN_DM_LENGTH_MOBILE[28]), obj2) };
              obj2 = {
                sku,
                size: source,
                source,
                recipientName: name,
                onPress() {
                  return closure_12(sku, source);
                }
              };
              return closure_14(totalUnownedWishlistItemCount, obj, sku.id);
            }),

      ];
      let tmp19Result2 = null != tmp16;
      const tmp20 = status;
      if (tmp19Result2) {
        let tmp24;
        const obj12 = { style: tmp12.wishlistItemShadow, children: null };
        if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
          const obj13 = { sku: tmp16.sku, size, recipientName: name, overflowCount: totalUnownedWishlistItemCount - WISHLIST_IN_DM_LENGTH_MOBILE + 1, onPress: callback };
          obj12.children = closure_14(tmp5(tmp2[29]), obj13);
          tmp24 = obj12;
        } else {
          const obj14 = {
            sku: tmp16.sku,
            size,
            source: tmp16.source,
            recipientName: name,
            onPress() {
                      return closure_12(closure_15.sku, closure_15.source);
                    }
          };
          obj12.children = closure_14(tmp5(tmp2[28]), obj14);
          tmp24 = obj12;
        }
        tmp19Result2 = tmp19(tmp18, tmp24);
      }
      items6[1] = tmp19Result2;
      tmp17Result = tmp17(tmp20, obj10);
    }
    const obj15 = { children: items5 };
    items5[2] = tmp17Result;
    return closure_15(totalUnownedWishlistItemCount, obj15);
  }
};
