// Module ID: 10206
// Function ID: 10207
// Name: useToggleRequestToSpeak
// Dependencies: [32, 19, 502, 558, 568, 504, 4937, 5673, 8719, 8721, 8706, 2]

// Module 10206 (useToggleRequestToSpeak)
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4937 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8719 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    class E {
      constructor() {
        return closure_1_5.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp4 = items;
    tmp5 = E;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  const tmp8 = useAudienceRequestToSpeakStateDefault(stateFromStores, id.id);
  importDefault = tmp8;
  const tmp9 = tmp8 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK || tmp8 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  dependencyMap = tmp9;
  const tmp10 = first(noop.useState(tmp9), 2);
  first = tmp10[0];
  noop = tmp10[1];
  if (cResult[2] !== tmp9) {
    const fn = function n() {
      closure_4(closure_2);
    };
    const items1 = [tmp9];
    class E {
      constructor() {
        return closure_1_5.getId();
      }
    }
    cResult[3] = fn;
    cResult[4] = items1;
    let tmp13 = items1;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const effect = noop.useEffect(tmp12, tmp13);
  if (cResult[5] === id) {
    if (cResult[6] === tmp8) {
      if (cResult[7] === first) {
        let tmp15 = cResult[8];
      }
      if (cResult[9] === tmp15) {
        if (cResult[10] === first) {
          let tmp16 = cResult[11];
        }
        return tmp16;
      }
      const items2 = [, ];
      class E {
        constructor() {
          return closure_1_5.getId();
        }
      }
      items2[1] = tmp15;
      cResult[9] = tmp15;
      cResult[10] = first;
      cResult[11] = items2;
      tmp16 = items2;
    }
  }
  class T {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[7]);
      tmp3 = closure_0;
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(closure_0.id)) {
        tmp11 = closure_1;
        obj4 = closure_1(tmp2[8]);
        obj1 = { entryPoint: null };
        obj1.entryPoint = tmp(tmp2[9]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND;
        result = obj4.showAgeVerificationGetStartedModal(obj1);
      } else {
        tmp4 = closure_1;
        if (closure_1 === tmp(tmp2[6]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          tmpResult = tmp(tmp2[10]);
          flag = true;
          result1 = tmpResult.audienceAckRequestToSpeak(tmp3, true);
        } else {
          tmpResult1 = tmp(tmp2[10]);
          tmp5 = closure_3;
          toggleRequestToSpeakResult = tmpResult1.toggleRequestToSpeak(tmp3, !closure_3);
        }
        tmp8 = closure_4;
        tmp9 = closure_3;
        tmp10 = closure_4(!closure_3);
      }
      return;
    }
  }
  cResult[5] = id;
  cResult[6] = tmp8;
  cResult[7] = first;
  cResult[8] = T;
  tmp15 = T;
}) : ((id) => {
  _require = id;
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => id2.getId());
  const tmp4 = useAudienceRequestToSpeakStateDefault(stateFromStores, id.id);
  importDefault = tmp4;
  const tmp5 = tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK || tmp4 === require("useAudienceRequestToSpeakState").RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  dependencyMap = tmp5;
  const tmp6 = first(noop.useState(tmp5), 2);
  first = tmp6[0];
  noop = tmp6[1];
  const items1 = [tmp5];
  const effect = noop.useEffect(() => {
    closure_4(closure_2);
  }, items1);
  const items2 = [
    first,
    () => {
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
        const obj2 = { entryPoint: tmp(8721).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
      } else {
        if (closure_1 === tmp(4937).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          const result1 = tmp(8706).audienceAckRequestToSpeak(tmp3, true);
          const tmpResult = tmp(8706);
        } else {
          tmp(8706).toggleRequestToSpeak(tmp3, !first);
          const tmpResult2 = tmp(8706);
        }
        closure_4(!first);
      }
    }
  ];
  return items2;
});
