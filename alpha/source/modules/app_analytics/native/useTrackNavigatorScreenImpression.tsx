// Module ID: 15641
// Function ID: 15642
// Name: useTrackNavigatorScreenImpression
// Dependencies: [558, 576, 1275, 9291, 2]

// Module 15641 (useTrackNavigatorScreenImpression)
import react from "react" /* 576 */;
import useTrackImpressionDefault from "useTrackImpression" /* 9291 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const discord_common_AnalyticsUtils = tmp(1275);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackNavigatorScreenImpression(arg0, params) {
  let impressionName;
  let impressionProperties;
  const obj = react;
  const cResult = obj.c(6);
  ({ impressionName, impressionProperties } = arg0);
  if (cResult[0] === impressionProperties) {
    let tmp4;
    if (cResult[1] === params) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === impressionName) {
      let tmp6;
      if (cResult[4] === tmp4) {
        tmp6 = cResult[5];
      }
      useTrackImpressionDefault(tmp6);
    }
    const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.PAGE, name: impressionName, properties: tmp4 };
    cResult[3] = impressionName;
    cResult[4] = tmp4;
    cResult[5] = obj2;
    tmp6 = obj2;
  }
  let impressionPropertiesResult = impressionProperties;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  cResult[0] = impressionProperties;
  cResult[1] = params;
  cResult[2] = impressionPropertiesResult;
  tmp4 = impressionPropertiesResult;
}) : (function useTrackNavigatorScreenImpression(impressionProperties, params) {
  impressionProperties = impressionProperties.impressionProperties;
  let impressionPropertiesResult = impressionProperties;
  const impressionName = impressionProperties.impressionName;
  if (typeof impressionProperties === "function") {
    impressionPropertiesResult = impressionProperties(params.params);
  }
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.PAGE, name: impressionName, properties: impressionPropertiesResult };
  const tmp2 = useTrackImpressionDefault;
  tmp2(obj);
});
const result = size.fileFinishedImporting("modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx");

export const useTrackNavigatorScreenImpression = tmp2;
