// Module ID: 17232
// Function ID: 17233
// Name: ConnectGuardianShareModal
// Dependencies: [19, 17, 6957, 21, 4836, 576, 1115, 2487, 4527, 5039, 11395, 563, 14416, 7870, 7871, 5279, 4832, 14417, 5889, 5936, 10769, 2]
// Exports: default

// Module 17232 (ConnectGuardianShareModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import _modDef2487 from "module_2487" /* 2487 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import Modal2 from "Modal" /* 10769 */;
import useOnNewPendingRequestDefault from "useOnNewPendingRequest" /* 14416 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
function ConnectGuardianShareScreen() {
  let getLinkCode;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj13;
  const tmp = closure_8();
  const obj = getLinkCode(1115);
  const syncMessages = obj.useSyncMessages(getLinkCode(2487).messagesLoader);
  const callback = react.useCallback(() => {
    const presentFailedToast = getLinkCode(dependencyMap[8]).presentFailedToast;
    getLinkCode(dependencyMap[8]);
    const intl = getLinkCode(dependencyMap[6]).intl;
    presentFailedToast(intl.string(getLinkCode(dependencyMap[6]).t.R0RpRX));
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, []);
  const obj2 = getLinkCode(11395);
  getLinkCode = obj2.useFamilyCenterActions({ onError: callback }).getLinkCode;
  const items = [FamilyCenterStore];
  const obj3 = getLinkCode(563);
  const stateFromStores = obj3.useStateFromStores(items, () => FamilyCenterStore.getLinkCode());
  const items1 = [FamilyCenterStore];
  const obj4 = getLinkCode(563);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const effect = react.useEffect(() => {
    getLinkCode();
  }, []);
  const tmp9 = useOnNewPendingRequestDefault;
  tmp9(ModalActionCreatorsDefault.pop);
  const ModalScreen = getLinkCode(7870).ModalScreen;
  const ModalContent = getLinkCode(7871).ModalContent;
  const obj5 = { spacing: nativeDefault.space.PX_40, children: null };
  const Stack = getLinkCode(5279).Stack;
  const obj6 = { spacing: nativeDefault.space.PX_8, children: items2 };
  const Stack2 = getLinkCode(5279).Stack;
  const obj7 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(_modDef2487.ITlV6p) };
  const Text = getLinkCode(4832).Text;
  intl = getLinkCode(1115).intl;
  items2 = [closure_6(Text, obj7), ];
  const obj8 = { style: tmp.body, variant: "text-sm/medium", color: "text-muted", children: intl2.format(_modDef2487.F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" }) };
  const Text2 = getLinkCode(4832).Text;
  intl2 = getLinkCode(1115).intl;
  items2[1] = closure_6(Text2, obj8);
  const items3 = [closure_7(Stack2, obj6), ];
  const obj9 = { spacing: nativeDefault.space.PX_24, style: tmp.cardSection, children: null };
  const Stack3 = getLinkCode(5279).Stack;
  const obj10 = { style: tmp.qrLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl3.string(_modDef2487.pojgfk) };
  const Text3 = getLinkCode(4832).Text;
  intl3 = getLinkCode(1115).intl;
  const items4 = [closure_6(Text3, obj10), ];
  if (null != stateFromStores) {
    let tmp11Result;
    if (null != stateFromStores1) {
      const obj11 = { shareActions: "full", linkCode: stateFromStores, expiresAt: stateFromStores1, onRefresh: getLinkCode };
      tmp11Result = tmp11(tmp2(14417).ConnectGuardianCard, obj11);
    }
    const obj12 = { children: closure_6(ModalContent, obj13) };
    items4[1] = tmp11Result;
    obj9.children = items4;
    obj13 = { children: closure_7(Stack, obj5) };
    items3[1] = closure_7(Stack3, obj9);
    obj5.children = items3;
    return closure_6(ModalScreen, obj12);
  }
  const obj14 = { style: tmp.loading, children: closure_6(getLinkCode(5889).ActivityIndicator, {}) };
  tmp11Result = tmp11(View, obj14);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { title: { textAlign: "center" }, body: { textAlign: "center" }, qrLabel: { textAlign: "center" }, cardSection: { alignItems: "center" }, loading: obj2 };
obj2 = { alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianShareModal.tsx");

export default function ConnectGuardianShareModal() {
  let intl;
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    const obj = { CONNECT_GUARDIAN_SHARE: obj2 };
    obj2 = {
      headerShown: true,
      headerLeft: obj3.getHeaderBackButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_6(closure_1_9, {});
      }
    };
    obj3 = NavigatorHeader;
    return obj;
  }, []);
  let obj = { initialRouteName: "CONNECT_GUARDIAN_SHARE", screens: memo, headerBackTitle: intl.string(intl4.t["13/7kX"]) };
  const Modal = Modal2.Modal;
  intl = intl4.intl;
  return metroRequire(Modal, obj);
};
