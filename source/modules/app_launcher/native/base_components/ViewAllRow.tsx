// Module ID: 11202
// Function ID: 87237
// Name: ViewAllRow
// Dependencies: []
// Exports: default

// Module 11202 (ViewAllRow)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

export default function ViewAllRow(title) {
  title = title.title;
  let obj = {};
  let formatToPlainStringResult;
  if (null != title) {
    const intl = arg1(dependencyMap[5]).intl;
    obj = { title };
    formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[5]).t.bj/2kV, obj);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj = { style: callback().expandCTALabelContainer };
  const obj1 = {};
  const intl2 = arg1(dependencyMap[5]).intl;
  obj1.children = intl2.format(arg1(dependencyMap[5]).t.gVw57p, {});
  obj.children = jsx(arg1(dependencyMap[6]).Text, obj1);
  obj.label = <View {...obj} />;
  obj.onPress = title.onPress;
  obj.end = true;
  return jsx(arg1(dependencyMap[4]).TableRow, obj);
};
