// Module ID: 10289
// Function ID: 10290
// Name: getStickerDiscoverableGuild
// Dependencies: [1072, 1282, 7521, 2]
// Exports: default

// Module 10289 (getStickerDiscoverableGuild)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7521 */;
import size from "module_2" /* 2 */;

let body;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/messages/getStickerDiscoverableGuild.tsx");

export default function getStickerDiscoverableGuild(arg0) {
  const HTTP = HTTPUtils.HTTP;
  let obj = { url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  const nextPromise = value.then((body) => {
    body = undefined;
    if (body != null) {
      body = body.body;
    }
    let discoverableGuild = null;
    if (null != body) {
      const obj = GuildDiscoveryUtils;
      discoverableGuild = obj.makeDiscoverableGuild(body.body);
    }
    return discoverableGuild;
  });
  return nextPromise.catch(() => null);
};
