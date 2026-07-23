// Module ID: 416
// Function ID: 5838
// Name: InternalTextInput
// Dependencies: [29, 57, 31, 33, 144, 143, 48, 325, 262, 292, 147, 44, 289, 114, 253]

// Module 416 (InternalTextInput)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import closure_9 from "result";
import result from "result";
import { jsx } from "jsxProd";
import { default as Commands } from "Commands";
import { Commands } from "Commands";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
function InternalTextInput(props) {
  let Commands;
  let accessibilityState;
  let accessible;
  let caretHidden;
  let Commands;
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
  let tmp7 = callback3(null);
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
  const tmp10 = hitSlop(callback4(0), 2);
  let first = tmp10[0];
  let closure_4 = tmp10[1];
  obj = { props, inputRef: tmp7, mostRecentEventCount: first, selection: tmp8, text: defaultValue, viewCommands: Commands };
  let tmp6 = editable(props, closure_2);
  ({ setLastNativeText: Commands, setLastNativeSelection: Commands } = (function useTextInputStateSynchronization(props) {
    const iter = props.props;
    const mostRecentEventCount = props.mostRecentEventCount;
    const selection = props.selection;
    const inputRef = props.inputRef;
    const text = props.text;
    const viewCommands = props.viewCommands;
    let tmp = hitSlop(outer1_14(iter.value), 2);
    const first = tmp[0];
    const setLastNativeText = tmp[1];
    const tmp4 = hitSlop(outer1_14({ selection: { start: -1, end: -1 }, mostRecentEventCount }), 2);
    const setLastNativeSelection = tmp4[1];
    const selection2 = tmp4[0].selection;
    const items = [mostRecentEventCount, inputRef, , , , , , , ];
    ({ value: arr[2], defaultValue: arr[3] } = iter);
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
        viewCommands.setTextAndSelection(current, mostRecentEventCount, closure_4, num2, num);
        const tmp19 = viewCommands;
      }
    }, items);
    return { setLastNativeText, setLastNativeSelection };
  })(obj));
  onPressOut(() => {
    const current = tmp7.current;
    if (null != current) {
      props(tmp7[5]).registerInput(current);
      return () => {
        current(143).unregisterInput(current);
        const obj = current(143);
        if (obj2.currentlyFocusedInput() === current) {
          current(48)(current).blur();
          const obj3 = current(48)(current);
        }
      };
    }
  }, []);
  let items = [first, Commands];
  const tmp12 = (function useTextInputStateSynchronization(props) {
    const iter = props.props;
    const mostRecentEventCount = props.mostRecentEventCount;
    const selection = props.selection;
    const inputRef = props.inputRef;
    const text = props.text;
    const viewCommands = props.viewCommands;
    let tmp = hitSlop(outer1_14(iter.value), 2);
    const first = tmp[0];
    const setLastNativeText = tmp[1];
    const tmp4 = hitSlop(outer1_14({ selection: { start: -1, end: -1 }, mostRecentEventCount }), 2);
    const setLastNativeSelection = tmp4[1];
    const selection2 = tmp4[0].selection;
    const items = [mostRecentEventCount, inputRef, , , , , , , ];
    ({ value: arr[2], defaultValue: arr[3] } = iter);
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
        viewCommands.setTextAndSelection(current, mostRecentEventCount, closure_4, num2, num);
        const tmp19 = viewCommands;
      }
    }, items);
    return { setLastNativeText, setLastNativeSelection };
  })(obj);
  const multiline2 = props.multiline;
  let tmp16 = null != multiline2;
  const tmp14 = onPressIn((current) => {
    closure_1.current = current;
    if (null != current) {
      const _Object = Object;
      const obj = {
        clear() {
            if (null != outer1_1.current) {
              outer1_2.setTextAndSelection(outer1_1.current, outer1_3, "", 0, 0);
            }
          },
        isFocused() {
            return callback(table[5]).currentlyFocusedInput() === outer1_1.current;
          },
        getNativeRef() {
            return outer1_1.current;
          },
        setSelection(closure_0, arg1) {
            if (null != outer1_1.current) {
              outer1_2.setTextAndSelection(outer1_1.current, outer1_3, null, closure_0, arg1);
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
  editable = props.editable;
  hitSlop = props.hitSlop;
  const onPress = props.onPress;
  onPressIn = props.onPressIn;
  onPressOut = props.onPressOut;
  const items1 = [editable, hitSlop, onPress, onPressIn, onPressOut, ];
  ({ rejectResponderTermination: arr2[5], accessible, caretHidden } = props);
  const tmp15 = importDefault(325)(onPressIn((current) => {
    closure_1.current = current;
    if (null != current) {
      const _Object = Object;
      const obj = {
        clear() {
            if (null != outer1_1.current) {
              outer1_2.setTextAndSelection(outer1_1.current, outer1_3, "", 0, 0);
            }
          },
        isFocused() {
            return callback(table[5]).currentlyFocusedInput() === outer1_1.current;
          },
        getNativeRef() {
            return outer1_1.current;
          },
        setSelection(closure_0, arg1) {
            if (null != outer1_1.current) {
              outer1_2.setTextAndSelection(outer1_1.current, outer1_3, null, closure_0, arg1);
            }
          }
      };
      const merged = Object.assign(current, obj);
    }
  }, items), props.forwardedRef);
  if (importDefault(262).isTesting) {
    caretHidden = true;
  }
  let tmp19 = importDefault(292)(callback2(() => ({
    hitSlop,
    onPress(arg0) {
      if (null != outer1_9) {
        outer1_9(arg0);
      }
      let tmp4 = false !== outer1_7;
      if (tmp4) {
        tmp4 = null != outer1_1.current;
      }
      if (tmp4) {
        const current = outer1_1.current;
        current.focus();
      }
    },
    onPressIn,
    onPressOut,
    cancelable: null
  }), items1));
  ({ onBlur, onFocus } = tmp19);
  const tmp18 = callback2(() => ({
    hitSlop,
    onPress(arg0) {
      if (null != outer1_9) {
        outer1_9(arg0);
      }
      let tmp4 = false !== outer1_7;
      if (tmp4) {
        tmp4 = null != outer1_1.current;
      }
      if (tmp4) {
        const current = outer1_1.current;
        current.focus();
      }
    },
    onPressIn,
    onPressOut,
    cancelable: null
  }), items1);
  let prop;
  if (null != props) {
    prop = props["aria-label"];
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
  const tmp30 = importDefault(147)(props.style);
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
      obj2.textAlignVertical = table4[tmp30.verticalAlign];
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
    prop1 = props["aria-labelledby"];
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
  const Children = onPress.Children;
  const countResult = Children.count(children);
  let tmp41 = null != props.value;
  const tmp20 = editable(tmp19, first);
  tmp23 = null == accessibilityState && null == tmp && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp5;
  const tmp36 = props.autoCapitalize || "sentences";
  if (tmp41) {
    tmp41 = countResult;
  }
  importDefault(44)(!tmp41, "Cannot specify both value and children.");
  let tmp43 = children;
  if (countResult > 1) {
    let obj3 = { children };
    tmp43 = jsx(importDefault(289), { children });
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
    props(tmp7[5]).blurInput(tmp7.current);
    if (props.onBlur) {
      props.onBlur(arg0);
    }
  };
  obj6.onChange = function _onChange(_pending, self) {
    const text = _pending.nativeEvent.text;
    if (props.onChange) {
      props.onChange(_pending);
    }
    if (props.onChangeText) {
      props.onChangeText(text);
    }
    if (null != tmp7.current) {
      callback2(text);
      callback(_pending.nativeEvent.eventCount);
      tmp7 = callback;
    }
  };
  obj6.onFocus = function _onFocus(arg0) {
    props(tmp7[5]).focusInput(tmp7.current);
    if (props.onFocus) {
      props.onFocus(arg0);
    }
  };
  obj6.onScroll = function _onScroll(arg0) {
    if (props.onScroll) {
      props.onScroll(arg0);
    }
  };
  obj6.onSelectionChange = function _onSelectionChange(nativeEvent) {
    if (props.onSelectionChange) {
      props.onSelectionChange(nativeEvent);
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
  children = <Commands {...Object.assign({ ref: tmp15 }, tmp6, obj4, tmp20, obj6)} />;
  return jsx(importDefault(114), { value: true, children });
}
let closure_2 = ["aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-selected", "accessibilityState", "id", "tabIndex", "selection", "selectionColor", "selectionHandleColor", "cursorColor"];
let closure_3 = ["onBlur", "onFocus"];
let closure_4 = ["ref", "allowFontScaling", "rejectResponderTermination", "underlineColorAndroid", "autoComplete", "textContentType", "readOnly", "editable", "enterKeyHint", "returnKeyType", "inputMode", "showSoftInputOnFocus", "keyboardType"];
({ useCallback: closure_10, useLayoutEffect: closure_11, useMemo: closure_12, useRef: closure_13, useState: closure_14 } = result);
let closure_16 = { enter: "default", done: "done", go: "go", next: "next", previous: "previous", search: "search", send: "send" };
let closure_17 = { none: "default", text: "default", decimal: "decimal-pad", numeric: "number-pad", tel: "phone-pad", search: "default", email: "email-address", url: "url" };
let closure_18 = { "address-line1": "postal-address-region", "address-line2": "postal-address-locality", bday: "birthdate-full", "bday-day": "birthdate-day", "bday-month": "birthdate-month", "bday-year": "birthdate-year", "cc-csc": "cc-csc", "cc-exp": "cc-exp", "cc-exp-month": "cc-exp-month", "cc-exp-year": "cc-exp-year", "cc-number": "cc-number", country: "postal-address-country", "current-password": "password", email: "email", "honorific-prefix": "name-prefix", "honorific-suffix": "name-suffix", name: "name", "additional-name": "name-middle", "family-name": "name-family", "given-name": "name-given", "new-password": "password-new", off: "off", "one-time-code": "sms-otp", "postal-code": "postal-code", sex: "gender", "street-address": "street-address", tel: "tel", "tel-country-code": "tel-country-code", "tel-national": "tel-national", username: "username" };
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
    tmp3 = _objectWithoutProperties(global, InternalTextInput);
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
let obj = { currentlyFocusedInput: require("focusInput").currentlyFocusedInput, currentlyFocusedField: require("focusInput").currentlyFocusedField, focusTextInput: require("focusInput").focusTextInput, blurTextInput: require("focusInput").blurTextInput };
TextInput.State = obj;
obj = require("setStyleAttributePreprocessor").create({ multilineDefault: { paddingTop: 5 } });
let closure_19 = { auto: "auto", top: "top", bottom: "bottom", middle: "center" };

export default TextInput;
