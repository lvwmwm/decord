// Module ID: 16561
// Function ID: 129198
// Name: OverviewScreen
// Dependencies: [31, 33, 4130, 16562, 1456, 16563, 7572, 7573, 4541, 689, 4126, 1212, 2460, 5503, 7562, 16557, 11071, 16564, 9905, 2]
// Exports: default

// Module 16561 (OverviewScreen)
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ content: { margin: "auto", overflow: "visible", justifyContent: "center", textAlign: "center", alignItems: "center" }, title: { textAlign: "center", textTransform: "uppercase", lineHeight: 50 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default function OverviewScreen() {
  let tmp = callback3();
  let obj = task(16562);
  task = obj.useSafetyFlowTask().task;
  let obj1 = task(1456);
  const navigation = obj1.useNavigation();
  const items = [task, navigation];
  const callback = React.useCallback(() => {
    const screensForTaskType = task(outer1_2[5]).getScreensForTaskType(task.task_type);
    let tmp = null != screensForTaskType;
    if (tmp) {
      tmp = screensForTaskType.length > 0;
    }
    if (tmp) {
      tmp = null != screensForTaskType[0];
    }
    if (tmp) {
      navigation.push(screensForTaskType[0]);
    }
  }, items);
  obj = {};
  obj = {};
  obj1 = { spacing: navigation(689).space.PX_16, style: tmp.content };
  const obj2 = { variant: "display-lg", style: tmp.title };
  const intl = task(1212).intl;
  obj2.children = intl.string(navigation(2460).RRamMH);
  const items1 = [callback(task(4126).Text, obj2), , ];
  const obj3 = { variant: "text-md/medium", color: "text-strong" };
  const intl2 = task(1212).intl;
  obj3.children = intl2.string(navigation(2460).I2Ctk1);
  items1[1] = callback(task(4126).Text, obj3);
  const obj4 = { spacing: navigation(689).space.PX_8 };
  const obj5 = { hasIcons: true };
  const flow_context = task.flow_context;
  let mapped;
  if (null != flow_context) {
    const tasks = flow_context.tasks;
    if (null != tasks) {
      mapped = tasks.map((task_type) => {
        const obj = { tip: task(outer1_2[15]).TASK_TYPE_TO_TITLE[task_type.task_type], index: arg1 + 1 };
        return outer1_4(navigation(outer1_2[14]), obj, task_type.task_type);
      });
    }
  }
  obj5.children = mapped;
  const items2 = [callback(task(5503).TableRowGroup, obj5), ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted" };
  const intl3 = task(1212).intl;
  obj6.children = intl3.string(navigation(2460)["0TnUrG"]);
  items2[1] = callback(task(4126).Text, obj6);
  obj4.children = items2;
  items1[2] = callback2(task(4541).Stack, obj4);
  obj1.children = items1;
  obj.children = callback2(task(4541).Stack, obj1);
  const items3 = [callback(task(7573).ModalContent, obj), ];
  const obj7 = {};
  const items4 = [callback(navigation(16564), {}), ];
  const obj8 = { variant: "primary" };
  const intl4 = task(1212).intl;
  obj8.text = intl4.string(navigation(2460).Ks6opt);
  obj8.onPress = callback;
  items4[1] = callback(task(9905).ModalActionButton, obj8);
  obj7.children = items4;
  items3[1] = callback2(task(11071).ModalFooter, obj7);
  obj.children = items3;
  return callback2(task(7572).ModalScreen, obj);
};
