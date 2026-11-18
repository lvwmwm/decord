// Module ID: 13409
// Function ID: 13410
// Name: GuildProgressItem
// Dependencies: [19, 21, 4823, 13288, 13292, 13291, 13410, 1113, 13411, 2]
// Exports: default

// Module 13409 (GuildProgressItem)
import Fragment from "Fragment" /* 21 */;
import GuildProgressUtils from "GuildProgressUtils" /* 13288 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 13291 */;
import GuildProgressCircleDefault from "GuildProgressCircle" /* 13411 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ icon: { width: 32, height: 32 } });
const result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressItem.tsx");

export default function GuildProgressItem(guild) {
  let fn;
  let intl;
  let obj3;
  guild = guild.guild;
  let completed;
  let tmp = closure_4();
  let obj = guild(completed[3]);
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  let obj2 = {
    onPress: function openGuildProgress() {
      const tmp = completed;
      if (!tmp) {
        const obj = GuildProgressActionCreatorsDefault;
        const progress = obj.createProgress(guild.id);
      }
      const obj2 = GuildProgressUtils;
      obj2.openActionSheet(guild);
    },
    source: obj3,
    iconStyle: tmp.icon,
    title: intl.string(guild(completed[7]).t["J2+r16"]),
    isCompleted: completed,
    renderEndComponent: fn
  };
  obj3 = { uri: numFinished(completed[6]) };
  const tmp4 = numFinished(completed[4]);
  intl = guild(completed[7]).intl;
  fn = undefined;
  const tmp3 = totalSteps;
  if (numFinished > 0) {
    if (numFinished < totalSteps) {
      fn = () => jsx(GuildProgressCircleDefault, { percent: 100 * numFinished / totalSteps, size: 32 });
    }
  }
  return tmp3(tmp4, obj2);
};
