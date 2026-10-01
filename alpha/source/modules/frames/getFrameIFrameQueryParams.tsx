// Module ID: 16512
// Function ID: 16513
// Name: getFrameIFrameQueryParams
// Dependencies: [16513, 9110, 16514, 2]
// Exports: default

// Module 16512 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 9110 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 16513 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 16514 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};
