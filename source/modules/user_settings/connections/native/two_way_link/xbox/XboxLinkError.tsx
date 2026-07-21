// Module ID: 9030
// Function ID: 70953
// Name: XboxLinkDiscordError
// Dependencies: []
// Exports: default

// Module 9030 (XboxLinkDiscordError)
importAll(dependencyMap[0]);
const XboxLinkModalScenes = arg1(dependencyMap[1]).XboxLinkModalScenes;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  let obj = arg1(dependencyMap[3]);
  const navigation = obj.useNavigation();
  const connectRetry = arg1(dependencyMap[4]).useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.INwPCV);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.body = intl2.string(arg1(dependencyMap[6]).t.GyXRRz);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(arg1(dependencyMap[5]).TwoWayLinkError, obj);
};
