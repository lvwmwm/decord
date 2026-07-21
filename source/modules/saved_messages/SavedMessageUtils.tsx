// Module ID: 9911
// Function ID: 76680
// Name: _savedMessageJumpToMessage
// Dependencies: []
// Exports: savedMessageJumpToMessage, useDueInString, useSavedMessageChannel

// Module 9911 (_savedMessageJumpToMessage)
function _savedMessageJumpToMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _savedMessageJumpToMessage = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const UnknownChannelRecord = arg1(dependencyMap[2]).UnknownChannelRecord;
let closure_6 = importDefault(dependencyMap[3]);
({ ChannelTypes: closure_7, Routes: closure_8 } = arg1(dependencyMap[4]));
const obj = { LONG: 0, [0]: "LONG", SHORT: 1, [1]: "SHORT" };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/saved_messages/SavedMessageUtils.tsx");

export const DueInStringTypes = obj;
export const useDueInString = function useDueInString(arg0) {
  let dueAt;
  let now;
  let type;
  ({ dueAt, now, type } = arg0);
  if (null == dueAt) {
    return {};
  } else {
    if (type === obj.LONG) {
      let H4gnX9 = arg1(dependencyMap[5]).t.TjNWNF;
    } else {
      H4gnX9 = arg1(dependencyMap[5]).t.H4gnX9;
    }
    if (type === obj.LONG) {
      Uq7Y+7 = arg1(dependencyMap[5]).t.haia16;
    } else {
      Uq7Y+7 = arg1(dependencyMap[5]).t.Uq7Y+7;
    }
    if (now > dueAt) {
      H4gnX9 = Uq7Y_7;
    }
    let obj = {};
    const intl = arg1(dependencyMap[5]).intl;
    obj = {};
    const time = dueAt.getTime();
    const obj3 = importDefault(dependencyMap[6]);
    obj.duration = importDefault(dependencyMap[6]).duration(time - now.getTime(), "millisecond").humanize();
    obj.dueInText = intl.formatToPlainString(H4gnX9, obj);
    obj.isOverdue = now > dueAt;
    return obj;
  }
};
export const useSavedMessageChannel = function useSavedMessageChannel(savedMessage) {
  const arg1 = savedMessage;
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => channel.getChannel(arg0.saveData.channelId));
  const importDefault = stateFromStores;
  const items1 = [stateFromStores, savedMessage];
  return React.useMemo((self) => {
    if (null != stateFromStores) {
      let tmp9 = stateFromStores;
    } else if (null != self.message) {
      const obj = { id: self.saveData.channelId, guild_id: self.saveData.guildId, type: constants.UNKNOWN };
      const intl = self(closure_2[5]).intl;
      obj.name = intl.string(self(closure_2[5]).t.J90oLW);
      const prototype = ctor.prototype;
      tmp9 = new ctor(obj);
    }
    return tmp9;
  }, items1);
};
export const savedMessageJumpToMessage = function savedMessageJumpToMessage(arg0, arg1) {
  return _savedMessageJumpToMessage(...arguments);
};
