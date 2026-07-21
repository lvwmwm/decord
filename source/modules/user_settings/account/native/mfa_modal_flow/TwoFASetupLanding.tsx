// Module ID: 13565
// Function ID: 102861
// Name: TwoFASetupLanding
// Dependencies: []
// Exports: default

// Module 13565 (TwoFASetupLanding)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: {}, authIcon: { flexDirection: "<string:2319122434>", alignItems: "<string:2673934337>", paddingStart: "banner" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default function TwoFASetupLanding() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[4]);
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { bottom: true, style: tmp.container };
  const obj2 = { source: importDefault(dependencyMap[7]), style: tmp.authIcon };
  const items = [callback(closure_3, obj2), , ];
  const obj3 = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj3.children = intl.string(arg1(dependencyMap[9]).t.9E74Dx);
  items[1] = callback(arg1(dependencyMap[8]).Heading, obj3);
  const obj4 = { variant: "text-md/normal", style: items1 };
  const items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const intl2 = arg1(dependencyMap[9]).intl;
  obj4.children = intl2.format(arg1(dependencyMap[9]).t.A7Aehw, { "Null": null, "Null": null });
  items[2] = callback(arg1(dependencyMap[8]).Text, obj4);
  obj1.children = items;
  obj.children = callback2(arg1(dependencyMap[6]).SafeAreaPaddingView, obj1);
  obj.children = callback(closure_4, obj);
  return callback(arg1(dependencyMap[5]).TwoFASetupModalScreen, obj);
};
