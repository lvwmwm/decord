// Module ID: 15394
// Function ID: 15395
// Name: GuildProgressButton
// Dependencies: [19, 21, 1367, 712, 9502, 11898, 11901, 8015, 15395, 1236, 12012, 2]
// Exports: default, getScaledGuildProgressButtonHeight

// Module 15394 (GuildProgressButton)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  let completed;
  let obj = guild(11898);
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
  obj[0] = completed(15395);
  obj[0] = jsx(guild(8015).RowButton.Icon, { source: null });
  const intl = guild(1236).intl;
  obj[1] = intl.string(guild(1236).t.o3HK3d);
  obj[2] = subtitle;
  obj[3] = callback;
  obj[4] = jsx(completed(12012), { percent: percentComplete });
  return jsx(guild(8015).RowButton, { source: null });
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale, isRefreshEnabled) {
  const refreshToken = require(1367) /* useIsMobileVisualRefreshExperimentEnabled */.resolveRefreshToken(importDefault(712).modules.mobile.TABLE_ROW_PADDING, isRefreshEnabled);
  const obj = require(1367) /* useIsMobileVisualRefreshExperimentEnabled */;
  const sum = refreshToken + require(9502) /* map */.scaleTextLineHeight("text-md/semibold", fontScale);
  const obj2 = require(9502) /* map */;
  return sum + 2 * require(9502) /* map */.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
