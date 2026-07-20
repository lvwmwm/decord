// Module ID: 13570
// Function ID: 102899
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13570 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[6]));
let closure_10 = { input: "", error: undefined };
const tmp4 = (PureComponent) => {
  class UserSettingsInputAlert {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, UserSettingsInputAlert);
      items1 = [...items];
      obj = closure_6(UserSettingsInputAlert);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      UserSettingsInputAlert = tmp2Result;
      tmp2Result.state = closure_10;
      tmp2Result.close = () => {
        const onClose = tmp2Result.props.onClose;
        if (null != onClose) {
          onClose();
        }
      };
      tmp2Result.handleSubmit = () => {
        let isLoading;
        let onSubmit;
        ({ isLoading, onSubmit, onSuccess: closure_0, closeOnSuccess: closure_1, onError: closure_2, skipErrorMsgAbortCode: closure_3 } = tmp2Result.props);
        if (!isLoading) {
          isLoading = null == onSubmit;
        }
        if (!isLoading) {
          const onSubmitResult = onSubmit(tmp2Result.state.input);
          onSubmit(tmp2Result.state.input).then(() => {
            if (null != lib) {
              lib();
            }
            if (closure_1) {
              lib.close();
            }
          }).catch((body) => {
            if (null != callback) {
              callback(body);
            }
            if (body) {
              if (body.body) {
                const V6OrEarlierAPIError = lib(callback[7]).V6OrEarlierAPIError;
                const prototype = V6OrEarlierAPIError.prototype;
                const v6OrEarlierAPIError = new V6OrEarlierAPIError(body);
                if (v6OrEarlierAPIError.code !== closure_3) {
                  const obj = { error: v6OrEarlierAPIError.message };
                  lib.setState(obj);
                }
              }
            }
          });
          const nextPromise = onSubmit(tmp2Result.state.input).then(() => {
            if (null != lib) {
              lib();
            }
            if (closure_1) {
              lib.close();
            }
          });
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = UserSettingsInputAlert;
  callback2(UserSettingsInputAlert, PureComponent);
  let obj = {
    key: "renderContent",
    value() {
      const self = this;
      const UserSettingsInputAlert = this;
      const helpText = this.props.helpText;
      if (null != this.props.error) {
        if ("" !== self.props.error) {
          let error = self.props.error;
        }
        let obj = { spacing: 16 };
        let tmp7 = null != helpText;
        if (tmp7) {
          obj = { variant: "text-md/normal", children: helpText };
          tmp7 = callback4(UserSettingsInputAlert(closure_2[9]).Text, obj);
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
        items[1] = callback4(UserSettingsInputAlert(closure_2[10]).TextInput, obj);
        obj.children = items;
        return closure_9(UserSettingsInputAlert(closure_2[8]).Stack, obj);
      }
      error = self.state.error;
    }
  };
  const items = [obj, ];
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
      const tmp2 = callback4(callback(closure_2[11]), obj);
      let tmp3 = tmp2;
      if (useKeyboardAwareWrapper) {
        obj = { children: tmp2 };
        tmp3 = callback4(callback(closure_2[12]), obj);
      }
      return tmp3;
    }
  };
  items[1] = obj;
  return callback(UserSettingsInputAlert, items);
}(importAllResult.PureComponent);
tmp4.defaultProps = { sendAnalytics: 24199658097191040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, SEND_AS_GIFT: 0.00000000000000000000000000000000000000000000005825864423171726, GameMentionsExperiment: 0.000000000000000000000000000000000000000000000001557556520258325 };
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/account/native/UserSettingsInputAlert.tsx");

export default tmp4;
