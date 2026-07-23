// Module ID: 12199
// Function ID: 95366
// Name: getGuildEventImageURL
// Dependencies: [653, 1426, 2]
// Exports: default

// Module 12199 (getGuildEventImageURL)
import { Endpoints } from "ME";

let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/utils/getGuildEventImage.tsx");

export default function getGuildEventImageURL(image, size) {
  let result = size;
  if (null == image.image) {
    return null;
  } else {
    if (null == result) {
      const _window = window;
      result = window.screen.width * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio();
      const obj = require(1426) /* isAttachmentLadderEnabled */;
    }
    const _window2 = window;
    const bestMediaProxySize = require(1426) /* isAttachmentLadderEnabled */.getBestMediaProxySize(result);
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
