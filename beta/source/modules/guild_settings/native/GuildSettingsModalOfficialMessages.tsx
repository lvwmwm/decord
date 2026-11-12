// Module ID: 20449
// Function ID: 20450
// Name: GuildSettingsModalOfficialMessages
// Dependencies: [32, 19, 17, 7069, 5171, 5041, 9188, 5175, 1083, 21, 5170, 575, 1113, 17618, 11353, 17620, 1499, 504, 9187, 7097, 7663, 5406, 18739, 2118, 9102, 9092, 1652, 1705, 7071, 16799, 1090, 5783, 9327, 4992, 7538, 671, 1187, 17633, 2]
// Exports: default

// Module 20449 (GuildSettingsModalOfficialMessages)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1083 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import Text_Text from "Text/Text" /* 5783 */;
import TableRowConstants from "TableRowConstants" /* 7069 */;
import GuildOfficialMessageUtils from "GuildOfficialMessageUtils" /* 7538 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7663 */;
import AssetRegistryDefault from "AssetRegistry" /* 17633 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import GuildStore from "GuildStore" /* 5041 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9188 */;
import MessageConstants from "MessageConstants" /* 5175 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
  const obj3 = _modDef671(selectedColor);
  const alphaResult = obj3.alpha(authStore);
  const obj2 = { style: items, pointerEvents: "none", children: map1(hasOwnProperty, obj4) };
  items = [tmp.chatContainer, , ];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj4 = { style: items1, children: items2 };
  items1 = [tmp.chatContainerInner, { backgroundColor: alphaResult.hex() }];
  alphaResult.hex();
  const View = tmp3(1652).View;
  const obj5 = { source: AssetRegistryDefault };
  const Avatar = native.Avatar;
  items2 = [authStore2(Avatar, obj5), ];
  const obj6 = { style: tmp.chatContent, children: items5 };
  const obj7 = { style: tmp.chatHeader, children: items3 };
  const obj8 = { animated: true, style: animatedStyles.textStrong, variant: "body-md/semibold", lineClamp: 1, children: intl.string(intl4.t.cqpybK) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items3 = [authStore2(Text, obj8), ];
  const obj9 = { animated: true, variant: "body-xs/medium", style: items4, children: memo };
  items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  items3[1] = authStore2(Text_Text.Text, obj9);
  items5 = [map1(hasOwnProperty, obj7), ];
  const obj10 = { animated: true, variant: "body-md/normal", style: { color: hexResult }, children: intl2.string(intl4.t.Mi9Kbe) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items5[1] = authStore2(Text2, obj10);
  items2[1] = map1(hasOwnProperty, obj6);
  return authStore2(View, obj2);
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
let closure_19 = { code: "(function GuildSettingsModalOfficialMessagesTsx1(){let[activeIndex]=this.__closure;return activeIndex.get();})" };
let closure_20 = { code: "(function GuildSettingsModalOfficialMessagesTsx2(activeIndex){let[scheduleOnRN,setCurrentThemeIndex]=this.__closure;scheduleOnRN(setCurrentThemeIndex,Math.round(activeIndex));})" };
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx");

export default function GuildSettingsModalOfficialMessages(guildId) {
  let guild;
  let intl;
  let intl2;
  let items10;
  let items11;
  let obj7;
  let obj8;
  let onLayout;
  let ref;
  let submitting;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp2Result6;
  guildId = guildId.guildId;
  submitting = undefined;
  let stateFromStores;
  const tmp = closure_14();
  let tmp2 = guildId;
  let obj = guildId(submitting[16]);
  navigation = obj.useNavigation();
  let obj2 = guildId(submitting[17]);
  let items = [GuildSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: GuildSettingsStore.getGuild(), submitting: GuildSettingsStore.isSubmitting(), hasChanges: GuildSettingsStore.hasChanges() };
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
  const items1 = [GuildStore];
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
  const tmp8 = hasChanges(officialMessageColor.useState(0), 2);
  const first = tmp8[0];
  const items3 = [guildId];
  const tmp10 = tmp8[1];
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
        return authStore2(HeaderActionButton, obj);
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
    const tmp2 = asyncRequire(18739, dependencyMap.paths);
    intl = intl4.intl;
    openLazy(tmp2, "RoleColorPicker", obj);
  }, items5);
  const tmp15 = navigation(submitting[24])();
  const width = tmp15.width;
  let num = 0;
  ({ ref, onLayout } = tmp15);
  const obj4 = officialMessageColor;
  const tmp14 = navigation;
  if (undefined !== width) {
    num = width;
  }
  const memo = obj4.useMemo(() => {
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
  const tmp2Result4 = tmp2(submitting[25]);
  const segmentedControlState = tmp2Result4.useSegmentedControlState({ items: memo, pageWidth: num, defaultIndex: first });
  const activeIndex = segmentedControlState.activeIndex;
  const items6 = [closure_19, activeIndex];
  let c0;
  [tmp19, tmp20] = items6;
  const tmp2Result5 = tmp2(submitting[26]);
  class GuildSettingsModalOfficialMessagesTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items7 = [tmp20];
  GuildSettingsModalOfficialMessagesTsx1.__closure = items7;
  GuildSettingsModalOfficialMessagesTsx1.__workletHash = 403406940357;
  GuildSettingsModalOfficialMessagesTsx1.__initData = tmp19;
  const items8 = [closure_20, , ];
  const useAnimatedReaction = tmp2Result5.useAnimatedReaction;
  items8[1] = tmp2(submitting[27]).scheduleOnRN;
  items8[2] = tmp10;
  c0 = undefined;
  let c1;
  [tmp21, tmp22, tmp23] = items8;
  class GuildSettingsModalOfficialMessagesTsx2 {
    constructor(arg0) {
      _undefined(c1, Math.round(arg0));
    }
  }
  const items9 = [tmp22, tmp23];
  GuildSettingsModalOfficialMessagesTsx2.__closure = items9;
  GuildSettingsModalOfficialMessagesTsx2.__workletHash = 12682943328745;
  GuildSettingsModalOfficialMessagesTsx2.__initData = tmp21;
  const animatedReaction = useAnimatedReaction(GuildSettingsModalOfficialMessagesTsx1, GuildSettingsModalOfficialMessagesTsx2);
  let obj3 = { bgBaseLow: closure_15(activeIndex), borderStrong: closure_16(activeIndex), textStrong: closure_17(activeIndex), textMuted: closure_18(activeIndex) };
  const obj5 = { style: tmp.container, children: items10 };
  const obj6 = { label: intl.string(tmp2(submitting[12]).t["2uQ6wZ"]), onPress: callback, arrow: true, trailing: closure_12(stateFromStores, obj7), subLabel: tmp2Result6.int2hex(officialMessageColor) };
  const TableRow = tmp2(tmp3[28]).TableRow;
  intl = tmp2(tmp3[12]).intl;
  obj7 = { style: tmp.trailingColorContainer, children: closure_12(tmp14(submitting[29]), obj8) };
  obj8 = { color: officialMessageColor, style: tmp.colorBlock };
  tmp2Result6 = tmp2(submitting[30]);
  items10 = [closure_12(TableRow, obj6), ];
  const obj9 = { style: tmp.chatSection, children: items11 };
  const obj10 = { variant: "heading-sm/semibold", children: intl2.string(tmp2(submitting[12]).t.VI0jGW) };
  const Text = tmp2(tmp3[31]).Text;
  intl2 = tmp2(tmp3[12]).intl;
  items11 = [closure_12(Text, obj10), , ];
  const obj11 = { animatedStyles: obj3, selectedColor: officialMessageColor, theme: memo[first].id };
  items11[1] = closure_12(MessagePreview, obj11);
  const obj12 = { style: tmp.segmentedControlContainer, ref, onLayout, children: closure_12(tmp2(submitting[32]).SegmentedControl, { variant: "experimental_Large", state: segmentedControlState }) };
  items11[2] = closure_12(stateFromStores, obj12);
  items10[1] = closure_13(stateFromStores, obj9);
  return closure_13(stateFromStores, obj5);
};
