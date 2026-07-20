// Module ID: 9609
// Function ID: 74869
// Name: getStickerDiscoverableGuild
// Dependencies: []
// Exports: default

// Module 9609 (getStickerDiscoverableGuild)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/messages/getStickerDiscoverableGuild.tsx");

export default function getStickerDiscoverableGuild(arg0) {
  const HTTP = require(dependencyMap[1]).HTTP;
  const obj = { CONVERSATIONS: null, replace: null, push: null, url: Endpoints.STICKER_GUILD_DATA(arg0) };
  const value = HTTP.get(obj);
  return value.then((body) => {
    body = undefined;
    if (null != body) {
      body = body.body;
    }
    let discoverableGuild = null;
    if (null != body) {
      discoverableGuild = callback(closure_1[2]).makeDiscoverableGuild(body.body);
      const obj = callback(closure_1[2]);
    }
    return discoverableGuild;
  }).catch(() => null);
};
