// Module ID: 8990
// Function ID: 70794
// Name: CrunchyrollLinkDiscordError
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 8990 (CrunchyrollLinkDiscordError)
import "result";
import { CrunchyrollLinkModalScenes as closure_2 } from "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default function CrunchyrollLinkDiscordError(onClose) {
  let obj = arg1(dependencyMap[3]);
  const navigation = obj.useNavigation();
  const connectRetry = arg1(dependencyMap[4]).useConnectRetry(navigation, constants.PRE_CONNECT);
  obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.title = intl.string(arg1(dependencyMap[6]).t.8YK70c);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.body = intl2.string(arg1(dependencyMap[6]).t.moyYLf);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(arg1(dependencyMap[5]).TwoWayLinkError, obj);
};
