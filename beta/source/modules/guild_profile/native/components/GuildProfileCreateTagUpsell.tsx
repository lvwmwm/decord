// Module ID: 13815
// Function ID: 13816
// Name: GuildProfileCreateTagUpsell
// Dependencies: [19, 17, 21, 4913, 13816, 13818, 5127, 13819, 7539, 5504, 1112, 2]
// Exports: default

// Module 13815 (GuildProfileCreateTagUpsell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 13819 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
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
  let obj = guildId(13816);
  const guildTagCreationUpsell = obj.useGuildTagCreationUpsell("GuildProfileCreateTagUpsell", creatableGuilds(13818));
  creatableGuilds = guildTagCreationUpsell.creatableGuilds;
  let tmp5 = null;
  if (guildTagCreationUpsell.isUpsellVisible) {
    ({ variant: "body-md/medium", color: "text-muted", children: intl.string(tmp2(1112).t.J0YWRq) });
    const Text = tmp2(5504).Text;
    intl = tmp2(1112).intl;
    tmp5 = <Pressable style={tmp.upsell} role="button" onPress={function handlePress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      const tmp2 = openGuildTagCreateFlowDefault;
      tmp2(creatableGuilds, AnalyticsLocationDefault.GUILD_PROFILE);
    }}>{null}</Pressable>;
  }
  return tmp5;
};
