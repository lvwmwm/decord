// Module ID: 14709
// Function ID: 110961
// Name: HomeDrawerSharedItem
// Dependencies: []
// Exports: HomeDrawerSharedItem

// Module 14709 (HomeDrawerSharedItem)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsxs: closure_1, jsx: closure_2 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_3 = arg1(dependencyMap[3]).createStyles({ container: {}, titleContainer: { isAgeVerificationIncodeEnabled: true, GuildMemberSafetyPageStore: 0, cardImageAssetId: 0.5, seenEffectIds: 3 }, rightContainer: { overflow: "hidden" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerShared.tsx");

export const HomeDrawerSharedItem = function HomeDrawerSharedItem(right) {
  let subtitle;
  let title;
  right = right.right;
  ({ title, subtitle } = right);
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.titleContainer, children: items };
  const items = [title, subtitle];
  const items1 = [callback(View, obj), ];
  let tmp4 = null;
  if (null != right) {
    obj = { style: tmp.rightContainer, children: right };
    tmp4 = callback2(View, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return callback(View, obj);
};
