// Module ID: 11794
// Function ID: 11795
// Name: GuildDirectoryCreateOrAdd
// Dependencies: [32, 19, 17, 11795, 11793, 21, 4836, 576, 504, 5917, 5896, 11796, 9083, 1115, 4832, 9084, 1613, 5281, 1485, 5898, 11801, 11792, 2]
// Exports: default

// Module 11794 (GuildDirectoryCreateOrAdd)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import TableRow2 from "TableRow" /* 5917 */;
import SegmentedControlState from "SegmentedControlState" /* 9083 */;
import SegmentedControl from "SegmentedControl" /* 9084 */;
import directory_channels_GuildDirectoryConstants from "directory_channels/GuildDirectoryConstants" /* 11793 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11795 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function GuildDirectoryCreateOrAddHeader(arg0) {
  let directoryGuildName;
  let intl3;
  let intl4;
  let items;
  let items1;
  let setTabIndex;
  let tabIndex;
  ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
  const tmp = closure_12();
  const obj = { pageWidth: 0, defaultIndex: tabIndex, onSetActiveIndex: setTabIndex, items: items.map((id) => ({ id, label: id, page: null })) };
  const useSegmentedControlState = SegmentedControlState.useSegmentedControlState;
  SegmentedControlState;
  const intl = intl5.intl;
  items = [intl.string(intl5.t.FTe8HS), ];
  const intl2 = intl5.intl;
  items[1] = intl2.string(intl5.t.epOumr);
  const obj2 = { style: tmp.header, children: items1 };
  const segmentedControlState = useSegmentedControlState(obj);
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl3.format(intl5.t["9SKJdF"], { guildName: directoryGuildName }) };
  const Text = Text_Text.Text;
  intl3 = intl5.intl;
  items1 = [authStore(Text, obj3), , ];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl4.string(intl5.t.pYFZ9p) };
  const Text2 = Text_Text.Text;
  intl4 = intl5.intl;
  items1[1] = authStore(Text2, obj4);
  const obj5 = { style: tmp.segmentedControl, children: authStore(SegmentedControl.SegmentedControl, { state: segmentedControlState }) };
  items1[2] = authStore(hasOwnProperty, obj5);
  return unpackModuleId(hasOwnProperty, obj2);
}
function GuildDirectoryCreateOrAddFooter(handleFooterPress) {
  let intl;
  let intl2;
  let items;
  let items1;
  let obj3;
  handleFooterPress = handleFooterPress.handleFooterPress;
  const tmp = closure_12();
  const obj = { style: items, children: unpackModuleId(hasOwnProperty, obj3) };
  items = [tmp.footerSafeAreaContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj3 = { style: tmp.footerContainer, children: items1 };
  const obj4 = { style: tmp.footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.pgCZRP) };
  ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items1 = [authStore(Text, obj4), ];
  const obj5 = { variant: "secondary", text: intl2.string(intl5.t.WqJbLi), onPress: handleFooterPress };
  const Button = components_Button_Button.Button;
  intl2 = intl5.intl;
  items1[1] = authStore(Button, obj5);
  return authStore(hasOwnProperty, obj);
}
({ View: hasOwnProperty, ActivityIndicator: metroRequire, FlatList: metroImportDefault } = react_native);
const GuildDirectoryCreate = directory_channels_GuildDirectoryConstants.GuildDirectoryCreate;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, container: { flex: 1 }, guildIcon: obj2, header: { padding: 16, alignItems: "center", justifyContent: "center" }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, footerSafeAreaContainer: obj3, footerContainer: { paddingHorizontal: 16, height: 110, justifyContent: "center" }, footerTitle: { alignSelf: "center", textAlign: "center", marginBottom: 16 }, segmentedControl: obj4 };
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj4 = { paddingHorizontal: nativeDefault.space.PX_12, width: "100%", marginTop: 18 };
let closure_12 = createStyles(obj);
let closure_13 = react.memo((guild) => {
  let end;
  let obj3;
  let start;
  guild = guild.guild;
  const directoryChannelId = guild.directoryChannelId;
  ({ start, end } = guild);
  const items = [GuildDirectoryStore];
  const tmp = closure_12();
  const obj = guild(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildDirectoryStore.getDirectoryEntry(directoryChannelId, guild.id));
  const obj2 = { label: guild.name, icon: closure_10(directoryChannelId(5896), obj3), trailing: closure_10(directoryChannelId(11796), { entry: stateFromStores }), start, end };
  const TableRow = guild(5917).TableRow;
  obj3 = { style: tmp.guildIcon, guild };
  return closure_10(TableRow, obj2);
});
let closure_14 = react.memo((guild) => {
  let end;
  let obj2;
  let start;
  guild = guild.guild;
  const handleItemPress = guild.handleItemPress;
  ({ start, end } = guild);
  const obj = {
    onPress() {
      return handleItemPress(guild);
    },
    label: guild.name,
    icon: authStore(GuildIconDefault, obj2),
    trailing: authStore(TableRow2.TableRow.Arrow, {}),
    start,
    end
  };
  const tmp = closure_12();
  const TableRow = TableRow2.TableRow;
  obj2 = { style: tmp.guildIcon, guild };
  return authStore(TableRow, obj);
});
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx");

export default function GuildDirectoryCreateOrAdd(set) {
  let addedGuilds;
  let current;
  let items4;
  let obj4;
  let ref;
  let tmp15Result;
  _require = set;
  const tmp = closure_12();
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const tmp3 = ref;
  ref = addedGuilds.useRef(set);
  let tmp6 = navigation(ref[19])(ref);
  const effect = addedGuilds.useEffect(() => {
    ref.current = current;
  });
  const tmp8 = navigation(ref[20])(tmp6.directoryGuildId, tmp6.directoryChannelId);
  const availableGuilds = tmp8.availableGuilds;
  addedGuilds = tmp8.addedGuilds;
  const loading = tmp8.loading;
  const bottom = navigation(ref[16])().bottom;
  const tmp9 = availableGuilds(addedGuilds.useState(0), 2);
  const tabIndex = tmp9[0];
  const setTabIndex = tmp9[1];
  const items = [addedGuilds, availableGuilds, tabIndex];
  const memo = addedGuilds.useMemo(() => 0 === first ? availableGuilds : addedGuilds, items);
  const items1 = [navigation];
  const items2 = [memo.length, navigation, tabIndex];
  const callback = addedGuilds.useCallback(() => {
    let obj = {
      directoryGuildName: ref.current.directoryGuildName,
      onHubGuildInfoSet(name, icon, template) {
        let obj2;
        const obj = { createGuild: obj2, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName };
        obj2 = { name, icon, template };
        navigation.push(constants.DESCRIPTION, obj);
      }
    };
    navigation.push(GuildDirectoryCreate.TEMPLATES, obj);
  }, items1);
  const items3 = [tabIndex];
  const callback1 = addedGuilds.useCallback((guild) => {
    let tmp6;
    const index = guild.index;
    let obj = { guild: guild.item, start: 0 === index, end: index === memo.length - 1 };
    if (1 === first) {
      const obj2 = { directoryChannelId: ref.current.directoryChannelId };
      const merged = Object.assign(obj);
      tmp6 = authStore(closure_13, obj2);
    } else {
      const obj3 = {
        handleItemPress(guild) {
            const obj = { guild, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName };
            navigation.push(constants.DESCRIPTION, obj);
          }
      };
      const merged1 = Object.assign(obj);
      tmp6 = authStore(closure_14, obj3);
    }
    return tmp6;
  }, items2);
  [][0] = bottom;
  const callback2 = addedGuilds.useCallback(() => {
    const obj = { directoryGuildName: ref.current.directoryGuildName, tabIndex, setTabIndex };
    return authStore(GuildDirectoryCreateOrAddHeader, obj);
  }, items3);
  const tmp2 = _require;
  if (loading) {
    let obj2 = { style: tmp.loadingContainer, children: closure_10(tabIndex, {}) };
    tmp15Result = tmp15(bottom, obj2);
  } else {
    let obj3 = { children: closure_11(bottom, obj4) };
    obj4 = { style: tmp.container, children: items4 };
    const obj5 = { data: memo, ListHeaderComponent: callback2, renderItem: callback1, contentContainerStyle: tmp14 };
    const GuildDirectoryAddModalScreen = tmp2(tmp3[21]).GuildDirectoryAddModalScreen;
    items4 = [closure_10(setTabIndex, obj5), ];
    const obj6 = { handleFooterPress: callback };
    items4[1] = closure_10(GuildDirectoryCreateOrAddFooter, obj6);
    tmp15Result = tmp15(GuildDirectoryAddModalScreen, obj3);
  }
  return tmp15Result;
};
