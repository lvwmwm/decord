// Module ID: 4566
// Function ID: 39997
// Name: isImageProxyURL
// Dependencies: []
// Exports: getSizedImageProxyURL

// Module 4566 (isImageProxyURL)
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
const set = new Set(mapped1.filter(Boolean));
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/image_proxy/ImageProxyUtils.tsx");

export { isImageProxyURL };
export const getSizedImageProxyURL = function getSizedImageProxyURL(value, arg1) {
  let keepAspectRatio;
  let size;
  ({ size, keepAspectRatio } = arg1);
  const str = importDefault(dependencyMap[0]).toURLSafe(value);
  if (null != str) {
    if (isImageProxyURL(str)) {
      if (null != size) {
        const _String = String;
        const obj2 = require(dependencyMap[1]);
        const StringResult = String(obj2.getBestMediaProxySize(size * require(dependencyMap[1]).getDevicePixelRatio()));
        const searchParams = str.searchParams;
        const result = searchParams.set("width", StringResult);
        const searchParams2 = str.searchParams;
        const result1 = searchParams2.set("height", StringResult);
        const obj3 = require(dependencyMap[1]);
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
