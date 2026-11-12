// Module ID: 16962
// Function ID: 16963
// Name: HexagonCampaignAnalytics
// Dependencies: [5, 19, 5268, 1072, 8758, 5282, 8767, 8714, 1252, 2]
// Exports: trackHexagonCampaignContentClicked, trackHexagonCampaignContentViewed, trackHexagonCampaignPerkAction, useTrackHexagonCampaignContentViewed

// Module 16962 (HexagonCampaignAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AdCreativeType from "AdCreativeType" /* 5282 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 8714 */;
import AnalyticsActions from "AnalyticsActions" /* 8758 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8767 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5268 */;
import size from "module_2" /* 2 */;

let closure_3, closure_4, closure_5, questContentCTA;

let hasOwnProperty;
let metroRequire;
let obj = function _trackHexagonCampaignContentClicked() {
  obj = _asyncToGenerator(async (arg0) => {
    let content = arg0;
    let c6 = 0;
    let c7 = 0;
    const iter = (async (arg0, value) => {
      let c1;
      let obj7;
      let sourceQuestContent;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_4 = tmp;
              content = undefined;
              questContentCTA = undefined;
              sourceQuestContent = undefined;
              content = content.content;
              ({ questContentCTA: c1, sourceQuestContent } = content);
              if (sourceQuestContent === undefined) {
                sourceQuestContent = content;
              }
              c6 = 1;
              c7 = 1;
              return { value: "flexDirection", done: true };
            }
          } else {
            let obj5;
            if (1 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                const tmp20 = closure_131_0(closure_131_2[4]);
                closure_5 = tmp20;
                trackAdContentEvent = tmp20.trackAdContentEvent;
                obj5 = { adContentId: closure_131_5, adCreativeType: closure_131_0(closure_131_2[5]).AdCreativeType.QUEST_HOME_HERO, event: closure_131_7.QUEST_CONTENT_CLICKED };
                c6 = 2;
                c7 = 1;
                const obj6 = { questContent: content, questContentCTA };
                const obj8 = { value: obj7.getCommonClickEventProperties(obj6), done: false };
                obj7 = closure_131_0(closure_131_2[4]);
                return obj8;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              obj5.properties = value;
              obj5.sourceQuestContent = sourceQuestContent;
              trackAdContentEvent(obj5);
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } catch (tmp12) {
          c7 = 3;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ HEXAGON_CAMPAIGN_AD_CONTENT_ID: hasOwnProperty, HEXAGON_CAMPAIGN_PERK_ANALYTICS_ACTION: metroRequire } = HexagonCampaignConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignAnalytics.tsx");

export const HexagonCampaignContentSurface = { FONT_PICKER: "FONT_PICKER", PROFILE_ROW_PROMO: "PROFILE_ROW_PROMO", NON_NITRO_CARD: "NON_NITRO_CARD", THEME_PICKER: "THEME_PICKER", APP_ICON_PICKER: "APP_ICON_PICKER", USER_PROFILE: "USER_PROFILE", GUILD_PROFILE: "GUILD_PROFILE" };
export function trackHexagonCampaignContentViewed(contentSurface) {
  let content;
  let obj2;
  let sourceQuestContent;
  ({ content, sourceQuestContent } = contentSurface);
  if (sourceQuestContent === undefined) {
    sourceQuestContent = content;
  }
  contentSurface = contentSurface.contentSurface;
  const tmp = AnalyticsActions;
  const trackAdContentEvent = tmp.trackAdContentEvent;
  obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent };
  obj2 = { content_surface: contentSurface };
  const obj3 = AnalyticsTypes;
  const merged = Object.assign(obj3.getContentProperties(content));
  const merged1 = Object.assign(getDeviceMetadataDefault());
  trackAdContentEvent(obj);
}
export function useTrackHexagonCampaignContentViewed(DISPLAY_NAME_STYLES_SETTINGS, APP_ICON_PICKER, isThumbstickScrollDevice) {
  const content = DISPLAY_NAME_STYLES_SETTINGS;
  let contentSurface = APP_ICON_PICKER;
  let closure_2 = isThumbstickScrollDevice;
  const items = [DISPLAY_NAME_STYLES_SETTINGS, APP_ICON_PICKER, isThumbstickScrollDevice];
  const effect = react.useEffect(() => {
    let obj3;
    let sourceQuestContent;
    const tmp = isThumbstickScrollDevice;
    if (tmp) {
      obj = { content, contentSurface };
      ({ content, sourceQuestContent } = obj);
      if (sourceQuestContent === undefined) {
        sourceQuestContent = content;
      }
      contentSurface = obj.contentSurface;
      const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj3, sourceQuestContent };
      const trackAdContentEvent = AnalyticsActions.trackAdContentEvent;
      AnalyticsActions;
      obj3 = { content_surface: contentSurface };
      const obj4 = AnalyticsTypes;
      const merged = Object.assign(obj4.getContentProperties(content));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      trackAdContentEvent(obj2);
    }
  }, items);
}
export function trackHexagonCampaignContentClicked() {
  return obj(...arguments);
}
export function trackHexagonCampaignPerkAction(contentSurface) {
  let content;
  let obj3;
  let perks;
  let sourceQuestContent;
  ({ perks, content, sourceQuestContent } = contentSurface);
  if (sourceQuestContent === undefined) {
    sourceQuestContent = content;
  }
  contentSurface = contentSurface.contentSurface;
  obj = { actions: perks.map((item) => closure_1_6[item]), content_id: content, content_name: obj3.getQuestContentName(content), content_surface: contentSurface, ad_content_id };
  const track = AnalyticsUtilsDefault.track;
  const QUEST_PROMOTIONAL_EVENT_USER_ACTION = AnalyticEvents.QUEST_PROMOTIONAL_EVENT_USER_ACTION;
  AnalyticsUtilsDefault;
  const obj2 = AnalyticsActions;
  const merged = Object.assign(obj2.getAdSessionProperties(sourceQuestContent, AdCreativeType.AdCreativeType.QUEST_HOME_HERO));
  obj3 = AnalyticsTypes;
  track(QUEST_PROMOTIONAL_EVENT_USER_ACTION, obj);
}
