// Module ID: 16426
// Function ID: 126911
// Name: SafetyFlowTaskScreen
// Dependencies: []
// Exports: default

// Module 16426 (SafetyFlowTaskScreen)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).createStyles({ header: { textAlign: "center" } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/safety_flows/native/SafetyFlowTaskScreen.tsx");

export default function SafetyFlowTaskScreen(action) {
  let ImageComponent;
  let children;
  let footer;
  let onAction;
  let submitting;
  let subtitle;
  let subtitleColor;
  let withLogout;
  ({ ImageComponent, subtitle, subtitleColor } = action);
  if (subtitleColor === undefined) {
    subtitleColor = "text-strong";
  }
  action = action.action;
  if (action === undefined) {
    action = null;
  }
  ({ footer, withLogout, onAction, children, submitting } = action);
  if (withLogout === undefined) {
    withLogout = true;
  }
  const tmp2 = callback2();
  let obj = {};
  obj = {};
  obj = { top: "Array", bottom: "participantsLength", right: "Array" };
  let tmp4 = null != ImageComponent;
  if (tmp4) {
    tmp4 = ImageComponent;
  }
  const items = [tmp4, , ];
  const obj1 = { 9223372036854775807: "<string:1515257857>", 9223372036854775807: "<string:2080775>", 9223372036854775807: "<string:2264924464>", style: tmp2.header, children: action.title };
  items[1] = callback(arg1(dependencyMap[6]).Text, obj1);
  let tmp5 = null != subtitle;
  if (tmp5) {
    const obj2 = { variant: "text-md/medium", color: subtitleColor, style: tmp2.header, children: subtitle };
    tmp5 = callback(arg1(dependencyMap[7]).TextWithIOSLinkWorkaround, obj2);
  }
  items[2] = tmp5;
  obj.children = items;
  const items1 = [closure_4(arg1(dependencyMap[5]).Stack, obj), children];
  obj.children = items1;
  const items2 = [closure_4(arg1(dependencyMap[4]).ModalContent, obj), ];
  if (undefined === footer) {
    const obj3 = {};
    if (withLogout) {
      withLogout = callback(importDefault(dependencyMap[9]), {});
    }
    const items3 = [withLogout, ];
    let tmp12 = null != action;
    if (tmp12) {
      const obj4 = { variant: "primary", text: action, onPress: onAction, loading: submitting };
      tmp12 = callback(arg1(dependencyMap[10]).ModalActionButton, obj4);
    }
    items3[1] = tmp12;
    obj3.children = items3;
    footer = closure_4(arg1(dependencyMap[8]).ModalFooter, obj3);
    const tmp16 = closure_4;
  }
  items2[1] = footer;
  obj.children = items2;
  return closure_4(arg1(dependencyMap[3]).ModalScreen, obj);
};
