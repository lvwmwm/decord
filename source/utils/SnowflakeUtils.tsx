// Module ID: 21
// Function ID: 282
// Name: DISCORD_EPOCH
// Dependencies: [22, 23, 2]

// Module 21 (DISCORD_EPOCH)
const result = require("set").fileFinishedImporting("utils/SnowflakeUtils.tsx");

export default {
  age(arg0) {
    return importAll(23).age(arg0);
  },
  extractTimestamp(arg0) {
    return importAll(23).extractTimestamp(arg0);
  },
  compare(arg0, arg1) {
    return importAll(23).compare(arg0, arg1);
  },
  atPreviousMillisecond(arg0) {
    return importAll(23).atPreviousMillisecond(arg0);
  },
  atNextMillisecond(arg0) {
    return importAll(23).atNextMillisecond(arg0);
  },
  fromTimestamp(arg0) {
    return importAll(23).fromTimestamp(arg0);
  },
  fromTimestampWithSequence(arg0, arg1) {
    return importAll(23).fromTimestampWithSequence(arg0, arg1);
  },
  keys(arg0) {
    return Object.keys(arg0);
  },
  forEach(arg0, arg1) {
    const importDefault = arg1;
    const item = importDefault(22).forEach(arg0, (arg0, arg1) => callback(arg0, arg1));
  },
  forEachKey(recurrenceCounts, arg1) {
    for (const key10004 in arg0) {
      let tmp = key10004;
      let tmp2 = arg1(key10004);
      continue;
    }
  },
  entries(arg0) {
    return Object.entries(arg0);
  },
  isProbablyAValidSnowflake(arg0) {
    return importAll(23).isProbablyAValidSnowflake(arg0);
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
export const DISCORD_EPOCH = require("extractTimestamp").DISCORD_EPOCH;
export const SnowflakeSequence = require("extractTimestamp").SnowflakeSequence;
