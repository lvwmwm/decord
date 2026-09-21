// Module ID: 9378
// Function ID: 9379
// Name: PlayStationLinkDiscordConsent
// Dependencies: [19, 9373, 1078, 9356, 21, 558, 568, 1488, 9358, 9379, 9357, 2]

// Module 9378 (PlayStationLinkDiscordConsent)
import noop from "module_19" /* 19 */;

const require = fn;
const constants = fn(9373).PlayStationLinkModalScenes;
const PlatformTypes = fn(1078).PlatformTypes;
const PLAYSTATION_CLIENT_SCOPES = fn(9356).PLAYSTATION_CLIENT_SCOPES;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx");

export const PlayStationLinkDiscordConsent = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = navigation(568).c(12);
  ({ callbackCode, callbackState, platformType } = arg0);
  const obj = navigation(568);
  const tmp = navigation;
  navigation = navigation(1488).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function s() {
      navigation.push(constants.SUCCESS);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    class N {
      constructor(arg0) {
        obj = { errorCode: arg0 };
        arr = closure_0.push(closure_3.ERROR, obj);
        return;
      }
    }
    cResult[2] = navigation;
    cResult[3] = N;
  } else {
    class N {
      constructor(arg0) {
        obj = { errorCode: arg0 };
        arr = closure_0.push(closure_3.ERROR, obj);
        return;
      }
    }
  }
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    class N {
      constructor(arg0) {
        obj = { errorCode: arg0 };
        arr = closure_0.push(closure_3.ERROR, obj);
        return;
      }
    }
  } else {
    class N {
      constructor(arg0) {
        obj = { errorCode: arg0 };
        arr = closure_0.push(closure_3.ERROR, obj);
        return;
      }
    }
  }
  if (platformType === tmp7.PLAYSTATION_STAGING) {
    class N {
      constructor(arg0) {
        obj = { errorCode: arg0 };
        arr = closure_0.push(closure_3.ERROR, obj);
        return;
      }
    }
  } else {
    class N {
      constructor(arg0) {
        obj = { errorCode: arg0 };
        arr = closure_0.push(closure_3.ERROR, obj);
        return;
      }
    }
  }
  if (cResult[4] === callbackCode) {
    class N {
      constructor(arg0) {
        obj = { errorCode: arg0 };
        arr = closure_0.push(closure_3.ERROR, obj);
        return;
      }
    }
  }
  const obj2 = navigation(1488);
  const obj3 = { platformType, callbackCode, callbackState, clientId: tmp8, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: tmp5, onError: tmp6, redirectUri: tmp9 };
  tmp7 = PlatformTypes;
  cResult[4] = callbackCode;
  cResult[5] = callbackState;
  cResult[6] = tmp8;
  cResult[7] = tmp6;
  cResult[8] = tmp5;
  cResult[9] = platformType;
  cResult[10] = tmp9;
  cResult[11] = jsx(tmp(9357).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: tmp8, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: tmp5, onError: tmp6, redirectUri: tmp9 });
}) : ((platformType) => {
  platformType = platformType.platformType;
  let navigation;
  ({ callbackCode, callbackState } = platformType);
  navigation = navigation(1488).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = noop.useCallback((errorCode) => {
    navigation.push(constants.ERROR, { errorCode });
  }, items1);
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION_APPLICATION_ID = tmp(9358).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  } else {
    PLAYSTATION_APPLICATION_ID = tmp(9358).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
  }
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION = tmp(9379).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
  } else {
    PLAYSTATION = tmp(9379).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  }
  return jsx(navigation(9357).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION });
});
