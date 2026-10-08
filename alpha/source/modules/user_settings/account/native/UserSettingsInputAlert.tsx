// Module ID: 14860
// Function ID: 14861
// Name: UserSettingsInputAlert
// Dependencies: [19, 21, 1294, 5373, 5086, 6283, 5394, 6720, 2]

// Module 14860 (UserSettingsInputAlert)
import HTTPUtils from "HTTPUtils" /* 1294 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import AlertDefault from "Alert" /* 5394 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp2;
const KeyboardAwareViewDefault = tmp2(6720);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const hasOwnProperty = { input: "", error: "color" };
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
    let str2;
    const self = this;
    const helpText = this.props.helpText;
    if (null != this.props.error) {
      let error;
      if ("" !== self.props.error) {
        error = self.props.error;
      }
      let tmp7 = null != helpText;
      const Stack = Stack_Stack.Stack;
      const tmp4 = React3;
      if (tmp7) {
        let obj = { variant: "text-md/normal", children: helpText };
        tmp7 = _false(tmp5(5086).Text, obj);
      }
      const items = [tmp7, ];
      const obj2 = {
        label: tmp3,
        placeholder: tmp,
        secureTextEntry: tmp2,
        returnKeyType: "done",
        autoFocus: true,
        status: str2,
        errorMessage: error,
        onSubmitEditing: self.handleSubmit,
        onChange(input) {
            const obj = { input };
            return self.setState(obj);
          }
      };
      str2 = "default";
      const TextInput = tmp5(6283).TextInput;
      const tmp9 = _false;
      if (null != error) {
        str2 = "error";
      }
      const obj3 = { spacing: 16, children: items };
      items[1] = tmp9(TextInput, obj2);
      return tmp4(Stack, obj3);
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
