// Module ID: 17696
// Function ID: 17697
// Name: OverviewScreen
// Dependencies: [19, 21, 4836, 17697, 1485, 17698, 7870, 7871, 5279, 576, 4832, 1115, 2781, 5999, 8036, 17692, 11405, 17699, 10459, 2]
// Exports: default

// Module 17696 (OverviewScreen)
import SafetyFlowsUtils from "SafetyFlowsUtils" /* 17698 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  let obj = task(17697);
  task = obj.useSafetyFlowTask().task;
  const obj2 = task(1485);
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
  const ModalScreen = task(7870).ModalScreen;
  const ModalContent = task(7871).ModalContent;
  const obj3 = { spacing: navigation(576).space.PX_16, style: tmp.content, children: items1 };
  const Stack = task(5279).Stack;
  const obj4 = { variant: "display-lg", style: tmp.title, children: intl.string(navigation(2781).RRamMH) };
  const Text = task(4832).Text;
  intl = task(1115).intl;
  items1 = [closure_4(Text, obj4), , ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", children: intl2.string(navigation(2781).I2Ctk1) };
  const Text2 = task(4832).Text;
  intl2 = task(1115).intl;
  items1[1] = closure_4(Text2, obj5);
  const obj6 = { spacing: navigation(576).space.PX_8, children: items2 };
  const Stack2 = task(5279).Stack;
  const flow_context = task.flow_context;
  let mapped;
  const TableRowGroup = task(5999).TableRowGroup;
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
  const obj9 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(navigation(2781)["0TnUrG"]) };
  const Text3 = tmp2(4832).Text;
  intl3 = tmp2(1115).intl;
  items2[1] = closure_4(Text3, obj9);
  items1[2] = closure_5(Stack2, obj6);
  items3 = [closure_4(ModalContent, obj8), ];
  const obj10 = { children: items4 };
  const ModalFooter = tmp2(11405).ModalFooter;
  items4 = [closure_4(navigation(17699), {}), ];
  const obj11 = { variant: "primary", text: intl4.string(navigation(2781).Ks6opt), onPress: callback };
  const ModalActionButton = tmp2(10459).ModalActionButton;
  intl4 = tmp2(1115).intl;
  items4[1] = closure_4(ModalActionButton, obj11);
  items3[1] = closure_5(ModalFooter, obj10);
  return closure_5(ModalScreen, obj7);
};
