// Module ID: 10154
// Function ID: 10155
// Name: getStickerDiscoverableGuild
// Dependencies: [1087, 1297, 7433, 2]
// Exports: default

// Module 10154 (getStickerDiscoverableGuild)
import Constants from "Constants" /* 1087 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7433 */;
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
