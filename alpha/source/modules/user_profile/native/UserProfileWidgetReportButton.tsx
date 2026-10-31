// Module ID: 14961
// Function ID: 14962
// Name: UserProfileWidgetReportButton
// Dependencies: [19, 17, 21, 1113, 10084, 14962, 9874, 9756, 575, 2]
// Exports: default

// Module 14961 (UserProfileWidgetReportButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import MoreHorizontalIcon2 from "MoreHorizontalIcon" /* 9756 */;
import ContextMenu from "ContextMenu" /* 9874 */;
import FlagIcon from "FlagIcon" /* 10084 */;
import showReportModalForUserWidget from "showReportModalForUserWidget" /* 14962 */;
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
