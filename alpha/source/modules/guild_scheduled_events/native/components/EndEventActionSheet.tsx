// Module ID: 14614
// Function ID: 14615
// Name: EndEventActionSheet
// Dependencies: [19, 17, 4678, 1072, 21, 4823, 575, 7928, 5037, 9564, 14615, 1187, 1113, 5414, 5421, 7484, 2]
// Exports: default

// Module 14614 (EndEventActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4678 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import GuildScheduledEventsActionCreatorsDefault from "GuildScheduledEventsActionCreators" /* 7484 */;
import CallsUtils from "CallsUtils" /* 9564 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
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
  let obj = channel(7928);
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
    const tmp7 = activeEvent(14615);
    const obj4 = { style: tmp.title, accessibilityRole: "header", children: intl.string(channel(1113).t["4Ao8LC"]) };
    const LegacyText = tmp2(1187).LegacyText;
    intl = tmp2(1113).intl;
    items = [closure_5(LegacyText, obj4), , , ];
    const obj5 = { style: tmp.subtitle, variant: "body-md/medium", color: "text-default", children: intl2.string(channel(1113).t["0I0B8f"]) };
    const Text = tmp2(5414).Text;
    intl2 = tmp2(1113).intl;
    items[1] = closure_5(Text, obj5);
    const obj6 = { style: tmp.cancelButtonContainer, children: closure_5(Button, obj7) };
    obj7 = { text: intl3.string(channel(1113).t.P60OAX), grow: true, onPress: handleClose };
    Button = tmp2(5421).Button;
    intl3 = tmp2(1113).intl;
    items[2] = closure_5(View, obj6);
    const obj8 = { style: tmp.confirmButtonContainer, children: closure_5(Button2, obj9) };
    obj9 = {
      text: intl4.string(channel(1113).t.mjB9pd),
      variant: "destructive",
      grow: true,
      onPress: function handleConfirmClick() {
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
    Button2 = tmp2(5421).Button;
    intl4 = tmp2(1113).intl;
    items[3] = closure_5(View, obj8);
    return closure_5(tmp7, obj2);
  }
};
