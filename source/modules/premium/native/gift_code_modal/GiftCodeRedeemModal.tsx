// Module ID: 8013
// Function ID: 63659
// Name: GiftCodeRedeemModal
// Dependencies: [31, 8008, 1850, 33, 5121, 4372, 8014, 12308, 12309, 566, 8016, 5552, 2]
// Exports: default

// Module 8013 (GiftCodeRedeemModal)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import HeaderBackImage from "HeaderBackImage";

const require = arg1;
let obj = { START: "giftcode-start", SUCCESS: "giftcode-success", ERROR: "giftcode-error" };
HeaderBackImage = HeaderBackImage.getHeaderNoTitle();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemModal.tsx");

export default function GiftCodeRedeemModal(code) {
  code = code.code;
  let obj = Object.create(null);
  obj.code = 0;
  let merged = Object.assign(code, obj);
  obj = code(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.get(code));
  let obj1 = code(566);
  const items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_4.getCurrentUser());
  const tmp5 = importDefault(8016)(code, stateFromStores1);
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
      let obj3 = { name: obj.START };
      const obj4 = { giftCode: stateFromStores };
      const merged1 = Object.assign(merged);
      obj3.params = obj4;
      items3 = [obj3];
    }
    obj.initialRouteStack = items3;
    jsx(code(5552).Navigator, { screens: tmp17 });
    const tmp6 = jsx;
  }
};
export const GiftCodeModalScreens = obj;
