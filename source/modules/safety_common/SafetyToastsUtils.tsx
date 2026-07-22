// Module ID: 7484
// Function ID: 60076
// Name: getSafetyToastTypeContent
// Dependencies: []
// Exports: getSafetyToastTypeContent

// Module 7484 (getSafetyToastTypeContent)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const SafetyToastType = arg1(dependencyMap[2]).SafetyToastType;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/safety_common/SafetyToastsUtils.tsx");

export const getSafetyToastTypeContent = function getSafetyToastTypeContent(BLOCK_SUCCESS, id, channelId) {
  const user = user.getUser(id);
  const channel = channel.getChannel(channelId);
  let obj = importDefault(dependencyMap[3]);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  id = undefined;
  if (null != channel) {
    id = channel.id;
  }
  let name = obj.getName(guild_id, id, user);
  if (null == name) {
    let obj1 = importDefault(dependencyMap[4]);
    name = obj1.getGlobalName(user);
  }
  if (SafetyToastType.IGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl14 = id(dependencyMap[5]).intl;
    obj = { username: name };
    return intl14.formatToPlainString(id(dependencyMap[5]).t.+joqrP, obj);
  } else if (SafetyToastType.UNIGNORE_SUCCESS === BLOCK_SUCCESS) {
    const intl13 = id(dependencyMap[5]).intl;
    obj = { username: name };
    return intl13.formatToPlainString(id(dependencyMap[5]).t.THExKa, obj);
  } else if (SafetyToastType.BLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl12 = id(dependencyMap[5]).intl;
    obj1 = { username: name };
    return intl12.formatToPlainString(id(dependencyMap[5]).t.XXPrIs, obj1);
  } else if (SafetyToastType.UNBLOCK_SUCCESS === BLOCK_SUCCESS) {
    const intl11 = id(dependencyMap[5]).intl;
    const obj2 = { username: name };
    return intl11.formatToPlainString(id(dependencyMap[5]).t.uExcGX, obj2);
  } else if (SafetyToastType.MUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl10 = id(dependencyMap[5]).intl;
    const obj3 = { username: name };
    return intl10.formatToPlainString(id(dependencyMap[5]).t.X4NtYb, obj3);
  } else if (SafetyToastType.UNMUTE_SUCCESS === BLOCK_SUCCESS) {
    const intl9 = id(dependencyMap[5]).intl;
    const obj4 = { username: name };
    return intl9.formatToPlainString(id(dependencyMap[5]).t.tRaBfY, obj4);
  } else if (SafetyToastType.REPORT_SUCCESS === BLOCK_SUCCESS) {
    const intl8 = id(dependencyMap[5]).intl;
    const obj5 = { username: name };
    return intl8.formatToPlainString(id(dependencyMap[5]).t.FOptFU, obj5);
  } else if (SafetyToastType.TIGGER_PAWTECT_ERROR === BLOCK_SUCCESS) {
    const intl7 = id(dependencyMap[5]).intl;
    return intl7.string(id(dependencyMap[5]).t.c6kn6F);
  } else if (SafetyToastType.TIGGER_PAWTECT_VERIFIED === BLOCK_SUCCESS) {
    const intl6 = id(dependencyMap[5]).intl;
    return intl6.string(id(dependencyMap[5]).t.7nKAXx);
  } else if (SafetyToastType.GENERIC_ERROR === BLOCK_SUCCESS) {
    const intl5 = id(dependencyMap[5]).intl;
    return intl5.string(id(dependencyMap[5]).t.zBpoc7);
  } else if (SafetyToastType.REPORT_TO_MOD_SUCCESS === BLOCK_SUCCESS) {
    const intl4 = id(dependencyMap[5]).intl;
    return intl4.string(importDefault(dependencyMap[6]).iBypeZ);
  } else if (SafetyToastType.SAFETY_FEEDBACK_SUCCESS === BLOCK_SUCCESS) {
    const intl3 = id(dependencyMap[5]).intl;
    return intl3.string(id(dependencyMap[5]).t.TcFR5k);
  } else if (SafetyToastType.EXISTING_USER_AGE_GATE_SUCCESS === BLOCK_SUCCESS) {
    const intl2 = id(dependencyMap[5]).intl;
    return intl2.string(id(dependencyMap[5]).t.susqq/);
  } else {
    const intl = id(dependencyMap[5]).intl;
    return intl.string(id(dependencyMap[5]).t.+c5xtT);
  }
};
