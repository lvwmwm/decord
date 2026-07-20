// Module ID: 13475
// Function ID: 102301
// Name: memoResult1
// Dependencies: []

// Module 13475 (memoResult1)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isNameplateRecord = arg1(dependencyMap[2]).isNameplateRecord;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, paddingHorizontal: arg1(dependencyMap[5]).GUTTER_SIZE };
obj.row = obj;
obj1 = { height: arg1(dependencyMap[5]).GUTTER_SIZE };
obj.rowSpacer = obj1;
obj.nameplate = { overflow: "hidden" };
let closure_9 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let items;
  let setSelectedNameplate;
  ({ items, selectedSkuId: closure_0, setSelectedNameplate } = arg0);
  const importDefault = setSelectedNameplate;
  ({ guildId: closure_2, size: closure_3 } = arg0);
  const tmp = callback3();
  items = [setSelectedNameplate];
  let closure_4 = importAllResult.useCallback(() => {
    setSelectedNameplate(null);
  }, items);
  let obj = {};
  obj = { style: tmp.row };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, arg1(dependencyMap[5]).ROW_SIZE);
  obj.children = substr.map((nameplate) => {
    if (nameplate === callback(closure_2[6]).NONE_ITEM) {
      let obj = { size: closure_3, onPress: closure_4, isSelected: null == callback, asDefault: null != closure_2 };
      return callback3(callback(closure_2[7]).EditCollectiblesListItemNone, obj, "none");
    } else if (nameplate === callback(closure_2[6]).SHOP_ITEM) {
      obj = { size: closure_3, analyticsSource: setSelectedNameplate(closure_2[8]).EDIT_NAMEPLATE_SHEET };
      return callback3(callback(closure_2[7]).EditCollectiblesListItemShop, obj, "shop");
    } else if (callback2(nameplate)) {
      const obj1 = { nameplate, isSelected: callback === nameplate.skuId, setSelectedNameplate, size: closure_3 };
      return callback3(closure_10, obj1, nameplate.skuId);
    } else {
      obj = {};
      const obj2 = { height: closure_3, width: closure_3 };
      obj.style = obj2;
      return callback3(closure_4, obj, arg1);
    }
  });
  const items2 = [callback(closure_4, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(closure_4, obj);
  obj.children = items2;
  return callback2(closure_7, obj);
});
memoResult.displayName = "EditNameplateRow";
const memoResult1 = importAllResult.memo((nameplate) => {
  let isSelected;
  let size;
  nameplate = nameplate.nameplate;
  const arg1 = nameplate;
  const setSelectedNameplate = nameplate.setSelectedNameplate;
  const importDefault = setSelectedNameplate;
  ({ isSelected, size } = nameplate);
  const items = [nameplate];
  const items1 = [setSelectedNameplate, nameplate];
  const memo = importAllResult.useMemo(() => nameplate(closure_2[9]).getNameplateData(nameplate), items);
  const callback = importAllResult.useCallback(() => {
    setSelectedNameplate(nameplate);
  }, items1);
  let obj = { skuId: nameplate.skuId, isSelected, onPress: callback, size, accessibilityLabel: nameplate.label };
  obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, nameplate: memo };
  const items2 = [callback3().nameplate, { borderRadius: 6 }];
  obj.style = items2;
  obj.children = callback(importDefault(dependencyMap[10]), obj);
  return callback(arg1(dependencyMap[7]).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditNameplateItem";
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/collectibles/nameplates/native/EditNameplateSection.tsx");

export const EditNameplateRow = memoResult;
