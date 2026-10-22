// Module ID: 18331
// Function ID: 18332
// Name: getFrameIFrameQueryParams
// Dependencies: [18332, 11407, 18333, 2]
// Exports: default

// Module 18331 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 11407 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 18332 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 18333 */;
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
