// Module ID: 9732
// Function ID: 9733
// Name: getStickerDiscoverableGuild
// Dependencies: [1085, 1294, 7042, 2]
// Exports: default

// Module 9732 (getStickerDiscoverableGuild)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7042 */;
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
