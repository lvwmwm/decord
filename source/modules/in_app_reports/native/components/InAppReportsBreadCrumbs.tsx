// Module ID: 12206
// Function ID: 93739
// Name: Breadcrumbs
// Dependencies: []
// Exports: default

// Module 12206 (Breadcrumbs)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Null": false, "Null": false, "Null": false, "Null": false }, title: {}, breadCrumbItemContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.breadCrumbDot = obj;
const obj1 = { "Null": true, "Null": true, "Null": true, alignItems: true, flexDirection: true, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.breadCrumbBar = obj1;
obj.breadCrumbText = {};
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx");

export default function Breadcrumbs(element) {
  element = element.element;
  let obj = Object.create(null);
  obj.element = 0;
  obj.menuName = 0;
  let importDefault;
  const merged = Object.assign(element, obj);
  const tmp3 = callback();
  const arg1 = tmp3;
  if (null != element) {
    if ("breadcrumbs" === element.type) {
      obj = importDefault(dependencyMap[5]);
      const found = obj.flatMap(merged.history, (destination) => {
        let tmp;
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        const items = [];
        let state;
        if (null != multiSelect) {
          state = multiSelect.state;
        }
        if (null == state) {
          state = {};
        }
        const values = Object.values(state);
        if (values.length > 0) {
          items[0] = values.join(", ");
        }
        if ("" !== tmp) {
          items[1] = tmp;
        }
        return items;
      }).filter((arg0) => null != arg0);
      importDefault = found;
      if (0 === found.length) {
        return null;
      } else {
        obj = { style: tmp3.container };
        let map = arg1(dependencyMap[6]).Text;
        let obj1 = { paddingBottom: true, initialRouteName: true, initialRouteStack: true, style: tmp3.title };
        const REPORT_TO_MOD = arg1(dependencyMap[7]).ReportMenuTypeSets.REPORT_TO_MOD;
        const hasItem = REPORT_TO_MOD.has(element.menuName);
        const intl = arg1(dependencyMap[8]).intl;
        const string = intl.string;
        if (hasItem) {
          let stringResult = string(importDefault(tmp18[9]).6mx/DP);
        } else {
          stringResult = string(tmp17(tmp18[8]).t.+3V9Tp);
        }
        obj1.children = stringResult;
        obj1 = [, ];
        obj1[0] = closure_4(map, obj1);
        map = found.map;
        obj1[1] = map((children) => {
          let obj = { style: tmp3.breadCrumbItemContainer };
          let tmp3 = null;
          if (arg1 !== found.length - 1) {
            obj = { style: tmp3.breadCrumbBar };
            tmp3 = callback(closure_3, obj);
          }
          const items = [tmp3, , ];
          obj = { style: tmp3.breadCrumbDot };
          items[1] = callback(closure_3, obj);
          const obj1 = { 9223372036854775807: null, 0: null, 0: null, 0: null, style: tmp3.breadCrumbText, children };
          items[2] = callback(tmp3(closure_2[6]).Text, obj1);
          obj.children = items;
          return closure_5(closure_3, obj, "" + children + "+" + arg1);
        });
        obj.children = obj1;
        closure_5(View, obj);
        const tmp11 = closure_5;
        const tmp12 = View;
        const tmp13 = closure_4;
        const tmp13Result = closure_4(map, obj1);
        const tmp17 = arg1;
      }
      const flatMapResult = obj.flatMap(merged.history, (destination) => {
        let tmp;
        [tmp] = destination.destination;
        const multiSelect = destination.multiSelect;
        const items = [];
        let state;
        if (null != multiSelect) {
          state = multiSelect.state;
        }
        if (null == state) {
          state = {};
        }
        const values = Object.values(state);
        if (values.length > 0) {
          items[0] = values.join(", ");
        }
        if ("" !== tmp) {
          items[1] = tmp;
        }
        return items;
      });
    }
  }
  return null;
};
