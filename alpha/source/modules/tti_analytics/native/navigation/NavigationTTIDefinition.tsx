// Module ID: 12802
// Function ID: 12803
// Name: NavigationTTIDefinition
// Dependencies: [1275, 1361, 2]

// Module 12802 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1275 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1361 */;
import size from "module_2" /* 2 */;

const obj = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = obj;
