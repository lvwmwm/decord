// Module ID: 18249
// Function ID: 18250
// Name: GuildRoleSubscriptionsUpsellActionSheet
// Dependencies: [19, 17, 1072, 4855, 21, 5009, 5267, 5712, 18250, 5619, 1114, 5629, 9055, 2]
// Exports: default

// Module 18249 (GuildRoleSubscriptionsUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1114 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import FastImageDefault from "FastImage" /* 5712 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import AssetRegistryDefault from "AssetRegistry" /* 18250 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const GuildSettingsSections = Constants.GuildSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ title: { marginTop: 24, textAlign: "center" }, description: { marginTop: 8, marginBottom: 24, textAlign: "center" }, dismissButton: { marginTop: 4 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionsUpsellActionSheet(arg0) {
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj7;
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = closure_8();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    children: items
  };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj2 = { source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [closure_6(tmp2, obj2), , , , ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.C0m4rQ) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items[1] = closure_6(Text, obj3);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl5.t.zOHfEX) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[2] = closure_6(Text2, obj4);
  const obj5 = {
    onPress: function handleCheckItOut() {
      importDefault(ContentDismissActionType.UNKNOWN);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: intl3.string(intl5.t.OgQQbG)
  };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[3] = closure_6(Button, obj5);
  const obj6 = { style: tmp.dismissButton, children: closure_6(Button2, obj7) };
  obj7 = {
    onPress() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    text: intl4.string(intl5.t.WAI6xu),
    variant: "secondary"
  };
  Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items[4] = closure_6(View, obj6);
  return closure_7(BottomSheet, obj);
};
