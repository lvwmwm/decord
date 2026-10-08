// Module ID: 10798
// Function ID: 10799
// Name: useToggleRequestToSpeak
// Dependencies: [32, 19, 502, 558, 576, 504, 5412, 5954, 7492, 5915, 7482, 2]

// Module 10798 (useToggleRequestToSpeak)
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5412 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5915 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5954 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7482 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;
let _require, dependencyMap, importDefault;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useToggleRequestToSpeak(id) {
  let closure_1;
  let closure_2;
  let closure_4;
  let first;
  let id2;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  _require = id;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function _() {
      return id2.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = useAudienceRequestToSpeakStateDefault(stateFromStores, id.id);
  importDefault = tmp8;
  const tmp9 = tmp8 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK || tmp8 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  dependencyMap = tmp9;
  const tmp10 = first(react.useState(tmp9), 2);
  first = tmp10[0];
  const obj3 = react;
  react = tmp10[1];
  if (cResult[2] !== tmp9) {
    class E {
      constructor() {
        closure_4(closure_2);
      }
    }
    const items1 = [tmp9];
    cResult[2] = tmp9;
    cResult[3] = E;
    cResult[4] = items1;
    tmp13 = items1;
    tmp12 = E;
  } else {
    class E {
      constructor() {
        closure_4(closure_2);
      }
    }
    tmp13 = cResult[4];
  }
  const effect = obj3.useEffect(tmp12, tmp13);
  if (cResult[5] === id) {
    class E {
      constructor() {
        closure_4(closure_2);
      }
    }
  }
  function handleToggleRequestToSpeak() {
    const obj = useStageSpeakingForCurrentUser;
    if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
      const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
      AgeVerificationActionCreatorsDefault;
      const result = showAgeVerificationGetStartedModal(obj2);
    } else {
      if (closure_1 === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
        const tmpResult = StageChannelActionCreators;
        const result1 = tmpResult.audienceAckRequestToSpeak(tmp3, true);
      } else {
        const tmpResult2 = StageChannelActionCreators;
        tmpResult2.toggleRequestToSpeak(id, !first);
      }
      closure_4(!first);
    }
  }
  cResult[5] = id;
  cResult[6] = tmp8;
  cResult[7] = first;
  cResult[8] = handleToggleRequestToSpeak;
}) : (function useToggleRequestToSpeak(id) {
  let closure_1;
  let closure_2;
  let closure_4;
  let first;
  let id2;
  _require = id;
  let obj = require("get initialized");
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id2.getId());
  const tmp4 = useAudienceRequestToSpeakStateDefault(stateFromStores, id.id);
  importDefault = tmp4;
  const tmp5 = tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK || tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  dependencyMap = tmp5;
  const tmp6 = first(react.useState(tmp5), 2);
  first = tmp6[0];
  react = tmp6[1];
  const items1 = [tmp5];
  const effect = react.useEffect(() => {
    closure_4(closure_2);
  }, items1);
  const items2 = [
    first,
    function handleToggleRequestToSpeak() {
      const obj = useStageSpeakingForCurrentUser;
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
        AgeVerificationActionCreatorsDefault;
        const result = showAgeVerificationGetStartedModal(obj2);
      } else {
        if (closure_1 === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          const tmpResult = StageChannelActionCreators;
          const result1 = tmpResult.audienceAckRequestToSpeak(tmp3, true);
        } else {
          const tmpResult2 = StageChannelActionCreators;
          tmpResult2.toggleRequestToSpeak(id, !first);
        }
        closure_4(!first);
      }
    }
  ];
  return items2;
});
let result = size.fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default tmp2;
