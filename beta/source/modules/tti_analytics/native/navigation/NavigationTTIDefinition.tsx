// Module ID: 17107
// Function ID: 17108
// Name: NavigationTTIDefinition
// Dependencies: [1253, 1339, 2]

// Module 17107 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1253 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1339 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };
