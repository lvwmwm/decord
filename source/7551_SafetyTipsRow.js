// Module ID: 7551
// Function ID: 60446
// Name: SafetyTipsRow
// Dependencies: []
// Exports: default

// Module 7551 (SafetyTipsRow)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.round, marginRight: importDefault(dependencyMap[4]).space.PX_4 };
obj.indexContainer = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default function SafetyTipsRow(arg0) {
  let description;
  let end;
  let index;
  let tip;
  ({ index, tip, description, end } = arg0);
  const callback = callback2();
  const obj = {
    icon: jsx((index) => {
      let obj = { style: lib.indexContainer, children: callback(lib(closure_1[6]).Text, obj) };
      obj = { INTEGRATION_CREATE: false, ConstraintReasonCode: false, children: index.index };
      return callback(closure_2, obj);
    }, { index }),
    label: tip,
    subLabel: description,
    end
  };
  return jsx(callback(dependencyMap[5]).TableRow, obj);
};
