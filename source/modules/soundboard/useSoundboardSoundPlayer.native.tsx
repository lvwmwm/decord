// Module ID: 15638
// Function ID: 119419
// Name: useSoundboardSoundPlayer
// Dependencies: []
// Exports: default

// Module 15638 (useSoundboardSoundPlayer)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const SoundOutputChannel = arg1(dependencyMap[2]).SoundOutputChannel;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/soundboard/useSoundboardSoundPlayer.native.tsx");

export default function useSoundboardSoundPlayer(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  if (arg2 === undefined) {
    const SoundboardSettings = arg1(dependencyMap[3]).SoundboardSettings;
    const setting = SoundboardSettings.getSetting();
    let volume;
    if (null != setting) {
      volume = setting.volume;
    }
  }
  if (arg3 === undefined) {
    const DEFAULT = SoundOutputChannel.DEFAULT;
  }
  let dependencyMap;
  const audioRef = React.useContext(importDefault(dependencyMap[4])).audioRef;
  dependencyMap = audioRef;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const items1 = [arg0];
  obj = {};
  const items2 = [arg0, audioRef, arg1];
  const stateFromStores = obj.useStateFromStores(items, () => playingSound.isPlayingSound(arg0.soundId), items1);
  obj.playSoundboardSound = React.useCallback((arg0) => {
    if (null != audioRef.current) {
      const current = audioRef.current;
      current.pause();
    }
    if (null != arg1) {
      arg0(audioRef[6]).playSound(arg0, arg1, arg0);
      const obj = arg0(audioRef[6]);
    }
  }, items2);
  obj.isPlayingSound = stateFromStores;
  obj.previewSound = function previewSound() {
    return Promise.resolve();
  };
  obj.isPreviewingSound = false;
  return obj;
};
