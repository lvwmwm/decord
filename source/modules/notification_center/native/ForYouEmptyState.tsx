// Module ID: 15052
// Function ID: 113312
// Name: ForYouEmptyState
// Dependencies: [989855744, 990707712, 990773248, 990838784, 990904320, 990969856, 991035392, 991100928]
// Exports: ForYouEmptyState

// Module 15052 (ForYouEmptyState)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ image: { marginBottom: 16 }, container: { 1722596256: "isArray", 995407798: "container", HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: "isArray" }, headerText: {}, text: { textAlign: "center" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/notification_center/native/ForYouEmptyState.tsx");

export const ForYouEmptyState = function ForYouEmptyState(height) {
  const tmp = callback3();
  let obj = { style: items };
  const items = [tmp.container, { height: height.height }];
  obj = { style: tmp.image, children: callback(arg1(dependencyMap[4]).MailboxSpotIllustration, { scale: 0.75 }) };
  const items1 = [callback(View, obj), , ];
  obj = { style: items2 };
  const items2 = [, ];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.MwjTvn);
  items1[1] = callback(arg1(dependencyMap[5]).Text, obj);
  const obj1 = { style: tmp.text };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[6]).t.AKBgPy);
  items1[2] = callback(arg1(dependencyMap[5]).Text, obj1);
  obj.children = items1;
  return callback2(View, obj);
};
