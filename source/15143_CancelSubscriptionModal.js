// Module ID: 15143
// Function ID: 114260
// Name: CancelSubscriptionModal
// Dependencies: []
// Exports: default

// Module 15143 (CancelSubscriptionModal)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx");

export default function CancelSubscriptionModal(onClose) {
  let initialStack;
  let screens;
  const arg1 = onClose.onClose;
  const obj = Object.create(null);
  obj.onClose = 0;
  const importDefault = Object.assign(onClose, obj);
  const dependencyMap = importDefault(dependencyMap[3])().bottom;
  ({ screens, initialStack } = importDefault(dependencyMap[4])(() => {
    const screens = {};
    let obj = {
      render(arg0) {
        let obj = { style: obj };
        obj = { paddingBottom: closure_2, flex: 1 };
        obj = {};
        const merged = Object.assign(arg0);
        obj["onClose"] = closure_0;
        obj.children = callback2(callback(closure_2[5]), obj);
        return callback2(closure_3, obj);
      },
      title: "Subscriptions",
      headerLeft: onClose(bottom[6]).getHeaderCloseButton(onClose)
    };
    screens[constants.CANCEL_SUBSCRIPTION] = obj;
    obj = { name: constants.CANCEL_SUBSCRIPTION, params: closure_1 };
    const initialStack = [obj];
    return { screens, initialStack };
  }));
  return jsx(arg1(dependencyMap[7]).Navigator, { screens, initialRouteStack });
};
