// Module ID: 12961
// Function ID: 12962
// Name: NavigationTTIDefinition
// Dependencies: [1264, 1348, 2]

// Module 12961 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1348 */;
import size from "module_2" /* 2 */;

const obj = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = obj;
