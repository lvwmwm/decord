// Module ID: 9201
// Function ID: 9202
// Name: GuildProfileGameRow
// Dependencies: [19, 17, 21, 8675, 8686, 5605, 9196, 4560, 9200, 8170, 1114, 4527, 9185, 1896, 7150, 6627, 5687, 2]
// Exports: default

// Module 9201 (GuildProfileGameRow)
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8675 */;
import stylesDefault from "styles" /* 9196 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function GuildProfileGameRow(activityLevel) {
  const game = activityLevel.game;
  let _require;
  let obj = { gameId: game.id, source: _require(8686).GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmpResult = useOpenGameProfileModalDefault(obj);
  _require = tmpResult;
  obj = { icon: jsx(stylesDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: tmp3, onPress: null };
  let fn;
  if (null != tmpResult) {
    fn = () => callback();
  }
  obj[3] = fn;
  return jsx(_require(5605).TableRow, { icon: jsx(stylesDefault, { game, activityLevel: activityLevel.activityLevel }), label: game.name, arrow: tmp3, onPress: null });
}
let closure_7 = createCacheKey.createStyles({ container: { padding: 16, paddingBottom: 48 } });
const result = require("set").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGamesActionSheet.tsx");

export default function GuildProfileGamesActionSheet(profile) {
  profile = profile.profile;
  let id;
  let gameActivity;
  id = profile.id;
  gameActivity = profile.gameActivity;
  let obj = id(9200);
  const allGuildProfileGames = obj.useAllGuildProfileGames(profile);
  obj1 = id(8170);
  const intl = id(1114).intl;
  let str = intl.format(id(1114).t.vuAVo7, { serverName: profile.name });
  const items = [id];
  str = str.toString();
  const callback = React.useCallback(() => {
    let obj = gameActivity(closure_1_2[11]);
    obj = { guildId: id };
    obj.openLazy(id(closure_1_2[13])(closure_1_2[12], closure_1_2.paths), "GuildProfileActionSheet:" + id, obj);
  }, items);
  obj = { ref: obj1.useBottomSheetRef().bottomSheetRef, scrollable: true, onDismiss: callback, startHeight: 300, children: null };
  obj = { children: null };
  obj1 = { style: callback().container, children: null };
  const tmp = callback();
  obj1[1] = jsx(id(5687).TableRowGroup, { title: str, hasIcons: true, children: allGuildProfileGames.map((game) => closure_1_5(closure_1_6, { game, activityLevel: gameActivity[game.id] }, game.id)) });
  obj[0] = <View style={callback().container}>{null}</View>;
  obj[4] = jsx(id(6627).BottomSheetScrollView, { children: null });
  return jsx(id(7150).BottomSheet, { children: null });
};
