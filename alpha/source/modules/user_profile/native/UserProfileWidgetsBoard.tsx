// Module ID: 15159
// Function ID: 15160
// Name: UserProfileWidgetsBoard
// Dependencies: [19, 17, 8895, 7915, 21, 5141, 575, 9462, 9486, 8902, 15160, 5761, 15164, 1113, 15167, 15168, 2155, 15169, 8168, 9722, 15171, 15178, 12, 15179, 7913, 15180, 15181, 12563, 12560, 7917, 12459, 7918, 15184, 15188, 2]
// Exports: default

// Module 15159 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import StringUtils from "StringUtils" /* 2155 */;
import Text_Text from "Text/Text" /* 5761 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 7915 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7917 */;
import Constants from "Constants" /* 8895 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9462 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9486 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12459 */;
import openUserProfileAddTagActionSheetDefault from "openUserProfileAddTagActionSheet" /* 15164 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 15167 */;
import GameCoverImageDefault from "GameCoverImage" /* 15168 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 15171 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 15184 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, meta, tag;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp;
const UserProfilePersonalWidget = tmp(7918);
function AddGameButton(widgetType) {
  let PlusSmallIcon;
  let intl;
  let obj2;
  widgetType = widgetType.widgetType;
  const disabled = widgetType.disabled;
  const ref = react.useRef(null);
  let obj = {
    ref,
    size: "sm",
    variant: "secondary",
    icon: closure_8(PlusSmallIcon, obj2),
    accessibilityLabel: intl.string(widgetType(1113).t.E3l3Zx),
    disabled,
    onPress() {
      const obj = { widgetType, returnFocusRef: ref };
      return openUserProfileAddGameActionSheetDefault(obj);
    }
  };
  const IconButton = widgetType(8168).IconButton;
  obj2 = { size: "sm", color: ref(575).colors.ICON_DEFAULT };
  PlusSmallIcon = widgetType(9722).PlusSmallIcon;
  intl = widgetType(1113).intl;
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
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const UserProfileSections = Constants.UserProfileSections;
const widgetSupportsTags = UserProfileWidgetConstants.widgetSupportsTags;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
const hitSlop = { top: 10, bottom: 10 };
let createStyles = createStyles_mod;
let obj = { board: obj2, favoriteRow: obj3, favoriteDetails: obj4, list: obj5, listRow: obj6, listDetails: obj7, comment: obj8, commentText: { flex: 1 }, tags: obj9, tag: obj10, addTag: { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_SUBTLE } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_16 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj7 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
({ paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_SUBTLE });
let closure_12 = createStyles(obj);
let closure_13 = react.memo(function WidgetTags(gameName) {
  let Text;
  let editableTagsWidgetType;
  let gameId;
  let intl;
  let intl2;
  let items;
  let obj3;
  let obj4;
  let tags;
  let tmp3Result;
  ({ tags, gameId: require, editableTagsWidgetType } = gameName);
  gameName = gameName.gameName;
  const tmp = closure_12();
  dependencyMap = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    let items1;
    const obj = require("UserProfileGameWidgetConstants");
    const widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tag);
    if (null != widgetGameTagMetadata) {
      const items = [{ tag, meta: widgetGameTagMetadata }];
      items1 = items;
      const obj2 = { tag, meta: widgetGameTagMetadata };
    } else {
      items1 = [];
    }
    return items1;
  });
  if (0 !== flatMapResult.length) {
    let obj = { style: tmp.tags, children: items };
    items = [
      flatMapResult.map((meta) => {
          let items;
          meta = meta.meta;
          const obj = { style: tag.tag, children: items };
          tag = meta.tag;
          items = [, ];
          const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          items[0] = metroImportAll(meta.icon, obj2);
          const obj3 = { variant: "body-xs/medium", color: "text-muted", children: meta.getText() };
          const Text = Text_Text.Text;
          items[1] = metroImportAll(Text, obj3);
          return React4(hasOwnProperty, obj, tag);
        }),

    ];
    let tmp5 = null != editableTagsWidgetType;
    const tmp3 = closure_9;
    const tmp4 = closure_5;
    if (tmp5) {
      let obj2 = {
        style: tmp.addTag,
        onPress() {
              const obj = { widgetType: editableTagsWidgetType, gameId: require };
              return openUserProfileAddTagActionSheetDefault(obj);
            },
        accessibilityRole: "button",
        hitSlop,
        accessibilityLabel: intl.formatToPlainString(intl3.t.uLUHj4, obj3),
        children: closure_8(Text, obj4)
      };
      intl = intl3.intl;
      obj3 = { gameName };
      obj4 = { variant: "body-xs/medium", color: "text-muted", children: intl2.string(intl3.t.fZSejy) };
      Text = Text_Text.Text;
      intl2 = intl3.intl;
      tmp5 = closure_8(closure_4, obj2);
    }
    items[1] = tmp5;
    tmp3Result = tmp3(tmp4, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
});
let closure_14 = react.memo(function FavoriteGameItem(game) {
  let coverWidth;
  let disableInteraction;
  let editableTagsWidgetType;
  let items;
  let items1;
  let items2;
  let obj4;
  let tmp2Result;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction, editableTagsWidgetType } = game);
  let tmp = closure_12();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  let tmp5Result;
  const tmp5 = useOpenGameProfileModalDefault;
  if (!disableInteraction) {
    tmp5Result = tmp5(obj);
  }
  closure_0 = tmp5Result;
  const obj2 = { style: tmp.favoriteRow, children: items };
  const obj3 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: metroImportAll(tmp2Result, obj4)
  };
  obj4 = { width: coverWidth };
  tmp2Result = GameCoverImageDefault;
  const merged = Object.assign(tmp4);
  items = [metroImportAll(React3, obj3), ];
  const obj5 = { style: tmp.favoriteDetails, children: items1 };
  items1 = [, , ];
  const obj6 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: metroImportAll(Text_Text.Text, { variant: "body-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
  };
  items1[0] = metroImportAll(React3, obj6);
  let trimmed;
  const isNullOrEmpty = StringUtils.isNullOrEmpty;
  StringUtils;
  if (game.comment != null) {
    trimmed = str.trim();
  }
  let tmp8Result = !isNullOrEmpty(trimmed);
  isNullOrEmpty(trimmed);
  if (tmp8Result) {
    const obj7 = { style: tmp.comment, children: items2 };
    const obj8 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const QuoteIcon = tmp6(15169).QuoteIcon;
    items2 = [metroImportAll(QuoteIcon, obj8), ];
    const obj9 = { variant: "body-sm/normal", color: "text-muted", lineClamp: 3, style: tmp.commentText, children: game.comment };
    items2[1] = metroImportAll(Text_Text.Text, obj9);
    tmp8Result = tmp8(tmp9, obj7);
  }
  items1[1] = tmp8Result;
  const obj10 = { tags: game.tags, gameId: game.gameId, gameName, editableTagsWidgetType };
  items1[2] = metroImportAll(closure_13, obj10);
  items[1] = React4(hasOwnProperty, obj5);
  return React4(hasOwnProperty, obj2);
});
let closure_15 = react.memo(function GameListRow(game) {
  let coverWidth;
  let disableInteraction;
  let editableTagsWidgetType;
  let items;
  let items1;
  let obj4;
  let tmp2Result;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction, editableTagsWidgetType } = game);
  let tmp = closure_12();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  let tmp5Result;
  const tmp5 = useOpenGameProfileModalDefault;
  if (!disableInteraction) {
    tmp5Result = tmp5(obj);
  }
  closure_0 = tmp5Result;
  const obj2 = { style: tmp.listRow, children: items };
  const obj3 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: metroImportAll(tmp2Result, obj4)
  };
  obj4 = { width: coverWidth };
  tmp2Result = GameCoverImageDefault;
  const merged = Object.assign(tmp4);
  items = [metroImportAll(React3, obj3), ];
  const obj5 = { style: tmp.listDetails, children: items1 };
  items1 = [, ];
  const obj6 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: metroImportAll(Text_Text.Text, { variant: "body-md/medium", color: "text-default", lineClamp: 2, children: gameName })
  };
  items1[0] = metroImportAll(React3, obj6);
  const obj7 = { tags: game.tags, gameId: game.gameId, gameName, editableTagsWidgetType };
  items1[1] = metroImportAll(closure_13, obj7);
  items[1] = React4(hasOwnProperty, obj5);
  return React4(hasOwnProperty, obj2);
});
let closure_16 = react.memo(function GameGridCover(game) {
  let coverWidth;
  let disableInteraction;
  let obj3;
  let tmpResult;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = importDefault;
  const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp3.gameName;
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  let tmp4Result;
  const tmp4 = useOpenGameProfileModalDefault;
  if (!disableInteraction) {
    tmp4Result = tmp4(obj);
  }
  closure_0 = tmp4Result;
  const obj2 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp4Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: metroImportAll(tmpResult, obj3)
  };
  obj3 = { width: coverWidth };
  tmpResult = GameCoverImageDefault;
  const merged = Object.assign(tmp3);
  return metroImportAll(React3, obj2);
});
const memoResult = react.memo(function WidgetSection(userId) {
  let columns;
  let coverWidth;
  let expanded;
  let hiddenCount;
  let isMeasured;
  let items1;
  let mapped;
  let onLayout;
  let ref;
  let tmp13Result;
  let tmp22;
  let tmp8Result;
  let toggleExpanded;
  userId = userId.userId;
  const widget = userId.widget;
  const disableInteraction = userId.disableInteraction;
  let flag = userId.isEditing;
  const cardStyle = userId.cardStyle;
  if (flag === undefined) {
    flag = false;
  }
  coverWidth = undefined;
  const tmp = closure_12();
  const tmp4 = widget(disableInteraction[21])();
  ({ isMeasured, coverWidth } = tmp4);
  const items = [widget.games];
  ({ ref, onLayout, columns } = tmp4);
  const memo = coverWidth.useMemo(() => {
    const obj = _modDef12;
    return obj.uniqBy(widget.games, "gameId");
  }, items);
  let type1;
  if (flag) {
    if (widgetSupportsTags(widget.type)) {
      type1 = widget.type;
    }
  }
  let obj = userId(tmp3[23]);
  const expandableItems = obj.useExpandableItems(memo, 2);
  const visibleItems = expandableItems.visibleItems;
  const type = widget.type;
  ({ hiddenCount, expanded, toggleExpanded } = expandableItems);
  if (userId(disableInteraction[24]).WidgetType.FAVORITE_GAMES === type) {
    if (isMeasured) {
      const obj2 = { userId, game: memo[0], coverWidth, disableInteraction, editableTagsWidgetType: type1 };
      isMeasured = closure_8(closure_14, obj2);
    }
    tmp13Result = isMeasured;
  } else if (userId(disableInteraction[24]).WidgetType.CURRENT_GAMES === type) {
    const obj3 = { style: tmp.list, children: mapped };
    mapped = isMeasured;
    const tmp13 = closure_9;
    const tmp14 = closure_10;
    const tmp16 = closure_5;
    if (isMeasured) {
      mapped = visibleItems.map((game) => {
        const obj = { userId, game, coverWidth, disableInteraction, editableTagsWidgetType: type1 };
        return metroImportAll(closure_15, obj, game.gameId);
      });
    }
    const obj4 = { children: items1 };
    items1 = [closure_8(tmp16, obj3), ];
    const obj5 = { expanded, hiddenCount, onPress: toggleExpanded };
    items1[1] = closure_8(userId(disableInteraction[23]).WidgetViewMoreButton, obj5);
    tmp13Result = tmp13(tmp14, obj4);
  } else {
    if (userId(disableInteraction[24]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (userId(disableInteraction[24]).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    tmp13Result = isMeasured;
    if (tmp13Result) {
      const obj6 = {
        games: memo,
        columns,
        renderCover(game) {
              const obj = { userId, game, coverWidth, disableInteraction };
              return metroImportAll(closure_16, obj, game.gameId);
            }
      };
      tmp13Result = closure_8(tmp2(tmp3[25]), obj6);
    }
  }
  const obj7 = { userId, widget, style: cardStyle, disableInteraction, actionButtons: tmp22, children: closure_8(closure_5, { ref, onLayout, children: tmp13Result }) };
  tmp22 = undefined;
  const tmp2Result = widget(disableInteraction[26]);
  if (flag) {
    const obj8 = { widgetType: widget.type, disabled: tmp8Result.isGameLimitReached(widget) };
    tmp8Result = userId(disableInteraction[27]);
    const items2 = [closure_8(AddGameButton, obj8, "add-game"), ];
    const obj9 = { widget };
    items2[1] = closure_8(widget(disableInteraction[28]), obj9, "edit-options");
    tmp22 = items2;
  }
  return closure_8(tmp2Result, obj7);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  let isEditing;
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  ({ cardStyle: importDefault, isEditing: dependencyMap } = userId);
  let tmp = closure_12();
  let obj = userId(15188);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId);
  const cardStyle = tmp2;
  const obj2 = userId(8902);
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
          const obj = { userId, widget, cardStyle: importDefault, isEditing: dependencyMap };
          return metroImportAll(WidgetRenderer, obj, widget.getUniqueKey());
        })
    };
    tmp4 = closure_8(closure_5, obj3);
  }
  return tmp4;
};
export const WidgetSection = memoResult;
