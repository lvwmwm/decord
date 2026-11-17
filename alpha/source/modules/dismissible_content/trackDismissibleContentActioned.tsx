// Module ID: 5987
// Function ID: 5988
// Name: trackDismissibleContentActioned
// Dependencies: [32, 5146, 5151, 1072, 5986, 1256, 5143, 5147, 2]
// Exports: trackDismissibleContentActioned

// Module 5987 (trackDismissibleContentActioned)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import dismissible_content from "dismissible_content" /* 5143 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 5147 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 5151 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 5986 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 5146 */;
import size from "module_2" /* 2 */;

const getCurrentlyShownCounts = DismissibleContentShownStateStore.getCurrentlyShownCounts;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/dismissible_content/trackDismissibleContentActioned.tsx");

export function trackDismissibleContentActioned(content, dismissAction) {
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
}
