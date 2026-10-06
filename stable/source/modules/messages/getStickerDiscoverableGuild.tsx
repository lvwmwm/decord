// Module ID: 9905
// Function ID: 9906
// Name: getStickerDiscoverableGuild
// Dependencies: [1086, 1283, 6760, 2]
// Exports: default

// Module 9905 (getStickerDiscoverableGuild)
import Constants from "Constants" /* 1086 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 6760 */;
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
