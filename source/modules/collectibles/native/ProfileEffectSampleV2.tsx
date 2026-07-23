// Module ID: 8216
// Function ID: 64947
// Name: ProfileEffectSample
// Dependencies: [27, 8200, 33, 4130, 689, 5085, 8217, 8218, 2]
// Exports: default

// Module 8216 (ProfileEffectSample)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = { profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
obj.profileBackground = obj;
obj.sampleProfileImage = { aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO };
let obj1 = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
obj.profileBorder = obj1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

export default function ProfileEffectSample(hideBackground) {
  let flag = hideBackground.hideBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  let obj = {};
  const items = [tmp.profileContainer, ];
  let profileBackground = !flag;
  if (profileBackground) {
    profileBackground = tmp.profileBackground;
  }
  items[1] = profileBackground;
  obj.style = items;
  obj = { style: items1 };
  items1 = [tmp.sampleProfileImage];
  obj = { uri: importDefault(8217) };
  obj.source = obj;
  obj.accessible = false;
  obj.resizeMode = "cover";
  const items2 = [callback(importDefault(5085), obj), , ];
  let tmp5 = !flag;
  if (tmp5) {
    const obj1 = { style: tmp.profileBorder };
    tmp5 = callback(View, obj1);
  }
  items2[1] = tmp5;
  const obj2 = { skuId: hideBackground.item.skuId, bannerAdjustment: 0, useThumbnail: true };
  items2[2] = callback(importDefault(8218), obj2);
  obj.children = items2;
  return closure_4(View, obj);
};
