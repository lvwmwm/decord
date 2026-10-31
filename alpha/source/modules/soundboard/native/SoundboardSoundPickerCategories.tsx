// Module ID: 19183
// Function ID: 19184
// Name: SoundboardSoundPickerCategories
// Dependencies: [19, 17, 19166, 1383, 1072, 21, 5014, 575, 7518, 6957, 1113, 10271, 5740, 19181, 9378, 6980, 1187, 8667, 5303, 5260, 5261, 504, 2047, 9796, 1625, 5214, 8818, 7294, 2]

// Module 19183 (SoundboardSoundPickerCategories)
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5261 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import GuildIconDefault from "GuildIcon" /* 6957 */;
import SoundboardTypes from "SoundboardTypes" /* 7518 */;
import LockIcon from "LockIcon" /* 8667 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9796 */;
import AssetRegistryDefault from "AssetRegistry" /* 10271 */;
import ExpressionPickerStore from "ExpressionPickerStore" /* 19166 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 19181 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let nativeEvent;

let CATEGORY_ICON_SIZE;
let EXPRESSION_FOOTER_HEIGHT;
let NODE_MARGIN;
let NODE_SIZE;
let StyleSheet;
let c10;
let closure_4;
let obj2;
let obj3;
let size;
let size1;
let size2;
let unpackModuleId;
function SoundCategoryItem(style) {
  let category;
  let closure_129_0;
  let closure_129_1;
  let items;
  let items1;
  let locked;
  let name;
  let obj6;
  let obj9;
  let tmp14Result;
  let tmp15;
  let tmp6;
  let tmp7;
  ({ category, handlePressCategory: closure_129_0, index: closure_129_1, locked } = style);
  style = style.style;
  if (locked === undefined) {
    locked = false;
  }
  const tmp = closure_12();
  const type = category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    const guild = category.categoryInfo.guild;
    name = guild.name;
    const obj2 = { guild, style: tmp.guildItem };
    tmp14Result = authStore(GuildIconDefault, obj2);
    tmp6 = null;
    tmp7 = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl4 = tmp2(1113).intl;
    name = intl4.string(tmp2(1113).t.y3LQCG);
    tmp6 = AssetRegistryDefault;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl3 = tmp2(1113).intl;
    name = intl3.string(tmp2(1113).t["+cGVV6"]);
    const obj = { style: tmp.keyboardItem };
    tmp7 = authStore(tmp2(5740).ClockIcon, obj);
    tmp6 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl2 = tmp2(1113).intl;
    name = intl2.string(tmp2(1113).t.Rtvk9X);
    tmp6 = AssetRegistryDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    const intl = tmp2(1113).intl;
    name = intl.string(tmp2(1113).t.sKt3xS);
    tmp6 = AssetRegistryDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp14Result = null;
    name = null;
    if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      const intl5 = tmp2(1113).intl;
      const obj3 = { guildName: category.categoryInfo.guild.name };
      name = intl5.formatToPlainString(tmp2(1113).t.GXs41w, obj3);
      const obj4 = { style: tmp.keyboardItem };
      tmp7 = authStore(tmp2(9378).TrophyIcon, obj4);
      tmp6 = null;
      tmp14Result = null;
    }
  }
  const obj5 = {
    onPress() {
      return closure_1_0(closure_1_1);
    },
    accessibilityRole: "button",
    accessibilityLabel: name,
    children: tmp15(View, obj6)
  };
  obj6 = { style: items, children: items1 };
  items = [tmp.item, style];
  const PressableOpacity = tmp2(6980).PressableOpacity;
  tmp15 = unpackModuleId;
  if (tmp14Result == null) {
    tmp14Result = tmp7;
  }
  if (tmp14Result == null) {
    const obj7 = { style: tmp.keyboardItem, source: tmp6 };
    tmp14Result = tmp14(tmp2(1187).Icon, obj7);
  }
  items1 = [tmp14Result, ];
  if (locked) {
    const obj8 = { style: tmp.lockContainer, children: authStore(LockIcon.LockIcon, obj9) };
    obj9 = { style: tmp.lock };
    locked = tmp14(tmp16, obj8);
  }
  items1[1] = locked;
  return authStore(PressableOpacity, obj5);
}
function SoundboardCategoryScrollView(ref) {
  let obj3;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: authStore(React3, obj3) };
  obj3 = { ref, nestedScrollEnabled: true };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged1 = Object.assign(merged);
  return authStore(GestureDetector, obj2);
}
let react = react_mod;
({ ScrollView: closure_4, StyleSheet } = react_native);
const View = react_native.View;
const setSearchQuery = ExpressionPickerStore.setSearchQuery;
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT } = Constants);
({ NODE_SIZE, NODE_MARGIN } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, item: size, fadedItem: { opacity: 0.5 }, activeItem: obj3, guildItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 }, keyboardItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE }, lockContainer: size1, lock: size2 };
obj2 = { borderTopWidth: StyleSheet.hairlineWidth, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
size = { margin: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
obj3 = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
size1 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_12 = createStyles(obj);
const memoResult = react.memo(function SoundboardSoundPickerCategories(guildId) {
  let categories;
  let closure_3;
  let items4;
  let items5;
  let obj3;
  let style;
  guildId = guildId.guildId;
  const categoryIndex = guildId.categoryIndex;
  const listRef = guildId.listRef;
  let stateFromStores;
  ({ categories, style } = guildId);
  let tmp = closure_12();
  react = tmp;
  const ref = react.useRef(null);
  StyleSheet = react.useRef(null);
  const ref2 = react.useRef(null);
  const items = [categoryIndex];
  const effect = react.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          const result = categoryIndex * EXPRESSION_FOOTER_HEIGHT;
          const tmp7 = result > tmp2.current || result < tmp.current;
          if (tmp7) {
            const current = tmp3.current;
            const obj = { offset: result };
            current.scrollToOffset(obj);
          }
        }
      }
    }
  }, items);
  const callback = react.useCallback((nativeEvent) => {
    ref.current = 0;
    ref2.current = nativeEvent.nativeEvent.layout.width;
  }, []);
  const items1 = [listRef];
  const callback1 = react.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    ref.current = contentOffset.x;
    ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
  }, []);
  const callback2 = react.useCallback((section) => {
    const tmp = callback2("");
    setImmediate(() => {
      let current1;
      if (listRef != null) {
        current1 = tmp.current;
      }
      if (null != current1) {
        const current = tmp.current;
        const obj = { section, item: 0 };
        current.scrollToLocation(obj);
        const obj2 = HapticUtils;
        const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      }
    });
  }, items1);
  let obj = guildId(listRef[21]);
  const items2 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items2, () => {
    const obj = categoryIndex(listRef[22]);
    return obj.canUseSoundboardEverywhere(stateFromStores.getCurrentUser());
  });
  const items3 = [stateFromStores, guildId, callback2, categoryIndex, , ];
  ({ activeItem: arr4[4], fadedItem: arr4[5] } = tmp);
  const callback3 = react.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    let result = !stateFromStores;
    if (result) {
      const obj = PremiumFeatureUpsellUtils;
      result = obj.isSoundboardSectionNitroLocked(guildId, item.categoryInfo);
    }
    const obj2 = { category: item, index, style: null, handlePressCategory: null, locked: null };
    if (null != categoryIndex) {
      let fadedItem;
      if (index === categoryIndex) {
        fadedItem = closure_3.activeItem;
      }
      obj2.style = fadedItem;
      obj2.handlePressCategory = callback2;
      obj2.locked = result;
      return tmp5(tmp6, obj2);
    }
    fadedItem = closure_3.fadedItem;
  }, items3);
  let obj2 = { hostName: "soundboard-footer", children: closure_11(ref2, obj3) };
  obj3 = { style: items4, children: items5 };
  items4 = [tmp.container, { paddingBottom: categoryIndex(listRef[24])().bottom }, style];
  const Portal = guildId(listRef[25]).Portal;
  items5 = [, ];
  const obj4 = { style: StyleSheet.absoluteFill };
  items5[0] = closure_10(categoryIndex(listRef[26]), obj4);
  const obj5 = {
    ref,
    style: tmp.list,
    onLayout: callback,
    onScroll: callback1,
    data: categories,
    extraData: categoryIndex,
    keyboardShouldPersistTaps: "always",
    horizontal: true,
    keyExtractor(key) {
      return String(key.key);
    },
    renderItem: callback3,
    renderScrollComponent: SoundboardCategoryScrollView,
    showsHorizontalScrollIndicator: false
  };
  items5[1] = closure_10(guildId(listRef[27]).FlashList, obj5);
  return closure_10(Portal, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default memoResult;
