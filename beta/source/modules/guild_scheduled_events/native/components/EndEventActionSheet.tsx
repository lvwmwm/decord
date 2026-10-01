// Module ID: 9096
// Function ID: 9097
// Name: EndEventActionSheet
// Dependencies: [19, 17, 2051, 1074, 21, 4836, 576, 8943, 4800, 9097, 8051, 1177, 1115, 4832, 5281, 8981, 2]
// Exports: default

// Module 9096 (EndEventActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 8981 */;
import CallsUtils from "CallsUtils" /* 9097 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_4 = GuildScheduledEventsConstants.EXPLICIT_END_EVENT_SHEET_KEY;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: obj2, subtitle: { marginTop: 8, textAlign: "center" }, cancelButtonContainer: { marginTop: 24, alignSelf: "stretch" }, confirmButtonContainer: { marginTop: 8, alignSelf: "stretch" } };
obj2 = { fontSize: 24, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx");

export default function EndEventActionSheet(channel) {
  let Button;
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let obj7;
  let obj9;
  channel = channel.channel;
  const tmp = closure_7();
  let obj = channel(8943);
  const activeEvent = obj.useActiveEvent(channel.id);
  if (null == activeEvent) {
    return null;
  } else {
    function handleClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_4);
      const obj2 = CallsUtils;
      obj2.handleDisconnect(channel);
    }
    let obj2 = { children: closure_6(View, obj3) };
    obj3 = { style: tmp.container, children: items };
    const tmp7 = activeEvent(8051);
    const obj4 = { style: tmp.title, accessibilityRole: "header", children: intl.string(channel(1115).t["4Ao8LC"]) };
    const LegacyText = tmp2(1177).LegacyText;
    intl = tmp2(1115).intl;
    items = [closure_5(LegacyText, obj4), , , ];
    const obj5 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: intl2.string(channel(1115).t["0I0B8f"]) };
    const Text = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    items[1] = closure_5(Text, obj5);
    const obj6 = { style: tmp.cancelButtonContainer, children: closure_5(Button, obj7) };
    obj7 = { text: intl3.string(channel(1115).t.P60OAX), grow: true, onPress: handleClose };
    Button = tmp2(5281).Button;
    intl3 = tmp2(1115).intl;
    items[2] = closure_5(View, obj6);
    const obj8 = { style: tmp.confirmButtonContainer, children: closure_5(Button2, obj9) };
    obj9 = {
      text: intl4.string(channel(1115).t.mjB9pd),
      variant: "destructive",
      grow: true,
      onPress() {
          if (null != activeEvent) {
            const obj = GuildScheduledEventsActionCreatorsDefault;
            obj.endEvent(activeEvent.id, activeEvent.guild_id);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet(closure_4);
            const obj3 = CallsUtils;
            obj3.handleDisconnect(channel);
          }
        }
    };
    Button2 = tmp2(5281).Button;
    intl4 = tmp2(1115).intl;
    items[3] = closure_5(View, obj8);
    return closure_5(tmp7, obj2);
  }
};
