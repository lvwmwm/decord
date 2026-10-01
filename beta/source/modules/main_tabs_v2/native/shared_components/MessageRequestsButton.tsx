// Module ID: 15661
// Function ID: 15662
// Name: MessageRequestsButton
// Dependencies: [19, 17, 6640, 6641, 21, 4836, 504, 15662, 5281, 1115, 7363, 12830, 9338, 2]
// Exports: default

// Module 15661 (MessageRequestsButton)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1115 */;
import AssetRegistryDefault from "AssetRegistry" /* 9338 */;
import IconActionButton from "IconActionButton" /* 12830 */;
import _mod15662 from "module_15662" /* 15662 */;
import react from "react" /* 19 */;
import MessageRequestStore from "MessageRequestStore" /* 6640 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6641 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const IconActionButtonDefault = IconActionButton;

let metroImportAll;
let metroImportDefault;
const f102422 = () => messageRequestsCount.getMessageRequestsCount();
const f102423 = () => spamChannelsCount.getSpamChannelsCount();
function MessageRequestAnimation(color) {
  color = color.color;
  const ref = react.useRef(null);
  const items = [MessageRequestStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f102422);
  const items1 = [SpamMessageRequestStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, f102423);
  const items2 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (stateFromStores > 0) {
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
  }, items2);
  return metroImportDefault(_mod15662.MessageRequestLottie, { ref, color, size: "sm", autoPlay: true });
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ buttonContainer: { position: "relative" } });
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx");

export default function MessageRequestsButton(alternateVariant) {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let messageRequestsCount;
  let spamChannelsCount;
  let str2;
  let flag = alternateVariant.alternateVariant;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(alternateVariant, Object.assign({ alternateVariant: 0 }));
  const items = [MessageRequestStore];
  const tmp2 = closure_9();
  const obj = get_initialized;
  const str = obj.useStateFromStores(items, f102422);
  const items1 = [SpamMessageRequestStore];
  const obj2 = get_initialized;
  if (0 === str) {
    if (0 === obj2.useStateFromStores(items1, f102423)) {
      return null;
    }
  }
  if (flag) {
    let tmp21;
    let tmp16;
    let str1;
    if (str > 0) {
      str1 = str.toString();
    }
    const obj3 = { style: tmp2.buttonContainer, collapsable: false, children: items2 };
    const tmp14 = metroImportAll;
    const tmp15 = View;
    if (null != str1) {
      const obj4 = { icon: metroImportDefault(MessageRequestAnimation, {}), variant: "secondary", text: str1, size: "sm", accessibilityLabel: intl3.string(intl4.t.e7GWjQ) };
      const Button = tmp3(5281).Button;
      intl3 = tmp3(1115).intl;
      const merged1 = Object.assign(merged);
      tmp21 = metroImportDefault(Button, obj4);
      tmp16 = metroImportDefault;
    } else {
      tmp16 = metroImportDefault;
      const obj5 = { variant: "secondary", size: "sm", icon: metroImportDefault(MessageRequestAnimation, {}), accessibilityLabel: intl2.string(intl4.t.e7GWjQ) };
      const IconButton = tmp3(7363).IconButton;
      intl2 = tmp3(1115).intl;
      const merged2 = Object.assign(merged);
      tmp21 = metroImportDefault(IconButton, obj5);
    }
    items2 = [tmp21, str > 0 && tmp16(IconActionButton.ButtonBadge, { badgePosition: "right" })];
    str > 0 && tmp16(IconActionButton.ButtonBadge, { badgePosition: "right" });
    return tmp14(tmp15, obj3);
  } else {
    const obj6 = { source: AssetRegistryDefault, IconComponent: MessageRequestAnimation, accessibilityLabel: intl.string(intl4.t.e7GWjQ), buttonText: str2, badge: str > 0, badgePosition: "right" };
    const tmp7 = IconActionButtonDefault;
    intl = tmp3(1115).intl;
    str2 = undefined;
    const tmp5 = metroImportDefault;
    if (str > 0) {
      str2 = str.toString();
    }
    const merged3 = Object.assign(merged);
    return tmp5(tmp7, obj6);
  }
};
