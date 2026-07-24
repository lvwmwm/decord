// Module ID: 13656
// Function ID: 104859
// Name: memoResult1
// Dependencies: [31, 27, 1874, 33, 4130, 7954, 13655, 7955, 5482, 1873, 8273, 2]

// Module 13656 (memoResult1)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { isNameplateRecord } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj.row = obj;
_createForOfIteratorHelperLoose = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj.rowSpacer = _createForOfIteratorHelperLoose;
obj.nameplate = { overflow: "hidden" };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let closure_3;
  let dependencyMap;
  let items;
  let require;
  let setSelectedNameplate;
  ({ items, selectedSkuId: require, setSelectedNameplate } = arg0);
  ({ guildId: dependencyMap, size: closure_3 } = arg0);
  const tmp = callback3();
  items = [setSelectedNameplate];
  let closure_4 = importAllResult.useCallback(() => {
    setSelectedNameplate(null);
  }, items);
  let obj = {};
  obj = { style: tmp.row };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, require(7954) /* useCollectibleListLayout */.ROW_SIZE);
  obj.children = substr.map((nameplate) => {
    if (nameplate === outer1_0(outer1_2[6]).NONE_ITEM) {
      let obj = { size: closure_3, onPress: closure_4, isSelected: null == closure_0, asDefault: null != closure_2 };
      return outer1_6(outer1_0(outer1_2[7]).EditCollectiblesListItemNone, obj, "none");
    } else if (nameplate === outer1_0(outer1_2[6]).SHOP_ITEM) {
      obj = { size: closure_3, analyticsSource: setSelectedNameplate(outer1_2[8]).EDIT_NAMEPLATE_SHEET };
      return outer1_6(outer1_0(outer1_2[7]).EditCollectiblesListItemShop, obj, "shop");
    } else if (outer1_5(nameplate)) {
      const obj1 = { nameplate, isSelected: closure_0 === nameplate.skuId, setSelectedNameplate, size: closure_3 };
      return outer1_6(outer1_10, obj1, nameplate.skuId);
    } else {
      obj = {};
      const obj2 = { height: closure_3, width: closure_3 };
      obj.style = obj2;
      return outer1_6(closure_4, obj, arg1);
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
  const setSelectedNameplate = nameplate.setSelectedNameplate;
  ({ isSelected, size } = nameplate);
  const items = [nameplate];
  const items1 = [setSelectedNameplate, nameplate];
  const memo = importAllResult.useMemo(() => nameplate(outer1_2[9]).getNameplateData(nameplate), items);
  const callback = importAllResult.useCallback(() => {
    setSelectedNameplate(nameplate);
  }, items1);
  let obj = { skuId: nameplate.skuId, isSelected, onPress: callback, size, accessibilityLabel: nameplate.label };
  obj = { nameplate: memo, fullOpacity: true, isSquarePreview: true };
  const items2 = [callback3().nameplate, { borderRadius: 6 }];
  obj.style = items2;
  obj.children = callback(setSelectedNameplate(8273), obj);
  return callback(nameplate(7955).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditNameplateItem";
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/nameplates/native/EditNameplateSection.tsx");

export const EditNameplateRow = memoResult;
