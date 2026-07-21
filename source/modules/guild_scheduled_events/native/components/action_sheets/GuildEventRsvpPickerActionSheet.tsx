// Module ID: 8473
// Function ID: 67590
// Name: GuildEventRsvpPickerActionSheet
// Dependencies: []
// Exports: default

// Module 8473 (GuildEventRsvpPickerActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = arg1(dependencyMap[3]).GuildScheduledEventUserResponses;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.buttonWrapper = { marginTop: importDefault(dependencyMap[6]).space.PX_24 };
let closure_9 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[6]).space.PX_24 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx");

export default function GuildEventRsvpPickerActionSheet(event) {
  event = event.event;
  const arg1 = event;
  ({ recurrenceId: closure_1, guildId: closure_2, onRsvp: closure_3 } = event);
  let View;
  const tmp = callback4();
  const tmp2 = callback(React.useState(arg1(dependencyMap[7]).ResponseOptions.SERIES), 2);
  const first = tmp2[0];
  const React = first;
  let obj = arg1(dependencyMap[7]);
  const existingRsvp = obj.getExistingRsvp(event.id, null);
  let response;
  if (null != existingRsvp) {
    response = existingRsvp.response;
  }
  if (response === constants.INTERESTED) {
    let INTERESTED = constants.UNINTERESTED;
  } else {
    INTERESTED = constants.INTERESTED;
  }
  View = INTERESTED;
  if (INTERESTED === constants.INTERESTED) {
    const intl2 = arg1(dependencyMap[8]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[8]).t.WtORed);
  } else {
    const intl = arg1(dependencyMap[8]).intl;
    stringResult = intl.string(arg1(dependencyMap[8]).t.8MPCVr);
  }
  obj = {};
  obj = { title: stringResult };
  obj.header = callback2(arg1(dependencyMap[10]).BottomSheetTitleHeader, obj);
  const obj1 = { bottom: true, style: tmp.container };
  const obj2 = { defaultValue: first, onChange: tmp2[1], hasIcons: false };
  const responseOptions = arg1(dependencyMap[7]).getResponseOptions();
  obj2.children = responseOptions.map((value) => callback3(event(closure_2[13]).TableRadioRow, { value: value.value, label: value.name }, value.value));
  const items = [callback2(arg1(dependencyMap[12]).TableRadioGroup, obj2), ];
  const obj3 = { style: tmp.buttonWrapper };
  const obj4 = {
    onPress() {
      let tmp = null;
      if (first !== event(closure_2[7]).ResponseOptions.SERIES) {
        tmp = callback;
      }
      event(closure_2[15]).updateRsvp(event.id, tmp, closure_2, INTERESTED);
      if (null != callback2) {
        callback2();
      }
      const obj = event(closure_2[15]);
      callback(closure_2[16]).hideActionSheet();
    }
  };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[8]).t.TyCVIq);
  obj3.children = callback2(arg1(dependencyMap[14]).Button, obj4);
  items[1] = callback2(View, obj3);
  obj1.children = items;
  obj.children = callback3(arg1(dependencyMap[11]).SafeAreaPaddingView, obj1);
  return callback2(arg1(dependencyMap[9]).BottomSheet, obj);
};
