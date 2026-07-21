// Module ID: 13532
// Function ID: 102654
// Name: SafetyHubErrorActionSheet
// Dependencies: []
// Exports: default

// Module 13532 (SafetyHubErrorActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { cix: 0, y: 0, isArray: 0, paddingTop: importDefault(dependencyMap[4]).space.PX_8, paddingBottom: importDefault(dependencyMap[4]).space.PX_24, gap: importDefault(dependencyMap[4]).space.PX_16, minHeight: 120 };
obj.errorContainer = obj;
const obj1 = { height: 41861036943961820000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, width: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011323354719505784, borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.WHITE, marginHorizontal: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000252816181077777 };
obj.redesignErrorIconContainer = obj1;
obj.redesignErrorIcon = {};
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default function SafetyHubErrorActionSheet(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const tmp4 = callback3();
    const tmp7 = importDefault(dependencyMap[5])();
    let obj = {};
    obj = {};
    const items = [tmp4.errorContainer];
    obj.style = items;
    obj = {};
    const items1 = [tmp4.redesignErrorIconContainer];
    obj.style = items1;
    const obj1 = { size: "custom", color: importDefault(dependencyMap[4]).colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
    const items2 = [tmp4.redesignErrorIcon];
    obj1.style = items2;
    obj.children = callback(arg1(dependencyMap[7]).CircleXIcon, obj1);
    const items3 = [callback(View, obj), ];
    const obj2 = { variant: "heading-lg/normal" };
    const intl = arg1(dependencyMap[9]).intl;
    obj2.children = intl.string(arg1(dependencyMap[9]).t.TDRvqs);
    items3[1] = callback(arg1(dependencyMap[8]).Text, obj2);
    obj.children = items3;
    const items4 = [callback2(View, obj), ];
    const obj3 = {
      onPress() {
          return callback(closure_3[11]).getSafetyHubData();
        }
    };
    const intl2 = arg1(dependencyMap[9]).intl;
    obj3.text = intl2.string(arg1(dependencyMap[9]).t.R1AN4F);
    obj3.loading = tmp7;
    obj3.disabled = tmp7;
    items4[1] = callback(arg1(dependencyMap[10]).Button, obj3);
    obj.children = items4;
    return callback2(arg1(dependencyMap[6]).BottomSheet, obj);
  }
};
