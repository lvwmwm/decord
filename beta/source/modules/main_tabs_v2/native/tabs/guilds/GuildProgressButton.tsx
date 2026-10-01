// Module ID: 15829
// Function ID: 15830
// Name: GuildProgressButton
// Dependencies: [19, 21, 11669, 576, 9578, 11967, 11970, 8055, 15830, 1115, 12087, 2]
// Exports: default, getScaledGuildProgressButtonHeight

// Module 15829 (GuildProgressButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 11669 */;
import GuildProgressUtils from "GuildProgressUtils" /* 11967 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 11970 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  let obj = guild(11967);
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
  const RowButton = guild(8055).RowButton;
  ({ source: completed(15830) });
  const Icon = guild(8055).RowButton.Icon;
  const intl = guild(1115).intl;
  return <RowButton icon={null} label={intl.string(guild(1115).t.o3HK3d)} subLabel={subtitle} onPress={callback} trailing={null} />;
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const obj = MobileVisualRefreshExperiment;
  const refreshToken = obj.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj2 = useScaledTextLineHeight;
  const sum = refreshToken + obj2.scaleTextLineHeight("text-md/semibold", fontScale);
  const obj3 = useScaledTextLineHeight;
  return sum + 2 * obj3.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
