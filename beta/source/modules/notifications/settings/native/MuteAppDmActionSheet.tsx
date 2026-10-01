// Module ID: 12096
// Function ID: 12097
// Name: MuteAppDmActionSheet
// Dependencies: [19, 17, 21, 4836, 576, 6571, 9067, 4832, 1115, 5281, 6540, 6535, 4800, 4528, 1177, 7391, 2]
// Exports: default

// Module 12096 (MuteAppDmActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let closure_4;
let hasOwnProperty;
let size;
let size1;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: size, content: { padding: 16 }, headerText: { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 }, infoText: { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 }, dismissButtonContainer: { marginTop: 8 }, mutedNotificationContainer: size1, mutedNotification: { width: 16, height: 16 } };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
size1 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, height: 24, width: 24, padding: 4, alignContent: "center" };
let closure_6 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default function MuteAppDMActionSheet(channel) {
  let Button2;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj4;
  let obj9;
  const tmp = closure_6();
  _require = tmp;
  channel = channel.channel;
  let obj = { startExpanded: true, children: closure_5(View, obj2) };
  obj2 = { style: tmp.content, children: items };
  let obj3 = { style: tmp.iconContainer, children: closure_4(View, obj4) };
  obj4 = { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(require("BellIcon").BellIcon, { size: "md", color: "interactive-text-default" }) };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  items = [closure_4(View, obj3), , , , ];
  const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(require("intl").t.uAmAiL) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items[1] = closure_4(Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: intl2.string(require("intl").t.mscFJU) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[2] = closure_4(Text2, obj6);
  const obj7 = {
    variant: "destructive",
    text: intl3.string(require("intl").t.uAmAiL),
    onPress() {
      let intl;
      let obj = NotificationSettingsModalActionCreatorsDefault;
      let obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
      const result = obj.updateChannelOverrideSettings(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
      const obj4 = {
        key: "NOTIFICATIONS_MUTED",
        content: intl.string(intl5.t.EgGpkx),
        icon() {
          let Icon;
          let obj2;
          const obj = { style: closure_1_0.mutedNotificationContainer, children: closure_2_4(Icon, obj2) };
          obj2 = { source: channel(dependencyMap[15]), color: channel(dependencyMap[4]).unsafe_rawColors.WHITE, style: closure_1_0.mutedNotification };
          Icon = closure_0(dependencyMap[14]).Icon;
          return closure_2_4(View, obj);
        }
      };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl5.intl;
      open(obj4);
    }
  };
  const Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items[3] = closure_4(Button, obj7);
  const obj8 = { style: tmp.dismissButtonContainer, children: closure_4(Button2, obj9) };
  obj9 = {
    variant: "secondary",
    text: intl4.string(require("intl").t.WAI6xu),
    onPress() {
      const obj = channel(dependencyMap[12]);
      obj.hideActionSheet();
    }
  };
  Button2 = require("components/Button/Button").Button;
  intl4 = require("intl").intl;
  items[4] = closure_4(View, obj8);
  return closure_4(BottomSheet, obj);
};
