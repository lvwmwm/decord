// Module ID: 4490
// Function ID: 39577
// Dependencies: []

// Module 4490
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;

export default importDefaultResult.forwardRef(function SearchBar(autoCapitalize) {
  let hideNavigationBar;
  let obscureBackground;
  let onBlur;
  let onCancelButtonPress;
  let onChangeText;
  let onFocus;
  let onSearchButtonPress;
  const ref = importDefaultResult.useRef(null);
  const arg1 = ref;
  const imperativeHandle = importDefaultResult.useImperativeHandle(arg1, () => ({
    blur() {
      callback((arg0) => {
        const Commands = callback(closure_2[4]).Commands;
        return Commands.blur(arg0);
      });
    },
    focus() {
      callback((arg0) => {
        const Commands = callback(closure_2[4]).Commands;
        return Commands.focus(arg0);
      });
    },
    toggleCancelButton(arg0) {
      callback((arg0) => {
        const Commands = arg0(closure_2[4]).Commands;
        return Commands.toggleCancelButton(arg0, arg0);
      });
    },
    clearText() {
      callback((arg0) => {
        const Commands = callback(closure_2[4]).Commands;
        return Commands.clearText(arg0);
      });
    },
    setText(arg0) {
      callback((arg0) => {
        const Commands = arg0(closure_2[4]).Commands;
        return Commands.setText(arg0, arg0);
      });
    },
    cancelSearch() {
      callback((arg0) => {
        const Commands = callback(closure_2[4]).Commands;
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
  if (arg1(dependencyMap[5]).isSearchBarAvailableForCurrentPlatform) {
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
    const tmp12 = importDefault(dependencyMap[4]);
    obj.obscureBackground = arg1(dependencyMap[5]).parseBooleanToOptionalBooleanNativeProp(obscureBackground);
    const obj4 = arg1(dependencyMap[5]);
    obj.hideNavigationBar = arg1(dependencyMap[5]).parseBooleanToOptionalBooleanNativeProp(hideNavigationBar);
    obj.onSearchFocus = onFocus;
    obj.onSearchBlur = onBlur;
    obj.onSearchButtonPress = onSearchButtonPress;
    obj.onCancelButtonPress = onCancelButtonPress;
    obj.onChangeText = onChangeText;
    return <tmp12 {...Object.assign(obj, tmp8, obj)} />;
  } else {
    const _console = console;
    console.warn("Importing SearchBar is only valid on iOS and Android devices.");
    return View;
  }
});
