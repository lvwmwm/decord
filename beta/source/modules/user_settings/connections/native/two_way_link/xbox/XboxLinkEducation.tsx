// Module ID: 8553
// Function ID: 8554
// Name: XboxLinkEducation
// Dependencies: [19, 17, 1074, 21, 4836, 8538, 2111, 8554, 4832, 1115, 6544, 5281, 2]
// Exports: default

// Module 8553 (XboxLinkEducation)
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8538 */;
import _modDef8554 from "module_8554" /* 8554 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
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
  const tmp = closure_9();
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.XBOX_CONNECTION);
  const obj4 = { style: twoWayLinkStyles.content, children: items };
  items = [, , ];
  const obj3 = { style: twoWayLinkStyles.container, children: items1 };
  const obj5 = {
    source: react.useMemo(() => {
      const obj = { uri: _modDef8554 };
      return obj;
    }, []),
    style: tmp.image
  };
  items[0] = metroImportDefault(React3, obj5);
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.jHytat) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = metroImportDefault(Text, obj6);
  const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: intl2.format(intl4.t.yhozpz, { helpdeskArticleUrl: articleURL }) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = metroImportDefault(Text2, obj7);
  items1 = [metroImportAll(hasOwnProperty, obj4), ];
  const obj8 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: metroImportDefault(hasOwnProperty, obj9) };
  obj9 = { style: twoWayLinkStyles.footerButton, children: metroImportDefault(Button, obj10) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj10 = { size: "lg", variant: "primary", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = metroImportDefault(SafeAreaPaddingView, obj8);
  return metroImportAll(hasOwnProperty, obj3);
};
