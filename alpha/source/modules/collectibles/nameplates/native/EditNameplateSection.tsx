// Module ID: 16457
// Function ID: 16458
// Name: EditNameplateSection
// Dependencies: [19, 17, 1986, 21, 5009, 15033, 16456, 15034, 7345, 1985, 9492, 2]

// Module 16457 (EditNameplateSection)
import react_native from "react-native" /* 17 */;
import utils from "utils" /* 1985 */;
import NameplateRecord from "NameplateRecord" /* 1986 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 15033 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 15034 */;
import useNameplateSections from "useNameplateSections" /* 16456 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let nameplate;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, rowSpacer: obj3, nameplate: { overflow: "hidden" } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE };
createStyles = createStyles.createStyles;
obj3 = { height: useCollectibleListLayout.GUTTER_SIZE };
let closure_9 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  let items;
  let items3;
  let setSelectedNameplate;
  let substr;
  ({ items, selectedSkuId: require, setSelectedNameplate } = arg0);
  ({ guildId: dependencyMap, size: react } = arg0);
  const tmp = closure_9();
  const items1 = [setSelectedNameplate];
  const onPress = react.useCallback(() => {
    setSelectedNameplate(null);
  }, items1);
  let obj = { children: items3 };
  let obj2 = {
    style: tmp.row,
    children: substr.map((nameplate, index) => {
      if (nameplate === useNameplateSections.NONE_ITEM) {
        const obj2 = { size: width, onPress, isSelected: null == require, asDefault: null != dependencyMap };
        return metroRequire(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
      } else if (nameplate === useNameplateSections.SHOP_ITEM) {
        const obj3 = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_NAMEPLATE_SHEET };
        const EditCollectiblesListItemShop = tmp(15034).EditCollectiblesListItemShop;
        return metroRequire(EditCollectiblesListItemShop, obj3, "shop");
      } else if (isNameplateRecord(nameplate)) {
        const obj4 = { nameplate, isSelected: require === nameplate.skuId, setSelectedNameplate, size: width };
        return metroRequire(memoResult1, obj4, nameplate.skuId);
      } else {
        const obj = { style: size };
        size = { height: width, width };
        return metroRequire(View, obj, index);
      }
    })
  };
  const items2 = [...items, null, null];
  substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  items3 = [closure_6(onPress, obj2), ];
  let obj3 = { style: tmp.rowSpacer };
  items3[1] = closure_6(onPress, obj3);
  return closure_8(closure_7, obj);
});
memoResult.displayName = "EditNameplateRow";
const memoResult1 = react.memo((nameplate) => {
  let isSelected;
  let items2;
  let obj2;
  nameplate = nameplate.nameplate;
  const setSelectedNameplate = nameplate.setSelectedNameplate;
  ({ isSelected, size } = nameplate);
  const items = [nameplate];
  const items1 = [setSelectedNameplate, nameplate];
  const tmp = closure_9();
  const memo = react.useMemo(() => {
    const obj = utils;
    return obj.getNameplateData(nameplate);
  }, items);
  const callback = react.useCallback(() => {
    setSelectedNameplate(nameplate);
  }, items1);
  let obj = { skuId: nameplate.skuId, isSelected, onPress: callback, size, accessibilityLabel: nameplate.label, children: closure_6(setSelectedNameplate(9492), obj2) };
  const EditCollectiblesListItemProduct = nameplate(15034).EditCollectiblesListItemProduct;
  obj2 = { nameplate: memo, fullOpacity: true, isSquarePreview: true, style: items2 };
  items2 = [tmp.nameplate, { borderRadius: 6 }];
  return closure_6(EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditNameplateItem";
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/EditNameplateSection.tsx");

export const EditNameplateRow = memoResult;
