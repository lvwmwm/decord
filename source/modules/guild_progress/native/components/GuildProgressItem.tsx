// Module ID: 11612
// Function ID: 90190
// Name: GuildProgressItem
// Dependencies: []
// Exports: default

// Module 11612 (GuildProgressItem)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles({ icon: { "Null": false, "Null": false } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_progress/native/components/GuildProgressItem.tsx");

export default function GuildProgressItem(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[3]);
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  const importDefault = numFinished;
  const completed = iOSCompletionStates.completed;
  const dependencyMap = completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  const jsx = totalSteps;
  obj = {
    onPress() {
      if (!completed) {
        const progress = numFinished(completed[5]).createProgress(guild.id);
        const obj = numFinished(completed[5]);
      }
      guild(completed[3]).openActionSheet(guild);
    }
  };
  obj = {};
  const tmp = callback();
  const tmp3 = jsx;
  obj.uri = importDefault(dependencyMap[6]);
  obj.source = obj;
  obj.iconStyle = tmp.icon;
  const intl = arg1(dependencyMap[7]).intl;
  obj.title = intl.string(arg1(dependencyMap[7]).t.J2+r16);
  obj.isCompleted = completed;
  let fn;
  if (numFinished > 0) {
    if (numFinished < totalSteps) {
      fn = () => totalSteps(numFinished(completed[8]), { percent: 100 * numFinished / totalSteps, size: 32 });
    }
  }
  obj.renderEndComponent = fn;
  obj.fullWidth = true;
  return tmp3(importDefault(dependencyMap[4]), obj);
};
