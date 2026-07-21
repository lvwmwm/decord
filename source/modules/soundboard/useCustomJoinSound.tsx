// Module ID: 5764
// Function ID: 49371
// Name: _getCustomJoinSound
// Dependencies: []
// Exports: getCustomJoinSound, useCustomJoinSound

// Module 5764 (_getCustomJoinSound)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
const obj = { GLOBAL: 0, [0]: "GLOBAL", GUILD: 1, [1]: "GUILD" };
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/soundboard/useCustomJoinSound.tsx");

export const CustomSoundType = obj;
export const useCustomJoinSound = function useCustomJoinSound(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let guilds = settings.settings.guilds;
    guilds = undefined;
    if (null != guilds) {
      guilds = guilds.guilds;
    }
    if (null == guilds) {
      guilds = {};
    }
    return callback(arg0, guilds);
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
