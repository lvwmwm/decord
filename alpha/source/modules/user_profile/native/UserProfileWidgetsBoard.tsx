// Module ID: 14872
// Function ID: 14873
// Name: UserProfileWidgetsBoard
// Dependencies: [32, 19, 17, 502, 8712, 21, 5005, 587, 558, 576, 9282, 9283, 8719, 14873, 5271, 14878, 14879, 2031, 14880, 504, 12, 7761, 1125, 14882, 14886, 7363, 7765, 11888, 7766, 14888, 14892, 2]

// Module 14872 (UserProfileWidgetsBoard)
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7765 */;
import Constants from "Constants" /* 8712 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 9283 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 11888 */;
import useGameNameAndCoverImageDefault from "useGameNameAndCoverImage" /* 14878 */;
import GameCoverImageDefault from "GameCoverImage" /* 14879 */;
import UserProfilePersonalWidgetCardDefault from "UserProfilePersonalWidgetCard" /* 14888 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, meta, obj1;

let c10;
let c9;
let hasOwnProperty;
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
let unpackModuleId;
const StringUtils = tmp(2031);
const Text_Text = tmp(5271);
const UserProfilePersonalWidget = tmp(7766);
const GameProfileAnalyticUtils = tmp(9282);
const QuoteIcon2 = tmp(14880);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileSections = Constants.UserProfileSections;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
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
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGamePress(sourceUserId, applicationId) {
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === applicationId) {
    let tmp4;
    if (cResult[1] === sourceUserId) {
      tmp4 = cResult[2];
    }
    return useOpenGameProfileModalDefault(tmp4);
  }
  const obj2 = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  cResult[0] = applicationId;
  cResult[1] = sourceUserId;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : (function useGamePress(sourceUserId, applicationId) {
  const obj = { location: "UserProfileWidgetsBoard", applicationId, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, sourceUserId, trackEntryPointImpression: true, stackingBehavior: "stack" };
  const tmp = useOpenGameProfileModalDefault;
  return tmp(obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackUserProfileWidgetsView(arg0, arg1) {
  let closure_0;
  let trackUserProfileAction;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(5);
  const obj2 = require("UserProfileAnalyticsContext");
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(false);
  const obj3 = react;
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2;
      let tmp3;
      if (cResult[2] === trackUserProfileAction) {
        tmp2 = cResult[3];
        tmp3 = cResult[4];
      }
      const effect = obj3.useEffect(tmp2, tmp3);
    }
  }
  const fn = function n() {
    const tmp = closure_0;
    if (tmp) {
      const tmp3 = closure_1 && !ref.current;
      if (tmp3) {
        const obj = { action: "VIEW", section: UserProfileSections.WIDGETS };
        trackUserProfileAction(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  };
  const items = [arg0, arg1, trackUserProfileAction];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = trackUserProfileAction;
  cResult[3] = fn;
  cResult[4] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useTrackUserProfileWidgetsView(arg0, arg1) {
  let closure_0;
  let trackUserProfileAction;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("UserProfileAnalyticsContext");
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = react.useRef(false);
  const items = [arg0, arg1, trackUserProfileAction];
  const effect = react.useEffect(() => {
    const tmp = closure_0;
    if (tmp) {
      const tmp3 = closure_1 && !ref.current;
      if (tmp3) {
        const obj = { action: "VIEW", section: UserProfileSections.WIDGETS };
        trackUserProfileAction(obj);
        ref.current = true;
      }
    } else {
      ref.current = false;
    }
  }, items);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function WidgetTags(tags) {
  let closure_0;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(13);
  tags = tags.tags;
  const tmp2 = closure_13();
  _require = tmp2;
  if (cResult[0] === tmp2) {
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    if (cResult[1] === tags) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
      tmp5 = cResult[4];
      tmp6 = cResult[5];
    }
    const _Symbol = Symbol;
    if (tmp6 === Symbol.for("react.early_return_sentinel")) {
      if (cResult[9] === tmp3) {
        if (cResult[10] === tmp4) {
          let tmp17;
          if (cResult[11] === tmp5) {
            tmp17 = cResult[12];
          }
          tmp6 = tmp17;
        }
      }
      let obj3 = { style: tmp4, children: tmp5 };
      const tmp19 = closure_9(tmp3, obj3);
      cResult[9] = tmp3;
      cResult[10] = tmp4;
      cResult[11] = tmp5;
      cResult[12] = tmp19;
      tmp17 = tmp19;
    }
    return tmp6;
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_1_2[13]);
        widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
        if (null != widgetGameTagMetadata) {
          obj1 = { tag: null, meta: null };
          obj1.tag = tags;
          obj1.meta = widgetGameTagMetadata;
          items = [];
          items[0] = obj1;
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }
    }
    cResult[6] = I;
    tmp8 = I;
  } else {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_1_2[13]);
        widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
        if (null != widgetGameTagMetadata) {
          obj1 = { tag: null, meta: null };
          obj1.tag = tags;
          obj1.meta = widgetGameTagMetadata;
          items = [];
          items[0] = obj1;
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }
    }
  }
  let obj2 = tags;
  if (tags == null) {
    class I {
      constructor(arg0) {
        obj = closure_0(closure_1_2[13]);
        widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
        if (null != widgetGameTagMetadata) {
          obj1 = { tag: null, meta: null };
          obj1.tag = tags;
          obj1.meta = widgetGameTagMetadata;
          items = [];
          items[0] = obj1;
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }
    }
  }
  const flatMapResult = obj2.flatMap(tmp8);
  let tmp9 = null;
  let mapped;
  let tmp11;
  let tmp12;
  if (0 !== flatMapResult.length) {
    let tmp14;
    class I {
      constructor(arg0) {
        obj = closure_0(closure_1_2[13]);
        widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
        if (null != widgetGameTagMetadata) {
          obj1 = { tag: null, meta: null };
          obj1.tag = tags;
          obj1.meta = widgetGameTagMetadata;
          items = [];
          items[0] = obj1;
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }
    }
    const tags2 = tmp2.tags;
    if (cResult[7] !== tmp2.tag) {
      class I {
        constructor(arg0) {
          obj = closure_0(closure_1_2[13]);
          widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
          if (null != widgetGameTagMetadata) {
            obj1 = { tag: null, meta: null };
            obj1.tag = tags;
            obj1.meta = widgetGameTagMetadata;
            items = [];
            items[0] = obj1;
            items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }
      }
      cResult[7] = tmp2.tag;
      cResult[8] = tmp15;
      tmp14 = tmp15;
    } else {
      class I {
        constructor(arg0) {
          obj = closure_0(closure_1_2[13]);
          widgetGameTagMetadata = obj.getWidgetGameTagMetadata(tags);
          if (null != widgetGameTagMetadata) {
            obj1 = { tag: null, meta: null };
            obj1.tag = tags;
            obj1.meta = widgetGameTagMetadata;
            items = [];
            items[0] = obj1;
            items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        }
      }
    }
    mapped = flatMapResult.map(tmp14);
    tmp9 = forResult;
    tmp11 = tags2;
    tmp12 = tmp13;
  }
  cResult[0] = tmp2;
  cResult[1] = tags;
  cResult[2] = tmp12;
  cResult[3] = tmp11;
  cResult[4] = mapped;
  cResult[5] = tmp9;
  tmp6 = tmp9;
  tmp5 = mapped;
  tmp4 = tmp11;
  tmp3 = tmp12;
}) : (function WidgetTags(tags) {
  tags = tags.tags;
  const tmp = closure_13();
  let closure_0 = tmp;
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    let items1;
    const obj = closure_0(dependencyMap[13]);
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
          items[0] = React4(meta.icon, obj2);
          const obj3 = { variant: "text-xs/medium", color: "text-muted", children: meta.getText() };
          const Text = Text_Text.Text;
          items[1] = React4(Text, obj3);
          return authStore(metroRequire, obj, tag);
        })
    };
    tmp2 = closure_9(closure_6, obj);
  }
  return tmp2;
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function FavoriteGameItem(arg0) {
  let coverWidth;
  let disableInteraction;
  let game;
  let items;
  let items1;
  let items2;
  let tmp8;
  let userId;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(34);
  ({ game, coverWidth } = arg0);
  ({ userId, disableInteraction } = arg0);
  const tmp4 = closure_13();
  const tmp6 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp6.gameName;
  let tmp7;
  if (!disableInteraction) {
    tmp7 = closure_14(userId, game.gameId);
  }
  let closure_0 = tmp7;
  if (cResult[0] !== tmp7) {
    const fn = function l() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    };
    cResult[0] = tmp7;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    let tmp10;
    if (cResult[3] === coverWidth) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === gameName) {
      if (cResult[6] === tmp8) {
        if (cResult[7] === null == tmp7) {
          let tmp14;
          let tmp18;
          let tmp20;
          if (cResult[8] === tmp10) {
            tmp14 = cResult[9];
          }
          if (cResult[10] !== tmp7) {
            const fn2 = function _() {
              let tmp;
              if (closure_0 != null) {
                tmp = closure_0();
              }
              return tmp;
            };
            cResult[10] = tmp7;
            cResult[11] = fn2;
            tmp18 = fn2;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] !== gameName) {
            const obj2 = { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName };
            const tmp22 = React4(Text_Text.Text, obj2);
            cResult[12] = gameName;
            cResult[13] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === gameName) {
            if (cResult[15] === tmp18) {
              if (cResult[16] === null == tmp7) {
                let tmp23;
                if (cResult[17] === tmp20) {
                  tmp23 = cResult[18];
                }
                if (cResult[19] === game.comment) {
                  if (cResult[20] === tmp4.comment) {
                    let tmp27;
                    let tmp35;
                    if (cResult[21] === tmp4.commentText) {
                      tmp27 = cResult[22];
                    }
                    if (cResult[23] !== game.tags) {
                      const obj3 = { tags: game.tags };
                      const tmp38 = React4(closure_16, obj3);
                      cResult[23] = game.tags;
                      cResult[24] = tmp38;
                      tmp35 = tmp38;
                    } else {
                      tmp35 = cResult[24];
                    }
                    if (cResult[25] === tmp4.favoriteDetails) {
                      if (cResult[26] === tmp35) {
                        if (cResult[27] === tmp23) {
                          let tmp39;
                          if (cResult[28] === tmp27) {
                            tmp39 = cResult[29];
                          }
                          if (cResult[30] === tmp4.favoriteRow) {
                            if (cResult[31] === tmp39) {
                              let tmp43;
                              if (cResult[32] === tmp14) {
                                tmp43 = cResult[33];
                              }
                              return tmp43;
                            }
                          }
                          const obj4 = { style: tmp4.favoriteRow, children: items };
                          items = [tmp14, tmp39];
                          const tmp46 = authStore(metroRequire, obj4);
                          cResult[30] = tmp4.favoriteRow;
                          cResult[31] = tmp39;
                          cResult[32] = tmp14;
                          cResult[33] = tmp46;
                          tmp43 = tmp46;
                        }
                      }
                    }
                    const obj5 = { style: tmp4.favoriteDetails, children: items1 };
                    items1 = [tmp23, tmp27, tmp35];
                    const tmp42 = authStore(metroRequire, obj5);
                    cResult[25] = tmp4.favoriteDetails;
                    cResult[26] = tmp35;
                    cResult[27] = tmp23;
                    cResult[28] = tmp27;
                    cResult[29] = tmp42;
                    tmp39 = tmp42;
                  }
                }
                let trimmed;
                const isNullOrEmpty = StringUtils.isNullOrEmpty;
                StringUtils;
                if (game.comment != null) {
                  trimmed = str.trim();
                }
                let tmp31 = !isNullOrEmpty(trimmed);
                isNullOrEmpty(trimmed);
                if (tmp31) {
                  const obj6 = { style: tmp4.comment, children: items2 };
                  const obj7 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
                  const QuoteIcon = QuoteIcon2.QuoteIcon;
                  items2 = [React4(QuoteIcon, obj7), ];
                  const obj8 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: tmp4.commentText, children: game.comment };
                  items2[1] = React4(Text_Text.Text, obj8);
                  tmp31 = authStore(metroRequire, obj6);
                }
                cResult[19] = game.comment;
                cResult[20] = tmp4.comment;
                cResult[21] = tmp4.commentText;
                cResult[22] = tmp31;
                tmp27 = tmp31;
              }
            }
          }
          const obj9 = { onPress: tmp18, disabled: null == tmp7, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp20 };
          const tmp26 = React4(hasOwnProperty, obj9);
          cResult[14] = gameName;
          cResult[15] = tmp18;
          cResult[16] = null == tmp7;
          cResult[17] = tmp20;
          cResult[18] = tmp26;
          tmp23 = tmp26;
        }
      }
    }
    const obj10 = { onPress: tmp8, disabled: null == tmp7, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp10 };
    const tmp17 = React4(hasOwnProperty, obj10);
    cResult[5] = gameName;
    cResult[6] = tmp8;
    cResult[7] = null == tmp7;
    cResult[8] = tmp10;
    cResult[9] = tmp17;
    tmp14 = tmp17;
  }
  const obj11 = { width: coverWidth };
  const tmp5Result = GameCoverImageDefault;
  const merged = Object.assign(tmp6);
  const tmp13 = React4(tmp5Result, obj11);
  cResult[2] = tmp6;
  cResult[3] = coverWidth;
  cResult[4] = tmp13;
  tmp10 = tmp13;
}) : (function FavoriteGameItem(game) {
  let coverWidth;
  let disableInteraction;
  let items;
  let items1;
  let items2;
  let obj3;
  let tmp2Result;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_13();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = closure_14(userId, game.gameId);
  }
  closure_0 = tmp5;
  const obj = { style: tmp.favoriteRow, children: items };
  const obj2 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: React4(tmp2Result, obj3)
  };
  obj3 = { width: coverWidth };
  tmp2Result = GameCoverImageDefault;
  const merged = Object.assign(tmp4);
  items = [React4(hasOwnProperty, obj2), ];
  const obj4 = { style: tmp.favoriteDetails, children: items1 };
  items1 = [, , ];
  const obj5 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: React4(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 2, children: gameName })
  };
  items1[0] = React4(hasOwnProperty, obj5);
  let trimmed;
  const isNullOrEmpty = StringUtils.isNullOrEmpty;
  StringUtils;
  if (game.comment != null) {
    trimmed = str.trim();
  }
  let tmp6Result = !isNullOrEmpty(trimmed);
  isNullOrEmpty(trimmed);
  if (tmp6Result) {
    const obj6 = { style: tmp.comment, children: items2 };
    const obj7 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const QuoteIcon = tmp11(14880).QuoteIcon;
    items2 = [React4(QuoteIcon, obj7), ];
    const obj8 = { variant: "text-sm/normal", color: "text-muted", lineClamp: 3, style: tmp.commentText, children: game.comment };
    items2[1] = React4(Text_Text.Text, obj8);
    tmp6Result = tmp6(tmp7, obj6);
  }
  items1[1] = tmp6Result;
  const obj9 = { tags: game.tags };
  items1[2] = React4(closure_16, obj9);
  items[1] = authStore(metroRequire, obj4);
  return authStore(metroRequire, obj);
}));
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = memo3(ReactCompilerGating.isReactCompilerEnabled() ? (function GameListRow(arg0) {
  let coverWidth;
  let disableInteraction;
  let game;
  let items;
  let items1;
  let tmp8;
  let userId;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(29);
  ({ game, coverWidth } = arg0);
  ({ userId, disableInteraction } = arg0);
  const tmp4 = closure_13();
  const tmp6 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp6.gameName;
  let tmp7;
  if (!disableInteraction) {
    tmp7 = closure_14(userId, game.gameId);
  }
  let closure_0 = tmp7;
  if (cResult[0] !== tmp7) {
    const fn = function l() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    };
    cResult[0] = tmp7;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp6) {
    let tmp10;
    if (cResult[3] === coverWidth) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === gameName) {
      if (cResult[6] === tmp8) {
        if (cResult[7] === null == tmp7) {
          let tmp14;
          let tmp18;
          let tmp20;
          if (cResult[8] === tmp10) {
            tmp14 = cResult[9];
          }
          if (cResult[10] !== tmp7) {
            const fn2 = function _() {
              let tmp;
              if (closure_0 != null) {
                tmp = closure_0();
              }
              return tmp;
            };
            cResult[10] = tmp7;
            cResult[11] = fn2;
            tmp18 = fn2;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] !== gameName) {
            const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName };
            const tmp22 = React4(Text_Text.Text, obj2);
            cResult[12] = gameName;
            cResult[13] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === gameName) {
            if (cResult[15] === tmp18) {
              if (cResult[16] === null == tmp7) {
                let tmp23;
                let tmp27;
                if (cResult[17] === tmp20) {
                  tmp23 = cResult[18];
                }
                if (cResult[19] !== game.tags) {
                  const obj3 = { tags: game.tags };
                  const tmp30 = React4(closure_16, obj3);
                  cResult[19] = game.tags;
                  cResult[20] = tmp30;
                  tmp27 = tmp30;
                } else {
                  tmp27 = cResult[20];
                }
                if (cResult[21] === tmp4.listDetails) {
                  if (cResult[22] === tmp23) {
                    let tmp31;
                    if (cResult[23] === tmp27) {
                      tmp31 = cResult[24];
                    }
                    if (cResult[25] === tmp4.listRow) {
                      if (cResult[26] === tmp31) {
                        let tmp35;
                        if (cResult[27] === tmp14) {
                          tmp35 = cResult[28];
                        }
                        return tmp35;
                      }
                    }
                    const obj4 = { style: tmp4.listRow, children: items };
                    items = [tmp14, tmp31];
                    const tmp38 = authStore(metroRequire, obj4);
                    cResult[25] = tmp4.listRow;
                    cResult[26] = tmp31;
                    cResult[27] = tmp14;
                    cResult[28] = tmp38;
                    tmp35 = tmp38;
                  }
                }
                const obj5 = { style: tmp4.listDetails, children: items1 };
                items1 = [tmp23, tmp27];
                const tmp34 = authStore(metroRequire, obj5);
                cResult[21] = tmp4.listDetails;
                cResult[22] = tmp23;
                cResult[23] = tmp27;
                cResult[24] = tmp34;
                tmp31 = tmp34;
              }
            }
          }
          const obj6 = { onPress: tmp18, disabled: null == tmp7, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp20 };
          const tmp26 = React4(hasOwnProperty, obj6);
          cResult[14] = gameName;
          cResult[15] = tmp18;
          cResult[16] = null == tmp7;
          cResult[17] = tmp20;
          cResult[18] = tmp26;
          tmp23 = tmp26;
        }
      }
    }
    const obj7 = { onPress: tmp8, disabled: null == tmp7, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp10 };
    const tmp17 = React4(hasOwnProperty, obj7);
    cResult[5] = gameName;
    cResult[6] = tmp8;
    cResult[7] = null == tmp7;
    cResult[8] = tmp10;
    cResult[9] = tmp17;
    tmp14 = tmp17;
  }
  const obj8 = { width: coverWidth };
  const tmp5Result = GameCoverImageDefault;
  const merged = Object.assign(tmp6);
  const tmp13 = React4(tmp5Result, obj8);
  cResult[2] = tmp6;
  cResult[3] = coverWidth;
  cResult[4] = tmp13;
  tmp10 = tmp13;
}) : (function GameListRow(game) {
  let coverWidth;
  let disableInteraction;
  let items;
  let items1;
  let obj3;
  let tmp2Result;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = closure_13();
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = closure_14(userId, game.gameId);
  }
  closure_0 = tmp5;
  const obj = { style: tmp.listRow, children: items };
  const obj2 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: React4(tmp2Result, obj3)
  };
  obj3 = { width: coverWidth };
  tmp2Result = GameCoverImageDefault;
  const merged = Object.assign(tmp4);
  items = [React4(hasOwnProperty, obj2), ];
  const obj4 = { style: tmp.listDetails, children: items1 };
  items1 = [, ];
  const obj5 = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp5,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: React4(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 2, children: gameName })
  };
  items1[0] = React4(hasOwnProperty, obj5);
  const obj6 = { tags: game.tags };
  items1[1] = React4(closure_16, obj6);
  items[1] = authStore(metroRequire, obj4);
  return authStore(metroRequire, obj);
}));
const memo4 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo4(ReactCompilerGating.isReactCompilerEnabled() ? (function GameGridCover(arg0) {
  let coverWidth;
  let disableInteraction;
  let game;
  let tmp6;
  let userId;
  let tmp = dependencyMap;
  const obj = react2;
  const cResult = obj.c(10);
  ({ game, coverWidth, userId, disableInteraction } = arg0);
  const tmp4 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp4.gameName;
  let tmp5;
  if (!disableInteraction) {
    tmp5 = closure_14(userId, game.gameId);
  }
  let closure_0 = tmp5;
  if (cResult[0] !== tmp5) {
    const fn = function l() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    };
    cResult[0] = tmp5;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    let tmp8;
    if (cResult[3] === coverWidth) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === gameName) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === null == tmp5) {
          let tmp12;
          if (cResult[8] === tmp8) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
    }
    const obj2 = { onPress: tmp6, disabled: null == tmp5, accessibilityRole: "button", accessibilityLabel: gameName, children: tmp8 };
    const tmp15 = React4(hasOwnProperty, obj2);
    cResult[5] = gameName;
    cResult[6] = tmp6;
    cResult[7] = null == tmp5;
    cResult[8] = tmp8;
    cResult[9] = tmp15;
    tmp12 = tmp15;
  }
  const obj3 = { width: coverWidth };
  const tmp3Result = GameCoverImageDefault;
  const merged = Object.assign(tmp4);
  const tmp11 = React4(tmp3Result, obj3);
  cResult[2] = tmp4;
  cResult[3] = coverWidth;
  cResult[4] = tmp11;
  tmp8 = tmp11;
}) : (function GameGridCover(game) {
  let coverWidth;
  let disableInteraction;
  let obj2;
  let tmpResult;
  let userId;
  game = game.game;
  let closure_0;
  ({ userId, coverWidth, disableInteraction } = game);
  let tmp = importDefault;
  const tmp3 = useGameNameAndCoverImageDefault(game.gameId);
  const gameName = tmp3.gameName;
  let tmp4;
  if (!disableInteraction) {
    tmp4 = closure_14(userId, game.gameId);
  }
  closure_0 = tmp4;
  const obj = {
    onPress() {
      let tmp;
      if (closure_0 != null) {
        tmp = closure_0();
      }
      return tmp;
    },
    disabled: null == tmp4,
    accessibilityRole: "button",
    accessibilityLabel: gameName,
    children: React4(tmpResult, obj2)
  };
  obj2 = { width: coverWidth };
  tmpResult = GameCoverImageDefault;
  const merged = Object.assign(tmp3);
  return React4(hasOwnProperty, obj);
}));
const memo5 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo5Result = memo5(ReactCompilerGating.isReactCompilerEnabled() ? (function WidgetSection(userId) {
  let Text;
  let Text2;
  let arr2;
  let cardStyle;
  let disableInteraction;
  let first;
  let items1;
  let items2;
  let obj11;
  let obj6;
  let tmp10;
  let tmp12;
  let tmp31;
  let tmp57;
  let tmp7;
  let widget;
  let obj = userId(576);
  const cResult = obj.c(66);
  userId = userId.userId;
  ({ widget, cardStyle, disableInteraction } = userId);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function b() {
      return AuthenticationStore.getId() === userId;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = userId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  [tmp10, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp11 = _slicedToArray(react.useState(0), 2);
  [tmp12, _slicedToArray] = tmp11;
  const result = (tmp12 - 2 * disableInteraction(587).space.PX_16) / 3;
  react = result;
  if (cResult[3] !== widget.games) {
    const tmp13Result = disableInteraction(12);
    const uniqByResult = tmp13Result.uniqBy(widget.games, "gameId");
    cResult[3] = widget.games;
    cResult[4] = uniqByResult;
    arr2 = uniqByResult;
  } else {
    arr2 = cResult[4];
  }
  const type = widget.type;
  if (userId(7761).WidgetType.FAVORITE_GAMES === type) {
    if (cResult[5] === tmp12) {
      if (cResult[6] === result) {
        if (cResult[7] === disableInteraction) {
          if (cResult[8] === arr2) {
            let tmp53;
            if (cResult[9] === userId) {
              tmp53 = cResult[10];
            }
            tmp31 = tmp53;
          }
        }
      }
    }
    let tmp54 = tmp12 > 0;
    if (tmp54) {
      const obj2 = { userId, game: arr2[0], coverWidth: result, disableInteraction };
      tmp54 = closure_9(closure_17, obj2);
    }
    cResult[5] = tmp12;
    cResult[6] = result;
    cResult[7] = disableInteraction;
    cResult[8] = arr2;
    cResult[9] = userId;
    cResult[10] = tmp54;
    tmp53 = tmp54;
  } else if (userId(7761).WidgetType.CURRENT_GAMES === type) {
    if (cResult[11] === tmp10) {
      let arr5;
      if (cResult[12] === arr2) {
        arr5 = cResult[13];
      }
      if (cResult[14] === tmp12) {
        if (cResult[15] === result) {
          if (cResult[16] === disableInteraction) {
            if (cResult[17] === arr5) {
              let tmp37;
              if (cResult[18] === userId) {
                tmp37 = cResult[19];
              }
              if (cResult[20] === tmp4.list) {
                let tmp39;
                if (cResult[21] === tmp37) {
                  tmp39 = cResult[22];
                }
                if (cResult[23] === tmp10) {
                  if (cResult[24] === arr2.length) {
                    if (cResult[25] === arr2.length > 2) {
                      let tmp43;
                      if (cResult[26] === tmp4.viewMore) {
                        tmp43 = cResult[27];
                      }
                      if (cResult[28] === tmp39) {
                        let tmp49;
                        if (cResult[29] === tmp43) {
                          tmp49 = cResult[30];
                        }
                        tmp31 = tmp49;
                      }
                      const obj3 = { children: items1 };
                      items1 = [tmp39, tmp43];
                      const tmp52 = closure_10(closure_11, obj3);
                      cResult[28] = tmp39;
                      cResult[29] = tmp43;
                      cResult[30] = tmp52;
                      tmp49 = tmp52;
                    }
                  }
                }
                let tmp45Result = tmp35;
                if (tmp45Result) {
                  let stringResult;
                  const obj4 = {
                    style: tmp4.viewMore,
                    hitSlop,
                    onPress() {
                                      return dependencyMap((arg0) => !arg0);
                                    },
                    accessibilityRole: "button",
                    children: closure_9(Text2, obj6)
                  };
                  Text2 = tmp(5271).Text;
                  const intl2 = tmp(1125).intl;
                  const tmp46 = closure_5;
                  if (tmp10) {
                    stringResult = intl2.string(tmp(1125).t["6MwJo/"]);
                  } else {
                    const obj5 = { numberOfItems: arr2.length - 2 };
                    stringResult = intl2.formatToPlainString(tmp(1125).t.zr0Y5R, obj5);
                  }
                  obj6 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
                  tmp45Result = tmp45(tmp46, obj4);
                }
                cResult[23] = tmp10;
                cResult[24] = arr2.length;
                cResult[25] = arr2.length > 2;
                cResult[26] = tmp4.viewMore;
                cResult[27] = tmp45Result;
                tmp43 = tmp45Result;
              }
              const obj7 = { style: tmp4.list, children: tmp37 };
              const tmp42 = closure_9(closure_6, obj7);
              cResult[20] = tmp4.list;
              cResult[21] = tmp37;
              cResult[22] = tmp42;
              tmp39 = tmp42;
            }
          }
        }
      }
      const tmp38 = tmp12 > 0 && arr5.map((game) => {
        const obj = { userId, game, coverWidth: react, disableInteraction };
        return React4(closure_18, obj, game.gameId);
      });
      cResult[14] = tmp12;
      cResult[15] = result;
      cResult[16] = disableInteraction;
      cResult[17] = arr5;
      cResult[18] = userId;
      cResult[19] = tmp38;
      tmp37 = tmp38;
    }
    let substr = arr2;
    if (!tmp10) {
      substr = arr2.slice(0, 2);
    }
    cResult[11] = tmp10;
    cResult[12] = arr2;
    cResult[13] = substr;
    arr5 = substr;
  } else {
    if (userId(7761).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (userId(7761).WidgetType.PLAYED_GAMES !== type) {
        return null;
      }
    }
    if (cResult[31] === tmp10) {
      let arr3;
      if (cResult[32] === arr2) {
        arr3 = cResult[33];
      }
      if (cResult[34] === tmp12) {
        if (cResult[35] === result) {
          if (cResult[36] === disableInteraction) {
            if (cResult[37] === arr3) {
              let tmp19;
              if (cResult[38] === userId) {
                tmp19 = cResult[39];
              }
              if (cResult[40] === tmp4.grid) {
                let tmp21;
                if (cResult[41] === tmp19) {
                  tmp21 = cResult[42];
                }
                if (cResult[43] === tmp10) {
                  if (cResult[44] === arr2.length) {
                    if (cResult[45] === arr2.length > 6) {
                      let tmp25;
                      if (cResult[46] === tmp4.viewMore) {
                        tmp25 = cResult[47];
                      }
                      if (cResult[48] === tmp21) {
                        if (cResult[49] === tmp25) {
                          tmp31 = cResult[50];
                        }
                      }
                      const obj8 = { children: items2 };
                      items2 = [tmp21, tmp25];
                      const tmp34 = closure_10(closure_11, obj8);
                      cResult[48] = tmp21;
                      cResult[49] = tmp25;
                      cResult[50] = tmp34;
                      tmp31 = tmp34;
                    }
                  }
                }
                let tmp27Result = tmp17;
                if (tmp27Result) {
                  let stringResult1;
                  const obj9 = {
                    style: tmp4.viewMore,
                    hitSlop,
                    onPress() {
                                      return dependencyMap((arg0) => !arg0);
                                    },
                    accessibilityRole: "button",
                    children: closure_9(Text, obj11)
                  };
                  Text = tmp(5271).Text;
                  const intl = tmp(1125).intl;
                  const tmp28 = closure_5;
                  if (tmp10) {
                    stringResult1 = intl.string(tmp(1125).t["6MwJo/"]);
                  } else {
                    const obj10 = { numberOfItems: arr2.length - 6 };
                    stringResult1 = intl.formatToPlainString(tmp(1125).t.zr0Y5R, obj10);
                  }
                  obj11 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
                  tmp27Result = tmp27(tmp28, obj9);
                }
                cResult[43] = tmp10;
                cResult[44] = arr2.length;
                cResult[45] = arr2.length > 6;
                cResult[46] = tmp4.viewMore;
                cResult[47] = tmp27Result;
                tmp25 = tmp27Result;
              }
              const obj12 = { style: tmp4.grid, children: tmp19 };
              const tmp24 = closure_9(closure_6, obj12);
              cResult[40] = tmp4.grid;
              cResult[41] = tmp19;
              cResult[42] = tmp24;
              tmp21 = tmp24;
            }
          }
        }
      }
      const tmp20 = tmp12 > 0 && arr3.map((game) => {
        const obj = { userId, game, coverWidth: react, disableInteraction };
        return React4(closure_19, obj, game.gameId);
      });
      cResult[34] = tmp12;
      cResult[35] = result;
      cResult[36] = disableInteraction;
      cResult[37] = arr3;
      cResult[38] = userId;
      cResult[39] = tmp20;
      tmp19 = tmp20;
    }
    let substr1 = arr2;
    if (!tmp10) {
      substr1 = arr2.slice(0, 6);
    }
    cResult[31] = tmp10;
    cResult[32] = arr2;
    cResult[33] = substr1;
    arr3 = substr1;
  }
  if (cResult[51] !== widget) {
    const tmpResult2 = userId(14882);
    const widgetTitle = tmpResult2.getWidgetTitle(widget);
    cResult[51] = widget;
    cResult[52] = widgetTitle;
    tmp57 = widgetTitle;
  } else {
    tmp57 = cResult[52];
  }
  if (cResult[53] === disableInteraction) {
    if (cResult[54] === stateFromStores) {
      if (cResult[55] === userId) {
        let tmp59;
        let tmp62;
        let tmp63;
        if (cResult[56] === widget) {
          tmp59 = cResult[57];
        }
        const _Symbol = Symbol;
        if (cResult[58] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function z(nativeEvent) {
            return _slicedToArray(nativeEvent.nativeEvent.layout.width);
          };
          cResult[58] = fn2;
          tmp62 = fn2;
        } else {
          tmp62 = cResult[58];
        }
        if (cResult[59] !== tmp31) {
          const obj13 = { onLayout: tmp62, children: tmp31 };
          const tmp66 = closure_9(closure_6, obj13);
          cResult[59] = tmp31;
          cResult[60] = tmp66;
          tmp63 = tmp66;
        } else {
          tmp63 = cResult[60];
        }
        if (cResult[61] === cardStyle) {
          if (cResult[62] === tmp57) {
            if (cResult[63] === tmp59) {
              let tmp67;
              if (cResult[64] === tmp63) {
                tmp67 = cResult[65];
              }
              return tmp67;
            }
          }
        }
        const obj14 = { style: cardStyle, title: tmp57, trailingAction: tmp59, children: tmp63 };
        const tmp69 = closure_9(disableInteraction(7363), obj14);
        cResult[61] = cardStyle;
        cResult[62] = tmp57;
        cResult[63] = tmp59;
        cResult[64] = tmp63;
        cResult[65] = tmp69;
        tmp67 = tmp69;
      }
    }
  }
  let tmp60 = !stateFromStores && !disableInteraction;
  if (tmp60) {
    const obj15 = { userId, widget };
    tmp60 = closure_9(tmp13(14886), obj15);
  }
  cResult[53] = disableInteraction;
  cResult[54] = stateFromStores;
  cResult[55] = userId;
  cResult[56] = widget;
  cResult[57] = tmp60;
  tmp59 = tmp60;
}) : (function WidgetSection(userId) {
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
  const tmp = closure_13();
  let obj = userId(disableInteraction[19]);
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
  if (userId(disableInteraction[21]).WidgetType.FAVORITE_GAMES === type) {
    let tmp31 = tmp8 > 0;
    if (tmp31) {
      const obj2 = { userId, game: memo[0], coverWidth: result, disableInteraction };
      tmp31 = closure_9(closure_17, obj2);
    }
    tmp13Result = tmp31;
  } else if (userId(disableInteraction[21]).WidgetType.CURRENT_GAMES === type) {
    let tmp25Result = memo.length > 2;
    let substr = memo;
    if (!tmp6) {
      substr = memo.slice(0, 2);
    }
    const obj3 = { style: tmp.list, children: mapped };
    mapped = tmp8 > 0;
    const tmp23 = closure_10;
    const tmp24 = closure_11;
    const tmp26 = closure_6;
    if (mapped) {
      mapped = substr.map((game) => {
        const obj = { userId, game, coverWidth, disableInteraction };
        return React4(closure_18, obj, game.gameId);
      });
    }
    const items2 = [closure_9(tmp26, obj3), ];
    if (tmp25Result) {
      let stringResult;
      const obj4 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
              return _undefined((arg0) => !arg0);
            },
        accessibilityRole: "button",
        children: closure_9(Text2, obj6)
      };
      Text2 = tmp2(tmp3[14]).Text;
      const intl2 = tmp2(tmp3[22]).intl;
      const tmp28 = c5;
      if (tmp6) {
        stringResult = intl2.string(tmp2(tmp3[22]).t["6MwJo/"]);
      } else {
        const obj5 = { numberOfItems: memo.length - 2 };
        stringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.zr0Y5R, obj5);
      }
      obj6 = { variant: "text-sm/medium", color: "text-muted", children: stringResult };
      tmp25Result = tmp25(tmp28, obj4);
    }
    const obj7 = { children: items2 };
    items2[1] = tmp25Result;
    tmp13Result = tmp23(tmp24, obj7);
  } else {
    if (userId(disableInteraction[21]).WidgetType.WANT_TO_PLAY_GAMES !== type) {
      if (userId(disableInteraction[21]).WidgetType.PLAYED_GAMES !== type) {
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
    const tmp13 = closure_10;
    const tmp14 = closure_11;
    const tmp16 = closure_6;
    if (mapped1) {
      mapped1 = substr1.map((game) => {
        const obj = { userId, game, coverWidth, disableInteraction };
        return React4(closure_19, obj, game.gameId);
      });
    }
    const items3 = [closure_9(tmp16, obj8), ];
    if (tmp15Result) {
      let stringResult1;
      const obj9 = {
        style: tmp.viewMore,
        hitSlop,
        onPress() {
              return _undefined((arg0) => !arg0);
            },
        accessibilityRole: "button",
        children: closure_9(Text, obj11)
      };
      Text = tmp2(tmp3[14]).Text;
      const intl = tmp2(tmp3[22]).intl;
      const tmp18 = c5;
      if (tmp6) {
        stringResult1 = intl.string(tmp2(tmp3[22]).t["6MwJo/"]);
      } else {
        const obj10 = { numberOfItems: memo.length - 6 };
        stringResult1 = intl.formatToPlainString(tmp2(tmp3[22]).t.zr0Y5R, obj10);
      }
      obj11 = { variant: "text-sm/medium", color: "text-muted", children: stringResult1 };
      tmp15Result = tmp15(tmp18, obj9);
    }
    const obj12 = { children: items3 };
    items3[1] = tmp15Result;
    tmp13Result = tmp13(tmp14, obj12);
  }
  const obj13 = { style: cardStyle, title: tmp2Result.getWidgetTitle(widget), trailingAction: tmp34Result, children: closure_9(closure_6, obj15) };
  const tmp9Result = widget(disableInteraction[25]);
  tmp34Result = !stateFromStores && !disableInteraction;
  tmp2Result = userId(disableInteraction[23]);
  if (tmp34Result) {
    const obj14 = { userId, widget };
    tmp34Result = tmp34(tmp9(tmp3[24]), obj14);
  }
  obj15 = {
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp13Result
  };
  return closure_9(tmp9Result, obj13);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function WidgetRenderer(arg0) {
  let cardStyle;
  let tmp4;
  let userId;
  let widget;
  const obj = react2;
  const cResult = obj.c(12);
  ({ userId, widget, cardStyle } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    if (cResult[0] === cardStyle) {
      if (cResult[1] === userId) {
        let tmp12;
        if (cResult[2] === widget) {
          tmp12 = cResult[3];
        }
        tmp4 = tmp12;
      }
    }
    const obj2 = { userId, widget, cardStyle };
    const tmp15 = React4(UserProfileApplicationWidgetCardDefault, obj2);
    cResult[0] = cardStyle;
    cResult[1] = userId;
    cResult[2] = widget;
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    if (cResult[4] === cardStyle) {
      if (cResult[5] === userId) {
        let tmp8;
        if (cResult[6] === widget) {
          tmp8 = cResult[7];
        }
        tmp4 = tmp8;
      }
    }
    const obj3 = { userId, widget, cardStyle };
    const tmp11 = React4(UserProfilePersonalWidgetCardDefault, obj3);
    cResult[4] = cardStyle;
    cResult[5] = userId;
    cResult[6] = widget;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  } else {
    if (cResult[8] === cardStyle) {
      if (cResult[9] === userId) {
        if (cResult[10] === widget) {
          tmp4 = cResult[11];
        }
      }
    }
    const obj4 = { userId, widget, cardStyle };
    const tmp7 = React4(memo5Result, obj4);
    cResult[8] = cardStyle;
    cResult[9] = userId;
    cResult[10] = widget;
    cResult[11] = tmp7;
    tmp4 = tmp7;
  }
  return tmp4;
}) : (function WidgetRenderer(arg0) {
  let cardStyle;
  let tmp3Result;
  let userId;
  let widget;
  ({ userId, widget, cardStyle } = arg0);
  if (widget instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
    const obj2 = { userId, widget, cardStyle };
    tmp3Result = React4(UserProfileApplicationWidgetCardDefault, obj2);
  } else if (widget instanceof UserProfilePersonalWidget.UserProfilePersonalWidget) {
    const obj3 = { userId, widget, cardStyle };
    tmp3Result = tmp3(UserProfilePersonalWidgetCardDefault, obj3);
  } else {
    const obj = { userId, widget, cardStyle };
    tmp3Result = tmp3(memo5Result, obj);
  }
  return tmp3Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileWidgetsBoard(userId) {
  let cardStyle;
  let isVisible;
  let obj = userId(576);
  const cResult = obj.c(10);
  const tmp = userId;
  userId = userId.userId;
  ({ isVisible, cardStyle } = userId);
  const tmp4 = undefined === isVisible || isVisible;
  const tmp5 = closure_13();
  const tmpResult = tmp(14892);
  const displayableBoardWidgets = tmpResult.useDisplayableBoardWidgets(userId);
  closure_15(tmp4, displayableBoardWidgets.length > 0);
  if (0 === displayableBoardWidgets.length) {
    return null;
  } else {
    let tmp7;
    if (cResult[0] === cardStyle) {
      if (cResult[1] === userId) {
        if (cResult[2] === displayableBoardWidgets) {
          tmp7 = cResult[3];
        }
        if (cResult[7] === tmp5.board) {
          let tmp10;
          if (cResult[8] === tmp7) {
            tmp10 = cResult[9];
          }
          return tmp10;
        }
        const obj2 = { style: tmp15, children: tmp7 };
        const tmp13 = closure_9(closure_6, obj2);
        cResult[7] = tmp5.board;
        cResult[8] = tmp7;
        cResult[9] = tmp13;
        tmp10 = tmp13;
      }
    }
    if (cResult[4] === cardStyle) {
      let tmp8;
      if (cResult[5] === userId) {
        tmp8 = cResult[6];
      }
      const mapped = displayableBoardWidgets.map(tmp8);
      cResult[0] = cardStyle;
      cResult[1] = userId;
      cResult[2] = displayableBoardWidgets;
      cResult[3] = mapped;
      tmp7 = mapped;
    }
    const fn = function f(widget) {
      const obj = { userId, widget, cardStyle };
      return React4(closure_21, obj, widget.getUniqueKey());
    };
    cResult[4] = cardStyle;
    cResult[5] = userId;
    cResult[6] = fn;
    tmp8 = fn;
  }
}) : (function UserProfileWidgetsBoard(userId) {
  userId = userId.userId;
  let flag = userId.isVisible;
  if (flag === undefined) {
    flag = true;
  }
  const cardStyle = userId.cardStyle;
  const tmp = closure_13();
  let obj = userId(14892);
  const displayableBoardWidgets = obj.useDisplayableBoardWidgets(userId);
  closure_15(flag, displayableBoardWidgets.length > 0);
  let tmp3 = null;
  if (0 !== displayableBoardWidgets.length) {
    const obj2 = {
      style: tmp.board,
      children: displayableBoardWidgets.map((widget) => {
          const obj = { userId, widget, cardStyle };
          return React4(closure_21, obj, widget.getUniqueKey());
        })
    };
    tmp3 = closure_9(closure_6, obj2);
  }
  return tmp3;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoard.tsx");

export default tmp7;
export const WidgetSection = memo5Result;
