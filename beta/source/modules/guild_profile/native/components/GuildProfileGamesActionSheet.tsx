// Module ID: 10060
// Function ID: 10061
// Name: GuildProfileGamesActionSheet
// Dependencies: [19, 17, 21, 8978, 8989, 5854, 10055, 4788, 10059, 8471, 1115, 4755, 10046, 1980, 7427, 6901, 5936, 2]
// Exports: default

// Module 10060 (GuildProfileGamesActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import TableRow from "TableRow" /* 5854 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8978 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8989 */;
import components_GameIconDefault from "components/GameIcon" /* 10055 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildProfileGameRow(activityLevel) {
  const game = activityLevel.game;
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmpResult = useOpenGameProfileModalDefault(obj);
  closure_0 = tmpResult;
  const obj2 = { icon: jsx(components_GameIconDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: null != tmpResult, onPress: null };
  let fn;
  if (null != tmpResult) {
    fn = () => closure_0();
  }
  obj2.onPress = fn;
  return jsx(TableRow.TableRow, { icon: jsx(components_GameIconDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: null != tmpResult, onPress: null });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  const id = profile.id;
  const gameActivity = profile.gameActivity;
  const tmp = closure_7();
  const allGuildProfileGames = id(10059).useAllGuildProfileGames(profile);
  let obj = id(10059);
  const intl = id(1115).intl;
  const obj2 = id(8471);
  const items = [id];
  const str = intl.format(id(1115).t.vuAVo7, { serverName: profile.name });
  const callback = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(10046, dependencyMap.paths), "GuildProfileActionSheet:" + id, { guildId: id });
  }, items);
  const obj3 = { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null };
  const obj4 = { children: null };
  const obj5 = { style: tmp.container, children: null };
  const str1 = intl.format(id(1115).t.vuAVo7, { serverName: profile.name }).toString();
  obj5.children = jsx(id(5936).TableRowGroup, { title: intl.format(id(1115).t.vuAVo7, { serverName: profile.name }).toString(), hasIcons: true, children: allGuildProfileGames.map((game) => <GuildProfileGameRow key={arg0.id} game={arg0} activityLevel={gameActivity[arg0.id]} />) });
  obj4.children = <View style={tmp.container}>{null}</View>;
  obj3.children = jsx(id(6901).BottomSheetScrollView, { children: null });
  return jsx(id(7427).BottomSheet, { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null });
};
