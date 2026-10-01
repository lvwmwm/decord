// Module ID: 9087
// Function ID: 9088
// Name: GuildEventRecurrences
// Dependencies: [19, 17, 21, 4836, 576, 9088, 4832, 1115, 11, 9090, 5281, 2]
// Exports: default

// Module 9087 (GuildEventRecurrences)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import useGuildEventRecurrencesDefault from "useGuildEventRecurrences" /* 9088 */;
import GuildEventRecurrenceDefault from "GuildEventRecurrence" /* 9090 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { marginTop: 16 }, scrollView: obj2 };
obj2 = { marginTop: 8, marginBottom: 8, borderRadius: nativeDefault.radii.sm, maxHeight: 140 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx");

export default function GuildEventRecurrences(guildEventId) {
  let _undefined;
  let c4;
  let canViewMoreRecurrences;
  let guildId;
  let hideViewMoreButton;
  let intl;
  let intl2;
  let items;
  let onPress;
  let recurrenceRule;
  let recurrenceStartTimes;
  guildEventId = guildEventId.guildEventId;
  ({ onRecurrencePress: importDefault, activeRecurrenceId: dependencyMap } = guildEventId);
  let ref;
  c4 = undefined;
  ({ guildId, recurrenceRule, hideViewMoreButton } = guildEventId);
  ref = ref.useRef(null);
  const tmp2 = closure_8();
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes: c4 } = useGuildEventRecurrencesDefault(guildEventId, guildId, recurrenceRule));
  let obj = { style: tmp2.container, children: items };
  let obj2 = { variant: "heading-md/semibold", children: intl.string(guildEventId(1115).t["D/jjoa"]) };
  useGuildEventRecurrencesDefault(guildEventId, guildId, recurrenceRule);
  const Text = guildEventId(4832).Text;
  intl = guildEventId(1115).intl;
  items = [closure_6(Text, obj2), , ];
  const obj3 = {
    style: tmp2.scrollView,
    ref,
    children: recurrenceStartTimes.map((getTime) => {
      const obj = SnowflakeUtilsDefault;
      const fromTimestampResult = obj.fromTimestamp(getTime.getTime());
      const obj2 = { recurrenceId: fromTimestampResult, guildEventId, onPress: importDefault, isActive: fromTimestampResult === dependencyMap };
      return metroRequire(GuildEventRecurrenceDefault, obj2, fromTimestampResult);
    })
  };
  items[1] = closure_6(closure_5, obj3);
  const tmp5 = closure_7;
  const tmp6 = c4;
  const tmp7 = closure_6;
  if (canViewMoreRecurrences) {
    canViewMoreRecurrences = !hideViewMoreButton;
  }
  if (canViewMoreRecurrences) {
    const obj4 = {
      text: intl2.string(guildEventId(1115).t["8O7Hpy"]),
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          _undefined();
          const current = ref.current;
          if (current != null) {
            current.scrollToEnd();
          }
        },
      size: "sm"
    };
    const Button = tmp8(5281).Button;
    intl2 = tmp8(1115).intl;
    canViewMoreRecurrences = tmp7(Button, obj4);
  }
  items[2] = canViewMoreRecurrences;
  return tmp5(tmp6, obj);
};
