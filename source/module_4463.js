// Module ID: 4463
// Function ID: 39405
// Dependencies: []

// Module 4463
importAll(dependencyMap[0]);
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = null;
let closure_7 = 0;
const obj = {
  openLazy(hideActionSheet) {
    let flag = hideActionSheet.hideActionSheet;
    if (flag === undefined) {
      flag = true;
    }
    const arg1 = flag;
    let flag2 = hideActionSheet.isDismissable;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const importDefault = flag2;
    return hideActionSheet.importer().then((alert) => {
      if (flag) {
        let obj = flag2(closure_2[2]);
        obj.hideActionSheet();
      }
      obj = { type: "ALERT_OPEN", alert, isDismissable: flag2 };
      flag2(closure_2[3]).dispatch(obj);
    });
  },
  close() {
    if (null != closure_6) {
      closure_6 = null;
      arg1(dependencyMap[4]).dismissAlert(closure_6);
      const obj = arg1(dependencyMap[4]);
    }
    importDefault(dependencyMap[3]).dispatch({ type: "ALERT_CLOSE" });
  },
  show(hideActionSheet) {
    let body;
    let body2;
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
      const intl = arg1(dependencyMap[5]).intl;
      confirmText = intl.string(arg1(dependencyMap[5]).t.BddRzS);
    }
    const arg1 = confirmText;
    let obj = {};
    Object.setPrototypeOf(null);
    const merged = Object.assign(hideActionSheet, obj);
    const importDefault = merged;
    let dependencyMap;
    let callback;
    let closure_4;
    let closure_5;
    let obj1 = arg1(dependencyMap[6]);
    if (obj1.isMobileVisualRefreshEnabled("AlertActionCreators")) {
      obj = {};
      const merged1 = Object.assign(merged);
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
          let obj3 = importDefault(dependencyMap[2]);
          obj3.hideActionSheet();
        }
        if (null != closure_6) {
          let obj4 = arg1(dependencyMap[4]);
          obj4.dismissAlert(closure_6);
        }
        let obj5 = importDefault(dependencyMap[3]);
        obj = { type: "ALERT_CLOSE" };
        obj5.dispatch(obj);
        let closure_7 = tmp24 + 1;
        const text = `legacy-alert-${tmp24}`;
        dependencyMap = text;
        closure_6 = text;
        ({ cancelText, onConfirm: closure_3, onCancel: closure_4 } = merged);
        closure_5 = false;
        ({ title, body: body2, children, confirmColor } = merged);
        const obj8 = arg1(dependencyMap[4]);
        obj1 = { title, content: body2, extraContent: children };
        const obj2 = {};
        obj3 = {
          variant: arg1(dependencyMap[8]).getAlertButtonVariant(confirmColor),
          text: confirmText,
          onPress() {
                let closure_5 = true;
                if (null != _undefined) {
                  _undefined();
                }
              }
        };
        const items = [callback(arg1(dependencyMap[7]).AlertActionButton, obj3), ];
        let tmp30 = null;
        if (null != cancelText) {
          obj4 = {
            variant: "secondary",
            text: cancelText,
            onPress() {
                    let closure_5 = true;
                    if (null != _undefined2) {
                      _undefined2();
                    }
                  }
          };
          tmp30 = callback(arg1(dependencyMap[7]).AlertActionButton, obj4);
        }
        items[1] = tmp30;
        obj2.children = items;
        obj1.actions = closure_5(closure_4, obj2);
        obj5 = { dismissable: true === isDismissable };
        obj8.openAlert(text, callback(arg1(dependencyMap[7]).AlertModal, obj1), () => {
          let tmp = closure_5;
          if (!closure_5) {
            tmp = null == _undefined2;
          }
          if (!tmp) {
            _undefined2();
          }
          if (closure_6 === text) {
            closure_6 = null;
          }
        }, obj5);
        const obj12 = arg1(dependencyMap[8]);
        const tmp27 = callback;
        const tmp28 = closure_5;
        const tmp29 = closure_4;
      }
    }
    if (null != closure_6) {
      arg1(dependencyMap[4]).dismissAlert(closure_6);
      closure_6 = null;
      const obj15 = arg1(dependencyMap[4]);
    }
    const obj6 = {
      importer() {
        return confirmText(text[10])(text[9], text.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(closure_1);
            obj["confirmText"] = closure_0;
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
    const arg1 = this;
    const importDefault = arg0;
    return new Promise((arg0) => {
      const self = arg0;
      const obj = {
        onConfirm() {
          arg0(true);
        }
      };
      const intl = self(closure_2[5]).intl;
      obj.cancelText = intl.string(self(closure_2[5]).t.ETE/oC);
      obj.onCancel = function onCancel() {
        arg0(false);
      };
      const merged = Object.assign(arg0);
      self.show(obj);
    });
  }
};
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("actions/native/AlertActionCreators.tsx");

export default obj;
