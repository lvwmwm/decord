// Module ID: 9952
// Function ID: 76932
// Name: _savedMessageJumpToMessage
// Dependencies: [5, 31, 1352, 1348, 653, 1212, 3712, 566, 4140, 5626, 2]
// Exports: savedMessageJumpToMessage, useDueInString, useSavedMessageChannel

// Module 9952 (_savedMessageJumpToMessage)
import getSystemLocale from "getSystemLocale";
import result from "result";
import { UnknownChannelRecord } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_7;
let closure_8;
const require = arg1;
function _savedMessageJumpToMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ ChannelTypes: closure_7, Routes: closure_8 } = ME);
let obj = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const result = require("_callSuper").fileFinishedImporting("modules/saved_messages/SavedMessageUtils.tsx");

export const DueInStringTypes = obj;
export const useDueInString = function useDueInString(arg0) {
  let dueAt;
  let now;
  let type;
  ({ dueAt, now, type } = arg0);
  if (null == dueAt) {
    return { string: "", isOverdue: false };
  } else {
    if (type === obj.LONG) {
      let H4gnX9 = require(1212) /* getSystemLocale */.t.TjNWNF;
    } else {
      H4gnX9 = require(1212) /* getSystemLocale */.t.H4gnX9;
    }
    if (type === obj.LONG) {
      Uq7Y_7 = require(1212) /* getSystemLocale */.t.haia16;
    } else {
      Uq7Y_7 = require(1212) /* getSystemLocale */.t["Uq7Y+7"];
    }
    if (now > dueAt) {
      H4gnX9 = Uq7Y_7;
    }
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const time = dueAt.getTime();
    const obj3 = importDefault(3712);
    obj.duration = importDefault(3712).duration(time - now.getTime(), "millisecond").humanize();
    obj.dueInText = intl.formatToPlainString(H4gnX9, obj);
    obj.isOverdue = now > dueAt;
    return obj;
  }
};
export const useSavedMessageChannel = function useSavedMessageChannel(savedMessage) {
  const _require = savedMessage;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_6.getChannel(savedMessage.saveData.channelId));
  const items1 = [stateFromStores, savedMessage];
  return React.useMemo(() => {
    if (null != stateFromStores) {
      let tmp9 = stateFromStores;
    } else if (null != savedMessage.message) {
      const obj = { id: savedMessage.saveData.channelId, guild_id: savedMessage.saveData.guildId, type: outer1_7.UNKNOWN };
      const intl = savedMessage(outer1_2[5]).intl;
      obj.name = intl.string(savedMessage(outer1_2[5]).t.J90oLW);
      const prototype = outer1_5.prototype;
      tmp9 = new outer1_5(obj);
    }
    return tmp9;
  }, items1);
};
export const savedMessageJumpToMessage = function savedMessageJumpToMessage(arg0, arg1) {
  return _savedMessageJumpToMessage(...arguments);
};
