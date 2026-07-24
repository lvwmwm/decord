// Module ID: 8525
// Function ID: 67869
// Name: GuildEventRsvpPickerActionSheet
// Dependencies: [57, 31, 27, 1354, 33, 4130, 689, 8394, 1212, 5187, 5186, 5121, 7654, 7653, 4543, 8409, 4098, 2]
// Exports: default

// Module 8525 (GuildEventRsvpPickerActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { GuildScheduledEventUserResponses as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonWrapper = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx");

export default function GuildEventRsvpPickerActionSheet(event) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  event = event.event;
  ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: _slicedToArray } = event);
  let INTERESTED;
  let tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(first.useState(event(8394).ResponseOptions.SERIES), 2);
  first = tmp2[0];
  let obj = event(8394);
  const existingRsvp = obj.getExistingRsvp(event.id, null);
  let response;
  if (null != existingRsvp) {
    response = existingRsvp.response;
  }
  if (response === constants.INTERESTED) {
    INTERESTED = constants.UNINTERESTED;
  } else {
    INTERESTED = constants.INTERESTED;
  }
  if (INTERESTED === constants.INTERESTED) {
    const intl2 = event(1212).intl;
    let stringResult = intl2.string(event(1212).t.WtORed);
  } else {
    const intl = event(1212).intl;
    stringResult = intl.string(event(1212).t["8MPCVr"]);
  }
  obj = {};
  obj = { title: stringResult };
  obj.header = callback2(event(5186).BottomSheetTitleHeader, obj);
  const obj1 = { bottom: true, style: tmp.container };
  const obj2 = { defaultValue: first, onChange: tmp2[1], hasIcons: false };
  const responseOptions = event(8394).getResponseOptions();
  obj2.children = responseOptions.map((value) => outer1_7(event(outer1_2[13]).TableRadioRow, { value: value.value, label: value.name }, value.value));
  const items = [callback2(event(7654).TableRadioGroup, obj2), ];
  const obj3 = { style: tmp.buttonWrapper };
  const obj4 = {
    onPress() {
      let tmp = null;
      if (first !== event(outer1_2[7]).ResponseOptions.SERIES) {
        tmp = closure_1;
      }
      event(outer1_2[15]).updateRsvp(event.id, tmp, closure_2, INTERESTED);
      if (null != callback) {
        callback();
      }
      const obj = event(outer1_2[15]);
      outer1_1(outer1_2[16]).hideActionSheet();
    }
  };
  const intl3 = event(1212).intl;
  obj4.text = intl3.string(event(1212).t.TyCVIq);
  obj3.children = callback2(event(4543).Button, obj4);
  items[1] = callback2(INTERESTED, obj3);
  obj1.children = items;
  obj.children = callback3(event(5121).SafeAreaPaddingView, obj1);
  return callback2(event(5187).BottomSheet, obj);
};
