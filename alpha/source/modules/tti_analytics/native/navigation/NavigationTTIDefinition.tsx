// Module ID: 13520
// Function ID: 13521
// Name: NavigationTTIDefinition
// Dependencies: [1272, 1358, 2]

// Module 13520 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1358 */;
import size from "module_2" /* 2 */;

const obj = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = obj;
