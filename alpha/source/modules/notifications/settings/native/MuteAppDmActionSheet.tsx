// Module ID: 14927
// Function ID: 14928
// Name: MuteAppDmActionSheet
// Dependencies: [19, 17, 21, 5306, 575, 5566, 10996, 5929, 1113, 5936, 7883, 7878, 5552, 6015, 10994, 2]
// Exports: default

// Module 14927 (MuteAppDmActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7878 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7883 */;
import BellSlashIcon from "BellSlashIcon" /* 10994 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { iconContainer: { alignItems: "center", marginBottom: 8 }, iconBackground: size, content: { padding: 16 }, headerText: { textAlign: "center", marginBottom: 8, paddingHorizontal: 16 }, infoText: { textAlign: "center", marginBottom: 16, paddingHorizontal: 16 }, dismissButtonContainer: { marginTop: 8 } };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/notifications/settings/native/MuteAppDmActionSheet.tsx");

export default function MuteAppDMActionSheet(channel) {
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj4;
  let obj9;
  const tmp = closure_6();
  channel = channel.channel;
  let obj = { startExpanded: true, children: closure_5(View, obj2) };
  obj2 = { style: tmp.content, children: items };
  let obj3 = { style: tmp.iconContainer, children: closure_4(View, obj4) };
  obj4 = { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(channel(10996).BellIcon, { size: "md", color: "interactive-text-default" }) };
  const BottomSheet = channel(5566).BottomSheet;
  items = [closure_4(View, obj3), , , , ];
  const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(channel(1113).t.uAmAiL) };
  const Text = channel(5929).Text;
  intl = channel(1113).intl;
  items[1] = closure_4(Text, obj5);
  const obj6 = { variant: "body-md/normal", color: "text-default", style: tmp.infoText, children: intl2.string(channel(1113).t.mscFJU) };
  const Text2 = channel(5929).Text;
  intl2 = channel(1113).intl;
  items[2] = closure_4(Text2, obj6);
  const obj7 = {
    variant: "destructive",
    text: intl3.string(channel(1113).t.uAmAiL),
    onPress() {
      let intl;
      const obj = NotificationSettingsModalActionCreatorsDefault;
      const obj2 = { guildId: null, channelId: channel.id, settings: { muted: true }, label: NotificationSettingsUtils.NotificationLabels.Muted };
      const result = obj.updateChannelOverrideSettings(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
      const obj4 = { text: intl.string(intl5.t.EgGpkx), icon: BellSlashIcon.BellSlashIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl5.intl;
      open("NOTIFICATIONS_MUTED", obj4);
    }
  };
  const Button = channel(5936).Button;
  intl3 = channel(1113).intl;
  items[3] = closure_4(Button, obj7);
  const obj8 = { style: tmp.dismissButtonContainer, children: closure_4(Button2, obj9) };
  obj9 = {
    variant: "secondary",
    text: intl4.string(channel(1113).t.WAI6xu),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  Button2 = channel(5936).Button;
  intl4 = channel(1113).intl;
  items[4] = closure_4(View, obj8);
  return closure_4(BottomSheet, obj);
};
