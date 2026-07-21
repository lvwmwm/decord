// Module ID: 16436
// Function ID: 126982
// Name: OverviewScreen
// Dependencies: []
// Exports: default

// Module 16436 (OverviewScreen)
let closure_3 = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[2]).createStyles({ content: { borderWidth: 2018574337, bundleWidth: -1371467309, bundleHeight: 838861392, pfxWidth: 0, pfxHeight: 1079042048 }, title: {} });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/safety_flows/native/OverviewScreen.tsx");

export default function OverviewScreen() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[3]);
  const task = obj.useSafetyFlowTask().task;
  const arg1 = task;
  let obj1 = arg1(dependencyMap[4]);
  const navigation = obj1.useNavigation();
  const importDefault = navigation;
  const items = [task, navigation];
  const callback = React.useCallback(() => {
    const screensForTaskType = task(closure_2[5]).getScreensForTaskType(task.task_type);
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
  obj1 = { spacing: importDefault(dependencyMap[9]).space.PX_16, style: tmp.content };
  const obj2 = { variant: "display-lg", style: tmp.title };
  const intl = arg1(dependencyMap[11]).intl;
  obj2.children = intl.string(importDefault(dependencyMap[12]).RRamMH);
  const items1 = [callback(arg1(dependencyMap[10]).Text, obj2), , ];
  const obj3 = { hasMaxConnections: 0.184, isBoostOnlySubscription: 1 };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj3.children = intl2.string(importDefault(dependencyMap[12]).I2Ctk1);
  items1[1] = callback(arg1(dependencyMap[10]).Text, obj3);
  const obj4 = { spacing: importDefault(dependencyMap[9]).space.PX_8 };
  const obj5 = { hasIcons: true };
  const flow_context = task.flow_context;
  let mapped;
  if (null != flow_context) {
    const tasks = flow_context.tasks;
    if (null != tasks) {
      mapped = tasks.map((task_type) => {
        const obj = { tip: task(closure_2[15]).TASK_TYPE_TO_TITLE[task_type.task_type], index: arg1 + 1 };
        return callback(navigation(closure_2[14]), obj, task_type.task_type);
      });
    }
  }
  obj5.children = mapped;
  const items2 = [callback(arg1(dependencyMap[13]).TableRowGroup, obj5), ];
  const obj6 = { hasMaxConnections: 0.0392156862745098, isBoostOnlySubscription: "OPACITY_44" };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj6.children = intl3.string(importDefault(dependencyMap[12]).0TnUrG);
  items2[1] = callback(arg1(dependencyMap[10]).Text, obj6);
  obj4.children = items2;
  items1[2] = callback2(arg1(dependencyMap[8]).Stack, obj4);
  obj1.children = items1;
  obj.children = callback2(arg1(dependencyMap[8]).Stack, obj1);
  const items3 = [callback(arg1(dependencyMap[7]).ModalContent, obj), ];
  const obj7 = {};
  const items4 = [callback(importDefault(dependencyMap[17]), {}), ];
  const obj8 = { variant: "primary" };
  const intl4 = arg1(dependencyMap[11]).intl;
  obj8.text = intl4.string(importDefault(dependencyMap[12]).Ks6opt);
  obj8.onPress = callback;
  items4[1] = callback(arg1(dependencyMap[18]).ModalActionButton, obj8);
  obj7.children = items4;
  items3[1] = callback2(arg1(dependencyMap[16]).ModalFooter, obj7);
  obj.children = items3;
  return callback2(arg1(dependencyMap[6]).ModalScreen, obj);
};
