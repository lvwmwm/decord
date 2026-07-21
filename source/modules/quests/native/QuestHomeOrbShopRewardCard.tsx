// Module ID: 13861
// Function ID: 104841
// Name: QuestHomeOrbShopRewardCard
// Dependencies: []
// Exports: default

// Module 13861 (QuestHomeOrbShopRewardCard)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { width: arg1(dependencyMap[5]).COLLECTIBLES_SHOP_CARD_WIDTH, height: arg1(dependencyMap[5]).COLLECTIBLES_SHOP_CARD_HEIGHT, overflow: "hidden", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.card = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCard.tsx");

export default function QuestHomeOrbShopRewardCard(product) {
  product = product.product;
  const arg1 = product;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores(closure_2[8]).canUseShopDiscounts(currentUser.getCurrentUser()));
  const importDefault = stateFromStores;
  const items1 = [product, stateFromStores];
  const memo = React.useMemo(() => {
    let obj = product(closure_2[9]);
    obj = { product, hasShopDiscount: stateFromStores };
    return obj.getProductOrbPrice(obj);
  }, items1);
  arg1(dependencyMap[10]);
  let tmp6 = null;
  if (null != memo) {
    obj = { style: tmp.card, accessibilityLabel: tmp5 };
    obj = { product };
    const items2 = [callback(importDefault(dependencyMap[11]), obj), ];
    const obj1 = { "Null": null, "Null": 16, "Null": 5, product };
    items2[1] = callback(importDefault(dependencyMap[12]), obj1);
    obj.children = items2;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
};
export const QUEST_HOME_ORB_SHOP_REWARD_CARD_HEIGHT = arg1(dependencyMap[5]).COLLECTIBLES_SHOP_CARD_HEIGHT;
