// Module ID: 4468
// Function ID: 39484
// Name: useAlertStore
// Dependencies: []
// Exports: dismissAlert, dismissAlerts, openAlert

// Module 4468 (useAlertStore)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = obj.create(() => ({ alerts: [] }));
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/AlertModal/native/useAlertStore.native.tsx");

export const useAlertStore = obj;
export const dismissAlerts = function dismissAlerts() {
  const alerts = obj.getState().alerts;
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
  const arg1 = first;
  const importDefault = arr4;
  const obj = arg1(dependencyMap[2]);
  obj.batchUpdates(() => {
    state.setState({ alerts: arr4 });
    const item = first.forEach((onDismiss) => {
      let onDismissResult;
      if (null != onDismiss.onDismiss) {
        onDismissResult = onDismiss.onDismiss();
      }
      return onDismissResult;
    });
  });
  if (tmp3) {
    importDefault(dependencyMap[3])();
  }
};
export const dismissAlert = function dismissAlert(closure_6) {
  const arg1 = closure_6;
  const alerts = obj.getState().alerts;
  const found = alerts.find((key) => key.key === key);
  const importDefault = found;
  if (null != found) {
    let tmp2 = 1 === alerts.length;
    if (tmp2) {
      const first = alerts[0];
      let key;
      if (null != first) {
        key = first.key;
      }
      tmp2 = key === closure_6;
    }
    const obj = arg1(dependencyMap[2]);
    obj.batchUpdates(() => {
      state.setState((alerts) => {
        alerts = alerts.alerts;
        return { alerts: alerts.filter((key) => key.key !== closure_0) };
      });
      if (null != found.onDismiss) {
        found.onDismiss();
      }
    });
    if (tmp2) {
      importDefault(dependencyMap[3])();
    }
  }
};
export const openAlert = function openAlert(VOICE_PANEL_SPOILER_KEY, arg1, onCloseCallback, arg3) {
  arg1 = VOICE_PANEL_SPOILER_KEY;
  const importDefault = arg1;
  const dependencyMap = onCloseCallback;
  let closure_3 = arg3;
  if (0 === obj.getState().alerts.length) {
    importDefault(dependencyMap[4])();
  }
  const obj = arg1(dependencyMap[2]);
  obj.batchUpdates(() => {
    state.setState((alerts) => {
      let obj = {};
      const items = [...alerts.alerts];
      obj = { key: closure_0, node: closure_1, onDismiss: closure_2 };
      let dismissable;
      if (null != dismissable) {
        dismissable = dismissable.dismissable;
      }
      obj.dismissable = dismissable;
      items[tmp] = obj;
      obj.alerts = items;
      return obj;
    });
  });
};
