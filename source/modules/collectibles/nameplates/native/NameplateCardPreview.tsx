// Module ID: 8740
// Function ID: 69123
// Name: NameplateCardPreview
// Dependencies: [27, 33, 4130, 689, 44, 1876, 1873, 8272, 1273, 2]
// Exports: default

// Module 8740 (NameplateCardPreview)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.nameplatePreviewContainer = obj;
obj.nameplateContainer = { width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj1 = { width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.nameplate = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default function NameplateCardPreview(arg0) {
  let animate;
  let item;
  ({ item, animate } = arg0);
  if (animate === undefined) {
    animate = false;
  }
  const tmp = callback3();
  importDefault(44)(item.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  let obj = require(1873) /* getNameplateData */;
  obj = { style: tmp.nameplatePreviewContainer };
  const nameplateData = obj.getNameplateData(item);
  obj = { width: 34, avatarSize: require(1273) /* Button */.AvatarSizes.XSMALL, hideAvatar: true };
  const items = [{ opacity: 0.6 }];
  obj.style = items;
  const items1 = [callback(require(8272) /* NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG */.NameplateDummyUserPreview, obj), , , , ];
  const obj1 = { width: 44, avatarSize: require(1273) /* Button */.AvatarSizes.XSMALL, hideAvatar: true };
  const items2 = [{ opacity: 0.6 }];
  obj1.style = items2;
  items1[1] = callback(require(8272) /* NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG */.NameplateDummyUserPreview, obj1);
  const obj2 = { style: tmp.nameplateContainer };
  const obj3 = { width: 54, avatarSize: require(1273) /* Button */.AvatarSizes.XSMALL, nameplate: nameplateData, style: tmp.nameplate, animate };
  obj2.children = callback(require(8272) /* NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG */.NameplateDummyUserPreview, obj3);
  items1[2] = callback(View, obj2);
  const obj4 = { width: 44, avatarSize: require(1273) /* Button */.AvatarSizes.XSMALL, hideAvatar: true };
  const items3 = [{ opacity: 0.6 }];
  obj4.style = items3;
  items1[3] = callback(require(8272) /* NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG */.NameplateDummyUserPreview, obj4);
  const obj5 = { width: 34, avatarSize: require(1273) /* Button */.AvatarSizes.XSMALL, hideAvatar: true };
  const items4 = [{ opacity: 0.6 }];
  obj5.style = items4;
  items1[4] = callback(require(8272) /* NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG */.NameplateDummyUserPreview, obj5);
  obj.children = items1;
  return callback2(View, obj);
};
