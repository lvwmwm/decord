// Module ID: 14032
// Function ID: 107360
// Name: QuestHomeOrbShopRewardCard
// Dependencies: [31, 27, 1849, 33, 4130, 8704, 689, 566, 3776, 6785, 8770, 8756, 8759, 2]
// Exports: default

// Module 14032 (QuestHomeOrbShopRewardCard)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_WIDTH, height: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default function QuestHomeOrbShopRewardCard(product) {
  product = product.product;
  const require = product;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores(outer1_2[8]).canUseShopDiscounts(outer1_5.getCurrentUser()));
  const items1 = [product, stateFromStores];
  const memo = React.useMemo(() => {
    let obj = product(outer1_2[9]);
    obj = { product: closure_0, hasShopDiscount: stateFromStores };
    return obj.getProductOrbPrice(obj);
  }, items1);
  require(8770) /* getProductName */;
  let tmp6 = null;
  if (null != memo) {
    obj = { style: tmp.card, accessible: true, accessibilityRole: "text", accessibilityLabel: tmp5 };
    obj = { product, isPurchased: false, solidBackground: true };
    const items2 = [callback(stateFromStores(8756), obj), ];
    const obj1 = { product, collectibleProductState: null, hidePrice: true };
    items2[1] = callback(stateFromStores(8759), obj1);
    obj.children = items2;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
};
export const QUEST_HOME_ORB_SHOP_REWARD_CARD_HEIGHT = require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT;
