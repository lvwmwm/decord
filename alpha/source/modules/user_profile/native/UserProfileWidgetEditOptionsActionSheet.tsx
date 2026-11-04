// Module ID: 12562
// Function ID: 12563
// Name: UserProfileWidgetEditOptionsActionSheet
// Dependencies: [19, 502, 8895, 21, 7918, 12563, 8903, 5150, 1113, 5872, 6156, 5382, 12561, 12568, 7502, 7457, 7201, 7116, 2]
// Exports: default

// Module 12562 (UserProfileWidgetEditOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 8895 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let closure_5 = Constants.TrackUserProfileEditActions;
const jsx = Fragment.jsx;
const constants = { REMOVE: "remove-widget" };
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsActionSheet.tsx");

export default function UserProfileWidgetEditOptionsActionSheet(widget) {
  let closure_3;
  let intl;
  widget = widget.widget;
  const returnFocusRef = widget.returnFocusRef;
  let header;
  react = undefined;
  let tmp2 = header;
  if (widget instanceof widget(header[4]).UserProfilePersonalWidget) {
    header = widget.header;
  } else {
    const tmpResult = widget(tmp2[5]);
    header = tmpResult.getWidgetTitle(widget);
  }
  react = react.useRef(true);
  const items = [returnFocusRef];
  const effect = react.useEffect(() => {
    let ref;
    let ref2;
    return () => {
      if (ref2.current) {
        const obj2 = { ref, delay: 100 };
        const obj = widget(header[10]);
        const result = obj.setAccessibilityFocus(obj2);
      }
    };
  }, items);
  let obj = { key: constants.REMOVE, label: intl.string(tmp(tmp2[8]).t.Mm07Yc), IconComponent: tmp(tmp2[9]).TrashIcon, variant: "danger" };
  intl = tmp(tmp2[8]).intl;
  const items1 = [obj];
  const ActionSheet = tmp(tmp2[14]).ActionSheet;
  const intl2 = tmp(tmp2[8]).intl;
  let obj3 = {
    hasIcons: true,
    children: items1.map((label) => {
      let constants2;
      let id;
      const TableRow = widget(header[17]).TableRow;
      let obj2 = { IconComponent: label.IconComponent, variant: label.variant };
      return <TableRow key={arg0.key} label={arg0.label} variant={arg0.variant} icon={null} onPress={function onPress() {
        let profileEditAnalyticsOptions;
        let ref;
        if (label.key === constants2.REMOVE) {
          closure_3.current = false;
          let tmp2 = returnFocusRef;
          let obj = returnFocusRef(closure_1_2[11]);
          obj.hideActionSheet(label(closure_1_2[12]).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
          let obj2 = label(closure_1_2[13]);
          const obj3 = {
            widgetName: header,
            onConfirm() {
                const obj = profileEditAnalyticsOptions(header[5]);
                const result = obj.removeWidgetFromPending(profileEditAnalyticsOptions);
                const trackUserProfileEditAction = profileEditAnalyticsOptions(header[6]).trackUserProfileEditAction;
                const tmp2 = profileEditAnalyticsOptions(header[6]);
                const obj2 = { userId: id.getId(), action: constants.WIDGET_REMOVED };
                const merged = Object.assign(profileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
                const result1 = trackUserProfileEditAction(obj2);
                const AccessibilityAnnouncer = profileEditAnalyticsOptions(header[7]).AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = profileEditAnalyticsOptions(header[8]).intl;
                announce(intl.string(profileEditAnalyticsOptions(header[8]).t.zzsK7h));
              },
            onDismissWithoutRemoving() {
                const obj = profileEditAnalyticsOptions(header[10]);
                const obj2 = { ref, delay: 100 };
                return obj.setAccessibilityFocus(obj2);
              }
          };
          obj2.confirmRemoveWidget(obj3);
        }
      }} />;
    })
  };
  const TableRowGroup = tmp(tmp2[16]).TableRowGroup;
  return <ActionSheet header={null} dismissAccessibilityLabel={intl2.formatToPlainString(widget(tmp2[8]).t["6TwVYM"], { widgetName: header })}>{null}</ActionSheet>;
};
