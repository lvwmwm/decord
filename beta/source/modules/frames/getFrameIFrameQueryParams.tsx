// Module ID: 16972
// Function ID: 16973
// Name: getFrameIFrameQueryParams
// Dependencies: [16973, 9720, 16974, 2]
// Exports: default

// Module 16972 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 9720 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 16973 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 16974 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};
