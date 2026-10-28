// Module ID: 5678
// Function ID: 5679
// Name: trackDismissibleContentActioned
// Dependencies: [32, 4843, 4848, 1084, 5677, 1264, 4840, 4844, 2]
// Exports: trackDismissibleContentActioned

// Module 5678 (trackDismissibleContentActioned)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import dismissible_content from "dismissible_content" /* 4840 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 4844 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4848 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 5677 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 4843 */;
import size from "module_2" /* 2 */;

const getCurrentlyShownCounts = DismissibleContentShownStateStore.getCurrentlyShownCounts;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export const trackDismissibleContentActioned = function trackDismissibleContentActioned(content, dismissAction) {
  let diff;
  let obj5;
  let obj = dismissAction;
  if (dismissAction === undefined) {
    obj = {};
  }
  const obj2 = DismissibleContentFrameworkStore;
  if (!DismissibleContentFrameworkStore.hasTrackedActionedEvent(content)) {
    const obj3 = DismissibleContentFrameworkActionCreators;
    obj3.handleDCActioned(content);
    const first = _slicedToArray(getCurrentlyShownCounts(), 1)[0];
    const renderedAtTimestamp = obj2.getRenderedAtTimestamp(content);
    const obj6 = { type: dismissible_content.DismissibleContent[content], content_count: first, group_name: obj.groupName, bypass_fatigue: obj5.bypassesFatigue(content), guild_id: obj.guildId, shown_duration: diff, version: null, snowflake_id: null };
    const track = AnalyticsUtilsDefault.track;
    const DISMISSIBLE_CONTENT_ACTIONED = AnalyticEvents.DISMISSIBLE_CONTENT_ACTIONED;
    AnalyticsUtilsDefault;
    diff = null;
    obj5 = DismissibleContentFatigueConfig;
    if (null != renderedAtTimestamp) {
      const _Date = Date;
      diff = Date.now() - renderedAtTimestamp;
    }
    ({ version: obj4.version, snowflakeId: obj4.snowflake_id } = obj);
    track(DISMISSIBLE_CONTENT_ACTIONED, obj6);
  }
};
