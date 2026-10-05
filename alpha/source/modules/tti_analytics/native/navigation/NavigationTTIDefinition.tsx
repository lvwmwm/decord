// Module ID: 16787
// Function ID: 16788
// Name: NavigationTTIDefinition
// Dependencies: [1260, 1346, 2]

// Module 16787 (NavigationTTIDefinition)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1346 */;
import size from "module_2" /* 2 */;

const obj = { rootEventName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL, componentEventName: AnalyticsSchema.SpanComponentNames.CHANNEL };
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDefinition.tsx");

export const CHANNEL_NAVIGATION_TTI = obj;
