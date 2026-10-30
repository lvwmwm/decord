// Module ID: 14686
// Function ID: 14687
// Name: GuildProfileGamesActionSheet
// Dependencies: [19, 17, 21, 9296, 9320, 6969, 14681, 5009, 14685, 8733, 1114, 5253, 9277, 1995, 5267, 5270, 7054, 2]
// Exports: default

// Module 14686 (GuildProfileGamesActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import TableRow2 from "TableRow" /* 6969 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9296 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet;

function GuildProfileGameRow(game) {
  let fn;
  game = game.game;
  const activityLevel = game.activityLevel;
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmp = useOpenGameProfileModalDefault;
  const tmpResult = tmp(obj);
  let closure_0 = tmpResult;
  const obj2 = { icon: null, label: game.name, arrow: null != tmpResult, onPress: fn };
  const TableRow = TableRow2.TableRow;
  fn = undefined;
  const tmp4 = jsx;
  if (null != tmpResult) {
    fn = () => closure_0();
  }
  return tmp4(TableRow, obj2);
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  const id = profile.id;
  const gameActivity = profile.gameActivity;
  const tmp = closure_7();
  let obj = id(14685);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  const obj2 = id(8733);
  const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
  const name = profile.name;
  const intl = id(1114).intl;
  const items = [id];
  const str = intl.format(id(1114).t.vuAVo7, { serverName: name });
  const str1 = str.toString();
  const callback = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { guildId: id };
    const tmp2 = asyncRequire(9277, dependencyMap.paths);
    openLazy(tmp2, "GuildProfileActionSheet:" + id, obj);
  }, items);
  BottomSheet = id(5267).BottomSheet;
  const BottomSheetScrollView = id(5270).BottomSheetScrollView;
  ({ title: str1, hasIcons: true, children: allGuildProfileGames.map((game) => <GuildProfileGameRow key={arg0.id} game={arg0} activityLevel={gameActivity[arg0.id]} />) });
  const TableRowGroup = id(7054).TableRowGroup;
  return <BottomSheet ref={bottomSheetRef} scrollable onDismiss={callback} startHeight={300}>{null}</BottomSheet>;
};
