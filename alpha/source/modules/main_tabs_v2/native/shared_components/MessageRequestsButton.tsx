// Module ID: 16378
// Function ID: 16379
// Name: MessageRequestsButton
// Dependencies: [19, 17, 7466, 7467, 21, 4757, 504, 16379, 5187, 1115, 8183, 13569, 10145, 2]
// Exports: default

// Module 16378 (MessageRequestsButton)
import initialize from "initialize" /* 504 */;
import _modDef10145 from "module_10145" /* 10145 */;
import IconActionButtonDefault from "IconActionButton" /* 13569 */;
import _mod16379 from "module_16379" /* 16379 */;
import noop from "module_19" /* 19 */;
import MessageRequestStore from "MessageRequestStore" /* 7466 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7467 */;

require = fn;
function MessageRequestAnimation(color) {
  const ref = noop.useRef(null);
  const items = [MessageRequestStore];
  const stateFromStores = initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
  const items1 = [SpamMessageRequestStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => spamChannelsCount.getSpamChannelsCount());
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (stateFromStores > 0) {
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
  }, items2);
  return React5(_mod16379.MessageRequestLottie, { ref, color: color.color, size: "sm", autoPlay: true });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4757);
let closure_9 = createStyles.createStyles({ buttonContainer: { position: "relative" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx");

export default function MessageRequestsButton(alternateVariant) {
  let flag = alternateVariant.alternateVariant;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(alternateVariant, Object.assign({ alternateVariant: 0 }));
  const tmp2 = closure_9();
  const items = [MessageRequestStore];
  const str = initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
  const items1 = [SpamMessageRequestStore];
  if (0 === str) {
    if (0 === obj2.useStateFromStores(items1, () => spamChannelsCount.getSpamChannelsCount())) {
      return null;
    }
  }
  if (flag) {
    let str1;
    if (str > 0) {
      str1 = str.toString();
    }
    const obj3 = { style: tmp2.buttonContainer, collapsable: false, children: null };
    if (null != str1) {
      const obj4 = { icon: React5(MessageRequestAnimation, {}), variant: "secondary", text: str1, size: "sm", accessibilityLabel: null };
      const intl3 = tmp3(1115).intl;
      obj4.accessibilityLabel = intl3.string(tmp3(1115).t.e7GWjQ);
      const merged1 = Object.assign(merged);
      let tmp21 = React5(tmp3(5187).Button, obj4);
      let tmp16 = React5;
    } else {
      tmp16 = React5;
      const obj5 = { variant: "secondary", size: "sm", icon: React5(MessageRequestAnimation, {}), accessibilityLabel: null };
      const intl2 = tmp3(1115).intl;
      obj5.accessibilityLabel = intl2.string(tmp3(1115).t.e7GWjQ);
      const merged2 = Object.assign(merged);
      tmp21 = React5(tmp3(8183).IconButton, obj5);
    }
    const items2 = [tmp21, str > 0 && tmp16(tmp3(13569).ButtonBadge, { badgePosition: "right" })];
    obj3.children = items2;
    return React6(View, obj3);
  } else {
    const obj6 = { source: _modDef10145, IconComponent: MessageRequestAnimation, accessibilityLabel: null, buttonText: null, badge: null, badgePosition: "right" };
    const intl = tmp3(1115).intl;
    obj6.accessibilityLabel = intl.string(tmp3(1115).t.e7GWjQ);
    let str2;
    if (str > 0) {
      str2 = str.toString();
    }
    obj6.buttonText = str2;
    obj6.badge = str > 0;
    const merged3 = Object.assign(merged);
    return React5(IconActionButtonDefault, obj6);
  }
  obj2 = initialize;
};
