// Module ID: 15321
// Function ID: 116680
// Name: ShowAllRow
// Dependencies: []
// Exports: default

// Module 15321 (ShowAllRow)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { labelContainer: { -9223372036854775808: true, filter: true } };
obj = { marginLeft: importDefault(dependencyMap[4]).space.PX_12 };
obj.showAllText = obj;
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ShowAllRow.tsx");

export default function ShowAllRow(users) {
  let count;
  let onPress;
  users = users.users;
  ({ onPress, count } = users);
  const tmp = callback3();
  let obj = { 9223372036854775807: 1107296989, 0: 1107296807, 0: false, onPress };
  obj = { style: tmp.labelContainer };
  obj = { size: arg1(dependencyMap[7]).AvatarSizes.XSMALL_20, aria-label: "" };
  const substr = users.slice(0, 2);
  obj.children = substr.map((getAvatarSource) => {
    const obj = { source: getAvatarSource.getAvatarSource(null, false, callback(closure_1[7]).AVATAR_SIZE_MAP[closure_0(undefined, closure_1[7]).AvatarSizes.XSMALL]), size: callback(closure_1[7]).AvatarSizes.XSMALL_20 };
    return callback2(callback(closure_1[7]).Avatar, obj, arg1);
  });
  const items = [callback(arg1(dependencyMap[6]).AvatarDuoPile, obj), ];
  const obj1 = { style: tmp.showAllText };
  const intl = arg1(dependencyMap[9]).intl;
  obj1.children = intl.format(arg1(dependencyMap[9]).t.NrzztX, { count });
  items[1] = callback(arg1(dependencyMap[8]).Text, obj1);
  obj.children = items;
  obj.label = callback2(View, obj);
  obj.trailing = callback(arg1(dependencyMap[5]).TableRow.Arrow, {});
  return callback(arg1(dependencyMap[5]).TableRow, obj);
};
