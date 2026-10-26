// Module ID: 9331
// Function ID: 9332
// Name: useGameProfileMobileStoreReviews
// Dependencies: [558, 576, 9332, 2]

// Module 9331 (useGameProfileMobileStoreReviews)
import react from "react" /* 576 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const GameProfileMobileReviewsExperiment = tmp(9332);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileMobileStoreReviews(arg0) {
  let first;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "GameProfileReviews" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = GameProfileMobileReviewsExperiment;
  const isGameProfileMobileReviewsEnabled = tmpResult.useIsGameProfileMobileReviewsEnabled(first);
  if (cResult[1] === isGameProfileMobileReviewsEnabled) {
    let tmp6;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
    }
    return tmp6;
  }
  let items = arg0;
  if (!isGameProfileMobileReviewsEnabled) {
    items = [];
  }
  cResult[1] = isGameProfileMobileReviewsEnabled;
  cResult[2] = arg0;
  cResult[3] = items;
  tmp6 = items;
}) : (function useGameProfileMobileStoreReviews(arg0) {
  let items = arg0;
  const obj = GameProfileMobileReviewsExperiment;
  if (!obj.useIsGameProfileMobileReviewsEnabled({ location: "GameProfileReviews" })) {
    items = [];
  }
  return items;
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileMobileStoreReviews.tsx");

export const useGameProfileMobileStoreReviews = tmp2;
