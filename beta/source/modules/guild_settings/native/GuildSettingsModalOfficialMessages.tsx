// Module ID: 17618
// Function ID: 17619
// Name: GuildSettingsModalOfficialMessages
// Dependencies: [32, 19, 17, 5915, 4825, 2067, 9049, 4829, 1085, 21, 4836, 576, 1115, 14814, 10862, 14816, 1485, 504, 9048, 5936, 6795, 4800, 15927, 1981, 9083, 4566, 5917, 14154, 1092, 4832, 9084, 4512, 6685, 672, 1177, 14829, 2]
// Exports: default

// Module 17618 (GuildSettingsModalOfficialMessages)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import TableRowConstants from "TableRowConstants" /* 5915 */;
import GuildOfficialMessageUtils from "GuildOfficialMessageUtils" /* 6685 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import AssetRegistryDefault from "AssetRegistry" /* 14829 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let navigation;

let StyleSheet;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function MessagePreview(theme) {
  let animatedStyles;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj4;
  let selectedColor;
  ({ animatedStyles, selectedColor } = theme);
  theme = theme.theme;
  const tmp = closure_14();
  const memo = react.useMemo(() => {
    const calendarFormat = require("DateUtils").calendarFormat;
    require("DateUtils");
    const date = new Date();
    return calendarFormat(date, true);
  }, []);
  const internal = nativeDefault.internal;
  let num = 1;
  const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_BASE_LOWER);
  if (AccessibilityStore.desaturateUserColors) {
    num = AccessibilityStore.saturation;
  }
  const obj = GuildOfficialMessageUtils;
  const accessibleGuildOfficialTextColor = obj.getAccessibleGuildOfficialTextColor(selectedColor, semanticColor, num);
  const hexResult = accessibleGuildOfficialTextColor.hex();
  const obj3 = _modDef672(selectedColor);
  const alphaResult = obj3.alpha(authStore);
  const obj2 = { style: items, pointerEvents: "none", children: map1(hasOwnProperty, obj4) };
  items = [tmp.chatContainer, , ];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj4 = { style: items1, children: items2 };
  items1 = [tmp.chatContainerInner, { backgroundColor: alphaResult.hex() }];
  alphaResult.hex();
  const View = tmp3(4566).View;
  const obj5 = { source: AssetRegistryDefault };
  const Avatar = native.Avatar;
  items2 = [closure_12(Avatar, obj5), ];
  const obj6 = { style: tmp.chatContent, children: items5 };
  const obj7 = { style: tmp.chatHeader, children: items3 };
  const obj8 = { animated: true, style: animatedStyles.textStrong, variant: "text-md/semibold", lineClamp: 1, children: intl.string(intl4.t.cqpybK) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items3 = [closure_12(Text, obj8), ];
  const obj9 = { animated: true, variant: "text-xs/medium", style: items4, children: memo };
  items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  items3[1] = closure_12(Text_Text.Text, obj9);
  items5 = [map1(hasOwnProperty, obj7), ];
  const obj10 = { animated: true, variant: "text-md/normal", style: { color: hexResult }, children: intl2.string(intl4.t.Mi9Kbe) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items5[1] = closure_12(Text2, obj10);
  items2[1] = map1(hasOwnProperty, obj6);
  return closure_12(View, obj2);
}
({ View: hasOwnProperty, StyleSheet } = react_native);
const TABLE_ROW_PADDING = TableRowConstants.TABLE_ROW_PADDING;
({ DEFAULT_GUILD_OFFICIAL_COLOR: c9, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: c10 } = MessageConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, segmentedControlContainer: obj3, trailingColorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 }, chatSection: obj4, chatContainer: obj5, chatContainerInner: obj6, chatContent: { flex: 1 }, chatHeader: { flexDirection: "row", alignItems: "baseline", gap: 6 }, chatTimestamp: { marginTop: -8 } };
obj2 = { gap: nativeDefault.space.PX_8, height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj4 = { paddingHorizontal: TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
obj5 = { paddingVertical: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl, borderWidth: StyleSheet.hairlineWidth };
obj6 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
createStyles = createStyles_mod;
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_15 = createStyles.createAnimatedThemedStyles(obj7);
createStyles = createStyles_mod;
let obj8 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_16 = createStyles.createAnimatedThemedStyles(obj8);
createStyles = createStyles_mod;
let obj9 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_17 = createStyles.createAnimatedThemedStyles(obj9);
createStyles = createStyles_mod;
let obj10 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_18 = createStyles.createAnimatedThemedStyles(obj10);
const __initData = { code: "function GuildSettingsModalOfficialMessagesTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
const __initData2 = { code: "function GuildSettingsModalOfficialMessagesTsx2(activeIndex){const{runOnJS,setCurrentThemeIndex}=this.__closure;runOnJS(setCurrentThemeIndex)(Math.round(activeIndex));}" };
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx");

export default function GuildSettingsModalOfficialMessages(guildId) {
  let _undefined;
  let c7;
  let guild;
  let intl;
  let intl2;
  let items6;
  let items7;
  let obj7;
  let obj8;
  let submitting;
  let tmp10;
  let tmp15;
  let tmp2Result6;
  let tmp9;
  guildId = guildId.guildId;
  submitting = undefined;
  let stateFromStores;
  let c6;
  c7 = undefined;
  let activeIndex;
  const tmp = closure_14();
  let tmp2 = guildId;
  let obj = guildId(submitting[16]);
  navigation = obj.useNavigation();
  let obj2 = guildId(submitting[17]);
  let items = [activeIndex];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: activeIndex.getGuild(), submitting: activeIndex.isSubmitting(), hasChanges: activeIndex.hasChanges() };
    return obj;
  });
  ({ guild, submitting } = stateFromStoresObject);
  const hasChanges = stateFromStoresObject.hasChanges;
  let officialMessageColor;
  if (guild != null) {
    officialMessageColor = guild.officialMessageColor;
  }
  if (officialMessageColor == null) {
    officialMessageColor = closure_9;
  }
  const items1 = [c7];
  const items2 = [guildId];
  const tmp2Result = tmp2(submitting[17]);
  stateFromStores = tmp2Result.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(guildId);
    officialMessageColor = undefined;
    if (guild != null) {
      officialMessageColor = guild.officialMessageColor;
    }
    if (officialMessageColor == null) {
      officialMessageColor = React4;
    }
    return officialMessageColor;
  }, items2);
  [tmp9, tmp10] = hasChanges(officialMessageColor.useState(0), 2);
  c6 = tmp10;
  const items3 = [guildId];
  hasChanges(officialMessageColor.useState(0), 2);
  const effect = officialMessageColor.useEffect(() => () => {
    const obj = navigation(submitting[18]);
    obj.cancelChanges(guildId);
  }, items3);
  const items4 = [guildId, officialMessageColor, navigation, submitting, hasChanges];
  const effect1 = officialMessageColor.useEffect(() => {
    let fn2;
    function handleSaveChanges() {
      const obj = navigation(submitting[18]);
      const obj2 = { officialMessageColor };
      obj.saveGuild(handleSaveChanges, obj2);
    }
    let fn;
    const setOptions = navigation.setOptions;
    if (submitting) {
      fn = () => null;
    }
    let obj = { headerLeft: fn, headerRight: fn2 };
    if (submitting) {
      fn2 = () => closure_1_12(handleSaveChanges(submitting[19]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        let intl;
        const obj = { onPress: handleSaveChanges, text: intl.string(intl4.t["R3BPH+"]) };
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        intl = intl4.intl;
        return closure_12(HeaderActionButton, obj);
      };
    }
    setOptions(obj);
  }, items4);
  const items5 = [officialMessageColor, stateFromStores];
  const callback = officialMessageColor.useCallback(() => {
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      color: officialMessageColor,
      defaultColor: stateFromStores,
      confirmLabel: intl.string(intl4.t.XqMe3N),
      onSelect(officialMessageColor) {
        const obj = navigation(submitting[18]);
        const obj2 = { officialMessageColor };
        obj.updateGuild(obj2);
      }
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(15927, dependencyMap.paths);
    intl = intl4.intl;
    openLazy(tmp2, "RoleColorPicker", obj);
  }, items5);
  [tmp15, c7] = hasChanges(officialMessageColor.useState(0), 2);
  hasChanges(officialMessageColor.useState(0), 2);
  const callback1 = officialMessageColor.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = officialMessageColor.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(guildId(submitting[12]).t.K2sFfo), id: constants.LIGHT, icon: closure_1_12(guildId(submitting[13]).ThemeLightIcon, {}), page: null };
    intl = guildId(submitting[12]).intl;
    const items = [obj, , ];
    const obj2 = { label: intl2.string(guildId(submitting[12]).t.b8Cei3), id: constants.DARK, icon: closure_1_12(guildId(submitting[14]).ThemeDarkIcon, {}), page: null };
    intl2 = guildId(submitting[12]).intl;
    items[1] = obj2;
    const obj3 = { label: intl3.string(guildId(submitting[12]).t.Do4ZJx), id: constants.ONYX, icon: closure_1_12(guildId(submitting[15]).ThemeMidnightIcon, {}), page: null };
    intl3 = guildId(submitting[12]).intl;
    items[2] = obj3;
    return items;
  }, []);
  const tmp2Result4 = tmp2(submitting[24]);
  const segmentedControlState = tmp2Result4.useSegmentedControlState({ items: memo, pageWidth: tmp15, defaultIndex: tmp9 });
  activeIndex = segmentedControlState.activeIndex;
  const tmp2Result5 = tmp2(submitting[25]);
  class H {
    constructor() {
      return activeIndex.get();
    }
  }
  H.__closure = { activeIndex };
  H.__workletHash = 4687220686460;
  H.__initData = __initData;
  class E {
    constructor(arg0) {
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(c6);
      runOnJSResult(Math.round(arg0));
    }
  }
  let obj3 = { runOnJS: tmp2(tmp3[25]).runOnJS, setCurrentThemeIndex: tmp10 };
  E.__closure = obj3;
  E.__workletHash = 5332792853021;
  E.__initData = __initData2;
  const animatedReaction = tmp2Result5.useAnimatedReaction(H, E);
  const obj5 = { style: tmp.container, children: items6 };
  const obj6 = { label: intl.string(tmp2(submitting[12]).t["2uQ6wZ"]), onPress: callback, arrow: true, trailing: closure_12(stateFromStores, obj7), subLabel: tmp2Result6.int2hex(officialMessageColor) };
  const obj4 = { bgBaseLow: closure_15(activeIndex), borderStrong: closure_16(activeIndex), textStrong: closure_17(activeIndex), textMuted: closure_18(activeIndex) };
  const TableRow = tmp2(tmp3[26]).TableRow;
  intl = tmp2(tmp3[12]).intl;
  obj7 = { style: tmp.trailingColorContainer, children: closure_12(navigation(submitting[27]), obj8) };
  obj8 = { color: officialMessageColor, style: tmp.colorBlock };
  tmp2Result6 = tmp2(submitting[28]);
  items6 = [closure_12(TableRow, obj6), ];
  const obj9 = { style: tmp.chatSection, children: items7 };
  const obj10 = { variant: "heading-md/semibold", children: intl2.string(tmp2(submitting[12]).t.VI0jGW) };
  const Text = tmp2(tmp3[29]).Text;
  intl2 = tmp2(tmp3[12]).intl;
  items7 = [closure_12(Text, obj10), , ];
  const obj11 = { animatedStyles: obj4, selectedColor: officialMessageColor, theme: memo[tmp9].id };
  items7[1] = closure_12(MessagePreview, obj11);
  const obj12 = { style: tmp.segmentedControlContainer, onLayout: callback1, children: closure_12(tmp2(submitting[30]).SegmentedControl, { variant: "experimental_Large", state: segmentedControlState }) };
  items7[2] = closure_12(stateFromStores, obj12);
  items6[1] = closure_13(stateFromStores, obj9);
  return closure_13(stateFromStores, obj5);
};
