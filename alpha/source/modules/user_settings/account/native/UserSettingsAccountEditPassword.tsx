// Module ID: 14947
// Function ID: 14948
// Name: UserSettingsAccountEditPassword
// Dependencies: [19, 17, 2057, 7088, 1390, 1085, 21, 5091, 587, 4788, 6669, 6679, 12, 1265, 6678, 6684, 14948, 5087, 1126, 5374, 6290, 5376, 558, 576, 6681, 38, 504, 1503, 2]

// Module 14947 (UserSettingsAccountEditPassword)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import native from "native" /* 4788 */;
import Text_Text from "Text/Text" /* 5087 */;
import Stack_Stack from "Stack/Stack" /* 5374 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6290 */;
import UserSettingsAccountActionCreatorsAll from "UserSettingsAccountActionCreators" /* 6669 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6678 */;
import showInvalidUsernameToastNative from "showInvalidUsernameToastNative" /* 6679 */;
import UserSettingsAccountUnverifiedHeader from "UserSettingsAccountUnverifiedHeader" /* 6684 */;
import AssetRegistryDefault from "AssetRegistry" /* 14948 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2057 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 7088 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const UserSettingsAccountUnverifiedHeaderDefault = UserSettingsAccountUnverifiedHeader;
let navigation, ok;

let c10;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let unpackModuleId;
({ Image: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ AnalyticEvents: c10, LoginRequiredActions: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const authStore3 = { newPassword: "code", password: 17083457 };
let obj = { onePass: { width: 20, height: 20 }, unverifiedWrapper: obj2, container: { padding: 16 }, header: { marginBottom: 20 }, requiredActionsSubtitle: { textAlign: "center", marginTop: 8 }, requiredActionsTitle: { flex: 1, textAlign: "center" }, image: { marginTop: 12, marginBottom: 16, alignSelf: "center" } };
obj2 = { overflow: "hidden", borderRadius: nativeDefault.radii.xs, marginVertical: 16 };
const authStore4 = createStyles.createLegacyClassComponentStyles(obj);
const Component = react.Component;
class EditPassword extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.state = state;
    applyArgumentsResult.newPasswordRef = null;
    applyArgumentsResult.passwordManagerRef = null;
    applyArgumentsResult.handlePasswordChange = function handlePasswordChange(password) {
      const obj = { password };
      require.setState(obj);
      const obj2 = UserSettingsAccountActionCreatorsAll;
      const obj3 = { password };
      obj2.updateAccount(obj3);
    };
    applyArgumentsResult.handleSetNewPasswordRef = function handleSetNewPasswordRef(newPasswordRef) {
      require.newPasswordRef = newPasswordRef;
    };
    applyArgumentsResult.handleFocusNewPassword = function handleFocusNewPassword() {
      const newPasswordRef = require.newPasswordRef;
      if (newPasswordRef != null) {
        newPasswordRef.focus();
      }
    };
    applyArgumentsResult.handleNewPasswordChange = function handleNewPasswordChange(newPassword) {
      require.setState({ newPassword });
      const obj = UserSettingsAccountActionCreatorsAll;
      obj.updateAccount({ newPassword });
    };
    applyArgumentsResult.handleSubmit = function handleSubmit() {
      let newPassword;
      let password;
      let showForcedPasswordUpdate;
      showForcedPasswordUpdate = showForcedPasswordUpdate.props.showForcedPasswordUpdate;
      ({ password, newPassword } = showForcedPasswordUpdate.state);
      let obj = UserSettingsAccountActionCreatorsAll;
      const saveAccountChangesResult = obj.saveAccountChanges({ password, newPassword }, { close: false });
      saveAccountChangesResult.then((ok) => {
        ok = ok.ok;
        if (!ok) {
          const body = ok.body;
          let username;
          if (body != null) {
            username = body.username;
          }
          ok = null == username;
        }
        if (!ok) {
          const obj = showInvalidUsernameToastNative;
          const result = obj.showInvalidUsernameToast();
        }
        const errors = UserSettingsAccountStore.getErrors();
        let isEmptyResult = null == errors;
        if (!isEmptyResult) {
          const obj2 = _modDef12(errors);
          isEmptyResult = obj2.isEmpty();
        }
        if (isEmptyResult) {
          const tmp10 = showForcedPasswordUpdate;
          if (tmp10) {
            const obj3 = AnalyticsUtilsDefault;
            obj3.track(constants.FORCED_UPDATE_PASSWORD_SUCCEEDED);
            const obj4 = UserSettingsModalActionCreatorsDefault;
            obj4.close();
          } else {
            navigation = require.props.navigation;
            navigation.pop();
          }
        }
      });
    };
    applyArgumentsResult.handleSetPasswordManagerRef = function handleSetPasswordManagerRef(passwordManagerRef) {
      require.passwordManagerRef = passwordManagerRef;
    };
    applyArgumentsResult.canSubmit = function canSubmit() {
      let newPassword;
      let password;
      ({ password, newPassword } = require.state);
      let tmp = null != password && "" !== password && null != newPassword && "" !== newPassword;
      if (tmp) {
        tmp = password.length > 0 && newPassword.length > 0;
      }
      return tmp;
    };
    return applyArgumentsResult;
  }
  componentWillUnmount() {
    try {
      const obj = UserSettingsAccountActionCreatorsAll;
      obj.resetAccount();
    } catch (err) {
    }
  }
  getError(arg0) {
    const errors = this.props.errors;
    let first;
    if (null != errors) {
      if (null != errors[arg0]) {
        first = errors[arg0][0];
      }
    }
    return first;
  }
  render() {
    let handleSubmit;
    let hasBannerText;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let items;
    let items1;
    let items2;
    let newPassword;
    let newPasswordLabel;
    let password;
    let passwordLabel;
    let showForcedPasswordUpdate;
    let submitting;
    const self = this;
    const tmp = closure_15(this.context);
    ({ password, newPassword } = this.state);
    const props = this.props;
    ({ showForcedPasswordUpdate, submitting, hasBannerText } = props);
    const obj = { style: tmp.container, children: items };
    ({ passwordLabel, newPasswordLabel } = props);
    const tmp3 = metroRequire;
    if (hasBannerText) {
      const obj2 = { style: tmp.unverifiedWrapper, children: authStore2(UserSettingsAccountUnverifiedHeaderDefault, {}) };
      hasBannerText = tmp2(tmp5, obj2);
    }
    items = [hasBannerText, , , ];
    let tmp4Result = showForcedPasswordUpdate;
    if (tmp4Result) {
      const obj3 = { style: tmp.header, children: items1 };
      const obj4 = { source: AssetRegistryDefault, style: tmp.image };
      items1 = [authStore2(React3, obj4), , ];
      const obj5 = { style: tmp.requiredActionsTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl6.t.geta79) };
      const Text = Text_Text.Text;
      intl = intl6.intl;
      items1[1] = authStore2(Text, obj5);
      const obj6 = { style: tmp.requiredActionsSubtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl6.t["37iHbZ"]) };
      const Text2 = Text_Text.Text;
      intl2 = intl6.intl;
      items1[2] = authStore2(Text2, obj6);
      tmp4Result = tmp4(tmp5, obj3);
    }
    items[1] = tmp4Result;
    let tmp4Result2 = !showForcedPasswordUpdate;
    if (tmp4Result2) {
      const obj7 = { style: tmp.header, children: items2 };
      const obj8 = { style: tmp.requiredActionsTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl3.string(intl6.t.geta79) };
      const Text3 = Text_Text.Text;
      intl3 = intl6.intl;
      items2 = [authStore2(Text3, obj8), ];
      const obj9 = { style: tmp.requiredActionsSubtitle, variant: "text-sm/medium", color: "text-default", children: intl4.string(intl6.t.x5tG4V) };
      const Text4 = Text_Text.Text;
      intl4 = intl6.intl;
      items2[1] = authStore2(Text4, obj9);
      tmp4Result2 = tmp4(tmp5, obj7);
    }
    items[2] = tmp4Result2;
    const Stack = Stack_Stack.Stack;
    const obj10 = { label: passwordLabel, secureTextEntry: true, errorMessage: self.getError("password"), onChange: self.handlePasswordChange, value: password, onSubmitEditing: self.canSubmit() ? self.handleSubmit : self.handleFocusNewPassword, returnKeyType: "next", autoComplete: "current-password", required: true };
    const TextInput = TextInput_TextInput.TextInput;
    const items3 = [authStore2(TextInput, obj10), , ];
    const obj11 = { label: newPasswordLabel, ref: self.handleSetNewPasswordRef, secureTextEntry: true, errorMessage: self.getError("new_password"), onChange: self.handleNewPasswordChange, value: newPassword, returnKeyType: "done", autoComplete: "new-password", onSubmitEditing: handleSubmit, required: true };
    const TextInput2 = tmp16(6290).TextInput;
    handleSubmit = undefined;
    if (self.canSubmit()) {
      handleSubmit = self.handleSubmit;
    }
    items3[1] = authStore2(TextInput2, obj11);
    const obj12 = { text: intl5.string(intl6.t["FRep5/"]), onPress: self.handleSubmit, loading: submitting, disabled: submitting };
    const Button = tmp16(5376).Button;
    intl5 = tmp16(1126).intl;
    if (!submitting) {
      submitting = null == password;
    }
    if (!submitting) {
      submitting = null == newPassword;
    }
    const obj13 = { children: map1(hasOwnProperty, obj) };
    const obj14 = { spacing: 24, children: items3 };
    items3[2] = authStore2(Button, obj12);
    items[3] = map1(Stack, obj14);
    return authStore2(tmp3, obj13);
  }
}
const prototype = EditPassword.prototype;
EditPassword.contextType = native.ThemeContext;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditPasswordWrapper() {
  let first;
  let flag;
  let tmp8;
  const tmp2 = dependencyMap;
  let obj = flag(576);
  const cResult = obj.c(6);
  let obj2 = flag(6681);
  const params = obj2.useSettingNavigationRoute().params;
  flag = undefined;
  if (params != null) {
    flag = params.isLoginRequiredAction;
  }
  if (flag == null) {
    flag = false;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, UserSettingsAccountStore, LoginRequiredActionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== flag) {
    const fn = function s() {
      let intl;
      let intl2;
      const currentUser = UserStore.getCurrentUser();
      const obj = UserSettingsAccountUnverifiedHeader;
      const tmp4 = null != obj.getBannerText(currentUser);
      const errors = UserSettingsAccountStore.getErrors();
      const submitting = UserSettingsAccountStore.getSubmitting();
      const settings = UserSettingsAccountStore.getSettings();
      if (!flag) {
        _modDef38(null != currentUser, "EditPasswordWrapper: user cannot be undefined");
      }
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      let result = null != id;
      if (result) {
        const items = [unpackModuleId.UPDATE_PASSWORD];
        result = LoginRequiredActionStore.requiredActionsIncludes(id, items);
      }
      const obj2 = { errors, submitting, settings, user: currentUser, verified: flag, passwordLabel: intl.string(intl6.t.WBqMRQ), newPasswordLabel: intl2.string(intl6.t["8dM4FO"]), showForcedPasswordUpdate: result, hasBannerText: tmp4 };
      flag = undefined;
      if (currentUser != null) {
        flag = currentUser.verified;
      }
      if (flag == null) {
        flag = false;
      }
      intl = tmp2(1126).intl;
      intl2 = tmp2(1126).intl;
      if (result) {
        result = tmp8;
      }
      return obj2;
    };
    cResult[1] = flag;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = flag(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
  const tmpResult2 = flag(1503);
  navigation = tmpResult2.useNavigation();
  if (cResult[3] === navigation) {
    let tmp11;
    if (cResult[4] === stateFromStoresObject) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj3 = { navigation };
  const merged = Object.assign(stateFromStoresObject);
  const tmp13 = closure_12(EditPassword, obj3);
  cResult[3] = navigation;
  cResult[4] = stateFromStoresObject;
  cResult[5] = tmp13;
  tmp11 = tmp13;
}) : (function EditPasswordWrapper() {
  let flag;
  const tmp2 = dependencyMap;
  let obj = flag(6681);
  const params = obj.useSettingNavigationRoute().params;
  flag = undefined;
  if (params != null) {
    flag = params.isLoginRequiredAction;
  }
  if (flag == null) {
    flag = false;
  }
  let items = [UserStore, UserSettingsAccountStore, LoginRequiredActionStore];
  const tmpResult = flag(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items, () => {
    let intl;
    let intl2;
    const currentUser = UserStore.getCurrentUser();
    const obj = UserSettingsAccountUnverifiedHeader;
    const tmp4 = null != obj.getBannerText(currentUser);
    const errors = UserSettingsAccountStore.getErrors();
    const submitting = UserSettingsAccountStore.getSubmitting();
    const settings = UserSettingsAccountStore.getSettings();
    if (!flag) {
      _modDef38(null != currentUser, "EditPasswordWrapper: user cannot be undefined");
    }
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let result = null != id;
    if (result) {
      const items = [unpackModuleId.UPDATE_PASSWORD];
      result = LoginRequiredActionStore.requiredActionsIncludes(id, items);
    }
    const obj2 = { errors, submitting, settings, user: currentUser, verified: flag, passwordLabel: intl.string(intl6.t.WBqMRQ), newPasswordLabel: intl2.string(intl6.t["8dM4FO"]), showForcedPasswordUpdate: result, hasBannerText: tmp4 };
    flag = undefined;
    if (currentUser != null) {
      flag = currentUser.verified;
    }
    if (flag == null) {
      flag = false;
    }
    intl = tmp2(1126).intl;
    intl2 = tmp2(1126).intl;
    if (result) {
      result = tmp8;
    }
    return obj2;
  });
  const tmpResult2 = flag(1503);
  let obj2 = { navigation: tmpResult2.useNavigation() };
  const merged = Object.assign(stateFromStoresObject);
  return closure_12(EditPassword, obj2);
});
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx");

export default tmp6;
