// Module ID: 16560
// Function ID: 129172
// Name: SafetyFlowsModal
// Dependencies: [57, 31, 33, 5519, 16557, 16561, 16565, 5087, 16567, 16569, 16570, 16571, 16572, 16577, 16563, 16562, 13086, 2]
// Exports: default

// Module 16560 (SafetyFlowsModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  const tmp = callback(React.useState(initialRouteName.task), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  let items = [first];
  const items1 = [first];
  const memo = React.useMemo(() => {
    let flow_context;
    if (null != first) {
      flow_context = first.flow_context;
    }
    if (null == flow_context) {
      return [];
    } else {
      const tasks = first.flow_context.tasks;
      if (1 === tasks.length) {
        if (tasks[0].task_type === first(outer1_2[4]).TaskType.PARENTAL_CONSENT_CONNECTION) {
          let items = [];
        }
        return items;
      }
      const tasks1 = first.flow_context.tasks;
      const mapped = tasks1.map((task_type) => first(outer2_2[14]).getScreensForTaskType(task_type.task_type));
      const found = mapped.filter((arg0) => null != arg0);
      items = found.flat();
    }
  }, items);
  const memo1 = React.useMemo(() => ({ task: first, setTask: closure_1 }), items1);
  let obj = {
    value: memo1,
    children: jsx(first(13086).StepModal, {
      initialRouteName: initialRouteName.initialScreen,
      screens: (function useScreens() {
        return first(outer1_2[3]).useNavigatorScreens(() => {
          obj = { [outer2_0(outer2_2[4]).SafetyFlowScreens.OVERVIEW]: obj, [outer2_0(outer2_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj };
          obj = {
            headerLeft() {
              return null;
            },
            headerShown: false,
            render() {
              return outer3_5(callback(outer3_2[5]), {});
            }
          };
          obj = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[6]), {});
            }
          };
          const obj1 = {
            headerLeft: first(outer2_2[7]).getHeaderBackButton(),
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[8]), {});
            }
          };
          obj[first(outer2_2[4]).SafetyFlowScreens.VERIFY_EMAIL] = obj1;
          obj[first(outer2_2[4]).SafetyFlowScreens.UPDATE_APP] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[9]), {});
            }
          };
          obj[first(outer2_2[4]).SafetyFlowScreens.AGE_VERIFICATION] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[10]), {});
            }
          };
          obj[first(outer2_2[4]).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
            headerShown: false,
            customNavbar() {
              return outer3_5(first(outer3_2[11]).ParentalConsentConnectionNavbar, {});
            },
            render() {
              return outer3_5(callback(outer3_2[12]), {});
            }
          };
          obj[first(outer2_2[4]).SafetyFlowScreens.ERROR] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[13]), {});
            }
          };
          return obj;
        }, []);
      })(),
      steps: memo
    })
  };
  return jsx(first(16562).SafetyFlowTaskContext.Provider, {
    value: memo1,
    children: jsx(first(13086).StepModal, {
      initialRouteName: initialRouteName.initialScreen,
      screens: (function useScreens() {
        return first(outer1_2[3]).useNavigatorScreens(() => {
          obj = { [outer2_0(outer2_2[4]).SafetyFlowScreens.OVERVIEW]: obj, [outer2_0(outer2_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj };
          obj = {
            headerLeft() {
              return null;
            },
            headerShown: false,
            render() {
              return outer3_5(callback(outer3_2[5]), {});
            }
          };
          obj = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[6]), {});
            }
          };
          const obj1 = {
            headerLeft: first(outer2_2[7]).getHeaderBackButton(),
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[8]), {});
            }
          };
          obj[first(outer2_2[4]).SafetyFlowScreens.VERIFY_EMAIL] = obj1;
          obj[first(outer2_2[4]).SafetyFlowScreens.UPDATE_APP] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[9]), {});
            }
          };
          obj[first(outer2_2[4]).SafetyFlowScreens.AGE_VERIFICATION] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[10]), {});
            }
          };
          obj[first(outer2_2[4]).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
            headerShown: false,
            customNavbar() {
              return outer3_5(first(outer3_2[11]).ParentalConsentConnectionNavbar, {});
            },
            render() {
              return outer3_5(callback(outer3_2[12]), {});
            }
          };
          obj[first(outer2_2[4]).SafetyFlowScreens.ERROR] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return outer3_5(callback(outer3_2[13]), {});
            }
          };
          return obj;
        }, []);
      })(),
      steps: memo
    })
  });
};
