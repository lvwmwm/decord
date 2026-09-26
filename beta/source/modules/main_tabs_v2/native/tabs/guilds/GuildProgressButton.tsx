// Module ID: 16539
// Function ID: 16540
// Name: GuildProgressButton
// Dependencies: [19, 21, 12469, 576, 10414, 12757, 12760, 8905, 16540, 1115, 12872, 2]
// Exports: default, getScaledGuildProgressButtonHeight

// Module 16539 (GuildProgressButton)
import nativeDefault from "native" /* 576 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10414 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12469 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12757 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12760 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  const guildProgressStep = guild(12757).useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = noop.useEffect(() => {
    if (completed) {
      const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(guild.id);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = noop.useCallback(() => {
    if (!completed) {
      const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
    }
    GuildProgressUtils.openActionSheet(guild);
  }, items1);
  const obj2 = { icon: null, label: null, subLabel: null, onPress: null, trailing: null };
  let obj = guild(12757);
  obj2.icon = jsx(guild(8905).RowButton.Icon, { source: completed(16540) });
  const intl = guild(1115).intl;
  obj2.label = intl.string(guild(1115).t.o3HK3d);
  obj2.subLabel = subtitle;
  obj2.onPress = callback;
  obj2.trailing = jsx(completed(12872), { percent: percentComplete });
  return jsx(guild(8905).RowButton, { icon: null, label: null, subLabel: null, onPress: null, trailing: null });
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const sum = refreshToken + useScaledTextLineHeight.scaleTextLineHeight("text-md/semibold", fontScale);
  return sum + 2 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
