// Module ID: 9520
// Function ID: 9521
// Name: NameplateCardPreview
// Dependencies: [17, 21, 5014, 575, 38, 1987, 1984, 9513, 1187, 2]
// Exports: default

// Module 9520 (NameplateCardPreview)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import utils from "utils" /* 1984 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1987 */;
import NameplateDummyUserPreview6 from "NameplateDummyUserPreview" /* 9513 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { nameplatePreviewContainer: size, nameplateContainer: obj2, nameplate: obj3 };
size = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", paddingHorizontal: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj2 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.sm };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateCardPreview.tsx");

export default function NameplateCardPreview(arg0) {
  let NameplateDummyUserPreview3;
  let animate;
  let item;
  let items;
  let obj6;
  ({ item, animate } = arg0);
  if (animate === undefined) {
    animate = false;
  }
  const tmp = closure_6();
  const tmp2 = _modDef38;
  tmp2(item.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
  const obj2 = { style: tmp.nameplatePreviewContainer, children: items };
  const obj = utils;
  const nameplateData = obj.getNameplateData(item);
  const obj3 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: { opacity: 0.6 } };
  const NameplateDummyUserPreview = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items = [React3(NameplateDummyUserPreview, obj3), , , , ];
  const obj4 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: { opacity: 0.6 } };
  const NameplateDummyUserPreview2 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items[1] = React3(NameplateDummyUserPreview2, obj4);
  const obj5 = { style: tmp.nameplateContainer, children: React3(NameplateDummyUserPreview3, obj6) };
  obj6 = { width: 54, avatarSize: native.AvatarSizes.XSMALL, nameplate: nameplateData, style: tmp.nameplate, animate };
  NameplateDummyUserPreview3 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items[2] = React3(View, obj5);
  const obj7 = { width: 44, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: { opacity: 0.6 } };
  const NameplateDummyUserPreview4 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items[3] = React3(NameplateDummyUserPreview4, obj7);
  const obj8 = { width: 34, avatarSize: native.AvatarSizes.XSMALL, hideAvatar: true, style: { opacity: 0.6 } };
  const NameplateDummyUserPreview5 = NameplateDummyUserPreview6.NameplateDummyUserPreview;
  items[4] = React3(NameplateDummyUserPreview5, obj8);
  return hasOwnProperty(View, obj2);
};
