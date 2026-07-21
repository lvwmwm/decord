// Module ID: 11925
// Function ID: 92256
// Name: parseProviderRouteHeadlessSessionId
// Dependencies: []
// Exports: default

// Module 11925 (parseProviderRouteHeadlessSessionId)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/user_profile/utils/parseProviderRouteHeadlessSessionId.tsx");

export default function parseProviderRouteHeadlessSessionId(str) {
  if (null != str) {
    if (str.startsWith("h:")) {
      const first = callback(str.slice(2).split(","), 1)[0];
      if (null != first) {
        if (0 !== first.length) {
          const value = importDefault(dependencyMap[1]).get(first);
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
