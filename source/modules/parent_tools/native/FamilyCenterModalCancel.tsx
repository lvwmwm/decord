// Module ID: 14852
// Function ID: 14853
// Name: FamilyCenterModalCancelScreen
// Dependencies: [19, 17, 21, 4481, 709, 8576, 4731, 4193, 1233, 11848, 38, 8351, 8352, 14847, 6932, 4477, 2368, 14817, 11858, 5393, 4936, 5579, 11860, 2]
// Exports: default

// Module 14852 (FamilyCenterModalCancelScreen)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
function FamilyCenterModalCancelScreen(otherUser) {
  otherUser = otherUser.otherUser;
  let cancelLinkRequest;
  const tmp = callback3();
  const callback = React.useCallback(() => {
    let arr = cancelLinkRequest(4731);
    arr = arr.pop();
  }, []);
  const callback1 = React.useCallback(() => {
    const intl = otherUser(1233).intl;
    otherUser(4193).presentFailedToast(intl.string(otherUser(1233).t.R0RpRX));
  }, []);
  let obj = otherUser(11848);
  const familyCenterActions = obj.useFamilyCenterActions({ onSuccess: callback, onError: callback1 });
  cancelLinkRequest = familyCenterActions.cancelLinkRequest;
  const isCancelLoading = familyCenterActions.isCancelLoading;
  const items = [cancelLinkRequest, otherUser.id];
  const callback2 = React.useCallback(() => {
    cancelLinkRequest(otherUser.id);
  }, items);
  cancelLinkRequest(38)(cancelLinkRequest(8576)(), "FamilyCenterCancelModal should only be rendered for parents.");
  obj = { children: null };
  obj = { children: null };
  obj1 = { style: tmp.header, children: null };
  const obj2 = { otherUser, iconSrc: null };
  const tmp2 = cancelLinkRequest(8576)();
  obj2[1] = cancelLinkRequest(6932);
  const items1 = [callback(cancelLinkRequest(14847), obj2), , ];
  const obj3 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  let intl = otherUser(1233).intl;
  obj3[2] = intl.string(cancelLinkRequest(2368).HynllX);
  items1[1] = callback(otherUser(4477).Text, obj3);
  items1[2] = callback(cancelLinkRequest(14817), { user: otherUser });
  obj1[1] = items1;
  obj[0] = callback2(View, obj1);
  const items2 = [callback(otherUser(8352).ModalContent, obj), ];
  const obj4 = { children: null };
  const obj5 = { children: null };
  const obj6 = { variant: "destructive", disabled: isCancelLoading, loading: isCancelLoading, text: null, onPress: null };
  const intl2 = otherUser(1233).intl;
  obj6[3] = intl2.string(cancelLinkRequest(2368).mK40bk);
  obj6[4] = callback2;
  const items3 = [callback(otherUser(4936).Button, obj6), ];
  const obj7 = { variant: "tertiary", text: null, onPress: null };
  const intl3 = otherUser(1233).intl;
  obj7[1] = intl3.string(cancelLinkRequest(2368).czincX);
  obj7[2] = cancelLinkRequest(4731).pop;
  items3[1] = callback(otherUser(4936).Button, obj7);
  obj5[0] = items3;
  obj4[0] = callback2(otherUser(5393).ButtonGroup, obj5);
  items2[1] = callback(otherUser(11858).ModalFooter, obj4);
  obj[0] = items2;
  return callback2(otherUser(8351).ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, headerText: null };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalCancel.tsx");

export default function FamilyCenterModalCancel(otherUser) {
  otherUser = otherUser.otherUser;
  const items = [otherUser];
  const memo = React.useMemo(() => {
    let obj = { CANCEL: null };
    obj = {
      headerShown: true,
      headerLeft: otherUser(closure_1_2[21]).getHeaderCloseButton(closure_1_1(closure_1_2[6]).pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(closure_1_8, { otherUser: closure_0 });
      }
    };
    obj[0] = obj;
    return obj;
  }, items);
  let obj = { initialRouteName: "CANCEL", screens: memo, headerBackTitle: null };
  const intl = otherUser(1233).intl;
  obj[2] = intl.string(otherUser(1233).t["13/7kX"]);
  return callback(otherUser(11860).Modal, obj);
};
