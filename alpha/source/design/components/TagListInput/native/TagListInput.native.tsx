// Module ID: 8177
// Function ID: 8178
// Name: TagListInput
// Dependencies: [32, 19, 17, 21, 5306, 575, 5929, 1655, 5939, 5940, 7533, 5893, 7628, 5944, 7640, 7642, 5484, 7644, 5917, 5570, 8178, 8179, 1113, 8180, 5315, 7639, 7826, 2]

// Module 8177 (TagListInput)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5315 */;
import Text_Text from "Text/Text" /* 5929 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles(() => {
  let obj6;
  const obj = { placeholder: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT }, iconContainer: { paddingHorizontal: nativeDefault.space.PX_12 }, iconLeft: { marginLeft: nativeDefault.space.PX_12 }, scrollViewContent: { paddingVertical: 5 }, horizontalScrollViewContent: { flexGrow: 1 }, inputInner: { marginHorizontal: nativeDefault.space.PX_4, alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 }, horizontalInputInner: { flexWrap: "nowrap" }, searchInput: obj6, horizontalSearchInput: { minWidth: nativeDefault.space.PX_64 } };
  ({ color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT });
  ({ paddingHorizontal: nativeDefault.space.PX_12 });
  ({ marginLeft: nativeDefault.space.PX_12 });
  ({ marginHorizontal: nativeDefault.space.PX_4, alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 });
  obj6 = { flex: 1, minHeight: nativeDefault.space.PX_24, minWidth: nativeDefault.space.PX_48, color: nativeDefault.colors.TEXT_DEFAULT, paddingVertical: 0, marginVertical: 2 };
  const merged = Object.assign(Text_Text.TextStyleSheet["body-sm/medium"]);
  ({ minWidth: nativeDefault.space.PX_64 });
  return obj;
});
let closure_11 = { x: 0, y: 0.5 };
let closure_12 = { x: 1, y: 0.5 };
let closure_13 = ["transparent", "black"];
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  const obj = { fill: { flex: 1 }, mask: obj2, leadingFade: { width: 32 }, leadingCover: obj3, maskRemainder: { flex: 1, backgroundColor: "black" } };
  obj2 = { flexDirection: "row" };
  const merged = Object.assign(metroImportDefault.absoluteFillObject);
  obj3 = { backgroundColor: "black" };
  const merged1 = Object.assign(metroImportDefault.absoluteFillObject);
  return obj;
});
let closure_15 = { code: "(function TagListInputNativeTsx1(){let[withSpring,scrolled,springStandard]=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,'animate-always')};})" };
const memoResult = react.memo(function TagListInput(accessibilityHint) {
  let BottomSheetScrollView;
  let BottomSheetTextInput;
  let InputFieldContainer;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let accessibilityLabel;
  let autoClearInputOnTagAdd;
  let autoFocus;
  let c10;
  let c12;
  let c13;
  let c14;
  let c17;
  let c8;
  let c9;
  let clearProps;
  let clearState;
  let defaultValue;
  let disabled;
  let fill;
  let focusOnAdd;
  let footer;
  let icon;
  let inActionSheet;
  let isFocused;
  let items11;
  let items12;
  let items13;
  let items14;
  let items8;
  let items9;
  let num;
  let obj13;
  let obj9;
  let onBlur;
  let onChangeText;
  let onFocus;
  let onScroll;
  let onSubmitEditing;
  let placeholder;
  let returnKeyType;
  let style;
  let tmp23;
  let tmp30;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp49;
  let tmp54;
  ({ defaultValue, disabled } = accessibilityHint);
  accessibilityHint = accessibilityHint.accessibilityHint;
  if (disabled === undefined) {
    disabled = false;
  }
  ({ placeholder, accessibilityLabel, icon, onChangeText, onScroll, returnKeyType, onBlur, onFocus, style } = accessibilityHint);
  if (returnKeyType === undefined) {
    returnKeyType = "search";
  }
  let tags = accessibilityHint.tags;
  let flag = accessibilityHint.horizontal;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, focusOnAdd } = accessibilityHint);
  if (focusOnAdd === undefined) {
    focusOnAdd = true;
  }
  ({ inActionSheet, onRemove: dependencyMap, autoClearInputOnTagAdd, onSubmitEditing, autoFocus } = accessibilityHint);
  if (autoClearInputOnTagAdd === undefined) {
    autoClearInputOnTagAdd = true;
  }
  let flag2 = accessibilityHint.leadingFade;
  if (flag2 === undefined) {
    flag2 = false;
  }
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c17 = undefined;
  let ref = accessibilityHint.ref;
  let tmp = c10();
  let tmp2 = tags;
  const tmp3 = dependencyMap;
  let obj = tags(5944);
  const bound = Math.min(2, obj.useFontScale());
  let ref1;
  onChangeText = undefined;
  let obj2 = ref1;
  let result = tags(7640).InputHeights.MD * bound;
  ref1 = ref1.useRef(null);
  const ref2 = ref1.useRef("");
  const ref3 = ref1.useRef(false);
  let tmp9 = autoClearInputOnTagAdd;
  const tmp10 = autoClearInputOnTagAdd(ref1.useState(false), 2);
  const first = tmp10[0];
  let closure_5 = tmp10[1];
  let items = [onChangeText];
  onChangeText = ref1.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    ref3.current = true;
    ref2.current = current;
    closure_5(current.length > 0);
    if (onChangeText != null) {
      onChangeText(current);
    }
    if (flag) {
      current = ref1.current;
      if (current != null) {
        const obj = { text: current };
        current.setNativeProps(obj);
      }
    }
  }, items);
  const imperativeHandle = ref1.useImperativeHandle(ref, () => ({
    blur() {
      const current = ref1.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = ref1.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    setText(arg0) {
      return callback(arg0, true);
    },
    getText() {
      return ref.current;
    },
    isFocused() {
      const current = ref1.current;
      let flag;
      if (current != null) {
        flag = current.isFocused();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    },
    measure(arg0) {
      const current = ref1.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = ref1.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = ref1.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }));
  let items1 = [first, onChangeText];
  const memo = ref1.useMemo(() => {
    const obj = { clearProps: { clearable: true }, clearState: obj2 };
    return obj;
  }, items1);
  ({ clearProps, clearState } = memo);
  let obj3 = tags(7628);
  const inputClearButton = obj3.useInputClearButton(clearProps, clearState);
  ref = ref1.useRef({ start: 0, end: 0 });
  let obj4 = tags(7642);
  const keyboardBlurring = obj4.useKeyboardBlurring(ref1);
  let obj5 = tags(5484);
  const focus = obj5.useFocus();
  ({ focusProps: c8, isFocused } = focus);
  ({ onFocus: c9, onBlur: c10 } = focusOnAdd(7644)({ onFocus, onBlur }));
  const tmp19 = focusOnAdd(7644)({ onFocus, onBlur });
  const ref4 = ref1.useRef(null);
  [c12, c13] = autoClearInputOnTagAdd(ref1.useState(null), 2);
  const tmp21 = autoClearInputOnTagAdd(ref1.useState(null), 2);
  [tmp23, c14] = autoClearInputOnTagAdd(ref1.useState(false), 2);
  autoClearInputOnTagAdd(ref1.useState(false), 2);
  const tmp24 = focusOnAdd(5917)(tags);
  const length = tmp24;
  const ref5 = ref1.useRef(tags);
  let items2 = [focusOnAdd, onChangeText, ref5, tags, ref1, ref2, autoClearInputOnTagAdd];
  const layoutEffect = ref1.useLayoutEffect(() => {
    const tmp = ref5;
    const tmp2 = tags;
    if (ref5.current.length < tags.length) {
      let tmp6 = focusOnAdd;
      if (tmp6) {
        let current = ref1.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        tmp6 = false === isFocusedResult;
      }
      if (tmp6) {
        const current2 = ref1.current;
        if (current2 != null) {
          current2.focus();
        }
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: false });
        }
        return scrollToEndResult;
      }, 10);
      const tmp12 = autoClearInputOnTagAdd && ref2.current.length > 0;
      if (tmp12) {
        callback("", true);
      }
      if (0 === ref2.current.length) {
        const current3 = ref1.current;
        if (current3 != null) {
          current3.setSelection(0, 0);
        }
        ref.current = { start: 0, end: 0 };
      }
    }
    tmp.current = tmp2;
  }, items2);
  const items3 = [tmp24];
  const layoutEffect1 = ref1.useLayoutEffect(() => {
    if (0 !== length.length) {
      const current = ref4.current;
      if (current != null) {
        current.scrollToEnd({ animated: false });
      }
    }
  }, items3);
  const tmp18 = focusOnAdd;
  if (inActionSheet) {
    BottomSheetScrollView = tmp2(5570).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = onChangeText;
  }
  if (inActionSheet) {
    BottomSheetTextInput = tmp2(8178).BottomSheetTextInput;
  } else {
    BottomSheetTextInput = tmp18(8179);
  }
  const result1 = 33 * bound;
  [tmp30, c17] = tmp9(obj2.useState(0), 2);
  tmp9(obj2.useState(0), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (placeholder == null) {
    let intl = tmp2(1113).intl;
    placeholder = intl.string(tmp2(1113).t["5h0QOP"]);
  }
  if (accessibilityLabel == null) {
    const intl2 = tmp2(1113).intl;
    accessibilityLabel = intl2.string(tmp2(1113).t["5h0QOP"]);
  }
  const tmp33 = c14();
  importDefault = tmp33;
  let closure_2 = tmp34;
  const tmp2Result = tmp2(1655);
  const sharedValue = tmp2Result.useSharedValue(false);
  const items4 = [flag && flag2, onScroll, sharedValue];
  const callback2 = obj2.useCallback((nativeEvent) => {
    const tmp = closure_2;
    if (tmp) {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.x > 1);
    }
    if (onScroll != null) {
      tmp4(nativeEvent);
    }
  }, items4);
  const items5 = [length, , , ];
  const useAnimatedStyle = tmp2(1655).useAnimatedStyle;
  tmp2(1655);
  items5[1] = tmp2(5939).withSpring;
  items5[2] = sharedValue;
  items5[3] = tmp2(5940).springStandard;
  let c0;
  let c1;
  let c2;
  [tmp38, tmp39, tmp40, tmp41] = items5;
  class TagListInputNativeTsx1 {
    constructor() {
      let num = 1;
      const tmp = c0;
      if (_undefined.get()) {
        num = 0;
      }
      const obj = { opacity: tmp(num, c2, "animate-always") };
      return obj;
    }
  }
  const items6 = [tmp39, tmp40, tmp41];
  TagListInputNativeTsx1.__closure = items6;
  TagListInputNativeTsx1.__workletHash = 825720958529;
  TagListInputNativeTsx1.__initData = tmp38;
  const animatedStyle = useAnimatedStyle(TagListInputNativeTsx1);
  const items7 = [flag && flag2, tmp33, animatedStyle];
  let tmp44 = tmp34;
  const callback3 = obj2.useCallback((children) => {
    let items;
    let items1;
    let items2;
    let obj2;
    let tmp = children;
    if (dependencyMap) {
      const obj = { style: closure_1.fill, androidRenderingMode: "software", maskElement: c9(ref2, obj2), children };
      const obj3 = { style: closure_1.leadingFade, children: items };
      items = [, ];
      obj2 = { style: closure_1.mask, children: items2 };
      const obj4 = { start: ref4, end, colors, style: absoluteFill.absoluteFill };
      const tmp5 = focusOnAdd(dependencyMap[10]);
      items[0] = c8(focusOnAdd(dependencyMap[11]), obj4);
      const obj5 = { style: items1 };
      items1 = [closure_1.leadingCover, animatedStyle];
      items[1] = c8(focusOnAdd(dependencyMap[7]).View, obj5);
      items2 = [c9(ref2, obj3), ];
      const obj6 = { style: closure_1.maskRemainder };
      items2[1] = c8(ref2, obj6);
      tmp = c8(tmp5, obj);
    }
    return tmp;
  }, items7);
  if (!(flag && flag2)) {
    tmp44 = null != onScroll;
  }
  let tmp45;
  if (tmp44) {
    tmp45 = callback2;
  }
  let obj6 = { onScroll: tmp45, scrollEventThrottle: num, scrollerStyle: fill, wrap: callback3 };
  num = undefined;
  if (tmp44) {
    num = 16;
  }
  fill = undefined;
  if (flag && flag2) {
    fill = tmp33.fill;
  }
  const obj7 = { style: items8, contentContainerStyle: items9, ref: ref4, bounces: false, onScroll: obj6.onScroll, onLayout: tmp49, scrollEventThrottle: obj6.scrollEventThrottle, horizontal: flag, snapToInterval: result1, overScrollMode: "never", keyboardShouldPersistTaps: "handled", children: c9(ref2, obj9) };
  items8 = [, ];
  const obj8 = { maxHeight: 3 * result1 };
  items8[0] = obj8;
  items8[1] = obj6.scrollerStyle;
  items9 = [tmp.scrollViewContent, ];
  let prop;
  if (flag) {
    prop = tmp.horizontalScrollViewContent;
  }
  items9[1] = prop;
  tmp49 = undefined;
  if (flag) {
    tmp49 = callback1;
  }
  const items10 = [tmp.inputInner, ];
  obj9 = { style: items10, children: items11 };
  const tmp52 = flag && tmp.horizontalInputInner;
  items10[1] = tmp52;
  items11 = [
    tags.map((tag, index) => {
      tags = tag;
      let closure_1 = index;
      const obj = {
        tag,
        selected: tag.id === c12,
        onPress(arg0) {
          let tmpResult;
          if ("select" === arg0) {
            if (c12 !== tag.id) {
              c13(tmp5.id);
            }
            const current = ref1.current;
            const tmp9 = ref1;
            if (current != null) {
              current.focus();
            }
            c14(true);
            const current2 = tmp9.current;
            if (current2 != null) {
              current2.setSelection(0, 0);
            }
            ref.current = { start: 0, end: 0 };
          } else if (dependencyMap != null) {
            tmpResult = tmp(index);
          }
          return tmpResult;
        },
        start: 0 === index,
        end: index === tags.length - 1
      };
      return _undefined(tags(dependencyMap[23]).TagListInputTagComponent, obj, index);
    }),

  ];
  const obj10 = {
    ref: ref1,
    accessibilityHint,
    accessibilityRole: "search",
    defaultValue,
    style: items12,
    onChangeText,
    onKeyPress: function handleKeyPress(nativeEvent) {
      _undefined3(false);
      let tmp4 = 0 === ref.current.start;
      const tmp = _undefined3;
      if (tmp4) {
        tmp4 = 0 === tmp3.current.end;
      }
      if ("Backspace" === nativeEvent.nativeEvent.key) {
        if (null != c12) {
          const findIndexResult = tags.findIndex((id) => id.id === closure_1_12);
          if (findIndexResult > -1) {
            if (dependencyMap != null) {
              dependencyMap(findIndexResult);
            }
          }
          _undefined2(null);
        }
      }
      if ("Backspace" === nativeEvent.nativeEvent.key) {
        if (tmp4) {
          if (0 !== tags.length) {
            _undefined2(tags[tags.length - 1].id);
            tmp(true);
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            const announce = AccessibilityAnnouncer.announce;
            const intl = intl3.intl;
            const obj = { text: tags[tags.length - 1].text };
            announce(intl.formatToPlainString(intl3.t.QymItZ, obj));
          }
        }
      }
      if (null != c12) {
        _undefined2(null);
      } else {
        const tmp8 = null != tmp3.current && tmp3.current.start === tmp3.current.end && tmp3.current.start === ref2.current.length;
        if (tmp8) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const current = ref.current;
            let scrollToEndResult;
            if (current != null) {
              scrollToEndResult = current.scrollToEnd({ animated: false });
            }
            return scrollToEndResult;
          }, 10);
        }
      }
    },
    onFocus(arg0) {
      _undefined.onFocus();
      if (c9 != null) {
        tmp2(arg0);
      }
    },
    onBlur(arg0) {
      _undefined.onBlur();
      if (c10 != null) {
        tmp2(arg0);
      }
    },
    onPressIn: function handlePressIn() {
      _undefined3(false);
      _undefined2(null);
    },
    autoCapitalize: "none",
    autoCorrect: false,
    "aria-label": accessibilityLabel,
    placeholder: tmp54,
    placeholderTextColor: tmp.placeholder.color,
    autoFocus,
    returnKeyType,
    accessibilityLabel,
    caretHidden: tmp23,
    onSubmitEditing,
    maxFontSizeMultiplier: 2,
    onSelectionChange(nativeEvent) {
      const selection = nativeEvent.nativeEvent.selection;
      ref.current = selection;
      return selection;
    }
  };
  if (ref3.current) {
    defaultValue = ref2.current;
  }
  items12 = [tmp.searchInput, flag && tmp.horizontalSearchInput, ];
  let tmp53;
  if (flag) {
    if (null == inputClearButton) {
      tmp53 = { maxWidth: tmp30 - 16 };
      const obj11 = { maxWidth: tmp30 - 16 };
    }
  }
  items12[2] = tmp53;
  tmp54 = undefined;
  if (0 === tags.length) {
    if (null == inputClearButton) {
      tmp54 = placeholder;
    }
  }
  items11[1] = c8(BottomSheetTextInput, obj10);
  const obj12 = { style: items13, children: c9(InputFieldContainer, obj13) };
  items13 = [{ minHeight: result, overflow: "hidden" }, style];
  obj13 = { size: "sm", disabled, isFocused, children: items14 };
  const tmp47Result = c8(BottomSheetScrollView, obj7);
  InputFieldContainer = tmp2(7639).InputFieldContainer;
  if (null == icon) {
    const obj14 = { style: tmp.iconLeft, size: "xs", color: "interactive-text-default" };
    icon = tmp47(tmp2(7826).MagnifyingGlassIcon, obj14);
  }
  items14 = [icon, obj6.wrap(tmp47Result), ];
  if (null == footer) {
    let tmp47Result2 = null;
    if (null != inputClearButton) {
      const obj15 = { style: tmp.iconContainer, children: inputClearButton };
      tmp47Result2 = tmp47(tmp51, obj15);
    }
    footer = tmp47Result2;
  }
  items14[2] = footer;
  return c8(ref2, obj12);
});
let result = size.fileFinishedImporting("design/components/TagListInput/native/TagListInput.native.tsx");

export default memoResult;
