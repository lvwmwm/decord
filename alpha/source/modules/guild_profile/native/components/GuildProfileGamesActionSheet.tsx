// Module ID: 14964
// Function ID: 14965
// Name: GuildProfileGamesActionSheet
// Dependencies: [19, 17, 21, 9397, 9421, 7038, 14959, 5140, 14963, 8812, 1113, 5374, 9376, 2118, 5388, 5392, 7126, 2]
// Exports: default

// Module 14964 (GuildProfileGamesActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import TableRow2 from "TableRow" /* 7038 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9397 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9421 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

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
  let obj = id(14963);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  const obj2 = id(8812);
  const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
  const name = profile.name;
  const intl = id(1113).intl;
  const items = [id];
  const str = intl.format(id(1113).t.vuAVo7, { serverName: name });
  const str1 = str.toString();
  const callback = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = { guildId: id };
    const tmp2 = asyncRequire(9376, dependencyMap.paths);
    openLazy(tmp2, "GuildProfileActionSheet:" + id, obj);
  }, items);
  const BottomSheet = id(5388).BottomSheet;
  const BottomSheetScrollView = id(5392).BottomSheetScrollView;
  ({ title: str1, hasIcons: true, children: allGuildProfileGames.map((game) => <GuildProfileGameRow key={arg0.id} game={arg0} activityLevel={gameActivity[arg0.id]} />) });
  const TableRowGroup = id(7126).TableRowGroup;
  return <BottomSheet ref={bottomSheetRef} scrollable onDismiss={callback} startHeight={300}>{null}</BottomSheet>;
};
