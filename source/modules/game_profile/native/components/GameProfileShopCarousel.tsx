// Module ID: 8662
// Function ID: 68547
// Name: HorizontalSpacing
// Dependencies: [31, 27, 6774, 33, 4130, 689, 8663, 11849, 11850, 624, 8600, 6773, 5484, 4126, 1212, 4543, 5514, 7879, 2]
// Exports: default

// Module 8662 (HorizontalSpacing)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function HorizontalSpacing() {
  let obj = {};
  obj = { width: require(8663) /* CollectiblesShopCardInternalV2 */.COLLECTIBLES_SHOP_CARD_GAP };
  obj.style = obj;
  return callback(View, obj);
}
function GameProfileShopCarouselContent(trackAction) {
  let closeModal;
  let collectionId;
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = closeModal(11849);
  const gameProfileShopCollection = obj.useGameProfileShopCollection(collectionId);
  let obj1 = closeModal(11850);
  const fetchCollectiblesProducts = obj1.useFetchCollectiblesProducts(gameProfileShopCollection);
  let obj2 = closeModal(624);
  let items = [_isNativeReflectConstruct];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const mapped = gameProfileShopCollection.map((arg0) => outer2_5.getProduct(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const items1 = [trackAction, closeModal];
  let tmp5 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.container };
    obj = { style: tmp.header };
    obj1 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary" };
    const intl = closeModal(1212).intl;
    obj1.children = intl.string(closeModal(1212).t["5DYPT8"]);
    const items2 = [callback(closeModal(4126).Text, obj1), ];
    obj2 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end" };
    const intl2 = closeModal(1212).intl;
    obj2.text = intl2.string(closeModal(1212).t.budhsM);
    const obj3 = { size: "sm" };
    obj2.icon = callback(closeModal(5514).ChevronSmallRightIcon, obj3);
    obj2.onPress = tmp4;
    items2[1] = callback(closeModal(4543).Button, obj2);
    obj.children = items2;
    const items3 = [callback2(View, obj), ];
    const obj4 = {
      horizontal: true,
      data: stateFromStoresArray,
      renderItem(item) {
          item = item.item;
          let obj = {
            solidBackground: true,
            cardStyle: tmp.card,
            product: item,
            hideWishlistButton: true,
            hidePrice: true,
            onPress() {
              outer1_1(closeModal(8600).GameProfileTrackActionActions.DiscordCollectiblesShop);
              item();
              let obj = closeModal(6773);
              obj = {};
              const items = [trackAction(5484).GAME_PROFILE];
              obj.analyticsLocations = items;
              obj.analyticsSource = trackAction(5484).GAME_PROFILE;
              obj.initialProductSkuId = item.skuId;
              obj.openCollectiblesShop(obj);
            }
          };
          return outer1_6(trackAction(tmp[6]), obj);
        },
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent: HorizontalSpacing,
      ListHeaderComponent: HorizontalSpacing,
      ListFooterComponent: HorizontalSpacing,
      decelerationRate: "fast",
      snapToInterval: closeModal(8663).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(8663).COLLECTIBLES_SHOP_CARD_GAP
    };
    items3[1] = callback(closeModal(7879).FlashList, obj4, collectionId);
    obj.children = items3;
    tmp5 = callback2(View, obj);
  }
  return tmp5;
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginHorizontal: -1 * require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = obj1;
_createForOfIteratorHelperLoose.card = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

export default function GameProfileShopCarousel(game) {
  let closeModal;
  let trackAction;
  game = game.game;
  let first;
  ({ closeModal, trackAction } = game);
  if (null != game) {
    const shopCollectionIds = game.shopCollectionIds;
    if (null != shopCollectionIds) {
      first = shopCollectionIds[0];
    }
  }
  let tmp2 = null;
  if (null != first) {
    const obj = { collectionId: first, closeModal, trackAction };
    tmp2 = callback(GameProfileShopCarouselContent, obj);
  }
  return tmp2;
};
