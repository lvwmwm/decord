// Module ID: 15032
// Function ID: 15033
// Name: EditAvatarDecorationSection
// Dependencies: [19, 17, 7718, 1411, 21, 5009, 15033, 15026, 15034, 7345, 9486, 2]

// Module 15032 (EditAvatarDecorationSection)
import react_native from "react-native" /* 17 */;
import AvatarDecorationConstants from "AvatarDecorationConstants" /* 1411 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7718 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 9486 */;
import useAvatarDecorationSections from "useAvatarDecorationSections" /* 15026 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 15033 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 15034 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let avatarDecoration;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const AVATAR_DECORATION_SIZE = AvatarDecorationConstants.AVATAR_DECORATION_SIZE;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, rowSpacer: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE };
createStyles = createStyles.createStyles;
obj3 = { height: useCollectibleListLayout.GUTTER_SIZE };
let closure_10 = createStyles(obj);
const memoResult = react.memo((size) => {
  let isTryItOut;
  let items;
  let items3;
  let setSelectedAvatarDecoration;
  let substr;
  ({ items, selectedSkuId: require, setSelectedAvatarDecoration } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  const tmp = closure_10();
  const items1 = [setSelectedAvatarDecoration];
  const onPress = isTryItOut.useCallback(() => {
    setSelectedAvatarDecoration(null);
  }, items1);
  let obj = { children: items3 };
  let obj2 = {
    style: tmp.row,
    children: substr.map((avatarDecoration, index) => {
      if (avatarDecoration === useAvatarDecorationSections.NONE_ITEM) {
        const obj2 = { size, onPress, isSelected: null == require, asDefault: null != dependencyMap };
        return metroImportDefault(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
      } else if (avatarDecoration === useAvatarDecorationSections.SHOP_ITEM) {
        const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_AVATAR_DECORATION_SHEET };
        const EditCollectiblesListItemShop = tmp(15034).EditCollectiblesListItemShop;
        return metroImportDefault(EditCollectiblesListItemShop, obj3, "shop");
      } else if (isAvatarDecorationRecord(avatarDecoration)) {
        const obj4 = { avatarDecoration, isSelected: require === avatarDecoration.skuId, setSelectedAvatarDecoration, isTryItOut, size };
        return metroImportDefault(memoResult1, obj4, avatarDecoration.skuId);
      } else {
        const obj = { style: size };
        size = { height: size, width: size };
        return metroImportDefault(View, obj, index);
      }
    })
  };
  const items2 = [...items, null, null];
  substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  items3 = [closure_7(size, obj2), ];
  let obj3 = { style: tmp.rowSpacer };
  items3[1] = closure_7(size, obj3);
  return closure_9(closure_8, obj);
});
memoResult.displayName = "EditAvatarDecorationRow";
const memoResult1 = react.memo((avatarDecoration) => {
  let isSelected;
  let obj2;
  let setSelectedAvatarDecoration;
  avatarDecoration = avatarDecoration.avatarDecoration;
  ({ isSelected, setSelectedAvatarDecoration } = avatarDecoration);
  let flag = avatarDecoration.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const items = [setSelectedAvatarDecoration, avatarDecoration];
  size = avatarDecoration.size;
  const callback = react.useCallback(() => {
    setSelectedAvatarDecoration(avatarDecoration);
  }, items);
  const obj = { skuId: avatarDecoration.skuId, isSelected, onPress: callback, size, isTryItOut: flag, accessibilityLabel: avatarDecoration.label, children: metroImportDefault(CutoutableAvatarDecorationDefault, obj2) };
  const EditCollectiblesListItemProduct = CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct;
  obj2 = { avatarDecoration, size: AVATAR_DECORATION_SIZE, animate: isSelected };
  return metroImportDefault(EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditAvatarDecorationItem";
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx");

export const EditAvatarDecorationRow = memoResult;
