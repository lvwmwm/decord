// Module ID: 16520
// Function ID: 16521
// Name: SimpleMuxWrapper
// Dependencies: [2, 16521, 16525, 16523, 16526, 16522, 16527]

// Module 16520 (SimpleMuxWrapper)
import modules_SimpleMuxWrapper from "modules/SimpleMuxWrapper" /* 16521 */;
import SessionManager from "SessionManager" /* 16522 */;
import MuxIntegration from "MuxIntegration" /* 16523 */;
import MobileMuxWrapper from "MobileMuxWrapper" /* 16525 */;
import MobileCustomMuxIntegration from "MobileCustomMuxIntegration" /* 16526 */;
import VideoQoEMetricsExperiment from "VideoQoEMetricsExperiment" /* 16527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video-qoe/index.tsx");
const MobileMuxWrapper_export = MobileMuxWrapper.MobileMuxWrapper;
const MuxIntegration_export = MuxIntegration.MuxIntegration;
const MobileCustomMuxIntegration_export = MobileCustomMuxIntegration.MobileCustomMuxIntegration;
const SessionManager_export = SessionManager.SessionManager;

export const SimpleMuxWrapper = modules_SimpleMuxWrapper.SimpleMuxWrapper;
export { MobileMuxWrapper_export as MobileMuxWrapper };
export { MuxIntegration_export as MuxIntegration };
export { MobileCustomMuxIntegration_export as MobileCustomMuxIntegration };
export { SessionManager_export as SessionManager };
export const getVideoQoEMetricsConfig = VideoQoEMetricsExperiment.getVideoQoEMetricsConfig;
