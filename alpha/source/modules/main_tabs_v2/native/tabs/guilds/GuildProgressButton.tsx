// Module ID: 17760
// Function ID: 17761
// Name: GuildProgressButton
// Dependencies: [19, 21, 12969, 575, 5522, 13270, 13273, 7592, 17761, 1113, 13393, 2]
// Exports: default, getScaledGuildProgressButtonHeight

// Module 17760 (GuildProgressButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 5522 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12969 */;
import GuildProgressUtils from "GuildProgressUtils" /* 13270 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 13273 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  let obj = guild(13270);
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
  const RowButton = guild(7592).RowButton;
  ({ source: completed(17761) });
  const Icon = guild(7592).RowButton.Icon;
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
