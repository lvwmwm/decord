// Module ID: 8491
// Function ID: 67618
// Name: EditGuildEventDetails
// Dependencies: [57, 31, 6758, 1354, 33, 4130, 1212, 3712, 8390, 1456, 4126, 4543, 1820, 8389, 3843, 8413, 8480, 8415, 2]
// Exports: default

// Module 8491 (EditGuildEventDetails)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { isGuildScheduledEventActive as closure_6 } from "_isNativeReflectConstruct";
import { GuildScheduledEventEntityTypes as closure_7 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ error: { paddingVertical: 8 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx");

export default function EditGuildEventDetails(guildEvent) {
  let c11;
  let description;
  let entityType;
  let name;
  let scheduledStartTime;
  let tmp12;
  guildEvent = guildEvent.guildEvent;
  const onChange = guildEvent.onChange;
  let callback2;
  function handleChangeEvent(arg0) {
    _undefined(null);
    onChange(arg0);
  }
  ({ description, scheduledStartTime } = guildEvent);
  const scheduledEndTime = guildEvent.scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  const items = [scheduledStartTime];
  ({ name, entityType } = guildEvent);
  memo = memo.useMemo(() => onChange(scheduledEndTime[7])(scheduledStartTime), items);
  const items1 = [scheduledEndTime, scheduledStartTime];
  const memo1 = memo.useMemo(() => {
    if (null != scheduledEndTime) {
      let addResult = onChange(scheduledEndTime[7])(scheduledEndTime);
    } else {
      addResult = onChange(scheduledEndTime[7])(scheduledStartTime).add(1, "hour");
      const obj = onChange(scheduledEndTime[7])(scheduledStartTime);
    }
    return addResult;
  }, items1);
  const tmp4 = recurrenceRule(memo.useState(() => guildEvent(scheduledEndTime[8]).recurrenceRuleToOption(onChange(scheduledEndTime[7])(scheduledStartTime), recurrenceRule)), 2);
  const constants = tmp4[0];
  const callback = tmp4[1];
  const memo2 = memo.useMemo(() => onChange(scheduledEndTime[7])(), []);
  const items2 = [memo];
  const memo3 = memo.useMemo(() => onChange(scheduledEndTime[7])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"), []);
  const memo4 = memo.useMemo(() => onChange(scheduledEndTime[7])(memo).add(15, "minutes"), items2);
  const memo5 = memo.useMemo(() => onChange(scheduledEndTime[7])().add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"), []);
  const ref = memo.useRef(null);
  const tmp10 = memo1(guildEvent.initialGuildEvent);
  let closure_10 = tmp10;
  const tmp = callback2();
  [tmp12, c11] = recurrenceRule(memo.useState(null), 2);
  let obj = guildEvent(scheduledEndTime[9]);
  let closure_12 = obj.useNavigation();
  obj = {};
  let tmp15 = null;
  if (null != tmp12) {
    obj = { style: tmp.error, variant: "text-sm/normal", color: "text-feedback-critical", children: tmp12 };
    tmp15 = callback(guildEvent(scheduledEndTime[10]).Text, obj);
  }
  const items3 = [tmp15, ];
  const obj1 = {};
  let intl = guildEvent(scheduledEndTime[6]).intl;
  obj1.text = intl.string(guildEvent(scheduledEndTime[6]).t.PDTjLN);
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
  items3[1] = callback(guildEvent(scheduledEndTime[11]).Button, obj1);
  obj.children = items3;
  const tmp11 = recurrenceRule(memo.useState(null), 2);
  const tmp13 = closure_10;
  const tmp14 = ref;
  let obj2 = { action: closure_10(ref, obj), ref };
  const tmp13Result = closure_10(ref, obj);
  const tmp20 = closure_10;
  const obj3 = {};
  const tmp21 = onChange(scheduledEndTime[15]);
  const intl2 = guildEvent(scheduledEndTime[6]).intl;
  obj3.title = intl2.string(guildEvent(scheduledEndTime[6]).t.GG6vbr);
  const intl3 = guildEvent(scheduledEndTime[6]).intl;
  obj3.subtitle = intl3.string(guildEvent(scheduledEndTime[6]).t.q5lgwV);
  const items4 = [
    callback(onChange(scheduledEndTime[16]), obj3),
    callback(guildEvent(scheduledEndTime[17]).GuildEventTopic, {
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
      if (closure_10) {
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
        }
        handleChangeEvent(obj);
      }
    },
    disabled: tmp10,
    minimumDate: memo2,
    maximumDate: memo3
  };
  const intl4 = guildEvent(scheduledEndTime[6]).intl;
  obj5.dateLabel = intl4.string(guildEvent(scheduledEndTime[6]).t.kKOIwJ);
  const intl5 = guildEvent(scheduledEndTime[6]).intl;
  obj5.timeLabel = intl5.string(guildEvent(scheduledEndTime[6]).t["6dGmCD"]);
  items4[2] = callback(guildEvent(scheduledEndTime[17]).GuildEventDatetime, obj5);
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
    const intl6 = guildEvent(scheduledEndTime[6]).intl;
    obj6.dateLabel = intl6.string(guildEvent(scheduledEndTime[6]).t.CTLgZJ);
    const intl7 = guildEvent(scheduledEndTime[6]).intl;
    obj6.timeLabel = intl7.string(guildEvent(scheduledEndTime[6]).t.j2RuXF);
    tmp23 = callback(guildEvent(scheduledEndTime[17]).GuildEventDatetime, obj6);
  }
  items4[3] = tmp23;
  items4[4] = callback(guildEvent(scheduledEndTime[17]).GuildEventRecurrence, {
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
      if (null != outer1_9.current) {
        const current = outer1_9.current;
        current.scrollToEnd();
      }
    }, 100);
  };
  items4[5] = callback(guildEvent(scheduledEndTime[17]).GuildEventDescription, obj8);
  obj2.children = items4;
  return tmp20(tmp21, obj2);
};
