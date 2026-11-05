// Module ID: 12568
// Function ID: 12569
// Name: UserProfileWidgetEditOptionsButton
// Dependencies: [19, 21, 8173, 9912, 575, 1113, 12569, 2]
// Exports: default

// Module 12568 (UserProfileWidgetEditOptionsButton)
import Fragment from "Fragment" /* 21 */;
import openUserProfileWidgetEditOptionsActionSheetDefault from "openUserProfileWidgetEditOptionsActionSheet" /* 12569 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsButton.tsx");

export default function UserProfileWidgetEditOptionsButton(widget) {
  widget = widget.widget;
  const ref = react.useRef(null);
  const IconButton = widget(8173).IconButton;
  ({ size: "sm", color: ref(575).colors.ICON_DEFAULT });
  const MoreHorizontalIcon = widget(9912).MoreHorizontalIcon;
  const intl = widget(1113).intl;
  return <IconButton ref={ref} size="sm" variant="secondary" icon={null} accessibilityLabel={intl.string(widget(1113).t.xpSHSk)} onPress={function onPress() {
    const obj = { widget, returnFocusRef: ref };
    return openUserProfileWidgetEditOptionsActionSheetDefault(obj);
  }} />;
};
