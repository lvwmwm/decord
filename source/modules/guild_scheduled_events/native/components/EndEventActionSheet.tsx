// Module ID: 12235
// Function ID: 95657
// Name: EndEventActionSheet
// Dependencies: [31, 27, 1354, 653, 33, 4130, 689, 8499, 4098, 8875, 7634, 1273, 1212, 4126, 4543, 8388, 2]
// Exports: default

// Module 12235 (EndEventActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { EXPLICIT_END_EVENT_SHEET_KEY as closure_4 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" } };
_createForOfIteratorHelperLoose = { fontSize: 24, fontFamily: require("ME").Fonts.PRIMARY_BOLD, textAlign: "center", color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subtitle = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.cancelButtonContainer = { marginTop: 24, alignSelf: "stretch" };
_createForOfIteratorHelperLoose.confirmButtonContainer = { marginTop: 8, alignSelf: "stretch" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("GUILD_EVENT_MAX_NAME_LENGTH").fileFinishedImporting("modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx");

export default function EndEventActionSheet(channel) {
  channel = channel.channel;
  function handleClose() {
    activeEvent(handleClose[8]).hideActionSheet(outer1_4);
    const obj = activeEvent(handleClose[8]);
    channel(handleClose[9]).handleDisconnect(channel);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(handleClose[7]);
  const activeEvent = obj.useActiveEvent(channel.id);
  if (null == activeEvent) {
    return null;
  } else {
    obj = {};
    obj = { style: tmp.container };
    const obj1 = { style: tmp.title, accessibilityRole: "header" };
    const intl = channel(handleClose[12]).intl;
    obj1.children = intl.string(channel(handleClose[12]).t["4Ao8LC"]);
    const items = [callback(channel(handleClose[11]).LegacyText, obj1), , , ];
    const obj2 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default" };
    const intl2 = channel(handleClose[12]).intl;
    obj2.children = intl2.string(channel(handleClose[12]).t["0I0B8f"]);
    items[1] = callback(channel(handleClose[13]).Text, obj2);
    const obj3 = { style: tmp.cancelButtonContainer };
    const obj4 = {};
    const intl3 = channel(handleClose[12]).intl;
    obj4.text = intl3.string(channel(handleClose[12]).t.P60OAX);
    obj4.grow = true;
    obj4.onPress = handleClose;
    obj3.children = callback(channel(handleClose[14]).Button, obj4);
    items[2] = callback(View, obj3);
    const obj5 = { style: tmp.confirmButtonContainer };
    const obj6 = { text: null, variant: "destructive", grow: true };
    const intl4 = channel(handleClose[12]).intl;
    obj6.text = intl4.string(channel(handleClose[12]).t.mjB9pd);
    obj6.onPress = function onPress() {
      if (null != activeEvent) {
        activeEvent(handleClose[15]).endEvent(activeEvent.id, activeEvent.guild_id);
        handleClose();
        const obj = activeEvent(handleClose[15]);
      }
    };
    obj5.children = callback(channel(handleClose[14]).Button, obj6);
    items[3] = callback(View, obj5);
    obj.children = items;
    obj.children = callback2(View, obj);
    return callback(activeEvent(handleClose[10]), obj);
  }
};
