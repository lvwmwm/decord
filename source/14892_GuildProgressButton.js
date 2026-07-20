// Module ID: 14892
// Function ID: 112220
// Name: GuildProgressButton
// Dependencies: []
// Exports: default, getScaledGuildProgressButtonHeight

// Module 14892 (GuildProgressButton)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[5]);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
  const importDefault = completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = React.useEffect(() => {
    if (completed) {
      const result = completed(closure_2[6]).markCompletedProgressSeen(guild.id);
      const obj = completed(closure_2[6]);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = React.useCallback(() => {
    if (!completed) {
      const progress = completed(closure_2[6]).createProgress(guild.id);
      const obj = completed(closure_2[6]);
    }
    guild(closure_2[5]).openActionSheet(guild);
  }, items1);
  obj = {};
  obj = { source: importDefault(dependencyMap[8]) };
  obj.icon = jsx(arg1(dependencyMap[7]).RowButton.Icon, obj);
  const intl = arg1(dependencyMap[9]).intl;
  obj.label = intl.string(arg1(dependencyMap[9]).t.o3HK3d);
  obj.subLabel = subtitle;
  obj.onPress = callback;
  obj.trailing = jsx(importDefault(dependencyMap[10]), { percent: percentComplete });
  return jsx(arg1(dependencyMap[7]).RowButton, obj);
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale, isRefreshEnabled) {
  const refreshToken = isRefreshEnabled(dependencyMap[2]).resolveRefreshToken(importDefault(dependencyMap[3]).modules.mobile.TABLE_ROW_PADDING, isRefreshEnabled);
  const obj = isRefreshEnabled(dependencyMap[2]);
  const sum = refreshToken + isRefreshEnabled(dependencyMap[4]).scaleTextLineHeight("text-md/semibold", fontScale);
  const obj2 = isRefreshEnabled(dependencyMap[4]);
  return sum + 2 * isRefreshEnabled(dependencyMap[4]).scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
