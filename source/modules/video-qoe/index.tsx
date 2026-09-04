// Module ID: 15060
// Function ID: 15061
// Name: SimpleMuxWrapper
// Dependencies: [2, 15061, 15065, 15063, 15066, 15062, 15067]

// Module 15060 (SimpleMuxWrapper)
import set from "set" /* 2 */;
import logger from "logger" /* 15061 */;
import generateSessionId from "generateSessionId" /* 15062 */;
import mapDiscordToMuxMetadata from "mapDiscordToMuxMetadata" /* 15063 */;
import logger2 from "logger" /* 15065 */;
import logger3 from "logger" /* 15066 */;
import getVideoQoEMetricsConfig from "getVideoQoEMetricsConfig" /* 15067 */;

const result = set.fileFinishedImporting("modules/video-qoe/index.tsx");

export const SimpleMuxWrapper = logger.SimpleMuxWrapper;
export const MobileMuxWrapper = logger2.MobileMuxWrapper;
export const MuxIntegration = mapDiscordToMuxMetadata.MuxIntegration;
export const MobileCustomMuxIntegration = logger3.MobileCustomMuxIntegration;
export const SessionManager = generateSessionId.SessionManager;
export const getVideoQoEMetricsConfig = getVideoQoEMetricsConfig.getVideoQoEMetricsConfig;
