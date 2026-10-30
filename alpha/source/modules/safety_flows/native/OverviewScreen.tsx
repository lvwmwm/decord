// Module ID: 20018
// Function ID: 20019
// Name: OverviewScreen
// Dependencies: [19, 21, 5009, 20019, 1498, 20020, 7964, 7965, 6022, 575, 5619, 1114, 2835, 7054, 8152, 20014, 13158, 20021, 13370, 2]
// Exports: default

// Module 20018 (OverviewScreen)
import SafetyFlowsUtils from "SafetyFlowsUtils" /* 20020 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const result = size.fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default function OverviewScreen() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let task;
  let tmp = closure_6();
  let obj = task(20019);
  task = obj.useSafetyFlowTask().task;
  const obj2 = task(1498);
  navigation = obj2.useNavigation();
  const items = [task, navigation];
  const callback = react.useCallback(() => {
    const obj = SafetyFlowsUtils;
    const screensForTaskType = obj.getScreensForTaskType(task.task_type);
    const tmp = null != screensForTaskType && screensForTaskType.length > 0 && null != screensForTaskType[0];
    if (tmp) {
      navigation.push(screensForTaskType[0]);
    }
  }, items);
  const ModalScreen = task(7964).ModalScreen;
  const ModalContent = task(7965).ModalContent;
  const obj3 = { spacing: navigation(575).space.PX_16, style: tmp.content, children: items1 };
  const Stack = task(6022).Stack;
  const obj4 = { variant: "display-lg", style: tmp.title, children: intl.string(navigation(2835).RRamMH) };
  const Text = task(5619).Text;
  intl = task(1114).intl;
  items1 = [closure_4(Text, obj4), , ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", children: intl2.string(navigation(2835).I2Ctk1) };
  const Text2 = task(5619).Text;
  intl2 = task(1114).intl;
  items1[1] = closure_4(Text2, obj5);
  const obj6 = { spacing: navigation(575).space.PX_8, children: items2 };
  const Stack2 = task(6022).Stack;
  const flow_context = task.flow_context;
  let mapped;
  const TableRowGroup = task(7054).TableRowGroup;
  if (flow_context != null) {
    const tasks = flow_context.tasks;
    if (tasks != null) {
      mapped = tasks.map((task_type, index) => {
        const obj = { tip: task(dependencyMap[15]).TASK_TYPE_TO_TITLE[task_type.task_type], index: index + 1 };
        const tmp = navigation(dependencyMap[14]);
        return closure_1_4(tmp, obj, task_type.task_type);
      });
    }
  }
  const obj7 = { children: items3 };
  const obj8 = { children: closure_5(Stack, obj3) };
  items2 = [closure_4(TableRowGroup, { hasIcons: true, children: mapped }), ];
  const obj9 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(navigation(2835)["0TnUrG"]) };
  const Text3 = tmp2(5619).Text;
  intl3 = tmp2(1114).intl;
  items2[1] = closure_4(Text3, obj9);
  items1[2] = closure_5(Stack2, obj6);
  items3 = [closure_4(ModalContent, obj8), ];
  const obj10 = { children: items4 };
  const ModalFooter = tmp2(13158).ModalFooter;
  items4 = [closure_4(navigation(20021), {}), ];
  const obj11 = { variant: "primary", text: intl4.string(navigation(2835).Ks6opt), onPress: callback };
  const ModalActionButton = tmp2(13370).ModalActionButton;
  intl4 = tmp2(1114).intl;
  items4[1] = closure_4(ModalActionButton, obj11);
  items3[1] = closure_5(ModalFooter, obj10);
  return closure_5(ModalScreen, obj7);
};
