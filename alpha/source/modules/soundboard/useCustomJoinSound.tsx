// Module ID: 7549
// Function ID: 7550
// Name: useCustomJoinSound
// Dependencies: [1232, 6055, 504, 2]
// Exports: getCustomJoinSound, useCustomJoinSound

// Module 7549 (useCustomJoinSound)
import SoundboardConstants from "SoundboardConstants" /* 6055 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = SoundboardConstants.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
const CustomSoundType = { GLOBAL: 0, [0]: "GLOBAL", GUILD: 1, [1]: "GUILD" };
const result = size.fileFinishedImporting("modules/soundboard/useCustomJoinSound.tsx");

export { CustomSoundType };
export function useCustomJoinSound(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  return obj.useStateFromStores(items, () => {
    let GLOBAL;
    let joinSound;
    const guilds = UserSettingsProtoStore.settings.guilds;
    let obj;
    if (guilds != null) {
      obj = guilds.guilds;
    }
    if (obj == null) {
      obj = {};
    }
    let joinSound1;
    if (obj[closure_0] != null) {
      joinSound1 = tmp.joinSound;
    }
    if (obj[closure_3] != null) {
      joinSound = tmp3.joinSound;
    }
    let tmp4 = joinSound1;
    if (joinSound1 == null) {
      tmp4 = joinSound;
    }
    let tmp5;
    if (null != tmp4) {
      const obj2 = { type: GLOBAL };
      const merged = Object.assign(tmp4);
      if (null != joinSound1) {
        GLOBAL = obj.GUILD;
      } else {
        GLOBAL = obj.GLOBAL;
      }
      tmp5 = obj2;
    }
    return tmp5;
  });
}
export function getCustomJoinSound(arg0) {
  let GLOBAL;
  let joinSound;
  const guilds = UserSettingsProtoStore.settings.guilds;
  let obj;
  if (guilds != null) {
    obj = guilds.guilds;
  }
  if (obj == null) {
    obj = {};
  }
  let joinSound1;
  if (obj[arg0] != null) {
    joinSound1 = tmp.joinSound;
  }
  if (obj[closure_3] != null) {
    joinSound = tmp3.joinSound;
  }
  let tmp4 = joinSound1;
  if (joinSound1 == null) {
    tmp4 = joinSound;
  }
  let tmp5;
  if (null != tmp4) {
    const obj2 = { type: GLOBAL };
    const merged = Object.assign(tmp4);
    if (null != joinSound1) {
      GLOBAL = obj.GUILD;
    } else {
      GLOBAL = obj.GLOBAL;
    }
    tmp5 = obj2;
  }
  return tmp5;
}
