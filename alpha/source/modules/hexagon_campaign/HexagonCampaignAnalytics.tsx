// Module ID: 16121
// Function ID: 16122
// Name: HexagonCampaignAnalytics
// Dependencies: [19, 5029, 1084, 7827, 6752, 7836, 7785, 558, 576, 1264, 2]
// Exports: trackHexagonCampaignContentViewed, trackHexagonCampaignPerkAction

// Module 16121 (HexagonCampaignAnalytics)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import AdCreativeType from "AdCreativeType" /* 6752 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7785 */;
import AnalyticsActions from "AnalyticsActions" /* 7827 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7836 */;
import react from "react" /* 19 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5029 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ HEXAGON_CAMPAIGN_AD_CONTENT_ID: closure_4, HEXAGON_CAMPAIGN_PERK_ANALYTICS_ACTION: hasOwnProperty, HEXAGON_SPECIAL_EVENT_ID: metroRequire } = HexagonCampaignConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackHexagonCampaignContentViewed(content, contentSurface, arg2) {
  let closure_2;
  _require = content;
  dependencyMap = arg2;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === content) {
    if (cResult[1] === contentSurface) {
      let tmp2;
      let tmp3;
      if (cResult[2] === arg2) {
        tmp2 = cResult[3];
        tmp3 = cResult[4];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  }
  const fn = function _() {
    let obj3;
    let sourceQuestContent;
    const tmp = closure_2;
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
  };
  const items = [content, contentSurface, arg2];
  cResult[0] = content;
  cResult[1] = contentSurface;
  cResult[2] = arg2;
  cResult[3] = fn;
  cResult[4] = items;
  tmp3 = items;
  tmp2 = fn;
}) : (function useTrackHexagonCampaignContentViewed(content, contentSurface, arg2) {
  let closure_2 = arg2;
  const items = [content, contentSurface, arg2];
  const effect = react.useEffect(() => {
    let obj3;
    let sourceQuestContent;
    const tmp = closure_2;
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
});
function trackHexagonCampaignContentViewed(contentSurface) {
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
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignAnalytics.tsx");

export const HexagonCampaignContentSurface = { FONT_PICKER: "FONT_PICKER", PROFILE_ROW_PROMO: "PROFILE_ROW_PROMO", NON_NITRO_CARD: "NON_NITRO_CARD", THEME_PICKER: "THEME_PICKER", APP_ICON_PICKER: "APP_ICON_PICKER", USER_PROFILE: "USER_PROFILE", GUILD_PROFILE: "GUILD_PROFILE" };
export { trackHexagonCampaignContentViewed };
export const useTrackHexagonCampaignContentViewed = tmp3;
export const trackHexagonCampaignPerkAction = function trackHexagonCampaignPerkAction(contentSurface) {
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
};
