// Module ID: 13691
// Function ID: 103627
// Name: FamilyCenterLinkRow
// Dependencies: []
// Exports: default

// Module 13691 (FamilyCenterLinkRow)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UserLinkStatus = arg1(dependencyMap[2]).UserLinkStatus;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).createStyles({ actionContainer: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(children) {
  const otherUser = children.otherUser;
  let obj = { userId: otherUser.id };
  const tmp = callback3();
  obj = { otherUser, status: UserLinkStatus.PENDING };
  const items = [callback(importDefault(dependencyMap[6]), obj), ];
  obj = { style: tmp.actionContainer, children: children.actions };
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(importDefault(dependencyMap[5]), obj);
};
