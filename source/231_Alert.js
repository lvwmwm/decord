// Module ID: 231
// Function ID: 3230
// Name: Alert
// Dependencies: []

// Module 231 (Alert)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);

export default () => {
  class Alert {
    constructor() {
      tmp = closure_2(this, Alert);
      return;
    }
  }
  const arg1 = Alert;
  let obj = {
    key: "alert",
    value: function alert(Alert, captureScreenshotError, items) {
      let str = Alert;
      let str2 = captureScreenshotError;
      Alert = arg3;
      const _default = Alert(constants[2]).default;
      if (_default) {
        const constants = _default.getConstants();
        let obj = {};
        if (!str) {
          str = "";
        }
        obj.title = str;
        if (!str2) {
          str2 = "";
        }
        obj.message = str2;
        obj.cancelable = false;
        let cancelable = arg3;
        if (arg3) {
          cancelable = arg3.cancelable;
        }
        if (cancelable) {
          obj.cancelable = arg3.cancelable;
        }
        if (items) {
          let substr = items.slice(0, 3);
        } else {
          obj = { text: "OK" };
          substr = [obj];
        }
        let arr = substr.pop();
        arr = substr.pop();
        const arr1 = substr.pop();
        if (arr1) {
          obj.buttonNeutral = arr1.text || "";
        }
        if (arr) {
          obj.buttonNegative = arr.text || "";
        }
        if (arr) {
          obj.buttonPositive = arr.text || "OK";
        }
        _default.showAlert(obj, function onError(arg0) {
          return console.warn(arg0);
        }, function onAction(arg0, arg1) {
          if (arg0 === closure_1.buttonClicked) {
            if (arg1 === closure_1.buttonNeutral) {
              if (arr1.onPress) {
                arr1.onPress();
              }
            } else if (arg1 === closure_1.buttonNegative) {
              if (arr.onPress) {
                arr.onPress();
              }
            } else {
              let onPress = arg1 === closure_1.buttonPositive;
              if (onPress) {
                onPress = arr.onPress;
              }
              if (onPress) {
                arr.onPress();
              }
            }
          } else {
            let onDismiss = arg0 === closure_1.dismissed && arg3;
            if (onDismiss) {
              onDismiss = arg3.onDismiss;
            }
            if (onDismiss) {
              arg3.onDismiss();
            }
          }
        });
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "prompt",
    value: function prompt(arg0, arg1, arg2) {

    }
  };
  items[1] = obj;
  return callback(Alert, null, items);
}();
