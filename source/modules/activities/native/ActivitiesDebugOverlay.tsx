// Module ID: 15698
// Function ID: 119985
// Name: ActivitiesDebugOverlay
// Dependencies: []
// Exports: default

// Module 15698 (ActivitiesDebugOverlay)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsxs: closure_4, jsx: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = {};
const tmp3 = arg1(dependencyMap[2]);
obj.backgroundColor = arg1(dependencyMap[4]).hexWithOpacity(importDefault(dependencyMap[5]).unsafe_rawColors.BLACK, 0.7);
obj.container = obj;
obj.row = { flexDirection: "row" };
let closure_6 = obj.createStyles(obj);
const obj4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/activities/native/ActivitiesDebugOverlay.tsx");

export default function ActivitiesDebugOverlay() {
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[6])();
  let str = "";
  let str2 = "text-overlay-light";
  if (arg1(dependencyMap[6]).ThermalStates.UNHANDLED !== tmp2) {
    str = "nominal";
    str2 = "text-feedback-positive";
    if (arg1(dependencyMap[6]).ThermalStates.NOMINAL !== tmp2) {
      str = "fair";
      str2 = "text-feedback-warning";
      if (arg1(dependencyMap[6]).ThermalStates.FAIR !== tmp2) {
        str = "serious";
        str2 = "text-feedback-critical";
        if (arg1(dependencyMap[6]).ThermalStates.SERIOUS !== tmp2) {
          if (arg1(dependencyMap[6]).ThermalStates.CRITICAL === tmp2) {
            str = "critical";
            str2 = "text-feedback-critical";
          }
        }
      }
    }
  }
  const rect = importDefault(dependencyMap[7])();
  let obj = { style: items, pointerEvents: "none" };
  const items = [tmp.container, ];
  obj = { paddingTop: rect.top + 16, paddingLeft: rect.left + 16 };
  items[1] = obj;
  obj = { style: tmp.row };
  const items1 = [callback(arg1(dependencyMap[8]).Text, { children: [] }), ];
  const obj1 = { variant: "text-md/normal", color: str2, children: str };
  items1[1] = callback2(arg1(dependencyMap[8]).Text, obj1);
  obj.children = items1;
  obj.children = callback(View, obj);
  return callback2(View, obj);
};
