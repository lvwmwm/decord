// Module ID: 12793
// Function ID: 12794
// Name: ConjureHomeFeatureList
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 7327, 9344, 5271, 9429, 5295, 12247, 1125, 3864, 5289, 5729, 11027, 683, 12794, 2]

// Module 12793 (ConjureHomeFeatureList)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import Text_Text from "Text/Text" /* 5271 */;
import LinearGradientDefault from "LinearGradient" /* 5295 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 7327 */;
import RobotIcon2 from "RobotIcon" /* 12247 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, id, importDefault;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj2;
let obj3;
let obj30;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let rect1;
let rect2;
let size;
let size1;
let size10;
let size11;
let size12;
let size13;
let size2;
let size3;
let size4;
let size5;
let size6;
let size7;
let size8;
let size9;
let tmp;
let tmp5;
const _modDef683 = tmp5(683);
const ShieldIcon2 = tmp(11027);
({ StyleSheet, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, card: obj3, visual: { height: 132, alignItems: "center", justifyContent: "center" }, caption: obj4, window: obj5, line: obj6, lineTitle: size, lineName: obj7, lineShort: { width: "40%" }, lineMedium: { width: "64%" }, lineLong: { width: "92%" }, windowBar: obj8, windowDot: size1, pollOption: obj9, pollFill: obj10, pollFillWinner: obj11, pollLabel: { width: "40%" }, pollLabelWinner: obj12, gameCanvas: size2, cloud: obj13, pipe: obj14, player: size3, pill: obj15, joinRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8 }, joinArrow: size4, message: { flexDirection: "row", gap: nativeDefault.space.PX_8 }, messageBody: { flex: 1, gap: nativeDefault.space.PX_6, paddingTop: nativeDefault.space.PX_4 }, messageHeader: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6 }, avatar: size5, avatarBrand: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, botTag: { paddingHorizontal: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, profile: { padding: 0, gap: 0, overflow: "hidden" }, profileBanner: { height: nativeDefault.space.PX_24 }, profileBody: { gap: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, paddingBottom: nativeDefault.space.PX_10 }, profileAvatar: size6, statsWidget: { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, stats: { flexDirection: "row", gap: nativeDefault.space.PX_12 }, stat: { gap: nativeDefault.space.PX_4 }, statValue: size7, statLabel: size8, chart: { flexDirection: "row", alignItems: "flex-end", gap: 2, height: nativeDefault.space.PX_24 }, chartBar: { width: 5, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE }, chartBarDown: { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }, scene: size9, sceneHills: rect, sceneScrim: obj30, crosshair: size10, overlayPanel: rect1, overlayMember: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, overlayAvatar: size11, speaking: { borderWidth: 2, borderColor: nativeDefault.colors.STATUS_ONLINE, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, overlayName: size12, overlayTimer: rect2, overlayTimerValue: size13, redacted: { opacity: 0.4 }, blockedNotice: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL }, blockedText: { flex: 1, gap: nativeDefault.space.PX_6 }, lineCritical: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, opacity: 0.6 } };
obj2 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_24, padding: nativeDefault.space.PX_24, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { width: 200, gap: nativeDefault.space.PX_6, padding: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6 = { height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
size = { width: "60%", height: nativeDefault.space.PX_8 };
obj7 = { width: 56, backgroundColor: nativeDefault.colors.TEXT_SUBTLE, opacity: 0.6 };
obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
size1 = { width: nativeDefault.space.PX_6, height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, height: 20, paddingHorizontal: nativeDefault.space.PX_6, overflow: "hidden", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj10 = { right: undefined, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj11 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, opacity: 0.35 };
obj12 = { width: "52%", backgroundColor: nativeDefault.colors.TEXT_STRONG, opacity: 0.7 };
size2 = { width: 200, height: 108, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md };
obj13 = { position: "absolute", height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, opacity: 0.7 };
obj14 = { position: "absolute", width: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_300 };
size3 = { position: "absolute", top: 48, left: 34, width: 14, height: 11, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300 };
obj15 = { position: "absolute", top: nativeDefault.space.PX_6, flexDirection: "row", alignItems: "center", gap: 2, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8 });
size4 = { width: nativeDefault.space.PX_12, height: 3, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
({ flexDirection: "row", gap: nativeDefault.space.PX_8 });
({ flex: 1, gap: nativeDefault.space.PX_6, paddingTop: nativeDefault.space.PX_4 });
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6 });
size5 = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
({ backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
({ paddingHorizontal: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
({ height: nativeDefault.space.PX_24 });
({ gap: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, paddingBottom: nativeDefault.space.PX_10 });
size6 = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, marginTop: -nativeDefault.space.PX_16, borderWidth: 3, borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
({ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
({ flexDirection: "row", gap: nativeDefault.space.PX_12 });
({ gap: nativeDefault.space.PX_4 });
size7 = { width: 20, height: nativeDefault.space.PX_10, backgroundColor: nativeDefault.colors.TEXT_STRONG, opacity: 0.8 };
size8 = { width: 26, height: nativeDefault.space.PX_4 };
({ flexDirection: "row", alignItems: "flex-end", gap: 2, height: nativeDefault.space.PX_24 });
({ width: 5, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL });
size9 = { width: 224, height: 116, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md };
rect = { position: "absolute", top: "55%", left: "-10%", right: "-10%", height: "90%", borderTopLeftRadius: nativeDefault.radii.round, borderTopRightRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BLUE_760 };
obj30 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size10 = { position: "absolute", top: 50, left: 104, width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderWidth: 2, borderColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT, borderRadius: nativeDefault.radii.round, opacity: 0.5 };
rect1 = { position: "absolute", top: nativeDefault.space.PX_6, right: nativeDefault.space.PX_6, gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
size11 = { width: nativeDefault.space.PX_12, height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
({ borderWidth: 2, borderColor: nativeDefault.colors.STATUS_ONLINE, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
size12 = { width: 36, height: nativeDefault.space.PX_4 };
rect2 = { top: "r", bottom: nativeDefault.space.PX_6, left: nativeDefault.space.PX_6 };
size13 = { width: 20, height: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.TEXT_OVERLAY_LIGHT };
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL });
({ flex: 1, gap: nativeDefault.space.PX_6 });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, opacity: 0.6 });
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function Line(style) {
  const obj = react2;
  const cResult = obj.c(3);
  style = style.style;
  const tmp2 = closure_7();
  if (cResult[0] === style) {
    let tmp3;
    if (cResult[1] === tmp2.line) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { style: items };
  items = [tmp2.line, style];
  const tmp4 = hasOwnProperty(React3, obj2);
  cResult[0] = style;
  cResult[1] = tmp2.line;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function Line(style) {
  style = style.style;
  const obj = { style: items };
  items = [closure_7().line, style];
  return hasOwnProperty(React3, obj);
});
let closure_9 = ["68%", "24%", "12%"];
ReactCompilerGating = ReactCompilerGating_mod;
let items = [{ left: 62, top: -3, height: 30 }, { left: 62, bottom: -3, height: 36 }, { left: 118, top: -3, height: 44 }, { left: 118, bottom: -3, height: 22 }];
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppsVisual(styles) {
  let _window;
  let first;
  let tmp2;
  let windowBar;
  let obj = styles(576);
  const cResult = obj.c(19);
  styles = styles.styles;
  ({ window: _window, windowBar } = styles);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [0, 1, 2];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== styles.windowDot) {
    const mapped = first.map((item) => {
      const obj = { style: styles.windowDot };
      return hasOwnProperty(React3, obj, item);
    });
    cResult[1] = styles.windowDot;
    cResult[2] = mapped;
    tmp2 = mapped;
  } else {
    tmp2 = cResult[2];
  }
  if (cResult[3] === styles.windowBar) {
    let tmp4;
    let tmp6;
    if (cResult[4] === tmp2) {
      tmp4 = cResult[5];
    }
    if (cResult[6] !== styles.lineTitle) {
      let obj2 = { style: styles.lineTitle };
      const tmp9 = closure_5(closure_8, obj2);
      cResult[6] = styles.lineTitle;
      cResult[7] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[7];
    }
    if (cResult[8] === styles.pollFill) {
      if (cResult[9] === styles.pollFillWinner) {
        if (cResult[10] === styles.pollLabel) {
          if (cResult[11] === styles.pollLabelWinner) {
            let tmp10;
            if (cResult[12] === styles.pollOption) {
              tmp10 = cResult[13];
            }
            if (cResult[14] === styles.window) {
              if (cResult[15] === tmp4) {
                if (cResult[16] === tmp6) {
                  let tmp13;
                  if (cResult[17] === tmp10) {
                    tmp13 = cResult[18];
                  }
                  return tmp13;
                }
              }
            }
            let obj3 = { style: _window, children: items1 };
            items1 = [tmp4, tmp6, tmp10];
            const tmp16 = closure_6(closure_4, obj3);
            cResult[14] = styles.window;
            cResult[15] = tmp4;
            cResult[16] = tmp6;
            cResult[17] = tmp10;
            cResult[18] = tmp16;
            tmp13 = tmp16;
          }
        }
      }
    }
    const mapped1 = closure_9.map((width, index) => {
      items = [styles.pollFill, , ];
      const obj = { style: styles.pollOption, children: items1 };
      const obj2 = { width };
      items[1] = obj2;
      let pollFillWinner = tmp5;
      const tmp = metroRequire;
      if (0 === index) {
        pollFillWinner = tmp3.pollFillWinner;
      }
      items[2] = pollFillWinner;
      items1 = [hasOwnProperty(React3, { style: items }), , ];
      let tmp4Result = null;
      if (0 === index) {
        const obj3 = { size: "xxs", color: nativeDefault.colors.ICON_BRAND };
        const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
        tmp4Result = tmp4(CircleCheckIcon, obj3);
      }
      items1[1] = tmp4Result;
      const obj4 = { style: 0 === index ? styles.pollLabelWinner : styles.pollLabel };
      items1[2] = hasOwnProperty(closure_8, obj4);
      return tmp(React3, obj, index);
    });
    cResult[8] = styles.pollFill;
    cResult[9] = styles.pollFillWinner;
    cResult[10] = styles.pollLabel;
    cResult[11] = styles.pollLabelWinner;
    cResult[12] = styles.pollOption;
    cResult[13] = mapped1;
    tmp10 = mapped1;
  }
  const tmp5 = closure_5(closure_4, { style: windowBar, children: tmp2 });
  cResult[3] = styles.windowBar;
  cResult[4] = tmp2;
  cResult[5] = tmp5;
  tmp4 = tmp5;
}) : (function AppsVisual(styles) {
  styles = styles.styles;
  let obj = { style: styles.window, children: items1 };
  let obj2 = {
    style: styles.windowBar,
    children: items.map((item) => {
      const obj = { style: styles.windowDot };
      return hasOwnProperty(React3, obj, item);
    })
  };
  items = [0, 1, 2];
  items1 = [closure_5(closure_4, obj2), , ];
  let obj3 = { style: styles.lineTitle };
  items1[1] = closure_5(closure_8, obj3);
  items1[2] = closure_9.map((width, index) => {
    items = [styles.pollFill, , ];
    const obj = { style: styles.pollOption, children: items1 };
    const obj2 = { width };
    items[1] = obj2;
    let pollFillWinner = tmp5;
    const tmp = metroRequire;
    if (0 === index) {
      pollFillWinner = tmp3.pollFillWinner;
    }
    items[2] = pollFillWinner;
    items1 = [hasOwnProperty(React3, { style: items }), , ];
    let tmp4Result = null;
    if (0 === index) {
      const obj3 = { size: "xxs", color: nativeDefault.colors.ICON_BRAND };
      const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
      tmp4Result = tmp4(CircleCheckIcon, obj3);
    }
    items1[1] = tmp4Result;
    const obj4 = { style: 0 === index ? styles.pollLabelWinner : styles.pollLabel };
    items1[2] = hasOwnProperty(closure_8, obj4);
    return tmp(React3, obj, index);
  });
  return closure_6(closure_4, obj);
});
let items1 = [nativeDefault.unsafe_rawColors.BRAND_500, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
let items2 = [nativeDefault.unsafe_rawColors.BLUE_600, nativeDefault.unsafe_rawColors.ORANGE_360];
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function GamesVisual(styles) {
  let first;
  let items5;
  let items6;
  let tmp10;
  let tmp14;
  let tmp17;
  let tmp21;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp30;
  let tmp34;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp45;
  let tmp5;
  let tmp9;
  let obj = styles(576);
  const cResult = obj.c(33);
  styles = styles.styles;
  const gameCanvas = styles.gameCanvas;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const rect = { top: 30, left: 16, width: 32 };
    cResult[0] = rect;
    first = rect;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== styles.cloud) {
    const obj2 = { style: items };
    items = [styles.cloud, first];
    const tmp8 = closure_5(closure_4, obj2);
    cResult[1] = styles.cloud;
    cResult[2] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const rect1 = { top: 64, left: 80, width: 24 };
    cResult[3] = rect1;
    tmp9 = rect1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== styles.cloud) {
    const obj3 = { style: items1 };
    items1 = [styles.cloud, tmp9];
    const tmp13 = closure_5(closure_4, obj3);
    cResult[4] = styles.cloud;
    cResult[5] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== styles.pipe) {
    const mapped = items.map((item, index) => {
      const obj = { style: items };
      items = [styles.pipe, item];
      return hasOwnProperty(React3, obj, index);
    });
    cResult[6] = styles.pipe;
    cResult[7] = mapped;
    tmp14 = mapped;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] !== styles.player) {
    const obj4 = { style: styles.player };
    const tmp20 = closure_5(closure_4, obj4);
    cResult[8] = styles.player;
    cResult[9] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { left: nativeDefault.space.PX_6 };
    cResult[10] = obj5;
    tmp21 = obj5;
  } else {
    tmp21 = cResult[10];
  }
  if (cResult[11] !== styles.pill) {
    items2 = [styles.pill, tmp21];
    cResult[11] = styles.pill;
    cResult[12] = items2;
    tmp23 = items2;
  } else {
    tmp23 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    const TrophyIcon = tmp(9344).TrophyIcon;
    const tmp28 = closure_5(TrophyIcon, obj6);
    const tmp29 = closure_5(styles(5271).Text, { variant: "text-xxs/bold", color: "text-overlay-light", children: 128 });
    cResult[13] = tmp28;
    cResult[14] = tmp29;
    tmp25 = tmp29;
    tmp24 = tmp28;
  } else {
    tmp24 = cResult[13];
    tmp25 = cResult[14];
  }
  if (cResult[15] !== tmp23) {
    const obj7 = { style: tmp23, children: items3 };
    items3 = [tmp24, tmp25];
    const tmp33 = closure_6(closure_4, obj7);
    cResult[15] = tmp23;
    cResult[16] = tmp33;
    tmp30 = tmp33;
  } else {
    tmp30 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { right: nativeDefault.space.PX_6 };
    cResult[17] = obj8;
    tmp34 = obj8;
  } else {
    tmp34 = cResult[17];
  }
  if (cResult[18] !== styles.pill) {
    const items4 = [styles.pill, tmp34];
    cResult[18] = styles.pill;
    cResult[19] = items4;
    tmp36 = items4;
  } else {
    tmp36 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    const HeartIcon = tmp(9429).HeartIcon;
    const tmp42 = closure_5(HeartIcon, obj9);
    const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    const HeartIcon2 = tmp(9429).HeartIcon;
    const tmp43 = closure_5(HeartIcon2, obj10);
    const obj11 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    const HeartIcon3 = tmp(9429).HeartIcon;
    const tmp44 = closure_5(HeartIcon3, obj11);
    cResult[20] = tmp42;
    cResult[21] = tmp43;
    cResult[22] = tmp44;
    tmp39 = tmp44;
    tmp38 = tmp43;
    tmp37 = tmp42;
  } else {
    tmp37 = cResult[20];
    tmp38 = cResult[21];
    tmp39 = cResult[22];
  }
  if (cResult[23] !== tmp36) {
    const obj12 = { style: tmp36, children: items5 };
    items5 = [tmp37, tmp38, tmp39];
    const tmp48 = closure_6(closure_4, obj12);
    cResult[23] = tmp36;
    cResult[24] = tmp48;
    tmp45 = tmp48;
  } else {
    tmp45 = cResult[24];
  }
  if (cResult[25] === styles.gameCanvas) {
    if (cResult[26] === tmp30) {
      if (cResult[27] === tmp45) {
        if (cResult[28] === tmp5) {
          if (cResult[29] === tmp10) {
            if (cResult[30] === tmp14) {
              let tmp49;
              if (cResult[31] === tmp17) {
                tmp49 = cResult[32];
              }
              return tmp49;
            }
          }
        }
      }
    }
  }
  const obj13 = { style: gameCanvas, colors: items1, children: items6 };
  items6 = [tmp5, tmp10, tmp14, tmp17, tmp30, tmp45];
  const tmp50 = closure_6(LinearGradientDefault, obj13);
  cResult[25] = styles.gameCanvas;
  cResult[26] = tmp30;
  cResult[27] = tmp45;
  cResult[28] = tmp5;
  cResult[29] = tmp10;
  cResult[30] = tmp14;
  cResult[31] = tmp17;
  cResult[32] = tmp50;
  tmp49 = tmp50;
}) : (function GamesVisual(styles) {
  let items4;
  let items5;
  let items6;
  styles = styles.styles;
  let obj = { style: styles.gameCanvas, colors: items1, children: items1 };
  const obj2 = { style: items };
  items = [styles.cloud, { top: 30, left: 16, width: 32 }];
  items1 = [, , , , , ];
  const tmp = LinearGradientDefault;
  items1[0] = closure_5(closure_4, obj2);
  const obj3 = { style: items2 };
  items2 = [styles.cloud, { top: 64, left: 80, width: 24 }];
  items1[1] = closure_5(closure_4, obj3);
  items1[2] = items.map((item, index) => {
    const obj = { style: items };
    items = [styles.pipe, item];
    return hasOwnProperty(React3, obj, index);
  });
  const obj4 = { style: styles.player };
  items1[3] = closure_5(closure_4, obj4);
  const obj5 = { style: items3, children: items4 };
  items3 = [styles.pill, { left: nativeDefault.space.PX_6 }];
  const obj7 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
  ({ left: nativeDefault.space.PX_6 });
  const TrophyIcon = styles(9344).TrophyIcon;
  items4 = [closure_5(TrophyIcon, obj7), closure_5(styles(5271).Text, { variant: "text-xxs/bold", color: "text-overlay-light", children: 128 })];
  items1[4] = closure_6(closure_4, obj5);
  const obj8 = { style: items5, children: items6 };
  items5 = [styles.pill, { right: nativeDefault.space.PX_6 }];
  const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
  ({ right: nativeDefault.space.PX_6 });
  const HeartIcon = styles(9429).HeartIcon;
  items6 = [closure_5(HeartIcon, obj10), , ];
  const obj11 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
  const HeartIcon2 = styles(9429).HeartIcon;
  items6[1] = closure_5(HeartIcon2, obj11);
  const obj12 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
  const HeartIcon3 = styles(9429).HeartIcon;
  items6[2] = closure_5(HeartIcon3, obj12);
  items1[5] = closure_6(closure_4, obj8);
  return closure_6(tmp, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let items3 = [{ height: "60%", down: false }, { height: "35%", down: true }, { height: "85%", down: false }, { height: "60%", down: false }, { height: "35%", down: true }, { height: "100%", down: false }];
const obj36 = {
  apps: tmp8,
  games: tmp9,
  bots: ReactCompilerGating.isReactCompilerEnabled() ? (function BotsVisual(styles) {
    let intl;
    let items5;
    let tmp4;
    let tmp8;
    const obj = react2;
    const cResult = obj.c(40);
    styles = styles.styles;
    if (cResult[0] !== styles.joinArrow) {
      const obj2 = { style: styles.joinArrow };
      const tmp7 = hasOwnProperty(React3, obj2);
      cResult[0] = styles.joinArrow;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== styles.lineMedium) {
      const obj3 = { style: styles.lineMedium };
      const tmp11 = hasOwnProperty(closure_8, obj3);
      cResult[2] = styles.lineMedium;
      cResult[3] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === styles.joinRow) {
      if (cResult[5] === tmp4) {
        let tmp12;
        if (cResult[6] === tmp8) {
          tmp12 = cResult[7];
        }
        if (cResult[8] === styles.avatar) {
          let tmp14;
          let tmp16;
          let tmp20;
          let tmp24;
          let tmp28;
          let tmp32;
          if (cResult[9] === styles.avatarBrand) {
            tmp14 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
            const RobotIcon = tmp(12247).RobotIcon;
            const tmp19 = hasOwnProperty(RobotIcon, obj4);
            cResult[11] = tmp19;
            tmp16 = tmp19;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] !== tmp14) {
            const obj5 = { style: tmp14, children: tmp16 };
            const tmp23 = hasOwnProperty(React3, obj5);
            cResult[12] = tmp14;
            cResult[13] = tmp23;
            tmp20 = tmp23;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] !== styles.lineName) {
            const obj6 = { style: styles.lineName };
            const tmp27 = hasOwnProperty(closure_8, obj6);
            cResult[14] = styles.lineName;
            cResult[15] = tmp27;
            tmp24 = tmp27;
          } else {
            tmp24 = cResult[15];
          }
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { variant: "text-xxs/bold", color: "text-overlay-light", children: intl.string(_modDef3864.VlgiLf) };
            const Text = tmp(5271).Text;
            intl = tmp(1125).intl;
            const tmp31 = hasOwnProperty(Text, obj7);
            cResult[16] = tmp31;
            tmp28 = tmp31;
          } else {
            tmp28 = cResult[16];
          }
          if (cResult[17] !== styles.botTag) {
            const obj8 = { style: styles.botTag, children: tmp28 };
            const tmp35 = hasOwnProperty(React3, obj8);
            cResult[17] = styles.botTag;
            cResult[18] = tmp35;
            tmp32 = tmp35;
          } else {
            tmp32 = cResult[18];
          }
          if (cResult[19] === styles.messageHeader) {
            if (cResult[20] === tmp24) {
              let tmp36;
              let tmp40;
              let tmp44;
              if (cResult[21] === tmp32) {
                tmp36 = cResult[22];
              }
              if (cResult[23] !== styles.lineLong) {
                const obj9 = { style: styles.lineLong };
                const tmp43 = hasOwnProperty(closure_8, obj9);
                cResult[23] = styles.lineLong;
                cResult[24] = tmp43;
                tmp40 = tmp43;
              } else {
                tmp40 = cResult[24];
              }
              if (cResult[25] !== styles.lineMedium) {
                const obj10 = { style: styles.lineMedium };
                const tmp47 = hasOwnProperty(closure_8, obj10);
                cResult[25] = styles.lineMedium;
                cResult[26] = tmp47;
                tmp44 = tmp47;
              } else {
                tmp44 = cResult[26];
              }
              if (cResult[27] === styles.messageBody) {
                if (cResult[28] === tmp36) {
                  if (cResult[29] === tmp40) {
                    let tmp48;
                    if (cResult[30] === tmp44) {
                      tmp48 = cResult[31];
                    }
                    if (cResult[32] === styles.message) {
                      if (cResult[33] === tmp48) {
                        let tmp52;
                        if (cResult[34] === tmp20) {
                          tmp52 = cResult[35];
                        }
                        if (cResult[36] === styles.window) {
                          if (cResult[37] === tmp52) {
                            let tmp56;
                            if (cResult[38] === tmp12) {
                              tmp56 = cResult[39];
                            }
                            return tmp56;
                          }
                        }
                        const obj11 = { style: styles.window, children: items };
                        items = [tmp12, tmp52];
                        const tmp59 = metroRequire(React3, obj11);
                        cResult[36] = styles.window;
                        cResult[37] = tmp52;
                        cResult[38] = tmp12;
                        cResult[39] = tmp59;
                        tmp56 = tmp59;
                      }
                    }
                    const obj12 = { style: styles.message, children: items1 };
                    items1 = [tmp20, tmp48];
                    const tmp55 = metroRequire(React3, obj12);
                    cResult[32] = styles.message;
                    cResult[33] = tmp48;
                    cResult[34] = tmp20;
                    cResult[35] = tmp55;
                    tmp52 = tmp55;
                  }
                }
              }
              const obj13 = { style: styles.messageBody, children: items2 };
              items2 = [tmp36, tmp40, tmp44];
              const tmp51 = metroRequire(React3, obj13);
              cResult[27] = styles.messageBody;
              cResult[28] = tmp36;
              cResult[29] = tmp40;
              cResult[30] = tmp44;
              cResult[31] = tmp51;
              tmp48 = tmp51;
            }
          }
          const obj14 = { style: styles.messageHeader, children: items3 };
          items3 = [tmp24, tmp32];
          const tmp39 = metroRequire(React3, obj14);
          cResult[19] = styles.messageHeader;
          cResult[20] = tmp24;
          cResult[21] = tmp32;
          cResult[22] = tmp39;
          tmp36 = tmp39;
        }
        const items4 = [, ];
        ({ avatar: arr2[0], avatarBrand: arr2[1] } = styles);
        cResult[8] = styles.avatar;
        cResult[9] = styles.avatarBrand;
        cResult[10] = items4;
        tmp14 = items4;
      }
    }
    const obj15 = { style: styles.joinRow, children: items5 };
    items5 = [tmp4, tmp8];
    const tmp13 = metroRequire(React3, obj15);
    cResult[4] = styles.joinRow;
    cResult[5] = tmp4;
    cResult[6] = tmp8;
    cResult[7] = tmp13;
    tmp12 = tmp13;
  }) : (function BotsVisual(styles) {
    let RobotIcon;
    let Text;
    let intl;
    let items4;
    let items5;
    let obj12;
    let obj7;
    styles = styles.styles;
    const obj2 = { style: styles.joinRow, children: items };
    items = [, ];
    const obj = { style: styles.window, children: items1 };
    const obj3 = { style: styles.joinArrow };
    items[0] = hasOwnProperty(React3, obj3);
    const obj4 = { style: styles.lineMedium };
    items[1] = hasOwnProperty(closure_8, obj4);
    items1 = [metroRequire(React3, obj2), ];
    const obj5 = { style: styles.message, children: items3 };
    const obj6 = { style: items2, children: hasOwnProperty(RobotIcon, obj7) };
    items2 = [, ];
    ({ avatar: arr3[0], avatarBrand: arr3[1] } = styles);
    obj7 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    RobotIcon = RobotIcon2.RobotIcon;
    items3 = [hasOwnProperty(React3, obj6), ];
    const obj9 = { style: styles.messageHeader, children: items4 };
    items4 = [, ];
    const obj10 = { style: styles.lineName };
    const obj8 = { style: styles.messageBody, children: items5 };
    items4[0] = hasOwnProperty(closure_8, obj10);
    const obj11 = { style: styles.botTag, children: hasOwnProperty(Text, obj12) };
    obj12 = { variant: "text-xxs/bold", color: "text-overlay-light", children: intl.string(_modDef3864.VlgiLf) };
    Text = Text_Text.Text;
    intl = intl3.intl;
    items4[1] = hasOwnProperty(React3, obj11);
    items5 = [metroRequire(React3, obj9), , ];
    const obj13 = { style: styles.lineLong };
    items5[1] = hasOwnProperty(closure_8, obj13);
    const obj14 = { style: styles.lineMedium };
    items5[2] = hasOwnProperty(closure_8, obj14);
    items3[1] = metroRequire(React3, obj8);
    items1[1] = metroRequire(React3, obj5);
    return metroRequire(React3, obj);
  }),
  "profile-widgets": ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileWidgetsVisual(styles) {
    let items4;
    let items5;
    let stats;
    let statsWidget;
    let tmp5;
    let tmp = dependencyMap;
    let obj = styles(576);
    const cResult = obj.c(42);
    styles = styles.styles;
    let obj2 = styles(5289);
    const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BRAND);
    if (cResult[0] !== token) {
      items = [token, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
      cResult[0] = token;
      cResult[1] = items;
      tmp5 = items;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] === styles.profile) {
      let tmp6;
      let tmp9;
      let tmp8;
      if (cResult[3] === styles.window) {
        tmp6 = cResult[4];
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0.5 };
        const point1 = { x: 1, y: 0.5 };
        cResult[5] = point;
        cResult[6] = point1;
        tmp9 = point1;
        tmp8 = point;
      } else {
        tmp8 = cResult[5];
        tmp9 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        let tmp10;
        if (cResult[8] === styles.profileBanner) {
          tmp10 = cResult[9];
        }
        if (cResult[10] === styles.avatar) {
          let tmp14;
          let tmp18;
          let arr4;
          if (cResult[11] === styles.profileAvatar) {
            tmp14 = cResult[12];
          }
          if (cResult[13] !== styles.lineName) {
            let obj3 = { style: styles.lineName };
            const tmp21 = closure_5(closure_8, obj3);
            cResult[13] = styles.lineName;
            cResult[14] = tmp21;
            tmp18 = tmp21;
          } else {
            tmp18 = cResult[14];
          }
          const _Symbol2 = Symbol;
          ({ statsWidget, stats } = styles);
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            items1 = [0, 1];
            cResult[15] = items1;
            arr4 = items1;
          } else {
            arr4 = cResult[15];
          }
          if (cResult[16] === styles.stat) {
            if (cResult[17] === styles.statLabel) {
              let tmp22;
              if (cResult[18] === styles.statValue) {
                tmp22 = cResult[19];
              }
              if (cResult[20] === styles.stats) {
                let tmp24;
                if (cResult[21] === tmp22) {
                  tmp24 = cResult[22];
                }
                if (cResult[23] === styles.chartBar) {
                  let tmp29;
                  if (cResult[24] === styles.chartBarDown) {
                    tmp29 = cResult[25];
                  }
                  if (cResult[26] === styles.chart) {
                    let tmp32;
                    if (cResult[27] === tmp29) {
                      tmp32 = cResult[28];
                    }
                    if (cResult[29] === styles.statsWidget) {
                      if (cResult[30] === tmp24) {
                        let tmp36;
                        if (cResult[31] === tmp32) {
                          tmp36 = cResult[32];
                        }
                        if (cResult[33] === styles.profileBody) {
                          if (cResult[34] === tmp36) {
                            if (cResult[35] === tmp14) {
                              let tmp40;
                              if (cResult[36] === tmp18) {
                                tmp40 = cResult[37];
                              }
                              if (cResult[38] === tmp40) {
                                if (cResult[39] === tmp6) {
                                  let tmp44;
                                  if (cResult[40] === tmp10) {
                                    tmp44 = cResult[41];
                                  }
                                  return tmp44;
                                }
                              }
                              const obj4 = { style: tmp6, children: items2 };
                              items2 = [tmp10, tmp40];
                              const tmp47 = closure_6(closure_4, obj4);
                              cResult[38] = tmp40;
                              cResult[39] = tmp6;
                              cResult[40] = tmp10;
                              cResult[41] = tmp47;
                              tmp44 = tmp47;
                            }
                          }
                        }
                        const obj5 = { style: tmp13, children: items3 };
                        items3 = [tmp14, tmp18, tmp36];
                        const tmp43 = closure_6(closure_4, obj5);
                        cResult[33] = styles.profileBody;
                        cResult[34] = tmp36;
                        cResult[35] = tmp14;
                        cResult[36] = tmp18;
                        cResult[37] = tmp43;
                        tmp40 = tmp43;
                      }
                    }
                    const obj6 = { style: statsWidget, children: items4 };
                    items4 = [tmp24, tmp32];
                    const tmp39 = closure_6(closure_4, obj6);
                    cResult[29] = styles.statsWidget;
                    cResult[30] = tmp24;
                    cResult[31] = tmp32;
                    cResult[32] = tmp39;
                    tmp36 = tmp39;
                  }
                  const obj7 = { style: tmp28, children: tmp29 };
                  const tmp35 = closure_5(closure_4, obj7);
                  cResult[26] = styles.chart;
                  cResult[27] = tmp29;
                  cResult[28] = tmp35;
                  tmp32 = tmp35;
                }
                const mapped = items3.map((down, index) => {
                  let chartBarDown = down.down;
                  const style = [styles.chartBar, { height: down.height }, ];
                  const tmp = hasOwnProperty;
                  const tmp2 = React3;
                  if (chartBarDown) {
                    chartBarDown = styles.chartBarDown;
                  }
                  style[2] = chartBarDown;
                  return tmp(tmp2, { style }, index);
                });
                cResult[23] = styles.chartBar;
                cResult[24] = styles.chartBarDown;
                cResult[25] = mapped;
                tmp29 = mapped;
              }
              const obj8 = { style: stats, children: tmp22 };
              const tmp27 = closure_5(closure_4, obj8);
              cResult[20] = styles.stats;
              cResult[21] = tmp22;
              cResult[22] = tmp27;
              tmp24 = tmp27;
            }
          }
          const mapped1 = arr4.map((item) => {
            const obj = { style: styles.stat, children: items };
            items = [, ];
            const obj2 = { style: styles.statValue };
            items[0] = hasOwnProperty(closure_8, obj2);
            const obj3 = { style: styles.statLabel };
            items[1] = hasOwnProperty(closure_8, obj3);
            return metroRequire(React3, obj, item);
          });
          cResult[16] = styles.stat;
          cResult[17] = styles.statLabel;
          cResult[18] = styles.statValue;
          cResult[19] = mapped1;
          tmp22 = mapped1;
        }
        const obj9 = { style: items5 };
        items5 = [, ];
        ({ avatar: arr3[0], profileAvatar: arr3[1] } = styles);
        const tmp17 = closure_5(closure_4, obj9);
        cResult[10] = styles.avatar;
        cResult[11] = styles.profileAvatar;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
      const obj10 = { style: styles.profileBanner, colors: tmp5, start: tmp8, end: tmp9 };
      const tmp12 = closure_5(LinearGradientDefault, obj10);
      cResult[7] = tmp5;
      cResult[8] = styles.profileBanner;
      cResult[9] = tmp12;
      tmp10 = tmp12;
    }
    const items6 = [, ];
    ({ window: arr2[0], profile: arr2[1] } = styles);
    cResult[2] = styles.profile;
    cResult[3] = styles.window;
    cResult[4] = items6;
    tmp6 = items6;
  }) : (function ProfileWidgetsVisual(styles) {
    let items4;
    let items5;
    let items6;
    styles = styles.styles;
    let token;
    let obj = styles(5289);
    token = obj.useToken(token(587).colors.BACKGROUND_BRAND);
    items = [token];
    let obj2 = { style: items1, children: items2 };
    items1 = [, ];
    ({ window: arr2[0], profile: arr2[1] } = styles);
    const memo = react.useMemo(() => {
      items = [token, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
      return items;
    }, items);
    let obj3 = { style: styles.profileBanner, colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } };
    items2 = [closure_5(token(5295), obj3), ];
    const obj5 = { style: items3 };
    items3 = [, ];
    const obj4 = { style: styles.profileBody, children: items4 };
    ({ avatar: arr4[0], profileAvatar: arr4[1] } = styles);
    items4 = [closure_5(closure_4, obj5), , ];
    const obj6 = { style: styles.lineName };
    items4[1] = closure_5(closure_8, obj6);
    const obj7 = { style: styles.statsWidget, children: items6 };
    const obj8 = {
      style: styles.stats,
      children: items5.map((item) => {
        const obj = { style: styles.stat, children: items };
        items = [, ];
        const obj2 = { style: styles.statValue };
        items[0] = hasOwnProperty(closure_8, obj2);
        const obj3 = { style: styles.statLabel };
        items[1] = hasOwnProperty(closure_8, obj3);
        return metroRequire(React3, obj, item);
      })
    };
    items5 = [0, 1];
    items6 = [closure_5(closure_4, obj8), ];
    const obj9 = {
      style: styles.chart,
      children: items3.map((down, index) => {
        let chartBarDown = down.down;
        const style = [styles.chartBar, { height: down.height }, ];
        const tmp = hasOwnProperty;
        const tmp2 = React3;
        if (chartBarDown) {
          chartBarDown = styles.chartBarDown;
        }
        style[2] = chartBarDown;
        return tmp(tmp2, { style }, index);
      })
    };
    items6[1] = closure_5(closure_4, obj9);
    items4[2] = closure_6(closure_4, obj7);
    items2[1] = closure_6(closure_4, obj4);
    return closure_6(closure_4, obj2);
  }),
  "overlay-widgets": ReactCompilerGating.isReactCompilerEnabled() ? (function OverlayWidgetsVisual(styles) {
    let arr;
    let tmp12;
    let tmp4;
    let tmp8;
    let tmp = styles;
    let obj = styles(576);
    const cResult = obj.c(31);
    styles = styles.styles;
    const scene = styles.scene;
    if (cResult[0] !== styles.sceneHills) {
      let obj2 = { style: styles.sceneHills };
      const tmp7 = closure_5(closure_4, obj2);
      cResult[0] = styles.sceneHills;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== styles.sceneScrim) {
      const obj3 = { style: styles.sceneScrim };
      const tmp11 = closure_5(closure_4, obj3);
      cResult[2] = styles.sceneScrim;
      cResult[3] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== styles.crosshair) {
      const obj4 = { style: styles.crosshair };
      const tmp15 = closure_5(closure_4, obj4);
      cResult[4] = styles.crosshair;
      cResult[5] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[5];
    }
    const overlayPanel = styles.overlayPanel;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      items = [0, 1, 2];
      cResult[6] = items;
      arr = items;
    } else {
      arr = cResult[6];
    }
    if (cResult[7] === styles.overlayAvatar) {
      if (cResult[8] === styles.overlayMember) {
        if (cResult[9] === styles.overlayName) {
          let tmp16;
          if (cResult[10] === styles.speaking) {
            tmp16 = cResult[11];
          }
          if (cResult[12] === styles.overlayPanel) {
            let tmp18;
            if (cResult[13] === tmp16) {
              tmp18 = cResult[14];
            }
            if (cResult[15] === styles.overlayTimer) {
              let tmp22;
              let tmp23;
              let tmp27;
              if (cResult[16] === styles.pill) {
                tmp22 = cResult[17];
              }
              const _Symbol = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
                const ClockIcon = tmp(5729).ClockIcon;
                const tmp26 = closure_5(ClockIcon, obj5);
                cResult[18] = tmp26;
                tmp23 = tmp26;
              } else {
                tmp23 = cResult[18];
              }
              if (cResult[19] !== styles.overlayTimerValue) {
                const obj6 = { style: styles.overlayTimerValue };
                const tmp30 = closure_5(closure_8, obj6);
                cResult[19] = styles.overlayTimerValue;
                cResult[20] = tmp30;
                tmp27 = tmp30;
              } else {
                tmp27 = cResult[20];
              }
              if (cResult[21] === tmp27) {
                let tmp31;
                if (cResult[22] === tmp22) {
                  tmp31 = cResult[23];
                }
                if (cResult[24] === styles.scene) {
                  if (cResult[25] === tmp31) {
                    if (cResult[26] === tmp4) {
                      if (cResult[27] === tmp8) {
                        if (cResult[28] === tmp12) {
                          let tmp35;
                          if (cResult[29] === tmp18) {
                            tmp35 = cResult[30];
                          }
                          return tmp35;
                        }
                      }
                    }
                  }
                }
                const obj7 = { style: scene, colors: items2, children: items1 };
                items1 = [tmp4, tmp8, tmp12, tmp18, tmp31];
                const tmp39 = closure_6(LinearGradientDefault, obj7);
                cResult[24] = styles.scene;
                cResult[25] = tmp31;
                cResult[26] = tmp4;
                cResult[27] = tmp8;
                cResult[28] = tmp12;
                cResult[29] = tmp18;
                cResult[30] = tmp39;
                tmp35 = tmp39;
              }
              const obj8 = { style: tmp22, children: items2 };
              items2 = [tmp23, tmp27];
              const tmp34 = closure_6(closure_4, obj8);
              cResult[21] = tmp27;
              cResult[22] = tmp22;
              cResult[23] = tmp34;
              tmp31 = tmp34;
            }
            items3 = [, ];
            ({ pill: arr3[0], overlayTimer: arr3[1] } = styles);
            cResult[15] = styles.overlayTimer;
            cResult[16] = styles.pill;
            cResult[17] = items3;
            tmp22 = items3;
          }
          const obj9 = { style: overlayPanel, children: tmp16 };
          const tmp21 = closure_5(closure_4, obj9);
          cResult[12] = styles.overlayPanel;
          cResult[13] = tmp16;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
      }
    }
    const mapped = arr.map((item) => {
      items = [styles.overlayAvatar, ];
      let speaking = 0 === item;
      const obj = { style: styles.overlayMember, children: items1 };
      const tmp = metroRequire;
      if (speaking) {
        speaking = tmp3.speaking;
      }
      items[1] = speaking;
      items1 = [hasOwnProperty(React3, { style: items }), ];
      const obj2 = { style: styles.overlayName };
      items1[1] = hasOwnProperty(closure_8, obj2);
      return tmp(React3, obj, item);
    });
    cResult[7] = styles.overlayAvatar;
    cResult[8] = styles.overlayMember;
    cResult[9] = styles.overlayName;
    cResult[10] = styles.speaking;
    cResult[11] = mapped;
    tmp16 = mapped;
  }) : (function OverlayWidgetsVisual(styles) {
    styles = styles.styles;
    let obj = { style: styles.scene, colors: items2, children: items };
    let obj2 = { style: styles.sceneHills };
    let tmp = LinearGradientDefault;
    items = [closure_5(closure_4, obj2), , , , ];
    const obj3 = { style: styles.sceneScrim };
    items[1] = closure_5(closure_4, obj3);
    const obj4 = { style: styles.crosshair };
    items[2] = closure_5(closure_4, obj4);
    const obj5 = {
      style: styles.overlayPanel,
      children: items1.map((item) => {
        items = [styles.overlayAvatar, ];
        let speaking = 0 === item;
        const obj = { style: styles.overlayMember, children: items1 };
        const tmp = metroRequire;
        if (speaking) {
          speaking = tmp3.speaking;
        }
        items[1] = speaking;
        items1 = [hasOwnProperty(React3, { style: items }), ];
        const obj2 = { style: styles.overlayName };
        items1[1] = hasOwnProperty(closure_8, obj2);
        return tmp(React3, obj, item);
      })
    };
    items1 = [0, 1, 2];
    items[3] = closure_5(closure_4, obj5);
    const obj6 = { style: items2, children: items3 };
    items2 = [, ];
    ({ pill: arr3[0], overlayTimer: arr3[1] } = styles);
    const obj7 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    const ClockIcon = styles(5729).ClockIcon;
    items3 = [closure_5(ClockIcon, obj7), ];
    const obj8 = { style: styles.overlayTimerValue };
    items3[1] = closure_5(closure_8, obj8);
    items[4] = closure_6(closure_4, obj6);
    return closure_6(tmp, obj);
  }),
  automod: ReactCompilerGating.isReactCompilerEnabled() ? (function AutoModVisual(styles) {
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    let tmp4;
    let tmp8;
    const obj = react2;
    const cResult = obj.c(37);
    styles = styles.styles;
    if (cResult[0] !== styles.avatar) {
      const obj2 = { style: styles.avatar };
      const tmp7 = hasOwnProperty(React3, obj2);
      cResult[0] = styles.avatar;
      cResult[1] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== styles.lineName) {
      const obj3 = { style: styles.lineName };
      const tmp11 = hasOwnProperty(closure_8, obj3);
      cResult[2] = styles.lineName;
      cResult[3] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === styles.lineLong) {
      let tmp12;
      if (cResult[5] === styles.redacted) {
        tmp12 = cResult[6];
      }
      if (cResult[7] === styles.lineMedium) {
        let tmp14;
        if (cResult[8] === styles.redacted) {
          tmp14 = cResult[9];
        }
        if (cResult[10] === styles.messageBody) {
          if (cResult[11] === tmp8) {
            if (cResult[12] === tmp12) {
              let tmp18;
              if (cResult[13] === tmp14) {
                tmp18 = cResult[14];
              }
              if (cResult[15] === styles.message) {
                if (cResult[16] === tmp4) {
                  let tmp22;
                  let tmp27;
                  if (cResult[17] === tmp18) {
                    tmp22 = cResult[18];
                  }
                  const _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj4 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
                    const ShieldIcon = ShieldIcon2.ShieldIcon;
                    const tmp30 = hasOwnProperty(ShieldIcon, obj4);
                    cResult[19] = tmp30;
                    tmp27 = tmp30;
                  } else {
                    tmp27 = cResult[19];
                  }
                  if (cResult[20] === styles.lineCritical) {
                    let tmp31;
                    if (cResult[21] === styles.lineMedium) {
                      tmp31 = cResult[22];
                    }
                    if (cResult[23] === styles.lineCritical) {
                      let tmp35;
                      if (cResult[24] === styles.lineShort) {
                        tmp35 = cResult[25];
                      }
                      if (cResult[26] === styles.blockedText) {
                        if (cResult[27] === tmp31) {
                          let tmp39;
                          if (cResult[28] === tmp35) {
                            tmp39 = cResult[29];
                          }
                          if (cResult[30] === styles.blockedNotice) {
                            let tmp43;
                            if (cResult[31] === tmp39) {
                              tmp43 = cResult[32];
                            }
                            if (cResult[33] === styles.window) {
                              if (cResult[34] === tmp43) {
                                let tmp47;
                                if (cResult[35] === tmp22) {
                                  tmp47 = cResult[36];
                                }
                                return tmp47;
                              }
                            }
                            const obj5 = { style: styles.window, children: items };
                            items = [tmp22, tmp43];
                            const tmp50 = metroRequire(React3, obj5);
                            cResult[33] = styles.window;
                            cResult[34] = tmp43;
                            cResult[35] = tmp22;
                            cResult[36] = tmp50;
                            tmp47 = tmp50;
                          }
                          const obj6 = { style: styles.blockedNotice, children: items1 };
                          items1 = [tmp27, tmp39];
                          const tmp46 = metroRequire(React3, obj6);
                          cResult[30] = styles.blockedNotice;
                          cResult[31] = tmp39;
                          cResult[32] = tmp46;
                          tmp43 = tmp46;
                        }
                      }
                      const obj7 = { style: styles.blockedText, children: items2 };
                      items2 = [tmp31, tmp35];
                      const tmp42 = metroRequire(React3, obj7);
                      cResult[26] = styles.blockedText;
                      cResult[27] = tmp31;
                      cResult[28] = tmp35;
                      cResult[29] = tmp42;
                      tmp39 = tmp42;
                    }
                    const obj8 = { style: items3 };
                    items3 = [, ];
                    ({ lineShort: arr6[0], lineCritical: arr6[1] } = styles);
                    const tmp38 = hasOwnProperty(closure_8, obj8);
                    cResult[23] = styles.lineCritical;
                    cResult[24] = styles.lineShort;
                    cResult[25] = tmp38;
                    tmp35 = tmp38;
                  }
                  const obj9 = { style: items4 };
                  items4 = [, ];
                  ({ lineMedium: arr5[0], lineCritical: arr5[1] } = styles);
                  const tmp34 = hasOwnProperty(closure_8, obj9);
                  cResult[20] = styles.lineCritical;
                  cResult[21] = styles.lineMedium;
                  cResult[22] = tmp34;
                  tmp31 = tmp34;
                }
              }
              const obj10 = { style: styles.message, children: items5 };
              items5 = [tmp4, tmp18];
              const tmp25 = metroRequire(React3, obj10);
              cResult[15] = styles.message;
              cResult[16] = tmp4;
              cResult[17] = tmp18;
              cResult[18] = tmp25;
              tmp22 = tmp25;
            }
          }
        }
        const obj11 = { style: styles.messageBody, children: items6 };
        items6 = [tmp8, tmp12, tmp14];
        const tmp21 = metroRequire(React3, obj11);
        cResult[10] = styles.messageBody;
        cResult[11] = tmp8;
        cResult[12] = tmp12;
        cResult[13] = tmp14;
        cResult[14] = tmp21;
        tmp18 = tmp21;
      }
      const obj12 = { style: items7 };
      items7 = [, ];
      ({ lineMedium: arr2[0], redacted: arr2[1] } = styles);
      const tmp17 = hasOwnProperty(closure_8, obj12);
      cResult[7] = styles.lineMedium;
      cResult[8] = styles.redacted;
      cResult[9] = tmp17;
      tmp14 = tmp17;
    }
    const obj13 = { style: items8 };
    items8 = [, ];
    ({ lineLong: arr[0], redacted: arr[1] } = styles);
    const tmp13 = hasOwnProperty(closure_8, obj13);
    cResult[4] = styles.lineLong;
    cResult[5] = styles.redacted;
    cResult[6] = tmp13;
    tmp12 = tmp13;
  }) : (function AutoModVisual(styles) {
    let items4;
    let items5;
    let items6;
    let items7;
    let items8;
    styles = styles.styles;
    const obj2 = { style: styles.message, children: items };
    items = [, ];
    const obj = { style: styles.window, children: items4 };
    const obj3 = { style: styles.avatar };
    items[0] = hasOwnProperty(React3, obj3);
    const obj4 = { style: styles.messageBody, children: items1 };
    items1 = [, , ];
    const obj5 = { style: styles.lineName };
    items1[0] = hasOwnProperty(closure_8, obj5);
    const obj6 = { style: items2 };
    items2 = [, ];
    ({ lineLong: arr3[0], redacted: arr3[1] } = styles);
    items1[1] = hasOwnProperty(closure_8, obj6);
    const obj7 = { style: items3 };
    items3 = [, ];
    ({ lineMedium: arr4[0], redacted: arr4[1] } = styles);
    items1[2] = hasOwnProperty(closure_8, obj7);
    items[1] = metroRequire(React3, obj4);
    items4 = [metroRequire(React3, obj2), ];
    const obj8 = { style: styles.blockedNotice, children: items5 };
    const obj9 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    const ShieldIcon = ShieldIcon2.ShieldIcon;
    items5 = [hasOwnProperty(ShieldIcon, obj9), ];
    const obj11 = { style: items6 };
    items6 = [, ];
    const obj10 = { style: styles.blockedText, children: items7 };
    ({ lineMedium: arr7[0], lineCritical: arr7[1] } = styles);
    items7 = [hasOwnProperty(closure_8, obj11), ];
    const obj12 = { style: items8 };
    items8 = [, ];
    ({ lineShort: arr9[0], lineCritical: arr9[1] } = styles);
    items7[1] = hasOwnProperty(closure_8, obj12);
    items5[1] = metroRequire(React3, obj10);
    items4[1] = metroRequire(React3, obj8);
    return metroRequire(React3, obj);
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShowcaseVisual(styles) {
  const obj = react2;
  const cResult = obj.c(3);
  styles = styles.styles;
  if (cResult[0] === obj36[styles.id]) {
    let tmp3;
    if (cResult[1] === styles) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = hasOwnProperty(obj36[styles.id], { styles });
  cResult[0] = obj36[styles.id];
  cResult[1] = styles;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function ShowcaseVisual(styles) {
  const obj = { styles: styles.styles };
  return hasOwnProperty(obj36[styles.id], obj);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHomeFeatureList() {
  let style;
  let styles;
  let tmp7;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(13);
  const tmp4 = closure_7();
  const tmp = _require;
  _require = tmp4;
  let obj2 = require("useToken");
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const card = tmp4.card;
  if (cResult[0] !== token) {
    let obj3 = _modDef683(token);
    const alphaResult = obj3.alpha(0.6);
    const cssResult = alphaResult.css();
    cResult[0] = token;
    cResult[1] = cssResult;
    tmp7 = cssResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp7) {
    let obj4 = { backgroundColor: tmp7 };
    cResult[2] = tmp7;
    cResult[3] = obj4;
    tmp9 = obj4;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.card) {
    let tmp10;
    if (cResult[5] === tmp9) {
      tmp10 = cResult[6];
    }
    importDefault = tmp10;
    if (cResult[7] === tmp10) {
      let tmp12;
      if (cResult[8] === tmp4) {
        tmp12 = cResult[9];
      }
      if (cResult[10] === tmp4.list) {
        let tmp14;
        if (cResult[11] === tmp12) {
          tmp14 = cResult[12];
        }
        return tmp14;
      }
      let obj5 = { style: tmp11, children: tmp12 };
      const tmp17 = closure_5(closure_4, obj5);
      cResult[10] = tmp4.list;
      cResult[11] = tmp12;
      cResult[12] = tmp17;
      tmp14 = tmp17;
    }
    const prop = tmp(12794).CONJURE_HOME_SHOWCASE_TILES;
    const mapped = prop.map((id) => {
      let description;
      let intl;
      let intl2;
      let obj3;
      let title;
      id = id.id;
      const obj = { style, children: items };
      const obj2 = { style: styles.visual, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(closure_15, obj3) };
      obj3 = { id, styles };
      ({ title, description } = id);
      items = [hasOwnProperty(React3, obj2), ];
      const obj4 = { style: styles.caption, children: items1 };
      const obj5 = { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children: intl.string(title) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items1 = [hasOwnProperty(Text, obj5), ];
      const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: intl2.string(description) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items1[1] = hasOwnProperty(Text2, obj6);
      items[1] = metroRequire(React3, obj4);
      return metroRequire(React3, obj, id);
    });
    cResult[7] = tmp10;
    cResult[8] = tmp4;
    cResult[9] = mapped;
    tmp12 = mapped;
  }
  items = [card, tmp9];
  cResult[4] = tmp4.card;
  cResult[5] = tmp9;
  cResult[6] = items;
  tmp10 = items;
}) : (function ConjureHomeFeatureList() {
  let prop;
  let style;
  let styles;
  let token;
  const tmp = closure_7();
  _require = tmp;
  let obj = require("useToken");
  token = obj.useToken(token(587).colors.BACKGROUND_BASE_LOWEST);
  items = [tmp.card, token];
  dependencyMap = react.useMemo(() => {
    let alphaResult;
    items = [styles.card, ];
    const obj = { backgroundColor: alphaResult.css() };
    const obj2 = _modDef683(token);
    items[1] = obj;
    alphaResult = obj2.alpha(0.6);
    return items;
  }, items);
  let obj2 = {
    style: tmp.list,
    children: prop.map((id) => {
      let description;
      let intl;
      let intl2;
      let obj3;
      let title;
      id = id.id;
      const obj = { style, children: items };
      const obj2 = { style: styles.visual, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(closure_15, obj3) };
      obj3 = { id, styles };
      ({ title, description } = id);
      items = [hasOwnProperty(React3, obj2), ];
      const obj4 = { style: styles.caption, children: items1 };
      const obj5 = { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children: intl.string(title) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items1 = [hasOwnProperty(Text, obj5), ];
      const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: intl2.string(description) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items1[1] = hasOwnProperty(Text2, obj6);
      items[1] = metroRequire(React3, obj4);
      return metroRequire(React3, obj, id);
    })
  };
  prop = require("conjureHomeShowcaseTiles").CONJURE_HOME_SHOWCASE_TILES;
  return closure_5(closure_4, obj2);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeFeatureList.tsx");

export default memoResult;
