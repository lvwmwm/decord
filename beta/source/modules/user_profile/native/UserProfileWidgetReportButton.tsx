// Module ID: 8123
// Function ID: 8124
// Name: UserProfileWidgetReportButton
// Dependencies: [19, 17, 21, 1115, 8124, 8126, 7358, 7365, 576, 2]
// Exports: default

// Module 8123 (UserProfileWidgetReportButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import ContextMenu from "ContextMenu" /* 7358 */;
import MoreHorizontalIcon2 from "MoreHorizontalIcon" /* 7365 */;
import FlagIcon from "FlagIcon" /* 8124 */;
import showReportModalForUserWidget from "showReportModalForUserWidget" /* 8126 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_5 = { top: 8, bottom: 8, left: 8, right: 8 };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReportButton.tsx");

export default function UserProfileWidgetReportButton(arg0) {
  let hitSlop;
  let intl;
  ({ userId: require, widget: importDefault } = arg0);
  let obj = {
    label: intl.string(intl2.t.D4GvHE),
    variant: "destructive",
    IconComponent: FlagIcon.FlagIcon,
    action() {
      const obj = showReportModalForUserWidget;
      return obj.showReportModalForUserWidget(require, importDefault);
    }
  };
  intl = intl2.intl;
  const items = [obj];
  return jsx(ContextMenu.ContextMenu, {
    items,
    children(ref) {
      const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
      const intl = intl2.intl;
      const MoreHorizontalIcon = MoreHorizontalIcon2.MoreHorizontalIcon;
      return <Pressable ref={arg0.ref} hitSlop={hitSlop} accessibilityRole="button" accessibilityLabel={intl.string(intl2.t.xpSHSk)}><MoreHorizontalIcon size="sm" color={nativeDefault.colors.TEXT_MUTED} /></Pressable>;
    }
  });
};
