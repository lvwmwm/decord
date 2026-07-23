// Module ID: 11987
// Function ID: 92637
// Name: useGamePress
// Dependencies: [57, 31, 27, 1194, 8264, 33, 4130, 689, 8588, 8600, 8266, 11988, 4126, 11992, 1832, 11993, 566, 1324, 11995, 22, 6857, 1212, 5511, 6860, 11996, 6876, 11997, 12101, 2]
// Exports: default

// Module 11987 (useGamePress)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "isNonEmptyBoardWidget";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
let require = arg1;
function useGamePress(userId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: require(8600) /* GameProfileEmbedAction */.GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true };
  return importDefault(8588)(obj);
}
function WidgetRenderer(isFirstWidget) {
  let cardStyle;
  let userId;
  let widget;
  ({ userId, widget, cardStyle } = isFirstWidget);
  if (widget instanceof require(6876) /* ApplicationWidget */.ApplicationWidget) {
    let obj = { userId, widget, cardStyle, isFirstWidget: isFirstWidget.isFirstWidget };
    let tmpResult = tmp(importDefault(11997), obj);
  } else {
    obj = { userId, widget, cardStyle };
    tmpResult = tmp(closure_20, obj);
  }
  return tmpResult;
}
({ Image: closure_5, Pressable: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = { top: 8, bottom: 8, left: 8, right: 8 };
let obj = {};
obj = { gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.board = obj;
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.coverPlaceholder = _createForOfIteratorHelperLoose;
obj.favoriteRow = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj2 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.favoriteDetails = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.favoriteCover = { width: 104, aspectRatio: 0.75 };
let obj3 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.list = { gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.listRow = obj5;
obj.listCover = { width: 104, aspectRatio: 0.75 };
let obj4 = { gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.listDetails = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj7 = { flexDirection: "row", alignItems: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.comment = obj7;
obj.commentText = { flex: 1 };
let obj8 = { flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.grid = obj8;
obj.gridCover = { aspectRatio: 0.75 };
let obj9 = { flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.tags = obj9;
let obj10 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.tag = obj10;
let obj6 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.viewMore = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_15 = importAllResult.memo((arg0) => {
  let style;
  let uri;
  ({ uri, style } = arg0);
  const tmp = callback4();
  if (null != uri) {
    let obj = {};
    obj = { uri };
    obj.source = obj;
    const items = [style, tmp.coverPlaceholder];
    obj.style = items;
    let tmp4 = callback2(closure_5, obj);
  } else {
    obj = {};
    const items1 = [style, tmp.coverPlaceholder];
    obj.style = items1;
    tmp4 = callback2(closure_7, obj);
  }
  return tmp4;
});
let closure_16 = importAllResult.memo((tags) => {
  tags = tags.tags;
  const tmp = callback4();
  const require = tmp;
  if (null == tags) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    let obj = tmp(outer1_2[11]);
    const widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tag);
    if (null != widgetGameTagMetadata) {
      obj = { tag, meta: widgetGameTagMetadata };
      const items = [obj];
      let items1 = items;
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
          meta = meta.meta;
          let obj = { style: tmp.tag };
          obj = { size: "xs", color: outer1_1(outer1_2[7]).colors.TEXT_MUTED };
          const items = [outer1_10(meta.icon, obj), ];
          obj = { variant: "text-xs/medium", color: "text-muted", children: meta.getText() };
          items[1] = outer1_10(tmp(outer1_2[12]).Text, obj);
          obj.children = items;
          return outer1_11(outer1_7, obj, meta.tag);
        })
    };
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
});
let closure_17 = importAllResult.memo((game) => {
  let disableInteraction;
  let userId;
  game = game.game;
  let _require;
  ({ userId, disableInteraction } = game);
  let tmp = callback4();
  const tmp2 = importDefault(11992)(game.applicationId);
  const gameName = tmp2.gameName;
  let tmp3;
  if (!disableInteraction) {
    tmp3 = useGamePress(userId, game.applicationId);
  }
  _require = tmp3;
  let obj = { style: tmp.favoriteRow };
  obj = {
    onPress() {
      let tmp;
      if (null != _undefined) {
        tmp = _undefined();
      }
      return tmp;
    },
    disabled: null == tmp3,
    accessibilityRole: "button",
    accessibilityLabel: gameName
  };
  obj = { uri: tmp2.coverImageUrl, style: tmp.favoriteCover };
  obj.children = callback2(closure_15, obj);
  const items = [callback2(closure_6, obj), ];
  const obj1 = { style: tmp.favoriteDetails };
  const obj2 = {
    onPress() {
      let tmp;
      if (null != _undefined) {
        tmp = _undefined();
      }
      return tmp;
    },
    disabled: null == tmp3,
    accessibilityRole: "button",
    accessibilityLabel: gameName
  };
  const obj3 = { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName };
  obj2.children = callback2(_require(4126).Text, obj3);
  const items1 = [callback2(closure_6, obj2), , ];
  let obj6 = _require(1832);
  let trimmed;
  if (null != game.comment) {
    trimmed = str.trim();
  }
  let tmp7 = !obj6.isNullOrEmpty(trimmed);
  if (tmp7) {
    const obj4 = { style: tmp.comment };
    const obj5 = { size: "xxs", color: importDefault(689).colors.TEXT_MUTED };
    const items2 = [callback2(_require(11993).QuoteIcon, obj5), ];
    obj6 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: tmp.commentText, children: game.comment };
    items2[1] = callback2(_require(4126).Text, obj6);
    obj4.children = items2;
    tmp7 = callback3(closure_7, obj4);
  }
  items1[1] = tmp7;
  items1[2] = callback2(closure_16, { tags: game.tags });
  obj1.children = items1;
  items[1] = callback3(closure_7, obj1);
  obj.children = items;
  return callback3(closure_7, obj);
});
let closure_18 = importAllResult.memo((game) => {
  let disableInteraction;
  let userId;
  game = game.game;
  let _require;
  ({ userId, disableInteraction } = game);
  let tmp = callback4();
  const tmp2 = importDefault(11992)(game.applicationId);
  const gameName = tmp2.gameName;
  let tmp3;
  if (!disableInteraction) {
    tmp3 = useGamePress(userId, game.applicationId);
  }
  _require = tmp3;
  let obj = { style: tmp.listRow };
  obj = {
    onPress() {
      let tmp;
      if (null != _undefined) {
        tmp = _undefined();
      }
      return tmp;
    },
    disabled: null == tmp3,
    accessibilityRole: "button",
    accessibilityLabel: gameName
  };
  obj = { uri: tmp2.coverImageUrl, style: tmp.listCover };
  obj.children = callback2(closure_15, obj);
  const items = [callback2(closure_6, obj), ];
  const obj1 = { style: tmp.listDetails };
  const obj2 = {
    onPress() {
      let tmp;
      if (null != _undefined) {
        tmp = _undefined();
      }
      return tmp;
    },
    disabled: null == tmp3,
    accessibilityRole: "button",
    accessibilityLabel: gameName
  };
  const obj3 = { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName };
  obj2.children = callback2(_require(4126).Text, obj3);
  const items1 = [callback2(closure_6, obj2), callback2(closure_16, { tags: game.tags })];
  obj1.children = items1;
  items[1] = callback3(closure_7, obj1);
  obj.children = items;
  return callback3(closure_7, obj);
});
let closure_19 = importAllResult.memo((game) => {
  let coverImageUrl;
  let coverWidth;
  let disableInteraction;
  let gameName;
  let userId;
  game = game.game;
  let c0;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = callback4();
  ({ coverImageUrl, gameName } = importDefault(11992)(game.applicationId));
  let tmp3;
  if (!disableInteraction) {
    tmp3 = useGamePress(userId, game.applicationId);
  }
  c0 = tmp3;
  const obj = {
    onPress() {
      let tmp;
      if (null != _undefined) {
        tmp = _undefined();
      }
      return tmp;
    },
    disabled: null == tmp3,
    accessibilityRole: "button",
    accessibilityLabel: gameName
  };
  const items = [tmp.gridCover, { width: coverWidth }];
  obj.children = callback2(closure_15, { uri: coverImageUrl, style: items });
  return callback2(closure_6, obj);
});
const memoResult = importAllResult.memo((style) => {
  let closure_4;
  let tmp7;
  const userId = style.userId;
  const widget = style.widget;
  const disableInteraction = style.disableInteraction;
  let cardWidth;
  const tmp = callback4();
  let obj = userId(disableInteraction[16]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getId() === userId);
  const tmp3 = widget(disableInteraction[17])("UserProfileWidgetsBoard");
  const tmp4 = callback(importAllResult.useState(false), 2);
  const first = tmp4[0];
  callback = tmp4[1];
  [tmp7, closure_4] = callback(importAllResult.useState(0), 2);
  obj = { containerWidth: null, sidePadding: 0, gap: 8, minCardSize: 90, maxCardSize: 115 };
  let tmp9;
  const tmp6 = callback(importAllResult.useState(0), 2);
  if (tmp7 > 0) {
    tmp9 = tmp7;
  }
  obj.containerWidth = tmp9;
  cardWidth = widget(disableInteraction[18])(obj).cardWidth;
  const items1 = [widget.games];
  const memo = importAllResult.useMemo(() => widget(disableInteraction[19]).uniqBy(widget.games, "applicationId"), items1);
  const type = widget.type;
  if (userId(disableInteraction[20]).WidgetType.FAVORITE_GAMES === type) {
    obj = { userId, game: memo[0], disableInteraction };
    let tmp14Result = callback2(closure_17, obj);
  } else if (userId(disableInteraction[20]).WidgetType.CURRENT_GAMES === type) {
    let substr = memo;
    if (!first) {
      substr = memo.slice(0, 2);
    }
    const obj1 = {};
    const obj2 = { style: tmp.list, children: substr.map((applicationId) => outer1_10(outer1_18, { userId, game: applicationId, disableInteraction }, applicationId.applicationId)) };
    const items2 = [callback2(closure_7, obj2), ];
    if (memo.length <= 2) {
      items2[1] = tmp30;
      obj1.children = items2;
      tmp14Result = tmp31(tmp32, obj1);
    } else {
      const obj3 = {
        style: tmp.viewMore,
        hitSlop: closure_13,
        onPress() {
              return callback((arg0) => !arg0);
            },
        accessibilityRole: "button"
      };
      let obj4 = {};
      let str5 = "text-sm/semibold";
      if (tmp3) {
        str5 = "text-sm/medium";
      }
      obj4.variant = str5;
      obj4.color = "text-muted";
      let num5 = 21;
      const intl2 = userId(disableInteraction[21]).intl;
      if (first) {
        num5 = tmp41(tmp42[num5]).t["6MwJo/"];
        let stringResult = intl2.string(num5);
      } else {
        const obj5 = { numberOfItems: memo.length - 2 };
        stringResult = intl2.formatToPlainString(tmp41(tmp42[num5]).t.zr0Y5R, obj5);
      }
      obj4.children = stringResult;
      obj4 = callback2(userId(disableInteraction[12]).Text, obj4);
      obj3.children = obj4;
      callback2(closure_6, obj3);
      const tmp35 = callback2;
      const tmp36 = closure_6;
      const tmp38 = callback2;
    }
    tmp31 = closure_11;
    tmp32 = closure_12;
  } else {
    if (userId(disableInteraction[20]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (userId(disableInteraction[20]).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    let substr1 = memo;
    if (!first) {
      substr1 = memo.slice(0, 6);
    }
    const obj6 = {};
    const obj7 = {
      style: tmp.grid,
      onLayout(nativeEvent) {
          return callback2(nativeEvent.nativeEvent.layout.width);
        }
    };
    let mapped = tmp7 > 0;
    if (mapped) {
      mapped = substr1.map((applicationId) => {
        const obj = { userId, game: applicationId };
        let num = 104;
        if (null != cardWidth) {
          num = cardWidth;
        }
        obj.coverWidth = num;
        obj.disableInteraction = disableInteraction;
        return outer1_10(outer1_19, obj, applicationId.applicationId);
      });
    }
    obj7.children = mapped;
    const items3 = [callback2(closure_7, obj7), ];
    if (memo.length <= 6) {
      items3[1] = tmp13;
      obj6.children = items3;
      tmp14Result = tmp14(tmp15, obj6);
    } else {
      const obj8 = {
        style: tmp.viewMore,
        hitSlop: closure_13,
        onPress() {
              return callback((arg0) => !arg0);
            },
        accessibilityRole: "button"
      };
      let obj9 = {};
      let str2 = "text-sm/semibold";
      if (tmp3) {
        str2 = "text-sm/medium";
      }
      obj9.variant = str2;
      obj9.color = "text-muted";
      let num3 = 21;
      const intl = userId(disableInteraction[21]).intl;
      if (first) {
        num3 = tmp25(tmp26[num3]).t["6MwJo/"];
        let stringResult1 = intl.string(num3);
      } else {
        const obj10 = { numberOfItems: memo.length - 6 };
        stringResult1 = intl.formatToPlainString(tmp25(tmp26[num3]).t.zr0Y5R, obj10);
      }
      obj9.children = stringResult1;
      obj9 = callback2(userId(disableInteraction[12]).Text, obj9);
      obj8.children = obj9;
      callback2(closure_6, obj8);
      const tmp19 = callback2;
      const tmp20 = closure_6;
      const tmp22 = callback2;
    }
    tmp14 = closure_11;
    tmp15 = closure_12;
    const tmp16 = callback2;
    const tmp17 = closure_7;
  }
  const obj11 = { style: style.cardStyle };
  const tmp47 = callback2;
  const tmp8 = widget(disableInteraction[18]);
  const tmp48 = widget(disableInteraction[22]);
  obj11.title = userId(disableInteraction[23]).getWidgetTitle(widget);
  let tmp49 = !stateFromStores && !disableInteraction;
  if (tmp49) {
    const obj12 = { userId, widget };
    tmp49 = callback2(widget(disableInteraction[24]), obj12);
  }
  obj11.trailingAction = tmp49;
  obj11.children = tmp14Result;
  return tmp47(tmp48, obj11);
});
let obj11 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  const cardStyle = userId.cardStyle;
  let obj = userId(12101);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId);
  (function useTrackUserProfileWidgetsView(flag, arg1) {
    let closure_0 = flag;
    let closure_1 = arg1;
    const trackUserProfileAction = userId(outer1_2[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
    let _slicedToArray = outer1_4.useRef(false);
    const items = [flag, arg1, trackUserProfileAction];
    const effect = outer1_4.useEffect(() => {
      if (closure_0) {
        let tmp2 = closure_1;
        if (closure_1) {
          tmp2 = !ref.current;
        }
        if (tmp2) {
          const obj = { action: "VIEW", section: outer2_9.WIDGETS };
          trackUserProfileAction(obj);
          ref.current = true;
        }
      } else {
        ref.current = false;
      }
    }, items);
  })(flag, displayableBoardWidgets.length > 0);
  let tmp3 = null;
  if (0 !== displayableBoardWidgets.length) {
    obj = { style: tmp.board, children: displayableBoardWidgets.map((getUniqueKey) => outer1_10(outer1_22, { userId, widget: getUniqueKey, cardStyle, isFirstWidget: 0 === arg1 }, getUniqueKey.getUniqueKey())) };
    tmp3 = callback2(closure_7, obj);
  }
  return tmp3;
};
export const WidgetSection = memoResult;
