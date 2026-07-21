// Module ID: 11686
// Function ID: 90651
// Name: keyExtractor
// Dependencies: []
// Exports: default

// Module 11686 (keyExtractor)
import ArrayResult from "module_20";

function keyExtractor(type) {
  type = undefined;
  if (null != type) {
    type = type.type;
  }
  if (type === arg1(dependencyMap[12]).RowType.ENTRY) {
    let guildId = type.entry.guildId;
  } else {
    let type1;
    if (null != type) {
      type1 = type.type;
    }
    const _HermesInternal = HermesInternal;
    guildId = "" + type1 + arg1.toString();
  }
  return guildId;
}
function renderItem(item) {
  item = item.item;
  let type;
  if (null != item) {
    type = item.type;
  }
  if (arg1(dependencyMap[12]).RowType.HEADER === type) {
    let obj = { children: item.header };
    return callback(GuildDirectoryHeaderRowItem, obj);
  } else if (arg1(dependencyMap[12]).RowType.ENTRY === type) {
    obj = { entry: item.entry };
    return callback(importDefault(dependencyMap[13]), obj);
  } else {
    return callback(importDefault(dependencyMap[14]), {});
  }
}
function GuildDirectoryHeaderRowItem(children) {
  const obj = { "Null": null, "Null": null, "Null": null, style: callback3().categorySectionText, children: children.children };
  return callback(arg1(dependencyMap[15]).Text, obj);
}
function GuildDirectoryHeader(guild) {
  guild = guild.guild;
  const tmp = callback3();
  const features = guild.features;
  let obj = {};
  obj = { style: tmp.headerWrapper };
  obj = {};
  const hasItem = features.has(constants.HUB);
  obj.source = arg1(dependencyMap[16]);
  obj.style = tmp.backgroundImage;
  const items = [callback(closure_6, obj), ];
  const obj1 = { style: tmp.textWrapper };
  const obj2 = { "Null": true, "Null": true, "Null": true, style: tmp.headerTitle };
  const intl = arg1(dependencyMap[17]).intl;
  obj2.children = intl.string(arg1(dependencyMap[17]).t.IT7qoC);
  const items1 = [callback(arg1(dependencyMap[15]).Text, obj2), , , ];
  const obj3 = { style: items2 };
  const items2 = [tmp.headerDescription];
  const intl2 = arg1(dependencyMap[17]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[17]).t.5PoYts);
  items1[1] = callback(arg1(dependencyMap[15]).Text, obj3);
  const obj4 = { variant: "primary-overlay", icon: callback(arg1(dependencyMap[19]).MagnifyingGlassIcon, { flex: 7471105, flexGrow: -2013265920 }) };
  const intl3 = arg1(dependencyMap[17]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[17]).t.nL2wKD);
  obj4.onPress = guild.onPressSearch;
  items1[2] = callback(arg1(dependencyMap[18]).Button, obj4);
  items1[3] = callback(arg1(dependencyMap[20]).TTIFirstContentfulPaint, { label: "hub_directory" });
  obj1.children = items1;
  items[1] = callback2(closure_5, obj1);
  obj.children = items;
  const items3 = [callback2(closure_5, obj), ];
  let tmp5 = null;
  if (hasItem) {
    const obj5 = { guild, onDirectoryPage: true };
    tmp5 = callback(importDefault(dependencyMap[21]), obj5);
  }
  items3[1] = tmp5;
  obj.children = items3;
  return callback2(closure_21, obj);
}
function GuildDirectoryFooter(hideFooter) {
  let channel;
  ({ guild: closure_0, channel } = hideFooter);
  const importDefault = channel;
  const tmp = callback3();
  let obj = arg1(dependencyMap[22]);
  let tmp2 = null;
  if (obj.useCanCreateOrAddGuildInDirectory(channel)) {
    tmp2 = null;
    if (!hideFooter.hideFooter) {
      obj = { accessibilityRole: "button" };
      const intl = arg1(dependencyMap[17]).intl;
      obj.accessibilityLabel = intl.string(arg1(dependencyMap[17]).t.H9jxS1);
      obj.onPress = function onPress() {
        let obj = channel(closure_3[24]);
        obj = { directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id };
        return obj.open(obj);
      };
      obj = { style: tmp.footer };
      const obj1 = { style: tmp.addIcon, children: callback(arg1(dependencyMap[25]).PlusMediumIcon, {}) };
      const items = [callback(closure_5, obj1), ];
      const obj2 = {};
      const intl2 = arg1(dependencyMap[17]).intl;
      obj2.children = intl2.string(arg1(dependencyMap[17]).t.H9jxS1);
      items[1] = callback(arg1(dependencyMap[15]).Text, obj2);
      obj.children = items;
      obj.children = callback2(closure_5, obj);
      tmp2 = callback(arg1(dependencyMap[23]).PressableOpacity, obj);
    }
  }
  return tmp2;
}
let closure_4 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ View: closure_5, Image: closure_6, SectionList: closure_7 } = tmp2);
let closure_8 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
const DirectoryEntryCategories = arg1(dependencyMap[5]).DirectoryEntryCategories;
const tmp3 = arg1(dependencyMap[6]);
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = tmp3.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: closure_13, DirectoryChannelScrollBehavior: closure_14 } = tmp3);
({ AnalyticsObjectTypes: closure_15, AnalyticsObjects: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = arg1(dependencyMap[8]));
const tmp5 = arg1(dependencyMap[8]);
let closure_22 = require("module_20").fill(null);
let obj1 = arg1(dependencyMap[9]);
let obj = {};
obj = { height: tmp2.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj.border = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
obj.list = obj1;
obj.headerWrapper = { overflow: "hidden", height: GUILD_DIRECTORY_BASE_HEADER_HEIGHT };
obj.backgroundImage = {};
obj.textWrapper = {};
obj.headerTitle = { collapsable: "absolute", preventClipping: 0 };
obj.headerDescription = {};
obj.footer = {};
obj.addIcon = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj.categorySectionText = { 0: "selectedStreamId", 9223372036854775807: "change" };
let closure_23 = obj1.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectory.tsx");

export default function GuildDirectory(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const importDefault = channel.guildId;
  let closure_3;
  let React;
  let closure_11;
  function handleTapCategory() {
    if (ref2.current >= sum) {
      closure_3.current = true;
    }
  }
  let tmp = callback3();
  let obj = arg1(closure_3[26]);
  const items = [closure_8];
  let onPressSearch = obj.useStateFromStores(items, () => allEntriesCount.getGuild(guildId));
  const importAll = onPressSearch;
  let obj1 = React;
  closure_3 = React.useRef(null);
  let bottom = importDefault(closure_3[27])().bottom;
  let obj2 = arg1(closure_3[11]);
  const hubProgressBarCompletedSteps = obj2.useHubProgressBarCompletedSteps(onPressSearch);
  let obj3 = arg1(closure_3[11]);
  if (null == obj3.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  } else {
    sum = history + GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
  }
  React = sum;
  let tmp2Result = tmp2(tmp3[26]);
  const items1 = [closure_10];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items1, () => {
    const currentCategoryId = ref.getCurrentCategoryId(channel.id);
    let tmp3 = null;
    if (currentCategoryId !== ref2.ALL) {
      tmp3 = currentCategoryId;
    }
    const directoryEntries = ref.getDirectoryEntries(channel.id, tmp3);
    const directoryAllEntriesCount = ref.getDirectoryAllEntriesCount(channel.id);
    const obj = { currentCategoryId, directoryEntries };
    const directoryCategoryCounts = ref.getDirectoryCategoryCounts(channel.id);
    let isFetchingResult = ref.isFetching();
    if (!isFetchingResult) {
      isFetchingResult = null === currentCategoryId && null == directoryEntries;
      const tmp8 = null === currentCategoryId && null == directoryEntries;
    }
    obj.directoryIsFetching = isFetchingResult;
    obj.allEntriesCount = directoryAllEntriesCount;
    obj.categoryCounts = directoryCategoryCounts;
    return obj;
  });
  const currentCategoryId = stateFromStoresObject.currentCategoryId;
  const directoryEntries = stateFromStoresObject.directoryEntries;
  const directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  const allEntriesCount = stateFromStoresObject.allEntriesCount;
  closure_8 = allEntriesCount;
  const categoryCounts = stateFromStoresObject.categoryCounts;
  const items2 = [directoryEntries, directoryIsFetching];
  const effect = obj1.useEffect(() => {
    channel(closure_3[28]).trackAppUIViewed();
    const obj = channel(closure_3[28]);
    guildId(closure_3[29]).recordRender(Object.keys(null != directoryEntries ? directoryEntries : {}).length, !directoryIsFetching);
  }, items2);
  const items3 = [channel.id];
  const effect1 = obj1.useEffect(() => () => {
    const lastMessageIdResult = closure_9.lastMessageId(lib.id);
    if (null != lastMessageIdResult) {
      let obj = lib(closure_3[30]);
      obj = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
      obj.ack(lib.id, obj, true, true, lastMessageIdResult);
    }
  }, items3);
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  let num = obj1.useMemo(() => {
    if (directoryIsFetching) {
      let directoryRows = closure_22;
    } else if (null != directoryEntries) {
      const _Object = Object;
      directoryRows = channel(closure_3[12]).generateDirectoryRows(directoryIsFetching, Object.values(directoryEntries), currentCategoryId);
      const obj = channel(closure_3[12]);
    } else {
      directoryRows = [];
    }
    return directoryRows;
  }, items4);
  let ref = obj1.useRef(null);
  closure_10 = ref;
  closure_11 = obj1.useRef(0);
  tmp2Result = tmp2(tmp3[31]);
  const _location = tmp2Result.useLocation();
  const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = _location;
  const history = arg1(closure_3[31]).useHistory();
  const items5 = [_location, history];
  const effect2 = obj1.useEffect(() => {
    const state = _location.state;
    let scrollBehavior;
    if (null != state) {
      scrollBehavior = state.scrollBehavior;
    }
    if (scrollBehavior === handleTapCategory.GUILD_LIST_TOP) {
      const current = ref.current;
      if (null != current) {
        current.scrollToLocation({});
      }
      const obj = { state: {} };
      const replaced = history.replace(obj);
    }
  }, items5);
  const items6 = [channel.id];
  const effect3 = obj1.useEffect(() => {
    const directoryEntries = onPressSearch(closure_3[32]).fetchDirectoryEntries(channel.id);
    const obj = onPressSearch(closure_3[32]);
    const directoryCounts = onPressSearch(closure_3[32]).fetchDirectoryCounts(channel.id);
  }, items6);
  let id;
  if (null != onPressSearch) {
    id = onPressSearch.id;
  }
  const items7 = [id, channel.id, currentCategoryId];
  const effect4 = obj1.useEffect(() => {
    let obj = guildId(closure_3[33]);
    obj = { directory_channel_id: channel.id };
    let id;
    if (null != onPressSearch) {
      id = onPressSearch.id;
    }
    obj.directory_guild_id = id;
    obj.primary_category_id = currentCategoryId;
    obj.track(constants.GUILD_DIRECTORY_CHANNEL_VIEWED, obj);
  }, items7);
  const items8 = [num];
  const effect5 = React.useEffect(() => {
    if (ref.current) {
      const current = ref.current;
      if (null != current) {
        current.scrollToLocation({});
      }
      ref.current = null;
    }
  }, items8);
  if (null == onPressSearch) {
    return null;
  } else {
    if (!directoryIsFetching) {
      if (0 === allEntriesCount) {
        obj = {};
        obj = { paddingBottom: bottom };
        obj.style = obj;
        obj1 = { style: tmp.border };
        const items9 = [callback(currentCategoryId, obj1), , ];
        obj2 = { guild: onPressSearch, channel };
        items9[1] = callback(importDefault(closure_3[34]), obj2);
        obj3 = { label: "guild_directory_empty" };
        items9[2] = callback(arg1(closure_3[20]).TTIFirstContentfulPaint, obj3);
        obj.children = items9;
        let tmp23 = callback2(currentCategoryId, obj);
      }
    }
    const obj4 = {};
    const obj5 = {
      ref,
      onScroll(nativeEvent) {
          closure_11.current = nativeEvent.nativeEvent.contentOffset.y;
        },
      scrollEventThrottle: 16
    };
    const obj6 = { paddingBottom: bottom };
    obj5.contentContainerStyle = obj6;
    obj5.windowSize = 10;
    bottom = GuildDirectoryHeader;
    const obj7 = { guild: onPressSearch };
    onPressSearch = function onPressSearch(arg0) {
      let obj = guildId(closure_3[35]);
      obj = { channel };
      obj.open(obj);
    };
    obj7.onPressSearch = onPressSearch;
    obj5.ListHeaderComponent = callback(GuildDirectoryHeader, obj7);
    ref = { data: num };
    const items10 = [ref];
    obj5.sections = items10;
    obj5.stickySectionHeadersEnabled = true;
    obj5.style = tmp.list;
    const obj8 = {};
    num = 1;
    obj8.right = 1;
    obj5.scrollIndicatorInsets = obj8;
    tmp = keyExtractor;
    obj5.keyExtractor = keyExtractor;
    obj5.renderItem = renderItem;
    obj5.renderSectionHeader = function renderSectionHeader() {
      return callback(guildId(closure_3[36]), { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount });
    };
    obj5.ListFooterComponent = function ListFooterComponent() {
      return callback(closure_28, { guild: onPressSearch, channel, hideFooter: false });
    };
    obj4.children = callback(directoryIsFetching, obj5);
    tmp23 = callback(currentCategoryId, obj4);
  }
};
