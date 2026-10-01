// Module ID: 11891
// Function ID: 11892
// Name: ApplicationCommandsCategories
// Dependencies: [19, 17, 2108, 11888, 21, 4836, 576, 504, 11713, 5899, 5435, 1115, 4801, 4802, 2]
// Exports: default

// Module 11891 (ApplicationCommandsCategories)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import FastImageDefault from "FastImage" /* 5899 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 11713 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import ApplicationCommandsCategoriesConstants from "ApplicationCommandsCategoriesConstants" /* 11888 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let nativeEvent, section;

let ICON_SIZE;
let NODE_MARGIN;
let NODE_SIZE;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let obj2;
let obj3;
let size;
let react = react_mod;
({ View: closure_4, FlatList: hasOwnProperty } = react_native);
({ ICON_SIZE, NODE_SIZE, NODE_MARGIN, ITEM_WIDTH: metroImportDefault } = ApplicationCommandsCategoriesConstants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, categoryImage: size, fadedItem: { opacity: 0.5 }, activeItem: obj3, item: { marginVertical: NODE_MARGIN, marginHorizontal: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND, borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
size = { height: ICON_SIZE, width: ICON_SIZE, borderRadius: ICON_SIZE / 2 };
obj3 = { opacity: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_9 = createStyles(obj);
let closure_10 = react.memo((section) => {
  let active;
  let formatToPlainStringResult;
  section = section.section;
  ({ handlePressCategory: importDefault, active, index: dependencyMap, guildId: react } = section);
  const tmp = closure_9();
  const tmp2 = section;
  let obj = section(504);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != react) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  });
  const items1 = [section, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = application_commands_ApplicationCommandUtils;
    return obj.getApplicationCommandsIconSource(section, stateFromStores);
  }, items1);
  null != memo && jsx(FastImageDefault, { style: tmp.categoryImage, source: memo });
  const PressableOpacity = tmp2(5435).PressableOpacity;
  const intl = tmp2(1115).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp2(1115).t;
  if (active) {
    const obj4 = { applicationName: section.name };
    formatToPlainStringResult = formatToPlainString(t.yl24Gd, obj4);
  } else {
    const obj5 = { applicationName: section.name };
    formatToPlainStringResult = formatToPlainString(t["9uqD4O"], obj5);
  }
  const items2 = [tmp.item, active ? tmp.activeItem : tmp.fadedItem];
  return <PressableOpacity key={section.name} onPress={function onPress() {
    return importDefault(dependencyMap);
  }} accessibilityRole="button" accessibilityLabel={formatToPlainStringResult}>{null}</PressableOpacity>;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsCategories.tsx");

export default function ApplicationCommandsCategories(onPressSection) {
  let sections;
  let style;
  onPressSection = onPressSection.onPressSection;
  const selectedIndex = onPressSection.selectedIndex;
  const guildId = onPressSection.guildId;
  react = undefined;
  ({ style, sections } = onPressSection);
  const tmp = closure_9();
  react = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const ref = react.useRef(null);
  const items = [selectedIndex];
  const effect = react.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          if (null != ref3.current) {
            const result = selectedIndex * metroImportDefault;
            const tmp8 = result > tmp2.current || result < tmp.current;
            if (tmp8) {
              const current = tmp3.current;
              const obj = { offset: result };
              current.scrollToOffset(obj);
            }
          }
        }
      }
    }
  }, items);
  const items1 = [onPressSection];
  const handlePressCategory = react.useCallback((arg0) => {
    onPressSection(arg0);
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items1);
  const callback1 = react.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    ref.current = contentOffset.x;
    ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  const callback2 = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    ref.current = 0;
    ref2.current = layout.width;
    ref3.current = layout.width;
  }, []);
  const items2 = [selectedIndex, handlePressCategory, guildId];
  const callback3 = react.useCallback((arg0, index) => ({ length: callback, offset: callback * index, index }), []);
  const items3 = [tmp.container, style];
  ({
    ref,
    getItemLayout: callback3,
    data: sections,
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: react.useCallback((section) => {
      const index = section.index;
      return <closure_10 active={index === selectedIndex} section={arg0.item} index={index} handlePressCategory={handlePressCategory} guildId={guildId} />;
    }, items2),
    showsHorizontalScrollIndicator: false,
    onScroll: callback1,
    onLayout: callback2
  });
  return <ref2 style={items3}>{null}</ref2>;
};
