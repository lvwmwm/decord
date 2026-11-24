// Module ID: 14406
// Function ID: 14407
// Name: UserProfileWidgetGameDetailsReorderActionSheet
// Dependencies: [19, 17, 502, 21, 4917, 575, 14400, 14407, 14408, 504, 14391, 6045, 14395, 14421, 1112, 2]
// Exports: default

// Module 14406 (UserProfileWidgetGameDetailsReorderActionSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import WidgetUtils from "WidgetUtils" /* 14395 */;
import useGameCoverLayoutDefault from "useGameCoverLayout" /* 14400 */;
import UserProfileWidgetDraggableCardDefault from "UserProfileWidgetDraggableCard" /* 14407 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let obj2;
let tmp;
const UserProfileGameDetailsRowDefault = tmp(14408);
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { list: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = react.memo(function CompactGameWithDetailsCard(arg0) {
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
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameDetailsReorderActionSheet.tsx");

export default function UserProfileWidgetGameDetailsReorderActionSheet(widgetType) {
  let closure_2;
  let id;
  widgetType = widgetType.widgetType;
  const returnFocusRef = widgetType.returnFocusRef;
  const tmp = closure_7();
  let obj = widgetType(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp3 = stateFromStores(14391)(stateFromStores);
  dependencyMap = tmp3;
  const items1 = [tmp3, widgetType];
  const memo = react.useMemo(() => {
    let uniqueWidgetGames;
    const found = closure_2.find((type) => {
      const obj = widgetType(closure_2[11]);
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
  stateFromStores(14421);
  const intl = widgetType(1112).intl;
  ({ accessibilityRole: "list", style: tmp.list, children: memo.map((game) => <closure_8 key={arg0.gameId} userId={stateFromStores} game={arg0} />) });
  return <tmp4 dismissAccessibilityLabel={intl.string(widgetType(1112).t.rnh54p)} returnFocusRef={returnFocusRef}>{null}</tmp4>;
};
