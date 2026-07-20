// Module ID: 8201
// Function ID: 64863
// Name: InfoBox
// Dependencies: []
// Exports: default

// Module 8201 (InfoBox)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.xs, borderColor: importDefault(dependencyMap[4]).colors.TEXT_LINK, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_INFO };
obj.infoBox = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.infoBoxWarning = { borderColor: importDefault(dependencyMap[4]).colors.ICON_FEEDBACK_WARNING, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_WARNING };
obj.infoText = { flex: 1 };
let closure_6 = obj.createStyles(obj);
const obj2 = { INFO: "info", WARNING: "warning" };
const obj1 = { borderColor: importDefault(dependencyMap[4]).colors.ICON_FEEDBACK_WARNING, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_WARNING };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/authorized_apps/native/InfoBox.tsx");

export default function InfoBox(look) {
  let children;
  let style;
  let INFO = look.look;
  ({ children, style } = look);
  if (INFO === undefined) {
    INFO = obj2.INFO;
  }
  const tmp2 = callback3();
  const items = [tmp2.infoBox];
  const items1 = [, ];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp2);
  let obj = {};
  obj = { color: importDefault(dependencyMap[4]).colors.TEXT_LINK };
  obj[obj2.INFO] = callback(arg1(dependencyMap[5]).CircleInformationIcon, obj);
  obj = { color: importDefault(dependencyMap[4]).colors.ICON_FEEDBACK_WARNING };
  obj[obj2.WARNING] = callback(arg1(dependencyMap[6]).CircleErrorIcon, obj);
  const obj1 = {};
  const items2 = [style, ...{ [closure_7.INFO]: items, [closure_7.WARNING]: items1 }[INFO]];
  obj1.style = items2;
  const items3 = [obj[INFO], ];
  const obj2 = { style: tmp2.infoText, variant: "text-sm/semibold", children };
  items3[1] = callback(arg1(dependencyMap[7]).Text, obj2);
  obj1.children = items3;
  return callback2(View, obj1);
};
export const InfoBoxLooks = obj2;
