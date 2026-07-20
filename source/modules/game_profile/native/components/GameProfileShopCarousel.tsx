// Module ID: 8650
// Function ID: 68472
// Name: HorizontalSpacing
// Dependencies: []
// Exports: default

// Module 8650 (HorizontalSpacing)
function HorizontalSpacing() {
  let obj = {};
  obj = { width: arg1(dependencyMap[6]).COLLECTIBLES_SHOP_CARD_GAP };
  obj.style = obj;
  return callback(View, obj);
}
function GameProfileShopCarouselContent(trackAction) {
  let closeModal;
  let collectionId;
  ({ collectionId, closeModal } = trackAction);
  const arg1 = closeModal;
  trackAction = trackAction.trackAction;
  const importDefault = trackAction;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[7]);
  const gameProfileShopCollection = obj.useGameProfileShopCollection(collectionId);
  let closure_3 = gameProfileShopCollection;
  let obj1 = arg1(dependencyMap[8]);
  const fetchCollectiblesProducts = obj1.useFetchCollectiblesProducts(gameProfileShopCollection);
  let obj2 = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const mapped = gameProfileShopCollection.map((arg0) => product.getProduct(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const items1 = [trackAction, closeModal];
  let tmp5 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.container };
    obj = { style: tmp.header };
    obj1 = { INTEGRATION_CREATE: "polite", ConstraintReasonCode: "column" };
    const intl = arg1(dependencyMap[14]).intl;
    obj1.children = intl.string(arg1(dependencyMap[14]).t.5DYPT8);
    const items2 = [callback(arg1(dependencyMap[13]).Text, obj1), ];
    obj2 = {};
    const intl2 = arg1(dependencyMap[14]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[14]).t.budhsM);
    const obj3 = { size: "sm" };
    obj2.icon = callback(arg1(dependencyMap[16]).ChevronSmallRightIcon, obj3);
    obj2.onPress = tmp4;
    items2[1] = callback(arg1(dependencyMap[15]).Button, obj2);
    obj.children = items2;
    const items3 = [callback2(View, obj), ];
    const obj4 = {
      horizontal: true,
      data: stateFromStoresArray,
      renderItem(item) {
          item = item.item;
          const closeModal = item;
          return callback(trackAction(tmp[6]), {
            cardStyle: tmp.card,
            product: item,
            onPress() {
              callback(item(closure_2[10]).GameProfileTrackActionActions.DiscordCollectiblesShop);
              item();
              let obj = item(closure_2[11]);
              obj = {};
              const items = [callback(closure_2[12]).GAME_PROFILE];
              obj.analyticsLocations = items;
              obj.analyticsSource = callback(closure_2[12]).GAME_PROFILE;
              obj.initialProductSkuId = item.skuId;
              obj.openCollectiblesShop(obj);
            }
          });
        },
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent: HorizontalSpacing,
      ListHeaderComponent: HorizontalSpacing,
      ListFooterComponent: HorizontalSpacing,
      decelerationRate: "fast",
      snapToInterval: arg1(dependencyMap[6]).COLLECTIBLES_SHOP_CARD_WIDTH + arg1(dependencyMap[6]).COLLECTIBLES_SHOP_CARD_GAP
    };
    items3[1] = callback(arg1(dependencyMap[17]).FlashList, obj4, collectionId);
    obj.children = items3;
    tmp5 = callback2(View, obj);
  }
  return tmp5;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { gap: importDefault(dependencyMap[5]).space.PX_8, marginHorizontal: -1 * importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const obj1 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, marginHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.header = obj1;
const tmp2 = arg1(dependencyMap[3]);
obj.card = { borderRadius: importDefault(dependencyMap[5]).radii.lg };
let closure_8 = obj.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.lg };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

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
