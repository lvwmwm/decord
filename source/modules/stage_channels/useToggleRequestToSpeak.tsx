// Module ID: 10701
// Function ID: 83412
// Name: useToggleRequestToSpeak
// Dependencies: [57, 31, 1194, 566, 4314, 4955, 7581, 7583, 7562, 2]
// Exports: default

// Module 10701 (useToggleRequestToSpeak)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.getId());
  const tmp2 = importDefault(4314)(stateFromStores, id.id);
  importDefault = tmp2;
  let tmp3 = tmp2 === _require(4314).RequestToSpeakStates.REQUESTED_TO_SPEAK;
  if (!tmp3) {
    tmp3 = tmp2 === _require(4314).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  }
  const dependencyMap = tmp3;
  const tmp6 = first(React.useState(tmp3), 2);
  first = tmp6[0];
  React = tmp6[1];
  const items1 = [tmp3];
  const effect = React.useEffect(() => {
    callback(closure_2);
  }, items1);
  const items2 = [
    first,
    () => {
      let obj = id(tmp3[5]);
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
        obj = { entryPoint: id(tmp3[7]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const result = tmp2(tmp3[6]).showAgeVerificationGetStartedModal(obj);
        const obj4 = tmp2(tmp3[6]);
      } else {
        if (id === id(tmp3[4]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          const result1 = id(tmp3[8]).audienceAckRequestToSpeak(id, true);
          const obj3 = id(tmp3[8]);
        } else {
          id(tmp3[8]).toggleRequestToSpeak(id, !first);
          const obj2 = id(tmp3[8]);
        }
        callback(!first);
      }
    }
  ];
  return items2;
};
