// Module ID: 12216
// Function ID: 93790
// Name: MultiSelect
// Dependencies: []
// Exports: default

// Module 12216 (MultiSelect)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingVertical: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx");

export default function MultiSelect(arg0) {
  let element;
  ({ element, onPress: closure_0, state: closure_1 } = arg0);
  if (null != element) {
    if ("checkbox" === element.type) {
      const data = element.data;
      let obj = { style: tmp.container };
      obj = {
        hasIcons: false,
        children: data.map((arg0) => {
              let tmp;
              let tmp2;
              let tmp3;
              [tmp, tmp2, tmp3] = arg0;
              return callback2(callback(closure_1[6]).TableCheckboxRow, {
                label: tmp2,
                subLabel: tmp3,
                onPress() {
                  return callback(callback, closure_1);
                },
                checked: tmp in closure_1
              }, tmp);
            })
      };
      obj.children = jsx(arg1(dependencyMap[5]).TableRowGroup, obj);
      return <View {...obj} />;
    }
  }
  return null;
};
