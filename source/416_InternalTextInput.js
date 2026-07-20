// Module ID: 416
// Function ID: 5838
// Name: InternalTextInput
// Dependencies: []

// Module 416 (InternalTextInput)
function InternalTextInput(props) {
  let accessibilityState;
  let accessible;
  let caretHidden;
  let cursorColor;
  let end;
  let id;
  let onBlur;
  let onFocus;
  let selection;
  let selectionColor;
  let selectionHandleColor;
  let tabIndex;
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  const importDefault = props;
  ({ aria-busy: tmp, aria-checked: tmp2, aria-disabled: tmp3, aria-expanded: tmp4, aria-selected: tmp5, accessibilityState, id, tabIndex, selection, selectionColor, selectionHandleColor, cursorColor } = props);
  const tmp7 = callback4(null);
  const dependencyMap = tmp7;
  let tmp8 = null;
  if (null != selection) {
    let obj = {};
    ({ start: obj.start, end } = selection);
    if (null == end) {
      end = selection.start;
    }
    obj.end = end;
    tmp8 = obj;
  }
  if ("string" === typeof props.value) {
    let defaultValue = props.value;
  } else if ("string" === typeof props.defaultValue) {
    defaultValue = props.defaultValue;
  }
  if (!Commands) {
    const multiline = props.multiline;
  }
  let closure_2 = tmp9;
  const tmp10 = callback2(callback5(0), 2);
  const first = tmp10[0];
  let closure_3 = first;
  let closure_4 = tmp10[1];
  obj = { props, inputRef: tmp7, mostRecentEventCount: first, selection: tmp8, text: defaultValue, viewCommands: Commands };
  const tmp6 = callback(props, closure_2);
  ({ setLastNativeText: closure_5, setLastNativeSelection: closure_6 } = function useTextInputStateSynchronization(props) {
    props = iter;
    const mostRecentEventCount = props.mostRecentEventCount;
    const selection = props.selection;
    const inputRef = props.inputRef;
    let first = inputRef;
    const text = props.text;
    let closure_4 = text;
    const viewCommands = props.viewCommands;
    const tmp = hitSlop(callback4(props.props.value), 2);
    first = tmp[0];
    const setLastNativeText = tmp[1];
    const editable = setLastNativeText;
    const tmp4 = hitSlop(callback4({ selection: { 1726238916: false, 607091733: false }, mostRecentEventCount }), 2);
    const setLastNativeSelection = tmp4[1];
    const hitSlop = setLastNativeSelection;
    const selection2 = tmp4[0].selection;
    const onPress = selection2;
    const items = [mostRecentEventCount, inputRef, , , , , , , ];
    ({ value: arr[2], defaultValue: arr[3] } = props.props);
    items[4] = first;
    items[5] = selection;
    items[6] = selection2;
    items[7] = text;
    items[8] = viewCommands;
    onPressOut(() => {
      let obj = {};
      let tmp = first !== iter.value;
      if (tmp) {
        tmp = "string" === typeof iter.value;
      }
      if (tmp) {
        obj.text = iter.value;
        setLastNativeText(iter.value);
      }
      let tmp6 = selection;
      if (selection) {
        tmp6 = selection2;
      }
      if (tmp6) {
        let tmp9 = selection2.start !== selection.start;
        if (!tmp9) {
          tmp9 = selection2.end !== selection.end;
        }
        tmp6 = tmp9;
      }
      if (tmp6) {
        obj.selection = selection;
        obj = { selection, mostRecentEventCount };
        setLastNativeSelection(obj);
      }
      let tmp16 = 0 !== Object.keys(obj).length;
      if (tmp16) {
        tmp16 = null != inputRef.current;
      }
      if (tmp16) {
        const current = inputRef.current;
        let start;
        if (null != selection) {
          start = selection.start;
        }
        let num = -1;
        let num2 = -1;
        if (null != start) {
          num2 = start;
        }
        let end;
        if (null != selection) {
          end = selection.end;
        }
        if (null != end) {
          num = end;
        }
        viewCommands.setTextAndSelection(current, mostRecentEventCount, text, num2, num);
        const tmp19 = viewCommands;
      }
    }, items);
    return { setLastNativeText, setLastNativeSelection };
  }(obj));
  onPressOut(() => {
    const current = tmp7.current;
    const arg0 = current;
    if (null != current) {
      arg0(tmp7[5]).registerInput(current);
      return () => {
        current(closure_1[5]).unregisterInput(current);
        const obj = current(closure_1[5]);
        if (obj2.currentlyFocusedInput() === current) {
          current(closure_1[6])(current).blur();
          const obj3 = current(closure_1[6])(current);
        }
      };
    }
  }, []);
  const items = [first, Commands];
  const tmp12 = function useTextInputStateSynchronization(props) {
    props = iter;
    const mostRecentEventCount = props.mostRecentEventCount;
    const selection = props.selection;
    const inputRef = props.inputRef;
    let first = inputRef;
    const text = props.text;
    let closure_4 = text;
    const viewCommands = props.viewCommands;
    const tmp = hitSlop(callback4(props.props.value), 2);
    first = tmp[0];
    const setLastNativeText = tmp[1];
    const editable = setLastNativeText;
    const tmp4 = hitSlop(callback4({ selection: { 1726238916: false, 607091733: false }, mostRecentEventCount }), 2);
    const setLastNativeSelection = tmp4[1];
    const hitSlop = setLastNativeSelection;
    const selection2 = tmp4[0].selection;
    const onPress = selection2;
    const items = [mostRecentEventCount, inputRef, , , , , , , ];
    ({ value: arr[2], defaultValue: arr[3] } = props.props);
    items[4] = first;
    items[5] = selection;
    items[6] = selection2;
    items[7] = text;
    items[8] = viewCommands;
    onPressOut(() => {
      let obj = {};
      let tmp = first !== iter.value;
      if (tmp) {
        tmp = "string" === typeof iter.value;
      }
      if (tmp) {
        obj.text = iter.value;
        setLastNativeText(iter.value);
      }
      let tmp6 = selection;
      if (selection) {
        tmp6 = selection2;
      }
      if (tmp6) {
        let tmp9 = selection2.start !== selection.start;
        if (!tmp9) {
          tmp9 = selection2.end !== selection.end;
        }
        tmp6 = tmp9;
      }
      if (tmp6) {
        obj.selection = selection;
        obj = { selection, mostRecentEventCount };
        setLastNativeSelection(obj);
      }
      let tmp16 = 0 !== Object.keys(obj).length;
      if (tmp16) {
        tmp16 = null != inputRef.current;
      }
      if (tmp16) {
        const current = inputRef.current;
        let start;
        if (null != selection) {
          start = selection.start;
        }
        let num = -1;
        let num2 = -1;
        if (null != start) {
          num2 = start;
        }
        let end;
        if (null != selection) {
          end = selection.end;
        }
        if (null != end) {
          num = end;
        }
        viewCommands.setTextAndSelection(current, mostRecentEventCount, text, num2, num);
        const tmp19 = viewCommands;
      }
    }, items);
    return { setLastNativeText, setLastNativeSelection };
  }(obj);
  const multiline2 = props.multiline;
  let tmp16 = null != multiline2;
  const tmp14 = onPressIn((current) => {
    tmp7.current = current;
    if (null != current) {
      const _Object = Object;
      const obj = {
        clear() {
            if (null != closure_1.current) {
              store.setTextAndSelection(closure_1.current, closure_3, "", 0, 0);
            }
          },
        isFocused() {
            return callback(closure_1[5]).currentlyFocusedInput() === closure_1.current;
          },
        getNativeRef() {
            return closure_1.current;
          },
        setSelection(closure_0, arg1) {
            if (null != closure_1.current) {
              store.setTextAndSelection(closure_1.current, closure_3, null, closure_0, arg1);
            }
          }
      };
      const merged = Object.assign(current, obj);
    }
  }, items);
  if (tmp16) {
    tmp16 = multiline2;
  }
  if (null != props.submitBehavior) {
    if (tmp16) {
      let str3 = props.submitBehavior;
    } else {
      str3 = "blurAndSubmit";
    }
    let str = str3;
  } else {
    const blurOnSubmit = props.blurOnSubmit;
    if (tmp16) {
      let str2 = "newline";
      if (true === blurOnSubmit) {
        str2 = "blurAndSubmit";
      }
      str = str2;
    } else {
      str = "submit";
      if (false !== blurOnSubmit) {
        str = "blurAndSubmit";
      }
    }
  }
  let tmp17 = false !== props.focusable;
  const editable = props.editable;
  const callback = editable;
  const hitSlop = props.hitSlop;
  const callback2 = hitSlop;
  const onPress = props.onPress;
  const React = onPress;
  const onPressIn = props.onPressIn;
  const onPressOut = props.onPressOut;
  const items1 = [editable, hitSlop, onPress, onPressIn, onPressOut, ];
  ({ rejectResponderTermination: arr2[5], accessible, caretHidden } = props);
  const tmp15 = importDefault(dependencyMap[7])(onPressIn((current) => {
    tmp7.current = current;
    if (null != current) {
      const _Object = Object;
      const obj = {
        clear() {
            if (null != closure_1.current) {
              store.setTextAndSelection(closure_1.current, closure_3, "", 0, 0);
            }
          },
        isFocused() {
            return callback(closure_1[5]).currentlyFocusedInput() === closure_1.current;
          },
        getNativeRef() {
            return closure_1.current;
          },
        setSelection(closure_0, arg1) {
            if (null != closure_1.current) {
              store.setTextAndSelection(closure_1.current, closure_3, null, closure_0, arg1);
            }
          }
      };
      const merged = Object.assign(current, obj);
    }
  }, items), props.forwardedRef);
  if (importDefault(dependencyMap[8]).isTesting) {
    caretHidden = true;
  }
  const tmp19 = importDefault(dependencyMap[9])(callback3(() => ({
    hitSlop,
    onPress(arg0) {
      if (null != callback) {
        callback(arg0);
      }
      let tmp4 = false !== closure_7;
      if (tmp4) {
        tmp4 = null != ref.current;
      }
      if (tmp4) {
        const current = ref.current;
        current.focus();
      }
    },
    onPressIn,
    onPressOut,
    cancelable: null
  }), items1));
  ({ onBlur, onFocus } = tmp19);
  const tmp18 = callback3(() => ({
    hitSlop,
    onPress(arg0) {
      if (null != callback) {
        callback(arg0);
      }
      let tmp4 = false !== closure_7;
      if (tmp4) {
        tmp4 = null != ref.current;
      }
      if (tmp4) {
        const current = ref.current;
        current.focus();
      }
    },
    onPressIn,
    onPressOut,
    cancelable: null
  }), items1);
  let prop;
  if (null != props) {
    prop = props.aria-label;
  }
  if (null == prop) {
    let accessibilityLabel;
    if (null != props) {
      accessibilityLabel = props.accessibilityLabel;
    }
    prop = accessibilityLabel;
  }
  let tmp24;
  if (!tmp23) {
    obj = {};
    if (null == tmp) {
      let busy;
      if (null != accessibilityState) {
        busy = accessibilityState.busy;
      }
    }
    obj.busy = tmp;
    if (null == tmp2) {
      let checked;
      if (null != accessibilityState) {
        checked = accessibilityState.checked;
      }
    }
    obj.checked = tmp2;
    if (null == tmp3) {
      let disabled;
      if (null != accessibilityState) {
        disabled = accessibilityState.disabled;
      }
    }
    obj.disabled = tmp3;
    if (null == tmp4) {
      let expanded;
      if (null != accessibilityState) {
        expanded = accessibilityState.expanded;
      }
    }
    obj.expanded = tmp4;
    if (null == tmp5) {
      let selected;
      if (null != accessibilityState) {
        selected = accessibilityState.selected;
      }
    }
    obj.selected = tmp5;
    tmp24 = obj;
  }
  const style = props.style;
  const tmp30 = importDefault(dependencyMap[10])(props.style);
  let tmp31 = style;
  if (null != tmp30) {
    let fontWeight;
    if (null != tmp30) {
      fontWeight = tmp30.fontWeight;
    }
    let tmp33 = null;
    if ("number" === typeof fontWeight) {
      const obj1 = { fontWeight: tmp30.fontWeight.toString() };
      tmp33 = obj1;
      const str6 = tmp30.fontWeight;
    }
    let tmp34 = tmp33;
    if (null != tmp30.verticalAlign) {
      let obj2 = tmp33;
      if (!tmp33) {
        obj2 = {};
      }
      obj2.textAlignVertical = closure_19[tmp30.verticalAlign];
      obj2.verticalAlign = undefined;
      tmp34 = obj2;
    }
    tmp31 = style;
    if (null != tmp34) {
      const items2 = [style, tmp34];
      tmp31 = items2;
    }
  }
  let prop1;
  if (null != props) {
    prop1 = props.aria-labelledby;
  }
  if (null == prop1) {
    let prop2;
    if (null != props) {
      prop2 = props.accessibilityLabelledBy;
    }
    prop1 = prop2;
  }
  const placeholder = props.placeholder;
  let str7 = "";
  if (null != placeholder) {
    str7 = placeholder;
  }
  let children = props.children;
  const Children = React.Children;
  const countResult = Children.count(children);
  let tmp41 = null != props.value;
  const tmp20 = callback(tmp19, closure_3);
  const tmp23 = null == accessibilityState && null == tmp && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp5;
  const tmp36 = props.autoCapitalize || "sentences";
  if (tmp41) {
    tmp41 = countResult;
  }
  importDefault(dependencyMap[11])(!tmp41, "Cannot specify both value and children.");
  let tmp43 = children;
  if (countResult > 1) {
    const obj3 = { children };
    tmp43 = jsx(importDefault(dependencyMap[12]), obj3);
  }
  const obj4 = { selectionColor };
  if (undefined === selectionHandleColor) {
    selectionHandleColor = selectionColor;
  }
  obj4.selectionHandleColor = selectionHandleColor;
  if (undefined === cursorColor) {
    cursorColor = selectionColor;
  }
  obj4.cursorColor = cursorColor;
  const obj6 = { accessibilityLabel: prop, accessibilityLabelledBy: prop1, accessibilityState: tmp24, accessible: false !== accessible, acceptDragAndDropTypes: props.experimental_acceptDragAndDropTypes, autoCapitalize: tmp36, submitBehavior: str, caretHidden, children: tmp43, disableFullscreenUI: props.disableFullscreenUI };
  if (undefined !== tabIndex) {
    tmp17 = !tabIndex;
  }
  obj6.focusable = tmp17;
  obj6.mostRecentEventCount = first;
  if (null == id) {
    id = props.nativeID;
  }
  obj6.nativeID = id;
  let numberOfLines = props.rows;
  if (null == numberOfLines) {
    numberOfLines = props.numberOfLines;
  }
  obj6.numberOfLines = numberOfLines;
  obj6.onBlur = function _onBlur(arg0) {
    arg0(tmp7[5]).blurInput(tmp7.current);
    if (arg0.onBlur) {
      arg0.onBlur(arg0);
    }
  };
  obj6.onChange = function _onChange(_pending, self) {
    const text = _pending.nativeEvent.text;
    if (_pending.onChange) {
      _pending.onChange(_pending);
    }
    if (_pending.onChangeText) {
      _pending.onChangeText(text);
    }
    if (null != tmp7.current) {
      callback2(text);
      callback(_pending.nativeEvent.eventCount);
      const tmp7 = callback;
    }
  };
  obj6.onFocus = function _onFocus(arg0) {
    arg0(tmp7[5]).focusInput(tmp7.current);
    if (arg0.onFocus) {
      arg0.onFocus(arg0);
    }
  };
  obj6.onScroll = function _onScroll(arg0) {
    if (arg0.onScroll) {
      arg0.onScroll(arg0);
    }
  };
  obj6.onSelectionChange = function _onSelectionChange(nativeEvent) {
    if (nativeEvent.onSelectionChange) {
      nativeEvent.onSelectionChange(nativeEvent);
    }
    if (null != tmp7.current) {
      const obj = { selection: nativeEvent.nativeEvent.selection, mostRecentEventCount: first };
      callback3(obj);
    }
  };
  obj6.placeholder = str7;
  obj6.style = tmp31;
  obj6.text = defaultValue;
  obj6.textBreakStrategy = props.textBreakStrategy;
  children = <closure_5 {...Object.assign({ ref: tmp15 }, tmp6, obj4, tmp20, obj6)} />;
  return jsx(importDefault(dependencyMap[13]), { value: true, children });
}
let closure_2 = [true, true, true, true, true, true, true, true, true, true, true, true];
let closure_3 = ["isArray", null];
let closure_4 = [];
let closure_7 = importDefault(dependencyMap[0]);
let closure_8 = importDefault(dependencyMap[1]);
let closure_9 = importAll(dependencyMap[2]);
({ useCallback: closure_10, useLayoutEffect: closure_11, useMemo: closure_12, useRef: closure_13, useState: closure_14 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let closure_5 = arg1(dependencyMap[4]).default;
const Commands = arg1(dependencyMap[4]).Commands;
let closure_16 = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010891343279156388, "Null": 638804408114141300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001124773536172935, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008435802117404847, "Null": 4769338892706619600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017276524428576925, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014774461553601004 };
let closure_17 = {};
let closure_18 = {};
class TextInput {
  constructor(arg0) {
    allowFontScaling = global.allowFontScaling;
    tmp = undefined === allowFontScaling;
    if (!tmp) {
      tmp = allowFontScaling;
    }
    rejectResponderTermination = global.rejectResponderTermination;
    tmp2 = undefined === rejectResponderTermination || rejectResponderTermination;
    underlineColorAndroid = global.underlineColorAndroid;
    str = "transparent";
    if (undefined !== underlineColorAndroid) {
      str = underlineColorAndroid;
    }
    ({ autoComplete, readOnly, editable, enterKeyHint, returnKeyType, inputMode, showSoftInputOnFocus, keyboardType } = global);
    obj = {};
    obj.allowFontScaling = tmp;
    obj.rejectResponderTermination = tmp2;
    obj.underlineColorAndroid = str;
    tmp3 = closure_7(global, InternalTextInput);
    tmp4 = jsx;
    tmp5 = InternalTextInput;
    if (undefined !== readOnly) {
      editable = !readOnly;
    }
    obj.editable = editable;
    if (enterKeyHint) {
      tmp6 = Commands;
      returnKeyType = Commands[enterKeyHint];
    }
    obj.returnKeyType = returnKeyType;
    if (inputMode) {
      tmp7 = Commands;
      keyboardType = Commands[inputMode];
    }
    obj.keyboardType = keyboardType;
    if (null != inputMode) {
      str2 = "none";
      showSoftInputOnFocus = "none" !== inputMode;
    }
    obj.showSoftInputOnFocus = showSoftInputOnFocus;
    tmp8 = Commands[autoComplete];
    if (null != tmp8) {
      autoComplete = tmp8;
    }
    obj.autoComplete = autoComplete;
    obj.textContentType = global.textContentType;
    return tmp4(tmp5, Object.assign(obj, tmp3, { forwardedRef: global.ref }));
  }
}
TextInput.displayName = "TextInput";
let obj = { currentlyFocusedInput: importDefault(dependencyMap[5]).currentlyFocusedInput, currentlyFocusedField: importDefault(dependencyMap[5]).currentlyFocusedField, focusTextInput: importDefault(dependencyMap[5]).focusTextInput, blurTextInput: importDefault(dependencyMap[5]).blurTextInput };
TextInput.State = obj;
const tmp2 = arg1(dependencyMap[2]);
obj = importDefault(dependencyMap[14]).create({ multilineDefault: { paddingTop: 5 } });
let closure_19 = { "Bool(false)": "<string:2572484610>", "Bool(false)": "<string:1833947651>", "Bool(false)": "<string:1778620876>", "Bool(false)": "<string:385947321>" };

export default TextInput;
