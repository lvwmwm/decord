// Module ID: 13670
// Function ID: 13671
// Name: NavigationTTIDefinition
// Dependencies: [1261, 1347, 2]

// Module 13670 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1347 */;
import size from "module_2" /* 2 */;

const obj = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = obj;
