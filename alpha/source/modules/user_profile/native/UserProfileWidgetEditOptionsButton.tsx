// Module ID: 10102
// Function ID: 10103
// Name: UserProfileWidgetEditOptionsButton
// Dependencies: [19, 21, 7472, 6903, 575, 1113, 10103, 2]
// Exports: default

// Module 10102 (UserProfileWidgetEditOptionsButton)
import Fragment from "Fragment" /* 21 */;
import openUserProfileWidgetEditOptionsActionSheetDefault from "openUserProfileWidgetEditOptionsActionSheet" /* 10103 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsButton.tsx");

export default function UserProfileWidgetEditOptionsButton(widget) {
  widget = widget.widget;
  const ref = react.useRef(null);
  const IconButton = widget(7472).IconButton;
  ({ size: "sm", color: ref(575).colors.ICON_DEFAULT });
  const MoreHorizontalIcon = widget(6903).MoreHorizontalIcon;
  const intl = widget(1113).intl;
  return <IconButton ref={ref} size="sm" variant="secondary" icon={null} accessibilityLabel={intl.string(widget(1113).t.xpSHSk)} onPress={function onPress() {
    const obj = { widget, returnFocusRef: ref };
    return openUserProfileWidgetEditOptionsActionSheetDefault(obj);
  }} />;
};
