// Module ID: 12213
// Function ID: 93774
// Name: Breadcrumbs
// Dependencies: []
// Exports: default

// Module 12213 (Breadcrumbs)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { justifyContent: 1375732375, flexDirection: 168038687, marginRight: 37403206, columnGap: 26103040 }, title: {}, breadCrumbItemContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.breadCrumbDot = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.breadCrumbBar = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.breadCrumbText = {};
let closure_6 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
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
        const items = [true, true];
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
        let obj1 = { 1832956803: true, 420134994: true, -1884532042: true, style: tmp3.title };
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
          items[2] = callback(tmp3(closure_2[6]).Text, { style: tmp3.breadCrumbText, children });
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
        const items = [true, true];
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
