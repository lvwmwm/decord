// Module ID: 12131
// Function ID: 12132
// Name: UserProfileWidgetsBoard
// Dependencies: [19, 17, 8479, 7355, 21, 5306, 575, 12104, 8545, 7988, 10449, 1113, 12132, 12103, 12090, 12139, 6331, 12097, 12141, 5929, 7353, 12142, 12109, 12144, 12111, 12089, 12145, 7357, 12146, 7358, 12085, 12279, 2]
// Exports: default

// Module 12131 (UserProfileWidgetsBoard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react_native2 from "react-native" /* 6331 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7357 */;
import Constants from "Constants" /* 8479 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 12085 */;
import WidgetUtils from "WidgetUtils" /* 12090 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 12104 */;
import UserProfileGameDetailsRowDefault from "UserProfileGameDetailsRow" /* 12109 */;
import UserProfileWidgetGameCoverDefault from "UserProfileWidgetGameCover" /* 12111 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 12132 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12146 */;
import react from "react" /* 19 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 7355 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
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
const UserProfilePersonalWidget = tmp(7358);
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
  const IconButton = ref(7988).IconButton;
  obj2 = { size: "sm", color: widgetType(575).colors.ICON_DEFAULT };
  PlusSmallIcon = ref(10449).PlusSmallIcon;
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
  let items5;
  let items6;
  let onLayout;
  let ref;
  let tmp23;
  let tmp5Result2;
  let width;
  userId = userId.userId;
  const widget = userId.widget;
  const disableInteraction = userId.disableInteraction;
  let flag = userId.isEditing;
  const cardStyle = userId.cardStyle;
  if (flag === undefined) {
    flag = false;
  }
  coverWidth = undefined;
  let ref2;
  let type2;
  let tmp = ref2();
  let tmp2 = widget;
  let tmp3 = disableInteraction;
  const tmp4 = widget(disableInteraction[13])();
  ({ isMeasured, coverWidth } = tmp4);
  let obj = flag;
  let items = [widget];
  ({ ref, onLayout, width, columns } = tmp4);
  const memo = flag.useMemo(() => {
    const obj = WidgetUtils;
    return obj.getUniqueWidgetGames(widget);
  }, items);
  const tmp5 = userId;
  let obj2 = userId(disableInteraction[14]);
  const widgetMaxGamesResult = obj2.widgetMaxGames(widget.type);
  const tmp7 = 1 === widgetMaxGamesResult;
  let closure_6 = tmp7;
  const tmp5Result = tmp5(tmp3[15]);
  const shouldShowSuggestedGames = tmp5Result.useShouldShowSuggestedGames(widget);
  const handleDismissSuggestions = shouldShowSuggestedGames.handleDismissSuggestions;
  const shouldShowSuggestions = shouldShowSuggestedGames.shouldShowSuggestions;
  const ref1 = obj.useRef(null);
  const useRef = obj.useRef;
  map = new Map();
  ref = useRef(map);
  ref2 = obj.useRef(null);
  const items1 = [tmp7];
  const registerCoverRef = obj.useCallback((arg0, current) => {
    let obj2;
    if (null != current) {
      const current2 = ref.current;
      const result = current2.set(arg0, current);
      if (ref2.current === arg0) {
        ref2.current = null;
        const obj = { ref: obj2, delay: UserProfileGameWidgetConstants.WIDGET_FOCUS_DELAY_MS };
        obj2 = { current };
        const setAccessibilityFocus = react_native2.setAccessibilityFocus;
        react_native2;
        const result1 = setAccessibilityFocus(obj);
      }
    } else {
      current = ref.current;
      current.delete(arg0);
    }
    const tmp9 = closure_6;
    if (tmp9) {
      ref1.current = current;
    }
  }, items1);
  const items2 = [handleDismissSuggestions];
  const callback = obj.useCallback(() => {
    handleDismissSuggestions();
    const obj = react_native2;
    const obj2 = { ref: ref1, delay: UserProfileGameWidgetConstants.WIDGET_FOCUS_DELAY_MS };
    const result = obj.setAccessibilityFocus(obj2);
  }, items2);
  const items3 = [memo];
  const callback1 = obj.useCallback((current) => {
    ref2.current = current;
  }, []);
  const onRemoveGame = obj.useCallback((arg0) => {
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
    }, userId(disableInteraction[7]).WIDGET_FOCUS_DELAY_MS);
  }, items3);
  let type1;
  if (flag) {
    if (handleDismissSuggestions(widget.type)) {
      type1 = widget.type;
    }
  }
  type2 = undefined;
  if (flag) {
    if (closure_6(widget.type)) {
      type2 = widget.type;
    }
  }
  let tmp18;
  if (flag) {
    let tmp19 = !tmp8;
    if (tmp19) {
      const obj3 = { ref: ref1, widgetType: widget.type, disabled: tmp5Result2.isGameLimitReached(widget) };
      tmp5Result2 = tmp5(tmp3[14]);
      tmp19 = ref1(registerCoverRef, obj3, "add-game");
    }
    const items4 = [tmp19, ];
    const obj4 = { widget };
    items4[1] = ref1(tmp2(tmp3[17]), obj4, "edit-options");
    tmp18 = items4;
  }
  if (0 === memo.length) {
    let stringResult;
    let tmp29;
    const intl = tmp5(tmp3[11]).intl;
    if (tmp7) {
      stringResult = intl.string(tmp5(tmp3[11]).t["3FdPBT"]);
    } else {
      const obj5 = { maxGames: widgetMaxGamesResult };
      stringResult = intl.formatToPlainString(tmp5(tmp3[11]).t.W8K2GH, obj5);
    }
    if (flag && tmp7) {
      let tmp30 = isMeasured;
      if (tmp30) {
        const obj6 = { style: tmp.singleGameEmptyState, children: items5 };
        const obj7 = { ref: ref1, widgetType: widget.type, coverWidth };
        items5 = [ref1(tmp2(tmp3[18]), obj7), ];
        const obj8 = { variant: "body-sm/medium", color: "text-muted", style: tmp.singleGameEmptyStateText, children: stringResult };
        items5[1] = ref1(tmp5(tmp3[19]).Text, obj8);
        tmp30 = ref(coverWidth, obj6);
      }
      tmp29 = tmp30;
    } else {
      const obj9 = { variant: "body-sm/medium", color: "text-muted", style: tmp.emptyState, children: stringResult };
      tmp29 = ref1(tmp5(tmp3[19]).Text, obj9);
    }
    tmp23 = tmp29;
  } else {
    let type = widget.type;
    if (tmp5(tmp3[20]).WidgetType.FAVORITE_GAMES !== type) {
      if (tmp5(tmp3[20]).WidgetType.CURRENT_GAMES !== type) {
        if (tmp5(tmp3[20]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
          if (tmp5(tmp3[20]).WidgetType.PLAYED_GAMES !== type) {
            return null;
          }
        }
        tmp23 = isMeasured;
        if (tmp23) {
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
          tmp23 = ref1(tmp2(tmp3[23]), obj10);
        }
      }
    }
    let tmp25 = isMeasured;
    if (tmp25) {
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
      tmp25 = ref1(tmp2(tmp3[21]), obj11);
    }
    tmp23 = tmp25;
  }
  const obj12 = { userId, widget, style: cardStyle, disableInteraction, actionButtons: tmp18, children: items6 };
  items6 = [, ];
  const tmp2Result = tmp2(tmp3[25]);
  items6[0] = ref1(coverWidth, { ref, onLayout, children: tmp23 });
  const tmp34 = ref;
  const tmp36 = ref1;
  if (flag) {
    flag = !disableInteraction;
  }
  if (flag) {
    flag = shouldShowSuggestions;
  }
  if (flag) {
    flag = isMeasured;
  }
  if (flag) {
    const obj13 = { widgetType: widget.type, addedGames: memo, containerWidth: width, onDismiss: callback, onFillWidget: callback1 };
    flag = tmp36(tmp2(tmp3[26]), obj13);
  }
  items6[1] = flag;
  return tmp34(tmp2Result, obj12);
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
  let obj = userId(isEditing[31]);
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
