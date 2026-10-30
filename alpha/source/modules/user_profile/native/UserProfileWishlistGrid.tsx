// Module ID: 14956
// Function ID: 14957
// Name: UserProfileWishlistGrid
// Dependencies: [5, 32, 19, 17, 7713, 14402, 9449, 9452, 9450, 1384, 6890, 7765, 8746, 1072, 1074, 1386, 21, 3, 5009, 575, 5075, 5016, 5619, 1114, 14785, 8753, 7320, 10593, 9889, 504, 14940, 8737, 14875, 14957, 14961, 5194, 5707, 5253, 11596, 2048, 7586, 5954, 10538, 7345, 1377, 10650, 7403, 10649, 8742, 2060, 7712, 14375, 7497, 4822, 8739, 14962, 1995, 5730, 5629, 11449, 8020, 10212, 14400, 7776, 2]
// Exports: default

// Module 14956 (UserProfileWishlistGrid)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl5 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import shared from "shared" /* 5016 */;
import native from "native" /* 5075 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import WishlistRecord from "WishlistRecord" /* 9450 */;
import CollectiblesWishlistItemRecord from "CollectiblesWishlistItemRecord" /* 9452 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7713 */;
import SentGiftsStore from "SentGiftsStore" /* 14402 */;
import WishlistStore from "WishlistStore" /* 9449 */;
import UserStore from "UserStore" /* 1384 */;
import SKUStore from "SKUStore" /* 6890 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import Constants_mod from "Constants" /* 8746 */;
import Constants_mod2 from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_4, countryCode, importDefault, order, premiumType, product, set, v0;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
class WishlistEmptyState {
  constructor() {
    let intl;
    let intl2;
    let items;
    const tmp = closure_27();
    const obj = native;
    const theme = obj.useThemeContext().theme;
    let str = "mobile-text-heading-primary";
    const obj2 = shared;
    if (obj2.isThemeDark(theme)) {
      str = "text-overlay-light";
    }
    const obj3 = { style: tmp.emptyState, children: items };
    const obj4 = { variant: "text-md/medium", color: str, accessibilityRole: "header", children: intl.string(intl5.t.HGnLLT) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    items = [closure_23(Text, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", style: tmp.emptyStateText, children: intl2.string(intl5.t["/X1ny6"]) };
    const Text2 = tmp2(5619).Text;
    intl2 = tmp2(1114).intl;
    items[1] = closure_23(Text2, obj5);
    return closure_24(View, obj3);
  }
}
const View = react_native.View;
let closure_10 = CollectiblesWishlistItemRecord.isCollectiblesWishlistItemRecord;
const getWishlistProductLines = WishlistRecord.getWishlistProductLines;
let Constants = Constants_mod2;
({ TrackUserProfileWishlistActions: closure_15, UserProfileSections: closure_16 } = Constants);
Constants = Constants_mod2;
({ Routes: closure_17, SKUProductLines: closure_18 } = Constants);
let closure_19 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ GiftingOrigin: closure_20, PremiumSubscriptionSKUToPremiumType: closure_21, SubscriptionIntervalTypes: closure_22 } = PremiumConstants);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = Fragment);
const tmp6 = new LoggerDefault("UserProfileWishlistGrid");
let closure_26 = tmp6;
let createStyles = createStyles_mod;
let obj = { headerRow: obj2, headerButtons: obj3, gridWrapper: { width: "100%", alignItems: "center" }, itemsContainer: obj4, emptyState: obj5, emptyStateText: { textAlign: "center" }, disclaimer: obj6, disclaimerTop: obj7 };
obj2 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16, justifyContent: "flex-start" };
obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
obj6 = { padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = { marginBottom: nativeDefault.space.PX_16 };
let closure_27 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWishlistGrid.tsx");

export default function UserProfileWishlistGrid(wishlistId) {
  let PencilIcon;
  let c1;
  let c15;
  let c16;
  let containerWidth;
  let intl2;
  let intl3;
  let intl4;
  let items16;
  let items17;
  let items19;
  let items20;
  let items21;
  let maxWidth;
  let nsfwAllowed;
  let obj14;
  let obj18;
  let obj21;
  let rowWidth;
  let stringResult;
  let tmp31;
  let tmp5;
  const f107539 = () => {
    set = new Set();
    return set;
  };
  wishlistId = wishlistId.wishlistId;
  const isVisible = wishlistId.isVisible;
  importDefault = undefined;
  let context;
  let trackUserProfileWishlistAction;
  let analyticsLocations;
  let createOrReuseGiftOrder;
  let mobileStoreFront;
  let stateFromStores;
  let closure_8;
  let stateFromStores5;
  let isShopStandalonePdpMobileEnabled;
  let memo1;
  let stateFromStoresArray;
  let memo2;
  let closure_14;
  c15 = undefined;
  c16 = undefined;
  let closure_17;
  ({ containerWidth, maxWidth } = wishlistId);
  let tmp = closure_27();
  let tmp2 = importDefault;
  const tmp3 = context;
  let tmp4 = require("useCardGridLayout")({ containerWidth, maxWidth });
  ({ cardWidth: c1, rowWidth } = tmp4);
  if (null != rowWidth) {
    let obj = { width: rowWidth };
    tmp5 = obj;
  }
  let obj2 = wishlistId(tmp3[25]);
  const userProfileAnalyticsContext = obj2.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileWishlistAction = userProfileAnalyticsContext.trackUserProfileWishlistAction;
  analyticsLocations = tmp2(tmp3[26])().analyticsLocations;
  let obj3 = wishlistId(tmp3[27]);
  createOrReuseGiftOrder = obj3.useCreateOrReuseGiftOrder("UserProfileWishlistGrid");
  const tmp2Result = tmp2(tmp3[28]);
  mobileStoreFront = tmp2Result.useMobileStoreFront();
  let obj5 = wishlistId(tmp3[29]);
  let items = [stateFromStores5];
  stateFromStores = obj5.useStateFromStores(items, () => WishlistStore.getWishlist(wishlistId));
  let obj6 = wishlistId(tmp3[29]);
  let items1 = [stateFromStores5];
  const stateFromStores1 = obj6.useStateFromStores(items1, () => WishlistStore.isFetching(wishlistId));
  let obj7 = wishlistId(tmp3[29]);
  let items2 = [stateFromStores5];
  const stateFromStores2 = obj7.useStateFromStores(items2, () => WishlistStore.getError(wishlistId));
  const obj8 = wishlistId(tmp3[29]);
  let items3 = [closure_14];
  let items4 = [stateFromStores, wishlistId];
  const stateFromStores3 = obj8.useStateFromStores(items3, () => {
    let wishlistSettings = null;
    if (null != stateFromStores) {
      wishlistSettings = UserProfileStore.getWishlistSettings(tmp.userId, wishlistId);
    }
    return wishlistSettings;
  }, items4);
  let visibility;
  if (stateFromStores3 != null) {
    visibility = stateFromStores3.visibility;
  }
  const PRIVATE = tmp6(tmp3[30]).WishlistVisibility.PRIVATE;
  let items5 = [stateFromStoresArray];
  const tmp6Result = wishlistId(tmp3[29]);
  const stateFromStores4 = tmp6Result.useStateFromStores(items5, () => stateFromStoresArray.getCurrentUser());
  let id;
  const tmp15 = stateFromStoresArray;
  if (stateFromStores4 != null) {
    id = stateFromStores4.id;
  }
  let userId;
  if (stateFromStores != null) {
    userId = stateFromStores.userId;
  }
  let tmp44Result2 = id === userId;
  closure_8 = tmp44Result2;
  let items6 = [tmp15];
  let items7 = [stateFromStores];
  const tmp6Result4 = wishlistId(tmp3[29]);
  stateFromStores5 = tmp6Result4.useStateFromStores(items6, () => {
    let user = null;
    if (null != stateFromStores) {
      user = UserStore.getUser(tmp.userId);
    }
    return user;
  }, items7);
  if (stateFromStores5 != null) {
    nsfwAllowed = stateFromStores5.nsfwAllowed;
  }
  let tmp21 = visibility === PRIVATE;
  const tmp6Result5 = wishlistId(tmp3[31]);
  isShopStandalonePdpMobileEnabled = tmp6Result5.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet");
  let intl = tmp6(tmp3[23]).intl;
  const string = intl.string;
  const t = tmp6(tmp3[23]).t;
  if (tmp21) {
    stringResult = string(t.RX7D9h);
  } else {
    stringResult = string(t.d78ChW);
  }
  let obj12 = createOrReuseGiftOrder;
  let items8 = [stateFromStores, tmp44Result2];
  const memo = createOrReuseGiftOrder.useMemo(() => {
    let isWishlistOwner;
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter((item) => {
        const obj = wishlistId(context[32]);
        const obj2 = { isWishlistOwner };
        return obj.isEligibleWishlistItemOnMobile(item, obj2);
      });
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items8);
  const items9 = [stateFromStores];
  memo1 = createOrReuseGiftOrder.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter(closure_10);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items9);
  const items10 = [closure_8];
  const items11 = [memo1, stateFromStores5];
  const tmp6Result6 = wishlistId(tmp3[29]);
  stateFromStoresArray = tmp6Result6.useStateFromStoresArray(items10, () => {
    let id;
    let items;
    if (null == stateFromStores5) {
      items = [];
    } else {
      const found = memo1.filter((skuId) => closure_8.hasSentGift(skuId.skuId, id.id));
      items = found.map((skuId) => skuId.skuId);
    }
    return items;
  }, items11);
  const items12 = [stateFromStoresArray];
  memo2 = createOrReuseGiftOrder.useMemo(() => {
    set = new Set(stateFromStoresArray);
    return set;
  }, items12);
  let userId1;
  const tmp2Result3 = tmp2(tmp3[33]);
  if (stateFromStores != null) {
    userId1 = stateFromStores.userId;
  }
  closure_14 = tmp2Result3({ ownerId: userId1, wishlistId, isVisible });
  [c15, c16] = analyticsLocations(obj12.useState(f107539), 2);
  let obj4 = { wishlistId, onAction: trackUserProfileWishlistAction, productLines: tmp31, isVisible };
  tmp31 = null;
  analyticsLocations(obj12.useState(f107539), 2);
  const tmp2Result4 = tmp2(tmp3[34]);
  if (null != stateFromStores) {
    tmp31 = memo1(stateFromStores);
  }
  tmp2Result4(obj4);
  const useCallback = obj12.useCallback;
  let closure_0 = trackUserProfileWishlistAction((wishlistId) => {
    let lockedRecipientUser;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj21;
      let obj31;
      let obj33;
      let obj42;
      let user;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let YEAR;
          let result7;
          c7 = 2;
          if (0 === countryCode) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              product = undefined;
              order = undefined;
              premiumType = undefined;
              YEAR = undefined;
              closure_1_16(function(has) {
                let addResult = has;
                const tmp = skuId;
                if (!has.has(skuId.skuId)) {
                  const _Set = Set;
                  const self = this;
                  const self2 = this;
                  set = new Set(has);
                  addResult = set.add(tmp.skuId);
                }
                return addResult;
              });
              let _Set = Set;
              const items = [wishlistId.skuProductLine];
              let self = this;
              let self2 = this;
              const obj4 = { action: constants.WISHLIST_ITEM_CLICKED, wishlistId, skuId: wishlistId.skuId, productLines: set };
              set = new Set(items);
              premiumType(obj4);
              const obj38 = wishlistId(context[35]);
              const rootNavigationRef = obj38.getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  if (wishlistId.skuProductLine !== constants3.PREMIUM) {
                    if (wishlistId.skuProductLine !== tmp49.SOCIAL_LAYER_GAME_ITEM) {
                      const tmp80 = closure_1_8;
                      if (!tmp80) {
                        if (null != lockedRecipientUser) {
                          if (!wishlistId.isOwned) {
                            if (!set.has(wishlistId.skuId)) {
                              const obj19 = size(context[37]);
                              obj19.hideAllActionSheets();
                              const obj20 = wishlistId(context[49]);
                              if (obj20.isCollectibleGiftingSupported()) {
                                const obj6 = {
                                  analyticsLocations: items1,
                                  analyticsSource: size(context[43]).USER_PROFILE_WISHLIST,
                                  screen: constants4.FEATURED_PAGE,
                                  onNavigateAway() {
                                                              const obj = { userId: user.id, initialSection: closure_2_16.WISHLIST };
                                                              closure_1(result7[48])(obj);
                                                            }
                                };
                                const openCollectiblesShopMobile = wishlistId(context[50]).openCollectiblesShopMobile;
                                items1 = [];
                                wishlistId(context[50]);
                                items1[0] = size(context[43]).USER_PROFILE_WISHLIST;
                                const result = openCollectiblesShopMobile(obj6);
                                const obj7 = { skuId: wishlistId.skuId, analyticsLocations: items2, lockedRecipientUser, giftingOrigin: constants5.USER_PROFILE_WISHLIST };
                                const openShopGiftModal = wishlistId(context[51]).openShopGiftModal;
                                items2 = [];
                                wishlistId(context[51]);
                                items2[0] = size(context[43]).USER_PROFILE_WISHLIST;
                                openShopGiftModal(obj7);
                                c7 = 3;
                                return { value: undefined, done: true };
                              } else {
                                const _HermesInternal2 = HermesInternal;
                                v0 = 1;
                                const combined = "" + constants2.COLLECTIBLES_SHOP + "#itemSkuId=" + tmp159.skuId;
                                countryCode = 3;
                                c7 = 1;
                                const obj9 = { value: obj21.redirectWithHandoffToken(combined, { forceExternalBrowser: true }), done: false };
                                obj21 = size(context[52]);
                                return obj9;
                              }
                            }
                          }
                        }
                      }
                      if (closure_1_10) {
                        result7 = tmp110(tmp111[54]);
                        const openProductDetailsActionSheetForSku = result7.openProductDetailsActionSheetForSku;
                        const obj10 = { skuId: wishlistId.skuId, analyticsLocations: items3 };
                        items3 = [size(context[43]).USER_PROFILE_WISHLIST];
                        const result1 = openProductDetailsActionSheetForSku(obj10, "stack");
                      } else {
                        const tmp110Result2 = wishlistId(context[50]);
                        if (tmp110Result2.isCollectiblesShopOpen()) {
                          product = stateFromStores.getProduct(tmp159.skuId);
                          result7 = product;
                          if (null == product) {
                            countryCode = 1;
                            c7 = 1;
                            const obj11 = { value: obj31.maybeFetchCollectiblesProduct(wishlistId.skuId), done: false };
                            obj31 = wishlistId(context[50]);
                            return obj11;
                          } else {
                            result7 = product;
                            if (null != product) {
                              const obj15 = { product, analyticsLocations: items4 };
                              const openProductDetailsActionSheet = wishlistId(context[54]).openProductDetailsActionSheet;
                              items4 = [];
                              wishlistId(context[54]);
                              items4[0] = size(context[43]).USER_PROFILE_WISHLIST;
                              result7 = openProductDetailsActionSheet(obj15, "stack");
                            } else {
                              const obj28 = size(context[37]);
                              result7 = obj28.hideAllActionSheets();
                            }
                            c7 = 3;
                            return { value: tmp126, done: true };
                          }
                        } else {
                          const obj22 = { analyticsLocations: items5, analyticsSource: size(context[43]).USER_PROFILE_WISHLIST, initialProductSkuId: wishlistId.skuId, screen: constants4.SHOP_ALL };
                          const openCollectiblesShopMobile2 = wishlistId(context[50]).openCollectiblesShopMobile;
                          items5 = [];
                          wishlistId(context[50]);
                          items5[0] = size(context[43]).USER_PROFILE_WISHLIST;
                          const result2 = openCollectiblesShopMobile2(obj22);
                        }
                      }
                    } else {
                      const sku = tmp159.sku;
                      product = sku;
                      if (sku == null) {
                        product = memo2.get(tmp159.skuId);
                      }
                      const obj14 = wishlistId(context[44]);
                      const isAndroidResult = obj14.isAndroid() && null != tmp58 && null == tmp58.googleSkuIds;
                      if (isAndroidResult) {
                        countryCode = undefined;
                        const fetchSocialLayerStorefrontSkuForApplication = wishlistId(context[45]).fetchSocialLayerStorefrontSkuForApplication;
                        const applicationId = tmp58.applicationId;
                        const skuId = tmp159.skuId;
                        wishlistId(context[45]);
                        if (countryCode != null) {
                          countryCode = countryCode.country;
                        }
                        const obj23 = { withGoogleSkuIds: true, countryCode };
                        const socialLayerStorefrontSkuForApplication = fetchSocialLayerStorefrontSkuForApplication(applicationId, skuId, obj23);
                      }
                      const obj16 = wishlistId(context[46]);
                      const tmp69 = closure_1_8;
                      if (!tmp69) {
                        if (obj16.isSlayerSkuAvailableOnThisPlatform(product)) {
                          if (null != lockedRecipientUser) {
                            const obj44 = size(context[37]);
                            obj44.hideAllActionSheets();
                            const obj24 = {
                              skuId: wishlistId.skuId,
                              analyticsLocations: items6,
                              lockedRecipientUser,
                              giftingOrigin: constants5.USER_PROFILE_WISHLIST,
                              onGiftModalDismiss() {
                                                      const obj = { userId: user.id, initialSection: closure_2_16.WISHLIST };
                                                      closure_1(result7[48])(obj);
                                                    }
                            };
                            const openSocialLayerStorefrontGiftModal = wishlistId(context[47]).openSocialLayerStorefrontGiftModal;
                            items6 = [];
                            wishlistId(context[47]);
                            items6[0] = size(context[43]).USER_PROFILE_WISHLIST;
                            const result3 = openSocialLayerStorefrontGiftModal(obj24);
                          }
                        }
                      }
                      const obj17 = size(context[37]);
                      obj17.hideAllActionSheets();
                      const obj25 = { skuId: wishlistId.skuId, analyticsLocations: items7 };
                      const openSocialLayerStorefrontProductDetailsModal = wishlistId(context[47]).openSocialLayerStorefrontProductDetailsModal;
                      items7 = [];
                      wishlistId(context[47]);
                      items7[0] = size(context[43]).USER_PROFILE_WISHLIST;
                      const result4 = openSocialLayerStorefrontProductDetailsModal(obj25);
                    }
                  } else {
                    const tmp171 = closure_1_8;
                    if (tmp171) {
                      const obj12 = size(context[37]);
                      obj12.hideAllActionSheets();
                      const obj13 = wishlistId(context[38]);
                      const result5 = obj13.navigateToPremiumHomePage();
                    } else if (null != lockedRecipientUser) {
                      const obj40 = size(context[37]);
                      obj40.hideAllActionSheets();
                      premiumType = tmp176;
                      YEAR = constants6.YEAR;
                      const obj41 = wishlistId(context[39]);
                      const planIdForPremiumType = obj41.getPlanIdForPremiumType(tmp176, YEAR);
                      v0 = 2;
                      const obj26 = { planId: planIdForPremiumType, recipientUserId: lockedRecipientUser.id, productId: obj42.getProductIdForGift(planIdForPremiumType) };
                      countryCode = 5;
                      c7 = 1;
                      obj42 = wishlistId(context[40]);
                      const obj27 = { value: v0(obj26), done: false };
                      return obj27;
                    }
                  }
                }
              }
              const obj29 = { text: intl4.string(wishlistId(context[23]).t["rTU7/z"]) };
              const open2 = size(context[36]).open;
              size(context[36]);
              intl4 = wishlistId(context[23]).intl;
              open2("WISHLIST_ITEM_PRESS_ERROR", obj29);
            }
          } else if (1 === countryCode) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              product = stateFromStores.getProduct(wishlistId.skuId);
            }
          } else if (2 === countryCode) {
            v0 = 0;
            let closure_5 = closure_4;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            logger.error("Error performing web handoff: " + JSON.stringify(closure_5));
            const obj32 = { tags: obj33 };
            obj33 = { source: "UserProfileWishlistGrid", skuId: wishlistId.skuId };
            const obj5 = wishlistId(context[53]);
            const result6 = obj5.captureBillingException(closure_5, obj32);
            result7 = size(context[36]);
            const open = result7.open;
            const obj34 = { text: intl3.string(wishlistId(context[23]).t["rTU7/z"]) };
            intl3 = wishlistId(context[23]).intl;
            open("WISHLIST_ITEM_PRESS_ERROR", obj34);
          } else if (3 === countryCode) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              v0 = 0;
            }
          } else if (4 === countryCode) {
            v0 = 0;
            result7 = size(context[41]);
            const show = result7.show;
            const obj36 = { title: intl.string(wishlistId(context[23]).t.R0RpRX), body: intl2.string(wishlistId(context[23]).t.CKsXk3) };
            intl = wishlistId(context[23]).intl;
            intl2 = wishlistId(context[23]).intl;
            show(obj36);
            c7 = 3;
            return { value: undefined, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c7 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            order = value;
            v0 = 0;
            result7 = wishlistId(context[42]);
            const openGiftModal = result7.openGiftModal;
            const obj39 = { recipientUserId: lockedRecipientUser.id, premiumType, planInterval: YEAR, order, analyticsLocations: items8 };
            items8 = [size(context[43]).USER_PROFILE_WISHLIST];
            openGiftModal(obj39);
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp140) {
          closure_4 = tmp140;
          if (0 === v0) {
            c7 = 3;
            throw tmp140;
          } else if (1 === tmp142) {
            countryCode = 2;
          } else {
            countryCode = 4;
          }
        }
      }
    })();
  });
  const items13 = [wishlistId, trackUserProfileWishlistAction, tmp44Result2, stateFromStores5, memo2, , , ];
  let country;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  items13[5] = country;
  items13[6] = isShopStandalonePdpMobileEnabled;
  items13[7] = createOrReuseGiftOrder;
  closure_17 = useCallback(function() {
    return closure_0(...arguments);
  }, items13);
  const items14 = [wishlistId, context, analyticsLocations, trackUserProfileWishlistAction, stateFromStores];
  const items15 = [trackUserProfileWishlistAction, wishlistId];
  const callback = obj12.useCallback(() => {
    let tmp4;
    const obj = { action: constants.PRESS_EDIT_WISHLIST, wishlistId, productLines: tmp4 };
    tmp4 = undefined;
    const tmp = trackUserProfileWishlistAction;
    const tmp2 = wishlistId;
    if (null != stateFromStores) {
      tmp4 = getWishlistProductLines(tmp3);
    }
    tmp(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    const obj3 = { wishlistId: tmp2, analyticsContext: context, analyticsLocations };
    obj2.openLazy(asyncRequire(14962, dependencyMap.paths), "EditWishlistActionSheet", obj3, "stack");
  }, items14);
  const callback1 = obj12.useCallback(() => {
    let items;
    let items1;
    const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, wishlistId, productLines: new Set(items) };
    items = [constants2.COLLECTIBLES];
    new Set(items);
    trackUserProfileWishlistAction(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideAllActionSheets();
    const tmp4 = CollectiblesActionCreators;
    const openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
    const obj3 = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: items1, screen: constants.FEATURED_PAGE };
    items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
    const result = openCollectiblesShopMobile(obj3);
  }, items15);
  if (stateFromStores1) {
    if (null == stateFromStores) {
      return null;
    }
  }
  if (null != stateFromStores2) {
    return null;
  } else if (null == stateFromStores) {
    return null;
  } else if (0 === memo.length) {
    return closure_23(WishlistEmptyState, {});
  } else {
    let tmp44Result = tmp44Result2;
    const length = memo.length;
    const tmp45 = closure_25;
    if (tmp44Result2) {
      if (!tmp21) {
        tmp21 = false === nsfwAllowed;
      }
      tmp44Result = tmp21;
    }
    if (tmp44Result) {
      let obj9 = { style: items16, children: items17 };
      items16 = [, ];
      ({ disclaimer: arr18[0], disclaimerTop: arr18[1] } = tmp);
      items17 = [closure_23(tmp6(tmp3[57]).CircleInformationIcon, { size: "sm" }), ];
      let obj10 = { variant: "text-xs/medium", color: "text-subtle", children: stringResult };
      items17[1] = closure_23(wishlistId(tmp3[22]).Text, obj10);
      tmp44Result = tmp44(mobileStoreFront, obj9);
    }
    const items18 = [tmp44Result, , ];
    let obj11 = { style: tmp.headerRow, children: items19 };
    let obj13 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.formatToPlainString(tmp6(tmp3[23]).t.r6Y1Lg, obj14) };
    const Text = tmp6(tmp3[22]).Text;
    intl2 = tmp6(tmp3[23]).intl;
    obj14 = { count: length };
    items19 = [closure_23(Text, obj13), ];
    if (tmp44Result2) {
      let obj15 = { style: tmp.headerButtons, children: items20 };
      let obj16 = { size: "sm", variant: "secondary", icon: tmp41(tmp6(tmp3[59]).PlusMediumIcon, { size: "xs" }), text: intl3.string(tmp6(tmp3[23]).t.SDUwM0), onPress: callback1 };
      const Button = tmp6(tmp3[58]).Button;
      intl3 = tmp6(tmp3[23]).intl;
      items20 = [tmp41(Button, obj16), ];
      let obj17 = { size: "sm", variant: "secondary", icon: tmp41(PencilIcon, obj18), onPress: callback, accessibilityLabel: intl4.string(tmp6(tmp3[23]).t.bt75uw) };
      const IconButton = tmp6(tmp3[60]).IconButton;
      obj18 = { size: "sm", color: tmp2(tmp3[19]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      PencilIcon = tmp6(tmp3[61]).PencilIcon;
      intl4 = tmp6(tmp3[23]).intl;
      items20[1] = closure_23(IconButton, obj17);
      tmp44Result2 = tmp44(tmp40, obj15);
    }
    let obj19 = { children: items18 };
    items19[1] = tmp44Result2;
    items18[1] = closure_24(mobileStoreFront, obj11);
    let obj20 = { style: tmp.gridWrapper, children: tmp41(tmp40, obj21) };
    obj21 = {
      style: items21,
      children: memo.map((sku) => {
          let id;
          let isWishlistItemNewResult;
          let closure_0 = sku;
          let tmp = null;
          if (null != sku.sku) {
            const obj = {
              sku: null,
              isOwned: null,
              onPress() {
                  return closure_17(sku);
                },
              size,
              wishlistOwnerId: id,
              isNew: isWishlistItemNewResult
            };
            ({ sku: obj.sku, isOwned: obj.isOwned } = sku);
            id = undefined;
            const tmp2 = closure_1_23;
            const tmp4 = context;
            const tmp5 = size(context[62]);
            if (stateFromStores5 != null) {
              id = stateFromStores5.id;
            }
            const obj2 = wishlistId(tmp4[63]);
            isWishlistItemNewResult = obj2.isWishlistItemNew(sku.addedAt, closure_14) && !_undefined.has(sku.skuId);
            tmp = tmp2(tmp5, obj, sku.skuId);
          }
          return tmp;
        })
    };
    items21 = [tmp.itemsContainer, tmp5];
    items18[2] = closure_23(mobileStoreFront, obj20);
    return closure_24(tmp45, obj19);
  }
};
export { WishlistEmptyState };
