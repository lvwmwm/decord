// Module ID: 11441
// Function ID: 89019
// Name: ApplicationCommandsCategories
// Dependencies: [31, 27, 1278, 1917, 11438, 33, 4130, 689, 566, 11337, 5085, 4660, 1212, 1324, 4099, 4100, 4533, 3976, 2]
// Exports: default

// Module 11441 (ApplicationCommandsCategories)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ICON_SIZE from "ICON_SIZE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let ICON_SIZE;
let NODE_MARGIN;
let NODE_SIZE;
let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ View: closure_4, StyleSheet: closure_5, FlatList: closure_6 } = get_ActivityIndicator);
({ ICON_SIZE, NODE_SIZE, NODE_MARGIN, ITEM_WIDTH: closure_9 } = ICON_SIZE);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND, borderTopWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row", alignItems: "center" };
obj.container = obj;
obj.categoryImage = { height: ICON_SIZE, width: ICON_SIZE, borderRadius: ICON_SIZE / 2 };
obj.fadedItem = { opacity: 0.5 };
_createForOfIteratorHelperLoose = { opacity: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.activeItem = _createForOfIteratorHelperLoose;
obj.item = { marginVertical: NODE_MARGIN, marginHorizontal: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = importAllResult.memo((section) => {
  let active;
  let closure_3;
  let dependencyMap;
  let importDefault;
  section = section.section;
  ({ handlePressCategory: importDefault, active, index: dependencyMap, guildId: closure_3 } = section);
  const tmp = callback2();
  let obj = section(566);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != closure_3) {
      let botId;
      if (null != section) {
        botId = section.botId;
      }
      if (null != botId) {
        return outer1_8.getMember(closure_3, section.botId);
      }
    }
  });
  const items1 = [section, stateFromStores];
  const memo = importAllResult.useMemo(() => section(outer1_2[9]).getApplicationCommandsIconSource(section, stateFromStores), items1);
  let tmp4 = null != memo;
  if (tmp4) {
    obj = { style: tmp.categoryImage, source: memo };
    tmp4 = callback(importDefault(5085), obj);
  }
  obj = {
    onPress() {
      return callback(closure_2);
    },
    accessibilityRole: "button"
  };
  const intl = section(1212).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = section(1212).t;
  if (active) {
    const obj1 = { applicationName: section.name };
    let formatToPlainStringResult = formatToPlainString(t.yl24Gd, obj1);
  } else {
    const obj2 = { applicationName: section.name };
    formatToPlainStringResult = formatToPlainString(t["9uqD4O"], obj2);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const obj3 = { style: items2 };
  items2 = [tmp.item, active ? tmp.activeItem : tmp.fadedItem];
  obj3.children = tmp4;
  obj.children = callback(stateFromStores, obj3);
  return callback(section(4660).PressableOpacity, obj, section.name);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_commands/native/ApplicationCommandsCategories.tsx");

export default function ApplicationCommandsCategories(onPressSection) {
  let sections;
  let style;
  onPressSection = onPressSection.onPressSection;
  const selectedIndex = onPressSection.selectedIndex;
  const guildId = onPressSection.guildId;
  ({ style, sections } = onPressSection);
  let obj = onPressSection(guildId[13]);
  importAllResult = importAllResult.useRef(null);
  let closure_4 = importAllResult.useRef(null);
  const absoluteFill = importAllResult.useRef(null);
  const ref = importAllResult.useRef(null);
  const items = [selectedIndex];
  const effect = importAllResult.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          if (null != ref3.current) {
            const result = selectedIndex * outer1_9;
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
  const callback = importAllResult.useCallback((arg0) => {
    onPressSection(arg0);
    const result = onPressSection(guildId[14]).triggerHapticFeedback(selectedIndex(guildId[15]).IMPACT_LIGHT);
  }, items1);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    closure_3.current = contentOffset.x;
    closure_4.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  const callback2 = importAllResult.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    closure_3.current = 0;
    closure_4.current = layout.width;
    closure_5.current = layout.width;
  }, []);
  const items2 = [selectedIndex, callback, guildId];
  const callback3 = importAllResult.useCallback((arg0, index) => ({ length: outer1_9, offset: outer1_9 * index, index }), []);
  obj = { style: items3 };
  items3 = [callback2().container, style];
  let tmp12Result = !obj.useMobileVisualRefreshConfig({ location: "ApplicationCommandsCategories" }).enabled;
  const callback4 = importAllResult.useCallback((index) => {
    index = index.index;
    return outer1_10(outer1_13, { active: index === selectedIndex, section: index.item, index, handlePressCategory: callback, guildId });
  }, items2);
  if (tmp12Result) {
    obj = {};
    const tmp12 = callback;
    const tmp15 = selectedIndex(guildId[16]);
    let str = "light";
    if (obj4.isThemeDark(callback.theme)) {
      str = "dark";
    }
    obj.blurTheme = str;
    obj.style = absoluteFill.absoluteFill;
    tmp12Result = tmp12(tmp15, obj);
    obj4 = onPressSection(guildId[17]);
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
