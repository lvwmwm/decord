// Module ID: 10027
// Function ID: 10028
// Name: GuildProfileGamesActionSheet
// Dependencies: [19, 17, 21, 558, 568, 8976, 8977, 10022, 5854, 4790, 10026, 8476, 1119, 4757, 10013, 1984, 7429, 6895, 5935, 2]
// Exports: default

// Module 10027 (GuildProfileGamesActionSheet)
import c from "c" /* 568 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import TableRow from "TableRow" /* 5854 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8976 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8977 */;
import components_GameIconDefault from "components/GameIcon" /* 10022 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ game, activityLevel } = arg0);
  if (cResult[0] !== game.id) {
    const obj2 = { gameId: game.id, source: tmp(8976).GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
    cResult[0] = game.id;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = useOpenGameProfileModalDefault(tmp4);
  closure_0 = tmp6;
  if (cResult[2] === activityLevel) {
    if (cResult[3] === game) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      if (cResult[6] === tmp6) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        if (cResult[9] === game.name) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp10) {
              let tmp11 = cResult[12];
            }
            return tmp11;
          }
        }
      }
      const obj3 = { icon: tmp8, label: game.name, arrow: tmp7, onPress: tmp10 };
      const tmp13 = jsx(tmp(5854).TableRow, { icon: tmp8, label: game.name, arrow: tmp7, onPress: tmp10 });
      cResult[8] = tmp7;
      cResult[9] = game.name;
      cResult[10] = tmp8;
      cResult[11] = tmp10;
      cResult[12] = tmp13;
      tmp11 = tmp13;
    }
    let fn;
    if (tmp7) {
      fn = () => closure_0();
    }
    cResult[5] = tmp7;
    cResult[6] = tmp6;
    cResult[7] = fn;
    tmp10 = fn;
  }
  const tmp9 = jsx(components_GameIconDefault, { game, activityLevel });
  cResult[2] = activityLevel;
  cResult[3] = game;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((activityLevel) => {
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
});
const createStyles = fn(4790);
let closure_7 = createStyles.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  const id = profile.id;
  const gameActivity = profile.gameActivity;
  const tmp = closure_7();
  const allGuildProfileGames = id(10026).useAllGuildProfileGames(profile);
  let obj = id(10026);
  const intl = id(1119).intl;
  const obj2 = id(8476);
  const items = [id];
  const str = intl.format(id(1119).t.vuAVo7, { serverName: profile.name });
  const callback = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(10013, dependencyMap.paths), "GuildProfileActionSheet:" + id, { guildId: id });
  }, items);
  const obj3 = { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null };
  const obj4 = { children: null };
  const obj5 = { style: tmp.container, children: null };
  const str1 = intl.format(id(1119).t.vuAVo7, { serverName: profile.name }).toString();
  obj5.children = jsx(id(5935).TableRowGroup, { title: intl.format(id(1119).t.vuAVo7, { serverName: profile.name }).toString(), hasIcons: true, children: allGuildProfileGames.map((game) => <closure_6 key={arg0.id} game={arg0} activityLevel={gameActivity[arg0.id]} />) });
  obj4.children = <View style={tmp.container}>{null}</View>;
  obj3.children = jsx(id(6895).BottomSheetScrollView, { children: null });
  return jsx(id(7429).BottomSheet, { ref: obj2.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null });
};
