// Module ID: 8748
// Function ID: 69180
// Name: PX_8
// Dependencies: [31, 27, 6779, 1874, 6780, 6781, 8257, 8200, 33, 689, 4130, 8226, 8697, 5085, 8698, 8218, 1873, 8229, 2]
// Exports: default

// Module 8748 (PX_8)
import "result";
import { View } from "get ActivityIndicator";
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import { isNameplateRecord } from "_isNativeReflectConstruct";
import { isProfileEffectRecord } from "_isNativeReflectConstruct";
import { isProfileFrameRecord } from "_isNativeReflectConstruct";
import { PROFILE_FRAME_ASPECT_RATIO as closure_8 } from "PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
_createForOfIteratorHelperLoose = { tile: { overflow: "hidden", alignItems: "center", justifyContent: "center" }, framePreview: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" };
let obj1 = { overflow: "hidden", width: "100%", height: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.profileEffect = obj1;
_createForOfIteratorHelperLoose.sampleProfile = { aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
_createForOfIteratorHelperLoose.nameplate = { overflow: "hidden", borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.nameplateTile = { alignItems: "flex-start" };
_createForOfIteratorHelperLoose.nameplateStrip = { width: "90%", aspectRatio: 1.6, position: "relative" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { overflow: "hidden", borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.xs };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/CollectiblesItemMiniPreview.tsx");

export default function CollectiblesItemMiniPreview(arg0) {
  let item;
  let size;
  ({ item, size } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const items = [tmp.tile, { width: size, height: size }];
  if (isAvatarDecorationRecord(item)) {
    let obj = { style: items };
    obj = { item, size: 0.75 * size };
    obj.children = callback(importDefault(8226), obj);
    return callback(View, obj);
  } else if (isProfileFrameRecord(item)) {
    const obj1 = { style: items };
    const obj2 = { style: tmp.framePreview };
    const obj3 = { profileFrame: item, previewWidth: size * closure_8, previewHeight: size - 2 * PX_8, profileBackgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
    obj2.children = callback(importDefault(8697), obj3);
    obj1.children = callback(View, obj2);
    return callback(View, obj1);
  } else if (isProfileEffectRecord(item)) {
    const obj4 = { style: items };
    const obj5 = { style: tmp.profileEffect, accessible: false, importantForAccessibility: "no" };
    const obj6 = {};
    const obj7 = { uri: importDefault(8698) };
    obj6.source = obj7;
    obj6.style = tmp.sampleProfile;
    obj6.resizeMode = "cover";
    const items1 = [callback(importDefault(5085), obj6), ];
    const obj8 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
    items1[1] = callback(importDefault(8218), obj8);
    obj5.children = items1;
    obj4.children = callback2(View, obj5);
    return callback(View, obj4);
  } else if (isNameplateRecord(item)) {
    obj = require(1873) /* getNameplateData */;
    const obj9 = {};
    const items2 = [items, tmp.nameplateTile];
    obj9.style = items2;
    const obj10 = { style: tmp.nameplateStrip };
    const nameplateData = obj.getNameplateData(item);
    const obj11 = { nameplate: nameplateData, fullOpacity: true, style: tmp.nameplate };
    obj10.children = callback(importDefault(8229), obj11);
    obj9.children = callback(View, obj10);
    return callback(View, obj9);
  } else {
    return null;
  }
};
