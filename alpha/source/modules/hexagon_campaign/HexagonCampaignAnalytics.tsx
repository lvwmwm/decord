// Module ID: 16453
// Function ID: 16454
// Name: HexagonCampaignAnalytics
// Dependencies: [19, 5039, 1072, 7862, 6788, 7871, 7819, 1252, 2]
// Exports: trackHexagonCampaignContentViewed, trackHexagonCampaignPerkAction, useTrackHexagonCampaignContentViewed

// Module 16453 (HexagonCampaignAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7819 */;
import AnalyticsActions from "AnalyticsActions" /* 7862 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import react from "react" /* 19 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5039 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ HEXAGON_CAMPAIGN_AD_CONTENT_ID: closure_4, HEXAGON_CAMPAIGN_PERK_ANALYTICS_ACTION: hasOwnProperty, HEXAGON_SPECIAL_EVENT_ID: metroRequire } = HexagonCampaignConstants);
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
  const obj = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: obj2, sourceQuestContent };
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
      const obj = { content, contentSurface };
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
  const obj = { actions: perks.map((item) => closure_1_5[item]), content_id: content, content_name: obj3.getQuestContentName(content), content_surface: contentSurface, ad_content_id: metroRequire };
  const track = AnalyticsUtilsDefault.track;
  const QUEST_PROMOTIONAL_EVENT_USER_ACTION = AnalyticEvents.QUEST_PROMOTIONAL_EVENT_USER_ACTION;
  AnalyticsUtilsDefault;
  const obj2 = AnalyticsActions;
  const merged = Object.assign(obj2.getAdSessionProperties(sourceQuestContent, AdCreativeType.AdCreativeType.QUEST_HOME_HERO));
  obj3 = AnalyticsTypes;
  track(QUEST_PROMOTIONAL_EVENT_USER_ACTION, obj);
}
