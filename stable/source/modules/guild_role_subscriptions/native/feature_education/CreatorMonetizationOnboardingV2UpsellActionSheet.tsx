// Module ID: 18678
// Function ID: 18679
// Name: CreatorMonetizationOnboardingV2UpsellActionSheet
// Dependencies: [19, 17, 1072, 5016, 21, 5170, 5420, 5783, 1113, 5874, 18679, 5790, 9187, 2]
// Exports: default

// Module 18678 (CreatorMonetizationOnboardingV2UpsellActionSheet)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5420 */;
import Text_Text from "Text/Text" /* 5783 */;
import components_Button_Button from "components/Button/Button" /* 5790 */;
import FastImageDefault from "FastImage" /* 5874 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9187 */;
import AssetRegistryDefault from "AssetRegistry" /* 18679 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const GuildSettingsSections = Constants.GuildSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { paddingLeft: 24, paddingRight: 24, paddingTop: 24 }, title: { marginBottom: 6 }, description: { marginBottom: 24 }, image: { marginBottom: 24, width: "100%" }, dismissButton: { marginTop: 4 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx");

export default function CreatorMonetizationOnboardingV2UpsellActionSheet(arg0) {
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj8;
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = closure_8();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    children: closure_7(View, obj2)
  };
  obj2 = { style: tmp.container, children: items };
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl5.t["v+Jm6X"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [closure_6(Text, obj3), , , , ];
  const obj4 = { style: tmp.description, accessibilityRole: "text", variant: "body-sm/medium", color: "text-default", children: intl2.string(intl5.t.kUUFbG) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = closure_6(Text2, obj4);
  const obj5 = { style: tmp.image, resizeMode: "contain", source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items[2] = closure_6(tmp2, obj5);
  const obj6 = {
    onPress: function handleCheckItOut() {
      importDefault(ContentDismissActionType.UNKNOWN);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: intl3.string(intl5.t.OgQQbG)
  };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[3] = closure_6(Button, obj6);
  const obj7 = { style: tmp.dismissButton, children: closure_6(Button2, obj8) };
  obj8 = {
    onPress() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    text: intl4.string(intl5.t.WAI6xu),
    variant: "secondary"
  };
  Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items[4] = closure_6(View, obj7);
  return closure_6(BottomSheet, obj);
};
