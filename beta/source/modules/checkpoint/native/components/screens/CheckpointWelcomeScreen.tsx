// Module ID: 15259
// Function ID: 15260
// Name: CheckpointWelcomeScreen
// Dependencies: [17, 1372, 21, 4836, 576, 1479, 504, 4678, 15260, 15261, 1115, 3005, 3037, 15263, 2]
// Exports: default

// Module 15259 (CheckpointWelcomeScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import _modDef3005 from "module_3005" /* 3005 */;
import _modDef3037 from "module_3037" /* 3037 */;
import UserUtils from "UserUtils" /* 4678 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 15260 */;
import TextWritingAnimation from "TextWritingAnimation" /* 15261 */;
import CheckpointKnickKnacksDefault from "CheckpointKnickKnacks" /* 15263 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const TextWritingAnimationDefault = TextWritingAnimation;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "100%", flexGrow: 1 }, title: { transformOrigin: "left", width: 340 }, titleText: { textTransform: "uppercase", fontSize: 72, lineHeight: 72, letterSpacing: -2.88 }, subtitle: obj2, content: { flex: 1, justifyContent: "center" }, knickKnacks: obj3 };
obj2 = { maxWidth: 327, marginTop: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx");

export default function CheckpointWelcomeScreen() {
  let currentUser;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj5;
  const tmp = closure_7();
  const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = UserUtils;
  const name = obj2.useName(stateFromStores);
  const obj3 = { children: hasOwnProperty(View, obj4) };
  obj4 = { style: tmp.container, children: metroRequire(View, obj5) };
  obj5 = { style: tmp.content, children: items3 };
  const obj6 = { style: items1, textStyle: tmp.titleText, text: intl.string(_modDef3005["CdU/PF"]), delay: 100, variant: "display-lg" };
  items1 = [tmp.title, ];
  const obj7 = { transform: items2 };
  items2 = [{ scale: bound }];
  items1[1] = obj7;
  const tmp5 = CheckpointScreenDefault;
  const tmp6 = TextWritingAnimationDefault;
  intl = intl3.intl;
  items3 = [hasOwnProperty(tmp6, obj6), , ];
  const obj8 = { style: tmp.subtitle, text: intl2.formatToPlainString(_modDef3037.xhZ23b, { username: name }), delay: 100 + TextWritingAnimation.DURATION, variant: "heading-xl/medium" };
  const tmp7 = TextWritingAnimationDefault;
  intl2 = intl3.intl;
  items3[1] = hasOwnProperty(tmp7, obj8);
  const obj9 = { style: tmp.knickKnacks };
  items3[2] = hasOwnProperty(CheckpointKnickKnacksDefault, obj9);
  return hasOwnProperty(tmp5, obj3);
};
