// Module ID: 16095
// Function ID: 16096
// Name: ICYMICustomScoresOverviewScreen
// Dependencies: [19, 17, 2067, 5750, 7783, 21, 4836, 576, 504, 1613, 5999, 5917, 5896, 7798, 1115, 2]
// Exports: default

// Module 16095 (ICYMICustomScoresOverviewScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let react = react_mod;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default function ICYMICustomScoresOverviewScreen(navigation) {
  let closure_3;
  let customGuildScores;
  let flattenedGuildIds;
  let guilds;
  navigation = navigation.navigation;
  let stateFromStores1;
  let obj = navigation(stateFromStores1[8]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => guilds.getGuilds());
  const obj2 = navigation(stateFromStores1[8]);
  const items1 = [SortedGuildStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => flattenedGuildIds.getFlattenedGuildIds());
  let obj3 = navigation(stateFromStores1[8]);
  const items2 = [ICYMIStore];
  react = obj3.useStateFromStores(items2, () => customGuildScores.getCustomGuildScores());
  const items3 = [stateFromStores1, stateFromStores];
  const memo = react.useMemo(() => stateFromStores1.map((item) => stateFromStores[item]), items3);
  const tmp3 = closure_9();
  const items4 = [navigation];
  const bottom = stateFromStores(stateFromStores1[9])().bottom;
  let closure_4 = react.useCallback((guildId) => {
    const obj = { guildId };
    return navigation.navigate("guild", obj);
  }, items4);
  const rect = { bottom, top: stateFromStores(stateFromStores1[7]).space.PX_12 };
  ({
    hasIcons: true,
    children: memo.map((guild) => {
      let intl;
      const TableRow = navigation(stateFromStores1[11]).TableRow;
      let tmpResult;
      if (null != closure_3[guild.id]) {
        const tmp2Result = navigation(stateFromStores1[13]);
        const numberToCustomScoreResult = tmp2Result.numberToCustomScore(tmp4[guild.id]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
          const obj3 = { text: intl.string(navigation(stateFromStores1[14]).t.lhPHmz) };
          const TrailingText = tmp2(tmp3[11]).TableRow.TrailingText;
          intl = tmp2(tmp3[14]).intl;
          tmpResult = tmp(TrailingText, obj3);
        }
      }
      return <TableRow key={arg0.id} onPress={function onPress() {
        return closure_4(guild.id);
      }} icon={null} label={arg0.name} trailing={tmpResult} arrow />;
    })
  });
  const TableRowGroup = navigation(stateFromStores1[10]).TableRowGroup;
  return <closure_4 showsVerticalScrollIndicator={false} style={tmp3.container} contentInset={rect}>{null}</closure_4>;
};
