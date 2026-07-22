// Module ID: 8741
// Function ID: 69139
// Name: PX_8
// Dependencies: []
// Exports: default

// Module 8741 (PX_8)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isAvatarDecorationRecord = arg1(dependencyMap[2]).isAvatarDecorationRecord;
const isNameplateRecord = arg1(dependencyMap[3]).isNameplateRecord;
const isProfileEffectRecord = arg1(dependencyMap[4]).isProfileEffectRecord;
const isProfileFrameRecord = arg1(dependencyMap[5]).isProfileFrameRecord;
let closure_8 = arg1(dependencyMap[6]).PROFILE_FRAME_ASPECT_RATIO;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[8]));
const PX_8 = importDefault(dependencyMap[9]).space.PX_8;
let obj = arg1(dependencyMap[10]);
obj = { tile: { 71460343: 68.78, 1402052859: null, -436061645: null }, framePreview: obj };
obj = { track: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000250543742070795, body: 0.00000000000000000000000000000000000000000000000000000000000000000003189917289598507, v: 0.00000000000000000000000000000000000000000000000000000000000004667253313268209, accessibilityRole: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000355745086480259, disabled: -625777451929953900000000000000000000000000000000000000000000000000000000000000000000000000000, y: 0.00000000000000000000000000000000000000000000000000000000000004665177423924698, paddingVertical: PX_8 };
const obj1 = { fr: 2085683.2, a: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010811969863144788, k: 0.0000000000000000000000000000000000000000000000000000000000000000000000012058167407260115, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.profileEffect = obj1;
obj.sampleProfile = { aspectRatio: arg1(dependencyMap[7]).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
const tmp3 = arg1(dependencyMap[8]);
obj.nameplate = { overflow: "hidden", borderTopRightRadius: importDefault(dependencyMap[9]).radii.xs, borderBottomRightRadius: importDefault(dependencyMap[9]).radii.xs };
obj.nameplateTile = { alignItems: "flex-start" };
obj.nameplateStrip = {};
let closure_12 = obj.createStyles(obj);
const obj2 = { overflow: "hidden", borderTopRightRadius: importDefault(dependencyMap[9]).radii.xs, borderBottomRightRadius: importDefault(dependencyMap[9]).radii.xs };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/collectibles/native/CollectiblesItemMiniPreview.tsx");

export default function CollectiblesItemMiniPreview(arg0) {
  let item;
  let size;
  ({ item, size } = arg0);
  const tmp = callback3();
  const items = [tmp.tile, { width: size, height: size }];
  if (isAvatarDecorationRecord(item)) {
    let obj = { style: items };
    obj = { item, size: 0.75 * size };
    obj.children = callback(importDefault(dependencyMap[11]), obj);
    return callback(View, obj);
  } else if (isProfileFrameRecord(item)) {
    const obj1 = { style: items };
    const obj2 = { style: tmp.framePreview };
    const obj3 = { profileFrame: item, previewWidth: size * closure_8, previewHeight: size - 2 * PX_8, profileBackgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
    obj2.children = callback(importDefault(dependencyMap[12]), obj3);
    obj1.children = callback(View, obj2);
    return callback(View, obj1);
  } else if (isProfileEffectRecord(item)) {
    const obj4 = { style: items };
    const obj5 = { <string:3798542332>: null, <string:2195412909>: null, <string:1614302748>: null, style: tmp.profileEffect };
    const obj6 = {};
    const obj7 = { uri: importDefault(dependencyMap[14]) };
    obj6.source = obj7;
    obj6.style = tmp.sampleProfile;
    obj6.resizeMode = "cover";
    const items1 = [callback(importDefault(dependencyMap[13]), obj6), ];
    const obj8 = { style: "<string:4149346306>", value: "<string:295619838>", minimumValue: "<string:20046913>", skuId: item.skuId };
    items1[1] = callback(importDefault(dependencyMap[15]), obj8);
    obj5.children = items1;
    obj4.children = callback2(View, obj5);
    return callback(View, obj4);
  } else if (isNameplateRecord(item)) {
    obj = arg1(dependencyMap[16]);
    const obj9 = {};
    const items2 = [items, tmp.nameplateTile];
    obj9.style = items2;
    const obj10 = { style: tmp.nameplateStrip };
    const nameplateData = obj.getNameplateData(item);
    const obj11 = { nameplate: nameplateData, fullOpacity: true, style: tmp.nameplate };
    obj10.children = callback(importDefault(dependencyMap[17]), obj11);
    obj9.children = callback(View, obj10);
    return callback(View, obj9);
  } else {
    return null;
  }
};
