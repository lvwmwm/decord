// Module ID: 10858
// Function ID: 10859
// Name: UserProfileWidgetGameCoverGridReorderActionSheet
// Dependencies: [19, 17, 502, 21, 5310, 10838, 575, 7459, 10844, 1113, 10846, 504, 10856, 7364, 10822, 10837, 10857, 2]
// Exports: default

// Module 10858 (UserProfileWidgetGameCoverGridReorderActionSheet)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import DragIcon2 from "DragIcon" /* 7459 */;
import WidgetUtils from "WidgetUtils" /* 10822 */;
import useGameCoverLayoutDefault from "useGameCoverLayout" /* 10837 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 10838 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 10844 */;
import useUserProfileWidgetsDefault from "useUserProfileWidgets" /* 10856 */;
import UserProfileReorderActionSheetDefault from "UserProfileReorderActionSheet" /* 10857 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5310 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let tmp2;
const GameCoverImageDefault = tmp2(10846);
function PlaceholderDragHandle() {
  let DragIcon;
  let obj2;
  const obj = { style: closure_9().placeholderDragHandle, children: metroImportDefault(DragIcon, obj2) };
  obj2 = { size: "xs", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  DragIcon = DragIcon2.DragIcon;
  return metroImportDefault(hasOwnProperty, obj);
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { grid: obj2, dragHandlePosition: obj3, placeholderDragHandle: size };
obj2 = { flexDirection: "row", flexWrap: "wrap", gap: UserProfileGameWidgetConstants.GAME_COVER_GRID_GAP };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", top: nativeDefault.space.PX_8, start: 0 };
size = { width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderTopEndRadius: nativeDefault.radii.sm, borderBottomEndRadius: nativeDefault.radii.sm };
let closure_9 = createStyles(obj);
let closure_11 = react.memo(function ReorderableGameCover(arg0) {
  let coverWidth;
  let game;
  let gameName;
  let items;
  ({ game, coverWidth } = arg0);
  const tmp = closure_9();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  if (tmp4.isLoading) {
    const intl = intl2.intl;
    gameName = intl.string(intl2.t.ZTNur7);
  } else {
    gameName = tmp4.gameName;
  }
  const obj = { accessibilityLabel: gameName, children: items };
  const obj2 = { width: coverWidth, accessible: false };
  const tmp2Result = GameCoverImageDefault;
  const merged = Object.assign(tmp4);
  items = [metroImportDefault(tmp2Result, obj2), ];
  const obj3 = { style: tmp.dragHandlePosition, children: metroImportDefault(PlaceholderDragHandle, {}) };
  items[1] = metroImportDefault(hasOwnProperty, obj3);
  return metroImportAll(React3, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCoverGridReorderActionSheet.tsx");

export default function UserProfileWidgetGameCoverGridReorderActionSheet(widgetType) {
  let c2;
  let closure_1;
  let coverWidth;
  let id;
  let intl;
  let isMeasured;
  let obj3;
  let onLayout;
  let ref;
  let tmp7;
  widgetType = widgetType.widgetType;
  dependencyMap = undefined;
  const returnFocusRef = widgetType.returnFocusRef;
  const tmp = closure_9();
  let obj = widgetType(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp3 = useUserProfileWidgetsDefault(stateFromStores);
  importDefault = tmp3;
  const items1 = [tmp3, widgetType];
  const memo = react.useMemo(() => {
    let uniqueWidgetGames;
    const found = closure_1.find((type) => {
      const obj = widgetType(c2[13]);
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
  const tmp4 = useGameCoverLayoutDefault();
  ({ isMeasured, coverWidth: c2 } = tmp4);
  ({ ref, onLayout } = tmp4);
  const obj2 = { dismissAccessibilityLabel: intl.string(widgetType(1113).t.rnh54p), returnFocusRef, children: closure_7(tmp7, obj3) };
  const tmp6 = UserProfileReorderActionSheetDefault;
  intl = widgetType(1113).intl;
  obj3 = { ref, onLayout, accessibilityRole: "list", style: tmp.grid, children: isMeasured };
  tmp7 = closure_5;
  if (isMeasured) {
    isMeasured = memo.map((game) => {
      const obj = { game, coverWidth };
      return metroImportDefault(closure_11, obj, game.gameId);
    });
  }
  return closure_7(tmp6, obj2);
};
