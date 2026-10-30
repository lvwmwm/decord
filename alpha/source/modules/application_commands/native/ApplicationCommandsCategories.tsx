// Module ID: 13912
// Function ID: 13913
// Name: ApplicationCommandsCategories
// Dependencies: [19, 17, 4921, 13909, 21, 5009, 575, 504, 13743, 5712, 6974, 1114, 5255, 5256, 7288, 2]
// Exports: default

// Module 13912 (ApplicationCommandsCategories)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5256 */;
import FastImageDefault from "FastImage" /* 5712 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 13743 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import ApplicationCommandsCategoriesConstants from "ApplicationCommandsCategoriesConstants" /* 13909 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let nativeEvent;

let ICON_SIZE;
let NODE_MARGIN;
let NODE_SIZE;
let metroRequire;
let obj2;
let obj3;
let size;
let react = react_mod;
const View = react_native.View;
({ ICON_SIZE, NODE_SIZE, NODE_MARGIN, ITEM_WIDTH: metroRequire } = ApplicationCommandsCategoriesConstants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, categoryImage: size, fadedItem: { opacity: 0.5 }, activeItem: obj3, item: { marginVertical: NODE_MARGIN, marginHorizontal: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_COMMAND_CATEGORIES_BACKGROUND, borderTopWidth: nativeDefault.modules.mobile.CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
size = { height: ICON_SIZE, width: ICON_SIZE, borderRadius: ICON_SIZE / 2 };
obj3 = { opacity: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_8 = createStyles(obj);
let closure_9 = react.memo(function CategoryItem(section) {
  let active;
  let formatToPlainStringResult;
  section = section.section;
  ({ handlePressCategory: importDefault, active, index: dependencyMap, guildId: react } = section);
  const tmp = closure_8();
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
  const PressableOpacity = tmp2(6974).PressableOpacity;
  const intl = tmp2(1114).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp2(1114).t;
  if (active) {
    const obj4 = { applicationName: section.name };
    formatToPlainStringResult = formatToPlainString(t.yl24Gd, obj4);
  } else {
    const obj5 = { applicationName: section.name };
    formatToPlainStringResult = formatToPlainString(t["9uqD4O"], obj5);
  }
  const items2 = [tmp.item, active ? tmp.activeItem : tmp.fadedItem];
  return <PressableOpacity onPress={function onPress() {
    return importDefault(dependencyMap);
  }} accessibilityRole="button" accessibilityLabel={formatToPlainStringResult}>{null}</PressableOpacity>;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsCategories.tsx");

export default function ApplicationCommandsCategories(onPressSection) {
  let items3;
  let obj2;
  let sections;
  let style;
  onPressSection = onPressSection.onPressSection;
  const selectedIndex = onPressSection.selectedIndex;
  const guildId = onPressSection.guildId;
  react = undefined;
  ({ style, sections } = onPressSection);
  const tmp = closure_8();
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
            const result = selectedIndex * metroRequire;
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
  const items2 = [selectedIndex, handlePressCategory, guildId];
  const callback2 = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    ref.current = 0;
    ref2.current = layout.width;
    ref3.current = layout.width;
  }, []);
  let obj = { style: items3, children: handlePressCategory(onPressSection(guildId[14]).FlashList, obj2) };
  items3 = [tmp.container, style];
  const callback3 = react.useCallback((section) => {
    const index = section.index;
    return <closure_9 active={index === selectedIndex} section={arg0.item} index={index} handlePressCategory={handlePressCategory} guildId={guildId} />;
  }, items2);
  obj2 = {
    ref,
    data: sections,
    extraData: selectedIndex,
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: callback3,
    showsHorizontalScrollIndicator: false,
    onScroll: callback1,
    onLayout: callback2
  };
  return handlePressCategory(ref2, obj);
};
