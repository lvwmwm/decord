// Module ID: 14186
// Function ID: 14187
// Name: GuildDirectory
// Dependencies: [19, 17, 4880, 6836, 13810, 13803, 13808, 1072, 21, 5009, 575, 14187, 14188, 13833, 13834, 5619, 5712, 14189, 1114, 5629, 7213, 13285, 14190, 13805, 6974, 13806, 11449, 504, 1626, 7647, 9, 7273, 5051, 13814, 1253, 14314, 13798, 14318, 2]
// Exports: default

// Module 14186 (GuildDirectory)
import TTITrackerDefault from "TTITracker" /* 9 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import FastImageDefault from "FastImage" /* 5712 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7213 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7647 */;
import PlusMediumIcon from "PlusMediumIcon" /* 11449 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 13285 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 13798 */;
import GuildDirectoryConstants2 from "GuildDirectoryConstants" /* 13803 */;
import useCanManageGuildDirectoryEntry from "useCanManageGuildDirectoryEntry" /* 13805 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 13806 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 13814 */;
import GuildDirectoryRowDefault from "GuildDirectoryRow" /* 13833 */;
import GuildDirectoryPlaceholderRowDefault from "GuildDirectoryPlaceholderRow" /* 13834 */;
import GuildDirectoryRowGenerator from "GuildDirectoryRowGenerator" /* 14188 */;
import AssetRegistry from "AssetRegistry" /* 14189 */;
import GuildDirectoryCategorySelectorDefault from "GuildDirectoryCategorySelector" /* 14318 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 4880 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 13810 */;
import GuildDirectoryConstants from "directory_channels/GuildDirectoryConstants" /* 13808 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let size;
let tmp6;
const HubProgressHeaderDefault = tmp6(14190);
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
    return authStore5(GuildDirectoryHeaderRowItem, obj2);
  } else if (GuildDirectoryRowGenerator.RowType.ENTRY === type) {
    const obj = { entry: item.entry };
    return authStore5(GuildDirectoryRowDefault, obj);
  } else {
    return authStore5(GuildDirectoryPlaceholderRowDefault, {});
  }
}
function GuildDirectoryHeaderRowItem(children) {
  children = children.children;
  const obj = { style: closure_22().categorySectionText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children };
  return authStore5(Text_Text.Text, obj);
}
function GuildDirectoryHeader(guild) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  guild = guild.guild;
  const onPressSearch = guild.onPressSearch;
  const tmp = closure_22();
  const features = guild.features;
  const obj = { style: tmp.headerWrapper, children: items };
  const hasItem = features.has(constants3.HUB);
  const obj2 = { source: AssetRegistry, style: tmp.backgroundImage };
  const tmp8 = FastImageDefault;
  items = [authStore5(tmp8, obj2), ];
  const obj3 = { style: tmp.textWrapper, children: items1 };
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "text-overlay-light", children: intl.string(intl4.t.IT7qoC) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [authStore5(Text, obj4), , , ];
  const obj5 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-overlay-light", children: intl2.string(intl4.t["5PoYts"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = authStore5(Text2, obj5);
  const obj6 = { variant: "primary-overlay", icon: authStore5(MagnifyingGlassIcon.MagnifyingGlassIcon, { size: "sm", color: "text-strong" }), text: intl3.string(intl4.t.nL2wKD), onPress: onPressSearch };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[2] = authStore5(Button, obj6);
  items1[3] = authStore5(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "hub_directory" });
  items[1] = closure_19(hasOwnProperty, obj3);
  const children = [closure_19(hasOwnProperty, obj), ];
  let tmp5Result = null;
  const tmp3 = closure_19;
  const tmp4 = closure_20;
  const tmp5 = authStore5;
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
  const tmp = closure_22();
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
        children: closure_19(closure_5, obj3)
      };
      const PressableOpacity = tmp2(6974).PressableOpacity;
      intl = tmp2(1114).intl;
      obj3 = { style: tmp.footer, children: items };
      const obj4 = { style: tmp.addIcon, children: closure_18(PlusMediumIcon.PlusMediumIcon, {}) };
      items = [closure_18(closure_5, obj4), ];
      const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl4.t.H9jxS1) };
      const Text = tmp2(5619).Text;
      intl2 = tmp2(1114).intl;
      items[1] = closure_18(Text, obj5);
      tmp4 = closure_18(PressableOpacity, obj2);
    }
  }
  return tmp4;
}
let react = react_mod;
({ View: hasOwnProperty, SectionList: metroRequire, StyleSheet } = react_native);
const DirectoryEntryCategories = GuildDirectoryConstants2.DirectoryEntryCategories;
const GUILD_DIRECTORY_BASE_HEADER_HEIGHT = GuildDirectoryConstants.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
({ GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT: closure_12, DirectoryChannelScrollBehavior: map1 } = GuildDirectoryConstants);
({ AnalyticsObjectTypes: closure_14, AnalyticsObjects: closure_15, AnalyticEvents: closure_16, GuildFeatures: closure_17 } = Constants);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
const ArrayResult = Array(20);
let closure_21 = ArrayResult.fill(null);
let createStyles = createStyles_mod;
let obj = { border: obj2, list: obj3, headerWrapper: { overflow: "hidden", height: GUILD_DIRECTORY_BASE_HEADER_HEIGHT }, backgroundImage: { resizeMode: "cover", width: "100%" }, textWrapper: { position: "absolute", bottom: 0, left: 0, right: 0, padding: 16, alignContent: "center" }, headerTitle: { textAlign: "center", marginBottom: 8 }, headerDescription: { lineHeight: 18, textAlign: "center", paddingHorizontal: 20, marginBottom: 72 }, footer: { flexDirection: "row", padding: 16, alignItems: "center" }, addIcon: size, categorySectionText: { padding: 16, paddingBottom: 4 } };
obj2 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = { marginRight: 16, height: 40, width: 40, alignItems: "center", justifyContent: "center", borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_22 = createStyles(obj);
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
  let tmp = closure_22();
  const tmp2 = channel;
  let tmp3 = dependencyMap;
  let obj = channel(504);
  const items = [directoryIsFetching];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = react;
  dependencyMap = react.useRef(null);
  const bottom = guildId(1626)().bottom;
  const obj3 = channel(14187);
  const hubProgressBarCompletedSteps = obj3.useHubProgressBarCompletedSteps(stateFromStores);
  const obj4 = channel(14187);
  const tmp5 = guildId;
  if (null == obj4.getNextHubProgressStep(hubProgressBarCompletedSteps)) {
    sum = ref2;
  } else {
    sum = _location + ref2;
  }
  react = sum;
  const items1 = [categoryCounts];
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
      const lastMessageIdResult = allEntriesCount.lastMessageId(id.id);
      const tmp = id;
      if (null != lastMessageIdResult) {
        const obj = channel(ref[31]);
        const obj2 = { object: constants.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: handleTapCategory.ACK_AUTOMATIC };
        obj.ack(tmp.id, obj2, true, true, lastMessageIdResult);
      }
    };
  }, items3);
  const items4 = [directoryIsFetching, directoryEntries, currentCategoryId];
  const memo = obj2.useMemo(() => {
    let directoryRows;
    if (directoryIsFetching) {
      directoryRows = closure_21;
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
  const tmp2Result3 = tmp2(5051);
  _location = tmp2Result3.useLocation();
  const tmp2Result4 = tmp2(5051);
  history = tmp2Result4.useHistory();
  const items5 = [_location, history];
  const effect2 = obj2.useEffect(() => {
    const state = _location.state;
    let scrollBehavior;
    if (state != null) {
      scrollBehavior = state.scrollBehavior;
    }
    if (scrollBehavior === map1.GUILD_LIST_TOP) {
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
        items9 = [closure_18(currentCategoryId, obj7), , ];
        const obj8 = { guild: stateFromStores, channel };
        items9[1] = closure_18(tmp5(14314), obj8);
        items9[2] = closure_18(tmp2(13285).TTIFirstContentfulPaint, { label: "guild_directory_empty" });
        tmp29 = closure_19(currentCategoryId, obj5);
      }
      tmp22 = tmp29;
    }
    const obj9 = { children: closure_18(directoryEntries, obj10) };
    obj10 = {
      ref,
      onScroll: function handleScroll(nativeEvent) {
          ref2.current = nativeEvent.nativeEvent.contentOffset.y;
        },
      scrollEventThrottle: 16,
      contentContainerStyle: obj11,
      windowSize: 10,
      ListHeaderComponent: closure_18(GuildDirectoryHeader, obj12),
      sections: items10,
      stickySectionHeadersEnabled: true,
      style: tmp.list,
      scrollIndicatorInsets: { right: 1 },
      keyExtractor,
      renderItem,
      renderSectionHeader() {
          const obj = { onCategorySelected: handleTapCategory, channel, categoryCounts, allEntriesCount };
          return authStore5(GuildDirectoryCategorySelectorDefault, obj);
        },
      ListFooterComponent() {
          const obj = { guild: stateFromStores, channel, hideFooter: false };
          return authStore5(GuildDirectoryFooter, obj);
        }
    };
    items10 = [{ data: memo }];
    obj11 = { paddingBottom: bottom };
    obj12 = {
      guild: stateFromStores,
      onPressSearch: function handleTapSearch() {
          const obj = GuildDirectorySearchModalActionCreatorsDefault;
          const obj2 = { channel };
          obj.open(obj2);
        }
    };
    const obj13 = { data: memo };
    tmp29 = closure_18(currentCategoryId, obj9);
  }
  return tmp22;
};
