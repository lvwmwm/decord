// Module ID: 13477
// Function ID: 102295
// Name: PX_8
// Dependencies: []

// Module 13477 (PX_8)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isProfileFrameRecord = arg1(dependencyMap[2]).isProfileFrameRecord;
let closure_6 = arg1(dependencyMap[3]).PROFILE_FRAME_ASPECT_RATIO;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const PX_8 = importDefault(dependencyMap[5]).space.PX_8;
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { padding: "Next", paddingBottom: null, flexDirection: null, paddingHorizontal: arg1(dependencyMap[7]).GUTTER_SIZE };
obj.row = obj;
obj1 = { height: arg1(dependencyMap[7]).GUTTER_SIZE };
obj.rowSpacer = obj1;
const obj2 = { borderWidth: "<string:1107296833>", width: "p\u00E4iv\u00E4", height: "{{count}} p\u00E4iv\u00E4\u00E4", justifyContent: "<string:39208002>", alignItems: "<string:19595008>", borderRadius: "<string:1275085312>", paddingVertical: PX_8 };
obj.previewContainer = obj2;
let closure_11 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let items;
  let setSelectedProfileFrame;
  ({ items, selectedSkuId: closure_0, setSelectedProfileFrame } = arg0);
  const importDefault = setSelectedProfileFrame;
  ({ guildId: closure_2, size: closure_3 } = arg0);
  const tmp = callback3();
  items = [setSelectedProfileFrame];
  let closure_4 = importAllResult.useCallback(() => {
    setSelectedProfileFrame(null);
  }, items);
  let obj = {};
  obj = { style: tmp.row };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, arg1(dependencyMap[7]).ROW_SIZE);
  obj.children = substr.map((profileFrame) => {
    if (profileFrame === callback(closure_2[8]).NONE_ITEM) {
      let obj = { size: closure_3, onPress: closure_4, isSelected: null == callback, asDefault: null != closure_2 };
      return callback3(callback(closure_2[9]).EditCollectiblesListItemNone, obj, "none");
    } else if (profileFrame === callback(closure_2[8]).SHOP_ITEM) {
      obj = { size: closure_3, analyticsSource: setSelectedProfileFrame(closure_2[10]).EDIT_PROFILE_FRAME_SHEET };
      return callback3(callback(closure_2[9]).EditCollectiblesListItemShop, obj, "shop");
    } else if (callback2(profileFrame)) {
      const obj1 = { profileFrame, isSelected: callback === profileFrame.skuId, setSelectedProfileFrame, size: closure_3 };
      return callback3(closure_12, obj1, profileFrame.skuId);
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
  return callback2(closure_8, obj);
});
memoResult.displayName = "EditProfileFrameRow";
const memoResult1 = importAllResult.memo((isSelected) => {
  const profileFrame = isSelected.profileFrame;
  const arg1 = profileFrame;
  const setSelectedProfileFrame = isSelected.setSelectedProfileFrame;
  const importDefault = setSelectedProfileFrame;
  const size = isSelected.size;
  const items = [setSelectedProfileFrame, profileFrame];
  const callback = importAllResult.useCallback(() => {
    setSelectedProfileFrame({ skuId: profileFrame.skuId, type: profileFrame.type });
  }, items);
  let obj = { skuId: profileFrame.skuId, isSelected: isSelected.isSelected, onPress: callback, size, accessibilityLabel: profileFrame.label };
  obj = { style: callback3().previewContainer };
  obj = { profileFrame, previewWidth: size * closure_6, previewHeight: size - 2 * PX_8 };
  const tmp = callback3();
  obj.profileBackgroundColor = importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW;
  obj.children = callback(importDefault(dependencyMap[11]), obj);
  obj.children = callback(View, obj);
  return callback(arg1(dependencyMap[9]).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileFrameItem";
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx");

export const EditProfileFrameRow = memoResult;
