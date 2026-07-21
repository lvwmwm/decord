// Module ID: 11974
// Function ID: 92558
// Name: useGamePress
// Dependencies: []
// Exports: default

// Module 11974 (useGamePress)
function useGamePress(userId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: applicationId(dependencyMap[8]).GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true };
  return importDefault(dependencyMap[7])(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Image: closure_5, Pressable: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
const UserProfileSections = arg1(dependencyMap[3]).UserProfileSections;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.board = obj;
obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.coverPlaceholder = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.favoriteRow = { flexDirection: "row", gap: importDefault(dependencyMap[6]).space.PX_12 };
const obj2 = { flexDirection: "row", gap: importDefault(dependencyMap[6]).space.PX_12 };
obj.favoriteDetails = { flex: 1, gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.favoriteCover = {};
const obj3 = { flex: 1, gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.list = { gap: importDefault(dependencyMap[6]).space.PX_12 };
const obj4 = { gap: importDefault(dependencyMap[6]).space.PX_12 };
obj.listRow = { gap: importDefault(dependencyMap[6]).space.PX_12 };
obj.listCover = {};
const obj5 = { gap: importDefault(dependencyMap[6]).space.PX_12 };
obj.listDetails = { flex: 1, gap: importDefault(dependencyMap[6]).space.PX_8 };
const obj7 = { 1925026477: null, -1346530010: null, gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.grid = obj7;
obj.gridCover = { aspectRatio: 0.75 };
const obj8 = { 1925026477: null, -1346530010: null, gap: importDefault(dependencyMap[6]).space.PX_4 };
obj.tags = obj8;
const obj6 = { flex: 1, gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.tag = { gap: importDefault(dependencyMap[6]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8, paddingVertical: importDefault(dependencyMap[6]).space.PX_4, borderRadius: importDefault(dependencyMap[6]).radii.sm, borderWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
const obj9 = { gap: importDefault(dependencyMap[6]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8, paddingVertical: importDefault(dependencyMap[6]).space.PX_4, borderRadius: importDefault(dependencyMap[6]).radii.sm, borderWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.viewMore = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
let closure_12 = obj1.createStyles(obj);
let closure_13 = importAllResult.memo((arg0) => {
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
let closure_14 = importAllResult.memo((tags) => {
  tags = tags.tags;
  const tmp = callback4();
  const arg1 = tmp;
  if (null == tags) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    let obj = tmp(closure_2[10]);
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
    const obj = {
      style: tmp.tags,
      children: flatMapResult.map((meta) => {
          meta = meta.meta;
          let obj = { style: tmp.tag };
          obj = { size: "xs", color: callback(closure_2[6]).colors.TEXT_MUTED };
          const items = [callback2(meta.icon, obj), ];
          obj = { children: meta.getText() };
          items[1] = callback2(tmp(closure_2[11]).Text, obj);
          obj.children = items;
          return callback3(closure_7, obj, meta.tag);
        })
    };
    tmp2 = callback2(closure_7, obj);
  }
  return tmp2;
});
let closure_15 = importAllResult.memo((game) => {
  game = game.game;
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[12])(game.applicationId);
  const gameName = tmp2.gameName;
  const tmp3 = useGamePress(game.userId, game.applicationId);
  const arg1 = tmp3;
  let obj = {
    style: tmp.favoriteRow,
    onPress() {
      let tmp;
      if (null != tmp3) {
        tmp = tmp3();
      }
      return tmp;
    },
    disabled: null == tmp3,
    accessibilityRole: "button",
    accessibilityLabel: gameName
  };
  obj = { uri: tmp2.coverImageUrl, style: tmp.favoriteCover };
  const items = [callback2(closure_13, obj), ];
  obj = { style: tmp.favoriteDetails };
  const obj1 = { -9223372036854775808: false, 0: false, 0: "Array", children: gameName };
  const items1 = [callback2(arg1(dependencyMap[11]).Text, obj1), , ];
  let trimmed;
  if (null != game.comment) {
    trimmed = str.trim();
  }
  let tmp8 = !arg1(dependencyMap[13]).isNullOrEmpty(trimmed);
  if (tmp8) {
    const obj2 = { children: game.comment };
    tmp8 = callback2(arg1(dependencyMap[11]).Text, obj2);
  }
  items1[1] = tmp8;
  items1[2] = callback2(closure_14, { tags: game.tags });
  obj.children = items1;
  items[1] = closure_10(closure_7, obj);
  obj.children = items;
  return closure_10(closure_6, obj);
});
let closure_16 = importAllResult.memo((game) => {
  game = game.game;
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[12])(game.applicationId);
  const gameName = tmp2.gameName;
  const tmp3 = useGamePress(game.userId, game.applicationId);
  const arg1 = tmp3;
  let obj = {
    style: tmp.listRow,
    onPress() {
      let tmp;
      if (null != tmp3) {
        tmp = tmp3();
      }
      return tmp;
    },
    disabled: null == tmp3,
    accessibilityRole: "button",
    accessibilityLabel: gameName
  };
  obj = { uri: tmp2.coverImageUrl, style: tmp.listCover };
  const items = [callback2(closure_13, obj), ];
  obj = { style: tmp.listDetails };
  const obj1 = { -9223372036854775808: "client_theme_settings", 0: "message", 0: "BG_GRADIENT_EASTER_EGG_1", children: gameName };
  const items1 = [callback2(arg1(dependencyMap[11]).Text, obj1), callback2(closure_14, { tags: game.tags })];
  obj.children = items1;
  items[1] = callback3(closure_7, obj);
  obj.children = items;
  return callback3(closure_6, obj);
});
let closure_17 = importAllResult.memo((game) => {
  let coverImageUrl;
  let coverWidth;
  let gameName;
  let userId;
  game = game.game;
  ({ userId, coverWidth } = game);
  const tmp = callback4();
  ({ coverImageUrl, gameName } = importDefault(dependencyMap[12])(game.applicationId));
  const tmp3 = useGamePress(userId, game.applicationId);
  const arg1 = tmp3;
  const tmp2 = importDefault(dependencyMap[12])(game.applicationId);
  const items = [tmp.gridCover, { width: coverWidth }];
  return callback2(closure_6, {
    onPress() {
      let tmp;
      if (null != tmp3) {
        tmp = tmp3();
      }
      return tmp;
    },
    disabled: null == tmp3,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: callback2(closure_13, { uri: coverImageUrl, style: items })
  });
});
let closure_18 = importAllResult.memo((style) => {
  let tmp5;
  const userId = style.userId;
  const arg1 = userId;
  const widget = style.widget;
  const importDefault = widget;
  let importAllResult;
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(false), 2);
  const first = tmp2[0];
  let closure_2 = tmp2[1];
  [tmp5, closure_3] = callback(importAllResult.useState(0), 2);
  let obj = { textAlign: -43429485136332860000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, textAlignVertical: 16125696670274230000000000000000000000000000000000000000000000000000000000000000000, textColor: 12618625066.322031, text: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003307597280564003, variant: -0.0000000000000000018506916710523647 };
  let tmp7;
  const tmp4 = callback(importAllResult.useState(0), 2);
  if (tmp5 > 0) {
    tmp7 = tmp5;
  }
  obj.containerWidth = tmp7;
  importAllResult = importDefault(closure_2[14])(obj).cardWidth;
  const items = [widget.games];
  const memo = importAllResult.useMemo(() => widget(closure_2[15]).uniqBy(widget.games, "applicationId"), items);
  const type = widget.type;
  if (arg1(closure_2[16]).WidgetType.FAVORITE_GAMES === type) {
    obj = { userId, game: memo[0] };
    let tmp12Result = callback2(closure_15, obj);
  } else if (arg1(closure_2[16]).WidgetType.CURRENT_GAMES === type) {
    obj = { style: tmp.list, children: memo.map((applicationId) => callback3(closure_16, { userId, game: applicationId }, applicationId.applicationId)) };
    tmp12Result = callback2(closure_7, obj);
  } else {
    if (arg1(closure_2[16]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (arg1(closure_2[16]).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    let substr = memo;
    if (!first) {
      substr = memo.slice(0, 6);
    }
    const obj1 = {};
    const obj2 = {
      style: tmp.grid,
      onLayout(nativeEvent) {
          return callback2(nativeEvent.nativeEvent.layout.width);
        }
    };
    let mapped = tmp5 > 0;
    if (mapped) {
      mapped = substr.map((applicationId) => {
        const obj = { userId, game: applicationId };
        let num = 104;
        if (null != cardWidth) {
          num = cardWidth;
        }
        obj.coverWidth = num;
        return closure_9(closure_17, obj, applicationId.applicationId);
      });
    }
    obj2.children = mapped;
    const items1 = [callback2(closure_7, obj2), ];
    if (memo.length <= 6) {
      items1[1] = tmp11;
      obj1.children = items1;
      tmp12Result = tmp12(tmp13, obj1);
    } else {
      const obj3 = {
        style: tmp.viewMore,
        onPress() {
              return callback((arg0) => !arg0);
            },
        accessibilityRole: "button"
      };
      let obj4 = {};
      let num3 = 17;
      const intl = arg1(closure_2[17]).intl;
      if (first) {
        num3 = tmp21(tmp22[num3]).t.6MwJo/;
        let stringResult = intl.string(num3);
      } else {
        const obj5 = { numberOfItems: memo.length - 6 };
        stringResult = intl.formatToPlainString(tmp21(tmp22[num3]).t.zr0Y5R, obj5);
      }
      obj4.children = stringResult;
      obj4 = tmp17(arg1(closure_2[11]).Text, obj4);
      obj3.children = obj4;
      callback2(closure_6, obj3);
      const tmp18 = closure_6;
    }
    const tmp12 = closure_10;
    const tmp13 = closure_11;
    const tmp14 = callback2;
    const tmp15 = closure_7;
  }
  const obj6 = { style: style.cardStyle };
  const tmp6 = importDefault(closure_2[14]);
  const tmp30 = importDefault(closure_2[18]);
  obj6.title = arg1(closure_2[19]).getWidgetTitle(widget);
  obj6.children = tmp12Result;
  return callback2(tmp30, obj6);
});
const obj10 = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default function UserProfileWidgetsBoard(cardStyle) {
  let gameWidgets;
  let isVisible;
  ({ userId: closure_0, gameWidgets, isVisible } = cardStyle);
  if (isVisible === undefined) {
    isVisible = true;
  }
  const importDefault = cardStyle.cardStyle;
  function useTrackUserProfileWidgetsView(isVisible, arg1) {
    const cardStyle = arg1;
    const trackUserProfileAction = isVisible(trackUserProfileAction[9]).useUserProfileAnalyticsContext().trackUserProfileAction;
    let closure_3 = React.useRef(false);
    const items = [isVisible, arg1, trackUserProfileAction];
    const effect = React.useEffect(() => {
      if (arg0) {
        let tmp2 = arg1;
        if (arg1) {
          tmp2 = !ref.current;
        }
        if (tmp2) {
          const obj = { action: "VIEW", section: constants.WIDGETS };
          trackUserProfileAction(obj);
          ref.current = true;
        }
      } else {
        ref.current = false;
      }
    }, items);
  }(isVisible, gameWidgets.length > 0);
  let tmp3 = null;
  if (0 !== gameWidgets.length) {
    const obj = { style: tmp.board, children: gameWidgets.map((getUniqueKey) => callback(closure_18, { userId: closure_0, widget: getUniqueKey, cardStyle }, getUniqueKey.getUniqueKey())) };
    tmp3 = callback2(closure_7, obj);
  }
  return tmp3;
};
