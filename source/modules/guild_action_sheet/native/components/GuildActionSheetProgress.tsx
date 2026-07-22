// Module ID: 12867
// Function ID: 98331
// Name: GuildActionSheetProgress
// Dependencies: []
// Exports: default

// Module 12867 (GuildActionSheetProgress)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { color: importDefault(dependencyMap[3]).colors.TEXT_DEFAULT };
obj.title = obj;
obj.cardStyle = { marginHorizontal: importDefault(dependencyMap[3]).space.PX_16, padding: 0, marginBottom: importDefault(dependencyMap[3]).space.PX_24 };
let closure_4 = obj.createStyles(obj);
const obj1 = { marginHorizontal: importDefault(dependencyMap[3]).space.PX_16, padding: 0, marginBottom: importDefault(dependencyMap[3]).space.PX_24 };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default function GuildActionSheetProgress(guild) {
  let completed;
  let dismissed;
  guild = guild.guild;
  const tmp = callback();
  let obj = arg1(dependencyMap[4]);
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  ({ completed, dismissed } = iOSCompletionStates);
  let tmp3 = null;
  if (obj2.useIsEligibleForGuildProgress(guild)) {
    tmp3 = null;
    if (!completed) {
      tmp3 = null;
      if (dismissed) {
        obj = { style: tmp.cardStyle };
        obj = { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true };
        obj.children = jsx(importDefault(dependencyMap[6]), obj);
        tmp3 = jsx(arg1(dependencyMap[5]).Card, obj);
      }
    }
  }
  return tmp3;
};
