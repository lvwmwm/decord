// Module ID: 14856
// Function ID: 14857
// Name: CrunchyrollLinkSuccess
// Dependencies: [19, 17, 21, 5170, 9836, 5872, 14857, 5781, 1113, 7378, 5788, 2]
// Exports: default

// Module 14856 (CrunchyrollLinkSuccess)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5781 */;
import components_Button_Button from "components/Button/Button" /* 5788 */;
import FastImageDefault from "FastImage" /* 5872 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7378 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9836 */;
import AssetRegistryDefault from "AssetRegistry" /* 14857 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
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
  const tmp = closure_6();
  const obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = { style: twoWayLinkStyles.container, children: items1 };
  const obj3 = { style: twoWayLinkStyles.content, children: items };
  const obj4 = { source: AssetRegistryDefault, style: tmp.image };
  const tmp3 = FastImageDefault;
  items = [React3(tmp3, obj4), , ];
  const obj5 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.Fnvxvk) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = React3(Text, obj5);
  const obj6 = { variant: "body-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl2.string(intl4.t.YwXceg) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = React3(Text2, obj6);
  items1 = [hasOwnProperty(View, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: React3(View, obj8) };
  obj8 = { style: twoWayLinkStyles.footerButton, children: React3(Button, obj9) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj9 = { size: "md", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = React3(SafeAreaPaddingView, obj7);
  return hasOwnProperty(View, obj2);
};
