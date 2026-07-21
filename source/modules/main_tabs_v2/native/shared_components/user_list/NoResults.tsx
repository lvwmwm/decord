// Module ID: 9884
// Function ID: 76524
// Name: NoResults
// Dependencies: []
// Exports: default

// Module 9884 (NoResults)
importAll(dependencyMap[0]);
({ View: closure_2, ScrollView: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ headerContainer: { paddingHorizontal: 16 }, container: {}, image: { marginBottom: 12 }, textContainer: { "Null": null, "Null": null }, text: { "Bool(true)": "/assets/design/components/Illustration/native/redesign/generated/images", "Bool(true)": 160 }, fullHeightContentContainer: { "Null": -536870861, "Null": -299892737 }, fullHeightScrollContent: { flexGrow: 1 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx");

export default function NoResults(illustration) {
  let children;
  let containerStyle;
  let fullHeight;
  let subtitle;
  let title;
  ({ subtitle, fullHeight } = illustration);
  ({ title, children, containerStyle } = illustration);
  if (fullHeight === undefined) {
    fullHeight = false;
  }
  illustration = illustration.illustration;
  const tmp = callback2();
  let obj = { style: items, alwaysBounceVertical: false };
  const items = [tmp.headerContainer];
  let fullHeightScrollContent = fullHeight;
  if (fullHeight) {
    fullHeightScrollContent = tmp.fullHeightScrollContent;
  }
  obj.contentContainerStyle = fullHeightScrollContent;
  obj = {};
  const items1 = [tmp.container, , ];
  if (fullHeight) {
    fullHeight = tmp.fullHeightContentContainer;
  }
  items1[1] = fullHeight;
  items1[2] = containerStyle;
  obj.style = items1;
  let tmp6 = null != illustration;
  if (tmp6) {
    obj = { style: tmp.image, children: callback(illustration, {}) };
    tmp6 = callback(closure_2, obj);
  }
  const items2 = [tmp6, ];
  const obj1 = { style: tmp.textContainer };
  const items3 = [callback(arg1(dependencyMap[4]).Text, { style: tmp.text, children: title }), ];
  let tmp11 = null;
  if (null != subtitle) {
    const obj3 = { style: tmp.text, children: subtitle };
    tmp11 = callback(arg1(dependencyMap[4]).Text, obj3);
  }
  items3[1] = tmp11;
  obj1.children = items3;
  items2[1] = closure_5(closure_2, obj1);
  obj.children = items2;
  const items4 = [closure_5(closure_2, obj), children];
  obj.children = items4;
  return closure_5(closure_3, obj);
};
