// Module ID: 17780
// Function ID: 17781
// Name: SoundboardSoundPickerCategories
// Dependencies: [109, 19, 17, 17762, 1390, 1085, 21, 5092, 587, 558, 576, 7048, 6158, 1126, 9762, 5051, 17778, 8925, 1200, 8222, 6184, 5057, 5058, 4769, 504, 9461, 1631, 6334, 8371, 4992, 2]

// Module 17780 (SoundboardSoundPickerCategories)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import ClockIcon from "ClockIcon" /* 5051 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5058 */;
import GuildIconDefault from "GuildIcon" /* 6158 */;
import Pressables from "Pressables" /* 6184 */;
import SoundboardTypes from "SoundboardTypes" /* 7048 */;
import LockIcon from "LockIcon" /* 8222 */;
import TrophyIcon from "TrophyIcon" /* 8925 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9461 */;
import AssetRegistryDefault from "AssetRegistry" /* 9762 */;
import ExpressionPickerStore from "ExpressionPickerStore" /* 17762 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17778 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let handlePressCategory;

let CATEGORY_ICON_SIZE;
let NODE_MARGIN;
let NODE_SIZE;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let size1;
let size2;
let unpackModuleId;
function getItemLayout(arg0, index) {
  return { length: unpackModuleId, offset: unpackModuleId * index, index };
}
let closure_3 = ["ref"];
let react = react_mod;
let StyleSheet = react_native.StyleSheet;
({ View: metroImportDefault, FlatList: metroImportAll } = react_native);
const setSearchQuery = ExpressionPickerStore.setSearchQuery;
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT: unpackModuleId, NODE_SIZE, NODE_MARGIN } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, item: size, fadedItem: { opacity: 0.5 }, activeItem: obj3, guildItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 }, keyboardItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE }, lockContainer: size1, lock: size2 };
obj2 = { borderTopWidth: StyleSheet.hairlineWidth, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
size = { margin: NODE_MARGIN, height: NODE_SIZE, width: NODE_SIZE, borderRadius: NODE_SIZE / 2, alignItems: "center", justifyContent: "center" };
obj3 = { opacity: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
size1 = { width: 12, height: 12, position: "absolute", bottom: 0, end: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
size2 = { width: 7.5, height: 7.5, tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function SoundCategoryItem(index) {
  let category;
  let items;
  let locked;
  let obj9;
  let style;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  const obj = react2;
  const cResult = obj.c(36);
  ({ category, handlePressCategory } = index);
  index = index.index;
  ({ style, locked } = index);
  const tmp5 = closure_14();
  const type = category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    const guild = category.categoryInfo.guild;
    if (cResult[0] === guild) {
      let tmp34;
      if (cResult[1] === tmp5.guildItem) {
        tmp34 = cResult[2];
      }
      tmp12 = null;
      tmp13 = tmp34;
      tmp11 = null;
      tmp14 = tmp33;
    }
    const obj2 = { guild, style: tmp5.guildItem };
    const tmp37 = authStore2(GuildIconDefault, obj2);
    cResult[0] = guild;
    cResult[1] = tmp5.guildItem;
    cResult[2] = tmp37;
    tmp34 = tmp37;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    let tmp30;
    const _Symbol4 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1126).intl;
      const stringResult = intl5.string(intl6.t.y3LQCG);
      cResult[3] = stringResult;
      tmp30 = stringResult;
    } else {
      tmp30 = cResult[3];
    }
    tmp12 = AssetRegistryDefault;
    tmp11 = null;
    tmp14 = tmp30;
    tmp13 = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    let tmp24;
    let tmp26;
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult1 = intl4.string(intl6.t["+cGVV6"]);
      cResult[4] = stringResult1;
      tmp24 = stringResult1;
    } else {
      tmp24 = cResult[4];
    }
    if (cResult[5] !== tmp5.keyboardItem) {
      const obj3 = { style: tmp5.keyboardItem };
      const tmp28 = authStore2(ClockIcon.ClockIcon, obj3);
      cResult[5] = tmp5.keyboardItem;
      cResult[6] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[6];
    }
    tmp12 = null;
    tmp11 = tmp26;
    tmp13 = null;
    tmp14 = tmp24;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    let tmp20;
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(intl6.t.Rtvk9X);
      cResult[7] = stringResult2;
      tmp20 = stringResult2;
    } else {
      tmp20 = cResult[7];
    }
    tmp12 = AssetRegistryDefault2;
    tmp11 = null;
    tmp14 = tmp20;
    tmp13 = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    let tmp16;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult3 = intl2.string(intl6.t.sKt3xS);
      cResult[8] = stringResult3;
      tmp16 = stringResult3;
    } else {
      tmp16 = cResult[8];
    }
    tmp12 = AssetRegistryDefault2;
    tmp11 = null;
    tmp14 = tmp16;
    tmp13 = null;
  } else {
    tmp12 = null;
    tmp11 = null;
    tmp13 = null;
    tmp14 = null;
    if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      let tmp6;
      let tmp8;
      if (cResult[9] !== category.categoryInfo.guild.name) {
        const intl = tmp(1126).intl;
        const obj4 = { guildName: category.categoryInfo.guild.name };
        const formatToPlainStringResult = intl.formatToPlainString(intl6.t.GXs41w, obj4);
        cResult[9] = category.categoryInfo.guild.name;
        cResult[10] = formatToPlainStringResult;
        tmp6 = formatToPlainStringResult;
      } else {
        tmp6 = cResult[10];
      }
      if (cResult[11] !== tmp5.keyboardItem) {
        const obj5 = { style: tmp5.keyboardItem };
        const tmp10 = authStore2(TrophyIcon.TrophyIcon, obj5);
        cResult[11] = tmp5.keyboardItem;
        cResult[12] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[12];
      }
      tmp11 = tmp8;
      tmp12 = null;
      tmp13 = null;
      tmp14 = tmp6;
    }
  }
  if (cResult[13] === handlePressCategory) {
    let tmp38;
    if (cResult[14] === index) {
      tmp38 = cResult[15];
    }
    if (cResult[16] === style) {
      let tmp39;
      if (cResult[17] === tmp5.item) {
        tmp39 = cResult[18];
      }
      if (cResult[19] === tmp11) {
        if (cResult[20] === tmp13) {
          if (cResult[21] === tmp12) {
            let tmp40;
            if (cResult[22] === tmp5.keyboardItem) {
              tmp40 = cResult[23];
            }
            if (cResult[24] === (undefined !== locked && locked)) {
              if (cResult[25] === tmp5.lock) {
                let tmp44;
                if (cResult[26] === tmp5.lockContainer) {
                  tmp44 = cResult[27];
                }
                if (cResult[28] === tmp39) {
                  if (cResult[29] === tmp40) {
                    let tmp48;
                    if (cResult[30] === tmp44) {
                      tmp48 = cResult[31];
                    }
                    if (cResult[32] === tmp14) {
                      if (cResult[33] === tmp38) {
                        let tmp52;
                        if (cResult[34] === tmp48) {
                          tmp52 = cResult[35];
                        }
                        return tmp52;
                      }
                    }
                    const obj6 = { onPress: tmp38, accessibilityRole: "button", accessibilityLabel: tmp14, children: tmp48 };
                    const tmp54 = authStore2(Pressables.PressableOpacity, obj6, tmp14);
                    cResult[32] = tmp14;
                    cResult[33] = tmp38;
                    cResult[34] = tmp48;
                    cResult[35] = tmp54;
                    tmp52 = tmp54;
                  }
                }
                const obj7 = { style: tmp39, children: items };
                items = [tmp40, tmp44];
                const tmp51 = map1(metroImportDefault, obj7);
                cResult[28] = tmp39;
                cResult[29] = tmp40;
                cResult[30] = tmp44;
                cResult[31] = tmp51;
                tmp48 = tmp51;
              }
            }
            let tmp45 = tmp4;
            if (tmp45) {
              const obj8 = { style: tmp5.lockContainer, children: authStore2(LockIcon.LockIcon, obj9) };
              obj9 = { style: tmp5.lock };
              tmp45 = authStore2(metroImportDefault, obj8);
            }
            cResult[24] = undefined !== locked && locked;
            cResult[25] = tmp5.lock;
            cResult[26] = tmp5.lockContainer;
            cResult[27] = tmp45;
            tmp44 = tmp45;
          }
        }
      }
      let tmp42 = tmp13;
      if (tmp13 == null) {
        tmp42 = tmp11;
      }
      if (tmp42 == null) {
        const obj10 = { style: tmp5.keyboardItem, source: tmp12 };
        tmp42 = authStore2(tmp(1200).Icon, obj10);
      }
      cResult[19] = tmp11;
      cResult[20] = tmp13;
      cResult[21] = tmp12;
      cResult[22] = tmp5.keyboardItem;
      cResult[23] = tmp42;
      tmp40 = tmp42;
    }
    const items1 = [tmp5.item, style];
    cResult[16] = style;
    cResult[17] = tmp5.item;
    cResult[18] = items1;
    tmp39 = items1;
  }
  const fn = function o() {
    return handlePressCategory(index);
  };
  cResult[13] = handlePressCategory;
  cResult[14] = index;
  cResult[15] = fn;
  tmp38 = fn;
}) : (function SoundCategoryItem(style) {
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
  const tmp = closure_14();
  const type = category.categoryInfo.type;
  if (SoundboardTypes.SoundboardSoundGridSectionType.GUILD === type) {
    const guild = category.categoryInfo.guild;
    name = guild.name;
    const obj2 = { guild, style: tmp.guildItem };
    tmp14Result = authStore2(GuildIconDefault, obj2);
    tmp6 = null;
    tmp7 = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FAVORITES === type) {
    const intl4 = tmp2(1126).intl;
    name = intl4.string(tmp2(1126).t.y3LQCG);
    tmp6 = AssetRegistryDefault;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl3 = tmp2(1126).intl;
    name = intl3.string(tmp2(1126).t["+cGVV6"]);
    const obj = { style: tmp.keyboardItem };
    tmp7 = authStore2(tmp2(5051).ClockIcon, obj);
    tmp6 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl2 = tmp2(1126).intl;
    name = intl2.string(tmp2(1126).t.Rtvk9X);
    tmp6 = AssetRegistryDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    const intl = tmp2(1126).intl;
    name = intl.string(tmp2(1126).t.sKt3xS);
    tmp6 = AssetRegistryDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp14Result = null;
    name = null;
    if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      const intl5 = tmp2(1126).intl;
      const obj3 = { guildName: category.categoryInfo.guild.name };
      name = intl5.formatToPlainString(tmp2(1126).t.GXs41w, obj3);
      const obj4 = { style: tmp.keyboardItem };
      tmp7 = authStore2(tmp2(8925).TrophyIcon, obj4);
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
    children: tmp15(metroImportDefault, obj6)
  };
  obj6 = { style: items, children: items1 };
  items = [tmp.item, style];
  const PressableOpacity = tmp2(6184).PressableOpacity;
  tmp15 = map1;
  if (tmp14Result == null) {
    tmp14Result = tmp7;
  }
  if (tmp14Result == null) {
    const obj7 = { style: tmp.keyboardItem, source: tmp6 };
    tmp14Result = tmp14(tmp2(1200).Icon, obj7);
  }
  items1 = [tmp14Result, ];
  if (locked) {
    const obj8 = { style: tmp.lockContainer, children: authStore2(LockIcon.LockIcon, obj9) };
    obj9 = { style: tmp.lock };
    locked = tmp14(tmp16, obj8);
  }
  items1[1] = locked;
  return authStore2(PressableOpacity, obj5, name);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MemoizedFlatList(ref) {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== ref) {
    const tmp6 = _objectWithoutProperties(ref, closure_3);
    cResult[0] = ref;
    cResult[1] = tmp6;
    cResult[2] = ref.ref;
    tmp3 = ref;
    tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] === tmp2) {
    let tmp7;
    if (cResult[4] === tmp3) {
      tmp7 = cResult[5];
    }
    return tmp7;
  }
  const obj2 = { ref: tmp3 };
  const merged = Object.assign(tmp2);
  const tmp9 = authStore2(metroImportAll, obj2);
  cResult[3] = tmp2;
  cResult[4] = tmp3;
  cResult[5] = tmp9;
  tmp7 = tmp9;
}) : (function MemoizedFlatList(ref) {
  const obj = { ref };
  ref = ref.ref;
  const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
  return authStore2(metroImportAll, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SoundboardSoundPickerCategories(guildId) {
  let categories;
  let categoryIndex;
  let currentUser;
  let listRef;
  let style;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp = guildId;
  const tmp2 = listRef;
  let obj = guildId(listRef[10]);
  const cResult = obj.c(31);
  guildId = guildId.guildId;
  ({ categories, categoryIndex } = guildId);
  ({ style, listRef } = guildId);
  const tmp4 = closure_14();
  closure_3 = tmp4;
  let obj2 = react;
  const ref = react.useRef(null);
  react = react.useRef(null);
  const ref2 = react.useRef(null);
  if (cResult[0] !== categoryIndex) {
    const fn = function o() {
      if (null != ref.current) {
        if (null != ref2.current) {
          if (null != ref.current) {
            const result = categoryIndex * unpackModuleId;
            const tmp7 = result > tmp2.current || result < tmp.current;
            if (tmp7) {
              const current = tmp3.current;
              const obj = { offset: result };
              current.scrollToOffset(obj);
            }
          }
        }
      }
    };
    const items = [categoryIndex];
    cResult[0] = categoryIndex;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = obj2.useEffect(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(nativeEvent) {
      ref.current = 0;
      ref2.current = nativeEvent.nativeEvent.layout.width;
    };
    cResult[3] = fn2;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }
    }
    cResult[4] = P;
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
  if (cResult[5] !== listRef) {
    class P {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }
    }
    cResult[5] = listRef;
    cResult[6] = tmp12;
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
  handlePressCategory = tmp11;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }
    }
    const items1 = [UserStore];
    class F {
      constructor() {
        const obj = categoryIndex(listRef[23]);
        return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
      }
    }
    cResult[7] = items1;
    cResult[8] = F;
    tmp14 = F;
    tmp13 = items1;
  } else {
    class P {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }
    }
    tmp14 = cResult[8];
  }
  const tmpResult = tmp(tmp2[24]);
  const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp14);
  if (cResult[9] === stateFromStores) {
    class P {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const contentOffset = nativeEvent.contentOffset;
        ref.current = contentOffset.x;
        ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
      }
    }
  }
  class H {
    constructor(arg0) {
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
        obj2.handlePressCategory = handlePressCategory;
        obj2.locked = result;
        return tmp5(tmp6, obj2);
      }
      fadedItem = closure_3.fadedItem;
    }
  }
  cResult[9] = stateFromStores;
  cResult[10] = categoryIndex;
  cResult[11] = guildId;
  cResult[12] = tmp11;
  cResult[13] = tmp4.activeItem;
  cResult[14] = tmp4.fadedItem;
  cResult[15] = H;
}) : (function SoundboardSoundPickerCategories(guildId) {
  let categories;
  let currentUser;
  let items4;
  let items5;
  let obj3;
  let obj6;
  let ref2;
  let style;
  guildId = guildId.guildId;
  const categoryIndex = guildId.categoryIndex;
  const listRef = guildId.listRef;
  react = undefined;
  ({ categories, style } = guildId);
  let tmp = closure_14();
  closure_3 = tmp;
  const ref = react.useRef(null);
  react = react.useRef(null);
  StyleSheet = react.useRef(null);
  const items = [categoryIndex];
  const effect = react.useEffect(() => {
    if (null != ref.current) {
      if (null != ref2.current) {
        if (null != ref.current) {
          const result = categoryIndex * unpackModuleId;
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
    const tmp = setSearchQuery("");
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
  let obj = guildId(listRef[24]);
  const items2 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items2, () => {
    const obj = categoryIndex(listRef[23]);
    return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
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
  const bottom = categoryIndex(listRef[26])().bottom;
  const memo = react.useMemo(() => {
    const Gesture = guildId(listRef[27]).Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.disallowInterruption(true);
  }, []);
  let obj2 = { hostName: "soundboard-footer", children: closure_13(callback2, obj3) };
  obj3 = { style: items4, children: items5 };
  items4 = [tmp.container, { paddingBottom: bottom }, style];
  const Portal = guildId(listRef[29]).Portal;
  items5 = [, ];
  const obj4 = { style: StyleSheet.absoluteFill };
  items5[0] = closure_12(categoryIndex(listRef[28]), obj4);
  const obj5 = { gesture: memo, children: closure_12(closure_16, obj6) };
  obj6 = {
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
  };
  const GestureDetector = guildId(listRef[27]).GestureDetector;
  items5[1] = closure_12(GestureDetector, obj5);
  return closure_12(Portal, obj2);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default memoResult;
