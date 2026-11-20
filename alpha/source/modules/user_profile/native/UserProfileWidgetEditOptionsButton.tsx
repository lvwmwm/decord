// Module ID: 10105
// Function ID: 10106
// Name: UserProfileWidgetEditOptionsButton
// Dependencies: [19, 21, 7471, 6902, 575, 1112, 10106, 2]
// Exports: default

// Module 10105 (UserProfileWidgetEditOptionsButton)
import Fragment from "Fragment" /* 21 */;
import openUserProfileWidgetEditOptionsActionSheetDefault from "openUserProfileWidgetEditOptionsActionSheet" /* 10106 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsButton.tsx");

export default function UserProfileWidgetEditOptionsButton(widget) {
  widget = widget.widget;
  const ref = react.useRef(null);
  const IconButton = widget(7471).IconButton;
  ({ size: "sm", color: ref(575).colors.ICON_DEFAULT });
  const MoreHorizontalIcon = widget(6902).MoreHorizontalIcon;
  const intl = widget(1112).intl;
  return <IconButton ref={ref} size="sm" variant="secondary" icon={null} accessibilityLabel={intl.string(widget(1112).t.xpSHSk)} onPress={function onPress() {
    const obj = { widget, returnFocusRef: ref };
    return openUserProfileWidgetEditOptionsActionSheetDefault(obj);
  }} />;
};
