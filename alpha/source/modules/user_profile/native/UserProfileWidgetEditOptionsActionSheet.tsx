// Module ID: 10833
// Function ID: 10834
// Name: UserProfileWidgetEditOptionsActionSheet
// Dependencies: [19, 502, 8490, 7365, 21, 7368, 10822, 8557, 5319, 1113, 7364, 10834, 6034, 6329, 5546, 10832, 10836, 2121, 10858, 10859, 7961, 7923, 7756, 7453, 2]
// Exports: default

// Module 10833 (UserProfileWidgetEditOptionsActionSheet)
import Fragment from "Fragment" /* 21 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 7365 */;
import Constants from "Constants" /* 8490 */;
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
  let tmpResult6;
  widget = widget.widget;
  const returnFocusRef = widget.returnFocusRef;
  let header;
  react = undefined;
  const tmp = widget;
  let tmp2 = header;
  if (widget instanceof widget(header[5]).UserProfilePersonalWidget) {
    header = widget.header;
  } else {
    const tmpResult = tmp(tmp2[6]);
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
        const obj = widget(header[13]);
        const result = obj.setAccessibilityFocus(obj2);
      }
    };
  }, items);
  const tmpResult4 = tmp(tmp2[10]);
  let isGameWidgetResult = tmpResult4.isGameWidget(widget);
  if (isGameWidgetResult) {
    const tmpResult5 = tmp(tmp2[6]);
    isGameWidgetResult = tmpResult5.widgetMaxGames(widget.type) > 1;
  }
  const items1 = [];
  if (isGameWidgetResult) {
    let obj = { key: constants.REORDER_GAMES, label: intl.string(tmp(tmp2[9]).t["0dOFq+"]), IconComponent: tmp(tmp2[11]).ArrowsUpDownIcon, variant: "default", disabled: tmpResult6.getUniqueWidgetGames(widget).length < 2 };
    const push = items1.push;
    intl = tmp(tmp2[9]).intl;
    tmpResult6 = tmp(tmp2[6]);
    push(obj);
  }
  let obj2 = { key: constants.REMOVE, label: intl2.string(tmp(tmp2[9]).t.Mm07Yc), IconComponent: tmp(tmp2[12]).TrashIcon, variant: "danger" };
  const push2 = items1.push;
  intl2 = tmp(tmp2[9]).intl;
  push2(obj2);
  const ActionSheet = tmp(tmp2[20]).ActionSheet;
  const intl3 = tmp(tmp2[9]).intl;
  let obj4 = {
    hasIcons: true,
    children: items1.map((label) => {
      let constants2;
      let id;
      const TableRow = widget(header[23]).TableRow;
      let obj2 = { IconComponent: label.IconComponent, variant: label.variant };
      return <TableRow key={arg0.key} label={arg0.label} variant={arg0.variant} disabled={arg0.disabled} icon={null} onPress={function onPress() {
        let profileEditAnalyticsOptions;
        let ref;
        if (constants2.REORDER_GAMES === label.key) {
          let tmp2 = label;
          let obj = label(closure_1_2[10]);
          if (obj.isGameWidget(widget)) {
            closure_3.current = false;
            let obj2 = closure_1_1(tmp3[14]);
            obj2.hideActionSheet(tmp2(closure_1_2[15]).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
            const tmp9 = closure_1_6(widget.type);
            const openLazy = closure_1_1(closure_1_2[14]).openLazy;
            closure_1_1(closure_1_2[14]);
            const tmp2Result = tmp2(closure_1_2[17]);
            if (tmp9) {
              const obj3 = { widgetType: widget.type, returnFocusRef };
              openLazy(tmp2Result(closure_1_2[16], closure_1_2.paths), "UserProfileWidgetGameDetailsReorderActionSheet", obj3);
            } else {
              const obj4 = { widgetType: widget.type, returnFocusRef };
              openLazy(tmp2Result(closure_1_2[18], closure_1_2.paths), "UserProfileWidgetGameCoverGridReorderActionSheet", obj4);
            }
          }
        } else if (tmp.REMOVE === label.key) {
          closure_3.current = false;
          const obj5 = closure_1_1(closure_1_2[14]);
          obj5.hideActionSheet(label(closure_1_2[15]).USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY);
          const obj7 = {
            widgetName: header,
            onConfirm() {
                const obj = profileEditAnalyticsOptions(header[6]);
                const result = obj.removeWidgetFromPending(profileEditAnalyticsOptions);
                const trackUserProfileEditAction = profileEditAnalyticsOptions(header[7]).trackUserProfileEditAction;
                const tmp2 = profileEditAnalyticsOptions(header[7]);
                const obj2 = { userId: id.getId(), action: constants.WIDGET_REMOVED };
                const merged = Object.assign(profileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
                const result1 = trackUserProfileEditAction(obj2);
                const AccessibilityAnnouncer = profileEditAnalyticsOptions(header[8]).AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = profileEditAnalyticsOptions(header[9]).intl;
                announce(intl.string(profileEditAnalyticsOptions(header[9]).t.zzsK7h));
              },
            onDismissWithoutRemoving() {
                const obj = profileEditAnalyticsOptions(header[13]);
                const obj2 = { ref, delay: 100 };
                return obj.setAccessibilityFocus(obj2);
              }
          };
          const obj6 = label(closure_1_2[19]);
          obj6.confirmRemoveWidget(obj7);
        }
      }} />;
    })
  };
  const TableRowGroup = tmp(tmp2[22]).TableRowGroup;
  return <ActionSheet header={null} dismissAccessibilityLabel={intl3.formatToPlainString(tmp(tmp2[9]).t.X5Fk6g, { widgetName: header })}>{null}</ActionSheet>;
};
