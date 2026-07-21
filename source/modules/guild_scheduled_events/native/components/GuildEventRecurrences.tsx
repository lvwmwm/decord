// Module ID: 8457
// Function ID: 67473
// Name: GuildEventRecurrences
// Dependencies: []
// Exports: default

// Module 8457 (GuildEventRecurrences)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { marginTop: 16 } };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.scrollView = obj;
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx");

export default function GuildEventRecurrences(guildEventId) {
  let canViewMoreRecurrences;
  let guildId;
  let hideViewMoreButton;
  let recurrenceRule;
  let recurrenceStartTimes;
  guildEventId = guildEventId.guildEventId;
  const arg1 = guildEventId;
  ({ onRecurrencePress: closure_1, activeRecurrenceId: closure_2 } = guildEventId);
  ({ guildId, recurrenceRule, hideViewMoreButton } = guildEventId);
  const ref = React.useRef(null);
  const React = ref;
  const tmp2 = callback2();
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes: closure_4 } = importDefault(dependencyMap[5])(guildEventId, guildId, recurrenceRule));
  let obj = { style: tmp2.container };
  obj = { variant: "heading-md/semibold" };
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.D/jjoa);
  const items = [callback(arg1(dependencyMap[6]).Text, obj), , ];
  obj = {
    style: tmp2.scrollView,
    ref,
    children: recurrenceStartTimes.map((getTime) => {
      let obj = callback(closure_2[8]);
      const fromTimestampResult = obj.fromTimestamp(getTime.getTime());
      obj = { recurrenceId: fromTimestampResult, guildEventId, onPress: callback, isActive: fromTimestampResult === closure_2 };
      return callback3(callback(closure_2[9]), obj, fromTimestampResult);
    })
  };
  items[1] = callback(closure_5, obj);
  if (canViewMoreRecurrences) {
    canViewMoreRecurrences = !hideViewMoreButton;
  }
  if (canViewMoreRecurrences) {
    const obj1 = {};
    const intl2 = arg1(dependencyMap[7]).intl;
    obj1.text = intl2.string(arg1(dependencyMap[7]).t.8O7Hpy);
    obj1.onPress = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      callback2();
      const current = ref.current;
      if (null != current) {
        current.scrollToEnd();
      }
    };
    obj1.size = "sm";
    canViewMoreRecurrences = callback(arg1(dependencyMap[10]).Button, obj1);
  }
  items[2] = canViewMoreRecurrences;
  obj.children = items;
  return closure_7(closure_4, obj);
};
