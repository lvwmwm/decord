// Module ID: 11724
// Function ID: 90963
// Name: keyExtractor
// Dependencies: [31, 27, 1838, 4142, 10074, 10067, 10072, 653, 33, 4130, 689, 11725, 11726, 10104, 10105, 4126, 11727, 1212, 4543, 5786, 10057, 11728, 10069, 4660, 10070, 11815, 566, 1557, 6707, 14, 5069, 3958, 10078, 675, 11816, 10062, 11820, 2]
// Exports: default

// Module 11724 (keyExtractor)
import _extends from "_extends";
import get_ActivityIndicator from "useSafeAreaInsets";
import closure_8 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { DirectoryEntryCategories } from "DirectoryEntryTypes";
import GuildDirectoryCreate from "GuildDirectoryCreate";
import ME from "ME";
import jsxProd from "expandLocation";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ArrayResult from "TTIFirstContentfulPaint";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function keyExtractor(type) {
  type = undefined;
  if (null != type) {
    type = type.type;
  }
  if (type === require(11726) /* RowType */.RowType.ENTRY) {
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
  if (require(11726) /* RowType */.RowType.HEADER === type) {
    let obj = { children: item.header };
    return callback(GuildDirectoryHeaderRowItem, obj);
  } else if (require(11726) /* RowType */.RowType.ENTRY === type) {
    obj = { entry: item.entry };
    return callback(importDefault(10104), obj);
  } else {
    return callback(importDefault(10105), {});
  }
}
function GuildDirectoryHeaderRowItem(children) {
  const obj = { style: callback3().categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: children.children };
  return callback(require(4126) /* Text */.Text, obj);
}
function GuildDirectoryHeader(guild) {
  guild = guild.guild;
  const tmp = callback3();
  const features = guild.features;
  let obj = {};
  obj = { style: tmp.headerWrapper };
  obj = {};
  const hasItem = features.has(constants.HUB);
  obj.source = require(11727) /* registerAsset */;
  obj.style = tmp.backgroundImage;
  const items = [callback(closure_6, obj), ];
  const obj1 = { style: tmp.textWrapper };
  const obj2 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t.IT7qoC);
  const items1 = [callback(require(4126) /* Text */.Text, obj2), , , ];
  const obj3 = { style: null, variant: "text-sm/medium", color: "text-overlay-light" };
  const items2 = [tmp.headerDescription];
  obj3.style = items2;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl2.string(require(1212) /* getSystemLocale */.t["5PoYts"]);
  items1[1] = callback(require(4126) /* Text */.Text, obj3);
  const obj4 = { variant: "primary-overlay", icon: callback(require(5786) /* MagnifyingGlassIcon */.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }) };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl3.string(require(1212) /* getSystemLocale */.t.nL2wKD);
  obj4.onPress = guild.onPressSearch;
  items1[2] = callback(require(4543) /* Button */.Button, obj4);
  items1[3] = callback(require(10057) /* TTIFirstContentfulPaint */.TTIFirstContentfulPaint, { label: "hub_directory" });
  obj1.children = items1;
  items[1] = callback2(closure_5, obj1);
  obj.children = items;
  const items3 = [callback2(closure_5, obj), ];
  let tmp5 = null;
  if (hasItem) {
    const obj5 = { guild, onDirectoryPage: true };
    tmp5 = callback(importDefault(11728), obj5);
  }
  items3[1] = tmp5;
  obj.children = items3;
  return callback2(closure_21, obj);
}
function GuildDirectoryFooter(hideFooter) {
  let channel;
  let require;
  ({ guild: require, channel } = hideFooter);
  const tmp = callback3();
  let obj = require(10069) /* useCanManageGuildDirectoryEntry */;
  let tmp2 = null;
  if (obj.useCanCreateOrAddGuildInDirectory(channel)) {
    tmp2 = null;
    if (!hideFooter.hideFooter) {
      obj = { accessibilityRole: "button" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.H9jxS1);
      obj.onPress = function onPress() {
        let obj = channel(outer1_3[24]);
        obj = { directoryGuildName: user.name, directoryGuildId: user.id, directoryChannelId: channel.id };
        return obj.open(obj);
      };
      obj = { style: tmp.footer };
      const obj1 = { style: tmp.addIcon, children: callback(require(11815) /* PlusMediumIcon */.PlusMediumIcon, {}) };
      const items = [callback(closure_5, obj1), ];
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.H9jxS1);
      items[1] = callback(require(4126) /* Text */.Text, obj2);
      obj.children = items;
      obj.children = callback2(closure_5, obj);
      tmp2 = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
    }
  }
  return tmp2;
}
({ View: closure_5, Image: closure_6, SectionList: closure_7 } = get_ActivityIndicator);
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryCreate.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: closure_13, DirectoryChannelScrollBehavior: closure_14 } = GuildDirectoryCreate);
({ AnalyticsObjectTypes: closure_15, AnalyticsObjects: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
let closure_22 = require("TTIFirstContentfulPaint").fill(null);
let obj = {};
obj = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.border = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.list = _createForOfIteratorHelperLoose;
obj.headerWrapper = { overflow: "hidden", height: GUILD_DIRECTORY_BASE_HEADER_HEIGHT };
obj.backgroundImage = { resizeMode: "cover", width: "100%" };
obj.textWrapper = { position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, alignContent: "center" };
obj.headerTitle = { textAlign: "center", marginBottom: 8 };
obj.headerDescription = { lineHeight: 18, textAlign: "center", paddingHorizontal: 20, marginBottom: 72 };
obj.footer = { flexDirection: "row", padding: 16, alignItems: "center" };
let obj2 = { marginRight: 16, height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.addIcon = obj2;
obj.categorySectionText = { padding: 16, paddingBottom: 4 };
let closure_23 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectory.tsx");

export default function GuildDirectory(channel) {
  channel = channel.channel;
  const guildId = channel.guildId;
  let dependencyMap;
  let React;
  let closure_11;
  function handleTapCategory() {
    if (ref2.current >= c4) {
      closure_3.current = true;
    }
  }
  let tmp = callback3();
  let obj = channel(566);
  const items = [allEntriesCount];
  let onPressSearch = obj.useStateFromStores(items, () => allEntriesCount.getGuild(guildId));
  let obj1 = React;
  dependencyMap = React.useRef(null);
  let bottom = guildId(1557)().bottom;
  let obj2 = channel(11725);
  const hubProgressBarCompletedSteps = obj2.useHubProgressBarCompletedSteps(onPressSearch);
  let obj3 = channel(11725);
  if (null == obj3.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    let sum = _location;
  } else {
    sum = history + _location;
  }
  React = sum;
  let tmp2Result = tmp2(566);
  const items1 = [ref];
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
  let currentCategoryId = stateFromStoresObject.currentCategoryId;
  let directoryEntries = stateFromStoresObject.directoryEntries;
  const directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  allEntriesCount = stateFromStoresObject.allEntriesCount;
  const categoryCounts = stateFromStoresObject.categoryCounts;
  const items2 = [directoryEntries, directoryIsFetching];
  const effect = obj1.useEffect(() => {
    channel(ref[28]).trackAppUIViewed();
    const obj = channel(ref[28]);
    guildId(ref[29]).recordRender(Object.keys(null != directoryEntries ? directoryEntries : {}).length, !directoryIsFetching);
  }, items2);
  const items3 = [channel.id];
  const effect1 = obj1.useEffect(() => () => {
    const lastMessageIdResult = categoryCounts.lastMessageId(outer1_0.id);
    if (null != lastMessageIdResult) {
      let obj = channel(table[30]);
      obj = { object: outer2_16.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: outer2_15.ACK_AUTOMATIC };
      obj.ack(outer1_0.id, obj, true, true, lastMessageIdResult);
    }
  }, items3);
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  let num = obj1.useMemo(() => {
    if (directoryIsFetching) {
      let directoryRows = outer1_22;
    } else if (null != directoryEntries) {
      const _Object = Object;
      directoryRows = channel(ref[12]).generateDirectoryRows(directoryIsFetching, Object.values(directoryEntries), currentCategoryId);
      const obj = channel(ref[12]);
    } else {
      directoryRows = [];
    }
    return directoryRows;
  }, items4);
  ref = obj1.useRef(null);
  closure_11 = obj1.useRef(0);
  tmp2Result = tmp2(3958);
  _location = tmp2Result.useLocation();
  history = channel(3958).useHistory();
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
        current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
      }
      const obj = { state: {} };
      const replaced = history.replace(obj);
    }
  }, items5);
  const items6 = [channel.id];
  const effect3 = obj1.useEffect(() => {
    const directoryEntries = onPressSearch(ref[32]).fetchDirectoryEntries(channel.id);
    const obj = onPressSearch(ref[32]);
    const directoryCounts = onPressSearch(ref[32]).fetchDirectoryCounts(channel.id);
  }, items6);
  let id;
  if (null != onPressSearch) {
    id = onPressSearch.id;
  }
  const items7 = [id, channel.id, currentCategoryId];
  const effect4 = obj1.useEffect(() => {
    let obj = guildId(ref[33]);
    obj = { directory_channel_id: channel.id };
    let id;
    if (null != onPressSearch) {
      id = onPressSearch.id;
    }
    obj.directory_guild_id = id;
    obj.primary_category_id = currentCategoryId;
    obj.track(outer1_17.GUILD_DIRECTORY_CHANNEL_VIEWED, obj);
  }, items7);
  const items8 = [num];
  const effect5 = React.useEffect(() => {
    if (ref.current) {
      const current = ref.current;
      if (null != current) {
        current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
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
        items9[1] = callback(guildId(11816), obj2);
        obj3 = { label: "guild_directory_empty" };
        items9[2] = callback(channel(10057).TTIFirstContentfulPaint, obj3);
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
      let obj = guildId(ref[35]);
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
      return outer1_19(guildId(ref[36]), { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount });
    };
    obj5.ListFooterComponent = function ListFooterComponent() {
      return outer1_19(outer1_28, { guild: onPressSearch, channel, hideFooter: false });
    };
    obj4.children = callback(directoryIsFetching, obj5);
    tmp23 = callback(currentCategoryId, obj4);
  }
};
