// Module ID: 7742
// Function ID: 7743
// Name: XboxLinkEducation
// Dependencies: [19, 17, 1071, 21, 5012, 7726, 2187, 7743, 5699, 5603, 1112, 7449, 5610, 2]
// Exports: default

// Module 7742 (XboxLinkEducation)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1071 */;
import intl4 from "intl" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2187 */;
import Text_Text from "Text/Text" /* 5603 */;
import components_Button_Button from "components/Button/Button" /* 5610 */;
import FastImageDefault from "FastImage" /* 5699 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7449 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 7726 */;
import _modDef7743 from "module_7743" /* 7743 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkEducation.tsx");

export default function XboxLinkEducation(onClose) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj10;
  let obj9;
  onClose = onClose.onClose;
  const tmp = closure_8();
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  const obj3 = { style: twoWayLinkStyles.container, children: items1 };
  const obj4 = { style: twoWayLinkStyles.content, children: items };
  const memo = react.useMemo(() => {
    const obj = { uri: _modDef7743 };
    return obj;
  }, []);
  items = [, , ];
  const obj5 = { source: memo, style: tmp.image };
  items[0] = metroRequire(FastImageDefault, obj5);
  const obj6 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.jHytat) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = metroRequire(Text, obj6);
  const obj7 = { variant: "body-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: intl2.format(intl4.t.yhozpz, { helpdeskArticleUrl: articleURL }) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = metroRequire(Text2, obj7);
  items1 = [metroImportDefault(View, obj4), ];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: metroRequire(View, obj9) };
  obj9 = { style: twoWayLinkStyles.footerButton, children: metroRequire(Button, obj10) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj10 = { size: "lg", variant: "primary", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = metroRequire(SafeAreaPaddingView, obj8);
  return metroImportDefault(View, obj3);
};
