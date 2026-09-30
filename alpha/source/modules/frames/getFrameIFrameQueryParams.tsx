// Module ID: 16491
// Function ID: 16492
// Name: getFrameIFrameQueryParams
// Dependencies: [16492, 9116, 16493, 2]
// Exports: default

// Module 16491 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 9116 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 16492 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 16493 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};
