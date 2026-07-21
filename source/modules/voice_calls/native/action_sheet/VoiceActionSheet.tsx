// Module ID: 12575
// Function ID: 96738
// Name: VoiceActionSheet
// Dependencies: []
// Exports: default

// Module 12575 (VoiceActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { flex: 1 } };
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["overflow"] = "hidden";
obj.visualEffectView = obj;
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default function VoiceActionSheet(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => 0 === closure_5.countVoiceStatesForChannel(channel.id));
  const effect = React.useEffect(() => {
    const obj = channel(closure_2[8]);
    if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
      callback(closure_2[10]).initialize(channel);
      const obj3 = callback(closure_2[10]);
    }
    return () => {
      callback(closure_2[10]).terminate();
    };
  }, items1);
  let obj1 = importDefault(dependencyMap[11]);
  if (obj1.requiresVoiceChannelsOnboard()) {
    obj = {};
    obj = { channel };
    obj.children = callback(importDefault(dependencyMap[13]), obj);
    let tmp11 = callback(arg1(dependencyMap[12]).ActionSheet, obj);
  } else if (stateFromStores) {
    obj1 = {};
    const obj2 = { channel };
    const items2 = [callback(importDefault(dependencyMap[14]), obj2), ];
    const obj3 = { channel };
    items2[1] = callback(importDefault(dependencyMap[15]), obj3);
    obj1.children = items2;
    tmp11 = callback2(arg1(dependencyMap[12]).ActionSheet, obj1);
  } else {
    const obj4 = { ind: null, PX_8: null };
    const obj5 = { style: tmp.container };
    const obj6 = { blurTheme: "dark", style: tmp.visualEffectView };
    const items3 = [callback(importDefault(dependencyMap[16]), obj6), ];
    const obj7 = { channel };
    items3[1] = callback(importDefault(dependencyMap[17]), obj7);
    obj5.children = items3;
    obj4.children = callback2(View, obj5);
    tmp11 = callback(arg1(dependencyMap[12]).ActionSheet, obj4);
  }
  const obj8 = { value: importDefault(dependencyMap[5])(importDefault(dependencyMap[6]).VOICE_ACTION_SHEET).analyticsLocations, children: tmp11 };
  return callback(arg1(dependencyMap[5]).AnalyticsLocationProvider, obj8);
};
