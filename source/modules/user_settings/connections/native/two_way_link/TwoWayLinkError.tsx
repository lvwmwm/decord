// Module ID: 8977
// Function ID: 70739
// Name: TwoWayLinkError
// Dependencies: []
// Exports: TwoWayLinkError

// Module 8977 (TwoWayLinkError)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ image: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export const TwoWayLinkError = function TwoWayLinkError(arg0) {
  let body;
  let onClose;
  let onRetry;
  let title;
  ({ onClose, title, body, onRetry } = arg0);
  let obj = arg1(dependencyMap[4]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  const tmp = callback3();
  const items = [callback(closure_3, { source: importDefault(dependencyMap[5]), style: callback3().image }), callback(arg1(dependencyMap[6]).Text, { style: twoWayLinkStyles.title, children: title }), callback(arg1(dependencyMap[6]).Text, { style: twoWayLinkStyles.body, children: body })];
  obj.children = items;
  const items1 = [callback2(closure_4, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj5 = { y: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024775554727510072, isArray: -4183974104870716000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: twoWayLinkStyles.footerButton };
  const obj6 = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj6.text = intl.string(arg1(dependencyMap[10]).t.5911Lb);
  obj6.onPress = onRetry;
  const items2 = [callback(arg1(dependencyMap[9]).Button, obj6), ];
  const obj7 = { key: "r", onCloseCallback: "sectionIdsByBotId" };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj7.text = intl2.string(arg1(dependencyMap[10]).t.ETE/oC);
  obj7.onPress = onClose;
  items2[1] = callback(arg1(dependencyMap[9]).Button, obj7);
  obj5.children = items2;
  obj4.children = callback2(arg1(dependencyMap[8]).Stack, obj5);
  items1[1] = callback(arg1(dependencyMap[7]).SafeAreaPaddingView, obj4);
  obj.children = items1;
  return callback2(closure_4, obj);
};
