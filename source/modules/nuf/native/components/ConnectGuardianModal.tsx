// Module ID: 16006
// Function ID: 122816
// Name: ConnectGuardianModal
// Dependencies: []
// Exports: default

// Module 16006 (ConnectGuardianModal)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const FamilyCenterAction = arg1(dependencyMap[3]).FamilyCenterAction;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.centered = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.header = { marginBottom: importDefault(dependencyMap[6]).space.PX_40 };
const obj2 = { marginBottom: importDefault(dependencyMap[6]).space.PX_40 };
obj.title = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_8, textAlign: "center" };
const obj3 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_8, textAlign: "center" };
obj.description = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, textAlign: "center" };
obj.cardSection = { alignItems: "center" };
const obj4 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, textAlign: "center" };
obj.scanPrompt = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_24, textAlign: "center" };
obj.grow = { flexGrow: 1 };
const obj5 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_24, textAlign: "center" };
obj.footer = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
let closure_9 = obj.createStyles(obj);
const obj6 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default function ConnectGuardianModal(route) {
  const onComplete = route.route.params.onComplete;
  const arg1 = onComplete;
  const tmp = callback3();
  let obj = arg1(closure_2[8]);
  const connectGuardianGate = obj.useConnectGuardianGate();
  const importDefault = connectGuardianGate;
  closure_2 = React.useRef(false);
  const items = [connectGuardianGate.state, onComplete];
  const effect = React.useEffect(() => {
    let current = "error" !== connectGuardianGate.state;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      let obj = connectGuardianGate(ref[9]);
      obj = {};
      obj.action = obj.NufConsentGateLinkCodeError;
      obj.source = "NUF Connect Guardian";
      obj.track(constants.FAMILY_CENTER_ACTION, obj);
      if (null != onComplete) {
        onComplete(true);
      }
    }
  }, items);
  if ("gate" !== connectGuardianGate.state) {
    obj = {};
    const items1 = [, ];
    ({ container: arr2[0], centered: arr2[1] } = tmp);
    obj.style = items1;
    obj.children = callback(arg1(closure_2[10]).ActivityIndicator, {});
    let tmp8 = callback(View, obj);
  } else {
    obj = { style: tmp.container };
    const obj1 = { style: tmp.header };
    const obj2 = { "Null": 24, "Null": 24, "Null": null, style: tmp.title };
    const intl = arg1(closure_2[12]).intl;
    obj2.children = intl.string(importDefault(closure_2[13]).ITlV6p);
    const items2 = [callback(arg1(closure_2[11]).Text, obj2), ];
    const obj3 = { "Null": "<string:1178599425>", "Null": "<string:3295084545>", "Null": "<string:1689649153>", style: tmp.description };
    const intl2 = arg1(closure_2[12]).intl;
    const obj4 = { link: "https://support.discord.com/hc/articles/14155060633623" };
    obj3.children = intl2.format(importDefault(closure_2[13]).F4GT2S, obj4);
    items2[1] = callback(arg1(closure_2[14]).TextWithIOSLinkWorkaround, obj3);
    obj1.children = items2;
    const items3 = [callback2(View, obj1), , , ];
    const obj5 = { style: tmp.cardSection };
    const obj6 = { style: tmp.scanPrompt };
    const intl3 = arg1(closure_2[12]).intl;
    obj6.children = intl3.string(importDefault(closure_2[13]).Mi60fm);
    const items4 = [callback(arg1(closure_2[11]).Text, obj6), ];
    const obj7 = { shareActions: "compact" };
    ({ linkCode: obj10.linkCode, expiresAt: obj10.expiresAt, refresh: obj10.onRefresh } = connectGuardianGate);
    items4[1] = callback(arg1(closure_2[15]).ConnectGuardianCard, obj7);
    obj5.children = items4;
    items3[1] = callback2(View, obj5);
    const obj8 = { style: tmp.grow };
    items3[2] = callback(View, obj8);
    const obj9 = {};
    const items5 = [tmp.footer, ];
    const obj10 = { paddingBottom: importDefault(closure_2[7])().bottom + importDefault(closure_2[6]).space.PX_16 };
    items5[1] = obj10;
    obj9.style = items5;
    const obj11 = {};
    const intl4 = arg1(closure_2[12]).intl;
    obj11.text = intl4.string(arg1(closure_2[12]).t.3PatSz);
    obj11.onPress = function onPress() {
      let tmp;
      if (null != onComplete) {
        tmp = onComplete(false);
      }
      return tmp;
    };
    obj9.children = callback(arg1(closure_2[16]).Button, obj11);
    items3[3] = callback(View, obj9);
    obj.children = items3;
    tmp8 = callback2(View, obj);
  }
  return tmp8;
};
