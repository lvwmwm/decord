// Module ID: 8564
// Function ID: 8565
// Name: PlayStationLinkDiscordConsent
// Dependencies: [19, 8559, 1086, 8542, 21, 558, 576, 1491, 8544, 8565, 8543, 2]

// Module 8564 (PlayStationLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1086 */;
import GameConsoleConstants from "GameConsoleConstants" /* 8542 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 8559 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const PLAYSTATION_CLIENT_SCOPES = GameConsoleConstants.PLAYSTATION_CLIENT_SCOPES;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let callbackCode;
  let callbackState;
  let platformType;
  let tmp5;
  let obj = navigation(576);
  const cResult = obj.c(12);
  ({ callbackCode, callbackState, platformType } = arg0);
  const obj2 = navigation(1491);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function s() {
      navigation.push(constants.SUCCESS);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    class N {
      constructor(errorCode) {
        const obj = { errorCode };
        navigation.push(constants.ERROR, obj);
      }
    }
    cResult[2] = navigation;
    cResult[3] = N;
  } else {
    class N {
      constructor(errorCode) {
        const obj = { errorCode };
        navigation.push(constants.ERROR, obj);
      }
    }
  }
  const tmp7 = PlatformTypes;
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    class N {
      constructor(errorCode) {
        const obj = { errorCode };
        navigation.push(constants.ERROR, obj);
      }
    }
  } else {
    class N {
      constructor(errorCode) {
        const obj = { errorCode };
        navigation.push(constants.ERROR, obj);
      }
    }
  }
  if (platformType === tmp7.PLAYSTATION_STAGING) {
    class N {
      constructor(errorCode) {
        const obj = { errorCode };
        navigation.push(constants.ERROR, obj);
      }
    }
  } else {
    class N {
      constructor(errorCode) {
        const obj = { errorCode };
        navigation.push(constants.ERROR, obj);
      }
    }
  }
  if (cResult[4] === callbackCode) {
    class N {
      constructor(errorCode) {
        const obj = { errorCode };
        navigation.push(constants.ERROR, obj);
      }
    }
  }
  cResult[4] = callbackCode;
  cResult[5] = callbackState;
  cResult[6] = tmp8;
  cResult[7] = tmp6;
  cResult[8] = tmp5;
  cResult[9] = platformType;
  cResult[10] = tmp9;
  cResult[11] = jsx(navigation(8543).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: tmp8, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: tmp5, onError: tmp6, redirectUri: tmp9 });
  jsx(navigation(8543).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: tmp8, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: tmp5, onError: tmp6, redirectUri: tmp9 });
}) : ((platformType) => {
  let PLAYSTATION;
  let PLAYSTATION_APPLICATION_ID;
  let callbackCode;
  let callbackState;
  platformType = platformType.platformType;
  navigation = undefined;
  ({ callbackCode, callbackState } = platformType);
  let obj = navigation(1491);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = react.useCallback((errorCode) => {
    const obj = { errorCode };
    navigation.push(constants.ERROR, obj);
  }, items1);
  const tmp6 = PlatformTypes;
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    PLAYSTATION_APPLICATION_ID = tmp(8544).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  } else {
    PLAYSTATION_APPLICATION_ID = tmp(8544).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
  }
  if (platformType === tmp6.PLAYSTATION_STAGING) {
    PLAYSTATION = tmp(8565).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
  } else {
    PLAYSTATION = tmp(8565).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  }
  return jsx(navigation(8543).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION });
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx");

export const PlayStationLinkDiscordConsent = tmp2;
