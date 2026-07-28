// Module ID: 12800
// Function ID: 99545
// Name: VoiceActionSheet
// Dependencies: [31, 27, 4238, 33, 4165, 5497, 5517, 566, 4016, 4376, 12801, 12802, 5533, 12812, 12815, 12816, 4568, 12819, 2]
// Exports: default

// Module 12800 (VoiceActionSheet)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["overflow"] = "hidden";
_createForOfIteratorHelperLoose.visualEffectView = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default function VoiceActionSheet(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => 0 === outer1_5.countVoiceStatesForChannel(channel.id));
  const effect = React.useEffect(() => {
    const obj = channel(outer1_2[8]);
    if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
      outer1_1(outer1_2[10]).initialize(channel);
      const obj3 = outer1_1(outer1_2[10]);
    }
    return () => {
      outer2_1(outer2_2[10]).terminate();
    };
  }, items1);
  let obj1 = importDefault(12802);
  if (obj1.requiresVoiceChannelsOnboard()) {
    obj = {};
    obj = { channel };
    obj.children = callback(importDefault(12812), obj);
    let tmp11 = callback(channel(5533).ActionSheet, obj);
  } else if (stateFromStores) {
    obj1 = {};
    const obj2 = { channel };
    const items2 = [callback(importDefault(12815), obj2), ];
    let obj3 = { channel };
    items2[1] = callback(importDefault(12816), obj3);
    obj1.children = items2;
    tmp11 = callback2(channel(5533).ActionSheet, obj1);
  } else {
    const obj4 = { scrollable: true, startExpanded: true };
    const obj5 = { style: tmp.container };
    const obj6 = { blurTheme: "dark", style: tmp.visualEffectView };
    const items3 = [callback(importDefault(4568), obj6), ];
    const obj7 = { channel };
    items3[1] = callback(importDefault(12819), obj7);
    obj5.children = items3;
    obj4.children = callback2(View, obj5);
    tmp11 = callback(channel(5533).ActionSheet, obj4);
  }
  const obj8 = { value: importDefault(5497)(importDefault(5517).VOICE_ACTION_SHEET).analyticsLocations, children: tmp11 };
  return callback(channel(5497).AnalyticsLocationProvider, obj8);
};
