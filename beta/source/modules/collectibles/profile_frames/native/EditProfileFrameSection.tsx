// Module ID: 14190
// Function ID: 14191
// Name: EditProfileFrameSection
// Dependencies: [19, 17, 6969, 7667, 21, 576, 4836, 12743, 14189, 12744, 6603, 8285, 2]

// Module 14190 (EditProfileFrameSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 6969 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 7667 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8285 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 12743 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 12744 */;
import useProfileFrameSections from "useProfileFrameSections" /* 14189 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let profileFrame;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
let closure_6 = ProfileFrameConstants.PROFILE_FRAME_ASPECT_RATIO;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { row: obj2, rowSpacer: obj3, previewContainer: { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE };
createStyles = createStyles.createStyles;
obj3 = { height: useCollectibleListLayout.GUTTER_SIZE };
let closure_11 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  let items;
  let items3;
  let setSelectedProfileFrame;
  let substr;
  ({ items, selectedSkuId: require, setSelectedProfileFrame } = arg0);
  ({ guildId: dependencyMap, size: react } = arg0);
  const tmp = closure_11();
  const items1 = [setSelectedProfileFrame];
  const onPress = react.useCallback(() => {
    setSelectedProfileFrame(null);
  }, items1);
  let obj = { children: items3 };
  let obj2 = {
    style: tmp.row,
    children: substr.map((profileFrame, index) => {
      if (profileFrame === useProfileFrameSections.NONE_ITEM) {
        const obj2 = { size: width, onPress, isSelected: null == require, asDefault: null != dependencyMap };
        return metroImportDefault(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
      } else if (profileFrame === useProfileFrameSections.SHOP_ITEM) {
        const obj3 = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET };
        const EditCollectiblesListItemShop = tmp(12744).EditCollectiblesListItemShop;
        return metroImportDefault(EditCollectiblesListItemShop, obj3, "shop");
      } else if (isProfileFrameRecord(profileFrame)) {
        const obj4 = { profileFrame, isSelected: require === profileFrame.skuId, setSelectedProfileFrame, size: width };
        return metroImportDefault(memoResult1, obj4, profileFrame.skuId);
      } else {
        const obj = { style: size };
        size = { height: width, width };
        return metroImportDefault(View, obj, index);
      }
    })
  };
  const items2 = [...items, null, null];
  substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  items3 = [closure_7(onPress, obj2), ];
  let obj3 = { style: tmp.rowSpacer };
  items3[1] = closure_7(onPress, obj3);
  return closure_9(closure_8, obj);
});
memoResult.displayName = "EditProfileFrameRow";
const memoResult1 = react.memo((profileFrame) => {
  let obj2;
  let obj3;
  let tmp3;
  profileFrame = profileFrame.profileFrame;
  const setSelectedProfileFrame = profileFrame.setSelectedProfileFrame;
  size = profileFrame.size;
  const isSelected = profileFrame.isSelected;
  const items = [setSelectedProfileFrame, profileFrame];
  const tmp = closure_11();
  const callback = react.useCallback(() => {
    const obj = { skuId: profileFrame.skuId, type: profileFrame.type };
    setSelectedProfileFrame(obj);
  }, items);
  let obj = { skuId: profileFrame.skuId, isSelected, onPress: callback, size, accessibilityLabel: profileFrame.label, children: metroImportDefault(View, obj2) };
  obj2 = { style: tmp.previewContainer, children: metroImportDefault(tmp3, obj3) };
  const EditCollectiblesListItemProduct = CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct;
  obj3 = { profileFrame, previewWidth: size * closure_6, previewHeight: size - 2 * PX_8, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  tmp3 = ProfileFrameSamplePreviewDefault;
  return metroImportDefault(EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileFrameItem";
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx");

export const EditProfileFrameRow = memoResult;
