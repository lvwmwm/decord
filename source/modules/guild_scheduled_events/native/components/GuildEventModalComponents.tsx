// Module ID: 8415
// Function ID: 66945
// Name: GuildEventTopic
// Dependencies: [31, 27, 1354, 653, 33, 4130, 7574, 1212, 8390, 4126, 8416, 1820, 4098, 8426, 1934, 8427, 8428, 8429, 4658, 8430, 8431, 7682, 4654, 7654, 7653, 7645, 3712, 8433, 4541, 2]
// Exports: GuildEventDatetime, GuildEventDescription, GuildEventEntityTypeSelection, GuildEventLocation, GuildEventRecurrence, GuildEventTopic

// Module 8415 (GuildEventTopic)
import result from "result";
import { View } from "closeActionSheet";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ GuildScheduledEventEntityTypes: closure_6, GUILD_EVENT_MAX_DESCRIPTION_LENGTH: closure_7, MAX_EVENT_LOCATION_LENGTH: closure_8, GUILD_EVENT_MAX_NAME_LENGTH: closure_9 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ formGroup: { paddingVertical: 8 }, formGroupSmall: { paddingVertical: 4 }, formGroupLarge: { paddingTop: 16, paddingBottom: 4 }, dateInput: { flexGrow: 1, flexShrink: 1, flexBasis: "60%" }, timeInput: { flexGrow: 1, flexShrink: 1, flexBasis: "30%" }, formHeader: { marginBottom: 8 }, header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 } });
let result = require("GUILD_EVENT_MAX_NAME_LENGTH").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx");

export const GuildEventTopic = function GuildEventTopic(arg0) {
  let onChange;
  let topic;
  ({ topic, onChange } = arg0);
  let obj = { style: callback3().formGroupSmall };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["0HbEQ6"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t["0HbEQ6"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl3.string(require(1212) /* getSystemLocale */.t["6/yars"]);
  obj.onChange = onChange;
  obj.value = topic;
  obj.maxLength = closure_9;
  obj.autoFocus = true;
  obj.isClearable = true;
  obj.children = callback(require(7574) /* TextInput */.TextInput, obj);
  return callback(View, obj);
};
export const GuildEventLocation = function GuildEventLocation(arg0) {
  let _location;
  let onChange;
  let onFocus;
  ({ location: _location, onChange, onFocus } = arg0);
  let obj = { style: callback3().formGroupLarge };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.yx785A);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl2.string(require(1212) /* getSystemLocale */.t.mkCMia);
  obj.value = _location;
  obj.maxLength = closure_8;
  obj.onChange = onChange;
  obj.onFocus = onFocus;
  obj.isClearable = true;
  obj.children = callback(require(7574) /* TextInput */.TextInput, obj);
  return callback(View, obj);
};
export const GuildEventRecurrence = function GuildEventRecurrence(startDate) {
  startDate = startDate.startDate;
  const recurrenceRule = startDate.recurrenceRule;
  const onRecurrenceChange = startDate.onRecurrenceChange;
  const tmp = callback3();
  const items = [recurrenceRule, startDate];
  const dependencyMap = recurrenceOptions.useMemo(() => startDate(paths[8]).recurrenceRuleToOption(startDate, recurrenceRule), items);
  let obj = startDate(8390);
  recurrenceOptions = obj.getRecurrenceOptions(startDate);
  const found = recurrenceOptions.find((value) => value.value === closure_3);
  let label;
  if (null != found) {
    label = found.label;
  }
  obj = { style: tmp.formGroup };
  obj = { style: tmp.header };
  const obj1 = { variant: "text-sm/semibold", color: "text-subtle" };
  let intl = startDate(1212).intl;
  obj1.children = intl.string(startDate(1212).t["59TVxL"]);
  obj.children = callback(startDate(4126).Text, obj1);
  const items1 = [callback(View, obj), ];
  let obj2 = {
    onPress() {
      let obj = onRecurrenceChange(paths[11]);
      const result = obj.dismissGlobalKeyboard();
      obj = {};
      const obj2 = recurrenceRule(paths[12]);
      const intl = startDate(paths[7]).intl;
      obj.title = intl.string(startDate(paths[7]).t["59TVxL"]);
      obj.items = recurrenceOptions;
      obj.onItemSelect = function onItemSelect(arg0) {
        outer1_2(arg0);
        recurrenceRule(table[12]).hideActionSheet();
      };
      obj.selectedItem = paths;
      obj.hasIcons = false;
      obj2.openLazy(startDate(paths[14])(paths[13], paths.paths), "SelectRecurrenceOption", obj);
    }
  };
  const intl2 = startDate(1212).intl;
  obj2.text = intl2.string(startDate(1212).t["59TVxL"]);
  obj2.value = label;
  obj2.icon = recurrenceRule(8427);
  obj2.iconPosition = "end";
  const intl3 = startDate(1212).intl;
  obj2.accessibilityLabel = intl3.string(startDate(1212).t["59TVxL"]);
  obj2.accessibilityHint = label;
  items1[1] = callback(startDate(8416).InputButton, obj2);
  obj.children = items1;
  return callback2(View, obj);
};
export const GuildEventEntityTypeSelection = function GuildEventEntityTypeSelection(arg0) {
  let disabled;
  let entityType;
  let guild;
  let onChange;
  ({ guild, disabled } = arg0);
  ({ entityType, onChange } = arg0);
  let obj = require(8428) /* useChannelsUserCanStartStageIn */;
  obj = {};
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(guild);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t.BVZqJl);
  obj.value = constants.VOICE;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t["EV//4f"]);
  obj.icon = importDefault(8429);
  obj.IconComponent = require(4658) /* VoiceNormalIcon */.VoiceNormalIcon;
  obj.disabled = disabled;
  const items = [obj, ];
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.name = intl3.string(require(1212) /* getSystemLocale */.t.w7ipbz);
  obj.value = constants.EXTERNAL;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl4.string(require(1212) /* getSystemLocale */.t.DYxrHm);
  obj.icon = importDefault(8430);
  obj.IconComponent = require(8431) /* LocationIcon */.LocationIcon;
  obj.disabled = disabled;
  items[1] = obj;
  const features = guild.features;
  if (features.has(GuildFeatures.COMMUNITY)) {
    const obj1 = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj1.name = intl5.string(require(1212) /* getSystemLocale */.t.EErMzA);
    obj1.value = constants.STAGE_INSTANCE;
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj1.description = intl6.string(require(1212) /* getSystemLocale */.t.LgALpp);
    obj1.icon = importDefault(7682);
    obj1.IconComponent = require(4654) /* StageIcon */.StageIcon;
    obj1.disabled = 0 === channelsUserCanStartStageIn.length || disabled;
    items.unshift(obj1);
  }
  const obj2 = {
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
      const obj = { label: name, subLabel: description, value, icon: outer1_11(IconComponent, {}), disabled };
      return outer1_11(outer1_0(outer1_3[24]).TableRadioRow, obj, name);
    })
  };
  return callback(require(7654) /* context */.TableRadioGroup, obj2);
};
export const GuildEventDescription = function GuildEventDescription(onFocus) {
  let description;
  let onChange;
  onFocus = onFocus.onFocus;
  ({ description, onChange } = onFocus);
  const ref = React.useRef(null);
  let obj = { style: callback3().formGroupSmall, ref };
  obj = {};
  const intl = onFocus(1212).intl;
  obj.label = intl.string(onFocus(1212).t["+gRCC7"]);
  obj.maxLength = closure_7;
  const intl2 = onFocus(1212).intl;
  obj.placeholder = intl2.string(onFocus(1212).t["kWO/E8"]);
  obj.onChange = onChange;
  obj.onFocus = function onFocus() {
    if (null != onFocus) {
      onFocus(ref);
    }
  };
  obj.value = description;
  obj.children = callback(onFocus(7645).TextArea, obj);
  return callback(View, obj);
};
export const GuildEventDatetime = function GuildEventDatetime(dateLabel) {
  let dependencyMap;
  let maximumDate;
  dateLabel = dateLabel.dateLabel;
  const timeLabel = dateLabel.timeLabel;
  let date = dateLabel.date;
  if (date === undefined) {
    date = timeLabel(3712)();
  }
  ({ minimumDate: dependencyMap, maximumDate } = dateLabel);
  if (maximumDate === undefined) {
    let obj = timeLabel(3712)();
    maximumDate = obj.add(30, "days").endOf("month");
    const addResult = obj.add(30, "days");
  }
  const disabled = dateLabel.disabled;
  let fn = dateLabel.onChange;
  if (fn === undefined) {
    fn = function p() {

    };
  }
  function handleOpenDatePicker(date) {
    let closure_0 = date;
    return () => {
      if (!outer1_5) {
        let obj = date(outer2_3[11]);
        const result = obj.dismissGlobalKeyboard();
        obj = {
          onSubmit(set) {
              if ("date" !== outer1_0) {
                outer2_6(set);
              } else {
                const obj = { hour: outer2_2.get("hour"), minute: outer2_2.get("minute"), second: 0, millisecond: 0 };
                outer2_6(set.set(obj));
              }
            },
          title: "date" === closure_0 ? closure_0 : outer1_1
        };
        const obj2 = timeLabel(outer2_3[12]);
        const tmp5 = "date" === closure_0 ? closure_0 : outer1_1;
        obj.startDate = outer1_2.toDate();
        if (null != outer1_3) {
          let toDateResult = outer1_3.toDate();
        } else {
          toDateResult = outer1_2.toDate();
        }
        obj.minimumDate = toDateResult;
        obj.maximumDate = outer1_4.toDate();
        obj.requireDateChanged = true;
        obj.mode = closure_0;
        obj2.openLazy(dateLabel(outer2_3[14])(outer2_3[27], outer2_3.paths), "DatePicker", obj);
        const tmp9 = dateLabel(outer2_3[14])(outer2_3[27], outer2_3.paths);
      }
    };
  }
  let tmp5 = callback3();
  obj = { style: tmp5.formGroup };
  obj = { direction: "horizontal", spacing: 16 };
  const obj1 = { style: tmp5.dateInput };
  let obj2 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: dateLabel };
  const items = [callback(dateLabel(4126).Text, obj2), ];
  const obj3 = { text: dateLabel, value: date.format("MMM Do YYYY"), onPress: handleOpenDatePicker("date"), disabled };
  items[1] = callback(dateLabel(8416).InputButton, obj3);
  obj1.children = items;
  const items1 = [callback2(disabled, obj1), ];
  const obj4 = { style: tmp5.timeInput };
  const obj5 = { style: tmp5.formHeader, variant: "text-sm/semibold", color: "text-subtle", children: timeLabel };
  const items2 = [callback(dateLabel(4126).Text, obj5), ];
  const obj6 = { text: timeLabel, value: date.format("LT"), onPress: handleOpenDatePicker("time"), disabled };
  items2[1] = callback(dateLabel(8416).InputButton, obj6);
  obj4.children = items2;
  items1[1] = callback2(disabled, obj4);
  obj.children = items1;
  obj.children = callback2(dateLabel(4541).Stack, obj);
  return callback(disabled, obj);
};
