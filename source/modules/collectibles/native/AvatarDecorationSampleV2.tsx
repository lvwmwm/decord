// Module ID: 8270
// Function ID: 65233
// Name: AvatarDecorationSampleV2
// Dependencies: [31, 27, 33, 4130, 689, 44, 1876, 8271, 7960, 2]
// Exports: default

// Module 8270 (AvatarDecorationSampleV2)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { position: "absolute", height: arg0 * 0.8333333333333334, width: arg0 * 0.8333333333333334, borderRadius: arg0 * 0.8333333333333334 / 2, opacity: 0.8, backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWER };
  obj.avatar = obj;
  obj.solidAvatar = { opacity: 1 };
  obj.avatarDecoration = { position: "absolute" };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/AvatarDecorationSampleV2.tsx");

export default function AvatarDecorationSampleV2(arg0) {
  let animate;
  let avatarSource;
  let item;
  let size;
  let threeTierBundle;
  ({ item, size, avatarSource } = arg0);
  ({ animate, threeTierBundle } = arg0);
  const tmp = callback2(size);
  importDefault(44)(item.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  let obj = {};
  obj = {};
  const items = [tmp.avatar, ];
  let solidAvatar = null != avatarSource;
  if (!solidAvatar) {
    solidAvatar = true === threeTierBundle;
  }
  if (solidAvatar) {
    solidAvatar = tmp.solidAvatar;
  }
  items[1] = solidAvatar;
  obj.style = items;
  obj.resizeMode = "contain";
  if (null == avatarSource) {
    avatarSource = importDefault(8271);
  }
  obj.source = avatarSource;
  obj.accessible = false;
  const items1 = [callback(closure_3, obj), ];
  obj = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: callback(importDefault(7960), { avatarDecoration: item, size, animate }) };
  items1[1] = callback(closure_4, obj);
  obj.children = items1;
  return closure_7(closure_6, obj);
};
export const avatarPlaceholderSizeRatio = 0.8333333333333334;
