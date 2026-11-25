// Module ID: 14167
// Function ID: 14168
// Name: GameProfileShopCarousel
// Dependencies: [19, 17, 21, 5012, 575, 11165, 14135, 14142, 14168, 14169, 8712, 6279, 6349, 1112, 7451, 14115, 2]
// Exports: default

// Module 14167 (GameProfileShopCarousel)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6279 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6349 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8712 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 11165 */;
import GameProfileSection from "GameProfileSection" /* 14135 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 14142 */;
import SkeletonCardDefault from "SkeletonCard" /* 14168 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5012 */;
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
  let obj = closeModal(14169);
  const gameProfileShopCollectionProducts = obj.useGameProfileShopCollectionProducts(collectionId);
  const products = gameProfileShopCollectionProducts.products;
  let items = [trackAction, closeModal];
  if (gameProfileShopCollectionProducts.isLoading) {
    tmp6 = <closure_7 />;
  } else {
    tmp6 = null;
    if (0 !== products.length) {
      ({ container: obj2.style, header: obj2.headerStyle } = tmp);
      trackAction(14135);
      const intl = tmp2(1112).intl;
      ({
        horizontal: true,
        renderScrollComponent: trackAction(14115),
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
        snapToInterval: closeModal(11165).COLLECTIBLES_SHOP_CARD_WIDTH + closeModal(11165).COLLECTIBLES_SHOP_CARD_GAP
      });
      const FlashList = tmp2(7451).FlashList;
      tmp6 = <tmp11 style={null} headerStyle={null} title={intl.string(tmp2(1112).t["5DYPT8"])} onPressViewAll={tmp5}>{null}</tmp11>;
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
