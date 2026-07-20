// Module ID: 7853
// Function ID: 62598
// Name: memoResult1
// Dependencies: []

// Module 7853 (memoResult1)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isAvatarDecorationRecord = arg1(dependencyMap[2]).isAvatarDecorationRecord;
const AVATAR_DECORATION_SIZE = arg1(dependencyMap[3]).AVATAR_DECORATION_SIZE;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, paddingHorizontal: arg1(dependencyMap[6]).GUTTER_SIZE };
obj.row = obj;
obj1 = { height: arg1(dependencyMap[6]).GUTTER_SIZE };
obj.rowSpacer = obj1;
let closure_10 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((size) => {
  let isTryItOut;
  let items;
  let setSelectedAvatarDecoration;
  ({ items, selectedSkuId: closure_0, setSelectedAvatarDecoration } = size);
  const importDefault = setSelectedAvatarDecoration;
  ({ guildId: closure_2, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  const View = size.size;
  let closure_5;
  const tmp = callback3();
  items = [setSelectedAvatarDecoration];
  closure_5 = isTryItOut.useCallback(() => {
    setSelectedAvatarDecoration(null);
  }, items);
  let obj = {};
  obj = { style: tmp.row };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, arg1(dependencyMap[6]).ROW_SIZE);
  obj.children = substr.map((avatarDecoration) => {
    if (avatarDecoration === callback(closure_2[7]).NONE_ITEM) {
      let obj = { size, onPress: callback2, isSelected: null == callback, asDefault: null != closure_2 };
      return callback3(callback(closure_2[8]).EditCollectiblesListItemNone, obj, "none");
    } else if (avatarDecoration === callback(closure_2[7]).SHOP_ITEM) {
      obj = { size, analyticsSource: setSelectedAvatarDecoration(closure_2[9]).EDIT_AVATAR_DECORATION_SHEET };
      return callback3(callback(closure_2[8]).EditCollectiblesListItemShop, obj, "shop");
    } else if (callback2(avatarDecoration)) {
      const obj1 = { avatarDecoration, isSelected: callback === avatarDecoration.skuId, setSelectedAvatarDecoration, isTryItOut, size };
      return callback3(closure_11, obj1, avatarDecoration.skuId);
    } else {
      obj = {};
      const obj2 = { height: size, width: size };
      obj.style = obj2;
      return callback3(size, obj, arg1);
    }
  });
  const items2 = [callback(View, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(View, obj);
  obj.children = items2;
  return callback2(closure_8, obj);
});
memoResult.displayName = "EditAvatarDecorationRow";
const memoResult1 = importAllResult.memo((avatarDecoration) => {
  let isSelected;
  let setSelectedAvatarDecoration;
  avatarDecoration = avatarDecoration.avatarDecoration;
  const arg1 = avatarDecoration;
  ({ isSelected, setSelectedAvatarDecoration } = avatarDecoration);
  const importDefault = setSelectedAvatarDecoration;
  let flag = avatarDecoration.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const items = [setSelectedAvatarDecoration, avatarDecoration];
  const callback = importAllResult.useCallback(() => {
    setSelectedAvatarDecoration(avatarDecoration);
  }, items);
  let obj = { skuId: avatarDecoration.skuId, isSelected, onPress: callback, size: avatarDecoration.size, isTryItOut: flag, accessibilityLabel: avatarDecoration.label };
  obj = { avatarDecoration, size: AVATAR_DECORATION_SIZE, animate: isSelected };
  obj.children = callback(importDefault(dependencyMap[10]), obj);
  return callback(arg1(dependencyMap[8]).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditAvatarDecorationItem";
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx");

export const EditAvatarDecorationRow = memoResult;
