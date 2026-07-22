// Module ID: 11431
// Function ID: 88969
// Name: ApplicationCommandsCategories
// Dependencies: []
// Exports: default

// Module 11431 (ApplicationCommandsCategories)
let ICON_SIZE;
let NODE_MARGIN;
let NODE_SIZE;
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet: closure_5, FlatList: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ ICON_SIZE, NODE_SIZE, NODE_MARGIN, ITEM_WIDTH: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND, borderTopWidth: importDefault(dependencyMap[7]).modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH, borderTopColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.container = obj;
obj.categoryImage = { height: ICON_SIZE, width: ICON_SIZE, borderRadius: ICON_SIZE / 2 };
obj.fadedItem = { opacity: 0.5 };
obj1 = { opacity: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
obj.activeItem = obj1;
obj.item = { marginVertical: NODE_MARGIN, marginHorizontal: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
let closure_12 = obj1.createStyles(obj);
let closure_13 = importAllResult.memo((section) => {
  let active;
  section = section.section;
  const arg1 = section;
  ({ handlePressCategory: closure_1, active, index: closure_2, guildId: closure_3 } = section);
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != closure_3) {
      let botId;
      if (null != section) {
        botId = section.botId;
      }
      if (null != botId) {
        return member.getMember(closure_3, section.botId);
      }
    }
  });
  const items1 = [section, stateFromStores];
  const memo = importAllResult.useMemo(() => section(closure_2[9]).getApplicationCommandsIconSource(section, stateFromStores), items1);
  let tmp4 = null != memo;
  if (tmp4) {
    obj = { style: tmp.categoryImage, source: memo };
    tmp4 = callback(importDefault(dependencyMap[10]), obj);
  }
  obj = {
    onPress() {
      return callback(closure_2);
    },
    accessibilityRole: "button"
  };
  const intl = arg1(dependencyMap[12]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = arg1(dependencyMap[12]).t;
  if (active) {
    const obj1 = { applicationName: section.name };
    let formatToPlainStringResult = formatToPlainString(t.yl24Gd, obj1);
  } else {
    const obj2 = { applicationName: section.name };
    formatToPlainStringResult = formatToPlainString(t.9uqD4O, obj2);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const obj3 = { style: items2 };
  const items2 = [tmp.item, active ? tmp.activeItem : tmp.fadedItem];
  obj3.children = tmp4;
  obj.children = callback(stateFromStores, obj3);
  return callback(arg1(dependencyMap[11]).PressableOpacity, obj, section.name);
});
const tmp4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/application_commands/native/ApplicationCommandsCategories.tsx");

export default function ApplicationCommandsCategories(onPressSection) {
  let sections;
  let style;
  onPressSection = onPressSection.onPressSection;
  const arg1 = onPressSection;
  const selectedIndex = onPressSection.selectedIndex;
  const importDefault = selectedIndex;
  const guildId = onPressSection.guildId;
  const dependencyMap = guildId;
  ({ style, sections } = onPressSection);
  let obj = arg1(dependencyMap[13]);
  const React = React.useRef(null);
  let closure_4 = React.useRef(null);
  const absoluteFill = React.useRef(null);
  const ref = React.useRef(null);
  const items = [selectedIndex];
  const effect = React.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          if (null != ref3.current) {
            const result = selectedIndex * closure_9;
            let tmp8 = result > ref2.current;
            if (!tmp8) {
              tmp8 = result < ref.current;
            }
            if (tmp8) {
              const current = ref.current;
              const obj = { offset: result };
              current.scrollToOffset(obj);
            }
          }
        }
      }
    }
  }, items);
  const items1 = [onPressSection];
  const callback = React.useCallback((arg0) => {
    onPressSection(arg0);
    const result = onPressSection(guildId[14]).triggerHapticFeedback(selectedIndex(guildId[15]).IMPACT_LIGHT);
  }, items1);
  const theme = callback;
  const callback1 = React.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    closure_3.current = contentOffset.x;
    closure_4.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  const callback2 = React.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_3.current = 0;
    closure_4.current = layout.width;
    closure_5.current = layout.width;
  }, []);
  const items2 = [selectedIndex, callback, guildId];
  const callback3 = React.useCallback((arg0, index) => ({ length: closure_9, offset: closure_9 * index, index }), []);
  obj = { style: items3 };
  const items3 = [callback2().container, style];
  let tmp12Result = !obj.useMobileVisualRefreshConfig({ location: "ApplicationCommandsCategories" }).enabled;
  const callback4 = React.useCallback((index) => {
    index = index.index;
    return callback(closure_13, { active: index === selectedIndex, section: index.item, index, handlePressCategory: callback, guildId });
  }, items2);
  if (tmp12Result) {
    obj = {};
    const tmp12 = callback;
    const tmp15 = importDefault(dependencyMap[16]);
    let str = "light";
    if (obj4.isThemeDark(theme.theme)) {
      str = "dark";
    }
    obj.blurTheme = str;
    obj.style = absoluteFill.absoluteFill;
    tmp12Result = tmp12(tmp15, obj);
    const obj4 = arg1(dependencyMap[17]);
  }
  const items4 = [
    tmp12Result,
    callback(ref, {
      ref,
      getItemLayout: callback3,
      data: sections,
      keyboardShouldPersistTaps: "always",
      horizontal: true,
      keyExtractor(id) {
        return id.id;
      },
      renderItem: callback4,
      showsHorizontalScrollIndicator: false,
      onScroll: callback1,
      onLayout: callback2
    })
  ];
  obj.children = items4;
  return closure_11(closure_4, obj);
};
