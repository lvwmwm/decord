// Module ID: 11211
// Function ID: 11212
// Name: SavedMessageUtils
// Dependencies: [5, 19, 2049, 2045, 1074, 1115, 4421, 504, 4849, 6665, 2]
// Exports: savedMessageJumpToMessage, useDueInString, useSavedMessageChannel

// Module 11211 (SavedMessageUtils)
import intl2 from "intl" /* 1115 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import _modDef4421 from "module_4421" /* 4421 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_3, closure_4, type2;

let metroImportAll;
let metroImportDefault;
let obj = function _savedMessageJumpToMessage() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let type = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              type2 = undefined;
              type = undefined;
              if (type != null) {
                type = type.type;
              }
              if (type === constants.UNKNOWN) {
                if (null == closure_0.saveData.guildId) {
                  c5 = 1;
                  type = ChannelActionCreatorsDefault;
                  c6 = 2;
                  c7 = 1;
                  const obj4 = { value: type.fetchChannel(closure_0.saveData.channelId), done: false };
                  return obj4;
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
              return { value, done: true };
            } else {
              type2 = value;
              if (null == type2.recipients) {
                c5 = 0;
                c7 = 3;
                return { value: "HermesInternal", done: null };
              } else if (type2.recipients.length > 1) {
                c5 = 0;
                c7 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                type = closure_131_1(closure_131_2[8]);
                const recipients = type2.recipients;
                c6 = 3;
                c7 = 1;
                const obj6 = { value: type.ensurePrivateChannel(recipients.map((id) => id.id)), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
          }
          let guildId;
          const CHANNEL = closure_131_8.CHANNEL;
          const tmp17 = closure_131_1(closure_131_2[9]);
          if (type != null) {
            guildId = type.getGuildId();
          }
          type = CHANNEL(guildId, closure_0.saveData.channelId, closure_0.saveData.messageId);
          tmp17(type, { openChannel: true });
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp26) {
          closure_4 = tmp26;
          if (0 === c5) {
            c7 = 3;
            throw tmp26;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const UnknownChannelRecord = ChannelRecord.UnknownChannelRecord;
({ ChannelTypes: metroImportDefault, Routes: metroImportAll } = Constants);
obj = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageUtils.tsx");

export const DueInStringTypes = obj;
export const useDueInString = function useDueInString(arg0) {
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
      haia16 = tmp(1115).t.haia16;
    } else {
      haia16 = tmp(1115).t["Uq7Y+7"];
    }
    if (now > dueAt) {
      H4gnX9 = haia16;
    }
    obj = { dueInText: formatToPlainString(H4gnX9, obj2), isOverdue: now > dueAt };
    const intl = tmp(1115).intl;
    formatToPlainString = intl.formatToPlainString;
    obj2 = { duration: durationResult.humanize() };
    const duration = _modDef4421.duration;
    _modDef4421;
    const time = dueAt.getTime();
    durationResult = duration(time - now.getTime(), "millisecond");
    return obj;
  }
};
export const useSavedMessageChannel = function useSavedMessageChannel(savedMessage) {
  _require = savedMessage;
  obj = require("get initialized");
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(savedMessage.saveData.channelId));
  const items1 = [stateFromStores, savedMessage];
  return react.useMemo(function() {
    let intl;
    let tmp = stateFromStores;
    if (null == stateFromStores) {
      let tmp7;
      if (null != savedMessage.message) {
        obj = { id: savedMessage.saveData.channelId, guild_id: savedMessage.saveData.guildId, type: metroImportDefault.UNKNOWN, name: intl.string(intl2.t.J90oLW) };
        intl = intl2.intl;
        const self = this;
        const self2 = this;
        tmp7 = new UnknownChannelRecord(obj);
      }
      tmp = tmp7;
    }
    return tmp;
  }, items1);
};
export const savedMessageJumpToMessage = function savedMessageJumpToMessage() {
  return obj(...arguments);
};
