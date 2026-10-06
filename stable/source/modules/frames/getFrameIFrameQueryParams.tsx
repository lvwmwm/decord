// Module ID: 16283
// Function ID: 16284
// Name: getFrameIFrameQueryParams
// Dependencies: [16284, 8911, 16285, 2]
// Exports: default

// Module 16283 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 8911 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 16284 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 16285 */;
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
