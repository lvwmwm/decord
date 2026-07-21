// Module ID: 14558
// Function ID: 109716
// Name: showAgeVerificationTestModal
// Dependencies: []
// Exports: default

// Module 14558 (showAgeVerificationTestModal)
function showAgeVerificationTestModal() {
  return _showAgeVerificationTestModal(...arguments);
}
function _showAgeVerificationTestModal() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _showAgeVerificationTestModal = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.content = { padding: importDefault(dependencyMap[5]).space.PX_16 };
let closure_7 = obj.createStyles(obj);
const obj1 = { padding: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx");

export default function DevToolsAgeVerificationScreen() {
  const tmp = callback4();
  let obj = { style: tmp.container };
  const items = [tmp.content, ];
  obj = { paddingBottom: tmp.content.padding + importDefault(dependencyMap[10])().bottom };
  items[1] = obj;
  obj.contentContainerStyle = items;
  obj = { "Bool(false)": true, "Bool(false)": "/assets/.cache/intl/bW9kdWxlcy9jbGlwcw==" };
  const obj1 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: callback2(arg1(dependencyMap[13]).KeyIcon, {}), trailing: callback2(arg1(dependencyMap[14]).TableRowArrow, {}) };
  const items1 = [callback2(arg1(dependencyMap[12]).TableRow, obj1), ];
  const obj2 = {
    label: "Launch Age Verification Modal",
    onPress() {
      let obj = callback2(closure_2[7]);
      obj = { entryPoint: callback(closure_2[9]).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS };
      return obj.showAgeVerificationGetStartedModal(obj);
    },
    icon: callback2(arg1(dependencyMap[13]).KeyIcon, {}),
    trailing: callback2(arg1(dependencyMap[14]).TableRowArrow, {})
  };
  items1[1] = callback2(arg1(dependencyMap[12]).TableRow, obj2);
  obj.children = items1;
  obj.children = callback3(arg1(dependencyMap[11]).TableRowGroup, obj);
  return callback2(ScrollView, obj);
};
