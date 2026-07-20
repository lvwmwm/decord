// Module ID: 8186
// Function ID: 64740
// Name: GiftCodeRedeemModal
// Dependencies: [0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 0, 0, 0, 0, 0]
// Exports: default

// Module 8186 (GiftCodeRedeemModal)
import "result";
import closure_3 from "result";
import closure_4 from "result";
import { jsx } from "result";
import result from "result";
import result from "result";

const obj = { START: "giftcode-start", SUCCESS: "giftcode-success", ERROR: "giftcode-error" };
result = result.getHeaderNoTitle();
result = result.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default function GiftCodeRedeemModal(code) {
  code = code.code;
  const arg1 = code;
  let obj = Object.create(null);
  obj.code = 0;
  let merged = Object.assign(code, obj);
  obj = arg1(dependencyMap[9]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => closure_3.get(code));
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  const tmp5 = importDefault(dependencyMap[10])(code, stateFromStores1);
  if (null == stateFromStores1) {
    return null;
  } else if (null == stateFromStores) {
    return null;
  } else {
    obj = { screens: tmp17 };
    if (null != tmp5) {
      obj1 = { name: obj.ERROR };
      const obj2 = { message: tmp5 };
      merged = Object.assign(merged);
      obj1.params = obj2;
      const items2 = [obj1];
      let items3 = items2;
    } else {
      const obj3 = { name: obj.START };
      const obj4 = { giftCode: stateFromStores };
      const merged1 = Object.assign(merged);
      obj3.params = obj4;
      items3 = [obj3];
    }
    obj.initialRouteStack = items3;
    jsx(arg1(dependencyMap[11]).Navigator, obj);
    const tmp6 = jsx;
  }
};
export const GiftCodeModalScreens = obj;
