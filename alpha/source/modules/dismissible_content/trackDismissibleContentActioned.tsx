// Module ID: 14128
// Function ID: 14129
// Name: trackDismissibleContentActioned
// Dependencies: [32, 2051, 2055, 1085, 1264, 2048, 2052, 2]
// Exports: trackDismissibleContentActioned

// Module 14128 (trackDismissibleContentActioned)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 2052 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2055 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 2051 */;
import size from "module_2" /* 2 */;

const getCurrentlyShownCounts = DismissibleContentShownStateStore.getCurrentlyShownCounts;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export const trackDismissibleContentActioned = function trackDismissibleContentActioned(arg0, dismissAction) {
  let CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let diff;
  let obj = dismissAction;
  if (dismissAction === undefined) {
    obj = {};
  }
  const first = _slicedToArray(getCurrentlyShownCounts(), 1)[0];
  const renderedAtTimestamp = DismissibleContentFrameworkStore.getRenderedAtTimestamp(arg0);
  const tmp3 = AnalyticsUtilsDefault;
  const track = tmp3.track;
  const DISMISSIBLE_CONTENT_ACTIONED = AnalyticEvents.DISMISSIBLE_CONTENT_ACTIONED;
  const obj3 = { type: dismissible_content.DismissibleContent[arg0], content_count: first, group_name: obj.groupName, bypass_fatigue: CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0), guild_id: obj.guildId, shown_duration: diff, version: null, snowflake_id: null };
  CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  diff = null;
  if (null != renderedAtTimestamp) {
    const _Date = Date;
    diff = Date.now() - renderedAtTimestamp;
  }
  ({ version: obj2.version, snowflakeId: obj2.snowflake_id } = obj);
  track(DISMISSIBLE_CONTENT_ACTIONED, obj3);
};
