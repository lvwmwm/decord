// Module ID: 12977
// Function ID: 12978
// Name: ConjureHomeFeatureList
// Dependencies: [19, 17, 21, 5014, 575, 7340, 5587, 9378, 5624, 9468, 12446, 1113, 3868, 5596, 5740, 11281, 671, 12978, 2]

// Module 12977 (ConjureHomeFeatureList)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import intl3 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 7340 */;
import ShieldIcon2 from "ShieldIcon" /* 11281 */;
import RobotIcon2 from "RobotIcon" /* 12446 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, id;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
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
function Line(style) {
  style = style.style;
  const obj = { style: items };
  items = [closure_7().line, style];
  return hasOwnProperty(React3, obj);
}
function ShowcaseVisual(styles) {
  const obj = { styles: styles.styles };
  return hasOwnProperty(closure_14[styles.id], obj);
}
({ StyleSheet, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, card: obj3, visual: { height: 132, alignItems: "center", justifyContent: "center" }, caption: obj4, window: obj5, line: obj6, lineTitle: size, lineName: obj7, lineShort: { width: "40%" }, lineMedium: { width: "64%" }, lineLong: { width: "92%" }, windowBar: obj8, windowDot: size1, pollOption: obj9, pollFill: obj10, pollFillWinner: obj11, pollLabel: { width: "40%" }, pollLabelWinner: obj12, gameCanvas: size2, cloud: obj13, pipe: obj14, player: size3, pill: { position: "absolute", top: nativeDefault.space.PX_6, flexDirection: "row", alignItems: "center", gap: 2, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM }, joinRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8 }, joinArrow: size4, message: { flexDirection: "row", gap: nativeDefault.space.PX_8 }, messageBody: { flex: 1, gap: nativeDefault.space.PX_6, paddingTop: nativeDefault.space.PX_4 }, messageHeader: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6 }, avatar: size5, avatarBrand: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, botTag: { paddingHorizontal: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, profile: { padding: 0, gap: 0, overflow: "hidden" }, profileBanner: { height: nativeDefault.space.PX_24 }, profileBody: { gap: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_10, paddingBottom: nativeDefault.space.PX_10 }, profileAvatar: size6, statsWidget: { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, stats: { flexDirection: "row", gap: nativeDefault.space.PX_12 }, stat: { gap: nativeDefault.space.PX_4 }, statValue: size7, statLabel: size8, chart: { flexDirection: "row", alignItems: "flex-end", gap: 2, height: nativeDefault.space.PX_24 }, chartBar: { width: 5, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE }, chartBarDown: { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL }, scene: size9, sceneHills: rect, sceneScrim: obj30, crosshair: size10, overlayPanel: rect1, overlayMember: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, overlayAvatar: size11, speaking: { borderWidth: 2, borderColor: nativeDefault.colors.STATUS_ONLINE, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, overlayName: size12, overlayTimer: rect2, overlayTimerValue: size13, redacted: { opacity: 0.4 }, blockedNotice: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_6, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL }, blockedText: { flex: 1, gap: nativeDefault.space.PX_6 }, lineCritical: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, opacity: 0.6 } };
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
({ position: "absolute", top: nativeDefault.space.PX_6, flexDirection: "row", alignItems: "center", gap: 2, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM });
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
let closure_9 = ["68%", "24%", "12%"];
let items = [{ left: 62, top: -3, height: 30 }, { left: 62, bottom: -3, height: 36 }, { left: 118, top: -3, height: 44 }, { left: 118, bottom: -3, height: 22 }];
let items1 = [nativeDefault.unsafe_rawColors.BRAND_500, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
let items2 = [nativeDefault.unsafe_rawColors.BLUE_600, nativeDefault.unsafe_rawColors.ORANGE_360];
let items3 = [{ height: "60%", down: false }, { height: "35%", down: true }, { height: "85%", down: false }, { height: "60%", down: false }, { height: "35%", down: true }, { height: "100%", down: false }];
let closure_14 = {
  apps: function AppsVisual(styles) {
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
    items1[1] = closure_5(Line, obj3);
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
      items1[2] = hasOwnProperty(Line, obj4);
      return tmp(React3, obj, index);
    });
    return closure_6(closure_4, obj);
  },
  games: function GamesVisual(styles) {
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
    const TrophyIcon = styles(9378).TrophyIcon;
    items4 = [closure_5(TrophyIcon, obj7), closure_5(styles(5624).Text, { variant: "text-xxs/bold", color: "text-overlay-light", children: 128 })];
    items1[4] = closure_6(closure_4, obj5);
    const obj8 = { style: items5, children: items6 };
    items5 = [styles.pill, { right: nativeDefault.space.PX_6 }];
    const obj10 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    ({ right: nativeDefault.space.PX_6 });
    const HeartIcon = styles(9468).HeartIcon;
    items6 = [closure_5(HeartIcon, obj10), , ];
    const obj11 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    const HeartIcon2 = styles(9468).HeartIcon;
    items6[1] = closure_5(HeartIcon2, obj11);
    const obj12 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    const HeartIcon3 = styles(9468).HeartIcon;
    items6[2] = closure_5(HeartIcon3, obj12);
    items1[5] = closure_6(closure_4, obj8);
    return closure_6(tmp, obj);
  },
  bots: function BotsVisual(styles) {
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
    items[1] = hasOwnProperty(Line, obj4);
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
    items4[0] = hasOwnProperty(Line, obj10);
    const obj11 = { style: styles.botTag, children: hasOwnProperty(Text, obj12) };
    obj12 = { variant: "text-xxs/bold", color: "text-overlay-light", children: intl.string(_modDef3868.VlgiLf) };
    Text = Text_Text.Text;
    intl = intl3.intl;
    items4[1] = hasOwnProperty(React3, obj11);
    items5 = [metroRequire(React3, obj9), , ];
    const obj13 = { style: styles.lineLong };
    items5[1] = hasOwnProperty(Line, obj13);
    const obj14 = { style: styles.lineMedium };
    items5[2] = hasOwnProperty(Line, obj14);
    items3[1] = metroRequire(React3, obj8);
    items1[1] = metroRequire(React3, obj5);
    return metroRequire(React3, obj);
  },
  "profile-widgets": function ProfileWidgetsVisual(styles) {
    let items4;
    let items5;
    let items6;
    styles = styles.styles;
    let token;
    let obj = styles(5596);
    token = obj.useToken(token(575).colors.BACKGROUND_BRAND);
    items = [token];
    let obj2 = { style: items1, children: items2 };
    items1 = [, ];
    ({ window: arr2[0], profile: arr2[1] } = styles);
    const memo = react.useMemo(() => {
      items = [token, nativeDefault.unsafe_rawColors.ILLO_PINK_40];
      return items;
    }, items);
    let obj3 = { style: styles.profileBanner, colors: memo, start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } };
    items2 = [closure_5(token(5587), obj3), ];
    const obj5 = { style: items3 };
    items3 = [, ];
    const obj4 = { style: styles.profileBody, children: items4 };
    ({ avatar: arr4[0], profileAvatar: arr4[1] } = styles);
    items4 = [closure_5(closure_4, obj5), , ];
    const obj6 = { style: styles.lineName };
    items4[1] = closure_5(Line, obj6);
    const obj7 = { style: styles.statsWidget, children: items6 };
    const obj8 = {
      style: styles.stats,
      children: items5.map((item) => {
        const obj = { style: styles.stat, children: items };
        items = [, ];
        const obj2 = { style: styles.statValue };
        items[0] = hasOwnProperty(Line, obj2);
        const obj3 = { style: styles.statLabel };
        items[1] = hasOwnProperty(Line, obj3);
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
  },
  "overlay-widgets": function OverlayWidgetsVisual(styles) {
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
        items1[1] = hasOwnProperty(Line, obj2);
        return tmp(React3, obj, item);
      })
    };
    items1 = [0, 1, 2];
    items[3] = closure_5(closure_4, obj5);
    const obj6 = { style: items2, children: items3 };
    items2 = [, ];
    ({ pill: arr3[0], overlayTimer: arr3[1] } = styles);
    const obj7 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    const ClockIcon = styles(5740).ClockIcon;
    items3 = [closure_5(ClockIcon, obj7), ];
    const obj8 = { style: styles.overlayTimerValue };
    items3[1] = closure_5(Line, obj8);
    items[4] = closure_6(closure_4, obj6);
    return closure_6(tmp, obj);
  },
  automod: function AutoModVisual(styles) {
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
    items1[0] = hasOwnProperty(Line, obj5);
    const obj6 = { style: items2 };
    items2 = [, ];
    ({ lineLong: arr3[0], redacted: arr3[1] } = styles);
    items1[1] = hasOwnProperty(Line, obj6);
    const obj7 = { style: items3 };
    items3 = [, ];
    ({ lineMedium: arr4[0], redacted: arr4[1] } = styles);
    items1[2] = hasOwnProperty(Line, obj7);
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
    items7 = [hasOwnProperty(Line, obj11), ];
    const obj12 = { style: items8 };
    items8 = [, ];
    ({ lineShort: arr9[0], lineCritical: arr9[1] } = styles);
    items7[1] = hasOwnProperty(Line, obj12);
    items5[1] = metroRequire(React3, obj10);
    items4[1] = metroRequire(React3, obj8);
    return metroRequire(React3, obj);
  }
};
const memoResult = react.memo(function ConjureHomeFeatureList() {
  let prop;
  let style;
  let styles;
  let token;
  const tmp = closure_7();
  _require = tmp;
  let obj = require("useToken");
  token = obj.useToken(token(575).colors.BACKGROUND_BASE_LOWEST);
  items = [tmp.card, token];
  dependencyMap = react.useMemo(() => {
    let alphaResult;
    items = [styles.card, ];
    const obj = { backgroundColor: alphaResult.css() };
    const obj2 = _modDef671(token);
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
      const obj2 = { style: styles.visual, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(ShowcaseVisual, obj3) };
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
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/home/native/ConjureHomeFeatureList.tsx");

export default memoResult;
