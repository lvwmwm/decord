// Module ID: 8752
// Function ID: 69195
// Name: NameplateUser
// Dependencies: [31, 27, 4122, 33, 4130, 689, 8207, 1873, 1212, 4126, 4554, 8667, 7881, 7846, 566, 3969, 4361, 8513, 8514, 1273, 8753, 5165, 2]
// Exports: default

// Module 8752 (NameplateUser)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function NameplateUser(arg0) {
  let previewAvatarDecoration;
  let previewNameplate;
  let importDefault;
  let stateFromStores;
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  let obj = currentUser(stateFromStores[11]);
  currentUser = obj.useCurrentUser();
  let obj1 = currentUser(stateFromStores[13]);
  obj = { pendingValue: previewAvatarDecoration };
  let avatarDecoration;
  if (null != currentUser) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  obj.userValue = avatarDecoration;
  const tmp2Result = importDefault(stateFromStores[12])(obj1.getProfilePreviewValue(obj));
  importDefault = tmp2Result;
  const tmp2 = importDefault(stateFromStores[12]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = currentUser(stateFromStores[14]).useStateFromStores(items, () => outer1_5.useReducedMotion);
  const obj4 = currentUser(stateFromStores[14]);
  const name = importDefault(stateFromStores[15]).getName(currentUser);
  obj = { userId: currentUser.id };
  let tmp7 = name;
  if (null != importDefault(stateFromStores[16])(obj)) {
    obj1 = { userId: currentUser.id, userName: name, effectDisplayType: currentUser(stateFromStores[18]).EffectDisplayType.STATIC, lineClamp: 1, variant: "text-md/semibold" };
    tmp7 = callback(importDefault(stateFromStores[17]), obj1);
    const tmp11 = importDefault(stateFromStores[17]);
  }
  const items1 = [currentUser, tmp2Result, stateFromStores];
  const memo = React.useMemo(() => {
    const obj = { user: currentUser, guildId: undefined, size: currentUser(stateFromStores[19]).AvatarSizes.NORMAL, avatarDecoration: c1, animate: !stateFromStores, autoStatusCutout: true, "aria-hidden": true };
    return outer1_6(currentUser(stateFromStores[19]).Avatar, obj);
  }, items1);
  const obj2 = { nameplate: previewNameplate, icon: memo, label: tmp7, isPreviewRow: true };
  return callback(currentUser(stateFromStores[20]).UserNameplateRow, obj2);
}
function PlaceholderUser(end) {
  let start;
  let user;
  ({ user, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { source: obj };
  obj = { uri: user.avatarSrc, size: require(1273) /* Button */.AvatarSizes.NORMAL, "aria-hidden": true };
  obj.icon = callback(require(1273) /* Button */.Avatar, obj);
  obj.label = user.name;
  obj.start = start;
  obj.end = flag;
  return callback(require(5165) /* TableRowInner */.TableRow, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { position: "relative", flex: 1, justifyContent: "center", overflow: "hidden" } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.memberListContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.memberListTitle = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { position: "absolute", right: 0, left: 0, top: 0, bottom: 0, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.memberListGradient = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/nameplates/native/NameplateProductPreview.tsx");

export default function NameplateProductPreview(product) {
  let firstAvatarDecoration;
  let firstNameplate;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(8207) /* ItemsSortingHat */;
  const shopProductItems = obj.useShopProductItems(product.product);
  ({ firstNameplate, firstAvatarDecoration } = shopProductItems);
  let obj1 = require(1873) /* getNameplateData */;
  const nameplateData = obj1.getNameplateData(firstNameplate);
  let obj2 = require(1873) /* getNameplateData */;
  const nameplateSampleUsers = obj2.getNameplateSampleUsers();
  let tmp5 = null;
  if (null != nameplateData) {
    obj = { style: tmp.container, pointerEvents: "box-none", accessibilityLabel: null, accessibilityRole: "image", accessible: true };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { a11y_text: nameplateData.imgAlt };
    obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.YJig7C, obj);
    obj1 = { style: tmp.memberListContainer };
    obj2 = { user: nameplateSampleUsers.mallow, end: true };
    const items = [callback(PlaceholderUser, obj2), , , , , , ];
    const obj3 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const items1 = [intl2.string(require(1212) /* getSystemLocale */.t["yzW/fZ"]), " \u2014 3"];
    obj3.children = items1;
    items[1] = callback2(require(4126) /* Text */.Text, obj3);
    const obj4 = { user: nameplateSampleUsers.phibi, start: true };
    items[2] = callback(PlaceholderUser, obj4);
    const obj5 = { previewNameplate: nameplateData, previewAvatarDecoration: firstAvatarDecoration };
    items[3] = callback(NameplateUser, obj5);
    const obj6 = { user: nameplateSampleUsers.locke, end: true };
    items[4] = callback(PlaceholderUser, obj6);
    const obj7 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const items2 = [intl3.string(require(1212) /* getSystemLocale */.t["NG43/6"]), " \u2014 12"];
    obj7.children = items2;
    items[5] = callback2(require(4126) /* Text */.Text, obj7);
    const obj8 = { user: nameplateSampleUsers.boom, start: true };
    items[6] = callback(PlaceholderUser, obj8);
    obj1.children = items;
    const items3 = [callback2(View, obj1), , ];
    const obj9 = { style: tmp.memberListGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 0.4 } };
    const items4 = [tmp.memberListGradient.color, ];
    const _HermesInternal = HermesInternal;
    items4[1] = "" + tmp.memberListGradient.color + "00";
    obj9.colors = items4;
    items3[1] = callback(importDefault(4554), obj9);
    const obj10 = { style: tmp.memberListGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 } };
    const _HermesInternal2 = HermesInternal;
    const tmp19 = importDefault(4554);
    const items5 = ["" + tmp.memberListGradient.color + "00", tmp.memberListGradient.color];
    obj10.colors = items5;
    items3[2] = callback(importDefault(4554), obj10);
    obj.children = items3;
    tmp5 = callback2(View, obj);
    const tmp22 = importDefault(4554);
  }
  return tmp5;
};
