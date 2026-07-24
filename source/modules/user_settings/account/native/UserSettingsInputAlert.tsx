// Module ID: 13751
// Function ID: 105457
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 33, 507, 4541, 4126, 7574, 4561, 5585, 2]

// Module 13751 (_isNativeReflectConstruct)
import closure_3 from "jsxProd";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_8;
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
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { input: "", error: undefined };
const tmp4 = ((PureComponent) => {
  class UserSettingsInputAlert {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, apply);
      items1 = [...items];
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = outer1_10;
      tmp2Result.close = () => {
        const onClose = tmp2Result.props.onClose;
        if (null != onClose) {
          onClose();
        }
      };
      tmp2Result.handleSubmit = () => {
        let closure_0;
        let closure_1;
        let closure_2;
        let closure_3;
        let isLoading;
        let onSubmit;
        ({ isLoading, onSubmit, onSuccess: closure_0, closeOnSuccess: closure_1, onError: closure_2, skipErrorMsgAbortCode: closure_3 } = tmp2Result.props);
        if (!isLoading) {
          isLoading = null == onSubmit;
        }
        if (!isLoading) {
          const onSubmitResult = onSubmit(tmp2Result.state.input);
          onSubmit(tmp2Result.state.input).then(() => {
            if (null != callback) {
              callback();
            }
            if (closure_1) {
              outer1_0.close();
            }
          }).catch((body) => {
            if (null != callback2) {
              callback2(body);
            }
            if (body) {
              if (body.body) {
                const V6OrEarlierAPIError = UserSettingsInputAlert(outer3_2[7]).V6OrEarlierAPIError;
                const prototype = V6OrEarlierAPIError.prototype;
                const v6OrEarlierAPIError = new V6OrEarlierAPIError(body);
                if (v6OrEarlierAPIError.code !== closure_3) {
                  const obj = { error: v6OrEarlierAPIError.message };
                  outer1_0.setState(obj);
                }
              }
            }
          });
          const nextPromise = onSubmit(tmp2Result.state.input).then(() => {
            if (null != callback) {
              callback();
            }
            if (closure_1) {
              outer1_0.close();
            }
          });
        }
      };
      return tmp2Result;
    }
  }
  callback2(UserSettingsInputAlert, PureComponent);
  let obj = {
    key: "renderContent",
    value() {
      let self = this;
      self = this;
      const helpText = this.props.helpText;
      if (null != this.props.error) {
        if ("" !== self.props.error) {
          let error = self.props.error;
        }
        let obj = { spacing: 16 };
        let tmp7 = null != helpText;
        if (tmp7) {
          obj = { variant: "text-md/normal", children: helpText };
          tmp7 = outer1_8(UserSettingsInputAlert(outer1_2[9]).Text, obj);
        }
        const items = [tmp7, ];
        obj = { label: tmp3, placeholder: tmp, secureTextEntry: tmp2, returnKeyType: "done", autoFocus: true };
        let str4 = "default";
        if (null != error) {
          str4 = "error";
        }
        obj.status = str4;
        obj.errorMessage = error;
        obj.onSubmitEditing = self.handleSubmit;
        obj.onChange = function onChange(input) {
          return self.setState({ input });
        };
        items[1] = outer1_8(UserSettingsInputAlert(outer1_2[10]).TextInput, obj);
        obj.children = items;
        return outer1_9(UserSettingsInputAlert(outer1_2[8]).Stack, obj);
      }
      error = self.state.error;
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value() {
      let actionText;
      let cancelText;
      let confirmColor;
      let title;
      let useKeyboardAwareWrapper;
      ({ title, actionText, cancelText, confirmColor, useKeyboardAwareWrapper } = this.props);
      let obj = { title, confirmText: actionText, confirmColor, onConfirm: this.handleSubmit, cancelText, onCancel: this.close, children: this.renderContent() };
      const tmp2 = outer1_8(outer1_1(outer1_2[11]), obj);
      let tmp3 = tmp2;
      if (useKeyboardAwareWrapper) {
        obj = { children: tmp2 };
        tmp3 = outer1_8(outer1_1(outer1_2[12]), obj);
      }
      return tmp3;
    }
  };
  items[1] = obj;
  return callback(UserSettingsInputAlert, items);
})(require("result").PureComponent);
tmp4.defaultProps = { isLoading: false, useKeyboardAwareWrapper: false, secureTextEntry: true };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/account/native/UserSettingsInputAlert.tsx");

export default tmp4;
