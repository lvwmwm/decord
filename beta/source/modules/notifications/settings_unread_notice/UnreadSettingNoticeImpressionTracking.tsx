// Module ID: 11586
// Function ID: 11587
// Name: UnreadSettingNoticeImpressionTracking
// Dependencies: [558, 568, 1253, 9078, 2]

// Module 11586 (UnreadSettingNoticeImpressionTracking)
import c from "c" /* 568 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1253 */;
import useTrackImpressionDefault from "useTrackImpression" /* 9078 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeImpressionTracking.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { type: tmp(1253).ImpressionTypes.VIEW, name: tmp(1253).ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const items = [id.id];
    cResult[1] = id.id;
    cResult[2] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  useTrackImpressionDefault(first, undefined, tmp5);
  return null;
}) : ((id) => {
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE };
  const items = [id.id];
  useTrackImpressionDefault(obj, undefined, items);
  return null;
});
