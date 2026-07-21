// Module ID: 10032
// Function ID: 77500
// Name: GuildDirectoryCreateOrAddHeader
// Dependencies: []
// Exports: default

// Module 10032 (GuildDirectoryCreateOrAddHeader)
function GuildDirectoryCreateOrAddHeader(arg0) {
  let directoryGuildName;
  let setTabIndex;
  let tabIndex;
  ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
  const tmp = callback4();
  let obj = arg1(dependencyMap[12]);
  obj = { pageWidth: 0, defaultIndex: tabIndex, onSetActiveIndex: setTabIndex };
  const intl = arg1(dependencyMap[13]).intl;
  const items = [intl.string(arg1(dependencyMap[13]).t.FTe8HS), ];
  const intl2 = arg1(dependencyMap[13]).intl;
  items[1] = intl2.string(arg1(dependencyMap[13]).t.epOumr);
  obj.items = items.map((id) => ({ id, label: id, page: null }));
  obj = { style: tmp.header };
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const obj1 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj1.children = intl3.format(arg1(dependencyMap[13]).t.9SKJdF, { guildName: directoryGuildName });
  const items1 = [callback2(arg1(dependencyMap[14]).Text, obj1), , ];
  const obj2 = { style: tmp.description };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj2.children = intl4.string(arg1(dependencyMap[13]).t.pYFZ9p);
  items1[1] = callback2(arg1(dependencyMap[14]).Text, obj2);
  items1[2] = callback2(closure_5, { style: tmp.segmentedControl, children: callback2(arg1(dependencyMap[15]).SegmentedControl, { state: segmentedControlState }) });
  obj.children = items1;
  return callback3(closure_5, obj);
}
function GuildDirectoryCreateOrAddFooter(handleFooterPress) {
  const tmp = callback4();
  let obj = {};
  const items = [tmp.footerSafeAreaContainer, ];
  obj = { paddingBottom: importDefault(dependencyMap[16])().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { style: tmp.footerContainer };
  const obj1 = { delete: true, dispatch: true, raw: true, style: tmp.footerTitle };
  const intl = arg1(dependencyMap[13]).intl;
  obj1.children = intl.string(arg1(dependencyMap[13]).t.pgCZRP);
  const items1 = [callback2(arg1(dependencyMap[14]).Text, obj1), ];
  const obj2 = { variant: "secondary" };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj2.text = intl2.string(arg1(dependencyMap[13]).t.WqJbLi);
  obj2.onPress = handleFooterPress.handleFooterPress;
  items1[1] = callback2(arg1(dependencyMap[17]).Button, obj2);
  obj.children = items1;
  obj.children = callback3(closure_5, obj);
  return callback2(closure_5, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, ActivityIndicator: closure_6, FlatList: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const GuildDirectoryCreate = arg1(dependencyMap[4]).GuildDirectoryCreate;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = { loadingContainer: {}, container: { flex: 1 } };
obj = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.guildIcon = obj;
obj.header = {};
obj.title = { "Null": null, "Null": null };
obj.description = { textAlign: "center" };
obj1 = { grinning_face: "Array", smiley: "isArray", smile: "max", grin: "names", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.footerSafeAreaContainer = obj1;
obj.footerContainer = { InfoBoxLooks: "absolute", allowAnyViewerClips: -8, isReactNativeDocumentElementInstanceHandle: -8 };
obj.footerTitle = {};
const tmp3 = arg1(dependencyMap[5]);
obj.segmentedControl = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12 };
let closure_12 = obj1.createStyles(obj);
let closure_13 = importAllResult.memo((guild) => {
  let end;
  let start;
  guild = guild.guild;
  const arg1 = guild;
  const importDefault = guild.directoryChannelId;
  ({ start, end } = guild);
  let obj = arg1(dependencyMap[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => directoryEntry.getDirectoryEntry(directoryChannelId, guild.id));
  obj = { label: guild.name };
  obj = { style: callback4().guildIcon, guild };
  obj.icon = callback2(importDefault(dependencyMap[10]), obj);
  obj.trailing = callback2(importDefault(dependencyMap[11]), { entry: stateFromStores });
  obj.start = start;
  obj.end = end;
  return callback2(arg1(dependencyMap[9]).TableRow, obj);
});
let closure_14 = importAllResult.memo((guild) => {
  let end;
  let start;
  guild = guild.guild;
  const arg1 = guild;
  const importDefault = guild.handleItemPress;
  ({ start, end } = guild);
  let obj = {
    onPress() {
      return handleItemPress(guild);
    },
    label: guild.name
  };
  obj = { style: callback4().guildIcon, guild };
  obj.icon = callback2(importDefault(dependencyMap[10]), obj);
  obj.trailing = callback2(arg1(dependencyMap[9]).TableRow.Arrow, {});
  obj.start = start;
  obj.end = end;
  return callback2(arg1(dependencyMap[9]).TableRow, obj);
});
const obj2 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_12 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx");

export default function GuildDirectoryCreateOrAdd(arg0) {
  const arg1 = arg0;
  const tmp = callback4();
  let obj = arg1(dependencyMap[18]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const ref = importAllResult.useRef(arg0);
  const dependencyMap = ref;
  const tmp4 = importDefault(dependencyMap[19])(ref);
  const effect = importAllResult.useEffect(() => {
    ref.current = arg0;
  });
  const tmp6 = importDefault(dependencyMap[20])(tmp4.directoryGuildId, tmp4.directoryChannelId);
  const availableGuilds = tmp6.availableGuilds;
  let callback = availableGuilds;
  const addedGuilds = tmp6.addedGuilds;
  const bottom = importDefault(dependencyMap[16])().bottom;
  const tmp7 = callback(addedGuilds.useState(0), 2);
  const first = tmp7[0];
  let closure_7 = tmp7[1];
  const items = [addedGuilds, availableGuilds, first];
  const memo = importAllResult.useMemo(() => 0 === first ? availableGuilds : addedGuilds, items);
  let closure_8 = memo;
  const items1 = [navigation];
  const items2 = [memo.length, navigation, first];
  callback = importAllResult.useCallback(() => {
    navigation.push(constants.TEMPLATES, {
      directoryGuildName: ref.current.directoryGuildName,
      onHubGuildInfoSet(name, icon, template) {
        let obj = { createGuild: obj, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName };
        obj = { name, icon, template };
      }
    });
  }, items1);
  const items3 = [first];
  const callback1 = importAllResult.useCallback((guild) => {
    const index = guild.index;
    let obj = { guild: guild.item, start: 0 === index, end: index === memo.length - 1 };
    if (1 === first) {
      obj = {};
      const merged = Object.assign(obj);
      obj["directoryChannelId"] = ref.current.directoryChannelId;
      let tmp6 = callback(closure_13, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(obj);
      obj["handleItemPress"] = function handleItemPress(guild) {

      };
      tmp6 = callback(closure_14, obj);
    }
    return tmp6;
  }, items2);
  [][0] = bottom;
  const callback2 = importAllResult.useCallback(() => callback(closure_15, { directoryGuildName: ref.current.directoryGuildName, tabIndex: first, setTabIndex: closure_7 }), items3);
  if (tmp6.loading) {
    obj = { style: tmp.loadingContainer, children: callback2(first, {}) };
    let tmp13Result = tmp13(bottom, obj);
  } else {
    obj = {};
    const obj1 = { style: tmp.container };
    const obj2 = { data: memo, ListHeaderComponent: callback2, renderItem: callback1, contentContainerStyle: tmp12 };
    const items4 = [callback2(closure_7, obj2), ];
    const obj3 = { handleFooterPress: callback };
    items4[1] = callback2(GuildDirectoryCreateOrAddFooter, obj3);
    obj1.children = items4;
    obj.children = callback3(bottom, obj1);
    tmp13Result = tmp13(arg1(dependencyMap[21]).GuildDirectoryAddModalScreen, obj);
  }
  return tmp13Result;
};
