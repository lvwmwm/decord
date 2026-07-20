// Module ID: 15108
// Function ID: 114024
// Name: ICYMIBottomLoading
// Dependencies: []
// Exports: ICYMIBottomLoading

// Module 15108 (ICYMIBottomLoading)
importAll(dependencyMap[0]);
({ View: closure_2, ActivityIndicator: closure_3 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp3 = arg1(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[3]).createStyles(() => {
  let obj = {};
  obj = { paddingTop: importDefault(dependencyMap[4]).space.PX_8, paddingBottom: importDefault(dependencyMap[4]).space.PX_24, alignItems: "center", justifyContent: "center" };
  obj.container = obj;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/icymi/native/ICYMIBottomLoading.tsx");

export const ICYMIBottomLoading = function ICYMIBottomLoading() {
  return <closure_2 style={callback().container}><closure_3 size="small" /></closure_2>;
};
