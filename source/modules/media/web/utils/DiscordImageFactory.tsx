// Module ID: 4940
// Function ID: 4941
// Name: create
// Dependencies: [4941, 4968, 2]

// Module 4940 (create)
const result = require("set").fileFinishedImporting("modules/media/web/utils/DiscordImageFactory.tsx");
const prototype = function DiscordImageFactory() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["create"] = function create(byteLength) {
  const uint8Array = new Uint8Array(byteLength, 0, Math.min(64, byteLength.byteLength));
  let obj = require(4941) /* detectFile */;
  const detectFileResult = obj.detectFile(uint8Array);
  let mimeType;
  if (detectFileResult != null) {
    mimeType = detectFileResult.mimeType;
  }
  obj = null;
  if ("image/png" === mimeType) {
    const DiscordImagePng = require(4968) /* create */.DiscordImagePng;
    obj = DiscordImagePng.create(byteLength);
  }
  return obj;
};

export const DiscordImageFactory = prototype;
