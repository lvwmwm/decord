// Module ID: 10661
// Function ID: 83157
// Name: useToggleRequestToSpeak
// Dependencies: []
// Exports: default

// Module 10661 (useToggleRequestToSpeak)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/stage_channels/useToggleRequestToSpeak.tsx");

export default function useToggleRequestToSpeak(id) {
  const arg1 = id;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => id.getId());
  const tmp2 = importDefault(dependencyMap[4])(stateFromStores, id.id);
  const importDefault = tmp2;
  let tmp3 = tmp2 === arg1(dependencyMap[4]).RequestToSpeakStates.REQUESTED_TO_SPEAK;
  if (!tmp3) {
    tmp3 = tmp2 === arg1(dependencyMap[4]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  }
  const dependencyMap = tmp3;
  const tmp6 = callback(React.useState(tmp3), 2);
  const first = tmp6[0];
  const callback = first;
  const React = tmp6[1];
  const items1 = [tmp3];
  const effect = React.useEffect(() => {
    callback(tmp3);
  }, items1);
  const items2 = [
    first,
    () => {
      let obj = arg0(tmp3[5]);
      if (obj.shouldAgeVerifyToSpeakForCurrentUser(arg0.id)) {
        obj = { entryPoint: arg0(tmp3[7]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const result = tmp2(tmp3[6]).showAgeVerificationGetStartedModal(obj);
        const obj4 = tmp2(tmp3[6]);
      } else {
        if (arg0 === arg0(tmp3[4]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
          const result1 = arg0(tmp3[8]).audienceAckRequestToSpeak(arg0, true);
          const obj3 = arg0(tmp3[8]);
        } else {
          arg0(tmp3[8]).toggleRequestToSpeak(arg0, !first);
          const obj2 = arg0(tmp3[8]);
        }
        callback(!first);
      }
    }
  ];
  return items2;
};
