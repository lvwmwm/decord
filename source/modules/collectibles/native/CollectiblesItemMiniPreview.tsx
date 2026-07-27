// Module ID: 8675
// Function ID: 68875
// Name: PX_8
// Dependencies: [31, 27, 5775, 1875, 5776, 5777, 8036, 7977, 33, 689, 4131, 8005, 8626, 5085, 8627, 7997, 1874, 8008, 2]

// Module 8675 (PX_8)
import { View } from "get ActivityIndicator";
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import { isNameplateRecord } from "_isNativeReflectConstruct";
import { isProfileEffectRecord } from "_isNativeReflectConstruct";
import { isProfileFrameRecord } from "_isNativeReflectConstruct";
import { PROFILE_FRAME_ASPECT_RATIO as closure_8 } from "PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
obj = { tile: { overflow: "hidden", alignItems: "center", justifyContent: "center" }, framePreview: obj };
obj = { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose = { overflow: "hidden", width: "100%", height: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.profileEffect = _createForOfIteratorHelperLoose;
obj.sampleProfile = { aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
obj.nameplate = { overflow: "hidden", borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.xs };
obj.nameplateTile = { alignItems: "flex-start" };
obj.nameplateStrip = { width: "90%", aspectRatio: 1.6, position: "relative" };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { overflow: "hidden", borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.xs };
const memoResult = importAllResult.memo(function CollectiblesItemMiniPreview(arg0) {
  let item;
  let size;
  ({ item, size } = arg0);
  const tmp = callback3();
  const items = [tmp.tile, { width: size, height: size }];
  if (isAvatarDecorationRecord(item)) {
    let obj = { style: items };
    obj = { item, size: 0.75 * size };
    obj.children = callback(importDefault(8005), obj);
    return callback(View, obj);
  } else if (isProfileFrameRecord(item)) {
    const obj1 = { style: items };
    const obj2 = { style: tmp.framePreview };
    const obj3 = { profileFrame: item, previewWidth: size * closure_8, previewHeight: size - 2 * PX_8, profileBackgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
    obj2.children = callback(importDefault(8626), obj3);
    obj1.children = callback(View, obj2);
    return callback(View, obj1);
  } else if (isProfileEffectRecord(item)) {
    const obj4 = { style: items };
    const obj5 = { style: tmp.profileEffect, accessible: false, importantForAccessibility: "no" };
    const obj6 = {};
    const obj7 = { uri: importDefault(8627) };
    obj6.source = obj7;
    obj6.style = tmp.sampleProfile;
    obj6.resizeMode = "cover";
    const items1 = [callback(importDefault(5085), obj6), ];
    const obj8 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
    items1[1] = callback(importDefault(7997), obj8);
    obj5.children = items1;
    obj4.children = callback2(View, obj5);
    return callback(View, obj4);
  } else if (isNameplateRecord(item)) {
    obj = require(1874) /* getNameplateData */;
    const obj9 = {};
    const items2 = [items, tmp.nameplateTile];
    obj9.style = items2;
    const obj10 = { style: tmp.nameplateStrip };
    const nameplateData = obj.getNameplateData(item);
    const obj11 = { nameplate: nameplateData, fullOpacity: true, style: tmp.nameplate };
    obj10.children = callback(importDefault(8008), obj11);
    obj9.children = callback(View, obj10);
    return callback(View, obj9);
  } else {
    return null;
  }
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/CollectiblesItemMiniPreview.tsx");

export default memoResult;
