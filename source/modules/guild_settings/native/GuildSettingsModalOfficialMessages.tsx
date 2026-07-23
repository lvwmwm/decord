// Module ID: 16485
// Function ID: 128428
// Name: MessagePreview
// Dependencies: [57, 31, 27, 4122, 1838, 8439, 5126, 4123, 482, 33, 4130, 689, 1212, 14156, 10356, 14158, 4130, 1456, 566, 8438, 5087, 5788, 4098, 14820, 1934, 8360, 3991, 5165, 13569, 665, 4126, 8760, 3800, 5648, 666, 1273, 14171, 2]
// Exports: default

// Module 16485 (MessagePreview)
import _slicedToArray from "_slicedToArray";
import SegmentedControl from "SegmentedControl";
import get_ActivityIndicator from "TableRowInner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";
import { ThemeTypes } from "sum";
import jsxProd from "isGuildOfficialMessagesEnabled";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_9;
const require = arg1;
function MessagePreview(theme) {
  let animatedStyles;
  let selectedColor;
  ({ animatedStyles, selectedColor } = theme);
  const tmp = _createForOfIteratorHelperLoose();
  const memo = React.useMemo(() => {
    const obj = outer1_0(outer1_2[32]);
    return obj.calendarFormat(new Date(), true);
  }, []);
  const internal = importDefault(689).internal;
  let num = 1;
  const semanticColor = internal.resolveSemanticColor(theme.theme, importDefault(689).colors.BACKGROUND_BASE_LOWER);
  if (_isNativeReflectConstruct.desaturateUserColors) {
    num = _isNativeReflectConstruct.saturation;
  }
  let obj = require(5648) /* isGuildOfficialMessagesEnabled */;
  const accessibleGuildOfficialTextColor = obj.getAccessibleGuildOfficialTextColor(selectedColor, semanticColor, num);
  let obj2 = importDefault(666)(selectedColor);
  const hexResult = accessibleGuildOfficialTextColor.hex();
  const alphaResult = obj2.alpha(closure_10);
  obj = { style: items, pointerEvents: "none" };
  items = [tmp.chatContainer, , ];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj = { style: items1 };
  items1 = [tmp.chatContainerInner, { backgroundColor: obj2.alpha(closure_10).hex() }];
  const obj1 = { source: importDefault(14171) };
  const items2 = [callback(require(1273) /* Button */.Avatar, obj1), ];
  obj2 = { style: tmp.chatContent };
  const obj3 = { style: tmp.chatHeader };
  const obj4 = { animated: true, style: animatedStyles.textStrong, variant: "text-md/semibold", lineClamp: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl.string(require(1212) /* getSystemLocale */.t.cqpybK);
  const items3 = [callback(require(4126) /* Text */.Text, obj4), ];
  const obj5 = { animated: true, variant: "text-xs/medium" };
  const items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  obj5.style = items4;
  obj5.children = memo;
  items3[1] = callback(require(4126) /* Text */.Text, obj5);
  obj3.children = items3;
  const items5 = [callback2(View, obj3), ];
  const obj6 = { animated: true, variant: "text-md/normal", style: { color: hexResult } };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl2.string(require(1212) /* getSystemLocale */.t.Mi9Kbe);
  items5[1] = callback(require(4126) /* Text */.Text, obj6);
  obj2.children = items5;
  items2[1] = callback2(View, obj2);
  obj.children = items2;
  obj.children = callback2(View, obj);
  return callback(importDefault(3991).View, obj);
}
const View = get_ActivityIndicator.View;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_9, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_10 } = MESSAGE_GROUP_SPACING);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, height: "100%" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.segmentedControlContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.trailingColorContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.colorBlock = { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 };
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.chatSection = { paddingHorizontal: require("TABLE_ROW_HEIGHT").TABLE_ROW_PADDING, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { paddingHorizontal: require("TABLE_ROW_HEIGHT").TABLE_ROW_PADDING, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.chatContainer = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderWidth: get_ActivityIndicator.StyleSheet.hairlineWidth };
let obj3 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, borderWidth: get_ActivityIndicator.StyleSheet.hairlineWidth };
_createForOfIteratorHelperLoose.chatContainerInner = { flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.chatContent = { flex: 1 };
_createForOfIteratorHelperLoose.chatHeader = { flexDirection: "row", alignItems: "baseline", gap: 6 };
_createForOfIteratorHelperLoose.chatTimestamp = { marginTop: -8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_15 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW });
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let closure_16 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG });
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createAnimatedThemedStyles(_createForOfIteratorHelperLoose);
let obj6 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
let closure_18 = _createForOfIteratorHelperLoose.createAnimatedThemedStyles({ color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED });
let closure_19 = { code: "function GuildSettingsModalOfficialMessagesTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
let closure_20 = { code: "function GuildSettingsModalOfficialMessagesTsx2(activeIndex){const{runOnJS,setCurrentThemeIndex}=this.__closure;runOnJS(setCurrentThemeIndex)(Math.round(activeIndex));}" };
const obj8 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx");

export default function GuildSettingsModalOfficialMessages(guildId) {
  let guild;
  let submitting;
  guildId = guildId.guildId;
  let officialMessageColor;
  let stateFromStores;
  let c6;
  let closure_7;
  let activeIndex;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(submitting[17]);
  const navigation = obj.useNavigation();
  let obj1 = guildId(submitting[18]);
  let items = [activeIndex];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ guild: activeIndex.getGuild(), submitting: activeIndex.isSubmitting(), hasChanges: activeIndex.hasChanges() }));
  ({ guild, submitting } = stateFromStoresObject);
  const hasChanges = stateFromStoresObject.hasChanges;
  officialMessageColor = undefined;
  if (null != guild) {
    officialMessageColor = guild.officialMessageColor;
  }
  if (null == officialMessageColor) {
    officialMessageColor = closure_9;
  }
  let obj2 = guildId(submitting[18]);
  const items1 = [closure_7];
  const items2 = [guildId];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    guild = guild.getGuild(guildId);
    let officialMessageColor;
    if (null != guild) {
      officialMessageColor = guild.officialMessageColor;
    }
    if (null == officialMessageColor) {
      officialMessageColor = outer1_9;
    }
    return officialMessageColor;
  }, items2);
  const tmp6 = hasChanges(officialMessageColor.useState(0), 2);
  const first = tmp6[0];
  c6 = tmp8;
  const items3 = [guildId];
  const effect = officialMessageColor.useEffect(() => () => {
    navigation(submitting[19]).cancelChanges(outer1_0);
  }, items3);
  const items4 = [guildId, officialMessageColor, navigation, submitting, hasChanges];
  const effect1 = officialMessageColor.useEffect(() => {
    function handleSaveChanges() {
      let obj = navigation(submitting[19]);
      obj = { officialMessageColor: outer1_4 };
      obj.saveGuild(handleSaveChanges, obj);
    }
    let obj = {};
    let fn;
    if (submitting) {
      fn = () => null;
    }
    obj.headerLeft = fn;
    if (submitting) {
      let fn2 = () => outer2_12(guildId(submitting[20]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: handleSaveChanges };
        const intl = guildId(submitting[12]).intl;
        obj.text = intl.string(guildId(submitting[12]).t["R3BPH+"]);
        return outer2_12(guildId(submitting[21]).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items4);
  const items5 = [officialMessageColor, stateFromStores];
  const callback = officialMessageColor.useCallback(() => {
    let obj = navigation(submitting[22]);
    obj = { color: officialMessageColor, defaultColor: stateFromStores };
    const intl = guildId(submitting[12]).intl;
    obj.confirmLabel = intl.string(guildId(submitting[12]).t.XqMe3N);
    obj.onSelect = function onSelect(officialMessageColor) {
      let obj = navigation(submitting[19]);
      obj = { officialMessageColor };
      obj.updateGuild(obj);
    };
    obj.openLazy(guildId(submitting[24])(submitting[23], submitting.paths), "RoleColorPicker", obj);
  }, items5);
  const tmp12 = hasChanges(officialMessageColor.useState(0), 2);
  closure_7 = tmp12[1];
  const callback1 = officialMessageColor.useCallback((nativeEvent) => {
    guild(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = officialMessageColor.useMemo(() => {
    let obj = {};
    const intl = guildId(submitting[12]).intl;
    obj.label = intl.string(guildId(submitting[12]).t.K2sFfo);
    obj.id = outer1_11.LIGHT;
    obj.icon = outer1_12(guildId(submitting[13]).ThemeLightIcon, {});
    obj.page = null;
    const items = [obj, , ];
    obj = {};
    const intl2 = guildId(submitting[12]).intl;
    obj.label = intl2.string(guildId(submitting[12]).t.b8Cei3);
    obj.id = outer1_11.DARKER;
    obj.icon = outer1_12(guildId(submitting[14]).ThemeDarkIcon, {});
    obj.page = null;
    items[1] = obj;
    obj = {};
    const intl3 = guildId(submitting[12]).intl;
    obj.label = intl3.string(guildId(submitting[12]).t.pQwSpQ);
    obj.id = outer1_11.MIDNIGHT;
    obj.icon = outer1_12(guildId(submitting[15]).ThemeMidnightIcon, {});
    obj.page = null;
    items[2] = obj;
    return items;
  }, []);
  let obj3 = guildId(submitting[25]);
  const segmentedControlState = obj3.useSegmentedControlState({ items: memo, pageWidth: tmp12[0], defaultIndex: first });
  activeIndex = segmentedControlState.activeIndex;
  let obj4 = guildId(submitting[26]);
  let fn = function k() {
    return activeIndex.get();
  };
  fn.__closure = { activeIndex };
  fn.__workletHash = 4687220686460;
  fn.__initData = closure_19;
  class B {
    constructor(arg0) {
      obj = guildId(submitting[26]);
      runOnJSResult = obj.runOnJS(c6);
      tmpResult = runOnJSResult(Math.round(guildId));
      return;
    }
  }
  obj = { runOnJS: guildId(submitting[26]).runOnJS, setCurrentThemeIndex: tmp8 };
  B.__closure = obj;
  B.__workletHash = 5332792853021;
  B.__initData = closure_20;
  const animatedReaction = obj4.useAnimatedReaction(fn, B);
  obj = { bgBaseLow: callback3(activeIndex), borderStrong: callback4(activeIndex), textStrong: _createForOfIteratorHelperLoose(activeIndex), textMuted: callback5(activeIndex) };
  obj1 = { style: tmp.container };
  obj2 = {};
  let intl = guildId(submitting[12]).intl;
  obj2.label = intl.string(guildId(submitting[12]).t["2uQ6wZ"]);
  obj2.onPress = callback;
  obj2.arrow = true;
  obj3 = { style: tmp.trailingColorContainer, children: callback(navigation(submitting[28]), obj4) };
  obj4 = { color: officialMessageColor, style: tmp.colorBlock };
  obj2.trailing = callback(stateFromStores, obj3);
  obj2.subLabel = guildId(submitting[29]).int2hex(officialMessageColor);
  const items6 = [callback(guildId(submitting[27]).TableRow, obj2), ];
  const obj5 = { style: tmp.chatSection };
  const obj6 = { variant: "heading-md/semibold" };
  let intl2 = guildId(submitting[12]).intl;
  obj6.children = intl2.string(guildId(submitting[12]).t.VI0jGW);
  const items7 = [callback(guildId(submitting[30]).Text, obj6), , ];
  const obj7 = { animatedStyles: obj, selectedColor: officialMessageColor, theme: memo[first].id };
  items7[1] = callback(MessagePreview, obj7);
  const obj12 = guildId(submitting[29]);
  items7[2] = callback(stateFromStores, { style: tmp.segmentedControlContainer, onLayout: callback1, children: callback(guildId(submitting[31]).SegmentedControl, { variant: "experimental_Large", state: segmentedControlState }) });
  obj5.children = items7;
  items6[1] = callback2(stateFromStores, obj5);
  obj1.children = items6;
  return callback2(stateFromStores, obj1);
};
