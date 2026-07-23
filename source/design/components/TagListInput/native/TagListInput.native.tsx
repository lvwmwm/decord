// Module ID: 8425
// Function ID: 67121
// Dependencies: [57, 31, 27, 33, 4130, 689, 4126, 3991, 4542, 4546, 5109, 4554, 5775, 4549, 5781, 5783, 3839, 5785, 5450, 5189, 8426, 8427, 1212, 8428, 3843, 5780, 5786, 2]

// Module 8425
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, ScrollView: closure_6, StyleSheet: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { color: importDefault(689).colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj.placeholder = obj;
  obj = { paddingHorizontal: importDefault(689).space.PX_12 };
  obj.iconContainer = obj;
  obj.iconLeft = { marginLeft: importDefault(689).space.PX_12 };
  obj.scrollViewContent = { paddingVertical: 5 };
  obj.horizontalScrollViewContent = { flexGrow: 1 };
  const obj2 = { marginHorizontal: importDefault(689).space.PX_4, alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
  obj.inputInner = obj2;
  obj.horizontalInputInner = { flexWrap: "nowrap" };
  const obj3 = { flex: 1, minHeight: importDefault(689).space.PX_24, minWidth: importDefault(689).space.PX_48, color: importDefault(689).colors.TEXT_DEFAULT };
  const merged = Object.assign(require(4126) /* Text */.TextStyleSheet["text-sm/medium"]);
  obj3["paddingVertical"] = 0;
  obj3["marginVertical"] = 2;
  obj.searchInput = obj3;
  const obj1 = { marginLeft: importDefault(689).space.PX_12 };
  obj.horizontalSearchInput = { minWidth: importDefault(689).space.PX_64 };
  return obj;
});
let closure_11 = { x: 0, y: 0.5 };
let closure_12 = { x: 1, y: 0.5 };
let closure_13 = ["transparent", "black"];
let closure_14 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { fill: { flex: 1 } };
  obj = {};
  const merged = Object.assign(closure_7.absoluteFillObject);
  obj["flexDirection"] = "row";
  obj.mask = obj;
  obj.leadingFade = { width: 32 };
  obj = {};
  const merged1 = Object.assign(closure_7.absoluteFillObject);
  obj["backgroundColor"] = "black";
  obj.leadingCover = obj;
  obj.maskRemainder = { flex: 1, backgroundColor: "black" };
  return obj;
});
let closure_15 = { code: "function TagListInputNativeTsx1(){const{withSpring,scrolled,springStandard}=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,'animate-always')};}" };
const memoResult = importAllResult.memo(function TagListInput(accessibilityHint) {
  let accessibilityLabel;
  let autoClearInputOnTagAdd;
  let autoFocus;
  let c10;
  let c17;
  let c9;
  let defaultValue;
  let dependencyMap;
  let disabled;
  let focusOnAdd;
  let footer;
  let icon;
  let inActionSheet;
  let onBlur;
  let onChangeText;
  let onFocus;
  let onScroll;
  let onSubmitEditing;
  let placeholder;
  let returnKeyType;
  let style;
  let tmp23;
  ({ defaultValue, disabled } = accessibilityHint);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ placeholder, accessibilityLabel, icon, returnKeyType, onChangeText, onBlur, onFocus, onScroll, style } = accessibilityHint);
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
  let inputRef;
  let inputValueRef;
  let inputUpdate;
  let closure_7;
  let focusProps;
  c9 = undefined;
  let callback;
  let ref;
  let closure_12;
  let closure_13;
  let closure_14;
  let c15;
  let ref1;
  c17 = undefined;
  let tmp = callback();
  let obj = tags(4549);
  const bound = Math.min(2, obj.useFontScale());
  let result = tags(5781).InputHeights.MD * bound;
  let tmp4 = (function useTagListInputState(ref, onChangeText) {
    let clearProps;
    let clearState;
    let closure_0 = onChangeText;
    ref = inputRef.useRef(null);
    const ref1 = inputRef.useRef("");
    const ref2 = inputRef.useRef(false);
    const tmp4 = autoClearInputOnTagAdd(inputRef.useState(false), 2);
    const first = tmp4[0];
    let closure_5 = tmp4[1];
    const items = [onChangeText];
    const callback = inputRef.useCallback((current) => {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      ref2.current = true;
      ref1.current = current;
      callback(current.length > 0);
      if (null != onChangeText) {
        onChangeText(current);
      }
      if (flag) {
        current = ref.current;
        if (null != current) {
          const obj = { text: current };
          current.setNativeProps(obj);
        }
      }
    }, items);
    const imperativeHandle = inputRef.useImperativeHandle(ref, () => ({
      blur() {
        const current = outer1_1.current;
        let blurResult;
        if (null != current) {
          blurResult = current.blur();
        }
        return blurResult;
      },
      focus() {
        const current = outer1_1.current;
        let focusResult;
        if (null != current) {
          focusResult = current.focus();
        }
        return focusResult;
      },
      setText(arg0) {
        return outer1_6(arg0, true);
      },
      getText() {
        return outer1_2.current;
      },
      isFocused() {
        const current = outer1_1.current;
        let isFocusedResult;
        if (null != current) {
          isFocusedResult = current.isFocused();
        }
        return null != isFocusedResult && isFocusedResult;
      },
      measure(arg0) {
        const current = outer1_1.current;
        let measureResult;
        if (null != current) {
          measureResult = current.measure(arg0);
        }
        return measureResult;
      },
      measureInWindow(arg0) {
        const current = outer1_1.current;
        let measureInWindowResult;
        if (null != current) {
          measureInWindowResult = current.measureInWindow(arg0);
        }
        return measureInWindowResult;
      },
      measureLayout(arg0, arg1, arg2) {
        const current = outer1_1.current;
        let measureLayoutResult;
        if (null != current) {
          measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
        }
        return measureLayoutResult;
      }
    }));
    const items1 = [first, callback];
    const memo = inputRef.useMemo(() => {
      const clearState = {
        hasValue: first,
        clear() {
          return outer1_6("", true);
        },
        setTextValue(text) {
          return outer1_6(text, true);
        }
      };
      return { clearProps: { isClearable: true }, clearState };
    }, items1);
    let obj = {};
    ({ clearProps, clearState } = memo);
    obj.clearButton = tags(outer1_2[12]).useInputClearButton(clearProps, clearState);
    obj.inputRef = ref;
    obj.inputValueRef = ref1;
    obj.inputUpdate = callback;
    obj.inputInitializedRef = ref2;
    return obj;
  })(accessibilityHint.ref, onChangeText);
  inputRef = tmp4.inputRef;
  inputValueRef = tmp4.inputValueRef;
  inputUpdate = tmp4.inputUpdate;
  const clearButton = tmp4.clearButton;
  closure_7 = inputRef.useRef({ start: 0, end: 0 });
  let obj1 = tags(5783);
  const keyboardBlurring = obj1.useKeyboardBlurring(inputRef);
  let obj2 = tags(3839);
  const focus = obj2.useFocus();
  focusProps = focus.focusProps;
  ({ onFocus: c9, onBlur: c10 } = focusOnAdd(5785)({ onFocus, onBlur }));
  ref = inputRef.useRef(null);
  const tmp9 = autoClearInputOnTagAdd(inputRef.useState(null), 2);
  closure_12 = tmp9[0];
  closure_13 = tmp9[1];
  const tmp10 = autoClearInputOnTagAdd(inputRef.useState(false), 2);
  closure_14 = tmp10[1];
  const tmp11 = focusOnAdd(5450)(tags);
  c15 = tmp11;
  ref1 = inputRef.useRef(tags);
  let items = [focusOnAdd, inputUpdate, ref1, tags, inputRef, inputValueRef, autoClearInputOnTagAdd];
  const layoutEffect = inputRef.useLayoutEffect(() => {
    if (ref1.current.length < tags.length) {
      if (focusOnAdd) {
        let current = inputRef.current;
        let isFocusedResult;
        if (null != current) {
          isFocusedResult = current.isFocused();
        }
        if (false === isFocusedResult) {
          const current2 = inputRef.current;
          if (null != current2) {
            current2.focus();
          }
        }
      }
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const current = outer1_11.current;
        let scrollToEndResult;
        if (null != current) {
          const obj = { animated: false };
          scrollToEndResult = current.scrollToEnd(obj);
        }
        return scrollToEndResult;
      }, 10);
      let tmp8 = autoClearInputOnTagAdd;
      if (autoClearInputOnTagAdd) {
        tmp8 = inputValueRef.current.length > 0;
      }
      if (tmp8) {
        inputUpdate("", true);
      }
    }
    ref1.current = tags;
  }, items);
  let items1 = [tmp11];
  const layoutEffect1 = inputRef.useLayoutEffect(() => {
    if (0 !== _undefined3.length) {
      const current = ref.current;
      if (null != current) {
        const obj = { animated: false };
        current.scrollToEnd(obj);
      }
    }
  }, items1);
  if (inActionSheet) {
    let BottomSheetScrollView = tags(5189).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = inputUpdate;
  }
  if (inActionSheet) {
    let BottomSheetTextInput = tags(8426).BottomSheetTextInput;
  } else {
    BottomSheetTextInput = focusOnAdd(8427);
  }
  const result1 = 33 * bound;
  const tmp7 = focusOnAdd(5785)({ onFocus, onBlur });
  [tmp23, c17] = autoClearInputOnTagAdd(inputRef.useState(0), 2);
  callback = inputRef.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (null == placeholder) {
    let intl = tags(1212).intl;
    placeholder = intl.string(tags(1212).t["5h0QOP"]);
  }
  if (null == accessibilityLabel) {
    const intl2 = tags(1212).intl;
    accessibilityLabel = intl2.string(tags(1212).t["5h0QOP"]);
  }
  obj = { horizontal: flag, leadingFade: flag2, onScroll };
  let obj4 = (function useLeadingFade(leadingFade) {
    let horizontal;
    let onScroll;
    ({ horizontal, onScroll } = leadingFade);
    horizontal = undefined;
    let sharedValue;
    let animatedStyle;
    let tmp = callback3();
    const focusOnAdd = tmp;
    if (horizontal) {
      horizontal = leadingFade.leadingFade;
    }
    let obj = tags(outer1_2[7]);
    sharedValue = obj.useSharedValue(false);
    let items = [horizontal, onScroll, sharedValue];
    const callback = inputRef.useCallback((nativeEvent) => {
      if (horizontal) {
        const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.x > 1);
      }
      if (null != onScroll) {
        onScroll(nativeEvent);
      }
    }, items);
    const fn = function s() {
      const obj = {};
      let num = 1;
      if (sharedValue.get()) {
        num = 0;
      }
      obj.opacity = tags(outer2_2[8]).withSpring(num, tags(outer2_2[9]).springStandard, "animate-always");
      return obj;
    };
    obj = { withSpring: tags(outer1_2[8]).withSpring, scrolled: sharedValue, springStandard: tags(outer1_2[9]).springStandard };
    fn.__closure = obj;
    fn.__workletHash = 11561232362008;
    fn.__initData = c15;
    animatedStyle = tags(outer1_2[7]).useAnimatedStyle(fn);
    let items1 = [horizontal, tmp, animatedStyle];
    let tmp6 = horizontal;
    const callback1 = inputRef.useCallback((children) => {
      let tmp = children;
      if (horizontal) {
        let obj = { style: tmp.fill, androidRenderingMode: "software" };
        obj = { style: tmp.mask };
        obj = { style: tmp.leadingFade };
        const obj1 = { start: ref, end: closure_12, colors: closure_13, style: absoluteFill.absoluteFill };
        const items = [focusProps(focusOnAdd(outer2_2[11]), obj1), ];
        const obj2 = {};
        const items1 = [tmp.leadingCover, animatedStyle];
        obj2.style = items1;
        items[1] = focusProps(focusOnAdd(outer2_2[7]).View, obj2);
        obj.children = items;
        const items2 = [callback(inputValueRef, obj), ];
        const obj3 = { style: tmp.maskRemainder };
        items2[1] = focusProps(inputValueRef, obj3);
        obj.children = items2;
        obj.maskElement = callback(inputValueRef, obj);
        obj.children = children;
        tmp = focusProps(focusOnAdd(outer2_2[10]), obj);
        const tmp5 = focusOnAdd(outer2_2[10]);
      }
      return tmp;
    }, items1);
    if (!horizontal) {
      tmp6 = null != onScroll;
    }
    obj = {};
    let tmp8;
    if (tmp6) {
      tmp8 = callback;
    }
    obj.onScroll = tmp8;
    let num;
    if (tmp6) {
      num = 16;
    }
    obj.scrollEventThrottle = num;
    let fill;
    if (horizontal) {
      fill = tmp.fill;
    }
    obj.scrollerStyle = fill;
    obj.wrap = callback1;
    return obj;
  })(obj);
  obj = { style: items2 };
  obj1 = { maxHeight: 3 * result1 };
  items2 = [obj1, obj4.scrollerStyle];
  const items3 = [tmp.scrollViewContent, ];
  let prop;
  if (flag) {
    prop = tmp.horizontalScrollViewContent;
  }
  items3[1] = prop;
  obj.contentContainerStyle = items3;
  obj.ref = ref;
  obj.bounces = false;
  obj.onScroll = obj4.onScroll;
  let tmp32;
  if (flag) {
    tmp32 = callback;
  }
  obj.onLayout = tmp32;
  obj.scrollEventThrottle = obj4.scrollEventThrottle;
  obj.horizontal = flag;
  obj.snapToInterval = result1;
  obj.overScrollMode = "never";
  obj.keyboardShouldPersistTaps = "handled";
  obj2 = {};
  const items4 = [tmp.inputInner, ];
  let horizontalInputInner = flag;
  if (flag) {
    horizontalInputInner = tmp.horizontalInputInner;
  }
  items4[1] = horizontalInputInner;
  obj2.style = items4;
  const items5 = [
    tags.map((id) => {
      const tags = id;
      let closure_1 = arg1;
      return focusProps(tags(outer1_2[23]).TagListInputTagComponent, {
        tag: id,
        selected: id.id === closure_12,
        onPress(arg0) {
          if ("select" === arg0) {
            if (outer1_12 !== id.id) {
              outer1_13(tmp6.id);
            }
            const current = outer1_4.current;
            if (null != current) {
              current.focus();
            }
            outer1_14(true);
            const current2 = outer1_4.current;
            if (null != current2) {
              current2.setSelection(0, 0);
            }
            outer1_7.current = { start: 0, end: 0 };
          } else if (null != outer1_2) {
            const tmp3 = outer1_2(closure_1);
          }
          return tmp3;
        },
        start: 0 === arg1,
        end: arg1 === tags.length - 1
      }, arg1);
    }),

  ];
  let obj3 = { ref: inputRef, accessibilityHint: accessibilityHint.accessibilityHint, accessibilityRole: "search" };
  if (tmp4.inputInitializedRef.current) {
    defaultValue = inputValueRef.current;
  }
  obj3.defaultValue = defaultValue;
  const items6 = [tmp.searchInput, , ];
  let horizontalSearchInput = flag;
  if (flag) {
    horizontalSearchInput = tmp.horizontalSearchInput;
  }
  items6[1] = horizontalSearchInput;
  let tmp36;
  if (flag) {
    if (tmp25) {
      obj4 = { maxWidth: tmp23 - 16 };
      tmp36 = obj4;
    }
  }
  items6[2] = tmp36;
  obj3.style = items6;
  obj3.onChangeText = inputUpdate;
  obj3.onKeyPress = function onKeyPress(nativeEvent) {
    callback3(false);
    let tmp3 = 0 === closure_7.current.start;
    if (tmp3) {
      tmp3 = 0 === closure_7.current.end;
    }
    if ("Backspace" === nativeEvent.nativeEvent.key) {
      if (null != closure_12) {
        const findIndexResult = tags.findIndex((id) => id.id === outer1_12);
        if (findIndexResult > -1) {
          if (null != callback) {
            callback(findIndexResult);
          }
        }
        callback2(null);
      }
    }
    if ("Backspace" === nativeEvent.nativeEvent.key) {
      if (tmp3) {
        if (0 !== tags.length) {
          callback2(tags[tags.length - 1].id);
          callback3(true);
          const AccessibilityAnnouncer = tags(outer1_2[24]).AccessibilityAnnouncer;
          const intl = tags(outer1_2[22]).intl;
          let obj = { text: tags[tags.length - 1].text };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(tags(outer1_2[22]).t.QymItZ, obj));
        }
      }
    }
    if (null != closure_12) {
      callback2(null);
    } else {
      let tmp8 = null != closure_7.current;
      if (tmp8) {
        tmp8 = closure_7.current.start === closure_7.current.end;
      }
      if (tmp8) {
        tmp8 = closure_7.current.start === inputValueRef.current.length;
      }
      if (tmp8) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          const current = outer1_11.current;
          let scrollToEndResult;
          if (null != current) {
            const obj = { animated: false };
            scrollToEndResult = current.scrollToEnd(obj);
          }
          return scrollToEndResult;
        }, 10);
      }
    }
  };
  obj3.onFocus = function onFocus(arg0) {
    focusProps.onFocus();
    if (null != _undefined) {
      _undefined(arg0);
    }
  };
  obj3.onBlur = function onBlur(arg0) {
    focusProps.onBlur();
    if (null != _undefined2) {
      _undefined2(arg0);
    }
  };
  obj3.onPressIn = function onPressIn() {
    callback3(false);
    callback2(null);
  };
  obj3.autoCapitalize = "none";
  obj3.autoCorrect = false;
  obj3["aria-label"] = accessibilityLabel;
  let tmp37;
  if (0 === tags.length) {
    if (tmp25) {
      tmp37 = placeholder;
    }
  }
  obj3.placeholder = tmp37;
  obj3.placeholderTextColor = tmp.placeholder.color;
  obj3.autoFocus = autoFocus;
  obj3.returnKeyType = returnKeyType;
  obj3.accessibilityLabel = accessibilityLabel;
  obj3.caretHidden = tmp10[0];
  obj3.onSubmitEditing = onSubmitEditing;
  obj3.maxFontSizeMultiplier = 2;
  obj3.onSelectionChange = function onSelectionChange(nativeEvent) {
    const selection = nativeEvent.nativeEvent.selection;
    closure_7.current = selection;
    return selection;
  };
  items5[1] = focusProps(BottomSheetTextInput, obj3);
  obj2.children = items5;
  obj.children = c9(inputValueRef, obj2);
  const obj5 = { style: items7 };
  items7 = [{ minHeight: result, overflow: "hidden" }, style];
  const tmp22 = autoClearInputOnTagAdd(inputRef.useState(0), 2);
  const tmp30 = focusProps;
  const tmp33 = c9;
  const tmp34 = inputValueRef;
  const tmp35 = focusProps;
  const obj6 = { size: "sm", isDisabled: disabled, isFocused: focus.isFocused };
  if (null == icon) {
    const obj7 = { style: tmp.iconLeft, size: "xs", color: "interactive-text-default" };
    icon = focusProps(tags(5786).MagnifyingGlassIcon, obj7);
  }
  const items8 = [icon, obj4.wrap(focusProps(BottomSheetScrollView, obj)), ];
  if (null == footer) {
    let tmp45 = null;
    if (null != clearButton) {
      const obj8 = { style: tmp.iconContainer, children: clearButton };
      tmp45 = focusProps(inputValueRef, obj8);
    }
    footer = tmp45;
  }
  items8[2] = footer;
  obj6.children = items8;
  obj5.children = c9(tags(5780).InputFieldContainer, obj6);
  return focusProps(inputValueRef, obj5);
});
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/TagListInput/native/TagListInput.native.tsx");

export default memoResult;
