// Module ID: 14420
// Function ID: 14421
// Name: GuildProfileCreateTagUpsell
// Dependencies: [19, 17, 21, 5004, 558, 576, 14421, 14423, 5246, 14424, 7314, 5270, 1125, 2]

// Module 14420 (GuildProfileCreateTagUpsell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7314 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 14424 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ upsell: { minHeight: 44, alignItems: "center", justifyContent: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileCreateTagUpsell(guildId) {
  let creatableGuilds;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(7);
  guildId = guildId.guildId;
  const tmp4 = closure_5();
  const obj2 = guildId(14421);
  const guildTagCreationUpsell = obj2.useGuildTagCreationUpsell("GuildProfileCreateTagUpsell", creatableGuilds(14423));
  creatableGuilds = guildTagCreationUpsell.creatableGuilds;
  if (guildTagCreationUpsell.isUpsellVisible) {
    if (cResult[0] === creatableGuilds) {
      let tmp7;
      let tmp9;
      if (cResult[1] === guildId) {
        tmp7 = cResult[2];
      }
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const Text = tmp(5270).Text;
        const intl = tmp(1125).intl;
        const tmp11 = <Text variant="text-md/medium" color="text-muted">{intl.string(guildId(1125).t.J0YWRq)}</Text>;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp7) {
        let tmp12;
        if (cResult[5] === tmp4.upsell) {
          tmp12 = cResult[6];
        }
        return tmp12;
      }
      const tmp15 = <Pressable style={tmp4.upsell} role="button" onPress={tmp7}>{tmp9}</Pressable>;
      cResult[4] = tmp7;
      cResult[5] = tmp4.upsell;
      cResult[6] = tmp15;
      tmp12 = tmp15;
    }
    function handlePress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      const tmp2 = openGuildTagCreateFlowDefault;
      tmp2(creatableGuilds, AnalyticsLocationDefault.GUILD_PROFILE);
    }
    cResult[0] = creatableGuilds;
    cResult[1] = guildId;
    cResult[2] = handlePress;
    tmp7 = handlePress;
  } else {
    return null;
  }
}) : (function GuildProfileCreateTagUpsell(guildId) {
  let intl;
  guildId = guildId.guildId;
  let creatableGuilds;
  let tmp2 = guildId;
  const tmp = closure_5();
  let obj = guildId(14421);
  const guildTagCreationUpsell = obj.useGuildTagCreationUpsell("GuildProfileCreateTagUpsell", creatableGuilds(14423));
  creatableGuilds = guildTagCreationUpsell.creatableGuilds;
  let tmp5 = null;
  if (guildTagCreationUpsell.isUpsellVisible) {
    ({ variant: "text-md/medium", color: "text-muted", children: intl.string(tmp2(1125).t.J0YWRq) });
    const Text = tmp2(5270).Text;
    intl = tmp2(1125).intl;
    tmp5 = <Pressable style={tmp.upsell} role="button" onPress={function handlePress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      const tmp2 = openGuildTagCreateFlowDefault;
      tmp2(creatableGuilds, AnalyticsLocationDefault.GUILD_PROFILE);
    }}>{null}</Pressable>;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCreateTagUpsell.tsx");

export default tmp3;
