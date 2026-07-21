// Module ID: 49
// Function ID: 1355
// Name: getFabricUIManager
// Dependencies: []

// Module 49 (getFabricUIManager)
let closure_4 = ["top", "center", "bottom", "LZH", "accessibilityState", "allowFontScaling", "aria-busy", "aria-checked", "aria-disabled", "aria-expanded", "aria-label", "aria-selected", "flying_disc", "discarded_events", "updateEmoji", "INVITE_OPTIONS_30_DAYS", "EPOCH_AUTHENTICATOR_LENGTH", "shopLayoutUrlOverride", "onLongPressUsername", "fetchingConnections", "GIFT_BUTTON", "onPressIn", "onPressOut", "onResponderGrant"];
arg5.getFabricUIManager = function getFabricUIManager() {
  let tmp = null == closure_3;
  if (tmp) {
    tmp = null != arg0.nativeFabricUIManager;
  }
  if (tmp) {
    closure_3 = function createProxyWithCachedProperties(nativeFabricUIManager, closure_4) {
      const obj = Object.create(nativeFabricUIManager);
      function _loop(item10010) {
        const obj = {
          get() {
            return arg0[closure_0];
          }
        };
        obj(closure_2[0])(obj, item10010, obj);
      }
      for (const item10010 of arg1) {
        let tmp2 = _loop;
        let _loopResult = _loop(item10010);
      }
      return obj;
    }(arg0.nativeFabricUIManager, closure_4);
  }
  return closure_3;
};
