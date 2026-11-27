// Module ID: 20070
// Function ID: 20071
// Name: IntegrationSettingsActionCreators
// Dependencies: [5, 572, 20071, 8574, 19199, 2]

// Module 20070 (IntegrationSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5;

let obj = {
  init() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
  },
  setSection(section) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = null;
    }
    const obj = DispatcherDefault;
    const obj2 = { type: "INTEGRATION_SETTINGS_SET_SECTION", section, sectionId: tmp };
    obj.dispatch(obj2);
  },
  startEditingCommandPermissions(commandId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND", commandId };
    obj.dispatch(obj2);
  },
  stopEditingCommandPermissions(commandId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND", commandId };
    obj.dispatch(obj2);
  },
  startEditingIntegration(integrationId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION", integrationId };
    obj.dispatch(obj2);
  },
  stopEditingIntegration() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION" });
  },
  updateIntegration(settings) {
    const obj = DispatcherDefault;
    const obj2 = { type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION", settings };
    obj.dispatch(obj2);
  },
  startEditingWebhook(webhookId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK", webhookId };
    obj.dispatch(obj2);
  },
  stopEditingWebhook() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
  },
  updateWebhook(settings) {
    const obj = DispatcherDefault;
    const obj2 = { type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK", settings };
    obj.dispatch(obj2);
  },
  saveApplicationPermissions(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async (arg0, value) => {
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              c3 = 1;
              const obj8 = closure_0(closure_2[1]);
              obj8.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" });
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj9.saveApplicationPermissions(closure_0, tmp, closure_2), done: false };
              obj9 = tmp(closure_2[2]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const obj6 = { type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: closure_0.body };
              const obj3 = closure_0(closure_2[1]);
              obj3.dispatch(obj6);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const obj = closure_0(closure_2[1]);
              obj.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          closure_2 = tmp17;
          if (0 === c3) {
            c5 = 3;
            throw tmp17;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  saveIntegration(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              c3 = 1;
              const obj8 = closure_0(closure_2[1]);
              obj8.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" });
              const obj9 = closure_0(closure_2[3]);
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj9.updateIntegration(closure_0, tmp.id, tmp.expire_behavior, tmp.expire_grace_period, tmp.enable_emoticons), done: false };
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const obj6 = { type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: closure_0.body };
              const obj3 = closure_0(closure_2[1]);
              obj3.dispatch(obj6);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const obj = closure_0(closure_2[1]);
              obj.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          closure_2 = tmp17;
          if (0 === c3) {
            c5 = 3;
            throw tmp17;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  saveWebhook(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async (arg0, value) => {
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const id = tmp;
              closure_0 = tmp4;
              c3 = 1;
              const obj8 = closure_0(closure_2[1]);
              obj8.dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" });
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj9.update(closure_0, id.id, id), done: false };
              obj9 = closure_0(closure_2[4]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const obj6 = { type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: closure_0.body };
              const obj3 = closure_0(closure_2[1]);
              obj3.dispatch(obj6);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const obj = closure_0(closure_2[1]);
              obj.dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          closure_2 = tmp17;
          if (0 === c3) {
            c5 = 3;
            throw tmp17;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
};
const result = size.fileFinishedImporting("actions/IntegrationSettingsActionCreators.tsx");

export default obj;
