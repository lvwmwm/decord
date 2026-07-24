// Module ID: 10581
// Function ID: 82619
// Name: useIsFiveButtonLayout
// Dependencies: [1348, 1838, 566, 10244, 10582, 10583, 5652, 2]
// Exports: useIsFiveButtonLayout

// Module 10581 (useIsFiveButtonLayout)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/video_calls/native/useIsFiveButtonLayout.tsx");

export const useIsFiveButtonLayout = function useIsFiveButtonLayout(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_3.getChannel(closure_0));
  const obj = _require(566);
  let isConnectedToVoiceChannel = _require(10244).useIsConnectedToVoiceChannel(stateFromStores);
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp3 = null;
  if (null != guild_id) {
    tmp3 = guild_id;
  }
  const importDefault = tmp3;
  let guild_id1;
  const obj3 = _require(10244);
  if (null != stateFromStores) {
    guild_id1 = stateFromStores.guild_id;
  }
  let tmp6 = null;
  if (null != guild_id1) {
    tmp6 = guild_id1;
  }
  id = undefined;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp4 = importDefault(10582);
  const tmp4Result = importDefault(10582)(tmp6, id);
  const items1 = [_createForOfIteratorHelperLoose];
  const items2 = [tmp3];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_4.getGuild(closure_1), items2);
  if (null != stateFromStores1) {
    const afkChannelId = stateFromStores1.afkChannelId;
  }
  let isGuildVoiceResult;
  if (null != stateFromStores) {
    isGuildVoiceResult = stateFromStores.isGuildVoice();
  }
  let tmp11 = null != isGuildVoiceResult && isGuildVoiceResult;
  let id1;
  const obj4 = _require(566);
  if (null != stateFromStores) {
    id1 = stateFromStores.id;
  }
  const tmp12 = importDefault(10583);
  const tmp12Result = importDefault(10583)(id1);
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = tmp4Result;
  }
  if (isConnectedToVoiceChannel) {
    if (!tmp11) {
      tmp11 = tmp12Result;
    }
    isConnectedToVoiceChannel = tmp11;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp15;
  }
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = afkChannelId !== id;
  }
  return isConnectedToVoiceChannel;
};
