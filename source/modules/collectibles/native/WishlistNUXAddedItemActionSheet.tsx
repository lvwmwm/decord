// Module ID: 8664
// Function ID: 68567
// Name: WishlistNUXAddedItemActionSheet
// Dependencies: []
// Exports: default

// Module 8664 (WishlistNUXAddedItemActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const UserProfileSections = arg1(dependencyMap[4]).UserProfileSections;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { alignItems: "center", padding: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_24 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.textContainer = { alignItems: "center", paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.subtitle = { textAlign: "center" };
let closure_10 = obj.createStyles(obj);
const obj1 = { alignItems: "center", paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, gap: importDefault(dependencyMap[7]).space.PX_8 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx");

export default function WishlistNUXAddedItemActionSheet(product) {
  product = product.product;
  const arg1 = product;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  const importDefault = stateFromStores;
  const items1 = [product];
  const memo = React.useMemo(() => {
    if (product.type === product(memo[9]).CollectiblesItemType.BUNDLE) {
      let obj = { type: "bundle" };
      ({ items: obj2.items, previewAssets: obj2.previewAssets } = product);
      return obj;
    } else {
      const first = callback(product.items, 1)[0];
      let tmp5;
      if (null != first) {
        obj = { type: "single", item: first };
        tmp5 = obj;
      }
      return tmp5;
    }
  }, items1);
  const dependencyMap = memo;
  const items2 = [stateFromStores];
  const callback = React.useCallback(() => {
    stateFromStores(memo[10]).hideActionSheet();
  }, []);
  const items3 = [memo];
  const callback1 = React.useCallback(() => {
    let obj = stateFromStores(memo[10]);
    obj.hideAllActionSheets();
    if (null != stateFromStores) {
      obj = { userId: stateFromStores.id };
      const items = [stateFromStores(memo[12]).COLLECTIBLES_SHOP];
      obj.sourceAnalyticsLocations = items;
      obj.initialSection = constants.WISHLIST;
      stateFromStores(memo[11])(obj);
      const tmp4 = stateFromStores(memo[11]);
    }
  }, items2);
  const callback2 = React.useCallback(() => {
    let tmp = null;
    if (null != memo) {
      const obj = { collectiblesItemData: memo };
      tmp = callback2(product(memo[13]).CollectiblesPreview, obj);
    }
    return tmp;
  }, items3);
  obj = {};
  obj = { style: tmp.container };
  const items4 = [callback(importDefault(dependencyMap[15]), { renderPreview: callback2 }), , ];
  const obj1 = { style: tmp.textContainer };
  const obj2 = {};
  const intl = arg1(dependencyMap[17]).intl;
  obj2.children = intl.string(arg1(dependencyMap[17]).t.3T2jbf);
  const items5 = [callback(arg1(dependencyMap[16]).Text, obj2), ];
  const obj3 = { cachedAt: 1, edpbxy: 1, style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[17]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[17]).t.SXb73A);
  items5[1] = callback(arg1(dependencyMap[16]).Text, obj3);
  obj1.children = items5;
  items4[1] = callback2(View, obj1);
  const obj4 = { direction: "horizontal" };
  const obj5 = {};
  const intl3 = arg1(dependencyMap[17]).intl;
  obj5.text = intl3.string(arg1(dependencyMap[17]).t.tM4PUv);
  obj5.onPress = callback;
  const items6 = [callback(arg1(dependencyMap[19]).Button, obj5), ];
  const obj6 = { getNextAssetPage: false, trackFeedEmptyLoadingSeen: false, addWindow: false, questDockHeaderActionDisclosures: false, EMOJI_PICKER_EMOJI_CLICKED: false };
  const intl4 = arg1(dependencyMap[17]).intl;
  obj6.text = intl4.string(arg1(dependencyMap[17]).t.TxBQzD);
  obj6.onPress = callback1;
  items6[1] = callback(arg1(dependencyMap[19]).Button, obj6);
  obj4.children = items6;
  items4[2] = callback2(arg1(dependencyMap[18]).ButtonGroup, obj4);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[14]).BottomSheet, obj);
};
