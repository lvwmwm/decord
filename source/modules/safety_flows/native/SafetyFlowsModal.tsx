// Module ID: 16427
// Function ID: 126895
// Name: SafetyFlowsModal
// Dependencies: []
// Exports: default

// Module 16427 (SafetyFlowsModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  const tmp = callback(React.useState(initialRouteName.task), 2);
  const first = tmp[0];
  const arg1 = first;
  let closure_1 = tmp[1];
  const items = [first];
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
        if (tasks[0].task_type === first(closure_2[4]).TaskType.PARENTAL_CONSENT_CONNECTION) {
          let items = [];
        }
        return items;
      }
      const tasks1 = first.flow_context.tasks;
      const mapped = tasks1.map((task_type) => callback(closure_2[14]).getScreensForTaskType(task_type.task_type));
      const found = mapped.filter((arg0) => null != arg0);
      items = found.flat();
    }
  }, items);
  const memo1 = React.useMemo(() => ({ task: first, setTask: closure_1 }), items1);
  const obj = {
    value: memo1,
    children: jsx(arg1(dependencyMap[16]).StepModal, {
      initialRouteName: initialRouteName.initialScreen,
      screens: function useScreens() {
        return first(closure_2[3]).useNavigatorScreens(() => {
          let obj = { [closure_0(closure_2[4]).SafetyFlowScreens.OVERVIEW]: obj, [closure_0(closure_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj };
          obj = {
            headerLeft() {
              return null;
            },
            headerShown: false,
            render() {
              return callback3(callback2(closure_2[5]), {});
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
              return callback3(callback2(closure_2[6]), {});
            }
          };
          const obj1 = {
            headerLeft: callback(closure_2[7]).getHeaderBackButton(),
            headerTitle() {
              return null;
            },
            render() {
              return callback3(callback2(closure_2[8]), {});
            }
          };
          obj[callback(closure_2[4]).SafetyFlowScreens.VERIFY_EMAIL] = obj1;
          obj[callback(closure_2[4]).SafetyFlowScreens.UPDATE_APP] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return callback3(callback2(closure_2[9]), {});
            }
          };
          obj[callback(closure_2[4]).SafetyFlowScreens.AGE_VERIFICATION] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return callback3(callback2(closure_2[10]), {});
            }
          };
          obj[callback(closure_2[4]).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
            headerShown: false,
            customNavbar() {
              return callback3(callback(closure_2[11]).ParentalConsentConnectionNavbar, {});
            },
            render() {
              return callback3(callback2(closure_2[12]), {});
            }
          };
          obj[callback(closure_2[4]).SafetyFlowScreens.ERROR] = {
            headerLeft() {
              return null;
            },
            headerTitle() {
              return null;
            },
            render() {
              return callback3(callback2(closure_2[13]), {});
            }
          };
          return obj;
        }, []);
      }(),
      steps: memo
    })
  };
  return jsx(arg1(dependencyMap[15]).SafetyFlowTaskContext.Provider, obj);
};
