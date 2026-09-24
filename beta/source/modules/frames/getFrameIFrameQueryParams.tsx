// Module ID: 16983
// Function ID: 16984
// Name: getFrameIFrameQueryParams
// Dependencies: [16984, 9752, 16985, 2]
// Exports: default

// Module 16983 (getFrameIFrameQueryParams)
import DiscordEnvironment from "DiscordEnvironment" /* 9752 */;
import getFrameLaunchContextQueryParamsDefault from "getFrameLaunchContextQueryParams" /* 16984 */;
import getFrameSurfaceQueryParamsDefault from "getFrameSurfaceQueryParams" /* 16985 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/getFrameIFrameQueryParams.tsx");

export default function getFrameIFrameQueryParams(data, platform) {
  const merged = Object.assign(getFrameLaunchContextQueryParamsDefault(data.data));
  const merged1 = Object.assign(DiscordEnvironment.getDiscordEnvQueryParams());
  const merged2 = Object.assign(getFrameSurfaceQueryParamsDefault(data.surface));
  return { instance_id: "example-cl-instance", platform, discord_proxy_ticket: data.data.proxyTicket };
};
