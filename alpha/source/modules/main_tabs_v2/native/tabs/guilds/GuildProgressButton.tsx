// Module ID: 18539
// Function ID: 18540
// Name: GuildProgressButton
// Dependencies: [19, 21, 12747, 575, 11240, 14278, 14281, 8324, 18540, 1113, 14396, 2]
// Exports: default, getScaledGuildProgressButtonHeight

// Module 18539 (GuildProgressButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11240 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12747 */;
import GuildProgressUtils from "GuildProgressUtils" /* 14278 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 14281 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  let obj = guild(14278);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = react.useEffect(() => {
    const tmp = completed;
    if (tmp) {
      const obj = GuildProgressActionCreatorsDefault;
      const result = obj.markCompletedProgressSeen(guild.id);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = react.useCallback(() => {
    const tmp = completed;
    if (!tmp) {
      const obj = GuildProgressActionCreatorsDefault;
      const progress = obj.createProgress(guild.id);
    }
    const obj2 = GuildProgressUtils;
    obj2.openActionSheet(guild);
  }, items1);
  const RowButton = guild(8324).RowButton;
  ({ source: completed(18540) });
  const Icon = guild(8324).RowButton.Icon;
  const intl = guild(1113).intl;
  return <RowButton icon={null} label={intl.string(guild(1113).t.o3HK3d)} subLabel={subtitle} onPress={callback} trailing={null} />;
};
export function getScaledGuildProgressButtonHeight(fontScale) {
  const obj = MobileVisualRefreshExperiment;
  const refreshToken = obj.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj2 = useScaledTextLineHeight;
  const sum = refreshToken + obj2.scaleTextLineHeight("body-md/semibold", fontScale);
  const obj3 = useScaledTextLineHeight;
  return sum + 2 * obj3.scaleTextLineHeight("body-xs/medium", fontScale) + refreshToken;
}
