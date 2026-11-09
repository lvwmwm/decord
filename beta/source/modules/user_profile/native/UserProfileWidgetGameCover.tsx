// Module ID: 15224
// Function ID: 15225
// Name: UserProfileWidgetGameCover
// Dependencies: [19, 17, 21, 5140, 575, 15194, 1113, 15225, 15226, 15223, 2]

// Module 15224 (UserProfileWidgetGameCover)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 15194 */;
import useWidgetGamePressDefault from "useWidgetGamePress" /* 15223 */;
import GameCoverImageDefault from "GameCoverImage" /* 15225 */;
import UserProfileWidgetRemoveGameButtonDefault from "UserProfileWidgetRemoveGameButton" /* 15226 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { removeGameButton: obj2 };
obj2 = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
const memoResult = react.memo(function UserProfileWidgetGameCoverContent(game) {
  let coverWidth;
  let disableInteraction;
  let editableWidgetType;
  let formatToPlainStringResult;
  let obj3;
  let obj5;
  let onGamePress;
  let onRemoveGame;
  let registerCoverRef;
  let tmp2Result;
  game = game.game;
  ({ editableWidgetType, registerCoverRef } = game);
  onGamePress = undefined;
  ({ coverWidth, disableInteraction, onRemoveGame, onGamePress } = game);
  let tmp = closure_8();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = onGamePress;
  }
  onGamePress = tmp5;
  const items = [registerCoverRef, game.gameId];
  const obj = {
    ref: react.useCallback((arg0) => {
      let tmpResult;
      if (registerCoverRef != null) {
        tmpResult = tmp(game.gameId, arg0);
      }
      return tmpResult;
    }, items),
    onPress() {
      let tmp;
      if (onGamePress != null) {
        tmp = onGamePress();
      }
      return tmp;
    },
    disabled: null == tmp5,
    accessibilityRole: "button",
    accessibilityLabel: formatToPlainStringResult,
    children: metroRequire(tmp2Result, obj3)
  };
  formatToPlainStringResult = gameName;
  const tmp6 = metroImportDefault;
  const tmp9 = React3;
  if (null != tmp5) {
    const intl = intl2.intl;
    const obj2 = { gameName };
    formatToPlainStringResult = intl.formatToPlainString(intl2.t["8QLQB+"], obj2);
  }
  obj3 = { width: coverWidth };
  tmp2Result = GameCoverImageDefault;
  const merged = Object.assign(tmp4);
  const children = [metroRequire(tmp9, obj), ];
  let tmp8Result = null != editableWidgetType;
  if (tmp8Result) {
    const obj4 = { style: tmp.removeGameButton, children: metroRequire(UserProfileWidgetRemoveGameButtonDefault, obj5) };
    obj5 = { widgetType: editableWidgetType, gameId: game.gameId, gameName, onRemove: onRemoveGame };
    tmp8Result = tmp8(tmp7, obj4);
  }
  children[1] = tmp8Result;
  return tmp6(hasOwnProperty, { children });
});
let c9 = memoResult;
const memoResult1 = react.memo(function UserProfileWidgetGameCover(userId) {
  let tmp2;
  userId = userId.userId;
  const merged = Object.assign(userId, Object.assign({ userId: 0 }));
  const obj = { onGamePress: tmp2 };
  tmp2 = useWidgetGamePressDefault(userId, merged.game.gameId);
  const merged1 = Object.assign(merged);
  return metroRequire(c9, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCover.tsx");

export default memoResult1;
export const UserProfileWidgetGameCoverContent = memoResult;
