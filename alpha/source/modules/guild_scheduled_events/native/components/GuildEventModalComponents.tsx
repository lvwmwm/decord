// Module ID: 8991
// Function ID: 8992
// Name: GuildEventModalComponents
// Dependencies: [19, 17, 4869, 1072, 21, 5014, 7082, 1113, 8969, 5624, 8992, 1888, 5258, 9002, 1994, 9003, 9004, 9005, 8673, 9006, 9007, 8196, 8669, 7058, 7061, 7253, 2042, 9009, 6027, 2]
// Exports: GuildEventDatetime, GuildEventDescription, GuildEventEntityTypeSelection, GuildEventLocation, GuildEventRecurrence, GuildEventTopic

// Module 8991 (GuildEventModalComponents)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl7 from "intl" /* 1113 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1888 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import TableRadioRow2 from "TableRadioRow" /* 7061 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7082 */;
import TextArea2 from "TextArea" /* 7253 */;
import StageIcon from "StageIcon" /* 8669 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8673 */;
import ScheduleUtils from "ScheduleUtils" /* 8969 */;
import useGuildsUserCanStartStageIn from "useGuildsUserCanStartStageIn" /* 9004 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9005 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9006 */;
import LocationIcon from "LocationIcon" /* 9007 */;
import react from "react" /* 19 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4869 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap, name;

let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp4;
let unpackModuleId;
const AssetRegistryDefault = tmp4(8196);
const View = react_native.View;
({ GuildScheduledEventEntityTypes: metroRequire, GUILD_EVENT_MAX_DESCRIPTION_LENGTH: metroImportDefault, MAX_EVENT_LOCATION_LENGTH: metroImportAll, GUILD_EVENT_MAX_NAME_LENGTH: c9 } = GuildScheduledEventsConstants);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ formGroup: { paddingVertical: 8 }, formGroupSmall: { paddingVertical: 4 }, formGroupLarge: { paddingTop: 16, paddingBottom: 4 }, dateInput: { flexGrow: 1, flexShrink: 1, flexBasis: "60%" }, timeInput: { flexGrow: 1, flexShrink: 1, flexBasis: "30%" }, formHeader: { marginBottom: 8 }, header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 } });
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx");

export function GuildEventTopic(arg0) {
  let TextInput;
  let intl;
  let intl2;
  let obj2;
  let onChange;
  let topic;
  ({ topic, onChange } = arg0);
  const obj = { style: closure_13().formGroupSmall, children: unpackModuleId(TextInput, obj2) };
  obj2 = { label: intl.string(intl7.t["0HbEQ6"]), placeholder: intl2.string(intl7.t["6/yars"]), onChange, value: topic, maxLength, autoFocus: true, clearable: true };
  TextInput = TextInput_TextInput.TextInput;
  intl = intl7.intl;
  intl2 = intl7.intl;
  return unpackModuleId(View, obj);
}
export function GuildEventLocation(arg0) {
  let TextInput;
  let _location;
  let intl;
  let intl2;
  let obj2;
  let onChange;
  let onFocus;
  ({ location: _location, onChange, onFocus } = arg0);
  const obj = { style: closure_13().formGroupLarge, children: unpackModuleId(TextInput, obj2) };
  obj2 = { label: intl.string(intl7.t.yx785A), placeholder: intl2.string(intl7.t.mkCMia), value: _location, maxLength: metroImportAll, onChange, onFocus, clearable: true };
  TextInput = TextInput_TextInput.TextInput;
  intl = intl7.intl;
  intl2 = intl7.intl;
  return unpackModuleId(View, obj);
}
export function GuildEventRecurrence(startDate) {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj4;
  let selectedItem;
  startDate = startDate.startDate;
  const recurrenceRule = startDate.recurrenceRule;
  const onRecurrenceChange = startDate.onRecurrenceChange;
  let recurrenceOptions;
  const tmp = closure_13();
  const items = [recurrenceRule, startDate];
  dependencyMap = recurrenceOptions.useMemo(() => {
    const obj = ScheduleUtils;
    return obj.recurrenceRuleToOption(startDate, recurrenceRule);
  }, items);
  const tmp2 = startDate;
  let tmp3 = dependencyMap;
  let obj = startDate(8969);
  recurrenceOptions = obj.getRecurrenceOptions(startDate);
  const found = recurrenceOptions.find((value) => value.value === selectedItem);
  let label;
  if (found != null) {
    label = found.label;
  }
  let obj2 = { style: tmp.formGroup, children: items1 };
  const obj3 = { style: tmp.header, children: closure_11(Text, obj4) };
  obj4 = { variant: "text-sm/semibold", color: "text-subtle", children: intl.string(tmp2(1113).t["59TVxL"]) };
  Text = tmp2(5624).Text;
  intl = tmp2(1113).intl;
  items1 = [closure_11(View, obj3), ];
  const obj5 = {
    onPress: function handleSelectOption() {
      let intl;
      let obj = KeyboardManagerUtilsAll;
      const result = obj.dismissGlobalKeyboard();
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj2 = {
        title: intl.string(intl7.t["59TVxL"]),
        items: recurrenceOptions,
        onItemSelect(arg0) {
          onRecurrenceChange(arg0);
          const obj = recurrenceRule(selectedItem[12]);
          obj.hideActionSheet();
        },
        selectedItem,
        hasIcons: false
      };
      ActionSheetActionCreatorsDefault;
      const tmp3 = asyncRequire(9002, dependencyMap.paths);
      intl = intl7.intl;
      openLazy(tmp3, "SelectRecurrenceOption", obj2);
    },
    text: intl2.string(tmp2(1113).t["59TVxL"]),
    value: label,
    icon: recurrenceRule(9003),
    iconPosition: "end",
    accessibilityLabel: intl3.string(tmp2(1113).t["59TVxL"]),
    accessibilityHint: label
  };
  const InputButton = tmp2(8992).InputButton;
  intl2 = tmp2(1113).intl;
  intl3 = tmp2(1113).intl;
  items1[1] = closure_11(InputButton, obj5);
  return closure_12(View, obj2);
}
export function GuildEventEntityTypeSelection(arg0) {
  let disabled;
  let entityType;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let onChange;
  ({ guild, disabled } = arg0);
  ({ entityType, onChange } = arg0);
  let obj = useGuildsUserCanStartStageIn;
  const obj2 = { name: intl.string(intl7.t.BVZqJl), value: metroRequire.VOICE, description: intl2.string(intl7.t["EV//4f"]), icon: AssetRegistryDefault2, IconComponent: VoiceNormalIcon.VoiceNormalIcon, disabled };
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(guild);
  intl = intl7.intl;
  intl2 = intl7.intl;
  const items = [obj2, ];
  const obj3 = { name: intl3.string(intl7.t.w7ipbz), value: metroRequire.EXTERNAL, description: intl4.string(intl7.t.DYxrHm), icon: AssetRegistryDefault3, IconComponent: LocationIcon.LocationIcon, disabled };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = obj3;
  const features = guild.features;
  const tmp3 = metroRequire;
  if (features.has(GuildFeatures.COMMUNITY)) {
    const unshift = items.unshift;
    const obj4 = { name: intl5.string(intl7.t.EErMzA), value: tmp3.STAGE_INSTANCE, description: intl6.string(intl7.t.LgALpp), icon: AssetRegistryDefault, IconComponent: StageIcon.StageIcon, disabled: 0 === channelsUserCanStartStageIn.length || disabled };
    intl5 = tmp(1113).intl;
    intl6 = tmp(1113).intl;
    unshift(obj4);
  }
  const obj5 = {
    defaultValue: entityType,
    onChange,
    hasIcons: true,
    children: items.map((name) => {
      let IconComponent;
      let description;
      let disabled;
      let value;
      name = name.name;
      ({ value, description, IconComponent, disabled } = name);
      const obj = { label: name, subLabel: description, value, icon: closure_1_11(IconComponent, {}), disabled };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      return closure_1_11(TableRadioRow, obj, name);
    })
  };
  const TableRadioGroup = tmp(7058).TableRadioGroup;
  return unpackModuleId(TableRadioGroup, obj5);
}
export function GuildEventDescription(onFocus) {
  let TextArea;
  let description;
  let intl;
  let intl2;
  let obj2;
  let onChange;
  onFocus = onFocus.onFocus;
  ({ description, onChange } = onFocus);
  const tmp = closure_13();
  const ref = react.useRef(null);
  const obj = { style: tmp.formGroupSmall, ref, children: unpackModuleId(TextArea, obj2) };
  obj2 = {
    label: intl.string(intl7.t["+gRCC7"]),
    maxLength: metroImportDefault,
    placeholder: intl2.string(intl7.t["kWO/E8"]),
    onChange,
    onFocus: function handleFocus() {
      if (onFocus != null) {
        tmp(ref);
      }
    },
    value: description
  };
  TextArea = TextArea2.TextArea;
  intl = intl7.intl;
  intl2 = intl7.intl;
  return unpackModuleId(View, obj);
}
export function GuildEventDatetime(dateLabel) {
  let Stack;
  let items;
  let items1;
  let items2;
  let maximumDate;
  let obj3;
  const onPress = () => {
    let toDateResult;
    const tmp = disabled;
    if (!tmp) {
      let obj = KeyboardManagerUtilsAll;
      const result = obj.dismissGlobalKeyboard();
      const tmp6 = "date" === time ? dateLabel : timeLabel;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj2 = {
        onSubmit(set) {
            if ("date" !== time) {
              fn(set);
            } else {
              const obj = { hour: date.get("hour"), minute: date.get("minute"), second: 0, millisecond: 0 };
              set = set.set;
              fn(set(obj));
            }
          },
        title: tmp6,
        startDate: date.toDate(),
        minimumDate: toDateResult,
        maximumDate: maximumDate.toDate(),
        requireDateChanged: true,
        mode: time
      };
      ActionSheetActionCreatorsDefault;
      const obj3 = date;
      const obj4 = dependencyMap;
      const tmp10 = asyncRequire(9009, dependencyMap.paths);
      if (null != dependencyMap) {
        toDateResult = obj4.toDate();
      } else {
        toDateResult = obj3.toDate();
      }
      openLazy(tmp10, "DatePicker", obj2);
    }
  };
  dateLabel = dateLabel.dateLabel;
  const timeLabel = dateLabel.timeLabel;
  let date = dateLabel.date;
  if (date === undefined) {
    let tmp = timeLabel;
    date = timeLabel(2042)();
  }
  ({ minimumDate: dependencyMap, maximumDate } = dateLabel);
  if (maximumDate === undefined) {
    let obj = timeLabel(2042)();
    const str = "days";
    const str2 = "month";
    const addResult = obj.add(30, "days");
    maximumDate = addResult.endOf("month");
  }
  const disabled = dateLabel.disabled;
  let fn = dateLabel.onChange;
  if (fn === undefined) {
    fn = function p() {

    };
  }
  const tmp5 = closure_13();
  let obj2 = { style: tmp5.formGroup, children: closure_12(Stack, obj3) };
  obj3 = { direction: "horizontal", spacing: 16, children: items1 };
  let obj4 = { style: tmp5.dateInput, children: items };
  Stack = dateLabel(6027).Stack;
  items = [, ];
  const obj5 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel };
  items[0] = closure_11(dateLabel(5624).Text, obj5);
  const obj6 = { text: dateLabel, value: date.format("MMM Do YYYY"), onPress, disabled };
  const InputButton = dateLabel(8992).InputButton;
  date = "date";
  items[1] = closure_11(InputButton, obj6);
  items1 = [closure_12(disabled, obj4), ];
  const obj7 = { style: tmp5.timeInput, children: items2 };
  items2 = [, ];
  const obj8 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel };
  items2[0] = closure_11(dateLabel(5624).Text, obj8);
  const obj9 = { text: timeLabel, value: date.format("LT"), onPress, disabled };
  const InputButton2 = dateLabel(8992).InputButton;
  const time = "time";
  items2[1] = closure_11(InputButton2, obj9);
  items1[1] = closure_12(disabled, obj7);
  return closure_11(disabled, obj2);
}
