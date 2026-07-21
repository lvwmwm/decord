// Module ID: 8973
// Function ID: 70729
// Name: PlayStationLinkSuccess
// Dependencies: []
// Exports: PlayStationLinkSuccess

// Module 8973 (PlayStationLinkSuccess)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles({ image: { flexDirection: true, alignItems: true, paddingStart: true } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx");

export const PlayStationLinkSuccess = function PlayStationLinkSuccess(onClose) {
  let obj = arg1(dependencyMap[4]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  const tmp = callback3();
  const items = [callback(closure_4, { source: React.useMemo(() => ({ uri: callback(closure_2[5]) }), []), style: callback3().image }), , ];
  const obj2 = { style: twoWayLinkStyles.title };
  const intl = arg1(dependencyMap[7]).intl;
  obj2.children = intl.string(arg1(dependencyMap[7]).t.e6SOl0);
  items[1] = callback(arg1(dependencyMap[6]).Text, obj2);
  const obj3 = { style: twoWayLinkStyles.body };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[7]).t.QjAZAQ);
  items[2] = callback(arg1(dependencyMap[6]).Text, obj3);
  obj.children = items;
  const items1 = [callback2(closure_5, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj5 = { style: twoWayLinkStyles.footerButton };
  const obj6 = { size: "md" };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj6.text = intl3.string(arg1(dependencyMap[7]).t.i4jeWR);
  obj6.onPress = onClose.onClose;
  obj5.children = callback(arg1(dependencyMap[9]).Button, obj6);
  obj4.children = callback(closure_5, obj5);
  items1[1] = callback(arg1(dependencyMap[8]).SafeAreaPaddingView, obj4);
  obj.children = items1;
  return callback2(closure_5, obj);
};
