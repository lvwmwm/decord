// Module ID: 13888
// Function ID: 106271
// Name: openTimePicker
// Dependencies: [5, 57, 31, 27, 1849, 653, 33, 4098, 8433, 1934, 4130, 689, 1273, 4541, 4126, 1212, 2198, 1456, 6653, 10252, 624, 13889, 13890, 4089, 5501, 5502, 5165, 5121, 4543, 2]
// Exports: default

// Module 13888 (openTimePicker)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "SafeAreaPaddingView";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
function openTimePicker(arg0, title, hours) {
  const _require = arg3;
  let obj = importDefault(4098);
  obj = { title, mode: "time" };
  const tmp = _require(1934)(8433, dependencyMap.paths);
  obj.startDate = new Date(2025, 0, 1, hours.hours, hours.minutes, 0, 0);
  obj.onSubmit = function onSubmit(hours) {
    return callback({ hours: hours.hours(), minutes: hours.minutes() });
  };
  obj.openLazy(tmp, arg0, obj);
}
function OverlappingSchedulesWarning(conflictingEntries) {
  conflictingEntries = conflictingEntries.conflictingEntries;
  let tmp = null;
  if (0 !== conflictingEntries.length) {
    let obj = { messageType: require(1273) /* Button */.HelpMessageTypes.WARNING, borderRadius: importDefault(689).radii.md };
    obj = { spacing: 8 };
    obj = { variant: "text-sm/medium" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(importDefault(2198)["26A0Df"]);
    const items = [callback2(require(4126) /* Text */.Text, obj), ];
    const obj1 = {
      spacing: 4,
      children: conflictingEntries.map((dayLabel) => {
          dayLabel = dayLabel.dayLabel;
          const obj = { variant: "text-sm/medium", children: "" + dayLabel + "  " + dayLabel.timeRange };
          return outer1_11(outer1_0(outer1_2[14]).Text, obj, dayLabel);
        })
    };
    items[1] = callback2(require(4541) /* Stack */.Stack, obj1);
    obj.children = items;
    obj.children = callback3(require(4541) /* Stack */.Stack, obj);
    tmp = callback2(require(1273) /* Button */.HelpMessage, obj);
  }
  return tmp;
}
({ View: closure_6, Pressable: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.scrollContent = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.section = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.sectionHeader = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.daysContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj4 = { flex: 1, aspectRatio: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderWidth: 1, borderColor: "transparent" };
_createForOfIteratorHelperLoose.dayButton = obj4;
_createForOfIteratorHelperLoose.dayButtonSelected = { backgroundColor: "rgba(88, 101, 242, 0.16)", borderColor: "rgba(88, 101, 242, 1)" };
let obj3 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.overlapWarningContent = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj5 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.footer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("result").fileFinishedImporting("modules/parent_tools/native/ScheduleDowntimeScreen.tsx");

export default function ScheduleDowntimeScreen() {
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = dependencyMap(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(rule[17]);
  const stackNavigation = obj.useStackNavigation();
  let obj1 = require(rule[18]);
  const params = obj1.useSettingNavigationRoute().params;
  rule = undefined;
  if (null != params) {
    rule = params.rule;
  }
  let callback = teenId.useMemo(() => tmp(rule[19]).getShortDayLabels("narrow"), []);
  const memo = teenId.useMemo(() => tmp(rule[19]).getShortDayLabels("short"), []);
  teenId = undefined;
  if (null != params) {
    teenId = params.teenId;
  }
  let closure_6 = tmp6;
  let enabled;
  if (null != rule) {
    enabled = rule.enabled;
  }
  const tmp10 = memo(teenId.useState(null == enabled || enabled), 2);
  const first = tmp10[0];
  let closure_8 = tmp10[1];
  let obj2 = require(rule[20]);
  let items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => {
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
  obj.defaultValue = { hours: 22, minutes: 0 };
  const tmp16 = memo(stackNavigation(rule[21])(obj), 2);
  const first1 = tmp16[0];
  const callback2 = tmp16[1];
  obj1 = {};
  let endTime;
  const tmp13 = stackNavigation(rule[21]);
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
  obj1.defaultValue = { hours: 7, minutes: 0 };
  const tmp21 = memo(stackNavigation(rule[21])(obj1), 2);
  const first2 = tmp21[0];
  _createForOfIteratorHelperLoose = tmp21[1];
  let days;
  if (null != rule) {
    days = rule.days;
  }
  const tmp18 = stackNavigation(rule[21]);
  const tmp26 = memo(teenId.useState(new Set(days)), 2);
  const first3 = tmp26[0];
  let closure_15 = tmp26[1];
  const tmp29 = memo(teenId.useState(false), 2);
  let str = tmp29[0];
  let closure_17 = tmp29[1];
  const items1 = [null != rule, , ];
  let ruleId;
  if (null != rule) {
    ruleId = rule.ruleId;
  }
  items1[1] = ruleId;
  items1[2] = stateFromStores;
  const memo1 = teenId.useMemo(() => {
    if (closure_6) {
      let ruleId;
      if (null != rule) {
        ruleId = rule.ruleId;
      }
      if (null != ruleId) {
        let found = stateFromStores.filter((ruleId) => ruleId.ruleId !== outer1_2.ruleId);
      }
      return found;
    }
    found = stateFromStores;
  }, items1);
  const items2 = [memo, memo1, first3];
  const fn = () => tmp(rule[19]).computeOverlappingInfo(first3, memo1, memo);
  const memo2 = teenId.useMemo(fn, items2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [teenId, , ];
  let ruleId1;
  let set = new Set(days);
  if (null != rule) {
    ruleId1 = rule.ruleId;
  }
  items3[1] = ruleId1;
  items3[2] = stackNavigation;
  callback = teenId.useCallback(callback(fn), items3);
  const items4 = [stackNavigation, null != rule, callback, str];
  const layoutEffect = teenId.useLayoutEffect(() => {
    if (closure_6) {
      let obj = {
        headerRight() {
            let obj = { onPress: outer1_19, accessibilityRole: "button" };
            const intl = callback(rule[15]).intl;
            obj.accessibilityLabel = intl.string(callback(rule[15]).t.oyYWHE);
            obj.hitSlop = 8;
            obj.disabled = outer1_16;
            obj = { color: stackNavigation(rule[11]).colors.ICON_FEEDBACK_CRITICAL, size: "md" };
            obj.children = callback2(callback(rule[23]).TrashIcon, obj);
            return callback2(first, obj);
          }
      };
      stackNavigation.setOptions(obj);
    }
  }, items4);
  let obj7 = require(rule[19]);
  const timeToMinutesResult = obj7.timeToMinutes(first1);
  let obj8 = require(rule[19]);
  const timeToMinutesResult1 = obj8.timeToMinutes(first2);
  const obj3 = {};
  let obj10 = require(rule[19]);
  obj3.startTime = obj10.formatTime(first1);
  let obj11 = require(rule[19]);
  obj3.endTime = obj11.formatTime(first2);
  obj3.timeHook = function timeHook(children) {
    const obj = { variant: "text-sm/medium", color: "text-default", children };
    return callback2(tmp(rule[14]).Text, obj, arg1);
  };
  if (timeToMinutesResult > timeToMinutesResult1) {
    const intl2 = require(rule[15]).intl;
    let formatResult = intl2.format(stackNavigation(rule[16]).R87Y2K, obj3);
  } else {
    let intl = require(rule[15]).intl;
    formatResult = intl.format(stackNavigation(rule[16]).vX7xid, obj3);
  }
  let str2 = first3.size > 0 && timeToMinutesResult !== timeToMinutesResult1 && !str;
  if (null == teenId) {
    return null;
  } else {
    const obj4 = { style: tmp.container };
    const obj5 = {};
    const obj6 = { style: tmp.scrollContent };
    obj7 = { variant: "text-md/medium", color: "text-subtle" };
    const intl3 = require(rule[15]).intl;
    obj7.children = intl3.string(stackNavigation(rule[16]).AcJ4ke);
    const items5 = [callback2(require(rule[14]).Text, obj7), , , ];
    let tmp56 = tmp6;
    if (tmp6) {
      obj8 = { hasIcons: false };
      const obj9 = {};
      const intl4 = require(rule[15]).intl;
      obj9.label = intl4.string(stackNavigation(rule[16])["30Owsd"]);
      obj9.value = first;
      obj9.onValueChange = function handleEnabledChange() {
        callback((arg0) => !arg0);
      };
      obj8.children = callback2(require(rule[25]).TableSwitchRow, obj9);
      tmp56 = callback2(require(rule[24]).TableRowGroup, obj8);
    }
    items5[1] = tmp56;
    obj10 = { style: tmp.section };
    obj11 = { variant: "text-sm/semibold", color: "text-subtle" };
    const intl5 = require(rule[15]).intl;
    obj11.children = intl5.string(stackNavigation(rule[16])["37z4a2"]);
    const items6 = [callback2(require(rule[14]).Text, obj11), ];
    const obj12 = { hasIcons: false };
    const obj13 = {};
    const intl6 = require(rule[15]).intl;
    obj13.label = intl6.string(stackNavigation(rule[16]).DsXytO);
    const obj14 = { variant: "text-md/normal" };
    let obj23 = require(rule[19]);
    obj14.children = obj23.formatTime(first1);
    obj13.trailing = callback2(require(rule[14]).Text, obj14);
    obj13.arrow = true;
    obj13.onPress = function handleStartTimePress() {
      const intl = tmp(rule[15]).intl;
    };
    const items7 = [callback2(require(rule[26]).TableRow, obj13), ];
    const obj15 = {};
    const intl7 = require(rule[15]).intl;
    obj15.label = intl7.string(stackNavigation(rule[16])["5SHDP6"]);
    const obj16 = { variant: "text-md/normal" };
    let obj26 = require(rule[19]);
    obj16.children = obj26.formatTime(first2);
    obj15.trailing = callback2(require(rule[14]).Text, obj16);
    obj15.arrow = true;
    obj15.onPress = function handleEndTimePress() {
      const intl = tmp(rule[15]).intl;
    };
    items7[1] = callback2(require(rule[26]).TableRow, obj15);
    obj12.children = items7;
    items6[1] = first2(require(rule[24]).TableRowGroup, obj12);
    obj10.children = items6;
    items5[2] = first2(closure_6, obj10);
    const obj17 = { style: tmp.section };
    const obj18 = { style: tmp.sectionHeader };
    const obj19 = { variant: "text-sm/semibold", color: "text-subtle" };
    const intl8 = require(rule[15]).intl;
    obj19.children = intl8.string(stackNavigation(rule[16]).HaV0Sg);
    const items8 = [callback2(require(rule[14]).Text, obj19), ];
    const obj20 = { variant: "text-sm/normal", color: "text-muted", children: formatResult };
    items8[1] = callback2(require(rule[14]).Text, obj20);
    obj18.children = items8;
    const items9 = [first2(closure_6, obj18), , ];
    const obj21 = { style: tmp.daysContainer };
    const DAYS_ORDERED = require(rule[19]).DAYS_ORDERED;
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
        (function handleDayToggle(closure_0) {
          outer2_15((items) => {
            const set = new Set(items);
            if (set.has(closure_0)) {
              set.delete(closure_0);
            } else {
              set.add(closure_0);
            }
            return set;
          });
        })(closure_0);
      };
      obj.accessibilityRole = "button";
      obj.accessibilityState = { selected: hasItem };
      obj.accessibilityLabel = dependencyMap[arg1];
      obj = { variant: "text-sm/semibold" };
      let str = "text-muted";
      if (hasItem) {
        str = "control-secondary-text-default";
      }
      obj.color = str;
      obj.children = dependencyMap[arg1];
      obj.children = closure_11(arg0(rule[14]).Text, obj);
      return closure_11(first, obj, arg0);
    });
    items9[1] = callback2(closure_6, obj21);
    let tmp78 = memo2.conflictingEntries.length > 0;
    if (tmp78) {
      const obj22 = { style: tmp.overlapWarningContent };
      obj23 = { conflictingEntries: memo2.conflictingEntries };
      obj22.children = callback2(closure_15, obj23);
      tmp78 = callback2(closure_6, obj22);
    }
    items9[2] = tmp78;
    obj17.children = items9;
    items5[3] = first2(closure_6, obj17);
    obj6.children = items5;
    obj5.children = first2(closure_6, obj6);
    const items10 = [callback2(closure_8, obj5), ];
    let obj24 = { bottom: true };
    let obj25 = { style: tmp.footer };
    let stringResult = callback2;
    let num15 = 28;
    let Button = require(rule[28]).Button;
    obj26 = {};
    let intl9 = require(rule[15]).intl;
    let intl10 = intl9.string;
    const tmp91 = stackNavigation(rule[16]);
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
    Button = callback2;
    intl9 = require;
    const obj27 = {};
    intl10 = require(rule[15]).intl;
    stringResult = intl10.string(require(rule[15]).t["ETE/oC"]);
    obj27.text = stringResult;
    obj27.onPress = function onPress() {
      return stackNavigation.goBack();
    };
    obj27.disabled = str;
    str = "secondary";
    obj27.variant = "secondary";
    obj27.size = "lg";
    num15 = callback2(require(rule[num15]).Button, obj27);
    obj26[1] = num15;
    obj25.children = obj26;
    obj25 = first2(closure_6, obj25);
    obj24.children = obj25;
    obj24 = callback2(require(rule[27]).SafeAreaPaddingView, obj24);
    items10[1] = obj24;
    obj4.children = items10;
    first2(closure_6, obj4);
    const stringResultResult = stringResult(Button, obj26);
    const tmp47 = first2;
    const tmp49 = callback2;
    const tmp50 = closure_8;
    const tmp51 = first2;
    const tmp63 = closure_6;
    const tmp73 = first2;
    const tmp83 = callback2;
    const tmp86 = first2;
    const tmp87 = closure_6;
  }
};
