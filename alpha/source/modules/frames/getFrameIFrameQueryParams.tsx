// Module ID: 18433
// Function ID: 18434
// Name: getFrameIFrameQueryParams
// Dependencies: [18434, 11461, 18435, 2]
// Exports: default

// Module 18433 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 11461 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 18434 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 18435 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const obj = { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const obj2 = DiscordEnvironment;
  const merged1 = Object.assign(obj2.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return obj;
};
