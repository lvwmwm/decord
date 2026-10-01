// Module ID: 17695
// Function ID: 17696
// Name: SafetyFlowsModal
// Dependencies: [32, 19, 21, 6421, 17692, 17696, 17700, 5936, 17702, 17704, 17705, 17706, 17707, 17713, 17714, 17698, 17697, 13993, 2]
// Exports: default

// Module 17695 (SafetyFlowsModal)
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialScreen) {
  let setTask;
  let task;
  task = undefined;
  setTask = undefined;
  initialScreen = initialScreen.initialScreen;
  [task, setTask] = react.useState(initialScreen.task);
  let obj = task(6421);
  const items = [task];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj2;
    let obj3;
    let obj5;
    const obj = { [closure_1_0(closure_1_2[4]).SafetyFlowScreens.OVERVIEW]: obj2, [closure_1_0(closure_1_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj3 };
    obj2 = {
      headerLeft() {
        return null;
      },
      headerShown: false,
      render() {
        return closure_1_5(setTask(closure_1_2[5]), {});
      }
    };
    obj3 = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(closure_1_2[6]), {});
      }
    };
    const obj4 = {
      headerLeft: obj5.getHeaderBackButton(),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(closure_1_2[8]), {});
      }
    };
    const VERIFY_EMAIL = first(dependencyMap[4]).SafetyFlowScreens.VERIFY_EMAIL;
    obj[VERIFY_EMAIL] = obj4;
    obj[first(dependencyMap[4]).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(closure_1_2[9]), {});
      }
    };
    obj[first(dependencyMap[4]).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(closure_1_2[10]), {});
      }
    };
    obj[first(dependencyMap[4]).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return closure_1_5(task(closure_1_2[11]).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return closure_1_5(setTask(closure_1_2[12]), {});
      }
    };
    obj[first(dependencyMap[4]).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
      headerShown: false,
      render() {
        return closure_1_5(setTask(closure_1_2[13]), {});
      }
    };
    obj[first(dependencyMap[4]).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(closure_1_2[14]), {});
      }
    };
    obj5 = first(dependencyMap[7]);
    return obj;
  }, []);
  const items1 = [task];
  const memo = react.useMemo(() => {
    let flow_context;
    if (first != null) {
      flow_context = tmp.flow_context;
    }
    if (null == flow_context) {
      return [];
    } else {
      let flatResult;
      const tasks = tmp.flow_context.tasks;
      if (1 !== tasks.length) {
        const tasks1 = tmp.flow_context.tasks;
        const mapped = tasks1.map((task_type) => {
          const obj = task(closure_1_2[15]);
          return obj.getScreensForTaskType(task_type.task_type);
        });
        const found = mapped.filter((item) => null != item);
        flatResult = found.flat();
      } else {
        flatResult = [];
      }
      return flatResult;
    }
  }, items);
  const memo1 = react.useMemo(() => ({ task, setTask }), items1);
  const Provider = task(17697).SafetyFlowTaskContext.Provider;
  return <Provider value={memo1}>{null}</Provider>;
};
