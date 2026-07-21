// Module ID: 7082
// Function ID: 56705
// Name: messageHasCheckpoint
// Dependencies: []
// Exports: getDestinationIsUnavailable, useDestinationNamesWithSlowmode, useSelectedDestinationChannel, useSelectedDestinationNames

// Module 7082 (messageHasCheckpoint)
function messageHasCheckpoint(message) {
  let tmp = message.components.length > 0;
  if (tmp) {
    tmp = message.components[0].type === arg1(dependencyMap[13]).ComponentType.CHECKPOINT_CARD;
  }
  return tmp;
}
function isRatelimitedInChannel(channel, closure_6) {
  let tmp = null != channel.rateLimitPerUser;
  if (tmp) {
    tmp = channel.rateLimitPerUser > 0;
  }
  if (tmp) {
    let canResult = closure_6.can(constants2.MANAGE_CHANNELS, channel);
    if (!canResult) {
      canResult = closure_6.can(constants2.MANAGE_MESSAGES, channel);
    }
    tmp = !canResult;
  }
  return tmp;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ ChannelRecordBase: closure_5, isGuildChannelType: closure_6, createChannelRecord: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[2]);
({ MessageFlags: closure_12, Permissions: closure_13 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/forwarding/ForwardDestinationUtils.tsx");

export const useSelectedDestinationChannel = function useSelectedDestinationChannel(selectedDestinations) {
  const mapped = selectedDestinations.map(arg1(dependencyMap[8]).getChannelIdFromDestinationId);
  const found = mapped.find(arg1(dependencyMap[9]).isNotNullish);
  const arg1 = found;
  const items = [closure_8];
  const items1 = [found];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => channel.getChannel(found), items1);
  const importDefault = stateFromStores;
  const items2 = [stateFromStores];
  return React.useMemo(() => {
    if (null != stateFromStores) {
      let tmp4 = stateFromStores;
    } else {
      const obj = { id: "1", type: found(closure_2[11]).ChannelTypes.DM };
      tmp4 = callback(obj);
    }
    return tmp4;
  }, items2);
};
export const getDestinationIsUnavailable = function getDestinationIsUnavailable(stateFromStores, stateFromStores1, type) {
  stateFromStores1 = type;
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
      let obj = stateFromStores1(dependencyMap[14]);
      if (obj.isChannelOrGuildNSFW(stateFromStores1)) {
        if (tmp) {
          let obj1 = stateFromStores1(dependencyMap[14]);
        }
        obj = {};
        const intl = stateFromStores1(dependencyMap[15]).intl;
        obj.label = intl.string(stateFromStores1(dependencyMap[15]).t.KgPx1D);
        obj.lineClamp = 2;
        return obj;
      }
      if (tmp) {
        if (callback(type.type)) {
          if (stateFromStores.attachments.length > 0) {
            if (!closure_9.can(constants2.ATTACH_FILES, type)) {
              obj = {};
              const intl2 = stateFromStores1(dependencyMap[15]).intl;
              obj.label = intl2.string(stateFromStores1(dependencyMap[15]).t.P7yvbm);
              return obj;
            }
          } else {
            const messageSnapshots = stateFromStores.messageSnapshots;
          }
          if (stateFromStores.embeds.length > 0) {
            let obj4 = stateFromStores1(dependencyMap[16]);
            if (!obj4.canEmbedLinks(type, closure_9)) {
              if (!obj6.shouldStripEmbeds(stateFromStores)) {
                obj1 = {};
                const intl3 = stateFromStores1(dependencyMap[15]).intl;
                obj1.label = intl3.string(stateFromStores1(dependencyMap[15]).t.Wr4RIX);
                return obj1;
              }
              const obj6 = stateFromStores1(dependencyMap[16]);
            }
          } else {
            const messageSnapshots2 = stateFromStores.messageSnapshots;
          }
          if (tmp44) {
            if (!obj8.canEmbedLinks(type, closure_9)) {
              const obj2 = {};
              const intl4 = stateFromStores1(dependencyMap[15]).intl;
              obj2.label = intl4.string(stateFromStores1(dependencyMap[15]).t.Wr4RIX);
              return obj2;
            }
            const obj8 = stateFromStores1(dependencyMap[16]);
          }
          const items = [];
          const messageSnapshots3 = stateFromStores.messageSnapshots;
          let arraySpreadResult = HermesBuiltin.arraySpread(stateFromStores1(dependencyMap[12]).getMessageStickers(stateFromStores), 0);
          arraySpreadResult = HermesBuiltin.arraySpread(messageSnapshots3.flatMap((message) => arg2(closure_2[12]).getMessageStickers(message.message)), arraySpreadResult);
          if (items.length > 0) {
            if (!closure_9.can(constants2.USE_EXTERNAL_STICKERS, type)) {
              if (items.some((id) => {
                const stickerById = stickerById.getStickerById(id.id);
                let isGuildStickerResult = null != stickerById;
                if (isGuildStickerResult) {
                  isGuildStickerResult = arg2(closure_2[12]).isGuildSticker(stickerById);
                  const obj = arg2(closure_2[12]);
                }
                if (isGuildStickerResult) {
                  isGuildStickerResult = stickerById.guild_id !== arg2.guild_id || undefined;
                  const tmp6 = stickerById.guild_id !== arg2.guild_id || undefined;
                }
                return isGuildStickerResult;
              })) {
                const obj3 = {};
                const intl5 = stateFromStores1(dependencyMap[15]).intl;
                obj3.label = intl5.string(stateFromStores1(dependencyMap[15]).t.0Yyrua);
                return obj3;
              }
            }
          }
          if (stateFromStores.hasFlag(constants.IS_VOICE_MESSAGE)) {
            if (!closure_9.can(constants2.SEND_VOICE_MESSAGES, type)) {
              obj4 = {};
              const intl6 = stateFromStores1(dependencyMap[15]).intl;
              obj4.label = intl6.string(stateFromStores1(dependencyMap[15]).t.quj4DY);
              return obj4;
            }
          } else {
            const messageSnapshots4 = stateFromStores.messageSnapshots;
          }
          const obj10 = stateFromStores1(dependencyMap[12]);
        }
      }
    }
  }
};
export { isRatelimitedInChannel };
export const useSelectedDestinationNames = function useSelectedDestinationNames(arg0) {
  const arg1 = arg0;
  const items = [closure_11, closure_8, closure_10];
  const items1 = [arg0];
  return arg1(dependencyMap[10]).useStateFromStoresArray(items, () => {
    const mapped = arg0.map((id) => {
      id = id.id;
      if ("user" === id.type) {
        const user = user.getUser(id);
        let tmp13 = null;
        if (null != user) {
          let nickname = nickname.getNickname(user.id);
          if (null == nickname) {
            nickname = callback2(closure_2[17]).getName(user);
            const obj2 = callback2(closure_2[17]);
          }
          tmp13 = nickname;
        }
        return tmp13;
      } else {
        const channel = channel.getChannel(id);
        let channelName = null;
        if (null != channel) {
          const obj = callback(closure_2[18]);
          channelName = obj.computeChannelName(channel, user, nickname, true);
        }
        return channelName;
      }
    });
    return mapped.filter(arg0(closure_2[9]).isNotNullish);
  }, items1);
};
export const useDestinationNamesWithSlowmode = function useDestinationNamesWithSlowmode(selectedDestinations) {
  const arg1 = selectedDestinations;
  const items = [closure_8, closure_9];
  const items1 = [selectedDestinations];
  const stateFromStoresArray = arg1(dependencyMap[10]).useStateFromStoresArray(items, () => {
    const mapped = arg0.map((type) => {
      let channel = null;
      if ("channel" === type.type) {
        channel = channel.getChannel(tmp);
      }
      return channel;
    });
    const found = mapped.filter(arg0(closure_2[9]).isNotNullish);
    return found.filter((arg0) => callback(arg0, closure_9));
  }, items1);
  const importDefault = stateFromStoresArray;
  const obj = arg1(dependencyMap[10]);
  const items2 = [closure_11, closure_10];
  const items3 = [stateFromStoresArray];
  return arg1(dependencyMap[10]).useStateFromStoresArray(items2, () => stateFromStoresArray.map((channel) => callback(closure_2[18]).computeChannelName(channel, closure_11, closure_10, true)), items3);
};
