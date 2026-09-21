// Module ID: 18325
// Function ID: 18326
// Name: SafetyFlowsModal
// Dependencies: [32, 19, 21, 7245, 18322, 18326, 18330, 5841, 18332, 18334, 18335, 18336, 18337, 18342, 18343, 18328, 18327, 14454, 2]
// Exports: default

// Module 18325 (SafetyFlowsModal)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/SafetyFlowsModal.tsx");

export default function SafetyFlowsModal(initialRouteName) {
  task = undefined;
  setTask = undefined;
  [task, setTask] = noop.useState(initialRouteName.task);
  const items = [task];
  const navigatorScreens = task(7245).useNavigatorScreens(() => {
    const obj = { [closure_1_0(closure_1_2[4]).SafetyFlowScreens.OVERVIEW]: obj2, [closure_1_0(closure_1_2[4]).SafetyFlowScreens.ENTER_EMAIL]: obj3 };
    const obj4 = {
      headerLeft: first(5841).getHeaderBackButton(),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(18332), {});
      }
    };
    obj[first(18322).SafetyFlowScreens.VERIFY_EMAIL] = obj4;
    obj[first(18322).SafetyFlowScreens.UPDATE_APP] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(18334), {});
      }
    };
    obj[first(18322).SafetyFlowScreens.AGE_VERIFICATION] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(18335), {});
      }
    };
    obj[first(18322).SafetyFlowScreens.PARENTAL_CONSENT_CONNECTION] = {
      headerShown: false,
      customNavbar() {
        return closure_1_5(task(18336).ParentalConsentConnectionNavbar, {});
      },
      render() {
        return closure_1_5(setTask(18337), {});
      }
    };
    obj[first(18322).SafetyFlowScreens.APP_STORE_PARENTAL_REVOCATION] = {
      headerShown: false,
      render() {
        return closure_1_5(setTask(18342), {});
      }
    };
    obj[first(18322).SafetyFlowScreens.ERROR] = {
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(setTask(18343), {});
      }
    };
    return obj;
  }, []);
  const items1 = [task];
  const memo = noop.useMemo(() => {
    let flow_context;
    if (first != null) {
      flow_context = tmp.flow_context;
    }
    if (null == flow_context) {
      return [];
    } else {
      const tasks = tmp.flow_context.tasks;
      if (1 !== tasks.length) {
        const tasks1 = tmp.flow_context.tasks;
        const mapped = tasks1.map((task_type) => task(dependencyMap[15]).getScreensForTaskType(task_type.task_type));
        const found = mapped.filter((item) => null != item);
        let flatResult = found.flat();
      } else {
        flatResult = [];
      }
      return flatResult;
    }
  }, items);
  const memo1 = noop.useMemo(() => ({ task, setTask }), items1);
  let obj = task(7245);
  return jsx(task(18327).SafetyFlowTaskContext.Provider, { value: memo1, children: jsx(task(14454).StepModal, { initialRouteName: initialRouteName.initialScreen, screens: navigatorScreens, steps: memo }) });
};
