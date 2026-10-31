// Module ID: 11900
// Function ID: 11901
// Name: useToggleRequestToSpeak
// Dependencies: [32, 19, 502, 504, 6048, 6758, 7955, 6729, 7945, 2]
// Exports: default

// Module 11900 (useToggleRequestToSpeak)
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 6048 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6729 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6758 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7945 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7955 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;
let _require, dependencyMap, importDefault;

let react = react_mod;
let result = size.fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
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
};
