// Module ID: 8579
// Function ID: 8580
// Name: CrunchyrollLinkSuccess
// Dependencies: [19, 17, 21, 4836, 8538, 8580, 4832, 1115, 6544, 5281, 2]
// Exports: default

// Module 8579 (CrunchyrollLinkSuccess)
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8538 */;
import AssetRegistryDefault from "AssetRegistry" /* 8580 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx");

export default function CrunchyrollLinkDiscordSuccess(onClose) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj8;
  let obj9;
  onClose = onClose.onClose;
  const tmp = closure_7();
  const obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj3 = { style: twoWayLinkStyles.content, children: items };
  items = [, , ];
  const obj2 = { style: twoWayLinkStyles.container, children: items1 };
  const obj4 = { source: AssetRegistryDefault, style: tmp.image };
  items[0] = hasOwnProperty(_false, obj4);
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.Fnvxvk) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = hasOwnProperty(Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl2.string(intl4.t.YwXceg) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = hasOwnProperty(Text2, obj6);
  items1 = [metroRequire(React3, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: hasOwnProperty(React3, obj8) };
  obj8 = { style: twoWayLinkStyles.footerButton, children: hasOwnProperty(Button, obj9) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj9 = { size: "md", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = hasOwnProperty(SafeAreaPaddingView, obj7);
  return metroRequire(React3, obj2);
};
