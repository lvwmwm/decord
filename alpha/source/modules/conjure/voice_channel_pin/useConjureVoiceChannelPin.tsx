// Module ID: 12652
// Function ID: 12653
// Name: useConjureVoiceChannelPin
// Dependencies: [5, 32, 19, 4863, 4944, 4946, 4956, 1383, 6844, 10871, 1072, 504, 5652, 10959, 2]
// Exports: useConjureVoiceChannelPinForm, useConjureVoiceChannelPinOutcome

// Module 12652 (useConjureVoiceChannelPin)
import GuildChannelStore2 from "GuildChannelStore" /* 4944 */;
import useChannelName from "useChannelName" /* 5652 */;
import conjureVoiceChannelPin from "conjureVoiceChannelPin" /* 10959 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import ConjureVoiceChannelPinStore from "ConjureVoiceChannelPinStore" /* 10871 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, c2, c3, closure_1;

let closure_14;
let map1;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
({ ChannelTypes: map1, Permissions: closure_14 } = Constants);
const result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/useConjureVoiceChannelPin.tsx");

export function useConjureVoiceChannelPinOutcome(projectId) {
  let stateFromStores;
  _require = projectId;
  let obj = require("get initialized");
  const items = [ConjureVoiceChannelPinStore];
  stateFromStores = obj.useStateFromStores(items, () => ConjureVoiceChannelPinStore.getOutcome(projectId));
  const items1 = [ChannelStore, UserStore, RelationshipStore];
  const items2 = [stateFromStores];
  const obj2 = require("get initialized");
  const obj3 = {
    outcome: stateFromStores,
    pinnedName: obj2.useStateFromStores(items1, () => {
      let status;
      if (stateFromStores != null) {
        status = tmp.status;
      }
      let channel = null;
      if ("pinned" === status) {
        channel = ChannelStore.getChannel(tmp.channelId);
      }
      let channelName = null;
      if (null != channel) {
        const obj = useChannelName;
        channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
      }
      return channelName;
    }, items2)
  };
  return obj3;
}
export function useConjureVoiceChannelPinForm(projectId) {
  let selected;
  let setPicked;
  let tmp10;
  let tmp8;
  _require = projectId;
  let tmp = _require;
  let obj = require("get initialized");
  let items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  const items2 = [GuildChannelStore, PermissionStore];
  const items3 = [guild_id];
  const tmpResult = tmp(504);
  const channels = tmpResult.useStateFromStoresArray(items2, () => {
    let constants2;
    let items;
    if (null == guild_id) {
      items = [];
    } else {
      const arr = channels.getChannels(tmp)[GUILD_VOCAL_CHANNELS_KEY];
      const mapped = arr.map((channel) => channel.channel);
      items = mapped.filter((type) => {
        const canResult = type.type === constants.GUILD_VOICE && closure_1_8.can(constants2.MANAGE_CHANNELS, type);
        return canResult;
      });
    }
    return items;
  }, items3);
  let obj3 = selected;
  [dependencyMap, setPicked] = selected.useState(null);
  [tmp8, _asyncToGenerator] = _slicedToArray(selected.useState(false), 2);
  const tmp7 = _slicedToArray(selected.useState(false), 2);
  const tmp9 = _slicedToArray(selected.useState(false), 2);
  [tmp10, _slicedToArray] = tmp9;
  selected = channels.find((id) => id.id === closure_1);
  if (selected == null) {
    selected = null;
  }
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  const items4 = [application_id, projectId, selected];
  const items5 = [projectId];
  const pin = obj3.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj4;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp4;
            tmp = undefined;
            if (null != selected) {
              if (null != application_id) {
                _asyncToGenerator(true);
                _slicedToArray(false);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj4.pinVoiceChannel(selected.id, tmp18), done: false };
                obj4 = tmp(closure_1[13]);
                return obj5;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          tmp = value;
          closure_129_2(false);
          if (tmp) {
            const obj7 = { status: "pinned", channelId: closure_129_4.id };
            const obj = tmp(closure_1[13]);
            const voiceChannelPin = obj.resolveVoiceChannelPin(closure_129_0, obj7);
          } else {
            closure_129_3(true);
          }
        }
        c3 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp26) {
        c3 = 3;
        throw tmp26;
      }
    }
  }), items4);
  let guildId;
  const skip = obj3.useCallback(() => {
    const obj = conjureVoiceChannelPin;
    return obj.resolveVoiceChannelPin(projectId, { status: "skipped" });
  }, items5);
  if (stateFromStores != null) {
    guildId = stateFromStores.guild_id;
  }
  if (guildId == null) {
    guildId = null;
  }
  return { guildId, channels, selected, setPicked, pinning, failed, pin, skip };
}
