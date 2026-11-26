// Module ID: 12111
// Function ID: 12112
// Name: UserProfileWidgetGameCover
// Dependencies: [19, 17, 21, 5306, 575, 12110, 1113, 12112, 12113, 12114, 2]

// Module 12111 (UserProfileWidgetGameCover)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 12110 */;
import GameCoverImageDefault from "GameCoverImage" /* 12112 */;
import UserProfileWidgetRemoveGameButtonDefault from "UserProfileWidgetRemoveGameButton" /* 12113 */;
import useWidgetGamePressDefault from "useWidgetGamePress" /* 12114 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
function InteractiveGameCover(userId) {
  let tmp2;
  userId = userId.userId;
  const merged = Object.assign(userId, Object.assign({ userId: 0 }));
  const obj = { onGamePress: tmp2 };
  tmp2 = useWidgetGamePressDefault(userId, merged.game.gameId);
  const merged1 = Object.assign(merged);
  return metroRequire(c9, obj);
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { removeGameButton: obj2 };
obj2 = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
const memoResult = react.memo(function UserProfileWidgetGameCoverContent(game) {
  let coverWidth;
  let disableInteraction;
  let editableWidgetType;
  let intl;
  let obj3;
  let obj4;
  let obj6;
  let onGamePress;
  let onRemoveGame;
  let registerCoverRef;
  let tmp14;
  let tmp15;
  let tmp2Result;
  game = game.game;
  ({ coverWidth, editableWidgetType, registerCoverRef } = game);
  onGamePress = undefined;
  ({ disableInteraction, onRemoveGame, onGamePress } = game);
  const tmp = closure_8();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = onGamePress;
  }
  onGamePress = tmp5;
  const items = [registerCoverRef, game.gameId];
  const callback = react.useCallback((arg0) => {
    let tmpResult;
    if (registerCoverRef != null) {
      tmpResult = tmp(game.gameId, arg0);
    }
    return tmpResult;
  }, items);
  const tmp7 = metroImportDefault;
  if (null != tmp5) {
    const obj2 = {
      ref: callback,
      onPress() {
          return onGamePress();
        },
      accessibilityRole: "button",
      accessibilityLabel: intl.formatToPlainString(intl2.t["8QLQB+"], obj3),
      children: metroRequire(tmp2Result, obj4)
    };
    intl = intl2.intl;
    obj3 = { gameName };
    obj4 = { width: coverWidth, accessible: false };
    tmp2Result = GameCoverImageDefault;
    const merged = Object.assign(tmp4);
    tmp14 = metroRequire(React3, obj2);
    tmp15 = metroRequire;
  } else {
    const obj = { ref: callback, width: coverWidth };
    const tmp2Result2 = GameCoverImageDefault;
    const merged1 = Object.assign(tmp4);
    tmp14 = metroRequire(tmp2Result2, obj);
    tmp15 = metroRequire;
  }
  const children = [tmp14, ];
  let tmp15Result = null != editableWidgetType;
  if (tmp15Result) {
    const obj5 = { style: tmp.removeGameButton, children: tmp15(UserProfileWidgetRemoveGameButtonDefault, obj6) };
    obj6 = { widgetType: editableWidgetType, gameId: game.gameId, gameName, onRemove: onRemoveGame };
    tmp15Result = tmp15(tmp8, obj5);
  }
  children[1] = tmp15Result;
  return tmp7(hasOwnProperty, { children });
});
let c9 = memoResult;
const memoResult1 = react.memo(function UserProfileWidgetGameCover(disableInteraction) {
  let tmpResult;
  if (disableInteraction.disableInteraction) {
    const obj2 = {};
    const merged = Object.assign(disableInteraction);
    tmpResult = tmp(c9, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(disableInteraction);
    tmpResult = tmp(InteractiveGameCover, obj);
  }
  return tmpResult;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCover.tsx");

export default memoResult1;
export const UserProfileWidgetGameCoverContent = memoResult;
