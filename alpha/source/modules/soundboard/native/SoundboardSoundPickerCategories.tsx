// Module ID: 18161
// Function ID: 18162
// Name: SoundboardSoundPickerCategories
// Dependencies: [109, 19, 17, 18144, 1392, 1087, 21, 5154, 587, 558, 576, 7274, 6383, 1128, 9998, 5113, 18159, 9151, 1202, 8449, 6409, 6559, 5119, 5120, 4828, 504, 9519, 1633, 8599, 7038, 5051, 2]

// Module 18161 (SoundboardSoundPickerCategories)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1128 */;
import ClockIcon from "ClockIcon" /* 5113 */;
import HapticUtils from "HapticUtils" /* 5119 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5120 */;
import GuildIconDefault from "GuildIcon" /* 6383 */;
import Pressables from "Pressables" /* 6409 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6559 */;
import SoundboardTypes from "SoundboardTypes" /* 7274 */;
import LockIcon from "LockIcon" /* 8449 */;
import TrophyIcon from "TrophyIcon" /* 9151 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9519 */;
import AssetRegistryDefault from "AssetRegistry" /* 9998 */;
import ExpressionPickerStore from "ExpressionPickerStore" /* 18144 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 18159 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5154 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_0, setImmediateResult;

let CATEGORY_ICON_SIZE;
let EXPRESSION_FOOTER_HEIGHT;
let NODE_MARGIN;
let NODE_SIZE;
let StyleSheet;
let closure_12;
let map1;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
let size2;
let closure_3 = ["ref"];
let react = react_mod;
({ ScrollView: metroRequire, StyleSheet } = react_native);
const View = react_native.View;
const setSearchQuery = ExpressionPickerStore.setSearchQuery;
({ CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT } = Constants);
({ NODE_SIZE, NODE_MARGIN } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, item: size, fadedItem: { opacity: 0.5 }, activeItem: obj3, guildItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE, borderRadius: CATEGORY_ICON_SIZE / 2 }, keyboardItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE }, lockContainer: size1, lock: size2 };
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
      const intl5 = tmp(1128).intl;
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
      const intl4 = tmp(1128).intl;
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
      const intl3 = tmp(1128).intl;
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
      const intl2 = tmp(1128).intl;
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
        const intl = tmp(1128).intl;
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
                    const tmp54 = authStore2(Pressables.PressableOpacity, obj6);
                    cResult[32] = tmp14;
                    cResult[33] = tmp38;
                    cResult[34] = tmp48;
                    cResult[35] = tmp54;
                    tmp52 = tmp54;
                  }
                }
                const obj7 = { style: tmp39, children: items };
                items = [tmp40, tmp44];
                const tmp51 = map1(View, obj7);
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
              tmp45 = authStore2(View, obj8);
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
        tmp42 = authStore2(tmp(1202).Icon, obj10);
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
    const intl4 = tmp2(1128).intl;
    name = intl4.string(tmp2(1128).t.y3LQCG);
    tmp6 = AssetRegistryDefault;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.FREQUENTLY_USED === type) {
    const intl3 = tmp2(1128).intl;
    name = intl3.string(tmp2(1128).t["+cGVV6"]);
    const obj = { style: tmp.keyboardItem };
    tmp7 = authStore2(tmp2(5113).ClockIcon, obj);
    tmp6 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.DEFAULTS === type) {
    const intl2 = tmp2(1128).intl;
    name = intl2.string(tmp2(1128).t.Rtvk9X);
    tmp6 = AssetRegistryDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else if (SoundboardTypes.SoundboardSoundGridSectionType.SEARCH === type) {
    const intl = tmp2(1128).intl;
    name = intl.string(tmp2(1128).t.sKt3xS);
    tmp6 = AssetRegistryDefault2;
    tmp7 = null;
    tmp14Result = null;
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp14Result = null;
    name = null;
    if (SoundboardTypes.SoundboardSoundGridSectionType.TOP_SOUNDS === type) {
      const intl5 = tmp2(1128).intl;
      const obj3 = { guildName: category.categoryInfo.guild.name };
      name = intl5.formatToPlainString(tmp2(1128).t.GXs41w, obj3);
      const obj4 = { style: tmp.keyboardItem };
      tmp7 = authStore2(tmp2(9151).TrophyIcon, obj4);
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
  const PressableOpacity = tmp2(6409).PressableOpacity;
  tmp15 = map1;
  if (tmp14Result == null) {
    tmp14Result = tmp7;
  }
  if (tmp14Result == null) {
    const obj7 = { style: tmp.keyboardItem, source: tmp6 };
    tmp14Result = tmp14(tmp2(1202).Icon, obj7);
  }
  items1 = [tmp14Result, ];
  if (locked) {
    const obj8 = { style: tmp.lockContainer, children: authStore2(LockIcon.LockIcon, obj9) };
    obj9 = { style: tmp.lock };
    locked = tmp14(tmp16, obj8);
  }
  items1[1] = locked;
  return authStore2(PressableOpacity, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
const renderScrollComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function SoundboardCategoryScrollView(ref) {
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_3);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    cResult[3] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult = LegacyBaseButton;
  const nativeGesture = tmpResult.useNativeGesture(tmp9);
  if (cResult[4] === tmp4) {
    let tmp11;
    if (cResult[5] === tmp5) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === nativeGesture) {
      let tmp14;
      if (cResult[8] === tmp11) {
        tmp14 = cResult[9];
      }
      return tmp14;
    }
    const obj3 = { gesture: nativeGesture, children: tmp11 };
    const tmp16 = authStore2(LegacyBaseButton.GestureDetector, obj3);
    cResult[7] = nativeGesture;
    cResult[8] = tmp11;
    cResult[9] = tmp16;
    tmp14 = tmp16;
  }
  const obj4 = { ref: tmp5, nestedScrollEnabled: true };
  const merged = Object.assign(tmp4);
  const tmp13 = authStore2(metroRequire, obj4);
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = tmp13;
  tmp11 = tmp13;
}) : (function SoundboardCategoryScrollView(ref) {
  let obj3;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: authStore2(metroRequire, obj3) };
  obj3 = { ref, nestedScrollEnabled: true };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  const merged1 = Object.assign(merged);
  return authStore2(GestureDetector, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SoundboardSoundPickerCategories(guildId) {
  let categories;
  let categoryIndex;
  let currentUser;
  let listRef;
  let style;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp7;
  let tmp = guildId;
  const tmp2 = listRef;
  let obj = guildId(listRef[10]);
  const cResult = obj.c(32);
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
    const fn2 = function c(nativeEvent) {
      ref.current = 0;
      ref2.current = nativeEvent.nativeEvent.layout.width;
    };
    cResult[3] = fn2;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function x(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      const contentOffset = nativeEvent.contentOffset;
      ref.current = contentOffset.x;
      ref2.current = contentOffset.x + nativeEvent.layoutMeasurement.width;
    };
    cResult[4] = fn3;
  }
  if (cResult[5] !== listRef) {
    class N {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_1_9("");
        setImmediateResult = setImmediate(() => {
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
        return;
      }
    }
    cResult[5] = listRef;
    cResult[6] = N;
  } else {
    class N {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_1_9("");
        setImmediateResult = setImmediate(() => {
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
        return;
      }
    }
  }
  N = tmp11;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_1_9("");
        setImmediateResult = setImmediate(() => {
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
        return;
      }
    }
    const items1 = [UserStore];
    class U {
      constructor() {
        const obj = categoryIndex(listRef[24]);
        return obj.canUseSoundboardEverywhere(currentUser.getCurrentUser());
      }
    }
    cResult[7] = items1;
    cResult[8] = U;
    tmp13 = U;
    tmp12 = items1;
  } else {
    class N {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_1_9("");
        setImmediateResult = setImmediate(() => {
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
        return;
      }
    }
    tmp13 = cResult[8];
  }
  const tmpResult = tmp(tmp2[25]);
  const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
  if (cResult[9] === stateFromStores) {
    class N {
      constructor(arg0) {
        closure_0 = guildId;
        tmp = closure_1_9("");
        setImmediateResult = setImmediate(() => {
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
        return;
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
        obj2.handlePressCategory = N;
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
  let obj = guildId(listRef[25]);
  const items2 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items2, () => {
    const obj = categoryIndex(listRef[24]);
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
  let obj2 = { hostName: "soundboard-footer", children: closure_13(stateFromStores, obj3) };
  obj3 = { style: items4, children: items5 };
  items4 = [tmp.container, { paddingBottom: categoryIndex(listRef[27])().bottom }, style];
  const Portal = guildId(listRef[30]).Portal;
  items5 = [, ];
  const obj4 = { style: callback2.absoluteFill };
  items5[0] = closure_12(categoryIndex(listRef[28]), obj4);
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
    renderScrollComponent,
    showsHorizontalScrollIndicator: false
  };
  items5[1] = closure_12(guildId(listRef[29]).FlashList, obj5);
  return closure_12(Portal, obj2);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPickerCategories.tsx");

export default memoResult;
