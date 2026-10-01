// Module ID: 12085
// Function ID: 12086
// Name: GuildProgressItem
// Dependencies: [19, 21, 4836, 11967, 11971, 11970, 12086, 1115, 12087, 2]
// Exports: default

// Module 12085 (GuildProgressItem)
import Fragment from "Fragment" /* 21 */;
import GuildProgressUtils from "GuildProgressUtils" /* 11967 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 11970 */;
import GuildProgressCircleDefault from "GuildProgressCircle" /* 12087 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
    onPress() {
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
    renderEndComponent: fn,
    fullWidth: true
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
