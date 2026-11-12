// Module ID: 12041
// Function ID: 12042
// Name: UserProfileWidgetsBoard
// Dependencies: [19, 17, 8413, 7291, 21, 5243, 575, 12042, 8479, 7922, 10380, 1113, 12046, 12054, 12, 12023, 6268, 12030, 12055, 5866, 7289, 12056, 12058, 12070, 12061, 12022, 7293, 12071, 7294, 12018, 12184, 2]
// Exports: default

// Module 12041 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react_native2 from "react-native" /* 6268 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7293 */;
import Constants from "Constants" /* 8413 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 12018 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 12042 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 12046 */;
import UserProfileGameDetailsRowDefault from "UserProfileGameDetailsRow" /* 12058 */;
import UserProfileWidgetGameCoverDefault from "UserProfileWidgetGameCover" /* 12061 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12071 */;
import react from "react" /* 19 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 7291 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let map;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
const UserProfilePersonalWidget = tmp(7294);
function AddGameButton(ref) {
  let PlusSmallIcon;
  let intl;
  let obj2;
  ref = ref.ref;
  const widgetType = ref.widgetType;
  const disabled = ref.disabled;
  let obj = {
    ref,
    size: "sm",
    variant: "secondary",
    icon: closure_8(PlusSmallIcon, obj2),
    accessibilityLabel: intl.string(ref(1113).t.E3l3Zx),
    disabled,
    onPress() {
      const obj = { widgetType, returnFocusRef: ref };
      return openUserProfileAddGameActionSheetDefault(obj);
    }
  };
  const IconButton = ref(7922).IconButton;
  obj2 = { size: "sm", color: widgetType(575).colors.ICON_DEFAULT };
  PlusSmallIcon = ref(10380).PlusSmallIcon;
  intl = ref(1113).intl;
  return closure_8(IconButton, obj);
}
function WidgetRenderer(arg0) {
  let cardStyle;
  let isEditing;
  let tmp3Result;
  let userId;
  let widget;
  ({ userId, widget, cardStyle, isEditing } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    const obj2 = { userId, widget, cardStyle, isEditing };
    tmp3Result = metroImportAll(UserProfileApplicationWidgetCardDefault, obj2);
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj3 = { userId, widget, cardStyle, isEditing };
    tmp3Result = tmp3(UserProfilePersonalWidgetCardDefault, obj3);
  } else {
    const obj = { userId, widget, cardStyle, isEditing };
    tmp3Result = tmp3(memoResult, obj);
  }
  return tmp3Result;
}
const View = react_native.View;
const UserProfileSections = Constants.UserProfileSections;
({ widgetSupportsComment: metroRequire, widgetSupportsTags: metroImportDefault } = UserProfileWidgetConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { board: obj2, emptyState: obj3, singleGameEmptyState: obj4, singleGameEmptyStateText: { flex: 1 } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16, textAlign: "center" };
obj4 = { flexDirection: "row", alignItems: "center", gap: UserProfileGameWidgetConstants.GAME_COVER_DETAILS_GAP, paddingVertical: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const memoResult = react.memo(function WidgetSection(userId) {
  let columns;
  let coverWidth;
  let isMeasured;
  let items4;
  let onLayout;
  let ref;
  let tmp20;
  let tmp5Result;
  userId = userId.userId;
  const widget = userId.widget;
  const disableInteraction = userId.disableInteraction;
  let flag = userId.isEditing;
  const cardStyle = userId.cardStyle;
  if (flag === undefined) {
    flag = false;
  }
  coverWidth = undefined;
  let onRemoveGame;
  let type2;
  let tmp = onRemoveGame();
  let tmp2 = widget;
  let tmp3 = disableInteraction;
  const tmp4 = widget(disableInteraction[13])();
  ({ isMeasured, coverWidth } = tmp4);
  let obj = flag;
  let items = [widget.games];
  ({ ref, onLayout, columns } = tmp4);
  const memo = flag.useMemo(() => {
    const obj = _modDef12;
    return obj.uniqBy(widget.games, "gameId");
  }, items);
  let tmp5 = userId;
  const obj2 = userId(disableInteraction[15]);
  const widgetMaxGamesResult = obj2.widgetMaxGames(widget.type);
  let closure_6 = tmp7;
  const ref1 = obj.useRef(null);
  const useRef = obj.useRef;
  map = new Map();
  ref = useRef(map);
  const items1 = [1 === widgetMaxGamesResult];
  const registerCoverRef = obj.useCallback((arg0, current) => {
    if (null != current) {
      const current2 = ref.current;
      const result = current2.set(arg0, current);
    } else {
      current = ref.current;
      current.delete(arg0);
    }
    const tmp5 = closure_6;
    if (tmp5) {
      ref1.current = current;
    }
  }, items1);
  const items2 = [memo];
  onRemoveGame = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    const findIndexResult = memo.findIndex((gameId) => gameId.gameId === closure_0);
    let tmp3 = memo[findIndexResult + 1];
    let gameId;
    const tmp = memo;
    if (tmp3 != null) {
      gameId = tmp3.gameId;
    }
    const items = [gameId, ];
    let gameId1;
    if (tmp[findIndexResult - 1] != null) {
      gameId1 = tmp5.gameId;
    }
    items[1] = gameId1;
    const timerId = setTimeout(() => {
      let tmp3;
      const mapped = items.map((item) => {
        let value;
        if (null != item) {
          const current = ref.current;
          value = current.get(item);
        }
        return value;
      });
      const found = mapped.find((item) => null != item);
      const setAccessibilityFocus = react_native2.setAccessibilityFocus;
      if (null != found) {
        tmp3 = { current: found };
        const obj = { current: found };
      } else {
        tmp3 = ref1;
      }
      const result = setAccessibilityFocus({ ref: tmp3 });
    }, 100);
  }, items2);
  let type1;
  if (flag) {
    if (ref1(widget.type)) {
      type1 = widget.type;
    }
  }
  type2 = undefined;
  if (flag) {
    if (closure_6(widget.type)) {
      type2 = widget.type;
    }
  }
  let tmp15;
  if (flag) {
    let tmp16 = !tmp8;
    if (tmp16) {
      const obj3 = { ref: ref1, widgetType: widget.type, disabled: tmp5Result.isGameLimitReached(widget) };
      tmp5Result = tmp5(tmp3[15]);
      tmp16 = ref(type1, obj3, "add-game");
    }
    const items3 = [tmp16, ];
    const obj4 = { widget };
    items3[1] = ref(tmp2(tmp3[17]), obj4, "edit-options");
    tmp15 = items3;
  }
  if (0 === memo.length) {
    let stringResult;
    let tmp26;
    const intl = tmp5(tmp3[11]).intl;
    if (1 === widgetMaxGamesResult) {
      stringResult = intl.string(tmp5(tmp3[11]).t["3FdPBT"]);
    } else {
      const obj5 = { maxGames: widgetMaxGamesResult };
      stringResult = intl.formatToPlainString(tmp5(tmp3[11]).t.W8K2GH, obj5);
    }
    if (flag && 1 === widgetMaxGamesResult) {
      if (isMeasured) {
        const obj6 = { style: tmp.singleGameEmptyState, children: items4 };
        const obj7 = { ref: ref1, widgetType: widget.type, coverWidth };
        items4 = [ref(tmp2(tmp3[18]), obj7), ];
        const obj8 = { variant: "body-sm/medium", color: "text-muted", style: tmp.singleGameEmptyStateText, children: stringResult };
        items4[1] = ref(tmp5(tmp3[19]).Text, obj8);
        isMeasured = registerCoverRef(coverWidth, obj6);
      }
      tmp26 = isMeasured;
    } else {
      const obj9 = { variant: "body-sm/medium", color: "text-muted", style: tmp.emptyState, children: stringResult };
      tmp26 = ref(tmp5(tmp3[19]).Text, obj9);
    }
    tmp20 = tmp26;
  } else {
    let type = widget.type;
    if (tmp5(tmp3[20]).WidgetType.FAVORITE_GAMES !== type) {
      if (tmp5(tmp3[20]).WidgetType.CURRENT_GAMES !== type) {
        if (tmp5(tmp3[20]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
          if (tmp5(tmp3[20]).WidgetType.PLAYED_GAMES !== type) {
            return null;
          }
        }
        tmp20 = isMeasured;
        if (tmp20) {
          const obj10 = {
            games: memo,
            columns,
            renderCover(game) {
                      let type;
                      const obj = { userId, game, coverWidth, disableInteraction, editableWidgetType: type, registerCoverRef, onRemoveGame };
                      type = undefined;
                      const tmp = metroImportAll;
                      const tmp2 = UserProfileWidgetGameCoverDefault;
                      if (flag) {
                        type = widget.type;
                      }
                      return tmp(tmp2, obj, game.gameId);
                    }
          };
          tmp20 = ref(tmp2(tmp3[23]), obj10);
        }
      }
    }
    let tmp22 = isMeasured;
    if (tmp22) {
      const obj11 = {
        games: memo,
        renderRow(game) {
              let type;
              const obj = { userId, game, coverWidth, disableInteraction, editableTagsWidgetType: type1, editableCommentWidgetType: type2, editableWidgetType: type, registerCoverRef, onRemoveGame };
              type = undefined;
              const tmp = metroImportAll;
              const tmp2 = UserProfileGameDetailsRowDefault;
              if (flag) {
                type = widget.type;
              }
              return tmp(tmp2, obj, game.gameId);
            }
      };
      tmp22 = ref(tmp2(tmp3[21]), obj11);
    }
    tmp20 = tmp22;
  }
  const obj12 = { userId, widget, style: cardStyle, disableInteraction, actionButtons: tmp15, children: ref(coverWidth, { ref, onLayout, children: tmp20 }) };
  const tmp2Result = tmp2(tmp3[25]);
  return ref(tmp2Result, obj12);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  let isEditing;
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  ({ cardStyle: importDefault, isEditing } = userId);
  let tmp = closure_10();
  let obj = userId(isEditing[30]);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId, isEditing);
  const cardStyle = tmp2;
  const obj2 = userId(isEditing[8]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let closure_3 = react.useRef(false);
  const items = [flag, tmp2, trackUserProfileAction];
  const effect = react.useEffect(() => {
    const tmp = flag;
    if (tmp) {
      const tmp3 = closure_1 && !ref.current;
      if (tmp3) {
        const obj = { action: "VIEW", section: constants.WIDGETS };
        trackUserProfileAction(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  }, items);
  let tmp4 = null;
  if (0 !== displayableBoardWidgets.length) {
    const obj3 = {
      style: tmp.board,
      children: displayableBoardWidgets.map((widget) => {
          const obj = { userId, widget, cardStyle: importDefault, isEditing };
          return metroImportAll(WidgetRenderer, obj, widget.getUniqueKey());
        })
    };
    tmp4 = closure_8(View, obj3);
  }
  return tmp4;
};
export const WidgetSection = memoResult;
