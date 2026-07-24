// Module ID: 11909
// Function ID: 92192
// Name: GuildProfileGameRow
// Dependencies: [31, 27, 33, 8631, 8642, 5165, 11903, 4130, 11907, 11908, 7186, 1212, 4098, 8621, 1934, 5187, 5189, 5501, 2]
// Exports: default

// Module 11909 (GuildProfileGameRow)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
function GuildProfileGameRow(activityLevel) {
  let clickable;
  let game;
  ({ game, clickable } = activityLevel);
  let obj = { gameId: game.id, source: require(8642) /* GameProfileEmbedAction */.GameProfileSources.GuildProfileGames, trackEntryPointImpression: clickable };
  const tmpResult = importDefault(8631)(obj);
  require = tmpResult;
  if (clickable) {
    clickable = null != tmpResult;
  }
  obj = { icon: jsx(importDefault(11903), { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: clickable };
  let fn;
  if (clickable) {
    fn = () => tmpResult();
  }
  obj.onPress = fn;
  return jsx(require(5165) /* TableRowInner */.TableRow, { icon: jsx(importDefault(11903), { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: clickable });
}
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  const id = profile.id;
  const gameActivity = profile.gameActivity;
  let obj = id(enabled[8]);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  let obj1 = id(enabled[9]);
  enabled = obj1.useGuildProfileGameProfilesExperiment({ location: "guild_profile_games_action_sheet" }).enabled;
  let obj2 = id(enabled[10]);
  const intl = id(enabled[11]).intl;
  let str = intl.format(id(enabled[11]).t.vuAVo7, { serverName: profile.name });
  const items = [id];
  str = str.toString();
  const callback = React.useCallback(() => {
    let obj = gameActivity(enabled[12]);
    obj = { guildId: id };
    obj.openLazy(id(enabled[14])(enabled[13], enabled.paths), "GuildProfileActionSheet:" + id, obj);
  }, items);
  obj = { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300 };
  obj = {};
  obj1 = { style: callback().container };
  obj2 = { title: str, hasIcons: true, children: allGuildProfileGames.map((game) => outer1_5(outer1_7, { game, activityLevel: gameActivity[game.id], clickable: enabled }, game.id)) };
  obj1.children = jsx(id(enabled[17]).TableRowGroup, { title: str, hasIcons: true, children: allGuildProfileGames.map((game) => outer1_5(outer1_7, { game, activityLevel: gameActivity[game.id], clickable: enabled }, game.id)) });
  obj.children = <View style={callback().container} />;
  obj.children = jsx(id(enabled[16]).BottomSheetScrollView, {});
  return jsx(id(enabled[15]).BottomSheet, {});
};
