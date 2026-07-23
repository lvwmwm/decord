// Module ID: 8266
// Function ID: 65177
// Name: UserProfileAnalyticsProvider
// Dependencies: [31, 33, 5464, 8267, 491, 2]
// Exports: UserProfileAnalyticsProvider, useCreateUserProfileAnalyticsContext, useUserProfileAnalyticsContext

// Module 8266 (UserProfileAnalyticsProvider)
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
let context = importAllResult.createContext(null);
let result = require("mergeLocations").fileFinishedImporting("modules/user_profile/UserProfileAnalyticsContext.tsx");

export const UserProfileAnalyticsProvider = (children) => {
  let dependencyMap;
  let importDefault;
  let isLoaded;
  let openedAt;
  let value;
  ({ value, openedAt } = children);
  ({ fetchStartedAt: importDefault, fetchEndedAt: dependencyMap, isLoaded } = children);
  if (isLoaded === undefined) {
    isLoaded = false;
  }
  let ref;
  let obj;
  let closure_6;
  ref = isLoaded.useRef(undefined);
  const ref1 = isLoaded.useRef(openedAt);
  if (ref1.current !== openedAt) {
    ref1.current = openedAt;
    ref.current = undefined;
  }
  obj = { analyticsLocations: importDefault(5464)().analyticsLocations, value };
  closure_6 = isLoaded.useRef(obj);
  const effect = isLoaded.useEffect(() => {
    closure_6.current = obj;
  });
  const items = [isLoaded];
  const effect1 = isLoaded.useEffect(() => {
    let analyticsLocations;
    let value;
    const timestamp = Date.now();
    let tmp2 = null == ref.current;
    if (tmp2) {
      tmp2 = null != openedAt;
    }
    if (tmp2) {
      ref.current = timestamp - openedAt;
    }
    if (isLoaded) {
      ({ analyticsLocations, value } = ref.current);
      let obj = openedAt(outer1_2[3]);
      obj = { action: "VIEW", analyticsLocations };
      const merged = Object.assign(value);
      const result = obj.trackUserProfileAction(obj);
      obj = { profileUi: "USER_PROFILE", timeToInteractiveMs: ref.current };
      let diff;
      if (null != openedAt) {
        diff = timestamp - openedAt;
      }
      obj.timeToLoadMs = diff;
      let diff1;
      if (null != closure_1) {
        if (null != closure_2) {
          diff1 = closure_2 - closure_1;
        }
      }
      obj.timeToFetchMs = diff1;
      obj.viewStartedAt = openedAt;
      obj.fetchStartedAt = closure_1;
      obj.analyticsLocations = analyticsLocations;
      const merged1 = Object.assign(value);
      const result1 = openedAt(outer1_2[3]).maybeTrackUserProfileUiViewed(obj);
      const obj3 = openedAt(outer1_2[3]);
    }
  }, items);
  return ref(obj.Provider, { value, children: children.children });
};
export const useCreateUserProfileAnalyticsContext = function useCreateUserProfileAnalyticsContext(layout) {
  layout = layout.layout;
  const userId = layout.userId;
  const guildId = layout.guildId;
  const channelId = layout.channelId;
  const messageId = layout.messageId;
  const roleId = layout.roleId;
  const sourceSessionId = layout.sourceSessionId;
  let flag = layout.showGuildProfile;
  if (flag === undefined) {
    flag = true;
  }
  let sessionId;
  const context = channelId.useContext(roleId);
  sessionId = undefined;
  if (null != context) {
    sessionId = context.sessionId;
  }
  const items = [sessionId, layout, userId, guildId, channelId, messageId, roleId, sourceSessionId, flag];
  return channelId.useMemo(() => {
    const obj = { sessionId: layout(guildId[4]).v4(), sourceSessionId: null != sourceSessionId ? sourceSessionId : sessionId, layout, userId, guildId, channelId, messageId, roleId, showGuildProfile: flag };
    return obj;
  }, items);
};
export const useUserProfileAnalyticsContext = function useUserProfileAnalyticsContext() {
  const context = importAllResult.useContext(closure_5);
  analyticsLocations = analyticsLocations(5464)().analyticsLocations;
  const items = [context, analyticsLocations];
  const items1 = [context, analyticsLocations];
  const items2 = [context, analyticsLocations];
  const items3 = [context, analyticsLocations];
  return {
    context,
    trackUserProfileAction: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(outer1_2[3]);
        obj = { analyticsLocations };
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileAction(obj);
      }
    }, items),
    trackUserProfileEditAction: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(outer1_2[3]);
        obj = { analyticsLocations };
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileEditAction(obj);
      }
    }, items1),
    trackUserProfileEditSaved: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(outer1_2[3]);
        obj = { analyticsLocations };
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileEditSaved(obj);
      }
    }, items2),
    trackUserProfileWishlistAction: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(outer1_2[3]);
        obj = { analyticsLocations };
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileWishlistAction(obj);
      }
    }, items3)
  };
};
