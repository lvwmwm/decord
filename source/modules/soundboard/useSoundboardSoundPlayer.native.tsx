// Module ID: 15755
// Function ID: 121592
// Name: useSoundboardSoundPlayer
// Dependencies: [31, 4578, 8844, 3803, 15756, 566, 5739, 2]
// Exports: default

// Module 15755 (useSoundboardSoundPlayer)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SoundOutputChannel } from "SoundOutputChannel";

const require = arg1;
const result = require("SoundOutputChannel").fileFinishedImporting("modules/soundboard/useSoundboardSoundPlayer.native.tsx");

export default function useSoundboardSoundPlayer(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  if (arg2 === undefined) {
    const SoundboardSettings = _require(audioRef[3]).SoundboardSettings;
    const setting = SoundboardSettings.getSetting();
    let volume;
    if (null != setting) {
      volume = setting.volume;
    }
  }
  if (arg3 === undefined) {
    const DEFAULT = SoundOutputChannel.DEFAULT;
  }
  audioRef = undefined;
  audioRef = React.useContext(importDefault(audioRef[4])).audioRef;
  let obj = _require(audioRef[5]);
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  obj = {};
  const items2 = [arg0, audioRef, arg1];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.isPlayingSound(lib.soundId), items1);
  obj.playSoundboardSound = React.useCallback((arg0) => {
    if (null != audioRef.current) {
      const current = audioRef.current;
      current.pause();
    }
    if (null != closure_1) {
      lib(audioRef[6]).playSound(lib, closure_1, arg0);
      const obj = lib(audioRef[6]);
    }
  }, items2);
  obj.isPlayingSound = stateFromStores;
  obj.previewSound = function previewSound() {
    return Promise.resolve();
  };
  obj.isPreviewingSound = false;
  return obj;
};
