// Module ID: 8418
// Function ID: 67061
// Dependencies: []

// Module 8418
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6, StyleSheet: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[4]).createStyles(() => {
  let obj = {};
  obj = { color: importDefault(dependencyMap[5]).colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
  obj.placeholder = obj;
  obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
  obj.iconContainer = obj;
  obj.iconLeft = { marginLeft: importDefault(dependencyMap[5]).space.PX_12 };
  obj.scrollViewContent = { paddingVertical: 5 };
  obj.horizontalScrollViewContent = { flexGrow: 1 };
  const obj1 = { marginLeft: importDefault(dependencyMap[5]).space.PX_12 };
  obj.inputInner = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_4 };
  obj.horizontalInputInner = { flexWrap: "nowrap" };
  const obj3 = { flex: 1, minHeight: importDefault(dependencyMap[5]).space.PX_24, minWidth: importDefault(dependencyMap[5]).space.PX_48, color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT };
  const merged = Object.assign(arg1(dependencyMap[6]).TextStyleSheet.text-sm/medium);
  obj3["paddingVertical"] = 0;
  obj3["marginVertical"] = 2;
  obj.searchInput = obj3;
  const obj2 = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_4 };
  obj.horizontalSearchInput = { minWidth: importDefault(dependencyMap[5]).space.PX_64 };
  return obj;
});
let closure_11 = { max: false, guildId: false };
let closure_12 = { max: 3211264, guildId: 2042617856 };
let closure_13 = [];
const obj2 = arg1(dependencyMap[4]);
let closure_14 = arg1(dependencyMap[4]).createStyles(() => {
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
  obj.maskRemainder = { "Bool(false)": false, "Bool(false)": false };
  return obj;
});
let closure_15 = { code: "function TagListInputNativeTsx1(){const{withSpring,scrolled,springStandard}=this.__closure;return{opacity:withSpring(scrolled.get()?0:1,springStandard,'animate-always')};}" };
const obj3 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function TagListInput(accessibilityHint) {
  let accessibilityLabel;
  let autoClearInputOnTagAdd;
  let autoFocus;
  let defaultValue;
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
  const tags = accessibilityHint.tags;
  const arg1 = tags;
  let flag = accessibilityHint.horizontal;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, focusOnAdd } = accessibilityHint);
  if (focusOnAdd === undefined) {
    focusOnAdd = true;
  }
  const importDefault = focusOnAdd;
  ({ inActionSheet, onRemove: closure_2, autoClearInputOnTagAdd, onSubmitEditing, autoFocus } = accessibilityHint);
  if (autoClearInputOnTagAdd === undefined) {
    autoClearInputOnTagAdd = true;
  }
  let callback = autoClearInputOnTagAdd;
  let flag2 = accessibilityHint.leadingFade;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let importAllResult;
  let inputValueRef;
  let inputUpdate;
  let closure_7;
  let focusProps;
  let closure_9;
  let callback2;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let ref1;
  let closure_17;
  const tmp = callback2();
  let obj = arg1(dependencyMap[13]);
  const bound = Math.min(2, obj.useFontScale());
  const result = arg1(dependencyMap[14]).InputHeights.MD * bound;
  const tmp4 = function useTagListInputState(ref, onChangeText) {
    let clearProps;
    let clearState;
    const tags = onChangeText;
    ref = inputRef.useRef(null);
    const focusOnAdd = ref;
    const ref1 = inputRef.useRef("");
    const ref2 = inputRef.useRef(false);
    const autoClearInputOnTagAdd = ref2;
    const tmp4 = autoClearInputOnTagAdd(inputRef.useState(false), 2);
    const first = tmp4[0];
    const inputRef = first;
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
      if (null != arg1) {
        arg1(current);
      }
      if (flag) {
        current = ref.current;
        if (null != current) {
          const obj = { text: current };
          current.setNativeProps(obj);
        }
      }
    }, items);
    const inputUpdate = callback;
    const imperativeHandle = inputRef.useImperativeHandle(ref, () => ({
      blur() {
        const current = closure_1.current;
        let blurResult;
        if (null != current) {
          blurResult = current.blur();
        }
        return blurResult;
      },
      focus() {
        const current = closure_1.current;
        let focusResult;
        if (null != current) {
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
        const current = closure_1.current;
        let isFocusedResult;
        if (null != current) {
          isFocusedResult = current.isFocused();
        }
        return null != isFocusedResult && isFocusedResult;
      },
      measure(arg0) {
        const current = closure_1.current;
        let measureResult;
        if (null != current) {
          measureResult = current.measure(arg0);
        }
        return measureResult;
      },
      measureInWindow(arg0) {
        const current = closure_1.current;
        let measureInWindowResult;
        if (null != current) {
          measureInWindowResult = current.measureInWindow(arg0);
        }
        return measureInWindowResult;
      },
      measureLayout(arg0, arg1, arg2) {
        const current = closure_1.current;
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
          return callback("", true);
        },
        setTextValue(text) {
          return callback(text, true);
        }
      };
      return { clearProps: { isClearable: true }, clearState };
    }, items1);
    const obj = {};
    ({ clearProps, clearState } = memo);
    obj.clearButton = tags(ref1[12]).useInputClearButton(clearProps, clearState);
    obj.inputRef = ref;
    obj.inputValueRef = ref1;
    obj.inputUpdate = callback;
    obj.inputInitializedRef = ref2;
    return obj;
  }(accessibilityHint.ref, onChangeText);
  const inputRef = tmp4.inputRef;
  importAllResult = inputRef;
  inputValueRef = tmp4.inputValueRef;
  inputUpdate = tmp4.inputUpdate;
  const clearButton = tmp4.clearButton;
  closure_7 = importAllResult.useRef({ 0: -536870861, 0: -299892737 });
  let obj1 = arg1(dependencyMap[15]);
  const keyboardBlurring = obj1.useKeyboardBlurring(inputRef);
  let obj2 = arg1(dependencyMap[16]);
  const focus = obj2.useFocus();
  focusProps = focus.focusProps;
  ({ onFocus: closure_9, onBlur: closure_10 } = importDefault(dependencyMap[17])({ onFocus, onBlur }));
  const ref = importAllResult.useRef(null);
  closure_11 = ref;
  const tmp9 = callback(importAllResult.useState(null), 2);
  closure_12 = tmp9[0];
  closure_13 = tmp9[1];
  const tmp10 = callback(importAllResult.useState(false), 2);
  closure_14 = tmp10[1];
  const tmp11 = importDefault(dependencyMap[18])(tags);
  closure_15 = tmp11;
  ref1 = importAllResult.useRef(tags);
  const items = [focusOnAdd, inputUpdate, ref1, tags, inputRef, inputValueRef, autoClearInputOnTagAdd];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (ref1.current.length < tags.length) {
      if (focusOnAdd) {
        const current = inputRef.current;
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
        const current = ref.current;
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
  const items1 = [tmp11];
  const layoutEffect1 = importAllResult.useLayoutEffect(() => {
    if (0 !== tmp11.length) {
      const current = ref.current;
      if (null != current) {
        const obj = { animated: false };
        current.scrollToEnd(obj);
      }
    }
  }, items1);
  if (inActionSheet) {
    let BottomSheetScrollView = arg1(dependencyMap[19]).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = inputUpdate;
  }
  if (inActionSheet) {
    let BottomSheetTextInput = arg1(dependencyMap[20]).BottomSheetTextInput;
  } else {
    BottomSheetTextInput = importDefault(dependencyMap[21]);
  }
  const result1 = 33 * bound;
  const tmp7 = importDefault(dependencyMap[17])({ onFocus, onBlur });
  [tmp23, closure_17] = callback(importAllResult.useState(0), 2);
  callback = importAllResult.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (null == placeholder) {
    const intl = arg1(dependencyMap[22]).intl;
    placeholder = intl.string(arg1(dependencyMap[22]).t.5h0QOP);
  }
  if (null == accessibilityLabel) {
    const intl2 = arg1(dependencyMap[22]).intl;
    accessibilityLabel = intl2.string(arg1(dependencyMap[22]).t.5h0QOP);
  }
  obj = { horizontal: flag, leadingFade: flag2, onScroll };
  let obj4 = function useLeadingFade(leadingFade) {
    let horizontal;
    let onScroll;
    ({ horizontal, onScroll } = leadingFade);
    const tags = onScroll;
    horizontal = undefined;
    let autoClearInputOnTagAdd;
    let inputRef;
    const tmp = callback3();
    const focusOnAdd = tmp;
    if (horizontal) {
      horizontal = leadingFade.leadingFade;
    }
    let obj = tags(horizontal[7]);
    const sharedValue = obj.useSharedValue(false);
    autoClearInputOnTagAdd = sharedValue;
    const items = [horizontal, onScroll, sharedValue];
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
      obj.opacity = onScroll(horizontal[8]).withSpring(num, onScroll(horizontal[9]).springStandard, "animate-always");
      return obj;
    };
    obj = { withSpring: tags(horizontal[8]).withSpring, scrolled: sharedValue, springStandard: tags(horizontal[9]).springStandard };
    fn.__closure = obj;
    fn.__workletHash = 11561232362008;
    fn.__initData = tmp11;
    const animatedStyle = tags(horizontal[7]).useAnimatedStyle(fn);
    inputRef = animatedStyle;
    const items1 = [horizontal, tmp, animatedStyle];
    let tmp6 = horizontal;
    const callback1 = inputRef.useCallback((children) => {
      let tmp = children;
      if (horizontal) {
        let obj = { style: tmp.fill, androidRenderingMode: "software" };
        obj = { style: tmp.mask };
        obj = { style: tmp.leadingFade };
        const obj1 = { start: closure_11, end: closure_12, colors: closure_13, style: absoluteFill.absoluteFill };
        const items = [callback(tmp(horizontal[11]), obj1), ];
        const obj2 = {};
        const items1 = [tmp.leadingCover, animatedStyle];
        obj2.style = items1;
        items[1] = callback(tmp(horizontal[7]).View, obj2);
        obj.children = items;
        const items2 = [callback2(closure_5, obj), ];
        const obj3 = { style: tmp.maskRemainder };
        items2[1] = callback(closure_5, obj3);
        obj.children = items2;
        obj.maskElement = callback2(closure_5, obj);
        obj.children = children;
        tmp = callback(tmp(horizontal[10]), obj);
        const tmp5 = tmp(horizontal[10]);
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
  }(obj);
  obj = { style: items2 };
  obj1 = { maxHeight: 3 * result1 };
  const items2 = [obj1, obj4.scrollerStyle];
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
      const focusOnAdd = arg1;
      return focusProps(tags(closure_2[23]).TagListInputTagComponent, {
        tag: id,
        selected: id.id === closure_12,
        onPress(arg0) {
          if ("select" === arg0) {
            if (closure_12 !== arg0.id) {
              callback2(tmp6.id);
            }
            const current = ref.current;
            if (null != current) {
              current.focus();
            }
            callback3(true);
            const current2 = ref.current;
            if (null != current2) {
              current2.setSelection(0, 0);
            }
            closure_7.current = { 0: -536870861, 0: -299892737 };
          } else if (null != callback) {
            const tmp3 = callback(arg1);
          }
          return tmp3;
        },
        start: 0 === arg1,
        end: arg1 === tags.length - 1
      }, arg1);
    }),

  ];
  const obj3 = { ref: inputRef, accessibilityHint: accessibilityHint.accessibilityHint, accessibilityRole: "search" };
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
        const findIndexResult = tags.findIndex((id) => id.id === closure_12);
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
          callback2(tags[closure_0.length - 1].id);
          callback3(true);
          const AccessibilityAnnouncer = tags(callback[24]).AccessibilityAnnouncer;
          const intl = tags(callback[22]).intl;
          const obj = { text: tags[closure_0.length - 1].text };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(tags(callback[22]).t.QymItZ, obj));
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
          const current = ref.current;
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
  obj3.aria-label = accessibilityLabel;
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
  obj.children = closure_9(inputValueRef, obj2);
  const obj5 = { style: items7 };
  const items7 = [{ minHeight: result, overflow: "hidden" }, style];
  const tmp22 = callback(importAllResult.useState(0), 2);
  const tmp30 = focusProps;
  const tmp33 = closure_9;
  const tmp34 = inputValueRef;
  const tmp35 = focusProps;
  const obj6 = { size: "sm", isDisabled: disabled, isFocused: focus.isFocused };
  if (null == icon) {
    const obj7 = { style: tmp.iconLeft };
    icon = focusProps(arg1(dependencyMap[26]).MagnifyingGlassIcon, obj7);
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
  obj5.children = closure_9(arg1(dependencyMap[25]).InputFieldContainer, obj6);
  return focusProps(inputValueRef, obj5);
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("design/components/TagListInput/native/TagListInput.native.tsx");

export default memoResult;
