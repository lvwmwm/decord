// Module ID: 14904
// Function ID: 14905
// Name: UserProfileWidgetsBoardEditNotice
// Dependencies: [19, 17, 4855, 21, 5009, 575, 8806, 10500, 4842, 5730, 5619, 1114, 6974, 7048, 2]
// Exports: default

// Module 14904 (UserProfileWidgetsBoardEditNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import XSmallIcon from "XSmallIcon" /* 7048 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8806 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10500 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
        CircleInformationIcon = tmp(5730).CircleInformationIcon;
        items1 = [hasOwnProperty(View, obj2), , ];
        const obj4 = { style: closure_0.text, variant: "text-sm/medium", color: "text-strong", children: intl.string(intl3.t.kv8ULD) };
        const Text = tmp(5619).Text;
        intl = tmp(1114).intl;
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
        const PressableOpacity = tmp(6974).PressableOpacity;
        intl2 = tmp(1114).intl;
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
