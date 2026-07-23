// Module ID: 15761
// Function ID: 121610
// Name: SoundCategoryItem
// Dependencies: [31, 27, 15746, 1849, 653, 33, 4130, 689, 4585, 5515, 1212, 9604, 4094, 15759, 4660, 1273, 4652, 4099, 4100, 566, 3776, 7957, 1557, 4001, 8511, 2]

// Module 15761 (SoundCategoryItem)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { setSearchQuery } from "openExpressionPicker";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let CATEGORY_ICON_SIZE;
let NODE_SIZE;
let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function SoundCategoryItem(style) {
  let category;
  let importDefault;
  let locked;
  let require;
  ({ category, handlePressCategory: require, index: importDefault, locked } = style);
  if (locked === undefined) {
    locked = false;
  }
  const tmp = callback3();
  const type = category.categoryInfo.type;
  if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.GUILD === type) {
    const guild = category.categoryInfo.guild;
    let name = guild.name;
    let obj = { guild, style: tmp.guildItem };
    let tmp7 = callback(importDefault(5515), obj);
    let tmp8 = null;
    let tmp6 = null;
  } else if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    name = intl3.string(require(1212) /* getSystemLocale */.t.y3LQCG);
    tmp6 = importDefault(9604);
    tmp7 = null;
    tmp8 = null;
  } else if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    name = intl2.string(require(1212) /* getSystemLocale */.t["+cGVV6"]);
    obj = { style: tmp.keyboardItem };
    tmp8 = callback(require(4094) /* ClockIcon */.ClockIcon, obj);
    tmp7 = null;
    tmp6 = null;
  } else if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    name = intl.string(require(1212) /* getSystemLocale */.t.Rtvk9X);
    tmp6 = importDefault(15759);
    tmp7 = null;
    tmp8 = null;
  } else {
    name = null;
    tmp7 = null;
    tmp8 = null;
    tmp6 = null;
    if (require(4585) /* SoundButtonOverlay */.SoundboardSoundGridSectionType.SEARCH === type) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      name = intl4.string(require(1212) /* getSystemLocale */.t.sKt3xS);
      tmp6 = importDefault(15759);
      tmp7 = null;
      tmp8 = null;
    }
  }
  obj = {
    onPress() {
      return callback(closure_1);
    },
    accessibilityRole: "button",
    accessibilityLabel: name
  };
  const obj1 = { style: items };
  items = [tmp.item, style.style];
  if (null != tmp7) {
    tmp8 = tmp7;
  }
  if (null == tmp8) {
    const obj2 = { style: tmp.keyboardItem, source: tmp6 };
    tmp8 = callback(require(1273) /* Button */.Icon, obj2);
  }
  const items1 = [tmp8, ];
  if (locked) {
    const obj3 = { style: tmp.lockContainer };
    const obj4 = { style: tmp.lock };
    obj3.children = callback(require(4652) /* LockIcon */.LockIcon, obj4);
    locked = callback(closure_5, obj3);
  }
  items1[1] = locked;
  obj1.children = items1;
  obj.children = closure_11(closure_5, obj1);
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj, name);
}
function getItemLayout(arg0, index) {
  return { length: closure_9, offset: closure_9 * index, index };
}
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ View: closure_5, FlatList: closure_6 } = get_ActivityIndicator);
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT: closure_9, NODE_SIZE } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = {};
obj = { borderTopWidth: StyleSheet.hairlineWidth, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
obj.item = { margin: ME.NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
obj.fadedItem = { opacity: 0.5 };
_createForOfIteratorHelperLoose = { opacity: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.activeItem = _createForOfIteratorHelperLoose;
obj.guildItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
obj.keyboardItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE };
let obj2 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center" };
obj.lockContainer = obj2;
let obj3 = { width: 7.5, height: 7.5, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
obj.lock = obj3;
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = importAllResult.memo(importAllResult.forwardRef((arg0, arg1) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["ref"] = arg1;
  return callback(closure_6, obj);
}));
const memoResult = importAllResult.memo(function SoundboardSoundPickerCategories(guildId) {
  let categories;
  let style;
  guildId = guildId.guildId;
  const categoryIndex = guildId.categoryIndex;
  const listRef = guildId.listRef;
  ({ categories, style } = guildId);
  const tmp = callback3();
  const ref = importAllResult.useRef(null);
  let closure_5 = importAllResult.useRef(null);
  let closure_6 = importAllResult.useRef(null);
  const items = [categoryIndex];
  const effect = importAllResult.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          const result = categoryIndex * outer1_9;
          let tmp7 = result > ref2.current;
          if (!tmp7) {
            tmp7 = result < ref.current;
          }
          if (tmp7) {
            const current = ref.current;
            const obj = { offset: result };
            current.scrollToOffset(obj);
          }
        }
      }
    }
  }, items);
  const callback = importAllResult.useCallback((nativeEvent) => {
    closure_5.current = 0;
    closure_6.current = nativeEvent.nativeEvent.layout.width;
  }, []);
  const items1 = [listRef];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    closure_5.current = contentOffset.x;
    closure_6.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  const callback2 = importAllResult.useCallback((arg0) => {
    let closure_0 = arg0;
    callback2("");
    setImmediate(() => {
      let current;
      if (null != outer1_2) {
        current = outer1_2.current;
      }
      if (null != current) {
        current = outer1_2.current;
        const obj = { section: closure_0, item: 0 };
        current.scrollToLocation(obj);
        const result = guildId(listRef[17]).triggerHapticFeedback(categoryIndex(listRef[18]).IMPACT_LIGHT);
        const obj2 = guildId(listRef[17]);
      }
    });
  }, items1);
  let obj = guildId(listRef[19]);
  const items2 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items2, () => categoryIndex(listRef[20]).canUseSoundboardEverywhere(stateFromStores.getCurrentUser()));
  const items3 = [stateFromStores, guildId, callback2, categoryIndex, , ];
  ({ activeItem: arr4[4], fadedItem: arr4[5] } = tmp);
  callback3 = importAllResult.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let result = !stateFromStores;
    if (result) {
      let obj = guildId(listRef[21]);
      result = obj.isSoundboardSectionNitroLocked(guildId, item.categoryInfo);
    }
    obj = { category: item, index };
    if (null != categoryIndex) {
      if (index === categoryIndex) {
        let fadedItem = tmp.activeItem;
      }
      obj.style = fadedItem;
      obj.handlePressCategory = callback2;
      obj.locked = result;
      return tmp5(tmp6, obj);
    }
    fadedItem = tmp.fadedItem;
  }, items3);
  obj = { hostName: "soundboard-footer" };
  obj = { style: items4 };
  items4 = [tmp.container, { paddingBottom: categoryIndex(listRef[22])().bottom }, style];
  const items5 = [
    callback(categoryIndex(listRef[24]), { style: ref.absoluteFill }),
    callback(closure_13, {
      ref,
      getItemLayout,
      onLayout: callback,
      onScroll: callback1,
      data: categories,
      keyboardShouldPersistTaps: "always",
      horizontal: true,
      keyExtractor(key) {
        return String(key.key);
      },
      renderItem: callback3,
      showsHorizontalScrollIndicator: false
    })
  ];
  obj.children = items5;
  obj.children = callback2(closure_5, obj);
  return callback(guildId(listRef[23]).Portal, obj);
});
let result = require("openExpressionPicker").fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default memoResult;
