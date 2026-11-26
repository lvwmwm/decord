// Module ID: 14580
// Function ID: 14581
// Name: UserProfileWidgetEditOptionsActionSheet
// Dependencies: [19, 502, 6137, 6172, 21, 14570, 6382, 5052, 1112, 6171, 13117, 5750, 6109, 5257, 14579, 14581, 2120, 14597, 13618, 7546, 7507, 6140, 6144, 2]
// Exports: default

// Module 14580 (UserProfileWidgetEditOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 6137 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 6172 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let closure_5 = Constants.TrackUserProfileEditActions;
const widgetShowsGameDetails = UserProfileWidgetConstants.widgetShowsGameDetails;
const jsx = Fragment.jsx;
const constants = { REORDER_GAMES: "reorder-games", REMOVE: "remove-widget" };
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditOptionsActionSheet.tsx");

export default function UserProfileWidgetEditOptionsActionSheet(widget) {
  let closure_3;
  let intl;
  let intl2;
  let tmpResult2;
  widget = widget.widget;
  const returnFocusRef = widget.returnFocusRef;
  let widgetTitle;
  react = undefined;
  const tmp = widget;
  let tmp2 = widgetTitle;
  let obj = widget(widgetTitle[5]);
  widgetTitle = obj.getWidgetTitle(widget);
  react = react.useRef(true);
  const items = [returnFocusRef];
  const effect = react.useEffect(() => {
    let ref;
    let ref2;
    return () => {
      if (ref2.current) {
        const obj2 = { ref, delay: 100 };
        const obj = widget(widgetTitle[12]);
        const result = obj.setAccessibilityFocus(obj2);
      }
    };
  }, items);
  let obj2 = widget(widgetTitle[9]);
  let isGameWidgetResult = obj2.isGameWidget(widget);
  if (isGameWidgetResult) {
    const tmpResult = tmp(tmp2[5]);
    isGameWidgetResult = tmpResult.widgetMaxGames(widget.type) > 1;
  }
  const items1 = [];
  if (isGameWidgetResult) {
    let obj3 = { key: constants.REORDER_GAMES, label: intl.string(tmp(tmp2[8]).t["0dOFq+"]), IconComponent: tmp(tmp2[10]).ArrowsUpDownIcon, variant: "default", disabled: tmpResult2.getUniqueWidgetGames(widget).length < 2 };
    const push = items1.push;
    intl = tmp(tmp2[8]).intl;
    tmpResult2 = tmp(tmp2[5]);
    push(obj3);
  }
  let obj4 = { key: constants.REMOVE, label: intl2.string(tmp(tmp2[8]).t.Mm07Yc), IconComponent: tmp(tmp2[11]).TrashIcon, variant: "danger" };
  const push2 = items1.push;
  intl2 = tmp(tmp2[8]).intl;
  push2(obj4);
  const ActionSheet = tmp(tmp2[19]).ActionSheet;
  const intl3 = tmp(tmp2[8]).intl;
  let obj6 = {
    hasIcons: true,
    children: items1.map((label) => {
      let constants2;
      let id;
      const TableRow = widget(widgetTitle[22]).TableRow;
      let obj2 = { IconComponent: label.IconComponent, variant: label.variant };
      return <TableRow key={arg0.key} label={arg0.label} variant={arg0.variant} disabled={arg0.disabled} icon={null} onPress={function onPress() {
        let profileEditAnalyticsOptions;
        let ref;
        if (constants2.REORDER_GAMES === label.key) {
          let tmp2 = label;
          let obj = label(closure_1_2[9]);
          if (obj.isGameWidget(widget)) {
            closure_3.current = false;
            let obj2 = closure_1_1(tmp3[13]);
            obj2.hideActionSheet(tmp2(closure_1_2[14]).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
            const tmp9 = closure_1_6(widget.type);
            const openLazy = closure_1_1(closure_1_2[13]).openLazy;
            closure_1_1(closure_1_2[13]);
            const tmp2Result = tmp2(closure_1_2[16]);
            if (tmp9) {
              const obj3 = { widgetType: widget.type, returnFocusRef };
              openLazy(tmp2Result(closure_1_2[15], closure_1_2.paths), "UserProfileWidgetGameDetailsReorderActionSheet", obj3);
            } else {
              const obj4 = { widgetType: widget.type, returnFocusRef };
              openLazy(tmp2Result(closure_1_2[17], closure_1_2.paths), "UserProfileWidgetGameCoverGridReorderActionSheet", obj4);
            }
          }
        } else if (tmp.REMOVE === label.key) {
          closure_3.current = false;
          const obj5 = closure_1_1(closure_1_2[13]);
          obj5.hideActionSheet(label(closure_1_2[14]).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
          const obj7 = {
            widgetName: widgetTitle,
            onConfirm() {
                const obj = profileEditAnalyticsOptions(widgetTitle[5]);
                const result = obj.removeWidgetFromPending(profileEditAnalyticsOptions);
                const trackUserProfileEditAction = profileEditAnalyticsOptions(widgetTitle[6]).trackUserProfileEditAction;
                const tmp2 = profileEditAnalyticsOptions(widgetTitle[6]);
                const obj2 = { userId: id.getId(), action: constants.WIDGET_REMOVED };
                const merged = Object.assign(profileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
                const result1 = trackUserProfileEditAction(obj2);
                const AccessibilityAnnouncer = profileEditAnalyticsOptions(widgetTitle[7]).AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = profileEditAnalyticsOptions(widgetTitle[8]).intl;
                announce(intl.string(profileEditAnalyticsOptions(widgetTitle[8]).t.zzsK7h));
              },
            onDismissWithoutRemoving() {
                const obj = profileEditAnalyticsOptions(widgetTitle[12]);
                const obj2 = { ref, delay: 100 };
                return obj.setAccessibilityFocus(obj2);
              }
          };
          const obj6 = label(closure_1_2[18]);
          obj6.confirmRemoveWidget(obj7);
        }
      }} />;
    })
  };
  const TableRowGroup = tmp(tmp2[21]).TableRowGroup;
  return <ActionSheet header={null} dismissAccessibilityLabel={intl3.formatToPlainString(tmp(tmp2[8]).t.X5Fk6g, { widgetName: widgetTitle })}>{null}</ActionSheet>;
};
