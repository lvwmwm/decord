// Module ID: 8364
// Function ID: 8365
// Name: GameProfileGameClaimCta
// Dependencies: [5, 19, 1074, 21, 8139, 6735, 6739, 1979, 5281, 1115, 2]
// Exports: default

// Module 8364 (GameProfileGameClaimCta)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1;

const RelativeMarketingURLs = Constants.RelativeMarketingURLs;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileGameClaimCta.tsx");

export default function GameProfileGameClaimCta(trackAction) {
  let tmp3;
  trackAction = trackAction.trackAction;
  const items = [trackAction];
  const linkedApplications = trackAction.game.linkedApplications;
  let someResult;
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let v1;
    let v3;
    if (trackAction === 2) {
      trackAction = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        trackAction = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            trackAction = 3;
            throw value;
          } else if (arg0 === 2) {
            trackAction = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            trackAction(trackAction(dependencyMap[4]).GameProfileTrackActionActions.ClaimGame);
            const obj5 = c1(dependencyMap[5]);
            c1 = 1;
            trackAction = 1;
            const obj4 = { value: obj5.redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, trackAction(dependencyMap[6]).LoginHandoffSource.GAME_CLAIM), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          trackAction = 3;
          throw value;
        } else if (arg0 === 2) {
          trackAction = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          trackAction = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp4) {
        trackAction = 3;
        throw tmp4;
      }
    }
  }), items);
  if (linkedApplications != null) {
    someResult = linkedApplications.some((type) => type.type === trackAction(dependencyMap[7]).GameLinkTypes.OFFICIAL);
  }
  if (someResult == null) {
    const tmp4 = jsx;
    const Button = trackAction(5281).Button;
    const intl = trackAction(1115).intl;
    tmp3 = <Button variant="secondary" size="md" text={intl.string(trackAction(1115).t["mqg+to"])} onPress={callback} />;
  } else {
    tmp3 = null;
  }
  return tmp3;
};
