// Module ID: 12722
// Function ID: 12723
// Name: GuildProgressItem
// Dependencies: [19, 21, 4636, 12607, 12611, 12610, 6445, 1114, 12723, 2]
// Exports: default

// Module 12722 (GuildProgressItem)
import GuildProgressUtils from "GuildProgressUtils" /* 12607 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12610 */;
import GuildProgressCircleDefault from "GuildProgressCircle" /* 12723 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_4 = createStyles.createStyles({ icon: { width: 32, height: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressItem.tsx");

export default function GuildProgressItem(guild) {
  guild = guild.guild;
  let completed;
  const tmp = closure_4();
  const iOSCompletionStates = guild(completed[3]).useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  const obj2 = {
    onPress() {
      if (!completed) {
        const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
      }
      GuildProgressUtils.openActionSheet(guild);
    },
    source: null,
    iconStyle: null,
    title: null,
    isCompleted: null,
    renderEndComponent: null,
    fullWidth: true
  };
  const obj3 = { uri: null };
  let obj = guild(completed[3]);
  const tmp3 = totalSteps;
  obj3.uri = numFinished(completed[6]);
  obj2.source = obj3;
  obj2.iconStyle = tmp.icon;
  const intl = guild(completed[7]).intl;
  obj2.title = intl.string(guild(completed[7]).t["J2+r16"]);
  obj2.isCompleted = completed;
  let fn;
  if (numFinished > 0) {
    if (numFinished < totalSteps) {
      fn = () => jsx(GuildProgressCircleDefault, { percent: 100 * numFinished / totalSteps, size: 32 });
    }
  }
  obj2.renderEndComponent = fn;
  return tmp3(numFinished(completed[4]), obj2);
};
