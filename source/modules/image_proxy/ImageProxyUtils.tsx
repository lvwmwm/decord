// Module ID: 4161
// Function ID: 35147
// Name: isImageProxyURL
// Dependencies: [1443, 1426, 2]
// Exports: getSizedImageProxyURL

// Module 4161 (isImageProxyURL)
import set from "set";

function isImageProxyURL(hostname) {
  const tmp = !set.has(hostname.hostname);
  let startsWithResult = !tmp;
  if (!tmp) {
    const pathname = hostname.pathname;
    startsWithResult = pathname.startsWith("/external/");
  }
  return startsWithResult;
}
let parts;
if (null != window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS) {
  parts = str.split(",");
}
if (null == parts) {
  parts = [];
}
const mapped = parts.map((str) => str.substring(2));
const mapped1 = mapped.map(function getHostWithoutPort(arg0) {
  let first;
  if (null != arg0) {
    first = arg0.split(":")[0];
  }
  return first;
});
let set = new Set(mapped1.filter(Boolean));
let result = set.fileFinishedImporting("modules/image_proxy/ImageProxyUtils.tsx");

export { isImageProxyURL };
export const getSizedImageProxyURL = function getSizedImageProxyURL(value, arg1) {
  let keepAspectRatio;
  let size;
  ({ size, keepAspectRatio } = arg1);
  const str = importDefault(1443).toURLSafe(value);
  if (null != str) {
    if (isImageProxyURL(str)) {
      if (null != size) {
        const _String = String;
        const obj2 = require(1426) /* isAttachmentLadderEnabled */;
        const StringResult = String(obj2.getBestMediaProxySize(size * require(1426) /* isAttachmentLadderEnabled */.getDevicePixelRatio()));
        const searchParams = str.searchParams;
        const result = searchParams.set("width", StringResult);
        const searchParams2 = str.searchParams;
        const result1 = searchParams2.set("height", StringResult);
        const obj3 = require(1426) /* isAttachmentLadderEnabled */;
      }
      if (null != keepAspectRatio) {
        const searchParams3 = str.searchParams;
        const _String2 = String;
        const result2 = searchParams3.set("keep_aspect_ratio", String(keepAspectRatio));
      }
      return str.toString();
    }
  }
  return value;
};
