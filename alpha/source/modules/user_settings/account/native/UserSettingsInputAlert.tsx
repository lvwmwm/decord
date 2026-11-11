// Module ID: 17181
// Function ID: 17182
// Name: UserSettingsInputAlert
// Dependencies: [19, 21, 1282, 6274, 5866, 7553, 6277, 7408, 2]

// Module 17181 (UserSettingsInputAlert)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import AlertDefault from "Alert" /* 6277 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp2;
const KeyboardAwareViewDefault = tmp2(7408);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const hasOwnProperty = { input: "", error: "paddingHorizontal" };
const PureComponent = react.PureComponent;
class UserSettingsInputAlert extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.state = state;
    applyArgumentsResult.close = function close() {
      const onClose = require.props.onClose;
      if (null != onClose) {
        onClose();
      }
    };
    applyArgumentsResult.handleSubmit = function handleSubmit() {
      let closure_0;
      let closure_1;
      let closure_2;
      let closure_3;
      let isLoading;
      let onSubmit;
      ({ isLoading, onSubmit, onSuccess: closure_0, closeOnSuccess: closure_1, onError: closure_2, skipErrorMsgAbortCode: closure_3 } = applyArgumentsResult.props);
      const input = applyArgumentsResult.state.input;
      if (!isLoading) {
        const tmp = null;
        isLoading = null == onSubmit;
      }
      if (!isLoading) {
        const onSubmitResult = onSubmit(input);
        const nextPromise = onSubmitResult.then(() => {
          if (closure_0 != null) {
            tmp();
          }
          const tmp3 = closure_1;
          if (tmp3) {
            require.close();
          }
        });
        nextPromise.catch(function(error) {
          if (closure_2 != null) {
            tmp(error);
          }
          if (error) {
            if (error.body) {
              const self = this;
              const self2 = this;
              const v6OrEarlierAPIError = new HTTPUtils.V6OrEarlierAPIError(error);
              if (v6OrEarlierAPIError.code !== closure_3) {
                const obj = { error: v6OrEarlierAPIError.message };
                require.setState(obj);
              }
            }
          }
        });
      }
    };
    return applyArgumentsResult;
  }
  renderContent() {
    let helpText;
    let secureTextEntry;
    let str2;
    let str3;
    let str4;
    const self = this;
    ({ secureTextEntry, helpText } = this.props);
    if (null != this.props.error) {
      let error;
      if ("" !== self.props.error) {
        error = self.props.error;
      }
      let tmp6 = null != helpText;
      const Stack = Stack_Stack.Stack;
      const tmp3 = React3;
      if (tmp6) {
        let obj = { variant: "body-md/normal", children: helpText };
        tmp6 = _false(tmp4(5866).Text, obj);
      }
      const items = [tmp6, ];
      const obj2 = {
        label: tmp2,
        placeholder: tmp,
        secureTextEntry,
        revealable: true,
        autoCapitalize: "none",
        autoComplete: str2,
        textContentType: str3,
        returnKeyType: "done",
        autoFocus: true,
        status: str4,
        errorMessage: error,
        onSubmitEditing: self.handleSubmit,
        onChange(input) {
            const obj = { input };
            return self.setState(obj);
          }
      };
      str2 = undefined;
      const TextInput = tmp4(7553).TextInput;
      const tmp8 = _false;
      if (secureTextEntry) {
        str2 = "current-password";
      }
      str3 = undefined;
      if (secureTextEntry) {
        str3 = "password";
      }
      str4 = "default";
      if (null != error) {
        str4 = "error";
      }
      const obj3 = { spacing: 16, children: items };
      items[1] = tmp8(TextInput, obj2);
      return tmp3(Stack, obj3);
    }
    error = self.state.error;
  }
  render() {
    let actionText;
    let cancelText;
    let confirmColor;
    let title;
    let useKeyboardAwareWrapper;
    ({ title, actionText, cancelText, confirmColor, useKeyboardAwareWrapper } = this.props);
    const obj = { title, confirmText: actionText, confirmColor, onConfirm: this.handleSubmit, cancelText, onCancel: this.close, children: this.renderContent() };
    const tmp4 = AlertDefault;
    const tmp5 = _false(tmp4, obj);
    let tmpResult = tmp5;
    const tmp = _false;
    if (useKeyboardAwareWrapper) {
      const obj2 = { children: tmp5 };
      tmpResult = tmp(KeyboardAwareViewDefault, obj2);
    }
    return tmpResult;
  }
}
const prototype = UserSettingsInputAlert.prototype;
UserSettingsInputAlert.defaultProps = { isLoading: false, useKeyboardAwareWrapper: false, secureTextEntry: true };
const result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsInputAlert.tsx");

export default UserSettingsInputAlert;
