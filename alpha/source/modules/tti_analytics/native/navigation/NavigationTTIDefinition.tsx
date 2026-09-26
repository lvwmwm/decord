// Module ID: 16433
// Function ID: 16434
// Name: NavigationTTIDefinition
// Dependencies: [1249, 1335, 2]

// Module 16433 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1335 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };
