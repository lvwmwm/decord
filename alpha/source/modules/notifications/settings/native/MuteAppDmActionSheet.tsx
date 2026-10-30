// Module ID: 14126
// Function ID: 14127
// Name: MuteAppDmActionSheet
// Dependencies: [19, 17, 21, 5009, 575, 5267, 9189, 5619, 1114, 5629, 7282, 7277, 5253, 5707, 10973, 2]
// Exports: default

// Module 14126 (MuteAppDmActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7277 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7282 */;
import BellSlashIcon from "BellSlashIcon" /* 10973 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

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
  obj4 = { style: tmp.iconBackground, "aria-hidden": true, children: closure_4(channel(9189).BellIcon, { size: "md", color: "interactive-text-default" }) };
  BottomSheet = channel(5267).BottomSheet;
  items = [closure_4(View, obj3), , , , ];
  const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(channel(1114).t.uAmAiL) };
  const Text = channel(5619).Text;
  intl = channel(1114).intl;
  items[1] = closure_4(Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.infoText, children: intl2.string(channel(1114).t.mscFJU) };
  const Text2 = channel(5619).Text;
  intl2 = channel(1114).intl;
  items[2] = closure_4(Text2, obj6);
  const obj7 = {
    variant: "destructive",
    text: intl3.string(channel(1114).t.uAmAiL),
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
  const Button = channel(5629).Button;
  intl3 = channel(1114).intl;
  items[3] = closure_4(Button, obj7);
  const obj8 = { style: tmp.dismissButtonContainer, children: closure_4(Button2, obj9) };
  obj9 = {
    variant: "secondary",
    text: intl4.string(channel(1114).t.WAI6xu),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  Button2 = channel(5629).Button;
  intl4 = channel(1114).intl;
  items[4] = closure_4(View, obj8);
  return closure_4(BottomSheet, obj);
};
