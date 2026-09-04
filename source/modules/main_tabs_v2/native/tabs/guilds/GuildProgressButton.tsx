// Module ID: 16119
// Function ID: 16120
// Name: GuildProgressButton
// Dependencies: [19, 21, 12119, 709, 10048, 12406, 12409, 8525, 16120, 1233, 12522, 2]
// Exports: default, getScaledGuildProgressButtonHeight

// Module 16119 (GuildProgressButton)
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 10048 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 12119 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  let completed;
  let obj = guild(12406);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  completed = guildProgressStep.completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = React.useEffect(() => {
    if (completed) {
      const result = completed(closure_1_2[6]).markCompletedProgressSeen(guild.id);
      const obj = completed(closure_1_2[6]);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = React.useCallback(() => {
    if (!completed) {
      const progress = completed(closure_1_2[6]).createProgress(guild.id);
      const obj = completed(closure_1_2[6]);
    }
    guild(closure_1_2[5]).openActionSheet(guild);
  }, items1);
  obj = { icon: null, label: null, subLabel: null, onPress: null, trailing: null };
  obj = { source: completed(16120) };
  obj[0] = jsx(guild(8525).RowButton.Icon, { source: completed(16120) });
  const intl = guild(1233).intl;
  obj[1] = intl.string(guild(1233).t.o3HK3d);
  obj[2] = subtitle;
  obj[3] = callback;
  obj[4] = jsx(completed(12522), { percent: percentComplete });
  return jsx(guild(8525).RowButton, { source: completed(16120) });
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj = useIsMobileVisualRefreshExperimentEnabled;
  const sum = refreshToken + map.scaleTextLineHeight("text-md/semibold", fontScale);
  const obj2 = map;
  return sum + 2 * map.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
