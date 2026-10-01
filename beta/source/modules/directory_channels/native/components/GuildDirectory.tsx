// Module ID: 12165
// Function ID: 12166
// Name: GuildDirectory
// Dependencies: [19, 17, 2067, 4851, 11795, 11788, 11793, 1074, 21, 4836, 576, 12166, 12167, 11818, 11819, 4832, 12168, 1115, 5281, 6472, 11375, 12169, 11790, 5435, 11791, 12269, 504, 1613, 6895, 9, 6531, 4666, 11799, 1241, 12270, 11783, 12274, 2]
// Exports: default

// Module 12165 (GuildDirectory)
import TTITrackerDefault from "TTITracker" /* 9 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6472 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6895 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11375 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11783 */;
import GuildDirectoryConstants2 from "GuildDirectoryConstants" /* 11788 */;
import useCanManageGuildDirectoryEntry from "useCanManageGuildDirectoryEntry" /* 11790 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11791 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11799 */;
import GuildDirectoryRowDefault from "GuildDirectoryRow" /* 11818 */;
import GuildDirectoryPlaceholderRowDefault from "GuildDirectoryPlaceholderRow" /* 11819 */;
import GuildDirectoryRowGenerator from "GuildDirectoryRowGenerator" /* 12167 */;
import AssetRegistry from "AssetRegistry" /* 12168 */;
import HubProgressHeaderDefault from "HubProgressHeader" /* 12169 */;
import PlusMediumIcon from "PlusMediumIcon" /* 12269 */;
import GuildDirectoryCategorySelectorDefault from "GuildDirectoryCategorySelector" /* 12274 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11795 */;
import GuildDirectoryConstants from "directory_channels/GuildDirectoryConstants" /* 11793 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
function keyExtractor(type, arg1) {
  let guildId;
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  if (type === GuildDirectoryRowGenerator.RowType.ENTRY) {
    guildId = type.entry.guildId;
  } else {
    let type1;
    if (type != null) {
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
  if (item != null) {
    type = item.type;
  }
  if (GuildDirectoryRowGenerator.RowType.HEADER === type) {
    const obj2 = { children: item.header };
    return closure_19(GuildDirectoryHeaderRowItem, obj2);
  } else if (GuildDirectoryRowGenerator.RowType.ENTRY === type) {
    const obj = { entry: item.entry };
    return closure_19(GuildDirectoryRowDefault, obj);
  } else {
    return closure_19(GuildDirectoryPlaceholderRowDefault, {});
  }
}
function GuildDirectoryHeaderRowItem(children) {
  children = children.children;
  const obj = { style: closure_23().categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
  return closure_19(Text_Text.Text, obj);
}
function GuildDirectoryHeader(guild) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  guild = guild.guild;
  const onPressSearch = guild.onPressSearch;
  const tmp = closure_23();
  const features = guild.features;
  const obj = { style: tmp.headerWrapper, children: items };
  const obj2 = { source: AssetRegistry, style: tmp.backgroundImage };
  const hasItem = features.has(constants3.HUB);
  items = [closure_19(metroRequire, obj2), ];
  const obj3 = { style: tmp.textWrapper, children: items1 };
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light", children: intl.string(intl4.t.IT7qoC) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [closure_19(Text, obj4), , , ];
  const obj5 = { style: items2, variant: "text-sm/medium", color: "text-overlay-light", children: intl2.string(intl4.t["5PoYts"]) };
  items2 = [tmp.headerDescription];
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = closure_19(Text2, obj5);
  const obj6 = { variant: "primary-overlay", icon: closure_19(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }), text: intl3.string(intl4.t.nL2wKD), onPress: onPressSearch };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[2] = closure_19(Button, obj6);
  items1[3] = closure_19(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
  items[1] = closure_20(hasOwnProperty, obj3);
  const children = [closure_20(hasOwnProperty, obj), ];
  let tmp5Result = null;
  const tmp3 = closure_20;
  const tmp4 = closure_21;
  const tmp5 = closure_19;
  if (hasItem) {
    const obj7 = { guild, onDirectoryPage: true };
    tmp5Result = tmp5(HubProgressHeaderDefault, obj7);
  }
  children[1] = tmp5Result;
  return tmp3(tmp4, { children });
}
function GuildDirectoryFooter(hideFooter) {
  let channel;
  let intl;
  let intl2;
  let items;
  let obj3;
  let user;
  ({ guild: require, channel } = hideFooter);
  hideFooter = hideFooter.hideFooter;
  const tmp = closure_23();
  let obj = useCanManageGuildDirectoryEntry;
  let tmp4 = null;
  if (obj.useCanCreateOrAddGuildInDirectory(channel)) {
    tmp4 = null;
    if (!hideFooter) {
      let obj2 = {
        accessibilityRole: "button",
        accessibilityLabel: intl.string(intl4.t.H9jxS1),
        onPress() {
              const obj = GuildDirectoryAddModalActionCreatorsDefault;
              const obj2 = { directoryGuildName: require.name, directoryGuildId: require.id, directoryChannelId: channel.id };
              return obj.open(obj2);
            },
        children: closure_20(closure_5, obj3)
      };
      const PressableOpacity = tmp2(5435).PressableOpacity;
      intl = tmp2(1115).intl;
      obj3 = { style: tmp.footer, children: items };
      const obj4 = { style: tmp.addIcon, children: closure_19(PlusMediumIcon.PlusMediumIcon, {}) };
      items = [closure_19(closure_5, obj4), ];
      const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl4.t.H9jxS1) };
      const Text = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      items[1] = closure_19(Text, obj5);
      tmp4 = closure_19(PressableOpacity, obj2);
    }
  }
  return tmp4;
}
let react = react_mod;
({ View: hasOwnProperty, Image: metroRequire, SectionList: metroImportDefault, StyleSheet } = react_native);
const DirectoryEntryCategories = GuildDirectoryConstants2.DirectoryEntryCategories;
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryConstants.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: map1, DirectoryChannelScrollBehavior: closure_14 } = GuildDirectoryConstants);
({ AnalyticsObjectTypes: closure_15, AnalyticsObjects: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18 } = Constants);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = Fragment);
const ArrayResult = Array(20);
let closure_22 = ArrayResult.fill(null);
let createStyles = createStyles_mod;
let obj = { border: obj2, list: obj3, headerWrapper: { overflow: "hidden", height: GUILD_DIRECTORY_BASE_HEADER_HEIGHT }, backgroundImage: { resizeMode: "cover", width: "100%" }, textWrapper: { position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, alignContent: "center" }, headerTitle: { textAlign: "center", marginBottom: 8 }, headerDescription: { lineHeight: 18, textAlign: "center", paddingHorizontal: 20, marginBottom: 72 }, footer: { flexDirection: "row", padding: 16, alignItems: "center" }, addIcon: size, categorySectionText: { padding: 16, paddingBottom: 4 } };
obj2 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = { marginRight: 16, height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_23 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectory.tsx");

export default function GuildDirectory(channel) {
  let c4;
  let items10;
  let items9;
  let obj10;
  let obj11;
  let obj12;
  let obj6;
  let sum;
  channel = channel.channel;
  const guildId = channel.guildId;
  dependencyMap = undefined;
  react = undefined;
  let currentCategoryId;
  let directoryEntries;
  let directoryIsFetching;
  let allEntriesCount;
  let categoryCounts;
  let ref;
  let ref2;
  let _location;
  let history;
  function handleTapCategory() {
    if (ref2.current >= c4) {
      ref.current = true;
    }
  }
  let tmp = closure_23();
  const tmp2 = channel;
  let tmp3 = dependencyMap;
  let obj = channel(504);
  const items = [allEntriesCount];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = react;
  dependencyMap = react.useRef(null);
  const bottom = guildId(1613)().bottom;
  const obj3 = channel(12166);
  const hubProgressBarCompletedSteps = obj3.useHubProgressBarCompletedSteps(stateFromStores);
  const obj4 = channel(12166);
  const tmp5 = guildId;
  if (null == obj4.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    sum = _location;
  } else {
    sum = history + _location;
  }
  react = sum;
  const items1 = [ref];
  const tmp2Result = tmp2(504);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items1, () => {
    let directoryCategoryCounts;
    let isFetchingResult;
    currentCategoryId = GuildDirectoryStore.getCurrentCategoryId(channel.id);
    let tmp3 = null;
    const getDirectoryEntries = GuildDirectoryStore.getDirectoryEntries;
    const id = channel.id;
    if (currentCategoryId !== DirectoryEntryCategories.ALL) {
      tmp3 = currentCategoryId;
    }
    directoryEntries = getDirectoryEntries(id, tmp3);
    const directoryAllEntriesCount = obj.getDirectoryAllEntriesCount(tmp.id);
    const obj2 = { currentCategoryId, directoryEntries, directoryIsFetching: isFetchingResult, allEntriesCount: directoryAllEntriesCount, categoryCounts: directoryCategoryCounts };
    directoryCategoryCounts = obj.getDirectoryCategoryCounts(tmp.id);
    isFetchingResult = obj.isFetching();
    if (!isFetchingResult) {
      isFetchingResult = null === currentCategoryId && null == directoryEntries;
    }
    return obj2;
  });
  currentCategoryId = stateFromStoresObject.currentCategoryId;
  directoryEntries = stateFromStoresObject.directoryEntries;
  directoryIsFetching = stateFromStoresObject.directoryIsFetching;
  allEntriesCount = stateFromStoresObject.allEntriesCount;
  categoryCounts = stateFromStoresObject.categoryCounts;
  const items2 = [directoryEntries, directoryIsFetching];
  const effect = obj2.useEffect(() => {
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    let obj2 = directoryEntries;
    const recordRender = TTITrackerDefault.recordRender;
    const _Object = Object;
    TTITrackerDefault;
    if (directoryEntries == null) {
      obj2 = {};
    }
    recordRender(keys(obj2).length, !directoryIsFetching);
  }, items2);
  const items3 = [channel.id];
  const effect1 = obj2.useEffect(() => {
    let id;
    return () => {
      const lastMessageIdResult = categoryCounts.lastMessageId(id.id);
      const tmp = id;
      if (null != lastMessageIdResult) {
        const obj = channel(ref[30]);
        const obj2 = { object: constants2.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: constants.ACK_AUTOMATIC };
        obj.ack(tmp.id, obj2, true, true, lastMessageIdResult);
      }
    };
  }, items3);
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  const memo = obj2.useMemo(() => {
    let directoryRows;
    if (directoryIsFetching) {
      directoryRows = closure_22;
    } else if (null != directoryEntries) {
      const _Object = Object;
      const obj = GuildDirectoryRowGenerator;
      directoryRows = obj.generateDirectoryRows(tmp, Object.values(tmp2), currentCategoryId);
    } else {
      directoryRows = [];
    }
    return directoryRows;
  }, items4);
  ref = obj2.useRef(null);
  ref2 = obj2.useRef(0);
  const tmp2Result3 = tmp2(4666);
  _location = tmp2Result3.useLocation();
  const tmp2Result4 = tmp2(4666);
  history = tmp2Result4.useHistory();
  const items5 = [_location, history];
  const effect2 = obj2.useEffect(() => {
    const state = _location.state;
    let scrollBehavior;
    if (state != null) {
      scrollBehavior = state.scrollBehavior;
    }
    if (scrollBehavior === handleTapCategory.GUILD_LIST_TOP) {
      const current = ref.current;
      if (current != null) {
        current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
      }
      const obj = { state: {} };
      const replaced = history.replace(obj);
    }
  }, items5);
  const items6 = [channel.id];
  const effect3 = obj2.useEffect(() => {
    const obj = GuildDirectoryActionCreatorsAll;
    directoryEntries = obj.fetchDirectoryEntries(channel.id);
    const obj2 = GuildDirectoryActionCreatorsAll;
    const directoryCounts = obj2.fetchDirectoryCounts(channel.id);
  }, items6);
  let id;
  const useEffect = obj2.useEffect;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items7 = [id, channel.id, currentCategoryId];
  const effect4 = useEffect(() => {
    let id;
    const obj = { directory_channel_id: channel.id, directory_guild_id: id, primary_category_id: currentCategoryId };
    id = undefined;
    const track = AnalyticsUtilsDefault.track;
    const GUILD_DIRECTORY_CHANNEL_VIEWED = constants.GUILD_DIRECTORY_CHANNEL_VIEWED;
    AnalyticsUtilsDefault;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    track(GUILD_DIRECTORY_CHANNEL_VIEWED, obj);
  }, items7);
  const items8 = [memo];
  const effect5 = obj2.useEffect(() => {
    if (ref.current) {
      const current = ref.current;
      if (current != null) {
        current.scrollToLocation({ sectionIndex: 0, itemIndex: 0, animated: true, viewOffset: 0 });
      }
      tmp.current = null;
    }
  }, items8);
  let tmp22 = null;
  if (null != stateFromStores) {
    if (!directoryIsFetching) {
      let tmp29;
      if (0 === allEntriesCount) {
        const obj5 = { style: obj6, children: items9 };
        obj6 = { paddingBottom: bottom };
        const obj7 = { style: tmp.border };
        items9 = [closure_19(currentCategoryId, obj7), , ];
        const obj8 = { guild: stateFromStores, channel };
        items9[1] = closure_19(tmp5(12270), obj8);
        items9[2] = closure_19(tmp2(11375).TTIFirstContentfulPaint, { label: "guild_directory_empty" });
        tmp29 = closure_20(currentCategoryId, obj5);
      }
      tmp22 = tmp29;
    }
    const obj9 = { children: closure_19(directoryIsFetching, obj10) };
    obj10 = {
      ref,
      onScroll(nativeEvent) {
          ref2.current = nativeEvent.nativeEvent.contentOffset.y;
        },
      scrollEventThrottle: 16,
      contentContainerStyle: obj11,
      windowSize: 10,
      ListHeaderComponent: closure_19(GuildDirectoryHeader, obj12),
      sections: items10,
      stickySectionHeadersEnabled: true,
      style: tmp.list,
      scrollIndicatorInsets: { right: 1 },
      keyExtractor,
      renderItem,
      renderSectionHeader() {
          const obj = { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount };
          return closure_19(GuildDirectoryCategorySelectorDefault, obj);
        },
      ListFooterComponent() {
          const obj = { guild: stateFromStores, channel, hideFooter: false };
          return closure_19(GuildDirectoryFooter, obj);
        }
    };
    items10 = [{ data: memo }];
    obj11 = { paddingBottom: bottom };
    obj12 = {
      guild: stateFromStores,
      onPressSearch() {
          const obj = GuildDirectorySearchModalActionCreatorsDefault;
          const obj2 = { channel };
          obj.open(obj2);
        }
    };
    const obj13 = { data: memo };
    tmp29 = closure_19(currentCategoryId, obj9);
  }
  return tmp22;
};
