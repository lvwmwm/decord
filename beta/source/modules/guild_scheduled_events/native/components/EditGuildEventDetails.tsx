// Module ID: 9057
// Function ID: 9058
// Name: EditGuildEventDetails
// Dependencies: [32, 19, 6946, 2051, 21, 4836, 1115, 4421, 8946, 1485, 4832, 5281, 1876, 8982, 4541, 8986, 9046, 8988, 2]
// Exports: default

// Module 9057 (EditGuildEventDetails)
import intl8 from "intl" /* 1115 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1876 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import _modDef4421 from "module_4421" /* 4421 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import ScheduleUtils from "ScheduleUtils" /* 8946 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 8982 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let metroImportAll;
let closure_6 = GuildScheduledEventStore.isGuildScheduledEventActive;
let constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ error: { paddingVertical: 8 } });
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventDetails.tsx");

export default function EditGuildEventDetails(guildEvent) {
  let _undefined;
  let _undefined2;
  let c11;
  let c7;
  let c8;
  let description;
  let entityType;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items3;
  let items4;
  let name;
  let scheduledStartTime;
  let tmp12;
  const f88017 = () => {
    const obj = ScheduleUtils;
    return obj.recurrenceRuleToOption(_modDef4421(scheduledStartTime), recurrenceRule);
  };
  guildEvent = guildEvent.guildEvent;
  const onChange = guildEvent.onChange;
  scheduledStartTime = undefined;
  let memo;
  constants = undefined;
  c8 = undefined;
  c11 = undefined;
  const initialGuildEvent = guildEvent.initialGuildEvent;
  ({ description, scheduledStartTime } = guildEvent);
  const scheduledEndTime = guildEvent.scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  const items = [scheduledStartTime];
  let tmp = c11();
  ({ name, entityType } = guildEvent);
  memo = memo.useMemo(() => _modDef4421(scheduledStartTime), items);
  const items1 = [scheduledEndTime, scheduledStartTime];
  const memo1 = memo.useMemo(() => {
    let addResult;
    if (null != scheduledEndTime) {
      addResult = _modDef4421(tmp);
    } else {
      const obj = _modDef4421(scheduledStartTime);
      addResult = obj.add(1, "hour");
    }
    return addResult;
  }, items1);
  [c7, c8] = recurrenceRule(memo.useState(f88017), 2);
  const tmp4 = recurrenceRule(memo.useState(f88017), 2);
  const memo2 = memo.useMemo(() => onChange(scheduledEndTime[7])(), []);
  const items2 = [memo];
  const memo3 = memo.useMemo(() => {
    const obj = onChange(scheduledEndTime[7])();
    return obj.add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  }, []);
  const memo4 = memo.useMemo(() => {
    const obj = _modDef4421(memo);
    return obj.add(15, "minutes");
  }, items2);
  const memo5 = memo.useMemo(() => {
    const obj = onChange(scheduledEndTime[7])();
    return obj.add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  }, []);
  const ref = memo.useRef(null);
  const tmp10 = memo1(initialGuildEvent);
  let closure_10 = tmp10;
  const tmp11 = recurrenceRule(memo.useState(null), 2);
  [tmp12, c11] = tmp11;
  let obj = guildEvent(scheduledEndTime[9]);
  navigation = obj.useNavigation();
  let tmp17 = null;
  const tmp16 = ref;
  if (null != tmp12) {
    let obj2 = { style: tmp.error, variant: "text-sm/normal", color: "text-feedback-critical", children: tmp12 };
    tmp17 = c8(tmp13(tmp14[10]).Text, obj2);
  }
  const obj3 = { children: items3 };
  items3 = [tmp17, ];
  let obj4 = {
    text: intl.string(tmp13(tmp14[6]).t.PDTjLN),
    variant: "primary",
    onPress() {
      function assertGuildEventDetailsValid(guildEvent) {
        if (0 === guildEvent.name.length) {
          const _Error = Error;
          const intl = guildEvent(scheduledEndTime[6]).intl;
          const self = this;
          const self2 = this;
          const error = new Error(intl.string(guildEvent(scheduledEndTime[6]).t.GoV0uR));
          throw error;
        }
      }
      const obj = KeyboardManagerUtilsAll;
      const result = obj.dismissGlobalKeyboard();
      try {
        _undefined2(null);
        assertGuildEventDetailsValid(guildEvent);
        navigation.navigate(EditGuildEventUtils.EditGuildEventScreens.PREVIEW);
      } catch (tmp11) {
        _undefined2(tmp11.message);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(tmp11.message);
      }
    },
    disabled: null != tmp12
  };
  const Button = tmp13(tmp14[11]).Button;
  intl = tmp13(tmp14[6]).intl;
  items3[1] = c8(Button, obj4);
  const obj5 = { action: closure_10(tmp16, obj3), ref, children: items4 };
  const tmp21 = onChange(scheduledEndTime[15]);
  const obj6 = { title: intl2.string(guildEvent(scheduledEndTime[6]).t.GG6vbr), subtitle: intl3.string(guildEvent(scheduledEndTime[6]).t.q5lgwV) };
  const tmp22 = onChange(scheduledEndTime[16]);
  intl2 = tmp13(tmp14[6]).intl;
  intl3 = tmp13(tmp14[6]).intl;
  items4 = [c8(tmp22, obj6), , , , , ];
  const obj7 = {
    topic: name,
    onChange(name) {
      const obj = { name };
      _undefined2(null);
      onChange(obj);
    }
  };
  items4[1] = c8(guildEvent(scheduledEndTime[17]).GuildEventTopic, obj7);
  const obj8 = {
    date: memo,
    onChange(toISOString) {
      const tmp = closure_10;
      if (tmp) {
        const intl = intl8.intl;
        return _undefined2(intl.string(intl8.t.nKIaRG));
      } else {
        const obj = { scheduledStartTime: toISOString.toISOString() };
        const isBeforeResult = null != scheduledEndTime && memo1.isBefore(toISOString);
        if (isBeforeResult) {
          const obj2 = _modDef4421(toISOString);
          const addResult = obj2.add(1, "hour");
          obj.scheduledEndTime = addResult.toISOString();
        }
        const tmp9 = null != toISOString && null != c7;
        if (tmp9) {
          const obj4 = ScheduleUtils;
          obj.recurrenceRule = obj4.recurrenceOptionToRecurrenceRule(c7, toISOString);
        }
        _undefined2(null);
        onChange(obj);
      }
    },
    disabled: tmp10,
    minimumDate: memo2,
    maximumDate: memo3,
    dateLabel: intl4.string(guildEvent(scheduledEndTime[6]).t.kKOIwJ),
    timeLabel: intl5.string(guildEvent(scheduledEndTime[6]).t["6dGmCD"])
  };
  const GuildEventDatetime = tmp13(tmp14[17]).GuildEventDatetime;
  intl4 = tmp13(tmp14[6]).intl;
  intl5 = tmp13(tmp14[6]).intl;
  items4[2] = c8(GuildEventDatetime, obj8);
  let tmp19Result = entityType === constants.EXTERNAL;
  if (tmp19Result) {
    const obj9 = {
      date: memo1,
      onChange(toISOString) {
          const obj = { scheduledEndTime: toISOString.toISOString() };
          _undefined2(null);
          onChange(obj);
        },
      minimumDate: memo4,
      maximumDate: memo5,
      dateLabel: intl6.string(guildEvent(scheduledEndTime[6]).t.CTLgZJ),
      timeLabel: intl7.string(guildEvent(scheduledEndTime[6]).t.j2RuXF)
    };
    const GuildEventDatetime2 = tmp13(tmp14[17]).GuildEventDatetime;
    intl6 = tmp13(tmp14[6]).intl;
    intl7 = tmp13(tmp14[6]).intl;
    tmp19Result = tmp19(GuildEventDatetime2, obj9);
  }
  items4[3] = tmp19Result;
  const obj10 = {
    startDate: memo,
    recurrenceRule,
    onRecurrenceChange(c7) {
      let obj;
      if (null != memo) {
        const obj2 = { recurrenceRule: obj.recurrenceOptionToRecurrenceRule(c7, tmp) };
        obj = ScheduleUtils;
        onChange(obj2);
        _undefined(c7);
      }
    }
  };
  items4[4] = c8(guildEvent(scheduledEndTime[17]).GuildEventRecurrence, obj10);
  const GuildEventDescription = tmp13(tmp14[17]).GuildEventDescription;
  if (description == null) {
    description = "";
  }
  const obj11 = {
    description,
    onChange(description) {
      const obj = { description };
      _undefined2(null);
      onChange(obj);
    },
    onFocus() {
      const timerId = setTimeout(() => {
        if (null != ref.current) {
          const current = ref.current;
          current.scrollToEnd();
        }
      }, 100);
    }
  };
  items4[5] = c8(GuildEventDescription, obj11);
  return closure_10(tmp21, obj5);
};
