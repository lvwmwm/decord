// Module ID: 12201
// Function ID: 93726
// Name: UserPreview
// Dependencies: []
// Exports: default

// Module 12201 (UserPreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {} };
obj = { color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.borderColor = obj;
obj.title = {};
const obj1 = { SECURE_FRAMES_TRANSIENT_KEY_DELETE: "-3", GameLinkTypes: "unflip", blockRef: "unflip", fontStyle: "-4", fontWeight: "tts", nl-BQ: "tts", GB: "-6", borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.userContainer = obj1;
obj.userProfileInfo = { marginLeft: 8 };
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default function UserPreview(user) {
  user = user.user;
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  obj = { style: tmp.container };
  obj = { paddingBottom: true, initialRouteName: true, initialRouteStack: true, style: tmp.title };
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
    const obj4 = { INTEGRATION_CREATE: 131072.00119209292, ConstraintReasonCode: -293983030121430100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, children: user.globalName };
    tmp5 = callback(arg1(dependencyMap[6]).Text, obj4);
  }
  const items3 = [tmp5, ];
  const obj5 = { "Bool(false)": false, "Bool(false)": false, children: user.username };
  items3[1] = callback(arg1(dependencyMap[6]).Text, obj5);
  obj3.children = items3;
  items2[1] = closure_4(View, obj3);
  obj1.children = items2;
  items[1] = closure_4(View, obj1);
  obj.children = items;
  return closure_4(View, obj);
};
