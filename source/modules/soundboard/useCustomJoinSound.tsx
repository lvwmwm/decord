// Module ID: 5769
// Function ID: 49417
// Name: _getCustomJoinSound
// Dependencies: [1316, 4579, 566, 2]
// Exports: getCustomJoinSound, useCustomJoinSound

// Module 5769 (_getCustomJoinSound)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID as closure_3 } from "MAX_LENGTH_SOUND_NAME";

const require = arg1;
function _getCustomJoinSound(arg0, arg1) {
  let joinSound;
  if (null != arg1[arg0]) {
    joinSound = tmp.joinSound;
  }
  let joinSound1;
  if (null != arg1[closure_3]) {
    joinSound1 = tmp3.joinSound;
  }
  if (null != joinSound) {
    joinSound1 = joinSound;
  }
  if (null != joinSound1) {
    const obj = {};
    const merged = Object.assign(joinSound1);
    if (null != joinSound) {
      let GLOBAL = obj.GUILD;
    } else {
      GLOBAL = obj.GLOBAL;
    }
    obj["type"] = GLOBAL;
  }
}
let obj = { GLOBAL: 0, [0]: "GLOBAL", GUILD: 1, [1]: "GUILD" };
const result = require("initialize").fileFinishedImporting("modules/soundboard/useCustomJoinSound.tsx");

export const CustomSoundType = obj;
export const useCustomJoinSound = function useCustomJoinSound(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let guilds = outer1_2.settings.guilds;
    guilds = undefined;
    if (null != guilds) {
      guilds = guilds.guilds;
    }
    if (null == guilds) {
      guilds = {};
    }
    return outer1_5(closure_0, guilds);
  });
};
export const getCustomJoinSound = function getCustomJoinSound(arg0) {
  let guilds = settings.settings.guilds;
  guilds = undefined;
  if (null != guilds) {
    guilds = guilds.guilds;
  }
  if (null == guilds) {
    guilds = {};
  }
  return _getCustomJoinSound(arg0, guilds);
};
