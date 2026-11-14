// Module ID: 12102
// Function ID: 12103
// Name: UserProfileWidgetGamesReorderActionSheet
// Dependencies: [19, 502, 21, 12103, 12108, 12109, 504, 12121, 7354, 12090, 12122, 1113, 2]
// Exports: default

// Module 12102 (UserProfileWidgetGamesReorderActionSheet)
import Fragment from "Fragment" /* 21 */;
import WidgetUtils from "WidgetUtils" /* 12090 */;
import useGameCoverLayoutDefault from "useGameCoverLayout" /* 12103 */;
import UserProfileWidgetDraggableCardDefault from "UserProfileWidgetDraggableCard" /* 12108 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let tmp;
const UserProfileGameDetailsRowDefault = tmp(12109);
const jsx = Fragment.jsx;
let closure_6 = react.memo(function CompactGameWithDetailsCard(arg0) {
  let coverWidth;
  let game;
  let onLayout;
  let ref;
  let userId;
  ({ userId, game } = arg0);
  const tmp3 = useGameCoverLayoutDefault();
  let isMeasured = tmp3.isMeasured;
  ({ ref, onLayout, coverWidth } = tmp3);
  UserProfileWidgetDraggableCardDefault;
  if (isMeasured) {
    const obj2 = { userId, game, coverWidth, compact: true, disableInteraction: true };
    isMeasured = tmp4(UserProfileGameDetailsRowDefault, obj2);
  }
  return <tmp5 contentRef={ref} onContentLayout={onLayout}>{isMeasured}</tmp5>;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGamesReorderActionSheet.tsx");

export default function UserProfileWidgetGamesReorderActionSheet(widgetType) {
  let closure_2;
  let id;
  widgetType = widgetType.widgetType;
  const returnFocusRef = widgetType.returnFocusRef;
  let obj = widgetType(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp2 = stateFromStores(12121)(stateFromStores);
  dependencyMap = tmp2;
  const items1 = [tmp2, widgetType];
  const memo = react.useMemo(() => {
    let uniqueWidgetGames;
    const found = closure_2.find((type) => {
      const obj = widgetType(closure_2[8]);
      const isGameWidgetResult = obj.isGameWidget(type) && type.type === closure_1_0;
      return isGameWidgetResult;
    });
    if (null != found) {
      let obj = WidgetUtils;
      uniqueWidgetGames = obj.getUniqueWidgetGames(found);
    } else {
      uniqueWidgetGames = [];
    }
    return uniqueWidgetGames;
  }, items1);
  stateFromStores(12122);
  const intl = widgetType(1113).intl;
  return <tmp3 dismissAccessibilityLabel={intl.string(widgetType(1113).t.rnh54p)} returnFocusRef={returnFocusRef}>{memo.map((game) => <closure_6 key={arg0.gameId} userId={stateFromStores} game={arg0} />)}</tmp3>;
};
