// Module ID: 15068
// Function ID: 113423
// Name: ICYMICustomScoresOverviewScreen
// Dependencies: []
// Exports: default

// Module 15068 (ICYMICustomScoresOverviewScreen)
let closure_3 = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12 };
obj.container = obj;
let closure_9 = obj.createStyles(obj);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default function ICYMICustomScoresOverviewScreen(navigation) {
  navigation = navigation.navigation;
  const arg1 = navigation;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => guilds.getGuilds());
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => flattenedGuildIds.getFlattenedGuildIds());
  const dependencyMap = stateFromStores1;
  const items2 = [closure_7];
  const React = arg1(dependencyMap[8]).useStateFromStores(items2, () => customGuildScores.getCustomGuildScores());
  const items3 = [stateFromStores1, stateFromStores];
  const memo = React.useMemo(() => stateFromStores1.map((arg0) => closure_1[arg0]), items3);
  const obj3 = arg1(dependencyMap[8]);
  const items4 = [navigation];
  let closure_4 = React.useCallback((guildId) => navigation.navigate("guild", { guildId }), items4);
  obj = { showsVerticalScrollIndicator: false, style: callback().container };
  obj = { bottom: importDefault(dependencyMap[9])().bottom, top: importDefault(dependencyMap[7]).space.PX_12 };
  obj.contentInset = obj;
  obj1 = {
    hasIcons: true,
    children: memo.map((guild) => {
      const navigation = guild;
      let obj = {
        onPress() {
          return callback(arg0.id);
        }
      };
      obj = { guild };
      obj.icon = callback(stateFromStores(stateFromStores1[12]), obj);
      obj.label = guild.name;
      let tmp2;
      if (null != closure_3[guild.id]) {
        const obj3 = navigation(stateFromStores1[13]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
          obj = {};
          const intl = navigation(stateFromStores1[14]).intl;
          obj.text = intl.string(navigation(stateFromStores1[14]).t.lhPHmz);
          tmp2 = callback(navigation(stateFromStores1[11]).TableRow.TrailingText, obj);
        }
        const numberToCustomScoreResult = navigation(stateFromStores1[13]).numberToCustomScore(closure_3[guild.id]);
      }
      obj.trailing = tmp2;
      obj.arrow = true;
      return callback(navigation(stateFromStores1[11]).TableRow, obj, guild.id);
    })
  };
  obj.children = jsx(arg1(dependencyMap[10]).TableRowGroup, obj1);
  return <closure_4 {...obj} />;
};
