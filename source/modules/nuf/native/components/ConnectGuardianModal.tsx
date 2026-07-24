// Module ID: 16182
// Function ID: 125399
// Name: ConnectGuardianModal
// Dependencies: [31, 27, 653, 6770, 33, 4130, 689, 1557, 16183, 675, 5584, 4126, 1212, 2198, 13835, 4543, 2]
// Exports: default

// Module 16182 (ConnectGuardianModal)
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { FamilyCenterAction } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.centered = obj1;
_createForOfIteratorHelperLoose.header = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_40 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_40 };
_createForOfIteratorHelperLoose.title = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.description = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, textAlign: "center" };
_createForOfIteratorHelperLoose.cardSection = { alignItems: "center" };
let obj4 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, textAlign: "center" };
_createForOfIteratorHelperLoose.scanPrompt = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
_createForOfIteratorHelperLoose.grow = { flexGrow: 1 };
let obj5 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
_createForOfIteratorHelperLoose.footer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("ME").fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default function ConnectGuardianModal(route) {
  const onComplete = route.route.params.onComplete;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = onComplete(16183);
  const connectGuardianGate = obj.useConnectGuardianGate();
  const dependencyMap = React.useRef(false);
  const items = [connectGuardianGate.state, onComplete];
  const effect = React.useEffect(() => {
    let current = "error" !== connectGuardianGate.state;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      let obj = connectGuardianGate(ref[9]);
      obj = { action: outer1_6.NufConsentGateLinkCodeError, source: "NUF Connect Guardian" };
      obj.track(outer1_5.FAMILY_CENTER_ACTION, obj);
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
    obj.children = callback(onComplete(5584).ActivityIndicator, {});
    let tmp8 = callback(View, obj);
  } else {
    obj = { style: tmp.container };
    const obj1 = { style: tmp.header };
    const obj2 = { style: tmp.title, variant: "heading-xl/bold", color: "text-default" };
    const intl = onComplete(1212).intl;
    obj2.children = intl.string(connectGuardianGate(2198).ITlV6p);
    const items2 = [callback(onComplete(4126).Text, obj2), ];
    const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted" };
    const intl2 = onComplete(1212).intl;
    const obj4 = { link: "https://support.discord.com/hc/articles/14155060633623" };
    obj3.children = intl2.format(connectGuardianGate(2198).F4GT2S, obj4);
    items2[1] = callback(onComplete(4126).Text, obj3);
    obj1.children = items2;
    const items3 = [callback2(View, obj1), , , ];
    const obj5 = { style: tmp.cardSection };
    const obj6 = { style: tmp.scanPrompt, variant: "text-md/semibold", color: "text-default" };
    const intl3 = onComplete(1212).intl;
    obj6.children = intl3.string(connectGuardianGate(2198).Mi60fm);
    const items4 = [callback(onComplete(4126).Text, obj6), ];
    const obj7 = { shareActions: "compact" };
    ({ linkCode: obj10.linkCode, expiresAt: obj10.expiresAt, refresh: obj10.onRefresh } = connectGuardianGate);
    items4[1] = callback(onComplete(13835).ConnectGuardianCard, obj7);
    obj5.children = items4;
    items3[1] = callback2(View, obj5);
    const obj8 = { style: tmp.grow };
    items3[2] = callback(View, obj8);
    const obj9 = {};
    const items5 = [tmp.footer, ];
    const obj10 = { paddingBottom: connectGuardianGate(1557)().bottom + connectGuardianGate(689).space.PX_16 };
    items5[1] = obj10;
    obj9.style = items5;
    const obj11 = { variant: "primary", size: "lg" };
    const intl4 = onComplete(1212).intl;
    obj11.text = intl4.string(onComplete(1212).t["3PatSz"]);
    obj11.onPress = function onPress() {
      let tmp;
      if (null != onComplete) {
        tmp = onComplete(false);
      }
      return tmp;
    };
    obj9.children = callback(onComplete(4543).Button, obj11);
    items3[3] = callback(View, obj9);
    obj.children = items3;
    tmp8 = callback2(View, obj);
  }
  return tmp8;
};
