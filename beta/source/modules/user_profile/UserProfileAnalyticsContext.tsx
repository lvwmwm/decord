// Module ID: 7635
// Function ID: 7636
// Name: UserProfileAnalyticsContext
// Dependencies: [19, 21, 6583, 7636, 1255, 2]
// Exports: UserProfileAnalyticsProvider, useCreateUserProfileAnalyticsContext, useUserProfileAnalyticsContext

// Module 7635 (UserProfileAnalyticsContext)
import Fragment from "Fragment" /* 21 */;
import v1 from "v1" /* 1255 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7636 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let context = react.createContext(null);
let result = size.fileFinishedImporting("modules/user_profile/UserProfileAnalyticsContext.tsx");

export const UserProfileAnalyticsProvider = (children) => {
  let isLoaded;
  let openedAt;
  let value;
  ({ value, openedAt } = children);
  ({ fetchStartedAt: importDefault, fetchEndedAt: dependencyMap, isLoaded } = children);
  children = children.children;
  if (isLoaded === undefined) {
    isLoaded = false;
  }
  let obj2;
  let obj = isLoaded;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let ref = isLoaded.useRef(undefined);
  const ref1 = isLoaded.useRef(openedAt);
  if (ref1.current !== openedAt) {
    ref1.current = openedAt;
    ref.current = undefined;
  }
  obj2 = { analyticsLocations, value };
  ref = obj.useRef(obj2);
  const effect = obj.useEffect(() => {
    ref.current = obj2;
  });
  const items = [isLoaded];
  const effect1 = obj.useEffect(() => {
    let analyticsLocations;
    let diff;
    let diff1;
    let value;
    const timestamp = Date.now();
    const tmp3 = null == ref.current && null != openedAt;
    if (tmp3) {
      ref.current = timestamp - openedAt;
    }
    const tmp6 = isLoaded;
    if (tmp6) {
      ({ analyticsLocations, value } = ref.current);
      const obj = { action: "VIEW", analyticsLocations };
      const trackUserProfileAction = UserProfileAnalyticsUtils.trackUserProfileAction;
      UserProfileAnalyticsUtils;
      const merged = Object.assign(value);
      const result = trackUserProfileAction(obj);
      obj2 = { profileUi: "USER_PROFILE", timeToInteractiveMs: ref.current, timeToLoadMs: diff, timeToFetchMs: diff1, viewStartedAt: openedAt, fetchStartedAt: importDefault, analyticsLocations };
      diff = undefined;
      const maybeTrackUserProfileUiViewed = UserProfileAnalyticsUtils.maybeTrackUserProfileUiViewed;
      UserProfileAnalyticsUtils;
      if (null != openedAt) {
        diff = timestamp - tmp16;
      }
      diff1 = undefined;
      if (null != importDefault) {
        if (null != dependencyMap) {
          diff1 = dependencyMap - tmp18;
        }
      }
      const merged1 = Object.assign(value);
      const result1 = maybeTrackUserProfileUiViewed(obj2);
    }
  }, items);
  return ref(obj2.Provider, { value, children });
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
  let obj = channelId;
  const context = channelId.useContext(roleId);
  let sessionId;
  if (context != null) {
    sessionId = context.sessionId;
  }
  const items = [sessionId, layout, userId, guildId, channelId, messageId, roleId, sourceSessionId, flag];
  return obj.useMemo(() => {
    let obj2;
    let tmp;
    const obj = { sessionId: obj2.v4(), sourceSessionId: tmp, layout, userId, guildId, channelId, messageId, roleId, showGuildProfile: flag };
    tmp = sourceSessionId;
    obj2 = v1;
    if (sourceSessionId == null) {
      tmp = sessionId;
    }
    return obj;
  }, items);
};
export const useUserProfileAnalyticsContext = function useUserProfileAnalyticsContext() {
  let analyticsLocations;
  let items;
  let items1;
  let items2;
  let items3;
  const context = react.useContext(closure_5);
  analyticsLocations = analyticsLocations(6583)().analyticsLocations;
  let obj = {
    context,
    trackUserProfileAction: react.useCallback((arg0) => {
      if (null != context) {
        const obj = { analyticsLocations };
        const trackUserProfileAction = UserProfileAnalyticsUtils.trackUserProfileAction;
        UserProfileAnalyticsUtils;
        const merged = Object.assign(tmp);
        const merged1 = Object.assign(arg0);
        const result = trackUserProfileAction(obj);
      }
    }, items),
    trackUserProfileEditAction: react.useCallback((arg0) => {
      if (null != context) {
        const obj = { analyticsLocations };
        const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
        UserProfileAnalyticsUtils;
        const merged = Object.assign(tmp);
        const merged1 = Object.assign(arg0);
        const result = trackUserProfileEditAction(obj);
      }
    }, items1),
    trackUserProfileEditSaved: react.useCallback((arg0) => {
      if (null != context) {
        const obj = { analyticsLocations };
        const trackUserProfileEditSaved = UserProfileAnalyticsUtils.trackUserProfileEditSaved;
        UserProfileAnalyticsUtils;
        const merged = Object.assign(tmp);
        const merged1 = Object.assign(arg0);
        const result = trackUserProfileEditSaved(obj);
      }
    }, items2),
    trackUserProfileWishlistAction: react.useCallback((arg0) => {
      if (null != context) {
        const obj = { analyticsLocations };
        const trackUserProfileWishlistAction = UserProfileAnalyticsUtils.trackUserProfileWishlistAction;
        UserProfileAnalyticsUtils;
        const merged = Object.assign(tmp);
        const merged1 = Object.assign(arg0);
        const result = trackUserProfileWishlistAction(obj);
      }
    }, items3)
  };
  items = [context, analyticsLocations];
  items1 = [context, analyticsLocations];
  items2 = [context, analyticsLocations];
  items3 = [context, analyticsLocations];
  return obj;
};
