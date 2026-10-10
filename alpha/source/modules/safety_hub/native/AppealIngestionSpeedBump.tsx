// Module ID: 11478
// Function ID: 11479
// Name: AppealIngestionSpeedBump
// Dependencies: [19, 17, 7536, 7512, 1085, 21, 5092, 558, 576, 504, 11471, 11479, 1126, 11477, 11480, 11496, 11497, 5088, 2]

// Module 11478 (AppealIngestionSpeedBump)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import AppealIngestionActivitySummaryDefault from "AppealIngestionActivitySummary" /* 11480 */;
import AppealIngestionPolicySummaryDefault from "AppealIngestionPolicySummary" /* 11496 */;
import AppealIngestionExternalLinkDefault from "AppealIngestionExternalLink" /* 11497 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7536 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7512 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
const View = react_native.View;
({ SafetyHubAnalyticsActions: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 } });
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppealIngestionSpeedBump(arg0) {
  let appealClassificationId;
  let arr2;
  let classification;
  let emitAppealIngestionEvent;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let isCoppa;
  let isDeveloperClassification;
  let isDsaEligible;
  let isSpam;
  let items1;
  let items2;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp22;
  let tmp26;
  let tmp5;
  let tmp6;
  const obj = emitAppealIngestionEvent(576);
  const cResult = obj.c(36);
  ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function _() {
      return appealClassificationId.getAppealClassificationId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = emitAppealIngestionEvent(504);
  let stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const useSafetyHubClassification = emitAppealIngestionEvent(11471).useSafetyHubClassification;
  emitAppealIngestionEvent(11471);
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = useSafetyHubClassification(stateFromStores);
  const tmpResult4 = emitAppealIngestionEvent(11479);
  emitAppealIngestionEvent = tmpResult4.useEmitAppealIngestionEvent();
  ({ isDsaEligible, classification } = safetyHubClassification);
  let str;
  if (classification != null) {
    str = classification.explainer_link;
  }
  if (str == null) {
    str = "";
  }
  const classification2 = safetyHubClassification.classification;
  let flagged_content;
  const tmp12 = cResult[2];
  if (classification2 != null) {
    flagged_content = classification2.flagged_content;
  }
  if (tmp12 !== flagged_content) {
    const classification3 = safetyHubClassification.classification;
    let flagged_content1;
    if (classification3 != null) {
      flagged_content1 = classification3.flagged_content;
    }
    if (flagged_content1 == null) {
      flagged_content1 = [];
    }
    const classification4 = safetyHubClassification.classification;
    let flagged_content2;
    if (classification4 != null) {
      flagged_content2 = classification4.flagged_content;
    }
    cResult[2] = flagged_content2;
    cResult[3] = flagged_content1;
    arr2 = flagged_content1;
  } else {
    arr2 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(emitAppealIngestionEvent(1126).t["C5q+pW"]);
    cResult[4] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(emitAppealIngestionEvent(1126).t.URt7VI);
    cResult[5] = stringResult1;
    tmp17 = stringResult1;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { headerText: tmp15, subHeaderText: tmp17 };
    const tmp21 = closure_8(emitAppealIngestionEvent(11477).AppealIngestionModalHeader, obj2);
    cResult[6] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== arr2) {
    let tmp23 = arr2.length > 0;
    if (tmp23) {
      const obj3 = { flaggedContent: arr2 };
      tmp23 = closure_8(AppealIngestionActivitySummaryDefault, obj3);
    }
    cResult[7] = arr2;
    cResult[8] = tmp23;
    tmp22 = tmp23;
  } else {
    tmp22 = cResult[8];
  }
  if (cResult[9] !== safetyHubClassification.classification) {
    const obj4 = { classification: safetyHubClassification.classification };
    const tmp29 = closure_8(AppealIngestionPolicySummaryDefault, obj4);
    cResult[9] = safetyHubClassification.classification;
    cResult[10] = tmp29;
    tmp26 = tmp29;
  } else {
    tmp26 = cResult[10];
  }
  if (cResult[11] === emitAppealIngestionEvent) {
    let tmp30;
    if (cResult[12] === isCoppa) {
      tmp30 = cResult[13];
    }
    if (cResult[14] === emitAppealIngestionEvent) {
      if (cResult[15] === isCoppa) {
        let tmp36;
        if (cResult[16] === isSpam) {
          tmp36 = cResult[17];
        }
        if (cResult[18] === emitAppealIngestionEvent) {
          let tmp42;
          if (cResult[19] === isDeveloperClassification) {
            tmp42 = cResult[20];
          }
          if (cResult[21] === emitAppealIngestionEvent) {
            if (cResult[22] === isCoppa) {
              let tmp48;
              let tmp53;
              if (cResult[23] === str) {
                tmp48 = cResult[24];
              }
              if (cResult[25] !== isDsaEligible) {
                let tmp54 = isDsaEligible;
                if (tmp54) {
                  const obj5 = { variant: "text-xs/normal", children: intl7.format(emitAppealIngestionEvent(1126).t.WMUgCX, {}) };
                  const Text = tmp(5088).Text;
                  intl7 = tmp(1126).intl;
                  tmp54 = closure_8(Text, obj5);
                }
                cResult[25] = isDsaEligible;
                cResult[26] = tmp54;
                tmp53 = tmp54;
              } else {
                tmp53 = cResult[26];
              }
              if (cResult[27] === tmp4.container) {
                if (cResult[28] === tmp36) {
                  if (cResult[29] === tmp42) {
                    if (cResult[30] === tmp48) {
                      if (cResult[31] === tmp53) {
                        if (cResult[32] === tmp22) {
                          if (cResult[33] === tmp26) {
                            let tmp56;
                            if (cResult[34] === tmp30) {
                              tmp56 = cResult[35];
                            }
                            return tmp56;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj6 = { children: items1 };
              items1 = [tmp19, ];
              const obj7 = { style: tmp4.container, children: items2 };
              items2 = [tmp22, tmp26, tmp30, tmp36, tmp42, tmp48, tmp53];
              const AppealIngestionModalScreen = tmp(11477).AppealIngestionModalScreen;
              items1[1] = closure_9(View, obj7);
              const tmp59 = closure_9(AppealIngestionModalScreen, obj6);
              cResult[27] = tmp4.container;
              cResult[28] = tmp36;
              cResult[29] = tmp42;
              cResult[30] = tmp48;
              cResult[31] = tmp53;
              cResult[32] = tmp22;
              cResult[33] = tmp26;
              cResult[34] = tmp30;
              cResult[35] = tmp59;
              tmp56 = tmp59;
            }
          }
          let tmp49 = !isCoppa;
          if (tmp49) {
            const obj8 = {
              text: intl6.string(emitAppealIngestionEvent(1126).t["Vtyn/7"]),
              url: str,
              onPress() {
                          return emitAppealIngestionEvent(hasOwnProperty.ClickLearnMoreLink);
                        }
            };
            const tmp52 = AppealIngestionExternalLinkDefault;
            intl6 = tmp(1126).intl;
            tmp49 = closure_8(tmp52, obj8);
          }
          cResult[21] = emitAppealIngestionEvent;
          cResult[22] = isCoppa;
          cResult[23] = str;
          cResult[24] = tmp49;
          tmp48 = tmp49;
        }
        let tmp43 = isDeveloperClassification;
        if (tmp43) {
          const obj9 = {
            text: intl5.string(emitAppealIngestionEvent(1126).t.n9cZTH),
            url: constants.APP_APPEAL_LINK,
            onPress() {
                      return emitAppealIngestionEvent(hasOwnProperty.ClickAppAppealLink);
                    }
          };
          const tmp46 = AppealIngestionExternalLinkDefault;
          intl5 = tmp(1126).intl;
          tmp43 = closure_8(tmp46, obj9);
        }
        cResult[18] = emitAppealIngestionEvent;
        cResult[19] = isDeveloperClassification;
        cResult[20] = tmp43;
        tmp42 = tmp43;
      }
    }
    let tmp37 = isSpam && !isCoppa;
    if (tmp37) {
      const obj10 = {
        text: intl4.string(emitAppealIngestionEvent(1126).t.NBsJvm),
        url: constants.SPAM_LINK,
        onPress() {
              return emitAppealIngestionEvent(hasOwnProperty.ClickSpamWebformLink);
            }
      };
      const tmp40 = AppealIngestionExternalLinkDefault;
      intl4 = tmp(1126).intl;
      tmp37 = closure_8(tmp40, obj10);
    }
    cResult[14] = emitAppealIngestionEvent;
    cResult[15] = isCoppa;
    cResult[16] = isSpam;
    cResult[17] = tmp37;
    tmp36 = tmp37;
  }
  let tmp31 = isCoppa;
  if (tmp31) {
    const obj11 = {
      text: intl3.string(emitAppealIngestionEvent(1126).t["gJs+kf"]),
      url: constants.AGE_VERIFICATION_LINK,
      onPress() {
          return emitAppealIngestionEvent(hasOwnProperty.ClickAgeVerificationLink);
        }
    };
    const tmp34 = AppealIngestionExternalLinkDefault;
    intl3 = tmp(1126).intl;
    tmp31 = closure_8(tmp34, obj11);
  }
  cResult[11] = emitAppealIngestionEvent;
  cResult[12] = isCoppa;
  cResult[13] = tmp31;
  tmp30 = tmp31;
}) : (function AppealIngestionSpeedBump(arg0) {
  let appealClassificationId;
  let classification;
  let closure_0;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let isCoppa;
  let isDeveloperClassification;
  let isDsaEligible;
  let isSpam;
  let items2;
  ({ isCoppa, isSpam, isDeveloperClassification } = arg0);
  _require = undefined;
  const items = [SafetyHubStore];
  const tmp = closure_10();
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => appealClassificationId.getAppealClassificationId());
  const useSafetyHubClassification = require("useSafetyHubClassifications").useSafetyHubClassification;
  require("useSafetyHubClassifications");
  if (stateFromStores == null) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = useSafetyHubClassification(stateFromStores);
  const tmp2Result = require("useEmitAppealIngestionEvent");
  _require = tmp2Result.useEmitAppealIngestionEvent();
  ({ isDsaEligible, classification } = safetyHubClassification);
  let str;
  if (classification != null) {
    str = classification.explainer_link;
  }
  if (str == null) {
    str = "";
  }
  const classification2 = safetyHubClassification.classification;
  let flagged_content;
  if (classification2 != null) {
    flagged_content = classification2.flagged_content;
  }
  if (flagged_content == null) {
    flagged_content = [];
  }
  const intl = tmp2(1126).intl;
  const stringResult = intl.string(require("intl").t["C5q+pW"]);
  const intl2 = tmp2(1126).intl;
  const stringResult1 = intl2.string(require("intl").t.URt7VI);
  const AppealIngestionModalScreen = tmp2(11477).AppealIngestionModalScreen;
  const items1 = [closure_8(require("AppealIngestionModal").AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: stringResult1 }), ];
  let tmp10Result = flagged_content.length > 0;
  const obj2 = { style: tmp.container, children: items2 };
  const tmp11 = View;
  if (tmp10Result) {
    const obj3 = { flaggedContent: flagged_content };
    tmp10Result = tmp10(AppealIngestionActivitySummaryDefault, obj3);
  }
  items2 = [tmp10Result, , , , , , ];
  const obj4 = { classification: safetyHubClassification.classification };
  items2[1] = closure_8(AppealIngestionPolicySummaryDefault, obj4);
  let tmp10Result3 = isCoppa;
  if (tmp10Result3) {
    const obj5 = {
      text: intl3.string(require("intl").t["gJs+kf"]),
      url: constants.AGE_VERIFICATION_LINK,
      onPress() {
          return closure_0(hasOwnProperty.ClickAgeVerificationLink);
        }
    };
    const tmp14Result = AppealIngestionExternalLinkDefault;
    intl3 = tmp2(1126).intl;
    tmp10Result3 = tmp10(tmp14Result, obj5);
  }
  items2[2] = tmp10Result3;
  if (isSpam) {
    isSpam = !isCoppa;
  }
  if (isSpam) {
    const obj6 = {
      text: intl4.string(require("intl").t.NBsJvm),
      url: constants.SPAM_LINK,
      onPress() {
          return closure_0(hasOwnProperty.ClickSpamWebformLink);
        }
    };
    const tmp14Result4 = AppealIngestionExternalLinkDefault;
    intl4 = tmp2(1126).intl;
    isSpam = tmp10(tmp14Result4, obj6);
  }
  items2[3] = isSpam;
  if (isDeveloperClassification) {
    const obj7 = {
      text: intl5.string(require("intl").t.n9cZTH),
      url: constants.APP_APPEAL_LINK,
      onPress() {
          return closure_0(hasOwnProperty.ClickAppAppealLink);
        }
    };
    const tmp14Result5 = AppealIngestionExternalLinkDefault;
    intl5 = tmp2(1126).intl;
    isDeveloperClassification = tmp10(tmp14Result5, obj7);
  }
  items2[4] = isDeveloperClassification;
  let tmp10Result4 = !isCoppa;
  if (tmp10Result4) {
    const obj8 = {
      text: intl6.string(require("intl").t["Vtyn/7"]),
      url: str,
      onPress() {
          return closure_0(hasOwnProperty.ClickLearnMoreLink);
        }
    };
    const tmp14Result6 = AppealIngestionExternalLinkDefault;
    intl6 = tmp2(1126).intl;
    tmp10Result4 = tmp10(tmp14Result6, obj8);
  }
  items2[5] = tmp10Result4;
  if (isDsaEligible) {
    const obj9 = { variant: "text-xs/normal", children: intl7.format(require("intl").t.WMUgCX, {}) };
    const Text = tmp2(5088).Text;
    intl7 = tmp2(1126).intl;
    isDsaEligible = tmp10(Text, obj9);
  }
  const obj10 = { children: items1 };
  items2[6] = isDsaEligible;
  items1[1] = closure_9(tmp11, obj2);
  return closure_9(AppealIngestionModalScreen, obj10);
});
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default tmp5;
