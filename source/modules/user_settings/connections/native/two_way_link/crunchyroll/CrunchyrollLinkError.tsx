// Module ID: 8991
// Function ID: 70807
// Name: CrunchyrollLinkDiscordError
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 8991 (CrunchyrollLinkDiscordError)
import "__exportStarResult1";
import { CrunchyrollLinkModalScenes as closure_2 } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

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
