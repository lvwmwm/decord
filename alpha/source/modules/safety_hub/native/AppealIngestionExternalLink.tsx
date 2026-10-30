// Module ID: 13289
// Function ID: 13290
// Name: AppealIngestionExternalLink
// Dependencies: [19, 17, 21, 5009, 575, 6974, 5704, 5619, 1188, 8355, 2]
// Exports: default

// Module 13289 (AppealIngestionExternalLink)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import LinkingDefault from "Linking" /* 5704 */;
import Pressables from "Pressables" /* 6974 */;
import AssetRegistry from "AssetRegistry" /* 8355 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { childButton: obj2, childContainer: obj3, childButtonText: { flex: 1, lineHeight: 20 }, chevron: obj4 };
obj2 = { marginBottom: 8, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingVertical: 16, paddingStart: 16, paddingEnd: 8, borderRadius: nativeDefault.radii.xs };
obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default function AppealIngestionExternalLink(text) {
  let items;
  let obj2;
  ({ url: require, onPress: importDefault } = text);
  text = text.text;
  const tmp = closure_6();
  let obj = {
    style: tmp.childButton,
    accessibilityRole: "button",
    onPress: function handlePress() {
      if (importDefault != null) {
        tmp();
      }
      const obj = LinkingDefault;
      obj.openURL(require);
    },
    children: closure_5(View, obj2)
  };
  obj2 = { style: tmp.childContainer, children: items };
  const PressableHighlight = Pressables.PressableHighlight;
  items = [, ];
  const obj3 = { style: tmp.childButtonText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: text };
  items[0] = closure_4(Text_Text.Text, obj3);
  const obj4 = { source: AssetRegistry, color: tmp.chevron.color };
  const Icon = native.Icon;
  items[1] = closure_4(Icon, obj4);
  return closure_4(PressableHighlight, obj);
};
