// Module ID: 11026
// Function ID: 85776
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 7544, 7545, 11027, 566, 686, 2]

// Module 11026 (_isNativeReflectConstruct)
import ContentIdType from "ContentIdType";
import createAggregator from "createAggregator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import SafetyHubLinks from "SafetyHubLinks";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSafetyHubRequestAgeVerificationResetModalAction(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    let c26 = "";
    let c28 = null;
    let c29 = false;
  }
}
const AgeCheckStatus = SafetyHubLinks.AgeCheckStatus;
const AppealIngestionSignal = SafetyHubLinks.AppealIngestionSignal;
let closure_10 = SafetyHubLinks.AGE_CHECK_MAX_POLL_ATTEMPTS;
let closure_11 = {};
let closure_12 = {};
let obj = { state: require("ContentIdType").AccountStandingState.ALL_GOOD };
let c14 = false;
let c15 = false;
let c16 = null;
let c17 = null;
let c18 = false;
let c19 = false;
let closure_20 = [];
let c21 = false;
let c22 = null;
let DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
let c24 = "";
let c25 = "";
let c26 = "";
let c27 = 0;
let c28 = null;
let c29 = false;
const NONE = AgeCheckStatus.NONE;
let c31 = null;
let tmp3 = ((Store) => {
  class SafetyHubStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, SafetyHubStore);
      obj = outer1_6(SafetyHubStore);
      tmp2 = outer1_5;
      if (outer1_32()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SafetyHubStore, Store);
  let obj = {
    key: "isFetching",
    value() {
      return outer1_14;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getClassifications",
    value() {
      return Object.values(outer1_11);
    }
  };
  items[1] = obj;
  obj = {
    key: "getClassification",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAccountStanding",
    value() {
      return outer1_13;
    }
  };
  items[4] = {
    key: "getFetchError",
    value() {
      return outer1_16;
    }
  };
  items[5] = {
    key: "isInitialized",
    value() {
      return outer1_15;
    }
  };
  items[6] = {
    key: "getClassificationRequestState",
    value(arg0) {
      return outer1_12[arg0];
    }
  };
  items[7] = {
    key: "getAppealClassificationId",
    value() {
      return outer1_17;
    }
  };
  items[8] = {
    key: "getIsDsaEligible",
    value() {
      return outer1_18;
    }
  };
  items[9] = {
    key: "getIsAppealEligible",
    value() {
      return outer1_19;
    }
  };
  items[10] = {
    key: "getAppealEligibility",
    value() {
      return outer1_20;
    }
  };
  items[11] = {
    key: "getAppealSignal",
    value() {
      return outer1_23;
    }
  };
  items[12] = {
    key: "getFreeTextAppealReason",
    value() {
      return outer1_24;
    }
  };
  items[13] = {
    key: "getIsSubmitting",
    value() {
      return outer1_21;
    }
  };
  items[14] = {
    key: "getSubmitError",
    value() {
      return outer1_22;
    }
  };
  items[15] = {
    key: "getUsername",
    value() {
      return outer1_25;
    }
  };
  items[16] = {
    key: "getAgeVerificationWebviewUrl",
    value() {
      return outer1_26;
    }
  };
  items[17] = {
    key: "getAgeVerificationError",
    value() {
      return outer1_28;
    }
  };
  items[18] = {
    key: "getIsLoadingAgeVerification",
    value() {
      return outer1_29;
    }
  };
  items[19] = {
    key: "getAgeCheckStatus",
    value() {
      return outer1_30;
    }
  };
  items[20] = {
    key: "getAgeCheckError",
    value() {
      return outer1_31;
    }
  };
  items[21] = {
    key: "getAgeCheckAttempts",
    value() {
      return outer1_27;
    }
  };
  return callback(SafetyHubStore, items);
})(require("initialize").Store);
tmp3.displayName = "SafetyHubStore";
obj = {
  SAFETY_HUB_FETCH_START: function handleFetchStart() {
    let c14 = true;
  },
  SAFETY_HUB_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let accountStanding;
    let appealEligibility;
    let classifications;
    let isAppealEligible;
    let isDsaEligible;
    let username;
    ({ classifications, accountStanding, isDsaEligible, isAppealEligible, username, appealEligibility } = arg0);
    let closure_11 = importDefault(11027)(classifications, "id");
    let c14 = false;
    let c15 = true;
    let c16 = null;
  },
  SAFETY_HUB_FETCH_FAILURE: function handleFetchFailure(error) {
    let c14 = false;
    let c15 = false;
    error = error.error;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function handleFetchClassificationStart(classificationId) {
    closure_12[classificationId.classificationId] = require(7545) /* ContentIdType */.ClassificationRequestState.PENDING;
    let c14 = true;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function handleFetchClassificationSuccess(classification) {
    let accountStanding;
    let isAppealEligible;
    let isDsaEligible;
    let username;
    classification = classification.classification;
    closure_11[classification.id] = classification;
    ({ accountStanding, isDsaEligible, username, isAppealEligible } = classification);
    closure_12[classification.id] = require(7545) /* ContentIdType */.ClassificationRequestState.SUCCESS;
    let c14 = false;
    let c16 = null;
    let c15 = true;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function handleFetchClassificationFailure(error) {
    let c14 = false;
    error = error.error;
    closure_12[error.classificationId] = require(7545) /* ContentIdType */.ClassificationRequestState.FAILED;
    let c15 = false;
  },
  SAFETY_HUB_APPEAL_OPEN: function handleAppealOpen(classificationId) {
    classificationId = classificationId.classificationId;
  },
  SAFETY_HUB_APPEAL_CLOSE: function handleAppealClose() {
    let c17 = null;
    const DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    let c24 = "";
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function handleAppealSignalSelect(signal) {
    signal = signal.signal;
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function handleAppealSignalCustomInputChange(userInput) {
    userInput = userInput.userInput;
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function handleSafetyHubRequestReviewStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c21 = true;
      let c22 = null;
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function handleSafetyHubRequestReviewSuccess(arg0) {
    let c21 = false;
    let c22 = null;
    dependencyMap[arg0.classificationId].appeal_status = { status: require(7545) /* ContentIdType */.AppealStatusType.REVIEW_PENDING };
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function handleSafetyHubRequestReviewFailure(error) {
    let c21 = false;
    error = error.error;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubRequestAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c26 = "";
      let c28 = null;
      let c29 = true;
    }
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubRequestAgeVerificationSuccess(verificationWebviewUrl) {
    verificationWebviewUrl = verificationWebviewUrl.verificationWebviewUrl;
    let c28 = null;
    let c29 = false;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubRequestAgeVerificationFailure(error) {
    let c26 = "";
    error = error.error;
    let c29 = false;
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function handleSafetyHubAutomatedUnderageAppealSubmitSuccessAction(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      for (const key10008 in closure_11) {
        let tmp8 = key10008;
        let tmp9 = dependencyMap;
        if (!dependencyMap[key10008].is_coppa) {
          continue;
        } else {
          let tmp3 = dependencyMap;
          let obj = {};
          let tmp4 = require;
          let tmp5 = dependencyMap;
          obj.status = require(7545) /* ContentIdType */.AppealStatusType.REVIEW_PENDING;
          dependencyMap[key10008].appeal_status = obj;
          continue;
        }
        continue;
      }
    }
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function handleSafetyHubAgeVerificationStartPoll(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      let c31 = null;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubCheckAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      const LOADING = AgeCheckStatus.LOADING;
      let c31 = null;
      closure_27 = closure_27 + 1;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubCheckAgeVerificationCheckSuccess(success) {
    if (success.success) {
      let FAILURE = AgeCheckStatus.SUCCESS;
    } else if (c27 < closure_10) {
      FAILURE = AgeCheckStatus.LOADING;
    } else {
      FAILURE = AgeCheckStatus.FAILURE;
    }
    let c31 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubCheckAgeVerificationFailure(error) {
    const ERROR = AgeCheckStatus.ERROR;
    error = error.error;
  },
  LOGOUT: function reset() {
    let c14 = false;
    let closure_11 = {};
    const obj = { state: require(7545) /* ContentIdType */.AccountStandingState.ALL_GOOD };
    let c17 = null;
    const DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    let c24 = "";
    let closure_20 = [];
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/safety_hub/SafetyHubStore.tsx");

export default tmp3;
