// Module ID: 17159
// Function ID: 17160
// Name: UserSettingsAccountEditPassword
// Dependencies: [19, 17, 5085, 8538, 1385, 1072, 21, 5243, 575, 5314, 7734, 7744, 12, 1252, 7743, 7749, 5957, 17160, 5866, 1113, 6274, 7553, 5873, 7746, 504, 38, 1499, 2]
// Exports: default

// Module 17159 (UserSettingsAccountEditPassword)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import native from "native" /* 5314 */;
import Text_Text from "Text/Text" /* 5866 */;
import FastImageDefault from "FastImage" /* 5957 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7553 */;
import UserSettingsAccountActionCreatorsAll from "UserSettingsAccountActionCreators" /* 7734 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7743 */;
import showInvalidUsernameToastNative from "showInvalidUsernameToastNative" /* 7744 */;
import UserSettingsAccountUnverifiedHeader from "UserSettingsAccountUnverifiedHeader" /* 7749 */;
import AssetRegistryDefault from "AssetRegistry" /* 17160 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 5085 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 8538 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const UserSettingsAccountUnverifiedHeaderDefault = UserSettingsAccountUnverifiedHeader;
let errors, navigation, ok;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let obj2;
let unpackModuleId;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ AnalyticEvents: c9, LoginRequiredActions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { onePass: { width: 20, height: 20 }, unverifiedWrapper: obj2, container: { padding: 16 }, header: { marginBottom: 20 }, requiredActionsSubtitle: { textAlign: "center", marginTop: 8 }, requiredActionsTitle: { flex: 1, textAlign: "center" }, image: { marginTop: 12, marginBottom: 16, alignSelf: "center" } };
obj2 = { overflow: "hidden", borderRadius: nativeDefault.radii.xs, marginVertical: 16 };
const gesture = createStyles.createLegacyClassComponentStyles(obj);
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
        errors = UserSettingsAccountStore.getErrors();
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
    errors = this.props.errors;
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
    const tmp = closure_14(this.context);
    ({ password, newPassword } = this.state);
    const props = this.props;
    ({ showForcedPasswordUpdate, submitting, hasBannerText } = props);
    const obj = { style: tmp.container, children: items };
    ({ passwordLabel, newPasswordLabel } = props);
    const tmp3 = hasOwnProperty;
    if (hasBannerText) {
      const obj2 = { style: tmp.unverifiedWrapper, children: unpackModuleId(UserSettingsAccountUnverifiedHeaderDefault, {}) };
      hasBannerText = tmp2(tmp5, obj2);
    }
    items = [hasBannerText, , , ];
    let tmp4Result = showForcedPasswordUpdate;
    if (tmp4Result) {
      const obj3 = { style: tmp.header, children: items1 };
      const obj4 = { source: AssetRegistryDefault, style: tmp.image };
      const tmp11 = FastImageDefault;
      items1 = [unpackModuleId(tmp11, obj4), , ];
      const obj5 = { style: tmp.requiredActionsTitle, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl.string(intl6.t.geta79) };
      const Text = Text_Text.Text;
      intl = intl6.intl;
      items1[1] = unpackModuleId(Text, obj5);
      const obj6 = { style: tmp.requiredActionsSubtitle, variant: "body-sm/medium", color: "text-default", children: intl2.string(intl6.t["37iHbZ"]) };
      const Text2 = Text_Text.Text;
      intl2 = intl6.intl;
      items1[2] = unpackModuleId(Text2, obj6);
      tmp4Result = tmp4(tmp5, obj3);
    }
    items[1] = tmp4Result;
    let tmp4Result2 = !showForcedPasswordUpdate;
    if (tmp4Result2) {
      const obj7 = { style: tmp.header, children: items2 };
      const obj8 = { style: tmp.requiredActionsTitle, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl3.string(intl6.t.geta79) };
      const Text3 = Text_Text.Text;
      intl3 = intl6.intl;
      items2 = [unpackModuleId(Text3, obj8), ];
      const obj9 = { style: tmp.requiredActionsSubtitle, variant: "body-sm/medium", color: "text-default", children: intl4.string(intl6.t.x5tG4V) };
      const Text4 = Text_Text.Text;
      intl4 = intl6.intl;
      items2[1] = unpackModuleId(Text4, obj9);
      tmp4Result2 = tmp4(tmp5, obj7);
    }
    items[2] = tmp4Result2;
    const Stack = Stack_Stack.Stack;
    const obj10 = { label: passwordLabel, secureTextEntry: true, revealable: true, errorMessage: self.getError("password"), onChange: self.handlePasswordChange, value: password, onSubmitEditing: self.canSubmit() ? self.handleSubmit : self.handleFocusNewPassword, returnKeyType: "next", autoCapitalize: "none", autoComplete: "current-password", textContentType: "password", required: true };
    const TextInput = TextInput_TextInput.TextInput;
    const items3 = [unpackModuleId(TextInput, obj10), , ];
    const obj11 = { label: newPasswordLabel, ref: self.handleSetNewPasswordRef, secureTextEntry: true, revealable: true, errorMessage: self.getError("new_password"), onChange: self.handleNewPasswordChange, value: newPassword, returnKeyType: "done", autoCapitalize: "none", autoComplete: "new-password", textContentType: "newPassword", onSubmitEditing: handleSubmit, required: true };
    const TextInput2 = tmp16(7553).TextInput;
    handleSubmit = undefined;
    if (self.canSubmit()) {
      handleSubmit = self.handleSubmit;
    }
    items3[1] = unpackModuleId(TextInput2, obj11);
    const obj12 = { text: intl5.string(intl6.t["FRep5/"]), onPress: self.handleSubmit, loading: submitting, disabled: submitting };
    const Button = tmp16(5873).Button;
    intl5 = tmp16(1113).intl;
    if (!submitting) {
      submitting = null == password;
    }
    if (!submitting) {
      submitting = null == newPassword;
    }
    const obj13 = { keyboardShouldPersistTaps: "handled", children: authStore2(React3, obj) };
    const obj14 = { spacing: 24, children: items3 };
    items3[2] = unpackModuleId(Button, obj12);
    items[3] = authStore2(Stack, obj14);
    return unpackModuleId(tmp3, obj13);
  }
}
const prototype = EditPassword.prototype;
EditPassword.contextType = native.ThemeContext;
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx");

export default function EditPasswordWrapper() {
  let flag;
  const tmp2 = dependencyMap;
  let obj = flag(7746);
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
    errors = UserSettingsAccountStore.getErrors();
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
      const items = [constants.UPDATE_PASSWORD];
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
    intl = tmp2(1113).intl;
    intl2 = tmp2(1113).intl;
    if (result) {
      result = tmp8;
    }
    return obj2;
  });
  const tmpResult2 = flag(1499);
  let obj2 = { navigation: tmpResult2.useNavigation() };
  const merged = Object.assign(stateFromStoresObject);
  return closure_11(EditPassword, obj2);
};
