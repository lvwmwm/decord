// Module ID: 4471
// Function ID: 39501
// Dependencies: [31, 33, 4098, 686, 4472, 1212, 1324, 4475, 4561, 4561, 1934, 2]

// Module 4471
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
let c6 = null;
let c7 = 0;
const result = require("showActionSheet").fileFinishedImporting("actions/native/AlertActionCreators.tsx");

export default {
  openLazy(hideActionSheet) {
    let flag = hideActionSheet.hideActionSheet;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = hideActionSheet.isDismissable;
    if (flag2 === undefined) {
      flag2 = false;
    }
    return hideActionSheet.importer().then((alert) => {
      if (flag) {
        let obj = flag2(outer1_2[2]);
        obj.hideActionSheet();
      }
      obj = { type: "ALERT_OPEN", alert, isDismissable: flag2 };
      flag2(outer1_2[3]).dispatch(obj);
    });
  },
  close() {
    if (null != c6) {
      c6 = null;
      require(4472) /* useAlertStore */.dismissAlert(c6);
      const obj = require(4472) /* useAlertStore */;
    }
    importDefault(686).dispatch({ type: "ALERT_CLOSE" });
  },
  show(hideActionSheet) {
    let body;
    let body2;
    let c3;
    let c4;
    let cancelText;
    let children;
    let confirmColor;
    let confirmText;
    let confirmText2;
    let isDismissable;
    let title;
    const self = this;
    let flag = hideActionSheet.hideActionSheet;
    if (flag === undefined) {
      flag = true;
    }
    ({ isDismissable, confirmText } = hideActionSheet);
    if (confirmText === undefined) {
      const intl = confirmText(1212).intl;
      confirmText = intl.string(confirmText(1212).t.BddRzS);
    }
    let obj = { hideActionSheet: 0, isDismissable: 0, confirmText: 0 };
    Object.setPrototypeOf(null);
    let merged = Object.assign(hideActionSheet, obj);
    let dependencyMap;
    let callback;
    c4 = undefined;
    let c5;
    let obj1 = confirmText(1324);
    if (obj1.isMobileVisualRefreshEnabled("AlertActionCreators")) {
      obj = {};
      let merged1 = Object.assign(merged);
      obj["confirmText"] = confirmText;
      obj["isDismissable"] = isDismissable;
      ({ body, confirmText: confirmText2 } = obj);
      let tmp8 = null != body;
      if (tmp8) {
        tmp8 = "string" !== typeof body;
      }
      if (tmp8) {
        const _Array = Array;
        tmp8 = !Array.isArray(body);
      }
      let tmp10 = null == obj.title;
      if (!tmp10) {
        tmp10 = "" === obj.title;
      }
      if (!tmp10) {
        let tmp11 = null != confirmText2;
        if (tmp11) {
          tmp11 = "string" !== typeof confirmText2;
        }
        tmp10 = tmp11;
      }
      if (!tmp10) {
        tmp10 = tmp8;
      }
      if (!tmp10) {
        tmp10 = null != obj.footer;
      }
      if (!tmp10) {
        tmp10 = null != obj.helpText;
      }
      if (!tmp10) {
        tmp10 = null != obj.renderConfirmButton;
      }
      if (!tmp10) {
        tmp10 = null != obj.renderConfirmIcon;
      }
      if (!tmp10) {
        tmp10 = null != obj.renderConfirmRightIcon;
      }
      if (!tmp10) {
        tmp10 = true === obj.noDefaultButtons;
      }
      if (!tmp10) {
        tmp10 = null != obj.secondaryConfirmText;
      }
      if (!tmp10) {
        tmp10 = null != obj.onConfirmSecondary;
      }
      if (!tmp10) {
        tmp10 = true === obj.isConfirmButtonDisabled;
      }
      if (!tmp10) {
        tmp10 = null != obj.confirming;
      }
      if (!tmp10) {
        tmp10 = null != obj.style;
      }
      if (!tmp10) {
        tmp10 = true === obj.fillCancelText;
      }
      if (!tmp10) {
        tmp10 = false === obj.autoCloseOnConfirm;
      }
      if (!tmp10) {
        tmp10 = null != obj.onClose;
      }
      if (!tmp10) {
        if (flag) {
          let obj3 = merged(4098);
          obj3.hideActionSheet();
        }
        if (null != c6) {
          let obj4 = confirmText(4472);
          obj4.dismissAlert(c6);
        }
        let obj5 = merged(686);
        obj = { type: "ALERT_CLOSE" };
        obj5.dispatch(obj);
        let closure_7 = tmp24 + 1;
        const text = `legacy-alert-${tmp24}`;
        dependencyMap = text;
        c6 = text;
        ({ cancelText, onConfirm: c3, onCancel: c4 } = merged);
        c5 = false;
        ({ title, body: body2, children, confirmColor } = merged);
        const obj8 = confirmText(4472);
        obj1 = { title, content: body2, extraContent: children };
        const obj2 = {};
        obj3 = {
          variant: confirmText(4561).getAlertButtonVariant(confirmColor),
          text: confirmText,
          onPress() {
                let c5 = true;
                if (null != _undefined2) {
                  _undefined2();
                }
              }
        };
        const items = [callback(confirmText(4475).AlertActionButton, obj3), ];
        let tmp30 = null;
        if (null != cancelText) {
          obj4 = {
            variant: "secondary",
            text: cancelText,
            onPress() {
                    let c5 = true;
                    if (null != _undefined3) {
                      _undefined3();
                    }
                  }
          };
          tmp30 = callback(confirmText(4475).AlertActionButton, obj4);
        }
        items[1] = tmp30;
        obj2.children = items;
        obj1.actions = c5(c4, obj2);
        obj5 = { dismissable: true === isDismissable };
        obj8.openAlert(text, callback(confirmText(4475).AlertModal, obj1), () => {
          let tmp = c5;
          if (!c5) {
            tmp = null == _undefined3;
          }
          if (!tmp) {
            _undefined3();
          }
          if (c6 === c2) {
            c6 = null;
          }
        }, obj5);
        const obj12 = confirmText(4561);
        const tmp27 = callback;
        const tmp28 = c5;
        const tmp29 = c4;
      }
    }
    if (null != c6) {
      confirmText(4472).dismissAlert(c6);
      c6 = null;
      const obj15 = confirmText(4472);
    }
    const obj6 = {
      importer() {
        return confirmText(_undefined[10])(_undefined[9], _undefined.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(outer2_1);
            obj["confirmText"] = outer2_0;
            return callback(closure_0, obj);
          };
        });
      },
      hideActionSheet: flag,
      isDismissable
    };
    self.openLazy(obj6);
  },
  confirm(arg0) {
    const self = this;
    let closure_1 = arg0;
    return new Promise((arg0) => {
      const _self = arg0;
      const obj = {
        onConfirm() {
          callback(true);
        }
      };
      const intl = self(outer1_2[5]).intl;
      obj.cancelText = intl.string(self(outer1_2[5]).t["ETE/oC"]);
      obj.onCancel = function onCancel() {
        callback(false);
      };
      const merged = Object.assign(closure_1);
      _self.show(obj);
    });
  }
};
