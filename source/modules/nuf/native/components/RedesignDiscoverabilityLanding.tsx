// Module ID: 16005
// Function ID: 122813
// Name: RedesignDiscoverabilityLanding
// Dependencies: []
// Exports: default

// Module 16005 (RedesignDiscoverabilityLanding)
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp4 = arg1(dependencyMap[2]);
obj.topContainer = { paddingTop: importDefault(dependencyMap[4]).space.PX_16 };
obj.growContainer = { flexGrow: 2 };
const obj1 = { paddingTop: importDefault(dependencyMap[4]).space.PX_16 };
obj.image = { width: "100%", marginBottom: importDefault(dependencyMap[4]).space.PX_32 };
const obj2 = { width: "100%", marginBottom: importDefault(dependencyMap[4]).space.PX_32 };
obj.title = { textAlign: "center", marginBottom: importDefault(dependencyMap[4]).space.PX_16 };
const obj3 = { textAlign: "center", marginBottom: importDefault(dependencyMap[4]).space.PX_16 };
obj.subtitle = { textAlign: "center", marginBottom: importDefault(dependencyMap[4]).space.PX_32 };
obj.info = { "Bool(true)": "%", "Bool(true)": "NO_VOICE_STATES", "Bool(true)": "currentOriginX", "Bool(true)": "row" };
let closure_7 = obj.createStyles(obj);
const obj4 = { textAlign: "center", marginBottom: importDefault(dependencyMap[4]).space.PX_32 };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default function RedesignDiscoverabilityLanding(onNext) {
  const tmp = callback3();
  let obj = { style: tmp.container, alwaysBounceVertical: false };
  obj = { flexGrow: 2, paddingTop: arg1(dependencyMap[6]).NAV_BAR_HEIGHT + 32, paddingBottom: importDefault(dependencyMap[5])().bottom + 16, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
  obj.contentContainerStyle = obj;
  obj = { style: tmp.topContainer };
  const items = [callback(closure_3, obj), , , , , , ];
  const obj1 = { 1501064855: 24, -1267889981: 24, -1145697943: null, -1266241916: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[8]).intl;
  obj1.children = intl.string(arg1(dependencyMap[8]).t.n8nw6j);
  items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  const obj2 = { style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[8]).t.KMW0kP);
  items[2] = callback(arg1(dependencyMap[7]).Text, obj2);
  const obj3 = { resizeMode: "contain", style: tmp.image, source: importDefault(dependencyMap[10]) };
  items[3] = callback(importDefault(dependencyMap[9]), obj3);
  const obj4 = { style: tmp.info };
  const intl3 = arg1(dependencyMap[8]).intl;
  const items1 = [intl3.string(arg1(dependencyMap[8]).t.ci12MJ), " ", ];
  const intl4 = arg1(dependencyMap[8]).intl;
  items1[2] = intl4.format(arg1(dependencyMap[8]).t.VcSQ4n, {
    learnMoreHook(children) {
      const obj = { onPress: callback(closure_2[11]).handleOpenLearnMoreLink, children };
      return callback2(callback(closure_2[7]).Text, obj, arg1);
    }
  });
  obj4.children = items1;
  items[4] = callback2(arg1(dependencyMap[7]).Text, obj4);
  items[5] = callback(closure_3, { style: tmp.growContainer });
  const obj7 = {};
  const intl5 = arg1(dependencyMap[8]).intl;
  obj7.text = intl5.string(arg1(dependencyMap[8]).t.gHPk3I);
  obj7.onPress = onNext.onNext;
  items[6] = callback(arg1(dependencyMap[12]).Button, obj7);
  obj.children = items;
  return callback2(closure_4, obj);
};
