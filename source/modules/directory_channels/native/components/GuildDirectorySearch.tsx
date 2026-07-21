// Module ID: 10023
// Function ID: 77420
// Name: DefaultState
// Dependencies: []
// Exports: default

// Module 10023 (DefaultState)
import ArrayResult from "module_20";

function DefaultState() {
  const tmp = callback4();
  const arg1 = tmp;
  let obj = { style: tmp.emptyWrapper };
  obj = { style: tmp.emptyStateImage, source: importDefault(dependencyMap[9]) };
  const items = [callback2(closure_7, obj), ];
  obj = { style: tmp.emptyStateText };
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.format(arg1(dependencyMap[11]).t.aYLd8O, {
    protipHook(children) {
      return callback(tmp(closure_3[12]).LegacyText, { style: tmp.proTip, children }, "protip");
    }
  });
  items[1] = callback2(arg1(dependencyMap[10]).Text, obj);
  obj.children = items;
  return callback3(closure_6, obj);
}
function EmptyState(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback4();
  let obj = arg1(dependencyMap[13]);
  const items = [closure_9];
  const importDefault = obj.useStateFromStores(items, () => guild.getGuild(channel.getGuildId()));
  let obj1 = arg1(dependencyMap[14]);
  const canCreateOrAddGuildInDirectory = obj1.useCanCreateOrAddGuildInDirectory(channel);
  const intl = arg1(dependencyMap[11]).intl;
  if (canCreateOrAddGuildInDirectory) {
    obj = {
      addServerHook() {
          let obj = lib(closure_3[15]);
          obj = { directoryGuildName: lib.name, directoryGuildId: lib.id, directoryChannelId: channel.id };
          obj.open(obj);
        }
    };
    let formatResult = intl.format(tmp3(tmp4[11]).t.ZxNVMy, obj);
  } else {
    formatResult = intl.string(tmp3(tmp4[11]).t.vYyEnv);
  }
  obj = { style: tmp.emptyWrapper };
  obj1 = { style: tmp.emptyStateImage, source: importDefault(dependencyMap[9]) };
  const items1 = [callback2(closure_7, obj1), , ];
  const obj2 = { "Null": "auto", "Null": 1, "Null": 16, style: tmp.emptyStateTitle };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[11]).t.6HXiuE);
  items1[1] = callback2(arg1(dependencyMap[10]).Text, obj2);
  const obj3 = { style: tmp.emptyStateText, children: formatResult };
  items1[2] = callback2(arg1(dependencyMap[10]).Text, obj3);
  obj.children = items1;
  return callback3(closure_6, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ View: closure_6, Image: closure_7, FlatList: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
const tmp3 = arg1(dependencyMap[5]);
const AnalyticEvents = tmp3.AnalyticEvents;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { flex: {}, fauxHeader: { paddingHorizontal: 0 } };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.scrollContainer = obj;
obj.emptyWrapper = {};
obj.emptyStateImage = { marginBottom: 24 };
obj.emptyStateText = { textAlign: "center" };
obj.emptyStateTitle = {};
const tmp4 = arg1(dependencyMap[6]);
obj.proTip = { fontFamily: tmp3.Fonts.PRIMARY_BOLD, color: importDefault(dependencyMap[8]).unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_14 = obj.createStyles(obj);
const obj1 = { fontFamily: tmp3.Fonts.PRIMARY_BOLD, color: importDefault(dependencyMap[8]).unsafe_rawColors.GREEN_360, textTransform: "uppercase" };
let closure_15 = require("module_20").fill(null);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearch.tsx");

export default function GuildDirectorySearch(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  const importDefault = tmp2[1];
  const tmp3 = callback(React.useState(""), 2);
  let closure_2 = tmp3[0];
  let obj = arg1(dependencyMap[13]);
  const items = [closure_10];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const searchState = store.getSearchState(channel.id);
    return { searchFetching: searchState.fetching, searchResults: store.getSearchResults(channel.id, searchState.mostRecentQuery) };
  });
  const searchFetching = stateFromStoresObject.searchFetching;
  const dependencyMap = searchFetching;
  const callback = searchResults;
  const items1 = [stateFromStoresObject.searchResults, searchFetching];
  let memo = React.useMemo(() => {
    let combined = searchResults;
    if (searchFetching) {
      combined = searchResults.concat(closure_15);
    }
    return combined;
  }, items1);
  let bottom = importDefault(dependencyMap[16])().bottom;
  if (!tmp2[0]) {
    obj = { style: tmp.flex };
    obj = { style: tmp.fauxHeader };
    const obj1 = {};
    const intl = arg1(dependencyMap[11]).intl;
    obj1.placeholder = intl.string(arg1(dependencyMap[11]).t.nL2wKD);
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
        callback(searchFetching[23]).track(constants.GUILD_DIRECTORY_SEARCH, obj);
        if (null != result) {
          result.then(() => callback(true));
        } else {
          callback(true);
        }
        const obj2 = callback(searchFetching[23]);
      }
    };
    obj.children = callback2(importDefault(dependencyMap[20]), obj1);
    const items2 = [callback2(arg1(dependencyMap[19]).FauxHeader, obj), tmp5];
    obj.children = items2;
    return callback3(closure_6, obj);
  } else {
    if (0 === searchResults.length) {
      if (!searchFetching) {
        const obj2 = { channel };
        let tmp8 = callback2(EmptyState, obj2);
      }
    }
    const obj3 = {
      data: memo,
      renderItem(item) {
          item = item.item;
          if (null != item) {
            const obj = { entry: item };
            let tmp4 = callback2(callback(searchFetching[17]), obj);
          } else {
            tmp4 = callback2(callback(searchFetching[18]), {});
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
          return callback2(closure_17, { channel });
        }
    };
    const obj4 = { right: 0 };
    obj3.scrollIndicatorInsets = obj4;
    obj3.style = tmp.scrollContainer;
    memo = {};
    bottom = bottom + 16;
    memo.paddingBottom = bottom;
    obj3.contentContainerStyle = memo;
    tmp8 = callback2(closure_8, obj3);
  }
};
