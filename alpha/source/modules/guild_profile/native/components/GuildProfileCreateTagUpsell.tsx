// Module ID: 14942
// Function ID: 14943
// Name: GuildProfileCreateTagUpsell
// Dependencies: [19, 17, 21, 5141, 14943, 14945, 5382, 14946, 7487, 5761, 1113, 2]
// Exports: default

// Module 14942 (GuildProfileCreateTagUpsell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 14946 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
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
  let obj = guildId(14943);
  const guildTagCreationUpsell = obj.useGuildTagCreationUpsell("GuildProfileCreateTagUpsell", creatableGuilds(14945));
  creatableGuilds = guildTagCreationUpsell.creatableGuilds;
  let tmp5 = null;
  if (guildTagCreationUpsell.isUpsellVisible) {
    ({ variant: "body-md/medium", color: "text-muted", children: intl.string(tmp2(1113).t.J0YWRq) });
    const Text = tmp2(5761).Text;
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
