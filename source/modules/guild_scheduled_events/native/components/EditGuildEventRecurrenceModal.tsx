// Module ID: 8366
// Function ID: 66693
// Name: EditGuildEventRecurrenceModal
// Dependencies: [5, 57, 31, 33, 4130, 689, 8351, 8346, 8359, 1820, 8367, 4543, 1212, 8368, 8345, 8369, 8370, 4126, 5519, 2]
// Exports: default

// Module 8366 (EditGuildEventRecurrenceModal)
import closure_4 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.cardStyle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { TIME: "TIME" };
let result = require("result").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx");

export default function EditGuildEventRecurrenceModal(guildEvent) {
  let importDefault;
  let recurrenceId;
  guildEvent = guildEvent.guildEvent;
  ({ onCloseModal: importDefault, recurrenceId } = guildEvent);
  let scheduleForRecurrenceWithException;
  let callback;
  let React;
  let closure_8;
  let _createForOfIteratorHelperLoose;
  function _handleSave() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = scheduleForRecurrenceWithException(tmp);
    return obj(...arguments);
  }
  function handleScheduleChange(arg0) {
    let endDate;
    let startDate;
    ({ startDate, endDate } = arg0);
    if (tmp) {
      endDate = startDate.clone().add(1, "hour");
      const cloneResult = startDate.clone();
    }
    const obj = { startDate, endDate };
    callback(obj);
    callback2(null);
  }
  let tmp2 = importDefault(8351)(recurrenceId, guildEvent.id);
  const dependencyMap = tmp2;
  let obj = guildEvent(8346);
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  let obj1 = guildEvent(8346);
  scheduleForRecurrenceWithException = obj1.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp2);
  const tmp5 = callback(React.useState(scheduleForRecurrenceWithException), 2);
  callback = tmp5[0];
  React = tmp5[1];
  const tmp6 = callback(React.useState(null), 2);
  const first = tmp6[0];
  closure_8 = tmp6[1];
  const tmp8 = callback(importDefault(8359)(() => {
    const result = recurrenceId(tmp2[9]).dismissGlobalKeyboard();
    return outer1_1(tmp2[10])(guildEvent, recurrenceId, _slicedToArray, tmp2);
  }), 2);
  _createForOfIteratorHelperLoose = tmp8[0];
  const error = tmp8[1].error;
  let items = [error];
  const effect = React.useEffect(() => {
    let anyErrorMessage;
    if (null != error) {
      anyErrorMessage = error.getAnyErrorMessage();
    }
    let tmp4 = null;
    if (null != anyErrorMessage) {
      tmp4 = anyErrorMessage;
    }
    closure_8(tmp4);
  }, items);
  obj = { size: "md" };
  const intl = guildEvent(1212).intl;
  obj.text = intl.string(guildEvent(1212).t["R3BPH+"]);
  obj.onPress = function handleSave() {
    return _handleSave(...arguments);
  };
  obj.disabled = null != first;
  let closure_11 = first(guildEvent(4543).Button, obj);
  obj = {
    title: "",
    customNavbar() {
      const obj = { screen: guildEvent(tmp2[14]).EditGuildEventScreens.DETAILS, onClose: closure_1 };
      return first(outer1_1(tmp2[13]), obj);
    },
    headerLeft() {
      return null;
    },
    render() {
      let obj = { action: closure_11 };
      tmp2 = outer1_1(tmp2[15]);
      obj = { guildEvent, recurrenceId, schedule: _slicedToArray, onChange: handleScheduleChange };
      const items = [first(outer1_1(tmp2[16]), obj), ];
      let tmp3 = null;
      if (null != first) {
        obj = { variant: "text-md/normal", color: "text-feedback-critical", children: first };
        tmp3 = first(guildEvent(tmp2[17]).Text, obj);
      }
      items[1] = tmp3;
      obj.children = items;
      return closure_8(tmp2, obj);
    },
    fullscreen: true
  };
  obj1 = { screens: { [closure_10.TIME]: obj }, initialRouteName: error.TIME, cardShadowEnabled: false, cardOverlayEnabled: false, cardStyle: _createForOfIteratorHelperLoose().cardStyle };
  return first(guildEvent(5519).Navigator, obj1);
};
