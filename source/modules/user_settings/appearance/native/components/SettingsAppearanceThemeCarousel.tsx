// Module ID: 14210
// Function ID: 109271
// Name: SettingsAppearanceThemeCarousel
// Dependencies: [31, 27, 14211, 33, 3991, 1273, 4130, 689, 4528, 22, 14212, 4131, 4134, 3944, 8057, 4126, 1553, 9728, 4099, 1212, 14215, 2]
// Exports: default

// Module 14210 (SettingsAppearanceThemeCarousel)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import importDefaultResult from "THEME_ITEM_WIDTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult1 from "module_3991";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = require("module_3991").createAnimatedComponent(require("Button").Icon);
let obj = {};
obj = { gap: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center" };
obj.container = obj;
obj.textCentered = { textAlign: "center" };
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_4, alignItems: "center" };
obj.labelGroup = _createForOfIteratorHelperLoose;
let obj2 = { minHeight: 20, marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj.titleContainer = obj2;
obj.floatingNuxContainer = { position: "absolute", left: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, flexDirection: "row", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_4, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
obj4["shadowColor"] = "#000000";
obj.floatingNux = obj4;
let items = [{ rotate: "90deg" }];
obj.arrowLeft = { transform: items };
let obj5 = { position: "absolute", alignSelf: "center" };
({ THEME_ITEM_WIDTH: obj9.width, THEME_ITEM_HEIGHT: obj9.height } = importDefaultResult);
obj5.borderRadius = require("_createForOfIteratorHelperLoose").radii.md;
obj5.borderColor = require("_createForOfIteratorHelperLoose").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT;
obj5.borderWidth = 2;
obj.selectionBorder = obj5;
obj.a11yThemeList = { flexDirection: "row" };
obj.a11yThemeListScroll = { flexGrow: 0 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{withTiming,isMidnightNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isMidnightNuxVisible.get()?1:0,timingStandard),pointerEvents:isMidnightNuxVisible.get()?'auto':'none'};}" };
let obj3 = { position: "absolute", left: require("_createForOfIteratorHelperLoose").space.PX_24 };
let result = require("THEME_ITEM_WIDTH").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default function SettingsAppearanceThemeCarousel(themes) {
  let animatedStyles;
  let closure_4;
  let defaultIndex;
  let deviceWidth;
  let isRefreshEnabled;
  let onThemeSelected;
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  ({ animatedStyles, hasMidnightNux: closure_4, isRefreshEnabled, onThemeSelected } = themes);
  function renderA11yThemeItem(index) {
    index = index.index;
    return ref(currentThemeIndex(isPreview[10]), {
      themePreset: index.item,
      isPreview,
      isSelected: index === currentThemeIndex,
      onPress() {
        return outer1_5(index);
      }
    });
  }
  const tmp = callback3();
  let obj = themes(isPreview[8]);
  let tmp3 = null;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const ref = deviceWidth.useRef(null);
  let callback = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  const callback2 = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => "midnight" === theme.theme);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj1 = themes(isPreview[4]);
  const sharedValue = obj1.useSharedValue(false);
  let obj2 = themes(isPreview[4]);
  const sharedValue1 = obj2.useSharedValue(false);
  const items1 = [sharedValue, sharedValue1];
  const effect = deviceWidth.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = outer1_9.set(false);
      const result1 = outer1_10.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items1);
  const items2 = [onThemeSelected];
  callback3 = deviceWidth.useMemo(() => currentThemeIndex(isPreview[9]).debounce(onThemeSelected, 180), items2);
  const items3 = [isPreview, onThemeSelected, currentThemeIndex];
  callback = deviceWidth.useCallback((index) => {
    index = index.index;
    return ref(currentThemeIndex(isPreview[10]), {
      themePreset: index.item,
      isPreview,
      isSelected: index === currentThemeIndex,
      onPress() {
        if (null != outer1_6.current) {
          const current3 = outer1_6.current;
          const currentIndex = current3.getCurrentIndex();
          if (currentIndex === index) {
            return outer1_5(index);
          } else {
            if (currentIndex !== index) {
              if (0 === currentIndex) {
                let obj = { count: index };
                return outer1_6.current.next(obj);
              } else {
                const current = outer1_6.current;
                obj = { index, animated: true };
                current.scrollTo(obj);
              }
            }
            const current2 = outer1_6.current;
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
  let obj3 = themes(isPreview[4]);
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
  obj = { withTiming: themes(isPreview[11]).withTiming, isMidnightNuxVisible: sharedValue, timingStandard: themes(isPreview[12]).timingStandard };
  P.__closure = obj;
  P.__workletHash = 3854555745742;
  P.__initData = renderA11yThemeItem;
  obj = { style: tmp.titleContainer };
  const animatedStyle = obj3.useAnimatedStyle(P);
  if (themes[currentThemeIndex].type !== themes(isPreview[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
    obj1 = { source: currentThemeIndex(isPreview[14]), style: animatedStyles.iconHeaderSecondary, size: themes(isPreview[5]).IconSizes.SMALL_20 };
    tmp3 = callback(sharedValue1, obj1);
  }
  const items4 = [tmp3, ];
  obj2 = { animated: true, style: isRefreshEnabled ? animatedStyles.headerPrimary : animatedStyles.headerSecondary, variant: "heading-sm/semibold" };
  let obj8 = themes[currentThemeIndex];
  obj2.children = obj8.getName();
  items4[1] = callback(themes(isPreview[15]).Text, obj2);
  obj.children = items4;
  const tmp10Result = callback2(closure_4, obj);
  obj3 = {};
  if (!isScreenReaderEnabled) {
    if (!themes(isPreview[16]).isThumbstickScrollDevice) {
      const obj4 = {};
      const obj5 = { pointerEvents: "none", style: tmp.selectionBorder };
      const items5 = [callback(closure_4, obj5), ];
      const obj6 = { ref, data: themes, renderItem: callback };
      const obj7 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: ref.THEME_ITEM_HORIZONTAL_MARGIN };
      obj6.style = obj7;
      obj6.width = ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN;
      obj6.height = ref.THEME_ITEM_HEIGHT;
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
      items5[1] = callback(currentThemeIndex(isPreview[17]), obj6);
      obj4.children = items5;
      let tmp30 = callback2(sharedValue, obj4);
    }
    obj3.children = tmp30;
    const tmp19Result = tmp19(tmp20, obj3);
    obj8 = { animated: true, style: null, variant: "text-sm/medium" };
    const items6 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj8.style = items6;
    if (isPreview) {
      if (themes[currentThemeIndex].type !== themes(isPreview[13]).ClientThemeType.STANDARD_BACKGROUND_THEME) {
        const intl2 = themes(isPreview[19]).intl;
        let stringResult = intl2.string(themes(isPreview[19]).t.VqGKm0);
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
      obj14.source = currentThemeIndex(isPreview[20]);
      obj14.size = themes(isPreview[5]).IconSizes.REFRESH_SMALL_16;
      const items12 = [callback(sharedValue1, obj14), ];
      const obj15 = { animated: true, style: animatedStyles.textNormal, variant: "eyebrow", maxFontSizeMultiplier: 1.5 };
      const intl3 = themes(isPreview[19]).intl;
      obj15.children = intl3.string(themes(isPreview[19]).t.y2b7CA);
      items12[1] = callback(themes(isPreview[15]).Text, obj15);
      obj13.children = items12;
      obj12.children = callback2(currentThemeIndex(isPreview[4]).View, obj13);
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
    const intl = themes(isPreview[19]).intl;
    const string = intl.string;
    const t = themes(isPreview[19]).t;
    if (themes.isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
    tmp32 = callback;
  }
  tmp30 = callback(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((item, index) => {
      obj = { children: renderA11yThemeItem(obj) };
      obj = { item, index };
      return ref(outer1_4, obj, "theme-" + index);
    })
  });
};
