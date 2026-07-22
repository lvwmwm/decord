// Module ID: 9226
// Function ID: 72158
// Name: UserSettingsConfirmPasswordWrapped
// Dependencies: []
// Exports: UserSettingsConfirmPasswordWrapped

// Module 9226 (UserSettingsConfirmPasswordWrapped)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const UserSettingsSections = arg1(dependencyMap[5]).UserSettingsSections;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.background = obj;
obj.container = {};
obj.title = { textAlign: "center" };
obj.prompt = {};
obj.input = { marginTop: 24 };
obj1 = { borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj.redesignInput = obj1;
obj.button = { marginTop: 16 };
const tmp3 = arg1(dependencyMap[6]);
obj.hint = { color: importDefault(dependencyMap[8]).unsafe_rawColors.RED_400 };
let closure_12 = obj1.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  let hideUnverifiedBanner;
  let obj2;
  let parentLoading;
  let style;
  ({ onSubmit: closure_0, onSuccess: closure_1, onError: closure_2, parentLoading } = arg0);
  if (parentLoading === undefined) {
    parentLoading = false;
  }
  ({ hideUnverifiedBanner, style } = arg0);
  if (hideUnverifiedBanner === undefined) {
    hideUnverifiedBanner = false;
  }
  let closure_3;
  let callback;
  let React;
  function handleSubmit() {
    return _handleSubmit(...arguments);
  }
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback2(tmp);
    const _handleSubmit = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  const imperativeHandle = React.useImperativeHandle(arg1, () => ({}));
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback(React.useState(false), 2);
  let first = tmp4[0];
  closure_3 = tmp4[1];
  const tmp6 = callback(React.useState(""), 2);
  const first1 = tmp6[0];
  callback = first1;
  [obj2, closure_5] = callback(React.useState(null), 2);
  const effect = React.useEffect(() => {
    let obj = callback(closure_2[11]);
    obj = { destinationPane: constants.ACCOUNT_CONFIRM_PASSWORD };
    const result = obj.trackUserSettingsPaneViewed(obj);
  }, []);
  let tmp11Result = null;
  if (null != stateFromStores) {
    obj = {};
    const items1 = [tmp.background, style];
    obj.style = items1;
    let tmp13 = null;
    if (!hideUnverifiedBanner) {
      tmp13 = callback2(importDefault(dependencyMap[15]), {});
    }
    const items2 = [tmp13, ];
    obj = { style: tmp.container };
    const obj1 = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
    const intl = arg1(dependencyMap[14]).intl;
    obj1.children = intl.string(arg1(dependencyMap[14]).t.x+d9t3);
    const items3 = [callback2(arg1(dependencyMap[16]).Text, obj1), , , , ];
    obj2 = { style: tmp.prompt };
    const intl2 = arg1(dependencyMap[14]).intl;
    obj2.children = intl2.string(arg1(dependencyMap[14]).t.vaZmAx);
    items3[1] = callback2(arg1(dependencyMap[16]).Text, obj2);
    const obj3 = { 0: true, 9223372036854775807: true, 0: true, 0: true, 9223372036854775807: true, 9223372036854775807: true };
    ({ input: obj7.style, redesignInput: obj7.textStyle } = tmp);
    const intl3 = arg1(dependencyMap[14]).intl;
    obj3.label = intl3.string(arg1(dependencyMap[14]).t.CIGa+7);
    obj3.value = first1;
    obj3.onChangeText = tmp6[1];
    obj3.onSubmitEditing = handleSubmit;
    let fieldMessage;
    if (null != obj1) {
      fieldMessage = obj1.getFieldMessage("password");
    }
    obj3.error = fieldMessage;
    obj3.returnKeyType = "done";
    obj3.autoCapitalize = "none";
    obj3.autoFocus = true;
    items3[2] = callback2(importDefault(dependencyMap[17]), obj3);
    let tmp25 = null;
    if (null != obj1) {
      tmp25 = null;
      if (null == obj1.getFieldMessage("password")) {
        const obj4 = { style: tmp.hint, children: obj1.message };
        tmp25 = callback2(importDefault(dependencyMap[18]), obj4);
      }
    }
    items3[3] = tmp25;
    const obj5 = { style: tmp.button };
    const obj6 = {};
    const intl4 = arg1(dependencyMap[14]).intl;
    obj6.text = intl4.string(arg1(dependencyMap[14]).t.i4jeWR);
    obj6.onPress = handleSubmit;
    if (!first) {
      first = parentLoading;
    }
    obj6.loading = first;
    obj5.children = callback2(arg1(dependencyMap[19]).Button, obj6);
    items3[4] = callback2(_handleSubmit, obj5);
    obj.children = items3;
    items2[1] = closure_11(_handleSubmit, obj);
    obj.children = items2;
    tmp11Result = closure_11(closure_7, obj);
    const tmp11 = closure_11;
    const tmp12 = closure_7;
    const tmp17 = closure_11;
    const tmp18 = _handleSubmit;
    const tmp19 = callback2;
    const tmp23 = importDefault(dependencyMap[17]);
    const tmp30 = _handleSubmit;
  }
  return tmp11Result;
});
const obj2 = { color: importDefault(dependencyMap[8]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/account/native/UserSettingsConfirmPassword.tsx");

export default forwardRefResult;
export const UserSettingsConfirmPasswordWrapped = function UserSettingsConfirmPasswordWrapped() {
  let obj = arg1(dependencyMap[9]);
  obj = {};
  const merged = Object.assign(obj.useSettingNavigationRoute().params);
  return callback2(forwardRefResult, obj);
};
