// Module ID: 15128
// Function ID: 114184
// Name: UnavailableNotice
// Dependencies: []
// Exports: default

// Module 15128 (UnavailableNotice)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.brightTitle = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.unavailableContainer = { justifyContent: "center" };
obj.unavailableInfo = {};
obj.unavailableDescription = {};
obj.joinCtaTitle = {};
let closure_6 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx");

export default function UnavailableNotice(brightTitle) {
  let description;
  let title;
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = callback2();
  let obj = { style: items };
  const items = [, ];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  obj = { style: tmp.unavailableInfo };
  obj = { source: importDefault(dependencyMap[6]) };
  const items1 = [callback(importDefault(dependencyMap[5]), obj), , ];
  const obj1 = {};
  const items2 = [tmp.joinCtaTitle, ];
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  obj1.style = items2;
  obj1.children = title;
  items1[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  items1[2] = callback(arg1(dependencyMap[7]).Text, { style: tmp.unavailableDescription, children: description });
  obj.children = items1;
  obj.children = closure_5(View, obj);
  return callback(View, obj);
};
