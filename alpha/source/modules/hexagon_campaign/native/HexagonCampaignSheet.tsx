// Module ID: 16883
// Function ID: 16884
// Name: HexagonCampaignSheet
// Dependencies: [5, 32, 19, 17, 1205, 1389, 16141, 5030, 5303, 9931, 1252, 1095, 21, 1409, 1408, 9258, 5005, 587, 558, 576, 5033, 504, 7313, 7338, 15261, 5032, 1631, 2051, 9932, 16358, 6771, 16884, 5701, 1125, 5247, 16882, 4281, 10693, 5271, 16889, 7308, 16381, 5281, 16890, 7047, 7355, 16891, 5302, 2]

// Module 16883 (HexagonCampaignSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1095 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1252 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1408 */;
import DisplayNameFont from "DisplayNameFont" /* 1409 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5303 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9258 */;
import AppIconConstants from "AppIconConstants" /* 9931 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1205 */;
import UserStore from "UserStore" /* 1389 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16141 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5030 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, c3, c4, importDefault, perk;

let Platform;
let StyleSheet;
let closure_12;
let closure_16;
let closure_17;
let closure_18;
let items;
let metroRequire;
let obj10;
let obj11;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let unpackModuleId;
({ Platform, View: metroRequire, StyleSheet } = react_native);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HexagonCampaignPerk: unpackModuleId, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const isHexagonCampaignAppIcon = AppIconConstants.isHexagonCampaignAppIcon;
const HEXAGON_GRADIENT_PRESET = ClientThemesConstants.HEXAGON_GRADIENT_PRESET;
const Fonts = Constants.Fonts;
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
const HexagonCampaignSheet_str = "HexagonCampaignSheet";
let c20 = 143.48;
let obj = { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId: DisplayNameEffect.DisplayNameEffect.SOLID, colors: [] };
let PRIMARY_SEMIBOLD = useDisplayNameStylesFont.DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
if (PRIMARY_SEMIBOLD == null) {
  PRIMARY_SEMIBOLD = Fonts.PRIMARY_SEMIBOLD;
}
let createStyles = createStyles_mod;
let obj2 = { content: obj3, card: obj4, cardShade: obj5, previewArea: obj6, scaledPreviewContainer: { width: 288 }, scaledPreview: rect, rows: obj7, rowIcon: size, fontRowIcon: obj8, fontRowIconText: { fontFamily: PRIMARY_SEMIBOLD }, badgeRow: obj9, footer: obj10, legal: obj11 };
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj4 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_52 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { height: 274, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center" };
rect = { position: "absolute", top: 0, left: 0, width: 360, transform: items, transformOrigin: "top left" };
items = [{ scale: 0.8 }];
obj7 = { paddingTop: nativeDefault.space.PX_16 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 0 };
obj8 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj9 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj10 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj11 = { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_16 };
let closure_22 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ScaledPreview(children) {
  let PX_12;
  let closure_129_0;
  let first;
  let tmp5;
  let tmp8;
  obj = react2;
  const cResult = obj.c(12);
  children = children.children;
  const tmp3 = closure_22();
  [tmp5, closure_129_0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(nativeEvent) {
      closure_1_0(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (null != tmp5) {
    const _Math = Math;
    PX_12 = Math.max((274 - 0.8 * tmp5) / 2, 0);
  } else {
    PX_12 = nativeDefault.space.PX_12;
  }
  if (cResult[1] !== PX_12) {
    const obj2 = { marginTop: PX_12 };
    cResult[1] = PX_12;
    cResult[2] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp3.scaledPreviewContainer) {
    let tmp9;
    if (cResult[4] === tmp8) {
      tmp9 = cResult[5];
    }
    if (cResult[6] === children) {
      let tmp10;
      if (cResult[7] === tmp3.scaledPreview) {
        tmp10 = cResult[8];
      }
      if (cResult[9] === tmp9) {
        let tmp14;
        if (cResult[10] === tmp10) {
          tmp14 = cResult[11];
        }
        return tmp14;
      }
      const obj3 = { style: tmp9, children: tmp10 };
      const tmp17 = authStore3(metroRequire, obj3);
      cResult[9] = tmp9;
      cResult[10] = tmp10;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { style: tmp3.scaledPreview, onLayout: first, children };
    const tmp13 = authStore3(metroRequire, obj4);
    cResult[6] = children;
    cResult[7] = tmp3.scaledPreview;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  const items = [tmp3.scaledPreviewContainer, tmp8];
  cResult[3] = tmp3.scaledPreviewContainer;
  cResult[4] = tmp8;
  cResult[5] = items;
  tmp9 = items;
}) : (function ScaledPreview(children) {
  let PX_12;
  let c0;
  let items;
  let obj2;
  let tmp3;
  c0 = undefined;
  children = children.children;
  const tmp = closure_22();
  [tmp3, c0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp3) {
    const _Math = Math;
    PX_12 = Math.max((274 - 0.8 * tmp3) / 2, 0);
  } else {
    PX_12 = nativeDefault.space.PX_12;
  }
  obj = { style: items, children: authStore3(metroRequire, obj2) };
  items = [tmp.scaledPreviewContainer, { marginTop: PX_12 }];
  obj2 = { style: tmp.scaledPreview, onLayout: callback, children };
  return authStore3(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function usePerkSelectable(arg0) {

}
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignSheet() {
  let analyticsLocations;
  let currentUser;
  let stateFromStores;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  let tmp = stateFromStores;
  let tmp2 = analyticsLocations;
  obj = stateFromStores(analyticsLocations[19]);
  const cResult = obj.c(118);
  closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[21]);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SelectivelySyncedUserSettingsStore];
    class C {
      constructor() {
        return SelectivelySyncedUserSettingsStore.shouldSync("appearance");
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    tmp10 = C;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult4 = tmp(tmp2[21]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp9, tmp10);
  const tmp13 = stateFromStores1(tmp2[22]);
  analyticsLocations = tmp13(stateFromStores1(tmp2[23]).QUEST_HOME_PAGE).analyticsLocations;
  const tmpResult5 = tmp(tmp2[24]);
  const currentAppIcon = tmpResult5.useCurrentAppIcon();
  if (typeof usePerkSelectable === "function") {
    tmp(tmp2[20]);
    class C {
      constructor() {
        return SelectivelySyncedUserSettingsStore.shouldSync("appearance");
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function HexagonCampaignSheet() {
  let Button;
  let TableRowGroup;
  let analyticsLocations;
  let closure_1;
  let closure_7;
  let currentUser;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items12;
  let items6;
  let items7;
  let items8;
  let items9;
  let memo;
  let obj12;
  let obj13;
  let obj15;
  let obj17;
  let obj20;
  let obj22;
  let obj24;
  let obj25;
  let obj33;
  let obj35;
  let obj5;
  let obj8;
  let obj9;
  let stateFromStores;
  let tmp16;
  let tmp30;
  let tmp40;
  let tmp56;
  let tmp5Result3;
  let username;
  obj = function _handleSave2() {
    let displayNameStyles;
    let isThemeSynced;
    let ref;
    let selection;
    obj = _asyncToGenerator(async (arg0, value) => {
      let c2;
      let intl;
      let intl2;
      let obj7;
      let values;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let closure_0;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = undefined;
              if (null != stateFromStores) {
                if (!ref.current) {
                  ref.current = true;
                  closure_2_7(true);
                  closure_0 = false;
                  analyticsLocations = 1;
                  obj5 = { selection, displayNameStyles, premiumType: tmp64.premiumType, isThemeSynced, analyticsLocations };
                  c3 = 2;
                  c4 = 1;
                  const obj6 = { value: obj7.applyHexagonCampaignPerks(obj5), done: false };
                  obj7 = closure_0(analyticsLocations[31]);
                  return obj6;
                }
              }
            }
          } else {
            if (1 === c3) {
              analyticsLocations = 0;
              closure_0 = false;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              analyticsLocations = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              analyticsLocations = 0;
            }
            closure_129_8.current = false;
            closure_129_7(false);
            const tmp12 = closure_0;
            if (tmp12) {
              const obj8 = { perks: values.filter((item) => closure_1_5[item]), content: closure_0(analyticsLocations[30]).QuestContent.AD_PERK_MODAL, sourceQuestContent: closure_0(analyticsLocations[30]).QuestContent.QUEST_HOME_MOBILE };
              const _Object = Object;
              const trackHexagonCampaignPerkAction = closure_0(analyticsLocations[29]).trackHexagonCampaignPerkAction;
              const tmp26 = closure_0(analyticsLocations[29]);
              values = Object.values(result1);
              const result = trackHexagonCampaignPerkAction(obj8);
              obj4 = tmp(analyticsLocations[34]);
              obj4.hideActionSheet(closure_0(analyticsLocations[35]).HEXAGON_CAMPAIGN_SHEET_KEY);
              const _Object2 = Object;
              const values2 = Object.values(closure_129_5);
              const _Boolean = Boolean;
              if (values2.some(Boolean)) {
                const obj9 = { text: intl2.string(tmp(analyticsLocations[36]).fX2UkH), variant: "success" };
                const open2 = tmp(analyticsLocations[32]).open;
                const tmp42 = tmp(analyticsLocations[32]);
                intl2 = closure_0(analyticsLocations[33]).intl;
                open2("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj9);
              }
            } else {
              const obj10 = { text: intl.string(closure_0(analyticsLocations[33]).t.F8FvUy) };
              const open = tmp(analyticsLocations[32]).open;
              const tmp16 = tmp(analyticsLocations[32]);
              intl = closure_0(analyticsLocations[33]).intl;
              open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj10);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        } catch (tmp57) {
          if (0 === analyticsLocations) {
            c4 = 3;
            throw tmp57;
          } else {
            c3 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_22();
  let tmp2 = stateFromStores;
  const tmp3 = analyticsLocations;
  obj = stateFromStores(analyticsLocations[21]);
  const items = [currentUser];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(analyticsLocations[21]);
  const items1 = [closure_7];
  importDefault = obj2.useStateFromStores(items1, () => closure_7.shouldSync("appearance"));
  let tmp5 = importDefault;
  const tmp6 = require("useAnalyticsLocations");
  analyticsLocations = tmp6(require("AnalyticsLocation").QUEST_HOME_PAGE).analyticsLocations;
  let obj3 = stateFromStores(analyticsLocations[24]);
  const currentAppIcon = obj3.useCurrentAppIcon();
  if (typeof usePerkSelectable === "function") {
    let obj4 = {};
    let tmp12 = HexagonCampaignSheet_str;
    const tmp2Result = tmp2(tmp3[20]);
    obj4[tmp9] = tmp2Result.useHexagonCampaignPerkAvailability(tmp11, HexagonCampaignSheet_str) === memo.SELECTABLE;
    if (typeof usePerkSelectable === "function") {
      const tmp2Result7 = tmp2(tmp3[20]);
      obj4[tmp14] = tmp2Result7.useHexagonCampaignPerkAvailability(tmp15, tmp12) === memo.SELECTABLE;
      if (typeof usePerkSelectable === "function") {
        const tmp2Result8 = tmp2(tmp3[20]);
        obj4[tmp16] = tmp2Result8.useHexagonCampaignPerkAvailability(tmp17, tmp12) === memo.SELECTABLE;
        const items2 = [HexagonCampaignPersistedStore];
        const tmp2Result9 = tmp2(tmp3[21]);
        const stateFromStores1 = tmp2Result9.useStateFromStores(items2, () => HexagonCampaignPersistedStore.hasAppliedPerk);
        const items3 = [HexagonCampaignPersistedStore];
        const tmp2Result10 = tmp2(tmp3[21]);
        const stateFromStores2 = tmp2Result10.useStateFromStores(items3, () => HexagonCampaignPersistedStore.previousPerkValues);
        let displayNameStyles;
        const hasHexagonCampaignDisplayNameFont = tmp2(tmp3[25]).hasHexagonCampaignDisplayNameFont;
        tmp2(tmp3[25]);
        if (stateFromStores != null) {
          displayNameStyles = stateFromStores.displayNameStyles;
        }
        let result = hasHexagonCampaignDisplayNameFont(displayNameStyles);
        let obj10 = obj5;
        let tmp26 = isHexagonCampaignAppIcon(currentAppIcon);
        const first = _slicedToArray(obj5.useState(stateFromStores1), 1)[0];
        const tmp29 = _slicedToArray(obj5.useState({}), 2);
        [tmp30, _slicedToArray] = tmp29;
        obj5 = {};
        let merged = Object.assign(obj4);
        let merged1 = Object.assign(tmp30);
        [first1, closure_7] = obj5.useState(false);
        currentUser = obj5.useRef(false);
        [tmp40, HexagonCampaignPersistedStore] = _slicedToArray(obj5.useState(0), 2);
        const _Math = Math;
        let tmp42 = obj;
        const tmp39 = _slicedToArray(obj5.useState(0), 2);
        const sum = Math.max(tmp5(tmp3[26])().bottom, obj) + 4;
        let displayNameStyles1;
        if (stateFromStores != null) {
          displayNameStyles1 = stateFromStores.displayNameStyles;
        }
        if (displayNameStyles1 == null) {
          displayNameStyles1 = obj;
        }
        const tmp5Result = tmp5(tmp3[27]);
        const result1 = tmp5Result.canUsePremiumProfileCustomization(stateFromStores);
        let tmp46 = displayNameStyles1;
        if (result) {
          let displayNameStyles2;
          const getHexagonCampaignRestoredDisplayNameStyles = tmp2(tmp3[25]).getHexagonCampaignRestoredDisplayNameStyles;
          tmp2(tmp3[25]);
          if (stateFromStores != null) {
            displayNameStyles2 = stateFromStores.displayNameStyles;
          }
          let obj6 = { currentDisplayNameStyles: displayNameStyles2, previousDisplayNameStyles: stateFromStores2.displayNameStyles, canUsePremiumProfileCustomization: result1 };
          let hexagonCampaignRestoredDisplayNameStyles = getHexagonCampaignRestoredDisplayNameStyles(obj6);
          if (hexagonCampaignRestoredDisplayNameStyles == null) {
            hexagonCampaignRestoredDisplayNameStyles = obj;
          }
          tmp46 = hexagonCampaignRestoredDisplayNameStyles;
        }
        const items4 = [result1, displayNameStyles1];
        memo = obj10.useMemo(() => {
          let tmp5;
          obj = {};
          if (result1) {
            const merged = Object.assign(displayNameStyles1);
            obj.fontId = HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
            tmp5 = obj;
          } else {
            const merged1 = Object.assign(obj);
            obj.fontId = HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
            tmp5 = obj;
          }
          return tmp5;
        }, items4);
        if (obj5[result1.DISPLAY_NAME_STYLE]) {
          tmp46 = memo;
        }
        let HEXAGON = currentAppIcon;
        if (tmp26) {
          let DEFAULT = stateFromStores2.appIconId;
          if (DEFAULT == null) {
            DEFAULT = tmp2(tmp3[28]).FreemiumAppIconIds.DEFAULT;
          }
          HEXAGON = DEFAULT;
        }
        if (obj5[result1.APP_ICON]) {
          HEXAGON = tmp2(tmp3[28]).LimitedTimeAppIconIds.HEXAGON;
        }
        const effect = obj10.useEffect(() => {
          obj = stateFromStores(analyticsLocations[29]);
          const obj2 = { content: stateFromStores(analyticsLocations[30]).QuestContent.AD_PERK_MODAL, sourceQuestContent: stateFromStores(analyticsLocations[30]).QuestContent.QUEST_HOME_MOBILE };
          const result = obj.trackHexagonCampaignContentViewed(obj2);
        }, []);
        if (null == stateFromStores) {
          return null;
        } else {
          let obj7 = { perk: tmp8.CLIENT_THEME, label: intl2.string(tmp5(tmp3[36]).TTUKuI), icon: closure_16(first1, obj8) };
          intl2 = tmp2(tmp3[33]).intl;
          obj8 = { style: tmp.rowIcon, children: closure_16(tmp2(tmp3[37]).Gradient, obj9) };
          obj9 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true };
          const items5 = [obj7, , ];
          const obj11 = { perk: result1.DISPLAY_NAME_STYLE, label: intl3.string(tmp5(tmp3[36]).fobter), icon: closure_16(first1, obj12) };
          intl3 = tmp2(tmp3[33]).intl;
          obj12 = { style: items6, children: closure_16(tmp2(tmp3[38]).Text, obj13) };
          items6 = [, ];
          ({ rowIcon: arr11[0], fontRowIcon: arr11[1] } = tmp);
          obj13 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.fontRowIconText, children: "Gg" };
          items5[1] = obj11;
          const obj14 = { perk: result1.APP_ICON, label: intl4.string(tmp5(tmp3[36]).DTv8Yq), icon: closure_16(tmp5Result3, obj15) };
          intl4 = tmp2(tmp3[33]).intl;
          obj15 = { id: tmp2(tmp3[28]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp.rowIcon };
          items5[2] = obj14;
          tmp5Result3 = tmp5(tmp3[39]);
          const obj16 = { header: closure_17(first1, obj17), footer: closure_16(first1, obj20), startExpanded: true, children: tmp62(first1, obj24) };
          obj17 = { children: items7 };
          BottomSheet = tmp2(tmp3[47]).BottomSheet;
          const obj18 = { title: intl5.string(tmp5(tmp3[36]).rZmLDm) };
          const BottomSheetTitleHeader = tmp2(tmp3[40]).BottomSheetTitleHeader;
          intl5 = tmp2(tmp3[33]).intl;
          items7 = [closure_16(BottomSheetTitleHeader, obj18), ];
          const obj19 = { style: tmp.badgeRow, children: closure_16(tmp5(tmp3[41]), {}) };
          items7[1] = closure_16(first1, obj19);
          obj20 = { style: items8, onLayout: tmp52, children: closure_16(Button, obj22) };
          items8 = [tmp.footer, ];
          const obj21 = { paddingBottom: sum };
          items8[1] = obj21;
          Button = tmp2(tmp3[42]).Button;
          const intl6 = tmp2(tmp3[33]).intl;
          const string = intl6.string;
          const t = tmp2(tmp3[33]).t;
          obj22 = {
            size: "lg",
            grow: true,
            text: string(first ? t["R3BPH+"] : t["1Qm822"]),
            onPress: function handleSave() {
                      return obj(...arguments);
                    },
            loading: first1,
            disabled: first1
          };
          obj24 = { style: obj25, children: items12 };
          const _Math2 = Math;
          let tmp62Result = obj5[tmp8.CLIENT_THEME];
          obj25 = { paddingBottom: Math.max(tmp40 - sum, 0) };
          const obj26 = { style: tmp.content, children: items11 };
          const obj27 = { style: tmp.card, children: items10 };
          const tmp60 = HEXAGON_GRADIENT_PRESET;
          if (tmp62Result) {
            const obj28 = { children: items9 };
            const obj29 = { gradient: tmp60, absolute: true, angleOverride };
            items9 = [tmp58(tmp2(tmp3[37]).Gradient, obj29), ];
            const obj30 = { style: tmp.cardShade };
            items9[1] = closure_16(first1, obj30);
            tmp62Result = tmp62(closure_18, obj28);
          }
          items10 = [tmp62Result, ];
          const obj31 = { style: tmp.previewArea, children: closure_16(tmp56, obj33) };
          const obj32 = { user: stateFromStores, displayName: username, selectedFontId: null, selectedEffectId: null, selectedColors: null, appIconId: HEXAGON, appIconScale: 0.8125, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true, chatMessage: intl.string(tmp5(tmp3[36])["U/irIt"]) };
          username = stateFromStores.globalName;
          tmp56 = closure_23;
          const tmp5Result4 = tmp5(tmp3[43]);
          if (username == null) {
            username = stateFromStores.username;
          }
          ({ fontId: obj23.selectedFontId, effectId: obj23.selectedEffectId, colors: obj23.selectedColors } = tmp46);
          obj33 = { children: closure_16(tmp5Result4, obj32) };
          intl = tmp2(tmp3[33]).intl;
          items10[1] = closure_16(first1, obj31);
          items11 = [tmp62(tmp59, obj27), ];
          const obj34 = { style: tmp.rows, children: closure_16(TableRowGroup, obj35) };
          obj35 = {
            hasIcons: true,
            children: items5.map((perk) => {
                      let icon;
                      let label;
                      let tmp2;
                      perk = perk.perk;
                      ({ label, icon } = perk);
                      obj = {
                        icon,
                        label,
                        value: obj5[perk],
                        disabled: tmp2,
                        onValueChange(arg0) {
                          let closure_0 = arg0;
                          return closure_1_4((arg0) => {
                            obj = {};
                            const merged = Object.assign(arg0);
                            obj[perk] = closure_0;
                            return obj;
                          });
                        }
                      };
                      tmp2 = first1;
                      const TableSwitchRow = stateFromStores(analyticsLocations[45]).TableSwitchRow;
                      const tmp = closure_1_16;
                      if (!first1) {
                        tmp2 = !obj4[perk];
                      }
                      return tmp(TableSwitchRow, obj, perk);
                    })
          };
          TableRowGroup = tmp2(tmp3[44]).TableRowGroup;
          items11[1] = closure_16(first1, obj34);
          items12 = [tmp62(tmp59, obj26), ];
          const obj36 = { style: tmp.legal, children: closure_16(tmp5(tmp3[46]), { showLogo: true }) };
          items12[1] = closure_16(first1, obj36);
          return closure_16(BottomSheet, obj16);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
size = size_mod;
let result1 = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignSheet.tsx");

export default tmp8;
