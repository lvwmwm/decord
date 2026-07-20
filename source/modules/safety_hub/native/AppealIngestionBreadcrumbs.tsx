// Module ID: 11034
// Function ID: 85920
// Name: AppealIngestionBreadcrumbs
// Dependencies: []
// Exports: default

// Module 11034 (AppealIngestionBreadcrumbs)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Null": "<string:4150329346>", "Null": "<string:4294963570>", "Null": "FORCE_SEND_PROMPT" }, title: {}, breadCrumbItemContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.breadCrumbDot = obj;
const obj1 = { "Null": true, "Null": true, "Null": true, alignItems: true, flexDirection: true, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.breadCrumbBar = obj1;
obj.breadCrumbText = {};
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default function AppealIngestionBreadcrumbs(reasons) {
  reasons = reasons.reasons;
  const tmp = callback3();
  const arg1 = tmp;
  let tmp2 = null;
  if (0 !== reasons.length) {
    let obj = { style: tmp.container };
    obj = { paddingBottom: true, initialRouteName: true, initialRouteStack: true, style: tmp.title };
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
          const obj1 = { 9223372036854775807: null, 0: null, 0: null, 0: null, style: tmp.breadCrumbText, children };
          items[2] = callback(tmp(closure_1[5]).Text, obj1);
          obj.children = items;
          return callback2(closure_2, obj, "" + children + "+" + arg1);
        })
    ];
    obj.children = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};
