// Module ID: 13833
// Function ID: 104585
// Name: BountiesRecapOrbsBackground
// Dependencies: []
// Exports: BountiesScrollRecapPage

// Module 13833 (BountiesRecapOrbsBackground)
function BountiesRecapOrbsBackground(arg0) {
  let reducedMotion;
  let style;
  ({ style, reducedMotion } = arg0);
  let obj = arg1(dependencyMap[6]);
  if (obj.isAndroid()) {
    obj = { "Null": null, "Null": null, "Null": null, "Null": null, style };
    obj = { url: importDefault(dependencyMap[8]), style: closure_3.absoluteFillObject, autoplay: !reducedMotion };
    obj.children = callback(arg1(dependencyMap[7]).APNGPlayer, obj);
    let tmpResult = tmp(closure_4, obj);
  } else {
    const obj1 = {};
    const obj2 = { uri: importDefault(dependencyMap[10]) };
    obj1.source = obj2;
    obj1.style = style;
    obj1.paused = reducedMotion;
    tmpResult = tmp(arg1(dependencyMap[9]).VideoComponent, obj1);
  }
  return tmpResult;
}
importAll(dependencyMap[0]);
({ StyleSheet: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const lg = importDefault(dependencyMap[4]).radii.lg;
const tmp4 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[5]).createStyles(() => {
  let obj = {};
  obj = { overflow: "hidden", borderRadius: lg, backgroundColor: importDefault(dependencyMap[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.root = obj;
  obj = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_24 };
  obj.content = obj;
  obj.centeredCopy = {};
  obj.orbsBackground = { "Bool(false)": 0, "Bool(false)": -8, "Bool(false)": 0, "Bool(false)": 20, "Bool(false)": 300, "Bool(false)": 1.5 };
  obj.headerLabel = { paddingBottom: importDefault(dependencyMap[4]).space.PX_4, textTransform: "uppercase" };
  const obj1 = { paddingBottom: importDefault(dependencyMap[4]).space.PX_4, textTransform: "uppercase" };
  obj.titleRow = { paddingBottom: importDefault(dependencyMap[4]).space.PX_24, gap: importDefault(dependencyMap[4]).space.PX_8 };
  const obj2 = { paddingBottom: importDefault(dependencyMap[4]).space.PX_24, gap: importDefault(dependencyMap[4]).space.PX_8 };
  obj.actions = { position: "absolute", left: importDefault(dependencyMap[4]).space.PX_24, right: importDefault(dependencyMap[4]).space.PX_24, gap: importDefault(dependencyMap[4]).space.PX_12 };
  const obj4 = {};
  const obj3 = { position: "absolute", left: importDefault(dependencyMap[4]).space.PX_24, right: importDefault(dependencyMap[4]).space.PX_24, gap: importDefault(dependencyMap[4]).space.PX_12 };
  let num = 0;
  if (obj8.isIOS()) {
    num = 6;
  }
  obj4.marginTop = num;
  obj4.lineHeight = 46;
  obj.orbAmount = obj4;
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx");

export const BountiesScrollRecapPage = function BountiesScrollRecapPage(orbAmount) {
  let onClose;
  let style;
  orbAmount = orbAmount.orbAmount;
  ({ onClose, style } = orbAmount);
  const tmp = callback3();
  let obj = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { style: items1, pointerEvents: "box-none" };
  const items1 = [tmp.root, style];
  obj = { style: closure_3.absoluteFillObject, pointerEvents: "none" };
  const obj1 = { pointerEvents: 3434895488224299700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, flexGrow: 3434895488225687000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, flexShrink: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000263057991565038, justifyContent: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000130375421427825, direction: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003474279194579689, justify: 15574321955153270000000000000000000000000000000000000000000000000, align: 0.000000000000000000000000000000000000000000000000000000000000000000000001133208861212557 };
  const obj2 = { uri: importDefault(dependencyMap[13]) };
  obj1.source = obj2;
  obj1.style = closure_3.absoluteFillObject;
  obj1.paused = stateFromStores;
  const items2 = [callback(arg1(dependencyMap[9]).VideoComponent, obj1), callback(BountiesRecapOrbsBackground, { style: tmp.orbsBackground, reducedMotion: stateFromStores })];
  obj.children = items2;
  const items3 = [callback2(closure_4, obj), ];
  const obj4 = { style: tmp.content, pointerEvents: "box-none" };
  const obj5 = { style: tmp.centeredCopy, pointerEvents: "none" };
  const obj6 = { cachedAt: null, edpbxy: null, style: tmp.headerLabel };
  const intl = arg1(dependencyMap[15]).intl;
  obj6.children = intl.string(arg1(dependencyMap[15]).t.d6Rrn6);
  const items4 = [callback(arg1(dependencyMap[14]).Text, obj6), , ];
  const obj7 = { accessibilityLabel: "+" + orbAmount };
  const obj8 = { style: tmp.titleRow };
  const items5 = [callback(arg1(dependencyMap[16]).OrbsIcon, {}), ];
  const obj9 = { NOT_FOUND_ERR: false, NOT_SUPPORTED_ERR: false, INUSE_ATTRIBUTE_ERR: false, style: tmp.orbAmount, children: "+" + orbAmount };
  items5[1] = callback(arg1(dependencyMap[14]).Text, obj9);
  obj8.children = items5;
  obj7.children = callback2(closure_4, obj8);
  items4[1] = callback(closure_4, obj7);
  const obj10 = { cachedAt: "FrameEffect_02-4_Out", edpbxy: 0, style: { textAlign: "center" } };
  const intl2 = arg1(dependencyMap[15]).intl;
  obj10.children = intl2.string(arg1(dependencyMap[15]).t.x0Ffz3);
  items4[2] = callback(arg1(dependencyMap[14]).Text, obj10);
  obj5.children = items4;
  const items6 = [callback2(closure_4, obj5), ];
  const obj11 = {};
  const items7 = [tmp.actions, ];
  const obj3 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  const tmp2 = importDefault(dependencyMap[11])();
  items7[1] = { bottom: importDefault(dependencyMap[11])().bottom + importDefault(dependencyMap[4]).space.PX_8 };
  obj11.style = items7;
  const obj13 = { borderRadius: "d7825c8630cb00012f54beafd65fb181", justifyContent: "nl.messages.d7825c8630cb00012f54beafd65fb181.compiled.messages", alignItems: "jsona", alignSelf: "Clear this text" };
  const intl3 = arg1(dependencyMap[15]).intl;
  obj13.text = intl3.string(arg1(dependencyMap[15]).t.i4jeWR);
  obj13.onPress = onClose;
  obj11.children = callback(arg1(dependencyMap[17]).Button, obj13);
  items6[1] = callback(closure_4, obj11);
  obj4.children = items6;
  items3[1] = callback2(closure_4, obj4);
  obj.children = items3;
  return callback2(closure_4, obj);
};
