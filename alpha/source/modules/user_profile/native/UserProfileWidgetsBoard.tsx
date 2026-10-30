// Module ID: 14908
// Function ID: 14909
// Name: UserProfileWidgetsBoard
// Dependencies: [32, 19, 17, 8746, 21, 5009, 575, 9296, 9320, 8753, 14909, 5619, 14914, 14915, 2028, 14916, 12, 7766, 1114, 14918, 7770, 12076, 7771, 14925, 14929, 2]
// Exports: default

// Module 14908 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import StringUtils from "StringUtils" /* 2028 */;
import Text_Text from "Text/Text" /* 5619 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7770 */;
import Constants from "Constants" /* 8746 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9296 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12076 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 14914 */;
import GameCoverImageDefault from "GameCoverImage" /* 14915 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 14925 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let meta;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp;
const UserProfilePersonalWidget = tmp(7771);
function WidgetRenderer(arg0) {
  let cardStyle;
  let tmp3Result;
  let userId;
  let widget;
  ({ userId, widget, cardStyle } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    const obj2 = { userId, widget, cardStyle };
    tmp3Result = metroImportAll(UserProfileApplicationWidgetCardDefault, obj2);
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj3 = { userId, widget, cardStyle };
    tmp3Result = tmp3(UserProfilePersonalWidgetCardDefault, obj3);
  } else {
    const obj = { userId, widget, cardStyle };
    tmp3Result = tmp3(memoResult, obj);
  }
  return tmp3Result;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileSections = Constants.UserProfileSections;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
let createStyles = createStyles_mod;
let obj = { board: obj2, favoriteRow: obj3, favoriteDetails: obj4, list: obj5, listRow: obj6, listDetails: obj7, comment: obj8, commentText: { flex: 1 }, grid: obj9, tags: obj10, tag: obj11, viewMore: obj12 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_16 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj7 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16 };
obj10 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj12 = { marginTop: nativeDefault.space.PX_12 };
let closure_12 = createStyles(obj);
let closure_13 = react.memo(function WidgetTags(tags) {
  tags = tags.tags;
  const tmp = closure_12();
  let closure_0 = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    let items1;
    const obj = closure_0(dependencyMap[10]);
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
  let tmp2 = null;
  if (0 !== flatMapResult.length) {
    let obj = {
      style: tmp.tags,
      children: flatMapResult.map((meta) => {
          let items;
          meta = meta.meta;
          const tag = meta.tag;
          const obj = { style: closure_0.tag, children: items };
          items = [, ];
          const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
          items[0] = metroImportAll(meta.icon, obj2);
          const obj3 = { variant: "text-xs/medium", color: "text-muted", children: meta.getText() };
          const Text = Text_Text.Text;
          items[1] = metroImportAll(Text, obj3);
          return React4(metroRequire, obj, tag);
        })
    };
    tmp2 = closure_8(closure_6, obj);
  }
  return tmp2;
});
let closure_14 = react.memo(function FavoriteGameItem(game) {
  let coverWidth;
  let disableInteraction;
  let items;
  let items1;
  let items2;
  let obj4;
  let tmp2Result;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction } = game);
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
  items = [metroImportAll(hasOwnProperty, obj3), ];
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
    children: metroImportAll(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
  };
  items1[0] = metroImportAll(hasOwnProperty, obj6);
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
    const QuoteIcon = tmp6(14916).QuoteIcon;
    items2 = [metroImportAll(QuoteIcon, obj8), ];
    const obj9 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: tmp.commentText, children: game.comment };
    items2[1] = metroImportAll(Text_Text.Text, obj9);
    tmp8Result = tmp8(tmp9, obj7);
  }
  items1[1] = tmp8Result;
  const obj10 = { tags: game.tags };
  items1[2] = metroImportAll(closure_13, obj10);
  items[1] = React4(metroRequire, obj5);
  return React4(metroRequire, obj2);
});
let closure_15 = react.memo(function GameListRow(game) {
  let coverWidth;
  let disableInteraction;
  let items;
  let items1;
  let obj4;
  let tmp2Result;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction } = game);
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
  items = [metroImportAll(hasOwnProperty, obj3), ];
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
    children: metroImportAll(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName })
  };
  items1[0] = metroImportAll(hasOwnProperty, obj6);
  const obj7 = { tags: game.tags };
  items1[1] = metroImportAll(closure_13, obj7);
  items[1] = React4(metroRequire, obj5);
  return React4(metroRequire, obj2);
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
  return metroImportAll(hasOwnProperty, obj2);
});
const memoResult = react.memo(function WidgetSection(userId) {
  let Text;
  let Text2;
  let _undefined;
  let _undefined2;
  let c3;
  let c4;
  let coverWidth;
  let mapped;
  let mapped1;
  let obj10;
  let obj13;
  let obj6;
  let tmp12Result;
  let tmp3;
  let tmp5;
  userId = userId.userId;
  const widget = userId.widget;
  const disableInteraction = userId.disableInteraction;
  _slicedToArray = undefined;
  react = undefined;
  const cardStyle = userId.cardStyle;
  const tmp = closure_12();
  [tmp3, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp5, c4] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const result = (tmp5 - 2 * widget(disableInteraction[6]).space.PX_16) / 3;
  let c5 = result;
  const items = [widget.games];
  const memo = react.useMemo(() => {
    const obj = _modDef12;
    return obj.uniqBy(widget.games, "gameId");
  }, items);
  const type = widget.type;
  const tmp6 = widget;
  if (userId(disableInteraction[17]).WidgetType.FAVORITE_GAMES === type) {
    let tmp30 = tmp5 > 0;
    if (tmp30) {
      const obj2 = { userId, game: memo[0], coverWidth: result, disableInteraction };
      tmp30 = closure_8(closure_14, obj2);
    }
    tmp12Result = tmp30;
  } else if (userId(disableInteraction[17]).WidgetType.CURRENT_GAMES === type) {
    let tmp24Result = memo.length > 2;
    let substr = memo;
    if (!tmp3) {
      substr = memo.slice(0, 2);
    }
    const obj3 = { style: tmp.list, children: mapped };
    mapped = tmp5 > 0;
    const tmp22 = closure_9;
    const tmp23 = closure_10;
    const tmp25 = closure_6;
    if (mapped) {
      mapped = substr.map((game) => {
        const obj = { userId, game, coverWidth, disableInteraction };
        return metroImportAll(closure_15, obj, game.gameId);
      });
    }
    const items1 = [closure_8(tmp25, obj3), ];
    if (tmp24Result) {
      let stringResult;
      const obj4 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
              return _undefined((arg0) => !arg0);
            },
        accessibilityRole: "button",
        children: closure_8(Text2, obj6)
      };
      Text2 = tmp9(tmp7[11]).Text;
      const intl2 = tmp9(tmp7[18]).intl;
      const tmp27 = c5;
      if (tmp3) {
        stringResult = intl2.string(tmp9(tmp7[18]).t["6MwJo/"]);
      } else {
        const obj5 = { numberOfItems: memo.length - 2 };
        stringResult = intl2.formatToPlainString(tmp9(tmp7[18]).t.zr0Y5R, obj5);
      }
      obj6 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
      tmp24Result = tmp24(tmp27, obj4);
    }
    const obj7 = { children: items1 };
    items1[1] = tmp24Result;
    tmp12Result = tmp22(tmp23, obj7);
  } else {
    if (userId(disableInteraction[17]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (userId(disableInteraction[17]).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    let tmp14Result = memo.length > 6;
    let substr1 = memo;
    if (!tmp3) {
      substr1 = memo.slice(0, 6);
    }
    let obj = { style: tmp.grid, children: mapped1 };
    mapped1 = tmp5 > 0;
    const tmp12 = closure_9;
    const tmp13 = closure_10;
    const tmp15 = closure_6;
    if (mapped1) {
      mapped1 = substr1.map((game) => {
        const obj = { userId, game, coverWidth, disableInteraction };
        return metroImportAll(closure_16, obj, game.gameId);
      });
    }
    const items2 = [closure_8(tmp15, obj), ];
    if (tmp14Result) {
      let stringResult1;
      const obj8 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
              return _undefined((arg0) => !arg0);
            },
        accessibilityRole: "button",
        children: closure_8(Text, obj10)
      };
      Text = tmp9(tmp7[11]).Text;
      const intl = tmp9(tmp7[18]).intl;
      const tmp17 = c5;
      if (tmp3) {
        stringResult1 = intl.string(tmp9(tmp7[18]).t["6MwJo/"]);
      } else {
        const obj9 = { numberOfItems: memo.length - 6 };
        stringResult1 = intl.formatToPlainString(tmp9(tmp7[18]).t.zr0Y5R, obj9);
      }
      obj10 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
      tmp14Result = tmp14(tmp17, obj8);
    }
    const obj11 = { children: items2 };
    items2[1] = tmp14Result;
    tmp12Result = tmp12(tmp13, obj11);
  }
  const obj12 = { userId, widget, style: cardStyle, disableInteraction, children: closure_8(closure_6, obj13) };
  obj13 = {
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp12Result
  };
  const tmp6Result = tmp6(disableInteraction[19]);
  return closure_8(tmp6Result, obj12);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  const cardStyle = userId.cardStyle;
  let tmp = closure_12();
  let obj = userId(14929);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId);
  let closure_1 = tmp2;
  const obj2 = userId(8753);
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
          const obj = { userId, widget, cardStyle };
          return metroImportAll(WidgetRenderer, obj, widget.getUniqueKey());
        })
    };
    tmp4 = closure_8(closure_6, obj3);
  }
  return tmp4;
};
export const WidgetSection = memoResult;
