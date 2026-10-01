// Module ID: 11785
// Function ID: 11786
// Name: GuildDirectorySearch
// Dependencies: [32, 19, 17, 2067, 11786, 1074, 21, 4836, 576, 6400, 11789, 4832, 1115, 1177, 504, 11790, 11791, 1613, 11818, 11819, 5936, 6794, 11799, 11783, 1241, 2]
// Exports: default

// Module 11785 (GuildDirectorySearch)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11783 */;
import AssetRegistryDefault from "AssetRegistry" /* 11789 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11791 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11799 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildDirectorySearchStore from "GuildDirectorySearchStore" /* 11786 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let Fonts;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function DefaultState() {
  let closure_1;
  let intl;
  let items;
  let obj5;
  let proTip;
  const tmp = closure_14();
  _require = tmp;
  let obj = require("useTypeConsolidationTextTransform");
  importDefault = obj.useTypeConsolidationTextTransform("GuildDirectorySearch");
  const obj2 = { style: tmp.emptyWrapper, children: items };
  items = [, ];
  const obj3 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
  items[0] = closure_12(closure_7, obj3);
  const obj4 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: intl.format(require("intl").t.aYLd8O, obj5) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  obj5 = {
    protipHook(children) {
      let items;
      const obj = { style: items, children };
      items = [proTip.proTip, closure_1];
      return closure_12(native.LegacyText, obj, "protip");
    }
  };
  items[1] = closure_12(Text, obj4);
  return closure_13(closure_6, obj2);
}
function EmptyState(channel) {
  let formatResult;
  let intl2;
  let items1;
  let user;
  channel = channel.channel;
  const tmp = closure_14();
  let obj = channel(504);
  const items = [GuildStore];
  importDefault = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
  let obj2 = channel(11790);
  const canCreateOrAddGuildInDirectory = obj2.useCanCreateOrAddGuildInDirectory(channel);
  const intl = channel(1115).intl;
  if (canCreateOrAddGuildInDirectory) {
    const obj3 = {
      addServerHook() {
          const obj = GuildDirectoryAddModalActionCreatorsDefault;
          const obj2 = { directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id };
          obj.open(obj2);
        }
    };
    formatResult = intl.format(tmp2(1115).t.ZxNVMy, obj3);
  } else {
    formatResult = intl.string(tmp2(1115).t.vYyEnv);
  }
  const obj4 = { style: tmp.emptyWrapper, children: items1 };
  items1 = [, , ];
  const obj5 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
  items1[0] = closure_12(closure_7, obj5);
  const obj6 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl2.string(channel(1115).t["6HXiuE"]) };
  const Text = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items1[1] = closure_12(Text, obj6);
  const obj7 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: formatResult };
  items1[2] = closure_12(channel(4832).Text, obj7);
  return closure_13(closure_6, obj4);
}
({ View: metroRequire, Image: metroImportDefault, FlatList: metroImportAll } = react_native);
({ AnalyticEvents: unpackModuleId, Fonts } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1, height: "100%" }, fauxHeader: { paddingHorizontal: 0 }, scrollContainer: obj2, emptyWrapper: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, emptyStateImage: { marginBottom: 24 }, emptyStateText: { textAlign: "center" }, emptyStateTitle: { marginBottom: 4, textAlign: "center" }, proTip: obj3 };
obj2 = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_14 = createStyles(obj);
const ArrayResult = Array(20);
let closure_17 = ArrayResult.fill(null);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearch.tsx");

export default function GuildDirectorySearch(channel) {
  let closure_1;
  let intl;
  let items2;
  let obj4;
  let obj7;
  let tmp10Result;
  channel = channel.channel;
  let searchFetching;
  let searchResults;
  let tmp = closure_14();
  const tmp2 = searchResults(react.useState(false), 2);
  importDefault = tmp2[1];
  const first = tmp2[0];
  let tmp4 = searchResults(react.useState(""), 2);
  let closure_2 = tmp4[0];
  const tmp5 = tmp4[1];
  let obj = channel(searchFetching[14]);
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
      combined = obj.concat(closure_17);
    }
    return combined;
  }, items1);
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp12 = closure_12(DefaultState, {});
  const tmp10 = importDefault;
  if (first) {
    if (0 === searchResults.length) {
      let tmp11Result;
      if (!searchFetching) {
        let obj2 = { channel };
        tmp11Result = tmp11(EmptyState, obj2);
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
            tmp4 = closure_1_12(closure_1(searchFetching[18]), obj);
          } else {
            tmp4 = closure_1_12(closure_1(searchFetching[19]), {});
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
          return closure_12(EmptyState, obj);
        },
      scrollIndicatorInsets: { right: 0 },
      style: tmp.scrollContainer,
      contentContainerStyle: obj4
    };
    obj4 = { paddingBottom: bottom + 16 };
    tmp11Result = tmp11(closure_8, obj3);
  }
  const obj5 = { style: tmp.flex, children: items2 };
  const obj6 = { style: tmp.fauxHeader, children: closure_12(tmp10Result, obj7) };
  const FauxHeader = tmp6(tmp7[20]).FauxHeader;
  obj7 = {
    placeholder: intl.string(channel(searchFetching[12]).t.nL2wKD),
    onChange: tmp5,
    onClose() {
      const obj = GuildDirectoryActionCreatorsAll;
      obj.clearDirectorySearch(channel.id);
      const obj2 = GuildDirectorySearchModalActionCreatorsDefault;
      obj2.close();
    },
    onSubmitEditing() {
      const tmp = closure_2;
      if (0 !== closure_2.trim().length) {
        const obj = GuildDirectoryActionCreatorsAll;
        const result = obj.searchDirectoryEntries(channel.id, tmp);
        const obj2 = { directory_channel_id: channel.id, directory_guild_id: channel.getGuildId() };
        const track = AnalyticsUtilsDefault.track;
        const GUILD_DIRECTORY_SEARCH = unpackModuleId.GUILD_DIRECTORY_SEARCH;
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
  tmp10Result = tmp10(searchFetching[21]);
  intl = tmp6(tmp7[12]).intl;
  items2 = [closure_12(FauxHeader, obj6), tmp12];
  return closure_13(closure_6, obj5);
};
