// Module ID: 7864
// Function ID: 62670
// Name: memoResult1
// Dependencies: [31, 27, 6779, 1393, 33, 4130, 7865, 7863, 7866, 5484, 7872, 2]

// Module 7864 (memoResult1)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import { AVATAR_DECORATION_SIZE } from "DECORATION_TO_AVATAR_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj.row = obj;
_createForOfIteratorHelperLoose = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj.rowSpacer = _createForOfIteratorHelperLoose;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((size) => {
  let dependencyMap;
  let isTryItOut;
  let items;
  let require;
  let setSelectedAvatarDecoration;
  ({ items, selectedSkuId: require, setSelectedAvatarDecoration } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  let closure_5;
  const tmp = callback3();
  items = [setSelectedAvatarDecoration];
  closure_5 = isTryItOut.useCallback(() => {
    setSelectedAvatarDecoration(null);
  }, items);
  let obj = {};
  obj = { style: tmp.row };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, require(7865) /* useCollectibleListLayout */.ROW_SIZE);
  obj.children = substr.map((avatarDecoration) => {
    if (avatarDecoration === outer1_0(outer1_2[7]).NONE_ITEM) {
      let obj = { size, onPress: callback, isSelected: null == closure_0, asDefault: null != closure_2 };
      return outer1_7(outer1_0(outer1_2[8]).EditCollectiblesListItemNone, obj, "none");
    } else if (avatarDecoration === outer1_0(outer1_2[7]).SHOP_ITEM) {
      obj = { size, analyticsSource: setSelectedAvatarDecoration(outer1_2[9]).EDIT_AVATAR_DECORATION_SHEET };
      return outer1_7(outer1_0(outer1_2[8]).EditCollectiblesListItemShop, obj, "shop");
    } else if (callback(avatarDecoration)) {
      const obj1 = { avatarDecoration, isSelected: closure_0 === avatarDecoration.skuId, setSelectedAvatarDecoration, isTryItOut, size };
      return outer1_7(outer1_11, obj1, avatarDecoration.skuId);
    } else {
      obj = {};
      const obj2 = { height: size, width: size };
      obj.style = obj2;
      return outer1_7(size, obj, arg1);
    }
  });
  const items2 = [callback(size, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(size, obj);
  obj.children = items2;
  return callback2(closure_8, obj);
});
memoResult.displayName = "EditAvatarDecorationRow";
const memoResult1 = importAllResult.memo((avatarDecoration) => {
  let isSelected;
  let setSelectedAvatarDecoration;
  avatarDecoration = avatarDecoration.avatarDecoration;
  ({ isSelected, setSelectedAvatarDecoration } = avatarDecoration);
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
  obj.children = callback(setSelectedAvatarDecoration(7872), obj);
  return callback(avatarDecoration(7866).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditAvatarDecorationItem";
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx");

export const EditAvatarDecorationRow = memoResult;
