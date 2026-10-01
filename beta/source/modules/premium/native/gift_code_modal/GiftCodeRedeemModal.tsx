// Module ID: 10982
// Function ID: 10983
// Name: GiftCodeRedeemModal
// Dependencies: [19, 10973, 1372, 21, 5936, 5039, 10983, 10996, 10997, 504, 10984, 6421, 2]
// Exports: default

// Module 10982 (GiftCodeRedeemModal)
import Fragment from "Fragment" /* 21 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import GiftCodeRedeemStartDefault from "GiftCodeRedeemStart" /* 10983 */;
import useGiftCodeErrorMessageDefault from "useGiftCodeErrorMessage" /* 10984 */;
import GiftCodeRedeemSuccessDefault from "GiftCodeRedeemSuccess" /* 10996 */;
import GiftCodeRedeemErrorDefault from "GiftCodeRedeemError" /* 10997 */;
import react from "react" /* 19 */;
import GiftCodeStore from "GiftCodeStore" /* 10973 */;
import UserStore from "UserStore" /* 1372 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const GiftCodeModalScreens = { START: "giftcode-start", SUCCESS: "giftcode-success", ERROR: "giftcode-error" };
const headerTitle = NavigatorHeader.getHeaderNoTitle();
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default function GiftCodeRedeemModal(code) {
  let currentUser;
  let items3;
  let obj10;
  let obj8;
  let tmp2Result4;
  let tmp2Result5;
  let tmp2Result6;
  code = code.code;
  let giftCodeDebugOverride = code.giftCodeDebugOverride;
  let merged = Object.assign(code, Object.assign({ code: 0, giftCodeDebugOverride: 0 }));
  const obj = code(504);
  const items = [GiftCodeStore];
  if (giftCodeDebugOverride == null) {
    giftCodeDebugOverride = obj.useStateFromStores(items, () => GiftCodeStore.get(code));
  }
  const items1 = [UserStore];
  const tmp2Result = code(504);
  const stateFromStores = tmp2Result.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp5 = useGiftCodeErrorMessageDefault(code, stateFromStores);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = {};
    const START = obj.START;
    const obj3 = {
      headerTitle,
      headerLeft: tmp2Result4.getHeaderCloseButton(() => {
          const arr = ModalActionCreatorsDefault;
          return arr.pop();
        }),
      render(arg0) {
          GiftCodeRedeemStartDefault;
          const merged = Object.assign(arg0);
          return <tmp user={stateFromStores} />;
        }
    };
    obj2[START] = obj3;
    tmp2Result4 = code(5936);
    const SUCCESS = obj.SUCCESS;
    const obj4 = {
      headerTitle,
      headerLeft: tmp2Result5.getHeaderCloseButton(() => {
          const arr = ModalActionCreatorsDefault;
          return arr.pop();
        }),
      render(arg0) {
          GiftCodeRedeemSuccessDefault;
          const merged = Object.assign(arg0);
          return <tmp user={stateFromStores} />;
        }
    };
    obj2[SUCCESS] = obj4;
    tmp2Result5 = code(5936);
    const ERROR = obj.ERROR;
    const obj5 = {
      headerTitle,
      headerLeft: tmp2Result6.getHeaderCloseButton(() => {
          const arr = ModalActionCreatorsDefault;
          return arr.pop();
        }),
      render(arg0) {
          GiftCodeRedeemErrorDefault;
          const merged = Object.assign(arg0);
          return <tmp />;
        }
    };
    obj2[ERROR] = obj5;
    let tmp6Result = null;
    tmp2Result6 = code(5936);
    if (null != giftCodeDebugOverride) {
      const obj6 = { screens: obj2, initialRouteStack: items3 };
      const Navigator = tmp2(6421).Navigator;
      const tmp6 = jsx;
      if (null != tmp5) {
        const obj7 = { name: obj.ERROR, params: obj8 };
        obj8 = { message: tmp5 };
        const merged1 = Object.assign(merged);
        const items2 = [obj7];
        items3 = items2;
      } else {
        const obj9 = { name: obj.START, params: obj10 };
        obj10 = { giftCode: giftCodeDebugOverride };
        const merged2 = Object.assign(merged);
        items3 = [obj9];
      }
      tmp6Result = tmp6(Navigator, obj6);
    }
    return tmp6Result;
  }
};
export { GiftCodeModalScreens };
