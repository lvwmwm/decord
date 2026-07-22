// Module ID: 15469
// Function ID: 117980
// Name: Settings
// Dependencies: []
// Exports: default

// Module 15469 (Settings)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = { containerOuter: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, borderRadius: importDefault(dependencyMap[4]).radii.md, flex: 1 };
obj.containerOuterTablet = obj;
obj.container = { flex: 1 };
const obj1 = { "Null": null, "Null": null, position: null, borderRadius: importDefault(dependencyMap[4]).radii.md };
obj.containerTablet = obj1;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default function Settings() {
  let obj = arg1(dependencyMap[5]);
  const reportProfileModalTransition = obj.useReportProfileModalTransition();
  const rect = importDefault(dependencyMap[6])();
  const top = rect.top;
  const arg1 = top;
  const left = rect.left;
  const importDefault = left;
  const right = rect.right;
  const dependencyMap = right;
  let tmp2 = importDefault(dependencyMap[7])();
  if (tmp2) {
    tmp2 = !arg1(dependencyMap[8]).isIpadOS();
    const obj2 = arg1(dependencyMap[8]);
  }
  const React = tmp2;
  const tmp5 = callback();
  const View = tmp5;
  const items = [tmp5, tmp2, top, left, right];
  obj = {
    style: React.useMemo(() => {
      if (tmp2) {
        const items = [tmp.containerOuterTablet, ];
        let obj = { paddingTop: top, paddingLeft: left, paddingRight: right };
        items[1] = obj;
        let items1 = items;
        const tmp5 = left;
      } else {
        items1 = [tmp.containerOuter, ];
        obj = { paddingLeft: left, paddingRight: right };
        items1[1] = obj;
        const tmp2 = left;
      }
      return items1;
    }, items)
  };
  obj = { style: tmp2 ? tmp5.containerTablet : tmp5.container, children: jsx(importDefault(dependencyMap[10]), {}) };
  obj.children = jsx(importDefault(dependencyMap[9]).View, obj);
  return <View {...obj} />;
};
