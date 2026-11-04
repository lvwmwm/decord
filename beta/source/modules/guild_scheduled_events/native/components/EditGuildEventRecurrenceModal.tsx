// Module ID: 8986
// Function ID: 8987
// Name: EditGuildEventRecurrenceModal
// Dependencies: [5, 32, 19, 17, 21, 5014, 575, 1625, 8976, 8969, 8979, 1888, 8987, 5634, 1113, 8988, 8968, 8989, 8990, 5624, 7169, 2]
// Exports: default

// Module 8986 (EditGuildEventRecurrenceModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1888 */;
import Text_Text from "Text/Text" /* 5624 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 8968 */;
import useEventExceptionDefault from "useEventException" /* 8976 */;
import LazyAPIPromiseDefault from "LazyAPIPromise" /* 8979 */;
import saveGuildEventRecurrenceDefault from "saveGuildEventRecurrence" /* 8987 */;
import EditGuildEventModalNavbarDefault from "EditGuildEventModalNavbar" /* 8988 */;
import EditGuildEventStepContainerDefault from "EditGuildEventStepContainer" /* 8989 */;
import GuildEventScheduleDefault from "GuildEventSchedule" /* 8990 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c1, c2, dependencyMap;

let c9;
let metroImportAll;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cardStyle: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles(obj);
let closure_11 = { TIME: "TIME" };
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx");

export default function EditGuildEventRecurrenceModal(guildEvent) {
  let _undefined;
  let c5;
  let c6;
  let closure_3;
  let closure_8;
  let first;
  let intl;
  let items1;
  let left;
  let obj6;
  let onClose;
  let recurrenceId;
  let right;
  let schedule;
  guildEvent = guildEvent.guildEvent;
  ({ onCloseModal: importDefault, recurrenceId } = guildEvent);
  _slicedToArray = undefined;
  react = undefined;
  first = undefined;
  closure_8 = undefined;
  let error;
  let obj = function _handleSave() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const v0 = 0;
              const obj2 = v0(closure_1_3[9]);
              if (obj2.areSchedulesIdentical(schedule, scheduleForRecurrenceWithException)) {
                onClose();
              } else {
                c1 = 1;
                c2 = 1;
                const obj5 = { value: closure_2_9(), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else if (null != value) {
            closure_128_1();
          }
          c2 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp12) {
          c2 = 3;
          throw tmp12;
        }
      }
    });
    return obj(...arguments);
  };
  function handleScheduleChange(arg0) {
    let endDate;
    let startDate;
    ({ startDate, endDate } = arg0);
    let addResult = endDate;
    const tmp = null != startDate && null != endDate && endDate.isBefore(startDate);
    if (tmp) {
      const cloneResult = startDate.clone();
      addResult = cloneResult.add(1, "hour");
    }
    _undefined({ startDate, endDate: addResult });
    closure_8(null);
  }
  let tmp = error();
  const tmp2 = useSafeAreaInsetsDefault();
  ({ left, right } = tmp2);
  let tmp3 = useEventExceptionDefault(recurrenceId, guildEvent.id);
  dependencyMap = tmp3;
  obj = guildEvent(8969);
  const baseScheduleForRecurrence = obj.getBaseScheduleForRecurrence(recurrenceId, guildEvent);
  let obj2 = guildEvent(8969);
  const scheduleForRecurrenceWithException = obj2.getScheduleForRecurrenceWithException(baseScheduleForRecurrence, tmp3);
  [c5, c6] = _slicedToArray(react.useState(scheduleForRecurrenceWithException), 2);
  const tmp6 = _slicedToArray(react.useState(scheduleForRecurrenceWithException), 2);
  [first, closure_8] = react.useState(null);
  const tmp9 = _slicedToArray(LazyAPIPromiseDefault(() => {
    obj = KeyboardManagerUtilsAll;
    const result = obj.dismissGlobalKeyboard();
    return saveGuildEventRecurrenceDefault(guildEvent, recurrenceId, c5, closure_3);
  }), 2);
  let closure_9 = tmp9[0];
  error = tmp9[1].error;
  let items = [error];
  const effect = react.useEffect(() => {
    let anyErrorMessage;
    obj = error;
    const tmp = closure_8;
    if (error != null) {
      anyErrorMessage = obj.getAnyErrorMessage();
    }
    if (anyErrorMessage == null) {
      anyErrorMessage = null;
    }
    tmp(anyErrorMessage);
  }, items);
  let obj3 = {
    size: "md",
    text: intl.string(guildEvent(1113).t["R3BPH+"]),
    onPress: function handleSave() {
      return obj(...arguments);
    },
    disabled: null != first
  };
  const Button = guildEvent(5634).Button;
  intl = guildEvent(1113).intl;
  const action = closure_8(Button, obj3);
  let obj4 = {
    title: "",
    customNavbar() {
      obj = { screen: EditGuildEventUtils.EditGuildEventScreens.DETAILS, onClose: importDefault };
      const tmp = EditGuildEventModalNavbarDefault;
      return metroImportAll(tmp, obj);
    },
    headerLeft() {
      return null;
    },
    render() {
      let items;
      obj = { action, children: items };
      items = [, ];
      const obj2 = { guildEvent, recurrenceId, schedule, onChange: handleScheduleChange };
      const tmp3 = EditGuildEventStepContainerDefault;
      items[0] = metroImportAll(GuildEventScheduleDefault, obj2);
      let tmp4Result = null;
      const tmp = React4;
      const tmp4 = metroImportAll;
      if (null != first) {
        const obj3 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp5 };
        tmp4Result = tmp4(Text_Text.Text, obj3);
      }
      items[1] = tmp4Result;
      return tmp(tmp3, obj);
    },
    fullscreen: true
  };
  let obj5 = { style: items1, children: closure_8(guildEvent(7169).Navigator, obj6) };
  items1 = [tmp.container, { paddingLeft: left, paddingRight: right }];
  obj6 = { screens: { [closure_11.TIME]: obj4 }, initialRouteName: obj.TIME, cardShadowEnabled: false, cardOverlayEnabled: false, cardStyle: tmp.cardStyle };
  return closure_8(first, obj5);
};
