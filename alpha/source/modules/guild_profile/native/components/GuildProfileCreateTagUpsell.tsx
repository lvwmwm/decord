// Module ID: 14956
// Function ID: 14957
// Name: GuildProfileCreateTagUpsell
// Dependencies: [19, 17, 21, 5143, 14957, 14959, 5384, 14960, 7490, 5763, 1113, 2]
// Exports: default

// Module 14956 (GuildProfileCreateTagUpsell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7490 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 14960 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ upsell: { minHeight: 44, alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCreateTagUpsell.tsx");

export default function GuildProfileCreateTagUpsell(guildId) {
  let intl;
  guildId = guildId.guildId;
  let creatableGuilds;
  let tmp2 = guildId;
  const tmp = closure_5();
  let obj = guildId(14957);
  const guildTagCreationUpsell = obj.useGuildTagCreationUpsell("GuildProfileCreateTagUpsell", creatableGuilds(14959));
  creatableGuilds = guildTagCreationUpsell.creatableGuilds;
  let tmp5 = null;
  if (guildTagCreationUpsell.isUpsellVisible) {
    ({ variant: "body-md/medium", color: "text-muted", children: intl.string(tmp2(1113).t.J0YWRq) });
    const Text = tmp2(5763).Text;
    intl = tmp2(1113).intl;
    tmp5 = <Pressable style={tmp.upsell} role="button" onPress={function handlePress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      const tmp2 = openGuildTagCreateFlowDefault;
      tmp2(creatableGuilds, AnalyticsLocationDefault.GUILD_PROFILE);
    }}>{null}</Pressable>;
  }
  return tmp5;
};
