// Module ID: 17514
// Function ID: 17515
// Name: HexagonCampaignSheet
// Dependencies: [5, 32, 19, 17, 1193, 1385, 16727, 5268, 5504, 1240, 1083, 21, 1395, 1396, 10000, 5243, 575, 5273, 504, 7852, 7871, 15203, 5271, 7929, 1627, 2171, 5269, 16967, 5278, 17515, 5952, 1113, 5489, 17513, 4464, 5836, 10204, 5866, 17523, 5503, 7847, 16990, 5873, 17524, 7680, 7888, 17525, 2]
// Exports: default

// Module 17514 (HexagonCampaignSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1240 */;
import DisplayNameFont from "DisplayNameFont" /* 1395 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1396 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5504 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 10000 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import UserStore from "UserStore" /* 1385 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16727 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5268 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
  let analyticsLocations;
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
  let obj10;
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let obj20;
  let obj22;
  let obj25;
  let obj28;
  let obj29;
  let obj30;
  let obj37;
  let obj38;
  let obj39;
  let obj41;
  let onLayout;
  let ref;
  let result2;
  let stateFromStores;
  let tmp17;
  let tmp35;
  let tmp42;
  let tmp5Result3;
  let tmp5Result4;
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
                  const obj5 = { selection, displayNameStyles, premiumType: tmp66.premiumType, isThemeSynced, analyticsLocations };
                  const obj7 = closure_0(analyticsLocations[29]);
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
              const obj8 = { perks: values.filter((item) => closure_1_5[item]), content: closure_0(analyticsLocations[28]).QuestContent.AD_PERK_MODAL, sourceQuestContent: closure_0(analyticsLocations[28]).QuestContent.QUEST_HOME_MOBILE };
              const _Object = Object;
              const trackHexagonCampaignPerkAction = closure_0(analyticsLocations[27]).trackHexagonCampaignPerkAction;
              const tmp26 = closure_0(analyticsLocations[27]);
              values = Object.values(result2);
              const result1 = trackHexagonCampaignPerkAction(obj8);
              obj4 = tmp(analyticsLocations[32]);
              obj4.hideActionSheet(closure_0(analyticsLocations[33]).HEXAGON_CAMPAIGN_SHEET_KEY);
              const _Object2 = Object;
              const values2 = Object.values(closure_129_5);
              const _Boolean = Boolean;
              if (values2.some(Boolean)) {
                const obj9 = { text: intl2.string(tmp(analyticsLocations[34]).fX2UkH), variant: "success" };
                const open2 = tmp(analyticsLocations[30]).open;
                const tmp42 = tmp(analyticsLocations[30]);
                intl2 = closure_0(analyticsLocations[31]).intl;
                open2("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj9);
              }
            } else {
              obj10 = { text: intl.string(closure_0(analyticsLocations[31]).t.F8FvUy) };
              const open = tmp(analyticsLocations[30]).open;
              const tmp16 = tmp(analyticsLocations[30]);
              intl = closure_0(analyticsLocations[31]).intl;
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
  const items = [currentUser];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(analyticsLocations[18]);
  const items1 = [closure_7];
  importDefault = obj2.useStateFromStores(items1, () => closure_7.shouldSync("appearance"));
  let tmp5 = importDefault;
  const tmp6 = require("useAnalyticsLocations");
  analyticsLocations = tmp6(require("AnalyticsLocation").QUEST_HOME_PAGE).analyticsLocations;
  let obj3 = stateFromStores(analyticsLocations[21]);
  const currentAppIcon = obj3.useCurrentAppIcon();
  let obj4 = {};
  let tmp8 = result2;
  ({ CLIENT_THEME, CLIENT_THEME: CLIENT_THEME2 } = result2);
  let obj5 = stateFromStores(analyticsLocations[17]);
  obj4[CLIENT_THEME] = obj5.useHexagonCampaignPerkAvailability(CLIENT_THEME2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ DISPLAY_NAME_STYLE, DISPLAY_NAME_STYLE: DISPLAY_NAME_STYLE2 } = result2);
  let obj6 = stateFromStores(analyticsLocations[17]);
  obj4[DISPLAY_NAME_STYLE] = obj6.useHexagonCampaignPerkAvailability(DISPLAY_NAME_STYLE2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ APP_ICON, APP_ICON: APP_ICON2 } = result2);
  let obj7 = stateFromStores(analyticsLocations[17]);
  obj4[APP_ICON] = obj7.useHexagonCampaignPerkAvailability(APP_ICON2, "HexagonCampaignSheet") === memo.SELECTABLE;
  let obj8 = stateFromStores(analyticsLocations[18]);
  const items2 = [closure_9];
  const stateFromStores1 = obj8.useStateFromStores(items2, () => closure_9.hasAppliedPerk);
  let obj9 = stateFromStores(analyticsLocations[18]);
  const items3 = [closure_9];
  const stateFromStores2 = obj9.useStateFromStores(items3, () => closure_9.previousPerkValues);
  let displayNameStyles;
  const hasHexagonCampaignDisplayNameFont = stateFromStores(analyticsLocations[22]).hasHexagonCampaignDisplayNameFont;
  const tmp11 = stateFromStores(analyticsLocations[22]);
  if (stateFromStores != null) {
    displayNameStyles = stateFromStores.displayNameStyles;
  }
  let result = hasHexagonCampaignDisplayNameFont(displayNameStyles);
  const tmp2Result = tmp2(tmp3[22]);
  let result1 = tmp2Result.isHexagonCampaignAppIcon(currentAppIcon);
  const first = _slicedToArray(obj10.useState(stateFromStores1), 1)[0];
  let tmp16 = _slicedToArray(obj10.useState({}), 2);
  [tmp17, _slicedToArray] = tmp16;
  obj10 = {};
  let merged = Object.assign(obj4);
  let merged1 = Object.assign(tmp17);
  [first1, closure_7] = obj10.useState(false);
  currentUser = obj10.useRef(false);
  closure_9 = obj10.useRef(null);
  const tmp22 = tmp5(tmp3[23])();
  const height = tmp22.height;
  let num = 0;
  ({ ref, onLayout } = tmp22);
  if (undefined !== height) {
    num = height;
  }
  const sum = Math.max(tmp5(tmp3[24])().bottom, obj) + 4;
  let displayNameStyles1;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  if (displayNameStyles1 == null) {
    displayNameStyles1 = obj;
  }
  const tmp5Result = tmp5(tmp3[25]);
  result2 = tmp5Result.canUsePremiumProfileCustomization(stateFromStores);
  let tmp26 = displayNameStyles1;
  if (result) {
    let displayNameStyles2;
    const getHexagonCampaignRestoredDisplayNameStyles = tmp2(tmp3[22]).getHexagonCampaignRestoredDisplayNameStyles;
    tmp2(tmp3[22]);
    if (stateFromStores != null) {
      displayNameStyles2 = stateFromStores.displayNameStyles;
    }
    const obj12 = { currentDisplayNameStyles: displayNameStyles2, previousDisplayNameStyles: stateFromStores2.displayNameStyles, canUsePremiumProfileCustomization: result2 };
    let hexagonCampaignRestoredDisplayNameStyles = getHexagonCampaignRestoredDisplayNameStyles(obj12);
    if (hexagonCampaignRestoredDisplayNameStyles == null) {
      hexagonCampaignRestoredDisplayNameStyles = obj;
    }
    tmp26 = hexagonCampaignRestoredDisplayNameStyles;
  }
  const items4 = [result2, displayNameStyles1];
  memo = obj11.useMemo(() => {
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
  if (obj10[tmp8.DISPLAY_NAME_STYLE]) {
    tmp26 = memo;
  }
  let HEXAGON = currentAppIcon;
  if (result1) {
    let DEFAULT = stateFromStores2.appIconId;
    if (DEFAULT == null) {
      DEFAULT = tmp2(tmp3[26]).FreemiumAppIconIds.DEFAULT;
    }
    HEXAGON = DEFAULT;
  }
  if (obj10[tmp8.APP_ICON]) {
    HEXAGON = tmp2(tmp3[26]).LimitedTimeAppIconIds.HEXAGON;
  }
  const effect = obj11.useEffect(() => {
    obj = stateFromStores(analyticsLocations[27]);
    const obj2 = { content: stateFromStores(analyticsLocations[28]).QuestContent.AD_PERK_MODAL, sourceQuestContent: stateFromStores(analyticsLocations[28]).QuestContent.QUEST_HOME_MOBILE };
    const result = obj.trackHexagonCampaignContentViewed(obj2);
  }, []);
  const tmp2Result4 = tmp2(tmp3[35]);
  const unmountEffect = tmp2Result4.useUnmountEffect(obj4(function*(arg0, value) {
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
            obj4 = { value: ref.current, done: false };
            return obj4;
          }
        } else {
          if (1 === analyticsLocations) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
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
            obj = { text: intl.string(tmp(analyticsLocations[31]).t.F8FvUy) };
            const open = closure_1(analyticsLocations[30]).open;
            const tmp8 = closure_1(analyticsLocations[30]);
            intl = tmp(analyticsLocations[31]).intl;
            open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp21) {
        c3 = 3;
        throw tmp21;
      }
    }
  }));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj13 = { perk: tmp8.CLIENT_THEME, label: intl2.string(tmp5(tmp3[34]).TTUKuI), icon: closure_15(first1, obj14) };
    intl2 = tmp2(tmp3[31]).intl;
    obj14 = { style: tmp.rowIcon, children: closure_15(tmp2(tmp3[36]).Gradient, obj15) };
    const items5 = [obj13, , ];
    obj15 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true };
    const obj16 = { perk: tmp8.DISPLAY_NAME_STYLE, label: intl3.string(tmp2(tmp3[31]).t.NEzEws), icon: closure_15(first1, obj17) };
    intl3 = tmp2(tmp3[31]).intl;
    obj17 = { style: items6, children: closure_15(tmp2(tmp3[37]).Text, obj18) };
    items6 = [, ];
    ({ rowIcon: arr11[0], fontRowIcon: arr11[1] } = tmp);
    obj18 = { variant: "body-sm/semibold", color: "text-overlay-light", style: tmp.fontRowIconText, children: "Gg" };
    items5[1] = obj16;
    const obj19 = { perk: tmp8.APP_ICON, label: intl4.string(tmp2(tmp3[31]).t.RPh2ou), icon: closure_15(tmp5Result3, obj20) };
    intl4 = tmp2(tmp3[31]).intl;
    obj20 = { id: tmp2(tmp3[26]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp.rowIcon };
    items5[2] = obj19;
    tmp5Result3 = tmp5(tmp3[38]);
    const obj21 = { header: closure_16(first1, obj22), footer: closure_15(first1, obj25), startExpanded: true, children: tmp42(first1, obj29) };
    tmp42 = closure_16;
    obj22 = { children: items7 };
    const BottomSheet = tmp2(tmp3[39]).BottomSheet;
    const obj23 = { title: intl5.string(tmp5(tmp3[34]).rZmLDm) };
    const BottomSheetTitleHeader = tmp2(tmp3[40]).BottomSheetTitleHeader;
    intl5 = tmp2(tmp3[31]).intl;
    items7 = [closure_15(BottomSheetTitleHeader, obj23), ];
    const obj24 = { style: tmp.badgeRow, children: closure_15(tmp5(tmp3[41]), {}) };
    items7[1] = closure_15(first1, obj24);
    obj25 = { style: items8, ref, onLayout, children: closure_15(Button, obj28) };
    items8 = [tmp.footer, ];
    const obj26 = { paddingBottom: sum };
    items8[1] = obj26;
    Button = tmp2(tmp3[42]).Button;
    const intl6 = tmp2(tmp3[31]).intl;
    const string = intl6.string;
    const t = tmp2(tmp3[31]).t;
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
    let tmp42Result = obj10[tmp8.CLIENT_THEME];
    obj30 = { paddingBottom: Math.max(num - sum, 0) };
    const obj31 = { style: tmp.content, children: items11 };
    const obj32 = { style: tmp.card, children: items10 };
    const tmp40 = HEXAGON_GRADIENT_PRESET;
    if (tmp42Result) {
      const obj33 = { children: items9 };
      const obj34 = { gradient: tmp40, absolute: true, angleOverride: 143.48 };
      items9 = [tmp38(tmp2(tmp3[36]).Gradient, obj34), ];
      const obj35 = { style: tmp.cardShade };
      items9[1] = closure_15(first1, obj35);
      tmp42Result = tmp42(closure_17, obj33);
    }
    items10 = [tmp42Result, ];
    const obj36 = { style: tmp.previewArea, children: closure_15(tmp35, obj37) };
    obj37 = { overlay: closure_15(tmp5(tmp3[38]), obj38), children: closure_15(tmp5Result4, obj39) };
    obj38 = { id: HEXAGON, size, style: tmp.previewAppIcon };
    obj39 = { user: stateFromStores, displayName: username, selectedFontId: null, selectedEffectId: null, selectedColors: null, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true, chatMessage: intl.string(tmp5(tmp3[34])["U/irIt"]) };
    username = stateFromStores.globalName;
    tmp35 = ScaledPreview;
    tmp5Result4 = tmp5(tmp3[43]);
    if (username == null) {
      username = stateFromStores.username;
    }
    ({ fontId: obj27.selectedFontId, effectId: obj27.selectedEffectId, colors: obj27.selectedColors } = tmp26);
    intl = tmp2(tmp3[31]).intl;
    items10[1] = closure_15(first1, obj36);
    items11 = [tmp42(tmp39, obj32), ];
    const obj40 = { style: tmp.rows, children: closure_15(TableRowGroup, obj41) };
    obj41 = {
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
            value: obj10[perk],
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
          const tmp = closure_1_15;
          if (!first1) {
            tmp2 = !obj4[perk];
          }
          return tmp(TableSwitchRow, obj, perk);
        })
    };
    TableRowGroup = tmp2(tmp3[44]).TableRowGroup;
    items11[1] = closure_15(first1, obj40);
    items12 = [tmp42(tmp39, obj31), ];
    const obj42 = { style: tmp.legal, children: closure_15(tmp5(tmp3[46]), { showLogo: true }) };
    items12[1] = closure_15(first1, obj42);
    return closure_15(BottomSheet, obj21);
  }
};
