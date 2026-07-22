// Module ID: 9399
// Function ID: 73241
// Name: EXPRESSION_FOOTER_HEIGHT
// Dependencies: []

// Module 9399 (EXPRESSION_FOOTER_HEIGHT)
let CATEGORY_ICON_SIZE;
let EXPRESSION_FOOTER_HEIGHT;
const importAllResult = importAll(dependencyMap[0]);
const EmojiCategoryTypes = arg1(dependencyMap[1]).EmojiCategoryTypes;
({ AnalyticEvents: closure_5, AnalyticsPages: closure_6, CATEGORY_ICON_SIZE, EXPRESSION_FOOTER_HEIGHT } = arg1(dependencyMap[2]));
const ExpressionPickerViewType = arg1(dependencyMap[3]).ExpressionPickerViewType;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let obj = { list: { flex: 1, height: EXPRESSION_FOOTER_HEIGHT } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
obj.listPlaceholder = obj;
obj.item = { height: EXPRESSION_FOOTER_HEIGHT, width: EXPRESSION_FOOTER_HEIGHT, justifyContent: "center", alignItems: "center" };
obj.keyboardItem = { height: CATEGORY_ICON_SIZE, width: CATEGORY_ICON_SIZE };
let closure_12 = arg1(dependencyMap[5]).createStyles(obj);
let closure_13 = { code: "function EmojiPickerCategoriesTsx1(){const{categoryIndexActive}=this.__closure;return categoryIndexActive.get();}" };
let closure_14 = { code: "function EmojiPickerCategoriesTsx2(categoryIndex,categoryIndexPrev){const{blockRef,EXPRESSION_FOOTER_HEIGHT,runOnJS,scrollToCategoryIndex}=this.__closure;const ref=blockRef.get();if(categoryIndexPrev==null||categoryIndex===categoryIndexPrev||ref==null){return;}const categoryScrollPos=categoryIndex*EXPRESSION_FOOTER_HEIGHT;if(categoryScrollPos>ref.end||categoryScrollPos<ref.start){runOnJS(scrollToCategoryIndex)(categoryIndex);}}" };
let closure_15 = { code: "function EmojiPickerCategoriesTsx3(){const{inPortalKeyboard,bottomSheetIndex}=this.__closure;return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
let closure_16 = { code: "function EmojiPickerCategoriesTsx4(){const{bottomSheetOpen}=this.__closure;return bottomSheetOpen.get();}" };
let closure_17 = { code: "function EmojiPickerCategoriesTsx5(open){const{runOnJS,handleScrollToCategoryIndex}=this.__closure;if(!open){return;}runOnJS(handleScrollToCategoryIndex)();}" };
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function EmojiPickerCategories(bottomSheetRef) {
  let firstUnicodeCategory;
  let firstUnicodeCategoryIndex;
  let onBackspace;
  let portalHostName;
  let sections;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const arg1 = bottomSheetRef;
  const bottomSheetIndex = bottomSheetRef.bottomSheetIndex;
  const importDefault = bottomSheetIndex;
  const categories = bottomSheetRef.categories;
  const dependencyMap = categories;
  const categoryIndexActive = bottomSheetRef.categoryIndexActive;
  const emojiPickerListRef = bottomSheetRef.emojiPickerListRef;
  const EmojiCategoryTypes = emojiPickerListRef;
  ({ onBackspace, portalHostName } = bottomSheetRef);
  if (portalHostName === undefined) {
    portalHostName = "expression-footer";
  }
  let flag = bottomSheetRef.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = bottomSheetRef.isSearching;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onClearSearch = bottomSheetRef.onClearSearch;
  const EXPRESSION_FOOTER_HEIGHT = onClearSearch;
  let ExpressionPickerViewType;
  let sharedValue;
  let closure_10;
  let ref;
  let callback;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  const tmp = callback();
  ExpressionPickerViewType = tmp;
  let obj = arg1(dependencyMap[7]);
  sharedValue = obj.useSharedValue(undefined);
  closure_10 = importAllResult.useRef(undefined);
  ref = importAllResult.useRef(null);
  const items = [categories];
  const memo = importAllResult.useMemo(() => {
    let num = 0;
    if (0 < categories.length) {
      while (categories[num].type !== emojiPickerListRef.UNICODE) {
        num = num + 1;
        let tmp5 = categories;
      }
      const obj = {};
      const items = [categories.length];
      obj.sections = items;
      obj.firstUnicodeCategory = categories[num];
      obj.firstUnicodeCategoryIndex = num;
      return obj;
    }
    const sections = [categories.length];
    return { sections };
  }, items);
  ({ firstUnicodeCategory, sections, firstUnicodeCategoryIndex } = memo);
  callback = importAllResult.useCallback((item) => {
    if (null != closure_10.current) {
      const current = ref.current;
      if (null != current) {
        const obj = { -9223372036854775808: "decimal-pad", 0: "number-pad", 0: "phone-pad", item };
        current.scrollToLocation(obj);
      }
    }
  }, []);
  let obj1 = arg1(dependencyMap[7]);
  const fn = function w() {
    return categoryIndexActive.get();
  };
  fn.__closure = { categoryIndexActive };
  fn.__workletHash = 2293356797932;
  fn.__initData = closure_13;
  const fn2 = function j(arg0, arg1) {
    const value = sharedValue.get();
    if (null != arg1) {
      if (arg0 !== arg1) {
        if (null != value) {
          const result = arg0 * onClearSearch;
          if (tmp4) {
            bottomSheetRef(categories[7]).runOnJS(callback)(arg0);
            const obj = bottomSheetRef(categories[7]);
          }
          const tmp4 = result > value.end || result < value.start;
        }
      }
    }
  };
  obj = { blockRef: sharedValue, EXPRESSION_FOOTER_HEIGHT, runOnJS: arg1(dependencyMap[7]).runOnJS, scrollToCategoryIndex: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 7148256102464;
  fn2.__initData = closure_14;
  const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
  const items1 = [sharedValue];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    if (null != closure_10.current) {
      const obj = { start: nativeEvent.nativeEvent.contentOffset.x, end: nativeEvent.nativeEvent.contentOffset.x + closure_10.current };
      const result = sharedValue.set(obj);
    }
  }, items1);
  let obj3 = arg1(dependencyMap[7]);
  class K {
    constructor() {
      value = bottomSheetIndex.get();
      if (closure_5) {
        num2 = 1;
        tmp2 = 1 === value;
      } else {
        num = 0;
        tmp2 = 0 === value;
      }
      return tmp2;
    }
  }
  obj = { inPortalKeyboard: flag, bottomSheetIndex };
  K.__closure = obj;
  K.__workletHash = 15413192314561;
  K.__initData = closure_15;
  const derivedValue = obj3.useDerivedValue(K);
  closure_13 = derivedValue;
  closure_14 = importAllResult.useRef(undefined);
  closure_15 = importAllResult.useRef(false);
  const items2 = [derivedValue, bottomSheetRef, emojiPickerListRef, flag, flag2, onClearSearch];
  const callback2 = importAllResult.useCallback(() => {
    let current = arg0;
    if (arg0 === undefined) {
      current = ref.current;
    }
    if (null != current) {
      if (!derivedValue.get()) {
        if (flag) {
          let tmp4 = null == bottomSheetRef;
          if (!tmp4) {
            const current2 = bottomSheetRef.current;
            tmp4 = null == current2;
            let obj = current2;
          }
          if (!tmp4) {
            obj.expandActionSheet();
          }
          ref.current = current;
          closure_15.current = false;
        }
      }
      if (flag2) {
        if (null != onClearSearch) {
          ref.current = current;
          closure_15.current = true;
          onClearSearch();
        }
      }
      if (null != emojiPickerListRef.current) {
        ref.current = undefined;
        closure_15.current = false;
        const current3 = emojiPickerListRef.current;
        obj = { index: current };
        current3.scrollToHeaderIndex(obj);
      }
    }
  }, items2);
  closure_16 = callback2;
  let obj5 = arg1(dependencyMap[7]);
  const fn3 = function z() {
    return derivedValue.get();
  };
  fn3.__closure = { bottomSheetOpen: derivedValue };
  fn3.__workletHash = 13172461706889;
  fn3.__initData = closure_16;
  class X {
    constructor(arg0) {
      if (bottomSheetRef) {
        tmp = bottomSheetRef;
        tmp2 = categories;
        num = 7;
        obj = bottomSheetRef(categories[7]);
        tmp3 = f73249;
        tmp4 = obj.runOnJS(f73249)();
      }
      return;
    }
  }
  obj1 = { runOnJS: arg1(dependencyMap[7]).runOnJS, handleScrollToCategoryIndex: callback2 };
  X.__closure = obj1;
  X.__workletHash = 13670816929775;
  X.__initData = closure_17;
  const animatedReaction1 = obj5.useAnimatedReaction(fn3, X);
  const items3 = [flag2, categoryIndexActive, emojiPickerListRef];
  const effect = importAllResult.useEffect(() => {
    if (!flag2) {
      if (ref2.current) {
        if (null != ref.current) {
          const current = ref.current;
          ref.current = undefined;
          ref2.current = false;
          const result = categoryIndexActive.set(current);
          const current2 = emojiPickerListRef.current;
          if (null != current2) {
            const obj = { index: current };
            current2.scrollToHeaderIndex(obj);
          }
        }
      }
    }
  }, items3);
  const items4 = [callback2];
  const callback3 = importAllResult.useCallback((arg0, type) => {
    if (type.type === emojiPickerListRef.GUILD) {
      const guild = type.guild;
      if (null != guild) {
        let obj = bottomSheetIndex(categories[8]);
        obj = {};
        obj = { page: flag2.EXPRESSION_PICKER };
        obj.location = obj;
        obj.tab = tmp.EMOJI;
        obj.guild_id = guild.id;
        obj.track(flag.EXPRESSION_PICKER_CATEGORY_SELECTED, obj);
      }
    }
    callback2(arg0);
    const result = bottomSheetRef(categories[9]).triggerHapticFeedback(bottomSheetIndex(categories[10]).IMPACT_LIGHT);
  }, items4);
  closure_17 = callback3;
  const items5 = [callback3, callback];
  const items6 = [sharedValue];
  const callback4 = importAllResult.useCallback((arg0, arg1) => {
    callback3(arg0, arg1);
    callback(arg0);
  }, items5);
  const items7 = [categories, categoryIndexActive, callback3, tmp];
  const callback5 = importAllResult.useCallback((nativeEvent) => {
    closure_10.current = nativeEvent.nativeEvent.layout.width;
    const value = sharedValue.get();
    const obj = {};
    let start;
    if (null != value) {
      start = value.start;
    }
    let num = 0;
    if (null != start) {
      num = start;
    }
    obj.start = num;
    let start1;
    if (null != value) {
      start1 = value.start;
    }
    let num2 = 0;
    if (null != start1) {
      num2 = start1;
    }
    obj.end = num2 + closure_10.current;
    const result = sharedValue.set(obj);
  }, items6);
  const callback6 = importAllResult.useCallback((arg0, index) => sharedValue(bottomSheetIndex(categories[11]), { category: categories[index], categoryIndexActive, index, handlePressCategory: callback3, loadingStyle: tmp.listPlaceholder, locked: categories[index].isNitroLocked, style: tmp.item }), items7);
  const memo1 = importAllResult.useMemo(() => {
    const Gesture = bottomSheetRef(categories[13]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  const obj2 = { portalHostName, style: bottomSheetRef.style };
  obj3 = {};
  const tmp16 = importDefault(dependencyMap[12])();
  const tmp18 = sharedValue;
  const obj4 = { gesture: memo1 };
  obj5 = { "Bool(false)": null, "Bool(false)": "mobile-text-heading-primary", "Bool(false)": 2, "Bool(false)": "inbox", itemSize: EXPRESSION_FOOTER_HEIGHT, listId: ExpressionPickerViewType.EMOJI, onLayout: callback5, onScroll: callback1, placeholderConfig: tmp16, ref, renderItem: callback6, scrollReporting: "callbacks", sections, showsHorizontalScrollIndicator: false, style: tmp.list };
  obj4.children = sharedValue(importDefault(dependencyMap[15]), obj5);
  const items8 = [sharedValue(arg1(dependencyMap[13]).GestureDetector, obj4), , ];
  let tmp22 = null;
  if (null != firstUnicodeCategory) {
    const obj6 = { blockRef: sharedValue, category: firstUnicodeCategory, categoryIndex: firstUnicodeCategoryIndex, onPress: callback4, style: tmp.item };
    tmp22 = sharedValue(importDefault(dependencyMap[16]), obj6);
  }
  items8[1] = tmp22;
  let tmp26 = null;
  if (null != onBackspace) {
    const obj7 = {};
    ({ item: obj13.style, keyboardItem: obj13.iconStyle } = tmp);
    obj7.onBackspace = onBackspace;
    tmp26 = sharedValue(importDefault(dependencyMap[17]), obj7);
  }
  items8[2] = tmp26;
  obj3.children = items8;
  obj2.children = ref(closure_10, obj3);
  return tmp18(importDefault(dependencyMap[14]), obj2);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategories.tsx");

export default memoResult;
