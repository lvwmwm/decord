// Module ID: 12638
// Function ID: 12639
// Name: UserProfileWidgetsBoardEditNotice
// Dependencies: [19, 17, 2042, 21, 4836, 576, 7687, 10088, 2029, 4787, 4832, 1115, 5435, 5992, 2]
// Exports: default

// Module 12638 (UserProfileWidgetsBoardEditNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7687 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10088 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, icon: { flexShrink: 0, marginTop: 2 }, text: { flex: 1 }, closeButton: { flexShrink: 0 } };
obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardEditNotice.tsx");

export default function UserProfileWidgetsBoardEditNotice() {
  let card;
  let closure_0;
  let items;
  _require = closure_7();
  importDefault = UserProfileSharedStylesDefault();
  let obj = {
    contentTypes: items,
    bypassAutoDismiss: true,
    children(markAsDismissed) {
      let CircleInformationIcon;
      let intl;
      let intl2;
      let items;
      let items1;
      let obj3;
      markAsDismissed = markAsDismissed.markAsDismissed;
      let tmp3 = null;
      if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE) {
        const obj = { style: items, children: items1 };
        items = [card.card, closure_0.container];
        const obj2 = { style: closure_0.icon, children: hasOwnProperty(CircleInformationIcon, obj3) };
        obj3 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
        CircleInformationIcon = tmp(4787).CircleInformationIcon;
        items1 = [hasOwnProperty(View, obj2), , ];
        const obj4 = { style: closure_0.text, variant: "text-sm/medium", color: "text-strong", children: intl.string(intl3.t.kv8ULD) };
        const Text = tmp(4832).Text;
        intl = tmp(1115).intl;
        items1[1] = hasOwnProperty(Text, obj4);
        const obj5 = {
          accessibilityRole: "button",
          accessibilityLabel: intl2.string(intl3.t.WAI6xu),
          onPress() {
              return markAsDismissed(constants.USER_DISMISS);
            },
          style: closure_0.closeButton,
          children: hasOwnProperty(XSmallIcon.XSmallIcon, { size: "sm" })
        };
        const PressableOpacity = tmp(5435).PressableOpacity;
        intl2 = tmp(1115).intl;
        items1[2] = hasOwnProperty(PressableOpacity, obj5);
        tmp3 = metroRequire(View, obj);
      }
      return tmp3;
    }
  };
  const tmp = SelectedDismissibleContentDefault;
  items = [require("dismissible_content").DismissibleContent.USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE];
  return closure_5(tmp, obj);
};
