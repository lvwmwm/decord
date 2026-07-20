// Module ID: 13563
// Function ID: 102852
// Dependencies: []

// Module 13563
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const AppStates = arg1(dependencyMap[4]).AppStates;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let obj = { inputContainer: { translateY: 243, translateX: 119, scale: "sm", position: "control-secondary-text-default" }, input: {}, status: { 2080340735: "control-secondary-text-default", 2113895679: true, -2130739457: "/assets/modules/parent_tools/images", -2063629569: 185 } };
obj = { color: importDefault(dependencyMap[7]).unsafe_rawColors.RED_400 };
obj.error = obj;
obj.minHeightGuard = { minHeight: 20 };
let closure_12 = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const forwardRefResult = importAllResult.forwardRef((appState) => {
  let error;
  let resetLoginOnClose;
  let showActivityIndicator;
  let style;
  appState = appState.appState;
  const arg1 = appState;
  const handleSubmit = appState.handleSubmit;
  const importDefault = handleSubmit;
  ({ error, resetLoginOnClose } = appState);
  ({ style, showActivityIndicator } = appState);
  if (resetLoginOnClose === undefined) {
    resetLoginOnClose = true;
  }
  const dependencyMap = resetLoginOnClose;
  let callback;
  let importAllResult;
  let first1;
  let closure_6;
  let closure_7;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const tmp2 = callback(importAllResult.useState(""), 2);
  const first = tmp2[0];
  callback = first;
  importAllResult = tmp4;
  const tmp5 = callback(importAllResult.useState(null), 2);
  first1 = tmp5[0];
  closure_6 = tmp5[1];
  const items = [first1];
  callback = importAllResult.useCallback(() => {
    const string = appState(resetLoginOnClose[9]).getString();
    string.then((str) => {
      const trimmed = str.trim();
      let tmp = trimmed !== closure_5;
      if (tmp) {
        let isMatch = 6 === trimmed.length;
        if (isMatch) {
          isMatch = /^\d+$/.test(trimmed);
          const obj = /^\d+$/;
        }
        if (!isMatch) {
          let isMatch1 = 8 === trimmed.length;
          if (isMatch1) {
            isMatch1 = /^[a-z0-9]+$/i.test(trimmed);
            const obj2 = /^[a-z0-9]+$/i;
          }
          isMatch = isMatch1;
        }
        tmp = isMatch;
      }
      if (tmp) {
        callback(trimmed);
        callback2(trimmed);
      }
    });
  }, items);
  closure_7 = callback;
  importDefault(dependencyMap[10])(() => {
    callback();
    return () => {
      if (authenticated.isAuthenticated()) {
        const string = callback(closure_2[9]).getString();
        string.then((arg0) => {
          let tmp = "" !== closure_3;
          if (tmp) {
            tmp = closure_3 === arg0;
          }
          if (tmp) {
            callback(closure_2[9]).copy("");
            const obj = callback(closure_2[9]);
          }
        });
        const obj2 = callback(closure_2[9]);
      } else {
        const obj = callback2(closure_2[11]);
        if (closure_2) {
          obj.loginReset();
        } else {
          obj.loginStatusReset();
        }
      }
    };
  });
  const items1 = [appState, callback];
  const effect = importAllResult.useEffect(() => {
    if (appState === constants.ACTIVE) {
      callback();
    }
  }, items1);
  const items2 = [first, handleSubmit];
  const effect1 = importAllResult.useEffect(() => {
    let isMatch = 6 === first.length;
    if (isMatch) {
      isMatch = /^\d+$/.test(first);
      const obj = /^\d+$/;
    }
    if (!isMatch) {
      isMatch = 8 === first.length;
    }
    if (isMatch) {
      handleSubmit(first);
    }
  }, items2);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    clear() {
      callback("");
    }
  }), []);
  obj = {};
  obj = { style: items3, textStyle: tmp.input, value: first, onChangeText: tmp4 };
  const items3 = [tmp.inputContainer, style];
  const intl = arg1(dependencyMap[13]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.yO4lAM);
  const items4 = [callback2(importDefault(dependencyMap[12]), obj), ];
  const obj1 = {};
  const items5 = [tmp.status, ];
  const tmp12 = closure_11;
  const tmp13 = closure_10;
  const tmp14 = callback2;
  const tmp15 = importDefault(dependencyMap[12]);
  const tmp16 = closure_6;
  items5[1] = Boolean(error) && tmp.minHeightGuard;
  obj1.style = items5;
  if (showActivityIndicator) {
    const obj6 = arg1(dependencyMap[8]);
    let unsafe_rawColors = importDefault(dependencyMap[7]).unsafe_rawColors;
    const isThemeDarkResult = arg1(dependencyMap[8]).isThemeDark(obj.useThemeContext().theme);
    unsafe_rawColors = first1;
    const obj2 = { color: arg1(dependencyMap[8]).isThemeDark(obj.useThemeContext().theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500 };
    callback2(first1, obj2);
    const tmp27 = arg1(dependencyMap[8]).isThemeDark(obj.useThemeContext().theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
  } else {
    let tmp18 = null;
    if (null != error) {
      const obj3 = { style: tmp.error, variant: "text-md/medium", children: error };
      tmp18 = callback2(arg1(dependencyMap[14]).Text, obj3);
    }
    obj1.children = tmp18;
    items4[1] = tmp14(tmp16, obj1);
    obj.children = items4;
    return tmp12(tmp13, obj);
  }
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/auth/native/components/MFACodeInput.tsx");

export default forwardRefResult;
