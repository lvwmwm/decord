// Module ID: 17873
// Function ID: 17874
// Name: ConnectGuardianShareModal
// Dependencies: [19, 17, 7811, 21, 4788, 576, 1115, 2482, 4485, 4991, 12200, 563, 15161, 8725, 8726, 5216, 4784, 15162, 5826, 5873, 11494, 2]
// Exports: default

// Module 17873 (ConnectGuardianShareModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import NavigatorHeader from "NavigatorHeader" /* 5873 */;
import Modal from "Modal" /* 11494 */;
import useOnNewPendingRequestDefault from "useOnNewPendingRequest" /* 15161 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7811 */;

require = fn;
function ConnectGuardianShareScreen() {
  const tmp = closure_8();
  const syncMessages = getLinkCode(1115).useSyncMessages(getLinkCode(2482).messagesLoader);
  const callback = noop.useCallback(() => {
    const intl = getLinkCode(1115).intl;
    getLinkCode(4485).presentFailedToast(intl.string(getLinkCode(1115).t.R0RpRX));
    const obj = getLinkCode(4485);
    ModalActionCreatorsDefault.pop();
  }, []);
  let obj = getLinkCode(1115);
  getLinkCode = getLinkCode(12200).useFamilyCenterActions({ onError: callback }).getLinkCode;
  const obj2 = getLinkCode(12200);
  const items = [FamilyCenterStore];
  const stateFromStores = getLinkCode(563).useStateFromStores(items, () => FamilyCenterStore.getLinkCode());
  const obj3 = getLinkCode(563);
  const items1 = [FamilyCenterStore];
  const stateFromStores1 = getLinkCode(563).useStateFromStores(items1, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const effect = noop.useEffect(() => {
    getLinkCode();
  }, []);
  const obj4 = getLinkCode(563);
  useOnNewPendingRequestDefault(ModalActionCreatorsDefault.pop);
  const obj5 = { spacing: nativeDefault.space.PX_40, children: null };
  const obj6 = { spacing: nativeDefault.space.PX_8, children: null };
  const obj7 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  let intl = getLinkCode(1115).intl;
  obj7.children = intl.string(_modDef2482.ITlV6p);
  const items2 = [closure_6(getLinkCode(4784).Text, obj7), ];
  const obj8 = { style: tmp.body, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = getLinkCode(1115).intl;
  obj8.children = intl2.format(_modDef2482.F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[1] = closure_6(getLinkCode(4784).Text, obj8);
  obj6.children = items2;
  const items3 = [closure_7(getLinkCode(5216).Stack, obj6), ];
  const obj9 = { spacing: nativeDefault.space.PX_24, style: tmp.cardSection, children: null };
  const obj10 = { style: tmp.qrLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = getLinkCode(1115).intl;
  obj10.children = intl3.string(_modDef2482.pojgfk);
  const items4 = [closure_6(getLinkCode(4784).Text, obj10), ];
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const obj11 = { shareActions: "full", linkCode: stateFromStores, expiresAt: stateFromStores1, onRefresh: getLinkCode };
      let tmp11Result = tmp11(tmp2(15162).ConnectGuardianCard, obj11);
    }
    const obj12 = { children: null };
    const obj13 = { children: null };
    items4[1] = tmp11Result;
    obj9.children = items4;
    items3[1] = tmp12(getLinkCode(5216).Stack, obj9);
    obj5.children = items3;
    obj13.children = tmp12(getLinkCode(5216).Stack, obj5);
    obj12.children = tmp11(getLinkCode(8726).ModalContent, obj13);
    return tmp11(getLinkCode(8725).ModalScreen, obj12);
  }
  tmp11Result = tmp11(View, { style: tmp.loading, children: closure_6(getLinkCode(5826).ActivityIndicator, {}) });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { title: { textAlign: "center" }, body: { textAlign: "center" }, qrLabel: { textAlign: "center" }, cardSection: { alignItems: "center" }, loading: { alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianShareModal.tsx");

export default function ConnectGuardianShareModal() {
  const memo = noop.useMemo(() => {
    const obj = { CONNECT_GUARDIAN_SHARE: null };
    const obj2 = {
      headerShown: true,
      headerLeft: NavigatorHeader.getHeaderBackButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_6(closure_1_9, {});
      }
    };
    obj.CONNECT_GUARDIAN_SHARE = obj2;
    return obj;
  }, []);
  let obj = { initialRouteName: "CONNECT_GUARDIAN_SHARE", screens: memo, headerBackTitle: null };
  const intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return timestampProducer(Modal.Modal, obj);
};
