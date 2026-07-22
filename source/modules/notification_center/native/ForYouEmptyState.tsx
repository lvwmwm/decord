// Module ID: 15060
// Function ID: 113355
// Name: ForYouEmptyState
// Dependencies: [0, 0, 0, 0, 0]
// Exports: ForYouEmptyState

// Module 15060 (ForYouEmptyState)
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_3, jsxs: closure_4 } = __exportStarResult1);
let closure_5 = __exportStarResult1.createStyles({ image: { marginBottom: 16 }, container: {}, headerText: {}, text: { textAlign: "center" } });
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
  const obj1 = { "Null": "row", "Null": "center", style: tmp.text };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[6]).t.AKBgPy);
  items1[2] = callback(arg1(dependencyMap[5]).Text, obj1);
  obj.children = items1;
  return callback2(View, obj);
};
