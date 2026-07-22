// Module ID: 1181
// Function ID: 13429
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1181 (_isNativeReflectConstruct)
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
({ Appearance: closure_9, Image: closure_10, Keyboard: closure_11, Text: closure_12, TextInput: closure_13, TouchableOpacity: closure_14, TouchableWithoutFeedback: closure_15, View: closure_16 } = arg1(dependencyMap[6]));
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    arg1 = arg0;
    const importDefault = arg1;
    let dependencyMap = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      dependencyMap = Promise;
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let arg3 = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          iter(iter.value);
        } else {
          function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value).then(fulfilled, iter);
          const promise = function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value);
        }
      }
      let items = arg1;
      if (!arg1) {
        items = [];
      }
      const iter = arg3.apply(arg0, items);
      arg3 = iter;
      step(iter.next());
    });
    return _Promise;
  };
}
const tmp4 = (Component) => {
  class FeedbackWidget {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, FeedbackWidget);
      items = [];
      items[0] = Component;
      obj = closure_6(FeedbackWidget);
      tmp2 = closure_5;
      if (closure_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      FeedbackWidget = tmp2Result;
      tmp2Result._didSubmitForm = false;
      tmp2Result.handleFeedbackSubmit = () => {
        let description;
        let email;
        let name;
        let onFormSubmitted;
        let onSubmitError;
        let onSubmitSuccess;
        ({ name, email, description } = tmp2Result.state);
        ({ onSubmitSuccess, onSubmitError, onFormSubmitted } = tmp2Result.props);
        const props = tmp2Result.props;
        let trimmed;
        if (null != name) {
          trimmed = name.trim();
        }
        let trimmed1;
        if (null != email) {
          trimmed1 = email.trim();
        }
        let trimmed2;
        if (null != description) {
          trimmed2 = description.trim();
        }
        if (!tmp2Result.props.isNameRequired) {
          if (!tmp2Result.props.isEmailRequired) {
            if (tmp5) {
              if (tmp2Result.props.shouldValidateEmail) {
                if (tmp2Result.props.isEmailRequired) {
                  let obj1 = tmp2Result(closure_2[7]);
                  if (!obj1.isValidEmail(arr)) {
                    let obj2 = tmp2Result(closure_2[7]);
                    obj2.feedbackAlertDialog(props.errorTitle, props.emailError);
                  }
                }
              }
              let tmp22;
              if (tmp2Result.state.filename) {
                if (tmp2Result.state.attachment) {
                  let obj = { filename: tmp2Result.state.filename, data: tmp2Result.state.attachment };
                  const items = [obj];
                  tmp22 = items;
                }
              }
              obj = { message: tmp5, name: tmp2, email: arr, associatedEventId: tmp2Result(closure_2[8]).lastEventId() };
              if (!onFormSubmitted) {
                obj1 = { isVisible: false };
                tmp2Result.setState(obj1);
              }
              const obj6 = tmp2Result(closure_2[8]);
              const tmp31 = obj;
              let tmp39;
              if (tmp22) {
                obj2 = { attachments: tmp25 };
                tmp39 = obj2;
              }
              tmp2Result(closure_2[8]).captureFeedback(tmp31, tmp39);
              const obj3 = { name: trimmed, email: trimmed1, message: trimmed2, attachments: tmp22 };
              onSubmitSuccess(obj3);
              const obj8 = tmp2Result(closure_2[8]);
              tmp2Result(closure_2[7]).feedbackAlertDialog(props.successMessageText, "");
              onFormSubmitted();
              tmp2Result._didSubmitForm = true;
              const obj11 = tmp2Result(closure_2[7]);
            }
          }
        }
        obj = tmp2Result(closure_2[7]);
        obj.feedbackAlertDialog(props.errorTitle, props.formError);
      };
      tmp2Result.onScreenshotButtonPress = () => callback(tmp2Result, undefined, undefined, function*() {
        const self = this;
        let imagePicker;
        let fileName;
        let uri;
        if (self._hasScreenshot()) {
          let obj = { filename: undefined, attachment: undefined, attachmentUri: undefined };
          self.setState(obj);
        } else {
          imagePicker = self.props.imagePicker;
          if (imagePicker) {
            if (imagePicker.launchImageLibraryAsync) {
              let fn = () => {
                const launchImageLibraryAsync = imagePicker.launchImageLibraryAsync;
                let callResult;
                if (null !== launchImageLibraryAsync) {
                  if (undefined !== launchImageLibraryAsync) {
                    const obj = { mediaTypes: [null], base64: self(fileName[9]).isWeb() };
                    callResult = launchImageLibraryAsync.call(imagePicker, obj);
                    const obj2 = self(fileName[9]);
                  }
                }
                return callResult;
              };
            } else {
              fn = null;
              if (imagePicker.launchImageLibrary) {
                fn = () => {
                  const launchImageLibrary = imagePicker.launchImageLibrary;
                  let callResult;
                  if (null !== launchImageLibrary) {
                    if (undefined !== launchImageLibrary) {
                      const obj = { mediaType: "photo", includeBase64: self(fileName[9]).isWeb() };
                      callResult = launchImageLibrary.call(imagePicker, obj);
                      const obj2 = self(fileName[9]);
                    }
                  }
                  return callResult;
                };
              }
            }
            if (fn) {
              const tmp8 = yield fn();
              let assets;
              if (null != tmp8) {
                assets = tmp8.assets;
              }
              if (assets) {
                if (tmp8.assets.length > 0) {
                  const first = tmp8.assets[0];
                  if (obj5.isWeb()) {
                    if (null !== first) {
                      if (undefined !== first) {
                        fileName = first.fileName;
                      }
                    }
                    const first1 = tmp8.assets[0];
                    if (null !== first1) {
                      if (undefined !== first1) {
                        uri = first1.uri;
                      }
                    }
                    const first2 = tmp8.assets[0];
                    let base64;
                    if (null !== first2) {
                      if (undefined !== first2) {
                        base64 = first2.base64;
                      }
                    }
                    let base64ToUint8ArrayResult;
                    if (base64) {
                      base64ToUint8ArrayResult = self(fileName[7]).base64ToUint8Array(base64);
                      const obj2 = self(fileName[7]);
                    }
                    if (base64ToUint8ArrayResult) {
                      obj = { filename: fileName, attachment: base64ToUint8ArrayResult, attachmentUri: uri };
                      self.setState(obj);
                    } else {
                      const debug2 = self(fileName[8]).debug;
                      debug2.error("Failed to read image data on the web");
                    }
                  } else {
                    fileName = undefined;
                    if (null !== first) {
                      if (undefined !== first) {
                        fileName = first.fileName;
                      }
                    }
                    const first3 = tmp8.assets[0];
                    uri = undefined;
                    if (null !== first3) {
                      if (undefined !== first3) {
                        uri = first3.uri;
                      }
                    }
                    if (uri) {
                      obj = self(fileName[10]);
                      const dataFromUri = obj.getDataFromUri(uri);
                      dataFromUri.then((attachment) => {
                        if (null != attachment) {
                          const obj = { filename: fileName, attachment, attachmentUri: uri };
                          self.setState(obj);
                        } else {
                          const result = self._showImageRetrievalDevelopmentNote();
                          const debug = self(fileName[8]).debug;
                          debug.error("Failed to read image data from uri:", uri);
                        }
                      }).catch((arg0) => {
                        const result = self._showImageRetrievalDevelopmentNote();
                        const debug = self(fileName[8]).debug;
                        debug.error("Failed to read image data from uri:", uri, "error: ", arg0);
                      });
                      const nextPromise = dataFromUri.then((attachment) => {
                        if (null != attachment) {
                          const obj = { filename: fileName, attachment, attachmentUri: uri };
                          self.setState(obj);
                        } else {
                          const result = self._showImageRetrievalDevelopmentNote();
                          const debug = self(fileName[8]).debug;
                          debug.error("Failed to read image data from uri:", uri);
                        }
                      });
                    }
                  }
                  const obj5 = self(fileName[9]);
                }
              }
            } else {
              const debug = self(fileName[8]).debug;
              debug.warn("No compatible image picker library found. Please provide a valid image picker library.");
            }
          } else {
            const _Object = Object;
            const _Object2 = Object;
            Object.assign(Object.assign({}, self(fileName[11]).defaultConfiguration), self.props).onAddScreenshot((arg0) => {
              const self = arg0;
              const dataFromUri = self(fileName[10]).getDataFromUri(arg0);
              const obj = self(fileName[10]);
              dataFromUri.then((attachment) => {
                if (null != attachment) {
                  const obj = { filename: "feedback_screenshot", attachment, attachmentUri: attachment };
                  attachment.setState(obj);
                } else {
                  const result = attachment._showImageRetrievalDevelopmentNote();
                  const debug = attachment(closure_2[8]).debug;
                  debug.error("Failed to read image data from uri:", attachment);
                }
              }).catch((arg0) => {
                const result = arg0._showImageRetrievalDevelopmentNote();
                const debug = arg0(closure_2[8]).debug;
                debug.error("Failed to read image data from uri:", arg0, "error: ", arg0);
              });
            });
          }
        }
      });
      tmp2Result._setCapturedScreenshot = (data) => {
        if (null != data.data) {
          const debug2 = tmp2Result(closure_2[8]).debug;
          debug2.log("Setting captured screenshot:", data.filename);
          const NATIVE = tmp2Result(closure_2[10]).NATIVE;
          const encodeToBase64Result = NATIVE.encodeToBase64(data.data);
          NATIVE.encodeToBase64(data.data).then((self) => {
            if (null != self) {
              const _HermesInternal = HermesInternal;
              const obj = {};
              ({ filename: obj.filename, data: obj.attachment } = self);
              obj.attachmentUri = "data:" + self.contentType + ";base64," + self;
              self.setState(obj);
            } else {
              const debug = self(closure_2[8]).debug;
              debug.error("Failed to read image data from:", self.filename);
            }
          }).catch((arg0) => {
            const debug = arg0(closure_2[8]).debug;
            debug.error("Failed to read image data from:", arg0.filename, "error: ", arg0);
          });
          const nextPromise = NATIVE.encodeToBase64(data.data).then((self) => {
            if (null != self) {
              const _HermesInternal = HermesInternal;
              const obj = {};
              ({ filename: obj.filename, data: obj.attachment } = self);
              obj.attachmentUri = "data:" + self.contentType + ";base64," + self;
              self.setState(obj);
            } else {
              const debug = self(closure_2[8]).debug;
              debug.error("Failed to read image data from:", self.filename);
            }
          });
        } else {
          const debug = tmp2Result(closure_2[8]).debug;
          debug.error("Failed to read image data from:", data.filename);
        }
      };
      tmp2Result._saveFormState = () => {
        tmp2Result._savedState = Object.assign({}, tmp2Result.state);
      };
      tmp2Result._clearFormState = () => {
        const obj = { "Bool(false)": "french", "Bool(false)": true, "Bool(false)": "/assets/.cache/intl/aW50bA==", filename: undefined, attachment: undefined, attachmentUri: undefined };
        tmp2Result._savedState = obj;
      };
      tmp2Result._hasScreenshot = () => {
        let tmp = undefined !== tmp2Result.state.filename;
        if (tmp) {
          tmp = undefined !== tmp2Result.state.attachment;
        }
        if (tmp) {
          tmp = undefined !== tmp2Result.state.attachmentUri;
        }
        return tmp;
      };
      tmp2Result._getUser = () => {
        const currentScope = tmp2Result(closure_2[8]).getCurrentScope();
        const user = currentScope.getUser();
        if (user) {
          return user;
        } else {
          const isolationScope = tmp2Result(closure_2[8]).getIsolationScope();
          let user1 = isolationScope.getUser();
          if (!user1) {
            const globalScope = tmp2Result(closure_2[8]).getGlobalScope();
            user1 = globalScope.getUser();
            const obj5 = tmp2Result(closure_2[8]);
          }
          return user1;
        }
        const obj = tmp2Result(closure_2[8]);
      };
      tmp2Result._showImageRetrievalDevelopmentNote = () => {
        if (obj.isExpoGo()) {
          tmp2Result(closure_2[7]).feedbackAlertDialog("Development note", "The feedback widget cannot retrieve image data in Expo Go. Please build your app to test this functionality.");
          const obj2 = tmp2Result(closure_2[7]);
        }
      };
      obj = {};
      obj1 = {};
      props = tmp2Result.props;
      useSentryUser = undefined;
      if (null !== props) {
        if (undefined !== props) {
          useSentryUser = props.useSentryUser;
        }
      }
      str = undefined;
      if (null !== useSentryUser) {
        if (undefined !== useSentryUser) {
          str = useSentryUser.email;
        }
      }
      if (!str) {
        _getUserResult = tmp2Result._getUser();
        email = undefined;
        if (null !== _getUserResult) {
          if (undefined !== _getUserResult) {
            email = _getUserResult.email;
          }
        }
        str = email;
      }
      if (!str) {
        str = "";
      }
      obj1.email = str;
      props2 = tmp2Result.props;
      useSentryUser1 = undefined;
      if (null !== props2) {
        if (undefined !== props2) {
          useSentryUser1 = props2.useSentryUser;
        }
      }
      str2 = undefined;
      if (null !== useSentryUser1) {
        if (undefined !== useSentryUser1) {
          str2 = useSentryUser1.name;
        }
      }
      if (!str2) {
        _getUserResult1 = tmp2Result._getUser();
        name = undefined;
        if (null !== _getUserResult1) {
          if (undefined !== _getUserResult1) {
            name = _getUserResult1.name;
          }
        }
        str2 = name;
      }
      if (!str2) {
        str2 = "";
      }
      obj1.name = str2;
      obj.useSentryUser = obj1;
      tmp12 = FeedbackWidget._savedState.name || obj.useSentryUser.name;
      tmp13 = FeedbackWidget._savedState.email || obj.useSentryUser.email;
      tmp14 = FeedbackWidget._savedState.description || "";
      tmp15 = FeedbackWidget._savedState.filename || undefined;
      tmp16 = FeedbackWidget._savedState.attachment || undefined;
      tmp17 = FeedbackWidget._savedState.attachmentUri || undefined;
      tmp2Result.state = { isVisible: true, name: tmp12, email: tmp13, description: tmp14, filename: tmp15, attachment: tmp16, attachmentUri: tmp17 };
      obj5 = FeedbackWidget(closure_2[12]);
      result = obj5.lazyLoadFeedbackIntegration();
      return tmp2Result;
    }
  }
  const arg1 = FeedbackWidget;
  callback2(FeedbackWidget, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const FeedbackWidget = this;
      this._themeListener = closure_9.addChangeListener(() => {
        self.forceUpdate();
      });
    }
  };
  const items = [obj, , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (this._didSubmitForm) {
        self._clearFormState();
        self._didSubmitForm = false;
      } else {
        self._saveFormState();
      }
      if (self._themeListener) {
        const _themeListener = self._themeListener;
        _themeListener.remove();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      let createElement;
      let createElement2;
      let createElement3;
      let createElement4;
      let createElement5;
      let createElement6;
      let description;
      let email;
      let name;
      let props;
      let props2;
      const self = this;
      const FeedbackWidget = this;
      let obj = FeedbackWidget(props2[13]);
      const onFormClose = this.props.onFormClose;
      ({ props, props: props2 } = this);
      const theme = obj.getTheme();
      ({ name, email, description } = this.state);
      const merged = Object.assign(Object.assign({}, onFormClose(props2[14])(theme)), this.props.styles);
      function onCancel() {
        if (onFormClose) {
          onFormClose();
        } else {
          const obj = { isVisible: false };
          self.setState(obj);
        }
      }
      if (this.state.isVisible) {
        let obj1 = FeedbackWidget(props2[15]);
        const capturedScreenshot = obj1.getCapturedScreenshot();
        if ("ErrorCapturingScreenshot" === capturedScreenshot) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => callback(self, undefined, undefined, function*() {
            if (obj) {
              return obj.resume();
            } else {
              callback(closure_2[7]).feedbackAlertDialog(closure_2.errorTitle, closure_2.captureScreenshotError);
            }
          }), 100);
        } else if (capturedScreenshot) {
          const result = self._setCapturedScreenshot(capturedScreenshot);
        }
        obj = { 1449306720: "HTTP", 1643143851: "Date", 1642052689: "HTTP" };
        let obj3 = FeedbackWidget(props2[9]);
        let dismiss;
        if (obj3.notWeb()) {
          dismiss = dismiss.dismiss;
        }
        obj.onPress = dismiss;
        obj = { style: merged.container };
        obj1 = { style: merged.titleContainer };
        const obj2 = { style: merged.title, testID: "sentry-feedback-form-title" };
        ({ createElement, createElement: createElement2 } = React);
        const element = <closure_12 {......obj2}>{props2.formTitle}</closure_12>;
        let showBranding = props.showBranding;
        if (showBranding) {
          obj3 = {};
          const obj4 = { uri: FeedbackWidget(props2[16]).sentryLogo };
          obj3.source = obj4;
          obj3.style = merged.sentryLogo;
          obj3.testID = "sentry-logo";
          showBranding = <closure_10 {......obj3} />;
        }
        const element2 = createElement2(tmp16, obj1, element, showBranding);
        let showName = props.showName;
        if (showName) {
          const Fragment = React.Fragment;
          const obj5 = { style: merged.label };
          const nameLabel = props2.nameLabel;
          let isNameRequired = props.isNameRequired;
          ({ createElement: createElement3, createElement: createElement4 } = React);
          if (isNameRequired) {
            const _HermesInternal = HermesInternal;
            isNameRequired = " " + props2.isRequiredLabel;
          }
          const obj6 = {
            style: merged.input,
            testID: "sentry-feedback-name-input",
            placeholder: props2.namePlaceholder,
            value: name,
            onChangeText(name) {
                  return self.setState({ name });
                }
          };
          const element4 = createElement4(tmp30, obj5, nameLabel, isNameRequired);
          showName = createElement3(Fragment, null, element4, <closure_13 {......obj6} />);
        }
        let showEmail = props.showEmail;
        if (showEmail) {
          const Fragment2 = React.Fragment;
          const obj7 = { style: merged.label };
          const emailLabel = props2.emailLabel;
          let isEmailRequired = props.isEmailRequired;
          ({ createElement: createElement5, createElement: createElement6 } = React);
          if (isEmailRequired) {
            const _HermesInternal2 = HermesInternal;
            isEmailRequired = " " + props2.isRequiredLabel;
          }
          const obj8 = {
            style: merged.input,
            testID: "sentry-feedback-email-input",
            placeholder: props2.emailPlaceholder,
            keyboardType: "email-address",
            value: email,
            onChangeText(email) {
                  return self.setState({ email });
                }
          };
          const element6 = createElement6(tmp43, obj7, emailLabel, isEmailRequired);
          showEmail = createElement5(Fragment2, null, element6, <closure_13 {......obj8} />);
        }
        const obj9 = { style: merged.label };
        const _HermesInternal3 = HermesInternal;
        const element1 = <closure_12 {......obj9}>{props2.messageLabel}{" " + props2.isRequiredLabel}</closure_12>;
        const obj10 = {};
        const items = [, ];
        ({ input: arr[0], textArea: arr[1] } = merged);
        obj10.style = items;
        obj10.testID = "sentry-feedback-message-input";
        obj10.placeholder = props2.messagePlaceholder;
        obj10.value = description;
        obj10.onChangeText = function onChangeText(description) {
          return self.setState({ description });
        };
        obj10.multiline = true;
        const element3 = <closure_13 {......obj10} />;
        const tmp63 = props.enableScreenshot || this.props.imagePicker || self._hasScreenshot();
        if (!tmp63) {
          let obj20 = FeedbackWidget(props2[9]);
          let element5 = obj20.notWeb() && props.enableTakeScreenshot && !self.state.attachmentUri;
          if (element5) {
            const obj11 = {
              style: merged.takeScreenshotButton,
              onPress() {
                      self(props2[17]).hideFeedbackButton();
                      onCancel();
                      const obj = self(props2[17]);
                      self(props2[17]).showScreenshotButton();
                    }
            };
            const obj12 = { style: merged.takeScreenshotText, testID: "sentry-feedback-take-screenshot-button" };
            element5 = <closure_14 {......obj11}><closure_12 {......obj12}>{props2.captureScreenshotButtonLabel}</closure_12></closure_14>;
          }
          const obj13 = { style: merged.submitButton, onPress: self.handleFeedbackSubmit };
          const obj14 = { style: merged.submitText, testID: "sentry-feedback-submit-button" };
          const obj15 = { style: merged.cancelButton, onPress: onCancel };
          const obj16 = { style: merged.cancelText };
          const element7 = <closure_14 {......obj13}><closure_12 {......obj14}>{props2.submitButtonLabel}</closure_12></closure_14>;
          return <tmp10 {......obj}><tmp16 {......obj}>{element2}{showName}{showEmail}{element1}{element3}{tmp63}{element5}{element7}<closure_14 {......obj15}><closure_12 {......obj16}>{props2.cancelButtonLabel}</closure_12></closure_14></tmp16></tmp10>;
        } else {
          const obj17 = { style: merged.screenshotContainer };
          let attachmentUri = self.state.attachmentUri;
          if (attachmentUri) {
            const obj18 = {};
            const obj19 = { uri: self.state.attachmentUri };
            obj18.source = obj19;
            obj18.style = merged.screenshotThumbnail;
            attachmentUri = <closure_10 {......obj18} />;
          }
          obj20 = { style: merged.screenshotButton, onPress: self.onScreenshotButtonPress };
          const obj21 = { style: merged.screenshotText };
          const element8 = <tmp65 {......obj17}>{attachmentUri}<closure_14 {......obj20}><closure_12 {......obj21}>{self._hasScreenshot() ? props2.removeScreenshotButtonLabel : props2.addScreenshotButtonLabel}</closure_12></closure_14></tmp65>;
          const tmp64 = React;
          const tmp69 = closure_14;
          const tmp70 = closure_12;
        }
        const tmp10 = closure_15;
      } else {
        return null;
      }
    }
  };
  items[2] = obj;
  const items1 = [
    {
      key: "reset",
      value: function reset() {
        const obj = { "Bool(false)": "french", "Bool(false)": true, "Bool(false)": "/assets/.cache/intl/aW50bA==", filename: undefined, attachment: undefined, attachmentUri: undefined };
        FeedbackWidget._savedState = obj;
      }
    }
  ];
  return callback(FeedbackWidget, items, items1);
}(importAllResult.Component);
tmp4.defaultProps = arg1(dependencyMap[11]).defaultConfiguration;
const obj = { "Bool(false)": "french", "Bool(false)": true, "Bool(false)": "/assets/.cache/intl/aW50bA==", filename: undefined, attachment: undefined, attachmentUri: undefined };
tmp4._savedState = obj;

export const FeedbackWidget = tmp4;
