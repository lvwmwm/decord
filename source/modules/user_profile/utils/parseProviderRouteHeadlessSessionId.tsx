// Module ID: 11938
// Function ID: 92323
// Name: parseProviderRouteHeadlessSessionId
// Dependencies: [57, 4814, 2]
// Exports: default

// Module 11938 (parseProviderRouteHeadlessSessionId)
import _slicedToArray from "_slicedToArray";

const result = require("set").fileFinishedImporting("modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx");

export default function parseProviderRouteHeadlessSessionId(str) {
  if (null != str) {
    if (str.startsWith("h:")) {
      const first = callback(str.slice(2).split(","), 1)[0];
      if (null != first) {
        if (0 !== first.length) {
          const value = importDefault(4814).get(first);
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
