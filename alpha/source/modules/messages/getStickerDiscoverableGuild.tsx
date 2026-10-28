// Module ID: 10211
// Function ID: 10212
// Name: getStickerDiscoverableGuild
// Dependencies: [1084, 1294, 7484, 2]
// Exports: default

// Module 10211 (getStickerDiscoverableGuild)
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7484 */;
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
