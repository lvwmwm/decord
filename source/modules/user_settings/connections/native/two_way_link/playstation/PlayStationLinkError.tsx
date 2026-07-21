// Module ID: 8975
// Function ID: 70733
// Name: PlayStationLinkError
// Dependencies: []
// Exports: PlayStationLinkError

// Module 8975 (PlayStationLinkError)
importAll(dependencyMap[0]);
let closure_2 = arg1(dependencyMap[1]).PlayStationLinkModalScenes;
const AbortCodes = arg1(dependencyMap[2]).AbortCodes;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  let errorCode;
  let onClose;
  ({ onClose, errorCode } = arg0);
  let obj = arg1(dependencyMap[4]);
  const navigation = obj.useNavigation();
  const connectRetry = arg1(dependencyMap[5]).useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = arg1(dependencyMap[6]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[6]).t.3dIn2A);
  } else {
    const intl = arg1(dependencyMap[6]).intl;
    stringResult = intl.string(arg1(dependencyMap[6]).t.qE9nqE);
  }
  obj = {};
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.title = intl3.string(arg1(dependencyMap[6]).t.eY3qHd);
  obj.body = stringResult;
  obj.onClose = onClose;
  obj.onRetry = connectRetry;
  return jsx(arg1(dependencyMap[7]).TwoWayLinkError, obj);
};
