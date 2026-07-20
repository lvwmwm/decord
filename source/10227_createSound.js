// Module ID: 10227
// Function ID: 79027
// Name: createSound
// Dependencies: []
// Exports: createSoundForPack, playSound

// Module 10227 (createSound)
function createSound(stage_waiting, soundboard_sound, _volume, DEFAULT, flag) {
  let num = _volume;
  if (_volume === undefined) {
    num = 1;
  }
  if (DEFAULT === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  if (flag === undefined) {
    flag = false;
  }
  const mobileAudioSound = new soundboard_sound(dependencyMap[5]).MobileAudioSound(stage_waiting, soundboard_sound, num, DEFAULT, flag);
  return mobileAudioSound;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const SoundOutputChannel = arg1(dependencyMap[2]).SoundOutputChannel;
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("SoundUtils");
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/sound_playback/SoundUtils.tsx");

export const createSoundForPack = function createSoundForPack(call_calling, soundpack) {
  let num = arg2;
  let DEFAULT = arg3;
  if (arg2 === undefined) {
    num = 1;
  }
  if (DEFAULT === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  const tmp3 = importDefault(dependencyMap[4])(soundpack)[call_calling];
  let tmp4 = call_calling;
  if (null != tmp3) {
    tmp4 = tmp3;
  }
  return createSound(tmp4, call_calling, num, DEFAULT);
};
export { createSound };
export const playSound = function playSound(arg0, arg1, arg2, arg3, outputChannel) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  arg1 = arg2;
  if (!disableSounds.disableSounds) {
    let soundpack = arg3;
    if (null == arg3) {
      soundpack = soundpack.getSoundpack();
    }
    const tmp3Result = importDefault(dependencyMap[4])(soundpack);
    if (null == tmp3Result) {
      const _HermesInternal = HermesInternal;
      importDefaultResult.log("Unable to find sound for pack name: " + arg3);
    }
    let tmp13 = arg0;
    if (null != tmp3Result[arg0]) {
      tmp13 = tmp12;
    }
    outputChannel = undefined;
    if (null != outputChannel) {
      outputChannel = outputChannel.outputChannel;
    }
    if (null == outputChannel) {
      outputChannel = SoundOutputChannel.DEFAULT;
    }
    let prop;
    if (null != outputChannel) {
      prop = outputChannel.trackNotificationFailure;
    }
    const tmp11Result = createSound(tmp13, arg0, num, outputChannel, null != prop && prop);
    if (null != arg2) {
      tmp11Result.playWithListener().then((arg0) => {
        if (arg0) {
          arg2();
        }
      });
      const playWithListenerResult = tmp11Result.playWithListener();
    } else {
      tmp11Result.play();
    }
    return tmp11Result;
  }
};
