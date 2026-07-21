// Module ID: 11869
// Function ID: 91875
// Name: GuildProfileGameRow
// Dependencies: []
// Exports: default

// Module 11869 (GuildProfileGameRow)
function GuildProfileGameRow(activityLevel) {
  let clickable;
  let game;
  ({ game, clickable } = activityLevel);
  let obj = { gameId: game.id, source: arg1(dependencyMap[4]).GameProfileSources.GuildProfileGames, trackEntryPointImpression: clickable };
  const tmpResult = importDefault(dependencyMap[3])(obj);
  const arg1 = tmpResult;
  if (clickable) {
    clickable = null != tmpResult;
  }
  obj = { icon: jsx(importDefault(dependencyMap[6]), { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: clickable };
  let fn;
  if (clickable) {
    fn = () => tmpResult();
  }
  obj.onPress = fn;
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[7]).createStyles({ container: {} });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  const id = profile.id;
  const arg1 = id;
  const importDefault = profile.gameActivity;
  let obj = arg1(dependencyMap[8]);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  let obj1 = arg1(dependencyMap[9]);
  const dependencyMap = obj1.useGuildProfileGameProfilesExperiment({ location: "guild_profile_games_action_sheet" }).enabled;
  let obj2 = arg1(dependencyMap[10]);
  const intl = arg1(dependencyMap[11]).intl;
  let str = intl.format(arg1(dependencyMap[11]).t.vuAVo7, { serverName: profile.name });
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
  obj2 = { title: str, hasIcons: true, children: allGuildProfileGames.map((game) => callback(closure_7, { game, activityLevel: gameActivity[game.id], clickable: enabled }, game.id)) };
  obj1.children = jsx(arg1(dependencyMap[17]).TableRowGroup, obj2);
  obj.children = <View {...obj1} />;
  obj.children = jsx(arg1(dependencyMap[16]).BottomSheetScrollView, obj);
  return jsx(arg1(dependencyMap[15]).BottomSheet, obj);
};
