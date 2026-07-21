// Module ID: 14782
// Function ID: 111427
// Name: usePrivateChannelWave
// Dependencies: []
// Exports: default

// Module 14782 (usePrivateChannelWave)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ ME: closure_6, Routes: closure_7 } = arg1(dependencyMap[3]));
const MessageSendLocation = arg1(dependencyMap[4]).MessageSendLocation;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/channel/usePrivateChannelWave.native.tsx");

export default function usePrivateChannelWave(id) {
  const arg1 = id;
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [id.id, first];
  const obj = {};
  const callback = React.useCallback(callback(tmp), items);
  obj.waveShouldShow = arg1(closure_2[11]).usePrivateChannelWaveEligible(id, arg1);
  obj.wavePressed = callback;
  return obj;
};
