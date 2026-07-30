// Module ID: 15162
// Function ID: 15163
// Name: GuildProgressButton
// Dependencies: [19, 21, 1348, 712, 9908, 11562, 11565, 7634, 15163, 1236, 11680, 2]
// Exports: default, getScaledGuildProgressButtonHeight

// Module 15162 (GuildProgressButton)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  let completed;
  let obj = guild(11562);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  completed = guildProgressStep.completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = React.useEffect(() => {
    if (completed) {
      const result = completed(outer1_2[6]).markCompletedProgressSeen(guild.id);
      const obj = completed(outer1_2[6]);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = React.useCallback(() => {
    if (!completed) {
      const progress = completed(outer1_2[6]).createProgress(guild.id);
      const obj = completed(outer1_2[6]);
    }
    guild(outer1_2[5]).openActionSheet(guild);
  }, items1);
  obj = { icon: null, label: null, subLabel: null, onPress: null, trailing: null };
  obj = { source: null };
  obj[0] = completed(15163);
  obj[0] = jsx(guild(7634).RowButton.Icon, { source: null });
  const intl = guild(1236).intl;
  obj[1] = intl.string(guild(1236).t.o3HK3d);
  obj[2] = subtitle;
  obj[3] = callback;
  obj[4] = jsx(completed(11680), { percent: percentComplete });
  return jsx(guild(7634).RowButton, { source: null });
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale, isRefreshEnabled) {
  const refreshToken = require(1348) /* useIsMobileVisualRefreshExperimentEnabled */.resolveRefreshToken(importDefault(712).modules.mobile.TABLE_ROW_PADDING, isRefreshEnabled);
  const obj = require(1348) /* useIsMobileVisualRefreshExperimentEnabled */;
  const sum = refreshToken + require(9908) /* map */.scaleTextLineHeight("text-md/semibold", fontScale);
  const obj2 = require(9908) /* map */;
  return sum + 2 * require(9908) /* map */.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
