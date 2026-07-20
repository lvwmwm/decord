// Module ID: 21
// Function ID: 282
// Name: DISCORD_EPOCH
// Dependencies: []

// Module 21 (DISCORD_EPOCH)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("utils/SnowflakeUtils.tsx");

export default {
  age(arg0) {
    return importAll(dependencyMap[1]).age(arg0);
  },
  extractTimestamp(arg0) {
    return importAll(dependencyMap[1]).extractTimestamp(arg0);
  },
  compare(arg0, arg1) {
    return importAll(dependencyMap[1]).compare(arg0, arg1);
  },
  atPreviousMillisecond(arg0) {
    return importAll(dependencyMap[1]).atPreviousMillisecond(arg0);
  },
  atNextMillisecond(arg0) {
    return importAll(dependencyMap[1]).atNextMillisecond(arg0);
  },
  fromTimestamp(arg0) {
    return importAll(dependencyMap[1]).fromTimestamp(arg0);
  },
  fromTimestampWithSequence(arg0, arg1) {
    return importAll(dependencyMap[1]).fromTimestampWithSequence(arg0, arg1);
  },
  keys(arg0) {
    return Object.keys(arg0);
  },
  forEach(arg0, arg1) {
    const importDefault = arg1;
    const item = importDefault(dependencyMap[0]).forEach(arg0, (arg0, arg1) => arg1(arg0, arg1));
  },
  forEachKey(recurrenceCounts, arg1) {
    for (const key10004 in arg0) {
      let tmp = key10004;
      let tmp2 = arg1(key10004);
    }
  },
  entries(arg0) {
    return Object.entries(arg0);
  },
  isProbablyAValidSnowflake(arg0) {
    return importAll(dependencyMap[1]).isProbablyAValidSnowflake(arg0);
  },
  castChannelIdAsMessageId(id) {
    return id;
  },
  castMessageIdAsChannelId(id) {
    return id;
  },
  castGuildIdAsEveryoneGuildRoleId(guildId) {
    return guildId;
  },
  cast(id) {
    return id;
  }
};
export const DISCORD_EPOCH = require(dependencyMap[1]).DISCORD_EPOCH;
export const SnowflakeSequence = require(dependencyMap[1]).SnowflakeSequence;
