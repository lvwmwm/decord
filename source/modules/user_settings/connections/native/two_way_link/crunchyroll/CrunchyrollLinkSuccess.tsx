// Module ID: 8988
// Function ID: 70791
// Name: CrunchyrollLinkDiscordSuccess
// Dependencies: []
// Exports: default

// Module 8988 (CrunchyrollLinkDiscordSuccess)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ image: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx");

export default function CrunchyrollLinkDiscordSuccess(onClose) {
  let obj = arg1(dependencyMap[4]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  const tmp = callback3();
  const items = [callback(closure_3, { source: importDefault(dependencyMap[5]), style: callback3().image }), , ];
  const obj2 = { style: twoWayLinkStyles.title };
  const intl = arg1(dependencyMap[7]).intl;
  obj2.children = intl.string(arg1(dependencyMap[7]).t.Fnvxvk);
  items[1] = callback(arg1(dependencyMap[6]).Text, obj2);
  const obj3 = { hasMaxConnections: 1, isBoostOnlySubscription: 1, style: twoWayLinkStyles.body };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[7]).t.YwXceg);
  items[2] = callback(arg1(dependencyMap[6]).Text, obj3);
  obj.children = items;
  const items1 = [callback2(closure_4, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj5 = { style: twoWayLinkStyles.footerButton };
  const obj6 = { size: "md" };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj6.text = intl3.string(arg1(dependencyMap[7]).t.i4jeWR);
  obj6.onPress = onClose.onClose;
  obj5.children = callback(arg1(dependencyMap[9]).Button, obj6);
  obj4.children = callback(closure_4, obj5);
  items1[1] = callback(arg1(dependencyMap[8]).SafeAreaPaddingView, obj4);
  obj.children = items1;
  return callback2(closure_4, obj);
};
