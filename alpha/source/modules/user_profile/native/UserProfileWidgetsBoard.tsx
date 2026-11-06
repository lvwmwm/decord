// Module ID: 15163
// Function ID: 15164
// Name: UserProfileWidgetsBoard
// Dependencies: [19, 17, 8846, 7874, 21, 5170, 575, 8853, 8119, 9677, 1113, 15164, 15171, 12, 6179, 7872, 15172, 15174, 15189, 15176, 15190, 12536, 12533, 7876, 12432, 7877, 15193, 15143, 2]
// Exports: default

// Module 15163 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react_native2 from "react-native" /* 6179 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7876 */;
import Constants from "Constants" /* 8846 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12432 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 15164 */;
import UserProfileGameDetailsRowDefault from "UserProfileGameDetailsRow" /* 15174 */;
import UserProfileWidgetGameCoverDefault from "UserProfileWidgetGameCover" /* 15176 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 15193 */;
import react from "react" /* 19 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 7874 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let map;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
const UserProfilePersonalWidget = tmp(7877);
function AddGameButton(ref) {
  ref = ref.ref;
  const widgetType = ref.widgetType;
  const disabled = ref.disabled;
  const IconButton = ref(8119).IconButton;
  ({ size: "sm", color: widgetType(575).colors.ICON_DEFAULT });
  const PlusSmallIcon = ref(9677).PlusSmallIcon;
  const intl = ref(1113).intl;
  return <IconButton ref={ref} size="sm" variant="secondary" icon={null} accessibilityLabel={intl.string(ref(1113).t.E3l3Zx)} disabled={disabled} onPress={function onPress() {
    const obj = { widgetType, returnFocusRef: ref };
    return openUserProfileAddGameActionSheetDefault(obj);
  }} />;
}
function WidgetRenderer(arg0) {
  let cardStyle;
  let isEditing;
  let tmp3Result;
  let userId;
  let widget;
  ({ userId, widget, cardStyle, isEditing } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    tmp3Result = jsx(UserProfileApplicationWidgetCardDefault, { userId, widget, cardStyle, isEditing });
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj3 = { userId, widget, cardStyle, isEditing };
    tmp3Result = tmp3(UserProfilePersonalWidgetCardDefault, obj3);
  } else {
    const obj = { userId, widget, cardStyle, isEditing };
    tmp3Result = tmp3(unpackModuleId, obj);
  }
  return tmp3Result;
}
const View = react_native.View;
const UserProfileSections = Constants.UserProfileSections;
({ widgetSupportsComment: metroRequire, widgetSupportsTags: metroImportDefault } = UserProfileWidgetConstants);
let jsx = Fragment.jsx;
let obj = { board: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(function WidgetSection(userId) {
  let c4;
  let columns;
  let coverWidth;
  let isMeasured;
  let onLayout;
  let ref;
  let registerCoverRef;
  userId = userId.userId;
  const widget = userId.widget;
  const disableInteraction = userId.disableInteraction;
  let flag = userId.isEditing;
  const cardStyle = userId.cardStyle;
  if (flag === undefined) {
    flag = false;
  }
  c4 = undefined;
  let type2;
  let tmp = widget;
  let tmp2 = disableInteraction;
  let tmp3 = widget(disableInteraction[12])();
  ({ isMeasured, coverWidth: c4 } = tmp3);
  let items = [widget.games];
  ({ ref, onLayout, columns } = tmp3);
  const memo = flag.useMemo(() => {
    const obj = _modDef12;
    return obj.uniqBy(widget.games, "gameId");
  }, items);
  const ref1 = flag.useRef(null);
  const useRef = flag.useRef;
  map = new Map();
  ref = useRef(map);
  jsx = flag.useCallback((arg0, arg1) => {
    if (null != arg1) {
      const current2 = ref.current;
      const result = current2.set(arg0, arg1);
    } else {
      const current = ref.current;
      current.delete(arg0);
    }
  }, []);
  const items1 = [memo];
  const onRemoveGame = flag.useCallback((arg0) => {
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
  }, items1);
  let type1;
  if (flag) {
    if (ref(widget.type)) {
      type1 = widget.type;
    }
  }
  type2 = undefined;
  if (flag) {
    if (ref1(widget.type)) {
      type2 = widget.type;
    }
  }
  let type = widget.type;
  if (userId(tmp2[15]).WidgetType.FAVORITE_GAMES !== type) {
    if (userId(tmp2[15]).WidgetType.CURRENT_GAMES !== type) {
      if (userId(tmp2[15]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
        if (userId(tmp2[15]).WidgetType.PLAYED_GAMES !== type) {
          return null;
        }
      }
      const tmp12 = isMeasured && jsx(tmp(tmp2[18]), {
        games: memo,
        columns,
        renderCover(game) {
              let type;
              const obj = { userId, game, coverWidth, disableInteraction, editableWidgetType: type, registerCoverRef, onRemoveGame };
              type = undefined;
              const tmp = jsx;
              const tmp2 = UserProfileWidgetGameCoverDefault;
              if (flag) {
                type = widget.type;
              }
              return tmp(tmp2, obj, game.gameId);
            }
      });
    }
    let tmp17;
    tmp(tmp2[20]);
    if (flag) {
      const items2 = [<type1 key="add-game" ref={ref1} widgetType={widget.type} disabled={userId(tmp2[21]).isGameLimitReached(widget)} />, ];
      const tmp11Result = userId(tmp2[21]);
      items2[1] = jsx(tmp(tmp2[22]), { widget }, "edit-options");
      tmp17 = items2;
    }
    return <tmpResult userId={userId} widget={widget} style={cardStyle} disableInteraction={disableInteraction} actionButtons={tmp17}>{null}</tmpResult>;
  }
  if (isMeasured) {
    isMeasured = jsx(tmp(tmp2[16]), {
      games: memo,
      renderRow(game) {
          let type;
          const obj = { userId, game, coverWidth, disableInteraction, editableTagsWidgetType: type1, editableCommentWidgetType: type2, editableWidgetType: type, registerCoverRef, onRemoveGame };
          type = undefined;
          const tmp = jsx;
          const tmp2 = UserProfileGameDetailsRowDefault;
          if (flag) {
            type = widget.type;
          }
          return tmp(tmp2, obj, game.gameId);
        }
    });
  }
});
const unpackModuleId = memoResult;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  let isEditing;
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  ({ cardStyle: importDefault, isEditing } = userId);
  let tmp = closure_9();
  let obj = userId(isEditing[27]);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId, isEditing);
  const cardStyle = tmp2;
  const obj2 = userId(isEditing[7]);
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
    tmp4 = <View style={tmp.board}>{displayableBoardWidgets.map((widget) => <WidgetRenderer key={arg0.getUniqueKey()} userId={userId} widget={arg0} cardStyle={importDefault} isEditing={isEditing} />)}</View>;
  }
  return tmp4;
};
export const WidgetSection = memoResult;
