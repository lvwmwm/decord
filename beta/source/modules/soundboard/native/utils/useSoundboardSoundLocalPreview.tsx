// Module ID: 19815
// Function ID: 19816
// Name: useSoundboardSoundLocalPreview
// Dependencies: [19, 502, 5961, 504, 6830, 5474, 2]
// Exports: default

// Module 19815 (useSoundboardSoundLocalPreview)
import SoundboardActionCreators from "SoundboardActionCreators" /* 6830 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SoundboardStore from "SoundboardStore" /* 5961 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLocalPreview.tsx");

export default function useSoundboardSoundLocalPreview(soundId, volume) {
  let ref;
  _require = soundId;
  dependencyMap = volume;
  let obj = require("get initialized");
  const items = [SoundboardStore, ref];
  const items1 = [soundId];
  const isPlaying = obj.useStateFromStores(items, () => {
    const isPlayingSoundResult = null != soundId && SoundboardStore.isPlayingSound(tmp) && SoundboardStore.isUserPlayingSounds(AuthenticationStore.getId());
    return isPlayingSoundResult;
  }, items1);
  ref = isPlaying.useRef(null);
  const items2 = [isPlaying];
  const effect = isPlaying.useEffect(() => {
    const tmp = isPlaying;
    if (!tmp) {
      ref.current = null;
    }
  }, items2);
  const items3 = [soundId, volume];
  const items4 = [soundId];
  const play = isPlaying.useCallback(() => {
    if (null != soundId) {
      const obj2 = { soundId, volume };
      const obj = SoundboardActionCreators;
      obj.playSoundLocally(null, obj2);
      let isPlayingSoundResult = SoundboardStore.isPlayingSound(tmp);
      const obj3 = SoundboardStore;
      const tmp6 = ref;
      if (isPlayingSoundResult) {
        isPlayingSoundResult = obj3.isUserPlayingSounds(AuthenticationStore.getId());
      }
      let tmp9 = null;
      if (isPlayingSoundResult) {
        tmp9 = tmp;
      }
      tmp6.current = tmp9;
    }
  }, items3);
  const stop = isPlaying.useCallback(() => {
    if (null != soundId) {
      ref.current = null;
      const obj = SoundboardActionCreators;
      obj.stopSoundLocally(tmp);
    }
  }, items4);
  let obj2 = require("useMountEffect");
  const unmountEffect = obj2.useUnmountEffect(() => {
    const current = ref.current;
    let tmp = null != current;
    if (tmp) {
      let isPlayingSoundResult = SoundboardStore.isPlayingSound(current);
      const obj = SoundboardStore;
      if (isPlayingSoundResult) {
        isPlayingSoundResult = obj.isUserPlayingSounds(AuthenticationStore.getId());
      }
      tmp = isPlayingSoundResult;
    }
    if (tmp) {
      const obj2 = SoundboardActionCreators;
      obj2.stopSoundLocally(current);
    }
  });
  return { isPlaying, play, stop };
};
