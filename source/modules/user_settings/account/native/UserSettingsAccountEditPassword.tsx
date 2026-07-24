// Module ID: 13731
// Function ID: 105347
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1341, 5797, 1849, 653, 33, 4130, 689, 9266, 9268, 22, 675, 7375, 9270, 13732, 4126, 1212, 4541, 7574, 4543, 3842, 6653, 566, 44, 1456, 2]
// Exports: default

// Module 13731 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import showInvalidUsernameToast from "showInvalidUsernameToast";
import expandLocation from "expandLocation";
import dispatcher from "dispatcher";
import get_ActivityIndicator from "useSettingNavigationRoute";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "set";

let closure_10;
let closure_11;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Image: closure_9, View: closure_10, ScrollView: closure_11 } = get_ActivityIndicator);
({ AnalyticEvents: closure_15, LoginRequiredActions: closure_16 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { newPassword: undefined, password: "" };
_createForOfIteratorHelperLoose = { onePass: { width: 20, height: 20 } };
_createForOfIteratorHelperLoose = { overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginVertical: 16 };
_createForOfIteratorHelperLoose.unverifiedWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { padding: 16 };
_createForOfIteratorHelperLoose.header = { marginBottom: 20 };
_createForOfIteratorHelperLoose.requiredActionsSubtitle = { textAlign: "center", marginTop: 8 };
_createForOfIteratorHelperLoose.requiredActionsTitle = { flex: 1, textAlign: "center" };
_createForOfIteratorHelperLoose.image = { marginTop: 12, marginBottom: 16, alignSelf: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp6 = ((Component) => {
  class EditPassword {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = outer1_19;
      tmp2Result.newPasswordRef = null;
      tmp2Result.passwordManagerRef = null;
      tmp2Result.handlePasswordChange = (password) => {
        let obj = { password };
        tmp2Result.setState(obj);
        obj = { password };
        outer2_2(outer2_3[14]).updateAccount(obj);
      };
      tmp2Result.handleSetNewPasswordRef = (newPasswordRef) => {
        closure_0.newPasswordRef = newPasswordRef;
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
        outer2_2(outer2_3[14]).updateAccount(obj);
      };
      tmp2Result.handleSubmit = () => {
        let newPassword;
        let password;
        showForcedPasswordUpdate = showForcedPasswordUpdate.props.showForcedPasswordUpdate;
        ({ password, newPassword } = showForcedPasswordUpdate.state);
        let obj = outer2_2(outer2_3[14]);
        outer2_2(outer2_3[14]).saveAccountChanges({ password, newPassword }, { close: false }).then((ok) => {
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
            const result = EditPassword(outer3_3[15]).showInvalidUsernameToast();
            const obj = EditPassword(outer3_3[15]);
          }
          const errors = outer3_13.getErrors();
          let isEmptyResult = null == errors;
          if (!isEmptyResult) {
            isEmptyResult = outer3_1(outer3_3[16])(errors).isEmpty();
            const obj2 = outer3_1(outer3_3[16])(errors);
          }
          if (isEmptyResult) {
            if (showForcedPasswordUpdate) {
              outer3_1(outer3_3[17]).track(outer3_15.FORCED_UPDATE_PASSWORD_SUCCEEDED);
              const obj3 = outer3_1(outer3_3[17]);
              outer3_1(outer3_3[18]).close();
              const obj4 = outer3_1(outer3_3[18]);
            } else {
              const navigation = showForcedPasswordUpdate.props.navigation;
              navigation.pop();
            }
          }
        });
      };
      tmp2Result.handleSetPasswordManagerRef = (passwordManagerRef) => {
        closure_0.passwordManagerRef = passwordManagerRef;
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
  callback2(EditPassword, Component);
  let obj = {
    key: "componentWillUnmount",
    value() {
      outer1_2(outer1_3[14]).resetAccount();
    }
  };
  let items = [obj, , ];
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
      const tmp = outer1_20(this.context);
      ({ password, newPassword } = this.state);
      const props = this.props;
      ({ showForcedPasswordUpdate, submitting, hasBannerText } = props);
      let obj = {};
      obj = { style: tmp.container };
      ({ passwordLabel, newPasswordLabel } = props);
      if (hasBannerText) {
        obj = { style: tmp.unverifiedWrapper, children: outer1_17(outer1_1(outer1_3[19]), {}) };
        hasBannerText = outer1_17(outer1_10, obj);
      }
      const items = [hasBannerText, , , ];
      let tmp10 = showForcedPasswordUpdate;
      if (showForcedPasswordUpdate) {
        const obj1 = { style: tmp.header };
        const obj2 = { source: outer1_1(outer1_3[20]), style: tmp.image };
        const items1 = [outer1_17(outer1_9, obj2), , ];
        const obj3 = { style: tmp.requiredActionsTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
        const intl = EditPassword(outer1_3[22]).intl;
        obj3.children = intl.string(EditPassword(outer1_3[22]).t.geta79);
        items1[1] = outer1_17(EditPassword(outer1_3[21]).Text, obj3);
        const obj4 = { style: tmp.requiredActionsSubtitle, variant: "text-sm/medium", color: "text-default" };
        const intl2 = EditPassword(outer1_3[22]).intl;
        obj4.children = intl2.string(EditPassword(outer1_3[22]).t["37iHbZ"]);
        items1[2] = outer1_17(EditPassword(outer1_3[21]).Text, obj4);
        obj1.children = items1;
        tmp10 = outer1_18(outer1_10, obj1);
      }
      items[1] = tmp10;
      let tmp18 = !showForcedPasswordUpdate;
      if (tmp18) {
        const obj5 = { style: tmp.header };
        const obj6 = { style: tmp.requiredActionsTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
        const intl3 = EditPassword(outer1_3[22]).intl;
        obj6.children = intl3.string(EditPassword(outer1_3[22]).t.geta79);
        const items2 = [outer1_17(EditPassword(outer1_3[21]).Text, obj6), ];
        const obj7 = { style: tmp.requiredActionsSubtitle, variant: "text-sm/medium", color: "text-default" };
        const intl4 = EditPassword(outer1_3[22]).intl;
        obj7.children = intl4.string(EditPassword(outer1_3[22]).t.x5tG4V);
        items2[1] = outer1_17(EditPassword(outer1_3[21]).Text, obj7);
        obj5.children = items2;
        tmp18 = outer1_18(outer1_10, obj5);
      }
      items[2] = tmp18;
      const obj8 = { spacing: 24 };
      const obj9 = { label: passwordLabel, secureTextEntry: true, errorMessage: self.getError("password"), onChange: self.handlePasswordChange, value: password, onSubmitEditing: self.canSubmit() ? self.handleSubmit : self.handleFocusNewPassword, returnKeyType: "next", autoComplete: "current-password", required: true };
      const items3 = [outer1_17(EditPassword(outer1_3[24]).TextInput, obj9), , ];
      const obj10 = { label: newPasswordLabel, ref: self.handleSetNewPasswordRef, secureTextEntry: true, errorMessage: self.getError("new_password"), onChange: self.handleNewPasswordChange, value: newPassword, returnKeyType: "done", autoComplete: "new-password" };
      let handleSubmit;
      if (self.canSubmit()) {
        handleSubmit = self.handleSubmit;
      }
      obj10.onSubmitEditing = handleSubmit;
      obj10.required = true;
      items3[1] = outer1_17(EditPassword(outer1_3[24]).TextInput, obj10);
      const obj11 = {};
      const intl5 = EditPassword(outer1_3[22]).intl;
      obj11.text = intl5.string(EditPassword(outer1_3[22]).t["FRep5/"]);
      obj11.onPress = self.handleSubmit;
      obj11.loading = submitting;
      if (!submitting) {
        submitting = null == password;
      }
      if (!submitting) {
        submitting = null == newPassword;
      }
      obj11.disabled = submitting;
      items3[2] = outer1_17(EditPassword(outer1_3[25]).Button, obj11);
      obj8.children = items3;
      items[3] = outer1_18(EditPassword(outer1_3[23]).Stack, obj8);
      obj.children = items;
      obj.children = outer1_18(outer1_10, obj);
      return outer1_17(outer1_11, obj);
    }
  };
  items[2] = obj;
  return callback(EditPassword, items);
})(require("set").Component);
let closure_21 = tmp6;
tmp6.contextType = require("ManaContext").ThemeContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountEditPassword.tsx");

export default function EditPasswordWrapper() {
  let obj = _require(6653);
  const params = obj.useSettingNavigationRoute().params;
  let prop;
  if (null != params) {
    prop = params.isLoginRequiredAction;
  }
  _require = null != prop && prop;
  let items = [closure_14, closure_13, closure_12];
  const stateFromStoresObject = _require(566).useStateFromStoresObject(items, () => {
    const currentUser = outer1_14.getCurrentUser();
    let obj = callback(outer1_3[19]);
    const errors = outer1_13.getErrors();
    const submitting = outer1_13.getSubmitting();
    const settings = outer1_13.getSettings();
    if (!callback) {
      outer1_1(outer1_3[29])(null != currentUser, "EditPasswordWrapper: user cannot be undefined");
    }
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    let result = null != id;
    if (result) {
      const items = [outer1_16.UPDATE_PASSWORD];
      result = outer1_12.requiredActionsIncludes(id, items);
    }
    obj = { errors, submitting, settings, user: currentUser };
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    obj.verified = null != verified && verified;
    const intl = callback(outer1_3[22]).intl;
    obj.passwordLabel = intl.string(callback(outer1_3[22]).t.WBqMRQ);
    const intl2 = callback(outer1_3[22]).intl;
    obj.newPasswordLabel = intl2.string(callback(outer1_3[22]).t["8dM4FO"]);
    if (result) {
      result = callback;
    }
    obj.showForcedPasswordUpdate = result;
    obj.hasBannerText = null != obj.getBannerText(currentUser);
    return obj;
  });
  const obj2 = _require(566);
  obj = { navigation: _require(1456).useNavigation() };
  const merged = Object.assign(stateFromStoresObject);
  return callback3(closure_21, obj);
};
