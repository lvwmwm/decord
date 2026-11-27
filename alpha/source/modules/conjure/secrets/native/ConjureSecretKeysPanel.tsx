// Module ID: 18551
// Function ID: 18552
// Name: ConjureSecretKeysPanel
// Dependencies: [19, 17, 21, 5043, 575, 7161, 5634, 1112, 4245, 2]
// Exports: default

// Module 18551 (ConjureSecretKeysPanel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import Text_Text from "Text/Text" /* 5634 */;
import LockIcon2 from "LockIcon" /* 7161 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { panel: obj2, header: obj3, iconTile: size, titles: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
size = { alignItems: "center", justifyContent: "center", width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/secrets/native/ConjureSecretKeysPanel.tsx");

export default function ConjureSecretKeysPanel(arg0) {
  let LockIcon;
  let children;
  let intl;
  let items;
  let items1;
  let items2;
  let obj4;
  let title;
  ({ title, children } = arg0);
  const tmp = closure_6();
  const obj = { style: tmp.panel, children: items2 };
  const obj2 = { style: tmp.header, children: items };
  const obj3 = { style: tmp.iconTile, children: React3(LockIcon, obj4) };
  obj4 = { size: "sm", color: nativeDefault.colors.ICON_SUBTLE };
  LockIcon = LockIcon2.LockIcon;
  items = [React3(View, obj3), ];
  const obj5 = { style: tmp.titles, children: items1 };
  items1 = [React3(Text_Text.Heading, { variant: "heading-sm/semibold", children: title }), ];
  const obj6 = { variant: "body-xs/normal", color: "text-muted", children: intl.string(_modDef4245.jgDBJZ) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = React3(Text, obj6);
  items[1] = hasOwnProperty(View, obj5);
  items2 = [hasOwnProperty(View, obj2), children];
  return hasOwnProperty(View, obj);
};
