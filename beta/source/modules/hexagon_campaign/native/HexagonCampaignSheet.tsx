// Module ID: 16415
// Function ID: 16416
// Name: HexagonCampaignSheet
// Dependencies: [5, 32, 19, 17, 1192, 1386, 15648, 4938, 5142, 1239, 1082, 21, 1396, 1397, 9456, 4913, 575, 4943, 9457, 504, 7520, 7539, 14053, 4941, 7597, 1628, 2173, 4939, 15866, 6561, 16416, 5595, 1112, 5127, 16414, 4597, 5474, 9659, 5504, 16424, 5141, 7515, 15890, 5511, 16425, 7348, 7556, 16426, 2]
// Exports: default

// Module 16415 (HexagonCampaignSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1082 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1239 */;
import DisplayNameFont from "DisplayNameFont" /* 1396 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1397 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5142 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9456 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1192 */;
import UserStore from "UserStore" /* 1386 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15648 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4938 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c3, c4, closure_1, closure_9, importDefault, perk;

let Platform;
let StyleSheet;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let items;
let items1;
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
let rect1;
let unpackModuleId;
function ScaledPreview(arg0) {
  let PX_12;
  let c0;
  let children;
  let items;
  let items1;
  let overlay;
  let tmp3;
  c0 = undefined;
  ({ children, overlay } = arg0);
  const tmp = closure_20();
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
  obj = { style: items, children: items1 };
  items = [tmp.scaledPreviewContainer, { marginTop: PX_12 }];
  items1 = [, ];
  const obj2 = { style: tmp.scaledPreview, onLayout: callback, children };
  items1[0] = closure_15(metroRequire, obj2);
  items1[1] = overlay;
  return authStore3(metroRequire, obj);
}
({ Platform, View: metroRequire, StyleSheet } = react_native);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HexagonCampaignPerk: unpackModuleId, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const HEXAGON_GRADIENT_PRESET = ClientThemesConstants.HEXAGON_GRADIENT_PRESET;
const Fonts = Constants.Fonts;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let size = Math.round(66.3);
let obj = { fontId: DisplayNameFont.DisplayNameFont.DEFAULT, effectId: DisplayNameEffect.DisplayNameEffect.SOLID, colors: [] };
let PRIMARY_SEMIBOLD = useDisplayNameStylesFont.DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
if (PRIMARY_SEMIBOLD == null) {
  PRIMARY_SEMIBOLD = Fonts.PRIMARY_SEMIBOLD;
}
let createStyles = createStyles_mod;
let obj2 = { content: obj3, card: obj4, cardShade: obj5, previewArea: obj6, scaledPreviewContainer: { width: 288 }, scaledPreview: rect, previewAppIcon: rect1, rows: obj7, rowIcon: size, fontRowIcon: obj8, fontRowIconText: { fontFamily: PRIMARY_SEMIBOLD }, badgeRow: obj9, footer: obj10, legal: obj11 };
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj4 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.OPACITY_BLACK_52 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { height: 274, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center" };
rect = { position: "absolute", top: 0, left: 0, width: 360, transform: items, transformOrigin: "top left" };
items = [{ scale: 0.8 }];
rect1 = { position: "absolute", left: Math.round(214.20000000000002), top: Math.round(59), borderRadius: 0.65 * nativeDefault.radii.xl, borderCurve: "continuous", borderWidth: 0, transform: items1 };
items1 = [{ rotate: "15deg" }];
obj7 = { paddingTop: nativeDefault.space.PX_16 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 0 };
obj8 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj9 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj10 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj11 = { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_16 };
let closure_20 = createStyles(obj2);
size = size_mod;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignSheet.tsx");

export default function HexagonCampaignSheet() {
  let APP_ICON;
  let APP_ICON2;
  let Button;
  let CLIENT_THEME;
  let CLIENT_THEME2;
  let DISPLAY_NAME_STYLE;
  let DISPLAY_NAME_STYLE2;
  let TableRowGroup;
  let Text;
  let analyticsLocations;
  let closure_7;
  let currentUser;
  let first1;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let items10;
  let items11;
  let items12;
  let items6;
  let items7;
  let items8;
  let items9;
  let memo;
  let obj11;
  let obj15;
  let obj16;
  let obj18;
  let obj19;
  let obj21;
  let obj23;
  let obj26;
  let obj28;
  let obj29;
  let obj30;
  let obj38;
  let obj39;
  let obj40;
  let obj42;
  let onLayout;
  let ref;
  let result2;
  let stateFromStores;
  let tmp18;
  let tmp39;
  let tmp6Result3;
  let tmp6Result4;
  let username;
  obj = function _handleSave() {
    let displayNameStyles;
    let isThemeSynced;
    let ref;
    let selection;
    obj = _asyncToGenerator(async (arg0, value) => {
      let c2;
      let intl;
      let intl2;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_0;
          let didApply;
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
              closure_0 = tmp4;
              didApply = undefined;
              if (null != stateFromStores) {
                if (!ref.current) {
                  ref.current = true;
                  closure_2_7(true);
                  didApply = false;
                  analyticsLocations = 1;
                  obj5 = { selection, displayNameStyles, premiumType: tmp66.premiumType, isThemeSynced, analyticsLocations };
                  const obj7 = closure_0(analyticsLocations[30]);
                  const result = obj7.applyHexagonCampaignPerks(obj5);
                  closure_2_9.current = result;
                  c3 = 2;
                  c4 = 1;
                  const obj6 = { value: result, done: false };
                  return obj6;
                }
              }
            }
          } else {
            if (1 === c3) {
              analyticsLocations = 0;
              didApply = false;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              analyticsLocations = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              didApply = value.didApply;
              analyticsLocations = 0;
            }
            closure_129_8.current = false;
            closure_129_7(false);
            const tmp12 = didApply;
            if (tmp12) {
              const obj8 = { perks: values.filter((item) => closure_1_5[item]), content: closure_0(analyticsLocations[29]).QuestContent.AD_PERK_MODAL, sourceQuestContent: closure_0(analyticsLocations[29]).QuestContent.QUEST_HOME_MOBILE };
              const _Object = Object;
              const trackHexagonCampaignPerkAction = closure_0(analyticsLocations[28]).trackHexagonCampaignPerkAction;
              const tmp26 = closure_0(analyticsLocations[28]);
              values = Object.values(result2);
              const result1 = trackHexagonCampaignPerkAction(obj8);
              const obj4 = tmp(analyticsLocations[33]);
              obj4.hideActionSheet(closure_0(analyticsLocations[34]).HEXAGON_CAMPAIGN_SHEET_KEY);
              const _Object2 = Object;
              const values2 = Object.values(closure_129_5);
              const _Boolean = Boolean;
              if (values2.some(Boolean)) {
                const obj9 = { text: intl2.string(tmp(analyticsLocations[35]).fX2UkH), variant: "success" };
                const open2 = tmp(analyticsLocations[31]).open;
                const tmp42 = tmp(analyticsLocations[31]);
                intl2 = closure_0(analyticsLocations[32]).intl;
                open2("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj9);
              }
            } else {
              const obj10 = { text: intl.string(closure_0(analyticsLocations[32]).t.F8FvUy) };
              const open = tmp(analyticsLocations[31]).open;
              const tmp16 = tmp(analyticsLocations[31]);
              intl = closure_0(analyticsLocations[32]).intl;
              open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj10);
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp59) {
          if (0 === analyticsLocations) {
            c4 = 3;
            throw tmp59;
          } else {
            c3 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_20();
  let tmp2 = stateFromStores;
  const tmp3 = analyticsLocations;
  obj = stateFromStores(analyticsLocations[18]);
  const displayNameFontsAvailable = obj.useDisplayNameFontsAvailable();
  let obj2 = stateFromStores(analyticsLocations[19]);
  const items = [currentUser];
  stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = stateFromStores(analyticsLocations[19]);
  const items1 = [closure_7];
  importDefault = obj3.useStateFromStores(items1, () => closure_7.shouldSync("appearance"));
  const tmp7 = require("useAnalyticsLocations");
  analyticsLocations = tmp7(require("AnalyticsLocation").QUEST_HOME_PAGE).analyticsLocations;
  let obj4 = stateFromStores(analyticsLocations[22]);
  const currentAppIcon = obj4.useCurrentAppIcon();
  let obj5 = {};
  ({ CLIENT_THEME, CLIENT_THEME: CLIENT_THEME2 } = result2);
  let obj6 = stateFromStores(analyticsLocations[17]);
  obj5[CLIENT_THEME] = obj6.useHexagonCampaignPerkAvailability(CLIENT_THEME2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ DISPLAY_NAME_STYLE, DISPLAY_NAME_STYLE: DISPLAY_NAME_STYLE2 } = result2);
  let obj7 = stateFromStores(analyticsLocations[17]);
  obj5[DISPLAY_NAME_STYLE] = obj7.useHexagonCampaignPerkAvailability(DISPLAY_NAME_STYLE2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ APP_ICON, APP_ICON: APP_ICON2 } = result2);
  let obj8 = stateFromStores(analyticsLocations[17]);
  obj5[APP_ICON] = obj8.useHexagonCampaignPerkAvailability(APP_ICON2, "HexagonCampaignSheet") === memo.SELECTABLE;
  let obj9 = stateFromStores(analyticsLocations[19]);
  const items2 = [closure_9];
  const stateFromStores1 = obj9.useStateFromStores(items2, () => closure_9.hasAppliedPerk);
  let obj10 = stateFromStores(analyticsLocations[19]);
  const items3 = [closure_9];
  const stateFromStores2 = obj10.useStateFromStores(items3, () => closure_9.previousPerkValues);
  let tmp12 = stateFromStores(analyticsLocations[23]);
  let displayNameStyles;
  const hasHexagonCampaignDisplayNameFont = tmp12.hasHexagonCampaignDisplayNameFont;
  if (stateFromStores != null) {
    displayNameStyles = stateFromStores.displayNameStyles;
  }
  let result = hasHexagonCampaignDisplayNameFont(displayNameStyles);
  const tmp2Result = tmp2(tmp3[23]);
  let result1 = tmp2Result.isHexagonCampaignAppIcon(currentAppIcon);
  const first = _slicedToArray(obj11.useState(stateFromStores1), 1)[0];
  const tmp17 = _slicedToArray(obj11.useState({}), 2);
  [tmp18, _slicedToArray] = tmp17;
  obj11 = {};
  let merged = Object.assign(obj5);
  let merged1 = Object.assign(tmp18);
  [first1, closure_7] = obj11.useState(false);
  currentUser = obj11.useRef(false);
  closure_9 = obj11.useRef(null);
  const tmp23 = require("useMeasuredLayout")();
  const height = tmp23.height;
  let num = 0;
  ({ ref, onLayout } = tmp23);
  if (undefined !== height) {
    num = height;
  }
  const sum = Math.max(tmp6(tmp3[25])().bottom, obj) + 4;
  let displayNameStyles1;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  if (displayNameStyles1 == null) {
    displayNameStyles1 = obj;
  }
  const tmp6Result = require("PremiumUtils");
  result2 = tmp6Result.canUsePremiumProfileCustomization(stateFromStores);
  let tmp27 = displayNameStyles1;
  if (result) {
    let displayNameStyles2;
    const getHexagonCampaignRestoredDisplayNameStyles = tmp2(tmp3[23]).getHexagonCampaignRestoredDisplayNameStyles;
    tmp2(tmp3[23]);
    if (stateFromStores != null) {
      displayNameStyles2 = stateFromStores.displayNameStyles;
    }
    const obj13 = { currentDisplayNameStyles: displayNameStyles2, previousDisplayNameStyles: stateFromStores2.displayNameStyles, canUsePremiumProfileCustomization: result2 };
    let hexagonCampaignRestoredDisplayNameStyles = getHexagonCampaignRestoredDisplayNameStyles(obj13);
    if (hexagonCampaignRestoredDisplayNameStyles == null) {
      hexagonCampaignRestoredDisplayNameStyles = obj;
    }
    tmp27 = hexagonCampaignRestoredDisplayNameStyles;
  }
  const items4 = [result2, displayNameStyles1];
  memo = obj12.useMemo(() => {
    let tmp5;
    obj = {};
    if (result2) {
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
  if (obj11[result2.DISPLAY_NAME_STYLE]) {
    tmp27 = memo;
  }
  let HEXAGON = currentAppIcon;
  if (result1) {
    let DEFAULT = stateFromStores2.appIconId;
    if (DEFAULT == null) {
      DEFAULT = tmp2(tmp3[27]).FreemiumAppIconIds.DEFAULT;
    }
    HEXAGON = DEFAULT;
  }
  if (obj11[result2.APP_ICON]) {
    HEXAGON = tmp2(tmp3[27]).LimitedTimeAppIconIds.HEXAGON;
  }
  const effect = obj12.useEffect(() => {
    obj = stateFromStores(analyticsLocations[28]);
    const obj2 = { content: stateFromStores(analyticsLocations[29]).QuestContent.AD_PERK_MODAL, sourceQuestContent: stateFromStores(analyticsLocations[29]).QuestContent.QUEST_HOME_MOBILE };
    const result = obj.trackHexagonCampaignContentViewed(obj2);
  }, []);
  const tmp2Result4 = tmp2(tmp3[36]);
  const unmountEffect = tmp2Result4.useUnmountEffect(obj5(function*(arg0, value) {
    let c2;
    let closure_0;
    let intl;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === analyticsLocations) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp4;
            tmp = undefined;
            analyticsLocations = 1;
            c3 = 1;
            const obj4 = { value: ref.current, done: false };
            return obj4;
          }
        } else {
          if (1 === analyticsLocations) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj5 = { value, done: true };
              return obj5;
            } else {
              tmp = value;
              const didApply = null != tmp && tmp.didApply && null != tmp.updateAppIcon;
              if (didApply) {
                analyticsLocations = 2;
                c3 = 1;
                const obj6 = { value: tmp.updateAppIcon(), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (!value) {
            obj = { text: intl.string(tmp(analyticsLocations[32]).t.F8FvUy) };
            const open = closure_1(analyticsLocations[31]).open;
            const tmp8 = closure_1(analyticsLocations[31]);
            intl = tmp(analyticsLocations[32]).intl;
            open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        c3 = 3;
        throw tmp18;
      }
    }
  }));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj14 = { perk: result2.CLIENT_THEME, label: intl5.string(require("module_4597").TTUKuI), icon: closure_15(first1, obj15) };
    intl5 = tmp2(tmp3[32]).intl;
    let tmp42 = closure_15;
    obj15 = { style: tmp.rowIcon, children: closure_15(tmp2(tmp3[37]).Gradient, obj16) };
    const items5 = [obj14, , ];
    obj16 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true };
    const obj17 = { perk: result2.DISPLAY_NAME_STYLE, label: intl6.string(tmp2(tmp3[32]).t.NEzEws), icon: tmp42(first1, obj18) };
    intl6 = tmp2(tmp3[32]).intl;
    obj18 = { style: items6, children: tmp42(Text, obj19) };
    items6 = [, ];
    ({ rowIcon: arr13[0], fontRowIcon: arr13[1] } = tmp);
    let fontRowIconText;
    Text = tmp2(tmp3[38]).Text;
    const tmp44 = HEXAGON_GRADIENT_PRESET;
    if (displayNameFontsAvailable) {
      fontRowIconText = tmp.fontRowIconText;
    }
    obj19 = { variant: "body-sm/semibold", color: "text-overlay-light", style: fontRowIconText, children: "Gg" };
    items5[1] = obj17;
    const obj20 = { perk: result2.APP_ICON, label: intl.string(tmp2(tmp3[32]).t.RPh2ou), icon: tmp42(tmp6Result3, obj21) };
    intl = tmp2(tmp3[32]).intl;
    obj21 = { id: tmp2(tmp3[27]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp.rowIcon };
    items5[2] = obj20;
    tmp6Result3 = require("AppIcon");
    const obj22 = { header: closure_16(first1, obj23), footer: tmp42(first1, obj26), startExpanded: true, children: tmp36(first1, obj29) };
    obj23 = { children: items7 };
    const BottomSheet = tmp2(tmp3[40]).BottomSheet;
    const obj24 = { title: intl2.string(require("module_4597").rZmLDm) };
    const BottomSheetTitleHeader = tmp2(tmp3[41]).BottomSheetTitleHeader;
    intl2 = tmp2(tmp3[32]).intl;
    items7 = [tmp42(BottomSheetTitleHeader, obj24), ];
    const obj25 = { style: tmp.badgeRow, children: tmp42(require("HexagonCampaignDaysLeftBadge"), {}) };
    items7[1] = tmp42(first1, obj25);
    obj26 = { style: items8, ref, onLayout, children: tmp42(Button, obj28) };
    items8 = [tmp.footer, ];
    const obj27 = { paddingBottom: sum };
    items8[1] = obj27;
    Button = tmp2(tmp3[43]).Button;
    const intl3 = tmp2(tmp3[32]).intl;
    const string = intl3.string;
    const t = tmp2(tmp3[32]).t;
    obj28 = {
      size: "lg",
      grow: true,
      text: string(first ? t["R3BPH+"] : t["1Qm822"]),
      onPress: function handleSave() {
          return obj(...arguments);
        },
      loading: first1,
      disabled: first1
    };
    obj29 = { style: obj30, children: items12 };
    const _Math = Math;
    let tmp36Result = obj11[tmp9.CLIENT_THEME];
    obj30 = { paddingBottom: Math.max(num - sum, 0) };
    const obj31 = { style: tmp.content, children: items11 };
    const obj32 = { style: tmp.card, children: items10 };
    if (tmp36Result) {
      const obj33 = { children: items9 };
      const obj34 = { gradient: tmp44, absolute: true, angleOverride: 143.48 };
      items9 = [tmp42(tmp2(tmp3[37]).Gradient, obj34), ];
      const obj35 = { style: tmp.cardShade };
      items9[1] = tmp42(first1, obj35);
      tmp36Result = tmp36(closure_17, obj33);
    }
    items10 = [tmp36Result, ];
    const obj36 = { style: tmp.previewArea, children: tmp42(tmp39, obj38) };
    obj38 = { overlay: tmp42(require("AppIcon"), obj39), children: tmp42(tmp6Result4, obj40) };
    obj39 = { id: HEXAGON, size, style: tmp.previewAppIcon };
    obj40 = { user: stateFromStores, displayName: username, selectedFontId: null, selectedEffectId: null, selectedColors: null, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true, chatMessage: intl4.string(require("module_4597")["U/irIt"]) };
    username = stateFromStores.globalName;
    tmp39 = ScaledPreview;
    tmp6Result4 = require("DisplayNameStylesEditPreview");
    if (username == null) {
      username = stateFromStores.username;
    }
    ({ fontId: obj37.selectedFontId, effectId: obj37.selectedEffectId, colors: obj37.selectedColors } = tmp27);
    intl4 = tmp2(tmp3[32]).intl;
    items10[1] = tmp42(first1, obj36);
    items11 = [tmp36(tmp43, obj32), ];
    const obj41 = { style: tmp.rows, children: tmp42(TableRowGroup, obj42) };
    obj42 = {
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
            value: obj11[perk],
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
          const TableSwitchRow = stateFromStores(analyticsLocations[46]).TableSwitchRow;
          const tmp = closure_1_15;
          if (!first1) {
            tmp2 = !obj5[perk];
          }
          return tmp(TableSwitchRow, obj, perk);
        })
    };
    TableRowGroup = tmp2(tmp3[45]).TableRowGroup;
    items11[1] = tmp42(first1, obj41);
    items12 = [tmp36(tmp43, obj31), ];
    const obj43 = { style: tmp.legal, children: tmp42(require("HexagonCampaignThemeLegal"), { showLogo: true }) };
    items12[1] = tmp42(first1, obj43);
    return tmp42(BottomSheet, obj22);
  }
};
