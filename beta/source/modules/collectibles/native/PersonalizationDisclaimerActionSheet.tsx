// Module ID: 15448
// Function ID: 15449
// Name: PersonalizationDisclaimerActionSheet
// Dependencies: [19, 1074, 21, 4836, 576, 4525, 2111, 6571, 4832, 1115, 5745, 5281, 8037, 4800, 2]
// Exports: default

// Module 15448 (PersonalizationDisclaimerActionSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import LinkingDefault from "Linking" /* 4525 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ButtonGroup2 from "ButtonGroup" /* 5745 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import LinkExternalSmallIcon2 from "LinkExternalSmallIcon" /* 8037 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_8, alignSelf: "center", textAlign: "center" };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default function PersonalizationDisclaimerActionSheet() {
  let LinkExternalSmallIcon;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj5;
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    const obj = HelpdeskUtilsDefault;
    openURL(obj.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { contentStyles: tmp.container, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj2 = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.header, children: intl.string(intl4.t.euks4U) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [hasOwnProperty(Text, obj2), ];
  const obj3 = { children: items1 };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  const obj4 = { size: "lg", text: intl2.string(intl4.t.hvVgAZ), onPress: callback, icon: hasOwnProperty(LinkExternalSmallIcon, obj5), iconPosition: "end" };
  const Button = components_Button_Button.Button;
  intl2 = intl4.intl;
  obj5 = { color: nativeDefault.colors.WHITE };
  LinkExternalSmallIcon = LinkExternalSmallIcon2.LinkExternalSmallIcon;
  items1 = [hasOwnProperty(Button, obj4), ];
  const obj6 = {
    variant: "tertiary",
    size: "lg",
    text: intl3.string(intl4.t.WAI6xu),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet();
    }
  };
  const Button2 = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = hasOwnProperty(Button2, obj6);
  items[1] = metroRequire(ButtonGroup, obj3);
  return metroRequire(BottomSheet, obj);
};
