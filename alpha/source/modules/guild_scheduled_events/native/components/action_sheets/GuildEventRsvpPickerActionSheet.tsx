// Module ID: 9098
// Function ID: 9099
// Name: GuildEventRsvpPickerActionSheet
// Dependencies: [32, 19, 17, 4864, 21, 5009, 575, 8966, 1114, 5267, 7315, 7286, 7052, 7055, 5629, 8976, 5253, 2]
// Exports: default

// Module 9098 (GuildEventRsvpPickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4864 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import GuildEventRsvpUtils from "GuildEventRsvpUtils" /* 8966 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp;
const guild_scheduled_events_GuildScheduledEventModalActionCreators = tmp(8976);
const View = react_native.View;
const constants = GuildScheduledEventsConstants.GuildScheduledEventUserResponses;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonWrapper: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx");

export default function GuildEventRsvpPickerActionSheet(event) {
  let Button;
  let SafeAreaPaddingView;
  let defaultValue;
  let intl3;
  let items;
  let obj3;
  let obj6;
  let responseOptions;
  let stringResult;
  let tmp6;
  event = event.event;
  ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: _slicedToArray } = event);
  defaultValue = undefined;
  let closure_5;
  let tmp = closure_9();
  let tmp3 = dependencyMap;
  [defaultValue, tmp6] = defaultValue.useState(event(8966).ResponseOptions.SERIES);
  let obj = event(8966);
  const existingRsvp = obj.getExistingRsvp(event.id, null);
  let response;
  if (existingRsvp != null) {
    response = existingRsvp.response;
  }
  const tmp10 = response === constants.INTERESTED ? constants.UNINTERESTED : constants.INTERESTED;
  closure_5 = tmp10;
  if (tmp10 === constants.INTERESTED) {
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t.WtORed);
  } else {
    const intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t["8MPCVr"]);
  }
  let obj2 = { header: closure_7(tmp2(7315).BottomSheetTitleHeader, { title: stringResult }), children: closure_8(SafeAreaPaddingView, obj3) };
  BottomSheet = tmp2(5267).BottomSheet;
  obj3 = { bottom: true, style: tmp.container, children: items };
  SafeAreaPaddingView = tmp2(7286).SafeAreaPaddingView;
  const obj4 = {
    defaultValue,
    onChange: tmp6,
    hasIcons: false,
    children: responseOptions.map((value) => {
      const obj = { value: value.value, label: value.name };
      return closure_1_7(event(dependencyMap[13]).TableRadioRow, obj, value.value);
    })
  };
  const TableRadioGroup = tmp2(7052).TableRadioGroup;
  const tmp2Result = event(8966);
  responseOptions = tmp2Result.getResponseOptions();
  items = [closure_7(TableRadioGroup, obj4), ];
  const obj5 = { style: tmp.buttonWrapper, children: closure_7(Button, obj6) };
  obj6 = {
    onPress: function handleConfirm() {
      let tmp3 = null;
      if (first !== GuildEventRsvpUtils.ResponseOptions.SERIES) {
        tmp3 = importDefault;
      }
      const tmpResult = guild_scheduled_events_GuildScheduledEventModalActionCreators;
      tmpResult.updateRsvp(event.id, tmp3, dependencyMap, closure_5);
      if (_slicedToArray != null) {
        _slicedToArray();
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    },
    text: intl3.string(event(1114).t.TyCVIq)
  };
  Button = tmp2(5629).Button;
  intl3 = tmp2(1114).intl;
  items[1] = closure_7(closure_5, obj5);
  return closure_7(BottomSheet, obj2);
};
