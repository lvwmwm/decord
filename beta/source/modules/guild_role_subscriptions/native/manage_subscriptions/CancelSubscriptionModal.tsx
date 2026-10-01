// Module ID: 16200
// Function ID: 16201
// Name: CancelSubscriptionModal
// Dependencies: [19, 17, 21, 1613, 5910, 14771, 5936, 6421, 2]
// Exports: default

// Module 16200 (CancelSubscriptionModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx");

export default function CancelSubscriptionModal(onClose) {
  let initialStack;
  let params;
  let screens;
  onClose = onClose.onClose;
  importDefault = Object.assign(onClose, Object.assign({ onClose: 0 }));
  let bottom;
  bottom = require("useSafeAreaInsets")().bottom;
  const tmp = require("react")(() => {
    let items;
    let obj3;
    let paddingBottom;
    const obj = {};
    let obj2 = {
      render(arg0) {
        const obj2 = { paddingBottom, flex: 1 };
        params(bottom[5]);
        const merged = Object.assign(arg0);
        return <View style={obj2}>{null}</View>;
      },
      title: "Subscriptions",
      headerLeft: obj3.getHeaderCloseButton(onClose)
    };
    const CANCEL_SUBSCRIPTION = constants.CANCEL_SUBSCRIPTION;
    obj3 = NavigatorHeader;
    obj[CANCEL_SUBSCRIPTION] = obj2;
    const obj4 = { screens: obj, initialStack: items };
    items = [];
    const obj5 = { name: constants.CANCEL_SUBSCRIPTION, params };
    items[0] = obj5;
    return obj4;
  });
  ({ screens, initialStack } = tmp);
  return jsx(onClose(bottom[7]).Navigator, { screens, initialRouteStack });
};
