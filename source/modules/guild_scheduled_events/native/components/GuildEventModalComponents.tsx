// Module ID: 8364
// Function ID: 66657
// Name: GuildEventTopic
// Dependencies: []
// Exports: GuildEventDatetime, GuildEventDescription, GuildEventEntityTypeSelection, GuildEventLocation, GuildEventRecurrence, GuildEventTopic

// Module 8364 (GuildEventTopic)
let closure_4 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ GuildScheduledEventEntityTypes: closure_6, GUILD_EVENT_MAX_DESCRIPTION_LENGTH: closure_7, MAX_EVENT_LOCATION_LENGTH: closure_8, GUILD_EVENT_MAX_NAME_LENGTH: closure_9 } = arg1(dependencyMap[2]));
const GuildFeatures = arg1(dependencyMap[3]).GuildFeatures;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_13 = arg1(dependencyMap[5]).createStyles({ formGroup: { paddingVertical: 8 }, formGroupSmall: { paddingVertical: 4 }, formGroupLarge: { bm: "selectedStreamId", cursor: "change" }, dateInput: { username: 225600, discriminator: 894500864, avatar: 2130325855 }, timeInput: { username: "RTC_CONNECTION_LOSS_RATE", discriminator: "handleJoinThreadVoice", avatar: "toString" }, formHeader: { marginBottom: 8 }, header: { "Null": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}", "Bool(true)": true } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventModalComponents.tsx");

export const GuildEventTopic = function GuildEventTopic(arg0) {
  let onChange;
  let topic;
  ({ topic, onChange } = arg0);
  let obj = { style: callback3().formGroupSmall };
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.label = intl.string(arg1(dependencyMap[7]).t.0HbEQ6);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl2.string(arg1(dependencyMap[7]).t.0HbEQ6);
  const intl3 = arg1(dependencyMap[7]).intl;
  obj.placeholder = intl3.string(arg1(dependencyMap[7]).t.6/yars);
  obj.onChange = onChange;
  obj.value = topic;
  obj.maxLength = closure_9;
  obj.autoFocus = true;
  obj.isClearable = true;
  obj.children = callback(arg1(dependencyMap[6]).TextInput, obj);
  return callback(View, obj);
};
export const GuildEventLocation = function GuildEventLocation(arg0) {
  let _location;
  let onChange;
  let onFocus;
  ({ location: _location, onChange, onFocus } = arg0);
  let obj = { style: callback3().formGroupLarge };
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.label = intl.string(arg1(dependencyMap[7]).t.yx785A);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.placeholder = intl2.string(arg1(dependencyMap[7]).t.mkCMia);
  obj.value = _location;
  obj.maxLength = closure_8;
  obj.onChange = onChange;
  obj.onFocus = onFocus;
  obj.isClearable = true;
  obj.children = callback(arg1(dependencyMap[6]).TextInput, obj);
  return callback(View, obj);
};
export const GuildEventRecurrence = function GuildEventRecurrence(startDate) {
  startDate = startDate.startDate;
  const arg1 = startDate;
  const recurrenceRule = startDate.recurrenceRule;
  const importDefault = recurrenceRule;
  const importAll = startDate.onRecurrenceChange;
  const tmp = callback3();
  const items = [recurrenceRule, startDate];
  let closure_3 = React.useMemo(() => startDate(closure_3[8]).recurrenceRuleToOption(startDate, recurrenceRule), items);
  let obj = arg1(closure_3[8]);
  const recurrenceOptions = obj.getRecurrenceOptions(startDate);
  const React = recurrenceOptions;
  const found = recurrenceOptions.find((value) => value.value === closure_3);
  let label;
  if (null != found) {
    label = found.label;
  }
  obj = { style: tmp.formGroup };
  obj = { style: tmp.header };
  const obj1 = {};
  const intl = arg1(closure_3[7]).intl;
  obj1.children = intl.string(arg1(closure_3[7]).t.59TVxL);
  obj.children = callback(arg1(closure_3[9]).Text, obj1);
  const items1 = [callback(View, obj), ];
  const obj2 = {
    onPress() {
      let obj = onRecurrenceChange(paths[11]);
      const result = obj.dismissGlobalKeyboard();
      obj = {};
      const obj2 = recurrenceRule(paths[12]);
      const intl = startDate(paths[7]).intl;
      obj.title = intl.string(startDate(paths[7]).t.59TVxL);
      obj.items = recurrenceOptions;
      obj.onItemSelect = function onItemSelect(arg0) {
        callback2(arg0);
        callback(closure_3[12]).hideActionSheet();
      };
      obj.selectedItem = paths;
      obj.hasIcons = false;
      obj2.openLazy(startDate(paths[14])(paths[13], paths.paths), "SelectRecurrenceOption", obj);
    }
  };
  const intl2 = arg1(closure_3[7]).intl;
  obj2.text = intl2.string(arg1(closure_3[7]).t.59TVxL);
  obj2.value = label;
  obj2.icon = importDefault(closure_3[15]);
  obj2.iconPosition = "end";
  const intl3 = arg1(closure_3[7]).intl;
  obj2.accessibilityLabel = intl3.string(arg1(closure_3[7]).t.59TVxL);
  obj2.accessibilityHint = label;
  items1[1] = callback(arg1(closure_3[10]).InputButton, obj2);
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
  let obj = arg1(dependencyMap[16]);
  obj = {};
  const channelsUserCanStartStageIn = obj.useChannelsUserCanStartStageIn(guild);
  const intl = arg1(dependencyMap[7]).intl;
  obj.name = intl.string(arg1(dependencyMap[7]).t.BVZqJl);
  obj.value = constants.VOICE;
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.description = intl2.string(arg1(dependencyMap[7]).t.EV//4f);
  obj.icon = importDefault(dependencyMap[17]);
  obj.IconComponent = arg1(dependencyMap[18]).VoiceNormalIcon;
  obj.disabled = disabled;
  const items = [obj, ];
  obj = {};
  const intl3 = arg1(dependencyMap[7]).intl;
  obj.name = intl3.string(arg1(dependencyMap[7]).t.w7ipbz);
  obj.value = constants.EXTERNAL;
  const intl4 = arg1(dependencyMap[7]).intl;
  obj.description = intl4.string(arg1(dependencyMap[7]).t.DYxrHm);
  obj.icon = importDefault(dependencyMap[19]);
  obj.IconComponent = arg1(dependencyMap[20]).LocationIcon;
  obj.disabled = disabled;
  items[1] = obj;
  const features = guild.features;
  if (features.has(GuildFeatures.COMMUNITY)) {
    const obj1 = {};
    const intl5 = arg1(dependencyMap[7]).intl;
    obj1.name = intl5.string(arg1(dependencyMap[7]).t.EErMzA);
    obj1.value = constants.STAGE_INSTANCE;
    const intl6 = arg1(dependencyMap[7]).intl;
    obj1.description = intl6.string(arg1(dependencyMap[7]).t.LgALpp);
    obj1.icon = importDefault(dependencyMap[21]);
    obj1.IconComponent = arg1(dependencyMap[22]).StageIcon;
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
      const obj = { label: name, subLabel: description, value, icon: callback2(IconComponent, {}), disabled };
      return callback2(callback(closure_3[24]).TableRadioRow, obj, name);
    })
  };
  return callback(arg1(dependencyMap[23]).TableRadioGroup, obj2);
};
export const GuildEventDescription = function GuildEventDescription(onFocus) {
  let description;
  let onChange;
  const arg1 = onFocus.onFocus;
  ({ description, onChange } = onFocus);
  const ref = React.useRef(null);
  const importDefault = ref;
  let obj = { style: callback3().formGroupSmall, ref };
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.label = intl.string(arg1(dependencyMap[7]).t.+gRCC7);
  obj.maxLength = closure_7;
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.placeholder = intl2.string(arg1(dependencyMap[7]).t.kWO/E8);
  obj.onChange = onChange;
  obj.onFocus = function onFocus() {
    if (null != onFocus) {
      onFocus(ref);
    }
  };
  obj.value = description;
  obj.children = callback(arg1(dependencyMap[25]).TextArea, obj);
  return callback(View, obj);
};
export const GuildEventDatetime = function GuildEventDatetime(dateLabel) {
  let maximumDate;
  dateLabel = dateLabel.dateLabel;
  const arg1 = dateLabel;
  const timeLabel = dateLabel.timeLabel;
  const importDefault = timeLabel;
  let date = dateLabel.date;
  if (date === undefined) {
    date = importDefault(dependencyMap[26])();
  }
  const importAll = date;
  ({ minimumDate: closure_3, maximumDate } = dateLabel);
  if (maximumDate === undefined) {
    let obj = importDefault(dependencyMap[26])();
    maximumDate = obj.add(30, "days").endOf("month");
    const addResult = obj.add(30, "days");
  }
  let closure_4 = maximumDate;
  const disabled = dateLabel.disabled;
  const View = disabled;
  let fn = dateLabel.onChange;
  if (fn === undefined) {
    fn = function p() {

    };
  }
  function handleOpenDatePicker(date) {
    const dateLabel = date;
    return () => {
      if (!closure_5) {
        let obj = lib(closure_3[11]);
        const result = obj.dismissGlobalKeyboard();
        obj = {
          onSubmit(set) {
              if ("date" !== closure_0) {
                callback(set);
              } else {
                const obj = { hour: store.get("hour"), minute: store.get("minute"), second: 0, millisecond: 0 };
                callback(set.set(obj));
              }
            },
          title: "date" === arg0 ? arg0 : callback
        };
        const obj2 = callback(closure_3[12]);
        const tmp5 = "date" === arg0 ? arg0 : callback;
        obj.startDate = lib.toDate();
        if (null != closure_3) {
          let toDateResult = closure_3.toDate();
        } else {
          toDateResult = lib.toDate();
        }
        obj.minimumDate = toDateResult;
        obj.maximumDate = closure_4.toDate();
        obj.requireDateChanged = true;
        obj.mode = arg0;
        obj2.openLazy(arg0(closure_3[14])(closure_3[27], closure_3.paths), "DatePicker", obj);
        const tmp9 = arg0(closure_3[14])(closure_3[27], closure_3.paths);
      }
    };
  }
  const tmp5 = callback3();
  obj = { style: tmp5.formGroup };
  obj = { pink: "Array", plum: "isArray" };
  const obj1 = { style: tmp5.dateInput };
  const items = [callback(arg1(dependencyMap[9]).Text, { style: tmp5.formHeader, children: dateLabel }), ];
  const obj3 = { text: dateLabel, value: date.format("MMM Do YYYY"), onPress: handleOpenDatePicker("date"), disabled };
  items[1] = callback(arg1(dependencyMap[10]).InputButton, obj3);
  obj1.children = items;
  const items1 = [callback2(View, obj1), ];
  const obj4 = { style: tmp5.timeInput };
  const items2 = [callback(arg1(dependencyMap[9]).Text, { style: tmp5.formHeader, children: timeLabel }), ];
  const obj6 = { text: timeLabel, value: date.format("LT"), onPress: handleOpenDatePicker("time"), disabled };
  items2[1] = callback(arg1(dependencyMap[10]).InputButton, obj6);
  obj4.children = items2;
  items1[1] = callback2(View, obj4);
  obj.children = items1;
  obj.children = callback2(arg1(dependencyMap[28]).Stack, obj);
  return callback(View, obj);
};
