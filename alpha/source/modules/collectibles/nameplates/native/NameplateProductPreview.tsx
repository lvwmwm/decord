// Module ID: 15030
// Function ID: 15031
// Name: NameplateProductPreview
// Dependencies: [19, 17, 5015, 21, 5014, 575, 8742, 1984, 1113, 5624, 5587, 8749, 8830, 8737, 504, 5068, 6439, 10772, 10773, 1187, 10797, 6975, 2]
// Exports: default

// Module 15030 (NameplateProductPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import utils from "utils" /* 1984 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import TableRow2 from "TableRow" /* 6975 */;
import useShopProductItems from "useShopProductItems" /* 8742 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
function NameplateUser(arg0) {
  let avatarDecoration;
  let previewAvatarDecoration;
  let previewNameplate;
  let useReducedMotion;
  let currentUser;
  importDefault = undefined;
  let stateFromStores;
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  let obj = currentUser(stateFromStores[11]);
  currentUser = obj.useCurrentUser();
  const obj2 = { pendingValue: previewAvatarDecoration, userValue: avatarDecoration };
  avatarDecoration = undefined;
  const tmp5 = require("useAvatarDecorationIfNotExpired");
  const getProfilePreviewValue = currentUser(stateFromStores[13]).getProfilePreviewValue;
  currentUser(stateFromStores[13]);
  if (currentUser != null) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  const tmp5Result = tmp5(getProfilePreviewValue(obj2));
  importDefault = tmp5Result;
  const items = [AccessibilityStore];
  const tmpResult = currentUser(stateFromStores[14]);
  stateFromStores = tmpResult.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4Result = require("UserUtils");
  const name = tmp4Result.getName(currentUser);
  let label = name;
  const obj3 = { userId: currentUser.id };
  if (null != require("useDisplayNameStyles")(obj3)) {
    const obj4 = { userId: currentUser.id, userName: name, effectDisplayType: currentUser(stateFromStores[18]).EffectDisplayType.STATIC, lineClamp: 1, variant: "text-md/semibold" };
    const tmp4Result2 = require("UsernameWithEffects");
    label = closure_6(tmp4Result2, obj4);
  }
  const items1 = [currentUser, tmp5Result, stateFromStores];
  const icon = react.useMemo(() => {
    const obj = { user: currentUser, guildId: "a", size: native.AvatarSizes.NORMAL, avatarDecoration, animate: !stateFromStores, autoStatusCutout: null, "aria-hidden": "\u{1F960}" };
    const Avatar = native.Avatar;
    return metroRequire(Avatar, obj);
  }, items1);
  return closure_6(currentUser(stateFromStores[20]).UserNameplateRow, { nameplate, icon, label, isPreviewRow: true });
}
function PlaceholderUser(end) {
  let Avatar;
  let obj2;
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
  const obj = { icon: metroRequire(Avatar, obj2), label: user.name, start, end: flag };
  const TableRow = TableRow2.TableRow;
  obj2 = { source: { uri: user.avatarSrc }, size: native.AvatarSizes.NORMAL, "aria-hidden": true };
  Avatar = native.Avatar;
  return metroRequire(TableRow, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "relative", flex: 1, justifyContent: "center", overflow: "hidden" }, memberListContainer: obj2, memberListTitle: obj3, memberListGradient: rect };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_8 };
rect = { position: "absolute", right: 0, left: 0, top: 0, bottom: 0, color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateProductPreview.tsx");

export default function NameplateProductPreview(arg0) {
  let avatarDecorationOverride;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj5;
  let product;
  ({ product, avatarDecorationOverride } = arg0);
  const tmp = closure_8();
  const obj = useShopProductItems;
  const firstNameplate = obj.useShopProductItems(product).firstNameplate;
  const obj2 = utils;
  const nameplateData = obj2.getNameplateData(firstNameplate);
  const obj3 = utils;
  const nameplateSampleUsers = obj3.getNameplateSampleUsers();
  let tmp6 = null;
  if (null != nameplateData) {
    const obj4 = { style: tmp.container, pointerEvents: "box-none", accessibilityLabel: intl.formatToPlainString(intl4.t.YJig7C, obj5), accessibilityRole: "image", accessible: true, children: items3 };
    intl = tmp2(1113).intl;
    obj5 = { a11y_text: nameplateData.imgAlt };
    const obj6 = { style: tmp.memberListContainer, children: items };
    const obj7 = { user: nameplateSampleUsers.mallow, end: true };
    items = [metroRequire(PlaceholderUser, obj7), , , , , , ];
    const obj8 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle, children: items1 };
    const Text = tmp2(5624).Text;
    const intl2 = tmp2(1113).intl;
    items1 = [intl2.string(intl4.t["yzW/fZ"]), " \u2014 3"];
    items[1] = metroImportDefault(Text, obj8);
    const obj9 = { user: nameplateSampleUsers.phibi, start: true };
    items[2] = metroRequire(PlaceholderUser, obj9);
    const obj10 = { previewNameplate: nameplateData, previewAvatarDecoration: avatarDecorationOverride };
    items[3] = metroRequire(NameplateUser, obj10);
    const obj11 = { user: nameplateSampleUsers.locke, end: true };
    items[4] = metroRequire(PlaceholderUser, obj11);
    const obj12 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle, children: items2 };
    const Text2 = tmp2(5624).Text;
    const intl3 = tmp2(1113).intl;
    items2 = [intl3.string(intl4.t["NG43/6"]), " \u2014 12"];
    items[5] = metroImportDefault(Text2, obj12);
    const obj13 = { user: nameplateSampleUsers.boom, start: true };
    items[6] = metroRequire(PlaceholderUser, obj13);
    items3 = [metroImportDefault(View, obj6), , ];
    const obj14 = { style: tmp.memberListGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 0.4 }, colors: items4 };
    items4 = [tmp.memberListGradient.color, ];
    const _HermesInternal = HermesInternal;
    const tmp13 = LinearGradientDefault;
    items4[1] = "" + tmp.memberListGradient.color + "00";
    items3[1] = metroRequire(tmp13, obj14);
    const _HermesInternal2 = HermesInternal;
    const obj15 = { style: tmp.memberListGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: items5 };
    items5 = [, ];
    const tmp15 = LinearGradientDefault;
    items5[0] = "" + tmp.memberListGradient.color + "00";
    items5[1] = tmp.memberListGradient.color;
    items3[2] = metroRequire(tmp15, obj15);
    tmp6 = metroImportDefault(View, obj4);
  }
  return tmp6;
};
