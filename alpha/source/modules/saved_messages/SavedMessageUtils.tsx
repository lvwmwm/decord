// Module ID: 11919
// Function ID: 11920
// Name: SavedMessageUtils
// Dependencies: [5, 19, 5159, 502, 5155, 1072, 1113, 2169, 504, 8134, 7262, 5492, 2]
// Exports: savedMessageJumpToMessage, useDueInString, useSavedMessageChannel

// Module 11919 (SavedMessageUtils)
import intl2 from "intl" /* 1113 */;
import _modDef2169 from "module_2169" /* 2169 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8134 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelRecord from "ChannelRecord" /* 5159 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, c7;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj = function _savedMessageJumpToMessage() {
  let channel;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        let guildId;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            guildId = closure_0.saveData.guildId;
            if (null == guildId) {
              guildId = channel.getChannel(tmp40.saveData.channelId);
              if (null == guildId) {
                c5 = 1;
                const obj8 = ChannelActionCreatorsDefault;
                guildId = obj8.fetchChannel(tmp40.saveData.channelId);
                c6 = 2;
                c7 = 1;
                const obj7 = { value: guildId, done: false };
                return obj7;
              }
            }
          }
        } else if (1 === c6) {
          c5 = 0;
        } else if (2 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            guildId = value;
            if (null == guildId.recipients) {
              c5 = 0;
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else if (guildId.recipients.length > 1) {
              c5 = 0;
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const recipients = guildId.recipients;
              const obj2 = closure_131_1(closure_131_2[9]);
              guildId = obj2.ensurePrivateChannel(recipients.map((id) => id.id));
              c6 = 3;
              c7 = 1;
              const obj10 = { value: guildId, done: false };
              return obj10;
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 0;
        }
        guildId = closure_1 == null;
        let guildId1;
        const CHANNEL = closure_131_10.CHANNEL;
        const obj5 = closure_1;
        const tmp16 = closure_131_1(closure_131_2[10]);
        if (!guildId) {
          guildId1 = obj5.getGuildId();
        }
        const CHANNELResult = CHANNEL(guildId1, closure_0.saveData.channelId, closure_0.saveData.messageId);
        const obj6 = closure_131_0(closure_131_2[11]);
        guildId = !obj6.isGuildsOnTopOfTabs();
        const obj11 = { openChannel: true, navigationReplace: !guildId };
        guildId = tmp16(CHANNELResult, obj11);
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp29) {
        let closure_4 = tmp29;
        if (0 === c5) {
          c7 = 3;
          throw tmp29;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ PrivateChannelRecord: hasOwnProperty, UnknownChannelRecord: metroRequire } = ChannelRecord);
({ ChannelTypes: c9, Routes: c10 } = Constants);
obj = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageUtils.tsx");

export const DueInStringTypes = obj;
export function useDueInString(arg0) {
  let dueAt;
  let durationResult;
  let formatToPlainString;
  let now;
  let obj2;
  let type;
  ({ dueAt, now, type } = arg0);
  if (null == dueAt) {
    return { string: "", isOverdue: false };
  } else {
    let H4gnX9;
    let tmp;
    let haia16;
    const tmp10 = obj;
    if (type === obj.LONG) {
      H4gnX9 = intl2.t.TjNWNF;
      tmp = require;
    } else {
      tmp = require;
      H4gnX9 = intl2.t.H4gnX9;
    }
    if (type === tmp10.LONG) {
      haia16 = tmp(1113).t.haia16;
    } else {
      haia16 = tmp(1113).t["Uq7Y+7"];
    }
    if (now > dueAt) {
      H4gnX9 = haia16;
    }
    obj = { dueInText: formatToPlainString(H4gnX9, obj2), isOverdue: now > dueAt };
    const intl = tmp(1113).intl;
    formatToPlainString = intl.formatToPlainString;
    obj2 = { duration: durationResult.humanize() };
    const duration = _modDef2169.duration;
    _modDef2169;
    const time = dueAt.getTime();
    durationResult = duration(time - now.getTime(), "millisecond");
    return obj;
  }
}
export function useSavedMessageChannel(savedMessage) {
  let id;
  let stateFromStores1;
  _require = savedMessage;
  obj = require("get initialized");
  let items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(savedMessage.saveData.channelId));
  let obj2 = require("get initialized");
  const items1 = [AuthenticationStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => id.getId());
  const items2 = [stateFromStores, savedMessage, stateFromStores1];
  return react.useMemo(function() {
    let intl;
    let items;
    let message;
    let saveData;
    if (null != stateFromStores) {
      return stateFromStores;
    } else {
      ({ message, saveData } = savedMessage);
      let tmp11;
      if (null != message) {
        if (null == saveData.guildId) {
          let tmp7;
          if (message.author.id !== stateFromStores1) {
            const obj2 = { id: saveData.channelId, type: constants.DM, name: "", guild_id: null, recipients: items };
            items = [message.author.id];
            const self3 = this;
            const self4 = this;
            tmp7 = new hasOwnProperty(obj2);
          }
          tmp11 = tmp7;
        }
        obj = { id: null, guild_id: null, type: constants.UNKNOWN, name: intl.string(intl2.t.J90oLW) };
        ({ channelId: obj.id, guildId: obj.guild_id } = saveData);
        intl = intl2.intl;
        const self = this;
        const self2 = this;
        tmp7 = new metroRequire(obj);
      }
      return tmp11;
    }
  }, items2);
}
export function savedMessageJumpToMessage() {
  return obj(...arguments);
}
