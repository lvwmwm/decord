// Module ID: 12208
// Function ID: 93761
// Name: UserPreview
// Dependencies: []
// Exports: default

// Module 12208 (UserPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true } };
obj = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.borderColor = obj;
obj.title = {};
const tmp3 = arg1(dependencyMap[2]);
obj.userContainer = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.userProfileInfo = { marginLeft: 8 };
let closure_5 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[4]).radii.sm };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default function UserPreview(user) {
  user = user.user;
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  obj = { style: tmp.container };
  obj = { 1832956803: true, 420134994: true, -1884532042: true, style: tmp.title };
  const intl = arg1(dependencyMap[7]).intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj.children = intl.string(arg1(dependencyMap[7]).t.Rsth7z).toUpperCase();
  const items = [callback(arg1(dependencyMap[6]).Text, obj), ];
  const obj1 = { style: items1 };
  const items1 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  const obj2 = { size: arg1(dependencyMap[8]).AvatarSizes.LARGE_48, user, guildId: undefined };
  const items2 = [callback(arg1(dependencyMap[8]).Avatar, obj2), ];
  const obj3 = { style: tmp.userProfileInfo };
  let tmp5 = null != user.globalName;
  if (tmp5) {
    const obj4 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold", children: user.globalName };
    tmp5 = callback(arg1(dependencyMap[6]).Text, obj4);
  }
  const items3 = [tmp5, ];
  const obj5 = { "Null": false, "Null": false, children: user.username };
  items3[1] = callback(arg1(dependencyMap[6]).Text, obj5);
  obj3.children = items3;
  items2[1] = closure_4(View, obj3);
  obj1.children = items2;
  items[1] = closure_4(View, obj1);
  obj.children = items;
  return closure_4(View, obj);
};
