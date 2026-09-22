// Module ID: 10194
// Function ID: 10195
// Name: useToggleRequestToSpeak
// Dependencies: [32, 19, 502, 504, 4904, 5641, 8686, 8688, 8673, 2]
// Exports: default

// Module 10194 (useToggleRequestToSpeak)
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4904 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8686 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
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
        const obj2 = { entryPoint: tmp(8688).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
      } else {
        if (closure_1 === tmp(4904).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          const result1 = tmp(8673).audienceAckRequestToSpeak(tmp3, true);
          const tmpResult = tmp(8673);
        } else {
          tmp(8673).toggleRequestToSpeak(tmp3, !first);
          const tmpResult2 = tmp(8673);
        }
        closure_4(!first);
      }
    }
  ];
  return items2;
};
