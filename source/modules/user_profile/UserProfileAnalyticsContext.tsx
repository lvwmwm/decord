// Module ID: 8260
// Function ID: 65140
// Name: UserProfileAnalyticsProvider
// Dependencies: []
// Exports: UserProfileAnalyticsProvider, useCreateUserProfileAnalyticsContext, useUserProfileAnalyticsContext

// Module 8260 (UserProfileAnalyticsProvider)
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const context = importAllResult.createContext(null);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/UserProfileAnalyticsContext.tsx");

export const UserProfileAnalyticsProvider = (children) => {
  let isLoaded;
  let openedAt;
  let value;
  ({ value, openedAt } = children);
  const arg1 = openedAt;
  ({ fetchStartedAt: closure_1, fetchEndedAt: closure_2, isLoaded } = children);
  if (isLoaded === undefined) {
    isLoaded = false;
  }
  let jsx;
  let redux;
  let closure_6;
  const ref = isLoaded.useRef(undefined);
  jsx = ref;
  const ref1 = isLoaded.useRef(openedAt);
  if (ref1.current !== openedAt) {
    ref1.current = openedAt;
    ref.current = undefined;
  }
  const obj = { analyticsLocations: importDefault(dependencyMap[2])().analyticsLocations, value };
  redux = obj;
  closure_6 = importAllResult.useRef(obj);
  const effect = importAllResult.useEffect(() => {
    closure_6.current = obj;
  });
  const items = [isLoaded];
  const effect1 = importAllResult.useEffect(() => {
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
      let obj = openedAt(closure_2[3]);
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
      const result1 = openedAt(closure_2[3]).maybeTrackUserProfileUiViewed(obj);
      const obj3 = openedAt(closure_2[3]);
    }
  }, items);
  return <redux.Provider value={value}>{arg0.children}</redux.Provider>;
};
export const useCreateUserProfileAnalyticsContext = function useCreateUserProfileAnalyticsContext(layout) {
  layout = layout.layout;
  const arg1 = layout;
  const userId = layout.userId;
  const importDefault = userId;
  const guildId = layout.guildId;
  const dependencyMap = guildId;
  const channelId = layout.channelId;
  const messageId = layout.messageId;
  const jsx = messageId;
  const roleId = layout.roleId;
  let closure_5 = roleId;
  const sourceSessionId = layout.sourceSessionId;
  let flag = layout.showGuildProfile;
  if (flag === undefined) {
    flag = true;
  }
  let sessionId;
  const context = importAllResult.useContext(closure_5);
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
  const arg1 = context;
  const analyticsLocations = importDefault(dependencyMap[2])().analyticsLocations;
  const importDefault = analyticsLocations;
  const items = [context, analyticsLocations];
  const items1 = [context, analyticsLocations];
  const items2 = [context, analyticsLocations];
  const items3 = [context, analyticsLocations];
  return {
    context,
    trackUserProfileAction: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(closure_2[3]);
        obj = { analyticsLocations };
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileAction(obj);
      }
    }, items),
    trackUserProfileEditAction: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(closure_2[3]);
        obj = { analyticsLocations };
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileEditAction(obj);
      }
    }, items1),
    trackUserProfileEditSaved: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(closure_2[3]);
        obj = { analyticsLocations };
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileEditSaved(obj);
      }
    }, items2),
    trackUserProfileWishlistAction: importAllResult.useCallback((arg0) => {
      if (null != context) {
        let obj = context(closure_2[3]);
        obj = { analyticsLocations };
        const merged = Object.assign(context);
        const merged1 = Object.assign(arg0);
        const result = obj.trackUserProfileWishlistAction(obj);
      }
    }, items3)
  };
};
