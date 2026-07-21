// Module ID: 11789
// Function ID: 91515
// Dependencies: []

// Module 11789
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/forums/ForumPlatformHooks.native.tsx");

export default {
  useForumChannelSeenManager(guildId) {
    guildId = guildId.guildId;
    const arg1 = guildId;
    const channelId = guildId.channelId;
    const importDefault = channelId;
    const ref = React.useRef(null);
    const dependencyMap = ref;
    const items = [channelId];
    const callback = React.useCallback(() => {
      const rootNavigationRef = guildId(ref[1]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          const coerceChannelRouteResult = guildId(ref[2]).coerceChannelRoute(currentRoute);
          let tmp5 = null != coerceChannelRouteResult;
          if (tmp5) {
            tmp5 = coerceChannelRouteResult.params.channelId === channelId;
          }
          const current = ref.current;
          if (null != current) {
            const result = current.handleReactNavigationFocus(tmp5);
          }
          const obj3 = guildId(ref[2]);
        }
      }
    }, items);
    const React = callback;
    const effect = React.useEffect(() => {
      const rootNavigationRef = guildId(ref[1]).getRootNavigationRef();
      const guildId = rootNavigationRef;
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          rootNavigationRef.addListener("state", callback);
          return () => {
            rootNavigationRef.removeListener("state", closure_3);
          };
        }
      }
    });
    const items1 = [channelId, guildId, callback];
    const layoutEffect = React.useLayoutEffect(() => {
      let tmp = channelId(ref[3]);
      tmp = new tmp({ guildId, channelId });
      ref.current = tmp;
      const current = ref.current;
      current.initialize();
      callback();
      return () => {
        const current = ref.current;
        if (null != current) {
          current.terminate();
        }
        ref.current = null;
      };
    }, items1);
    return ref.current;
  }
};
