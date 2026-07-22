// Module ID: 8360
// Function ID: 66656
// Name: EditGuildEventRecurrenceModal
// Dependencies: []
// Exports: default

// Module 8360 (EditGuildEventRecurrenceModal)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.cardStyle = obj;
let closure_9 = obj.createStyles(obj);
let closure_10 = { TIME: "TIME" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx");

export default function EditGuildEventRecurrenceModal(guildEvent) {
  let recurrenceId;
  guildEvent = guildEvent.guildEvent;
  const arg1 = guildEvent;
  ({ onCloseModal: closure_1, recurrenceId } = guildEvent);
  const importAll = recurrenceId;
  let closure_4;
  let callback;
  let React;
  let closure_8;
  let callback2;
  function _handleSave() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = scheduleForRecurrenceWithException(tmp);
    const _handleSave = obj;
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
    callback2(obj);
    callback3(null);
  }
  const tmp2 = importDefault(dependencyMap[6])(recurrenceId, guildEvent.id);
  const dependencyMap = tmp2;
  let obj = arg1(dependencyMap[7]);
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  let obj1 = arg1(dependencyMap[7]);
  const scheduleForRecurrenceWithException = obj1.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp2);
  closure_4 = scheduleForRecurrenceWithException;
  const tmp5 = callback(React.useState(scheduleForRecurrenceWithException), 2);
  callback = tmp5[0];
  React = tmp5[1];
  const tmp6 = callback(React.useState(null), 2);
  const first = tmp6[0];
  closure_8 = tmp6[1];
  const tmp8 = callback(importDefault(dependencyMap[8])(() => {
    const result = recurrenceId(tmp2[9]).dismissGlobalKeyboard();
    return callback(tmp2[10])(guildEvent, recurrenceId, closure_5, tmp2);
  }), 2);
  callback2 = tmp8[0];
  const error = tmp8[1].error;
  const constants = error;
  const items = [error];
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
  const intl = arg1(dependencyMap[12]).intl;
  obj.text = intl.string(arg1(dependencyMap[12]).t.R3BPH+);
  obj.onPress = function handleSave() {
    return _handleSave(...arguments);
  };
  obj.disabled = null != first;
  let closure_11 = first(arg1(dependencyMap[11]).Button, obj);
  obj = {
    title: "",
    customNavbar() {
      const obj = { screen: guildEvent(tmp2[14]).EditGuildEventScreens.DETAILS, onClose: callback };
      return first(callback(tmp2[13]), obj);
    },
    headerLeft() {
      return null;
    },
    render() {
      let obj = { action: closure_11 };
      const tmp2 = callback(tmp2[15]);
      obj = { guildEvent, recurrenceId, schedule: closure_5, onChange: handleScheduleChange };
      const items = [first(callback(tmp2[16]), obj), ];
      let tmp3 = null;
      if (null != first) {
        obj = { children: first };
        tmp3 = first(guildEvent(tmp2[17]).Text, obj);
      }
      items[1] = tmp3;
      obj.children = items;
      return closure_8(tmp2, obj);
    },
    fullscreen: true
  };
  obj1 = { screens: { [closure_10.TIME]: obj }, initialRouteName: constants.TIME, cardShadowEnabled: false, cardOverlayEnabled: false, cardStyle: callback2().cardStyle };
  return first(arg1(dependencyMap[18]).Navigator, obj1);
};
