// Module ID: 14597
// Function ID: 14598
// Name: UserProfileWidgetGameCoverGridReorderActionSheet
// Dependencies: [19, 17, 502, 21, 5043, 575, 14584, 14586, 5303, 6147, 504, 14566, 6171, 14570, 14575, 1654, 14596, 1112, 14598, 14558, 2]
// Exports: default

// Module 14597 (UserProfileWidgetGameCoverGridReorderActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import DragHandle from "DragHandle" /* 6147 */;
import WidgetUtils from "WidgetUtils" /* 14570 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 14584 */;
import GameCoverImageDefault from "GameCoverImage" /* 14586 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { dragHandle: obj2 };
obj2 = { position: "absolute", top: nativeDefault.space.PX_8, start: 0 };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = react.memo(function ReorderableGameCover(arg0) {
  let coverWidth;
  let gameId;
  let handleGesture;
  let items;
  let obj4;
  ({ gameId, coverWidth, handleGesture } = arg0);
  const obj = { children: items };
  const obj2 = { width: coverWidth, accessible: false };
  const tmp = closure_9();
  const tmp2 = useGameNameAndCoverImageDefault(gameId);
  const tmp3 = GameCoverImageDefault;
  const merged = Object.assign(tmp2);
  items = [metroRequire(tmp3, obj2), ];
  const obj3 = { gesture: handleGesture, children: metroRequire(View, obj4) };
  obj4 = { style: tmp.dragHandle, children: metroRequire(DragHandle.DragHandle, { variant: "overlay", size: "sm", borderRadius: { topStart: 0, bottomStart: 0 } }) };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items[1] = metroRequire(GestureDetector, obj3);
  return metroImportAll(metroImportDefault, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCoverGridReorderActionSheet.tsx");

export default function UserProfileWidgetGameCoverGridReorderActionSheet(widgetType) {
  let closure_1;
  let columns;
  let coverWidth;
  let id;
  let intl;
  let isMeasured;
  let obj4;
  let onLayout;
  let ref;
  let tmp13;
  widgetType = widgetType.widgetType;
  importDefault = undefined;
  coverWidth = undefined;
  const tmp2 = coverWidth;
  const returnFocusRef = widgetType.returnFocusRef;
  let obj = widgetType(coverWidth[10]);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp5 = require("useUserProfileWidgets")(stateFromStores);
  const tmp4 = importDefault;
  importDefault = tmp5;
  const items1 = [tmp5, widgetType];
  const memo = react.useMemo(() => {
    let mapped;
    const found = closure_1.find((type) => {
      const obj = widgetType(coverWidth[12]);
      const isGameWidgetResult = obj.isGameWidget(type) && type.type === closure_1_0;
      return isGameWidgetResult;
    });
    if (null != found) {
      let obj = WidgetUtils;
      const uniqueWidgetGames = obj.getUniqueWidgetGames(found);
      mapped = uniqueWidgetGames.map((gameId) => gameId.gameId);
    } else {
      mapped = [];
    }
    return mapped;
  }, items1);
  const tmp7 = require("useGameCoverLayout")();
  ({ isMeasured, coverWidth } = tmp7);
  ({ ref, onLayout, columns } = tmp7);
  const obj2 = widgetType(coverWidth[15]);
  const animatedRef = obj2.useAnimatedRef();
  const items2 = [widgetType];
  const items3 = [coverWidth];
  const callback = react.useCallback((arr) => {
    const obj = WidgetUtils;
    return obj.setGameOrderInWidget(widgetType, arr);
  }, items2);
  const callback1 = react.useCallback((gameId, handleGesture) => {
    const obj = { gameId, coverWidth, handleGesture };
    return metroRequire(closure_10, obj);
  }, items3);
  const obj3 = { dismissAccessibilityLabel: intl.string(widgetType(coverWidth[17]).t.rnh54p), returnFocusRef, scrollRef: animatedRef, children: closure_6(tmp13, obj4) };
  const tmp12 = require("UserProfileReorderActionSheet");
  intl = widgetType(coverWidth[17]).intl;
  obj4 = { ref, onLayout, children: isMeasured };
  tmp13 = View;
  if (isMeasured) {
    const obj5 = { gameIds: memo, columns, itemWidth: coverWidth, itemHeight: coverWidth / widgetType(tmp2[19]).GAME_COVER_ASPECT_RATIO, gap: widgetType(tmp2[19]).GAME_COVER_GRID_GAP, scrollRef: animatedRef, onCommitOrder: callback, renderGame: callback1 };
    const tmp4Result = tmp4(tmp2[18]);
    isMeasured = tmp11(tmp4Result, obj5);
  }
  return closure_6(tmp12, obj3);
};
