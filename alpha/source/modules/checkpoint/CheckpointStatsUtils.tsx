// Module ID: 13399
// Function ID: 13400
// Name: CheckpointStatsUtils
// Dependencies: [1398, 1114, 4872, 11, 2]
// Exports: formatCheckpointCompactNumber, formatCheckpointPeakHour, getCheckpointOdysseyCopies, getCheckpointTopPercent, globalStatsFromServer, hasCheckpointEmojis, hasCheckpointGameDays, hasCheckpointGames, hasCheckpointGuilds, hasCheckpointMessages, hasCheckpointSidekick, hasCheckpointSquad, hasCheckpointVoiceMinutes, statsFromServer

// Module 13399 (CheckpointStatsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl from "intl" /* 1114 */;
import GuildRecordUtils from "GuildRecordUtils" /* 4872 */;
import UserRecord from "UserRecord" /* 1398 */;
import size from "module_2" /* 2 */;

let game, guild;

let closure_4 = { hour: "numeric", minute: "2-digit", numberingSystem: "latn" };
const re5 = /^[A-Za-z.\s]+$/;
const re6 = /\s/g;
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStatsUtils.tsx");

export function getCheckpointTopPercent(prop) {
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
}
export function formatCheckpointCompactNumber(stateFromStores1) {
  const numberFormat = new Intl.NumberFormat(intl.intl.currentLocale, { notation: "compact", compactDisplay: "long" });
  return numberFormat.format(stateFromStores1);
}
export function getCheckpointOdysseyCopies(stateFromStores1) {
  return stateFromStores1 / 87765;
}
export function formatCheckpointPeakHour(stateFromStores1) {
  if (null == stateFromStores1) {
    return null;
  } else {
    const _Date = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date();
    date.setUTCHours(stateFromStores1, 0, 0, 0);
    const _Intl2 = Intl;
    const self5 = this;
    const self6 = this;
    const dateTimeFormat = new Intl.DateTimeFormat(intl.intl.currentLocale, closure_4);
    const formatToPartsResult = dateTimeFormat.formatToParts(date);
    const iter = formatToPartsResult.find((type) => "dayPeriod" === type.type);
    let value;
    const tmp15 = require;
    if (iter != null) {
      value = iter.value;
    }
    let tmp2 = tmp17;
    if (null != value) {
      tmp2 = tmp17;
      if (!re5.test(value)) {
        const obj = { hourCycle: "h23" };
        const merged = Object.assign(tmp17);
        tmp2 = obj;
      }
    }
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const dateTimeFormat1 = new Intl.DateTimeFormat(tmp15(1114).intl.currentLocale, tmp2);
    const str2 = dateTimeFormat1.format(date);
    const obj2 = { value: str2.replace(re6, ""), label: str2 };
    return obj2;
  }
}
export function hasCheckpointSidekick(sidekick) {
  sidekick = undefined;
  if (sidekick != null) {
    sidekick = sidekick.sidekick;
  }
  return null != sidekick;
}
export function hasCheckpointSquad(sidekick) {
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
}
export function hasCheckpointVoiceMinutes(voice) {
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
}
export function hasCheckpointMessages(messages) {
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
}
export function hasCheckpointGuilds(guilds) {
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
}
export function hasCheckpointEmojis(stats) {
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
}
export function hasCheckpointGames(stats) {
  let num;
  const _Math = Math;
  if (stats != null) {
    const games = stats.games;
    if (games != null) {
      num = games.totalGamesPlayed;
    }
  }
  if (num == null) {
    num = 0;
  }
  let tmp = round(num) > 0;
  if (tmp) {
    let num2;
    if (stats != null) {
      const games2 = stats.games;
      if (games2 != null) {
        num2 = games2.games.length;
      }
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp = num2 > 0;
  }
  return tmp;
}
export function hasCheckpointGameDays(games) {
  let num;
  const _Math = Math;
  if (games != null) {
    games = games.games;
    if (games != null) {
      num = games.totalDaysPlayed;
    }
  }
  if (num == null) {
    num = 0;
  }
  return round(num) > 0;
}
export function statsFromServer(stats) {
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
}
export function globalStatsFromServer(global_stats) {
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
}
