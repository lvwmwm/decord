// Module ID: 12708
// Function ID: 12709
// Name: CollectiblesItemMiniPreview
// Dependencies: [19, 17, 6967, 1972, 6968, 6969, 7667, 8261, 21, 576, 4836, 8273, 8285, 5899, 8286, 8264, 1971, 8281, 2]

// Module 12708 (CollectiblesItemMiniPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import utils from "utils" /* 1971 */;
import NameplateRecord from "NameplateRecord" /* 1972 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 6967 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 6968 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 6969 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 7667 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 8261 */;
import ProfileEffectDefault from "ProfileEffect" /* 8264 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8273 */;
import NameplateDefault from "Nameplate" /* 8281 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8285 */;
import _modDef8286 from "module_8286" /* 8286 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let size;
const View = react_native.View;
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
let closure_8 = ProfileFrameConstants.PROFILE_FRAME_ASPECT_RATIO;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { tile: { overflow: "hidden", alignItems: "center", justifyContent: "center" }, framePreview: { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" }, profileEffect: size, sampleProfile: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" }, nameplate: obj2, nameplateTile: { alignItems: "flex-start" }, nameplateStrip: { width: "90%", aspectRatio: 1.6, position: "relative" } };
size = { overflow: "hidden", width: "100%", height: "100%", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { overflow: "hidden", borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs };
let closure_12 = createStyles(obj);
const memoResult = react.memo(function CollectiblesItemMiniPreview(arg0) {
  let item;
  let items1;
  let items2;
  let obj10;
  let obj13;
  let obj14;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let tmp22;
  ({ item, size } = arg0);
  const tmp = closure_12();
  const items = [tmp.tile, { width: size, height: size }];
  if (isAvatarDecorationRecord(item)) {
    const obj2 = { style: items, children: React4(AvatarDecorationSampleV2Default, obj3) };
    obj3 = { item, size: 0.75 * size };
    return React4(View, obj2);
  } else if (isProfileFrameRecord(item)) {
    const obj4 = { style: items, children: React4(View, obj5) };
    obj5 = { style: tmp.framePreview, children: React4(tmp22, obj6) };
    obj6 = { profileFrame: item, previewWidth: size * closure_8, previewHeight: size - 2 * PX_8, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
    tmp22 = ProfileFrameSamplePreviewDefault;
    return React4(View, obj4);
  } else if (isProfileEffectRecord(item)) {
    const obj7 = { style: items, children: authStore(View, obj8) };
    obj8 = { style: tmp.profileEffect, accessible: false, importantForAccessibility: "no", children: items1 };
    const obj9 = { source: obj10, style: tmp.sampleProfile, resizeMode: "cover" };
    obj10 = { uri: _modDef8286 };
    const tmp17 = FastImageDefault;
    items1 = [React4(tmp17, obj9), ];
    const obj11 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
    items1[1] = React4(ProfileEffectDefault, obj11);
    return React4(View, obj7);
  } else if (isNameplateRecord(item)) {
    const obj12 = { style: items2, children: React4(View, obj13) };
    items2 = [items, tmp.nameplateTile];
    obj13 = { style: tmp.nameplateStrip, children: React4(NameplateDefault, obj14) };
    const obj = utils;
    const nameplateData = obj.getNameplateData(item);
    obj14 = { nameplate: nameplateData, fullOpacity: true, style: tmp.nameplate };
    return React4(View, obj12);
  } else {
    return null;
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesItemMiniPreview.tsx");

export default memoResult;
