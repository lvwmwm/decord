// Module ID: 15276
// Function ID: 116530
// Name: CancelSubscriptionModal
// Dependencies: [31, 27, 33, 1557, 5450, 14115, 5087, 5519, 2]
// Exports: default

// Module 15276 (CancelSubscriptionModal)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx");

export default function CancelSubscriptionModal(onClose) {
  let initialStack;
  let screens;
  onClose = onClose.onClose;
  let obj = Object.create(null);
  obj.onClose = 0;
  const importDefault = Object.assign(onClose, obj);
  bottom = importDefault(bottom[3])().bottom;
  ({ screens, initialStack } = importDefault(bottom[4])(() => {
    const screens = {};
    let obj = {
      render(arg0) {
        obj = { style: obj };
        obj = { paddingBottom: outer1_2, flex: 1 };
        obj = {};
        const merged = Object.assign(arg0);
        obj["onClose"] = outer1_0;
        obj.children = outer2_4(callback(bottom[5]), obj);
        return outer2_4(outer2_3, obj);
      },
      title: "Subscriptions",
      headerLeft: onClose(bottom[6]).getHeaderCloseButton(onClose)
    };
    screens[outer1_5.CANCEL_SUBSCRIPTION] = obj;
    obj = { name: outer1_5.CANCEL_SUBSCRIPTION, params: closure_1 };
    const initialStack = [obj];
    return { screens, initialStack };
  }));
  return jsx(onClose(bottom[7]).Navigator, { screens, initialRouteStack });
};
