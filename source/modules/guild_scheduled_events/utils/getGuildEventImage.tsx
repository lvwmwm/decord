// Module ID: 12081
// Function ID: 93177
// Name: getGuildEventImageURL
// Dependencies: []
// Exports: default

// Module 12081 (getGuildEventImageURL)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/guild_scheduled_events/utils/getGuildEventImage.tsx");

export default function getGuildEventImageURL(image, size) {
  let result = size;
  if (null == image.image) {
    return null;
  } else {
    if (null == result) {
      const _window = window;
      result = window.screen.width * require(dependencyMap[1]).getDevicePixelRatio();
      const obj = require(dependencyMap[1]);
    }
    const _window2 = window;
    const bestMediaProxySize = require(dependencyMap[1]).getBestMediaProxySize(result);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "" + "https:" + "//" + CDN_HOST + "/guild-events/" + image.id + "/" + image.image;
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + Endpoints.GUILD_EVENT_IMAGE(image.id, image.image, "png");
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
};
