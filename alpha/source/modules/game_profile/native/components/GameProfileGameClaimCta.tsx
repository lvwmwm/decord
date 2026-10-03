// Module ID: 8561
// Function ID: 8562
// Name: GameProfileGameClaimCta
// Dependencies: [5, 19, 1085, 21, 558, 576, 8319, 6820, 6824, 1985, 1126, 5594, 2]

// Module 8561 (GameProfileGameClaimCta)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import MobileWebHandoffLinkingDefault from "MobileWebHandoffLinking" /* 6820 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, c1, trackAction;

const RelativeMarketingURLs = Constants.RelativeMarketingURLs;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((trackAction) => {
  let tmp4;
  let tmp7;
  const tmp2 = dependencyMap;
  let obj = trackAction(576);
  const cResult = obj.c(5);
  trackAction = trackAction.trackAction;
  const game = trackAction.game;
  if (cResult[0] !== trackAction) {
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let obj5;
      let v3;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c0(c0(dependencyMap[6]).GameProfileTrackActionActions.ClaimGame);
              c1 = 1;
              c0 = 1;
              const obj4 = { value: obj5.redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, c0(dependencyMap[8]).LoginHandoffSource.GAME_CLAIM), done: false };
              obj5 = MobileWebHandoffLinkingDefault;
              return obj4;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp4) {
          c0 = 3;
          throw tmp4;
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[0] = trackAction;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const linkedApplications = game.linkedApplications;
  let someResult;
  if (linkedApplications != null) {
    someResult = linkedApplications.some((type) => type.type === trackAction(dependencyMap[9]).GameLinkTypes.OFFICIAL);
  }
  if (someResult == null) {
    let tmp9;
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(trackAction(1126).t["mqg+to"]);
      cResult[2] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const tmp13 = jsx(trackAction(5594).Button, { variant: "secondary", size: "md", text: tmp9, onPress: tmp4 });
      cResult[3] = tmp4;
      cResult[4] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    tmp7 = tmp11;
  } else {
    tmp7 = null;
  }
  return tmp7;
}) : ((trackAction) => {
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
        return { value: "IconComponent", done: "IconComponent" };
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
            trackAction(trackAction(dependencyMap[6]).GameProfileTrackActionActions.ClaimGame);
            const obj5 = c1(dependencyMap[7]);
            c1 = 1;
            trackAction = 1;
            const obj4 = { value: obj5.redirectDeveloperPortalWithHandoffToken(constants.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY, trackAction(dependencyMap[8]).LoginHandoffSource.GAME_CLAIM), done: false };
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
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp4) {
        trackAction = 3;
        throw tmp4;
      }
    }
  }), items);
  if (linkedApplications != null) {
    someResult = linkedApplications.some((type) => type.type === trackAction(dependencyMap[9]).GameLinkTypes.OFFICIAL);
  }
  if (someResult == null) {
    const tmp4 = jsx;
    const Button = trackAction(5594).Button;
    const intl = trackAction(1126).intl;
    tmp3 = <Button variant="secondary" size="md" text={intl.string(trackAction(1126).t["mqg+to"])} onPress={callback} />;
  } else {
    tmp3 = null;
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileGameClaimCta.tsx");

export default tmp2;
