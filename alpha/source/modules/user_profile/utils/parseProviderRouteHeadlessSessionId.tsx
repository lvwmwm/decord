// Module ID: 14301
// Function ID: 14302
// Name: parseProviderRouteHeadlessSessionId
// Dependencies: [32, 6502, 2]
// Exports: default

// Module 14301 (parseProviderRouteHeadlessSessionId)
import PlatformsDefault from "Platforms" /* 6502 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let c3 = "h:";
const result = size.fileFinishedImporting("modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx");

export default function parseProviderRouteHeadlessSessionId(str) {
  if (null != str) {
    if (str.startsWith(c3)) {
      str = str.slice(2);
      const first = _slicedToArray(str.split(","), 1)[0];
      if (null != first) {
        if (0 !== first.length) {
          const obj = PlatformsDefault;
          const value = obj.get(first);
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
