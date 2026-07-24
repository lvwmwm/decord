// Module ID: 8508
// Function ID: 67750
// Name: GuildEventRecurrences
// Dependencies: [31, 27, 33, 4130, 689, 8509, 4126, 1212, 21, 8511, 4543, 2]
// Exports: default

// Module 8508 (GuildEventRecurrences)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginTop: 16 } };
_createForOfIteratorHelperLoose = { marginTop: 8, marginBottom: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, maxHeight: 140 };
_createForOfIteratorHelperLoose.scrollView = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx");

export default function GuildEventRecurrences(guildEventId) {
  let canViewMoreRecurrences;
  let closure_4;
  let dependencyMap;
  let guildId;
  let hideViewMoreButton;
  let importDefault;
  let recurrenceRule;
  let recurrenceStartTimes;
  guildEventId = guildEventId.guildEventId;
  ({ onRecurrencePress: importDefault, activeRecurrenceId: dependencyMap } = guildEventId);
  ({ guildId, recurrenceRule, hideViewMoreButton } = guildEventId);
  ref = ref.useRef(null);
  const tmp2 = _createForOfIteratorHelperLoose();
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes: closure_4 } = importDefault(8509)(guildEventId, guildId, recurrenceRule));
  let obj = { style: tmp2.container };
  obj = { variant: "heading-md/semibold" };
  const intl = guildEventId(1212).intl;
  obj.children = intl.string(guildEventId(1212).t["D/jjoa"]);
  const items = [callback(guildEventId(4126).Text, obj), , ];
  obj = {
    style: tmp2.scrollView,
    ref,
    children: recurrenceStartTimes.map((getTime) => {
      let obj = outer1_1(outer1_2[8]);
      const fromTimestampResult = obj.fromTimestamp(getTime.getTime());
      obj = { recurrenceId: fromTimestampResult, guildEventId, onPress: closure_1, isActive: fromTimestampResult === closure_2 };
      return outer1_6(outer1_1(outer1_2[9]), obj, fromTimestampResult);
    })
  };
  items[1] = callback(closure_5, obj);
  if (canViewMoreRecurrences) {
    canViewMoreRecurrences = !hideViewMoreButton;
  }
  if (canViewMoreRecurrences) {
    const obj1 = {};
    const intl2 = guildEventId(1212).intl;
    obj1.text = intl2.string(guildEventId(1212).t["8O7Hpy"]);
    obj1.onPress = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      callback();
      const current = ref.current;
      if (null != current) {
        current.scrollToEnd();
      }
    };
    obj1.size = "sm";
    canViewMoreRecurrences = callback(guildEventId(4543).Button, obj1);
  }
  items[2] = canViewMoreRecurrences;
  obj.children = items;
  return closure_7(closure_4, obj);
};
