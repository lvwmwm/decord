// Module ID: 16974
// Function ID: 16975
// Name: getFrameIFrameQueryParams
// Dependencies: [16975, 9757, 16976, 2]
// Exports: default

// Module 16974 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 9757 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 16975 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 16976 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};
