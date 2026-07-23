// Module ID: 15183
// Function ID: 115592
// Name: ICYMICustomScoresOverviewScreen
// Dependencies: [31, 27, 1838, 4970, 8306, 33, 4130, 689, 566, 1557, 5503, 5165, 5515, 8320, 1212, 2]
// Exports: default

// Module 15183 (ICYMICustomScoresOverviewScreen)
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default function ICYMICustomScoresOverviewScreen(navigation) {
  navigation = navigation.navigation;
  let obj = navigation(stateFromStores1[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuilds());
  let obj1 = navigation(stateFromStores1[8]);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_6.getFlattenedGuildIds());
  const items2 = [closure_7];
  const React = navigation(stateFromStores1[8]).useStateFromStores(items2, () => outer1_7.getCustomGuildScores());
  const items3 = [stateFromStores1, stateFromStores];
  const memo = React.useMemo(() => stateFromStores1.map((arg0) => outer1_1[arg0]), items3);
  let obj3 = navigation(stateFromStores1[8]);
  const items4 = [navigation];
  let closure_4 = React.useCallback((guildId) => navigation.navigate("guild", { guildId }), items4);
  obj = { showsVerticalScrollIndicator: false, style: _createForOfIteratorHelperLoose().container };
  obj = { bottom: stateFromStores(stateFromStores1[9])().bottom, top: stateFromStores(stateFromStores1[7]).space.PX_12 };
  obj.contentInset = obj;
  obj1 = {
    hasIcons: true,
    children: memo.map((guild) => {
      let closure_0 = guild;
      let obj = {
        onPress() {
          return outer1_4(guild.id);
        }
      };
      obj = { guild };
      obj.icon = outer1_8(stateFromStores(stateFromStores1[12]), obj);
      obj.label = guild.name;
      let tmp2;
      if (null != dependencyMap[guild.id]) {
        const obj3 = navigation(stateFromStores1[13]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
          obj = {};
          const intl = navigation(stateFromStores1[14]).intl;
          obj.text = intl.string(navigation(stateFromStores1[14]).t.lhPHmz);
          tmp2 = outer1_8(navigation(stateFromStores1[11]).TableRow.TrailingText, obj);
        }
        numberToCustomScoreResult = navigation(stateFromStores1[13]).numberToCustomScore(dependencyMap[guild.id]);
      }
      obj.trailing = tmp2;
      obj.arrow = true;
      return outer1_8(navigation(stateFromStores1[11]).TableRow, obj, guild.id);
    })
  };
  obj.children = jsx(navigation(stateFromStores1[10]).TableRowGroup, {
    hasIcons: true,
    children: memo.map((guild) => {
      let closure_0 = guild;
      let obj = {
        onPress() {
          return outer1_4(guild.id);
        }
      };
      obj = { guild };
      obj.icon = outer1_8(stateFromStores(stateFromStores1[12]), obj);
      obj.label = guild.name;
      let tmp2;
      if (null != dependencyMap[guild.id]) {
        const obj3 = navigation(stateFromStores1[13]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
          obj = {};
          const intl = navigation(stateFromStores1[14]).intl;
          obj.text = intl.string(navigation(stateFromStores1[14]).t.lhPHmz);
          tmp2 = outer1_8(navigation(stateFromStores1[11]).TableRow.TrailingText, obj);
        }
        numberToCustomScoreResult = navigation(stateFromStores1[13]).numberToCustomScore(dependencyMap[guild.id]);
      }
      obj.trailing = tmp2;
      obj.arrow = true;
      return outer1_8(navigation(stateFromStores1[11]).TableRow, obj, guild.id);
    })
  });
  return <closure_4 bottom={stateFromStores(stateFromStores1[9])().bottom} top={stateFromStores(stateFromStores1[7]).space.PX_12} />;
};
