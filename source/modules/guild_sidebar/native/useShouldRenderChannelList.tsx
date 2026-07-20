// Module ID: 14953
// Function ID: 112523
// Name: useShouldRenderChannelList
// Dependencies: []
// Exports: useShouldRenderChannelList

// Module 14953 (useShouldRenderChannelList)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const ComponentActions = arg1(dependencyMap[4]).ComponentActions;
let closure_7 = false;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = function useShouldRenderChannelList() {
  const tmp = callback(React.useState(closure_7), 2);
  const first = tmp[0];
  const arg1 = first;
  let closure_1 = tmp[1];
  const items = [first];
  const effect = React.useEffect(() => {
    function allowRender(arg0) {
      let closure_7 = true;
      handleGatewayChange(true);
    }
    const first = allowRender;
    function handleGatewayChange(arg0) {
      if (closure_5.isConnected()) {
        allowRender();
      }
    }
    let closure_1 = handleGatewayChange;
    function handleCacheChange() {
      if ("cache-loaded" === closure_4.getLazyCacheStatus()) {
        allowRender();
      }
    }
    function handleNavigationChange() {
      const obj = allowRender(handleGatewayChange[5]);
      const rootNavigationRef = allowRender(handleGatewayChange[6]).getRootNavigationRef();
      let currentRoute;
      if (null != rootNavigationRef) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != obj.coerceGuildsRoute(currentRoute)) {
        allowRender();
      }
    }
    if (!first) {
      const result = closure_5.addReactChangeListener(handleGatewayChange);
      const result1 = closure_4.addReactChangeListener(handleCacheChange);
      const ComponentDispatch = first(closure_1[7]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      const rootNavigationRef = first(closure_1[6]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        const result = closure_5.removeReactChangeListener(handleGatewayChange);
        const result1 = closure_4.addReactChangeListener(handleCacheChange);
        const ComponentDispatch = allowRender(handleGatewayChange[7]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const rootNavigationRef = allowRender(handleGatewayChange[6]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
      };
    }
  }, items);
  return first;
};
