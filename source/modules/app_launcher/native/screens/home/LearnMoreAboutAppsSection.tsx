// Module ID: 11197
// Function ID: 87204
// Name: LearnMoreAboutAppsSection
// Dependencies: []
// Exports: default

// Module 11197 (LearnMoreAboutAppsSection)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[5]).space.PX_32, borderRadius: importDefault(dependencyMap[5]).radii.lg, alignItems: "center", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_MUTED, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_64 };
obj.container = obj;
obj.body = { textAlign: "center" };
const tmp2 = arg1(dependencyMap[3]);
obj.divider = { height: importDefault(dependencyMap[5]).space.PX_16 };
const obj2 = { __d: -319356925, channel_id: 2091712514, d: -292814845, ty: 2102263810, s: -291700733, p: 2145976322, nm: -292421629, borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
const merged = Object.assign(importDefault(dependencyMap[5]).shadows.SHADOW_LOW);
obj.linkButton = obj2;
let closure_8 = obj.createStyles(obj);
const obj1 = { height: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx");

export default function LearnMoreAboutAppsSection(visible) {
  const tmp = callback3();
  const callback = React.useCallback(() => {
    const obj = callback(closure_2[6]);
    obj.openURL(callback(closure_2[7]).getAppsSupportURL(constants.APPS_LEARN_MORE));
  }, []);
  const intl = arg1(dependencyMap[8]).intl;
  const stringResult = intl.string(arg1(dependencyMap[8]).t.kw8/Ec);
  const intl2 = arg1(dependencyMap[8]).intl;
  const stringResult1 = intl2.string(arg1(dependencyMap[8]).t.GZoV1O);
  const intl3 = arg1(dependencyMap[8]).intl;
  let obj = { style: null, option: null, selected: null };
  const formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[8]).t.xx5Sug, { sectionTitle: stringResult, sectionBody: stringResult1 });
  obj.sectionName = arg1(dependencyMap[10]).AppLauncherSectionName.NEW_TO_APPS;
  obj.viewed = visible.visible;
  obj = { style: tmp.container };
  obj = { style: tmp.divider };
  const items = [callback(View, obj), callback(arg1(dependencyMap[11]).Text, { children: stringResult }), , , , ];
  const obj1 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, style: tmp.body, children: stringResult1 };
  items[2] = callback(arg1(dependencyMap[11]).Text, obj1);
  items[3] = callback(View, { style: tmp.divider });
  const obj3 = { style: tmp.linkButton, onPress: callback, accessibilityRole: "link", accessibilityLabel: formatToPlainStringResult };
  const obj4 = { INTEGRATION_CREATE: 131072.00119209292, ConstraintReasonCode: -293983030121430100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj4.children = intl4.string(arg1(dependencyMap[8]).t.Ye51oT);
  obj3.children = callback(arg1(dependencyMap[11]).Text, obj4);
  items[4] = callback(arg1(dependencyMap[12]).PressableHighlight, obj3);
  items[5] = callback(View, { style: tmp.divider });
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(importDefault(dependencyMap[9]), obj);
};
