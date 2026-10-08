// Module ID: 8745
// Function ID: 8746
// Name: getGuildEventImage
// Dependencies: [1085, 1449, 2]
// Exports: default

// Module 8745 (getGuildEventImage)
import Constants from "Constants" /* 1085 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1449 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/getGuildEventImage.tsx");

export default function getGuildEventImageURL(image, size) {
  if (null == image.image) {
    return null;
  } else {
    let combined;
    let result = size;
    if (null == size) {
      const _window = window;
      const obj = ImageLoaderUtils;
      result = width * obj.getDevicePixelRatio();
    }
    const _window2 = window;
    const obj2 = ImageLoaderUtils;
    const bestMediaProxySize = obj2.getBestMediaProxySize(result);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      combined = "https://" + CDN_HOST + "/guild-events/" + image.id + "/" + image.image;
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
