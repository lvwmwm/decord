// Module ID: 12824
// Function ID: 12825
// Name: NavigationTTIDefinition
// Dependencies: [1263, 1347, 2]

// Module 12824 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1263 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1347 */;
import size from "module_2" /* 2 */;

const obj = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = obj;
