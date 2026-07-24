// Module ID: 4472
// Function ID: 39517
// Name: useAlertStore
// Dependencies: [57, 621, 682, 4473, 4474, 2]
// Exports: dismissAlert, dismissAlerts, openAlert

// Module 4472 (useAlertStore)
import _slicedToArray from "_slicedToArray";
import keys from "keys";

const require = arg1;
keys = keys.create(() => ({ alerts: [] }));
const result = require("batchUpdates").fileFinishedImporting("design/components/AlertModal/native/useAlertStore.native.tsx");

export const useAlertStore = keys;
export const dismissAlerts = function dismissAlerts() {
  const alerts = keys.getState().alerts;
  const items = [[], []];
  const tmp = callback(alerts.reduce((arg0, dismissable) => {
    let num = 0;
    if (false === dismissable.dismissable) {
      num = 1;
    }
    let arr = arg0[num];
    arr = arr.push(dismissable);
    return arg0;
  }, items), 2);
  const first = tmp[0];
  const arr4 = tmp[1];
  first(682).batchUpdates(() => {
    outer1_4.setState({ alerts: arr4 });
    const item = first.forEach((onDismiss) => {
      let onDismissResult;
      if (null != onDismiss.onDismiss) {
        onDismissResult = onDismiss.onDismiss();
      }
      return onDismissResult;
    });
  });
  if (tmp3) {
    arr4(4473)();
  }
};
export const dismissAlert = function dismissAlert(c6) {
  const _require = c6;
  let alerts = keys.getState().alerts;
  const found = alerts.find((key) => key.key === closure_0);
  if (null != found) {
    let tmp2 = 1 === alerts.length;
    if (tmp2) {
      const first = alerts[0];
      let key;
      if (null != first) {
        key = first.key;
      }
      tmp2 = key === c6;
    }
    _require(682).batchUpdates(() => {
      outer1_4.setState((alerts) => {
        alerts = alerts.alerts;
        return { alerts: alerts.filter((key) => key.key !== outer2_0) };
      });
      if (null != found.onDismiss) {
        found.onDismiss();
      }
    });
    if (tmp2) {
      found(4473)();
    }
    const obj = _require(682);
  }
};
export const openAlert = function openAlert(VOICE_PANEL_SPOILER_KEY, arg1, onCloseCallback, arg3) {
  const _require = VOICE_PANEL_SPOILER_KEY;
  const importDefault = arg1;
  const dependencyMap = onCloseCallback;
  let _slicedToArray = arg3;
  if (0 === keys.getState().alerts.length) {
    importDefault(4474)();
  }
  _require(682).batchUpdates(() => {
    outer1_4.setState((alerts) => {
      let obj = {};
      const items = [...alerts.alerts];
      obj = { key: outer1_0, node: outer1_1, onDismiss: outer1_2 };
      let dismissable;
      if (null != outer1_3) {
        dismissable = outer1_3.dismissable;
      }
      obj.dismissable = dismissable;
      items[tmp] = obj;
      obj.alerts = items;
      return obj;
    });
  });
};
