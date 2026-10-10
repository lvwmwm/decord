// Module ID: 9780
// Function ID: 9781
// Name: getStickerDiscoverableGuild
// Dependencies: [1085, 1295, 7051, 2]
// Exports: default

// Module 9780 (getStickerDiscoverableGuild)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7051 */;
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
