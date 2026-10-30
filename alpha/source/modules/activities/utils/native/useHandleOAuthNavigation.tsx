// Module ID: 19074
// Function ID: 19075
// Name: useHandleOAuthNavigation
// Dependencies: [19, 1072, 10885, 6738, 10880, 1995, 1109, 2]
// Exports: default

// Module 19074 (useHandleOAuthNavigation)
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import Constants2 from "Constants" /* 10885 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
let closure_5 = Constants2.OAUTH2_AUTHORIZE_MODAL_KEY;
const result = size.fileFinishedImporting("modules/activities/utils/native/useHandleOAuthNavigation.tsx");

export default function useHandleOAuthNavigation() {
  let SHOW_OAUTH2_MODAL;
  const effect = react.useEffect(() => {
    function showOAuth2Modal(arg0) {
      let obj = closure_1_1(paths[3]);
      obj.popWithKey(closure_1_5);
      const pushLazy = closure_1_1(paths[3]).pushLazy;
      const obj2 = {
        dismissOAuthModal() {
          const obj = closure_1_1(paths[3]);
          obj.popWithKey(closure_1_5);
        }
      };
      closure_1_1(paths[3]);
      const tmp3 = showOAuth2Modal(paths[5])(paths[4], paths.paths);
      const merged = Object.assign(arg0);
      pushLazy(tmp3, obj2, closure_1_5);
    }
    let ComponentDispatch = showOAuth2Modal(paths[6]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    };
  }, []);
};
