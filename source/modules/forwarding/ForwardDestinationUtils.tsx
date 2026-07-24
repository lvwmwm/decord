// Module ID: 7087
// Function ID: 56771
// Name: messageHasCheckpoint
// Dependencies: [31, 5035, 1352, 1348, 3758, 3767, 1849, 653, 7088, 1327, 566, 669, 4466, 1881, 4345, 1212, 4464, 3969, 4320, 2]
// Exports: getDestinationIsUnavailable, useDestinationNamesWithSlowmode, useSelectedDestinationChannel, useSelectedDestinationNames

// Module 7087 (messageHasCheckpoint)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function messageHasCheckpoint(message) {
  let tmp = message.components.length > 0;
  if (tmp) {
    tmp = message.components[0].type === require(1881) /* PermissionOverwriteType */.ComponentType.CHECKPOINT_CARD;
  }
  return tmp;
}
function isRatelimitedInChannel(channel, outer2_6) {
  let tmp = null != channel.rateLimitPerUser;
  if (tmp) {
    tmp = channel.rateLimitPerUser > 0;
  }
  if (tmp) {
    let canResult = outer2_6.can(constants2.MANAGE_CHANNELS, channel);
    if (!canResult) {
      canResult = outer2_6.can(constants2.MANAGE_MESSAGES, channel);
    }
    tmp = !canResult;
  }
  return tmp;
}
({ ChannelRecordBase: closure_5, isGuildChannelType: closure_6, createChannelRecord: closure_7 } = _callSuper);
({ MessageFlags: closure_12, Permissions: closure_13 } = ME);
const result = require("_callSuper").fileFinishedImporting("modules/forwarding/ForwardDestinationUtils.tsx");

export const useSelectedDestinationChannel = function useSelectedDestinationChannel(selectedDestinations) {
  const mapped = selectedDestinations.map(found(7088).getChannelIdFromDestinationId);
  found = mapped.find(found(1327).isNotNullish);
  const items = [closure_8];
  const items1 = [found];
  const stateFromStores = found(566).useStateFromStores(items, () => outer1_8.getChannel(found), items1);
  const items2 = [stateFromStores];
  return React.useMemo(() => {
    if (null != stateFromStores) {
      let tmp4 = stateFromStores;
    } else {
      const obj = { id: "1", type: found(outer1_2[11]).ChannelTypes.DM };
      tmp4 = outer1_7(obj);
    }
    return tmp4;
  }, items2);
};
export const getDestinationIsUnavailable = function getDestinationIsUnavailable(stateFromStores, stateFromStores1, type) {
  const _require = type;
  if (null != arg3) {
    const tmp2 = arg3(type);
    if (null != tmp2) {
      return tmp2;
    }
  }
  if (null != stateFromStores) {
    const tmp44 = messageHasCheckpoint(stateFromStores);
    let tmp4 = stateFromStores.messageSnapshots.length > 0;
    if (tmp4) {
      tmp4 = messageHasCheckpoint(stateFromStores.messageSnapshots[0].message);
    }
    if (null != stateFromStores1) {
      let obj = _require(4345);
      if (obj.isChannelOrGuildNSFW(stateFromStores1)) {
        if (tmp) {
          let obj1 = _require(4345);
        }
        obj = {};
        const intl = _require(1212).intl;
        obj.label = intl.string(_require(1212).t.KgPx1D);
        obj.lineClamp = 2;
        return obj;
      }
      if (tmp) {
        if (callback(type.type)) {
          if (stateFromStores.attachments.length > 0) {
            if (!closure_9.can(constants2.ATTACH_FILES, type)) {
              obj = {};
              const intl2 = _require(1212).intl;
              obj.label = intl2.string(_require(1212).t.P7yvbm);
              return obj;
            }
          } else {
            const messageSnapshots = stateFromStores.messageSnapshots;
          }
          if (stateFromStores.embeds.length > 0) {
            let obj4 = _require(4464);
            if (!obj4.canEmbedLinks(type, closure_9)) {
              if (!obj6.shouldStripEmbeds(stateFromStores)) {
                obj1 = {};
                const intl3 = _require(1212).intl;
                obj1.label = intl3.string(_require(1212).t.Wr4RIX);
                return obj1;
              }
              obj6 = _require(4464);
            }
          } else {
            const messageSnapshots2 = stateFromStores.messageSnapshots;
          }
          if (tmp44) {
            if (!obj8.canEmbedLinks(type, closure_9)) {
              const obj2 = {};
              const intl4 = _require(1212).intl;
              obj2.label = intl4.string(_require(1212).t.Wr4RIX);
              return obj2;
            }
            obj8 = _require(4464);
          }
          const items = [];
          const messageSnapshots3 = stateFromStores.messageSnapshots;
          let arraySpreadResult = HermesBuiltin.arraySpread(_require(4466).getMessageStickers(stateFromStores), 0);
          arraySpreadResult = HermesBuiltin.arraySpread(messageSnapshots3.flatMap((message) => type(outer1_2[12]).getMessageStickers(message.message)), arraySpreadResult);
          if (items.length > 0) {
            if (!closure_9.can(constants2.USE_EXTERNAL_STICKERS, type)) {
              if (items.some((id) => {
                const stickerById = outer1_4.getStickerById(id.id);
                let isGuildStickerResult = null != stickerById;
                if (isGuildStickerResult) {
                  isGuildStickerResult = type(outer1_2[12]).isGuildSticker(stickerById);
                  const obj = type(outer1_2[12]);
                }
                if (isGuildStickerResult) {
                  isGuildStickerResult = stickerById.guild_id !== type.guild_id || undefined;
                  const tmp6 = stickerById.guild_id !== type.guild_id || undefined;
                }
                return isGuildStickerResult;
              })) {
                const obj3 = {};
                const intl5 = _require(1212).intl;
                obj3.label = intl5.string(_require(1212).t["0Yyrua"]);
                return obj3;
              }
            }
          }
          if (stateFromStores.hasFlag(constants.IS_VOICE_MESSAGE)) {
            if (!closure_9.can(constants2.SEND_VOICE_MESSAGES, type)) {
              obj4 = {};
              const intl6 = _require(1212).intl;
              obj4.label = intl6.string(_require(1212).t.quj4DY);
              return obj4;
            }
          } else {
            const messageSnapshots4 = stateFromStores.messageSnapshots;
          }
          const obj10 = _require(4466);
        }
      }
    }
  }
};
export { isRatelimitedInChannel };
export const useSelectedDestinationNames = function useSelectedDestinationNames(arg0) {
  const _require = arg0;
  const items = [closure_11, closure_8, closure_10];
  const items1 = [arg0];
  return _require(566).useStateFromStoresArray(items, () => {
    const mapped = lib.map((id) => {
      id = id.id;
      if ("user" === id.type) {
        const user = outer2_11.getUser(id);
        let tmp13 = null;
        if (null != user) {
          let nickname = outer2_10.getNickname(user.id);
          if (null == nickname) {
            nickname = outer2_1(outer2_2[17]).getName(user);
            const obj2 = outer2_1(outer2_2[17]);
          }
          tmp13 = nickname;
        }
        return tmp13;
      } else {
        const channel = outer2_8.getChannel(id);
        let channelName = null;
        if (null != channel) {
          const obj = callback(outer2_2[18]);
          channelName = obj.computeChannelName(channel, outer2_11, outer2_10, true);
        }
        return channelName;
      }
    });
    return mapped.filter(lib(outer1_2[9]).isNotNullish);
  }, items1);
};
export const useDestinationNamesWithSlowmode = function useDestinationNamesWithSlowmode(selectedDestinations) {
  const _require = selectedDestinations;
  const items = [closure_8, closure_9];
  const items1 = [selectedDestinations];
  const stateFromStoresArray = _require(566).useStateFromStoresArray(items, () => {
    const mapped = selectedDestinations.map((type) => {
      let channel = null;
      if ("channel" === type.type) {
        channel = outer2_8.getChannel(tmp);
      }
      return channel;
    });
    const found = mapped.filter(selectedDestinations(outer1_2[9]).isNotNullish);
    return found.filter((arg0) => outer2_15(arg0, outer2_9));
  }, items1);
  const obj = _require(566);
  const items2 = [closure_11, closure_10];
  const items3 = [stateFromStoresArray];
  return _require(566).useStateFromStoresArray(items2, () => stateFromStoresArray.map((channel) => callback(outer2_2[18]).computeChannelName(channel, outer2_11, outer2_10, true)), items3);
};
