// Module ID: 9458
// Function ID: 9459
// Name: GameProfileShopCarousel
// Dependencies: [19, 17, 21, 5014, 575, 9459, 9437, 9446, 9578, 9579, 9340, 7719, 7351, 1113, 7294, 9386, 2]
// Exports: default

// Module 9458 (GameProfileShopCarousel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7719 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import GameProfileSection from "GameProfileSection" /* 9437 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 9446 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 9459 */;
import SkeletonCardDefault from "SkeletonCard" /* 9578 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let obj2;
let obj3;
let obj5;
function HorizontalSpacing() {
  return <View style={closure_6().horizontalSpacing} />;
}
function GameProfileShopCarouselContent(trackAction) {
  let card;
  let closeModal;
  let collectionId;
  let tmp6;
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp = closure_6();
  dependencyMap = tmp;
  let obj = closeModal(9579);
  const gameProfileShopCollectionProducts = obj.useGameProfileShopCollectionProducts(collectionId);
  const products = gameProfileShopCollectionProducts.products;
  let items = [trackAction, closeModal];
  if (gameProfileShopCollectionProducts.isLoading) {
    tmp6 = <closure_7 />;
  } else {
    tmp6 = null;
    if (0 !== products.length) {
      ({ container: obj2.style, header: obj2.headerStyle } = tmp);
      trackAction(9437);
      const intl = tmp2(1113).intl;
      ({
        horizontal: true,
        renderScrollComponent: trackAction(9386),
        data: products,
        renderItem(item) {
              item = item.item;
              return jsx(trackAction(card[5]), {
                solidBackground: true,
                cardStyle: card.card,
                product: item,
                hideWishlistButton: true,
                hidePrice: true,
                onPress() {
                  let items;
                  trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.DiscordCollectiblesShop);
                  closeModal();
                  const obj = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.GAME_PROFILE, initialProductSkuId: item.skuId };
                  const openCollectiblesShop = CollectiblesActionCreators.openCollectiblesShop;
                  items = [];
                  CollectiblesActionCreators;
                  items[0] = AnalyticsLocationDefault.GAME_PROFILE;
                  openCollectiblesShop(obj);
                }
              });
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: HorizontalSpacing,
        ListHeaderComponent: HorizontalSpacing,
        ListFooterComponent: HorizontalSpacing,
        decelerationRate: "fast",
        snapToInterval: closeModal(9459).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(9459).COLLECTIBLES_SHOP_CARD_GAP
      });
      const FlashList = tmp2(7294).FlashList;
      tmp6 = <tmp11 style={null} headerStyle={null} title={intl.string(tmp2(1113).t["5DYPT8"])} onPressViewAll={tmp5}>{null}</tmp11>;
    }
  }
  return tmp6;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, card: { borderRadius: nativeDefault.radii.lg }, skeletonCards: obj5, horizontalSpacing: { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP } };
obj2 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
({ borderRadius: nativeDefault.radii.lg });
obj5 = { paddingHorizontal: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
({ width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP });
let closure_6 = createStyles(obj);
let closure_7 = react.memo(function GameProfileShopCarouselSkeleton() {
  const tmp = closure_6();
  const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
  ({ gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, arg1) => jsx(SkeletonCardDefault, {}, arg1)) });
  GameProfileSkeletonCardRowDefault;
  return <GameProfileSectionSkeleton style={tmp.container} headerStyle={tmp.header} showViewAllSkeleton skeletonTitleWidth={118}>{null}</GameProfileSectionSkeleton>;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

export default function GameProfileShopCarousel(game) {
  let closeModal;
  let trackAction;
  game = game.game;
  let first;
  ({ closeModal, trackAction } = game);
  if (game != null) {
    const shopCollectionIds = game.shopCollectionIds;
    if (shopCollectionIds != null) {
      first = shopCollectionIds[0];
    }
  }
  let tmp2 = null;
  if (null != first) {
    tmp2 = <GameProfileShopCarouselContent collectionId={first} closeModal={closeModal} trackAction={trackAction} />;
  }
  return tmp2;
};
