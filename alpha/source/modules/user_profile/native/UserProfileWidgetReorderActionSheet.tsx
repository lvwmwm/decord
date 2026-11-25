// Module ID: 16118
// Function ID: 16119
// Name: UserProfileWidgetReorderActionSheet
// Dependencies: [19, 17, 502, 6141, 21, 5012, 575, 14518, 14547, 14531, 14550, 14533, 14523, 14530, 7484, 14620, 6140, 504, 14624, 14544, 1112, 2]
// Exports: default

// Module 16118 (UserProfileWidgetReorderActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 6140 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 6141 */;
import useGetOrFetchApplications from "useGetOrFetchApplications" /* 7484 */;
import WidgetUtils from "WidgetUtils" /* 14518 */;
import useGameCoverLayoutDefault from "useGameCoverLayout" /* 14523 */;
import UserProfileWidgetDraggableCardDefault from "UserProfileWidgetDraggableCard" /* 14530 */;
import UserProfileWidgetGameCoverDefault from "UserProfileWidgetGameCover" /* 14533 */;
import UserProfileReorderActionSheetDefault from "UserProfileReorderActionSheet" /* 14544 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp4;
const UserProfileApplicationWidgetIconDefault = tmp4(14620);
function CompactGameWidgetContent(userId) {
  let columns;
  let coverWidth;
  let tmp7;
  userId = userId.userId;
  const widget = userId.widget;
  ({ columns, coverWidth } = userId);
  const items = [widget];
  const isMeasured = userId.isMeasured;
  const memo = react.useMemo(() => {
    const obj = WidgetUtils;
    return obj.getUniqueWidgetGames(widget);
  }, items);
  if (0 === memo.length) {
    tmp7 = jsx(widget(coverWidth[8]), { widgetType: widget.type });
  } else {
    tmp7 = null;
    if (isMeasured) {
      let tmp2Result;
      if (widgetShowsGameDetails(widget.type)) {
        const obj3 = { userId, game: memo[0], coverWidth, compact: true, disableInteraction: true };
        tmp2Result = tmp2(tmp3(tmp4[9]), obj3);
      } else {
        let obj = {
          games: memo.slice(0, columns),
          columns,
          renderCover(game) {
                  return jsx(UserProfileWidgetGameCoverDefault, { userId, game, coverWidth, disableInteraction: true }, game.gameId);
                },
          disableInteraction: true
        };
        const tmp3Result = widget(coverWidth[10]);
        tmp2Result = tmp2(tmp3Result, obj);
      }
      tmp7 = tmp2Result;
    }
  }
  return tmp7;
}
function CompactGameWidget(widget) {
  let columns;
  let coverWidth;
  let isMeasured;
  let onLayout;
  let ref;
  widget = widget.widget;
  const userId = widget.userId;
  ({ ref, onLayout, isMeasured, columns, coverWidth } = useGameCoverLayoutDefault());
  useGameCoverLayoutDefault();
  UserProfileWidgetDraggableCardDefault;
  const obj2 = WidgetUtils;
  return <tmp2 title={obj2.getWidgetTitle(widget)} contentRef={ref} onContentLayout={onLayout}>{null}</tmp2>;
}
function CompactApplicationWidget(widget) {
  widget = widget.widget;
  const obj = useGetOrFetchApplications;
  const getOrFetchApplication = obj.useGetOrFetchApplication(widget.applicationId);
  let name;
  UserProfileWidgetDraggableCardDefault;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  return <tmp5 title={name} titleLeadingIcon={jsx(UserProfileApplicationWidgetIconDefault, { application: getOrFetchApplication })} />;
}
const View = react_native.View;
const widgetShowsGameDetails = UserProfileWidgetConstants.widgetShowsGameDetails;
const jsx = Fragment.jsx;
let obj = { list: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
let closure_12 = react.memo(function CompactWidgetRenderer(widget) {
  let tmpResult;
  widget = widget.widget;
  const userId = widget.userId;
  const obj = UserProfileGameWidgetTypes;
  if (obj.isGameWidget(widget)) {
    const obj2 = { userId, widget };
    tmpResult = tmp(CompactGameWidget, obj2);
  } else {
    const obj3 = { widget };
    tmpResult = tmp(CompactApplicationWidget, obj3);
  }
  return tmpResult;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReorderActionSheet.tsx");

export default function UserProfileWidgetReorderActionSheet(returnFocusRef) {
  let id;
  let stateFromStores;
  returnFocusRef = returnFocusRef.returnFocusRef;
  const tmp = closure_8();
  const items = [AuthenticationStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const obj2 = stateFromStores(14624);
  const boardWidgets = obj2.useBoardWidgets(stateFromStores);
  UserProfileReorderActionSheetDefault;
  const intl = stateFromStores(1112).intl;
  ({ accessibilityRole: "list", style: tmp.list, children: boardWidgets.map((widget) => <closure_12 key={arg0.getUniqueKey()} userId={stateFromStores} widget={arg0} />) });
  return <tmp3 dismissAccessibilityLabel={intl.string(stateFromStores(1112).t["+uBSeT"])} returnFocusRef={returnFocusRef}>{null}</tmp3>;
};
