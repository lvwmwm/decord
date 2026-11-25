// Module ID: 19696
// Function ID: 19697
// Name: buildImageLoadMetricProperties
// Dependencies: [1071, 2]
// Exports: buildImageLoadMetricProperties

// Module 19696 (buildImageLoadMetricProperties)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

function getQueryParams(url) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(url);
    const searchParams = uRL.searchParams;
    const obj = { format: searchParams.get("format"), quality: searchParams.get("quality") };
    return obj;
  } catch (err) {
    return { format: null, quality: null };
  }
}
const ImageReadyStates = Constants.ImageReadyStates;
const result = size.fileFinishedImporting("modules/media/native/buildImageLoadMetricProperties.tsx");

export function buildImageLoadMetricProperties(url, device_pixel_ratio) {
  let imageWidth;
  let rounded;
  let rounded1;
  let rounded2;
  let rounded3;
  let tmp = null;
  const obj = /^https?:\/\//i;
  if (obj.test(url.url)) {
    const _Math = Math;
    ({ url: obj2.url, url: obj2.requested_url, imageWidth } = url);
    const obj3 = { location: url.location, duration_ms: Math.round(url.durationMs), state: url.succeeded ? ImageReadyStates.READY : ImageReadyStates.ERROR, trigger: "LOAD", url: null, requested_url: null, requested_width: rounded, requested_height: rounded1, display_width: rounded2, display_height: rounded3, device_pixel_ratio };
    rounded = null;
    if (imageWidth > 0) {
      const _Math2 = Math;
      rounded = Math.round(imageWidth);
    }
    const imageHeight = url.imageHeight;
    rounded1 = null;
    if (imageHeight > 0) {
      const _Math3 = Math;
      rounded1 = Math.round(imageHeight);
    }
    const displayWidth = url.displayWidth;
    rounded2 = null;
    if (displayWidth > 0) {
      const _Math4 = Math;
      rounded2 = Math.round(displayWidth);
    }
    const displayHeight = url.displayHeight;
    rounded3 = null;
    if (displayHeight > 0) {
      const _Math5 = Math;
      rounded3 = Math.round(displayHeight);
    }
    const merged = Object.assign(getQueryParams(url.url));
    tmp = obj3;
  }
  return tmp;
}
