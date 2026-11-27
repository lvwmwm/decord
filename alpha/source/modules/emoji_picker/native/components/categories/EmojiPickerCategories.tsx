// Module ID: 9776
// Function ID: 9777
// Name: EmojiPickerCategories
// Dependencies: [19, 6886, 1071, 1227, 21, 5043, 575, 1654, 1707, 1256, 5259, 5260, 9777, 9793, 5303, 9794, 7411, 9795, 9797, 2]

// Module 9776 (EmojiPickerCategories)
import nativeDefault from "native" /* 575 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1227 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import HapticUtils from "HapticUtils" /* 5259 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5260 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6886 */;
import EmojiPickerCategoriesItemDefault from "EmojiPickerCategoriesItem" /* 9777 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let set;

let CATEGORY_ICON_SIZE;
let EXPRESSION_FOOTER_HEIGHT;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let unpackModuleId;
const EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire, CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT } = Constants);
let ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let obj = { list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT }, listPlaceholder: obj2, item: { height: EXPRESSION_FOOTER_HEIGHT, width: EXPRESSION_FOOTER_HEIGHT, justifyContent: "center", alignItems: "center" }, keyboardItem: { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = { code: "(function EmojiPickerCategoriesTsx1(){let[categoryIndexActive]=this.__closure;return categoryIndexActive.get();})" };
let closure_14 = { code: "(function EmojiPickerCategoriesTsx2(categoryIndex,categoryIndexPrev){let[blockRef,EXPRESSION_FOOTER_HEIGHT,scheduleOnRN,scrollToCategoryIndex]=this.__closure;const ref=blockRef.get();if(categoryIndexPrev==null||categoryIndex===categoryIndexPrev||ref==null){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;if(categoryScrollPos>ref.end||categoryScrollPos<ref.start){scheduleOnRN(scrollToCategoryIndex,categoryIndex);}})" };
let closure_15 = { code: "(function EmojiPickerCategoriesTsx3(){let[inPortalKeyboard,bottomSheetIndex]=this.__closure;return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;})" };
let closure_16 = { code: "(function EmojiPickerCategoriesTsx4(){let[bottomSheetOpen]=this.__closure;return bottomSheetOpen.get();})" };
let closure_17 = { code: "(function EmojiPickerCategoriesTsx5(open){let[scheduleOnRN,handleScrollToCategoryIndex]=this.__closure;if(!open){return;}scheduleOnRN(handleScrollToCategoryIndex);})" };
const memoResult = react.memo(function EmojiPickerCategories(bottomSheetRef) {
  let bottomSheetIndex;
  let closure_8;
  let firstUnicodeCategory;
  let firstUnicodeCategoryIndex;
  let isSearching;
  let items18;
  let obj5;
  let onBackspace;
  let portalHostName;
  let renderAhead;
  let sections;
  let style;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp41;
  let tmp42;
  let tmp9;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const isSheetExpandedRef = bottomSheetRef.isSheetExpandedRef;
  const categories = bottomSheetRef.categories;
  const categoryIndexActive = bottomSheetRef.categoryIndexActive;
  const emojiPickerListRef = bottomSheetRef.emojiPickerListRef;
  ({ onBackspace, portalHostName } = bottomSheetRef);
  ({ bottomSheetIndex, style } = bottomSheetRef);
  if (portalHostName === undefined) {
    portalHostName = "expression-footer";
  }
  let flag = bottomSheetRef.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  ({ isSearching, renderAhead } = bottomSheetRef);
  if (isSearching === undefined) {
    isSearching = false;
  }
  const onClearSearch = bottomSheetRef.onClearSearch;
  let callback;
  let derivedValue;
  let ref2;
  let ref3;
  let callback2;
  let callback3;
  let tmp = callback();
  ExpressionPickerViewType = tmp;
  let tmp2 = bottomSheetRef;
  let tmp3 = categories;
  let obj = bottomSheetRef(categories[7]);
  const sharedValue = obj.useSharedValue(undefined);
  let obj2 = categoryIndexActive;
  categoryIndexActive.useRef(undefined);
  const ref = categoryIndexActive.useRef(null);
  let items = [categories];
  const memo = categoryIndexActive.useMemo(() => {
    let items;
    let items1;
    let arr = categories;
    let num = 0;
    if (0 < categories.length) {
      while (categories[num].type !== EmojiCategoryTypes.UNICODE) {
        num = num + 1;
        arr = arr2;
      }
      const obj2 = { sections: items, firstUnicodeCategory: categories[num], firstUnicodeCategoryIndex: num };
      items = [categories.length];
      return obj2;
    }
    const obj = { sections: items1 };
    items1 = [arr.length];
    return obj;
  }, items);
  ({ firstUnicodeCategory, sections, firstUnicodeCategoryIndex } = memo);
  callback = categoryIndexActive.useCallback((item) => {
    if (null != ref.current) {
      const current = ref.current;
      if (current != null) {
        const obj = { section: 0, item, animated: false };
        current.scrollToLocation(obj);
      }
    }
  }, []);
  let items1 = [derivedValue, categoryIndexActive];
  let c0;
  [tmp9, tmp10] = items1;
  const tmp8 = bottomSheetRef(categories[7]);
  class EmojiPickerCategoriesTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp10];
  EmojiPickerCategoriesTsx1.__closure = items2;
  EmojiPickerCategoriesTsx1.__workletHash = 726737127541;
  EmojiPickerCategoriesTsx1.__initData = tmp9;
  const items3 = [ref2, sharedValue, onClearSearch, , ];
  const useAnimatedReaction = tmp8.useAnimatedReaction;
  const tmp11 = onClearSearch;
  items3[3] = tmp2(tmp3[8]).scheduleOnRN;
  items3[4] = callback;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items3;
  class EmojiPickerCategoriesTsx2 {
    constructor(arg0, arg1) {
      const value = _undefined.get();
      if (null != arg1) {
        if (arg0 !== arg1) {
          if (null != value) {
            const result = arg0 * c1;
            const tmp5 = result > value.end || result < value.start;
            if (tmp5) {
              _undefined2(c3, arg0);
            }
          }
        }
      }
    }
  }
  const items4 = [tmp13, tmp14, tmp15, tmp16];
  EmojiPickerCategoriesTsx2.__closure = items4;
  EmojiPickerCategoriesTsx2.__workletHash = 7202421305396;
  EmojiPickerCategoriesTsx2.__initData = tmp12;
  const animatedReaction = useAnimatedReaction(EmojiPickerCategoriesTsx1, EmojiPickerCategoriesTsx2);
  const items5 = [sharedValue];
  const callback1 = obj2.useCallback((nativeEvent) => {
    if (null != ref.current) {
      const obj = { start: nativeEvent.nativeEvent.contentOffset.x, end: nativeEvent.nativeEvent.contentOffset.x + tmp.current };
      const result = sharedValue.set(obj);
    }
  }, items5);
  const items6 = [ref3, flag, bottomSheetIndex];
  c0 = undefined;
  c1 = undefined;
  [tmp19, tmp20, tmp21] = items6;
  const tmp2Result = tmp2(tmp3[7]);
  class EmojiPickerCategoriesTsx3 {
    constructor() {
      let tmp2;
      const value = _undefined.get();
      if (c0) {
        tmp2 = 1 === value;
      } else {
        tmp2 = 0 === value;
      }
      return tmp2;
    }
  }
  const items7 = [tmp20, tmp21];
  EmojiPickerCategoriesTsx3.__closure = items7;
  EmojiPickerCategoriesTsx3.__workletHash = 1755978433752;
  EmojiPickerCategoriesTsx3.__initData = tmp19;
  derivedValue = tmp2Result.useDerivedValue(EmojiPickerCategoriesTsx3);
  ref2 = obj2.useRef(undefined);
  ref3 = obj2.useRef(false);
  const items8 = [derivedValue, bottomSheetRef, emojiPickerListRef, flag, isSheetExpandedRef, isSearching, onClearSearch];
  callback2 = obj2.useCallback(() => {
    let current = arg0;
    if (arg0 === undefined) {
      current = ref2.current;
    }
    if (null != current) {
      let tmp3;
      const tmp2 = flag;
      if (tmp2) {
        tmp3 = !derivedValue.get();
      } else {
        tmp3 = null != isSheetExpandedRef && !isSheetExpandedRef.current;
      }
      if (tmp3) {
        ref2.current = current;
        ref3.current = false;
        const current3 = bottomSheetRef.current;
        if (current3 != null) {
          current3.expandActionSheet();
        }
      } else {
        const tmp5 = isSearching;
        if (tmp5) {
          if (null != onClearSearch) {
            ref2.current = current;
            ref3.current = true;
            tmp6();
          }
        }
        if (null != emojiPickerListRef.current) {
          ref2.current = undefined;
          ref3.current = false;
          const current2 = tmp7.current;
          const obj = { index: current };
          current2.scrollToHeaderIndex(obj);
        }
      }
      return tmp11;
    }
  }, items8);
  const items9 = [callback2, derivedValue];
  c0 = undefined;
  [tmp25, tmp26] = items9;
  const tmp2Result2 = tmp2(tmp3[7]);
  class EmojiPickerCategoriesTsx4 {
    constructor() {
      return _undefined.get();
    }
  }
  const items10 = [tmp26];
  EmojiPickerCategoriesTsx4.__closure = items10;
  EmojiPickerCategoriesTsx4.__workletHash = 4255098648304;
  EmojiPickerCategoriesTsx4.__initData = tmp25;
  const items11 = [callback3, , ];
  const useAnimatedReaction2 = tmp2Result2.useAnimatedReaction;
  items11[1] = tmp2(tmp3[8]).scheduleOnRN;
  items11[2] = callback2;
  c0 = undefined;
  c1 = undefined;
  [tmp27, tmp28, tmp29] = items11;
  class EmojiPickerCategoriesTsx5 {
    constructor(arg0) {
      const tmp = arg0;
      if (tmp) {
        _undefined(c1);
      }
    }
  }
  const items12 = [tmp28, tmp29];
  EmojiPickerCategoriesTsx5.__closure = items12;
  EmojiPickerCategoriesTsx5.__workletHash = 806583209655;
  EmojiPickerCategoriesTsx5.__initData = tmp27;
  const animatedReaction2 = useAnimatedReaction2(EmojiPickerCategoriesTsx4, EmojiPickerCategoriesTsx5);
  const items13 = [isSearching, categoryIndexActive, emojiPickerListRef];
  const effect = obj2.useEffect(() => {
    const tmp = isSearching;
    if (!tmp) {
      if (ref3.current) {
        if (null != ref2.current) {
          const current = tmp3.current;
          ref2.current = undefined;
          tmp2.current = false;
          const result = categoryIndexActive.set(current);
          const current2 = emojiPickerListRef.current;
          if (current2 != null) {
            const obj = { index: current };
            current2.scrollToHeaderIndex(obj);
          }
        }
      }
    }
  }, items13);
  const items14 = [callback2];
  callback3 = obj2.useCallback((arg0, type) => {
    let obj3;
    if (type.type === EmojiCategoryTypes.GUILD) {
      const guild = type.guild;
      if (null != guild) {
        const obj2 = { location: obj3, tab: ExpressionPickerViewType.EMOJI, guild_id: guild.id };
        obj3 = { page: metroRequire.EXPRESSION_PICKER };
        const obj = AnalyticsUtilsDefault;
        obj.track(hasOwnProperty.EXPRESSION_PICKER_CATEGORY_SELECTED, obj2);
      }
    }
    callback2(arg0);
    const obj4 = HapticUtils;
    const result = obj4.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
  }, items14);
  const items15 = [callback3, callback];
  const items16 = [sharedValue];
  const callback4 = obj2.useCallback((arg0, arg1) => {
    callback3(arg0, arg1);
    callback(arg0);
  }, items15);
  const items17 = [categories, categoryIndexActive, callback3, tmp];
  const callback5 = obj2.useCallback((nativeEvent) => {
    let num2;
    ref.current = nativeEvent.nativeEvent.layout.width;
    const value = sharedValue.get();
    let num;
    set = sharedValue.set;
    const tmp = ref;
    if (value != null) {
      num = value.start;
    }
    if (num == null) {
      num = 0;
    }
    const obj = { start: num, end: num2 + tmp.current };
    num2 = undefined;
    if (value != null) {
      num2 = value.start;
    }
    if (num2 == null) {
      num2 = 0;
    }
    const result = set(obj);
  }, items16);
  const callback6 = obj2.useCallback((arg0, index) => {
    const obj = { category: categories[index], categoryIndexActive, index, handlePressCategory: callback3, loadingStyle: closure_8.listPlaceholder, locked: categories[index].isNitroLocked, style: closure_8.item };
    return React4(EmojiPickerCategoriesItemDefault, obj);
  }, items17);
  const tmp37 = isSheetExpandedRef(tmp3[13])();
  const memo1 = obj2.useMemo(() => {
    const Gesture = bottomSheetRef(categories[14]).Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.disallowInterruption(true);
  }, []);
  let obj3 = { portalHostName, style, children: tmp41(tmp42, { children: items18 }) };
  let obj4 = { gesture: memo1, children: sharedValue(isSheetExpandedRef(tmp3[16]), obj5) };
  const tmp40 = isSheetExpandedRef(tmp3[15]);
  const GestureDetector = tmp2(tmp3[14]).GestureDetector;
  obj5 = { estimatedListSize: "windowSize", horizontal: true, itemSize: tmp11, keyboardShouldPersistTaps: "always", listId: ExpressionPickerViewType.EMOJI, onLayout: callback5, onScroll: callback1, placeholderConfig: tmp37, ref, renderAhead, renderItem: callback6, scrollReporting: "callbacks", sections, showsHorizontalScrollIndicator: false, style: tmp.list };
  items18 = [sharedValue(GestureDetector, obj4), , ];
  let tmp39Result = null;
  tmp41 = ref;
  tmp42 = ref;
  if (null != firstUnicodeCategory) {
    const obj6 = { blockRef: sharedValue, category: firstUnicodeCategory, categoryIndex: firstUnicodeCategoryIndex, onPress: callback4, style: tmp.item };
    tmp39Result = tmp39(tmp36(tmp3[17]), obj6);
  }
  items18[1] = tmp39Result;
  let tmp39Result2 = null;
  if (null != onBackspace) {
    const obj7 = { style: null, iconStyle: null, onBackspace };
    ({ item: obj8.style, keyboardItem: obj8.iconStyle } = tmp);
    tmp39Result2 = tmp39(tmp36(tmp3[18]), obj7);
  }
  items18[2] = tmp39Result2;
  return sharedValue(tmp40, obj3);
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx");

export default memoResult;
