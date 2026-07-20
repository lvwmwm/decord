// Module ID: 11192
// Function ID: 87189
// Name: PlaceholderAppRow
// Dependencies: []
// Exports: default

// Module 11192 (PlaceholderAppRow)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { aze: "boolean", azj: "string", borderRadius: importDefault(dependencyMap[4]).radii.sm, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
obj.loadingAppIcon = obj;
obj.loadingTextPlaceholder = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.lg };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.loadingTextPlaceholderSmall = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: importDefault(dependencyMap[4]).radii.lg, alignSelf: "flex-start" };
let closure_4 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: importDefault(dependencyMap[4]).radii.lg, alignSelf: "flex-start" };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/base_components/PlaceholderAppRow.tsx");

export default function PlaceholderAppRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = callback();
  let obj = arg1(dependencyMap[5]);
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = arg1(dependencyMap[5]);
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = {};
  obj = { style: tmp.loadingAppIcon };
  obj.icon = <View {...obj} />;
  obj1 = {};
  const items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  obj1.style = items;
  obj.label = <View {...obj1} />;
  const obj3 = {};
  const items1 = [tmp.loadingTextPlaceholderSmall, ];
  const obj2 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj3.style = items1;
  obj.subLabel = <View {...obj3} />;
  obj.subLabelLineClamp = 1;
  obj.start = flag;
  obj.end = flag2;
  obj.onPress = function onPress() {

  };
  return jsx(arg1(dependencyMap[6]).TableRow, obj);
};
