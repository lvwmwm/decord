// Module ID: 15696
// Function ID: 121039
// Name: useHandleOAuthNavigation
// Dependencies: [31, 653, 10621, 4337, 9995, 1934, 1207, 2]
// Exports: default

// Module 15696 (useHandleOAuthNavigation)
import result from "result";
import { ComponentActions } from "ME";
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_5 } from "OAUTH2_AUTHORIZE_MODAL_KEY";

const require = arg1;
const result = require("OAUTH2_AUTHORIZE_MODAL_KEY").fileFinishedImporting("modules/activities/utils/native/useHandleOAuthNavigation.tsx");

export default function useHandleOAuthNavigation() {
  const effect = React.useEffect(() => {
    function showOAuth2Modal(arg0) {
      let obj = outer2_1(outer2_2[3]);
      obj.popWithKey(outer2_5);
      obj = {};
      const obj2 = outer2_1(outer2_2[3]);
      const merged = Object.assign(arg0);
      obj["dismissOAuthModal"] = function dismissOAuthModal() {
        outer3_1(outer3_2[3]).popWithKey(outer3_5);
      };
      obj2.pushLazy(outer2_0(outer2_2[5])(outer2_2[4], outer2_2.paths), obj, outer2_5);
    }
    let ComponentDispatch = outer1_0(outer1_2[6]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(outer1_4.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = outer2_0(outer2_2[6]).ComponentDispatch;
      ComponentDispatch.unsubscribe(outer2_4.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    };
  }, []);
};
