// Module ID: 15400
// Function ID: 15401
// Name: GuildActionSheetGameProfileButton
// Dependencies: [19, 21, 8746, 8755, 15398, 15399, 7944, 1112, 7757, 5257, 15401, 15377, 2]
// Exports: default

// Module 15400 (GuildActionSheetGameProfileButton)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8746 */;
import GuildActionSheetUtils from "GuildActionSheetUtils" /* 15377 */;
import GuildActionSheetAnalyticsUtils from "GuildActionSheetAnalyticsUtils" /* 15398 */;
import GuildActionSheetTypes from "GuildActionSheetTypes" /* 15399 */;
import GameProfilesServerPreviewExperiment from "GameProfilesServerPreviewExperiment" /* 15401 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

let tmp;
const AssetRegistryDefault = tmp(7757);
function GameProfileButton(applicationId) {
  let closure_1;
  const guildId = applicationId.guildId;
  importDefault = undefined;
  let obj = { applicationId: applicationId.applicationId, source: guildId(8755).GameProfileSources.GuildActionSheet, trackEntryPointImpression: true };
  let obj2 = {
    onOpened(gameId) {
      const obj = GuildActionSheetAnalyticsUtils;
      const obj2 = { guildId, option: GuildActionSheetTypes.GuildActionSheetOptions.GAME_PROFILE, canAccessSettings: false, gameId };
      return obj.trackGuildActionSheetOptionPressed(obj2);
    }
  };
  const tmp3 = useOpenGameProfileModalDefault;
  const tmp3Result = tmp3(obj, obj2);
  importDefault = tmp3Result;
  let tmp6 = null;
  if (null != tmp3Result) {
    const IconButton = tmp4(7944).IconButton;
    const intl = tmp4(1112).intl;
    tmp6 = <IconButton variant="secondary" label={intl.string(guildId(1112).t.f7aVGn)} icon={AssetRegistryDefault} grow onPress={function onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      closure_1();
    }} />;
  }
  return tmp6;
}
function ExperimentGate(children) {
  children = children.children;
  let tmp = null;
  const obj = GameProfilesServerPreviewExperiment;
  if (obj.useIsGameProfilesServerPreviewEnabled({ location: "guild_action_sheet" })) {
    tmp = children;
  }
  return tmp;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetGameProfileButton.tsx");

export default function GuildActionSheetGameProfileButton(guild) {
  guild = guild.guild;
  const gameApplicationIds = guild.gameApplicationIds;
  let length;
  const obj = GuildActionSheetUtils;
  const canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  if (gameApplicationIds != null) {
    length = gameApplicationIds.length;
  }
  let first = null;
  if (1 === length) {
    first = guild.gameApplicationIds[0];
  }
  let tmp3 = null;
  if (!canAccessSettings) {
    tmp3 = null;
    if (null != first) {
      tmp3 = <ExperimentGate>{null}</ExperimentGate>;
    }
  }
  return tmp3;
};
