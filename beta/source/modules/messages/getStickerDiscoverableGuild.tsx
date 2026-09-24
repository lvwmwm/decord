// Module ID: 10737
// Function ID: 10738
// Name: getStickerDiscoverableGuild
// Dependencies: [1078, 1275, 7617, 2]
// Exports: default

// Module 10737 (getStickerDiscoverableGuild)
import Constants from "Constants" /* 1078 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7617 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/messages/getStickerDiscoverableGuild.tsx");

export default function getStickerDiscoverableGuild(arg0) {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true });
  let obj = { url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true };
  return value.then((body) => {
    body = undefined;
    if (body != null) {
      body = body.body;
    }
    let discoverableGuild = null;
    if (null != body) {
      discoverableGuild = GuildDiscoveryUtils.makeDiscoverableGuild(body.body);
    }
    return discoverableGuild;
  }).catch(() => null);
};
