// Module ID: 14279
// Function ID: 14280
// Name: trackDismissibleContentActioned
// Dependencies: [32, 2052, 2057, 1085, 1265, 2049, 2053, 2]
// Exports: trackDismissibleContentActioned

// Module 14279 (trackDismissibleContentActioned)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 2053 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2057 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2052 */;
import size from "module_2" /* 2 */;

const getCurrentlyShownCounts = DismissibleContentShownStateStore.getCurrentlyShownCounts;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export const trackDismissibleContentActioned = function trackDismissibleContentActioned(content, dismissAction) {
  let diff;
  let obj3;
  let obj = dismissAction;
  if (dismissAction === undefined) {
    obj = {};
  }
  const first = _slicedToArray(getCurrentlyShownCounts(), 1)[0];
  const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(content);
  const tmp3 = AnalyticsUtilsDefault;
  const track = tmp3.track;
  const DISMISSIBLE_CONTENT_ACTIONED = AnalyticEvents.DISMISSIBLE_CONTENT_ACTIONED;
  const obj4 = { type: dismissible_content.DismissibleContent[content], content_count: first, group_name: obj.groupName, bypass_fatigue: obj3.bypassesFatigue(content), guild_id: obj.guildId, shown_duration: diff, version: null, snowflake_id: null };
  diff = null;
  obj3 = DismissibleContentFatigueConfig;
  if (null != renderedAtTimestamp) {
    const _Date = Date;
    diff = Date.now() - renderedAtTimestamp;
  }
  ({ version: obj2.version, snowflakeId: obj2.snowflake_id } = obj);
  track(DISMISSIBLE_CONTENT_ACTIONED, obj4);
};
