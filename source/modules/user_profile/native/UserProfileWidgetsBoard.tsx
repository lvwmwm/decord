// Module ID: 11975
// Function ID: 92584
// Name: useGamePress
// Dependencies: []
// Exports: default

// Module 11975 (useGamePress)
function useGamePress(userId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: applicationId(dependencyMap[9]).GameProfileSources.UserProfile, sourceUserId: userId, trackEntryPointImpression: true };
  return importDefault(dependencyMap[8])(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ Image: closure_5, Pressable: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const UserProfileSections = arg1(dependencyMap[4]).UserProfileSections;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[5]));
let closure_13 = {};
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.board = obj;
obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.sm, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.coverPlaceholder = obj1;
const tmp3 = arg1(dependencyMap[5]);
obj.favoriteRow = { flexDirection: "row", gap: importDefault(dependencyMap[7]).space.PX_12 };
const obj2 = { flexDirection: "row", gap: importDefault(dependencyMap[7]).space.PX_12 };
obj.favoriteDetails = { flex: 1, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.favoriteCover = {};
const obj3 = { flex: 1, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.list = { gap: importDefault(dependencyMap[7]).space.PX_12 };
const obj5 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: importDefault(dependencyMap[7]).space.PX_12 };
obj.listRow = obj5;
obj.listCover = {};
const obj4 = { gap: importDefault(dependencyMap[7]).space.PX_12 };
obj.listDetails = { flex: 1, gap: importDefault(dependencyMap[7]).space.PX_8 };
const obj6 = { flex: 1, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.comment = { gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.commentText = { flex: 1 };
const obj8 = { "Bool(true)": null, "Bool(true)": null, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.grid = obj8;
obj.gridCover = { aspectRatio: 0.75 };
const obj9 = { "Bool(true)": null, "Bool(true)": null, gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.tags = obj9;
const obj10 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: importDefault(dependencyMap[7]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingVertical: importDefault(dependencyMap[7]).space.PX_4, borderRadius: importDefault(dependencyMap[7]).radii.sm, borderWidth: 1, borderColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
obj.tag = obj10;
const obj7 = { gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.viewMore = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
let closure_14 = obj1.createStyles(obj);
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
  const arg1 = tmp;
  if (null == tags) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    let obj = tmp(closure_2[11]);
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
          obj = { size: "xs", color: callback(closure_2[7]).colors.TEXT_MUTED };
          const items = [callback2(meta.icon, obj), ];
          obj = { cachedAt: "center", edpbxy: "center", children: meta.getText() };
          items[1] = callback2(tmp(closure_2[12]).Text, obj);
          obj.children = items;
          return callback3(closure_7, obj, meta.tag);
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
  let arg1;
  ({ userId, disableInteraction } = game);
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[13])(game.applicationId);
  const gameName = tmp2.gameName;
  let tmp3;
  if (!disableInteraction) {
    tmp3 = useGamePress(userId, game.applicationId);
  }
  arg1 = tmp3;
  let obj = { style: tmp.favoriteRow };
  obj = {
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
  obj.children = callback2(closure_15, obj);
  const items = [callback2(closure_6, obj), ];
  const obj1 = { style: tmp.favoriteDetails };
  const obj2 = {
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
  const obj3 = { 803799044: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000051806539427, 1269170180: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017349914603018195, 711589892: 17448735658268946000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, children: gameName };
  obj2.children = callback2(arg1(dependencyMap[12]).Text, obj3);
  const items1 = [callback2(closure_6, obj2), , ];
  let obj6 = arg1(dependencyMap[14]);
  let trimmed;
  if (null != game.comment) {
    trimmed = str.trim();
  }
  let tmp7 = !obj6.isNullOrEmpty(trimmed);
  if (tmp7) {
    const obj4 = { style: tmp.comment };
    const obj5 = { size: "xxs", color: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
    const items2 = [callback2(arg1(dependencyMap[15]).QuoteIcon, obj5), ];
    obj6 = { 803799044: 0, 1269170180: null, 711589892: 101, style: tmp.commentText, children: game.comment };
    items2[1] = callback2(arg1(dependencyMap[12]).Text, obj6);
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
  let arg1;
  ({ userId, disableInteraction } = game);
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[13])(game.applicationId);
  const gameName = tmp2.gameName;
  let tmp3;
  if (!disableInteraction) {
    tmp3 = useGamePress(userId, game.applicationId);
  }
  arg1 = tmp3;
  let obj = { style: tmp.listRow };
  obj = {
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
  obj.children = callback2(closure_15, obj);
  const items = [callback2(closure_6, obj), ];
  const obj1 = { style: tmp.listDetails };
  const obj2 = {
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
  const obj3 = { 803799044: "client_theme_settings", 1269170180: "message", 711589892: "BG_GRADIENT_EASTER_EGG_1", children: gameName };
  obj2.children = callback2(arg1(dependencyMap[12]).Text, obj3);
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
  let arg1;
  ({ userId, coverWidth, disableInteraction } = game);
  const tmp = callback4();
  ({ coverImageUrl, gameName } = importDefault(dependencyMap[13])(game.applicationId));
  let tmp3;
  if (!disableInteraction) {
    tmp3 = useGamePress(userId, game.applicationId);
  }
  arg1 = tmp3;
  const obj = {
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
  const items = [tmp.gridCover, { width: coverWidth }];
  obj.children = callback2(closure_15, { uri: coverImageUrl, style: items });
  return callback2(closure_6, obj);
});
const memoResult = importAllResult.memo((style) => {
  let tmp7;
  const userId = style.userId;
  const arg1 = userId;
  const widget = style.widget;
  const importDefault = widget;
  const disableInteraction = style.disableInteraction;
  const dependencyMap = disableInteraction;
  let cardWidth;
  const tmp = callback4();
  let obj = arg1(dependencyMap[16]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId() === userId);
  const tmp3 = importDefault(dependencyMap[17])("UserProfileWidgetsBoard");
  const tmp4 = callback(importAllResult.useState(false), 2);
  const first = tmp4[0];
  const callback = tmp4[1];
  [tmp7, closure_4] = callback(importAllResult.useState(0), 2);
  obj = { -2102555248: "center", 772756139: null, 1851898839: "uppercase", -737796782: 0.5, water_buffalo: "M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z" };
  let tmp9;
  const tmp6 = callback(importAllResult.useState(0), 2);
  if (tmp7 > 0) {
    tmp9 = tmp7;
  }
  obj.containerWidth = tmp9;
  cardWidth = importDefault(dependencyMap[18])(obj).cardWidth;
  const items1 = [widget.games];
  const memo = importAllResult.useMemo(() => widget(disableInteraction[19]).uniqBy(widget.games, "applicationId"), items1);
  const type = widget.type;
  if (arg1(dependencyMap[20]).WidgetType.FAVORITE_GAMES === type) {
    obj = { userId, game: memo[0], disableInteraction };
    let tmp14Result = callback2(closure_17, obj);
  } else if (arg1(dependencyMap[20]).WidgetType.CURRENT_GAMES === type) {
    let substr = memo;
    if (!first) {
      substr = memo.slice(0, 2);
    }
    const obj1 = {};
    const obj2 = { style: tmp.list, children: substr.map((applicationId) => callback3(closure_18, { userId, game: applicationId, disableInteraction }, applicationId.applicationId)) };
    const items2 = [callback2(closure_7, obj2), ];
    if (memo.length <= 2) {
      items2[1] = tmp29;
      obj1.children = items2;
      tmp14Result = tmp30(tmp31, obj1);
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
      const intl2 = arg1(dependencyMap[21]).intl;
      if (first) {
        num5 = tmp39(tmp40[num5]).t.6MwJo/;
        let stringResult = intl2.string(num5);
      } else {
        const obj5 = { numberOfItems: memo.length - 2 };
        stringResult = intl2.formatToPlainString(tmp39(tmp40[num5]).t.zr0Y5R, obj5);
      }
      obj4.children = stringResult;
      obj4 = tmp34(arg1(dependencyMap[12]).Text, obj4);
      obj3.children = obj4;
      callback2(closure_6, obj3);
      const tmp35 = closure_6;
    }
    const tmp30 = closure_11;
    const tmp31 = closure_12;
  } else {
    if (arg1(dependencyMap[20]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (arg1(dependencyMap[20]).WidgetType.PLAYED_GAMES !== type) {
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
        return closure_10(closure_19, obj, applicationId.applicationId);
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
      const intl = arg1(dependencyMap[21]).intl;
      if (first) {
        num3 = tmp24(tmp25[num3]).t.6MwJo/;
        let stringResult1 = intl.string(num3);
      } else {
        const obj10 = { numberOfItems: memo.length - 6 };
        stringResult1 = intl.formatToPlainString(tmp24(tmp25[num3]).t.zr0Y5R, obj10);
      }
      obj9.children = stringResult1;
      obj9 = tmp19(arg1(dependencyMap[12]).Text, obj9);
      obj8.children = obj9;
      callback2(closure_6, obj8);
      const tmp20 = closure_6;
    }
    const tmp14 = closure_11;
    const tmp15 = closure_12;
    const tmp16 = callback2;
    const tmp17 = closure_7;
  }
  const obj11 = { style: style.cardStyle };
  const tmp45 = callback2;
  const tmp8 = importDefault(dependencyMap[18]);
  const tmp46 = importDefault(dependencyMap[22]);
  obj11.title = arg1(dependencyMap[23]).getWidgetTitle(widget);
  let tmp47 = !stateFromStores && !disableInteraction;
  if (tmp47) {
    const obj12 = { userId, widget };
    tmp47 = callback2(importDefault(dependencyMap[24]), obj12);
  }
  obj11.trailingAction = tmp47;
  obj11.children = tmp14Result;
  return tmp45(tmp46, obj11);
});
const obj11 = { marginTop: importDefault(dependencyMap[7]).space.PX_12 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

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
    const trackUserProfileAction = isVisible(trackUserProfileAction[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
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
    const obj = { style: tmp.board, children: gameWidgets.map((getUniqueKey) => callback(closure_20, { userId: closure_0, widget: getUniqueKey, cardStyle }, getUniqueKey.getUniqueKey())) };
    tmp3 = callback2(closure_7, obj);
  }
  return tmp3;
};
export const WidgetSection = memoResult;
