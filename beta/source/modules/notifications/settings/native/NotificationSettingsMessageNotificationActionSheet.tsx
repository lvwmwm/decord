// Module ID: 9621
// Function ID: 9622
// Name: NotificationSettingsMessageNotificationActionSheet
// Dependencies: [19, 17, 1074, 21, 4836, 576, 6571, 9618, 4832, 1115, 5997, 6000, 2]
// Exports: default

// Module 9621 (NotificationSettingsMessageNotificationActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import TableRadioGroup2 from "TableRadioGroup" /* 5997 */;
import TableRadioRow4 from "TableRadioRow" /* 6000 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import NotificationSettingsMockMessageDefault from "NotificationSettingsMockMessage" /* 9618 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const UserNotificationSettings = Constants.UserNotificationSettings;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { sheet: obj2, header: { padding: 24, paddingTop: 0 }, content: obj3, form: { marginTop: 8, marginBottom: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, padding: 16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationActionSheet.tsx");

export default function NotificationSettingsMessageNotificationActionSheet(defaultValue) {
  let TableRadioGroup;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let obj3;
  let obj7;
  const tmp = closure_7();
  const obj = { startExpanded: true, backgroundStyles: tmp.sheet, children: items };
  const obj2 = { style: tmp.header, children: hasOwnProperty(NotificationSettingsMockMessageDefault, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { notificationSetting: defaultValue.value };
  items = [hasOwnProperty(View, obj2), ];
  const obj4 = { style: tmp.content, children: items1 };
  const obj5 = { variant: "text-sm/semibold", children: intl.string(intl5.t["1m22ZB"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items1 = [hasOwnProperty(Text, obj5), hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted" }), ];
  const obj6 = { style: tmp.form, children: metroRequire(TableRadioGroup, obj7) };
  obj7 = { defaultValue: defaultValue.value, onChange: defaultValue.onChange, hasIcons: false, children: items2 };
  TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  const obj8 = { label: intl2.string(intl5.t["HVah/3"]), value: UserNotificationSettings.ALL_MESSAGES, subLabel: defaultValue.allMessagesSubLabel };
  const TableRadioRow = TableRadioRow4.TableRadioRow;
  intl2 = intl5.intl;
  items2 = [hasOwnProperty(TableRadioRow, obj8), , ];
  const obj9 = { label: intl3.string(intl5.t["tu+ZWJ"]), value: UserNotificationSettings.ONLY_MENTIONS };
  const TableRadioRow2 = TableRadioRow4.TableRadioRow;
  intl3 = intl5.intl;
  items2[1] = hasOwnProperty(TableRadioRow2, obj9);
  const obj10 = { label: intl4.string(intl5.t.X4wWUi), value: UserNotificationSettings.NO_MESSAGES };
  const TableRadioRow3 = TableRadioRow4.TableRadioRow;
  intl4 = intl5.intl;
  items2[2] = hasOwnProperty(TableRadioRow3, obj10);
  items1[2] = hasOwnProperty(View, obj6);
  items[1] = metroRequire(View, obj4);
  return metroRequire(BottomSheet, obj);
};
