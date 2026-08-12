// Module ID: 9181
// Function ID: 9182
// Name: getGuildEventImageURL
// Dependencies: [676, 1469, 2]
// Exports: default

// Module 9181 (getGuildEventImageURL)
import { Endpoints } from "ME";

let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/utils/getGuildEventImage.tsx");

export default function getGuildEventImageURL(image, size) {
  if (null == image.image) {
    return null;
  } else {
    let result = size;
    if (null == size) {
      const _window = window;
      result = window.screen.width * require(1469) /* handleImageLoad */.getDevicePixelRatio();
      const obj = require(1469) /* handleImageLoad */;
    }
    const _window2 = window;
    const bestMediaProxySize = require(1469) /* handleImageLoad */.getBestMediaProxySize(result);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/guild-events/" + image.id + "/" + image.image;
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
