// Module ID: 19526
// Function ID: 19527
// Name: ConnectGuardianShareModal
// Dependencies: [19, 17, 7708, 21, 5009, 575, 1114, 2537, 5706, 6738, 13309, 563, 16729, 7964, 7965, 6022, 5619, 16730, 6947, 6992, 11447, 2]
// Exports: default

// Module 19526 (ConnectGuardianShareModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import _modDef2537 from "module_2537" /* 2537 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import Modal2 from "Modal" /* 11447 */;
import useOnNewPendingRequestDefault from "useOnNewPendingRequest" /* 16729 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  const obj = getLinkCode(1114);
  const syncMessages = obj.useSyncMessages(getLinkCode(2537).messagesLoader);
  const callback = react.useCallback(() => {
    const presentFailedToast = getLinkCode(dependencyMap[8]).presentFailedToast;
    getLinkCode(dependencyMap[8]);
    const intl = getLinkCode(dependencyMap[6]).intl;
    presentFailedToast(intl.string(getLinkCode(dependencyMap[6]).t.R0RpRX));
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, []);
  const obj2 = getLinkCode(13309);
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
  const ModalScreen = getLinkCode(7964).ModalScreen;
  const ModalContent = getLinkCode(7965).ModalContent;
  const obj5 = { spacing: nativeDefault.space.PX_40, children: null };
  const Stack = getLinkCode(6022).Stack;
  const obj6 = { spacing: nativeDefault.space.PX_8, children: items2 };
  const Stack2 = getLinkCode(6022).Stack;
  const obj7 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(_modDef2537.ITlV6p) };
  const Text = getLinkCode(5619).Text;
  intl = getLinkCode(1114).intl;
  items2 = [closure_6(Text, obj7), ];
  const obj8 = { style: tmp.body, variant: "text-sm/medium", color: "text-muted", children: intl2.format(_modDef2537.F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" }) };
  const Text2 = getLinkCode(5619).Text;
  intl2 = getLinkCode(1114).intl;
  items2[1] = closure_6(Text2, obj8);
  const items3 = [closure_7(Stack2, obj6), ];
  const obj9 = { spacing: nativeDefault.space.PX_24, style: tmp.cardSection, children: null };
  const Stack3 = getLinkCode(6022).Stack;
  const obj10 = { style: tmp.qrLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl3.string(_modDef2537.pojgfk) };
  const Text3 = getLinkCode(5619).Text;
  intl3 = getLinkCode(1114).intl;
  const items4 = [closure_6(Text3, obj10), ];
  if (null != stateFromStores) {
    let tmp11Result;
    if (null != stateFromStores1) {
      const obj11 = { shareActions: "full", linkCode: stateFromStores, expiresAt: stateFromStores1, onRefresh: getLinkCode };
      tmp11Result = tmp11(tmp2(16730).ConnectGuardianCard, obj11);
    }
    const obj12 = { children: closure_6(ModalContent, obj13) };
    items4[1] = tmp11Result;
    obj9.children = items4;
    obj13 = { children: closure_7(Stack, obj5) };
    items3[1] = closure_7(Stack3, obj9);
    obj5.children = items3;
    return closure_6(ModalScreen, obj12);
  }
  const obj14 = { style: tmp.loading, children: closure_6(getLinkCode(6947).ActivityIndicator, {}) };
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
