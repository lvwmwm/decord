// Module ID: 11897
// Function ID: 92119
// Name: GameProfileGameClaimCta
// Dependencies: [5, 31, 653, 33, 8642, 5692, 1881, 4543, 1212, 2]
// Exports: default

// Module 11897 (GameProfileGameClaimCta)
import createHandoffTokenWithLoadingModal from "createHandoffTokenWithLoadingModal";
import result from "result";
import { RelativeMarketingURLs } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/game_profile/native/components/GameProfileGameClaimCta.tsx");

export default function GameProfileGameClaimCta(trackAction) {
  trackAction = trackAction.trackAction;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [trackAction];
  const linkedApplications = trackAction.game.linkedApplications;
  let someResult;
  callback = React.useCallback(callback(tmp), items);
  if (null != linkedApplications) {
    someResult = linkedApplications.some((type) => type.type === trackAction(outer1_2[6]).GameLinkTypes.OFFICIAL);
  }
  if (null == someResult) {
    const obj = { variant: "secondary", size: "md" };
    const intl = trackAction(1212).intl;
    obj.text = intl.string(trackAction(1212).t["mqg+to"]);
    obj.onPress = callback;
    let tmp4 = jsx(trackAction(4543).Button, { variant: "secondary", size: "md" });
  } else {
    tmp4 = null;
  }
  return tmp4;
};
