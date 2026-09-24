// Module ID: 17882
// Function ID: 17883
// Name: ConnectGuardianShareModal
// Dependencies: [19, 17, 7816, 21, 4790, 580, 1119, 2486, 4489, 4993, 12083, 565, 15157, 8730, 8731, 5218, 4786, 15158, 5828, 5871, 558, 568, 11489, 2]

// Module 17882 (ConnectGuardianShareModal)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import _modDef2486 from "module_2486" /* 2486 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import NavigatorHeader from "NavigatorHeader" /* 5871 */;
import Modal from "Modal" /* 11489 */;
import useOnNewPendingRequestDefault from "useOnNewPendingRequest" /* 15157 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7816 */;

require = fn;
function ConnectGuardianShareScreen() {
  const tmp = closure_8();
  const syncMessages = getLinkCode(1119).useSyncMessages(getLinkCode(2486).messagesLoader);
  const callback = noop.useCallback(() => {
    const intl = getLinkCode(1119).intl;
    getLinkCode(4489).presentFailedToast(intl.string(getLinkCode(1119).t.R0RpRX));
    const obj = getLinkCode(4489);
    ModalActionCreatorsDefault.pop();
  }, []);
  let obj = getLinkCode(1119);
  getLinkCode = getLinkCode(12083).useFamilyCenterActions({ onError: callback }).getLinkCode;
  const obj2 = getLinkCode(12083);
  const items = [FamilyCenterStore];
  const stateFromStores = getLinkCode(565).useStateFromStores(items, () => FamilyCenterStore.getLinkCode());
  const obj3 = getLinkCode(565);
  const items1 = [FamilyCenterStore];
  const stateFromStores1 = getLinkCode(565).useStateFromStores(items1, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const effect = noop.useEffect(() => {
    getLinkCode();
  }, []);
  const obj4 = getLinkCode(565);
  useOnNewPendingRequestDefault(ModalActionCreatorsDefault.pop);
  const obj5 = { spacing: nativeDefault.space.PX_40, children: null };
  const obj6 = { spacing: nativeDefault.space.PX_8, children: null };
  const obj7 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  let intl = getLinkCode(1119).intl;
  obj7.children = intl.string(_modDef2486.ITlV6p);
  const items2 = [closure_6(getLinkCode(4786).Text, obj7), ];
  const obj8 = { style: tmp.body, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = getLinkCode(1119).intl;
  obj8.children = intl2.format(_modDef2486.F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[1] = closure_6(getLinkCode(4786).Text, obj8);
  obj6.children = items2;
  const items3 = [closure_7(getLinkCode(5218).Stack, obj6), ];
  const obj9 = { spacing: nativeDefault.space.PX_24, style: tmp.cardSection, children: null };
  const obj10 = { style: tmp.qrLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = getLinkCode(1119).intl;
  obj10.children = intl3.string(_modDef2486.pojgfk);
  const items4 = [closure_6(getLinkCode(4786).Text, obj10), ];
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const obj11 = { shareActions: "full", linkCode: stateFromStores, expiresAt: stateFromStores1, onRefresh: getLinkCode };
      let tmp11Result = tmp11(tmp2(15158).ConnectGuardianCard, obj11);
    }
    const obj12 = { children: null };
    const obj13 = { children: null };
    items4[1] = tmp11Result;
    obj9.children = items4;
    items3[1] = tmp12(getLinkCode(5218).Stack, obj9);
    obj5.children = items3;
    obj13.children = tmp12(getLinkCode(5218).Stack, obj5);
    obj12.children = tmp11(getLinkCode(8731).ModalContent, obj13);
    return tmp11(getLinkCode(8730).ModalScreen, obj12);
  }
  tmp11Result = tmp11(View, { style: tmp.loading, children: closure_6(getLinkCode(5828).ActivityIndicator, {}) });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { title: { textAlign: "center" }, body: { textAlign: "center" }, qrLabel: { textAlign: "center" }, cardSection: { alignItems: "center" }, loading: { alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianShareModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { CONNECT_GUARDIAN_SHARE: null };
    const obj3 = {
      headerShown: true,
      headerLeft: tmp(5871).getHeaderBackButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_6(closure_1_9, {});
        }
    };
    obj2.CONNECT_GUARDIAN_SHARE = obj3;
    cResult[0] = obj2;
    let first = obj2;
    const tmpResult = tmp(5871);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { initialRouteName: "CONNECT_GUARDIAN_SHARE", screens: first, headerBackTitle: null };
    const intl = tmp(1119).intl;
    obj4.headerBackTitle = intl.string(tmp(1119).t["13/7kX"]);
    const tmp8 = timestampProducer(tmp(11489).Modal, obj4);
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
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
});
