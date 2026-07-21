// Module ID: 14036
// Function ID: 106720
// Name: SettingsAppearanceThemeCarousel
// Dependencies: []
// Exports: default

// Module 14036 (SettingsAppearanceThemeCarousel)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const importDefaultResult = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[5]).Icon);
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { gap: importDefault(dependencyMap[7]).space.PX_24, alignItems: "center" };
obj.container = obj;
obj.textCentered = { textAlign: "center" };
obj1 = { gap: importDefault(dependencyMap[7]).space.PX_4, alignItems: "center" };
obj.labelGroup = obj1;
const obj2 = { 9223372036854775807: "tax", 9223372036854775807: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN", 0: "getPreviewBanner", -9223372036854775808: "Array", 9223372036854775807: "impressionStartTimestamp", marginTop: importDefault(dependencyMap[7]).space.PX_4 };
obj.titleContainer = obj2;
const importDefaultResult1 = importDefault(dependencyMap[4]);
obj.floatingNuxContainer = { position: "absolute", left: importDefault(dependencyMap[7]).space.PX_24 };
const obj4 = { borderRadius: importDefault(dependencyMap[7]).radii.lg, padding: importDefault(dependencyMap[7]).space.PX_4, paddingRight: importDefault(dependencyMap[7]).space.PX_8 };
const merged = Object.assign(importDefault(dependencyMap[7]).shadows.SHADOW_LOW);
obj4["shadowColor"] = "#000000";
obj.floatingNux = obj4;
const items = [{ rotate: "90deg" }];
obj.arrowLeft = { transform: items };
const obj3 = { position: "absolute", left: importDefault(dependencyMap[7]).space.PX_24 };
obj.selectionBorder = { width: importDefaultResult.THEME_ITEM_WIDTH, height: importDefaultResult.THEME_ITEM_HEIGHT, borderRadius: importDefault(dependencyMap[7]).radii.md, borderColor: importDefault(dependencyMap[7]).colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
obj.a11yThemeList = { flexDirection: "row" };
obj.a11yThemeListScroll = { flexGrow: 0 };
let closure_11 = obj1.createStyles(obj);
let closure_12 = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{withTiming,isMidnightNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isMidnightNuxVisible.get()?1:0,timingStandard),pointerEvents:isMidnightNuxVisible.get()?'auto':'none'};}" };
const obj5 = { width: importDefaultResult.THEME_ITEM_WIDTH, height: importDefaultResult.THEME_ITEM_HEIGHT, borderRadius: importDefault(dependencyMap[7]).radii.md, borderColor: importDefault(dependencyMap[7]).colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default function SettingsAppearanceThemeCarousel(themes) {
  let animatedStyles;
  let defaultIndex;
  let deviceWidth;
  let isRefreshEnabled;
  let onThemeSelected;
  themes = themes.themes;
  const arg1 = themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const importDefault = currentThemeIndex;
  const isPreview = themes.isPreview;
  const dependencyMap = isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  const React = deviceWidth;
  ({ animatedStyles, hasMidnightNux: closure_4, isRefreshEnabled, onThemeSelected } = themes);
  function renderA11yThemeItem(index) {
    index = index.index;
    const themes = index;
    return ref(currentThemeIndex(isPreview[10]), {
      themePreset: index.item,
      isPreview,
      isSelected: index === currentThemeIndex,
      onPress() {
        return callback(index);
      }
    });
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  let tmp3 = null;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const ref = React.useRef(null);
  let callback = React.useRef(defaultIndex);
  const items = [themes];
  const callback2 = React.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => "midnight" === theme.theme);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj1 = arg1(dependencyMap[4]);
  const sharedValue = obj1.useSharedValue(false);
  let obj2 = arg1(dependencyMap[4]);
  const sharedValue1 = obj2.useSharedValue(false);
  let closure_10 = sharedValue1;
  const items1 = [sharedValue, sharedValue1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_9.set(false);
      const result1 = closure_10.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items1);
  const items2 = [onThemeSelected];
  const callback3 = React.useMemo(() => currentThemeIndex(isPreview[9]).debounce(onThemeSelected, 180), items2);
  const items3 = [isPreview, onThemeSelected, currentThemeIndex];
  callback = React.useCallback((index) => {
    index = index.index;
    const themes = index;
    return ref(currentThemeIndex(isPreview[10]), {
      themePreset: index.item,
      isPreview,
      isSelected: index === currentThemeIndex,
      onPress() {
        if (null != closure_6.current) {
          const current3 = closure_6.current;
          const currentIndex = current3.getCurrentIndex();
          if (currentIndex === index) {
            return callback(index);
          } else {
            if (currentIndex !== index) {
              if (0 === currentIndex) {
                let obj = { count: index };
                return closure_6.current.next(obj);
              } else {
                const current = closure_6.current;
                obj = { index, animated: true };
                current.scrollTo(obj);
              }
            }
            const current2 = closure_6.current;
            if (null != current2) {
              obj = { index, animated: true };
              current2.scrollTo(obj);
            }
          }
        }
      },
      isNew: false
    });
  }, items3);
  let obj3 = arg1(dependencyMap[4]);
  class P {
    constructor() {
      obj = {};
      obj2 = themes(isPreview[11]);
      num = 0;
      if (closure_9.get()) {
        num = 1;
      }
      obj.opacity = obj2.withTiming(num, themes(isPreview[12]).timingStandard);
      str = "none";
      if (closure_9.get()) {
        str = "auto";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  obj = { withTiming: arg1(dependencyMap[11]).withTiming, isMidnightNuxVisible: sharedValue, timingStandard: arg1(dependencyMap[12]).timingStandard };
  P.__closure = obj;
  P.__workletHash = 3854555745742;
  P.__initData = renderA11yThemeItem;
  obj = { style: tmp.titleContainer };
  const animatedStyle = obj3.useAnimatedStyle(P);
  if (themes[currentThemeIndex].type !== arg1(dependencyMap[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
    obj1 = { source: importDefault(dependencyMap[14]), style: animatedStyles.iconHeaderSecondary, size: arg1(dependencyMap[5]).IconSizes.SMALL_20 };
    tmp3 = callback(closure_10, obj1);
  }
  const items4 = [tmp3, ];
  obj2 = { "Null": null, "Null": null, "Null": null, style: isRefreshEnabled ? animatedStyles.headerPrimary : animatedStyles.headerSecondary };
  let obj8 = themes[currentThemeIndex];
  obj2.children = obj8.getName();
  items4[1] = callback(arg1(dependencyMap[15]).Text, obj2);
  obj.children = items4;
  const tmp10Result = callback2(closure_4, obj);
  obj3 = {};
  if (!isScreenReaderEnabled) {
    if (!arg1(dependencyMap[16]).isThumbstickScrollDevice) {
      const obj4 = {};
      const obj5 = { pointerEvents: "none", style: tmp.selectionBorder };
      const items5 = [callback(closure_4, obj5), ];
      const obj6 = { ref, data: themes, renderItem: callback };
      const obj7 = { style: false, body: false, a: false, width: deviceWidth, marginLeft: importDefaultResult.THEME_ITEM_HORIZONTAL_MARGIN };
      obj6.style = obj7;
      obj6.width = importDefaultResult.THEME_ITEM_WIDTH + importDefaultResult.THEME_ITEM_HORIZONTAL_MARGIN;
      obj6.height = importDefaultResult.THEME_ITEM_HEIGHT;
      obj6.loop = false;
      obj6.pagingEnabled = true;
      obj6.defaultIndex = defaultIndex;
      obj6.onSnapToItem = onThemeSelected;
      obj6.scrollAnimationDuration = 200;
      obj6.onProgressChange = function onProgressChange(arg0, arg1) {
        const rounded = Math.round(arg1);
        if (rounded !== ref.current) {
          const result = themes(isPreview[18]).triggerHapticFeedback(themes(isPreview[18]).HapticFeedbackTypes.IMPACT_LIGHT);
          ref.current = rounded;
          callback(rounded);
          const obj = themes(isPreview[18]);
        }
        if (closure_4) {
          const _Math = Math;
          const tmp11 = arg1 < closure_8 + Math.ceil(deviceWidth / (ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp11) {
            const result1 = sharedValue1.set(true);
          }
          const result2 = sharedValue.set(!sharedValue1.get() && !tmp11);
          const tmp16 = !sharedValue1.get() && !tmp11;
        }
      };
      items5[1] = callback(importDefault(dependencyMap[17]), obj6);
      obj4.children = items5;
      let tmp30 = callback2(sharedValue, obj4);
    }
    obj3.children = tmp30;
    const tmp19Result = tmp19(tmp20, obj3);
    obj8 = {};
    const items6 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj8.style = items6;
    if (isPreview) {
      if (themes[currentThemeIndex].type !== arg1(dependencyMap[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
        const intl2 = arg1(dependencyMap[19]).intl;
        let stringResult = intl2.string(arg1(dependencyMap[19]).t.VqGKm0);
      }
      obj8.children = stringResult;
      const tmp32Result = tmp32(tmp35, obj8);
      const obj9 = {};
      if (isRefreshEnabled) {
        const items7 = [tmp19Result, ];
        const obj10 = { style: tmp.labelGroup };
        const items8 = [tmp10Result, tmp32Result];
        obj10.children = items8;
        items7[1] = callback2(closure_4, obj10);
        obj9.children = items7;
        let tmp46 = obj9;
      } else {
        const items9 = [tmp10Result, tmp19Result, tmp32Result];
        obj9.children = items9;
        tmp46 = obj9;
      }
      const obj11 = { style: tmp.container };
      const obj12 = { style: tmp.floatingNuxContainer };
      const obj13 = {};
      const items10 = [tmp.floatingNux, animatedStyle, , ];
      ({ bgSurfaceOverlay: arr12[2], borderFaint: arr12[3] } = animatedStyles);
      obj13.style = items10;
      const obj14 = {};
      const items11 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      obj14.style = items11;
      obj14.source = importDefault(dependencyMap[20]);
      obj14.size = arg1(dependencyMap[5]).IconSizes.REFRESH_SMALL_16;
      const items12 = [callback(closure_10, obj14), ];
      const obj15 = { style: animatedStyles.textNormal };
      const intl3 = arg1(dependencyMap[19]).intl;
      obj15.children = intl3.string(arg1(dependencyMap[19]).t.y2b7CA);
      items12[1] = callback(arg1(dependencyMap[15]).Text, obj15);
      obj13.children = items12;
      obj12.children = callback2(importDefault(dependencyMap[4]).View, obj13);
      const items13 = [callback(closure_4, obj12), callback2(sharedValue, tmp46)];
      class P {
        constructor() {
          obj = {};
          obj2 = themes(isPreview[11]);
          num = 0;
          if (closure_9.get()) {
            num = 1;
          }
          obj.opacity = obj2.withTiming(num, themes(isPreview[12]).timingStandard);
          str = "none";
          if (closure_9.get()) {
            str = "auto";
          }
          obj.pointerEvents = str;
          return obj;
        }
      }
      return callback2(closure_4, obj11);
    }
    const intl = arg1(dependencyMap[19]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[19]).t;
    if (themes.isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
    const tmp32 = callback;
  }
  tmp30 = callback(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((item, index) => {
      let obj = { children: renderA11yThemeItem(obj) };
      obj = { item, index };
      return ref(closure_4, obj, "theme-" + index);
    })
  });
};
