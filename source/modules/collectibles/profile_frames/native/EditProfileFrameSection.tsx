// Module ID: 13651
// Function ID: 104830
// Name: PX_8
// Dependencies: [31, 27, 6781, 8301, 33, 689, 4130, 7954, 13650, 7955, 5482, 8738, 2]

// Module 13651 (PX_8)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { isProfileFrameRecord } from "_isNativeReflectConstruct";
import { PROFILE_FRAME_ASPECT_RATIO as closure_6 } from "PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
let obj = {};
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj.row = obj;
_createForOfIteratorHelperLoose = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj.rowSpacer = _createForOfIteratorHelperLoose;
let obj2 = { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" };
obj.previewContainer = obj2;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let closure_3;
  let dependencyMap;
  let items;
  let require;
  let setSelectedProfileFrame;
  ({ items, selectedSkuId: require, setSelectedProfileFrame } = arg0);
  ({ guildId: dependencyMap, size: closure_3 } = arg0);
  const tmp = callback3();
  items = [setSelectedProfileFrame];
  let closure_4 = importAllResult.useCallback(() => {
    setSelectedProfileFrame(null);
  }, items);
  let obj = {};
  obj = { style: tmp.row };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, require(7954) /* useCollectibleListLayout */.ROW_SIZE);
  obj.children = substr.map((profileFrame) => {
    if (profileFrame === outer1_0(outer1_2[8]).NONE_ITEM) {
      let obj = { size: closure_3, onPress: closure_4, isSelected: null == closure_0, asDefault: null != closure_2 };
      return outer1_7(outer1_0(outer1_2[9]).EditCollectiblesListItemNone, obj, "none");
    } else if (profileFrame === outer1_0(outer1_2[8]).SHOP_ITEM) {
      obj = { size: closure_3, analyticsSource: setSelectedProfileFrame(outer1_2[10]).EDIT_PROFILE_FRAME_SHEET };
      return outer1_7(outer1_0(outer1_2[9]).EditCollectiblesListItemShop, obj, "shop");
    } else if (outer1_5(profileFrame)) {
      const obj1 = { profileFrame, isSelected: closure_0 === profileFrame.skuId, setSelectedProfileFrame, size: closure_3 };
      return outer1_7(outer1_12, obj1, profileFrame.skuId);
    } else {
      obj = {};
      const obj2 = { height: closure_3, width: closure_3 };
      obj.style = obj2;
      return outer1_7(closure_4, obj, arg1);
    }
  });
  const items2 = [callback(closure_4, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(closure_4, obj);
  obj.children = items2;
  return callback2(closure_8, obj);
});
memoResult.displayName = "EditProfileFrameRow";
const memoResult1 = importAllResult.memo((isSelected) => {
  const profileFrame = isSelected.profileFrame;
  const setSelectedProfileFrame = isSelected.setSelectedProfileFrame;
  const size = isSelected.size;
  const items = [setSelectedProfileFrame, profileFrame];
  const callback = importAllResult.useCallback(() => {
    setSelectedProfileFrame({ skuId: profileFrame.skuId, type: profileFrame.type });
  }, items);
  let obj = { skuId: profileFrame.skuId, isSelected: isSelected.isSelected, onPress: callback, size, accessibilityLabel: profileFrame.label };
  obj = { style: callback3().previewContainer };
  obj = { profileFrame, previewWidth: size * closure_6, previewHeight: size - 2 * PX_8 };
  const tmp = callback3();
  obj.profileBackgroundColor = setSelectedProfileFrame(689).colors.BACKGROUND_BASE_LOW;
  obj.children = callback(setSelectedProfileFrame(8738), obj);
  obj.children = callback(View, obj);
  return callback(profileFrame(7955).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileFrameItem";
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx");

export const EditProfileFrameRow = memoResult;
