// Module ID: 9195
// Function ID: 9196
// Name: EditGuildEventDetails
// Dependencies: [32, 19, 6943, 5025, 21, 5170, 2166, 1113, 9081, 5179, 1499, 5783, 5790, 2017, 9080, 9101, 9185, 9104, 2]
// Exports: default

// Module 9195 (EditGuildEventDetails)
import intl9 from "intl" /* 1113 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 2017 */;
import _modDef2166 from "module_2166" /* 2166 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 5025 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5179 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6943 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9080 */;
import ScheduleUtils from "ScheduleUtils" /* 9081 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let current, navigation;

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
  let c10;
  let c6;
  let c7;
  let description;
  let entityType;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items4;
  let items5;
  let name;
  let scheduledStartTime;
  let tmp12;
  const f95580 = () => {
    const obj = ScheduleUtils;
    return obj.recurrenceRuleToOption(_modDef2166(scheduledStartTime), recurrenceRule);
  };
  guildEvent = guildEvent.guildEvent;
  const onChange = guildEvent.onChange;
  scheduledStartTime = undefined;
  let memo;
  c6 = undefined;
  constants = undefined;
  c10 = undefined;
  let c11;
  navigation = undefined;
  const initialGuildEvent = guildEvent.initialGuildEvent;
  ({ description, scheduledStartTime } = guildEvent);
  let scheduledEndTime = guildEvent.scheduledEndTime;
  const recurrenceRule = guildEvent.recurrenceRule;
  let obj = memo;
  const items = [scheduledStartTime];
  let tmp = c11();
  ({ name, entityType } = guildEvent);
  memo = memo.useMemo(() => _modDef2166(scheduledStartTime), items);
  const items1 = [scheduledEndTime, scheduledStartTime];
  const memo1 = memo.useMemo(() => {
    let addResult;
    if (null != scheduledEndTime) {
      addResult = _modDef2166(tmp);
    } else {
      const obj = _modDef2166(scheduledStartTime);
      addResult = obj.add(1, "hour");
    }
    return addResult;
  }, items1);
  [c6, c7] = recurrenceRule(memo.useState(f95580), 2);
  const tmp4 = recurrenceRule(memo.useState(f95580), 2);
  const memo2 = memo.useMemo(() => onChange(scheduledEndTime[6])(), []);
  const items2 = [memo];
  const memo3 = memo.useMemo(() => {
    const obj = onChange(scheduledEndTime[6])();
    return obj.add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days");
  }, []);
  const memo4 = memo.useMemo(() => {
    const obj = _modDef2166(memo);
    return obj.add(15, "minutes");
  }, items2);
  const memo5 = memo.useMemo(() => {
    const obj = onChange(scheduledEndTime[6])();
    return obj.add(guildEvent(scheduledEndTime[8]).MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  }, []);
  let ref = memo.useRef(null);
  let tmp10 = c6(initialGuildEvent);
  let closure_9 = tmp10;
  const tmp11 = recurrenceRule(memo.useState(null), 2);
  [tmp12, c10] = tmp11;
  let stringResult = null;
  if (null != scheduledEndTime) {
    let obj2 = onChange(scheduledEndTime[6])(scheduledEndTime);
    let startOfResult = obj2.startOf("minute");
    let isAfter = startOfResult.isAfter;
    stringResult = null;
    const obj3 = onChange(scheduledEndTime[6])(scheduledStartTime);
    if (!isAfter(obj3.startOf("minute"))) {
      let intl = guildEvent(tmp15[7]).intl;
      stringResult = intl.string(guildEvent(tmp15[7]).t.LpjF4K);
    }
  }
  c11 = stringResult;
  if (tmp12 == null) {
    tmp12 = stringResult;
  }
  ref = obj.useRef(null);
  const items3 = [stringResult];
  const effect = obj.useEffect(() => {
    const tmp2 = null != current && null == ref.current;
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(current);
    }
    ref.current = current;
  }, items3);
  let obj4 = guildEvent(scheduledEndTime[10]);
  navigation = obj4.useNavigation();
  let tmp23 = null;
  if (null != tmp12) {
    const obj5 = { style: tmp.error, variant: "body-sm/normal", color: "text-feedback-critical", children: tmp12 };
    tmp23 = ref(tmp19(tmp20[11]).Text, obj5);
  }
  let obj6 = { children: items4 };
  items4 = [tmp23, ];
  const obj7 = {
    text: intl2.string(guildEvent(scheduledEndTime[7]).t.PDTjLN),
    variant: "primary",
    onPress: function handleNext() {
      function assertGuildEventDetailsValid(guildEvent) {
        scheduledEndTime = guildEvent.scheduledEndTime;
        if (0 === guildEvent.name.length) {
          const _Error2 = Error;
          const intl2 = guildEvent(closure_1_3[7]).intl;
          const self3 = this;
          const self4 = this;
          const error = new Error(intl2.string(guildEvent(closure_1_3[7]).t.GoV0uR));
          throw error;
        } else if (null != scheduledEndTime) {
          const obj = onChange(closure_1_3[6])(scheduledEndTime);
          const isAfter = obj.startOf("minute").isAfter;
          obj.startOf("minute");
          const obj2 = onChange(closure_1_3[6])(tmp);
          if (!isAfter(obj2.startOf("minute"))) {
            const _Error = Error;
            const intl = guildEvent(tmp13[7]).intl;
            const self = this;
            const self2 = this;
            const error1 = new Error(intl.string(guildEvent(tmp13[7]).t.LpjF4K));
            throw error1;
          }
        }
      }
      const tmp = dependencyMap;
      let obj = KeyboardManagerUtilsAll;
      const result = obj.dismissGlobalKeyboard();
      try {
        _undefined2(null);
        assertGuildEventDetailsValid(guildEvent);
        navigation.navigate(EditGuildEventUtils.EditGuildEventScreens.PREVIEW);
      } catch (tmp11) {
        const tmp13 = _undefined2(tmp11.message);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(tmp11.message);
      }
    },
    disabled: null != tmp12
  };
  const Button = tmp19(tmp20[12]).Button;
  intl2 = tmp19(tmp20[7]).intl;
  items4[1] = ref(Button, obj7);
  let obj8 = { action: tmp21(tmp22, obj6), ref, children: items5 };
  c10(closure_9, obj6);
  const obj9 = { title: intl3.string(guildEvent(scheduledEndTime[7]).t.GG6vbr), subtitle: intl4.string(guildEvent(scheduledEndTime[7]).t.q5lgwV) };
  const tmp27 = onChange(scheduledEndTime[15]);
  const tmp28 = onChange(scheduledEndTime[16]);
  intl3 = tmp19(tmp20[7]).intl;
  intl4 = tmp19(tmp20[7]).intl;
  items5 = [ref(tmp28, obj9), , , , , ];
  const obj10 = {
    topic: name,
    onChange(name) {
      const obj = { name };
      _undefined2(null);
      onChange(obj);
    }
  };
  items5[1] = ref(guildEvent(scheduledEndTime[17]).GuildEventTopic, obj10);
  const obj11 = {
    date: memo,
    onChange: function handleChangeEventStartTime(arg0) {
      const tmp = closure_9;
      if (tmp) {
        const intl = intl9.intl;
        return _undefined2(intl.string(intl9.t.nKIaRG));
      } else {
        const obj = _modDef2166(arg0);
        const startOfResult = obj.startOf("minute");
        const obj2 = { scheduledStartTime: startOfResult.toISOString() };
        let isBeforeResult = null != scheduledEndTime;
        if (isBeforeResult) {
          const obj4 = _modDef2166(tmp5);
          const startOfResult1 = obj4.startOf("minute");
          isBeforeResult = startOfResult1.isBefore(startOfResult);
        }
        if (isBeforeResult) {
          const obj6 = _modDef2166(startOfResult);
          const addResult = obj6.add(1, "hour");
          obj2.scheduledEndTime = addResult.toISOString();
        }
        const tmp10 = null != arg0 && null != c6;
        if (tmp10) {
          const obj8 = ScheduleUtils;
          obj2.recurrenceRule = obj8.recurrenceOptionToRecurrenceRule(c6, startOfResult);
        }
        _undefined2(null);
        onChange(obj2);
      }
    },
    disabled: tmp10,
    minimumDate: memo2,
    maximumDate: memo3,
    dateLabel: intl5.string(guildEvent(scheduledEndTime[7]).t.kKOIwJ),
    timeLabel: intl6.string(guildEvent(scheduledEndTime[7]).t["6dGmCD"])
  };
  const GuildEventDatetime = tmp19(tmp20[17]).GuildEventDatetime;
  intl5 = tmp19(tmp20[7]).intl;
  intl6 = tmp19(tmp20[7]).intl;
  items5[2] = ref(GuildEventDatetime, obj11);
  let tmp25Result = entityType === constants.EXTERNAL;
  if (tmp25Result) {
    const obj12 = {
      date: memo1,
      onChange: function handleChangeEventEndTime(arg0) {
          let startOfResult;
          const obj = { scheduledEndTime: startOfResult.toISOString() };
          const obj2 = _modDef2166(arg0);
          startOfResult = obj2.startOf("minute");
          _undefined2(null);
          onChange(obj);
        },
      minimumDate: memo4,
      maximumDate: memo5,
      dateLabel: intl7.string(guildEvent(scheduledEndTime[7]).t.CTLgZJ),
      timeLabel: intl8.string(guildEvent(scheduledEndTime[7]).t.j2RuXF)
    };
    const GuildEventDatetime2 = tmp19(tmp20[17]).GuildEventDatetime;
    intl7 = tmp19(tmp20[7]).intl;
    intl8 = tmp19(tmp20[7]).intl;
    tmp25Result = tmp25(GuildEventDatetime2, obj12);
  }
  items5[3] = tmp25Result;
  const obj13 = {
    startDate: memo,
    recurrenceRule,
    onRecurrenceChange: function handleRecurrenceChange(c6) {
      let obj;
      if (null != memo) {
        const obj2 = { recurrenceRule: obj.recurrenceOptionToRecurrenceRule(c6, tmp) };
        obj = ScheduleUtils;
        onChange(obj2);
        _undefined(c6);
      }
    }
  };
  items5[4] = ref(guildEvent(scheduledEndTime[17]).GuildEventRecurrence, obj13);
  const GuildEventDescription = tmp19(tmp20[17]).GuildEventDescription;
  if (description == null) {
    description = "";
  }
  const obj14 = {
    description,
    onChange(description) {
      const obj = { description };
      _undefined2(null);
      onChange(obj);
    },
    onFocus() {
      const timerId = setTimeout(() => {
        if (null != ref.current) {
          current = ref.current;
          current.scrollToEnd();
        }
      }, 100);
    }
  };
  items5[5] = ref(GuildEventDescription, obj14);
  return c10(tmp27, obj8);
};
