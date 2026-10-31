// Module ID: 13835
// Function ID: 13836
// Name: GuildDirectorySearch
// Dependencies: [32, 19, 17, 4885, 13836, 1072, 21, 5014, 575, 7148, 5717, 13839, 5624, 1113, 1187, 504, 13840, 13841, 1625, 13868, 13869, 7294, 6998, 7557, 13849, 13833, 1252, 2]
// Exports: default

// Module 13835 (GuildDirectorySearch)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import FastImageDefault from "FastImage" /* 5717 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 13833 */;
import AssetRegistryDefault from "AssetRegistry" /* 13839 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 13841 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 13849 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import GuildDirectorySearchStore from "GuildDirectorySearchStore" /* 13836 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let Fonts;
let c10;
let c9;
let obj2;
let obj3;
let unpackModuleId;
function DefaultState() {
  let closure_1;
  let intl;
  let items;
  let obj5;
  let proTip;
  const tmp = closure_12();
  _require = tmp;
  let obj = require("useTypeConsolidationTextTransform");
  importDefault = obj.useTypeConsolidationTextTransform("GuildDirectorySearch");
  const obj2 = { style: tmp.emptyWrapper, children: items };
  const obj3 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [closure_10(tmp2, obj3), ];
  const obj4 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: intl.format(require("intl").t.aYLd8O, obj5) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  obj5 = {
    protipHook(children) {
      let items;
      const obj = { style: items, children };
      items = [proTip.proTip, closure_1];
      return authStore(native.LegacyText, obj, "protip");
    }
  };
  items[1] = closure_10(Text, obj4);
  return closure_11(View, obj2);
}
function EmptyState(channel) {
  let formatResult;
  let intl2;
  let items1;
  let user;
  channel = channel.channel;
  const tmp = closure_12();
  let obj = channel(504);
  const items = [GuildStore];
  importDefault = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
  let obj2 = channel(13840);
  const canCreateOrAddGuildInDirectory = obj2.useCanCreateOrAddGuildInDirectory(channel);
  const intl = channel(1113).intl;
  if (canCreateOrAddGuildInDirectory) {
    const obj3 = {
      addServerHook() {
          const obj = GuildDirectoryAddModalActionCreatorsDefault;
          const obj2 = { directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id };
          obj.open(obj2);
        }
    };
    formatResult = intl.format(tmp2(1113).t.ZxNVMy, obj3);
  } else {
    formatResult = intl.string(tmp2(1113).t.vYyEnv);
  }
  const obj4 = { style: tmp.emptyWrapper, children: items1 };
  const obj5 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
  const tmp6 = FastImageDefault;
  items1 = [closure_10(tmp6, obj5), , ];
  const obj6 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: intl2.string(channel(1113).t["6HXiuE"]) };
  const Text = tmp2(5624).Text;
  intl2 = tmp2(1113).intl;
  items1[1] = closure_10(Text, obj6);
  const obj7 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: formatResult };
  items1[2] = closure_10(channel(5624).Text, obj7);
  return closure_11(View, obj4);
}
const View = react_native.View;
({ AnalyticEvents: c9, Fonts } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1, height: "100%" }, fauxHeader: { paddingHorizontal: 0 }, scrollContainer: obj2, emptyWrapper: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, emptyStateImage: { marginBottom: 24 }, emptyStateText: { textAlign: "center" }, emptyStateTitle: { marginBottom: 4, textAlign: "center" }, proTip: obj3 };
obj2 = { flex: 1, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_12 = createStyles(obj);
const ArrayResult = Array(20);
let closure_15 = ArrayResult.fill(null);
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
  let tmp = closure_12();
  const tmp2 = searchResults(react.useState(false), 2);
  importDefault = tmp2[1];
  const first = tmp2[0];
  let tmp4 = searchResults(react.useState(""), 2);
  let closure_2 = tmp4[0];
  const tmp5 = tmp4[1];
  let obj = channel(searchFetching[15]);
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
      combined = obj.concat(closure_15);
    }
    return combined;
  }, items1);
  const bottom = require("useSafeAreaInsets")().bottom;
  let tmp12 = closure_10(DefaultState, {});
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
            tmp4 = closure_1_10(closure_1(searchFetching[19]), obj);
          } else {
            tmp4 = closure_1_10(closure_1(searchFetching[20]), {});
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
      getItemType(arg0) {
          let str = "guild";
          if (null == arg0) {
            str = "placeholder";
          }
          return str;
        },
      ListEmptyComponent() {
          const obj = { channel };
          return authStore(EmptyState, obj);
        },
      scrollIndicatorInsets: { right: 0 },
      style: tmp.scrollContainer,
      contentContainerStyle: obj4
    };
    obj4 = { paddingBottom: bottom + 16 };
    tmp11Result = tmp11(tmp6(tmp7[21]).FlashList, obj3);
  }
  const obj5 = { style: tmp.flex, children: items2 };
  const obj6 = { style: tmp.fauxHeader, children: closure_10(tmp10Result, obj7) };
  const FauxHeader = tmp6(tmp7[22]).FauxHeader;
  obj7 = {
    placeholder: intl.string(channel(searchFetching[13]).t.nL2wKD),
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
  tmp10Result = tmp10(searchFetching[23]);
  intl = tmp6(tmp7[13]).intl;
  items2 = [closure_10(FauxHeader, obj6), tmp12];
  return closure_11(View, obj5);
};
