// Module ID: 13559
// Function ID: 102834
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 13559 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ Image: closure_9, View: closure_10, ScrollView: closure_11 } = arg1(dependencyMap[6]));
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
const tmp3 = arg1(dependencyMap[6]);
({ AnalyticEvents: closure_15, LoginRequiredActions: closure_16 } = arg1(dependencyMap[10]));
const tmp4 = arg1(dependencyMap[10]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[11]));
let closure_19 = { newPassword: undefined, password: "" };
let obj = arg1(dependencyMap[12]);
obj = { onePass: { "Null": 0, "Null": -1048576 } };
obj = { borderRadius: importDefault(dependencyMap[13]).radii.xs };
obj.unverifiedWrapper = obj;
obj.container = { padding: 16 };
obj.header = { marginBottom: 20 };
obj.requiredActionsSubtitle = {};
obj.requiredActionsTitle = { "Bool(false)": "values", "Bool(false)": "Array" };
obj.image = {};
let closure_20 = obj.createLegacyClassComponentStyles(obj);
const tmp6 = (Component) => {
  class EditPassword {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, EditPassword);
      items1 = [...items];
      obj = closure_7(EditPassword);
      tmp2 = closure_6;
      if (closure_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      EditPassword = tmp2Result;
      tmp2Result.state = closure_19;
      tmp2Result.newPasswordRef = null;
      tmp2Result.passwordManagerRef = null;
      tmp2Result.handlePasswordChange = (password) => {
        let obj = { password };
        tmp2Result.setState(obj);
        obj = { password };
        callback(closure_3[14]).updateAccount(obj);
      };
      tmp2Result.handleSetNewPasswordRef = (newPasswordRef) => {
        tmp2Result.newPasswordRef = newPasswordRef;
      };
      tmp2Result.handleFocusNewPassword = () => {
        const newPasswordRef = tmp2Result.newPasswordRef;
        if (null != newPasswordRef) {
          newPasswordRef.focus();
        }
      };
      tmp2Result.handleNewPasswordChange = (arg0) => {
        let obj = { newPassword: arg0 };
        tmp2Result.setState(obj);
        obj = { newPassword: arg0 };
        callback(closure_3[14]).updateAccount(obj);
      };
      tmp2Result.handleSubmit = () => {
        let newPassword;
        let password;
        ({ password, newPassword } = tmp2Result.props.showForcedPasswordUpdate.state);
        const obj = callback(closure_3[14]);
        callback(closure_3[14]).saveAccountChanges({ password, newPassword }, { close: false }).then((ok) => {
          ok = ok.ok;
          if (!ok) {
            const body = ok.body;
            let username;
            if (null != body) {
              username = body.username;
            }
            ok = null == username;
          }
          if (!ok) {
            const result = showForcedPasswordUpdate(closure_3[15]).showInvalidUsernameToast();
            const obj = showForcedPasswordUpdate(closure_3[15]);
          }
          const errors = errors.getErrors();
          let isEmptyResult = null == errors;
          if (!isEmptyResult) {
            isEmptyResult = callback(closure_3[16])(errors).isEmpty();
            const obj2 = callback(closure_3[16])(errors);
          }
          if (isEmptyResult) {
            if (showForcedPasswordUpdate) {
              callback(closure_3[17]).track(constants.FORCED_UPDATE_PASSWORD_SUCCEEDED);
              const obj3 = callback(closure_3[17]);
              callback(closure_3[18]).close();
              const obj4 = callback(closure_3[18]);
            } else {
              const navigation = showForcedPasswordUpdate.props.navigation;
              navigation.pop();
            }
          }
        });
      };
      tmp2Result.handleSetPasswordManagerRef = (passwordManagerRef) => {
        tmp2Result.passwordManagerRef = passwordManagerRef;
      };
      tmp2Result.canSubmit = () => {
        let newPassword;
        let password;
        ({ password, newPassword } = tmp2Result.state);
        let tmp = null != password;
        if (tmp) {
          tmp = "" !== password;
        }
        if (tmp) {
          tmp = null != newPassword;
        }
        if (tmp) {
          tmp = "" !== newPassword;
        }
        if (tmp) {
          tmp = password.length > 0 && newPassword.length > 0;
          const tmp2 = password.length > 0 && newPassword.length > 0;
        }
        return tmp;
      };
      return tmp2Result;
    }
  }
  const arg1 = EditPassword;
  callback3(EditPassword, Component);
  let obj = {
    key: "componentWillUnmount",
    value() {
      callback2(closure_3[14]).resetAccount();
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getError",
    value(arg0) {
      const errors = this.props.errors;
      let first;
      if (null != errors) {
        if (null != errors[arg0]) {
          first = errors[arg0][0];
        }
      }
      return first;
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value() {
      let hasBannerText;
      let newPassword;
      let newPasswordLabel;
      let password;
      let passwordLabel;
      let showForcedPasswordUpdate;
      let submitting;
      const self = this;
      const tmp = callback7(this.context);
      ({ password, newPassword } = this.state);
      const props = this.props;
      ({ showForcedPasswordUpdate, submitting, hasBannerText } = props);
      let obj = {};
      obj = { style: tmp.container };
      ({ passwordLabel, newPasswordLabel } = props);
      if (hasBannerText) {
        obj = { style: tmp.unverifiedWrapper, children: callback5(callback(closure_3[19]), {}) };
        hasBannerText = callback5(closure_10, obj);
      }
      const items = [hasBannerText, , , ];
      let tmp10 = showForcedPasswordUpdate;
      if (showForcedPasswordUpdate) {
        const obj1 = { style: tmp.header };
        const obj2 = { source: callback(closure_3[20]), style: tmp.image };
        const items1 = [callback5(closure_9, obj2), , ];
        const obj3 = { style: tmp.requiredActionsTitle };
        const intl = EditPassword(closure_3[22]).intl;
        obj3.children = intl.string(EditPassword(closure_3[22]).t.geta79);
        items1[1] = callback5(EditPassword(closure_3[21]).Text, obj3);
        const obj4 = { style: tmp.requiredActionsSubtitle };
        const intl2 = EditPassword(closure_3[22]).intl;
        obj4.children = intl2.string(EditPassword(closure_3[22]).t.37iHbZ);
        items1[2] = callback5(EditPassword(closure_3[21]).Text, obj4);
        obj1.children = items1;
        tmp10 = callback6(closure_10, obj1);
      }
      items[1] = tmp10;
      let tmp18 = !showForcedPasswordUpdate;
      if (tmp18) {
        const obj5 = { style: tmp.header };
        const obj6 = { style: tmp.requiredActionsTitle };
        const intl3 = EditPassword(closure_3[22]).intl;
        obj6.children = intl3.string(EditPassword(closure_3[22]).t.geta79);
        const items2 = [callback5(EditPassword(closure_3[21]).Text, obj6), ];
        const obj7 = { style: tmp.requiredActionsSubtitle };
        const intl4 = EditPassword(closure_3[22]).intl;
        obj7.children = intl4.string(EditPassword(closure_3[22]).t.x5tG4V);
        items2[1] = callback5(EditPassword(closure_3[21]).Text, obj7);
        obj5.children = items2;
        tmp18 = callback6(closure_10, obj5);
      }
      items[2] = tmp18;
      const obj8 = { spacing: 24 };
      const obj9 = { label: passwordLabel, secureTextEntry: true, errorMessage: self.getError("password"), onChange: self.handlePasswordChange, value: password, onSubmitEditing: self.canSubmit() ? self.handleSubmit : self.handleFocusNewPassword, returnKeyType: "next", autoComplete: "current-password", required: true };
      const items3 = [callback5(EditPassword(closure_3[24]).TextInput, obj9), , ];
      const obj10 = { label: newPasswordLabel, ref: self.handleSetNewPasswordRef, secureTextEntry: true, errorMessage: self.getError("new_password"), onChange: self.handleNewPasswordChange, value: newPassword, returnKeyType: "done", autoComplete: "new-password" };
      let handleSubmit;
      if (self.canSubmit()) {
        handleSubmit = self.handleSubmit;
      }
      obj10.onSubmitEditing = handleSubmit;
      obj10.required = true;
      items3[1] = callback5(EditPassword(closure_3[24]).TextInput, obj10);
      const obj11 = {};
      const intl5 = EditPassword(closure_3[22]).intl;
      obj11.text = intl5.string(EditPassword(closure_3[22]).t.FRep5/);
      obj11.onPress = self.handleSubmit;
      obj11.loading = submitting;
      if (!submitting) {
        submitting = null == password;
      }
      if (!submitting) {
        submitting = null == newPassword;
      }
      obj11.disabled = submitting;
      items3[2] = callback5(EditPassword(closure_3[25]).Button, obj11);
      obj8.children = items3;
      items[3] = callback6(EditPassword(closure_3[23]).Stack, obj8);
      obj.children = items;
      obj.children = callback6(closure_10, obj);
      return callback5(closure_11, obj);
    }
  };
  items[2] = obj;
  return callback2(EditPassword, items);
}(importAllResult.Component);
tmp6.contextType = arg1(dependencyMap[26]).ThemeContext;
const tmp5 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx");

export default function EditPasswordWrapper() {
  let obj = callback(dependencyMap[27]);
  const params = obj.useSettingNavigationRoute().params;
  let prop;
  if (null != params) {
    prop = params.isLoginRequiredAction;
  }
  const callback = null != prop && prop;
  const items = [closure_14, closure_13, closure_12];
  const stateFromStoresObject = callback(dependencyMap[28]).useStateFromStoresObject(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let obj = callback(closure_3[19]);
    const errors = store.getErrors();
    const submitting = store.getSubmitting();
    const settings = store.getSettings();
    if (!callback) {
      callback2(closure_3[29])(null != currentUser, "EditPasswordWrapper: user cannot be undefined");
    }
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    let result = null != id;
    if (result) {
      const items = [constants.UPDATE_PASSWORD];
      result = closure_12.requiredActionsIncludes(id, items);
    }
    obj = { errors, submitting, settings, user: currentUser };
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    obj.verified = null != verified && verified;
    const intl = callback(closure_3[22]).intl;
    obj.passwordLabel = intl.string(callback(closure_3[22]).t.WBqMRQ);
    const intl2 = callback(closure_3[22]).intl;
    obj.newPasswordLabel = intl2.string(callback(closure_3[22]).t.8dM4FO);
    if (result) {
      result = callback;
    }
    obj.showForcedPasswordUpdate = result;
    obj.hasBannerText = null != obj.getBannerText(currentUser);
    return obj;
  });
  const obj2 = callback(dependencyMap[28]);
  obj = { navigation: callback(dependencyMap[30]).useNavigation() };
  const merged = Object.assign(stateFromStoresObject);
  return callback4(tmp6, obj);
};
