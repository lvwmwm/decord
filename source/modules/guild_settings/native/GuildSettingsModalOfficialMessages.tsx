// Module ID: 16368
// Function ID: 126254
// Name: MessagePreview
// Dependencies: []
// Exports: default

// Module 16368 (MessagePreview)
function MessagePreview(theme) {
  let animatedStyles;
  let selectedColor;
  ({ animatedStyles, selectedColor } = theme);
  const tmp = callback4();
  const memo = React.useMemo(() => {
    const obj = callback(closure_2[32]);
    return obj.calendarFormat(new Date(), true);
  }, []);
  const internal = importDefault(dependencyMap[11]).internal;
  let num = 1;
  const semanticColor = internal.resolveSemanticColor(theme.theme, importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWER);
  if (closure_6.desaturateUserColors) {
    num = closure_6.saturation;
  }
  let obj = arg1(dependencyMap[33]);
  const accessibleGuildOfficialTextColor = obj.getAccessibleGuildOfficialTextColor(selectedColor, semanticColor, num);
  let obj2 = importDefault(dependencyMap[34])(selectedColor);
  const hexResult = accessibleGuildOfficialTextColor.hex();
  const alphaResult = obj2.alpha(closure_10);
  obj = { style: items, pointerEvents: "none" };
  const items = [tmp.chatContainer, , ];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj = { style: items1 };
  const items1 = [tmp.chatContainerInner, { backgroundColor: obj2.alpha(closure_10).hex() }];
  const obj1 = { source: importDefault(dependencyMap[36]) };
  const items2 = [callback2(arg1(dependencyMap[35]).Avatar, obj1), ];
  obj2 = { style: tmp.chatContent };
  const obj3 = { style: tmp.chatHeader };
  const obj4 = { style: animatedStyles.textStrong };
  const intl = arg1(dependencyMap[12]).intl;
  obj4.children = intl.string(arg1(dependencyMap[12]).t.cqpybK);
  const items3 = [callback2(arg1(dependencyMap[30]).Text, obj4), ];
  const items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  items3[1] = callback2(arg1(dependencyMap[30]).Text, { style: items4, children: memo });
  obj3.children = items3;
  const items5 = [callback3(View, obj3), ];
  const obj5 = { style: { color: hexResult } };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj5.children = intl2.string(arg1(dependencyMap[12]).t.Mi9Kbe);
  items5[1] = callback2(arg1(dependencyMap[30]).Text, obj5);
  obj2.children = items5;
  items2[1] = callback3(View, obj2);
  obj.children = items2;
  obj.children = callback3(View, obj);
  return callback2(importDefault(dependencyMap[26]).View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_9, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_10 } = arg1(dependencyMap[7]));
const ThemeTypes = arg1(dependencyMap[8]).ThemeTypes;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { gap: importDefault(dependencyMap[11]).space.PX_8, height: "100%" };
obj.container = obj;
const tmp4 = arg1(dependencyMap[9]);
obj.segmentedControlContainer = { gap: importDefault(dependencyMap[11]).space.PX_16, alignItems: "center", paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
obj.trailingColorContainer = {};
obj.colorBlock = {};
const obj1 = { gap: importDefault(dependencyMap[11]).space.PX_16, alignItems: "center", paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
obj.chatSection = { paddingHorizontal: arg1(dependencyMap[6]).TABLE_ROW_PADDING, gap: importDefault(dependencyMap[11]).space.PX_8 };
const obj2 = { paddingHorizontal: arg1(dependencyMap[6]).TABLE_ROW_PADDING, gap: importDefault(dependencyMap[11]).space.PX_8 };
obj.chatContainer = { paddingVertical: importDefault(dependencyMap[11]).space.PX_24, borderRadius: importDefault(dependencyMap[11]).radii.xl, borderWidth: tmp2.StyleSheet.hairlineWidth };
const obj3 = { paddingVertical: importDefault(dependencyMap[11]).space.PX_24, borderRadius: importDefault(dependencyMap[11]).radii.xl, borderWidth: tmp2.StyleSheet.hairlineWidth };
obj.chatContainerInner = { flexDirection: "row", backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW, gap: importDefault(dependencyMap[11]).space.PX_8 };
obj.chatContent = { flex: 1 };
obj.chatHeader = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
obj.chatTimestamp = { marginTop: -8 };
let closure_14 = obj.createStyles(obj);
let obj7 = arg1(dependencyMap[16]);
const obj4 = { flexDirection: "row", backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW, gap: importDefault(dependencyMap[11]).space.PX_8 };
let closure_15 = obj7.createAnimatedThemedStyles({ backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW });
const obj5 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW };
const obj10 = arg1(dependencyMap[16]);
let closure_16 = obj10.createAnimatedThemedStyles({ borderColor: importDefault(dependencyMap[11]).colors.BORDER_STRONG });
const obj6 = { borderColor: importDefault(dependencyMap[11]).colors.BORDER_STRONG };
obj7 = { color: importDefault(dependencyMap[11]).colors.TEXT_DEFAULT };
let closure_17 = arg1(dependencyMap[16]).createAnimatedThemedStyles(obj7);
const obj12 = arg1(dependencyMap[16]);
const obj14 = arg1(dependencyMap[16]);
let closure_18 = obj14.createAnimatedThemedStyles({ color: importDefault(dependencyMap[11]).colors.TEXT_MUTED });
let closure_19 = { code: "function GuildSettingsModalOfficialMessagesTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
let closure_20 = { code: "function GuildSettingsModalOfficialMessagesTsx2(activeIndex){const{runOnJS,setCurrentThemeIndex}=this.__closure;runOnJS(setCurrentThemeIndex)(Math.round(activeIndex));}" };
const obj8 = { color: importDefault(dependencyMap[11]).colors.TEXT_MUTED };
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx");

export default function GuildSettingsModalOfficialMessages(guildId) {
  let guild;
  let submitting;
  guildId = guildId.guildId;
  const arg1 = guildId;
  let React;
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  const tmp = callback4();
  let obj = arg1(dependencyMap[17]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  let obj1 = arg1(dependencyMap[18]);
  const items = [closure_8];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ guild: activeIndex.getGuild(), submitting: activeIndex.isSubmitting(), hasChanges: activeIndex.hasChanges() }));
  ({ guild, submitting } = stateFromStoresObject);
  const dependencyMap = submitting;
  const hasChanges = stateFromStoresObject.hasChanges;
  let callback = hasChanges;
  let officialMessageColor;
  if (null != guild) {
    officialMessageColor = guild.officialMessageColor;
  }
  if (null == officialMessageColor) {
    officialMessageColor = closure_9;
  }
  React = officialMessageColor;
  let obj2 = arg1(dependencyMap[18]);
  const items1 = [closure_7];
  const items2 = [guildId];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    const guild = guild.getGuild(guildId);
    let officialMessageColor;
    if (null != guild) {
      officialMessageColor = guild.officialMessageColor;
    }
    if (null == officialMessageColor) {
      officialMessageColor = closure_9;
    }
    return officialMessageColor;
  }, items2);
  View = stateFromStores;
  const tmp6 = callback(React.useState(0), 2);
  const first = tmp6[0];
  closure_6 = tmp8;
  const items3 = [guildId];
  const effect = React.useEffect(() => () => {
    callback(closure_2[19]).cancelChanges(closure_0);
  }, items3);
  const items4 = [guildId, officialMessageColor, navigation, submitting, hasChanges];
  const effect1 = React.useEffect(() => {
    function handleSaveChanges(arg0) {
      let obj = callback(closure_2[19]);
      obj = { officialMessageColor: closure_4 };
      obj.saveGuild(handleSaveChanges, obj);
    }
    const obj = {};
    let fn;
    if (submitting) {
      fn = () => null;
    }
    obj.headerLeft = fn;
    if (submitting) {
      let fn2 = () => callback2(handleSaveChanges(closure_2[20]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: handleSaveChanges };
        const intl = handleSaveChanges(closure_2[12]).intl;
        obj.text = intl.string(handleSaveChanges(closure_2[12]).t.R3BPH+);
        return callback2(handleSaveChanges(closure_2[21]).HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items4);
  const items5 = [officialMessageColor, stateFromStores];
  callback = React.useCallback(() => {
    let obj = navigation(submitting[22]);
    obj = { color: officialMessageColor, defaultColor: stateFromStores };
    const intl = guildId(submitting[12]).intl;
    obj.confirmLabel = intl.string(guildId(submitting[12]).t.XqMe3N);
    obj.onSelect = function onSelect(officialMessageColor) {
      let obj = callback(closure_2[19]);
      obj = { officialMessageColor };
      obj.updateGuild(obj);
    };
    obj.openLazy(guildId(submitting[24])(submitting[23], submitting.paths), "RoleColorPicker", obj);
  }, items5);
  const tmp12 = callback(React.useState(0), 2);
  closure_7 = tmp12[1];
  const callback1 = React.useCallback((nativeEvent) => {
    guild(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = guildId(submitting[12]).intl;
    obj.label = intl.string(guildId(submitting[12]).t.K2sFfo);
    obj.id = constants.LIGHT;
    obj.icon = callback(guildId(submitting[13]).ThemeLightIcon, {});
    obj.page = null;
    const items = [obj, , ];
    obj = {};
    const intl2 = guildId(submitting[12]).intl;
    obj.label = intl2.string(guildId(submitting[12]).t.b8Cei3);
    obj.id = constants.DARKER;
    obj.icon = callback(guildId(submitting[14]).ThemeDarkIcon, {});
    obj.page = null;
    items[1] = obj;
    obj = {};
    const intl3 = guildId(submitting[12]).intl;
    obj.label = intl3.string(guildId(submitting[12]).t.pQwSpQ);
    obj.id = constants.MIDNIGHT;
    obj.icon = callback(guildId(submitting[15]).ThemeMidnightIcon, {});
    obj.page = null;
    items[2] = obj;
    return items;
  }, []);
  let obj3 = arg1(dependencyMap[25]);
  const segmentedControlState = obj3.useSegmentedControlState({ items: memo, pageWidth: tmp12[0], defaultIndex: first });
  const activeIndex = segmentedControlState.activeIndex;
  closure_8 = activeIndex;
  let obj4 = arg1(dependencyMap[26]);
  const fn = function k() {
    return activeIndex.get();
  };
  fn.__closure = { activeIndex };
  fn.__workletHash = 4687220686460;
  fn.__initData = closure_19;
  class B {
    constructor(arg0) {
      obj = guildId(submitting[26]);
      runOnJSResult = obj.runOnJS(closure_6);
      tmpResult = runOnJSResult(Math.round(guildId));
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[26]).runOnJS, setCurrentThemeIndex: tmp8 };
  B.__closure = obj;
  B.__workletHash = 5332792853021;
  B.__initData = closure_20;
  const animatedReaction = obj4.useAnimatedReaction(fn, B);
  obj = { bgBaseLow: callback5(activeIndex), borderStrong: callback6(activeIndex), textStrong: callback7(activeIndex), textMuted: callback8(activeIndex) };
  obj1 = { style: tmp.container };
  obj2 = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj2.label = intl.string(arg1(dependencyMap[12]).t.2uQ6wZ);
  obj2.onPress = callback;
  obj2.arrow = true;
  obj3 = { style: tmp.trailingColorContainer, children: callback2(importDefault(dependencyMap[28]), obj4) };
  obj4 = { color: officialMessageColor, style: tmp.colorBlock };
  obj2.trailing = callback2(View, obj3);
  obj2.subLabel = arg1(dependencyMap[29]).int2hex(officialMessageColor);
  const items6 = [callback2(arg1(dependencyMap[27]).TableRow, obj2), ];
  const obj5 = { style: tmp.chatSection };
  const obj6 = { variant: "heading-md/semibold" };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj6.children = intl2.string(arg1(dependencyMap[12]).t.VI0jGW);
  const items7 = [callback2(arg1(dependencyMap[30]).Text, obj6), , ];
  const obj7 = { animatedStyles: obj, selectedColor: officialMessageColor, theme: memo[first].id };
  items7[1] = callback2(MessagePreview, obj7);
  const obj12 = arg1(dependencyMap[29]);
  items7[2] = callback2(View, { style: tmp.segmentedControlContainer, onLayout: callback1, children: callback2(arg1(dependencyMap[31]).SegmentedControl, { variant: "experimental_Large", state: segmentedControlState }) });
  obj5.children = items7;
  items6[1] = callback3(View, obj5);
  obj1.children = items6;
  return callback3(View, obj1);
};
