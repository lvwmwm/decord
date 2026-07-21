// Module ID: 11015
// Function ID: 85702
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11015 (_isNativeReflectConstruct)
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
    let closure_26 = "";
    let closure_28 = null;
    let closure_29 = false;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const AgeCheckStatus = tmp2.AgeCheckStatus;
const AppealIngestionSignal = tmp2.AppealIngestionSignal;
let closure_10 = tmp2.AGE_CHECK_MAX_POLL_ATTEMPTS;
let closure_11 = {};
let closure_12 = {};
let obj = { state: arg1(dependencyMap[6]).AccountStandingState.ALL_GOOD };
let closure_14 = false;
let closure_15 = false;
let closure_16 = null;
let closure_17 = null;
let closure_18 = false;
let closure_19 = false;
let closure_20 = [];
let closure_21 = false;
let closure_22 = null;
const DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
let closure_24 = "";
let closure_25 = "";
let closure_26 = "";
let closure_27 = 0;
let closure_28 = null;
let closure_29 = false;
const NONE = AgeCheckStatus.NONE;
let closure_31 = null;
let tmp3 = (Store) => {
  class SafetyHubStore {
    constructor() {
      self = this;
      tmp = closure_3(this, SafetyHubStore);
      obj = closure_6(SafetyHubStore);
      tmp2 = closure_5;
      if (closure_32()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SafetyHubStore;
  callback2(SafetyHubStore, Store);
  let obj = {
    key: "isFetching",
    value() {
      return closure_14;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getClassifications",
    value() {
      return Object.values(closure_11);
    }
  };
  items[1] = obj;
  obj = {
    key: "getClassification",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAccountStanding",
    value() {
      return closure_13;
    }
  };
  items[4] = {
    key: "getFetchError",
    value() {
      return closure_16;
    }
  };
  items[5] = {
    key: "isInitialized",
    value() {
      return closure_15;
    }
  };
  items[6] = {
    key: "getClassificationRequestState",
    value(arg0) {
      return closure_12[arg0];
    }
  };
  items[7] = {
    key: "getAppealClassificationId",
    value() {
      return closure_17;
    }
  };
  items[8] = {
    key: "getIsDsaEligible",
    value() {
      return closure_18;
    }
  };
  items[9] = {
    key: "getIsAppealEligible",
    value() {
      return closure_19;
    }
  };
  items[10] = {
    key: "getAppealEligibility",
    value() {
      return closure_20;
    }
  };
  items[11] = {
    key: "getAppealSignal",
    value() {
      return closure_23;
    }
  };
  items[12] = {
    key: "getFreeTextAppealReason",
    value() {
      return closure_24;
    }
  };
  items[13] = {
    key: "getIsSubmitting",
    value() {
      return closure_21;
    }
  };
  items[14] = {
    key: "getSubmitError",
    value() {
      return closure_22;
    }
  };
  items[15] = {
    key: "getUsername",
    value() {
      return closure_25;
    }
  };
  items[16] = {
    key: "getAgeVerificationWebviewUrl",
    value() {
      return closure_26;
    }
  };
  items[17] = {
    key: "getAgeVerificationError",
    value() {
      return closure_28;
    }
  };
  items[18] = {
    key: "getIsLoadingAgeVerification",
    value() {
      return closure_29;
    }
  };
  items[19] = {
    key: "getAgeCheckStatus",
    value() {
      return closure_30;
    }
  };
  items[20] = {
    key: "getAgeCheckError",
    value() {
      return closure_31;
    }
  };
  items[21] = {
    key: "getAgeCheckAttempts",
    value() {
      return closure_27;
    }
  };
  return callback(SafetyHubStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp3.displayName = "SafetyHubStore";
obj = {
  SAFETY_HUB_FETCH_START: function handleFetchStart() {
    let closure_14 = true;
  },
  SAFETY_HUB_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let accountStanding;
    let appealEligibility;
    let classifications;
    let isAppealEligible;
    let isDsaEligible;
    let username;
    ({ classifications, accountStanding, isDsaEligible, isAppealEligible, username, appealEligibility } = arg0);
    let closure_11 = importDefault(dependencyMap[7])(classifications, "id");
    let closure_18 = isDsaEligible;
    let closure_19 = isAppealEligible;
    let closure_14 = false;
    let closure_15 = true;
    let closure_16 = null;
    let closure_25 = username;
    let closure_20 = appealEligibility;
  },
  SAFETY_HUB_FETCH_FAILURE: function handleFetchFailure(error) {
    let closure_14 = false;
    let closure_15 = false;
    error = error.error;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function handleFetchClassificationStart(classificationId) {
    closure_12[classificationId.classificationId] = arg1(dependencyMap[6]).ClassificationRequestState.PENDING;
    let closure_14 = true;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function handleFetchClassificationSuccess(classification) {
    let accountStanding;
    let isAppealEligible;
    let isDsaEligible;
    let username;
    classification = classification.classification;
    closure_11[classification.id] = classification;
    ({ accountStanding, isDsaEligible, username, isAppealEligible } = classification);
    closure_12[classification.id] = arg1(dependencyMap[6]).ClassificationRequestState.SUCCESS;
    let closure_14 = false;
    let closure_16 = null;
    let closure_18 = isDsaEligible;
    let closure_19 = isAppealEligible;
    let closure_15 = true;
    let closure_25 = username;
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function handleFetchClassificationFailure(error) {
    let closure_14 = false;
    error = error.error;
    closure_12[error.classificationId] = arg1(dependencyMap[6]).ClassificationRequestState.FAILED;
    let closure_15 = false;
  },
  SAFETY_HUB_APPEAL_OPEN: function handleAppealOpen(classificationId) {
    classificationId = classificationId.classificationId;
  },
  SAFETY_HUB_APPEAL_CLOSE: function handleAppealClose() {
    let closure_17 = null;
    const DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    let closure_24 = "";
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function handleAppealSignalSelect(signal) {
    const DIDNT_VIOLATE_POLICY = signal.signal;
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function handleAppealSignalCustomInputChange(userInput) {
    userInput = userInput.userInput;
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function handleSafetyHubRequestReviewStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_21 = true;
      let closure_22 = null;
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function handleSafetyHubRequestReviewSuccess(arg0) {
    let closure_21 = false;
    let closure_22 = null;
    closure_11[arg0.classificationId].appeal_status = { status: arg1(dependencyMap[6]).AppealStatusType.REVIEW_PENDING };
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function handleSafetyHubRequestReviewFailure(error) {
    let closure_21 = false;
    error = error.error;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubRequestAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_26 = "";
      let closure_28 = null;
      let closure_29 = true;
    }
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubRequestAgeVerificationSuccess(verificationWebviewUrl) {
    let closure_26 = verificationWebviewUrl.verificationWebviewUrl;
    let closure_28 = null;
    let closure_29 = false;
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubRequestAgeVerificationFailure(error) {
    let closure_26 = "";
    error = error.error;
    let closure_29 = false;
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: handleSafetyHubRequestAgeVerificationResetModalAction,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function handleSafetyHubAutomatedUnderageAppealSubmitSuccessAction(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      const NONE = AgeCheckStatus.LOADING;
      for (const key10008 in closure_11) {
        let tmp8 = key10008;
        let tmp9 = closure_11;
        if (!closure_11[key10008].is_coppa) {
          continue;
        } else {
          let tmp3 = closure_11;
          let obj = {};
          let tmp4 = closure_0;
          let tmp5 = closure_2;
          obj.status = closure_0(closure_2[6]).AppealStatusType.REVIEW_PENDING;
          closure_11[key10008].appeal_status = obj;
          // continue
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
      const NONE = AgeCheckStatus.LOADING;
      let closure_31 = null;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function handleSafetyHubCheckAgeVerificationStart(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      const NONE = AgeCheckStatus.LOADING;
      let closure_31 = null;
      closure_27 = closure_27 + 1;
    }
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function handleSafetyHubCheckAgeVerificationCheckSuccess(success) {
    if (success.success) {
      let FAILURE = AgeCheckStatus.SUCCESS;
    } else if (closure_27 < closure_10) {
      FAILURE = AgeCheckStatus.LOADING;
    } else {
      FAILURE = AgeCheckStatus.FAILURE;
    }
    const NONE = FAILURE;
    let closure_31 = null;
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function handleSafetyHubCheckAgeVerificationFailure(error) {
    const NONE = AgeCheckStatus.ERROR;
    error = error.error;
  },
  LOGOUT: function reset() {
    let closure_14 = false;
    let closure_11 = {};
    const obj = { state: arg1(dependencyMap[6]).AccountStandingState.ALL_GOOD };
    let closure_17 = null;
    const DIDNT_VIOLATE_POLICY = AppealIngestionSignal.DIDNT_VIOLATE_POLICY;
    let closure_24 = "";
    let closure_20 = [];
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[9]), obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/safety_hub/SafetyHubStore.tsx");

export default tmp3;
