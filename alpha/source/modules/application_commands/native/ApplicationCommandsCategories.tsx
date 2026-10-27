// Module ID: 13317
// Function ID: 13318
// Name: ApplicationCommandsCategories
// Dependencies: [19, 17, 4884, 13312, 21, 4972, 587, 558, 576, 504, 13144, 5670, 1125, 6910, 5213, 5214, 7222, 2]

// Module 13317 (ApplicationCommandsCategories)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import HapticUtils from "HapticUtils" /* 5213 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5214 */;
import FastImageDefault from "FastImage" /* 5670 */;
import application_commands_ApplicationCommandUtils from "application_commands/ApplicationCommandUtils" /* 13144 */;
import react_mod from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4884 */;
import ApplicationCommandsCategoriesConstants from "ApplicationCommandsCategoriesConstants" /* 13312 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let handlePressCategory;

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
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CategoryItem(section) {
  let active;
  let first;
  let index;
  const tmp = section;
  const tmp2 = index;
  const obj = section(index[8]);
  const cResult = obj.c(26);
  section = section.section;
  handlePressCategory = section.handlePressCategory;
  ({ active, index } = section);
  const guildId = section.guildId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp7;
    if (cResult[2] === section.botId) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(tmp2[9]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    if (cResult[4] === stateFromStores) {
      let tmp9;
      if (cResult[5] === section) {
        tmp9 = cResult[6];
      }
      if (cResult[7] === tmp9) {
        if (cResult[10] === handlePressCategory) {
          if (cResult[13] === active) {
            const tmp20 = active ? tmp4.activeItem : tmp4.fadedItem;
            class R {
              constructor() {
                return handlePressCategory(index);
              }
            }
            const items1 = [tmp4.item, tmp20];
            cResult[16] = tmp4.item;
            cResult[17] = tmp20;
            cResult[18] = items1;
          }
          class R {
            constructor() {
              return handlePressCategory(index);
            }
          }
          const formatToPlainString = tmp18.formatToPlainString;
          const t = tmp(tmp2[12]).t;
          if (active) {
            class R {
              constructor() {
                return handlePressCategory(index);
              }
            }
          } else {
            class R {
              constructor() {
                return handlePressCategory(index);
              }
            }
          }
          cResult[13] = active;
          cResult[14] = section.name;
          cResult[15] = tmp19;
        }
        class R {
          constructor() {
            return handlePressCategory(index);
          }
        }
        cResult[10] = handlePressCategory;
        cResult[11] = index;
        cResult[12] = R;
      }
      let tmp12 = null != tmp9;
      if (tmp12) {
        class R {
          constructor() {
            return handlePressCategory(index);
          }
        }
        tmp15[0] = tmp4.categoryImage;
        tmp15[1] = tmp9;
        tmp12 = jsx(handlePressCategory(tmp2[11]), tmp15);
      }
      cResult[7] = tmp9;
      cResult[8] = tmp4.categoryImage;
      cResult[9] = tmp12;
    }
    const tmpResult2 = tmp(tmp2[10]);
    const applicationCommandsIconSource = tmpResult2.getApplicationCommandsIconSource(section, stateFromStores);
    cResult[4] = stateFromStores;
    cResult[5] = section;
    cResult[6] = applicationCommandsIconSource;
    tmp9 = applicationCommandsIconSource;
  }
  const fn = function c() {
    if (null != guildId) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return GuildMemberStore.getMember(tmp, section.botId);
      }
    }
  };
  cResult[1] = guildId;
  cResult[2] = section.botId;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function CategoryItem(section) {
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
  const PressableOpacity = tmp2(6910).PressableOpacity;
  const intl = tmp2(1125).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = tmp2(1125).t;
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
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationCommandsCategories(selectedIndex) {
  let guildId;
  let onPressSection;
  let sections;
  let style;
  let tmp4;
  let tmp5;
  let tmp7;
  let obj = onPressSection(guildId[8]);
  const cResult = obj.c(22);
  ({ style, sections, onPressSection } = selectedIndex);
  selectedIndex = selectedIndex.selectedIndex;
  guildId = selectedIndex.guildId;
  const tmp2 = closure_8();
  const obj2 = react;
  react = react.useRef(null);
  const ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const ref = react.useRef(null);
  if (cResult[0] !== selectedIndex) {
    const fn = function l() {
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
    };
    const items = [selectedIndex];
    cResult[0] = selectedIndex;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  if (cResult[3] !== onPressSection) {
    const fn2 = function s(arg0) {
      onPressSection(arg0);
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    };
    cResult[3] = onPressSection;
    cResult[4] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
  }
  handlePressCategory = tmp7;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }
    }
    cResult[5] = P;
    let tmp8 = P;
  } else {
    class P {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        ref.current = 0;
        ref2.current = layout.width;
        ref3.current = layout.width;
      }
    }
    cResult[6] = A;
  } else {
    class A {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        ref.current = 0;
        ref2.current = layout.width;
        ref3.current = layout.width;
      }
    }
  }
  if (cResult[7] === guildId) {
    class A {
      constructor(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        ref.current = 0;
        ref2.current = layout.width;
        ref3.current = layout.width;
      }
    }
  }
  class M {
    constructor(section) {
      const index = section.index;
      return <closure_9 active={index === selectedIndex} section={arg0.item} index={index} handlePressCategory={handlePressCategory} guildId={guildId} />;
    }
  }
  cResult[7] = guildId;
  cResult[8] = tmp7;
  cResult[9] = selectedIndex;
  cResult[10] = M;
}) : (function ApplicationCommandsCategories(onPressSection) {
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
  handlePressCategory = react.useCallback((arg0) => {
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
  let obj = { style: items3, children: handlePressCategory(onPressSection(guildId[16]).FlashList, obj2) };
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
});
size = size_mod;
let result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsCategories.tsx");

export default tmp5;
