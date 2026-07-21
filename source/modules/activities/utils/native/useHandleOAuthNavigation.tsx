// Module ID: 15568
// Function ID: 118784
// Name: useHandleOAuthNavigation
// Dependencies: []
// Exports: default

// Module 15568 (useHandleOAuthNavigation)
let closure_3 = importAll(dependencyMap[0]);
const ComponentActions = arg1(dependencyMap[1]).ComponentActions;
let closure_5 = arg1(dependencyMap[2]).OAUTH2_AUTHORIZE_MODAL_KEY;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/activities/utils/native/useHandleOAuthNavigation.tsx");

export default function useHandleOAuthNavigation() {
  const effect = React.useEffect(() => {
    function showOAuth2Modal(arg0) {
      let obj = callback(paths[3]);
      obj.popWithKey(closure_5);
      obj = {};
      const obj2 = callback(paths[3]);
      const merged = Object.assign(arg0);
      obj["dismissOAuthModal"] = function dismissOAuthModal() {
        callback(closure_2[3]).popWithKey(closure_5);
      };
      obj2.pushLazy(showOAuth2Modal(paths[5])(paths[4], paths.paths), obj, closure_5);
    }
    const ComponentDispatch = showOAuth2Modal(closure_2[6]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = showOAuth2Modal(closure_2[6]).ComponentDispatch;
      ComponentDispatch.unsubscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    };
  }, []);
};
