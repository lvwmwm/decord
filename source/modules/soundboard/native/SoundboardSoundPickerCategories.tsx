// Module ID: 15633
// Function ID: 119355
// Name: SoundCategoryItem
// Dependencies: []

// Module 15633 (SoundCategoryItem)
let CATEGORY_ICON_SIZE;
let NODE_SIZE;
function SoundCategoryItem(style) {
  let category;
  let locked;
  ({ category, handlePressCategory: closure_0, index: closure_1, locked } = style);
  if (locked === undefined) {
    locked = false;
  }
  const tmp = callback3();
  const type = category.categoryInfo.type;
  if (arg1(dependencyMap[8]).SoundboardSoundGridSectionType.GUILD === type) {
    const guild = category.categoryInfo.guild;
    let name = guild.name;
    let obj = { guild, style: tmp.guildItem };
    let tmp7 = callback(importDefault(dependencyMap[9]), obj);
    let tmp8 = null;
    let tmp6 = null;
  } else if (arg1(dependencyMap[8]).SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl3 = arg1(dependencyMap[10]).intl;
    name = intl3.string(arg1(dependencyMap[10]).t.y3LQCG);
    tmp6 = importDefault(dependencyMap[11]);
    tmp7 = null;
    tmp8 = null;
  } else if (arg1(dependencyMap[8]).SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl2 = arg1(dependencyMap[10]).intl;
    name = intl2.string(arg1(dependencyMap[10]).t.+cGVV6);
    obj = { style: tmp.keyboardItem };
    tmp8 = callback(arg1(dependencyMap[12]).ClockIcon, obj);
    tmp7 = null;
    tmp6 = null;
  } else if (arg1(dependencyMap[8]).SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl = arg1(dependencyMap[10]).intl;
    name = intl.string(arg1(dependencyMap[10]).t.Rtvk9X);
    tmp6 = importDefault(dependencyMap[13]);
    tmp7 = null;
    tmp8 = null;
  } else {
    name = null;
    tmp7 = null;
    tmp8 = null;
    tmp6 = null;
    if (arg1(dependencyMap[8]).SoundboardSoundGridSectionType.SEARCH === type) {
      const intl4 = arg1(dependencyMap[10]).intl;
      name = intl4.string(arg1(dependencyMap[10]).t.sKt3xS);
      tmp6 = importDefault(dependencyMap[13]);
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
  const items = [tmp.item, style.style];
  if (null != tmp7) {
    tmp8 = tmp7;
  }
  if (null == tmp8) {
    const obj2 = { style: tmp.keyboardItem, source: tmp6 };
    tmp8 = callback(arg1(dependencyMap[15]).Icon, obj2);
  }
  const items1 = [tmp8, ];
  if (locked) {
    const obj3 = { style: tmp.lockContainer };
    const obj4 = { style: tmp.lock };
    obj3.children = callback(arg1(dependencyMap[16]).LockIcon, obj4);
    locked = callback(closure_5, obj3);
  }
  items1[1] = locked;
  obj1.children = items1;
  obj.children = closure_11(closure_5, obj1);
  return callback(arg1(dependencyMap[14]).PressableOpacity, obj, name);
}
function getItemLayout(arg0, index) {
  return { length: closure_9, offset: closure_9 * index, index };
}
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const StyleSheet = tmp2.StyleSheet;
({ View: closure_5, FlatList: closure_6 } = tmp2);
const setSearchQuery = arg1(dependencyMap[2]).setSearchQuery;
let closure_8 = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[4]);
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT: closure_9, NODE_SIZE } = tmp3);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { borderTopWidth: StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderTopColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
obj.item = { margin: tmp3.NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
obj.fadedItem = { opacity: 0.5 };
obj1 = { opacity: 1, backgroundColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.activeItem = obj1;
obj.guildItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 };
obj.keyboardItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE };
const obj2 = { "Bool(true)": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000745429332806459, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004665176389013497, "Bool(true)": 141317.275, isLowQuality: null, APP_MESSAGE_EMBED: null, nameUnformatted: null, pK/WG0: null, display: null, alsoPublishToEventListener: null, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.lockContainer = obj2;
const obj3 = { bhk: null, bic: 1, tintColor: importDefault(dependencyMap[7]).colors.TEXT_DEFAULT };
obj.lock = obj3;
let closure_12 = obj1.createStyles(obj);
let closure_13 = importAllResult.memo(importAllResult.forwardRef((arg0, arg1) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["ref"] = arg1;
  return callback(closure_6, obj);
}));
const tmp4 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function SoundboardSoundPickerCategories(guildId) {
  let categories;
  let style;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const categoryIndex = guildId.categoryIndex;
  const importDefault = categoryIndex;
  const listRef = guildId.listRef;
  const dependencyMap = listRef;
  ({ categories, style } = guildId);
  const tmp = callback3();
  const ref = tmp.useRef(null);
  const StyleSheet = ref;
  let closure_5 = importAllResult.useRef(null);
  let closure_6 = importAllResult.useRef(null);
  const items = [categoryIndex];
  const effect = importAllResult.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          const result = categoryIndex * closure_9;
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
    const guildId = arg0;
    callback2("");
    setImmediate(() => {
      let current;
      if (null != ref) {
        current = ref.current;
      }
      if (null != current) {
        current = ref.current;
        const obj = { section: arg0, item: 0 };
        current.scrollToLocation(obj);
        const result = arg0(ref[17]).triggerHapticFeedback(callback(ref[18]).IMPACT_LIGHT);
        const obj2 = arg0(ref[17]);
      }
    });
  }, items1);
  const setSearchQuery = callback2;
  let obj = arg1(dependencyMap[19]);
  const items2 = [closure_8];
  const stateFromStores = obj.useStateFromStores(items2, () => categoryIndex(listRef[20]).canUseSoundboardEverywhere(stateFromStores.getCurrentUser()));
  closure_8 = stateFromStores;
  const items3 = [stateFromStores, guildId, callback2, categoryIndex, , ];
  ({ activeItem: arr4[4], fadedItem: arr4[5] } = tmp);
  const callback3 = importAllResult.useCallback((arg0) => {
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
  const items4 = [tmp.container, { paddingBottom: importDefault(dependencyMap[22])().bottom }, style];
  const items5 = [
    callback(importDefault(dependencyMap[24]), { style: StyleSheet.absoluteFill }),
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
  return callback(arg1(dependencyMap[23]).Portal, obj);
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default memoResult;
