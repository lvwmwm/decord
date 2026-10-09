// Module ID: 11954
// Function ID: 11955
// Name: GuildDirectorySearch
// Dependencies: [32, 19, 17, 2086, 11955, 1085, 21, 5091, 587, 558, 576, 6661, 6163, 11958, 1126, 1200, 5087, 504, 11959, 11960, 11968, 1265, 1631, 11987, 11988, 11952, 7081, 6205, 2]

// Module 11954 (GuildDirectorySearch)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import FastImageDefault from "FastImage" /* 6163 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11952 */;
import AssetRegistryDefault from "AssetRegistry" /* 11958 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11960 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11968 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildDirectorySearchStore from "GuildDirectorySearchStore" /* 11955 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let Fonts;
let c10;
let closure_12;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
({ View: metroRequire, FlatList: metroImportDefault } = react_native);
({ AnalyticEvents: c10, Fonts } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1, height: "100%" }, fauxHeader: { paddingHorizontal: 0 }, scrollContainer: obj2, emptyWrapper: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, emptyStateImage: { marginBottom: 24 }, emptyStateText: { textAlign: "center" }, emptyStateTitle: { marginBottom: 4, textAlign: "center" }, proTip: obj3 };
obj2 = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function DefaultState() {
  let items;
  let proTip;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(12);
  const tmp4 = closure_13();
  _require = tmp4;
  const obj2 = require("useTypeConsolidationTextTransform");
  const typeConsolidationTextTransform = obj2.useTypeConsolidationTextTransform("GuildDirectorySearch");
  const emptyWrapper = tmp4.emptyWrapper;
  if (cResult[0] !== tmp4.emptyStateImage) {
    const obj3 = { style: tmp4.emptyStateImage, source: typeConsolidationTextTransform(11958) };
    const tmp9 = typeConsolidationTextTransform(6163);
    const tmp10 = closure_11(tmp9, obj3);
    cResult[0] = tmp4.emptyStateImage;
    cResult[1] = tmp10;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.proTip) {
    let tmp12;
    if (cResult[3] === typeConsolidationTextTransform) {
      tmp12 = cResult[4];
    }
    if (cResult[5] === tmp4.emptyStateText) {
      let tmp14;
      if (cResult[6] === tmp12) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp4.emptyWrapper) {
        if (cResult[9] === tmp6) {
          let tmp17;
          if (cResult[10] === tmp14) {
            tmp17 = cResult[11];
          }
          return tmp17;
        }
      }
      const obj4 = { style: emptyWrapper, children: items };
      items = [tmp6, tmp14];
      const tmp20 = closure_12(closure_6, obj4);
      cResult[8] = tmp4.emptyWrapper;
      cResult[9] = tmp6;
      cResult[10] = tmp14;
      cResult[11] = tmp20;
      tmp17 = tmp20;
    }
    const obj5 = { style: tmp11, variant: "text-sm/medium", color: "text-default", children: tmp12 };
    const tmp16 = closure_11(require("Text/Text").Text, obj5);
    cResult[5] = tmp4.emptyStateText;
    cResult[6] = tmp12;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  }
  const intl = tmp(1126).intl;
  const obj6 = {
    protipHook(children) {
      let items;
      const obj = { style: items, children };
      items = [proTip.proTip, typeConsolidationTextTransform];
      return unpackModuleId(native.LegacyText, obj, "protip");
    }
  };
  const formatResult = intl.format(require("intl").t.aYLd8O, obj6);
  cResult[2] = tmp4.proTip;
  cResult[3] = typeConsolidationTextTransform;
  cResult[4] = formatResult;
  tmp12 = formatResult;
}) : (function DefaultState() {
  let closure_1;
  let intl;
  let items;
  let obj5;
  let proTip;
  const tmp = closure_13();
  _require = tmp;
  let obj = require("useTypeConsolidationTextTransform");
  importDefault = obj.useTypeConsolidationTextTransform("GuildDirectorySearch");
  const obj2 = { style: tmp.emptyWrapper, children: items };
  const obj3 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [closure_11(tmp2, obj3), ];
  const obj4 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: intl.format(require("intl").t.aYLd8O, obj5) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  obj5 = {
    protipHook(children) {
      let items;
      const obj = { style: items, children };
      items = [proTip.proTip, closure_1];
      return unpackModuleId(native.LegacyText, obj, "protip");
    }
  };
  items[1] = closure_11(Text, obj4);
  return closure_12(closure_6, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyState(channel) {
  let first;
  let formatResult;
  let items1;
  let tmp7;
  let obj = channel(576);
  const cResult = obj.c(20);
  channel = channel.channel;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function l() {
      return GuildStore.getGuild(channel.getGuildId());
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult2 = channel(11959);
  const canCreateOrAddGuildInDirectory = tmpResult2.useCanCreateOrAddGuildInDirectory(channel);
  if (cResult[3] === canCreateOrAddGuildInDirectory) {
    if (cResult[4] === channel.id) {
      let tmp10;
      let tmp12;
      let tmp17;
      let tmp19;
      if (cResult[5] === stateFromStores) {
        tmp10 = cResult[6];
      }
      const emptyWrapper = tmp4.emptyWrapper;
      if (cResult[7] !== tmp4.emptyStateImage) {
        let obj2 = { style: tmp4.emptyStateImage, source: stateFromStores(11958) };
        const tmp15 = stateFromStores(6163);
        const tmp16 = closure_11(tmp15, obj2);
        cResult[7] = tmp4.emptyStateImage;
        cResult[8] = tmp16;
        tmp12 = tmp16;
      } else {
        tmp12 = cResult[8];
      }
      const _Symbol = Symbol;
      const emptyStateTitle = tmp4.emptyStateTitle;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(channel(1126).t["6HXiuE"]);
        cResult[9] = stringResult;
        tmp17 = stringResult;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== tmp4.emptyStateTitle) {
        const obj3 = { style: emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: tmp17 };
        const tmp21 = closure_11(channel(5087).Text, obj3);
        cResult[10] = tmp4.emptyStateTitle;
        cResult[11] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === tmp4.emptyStateText) {
        let tmp22;
        if (cResult[13] === tmp10) {
          tmp22 = cResult[14];
        }
        if (cResult[15] === tmp4.emptyWrapper) {
          if (cResult[16] === tmp12) {
            if (cResult[17] === tmp19) {
              let tmp25;
              if (cResult[18] === tmp22) {
                tmp25 = cResult[19];
              }
              return tmp25;
            }
          }
        }
        const obj4 = { style: emptyWrapper, children: items1 };
        items1 = [tmp12, tmp19, tmp22];
        const tmp28 = closure_12(closure_6, obj4);
        cResult[15] = tmp4.emptyWrapper;
        cResult[16] = tmp12;
        cResult[17] = tmp19;
        cResult[18] = tmp22;
        cResult[19] = tmp28;
        tmp25 = tmp28;
      }
      const obj5 = { style: tmp4.emptyStateText, variant: "text-sm/medium", color: "text-default", children: tmp10 };
      const tmp24 = closure_11(channel(5087).Text, obj5);
      cResult[12] = tmp4.emptyStateText;
      cResult[13] = tmp10;
      cResult[14] = tmp24;
      tmp22 = tmp24;
    }
  }
  const intl = tmp(1126).intl;
  if (canCreateOrAddGuildInDirectory) {
    const obj6 = {
      addServerHook() {
          const obj = GuildDirectoryAddModalActionCreatorsDefault;
          const obj2 = { directoryGuildName: stateFromStores.name, directoryGuildId: stateFromStores.id, directoryChannelId: channel.id };
          obj.open(obj2);
        }
    };
    formatResult = intl.format(tmp(1126).t.ZxNVMy, obj6);
  } else {
    formatResult = intl.string(tmp(1126).t.vYyEnv);
  }
  cResult[3] = canCreateOrAddGuildInDirectory;
  cResult[4] = channel.id;
  cResult[5] = stateFromStores;
  cResult[6] = formatResult;
  tmp10 = formatResult;
}) : (function EmptyState(channel) {
  let formatResult;
  let intl2;
  let items1;
  let user;
  channel = channel.channel;
  const tmp = closure_13();
  let obj = channel(504);
  const items = [GuildStore];
  importDefault = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
  let obj2 = channel(11959);
  const canCreateOrAddGuildInDirectory = obj2.useCanCreateOrAddGuildInDirectory(channel);
  const intl = channel(1126).intl;
  if (canCreateOrAddGuildInDirectory) {
    const obj3 = {
      addServerHook() {
          const obj = GuildDirectoryAddModalActionCreatorsDefault;
          const obj2 = { directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id };
          obj.open(obj2);
        }
    };
    formatResult = intl.format(tmp2(1126).t.ZxNVMy, obj3);
  } else {
    formatResult = intl.string(tmp2(1126).t.vYyEnv);
  }
  const obj4 = { style: tmp.emptyWrapper, children: items1 };
  const obj5 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
  const tmp6 = FastImageDefault;
  items1 = [closure_11(tmp6, obj5), , ];
  const obj6 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl2.string(channel(1126).t["6HXiuE"]) };
  const Text = tmp2(5087).Text;
  intl2 = tmp2(1126).intl;
  items1[1] = closure_11(Text, obj6);
  const obj7 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: formatResult };
  items1[2] = closure_11(channel(5087).Text, obj7);
  return closure_12(closure_6, obj4);
});
const ArrayResult = Array(20);
let closure_16 = ArrayResult.fill(null);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectorySearch(channel) {
  let closure_1;
  let fauxHeader;
  let first;
  let first1;
  let first2;
  let flex;
  let items1;
  let searchFetching;
  let searchResults;
  let tmp12;
  let tmp9;
  let tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(36);
  channel = channel.channel;
  let tmp4 = closure_13();
  [first, importDefault] = react.useState(false);
  [first1, tmp9] = react.useState("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildDirectorySearchStore];
    cResult[0] = items;
    first2 = items;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function u() {
      const searchState = GuildDirectorySearchStore.getSearchState(channel.id);
      const obj = { searchFetching: searchState.fetching, searchResults: GuildDirectorySearchStore.getSearchResults(channel.id, searchState.mostRecentQuery) };
      return obj;
    };
    cResult[1] = channel.id;
    cResult[2] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first2, tmp12);
  ({ searchFetching, searchResults } = stateFromStoresObject);
  let tmp14 = searchResults;
  if (searchFetching) {
    let tmp15;
    if (cResult[3] !== searchResults) {
      const combined = searchResults.concat(closure_16);
      cResult[3] = searchResults;
      cResult[4] = combined;
      tmp15 = combined;
    } else {
      tmp15 = cResult[4];
    }
    tmp14 = tmp15;
  }
  if (cResult[5] === channel) {
    let tmp18;
    let tmp21;
    let tmp22;
    let tmp23;
    let tmp40;
    if (cResult[6] === first1) {
      tmp18 = cResult[7];
    }
    const sum = useSafeAreaInsetsDefault().bottom + 16;
    const _Symbol = Symbol;
    const tmp19 = importDefault;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      function keyExtractor(guildId, arg1) {
        if (null != guildId) {
          guildId = guildId.guildId;
        } else {
          guildId = arg1.toString();
        }
        return guildId;
      }
      cResult[8] = keyExtractor;
      tmp21 = keyExtractor;
    } else {
      tmp21 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      function renderItem(item) {
        let tmp4;
        item = item.item;
        if (null != item) {
          const obj = { entry: item };
          tmp4 = closure_1_11(closure_1(dependencyMap[23]), obj);
        } else {
          tmp4 = closure_1_11(closure_1(dependencyMap[24]), {});
        }
        return tmp4;
      }
      cResult[9] = renderItem;
      tmp22 = renderItem;
    } else {
      tmp22 = cResult[9];
    }
    const _Symbol3 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp26 = closure_11(closure_14, {});
      cResult[10] = tmp26;
      tmp23 = tmp26;
    } else {
      tmp23 = cResult[10];
    }
    if (first) {
      let tmp32;
      if (0 === searchResults.length) {
        let tmp27;
        if (!searchFetching) {
          if (cResult[11] !== channel) {
            let obj2 = { channel };
            const tmp30 = closure_11(closure_15, obj2);
            cResult[11] = channel;
            cResult[12] = tmp30;
            tmp27 = tmp30;
          } else {
            tmp27 = cResult[12];
          }
        }
        tmp23 = tmp27;
      }
      if (cResult[13] !== channel) {
        class P {
          constructor() {
            const obj = { channel };
            return unpackModuleId(closure_15, obj);
          }
        }
        cResult[13] = channel;
        cResult[14] = P;
      } else {
        class P {
          constructor() {
            const obj = { channel };
            return unpackModuleId(closure_15, obj);
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            const obj = { channel };
            return unpackModuleId(closure_15, obj);
          }
        }
        cResult[15] = tmp33;
        tmp32 = tmp33;
      } else {
        class P {
          constructor() {
            const obj = { channel };
            return unpackModuleId(closure_15, obj);
          }
        }
      }
      if (cResult[16] !== sum) {
        class P {
          constructor() {
            const obj = { channel };
            return unpackModuleId(closure_15, obj);
          }
        }
        tmp35[0] = sum;
        cResult[16] = sum;
        cResult[17] = tmp35;
      } else {
        class P {
          constructor() {
            const obj = { channel };
            return unpackModuleId(closure_15, obj);
          }
        }
      }
      if (cResult[18] === tmp14) {
        class P {
          constructor() {
            const obj = { channel };
            return unpackModuleId(closure_15, obj);
          }
        }
      }
      const obj3 = { data: tmp14, renderItem: tmp22, keyExtractor: tmp21, ListEmptyComponent: tmp31, scrollIndicatorInsets: tmp32, style: tmp4.scrollContainer, contentContainerStyle: tmp34 };
      cResult[18] = tmp14;
      cResult[19] = tmp4.scrollContainer;
      cResult[20] = tmp31;
      cResult[21] = tmp34;
      cResult[22] = closure_11(closure_7, obj3);
      const tmp39 = closure_11(closure_7, obj3);
    }
    const _Symbol5 = Symbol;
    ({ flex, fauxHeader } = tmp4);
    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          const obj = { channel };
          return unpackModuleId(closure_15, obj);
        }
      }
      const stringResult = obj5.string(tmp(1126).t.nL2wKD);
      cResult[23] = stringResult;
      tmp40 = stringResult;
    } else {
      class P {
        constructor() {
          const obj = { channel };
          return unpackModuleId(closure_15, obj);
        }
      }
    }
    if (cResult[24] !== channel.id) {
      class P {
        constructor() {
          const obj = { channel };
          return unpackModuleId(closure_15, obj);
        }
      }
      cResult[24] = channel.id;
      cResult[25] = tmp43;
    } else {
      class P {
        constructor() {
          const obj = { channel };
          return unpackModuleId(closure_15, obj);
        }
      }
    }
    if (cResult[26] === tmp18) {
      class P {
        constructor() {
          const obj = { channel };
          return unpackModuleId(closure_15, obj);
        }
      }
      if (cResult[29] === tmp4.fauxHeader) {
        class P {
          constructor() {
            const obj = { channel };
            return unpackModuleId(closure_15, obj);
          }
        }
        if (cResult[32] === tmp23) {
          class P {
            constructor() {
              const obj = { channel };
              return unpackModuleId(closure_15, obj);
            }
          }
        }
        const obj4 = { style: flex, children: items1 };
        items1 = [tmp47, tmp23];
        cResult[32] = tmp23;
        cResult[33] = tmp4.flex;
        cResult[34] = tmp47;
        cResult[35] = closure_12(closure_6, obj4);
        const tmp53 = closure_12(closure_6, obj4);
      }
      const obj6 = { style: fauxHeader, children: tmp44 };
      cResult[29] = tmp4.fauxHeader;
      cResult[30] = tmp44;
      cResult[31] = closure_11(tmp(6205).FauxHeader, obj6);
      const tmp49 = closure_11(tmp(6205).FauxHeader, obj6);
    }
    const obj7 = { placeholder: tmp40, onChange: tmp9, onClose: tmp42, onSubmitEditing: tmp18 };
    cResult[26] = tmp18;
    cResult[27] = tmp42;
    cResult[28] = closure_11(tmp19(7081), obj7);
    const tmp46 = closure_11(tmp19(7081), obj7);
  }
  function handleSearch() {
    const tmp = first1;
    if (0 !== first1.trim().length) {
      const obj = GuildDirectoryActionCreatorsAll;
      const result = obj.searchDirectoryEntries(channel.id, tmp);
      const obj2 = { directory_channel_id: channel.id, directory_guild_id: channel.getGuildId() };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_DIRECTORY_SEARCH = constants.GUILD_DIRECTORY_SEARCH;
      AnalyticsUtilsDefault;
      track(GUILD_DIRECTORY_SEARCH, obj2);
      if (null != result) {
        result.then(() => closure_1_1(true));
      } else {
        closure_1(true);
      }
    }
  }
  cResult[5] = channel;
  cResult[6] = first1;
  cResult[7] = handleSearch;
  tmp18 = handleSearch;
}) : (function GuildDirectorySearch(channel) {
  let closure_1;
  let intl;
  let items2;
  let obj4;
  let obj7;
  let tmp10Result;
  channel = channel.channel;
  let searchFetching;
  let searchResults;
  let tmp = closure_13();
  const tmp2 = searchResults(react.useState(false), 2);
  importDefault = tmp2[1];
  const first = tmp2[0];
  let tmp4 = searchResults(react.useState(""), 2);
  let closure_2 = tmp4[0];
  const tmp5 = tmp4[1];
  let obj = channel(searchFetching[17]);
  const items = [GuildDirectorySearchStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const searchState = GuildDirectorySearchStore.getSearchState(channel.id);
    const obj = { searchFetching: searchState.fetching, searchResults: GuildDirectorySearchStore.getSearchResults(channel.id, searchState.mostRecentQuery) };
    return obj;
  });
  searchFetching = stateFromStoresObject.searchFetching;
  searchResults = stateFromStoresObject.searchResults;
  const items1 = [searchResults, searchFetching];
  const memo = react.useMemo(() => {
    let combined = searchResults;
    const obj = searchResults;
    if (searchFetching) {
      combined = obj.concat(closure_16);
    }
    return combined;
  }, items1);
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp12 = closure_11(closure_14, {});
  const tmp10 = importDefault;
  if (first) {
    if (0 === searchResults.length) {
      let tmp11Result;
      if (!searchFetching) {
        let obj2 = { channel };
        tmp11Result = tmp11(closure_15, obj2);
      }
      tmp12 = tmp11Result;
    }
    const obj3 = {
      data: memo,
      renderItem(item) {
          let tmp4;
          item = item.item;
          if (null != item) {
            const obj = { entry: item };
            tmp4 = closure_1_11(closure_1(searchFetching[23]), obj);
          } else {
            tmp4 = closure_1_11(closure_1(searchFetching[24]), {});
          }
          return tmp4;
        },
      keyExtractor(guildId, arg1) {
          if (null != guildId) {
            guildId = guildId.guildId;
          } else {
            guildId = arg1.toString();
          }
          return guildId;
        },
      ListEmptyComponent() {
          const obj = { channel };
          return unpackModuleId(closure_15, obj);
        },
      scrollIndicatorInsets: { right: 0 },
      style: tmp.scrollContainer,
      contentContainerStyle: obj4
    };
    obj4 = { paddingBottom: bottom + 16 };
    tmp11Result = tmp11(closure_7, obj3);
  }
  const obj5 = { style: tmp.flex, children: items2 };
  const obj6 = { style: tmp.fauxHeader, children: closure_11(tmp10Result, obj7) };
  const FauxHeader = tmp6(tmp7[27]).FauxHeader;
  obj7 = {
    placeholder: intl.string(channel(searchFetching[14]).t.nL2wKD),
    onChange: tmp5,
    onClose() {
      const obj = GuildDirectoryActionCreatorsAll;
      obj.clearDirectorySearch(channel.id);
      const obj2 = GuildDirectorySearchModalActionCreatorsDefault;
      obj2.close();
    },
    onSubmitEditing: function handleSearch() {
      const tmp = closure_2;
      if (0 !== closure_2.trim().length) {
        const obj = GuildDirectoryActionCreatorsAll;
        const result = obj.searchDirectoryEntries(channel.id, tmp);
        const obj2 = { directory_channel_id: channel.id, directory_guild_id: channel.getGuildId() };
        const track = AnalyticsUtilsDefault.track;
        const GUILD_DIRECTORY_SEARCH = constants.GUILD_DIRECTORY_SEARCH;
        AnalyticsUtilsDefault;
        track(GUILD_DIRECTORY_SEARCH, obj2);
        if (null != result) {
          result.then(() => closure_1_1(true));
        } else {
          closure_1(true);
        }
      }
    }
  };
  tmp10Result = tmp10(searchFetching[26]);
  intl = tmp6(tmp7[14]).intl;
  items2 = [closure_11(FauxHeader, obj6), tmp12];
  return closure_12(closure_6, obj5);
});
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearch.tsx");

export default tmp6;
