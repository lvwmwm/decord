// Module ID: 4498
// Function ID: 39674
// Dependencies: [29, 31, 27, 33, 4499, 4490]

// Module 4498
import _objectWithoutProperties from "_objectWithoutProperties";
import importDefaultResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["obscureBackground", "hideNavigationBar", "onFocus", "onBlur", "onSearchButtonPress", "onCancelButtonPress", "onChangeText"];

export default importDefaultResult.forwardRef(function SearchBar(autoCapitalize) {
  let hideNavigationBar;
  let obscureBackground;
  let onBlur;
  let onCancelButtonPress;
  let onChangeText;
  let onFocus;
  let onSearchButtonPress;
  const ref = importDefaultResult.useRef(null);
  const imperativeHandle = importDefaultResult.useImperativeHandle(arg1, () => ({
    blur() {
      outer1_1((arg0) => {
        const Commands = ref(outer3_2[4]).Commands;
        return Commands.blur(arg0);
      });
    },
    focus() {
      outer1_1((arg0) => {
        const Commands = ref(outer3_2[4]).Commands;
        return Commands.focus(arg0);
      });
    },
    toggleCancelButton(arg0) {
      let closure_0 = arg0;
      outer1_1((arg0) => {
        const Commands = ref(outer3_2[4]).Commands;
        return Commands.toggleCancelButton(arg0, closure_0);
      });
    },
    clearText() {
      outer1_1((arg0) => {
        const Commands = ref(outer3_2[4]).Commands;
        return Commands.clearText(arg0);
      });
    },
    setText(arg0) {
      let closure_0 = arg0;
      outer1_1((arg0) => {
        const Commands = ref(outer3_2[4]).Commands;
        return Commands.setText(arg0, closure_0);
      });
    },
    cancelSearch() {
      outer1_1((arg0) => {
        const Commands = ref(outer3_2[4]).Commands;
        return Commands.cancelSearch(arg0);
      });
    }
  }));
  const items = [ref];
  const importDefault = importDefaultResult.useCallback((arg0) => {
    const current = ref.current;
    if (current) {
      arg0(current);
    } else {
      const _console = console;
      console.warn("Reference to native search bar component has not been updated yet");
    }
  }, items);
  if (ref(4490).isSearchBarAvailableForCurrentPlatform) {
    let obj = {};
    autoCapitalize = autoCapitalize.autoCapitalize;
    let str2 = "systemDefault";
    if (null != autoCapitalize) {
      str2 = autoCapitalize;
    }
    obj.autoCapitalize = str2;
    const merged = Object.assign({}, autoCapitalize, obj);
    ({ obscureBackground, hideNavigationBar, onFocus, onBlur, onSearchButtonPress, onCancelButtonPress, onChangeText } = merged);
    const _Object = Object;
    obj = { ref };
    obj = {};
    const tmp8 = callback(merged, closure_3);
    const tmp12 = importDefault(4499);
    obj.obscureBackground = ref(4490).parseBooleanToOptionalBooleanNativeProp(obscureBackground);
    const obj4 = ref(4490);
    obj.hideNavigationBar = ref(4490).parseBooleanToOptionalBooleanNativeProp(hideNavigationBar);
    obj.onSearchFocus = onFocus;
    obj.onSearchBlur = onBlur;
    obj.onSearchButtonPress = onSearchButtonPress;
    obj.onCancelButtonPress = onCancelButtonPress;
    obj.onChangeText = onChangeText;
    return <tmp12 {...Object.assign(obj, tmp8, obj)} />;
  } else {
    let _console = console;
    console.warn("Importing SearchBar is only valid on iOS and Android devices.");
    return View;
  }
});
