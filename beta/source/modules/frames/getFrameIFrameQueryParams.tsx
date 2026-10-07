// Module ID: 17149
// Function ID: 17150
// Name: getFrameIFrameQueryParams
// Dependencies: [17150, 9136, 17151, 2]
// Exports: default

// Module 17149 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 9136 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 17150 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 17151 */;
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
