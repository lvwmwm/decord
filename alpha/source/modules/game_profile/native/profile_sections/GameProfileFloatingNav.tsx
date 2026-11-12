// Module ID: 10439
// Function ID: 10440
// Name: GameProfileFloatingNav
// Dependencies: [32, 19, 17, 21, 575, 1652, 5243, 10440, 10458, 7932, 5866, 1627, 10502, 5839, 671, 5485, 10242, 7374, 1113, 7372, 5830, 2]
// Exports: default

// Module 10439 (GameProfileFloatingNav)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5866 */;
import native from "native" /* 7932 */;
import YouBannerDecorations from "YouBannerDecorations" /* 10440 */;
import YouScreenNavIconMeasurer2 from "YouScreenNavIconMeasurer" /* 10458 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function NavItem(arg0) {
  let IconComponent;
  let containerRef;
  let items1;
  let items2;
  let label;
  let labelStyle;
  let onLayout;
  let onPress;
  let selected;
  let style;
  let width;
  ({ label, onLayout } = arg0);
  ({ IconComponent, selected, onPress, style, labelStyle } = arg0);
  let obj = YouScreenNavIconMeasurer2;
  const youScreenNavIconMeasurement = obj.useYouScreenNavIconMeasurement();
  const items = [onLayout];
  ({ containerRef, width } = youScreenNavIconMeasurement);
  const callback = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const obj = { x: layout.x, width: layout.width };
    onLayout(obj);
  }, items);
  const obj2 = { ref: containerRef, style: items1, accessibilityRole: "tab", accessibilityLabel: label, accessibilityState: { selected }, onPress, onLayout: callback, hitSlop: nativeDefault.space.PX_8, children: items2 };
  items1 = [style, { width }];
  const PressableScale = native.PressableScale;
  items2 = [, ];
  const obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
  items2[0] = metroImportDefault(IconComponent, obj3);
  items2[1] = metroImportDefault(Text_Text.Text, { style: labelStyle, variant: "body-xs/semibold", color: "text-strong", lineClamp: 1, maxFontSizeMultiplier: 2, children: label });
  return metroImportAll(PressableScale, obj2);
}
function FloatingNav(navigation) {
  let _undefined;
  let c4;
  let closure_2;
  let intl;
  let intl2;
  let items4;
  let items5;
  let items6;
  let items7;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp9;
  navigation = navigation.navigation;
  dependencyMap = undefined;
  react = undefined;
  const selectedTab = navigation.selectedTab;
  const selectTab = navigation.selectTab;
  let tmp = selectTab;
  const tmp2 = dependencyMap;
  const onLayout = navigation.onLayout;
  const tmp3 = closure_14(selectTab(1627)().bottom);
  dependencyMap = tmp3;
  let obj = selectedTab(10502);
  const isGameProfileCommunitiesMobileEnabled = obj.useIsGameProfileCommunitiesMobileEnabled({ location: "GameProfileFloatingNav" });
  let obj2 = selectedTab(5839);
  const token = obj2.useToken(selectTab(575).colors.BACKGROUND_BASE_LOWEST);
  let items = [token];
  const memo = react.useMemo(() => {
    const items = [, ];
    const obj = _modDef671(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = token;
    return items;
  }, items);
  [tmp9, c4] = token(react.useState({}), 2);
  const tmp8 = token(react.useState({}), 2);
  let closure_5 = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = _undefined((arg0) => {
      let tmp6;
      let x;
      const tmp = closure_0;
      if (arg0[closure_0] != null) {
        x = tmp2.x;
      }
      if (x !== x.x) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[tmp] = x;
        tmp6 = obj;
      } else {
        let width;
        if (arg0[closure_0] != null) {
          width = tmp2.width;
        }
        tmp6 = arg0;
      }
      return tmp6;
    });
  }, []);
  const tmp10 = tmp9[selectedTab];
  selectedTab(1652);
  const items1 = [closure_16, tmp10, selectedTab(5485).withTiming, 320, closure_13];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items1;
  class GameProfileFloatingNavTsx1 {
    constructor() {
      let items;
      let obj;
      let obj2;
      let obj4;
      if (null == _undefined) {
        obj = { opacity: 0 };
      } else {
        obj = { opacity: 1, width: _undefined(_undefined.width, obj2), transform: items };
        obj2 = { duration, easing };
        const obj3 = { translateX: _undefined(_undefined.x, obj4) };
        items = [obj3];
        obj4 = { duration, easing };
      }
      return obj;
    }
  }
  const items2 = [tmp13, tmp14, tmp15, tmp16];
  GameProfileFloatingNavTsx1.__closure = items2;
  GameProfileFloatingNavTsx1.__workletHash = 15050593289877;
  GameProfileFloatingNavTsx1.__initData = tmp12;
  if (isGameProfileCommunitiesMobileEnabled) {
    let obj3 = { tab: tmp4(10242).GameProfileNavTab.OVERVIEW, IconComponent: tmp4(7374).GameControllerIcon, label: intl.string(tmp4(1113).t.qHmbyh) };
    intl = tmp4(1113).intl;
    const items3 = [obj3, ];
    let obj4 = { tab: tmp4(10242).GameProfileNavTab.COMMUNITIES, IconComponent: tmp4(7372).GroupIcon, label: intl2.string(tmp4(1113).t["3xFZEo"]) };
    intl2 = tmp4(1113).intl;
    items3[1] = obj4;
    const obj5 = { style: tmp3.wrap, pointerEvents: "box-none", onLayout, children: items4 };
    const obj6 = { colors: memo, style: tmp3.scrim, pointerEvents: "none" };
    items4 = [closure_7(tmp(5830), obj6), ];
    const obj7 = { style: tmp3.pill, accessibilityRole: "tablist", children: items5 };
    const obj8 = { style: tmp3.pillBlur, pointerEvents: "none", children: closure_7(selectedTab(7932).BackgroundBlurFill, {}) };
    items5 = [closure_7(closure_5, obj8), ];
    const obj10 = { style: items6, pointerEvents: "none" };
    items6 = [tmp3.selection, tmp17];
    const obj9 = { style: tmp3.pillRow, children: items7 };
    items7 = [closure_7(tmp(1652).View, obj10), ];
    const obj11 = {
      children: items3.map((IconComponent) => {
          const tab = IconComponent.tab;
          const obj = {
            IconComponent: IconComponent.IconComponent,
            label: IconComponent.label,
            selected: tab === tab,
            onPress() {
              return selectTab(tab);
            },
            onLayout(arg0) {
              return closure_5(tab, arg0);
            },
            style: closure_2.item,
            labelStyle: closure_2.label
          };
          return closure_1_7(NavItem, obj, tab);
        })
    };
    const YouScreenNavIconMeasurer = tmp4(10458).YouScreenNavIconMeasurer;
    items7[1] = closure_7(YouScreenNavIconMeasurer, obj11);
    items5[1] = closure_8(closure_5, obj9);
    items4[1] = closure_8(closure_5, obj7);
    return closure_8(closure_5, obj5);
  } else {
    return null;
  }
}
let react = react_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_4 = nativeDefault.space.PX_4;
const PX_8 = nativeDefault.space.PX_8;
const PX_48 = nativeDefault.space.PX_48;
const PX_6 = nativeDefault.space.PX_6;
const Easing = _mod1652.Easing;
let closure_13 = Easing.inOut(_mod1652.Easing.cubic);
let closure_14 = createStyles.createStyles((bottom) => {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let rect;
  const obj = { wrap: obj2, scrim: obj3, pill: obj4, pillBlur: obj6, pillRow: obj7, selection: rect, item: { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: PX_48, padding: PX_6 }, label: { marginTop: nativeDefault.space.PX_4, textAlign: "center" } };
  obj2 = { top: undefined, alignItems: "center" };
  const merged = Object.assign(metroRequire.absoluteFillObject);
  obj3 = {};
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  obj4 = { marginBottom: obj5.getFloatingNavBottomMargin(bottom), padding: PX_4, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, flexDirection: "row", alignItems: "center" };
  obj5 = YouBannerDecorations;
  const merged2 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj6 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  const merged3 = Object.assign(metroRequire.absoluteFillObject);
  obj7 = { flexDirection: "row", alignItems: "center", gap: PX_8 };
  rect = { position: "absolute", top: 0, bottom: 0, insetInlineStart: 0, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  ({ borderRadius: nativeDefault.modules.button.BORDER_RADIUS, flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: PX_48, padding: PX_6 });
  ({ marginTop: nativeDefault.space.PX_4, textAlign: "center" });
  return obj;
});
let closure_16 = { code: "(function GameProfileFloatingNavTsx1(){let[selectedLayout,withTiming,SELECTION_MS,SELECTION_EASE]=this.__closure;if(selectedLayout==null){return{opacity:0};}return{opacity:1,width:withTiming(selectedLayout.width,{duration:SELECTION_MS,easing:SELECTION_EASE}),transform:[{translateX:withTiming(selectedLayout.x,{duration:SELECTION_MS,easing:SELECTION_EASE})}]};})" };
const result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/GameProfileFloatingNav.tsx");

export default function GameProfileFloatingNav(game) {
  game = game.game;
  const merged = Object.assign(game, Object.assign({ game: 0 }));
  const communityGuildIds = game.communityGuildIds;
  let num;
  if (communityGuildIds != null) {
    num = communityGuildIds.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp2 = null;
  if (num >= 3) {
    const obj = {};
    const merged1 = Object.assign(merged);
    tmp2 = metroImportDefault(FloatingNav, obj);
  }
  return tmp2;
};
