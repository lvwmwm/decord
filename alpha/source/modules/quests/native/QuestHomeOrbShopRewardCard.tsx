// Module ID: 16989
// Function ID: 16990
// Name: QuestHomeOrbShopRewardCard
// Dependencies: [19, 17, 1383, 1074, 21, 5014, 575, 9459, 504, 2047, 9460, 7326, 9462, 9523, 7731, 9568, 5258, 8747, 16990, 9550, 6980, 2]
// Exports: default

// Module 16989 (QuestHomeOrbShopRewardCard)
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7731 */;
import openProductDetailsActionSheet2 from "openProductDetailsActionSheet" /* 8747 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, assetTile: obj3 };
obj2 = { overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, position: "relative" };
createStyles = createStyles.createStyles;
obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default function QuestHomeOrbShopRewardCard(product) {
  let defaultVariantIndex;
  let obj7;
  product = product.product;
  require = product;
  let COLLECTIBLES_SHOP_CARD_WIDTH = product.cardWidth;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = product.cardHeight;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT === undefined) {
    let tmp3 = require;
    COLLECTIBLES_SHOP_CARD_HEIGHT = require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  let flag = product.hideCardDetails;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = product.clickable;
  if (flag2 === undefined) {
    flag2 = false;
  }
  defaultVariantIndex = undefined;
  let currentUser;
  const tmp5 = closure_10();
  let obj = require("get initialized");
  const items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = stateFromStores(defaultVariantIndex[9]);
    return obj.canUseShopDiscounts(currentUser.getCurrentUser());
  });
  let obj2 = require("useDefaultVariantIndex");
  defaultVariantIndex = obj2.useDefaultVariantIndex(product);
  const analyticsLocations = stateFromStores(defaultVariantIndex[11])().analyticsLocations;
  const obj3 = require("CollectiblesAnalyticsContext");
  const collectiblesAnalyticsContext = obj3.useCollectiblesAnalyticsContext();
  const obj4 = require("useTrackShopCardClick");
  currentUser = obj4.useTrackShopCardClick({ product, analyticsLocations });
  const items1 = [product, stateFromStores];
  const memo = analyticsLocations.useMemo(() => {
    const obj = CollectiblesProductUtils;
    const obj2 = { product: require, hasShopDiscount: stateFromStores };
    return obj.getProductOrbPrice(obj2);
  }, items1);
  const obj5 = require("getProductName");
  const productName = obj5.getProductName(product);
  const items2 = [collectiblesAnalyticsContext, analyticsLocations, product, defaultVariantIndex];
  let closure_6 = analyticsLocations.useCallback(() => {
    let tmp3;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { product: require, initialVariantIndex: defaultVariantIndex, analyticsLocations, shopAnalyticsContext: tmp3 };
    const openProductDetailsActionSheet = openProductDetailsActionSheet2.openProductDetailsActionSheet;
    openProductDetailsActionSheet2;
    const result = openProductDetailsActionSheet(obj2);
    tmp3 = collectiblesAnalyticsContext;
  }, items2);
  const tmp6 = require;
  if (null == memo) {
    return null;
  } else {
    let tmp19Result2;
    const items3 = [tmp5.card, ];
    size = { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: COLLECTIBLES_SHOP_CARD_HEIGHT };
    items3[1] = size;
    const obj6 = { style: tmp5.assetTile, children: closure_7(stateFromStores(defaultVariantIndex[18]), obj7) };
    obj7 = { product, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, hideCardDetails: flag };
    const items4 = [closure_7(collectiblesAnalyticsContext, obj6), ];
    let tmp19Result = !flag;
    const tmp17 = closure_9;
    const tmp18 = closure_8;
    const tmp20 = collectiblesAnalyticsContext;
    if (tmp19Result) {
      const obj8 = { product, collectibleProductState: null, hidePrice: true };
      tmp19Result = tmp19(tmp10(tmp7[19]), obj8);
    }
    const obj9 = { children: items4 };
    items4[1] = tmp19Result;
    const tmp17Result = tmp17(tmp18, obj9);
    if (flag2) {
      const obj10 = {
        style: items3,
        onPress() {
              currentUser(ShopCtaEnum.OPEN_DETAILS);
              closure_6();
            },
        activeOpacity: 0.8,
        accessibilityRole: "button",
        accessibilityLabel: productName,
        children: tmp17Result
      };
      tmp19Result2 = tmp19(tmp6(tmp7[20]).PressableOpacity, obj10);
    } else {
      const obj11 = { style: items3, accessible: true, accessibilityRole: "text", accessibilityLabel: productName, children: tmp17Result };
      tmp19Result2 = tmp19(tmp20, obj11);
    }
    return tmp19Result2;
  }
};
export const QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH = 114;
export const QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT = 123;
