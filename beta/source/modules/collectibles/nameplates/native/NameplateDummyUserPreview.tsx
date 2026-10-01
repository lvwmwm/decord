// Module ID: 8280
// Function ID: 8281
// Name: NameplateDummyUserPreview
// Dependencies: [19, 17, 1182, 21, 1177, 576, 4836, 504, 4538, 8281, 8283, 8284, 2]
// Exports: NameplateDummyUserPreview

// Module 8280 (NameplateDummyUserPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import themes from "themes" /* 4538 */;
import NameplateDefault from "Nameplate" /* 8281 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = {};
let obj2 = { padding: nativeDefault.space.PX_4, avatarMarginRight: nativeDefault.space.PX_4, placeholderBarHeight: 6 };
const XSMALL_20 = native.AvatarSizes.XSMALL_20;
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[XSMALL_20] = obj2;
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[native.AvatarSizes.XSMALL] = { padding: 6, avatarMarginRight: 6, placeholderBarHeight: 8 };
let obj3 = { padding: nativeDefault.space.PX_8, avatarMarginRight: nativeDefault.space.PX_8, placeholderBarHeight: 14 };
let NORMAL = native.AvatarSizes.NORMAL;
NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG[NORMAL] = obj3;
let closure_8 = createStyles.createStyles((arg0, arg1) => {
  let num;
  let obj;
  let obj3;
  let str;
  obj = { container: { padding: obj[arg0].padding, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", position: "relative", borderRadius: nativeDefault.radii.sm }, avatarContainer: obj3, avatar: { opacity: num }, placeholderBar: { borderRadius: nativeDefault.radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: nativeDefault.colors.BORDER_STRONG }, nameplate: { borderRadius: nativeDefault.radii.sm } };
  ({ padding: obj[arg0].padding, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", position: "relative", borderRadius: nativeDefault.radii.sm });
  obj3 = { borderRadius: nativeDefault.radii.round, marginRight: obj[arg0].avatarMarginRight, backgroundColor: str };
  str = "transparent";
  if (arg1) {
    str = tmp2(576).colors.BORDER_STRONG;
  }
  num = 0.5;
  if (arg1) {
    num = 0;
  }
  ({ borderRadius: nativeDefault.radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: nativeDefault.colors.BORDER_STRONG });
  ({ borderRadius: nativeDefault.radii.sm });
  return obj;
});
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx");

export { NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG };
export const NameplateDummyUserPreview = function NameplateDummyUserPreview(hideAvatar) {
  let Avatar;
  let animate;
  let items1;
  let items2;
  let items3;
  let nameplate;
  let obj5;
  let style;
  let theme;
  let flag = hideAvatar.hideAvatar;
  const width = hideAvatar.width;
  if (flag === undefined) {
    flag = false;
  }
  let NORMAL = hideAvatar.avatarSize;
  if (NORMAL === undefined) {
    NORMAL = native.AvatarSizes.NORMAL;
  }
  ({ animate, nameplate, style } = hideAvatar);
  if (animate === undefined) {
    animate = false;
  }
  const tmp3 = closure_8(NORMAL, flag);
  let obj = get_initialized;
  const items = [ThemeStore];
  const obj2 = { style: items1, children: items2 };
  items1 = [tmp3.container, style];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = themes;
    return obj.isThemeDark(theme.theme);
  });
  items2 = [, , ];
  const obj3 = { nameplate, fullOpacity: true, style: tmp3.nameplate, animate };
  items2[0] = hasOwnProperty(NameplateDefault, obj3);
  const obj4 = { style: tmp3.avatarContainer, children: hasOwnProperty(Avatar, obj5) };
  obj5 = { source: importDefault(stateFromStores ? 8283 : 8284), size: NORMAL, "aria-hidden": true, style: tmp3.avatar };
  Avatar = native.Avatar;
  items2[1] = hasOwnProperty(View, obj4);
  const obj6 = { style: items3 };
  items3 = [tmp3.placeholderBar, { width }];
  items2[2] = hasOwnProperty(View, obj6);
  return metroRequire(View, obj2);
};
