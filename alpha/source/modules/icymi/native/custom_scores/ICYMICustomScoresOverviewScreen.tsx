// Module ID: 16700
// Function ID: 16701
// Name: ICYMICustomScoresOverviewScreen
// Dependencies: [19, 17, 2086, 5968, 8429, 21, 5090, 587, 558, 576, 504, 1630, 6184, 6161, 8446, 1126, 6267, 2]

// Module 16700 (ICYMICustomScoresOverviewScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;
import ICYMIStore from "ICYMIStore" /* 8429 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_0, obj1, obj5;

let obj2;
let react = react_mod;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_9 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ICYMICustomScoresOverviewScreen(navigation) {
  let customGuildScores;
  let flattenedGuildIds;
  let guilds;
  let stateFromStores2;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp24;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = navigation;
  const tmp2 = stateFromStores2;
  let obj = navigation(stateFromStores2[9]);
  const cResult = obj.c(28);
  navigation = navigation.navigation;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    const fn = function v() {
      return guilds.getGuilds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmpResult = tmp(tmp2[10]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SortedGuildStore];
    const fn2 = function _() {
      return flattenedGuildIds.getFlattenedGuildIds();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = tmp(tmp2[10]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ICYMIStore];
    const fn3 = function w() {
      return customGuildScores.getCustomGuildScores();
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    tmp12 = fn3;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult4 = tmp(tmp2[10]);
  stateFromStores2 = tmpResult4.useStateFromStores(tmp11, tmp12);
  if (cResult[6] === stateFromStores1) {
    let arr5;
    if (cResult[7] === stateFromStores) {
      arr5 = cResult[8];
    }
    const tmp18 = closure_9();
    const bottom = stateFromStores(tmp2[11])().bottom;
    const tmp19 = stateFromStores;
    if (cResult[11] !== navigation) {
      class M {
        constructor(guildId) {
          const obj = { guildId };
          return navigation.navigate("guild", obj);
        }
      }
      cResult[11] = navigation;
      cResult[12] = M;
    } else {
      class M {
        constructor(guildId) {
          const obj = { guildId };
          return navigation.navigate("guild", obj);
        }
      }
    }
    M = tmp20;
    const container = tmp18.container;
    if (cResult[13] !== bottom) {
      class M {
        constructor(guildId) {
          const obj = { guildId };
          return navigation.navigate("guild", obj);
        }
      }
      tmp22[0] = bottom;
      tmp22[1] = tmp19(tmp2[7]).space.PX_12;
      cResult[13] = bottom;
      cResult[14] = tmp22;
    } else {
      class M {
        constructor(guildId) {
          const obj = { guildId };
          return navigation.navigate("guild", obj);
        }
      }
    }
    if (cResult[15] === stateFromStores2) {
      class M {
        constructor(guildId) {
          const obj = { guildId };
          return navigation.navigate("guild", obj);
        }
      }
    }
    if (cResult[19] === stateFromStores2) {
      class M {
        constructor(guildId) {
          const obj = { guildId };
          return navigation.navigate("guild", obj);
        }
      }
      const mapped = arr5.map(tmp24);
      cResult[15] = stateFromStores2;
      cResult[16] = arr5;
      cResult[17] = tmp20;
      cResult[18] = mapped;
    }
    class Y {
      constructor(arg0) {
        closure_0 = navigation;
        tmp = closure_1_8;
        tmp2 = navigation;
        tmp3 = closure_2;
        obj = {
          onPress() {
                  return M(guild.id);
                },
          icon: null,
          label: null,
          trailing: null,
          arrow: true
        };
        TableRow = navigation(closure_2[12]).TableRow;
        obj1 = { guild: navigation };
        obj.icon = closure_1_8(closure_1(closure_2[13]), obj1);
        obj.label = navigation.name;
        tmpResult = undefined;
        if (null != closure_2[navigation.id]) {
          tmp2Result = tmp2(tmp3[14]);
          numberToCustomScoreResult = tmp2Result.numberToCustomScore(tmp4[navigation.id]);
          if (numberToCustomScoreResult === tmp2(tmp3[14]).ICYMICustomScore.MUTED) {
            obj5 = { text: null };
            TrailingText = tmp2(tmp3[12]).TableRow.TrailingText;
            intl = tmp2(tmp3[15]).intl;
            obj5.text = intl.string(tmp2(tmp3[15]).t.lhPHmz);
            tmpResult = tmp(TrailingText, obj5);
          }
        }
        obj.trailing = tmpResult;
        return tmp(TableRow, obj, navigation.id);
      }
    }
    cResult[19] = stateFromStores2;
    cResult[20] = tmp20;
    cResult[21] = Y;
    tmp24 = Y;
  }
  if (cResult[9] !== stateFromStores) {
    class M {
      constructor(guildId) {
        const obj = { guildId };
        return navigation.navigate("guild", obj);
      }
    }
    cResult[9] = stateFromStores;
    cResult[10] = F;
    tmp15 = F;
  } else {
    class M {
      constructor(guildId) {
        const obj = { guildId };
        return navigation.navigate("guild", obj);
      }
    }
  }
  const mapped1 = stateFromStores1.map(tmp15);
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = mapped1;
  arr5 = mapped1;
}) : (function ICYMICustomScoresOverviewScreen(navigation) {
  let closure_3;
  let customGuildScores;
  let flattenedGuildIds;
  let guilds;
  navigation = navigation.navigation;
  let stateFromStores1;
  let obj = navigation(stateFromStores1[10]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => guilds.getGuilds());
  const obj2 = navigation(stateFromStores1[10]);
  const items1 = [SortedGuildStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => flattenedGuildIds.getFlattenedGuildIds());
  let obj3 = navigation(stateFromStores1[10]);
  const items2 = [ICYMIStore];
  react = obj3.useStateFromStores(items2, () => customGuildScores.getCustomGuildScores());
  const items3 = [stateFromStores1, stateFromStores];
  const memo = react.useMemo(() => stateFromStores1.map((item) => stateFromStores[item]), items3);
  const tmp3 = closure_9();
  const items4 = [navigation];
  const bottom = stateFromStores(stateFromStores1[11])().bottom;
  let closure_4 = react.useCallback((guildId) => {
    const obj = { guildId };
    return navigation.navigate("guild", obj);
  }, items4);
  const rect = { bottom, top: stateFromStores(stateFromStores1[7]).space.PX_12 };
  ({
    hasIcons: true,
    children: memo.map((guild) => {
      let intl;
      const TableRow = navigation(stateFromStores1[12]).TableRow;
      let tmpResult;
      if (null != closure_3[guild.id]) {
        const tmp2Result = navigation(stateFromStores1[14]);
        const numberToCustomScoreResult = tmp2Result.numberToCustomScore(tmp4[guild.id]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[14]).ICYMICustomScore.MUTED) {
          const obj3 = { text: intl.string(navigation(stateFromStores1[15]).t.lhPHmz) };
          const TrailingText = tmp2(tmp3[12]).TableRow.TrailingText;
          intl = tmp2(tmp3[15]).intl;
          tmpResult = tmp(TrailingText, obj3);
        }
      }
      return <TableRow key={arg0.id} onPress={function onPress() {
        return closure_4(guild.id);
      }} icon={null} label={arg0.name} trailing={tmpResult} arrow />;
    })
  });
  const TableRowGroup = navigation(stateFromStores1[16]).TableRowGroup;
  return <closure_4 showsVerticalScrollIndicator={false} style={tmp3.container} contentInset={rect}>{null}</closure_4>;
});
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default tmp2;
