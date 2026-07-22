// Module ID: 14321
// Function ID: 108171
// Name: DemoModal
// Dependencies: []
// Exports: default

// Module 14321 (DemoModal)
function DemoModal() {
  // CreateGeneratorClosureLongIndex (0x67)
  const callback = React.useCallback(callback(tmp), []);
  const obj = { <string:1348720225>: true, <string:1549981689>: "/assets/images/native/icons" };
  const items = [jsx(arg1(dependencyMap[4]).AlertActionButton, { onPress: callback }, "clear"), jsx(arg1(dependencyMap[4]).AlertActionButton, { onPress: callback }, "cancel")];
  obj.actions = items;
  return jsx(arg1(dependencyMap[4]).AlertModal, obj);
}
function openDemoModal() {
  arg1(dependencyMap[5]).openAlert("demo-1", <DemoModal />);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[6]).createStyles({ container: { split: true, pos: true, borderRadius: true } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAlertModal.tsx");

export default function UserSettingsDesignSystemAlertModal() {
  let obj = {};
  obj = { style: callback2().container, children: jsx(arg1(dependencyMap[7]).Button, obj) };
  obj = { onPress: openDemoModal, text: "Show Alert" };
  obj.children = <closure_4 {...obj} />;
  return <closure_5 {...obj} />;
};
