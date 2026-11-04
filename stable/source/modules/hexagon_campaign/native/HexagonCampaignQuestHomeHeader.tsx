// Module ID: 16410
// Function ID: 16411
// Name: HexagonCampaignQuestHomeHeader
// Dependencies: [19, 17, 5028, 1087, 21, 5003, 587, 558, 576, 5069, 5032, 5284, 683, 7824, 6749, 7833, 6745, 7782, 16411, 5266, 15908, 5701, 16422, 5290, 16423, 1128, 4279, 16424, 6009, 5010, 5276, 2]

// Module 16410 (HexagonCampaignQuestHomeHeader)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import Constants from "Constants" /* 1087 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5028 */;
import QuestTypes from "QuestTypes" /* 6745 */;
import AdCreativeType from "AdCreativeType" /* 6749 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7782 */;
import AnalyticsActions from "AnalyticsActions" /* 7824 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7833 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const adContentId = HexagonCampaignConstants.HEXAGON_CAMPAIGN_AD_CONTENT_ID;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, banner: { width: "100%", aspectRatio: 1 }, bannerImage: { width: "100%", height: "100%" }, logo: size, sponsoredTag: rect, cardShadow: obj3, card: obj4, cardArt: obj5, cardContent: obj6, cardBody: { opacity: 0.8 } };
obj2 = { width: "100%", maxWidth: 448, alignSelf: "center", marginBottom: nativeDefault.space.PX_40 };
createStyles = createStyles.createStyles;
size = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_8, width: 88, height: 88 };
rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj3 = { marginTop: -146, marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj4 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
obj6 = { paddingTop: nativeDefault.space.PX_10, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignQuestHomeHeader() {
  let intl;
  let isHexagonCampaignQuestHomeHeaderEnabled;
  let items2;
  let tmp10;
  let tmp11;
  let tmp8;
  let token;
  let tmp = isHexagonCampaignQuestHomeHeaderEnabled;
  let obj = isHexagonCampaignQuestHomeHeaderEnabled(576);
  const cResult = obj.c(52);
  const tmp4 = closure_10();
  let obj2 = isHexagonCampaignQuestHomeHeaderEnabled(5069);
  const theme = obj2.useThemeContext().theme;
  let obj3 = isHexagonCampaignQuestHomeHeaderEnabled(5032);
  isHexagonCampaignQuestHomeHeaderEnabled = obj3.useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  const obj4 = isHexagonCampaignQuestHomeHeaderEnabled(5284);
  token = obj4.useToken(token(587).colors.BACKGROUND_BASE_LOWEST);
  if (cResult[0] !== token) {
    const items = [0, 0.83, 1];
    const mapped = items.map((item) => {
      const obj = _modDef683(token);
      const alphaResult = obj.alpha(item);
      return alphaResult.css();
    });
    cResult[0] = token;
    cResult[1] = mapped;
    tmp8 = mapped;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== isHexagonCampaignQuestHomeHeaderEnabled) {
    class H {
      constructor() {
        let obj2;
        const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
        if (tmp) {
          const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
          const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
          AnalyticsActions;
          obj2 = {};
          const obj3 = AnalyticsTypes;
          const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
          const merged1 = Object.assign(getDeviceMetadataDefault());
          trackAdContentEvent(obj);
        }
      }
    }
    const items1 = [isHexagonCampaignQuestHomeHeaderEnabled];
    cResult[2] = isHexagonCampaignQuestHomeHeaderEnabled;
    cResult[3] = H;
    cResult[4] = items1;
    tmp11 = items1;
    tmp10 = H;
  } else {
    class H {
      constructor() {
        let obj2;
        const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
        if (tmp) {
          const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
          const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
          AnalyticsActions;
          obj2 = {};
          const obj3 = AnalyticsTypes;
          const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
          const merged1 = Object.assign(getDeviceMetadataDefault());
          trackAdContentEvent(obj);
        }
      }
    }
    tmp11 = cResult[4];
  }
  const effect = react.useEffect(tmp10, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        let obj2;
        const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
        if (tmp) {
          const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
          const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
          AnalyticsActions;
          obj2 = {};
          const obj3 = AnalyticsTypes;
          const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
          const merged1 = Object.assign(getDeviceMetadataDefault());
          trackAdContentEvent(obj);
        }
      }
    }
    cResult[5] = tmp14;
  } else {
    class H {
      constructor() {
        let obj2;
        const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
        if (tmp) {
          const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
          const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
          AnalyticsActions;
          obj2 = {};
          const obj3 = AnalyticsTypes;
          const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
          const merged1 = Object.assign(getDeviceMetadataDefault());
          trackAdContentEvent(obj);
        }
      }
    }
  }
  if (isHexagonCampaignQuestHomeHeaderEnabled) {
    let tmp20;
    let tmp28;
    class H {
      constructor() {
        let obj2;
        const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
        if (tmp) {
          const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
          const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
          AnalyticsActions;
          obj2 = {};
          const obj3 = AnalyticsTypes;
          const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
          const merged1 = Object.assign(getDeviceMetadataDefault());
          trackAdContentEvent(obj);
        }
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
      cResult[6] = tmp16;
    } else {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
    }
    const container = tmp4.container;
    if (cResult[7] !== tmp4.bannerImage) {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
      const obj5 = { source: token(16422), style: tmp4.bannerImage, resizeMode: "cover", accessible: false };
      const tmp6Result = token(5701);
      cResult[7] = tmp4.bannerImage;
      cResult[8] = closure_8(tmp6Result, obj5);
      const tmp19 = closure_8(tmp6Result, obj5);
    } else {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
      cResult[9] = tmp21;
      tmp20 = tmp21;
    } else {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
    }
    if (cResult[10] !== tmp8) {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
      const obj6 = { colors: tmp8, locations: tmp20, style: closure_4.absoluteFill, pointerEvents: "none" };
      cResult[10] = tmp8;
      cResult[11] = closure_8(token(5290), obj6);
      const tmp24 = closure_8(token(5290), obj6);
    } else {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
    }
    if (cResult[12] !== tmp4.logo) {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
      const obj7 = { source: token(16423), style: tmp4.logo, resizeMode: "contain", accessible: false };
      const tmp6Result2 = token(5701);
      cResult[12] = tmp4.logo;
      cResult[13] = closure_8(tmp6Result2, obj7);
      const tmp27 = closure_8(tmp6Result2, obj7);
    } else {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
      const obj8 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl.string(token(4279).kVJc0r) };
      let Text = tmp(5266).Text;
      intl = tmp(1128).intl;
      const tmp29 = closure_8(Text, obj8);
      cResult[14] = tmp29;
      tmp28 = tmp29;
    } else {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
    }
    if (cResult[15] !== tmp4.sponsoredTag) {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
      const obj9 = { style: tmp4.sponsoredTag, children: tmp28 };
      cResult[15] = tmp4.sponsoredTag;
      cResult[16] = closure_8(closure_5, obj9);
      const tmp32 = closure_8(closure_5, obj9);
    } else {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
    }
    if (cResult[17] === tmp4.banner) {
      class H {
        constructor() {
          let obj2;
          const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
          if (tmp) {
            const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
            const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
            AnalyticsActions;
            obj2 = {};
            const obj3 = AnalyticsTypes;
            const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
            const merged1 = Object.assign(getDeviceMetadataDefault());
            trackAdContentEvent(obj);
          }
        }
      }
    }
    const obj10 = { style: tmp4.banner, children: items2 };
    items2 = [tmp17, tmp22, tmp25, tmp30];
    cResult[17] = tmp4.banner;
    cResult[18] = tmp30;
    cResult[19] = tmp17;
    cResult[20] = tmp22;
    cResult[21] = tmp25;
    cResult[22] = closure_9(closure_5, obj10);
    const tmp36 = closure_9(closure_5, obj10);
  } else {
    class H {
      constructor() {
        let obj2;
        const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
        if (tmp) {
          const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
          const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
          AnalyticsActions;
          obj2 = {};
          const obj3 = AnalyticsTypes;
          const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
          const merged1 = Object.assign(getDeviceMetadataDefault());
          trackAdContentEvent(obj);
        }
      }
    }
    return null;
  }
}) : (function HexagonCampaignQuestHomeHeader() {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isHexagonCampaignQuestHomeHeaderEnabled;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj12;
  let obj20;
  let token;
  let tmp = closure_10();
  let obj = isHexagonCampaignQuestHomeHeaderEnabled(5069);
  const theme = obj.useThemeContext().theme;
  let obj2 = isHexagonCampaignQuestHomeHeaderEnabled(5032);
  isHexagonCampaignQuestHomeHeaderEnabled = obj2.useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  let obj3 = isHexagonCampaignQuestHomeHeaderEnabled(5284);
  token = obj3.useToken(token(587).colors.BACKGROUND_BASE_LOWEST);
  let items = [token];
  const items1 = [isHexagonCampaignQuestHomeHeaderEnabled];
  const memo = react.useMemo(() => {
    const items = [0, 0.83, 1];
    return items.map((item) => {
      const obj = token(dependencyMap[12])(closure_1_1);
      const alphaResult = obj.alpha(item);
      return alphaResult.css();
    });
  }, items);
  const effect = react.useEffect(() => {
    let obj2;
    const tmp = isHexagonCampaignQuestHomeHeaderEnabled;
    if (tmp) {
      const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj2 = {};
      const obj3 = AnalyticsTypes;
      const merged = Object.assign(obj3.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      trackAdContentEvent(obj);
    }
  }, items1);
  let tmp11Result = null;
  if (isHexagonCampaignQuestHomeHeaderEnabled) {
    const obj4 = { style: tmp.container, children: items3 };
    const obj5 = { style: tmp.banner, children: items2 };
    const obj6 = { source: token(16422), style: tmp.bannerImage, resizeMode: "cover", accessible: false };
    const tmp5Result = token(5701);
    items2 = [closure_8(tmp5Result, obj6), , , ];
    const obj7 = { colors: memo, locations: [0.716, 0.823, 1], style: closure_4.absoluteFill, pointerEvents: "none" };
    items2[1] = closure_8(token(5290), obj7);
    const obj8 = { source: token(16423), style: tmp.logo, resizeMode: "contain", accessible: false };
    const tmp5Result2 = token(5701);
    items2[2] = closure_8(tmp5Result2, obj8);
    const obj9 = { style: tmp.sponsoredTag, children: closure_8(Text, obj10) };
    obj10 = { variant: "text-sm/semibold", color: "text-overlay-light", children: intl.string(token(4279).kVJc0r) };
    Text = tmp2(5266).Text;
    intl = tmp2(1128).intl;
    items2[3] = closure_8(closure_5, obj9);
    items3 = [closure_9(closure_5, obj5), ];
    const obj11 = { style: tmp.cardShadow, children: closure_9(closure_5, obj12) };
    obj12 = { style: tmp.card, children: items4 };
    const obj13 = { style: tmp.cardArt, children: closure_8(isHexagonCampaignQuestHomeHeaderEnabled(16424).BundleAbstractUI, { accessible: false }) };
    items4 = [closure_8(closure_5, obj13), ];
    const obj14 = { direction: "vertical", spacing: token(587).space.PX_12, style: tmp.cardContent, children: items7 };
    const Stack = tmp2(6009).Stack;
    const obj15 = { direction: "vertical", spacing: token(587).space.PX_8, children: items6 };
    const Stack2 = tmp2(6009).Stack;
    const obj16 = { direction: "vertical", spacing: token(587).space.PX_4, children: items5 };
    const Stack3 = tmp2(6009).Stack;
    const obj17 = { variant: "text-lg/semibold", color: "text-strong", children: intl2.string(token(4279)["fShp/D"]) };
    const Heading = tmp2(5266).Heading;
    intl2 = tmp2(1128).intl;
    items5 = [closure_8(Heading, obj17), ];
    const obj18 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardBody, children: intl3.string(token(4279).XLqMej) };
    const Text2 = tmp2(5266).Text;
    intl3 = tmp2(1128).intl;
    items5[1] = closure_8(Text2, obj18);
    items6 = [closure_9(Stack3, obj16), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: intl4.format(token(4279).uL0TOA, obj20) };
    const Text3 = tmp2(5266).Text;
    intl4 = tmp2(1128).intl;
    obj20 = {
      learnMoreHook(children, arg1) {
          const obj = { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: isHexagonCampaignQuestHomeHeaderEnabled(dependencyMap[20]).openHexagonCampaignLearnMore, children };
          const Text = isHexagonCampaignQuestHomeHeaderEnabled(dependencyMap[19]).Text;
          return closure_1_8(Text, obj, arg1);
        }
    };
    items6[1] = closure_8(Text3, obj19);
    items7 = [closure_9(Stack2, obj15), ];
    const Button = tmp2(5276).Button;
    let str = "primary-overlay";
    const tmp2Result = isHexagonCampaignQuestHomeHeaderEnabled(5010);
    if (tmp2Result.isThemeLight(theme)) {
      str = "primary";
    }
    const obj21 = { variant: str, text: intl5.string(token(4279)["KX1/jp"]), onPress: tmp9, grow: true };
    intl5 = tmp2(1128).intl;
    items7[1] = closure_8(Button, obj21);
    items4[1] = closure_9(Stack, obj14);
    items3[1] = closure_8(closure_5, obj11);
    tmp11Result = tmp11(tmp12, obj4);
  }
  return tmp11Result;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignQuestHomeHeader.tsx");

export default tmp6;
