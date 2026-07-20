// Module ID: 10730
// Function ID: 83424
// Name: useMuteAwareLocalVolume
// Dependencies: []
// Exports: default

// Module 10730 (useMuteAwareLocalVolume)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/media_engine/useMuteAwareLocalVolume.tsx");

export default function useMuteAwareLocalVolume(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const obj = {};
  const items = [closure_4];
  obj.effectiveVolume = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let num = 0;
    if (null != arg0) {
      num = 0;
      if (!closure_4.isLocalMute(arg0, arg1)) {
        num = closure_4.getLocalVolume(arg0, arg1);
      }
    }
    return num;
  });
  const items1 = [arg0, arg1];
  obj.handleVolumeChange = React.useCallback((volume) => {
    if (null != volume) {
      let isLocalMuteResult = volume > 0;
      if (isLocalMuteResult) {
        isLocalMuteResult = closure_4.isLocalMute(volume, arg1);
      }
      if (isLocalMuteResult) {
        arg1(closure_2[3]).toggleLocalMute(volume, arg1);
        const obj = arg1(closure_2[3]);
      }
      arg1(closure_2[3]).setLocalVolume(volume, volume, arg1);
      const obj2 = arg1(closure_2[3]);
    }
  }, items1);
  return obj;
};
