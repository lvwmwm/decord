// Module ID: 8127
// Function ID: 8128
// Name: UserProfileWidgetsBoard
// Dependencies: [32, 19, 17, 502, 7628, 21, 4836, 576, 8128, 8139, 7635, 8380, 4832, 8384, 2011, 8385, 504, 12, 7036, 1115, 6628, 7038, 8123, 7047, 8387, 7044, 8118, 12458, 2]
// Exports: default

// Module 8127 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import StringUtils from "StringUtils" /* 2011 */;
import Text_Text from "Text/Text" /* 4832 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7047 */;
import Constants from "Constants" /* 7628 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 8118 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8128 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 8384 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 8387 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let game, meta, tags;

let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp;
let unpackModuleId;
const UserProfilePersonalWidget = tmp(7044);
function WidgetRenderer(arg0) {
  let cardStyle;
  let tmp3Result;
  let userId;
  let widget;
  ({ userId, widget, cardStyle } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    const obj2 = { userId, widget, cardStyle };
    tmp3Result = authStore(UserProfileApplicationWidgetCardDefault, obj2);
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
({ Image: hasOwnProperty, Pressable: metroRequire, View: metroImportDefault } = react_native);
const UserProfileSections = Constants.UserProfileSections;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
let createStyles = createStyles_mod;
let obj = { board: obj2, coverPlaceholder: obj3, favoriteRow: obj4, favoriteDetails: obj5, favoriteCover: { aspectRatio: 0.75 }, list: obj6, listRow: obj7, listCover: { aspectRatio: 0.75 }, listDetails: obj8, comment: obj9, commentText: { flex: 1 }, grid: obj10, gridCover: { aspectRatio: 0.75 }, tags: obj11, tag: obj12, viewMore: obj13 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj5 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj6 = { gap: nativeDefault.space.PX_16 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj8 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj9 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj10 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16 };
obj11 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj13 = { marginTop: nativeDefault.space.PX_12 };
let closure_14 = createStyles(obj);
let closure_15 = react.memo((arg0) => {
  let items;
  let items1;
  let obj3;
  let style;
  let tmp4;
  let uri;
  ({ uri, style } = arg0);
  const tmp = closure_14();
  if (null != uri) {
    const obj2 = { source: obj3, style: items };
    items = [style, tmp.coverPlaceholder];
    obj3 = { uri };
    tmp4 = authStore(hasOwnProperty, obj2);
  } else {
    const obj = { style: items1 };
    items1 = [style, tmp.coverPlaceholder];
    tmp4 = authStore(metroImportDefault, obj);
  }
  return tmp4;
});
let closure_16 = react.memo((tags) => {
  tags = tags.tags;
  const tmp = closure_14();
  let closure_0 = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    let items1;
    const obj = closure_0(dependencyMap[11]);
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
          items[0] = authStore(meta.icon, obj2);
          const obj3 = { variant: "text-xs/medium", color: "text-muted", children: meta.getText() };
          const Text = Text_Text.Text;
          items[1] = authStore(Text, obj3);
          return unpackModuleId(metroImportDefault, obj, tag);
        })
    };
    tmp2 = closure_10(closure_7, obj);
  }
  return tmp2;
});
let closure_17 = react.memo((game) => {
  let coverImageUrl;
  let coverWidth;
  let disableInteraction;
  let gameName;
  let items;
  let items1;
  let items2;
  let items3;
  let obj4;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_14();
  ({ gameName, coverImageUrl } = useGameNameAndCoverImageDefault(game.gameId));
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  useGameNameAndCoverImageDefault(game.gameId);
  let tmp5Result;
  const tmp5 = useOpenGameProfileModalDefault;
  if (!disableInteraction) {
    tmp5Result = tmp5(obj);
  }
  closure_0 = tmp5Result;
  const obj2 = { style: tmp.favoriteRow, children: items1 };
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
    children: authStore(closure_15, obj4)
  };
  obj4 = { uri: coverImageUrl, style: items };
  items = [tmp.favoriteCover, { width: coverWidth }];
  items1 = [authStore(metroRequire, obj3), ];
  const obj5 = { style: tmp.favoriteDetails, children: items2 };
  items2 = [, , ];
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
    children: authStore(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
  };
  items2[0] = authStore(metroRequire, obj6);
  let trimmed;
  const isNullOrEmpty = StringUtils.isNullOrEmpty;
  StringUtils;
  if (game.comment != null) {
    trimmed = str.trim();
  }
  let tmp8Result = !isNullOrEmpty(trimmed);
  isNullOrEmpty(trimmed);
  if (tmp8Result) {
    const obj7 = { style: tmp.comment, children: items3 };
    const obj8 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const QuoteIcon = tmp6(8385).QuoteIcon;
    items3 = [authStore(QuoteIcon, obj8), ];
    const obj9 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: tmp.commentText, children: game.comment };
    items3[1] = authStore(Text_Text.Text, obj9);
    tmp8Result = tmp8(tmp9, obj7);
  }
  items2[1] = tmp8Result;
  const obj10 = { tags: game.tags };
  items2[2] = authStore(closure_16, obj10);
  items1[1] = unpackModuleId(metroImportDefault, obj5);
  return unpackModuleId(metroImportDefault, obj2);
});
let closure_18 = react.memo((game) => {
  let coverImageUrl;
  let coverWidth;
  let disableInteraction;
  let gameName;
  let items;
  let items1;
  let items2;
  let obj4;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_14();
  ({ gameName, coverImageUrl } = useGameNameAndCoverImageDefault(game.gameId));
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  useGameNameAndCoverImageDefault(game.gameId);
  let tmp4Result;
  const tmp4 = useOpenGameProfileModalDefault;
  if (!disableInteraction) {
    tmp4Result = tmp4(obj);
  }
  closure_0 = tmp4Result;
  const obj2 = { style: tmp.listRow, children: items1 };
  const obj3 = {
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
    children: authStore(closure_15, obj4)
  };
  obj4 = { uri: coverImageUrl, style: items };
  items = [tmp.listCover, { width: coverWidth }];
  items1 = [authStore(metroRequire, obj3), ];
  const obj5 = { style: tmp.listDetails, children: items2 };
  items2 = [, ];
  const obj6 = {
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
    children: authStore(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName })
  };
  items2[0] = authStore(metroRequire, obj6);
  const obj7 = { tags: game.tags };
  items2[1] = authStore(closure_16, obj7);
  items1[1] = unpackModuleId(metroImportDefault, obj5);
  return unpackModuleId(metroImportDefault, obj2);
});
let closure_19 = react.memo((game) => {
  let coverImageUrl;
  let coverWidth;
  let disableInteraction;
  let gameName;
  let items;
  let obj3;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_14();
  ({ coverImageUrl, gameName } = useGameNameAndCoverImageDefault(game.gameId));
  const obj = { location: "UserProfileWidgetsBoard", applicationId: game.gameId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  useGameNameAndCoverImageDefault(game.gameId);
  let tmp3Result;
  const tmp3 = useOpenGameProfileModalDefault;
  if (!disableInteraction) {
    tmp3Result = tmp3(obj);
  }
  closure_0 = tmp3Result;
  const obj2 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp3Result,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: authStore(closure_15, obj3)
  };
  obj3 = { uri: coverImageUrl, style: items };
  items = [tmp.gridCover, { width: coverWidth }];
  return authStore(metroRequire, obj2);
});
const memoResult = react.memo((userId) => {
  let Text;
  let Text2;
  let _undefined;
  let _undefined2;
  let c3;
  let c4;
  let coverWidth;
  let mapped;
  let mapped1;
  let obj11;
  let obj15;
  let obj6;
  let tmp13Result;
  let tmp2Result;
  let tmp34Result;
  let tmp6;
  let tmp8;
  userId = userId.userId;
  const widget = userId.widget;
  const disableInteraction = userId.disableInteraction;
  _slicedToArray = undefined;
  react = undefined;
  const cardStyle = userId.cardStyle;
  const tmp = closure_14();
  let obj = userId(disableInteraction[16]);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  [tmp6, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp8, c4] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const result = (tmp8 - 2 * widget(disableInteraction[7]).space.PX_16) / 3;
  let c5 = result;
  const items1 = [widget.games];
  const memo = react.useMemo(() => {
    const obj = _modDef12;
    return obj.uniqBy(widget.games, "gameId");
  }, items1);
  const type = widget.type;
  if (userId(disableInteraction[18]).WidgetType.FAVORITE_GAMES === type) {
    let tmp31 = tmp8 > 0;
    if (tmp31) {
      const obj2 = { userId, game: memo[0], coverWidth: result, disableInteraction };
      tmp31 = closure_10(closure_17, obj2);
    }
    tmp13Result = tmp31;
  } else if (userId(disableInteraction[18]).WidgetType.CURRENT_GAMES === type) {
    let tmp25Result = memo.length > 2;
    let substr = memo;
    if (!tmp6) {
      substr = memo.slice(0, 2);
    }
    const obj3 = { style: tmp.list, children: mapped };
    mapped = tmp8 > 0;
    const tmp23 = closure_11;
    const tmp24 = closure_12;
    const tmp26 = closure_7;
    if (mapped) {
      mapped = substr.map((game) => {
        const obj = { userId, game, coverWidth, disableInteraction };
        return authStore(closure_18, obj, game.gameId);
      });
    }
    const items2 = [closure_10(tmp26, obj3), ];
    if (tmp25Result) {
      let stringResult;
      const obj4 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
              return _undefined((arg0) => !arg0);
            },
        accessibilityRole: "button",
        children: closure_10(Text2, obj6)
      };
      Text2 = tmp2(tmp3[12]).Text;
      const intl2 = tmp2(tmp3[19]).intl;
      const tmp28 = closure_6;
      if (tmp6) {
        stringResult = intl2.string(tmp2(tmp3[19]).t["6MwJo/"]);
      } else {
        const obj5 = { numberOfItems: memo.length - 2 };
        stringResult = intl2.formatToPlainString(tmp2(tmp3[19]).t.zr0Y5R, obj5);
      }
      obj6 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
      tmp25Result = tmp25(tmp28, obj4);
    }
    const obj7 = { children: items2 };
    items2[1] = tmp25Result;
    tmp13Result = tmp23(tmp24, obj7);
  } else {
    if (userId(disableInteraction[18]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (userId(disableInteraction[18]).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    let tmp15Result = memo.length > 6;
    let substr1 = memo;
    if (!tmp6) {
      substr1 = memo.slice(0, 6);
    }
    const obj8 = { style: tmp.grid, children: mapped1 };
    mapped1 = tmp8 > 0;
    const tmp13 = closure_11;
    const tmp14 = closure_12;
    const tmp16 = closure_7;
    if (mapped1) {
      mapped1 = substr1.map((game) => {
        const obj = { userId, game, coverWidth, disableInteraction };
        return authStore(closure_19, obj, game.gameId);
      });
    }
    const items3 = [closure_10(tmp16, obj8), ];
    if (tmp15Result) {
      let stringResult1;
      const obj9 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
              return _undefined((arg0) => !arg0);
            },
        accessibilityRole: "button",
        children: closure_10(Text, obj11)
      };
      Text = tmp2(tmp3[12]).Text;
      const intl = tmp2(tmp3[19]).intl;
      const tmp18 = closure_6;
      if (tmp6) {
        stringResult1 = intl.string(tmp2(tmp3[19]).t["6MwJo/"]);
      } else {
        const obj10 = { numberOfItems: memo.length - 6 };
        stringResult1 = intl.formatToPlainString(tmp2(tmp3[19]).t.zr0Y5R, obj10);
      }
      obj11 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
      tmp15Result = tmp15(tmp18, obj9);
    }
    const obj12 = { children: items3 };
    items3[1] = tmp15Result;
    tmp13Result = tmp13(tmp14, obj12);
  }
  const obj13 = { style: cardStyle, title: tmp2Result.getWidgetTitle(widget), trailingAction: tmp34Result, children: closure_10(closure_7, obj15) };
  const tmp9Result = widget(disableInteraction[20]);
  tmp34Result = !stateFromStores && !disableInteraction;
  tmp2Result = userId(disableInteraction[21]);
  if (tmp34Result) {
    const obj14 = { userId, widget };
    tmp34Result = tmp34(tmp9(tmp3[22]), obj14);
  }
  obj15 = {
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp13Result
  };
  return closure_10(tmp9Result, obj13);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  const cardStyle = userId.cardStyle;
  let tmp = closure_14();
  let obj = userId(12458);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId);
  let closure_1 = tmp2;
  const obj2 = userId(7635);
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
          return authStore(WidgetRenderer, obj, widget.getUniqueKey());
        })
    };
    tmp4 = closure_10(closure_7, obj3);
  }
  return tmp4;
};
export const WidgetSection = memoResult;
