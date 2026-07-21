// Module ID: 11751
// Function ID: 91258
// Name: HubEmailConnectionStudentPrompt
// Dependencies: []
// Exports: default

// Module 11751 (HubEmailConnectionStudentPrompt)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const HubEmailConnectionSteps = arg1(dependencyMap[2]).HubEmailConnectionSteps;
const tmp4 = arg1(dependencyMap[3]);
const AnalyticEvents = tmp4.AnalyticEvents;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { container: {} };
obj = {};
const tmp5 = arg1(dependencyMap[4]);
const merged = Object.assign(importDefault(dependencyMap[6])(tmp4.Fonts.PRIMARY_BOLD, importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj["textAlign"] = "center";
obj["marginBottom"] = 24;
obj.header = obj;
const importDefaultResult = importDefault(dependencyMap[6]);
obj.row = { borderRadius: importDefault(dependencyMap[7]).radii.sm, marginBottom: 8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.sm, marginBottom: 8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx");

export default function HubEmailConnectionStudentPrompt(onClose) {
  onClose = onClose.onClose;
  const arg1 = onClose;
  const importDefault = onClose.invite;
  const tmp = callback3();
  let obj = arg1(closure_2[8]);
  closure_2 = obj.useNavigation();
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { style: tmp.header };
  const intl = arg1(closure_2[11]).intl;
  obj1.children = intl.string(arg1(closure_2[11]).t.+/Pv0h);
  const items = [callback(arg1(closure_2[10]).LegacyText, obj1), , ];
  const obj2 = { DEPRECATED_style: tmp.row };
  const obj3 = { source: importDefault(closure_2[13]) };
  obj2.leading = callback(closure_4, obj3);
  obj2.trailing = importDefault(closure_2[12]).Arrow;
  const intl2 = arg1(closure_2[11]).intl;
  obj2.label = intl2.string(arg1(closure_2[11]).t.a7a/D+);
  const intl3 = arg1(closure_2[11]).intl;
  obj2.subLabel = intl3.string(arg1(closure_2[11]).t.Gsegk8);
  obj2.onPress = function onPress() {
    let obj = invite(arr[14]);
    obj.track(constants2.HUB_STUDENT_PROMPT_CLICKED);
    obj = { onClose, invite };
    const arr = arr.push(constants.VERIFY_EMAIL, obj);
  };
  items[1] = callback(importDefault(closure_2[12]), obj2);
  const obj4 = { DEPRECATED_style: tmp.row };
  const obj5 = {};
  const tmp2 = importDefault(closure_2[12]);
  obj5.source = importDefault(closure_2[15]);
  obj4.leading = callback(closure_4, obj5);
  obj4.trailing = importDefault(closure_2[12]).Arrow;
  const intl4 = arg1(closure_2[11]).intl;
  obj4.label = intl4.string(arg1(closure_2[11]).t.GLG9n4);
  obj4.onPress = onClose;
  items[2] = callback(importDefault(closure_2[12]), obj4);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(arg1(closure_2[9]).HubEmailConnectionScreen, obj);
};
