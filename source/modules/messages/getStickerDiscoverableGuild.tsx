// Module ID: 9658
// Function ID: 75162
// Name: getStickerDiscoverableGuild
// Dependencies: [653, 507, 5736, 2]
// Exports: default

// Module 9658 (getStickerDiscoverableGuild)
import { Endpoints } from "ME";

const result = require("_startLurking").fileFinishedImporting("modules/messages/getStickerDiscoverableGuild.tsx");

export default function getStickerDiscoverableGuild(arg0) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((body) => {
    body = undefined;
    if (null != body) {
      body = body.body;
    }
    let discoverableGuild = null;
    if (null != body) {
      discoverableGuild = outer1_0(outer1_1[2]).makeDiscoverableGuild(body.body);
      const obj = outer1_0(outer1_1[2]);
    }
    return discoverableGuild;
  }).catch(() => null);
};
