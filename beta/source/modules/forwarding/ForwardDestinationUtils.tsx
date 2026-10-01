// Module ID: 11180
// Function ID: 11181
// Name: ForwardDestinationUtils
// Dependencies: [19, 5814, 2049, 2045, 4469, 4479, 1372, 1074, 10444, 1370, 504, 1095, 5198, 1979, 5046, 5048, 5735, 5736, 11181, 1115, 5196, 7101, 4678, 4989, 2]
// Exports: getDestinationIsUnavailable, isRatelimitedInChannel, useDestinationNamesWithSlowmode, useSelectedDestinationChannel, useSelectedDestinationNames

// Module 11180 (ForwardDestinationUtils)
import ChannelTypes from "ChannelTypes" /* 1095 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import SlowmodeUtils from "SlowmodeUtils" /* 7101 */;
import ForwardAgeRestrictedDestinationsExperimentDefault from "ForwardAgeRestrictedDestinationsExperiment" /* 11181 */;
import react from "react" /* 19 */;
import StickersStore from "StickersStore" /* 5814 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, id, nickname, user;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
({ ChannelRecordBase: hasOwnProperty, isGuildChannelType: metroRequire, createChannelRecord: metroImportDefault } = ChannelRecord);
({ MessageFlags: closure_12, Permissions: map1 } = Constants);
let result = size.fileFinishedImporting("modules/forwarding/ForwardDestinationUtils.tsx");

export const useSelectedDestinationChannel = function useSelectedDestinationChannel(selectedDestinations) {
  let found;
  const mapped = selectedDestinations.map(found(10444).getChannelIdFromDestinationId);
  found = mapped.find(found(1370).isNotNullish);
  let obj = found(504);
  const items = [ChannelStore];
  const items1 = [found];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(found), items1);
  const items2 = [stateFromStores];
  return react.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores == null) {
      const obj = { id: "1", type: ChannelTypes.ChannelTypes.DM };
      tmp = metroImportDefault(obj);
    }
    return tmp;
  }, items2);
};
export const getDestinationIsUnavailable = function getDestinationIsUnavailable(components, channel, type, fn) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  _require = type;
  const tmp2 = closure_5;
  if (null != fn) {
    const tmp4 = fn(type);
    if (null != tmp4) {
      return tmp4;
    }
  }
  if (null != components) {
    let tmp7 = components.components.length > 0;
    if (tmp7) {
      tmp7 = components.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
    }
    let tmp8 = components.messageSnapshots.length > 0;
    if (tmp8) {
      let message = components.messageSnapshots[0].message;
      tmp8 = message.components.length > 0 && message.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
      const tmp9 = message.components.length > 0 && message.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
    }
    if (null != channel) {
      let obj = require("AgeGateUtils");
      if (obj.isChannelOrGuildNSFW(channel)) {
        if (type instanceof closure_5) {
          require("AgeGateUtils");
        }
        const obj2 = { label: intl.string(require("intl").t.KgPx1D), lineClamp: 2 };
        intl = tmp13(1115).intl;
        return obj2;
      }
      let flag2 = false;
      if (type instanceof tmp2) {
        flag2 = false;
        const tmp13Result8 = require("AgeGateUtils");
        if (tmp13Result8.isChannelOrGuildNSFW(type)) {
          const currentUser = UserStore.getCurrentUser();
          let nsfwAllowed;
          if (currentUser != null) {
            nsfwAllowed = currentUser.nsfwAllowed;
          }
          const tmp13Result9 = require("AgeVerificationUtils");
          let result = tmp13Result9.shouldShowTiggerPawtect();
          if (result) {
            const tmp13Result10 = require("RegionalFeatureConfigUtils");
            result = tmp13Result10.isFeatureAgeGated(tmp13(5736).AgeGatedFeature.AGE_GATED_SPACES);
          }
          let disableAgeRestrictedDestinations = !(false !== nsfwAllowed && !result);
          if (disableAgeRestrictedDestinations) {
            const obj7 = ForwardAgeRestrictedDestinationsExperimentDefault;
            disableAgeRestrictedDestinations = obj7.getConfig({ location: "getDestinationIsUnavailable" }).disableAgeRestrictedDestinations;
          }
          flag2 = disableAgeRestrictedDestinations;
        }
      }
      if (flag2) {
        const obj3 = { label: intl7.string(require("intl").t.QHrFo6), lineClamp: 2 };
        intl7 = tmp13(1115).intl;
        return obj3;
      } else if (type instanceof closure_5) {
        if (closure_6(type.type)) {
          if (components.attachments.length > 0) {
            if (!PermissionStore.can(constants2.ATTACH_FILES, type)) {
              const obj4 = { label: intl2.string(require("intl").t.P7yvbm) };
              intl2 = tmp13(1115).intl;
              return obj4;
            }
          } else {
            const messageSnapshots = components.messageSnapshots;
          }
          if (components.embeds.length > 0) {
            const tmp13Result11 = require("EmbedUtils");
            if (!tmp13Result11.canEmbedLinks(type, PermissionStore)) {
              const tmp13Result12 = require("EmbedUtils");
              if (!tmp13Result12.shouldStripEmbeds(components)) {
                const obj5 = { label: intl3.string(require("intl").t.Wr4RIX) };
                intl3 = tmp13(1115).intl;
                return obj5;
              }
            }
          } else {
            const messageSnapshots2 = components.messageSnapshots;
          }
          if (tmp7) {
            const tmp13Result13 = require("EmbedUtils");
            if (!tmp13Result13.canEmbedLinks(type, PermissionStore)) {
              const obj6 = { label: intl4.string(require("intl").t.Wr4RIX) };
              intl4 = tmp13(1115).intl;
              return obj6;
            }
          }
          const items = [];
          const messageSnapshots3 = components.messageSnapshots;
          const tmp13Result14 = require("StickersUtils");
          const arraySpreadResult = HermesBuiltin.arraySpread(items, tmp13Result14.getMessageStickers(components), 0);
          HermesBuiltin.arraySpread(items, messageSnapshots3.flatMap((message) => {
            message = message.message;
            const obj = type(dependencyMap[12]);
            return obj.getMessageStickers(message);
          }), arraySpreadResult);
          if (items.length > 0) {
            if (!PermissionStore.can(constants2.USE_EXTERNAL_STICKERS, type)) {
              if (items.some((id) => {
                const stickerById = StickersStore.getStickerById(id.id);
                let isGuildStickerResult = null != stickerById;
                if (isGuildStickerResult) {
                  const obj = StickersUtils;
                  isGuildStickerResult = obj.isGuildSticker(stickerById);
                }
                if (isGuildStickerResult) {
                  isGuildStickerResult = stickerById.guild_id !== tmp.guild_id || undefined;
                }
                return isGuildStickerResult;
              })) {
                const obj8 = { label: intl5.string(require("intl").t["0Yyrua"]) };
                intl5 = tmp13(1115).intl;
                return obj8;
              }
            }
          }
          if (components.hasFlag(constants.IS_VOICE_MESSAGE)) {
            if (!PermissionStore.can(constants2.SEND_VOICE_MESSAGES, type)) {
              const obj9 = { label: intl6.string(require("intl").t.quj4DY) };
              intl6 = tmp13(1115).intl;
              return obj9;
            }
          } else {
            const messageSnapshots4 = components.messageSnapshots;
          }
        }
      }
    }
  }
};
export const isRatelimitedInChannel = function isRatelimitedInChannel(channel, can) {
  let tmp = null != channel.rateLimitPerUser && channel.rateLimitPerUser > 0;
  if (tmp) {
    const obj = SlowmodeUtils;
    tmp = !obj.canBypassSlowmodeHelper(channel, can);
  }
  return tmp;
};
export const useSelectedDestinationNames = function useSelectedDestinationNames(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserStore, ChannelStore, RelationshipStore];
  const items1 = [arg0];
  return obj.useStateFromStoresArray(items, () => {
    const mapped = closure_0.map((id) => {
      id = id.id;
      if ("user" === id.type) {
        user = user.getUser(id);
        let tmp13 = null;
        if (null != user) {
          nickname = nickname.getNickname(user.id);
          if (nickname == null) {
            const obj2 = closure_1_1(closure_1_2[22]);
            nickname = obj2.getName(user);
          }
          tmp13 = nickname;
        }
        return tmp13;
      } else {
        channel = channel.getChannel(id);
        let channelName = null;
        if (null != channel) {
          const obj = closure_1_0(closure_1_2[23]);
          channelName = obj.computeChannelName(channel, user, nickname, true);
        }
        return channelName;
      }
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items1);
};
export const useDestinationNamesWithSlowmode = function useDestinationNamesWithSlowmode(selectedDestinations) {
  _require = selectedDestinations;
  let obj = require("get initialized");
  const items = [ChannelStore, PermissionStore];
  const items1 = [selectedDestinations];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const mapped = selectedDestinations.map((type) => {
      channel = null;
      if ("channel" === type.type) {
        channel = channel.getChannel(tmp);
      }
      return channel;
    });
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.filter((rateLimitPerUser) => {
      let tmp2 = null != rateLimitPerUser.rateLimitPerUser;
      const tmp = closure_1_9;
      if (tmp2) {
        tmp2 = rateLimitPerUser.rateLimitPerUser > 0;
      }
      if (tmp2) {
        const obj = selectedDestinations(closure_1_2[21]);
        tmp2 = !obj.canBypassSlowmodeHelper(rateLimitPerUser, tmp);
      }
      return tmp2;
    });
  }, items1);
  const items2 = [UserStore, RelationshipStore];
  const items3 = [stateFromStoresArray];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items2, () => stateFromStoresArray.map((item) => {
    const obj = selectedDestinations(closure_1_2[23]);
    return obj.computeChannelName(item, closure_1_11, closure_1_10, true);
  }), items3);
};
