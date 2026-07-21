// Module ID: 14932
// Function ID: 112409
// Name: useStartTime
// Dependencies: []
// Exports: useStartTime

// Module 14932 (useStartTime)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ChannelTypes = arg1(dependencyMap[3]).ChannelTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export const useStartTime = function useStartTime(channel) {
  const arg1 = channel;
  const items = [closure_4, closure_3];
  const stateFromStoresObject = arg1(dependencyMap[4]).useStateFromStoresObject(items, () => ({ hasRequestedStartTimes: closure_4.hasRequestedStartTimes(arg0.guild_id), startTime: closure_4.getStartTime(arg0), isGuildUnavailable: tmp2.isUnavailable(arg0.guild_id) }));
  const hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const dependencyMap = hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  const React = isGuildUnavailable;
  closure_3 = tmp2;
  const items1 = [channel.type === ChannelTypes.GUILD_VOICE, channel.guild_id, hasRequestedStartTimes, isGuildUnavailable];
  const effect = React.useEffect(() => {
    let tmp = hasRequestedStartTimes;
    if (!hasRequestedStartTimes) {
      tmp = !tmp2;
    }
    if (!tmp) {
      tmp = isGuildUnavailable;
    }
    if (!tmp) {
      const channelInfo = arg0(hasRequestedStartTimes[5]).fetchChannelInfo(arg0.guild_id);
      const obj = arg0(hasRequestedStartTimes[5]);
    }
  }, items1);
  return stateFromStoresObject.startTime;
};
