// Module ID: 17014
// Function ID: 17015
// Name: useHandleOAuthNavigation
// Dependencies: [19, 1074, 9574, 4763, 9578, 1896, 1109, 2]
// Exports: default

// Module 17014 (useHandleOAuthNavigation)
import closure_3 from "noop" /* 19 */;
import { ComponentActions } from "ME" /* 1074 */;
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_5 } from "OAUTH2_AUTHORIZE_MODAL_KEY" /* 9574 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/native/useHandleOAuthNavigation.tsx");

export default function useHandleOAuthNavigation() {
  const effect = React.useEffect(() => {
    function showOAuth2Modal(arg0) {
      let obj = callback(paths[3]);
      obj.popWithKey(closure_5);
      obj = {};
      const obj2 = callback(paths[3]);
      const merged = Object.assign(arg0);
      obj.dismissOAuthModal = function dismissOAuthModal() {
        callback(table[3]).popWithKey(closure_5);
      };
      obj2.pushLazy(showOAuth2Modal(paths[5])(paths[4], paths.paths), obj, closure_5);
    }
    let ComponentDispatch = showOAuth2Modal(table[6]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = showOAuth2Modal(closure_1_2[6]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_1_4.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    };
  }, []);
};
