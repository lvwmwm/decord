// Module ID: 11039
// Function ID: 85952
// Name: AppealIngestionBreadcrumbs
// Dependencies: []
// Exports: default

// Module 11039 (AppealIngestionBreadcrumbs)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true }, title: {}, breadCrumbItemContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.breadCrumbDot = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.breadCrumbBar = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.breadCrumbText = {};
let closure_5 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default function AppealIngestionBreadcrumbs(reasons) {
  reasons = reasons.reasons;
  const tmp = callback3();
  const arg1 = tmp;
  let tmp2 = null;
  if (0 !== reasons.length) {
    let obj = { style: tmp.container };
    obj = { 1832956803: true, 420134994: true, -1884532042: true, style: tmp.title };
    const intl = arg1(dependencyMap[6]).intl;
    obj.children = intl.string(arg1(dependencyMap[6]).t.eQg0Ck);
    const items = [
      callback(arg1(dependencyMap[5]).Text, obj),
      reasons.map((children) => {
          let obj = { style: tmp.breadCrumbItemContainer };
          obj = { style: tmp.breadCrumbBar };
          const items = [callback(closure_2, obj), , ];
          obj = { style: tmp.breadCrumbDot };
          items[1] = callback(closure_2, obj);
          items[2] = callback(tmp(closure_1[5]).Text, { style: tmp.breadCrumbText, children });
          obj.children = items;
          return callback2(closure_2, obj, "" + children + "+" + arg1);
        })
    ];
    obj.children = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};
