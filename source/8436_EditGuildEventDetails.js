// Module ID: 8436
// Function ID: 67318
// Name: EditGuildEventDetails
// Dependencies: []
// Exports: default

// Module 8436 (EditGuildEventDetails)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[2]).isGuildScheduledEventActive;
let closure_7 = arg1(dependencyMap[3]).GuildScheduledEventEntityTypes;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[5]).createStyles({ error: { paddingVertical: 8 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx");

export default function EditGuildEventDetails(guildEvent) {
  let description;
  let entityType;
  let name;
  let scheduledStartTime;
  let tmp12;
  guildEvent = guildEvent.guildEvent;
  const arg1 = guildEvent;
  const importDefault = guildEvent.onChange;
  let callback4;
  function handleChangeEvent(arg0) {
    _undefined(null);
    onChange(arg0);
  }
  ({ description, scheduledStartTime } = guildEvent);
  const importAll = scheduledStartTime;
  const scheduledEndTime = guildEvent.scheduledEndTime;
  const dependencyMap = scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  const callback = recurrenceRule;
  const items = [scheduledStartTime];
  ({ name, entityType } = guildEvent);
  const memo = React.useMemo(() => onChange(scheduledEndTime[7])(scheduledStartTime), items);
  const React = memo;
  const items1 = [scheduledEndTime, scheduledStartTime];
  const memo1 = React.useMemo(() => {
    if (null != scheduledEndTime) {
      let addResult = onChange(scheduledEndTime[7])(scheduledEndTime);
    } else {
      addResult = onChange(scheduledEndTime[7])(scheduledStartTime).add(1, "hour");
      const obj = onChange(scheduledEndTime[7])(scheduledStartTime);
    }
    return addResult;
  }, items1);
  const callback2 = memo1;
  const tmp4 = callback(React.useState(() => guildEvent(scheduledEndTime[8]).recurrenceRuleToOption(onChange(scheduledEndTime[7])(scheduledStartTime), recurrenceRule)), 2);
  const constants = tmp4[0];
  const callback3 = tmp4[1];
  const memo2 = React.useMemo(() => onChange(scheduledEndTime[7])(), []);
  const items2 = [memo];
  const memo3 = React.useMemo(() => onChange(scheduledEndTime[7])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"), []);
  const memo4 = React.useMemo(() => onChange(scheduledEndTime[7])(memo).add(15, "minutes"), items2);
  const memo5 = React.useMemo(() => onChange(scheduledEndTime[7])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"), []);
  const ref = React.useRef(null);
  const tmp10 = callback2(guildEvent.initialGuildEvent);
  const tmp = callback4();
  [tmp12, closure_11] = callback(React.useState(null), 2);
  let obj = arg1(dependencyMap[9]);
  let closure_12 = obj.useNavigation();
  obj = {};
  let tmp15 = null;
  if (null != tmp12) {
    obj = { Promise: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122058714081, marginTop: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002483525603328315, flags: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000196896285517449, style: tmp.error, children: tmp12 };
    tmp15 = callback3(arg1(dependencyMap[10]).Text, obj);
  }
  const items3 = [tmp15, ];
  const obj1 = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj1.text = intl.string(arg1(dependencyMap[6]).t.PDTjLN);
  obj1.variant = "primary";
  obj1.onPress = function onPress() {
    const result = scheduledStartTime(scheduledEndTime[12]).dismissGlobalKeyboard();
    _undefined(null);
    if (0 === guildEvent.name.length) {
      const _Error = Error;
      const intl = guildEvent(scheduledEndTime[6]).intl;
      const error = new Error(intl.string(guildEvent(scheduledEndTime[6]).t.GoV0uR));
      throw error;
    } else {
      navigation.navigate(guildEvent(scheduledEndTime[13]).EditGuildEventScreens.PREVIEW);
    }
  };
  obj1.disabled = null != tmp12;
  items3[1] = callback3(arg1(dependencyMap[11]).Button, obj1);
  obj.children = items3;
  const tmp11 = callback(React.useState(null), 2);
  const tmp13 = tmp10;
  const tmp14 = ref;
  const obj2 = { action: tmp10(ref, obj), ref };
  const tmp13Result = tmp10(ref, obj);
  const tmp20 = tmp10;
  const obj3 = {};
  const tmp21 = importDefault(dependencyMap[15]);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj3.title = intl2.string(arg1(dependencyMap[6]).t.GG6vbr);
  const intl3 = arg1(dependencyMap[6]).intl;
  obj3.subtitle = intl3.string(arg1(dependencyMap[6]).t.q5lgwV);
  const items4 = [
    callback3(importDefault(dependencyMap[16]), obj3),
    callback3(arg1(dependencyMap[17]).GuildEventTopic, {
      topic: name,
      onChange(name) {
        handleChangeEvent({ name });
      }
    }),
  ,
  ,
  ,

  ];
  const obj5 = {
    date: memo,
    onChange(toISOString) {
      if (tmp10) {
        const intl = guildEvent(scheduledEndTime[6]).intl;
        return _undefined(intl.string(guildEvent(scheduledEndTime[6]).t.nKIaRG));
      } else {
        const obj = { scheduledStartTime: toISOString.toISOString() };
        let isBeforeResult = null != scheduledEndTime;
        if (isBeforeResult) {
          isBeforeResult = memo1.isBefore(toISOString);
        }
        if (isBeforeResult) {
          const obj2 = onChange(scheduledEndTime[7])(toISOString);
          obj.scheduledEndTime = onChange(scheduledEndTime[7])(toISOString).add(1, "hour").toISOString();
          const addResult = onChange(scheduledEndTime[7])(toISOString).add(1, "hour");
        }
        let tmp7 = null != toISOString;
        if (tmp7) {
          tmp7 = null != closure_7;
        }
        if (tmp7) {
          obj.recurrenceRule = guildEvent(scheduledEndTime[8]).recurrenceOptionToRecurrenceRule(closure_7, toISOString);
          const obj4 = guildEvent(scheduledEndTime[8]);
          const tmp10 = scheduledEndTime;
        }
        handleChangeEvent(obj);
      }
    },
    disabled: tmp10,
    minimumDate: memo2,
    maximumDate: memo3
  };
  const intl4 = arg1(dependencyMap[6]).intl;
  obj5.dateLabel = intl4.string(arg1(dependencyMap[6]).t.kKOIwJ);
  const intl5 = arg1(dependencyMap[6]).intl;
  obj5.timeLabel = intl5.string(arg1(dependencyMap[6]).t.6dGmCD);
  items4[2] = callback3(arg1(dependencyMap[17]).GuildEventDatetime, obj5);
  let tmp23 = entityType === constants.EXTERNAL;
  if (tmp23) {
    const obj6 = {
      date: memo1,
      onChange(toISOString) {
          handleChangeEvent({ scheduledEndTime: toISOString.toISOString() });
        },
      minimumDate: memo4,
      maximumDate: memo5
    };
    const intl6 = arg1(dependencyMap[6]).intl;
    obj6.dateLabel = intl6.string(arg1(dependencyMap[6]).t.CTLgZJ);
    const intl7 = arg1(dependencyMap[6]).intl;
    obj6.timeLabel = intl7.string(arg1(dependencyMap[6]).t.j2RuXF);
    tmp23 = callback3(arg1(dependencyMap[17]).GuildEventDatetime, obj6);
  }
  items4[3] = tmp23;
  items4[4] = callback3(arg1(dependencyMap[17]).GuildEventRecurrence, {
    startDate: memo,
    recurrenceRule,
    onRecurrenceChange(closure_7) {
      if (null != memo) {
        let obj = guildEvent(scheduledEndTime[8]);
        obj = {};
        obj.recurrenceRule = obj.recurrenceOptionToRecurrenceRule(closure_7, memo);
        onChange(obj);
        callback(closure_7);
      }
    }
  });
  const obj8 = {};
  let str = "";
  if (null != description) {
    str = description;
  }
  obj8.description = str;
  obj8.onChange = function onChange(description) {
    handleChangeEvent({ description });
  };
  obj8.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      if (null != ref.current) {
        const current = ref.current;
        current.scrollToEnd();
      }
    }, 100);
  };
  items4[5] = callback3(arg1(dependencyMap[17]).GuildEventDescription, obj8);
  obj2.children = items4;
  return tmp20(tmp21, obj2);
};
