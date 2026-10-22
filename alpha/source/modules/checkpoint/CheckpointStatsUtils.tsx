// Module ID: 12878
// Function ID: 12879
// Name: CheckpointStatsUtils
// Dependencies: [1406, 4835, 11, 2]
// Exports: getCheckpointTopPercent, globalStatsFromServer, hasCheckpointEmojis, hasCheckpointGuilds, hasCheckpointMessages, hasCheckpointSidekick, hasCheckpointSquad, hasCheckpointVoiceMinutes, statsFromServer

// Module 12878 (CheckpointStatsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4835 */;
import UserRecord from "UserRecord" /* 1406 */;
import size from "module_2" /* 2 */;

let game, guild;

const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStatsUtils.tsx");

export const getCheckpointTopPercent = function getCheckpointTopPercent(prop) {
  let bound = null;
  if (null != prop) {
    bound = null;
    if (prop >= 50) {
      const _Math = Math;
      const _Math2 = Math;
      bound = Math.max(1, Math.ceil(100 - prop));
    }
  }
  return bound;
};
export const hasCheckpointSidekick = function hasCheckpointSidekick(sidekick) {
  sidekick = undefined;
  if (sidekick != null) {
    sidekick = sidekick.sidekick;
  }
  return null != sidekick;
};
export const hasCheckpointSquad = function hasCheckpointSquad(sidekick) {
  sidekick = undefined;
  if (sidekick != null) {
    sidekick = sidekick.sidekick;
  }
  let tmp2 = null != sidekick;
  if (tmp2) {
    let num;
    if (sidekick != null) {
      const users = sidekick.users;
      if (users != null) {
        num = users.length;
      }
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};
export const hasCheckpointVoiceMinutes = function hasCheckpointVoiceMinutes(voice) {
  let num;
  const _Math = Math;
  if (voice != null) {
    voice = voice.voice;
    if (voice != null) {
      num = voice.totalVoiceMinutes;
    }
  }
  if (num == null) {
    num = 0;
  }
  return round(num) > 0;
};
export const hasCheckpointMessages = function hasCheckpointMessages(messages) {
  let num;
  const _Math = Math;
  if (messages != null) {
    messages = messages.messages;
    if (messages != null) {
      num = messages.numMessagesSent;
    }
  }
  if (num == null) {
    num = 0;
  }
  return round(num) > 0;
};
export const hasCheckpointGuilds = function hasCheckpointGuilds(guilds) {
  let num;
  if (guilds != null) {
    guilds = guilds.guilds;
    if (guilds != null) {
      num = guilds.guilds.length;
    }
  }
  if (num == null) {
    num = 0;
  }
  return num > 0;
};
export const hasCheckpointEmojis = function hasCheckpointEmojis(stats) {
  let num;
  const _Math = Math;
  if (stats != null) {
    const emojis = stats.emojis;
    if (emojis != null) {
      num = emojis.numEmojisSent;
    }
  }
  if (num == null) {
    num = 0;
  }
  let tmp = round(num) > 0;
  if (tmp) {
    let num2;
    if (stats != null) {
      const emojis2 = stats.emojis;
      if (emojis2 != null) {
        num2 = emojis2.emojis.length;
      }
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp = num2 > 0;
  }
  return tmp;
};
export const statsFromServer = function statsFromServer(stats) {
  let arr2;
  let emojis;
  let games;
  let guilds;
  let messages;
  let obj2;
  let obj3;
  let power;
  let sidekick;
  let tmp;
  let tmp3;
  let users;
  let voice;
  ({ voice, messages, emojis, games, sidekick, users, power } = stats);
  let obj = {
    voice: { totalVoiceMinutes: voice.total_voice_minutes, totalVoiceMinutesPercentile: voice.total_voice_minutes_percentile },
    messages: { numMessagesSent: messages.num_messages_sent, numMessagesSentPercentile: messages.num_messages_sent_percentile },
    guilds: obj2,
    emojis: { numEmojisSent: emojis.num_emojis_sent, numEmojisSentPercentile: emojis.num_emojis_sent_percentile, emojis: emojis.emojis },
    games: obj3,
    sidekick: tmp,
    users: users.map((user) => {
      const tmp = new UserRecord(user.user);
      return tmp;
    }),
    power: { powerLevel: power.power_level, powerLevelPercentile: power.power_level_percentile }
  };
  obj2 = {
    guilds: guilds.map((guild) => {
      let obj2;
      const obj = { guild: obj2.fromGuildBasic(guild.guild), numMessagesSent: null, numVoiceMinutes: null, numDaysInteracted: null, numDaysInteractedPercentile: null };
      ({ num_messages_sent: obj.numMessagesSent, num_voice_minutes: obj.numVoiceMinutes, num_days_interacted: obj.numDaysInteracted, num_days_interacted_percentile: obj.numDaysInteractedPercentile } = guild);
      obj2 = GuildRecordUtils;
      return obj;
    })
  };
  guilds = stats.guilds.guilds;
  obj3 = {
    totalGamesPlayed: games.total_games_played,
    totalGamesPlayedPercentile: games.total_games_played_percentile,
    games: arr2.map((game) => {
      let banner_hash;
      let cover_image_hash;
      let icon_hash;
      let obj2;
      game = game.game;
      const game2 = { id: obj2.cast(game.id), name: null, iconHash: icon_hash, bannerHash: banner_hash, coverImageHash: cover_image_hash };
      const numSessions = game.num_sessions;
      ({ name: obj.name, icon_hash } = game);
      banner_hash = game.banner_hash;
      cover_image_hash = game.cover_image_hash;
      obj2 = SnowflakeUtilsDefault;
      return { game: game2, numSessions };
    }),
    totalDaysPlayed: games.total_days_played,
    totalDaysPlayedPercentile: games.total_days_played_percentile
  };
  tmp = null;
  arr2 = games.games;
  if (null != sidekick) {
    const self = this;
    const self2 = this;
    const obj7 = { user: tmp3, numMessagesSent: null, numVoiceMinutes: null };
    ({ num_messages_sent: obj4.numMessagesSent, num_voice_minutes: obj4.numVoiceMinutes } = sidekick);
    tmp = obj7;
    tmp3 = new UserRecord(sidekick.user);
  }
  return obj;
};
export const globalStatsFromServer = function globalStatsFromServer(global_stats) {
  let arr2;
  let emojis;
  let games;
  let games_by_players;
  let guilds_by_members;
  let new_games_by_players;
  let obj2;
  let obj3;
  let obj4;
  let prop;
  let prop1;
  let prop2;
  ({ emojis, games } = global_stats);
  let obj = { voice: { peakHourUtc: global_stats.voice.peak_hour_utc }, messages: { numWordsSent: global_stats.messages.num_words_sent }, guilds: obj2, emojis: obj3, games: obj4 };
  obj2 = {
    guildsByMembers: guilds_by_members.map((guild) => {
      guild = guild.guild;
      const obj = GuildRecordUtils;
      return obj.fromGuildBasic(guild);
    })
  };
  guilds_by_members = global_stats.guilds.guilds_by_members;
  obj3 = { numEmojisSent: emojis.num_emojis_sent, numReactionsAdded: emojis.num_reactions_added, emojis: arr2.map((emoji) => emoji.emoji) };
  arr2 = emojis.emojis;
  obj4 = {
    gamesByPlayers: games_by_players.map((game) => {
      let banner_hash;
      let cover_image_hash;
      let icon_hash;
      let obj2;
      game = game.game;
      const obj = { id: obj2.cast(game.id), name: null, iconHash: icon_hash, bannerHash: banner_hash, coverImageHash: cover_image_hash };
      ({ name: obj.name, icon_hash } = game);
      banner_hash = game.banner_hash;
      cover_image_hash = game.cover_image_hash;
      obj2 = SnowflakeUtilsDefault;
      return obj;
    }),
    newGamesByPlayers: new_games_by_players.map((game) => {
      let banner_hash;
      let cover_image_hash;
      let icon_hash;
      let obj2;
      game = game.game;
      const obj = { id: obj2.cast(game.id), name: null, iconHash: icon_hash, bannerHash: banner_hash, coverImageHash: cover_image_hash };
      ({ name: obj.name, icon_hash } = game);
      banner_hash = game.banner_hash;
      cover_image_hash = game.cover_image_hash;
      obj2 = SnowflakeUtilsDefault;
      return obj;
    }),
    indieGamesByPlayers: prop.map((game) => {
      let banner_hash;
      let cover_image_hash;
      let icon_hash;
      let obj2;
      game = game.game;
      const obj = { id: obj2.cast(game.id), name: null, iconHash: icon_hash, bannerHash: banner_hash, coverImageHash: cover_image_hash };
      ({ name: obj.name, icon_hash } = game);
      banner_hash = game.banner_hash;
      cover_image_hash = game.cover_image_hash;
      obj2 = SnowflakeUtilsDefault;
      return obj;
    }),
    gamesByStreamWatchMinutes: prop1.map((game) => {
      let banner_hash;
      let cover_image_hash;
      let icon_hash;
      let obj2;
      game = game.game;
      const obj = { id: obj2.cast(game.id), name: null, iconHash: icon_hash, bannerHash: banner_hash, coverImageHash: cover_image_hash };
      ({ name: obj.name, icon_hash } = game);
      banner_hash = game.banner_hash;
      cover_image_hash = game.cover_image_hash;
      obj2 = SnowflakeUtilsDefault;
      return obj;
    }),
    gamesByCoplayUsers: prop2.map((game) => {
      let banner_hash;
      let cover_image_hash;
      let icon_hash;
      let obj2;
      game = game.game;
      const obj = { id: obj2.cast(game.id), name: null, iconHash: icon_hash, bannerHash: banner_hash, coverImageHash: cover_image_hash };
      ({ name: obj.name, icon_hash } = game);
      banner_hash = game.banner_hash;
      cover_image_hash = game.cover_image_hash;
      obj2 = SnowflakeUtilsDefault;
      return obj;
    }),
    numUsersPlayedEveryDay: games.num_users_played_every_day
  };
  games_by_players = games.games_by_players;
  new_games_by_players = games.new_games_by_players;
  prop = games.indie_games_by_players;
  prop1 = games.games_by_stream_watch_minutes;
  prop2 = games.games_by_coplay_users;
  return obj;
};
