// Module ID: 14635
// Function ID: 14636
// Name: QuestDockDismissalToast
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 11769, 4528, 12285, 2]
// Exports: displayQuestDismissalToast

// Module 14635 (QuestDockDismissalToast)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import AssetRegistryDefault from "AssetRegistry" /* 11769 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12285 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
function QuestDockDismissalNotification() {
  let closure_0;
  _require = closure_6();
  const Text = require("Text/Text").Text;
  const intl = require("intl").intl;
  const obj2 = {
    arrowHook() {
      ({ resizeMode: "contain", source: AssetRegistryDefault, style: closure_0.toastArrowForwardIcon });
      return <React3 style={closure_0.toastArrowForwardIconContainer}>{null}</React3>;
    }
  };
  return <Text color="mobile-text-heading-primary" variant="text-sm/semibold">{intl.format(require("intl").t.dYE1px, obj2)}</Text>;
}
({ Image: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles(() => {
  let items;
  const obj = { toastArrowForwardIconContainer: { height: 6, width: 16 }, toastArrowForwardIcon: size };
  size = { opacity: 0.35, position: "absolute", top: "50%", left: 0, height: 16, width: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, transform: items };
  items = [{ translateY: -10 }];
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: "QUEST_BAR_DISMISS_TOAST", content: QuestDockDismissalNotification, icon: AssetRegistryDefault2, position: "bottom" };
  obj.open(obj2);
};
