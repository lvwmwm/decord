// Module ID: 15073
// Function ID: 114810
// Name: GuildProgressButton
// Dependencies: [31, 33, 1324, 689, 9921, 11537, 11540, 7639, 15074, 1212, 11651, 2]
// Exports: default, getScaledGuildProgressButtonHeight

// Module 15073 (GuildProgressButton)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  let obj = guild(11537);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
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
  obj = {};
  obj = { source: completed(15074) };
  obj.icon = jsx(guild(7639).RowButton.Icon, { source: completed(15074) });
  const intl = guild(1212).intl;
  obj.label = intl.string(guild(1212).t.o3HK3d);
  obj.subLabel = subtitle;
  obj.onPress = callback;
  obj.trailing = jsx(completed(11651), { percent: percentComplete });
  return jsx(guild(7639).RowButton, { source: completed(15074) });
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale, isRefreshEnabled) {
  const refreshToken = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.resolveRefreshToken(importDefault(689).modules.mobile.TABLE_ROW_PADDING, isRefreshEnabled);
  const obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const sum = refreshToken + require(9921) /* scaleLineHeight */.scaleTextLineHeight("text-md/semibold", fontScale);
  const obj2 = require(9921) /* scaleLineHeight */;
  return sum + 2 * require(9921) /* scaleLineHeight */.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
