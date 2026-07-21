// Module ID: 13714
// Function ID: 103736
// Name: openTimePicker
// Dependencies: []
// Exports: default

// Module 13714 (openTimePicker)
function openTimePicker(arg0, title, hours) {
  title = arg3;
  let obj = importDefault(dependencyMap[7]);
  obj = { title, mode: "time" };
  const tmp = title(dependencyMap[9])(dependencyMap[8], dependencyMap.paths);
  obj.startDate = new Date(2025, 0, 1, hours.hours, hours.minutes, 0, 0);
  obj.onSubmit = function onSubmit(hours) {
    return arg3({ hours: hours.hours(), minutes: hours.minutes() });
  };
  obj.openLazy(tmp, arg0, obj);
}
function OverlappingSchedulesWarning(conflictingEntries) {
  conflictingEntries = conflictingEntries.conflictingEntries;
  let tmp = null;
  if (0 !== conflictingEntries.length) {
    let obj = { messageType: arg1(dependencyMap[12]).HelpMessageTypes.WARNING, borderRadius: importDefault(dependencyMap[11]).radii.md };
    obj = { spacing: 8 };
    obj = { variant: "text-sm/medium" };
    const intl = arg1(dependencyMap[15]).intl;
    obj.children = intl.string(importDefault(dependencyMap[16]).26A0Df);
    const items = [callback3(arg1(dependencyMap[14]).Text, obj), ];
    const obj1 = {
      spacing: 4,
      children: conflictingEntries.map((dayLabel) => {
          dayLabel = dayLabel.dayLabel;
          const obj = { variant: "text-sm/medium", children: "" + dayLabel + "  " + dayLabel.timeRange };
          return callback2(callback(closure_2[14]).Text, obj, dayLabel);
        })
    };
    items[1] = callback3(arg1(dependencyMap[13]).Stack, obj1);
    obj.children = items;
    obj.children = callback4(arg1(dependencyMap[13]).Stack, obj);
    tmp = callback3(arg1(dependencyMap[12]).HelpMessage, obj);
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, Pressable: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
const UserSettingsSections = arg1(dependencyMap[5]).UserSettingsSections;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[10]);
obj = { container: { flex: 1 } };
obj = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingTop: importDefault(dependencyMap[11]).space.PX_24, gap: importDefault(dependencyMap[11]).space.PX_24 };
obj.scrollContent = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.section = { gap: importDefault(dependencyMap[11]).space.PX_8 };
const obj1 = { gap: importDefault(dependencyMap[11]).space.PX_8 };
obj.sectionHeader = { gap: importDefault(dependencyMap[11]).space.PX_4 };
const obj2 = { gap: importDefault(dependencyMap[11]).space.PX_4 };
obj.daysContainer = { flexDirection: "row", gap: importDefault(dependencyMap[11]).space.PX_8 };
const obj3 = { flexDirection: "row", gap: importDefault(dependencyMap[11]).space.PX_8 };
obj.dayButton = { borderRadius: importDefault(dependencyMap[11]).radii.round, backgroundColor: importDefault(dependencyMap[11]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj.dayButtonSelected = { 1: "<string:1917160721>", 2: "values" };
const obj4 = { borderRadius: importDefault(dependencyMap[11]).radii.round, backgroundColor: importDefault(dependencyMap[11]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj.overlapWarningContent = { marginTop: importDefault(dependencyMap[11]).space.PX_24 };
const obj5 = { marginTop: importDefault(dependencyMap[11]).space.PX_24 };
obj.footer = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingVertical: importDefault(dependencyMap[11]).space.PX_16, gap: importDefault(dependencyMap[11]).space.PX_8 };
let closure_13 = obj.createStyles(obj);
const obj6 = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingVertical: importDefault(dependencyMap[11]).space.PX_16, gap: importDefault(dependencyMap[11]).space.PX_8 };
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/parent_tools/native/ScheduleDowntimeScreen.tsx");

export default function ScheduleDowntimeScreen() {
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleSubmit = obj;
    return obj(...arguments);
  }
  const tmp = callback5();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[17]);
  const stackNavigation = obj.useStackNavigation();
  const importDefault = stackNavigation;
  let obj1 = arg1(dependencyMap[18]);
  const params = obj1.useSettingNavigationRoute().params;
  let rule;
  if (null != params) {
    rule = params.rule;
  }
  const dependencyMap = rule;
  let callback = React.useMemo(() => tmp(rule[19]).getShortDayLabels("narrow"), []);
  const memo = React.useMemo(() => tmp(rule[19]).getShortDayLabels("short"), []);
  const callback2 = memo;
  let teenId;
  if (null != params) {
    teenId = params.teenId;
  }
  const React = teenId;
  const tmp6 = null != rule;
  let enabled;
  if (null != rule) {
    enabled = rule.enabled;
  }
  const tmp10 = callback2(React.useState(null == enabled || enabled), 2);
  const first = tmp10[0];
  let closure_8 = tmp10[1];
  let obj2 = arg1(dependencyMap[20]);
  const items = [closure_9];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (null == teenId) {
      let items = [];
    } else {
      const user = stateFromStores.getUser(teenId);
      items = undefined;
      if (null != user) {
        const restrictedSchedule = user.restrictedSchedule;
        if (null != restrictedSchedule) {
          items = restrictedSchedule.rules;
        }
      }
      if (null == items) {
        items = [];
      }
    }
    return items;
  });
  closure_9 = stateFromStores;
  obj = {};
  let startTime;
  if (null != rule) {
    startTime = rule.startTime;
  }
  let tmp15 = null;
  if (null != startTime) {
    obj = { hours: rule.startTime.hours };
    const minutes = rule.startTime.minutes;
    let num = 0;
    if (null != minutes) {
      num = minutes;
    }
    obj.minutes = num;
    obj.seconds = 0;
    obj.nanos = 0;
    tmp15 = obj;
  }
  obj.initial = tmp15;
  obj.defaultValue = { push: null, sk: null };
  const tmp16 = callback2(importDefault(dependencyMap[21])(obj), 2);
  const first1 = tmp16[0];
  const UserSettingsSections = first1;
  const callback3 = tmp16[1];
  obj1 = {};
  let endTime;
  const tmp13 = importDefault(dependencyMap[21]);
  const tmp9 = null == enabled || enabled;
  if (null != rule) {
    endTime = rule.endTime;
  }
  let tmp20 = null;
  if (null != endTime) {
    obj2 = { hours: rule.endTime.hours };
    const minutes2 = rule.endTime.minutes;
    let num2 = 0;
    if (null != minutes2) {
      num2 = minutes2;
    }
    obj2.minutes = num2;
    obj2.seconds = 0;
    obj2.nanos = 0;
    tmp20 = obj2;
  }
  obj1.initial = tmp20;
  obj1.defaultValue = {};
  const tmp21 = callback2(importDefault(dependencyMap[21])(obj1), 2);
  const first2 = tmp21[0];
  const callback5 = tmp21[1];
  let days;
  if (null != rule) {
    days = rule.days;
  }
  const tmp18 = importDefault(dependencyMap[21]);
  const tmp26 = callback2(React.useState(new Set(days)), 2);
  const first3 = tmp26[0];
  const openTimePicker = first3;
  let closure_15 = tmp26[1];
  const tmp29 = callback2(React.useState(false), 2);
  let str = tmp29[0];
  let closure_17 = tmp29[1];
  const items1 = [tmp6, , ];
  let ruleId;
  if (null != rule) {
    ruleId = rule.ruleId;
  }
  items1[1] = ruleId;
  items1[2] = stateFromStores;
  const memo1 = React.useMemo(() => {
    if (tmp6) {
      let ruleId;
      if (null != rule) {
        ruleId = rule.ruleId;
      }
      if (null != ruleId) {
        let found = stateFromStores.filter((ruleId) => ruleId.ruleId !== ruleId.ruleId);
        const tmp6 = stateFromStores;
      }
      return found;
    }
    found = stateFromStores;
  }, items1);
  const items2 = [memo, memo1, first3];
  const fn = () => tmp(rule[19]).computeOverlappingInfo(first3, memo1, memo);
  const memo2 = React.useMemo(fn, items2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [teenId, , ];
  let ruleId1;
  const set = new Set(days);
  if (null != rule) {
    ruleId1 = rule.ruleId;
  }
  items3[1] = ruleId1;
  items3[2] = stackNavigation;
  callback = React.useCallback(callback(fn), items3);
  const items4 = [stackNavigation, tmp6, callback, str];
  const layoutEffect = React.useLayoutEffect(() => {
    if (tmp6) {
      const obj = {
        headerRight() {
            let obj = { onPress: closure_19, accessibilityRole: "button" };
            const intl = callback(closure_2[15]).intl;
            obj.accessibilityLabel = intl.string(callback(closure_2[15]).t.oyYWHE);
            obj.hitSlop = 8;
            obj.disabled = closure_16;
            obj = { color: callback2(closure_2[11]).colors.ICON_FEEDBACK_CRITICAL, size: "md" };
            obj.children = callback3(callback(closure_2[23]).TrashIcon, obj);
            return callback3(closure_7, obj);
          }
      };
      stackNavigation.setOptions(obj);
    }
  }, items4);
  let obj7 = arg1(dependencyMap[19]);
  const timeToMinutesResult = obj7.timeToMinutes(first1);
  let obj8 = arg1(dependencyMap[19]);
  const timeToMinutesResult1 = obj8.timeToMinutes(first2);
  const obj3 = {};
  let obj10 = arg1(dependencyMap[19]);
  obj3.startTime = obj10.formatTime(first1);
  let obj11 = arg1(dependencyMap[19]);
  obj3.endTime = obj11.formatTime(first2);
  obj3.timeHook = function timeHook(children) {
    return callback3(tmp(rule[14]).Text, { children }, arg1);
  };
  if (timeToMinutesResult > timeToMinutesResult1) {
    const intl2 = arg1(dependencyMap[15]).intl;
    let formatResult = intl2.format(importDefault(dependencyMap[16]).R87Y2K, obj3);
  } else {
    const intl = arg1(dependencyMap[15]).intl;
    formatResult = intl.format(importDefault(dependencyMap[16]).vX7xid, obj3);
  }
  let str2 = first3.size > 0 && timeToMinutesResult !== timeToMinutesResult1 && !str;
  if (null == teenId) {
    return null;
  } else {
    const obj4 = { style: tmp.container };
    const obj5 = {};
    const obj6 = { style: tmp.scrollContent };
    obj7 = {};
    const intl3 = arg1(dependencyMap[15]).intl;
    obj7.children = intl3.string(importDefault(dependencyMap[16]).AcJ4ke);
    const items5 = [callback3(arg1(dependencyMap[14]).Text, obj7), , , ];
    let tmp56 = tmp6;
    if (tmp6) {
      obj8 = { hasIcons: false };
      const obj9 = {};
      const intl4 = arg1(dependencyMap[15]).intl;
      obj9.label = intl4.string(importDefault(dependencyMap[16]).30Owsd);
      obj9.value = first;
      obj9.onValueChange = function handleEnabledChange() {
        callback2((arg0) => !arg0);
      };
      obj8.children = callback3(arg1(dependencyMap[25]).TableSwitchRow, obj9);
      tmp56 = callback3(arg1(dependencyMap[24]).TableRowGroup, obj8);
    }
    items5[1] = tmp56;
    obj10 = { style: tmp.section };
    obj11 = {};
    const intl5 = arg1(dependencyMap[15]).intl;
    obj11.children = intl5.string(importDefault(dependencyMap[16]).37z4a2);
    const items6 = [callback3(arg1(dependencyMap[14]).Text, obj11), ];
    const obj12 = { hasIcons: false };
    const obj13 = {};
    const intl6 = arg1(dependencyMap[15]).intl;
    obj13.label = intl6.string(importDefault(dependencyMap[16]).DsXytO);
    const obj14 = { variant: "text-md/normal" };
    let obj23 = arg1(dependencyMap[19]);
    obj14.children = obj23.formatTime(first1);
    obj13.trailing = callback3(arg1(dependencyMap[14]).Text, obj14);
    obj13.arrow = true;
    obj13.onPress = function handleStartTimePress() {
      const intl = tmp(rule[15]).intl;
    };
    const items7 = [callback3(arg1(dependencyMap[26]).TableRow, obj13), ];
    const obj15 = {};
    const intl7 = arg1(dependencyMap[15]).intl;
    obj15.label = intl7.string(importDefault(dependencyMap[16]).5SHDP6);
    const obj16 = { variant: "text-md/normal" };
    let obj26 = arg1(dependencyMap[19]);
    obj16.children = obj26.formatTime(first2);
    obj15.trailing = callback3(arg1(dependencyMap[14]).Text, obj16);
    obj15.arrow = true;
    obj15.onPress = function handleEndTimePress() {
      const intl = tmp(rule[15]).intl;
    };
    items7[1] = callback3(arg1(dependencyMap[26]).TableRow, obj15);
    obj12.children = items7;
    items6[1] = first2(arg1(dependencyMap[24]).TableRowGroup, obj12);
    obj10.children = items6;
    items5[2] = first2(tmp6, obj10);
    const obj17 = { style: tmp.section };
    const obj18 = { style: tmp.sectionHeader };
    const obj19 = {};
    const intl8 = arg1(dependencyMap[15]).intl;
    obj19.children = intl8.string(importDefault(dependencyMap[16]).HaV0Sg);
    const items8 = [callback3(arg1(dependencyMap[14]).Text, obj19), ];
    const obj20 = { children: formatResult };
    items8[1] = callback3(arg1(dependencyMap[14]).Text, obj20);
    obj18.children = items8;
    const items9 = [first2(tmp6, obj18), , ];
    const obj21 = { style: tmp.daysContainer };
    const DAYS_ORDERED = arg1(dependencyMap[19]).DAYS_ORDERED;
    obj21.children = DAYS_ORDERED.map((arg0, arg1) => {
      const hasItem = first3.has(arg0);
      let obj = {};
      const items = [arg0.dayButton, ];
      let dayButtonSelected = hasItem;
      if (hasItem) {
        dayButtonSelected = tmp.dayButtonSelected;
      }
      items[1] = dayButtonSelected;
      obj.style = items;
      obj.onPress = function onPress() {
        function handleDayToggle(arg0) {
          callback((items) => {
            const set = new Set(items);
            if (set.has(items)) {
              set.delete(items);
            } else {
              set.add(items);
            }
            return set;
          });
        }(arg0);
      };
      obj.accessibilityRole = "button";
      obj.accessibilityState = { selected: hasItem };
      obj.accessibilityLabel = closure_3[arg1];
      obj = { variant: "text-sm/semibold" };
      let str = "text-muted";
      if (hasItem) {
        str = "control-secondary-text-default";
      }
      obj.color = str;
      obj.children = closure_3[arg1];
      obj.children = closure_11(arg0(rule[14]).Text, obj);
      return closure_11(first, obj, arg0);
    });
    items9[1] = callback3(tmp6, obj21);
    let tmp78 = memo2.conflictingEntries.length > 0;
    if (tmp78) {
      const obj22 = { style: tmp.overlapWarningContent };
      obj23 = { conflictingEntries: memo2.conflictingEntries };
      obj22.children = callback3(closure_15, obj23);
      tmp78 = callback3(tmp6, obj22);
    }
    items9[2] = tmp78;
    obj17.children = items9;
    items5[3] = first2(tmp6, obj17);
    obj6.children = items5;
    obj5.children = first2(tmp6, obj6);
    const items10 = [callback3(closure_8, obj5), ];
    let obj24 = { bottom: true };
    let obj25 = { style: tmp.footer };
    let stringResult = callback3;
    let num15 = 28;
    let Button = arg1(dependencyMap[28]).Button;
    obj26 = {};
    let intl9 = arg1(dependencyMap[15]).intl;
    let intl10 = intl9.string;
    const tmp91 = importDefault(dependencyMap[16]);
    obj26.text = intl10(tmp6 ? tmp91.TDc9mW : tmp91.pvcruO);
    obj26.onPress = function handleSubmit() {
      return _handleSubmit(...arguments);
    };
    obj26.disabled = !str2;
    obj26.loading = str;
    obj26.variant = "primary";
    str2 = "lg";
    obj26.size = "lg";
    obj26 = [, ];
    obj26[0] = stringResult(Button, obj26);
    Button = callback3;
    intl9 = arg1;
    const obj27 = {};
    intl10 = arg1(dependencyMap[15]).intl;
    stringResult = intl10.string(arg1(dependencyMap[15]).t.ETE/oC);
    obj27.text = stringResult;
    obj27.onPress = function onPress() {
      return stackNavigation.goBack();
    };
    obj27.disabled = str;
    str = "secondary";
    obj27.variant = "secondary";
    obj27.size = "lg";
    num15 = callback3(arg1(dependencyMap[num15]).Button, obj27);
    obj26[1] = num15;
    obj25.children = obj26;
    obj25 = first2(tmp6, obj25);
    obj24.children = obj25;
    obj24 = callback3(arg1(dependencyMap[27]).SafeAreaPaddingView, obj24);
    items10[1] = obj24;
    obj4.children = items10;
    first2(tmp6, obj4);
    const stringResultResult = stringResult(Button, obj26);
    const tmp47 = first2;
    const tmp49 = callback3;
    const tmp50 = closure_8;
    const tmp51 = first2;
    const tmp63 = tmp6;
    const tmp73 = first2;
    const tmp83 = callback3;
    const tmp86 = first2;
    const tmp87 = tmp6;
  }
};
