// Module ID: 13308
// Function ID: 13309
// Name: parseProviderRouteHeadlessSessionId
// Dependencies: [32, 5500, 2]
// Exports: default

// Module 13308 (parseProviderRouteHeadlessSessionId)
import PlatformsDefault from "Platforms" /* 5500 */;
import _slicedToArray from "module_32" /* 32 */;

let c3 = "h:";
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx");

export default function parseProviderRouteHeadlessSessionId(str) {
  if (null != str) {
    if (str.startsWith(c3)) {
      const first = _slicedToArray(str.slice(2).split(","), 1)[0];
      if (null != first) {
        if (0 !== first.length) {
          value = PlatformsDefault.get(first);
          let tmp5 = null;
          if (null != value) {
            tmp5 = null;
            if (value.enabled) {
              tmp5 = value;
            }
          }
          return tmp5;
        }
      }
      return null;
    }
  }
  return null;
};
export const HEADLESS_SESSION_ID_PREFIX = "h:";
