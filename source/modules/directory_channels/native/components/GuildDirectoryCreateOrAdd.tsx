// Module ID: 10041
// Function ID: 77553
// Name: GuildDirectoryCreateOrAddHeader
// Dependencies: [57, 31, 27, 10042, 10040, 33, 4130, 689, 566, 5165, 5515, 10043, 8360, 1212, 4126, 8760, 1557, 4543, 1456, 5122, 10048, 10039, 2]
// Exports: default

// Module 10041 (GuildDirectoryCreateOrAddHeader)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildDirectoryCreate } from "GuildDirectoryCreate";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function GuildDirectoryCreateOrAddHeader(arg0) {
  let directoryGuildName;
  let setTabIndex;
  let tabIndex;
  ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
  const tmp = callback3();
  let obj = require(8360) /* useSegmentedControlState */;
  obj = { pageWidth: 0, defaultIndex: tabIndex, onSetActiveIndex: setTabIndex };
  const intl = require(1212) /* getSystemLocale */.intl;
  const items = [intl.string(require(1212) /* getSystemLocale */.t.FTe8HS), ];
  const intl2 = require(1212) /* getSystemLocale */.intl;
  items[1] = intl2.string(require(1212) /* getSystemLocale */.t.epOumr);
  obj.items = items.map((id) => ({ id, label: id, page: null }));
  obj = { style: tmp.header };
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl3.format(require(1212) /* getSystemLocale */.t["9SKJdF"], { guildName: directoryGuildName });
  const items1 = [callback(require(4126) /* Text */.Text, obj1), , ];
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl4.string(require(1212) /* getSystemLocale */.t.pYFZ9p);
  items1[1] = callback(require(4126) /* Text */.Text, obj2);
  items1[2] = callback(closure_5, { style: tmp.segmentedControl, children: callback(require(8760) /* SegmentedControl */.SegmentedControl, { state: segmentedControlState }) });
  obj.children = items1;
  return callback2(closure_5, obj);
}
function GuildDirectoryCreateOrAddFooter(handleFooterPress) {
  const tmp = callback3();
  let obj = {};
  const items = [tmp.footerSafeAreaContainer, ];
  obj = { paddingBottom: importDefault(1557)().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { style: tmp.footerContainer };
  const obj1 = { style: tmp.footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.pgCZRP);
  const items1 = [callback(require(4126) /* Text */.Text, obj1), ];
  const obj2 = { variant: "secondary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl2.string(require(1212) /* getSystemLocale */.t.WqJbLi);
  obj2.onPress = handleFooterPress.handleFooterPress;
  items1[1] = callback(require(4543) /* Button */.Button, obj2);
  obj.children = items1;
  obj.children = callback2(closure_5, obj);
  return callback(closure_5, obj);
}
({ View: closure_5, ActivityIndicator: closure_6, FlatList: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = { loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, container: { flex: 1 } };
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.guildIcon = obj;
obj.header = { padding: 16, alignItems: "center", justifyContent: "center" };
obj.title = { marginBottom: 8, textAlign: "center" };
obj.description = { textAlign: "center" };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj.footerSafeAreaContainer = _createForOfIteratorHelperLoose;
obj.footerContainer = { paddingHorizontal: 16, height: 110, justifyContent: "center" };
obj.footerTitle = { alignSelf: "center", textAlign: "center", marginBottom: 16 };
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, width: "100%", marginTop: 18 };
obj.segmentedControl = obj2;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = importAllResult.memo((guild) => {
  let end;
  let start;
  guild = guild.guild;
  const directoryChannelId = guild.directoryChannelId;
  ({ start, end } = guild);
  let obj = guild(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getDirectoryEntry(directoryChannelId, guild.id));
  obj = { label: guild.name };
  obj = { style: callback3().guildIcon, guild };
  obj.icon = callback(directoryChannelId(5515), obj);
  obj.trailing = callback(directoryChannelId(10043), { entry: stateFromStores });
  obj.start = start;
  obj.end = end;
  return callback(guild(5165).TableRow, obj);
});
let closure_14 = importAllResult.memo((guild) => {
  let end;
  let start;
  guild = guild.guild;
  const handleItemPress = guild.handleItemPress;
  ({ start, end } = guild);
  let obj = {
    onPress() {
      return handleItemPress(guild);
    },
    label: guild.name
  };
  obj = { style: callback3().guildIcon, guild };
  obj.icon = callback(handleItemPress(5515), obj);
  obj.trailing = callback(guild(5165).TableRow.Arrow, {});
  obj.start = start;
  obj.end = end;
  return callback(guild(5165).TableRow, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx");

export default function GuildDirectoryCreateOrAdd(arg0) {
  const _require = arg0;
  const tmp = callback3();
  let obj = _require(ref[18]);
  const navigation = obj.useNavigation();
  ref = addedGuilds.useRef(arg0);
  const tmp4 = navigation(ref[19])(ref);
  const effect = addedGuilds.useEffect(() => {
    ref.current = closure_0;
  });
  let tmp6 = navigation(ref[20])(tmp4.directoryGuildId, tmp4.directoryChannelId);
  const availableGuilds = tmp6.availableGuilds;
  addedGuilds = tmp6.addedGuilds;
  const bottom = navigation(ref[16])().bottom;
  const tmp7 = availableGuilds(addedGuilds.useState(0), 2);
  const first = tmp7[0];
  let closure_7 = tmp7[1];
  const items = [addedGuilds, availableGuilds, first];
  const memo = addedGuilds.useMemo(() => 0 === first ? availableGuilds : addedGuilds, items);
  const items1 = [navigation];
  const items2 = [memo.length, navigation, first];
  const callback = addedGuilds.useCallback(() => {
    navigation.push(outer1_9.TEMPLATES, {
      directoryGuildName: ref.current.directoryGuildName,
      onHubGuildInfoSet(name, icon, template) {
        obj = { createGuild: obj, directoryChannelId: outer1_2.current.directoryChannelId, directoryGuildName: outer1_2.current.directoryGuildName };
        obj = { name, icon, template };
        outer1_1.push(outer2_9.DESCRIPTION, obj);
      }
    });
  }, items1);
  const items3 = [first];
  const callback1 = addedGuilds.useCallback((guild) => {
    const index = guild.index;
    let obj = { guild: guild.item, start: 0 === index, end: index === memo.length - 1 };
    if (1 === first) {
      obj = {};
      const merged = Object.assign(obj);
      obj["directoryChannelId"] = ref.current.directoryChannelId;
      let tmp6 = outer1_10(outer1_13, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(obj);
      obj["handleItemPress"] = function handleItemPress(guild) {
        outer1_1.push(outer2_9.DESCRIPTION, { guild, directoryChannelId: outer1_2.current.directoryChannelId, directoryGuildName: outer1_2.current.directoryGuildName });
      };
      tmp6 = outer1_10(outer1_14, obj);
    }
    return tmp6;
  }, items2);
  [][0] = bottom;
  const callback2 = addedGuilds.useCallback(() => outer1_10(outer1_15, { directoryGuildName: ref.current.directoryGuildName, tabIndex: first, setTabIndex: closure_7 }), items3);
  if (tmp6.loading) {
    obj = { style: tmp.loadingContainer, children: callback(first, {}) };
    let tmp13Result = tmp13(bottom, obj);
  } else {
    obj = {};
    const obj1 = { style: tmp.container };
    const obj2 = { data: memo, ListHeaderComponent: callback2, renderItem: callback1, contentContainerStyle: tmp12 };
    const items4 = [callback(closure_7, obj2), ];
    const obj3 = { handleFooterPress: callback };
    items4[1] = callback(GuildDirectoryCreateOrAddFooter, obj3);
    obj1.children = items4;
    obj.children = callback2(bottom, obj1);
    tmp13Result = tmp13(_require(ref[21]).GuildDirectoryAddModalScreen, obj);
  }
  return tmp13Result;
};
