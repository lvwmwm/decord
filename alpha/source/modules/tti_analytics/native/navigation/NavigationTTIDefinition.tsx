// Module ID: 14565
// Function ID: 14566
// Name: NavigationTTIDefinition
// Dependencies: [1264, 1349, 2]

// Module 14565 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1349 */;
import size from "module_2" /* 2 */;

const obj = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = obj;
