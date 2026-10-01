// Module ID: 17223
// Function ID: 17224
// Name: ConnectGuardianModal
// Dependencies: [19, 17, 1074, 6958, 21, 4836, 576, 1613, 17224, 1241, 5889, 4832, 1115, 2487, 14417, 5281, 2]
// Exports: default

// Module 17223 (ConnectGuardianModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const FamilyCenterAction = FamilyCenterConstants.FamilyCenterAction;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, centered: obj3, header: obj4, title: obj5, description: obj6, cardSection: { alignItems: "center" }, scanPrompt: obj7, grow: { flexGrow: 1 }, footer: obj8 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_40 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj7 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24, textAlign: "center" };
obj8 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default function ConnectGuardianModal(route) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj25;
  let ref;
  let tmp9;
  let connectGuardianGate;
  const onComplete = route.route.params.onComplete;
  const tmp = closure_9();
  const bottom = connectGuardianGate(1613)().bottom;
  let obj = onComplete(17224);
  connectGuardianGate = obj.useConnectGuardianGate();
  dependencyMap = react.useRef(false);
  const items = [connectGuardianGate.state, onComplete];
  const effect = react.useEffect(() => {
    const current = "error" !== connectGuardianGate.state || ref.current;
    if (!current) {
      ref.current = true;
      const obj2 = { action: FamilyCenterAction.NufConsentGateLinkCodeError, source: "NUF Connect Guardian" };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      if (onComplete != null) {
        onComplete(true);
      }
    }
  }, items);
  if ("gate" !== connectGuardianGate.state) {
    let obj2 = { style: items1, children: closure_7(tmp4(5889).ActivityIndicator, {}) };
    items1 = [, ];
    ({ container: arr2[0], centered: arr2[1] } = tmp);
    tmp9 = closure_7(View, obj2);
  } else {
    const obj3 = { style: tmp.container, children: items3 };
    const obj4 = { style: tmp.header, children: items2 };
    const obj5 = { style: tmp.title, variant: "heading-xl/bold", color: "text-default", children: intl.string(connectGuardianGate(2487).ITlV6p) };
    const Text = tmp4(4832).Text;
    intl = tmp4(1115).intl;
    items2 = [closure_7(Text, obj5), ];
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted", children: intl2.format(connectGuardianGate(2487).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" }) };
    const Text2 = tmp4(4832).Text;
    intl2 = tmp4(1115).intl;
    items2[1] = closure_7(Text2, obj6);
    items3 = [closure_8(View, obj4), , , ];
    const obj7 = { style: tmp.cardSection, children: items4 };
    const obj8 = { style: tmp.scanPrompt, variant: "text-md/semibold", color: "text-default", children: intl3.string(connectGuardianGate(2487).Mi60fm) };
    const Text3 = tmp4(4832).Text;
    intl3 = tmp4(1115).intl;
    items4 = [closure_7(Text3, obj8), ];
    const obj10 = { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null };
    ({ linkCode: obj9.linkCode, expiresAt: obj9.expiresAt, refresh: obj9.onRefresh } = connectGuardianGate);
    items4[1] = closure_7(onComplete(14417).ConnectGuardianCard, obj10);
    items3[1] = closure_8(View, obj7);
    const obj11 = { style: tmp.grow };
    items3[2] = closure_7(View, obj11);
    const obj12 = { style: items5, children: closure_7(Button, obj25) };
    items5 = [tmp.footer, ];
    items5[1] = { paddingBottom: bottom + connectGuardianGate(576).space.PX_16 };
    const obj13 = { paddingBottom: bottom + connectGuardianGate(576).space.PX_16 };
    obj25 = {
      variant: "primary",
      size: "lg",
      text: intl4.string(onComplete(1115).t["3PatSz"]),
      onPress() {
          let tmpResult;
          if (onComplete != null) {
            tmpResult = tmp(false);
          }
          return tmpResult;
        }
    };
    Button = tmp4(5281).Button;
    intl4 = tmp4(1115).intl;
    items3[3] = closure_7(View, obj12);
    tmp9 = closure_8(View, obj3);
  }
  return tmp9;
};
