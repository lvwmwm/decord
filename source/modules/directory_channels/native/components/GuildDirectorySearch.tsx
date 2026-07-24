// Module ID: 10064
// Function ID: 77678
// Name: DefaultState
// Dependencies: [57, 31, 27, 1838, 10065, 653, 33, 4130, 689, 10068, 4126, 1212, 1273, 566, 10069, 10070, 1557, 10104, 10105, 5087, 5771, 10078, 10062, 675, 2]
// Exports: default

// Module 10064 (DefaultState)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_9 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ArrayResult from "module_5771";

let closure_12;
let closure_13;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
function DefaultState() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = { style: tmp.emptyWrapper };
  obj = { style: tmp.emptyStateImage, source: importDefault(10068) };
  const items = [callback(closure_7, obj), ];
  obj = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.aYLd8O, {
    protipHook(children) {
      return outer1_12(tmp(outer1_3[12]).LegacyText, { style: tmp.proTip, children }, "protip");
    }
  });
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(closure_6, obj);
}
function EmptyState(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(566);
  const items = [closure_9];
  const importDefault = obj.useStateFromStores(items, () => outer1_9.getGuild(channel.getGuildId()));
  let obj1 = channel(10069);
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  const intl = channel(1212).intl;
  if (canCreateOrAddGuildInDirectory) {
    obj = {
      addServerHook() {
          let obj = lib(outer1_3[15]);
          obj = { directoryGuildName: lib.name, directoryGuildId: lib.id, directoryChannelId: channel.id };
          obj.open(obj);
        }
    };
    let formatResult = intl.format(tmp3(1212).t.ZxNVMy, obj);
  } else {
    formatResult = intl.string(tmp3(1212).t.vYyEnv);
  }
  obj = { style: tmp.emptyWrapper };
  obj1 = { style: tmp.emptyStateImage, source: importDefault(10068) };
  const items1 = [callback(closure_7, obj1), , ];
  const obj2 = { style: tmp.emptyStateTitle, variant: "text-sm/semibold", color: "mobile-text-heading-primary" };
  const intl2 = channel(1212).intl;
  obj2.children = intl2.string(channel(1212).t["6HXiuE"]);
  items1[1] = callback(channel(4126).Text, obj2);
  const obj3 = { style: tmp.emptyStateText, variant: "text-sm/medium", color: "text-default", children: formatResult };
  items1[2] = callback(channel(4126).Text, obj3);
  obj.children = items1;
  return callback2(closure_6, obj);
}
({ View: closure_6, Image: closure_7, FlatList: closure_8 } = get_ActivityIndicator);
const AnalyticEvents = ME.AnalyticEvents;
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1, height: "100%" }, fauxHeader: { paddingHorizontal: 0 } };
_createForOfIteratorHelperLoose = { flex: 1, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.scrollContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emptyWrapper = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.emptyStateImage = { marginBottom: 24 };
_createForOfIteratorHelperLoose.emptyStateText = { textAlign: "center" };
_createForOfIteratorHelperLoose.emptyStateTitle = { marginBottom: 4, textAlign: "center" };
_createForOfIteratorHelperLoose.proTip = { fontFamily: ME.Fonts.PRIMARY_BOLD, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { fontFamily: ME.Fonts.PRIMARY_BOLD, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_15 = require("module_5771").fill(null);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearch.tsx");

export default function GuildDirectorySearch(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = searchResults(React.useState(false), 2);
  const importDefault = tmp2[1];
  const tmp3 = searchResults(React.useState(""), 2);
  let closure_2 = tmp3[0];
  let obj = channel(searchFetching[13]);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const searchState = outer1_10.getSearchState(channel.id);
    return { searchFetching: searchState.fetching, searchResults: outer1_10.getSearchResults(channel.id, searchState.mostRecentQuery) };
  });
  searchFetching = stateFromStoresObject.searchFetching;
  searchResults = stateFromStoresObject.searchResults;
  const items1 = [searchResults, searchFetching];
  let memo = React.useMemo(() => {
    let combined = searchResults;
    if (searchFetching) {
      combined = searchResults.concat(outer1_15);
    }
    return combined;
  }, items1);
  let bottom = importDefault(searchFetching[16])().bottom;
  if (!tmp2[0]) {
    obj = { style: tmp.flex };
    obj = { style: tmp.fauxHeader };
    const obj1 = {};
    const intl = channel(searchFetching[11]).intl;
    obj1.placeholder = intl.string(channel(searchFetching[11]).t.nL2wKD);
    obj1.onChange = tmp3[1];
    obj1.onClose = function onClose() {
      lib(searchFetching[21]).clearDirectorySearch(channel.id);
      const obj = lib(searchFetching[21]);
      callback(searchFetching[22]).close();
    };
    obj1.onSubmitEditing = function onSubmitEditing() {
      if (0 !== lib.trim().length) {
        let obj = lib(searchFetching[21]);
        const result = obj.searchDirectoryEntries(channel.id, lib);
        obj = { directory_channel_id: channel.id, directory_guild_id: channel.getGuildId() };
        callback(searchFetching[23]).track(outer1_11.GUILD_DIRECTORY_SEARCH, obj);
        if (null != result) {
          result.then(() => outer1_1(true));
        } else {
          callback(true);
        }
        const obj2 = callback(searchFetching[23]);
      }
    };
    obj.children = callback(importDefault(searchFetching[20]), obj1);
    const items2 = [callback(channel(searchFetching[19]).FauxHeader, obj), tmp5];
    obj.children = items2;
    return callback2(closure_6, obj);
  } else {
    if (0 === searchResults.length) {
      if (!searchFetching) {
        let obj2 = { channel };
        let tmp8 = callback(EmptyState, obj2);
      }
    }
    const obj3 = {
      data: memo,
      renderItem(item) {
          item = item.item;
          if (null != item) {
            const obj = { entry: item };
            let tmp4 = outer1_12(callback(searchFetching[17]), obj);
          } else {
            tmp4 = outer1_12(callback(searchFetching[18]), {});
          }
          return tmp4;
        },
      keyExtractor(guildId) {
          if (null != guildId) {
            guildId = guildId.guildId;
          } else {
            guildId = arg1.toString();
          }
          return guildId;
        },
      ListEmptyComponent() {
          return outer1_12(outer1_17, { channel });
        }
    };
    const obj4 = { right: 0 };
    obj3.scrollIndicatorInsets = obj4;
    obj3.style = tmp.scrollContainer;
    memo = {};
    bottom = bottom + 16;
    memo.paddingBottom = bottom;
    obj3.contentContainerStyle = memo;
    tmp8 = callback(closure_8, obj3);
  }
};
