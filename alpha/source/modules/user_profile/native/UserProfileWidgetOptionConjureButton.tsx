// Module ID: 15199
// Function ID: 15200
// Name: UserProfileWidgetOptionConjureButton
// Dependencies: [19, 17, 21, 5140, 575, 5374, 15200, 11105, 5751, 1113, 4026, 2]
// Exports: default

// Module 15199 (UserProfileWidgetOptionConjureButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5751 */;
import MagicWandIcon2 from "MagicWandIcon" /* 11105 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
const Pressable = react_native.Pressable;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { button: obj2, pressed: { opacity: 0.8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md, overflow: "hidden", alignSelf: "stretch", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, minHeight: 96 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetOptionConjureButton.tsx");

export default function UserProfileWidgetOptionConjureButton(arg0) {
  let button;
  let intl;
  let items;
  let padding;
  ({ width: require, padding } = arg0);
  if (padding === undefined) {
    let tmp = padding;
    const tmp2 = dependencyMap;
    padding = padding(575).space.PX_12;
  }
  dependencyMap = closure_7();
  let obj = {
    onPress: react.useCallback(() => {
      const obj = require("ActionSheetActionCreators");
      const obj2 = { content: closure_1_5(padding(button[6]), {}), key: require("ConjureCustomWidgetSheet").CONJURE_CUSTOM_WIDGET_SHEET_KEY, stackingBehavior: "stack" };
      obj.showActionSheet(obj2);
    }, []),
    accessibilityRole: "button",
    style(pressed) {
      pressed = pressed.pressed;
      const items = [button.button, , , ];
      const obj = { padding };
      items[1] = obj;
      let tmp3 = null != require;
      const tmp = button;
      if (tmp3) {
        tmp3 = { width: tmp2 };
        const obj2 = { width: tmp2 };
      }
      items[2] = tmp3;
      if (pressed) {
        pressed = tmp.pressed;
      }
      items[3] = pressed;
      return items;
    },
    children: items
  };
  let obj2 = { size: "md", color: padding(575).colors.TEXT_DEFAULT };
  const MagicWandIcon = MagicWandIcon2.MagicWandIcon;
  items = [closure_5(MagicWandIcon, obj2), ];
  const obj3 = { variant: "body-md/medium", color: "text-strong", children: intl.string(padding(4026)["5WHmVU"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = closure_5(Text, obj3);
  return closure_6(Pressable, obj);
};
