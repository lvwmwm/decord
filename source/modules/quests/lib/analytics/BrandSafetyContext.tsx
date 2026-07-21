// Module ID: 10460
// Function ID: 80976
// Name: getBrandSafetyContext
// Dependencies: []
// Exports: getBrandSafetyContext

// Module 10460 (getBrandSafetyContext)
const _module = require(dependencyMap[0]);
({ getVisibleChannelIdsMethod: closure_3, getVisibleGuildIdsMethod: closure_4 } = _module);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = require(dependencyMap[6]).MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN;
const _module1 = require(dependencyMap[10]);
const result = _module1.fileFinishedImporting("modules/quests/lib/analytics/BrandSafetyContext.tsx");

export const getBrandSafetyContext = function getBrandSafetyContext(questContent) {
  let obj = require(dependencyMap[7]);
  const result = obj.isBillableQuestContent(questContent);
  let obj1 = require(dependencyMap[7]);
  const adContext = obj1.getAdContext(questContent);
  const tmp3 = callback2();
  const require = tmp3;
  const tmp4 = callback();
  if (null != adContext) {
    if (adContext.is_campaign_ias_enabled) {
      if (result) {
        if (undefined !== tmp3) {
          if (undefined !== tmp4) {
            const guildId = guildId.getGuildId();
            let guild = null;
            if (null != guildId) {
              guild = guild.getGuild(guildId);
            }
            obj = {
              guilds: () => {
                          if (undefined === tmp3) {
                            return [];
                          } else {
                            const tmp3 = guilds.getGuilds();
                            const mapped = tmp3().map((arg0) => {
                              if (undefined === closure_0[arg0]) {
                                return null;
                              } else {
                                let obj = {};
                                ({ id: obj3.id, name: obj3.name } = tmp);
                                if (null !== tmp.description) {
                                  obj.description = tmp.description;
                                }
                                let tmp2 = null;
                                if (null !== tmp.icon) {
                                  obj = callback(closure_2[8]);
                                  obj = {};
                                  ({ id: obj2.id, icon: obj2.icon } = tmp);
                                  obj.size = 44;
                                  obj.canAnimate = true;
                                  const guildIconURL = obj.getGuildIconURL(obj);
                                  tmp2 = null;
                                  if (null != guildIconURL) {
                                    tmp2 = guildIconURL;
                                  }
                                }
                                if (null !== tmp2) {
                                  obj.icon_url = tmp2;
                                }
                                return obj;
                              }
                            });
                            return mapped.filter((arg0) => null !== arg0);
                          }
                        }()
            };
            if (!tmp20) {
              if (null != guild) {
                const mapped = tmp4().map((channelId) => {
                  const channel = channel.getChannel(channelId);
                  if (undefined === channel) {
                    return null;
                  } else {
                    const obj = { id: channel.id, name: closure_2(closure_2[9]).computeChannelName(channel, closure_9, closure_7) };
                    if (channel.topic.length > 0) {
                      obj.channel_topic = channel.topic;
                    }
                    return obj;
                  }
                });
                let found = mapped.filter((arg0) => null !== arg0);
                const tmp4Result = tmp4();
              }
              obj.channels = found;
              if (null != guildId) {
                obj.selected_guild_id = guildId;
              }
              let banner;
              if (null != guild) {
                banner = guild.banner;
              }
              let tmp10 = null;
              if (null !== banner) {
                let banner1;
                if (null != guild) {
                  banner1 = guild.banner;
                }
                tmp10 = null;
                if (undefined !== banner1) {
                  obj = {};
                  ({ id: obj5.id, banner: obj5.banner } = guild);
                  const guildBannerURL = importDefault(dependencyMap[8]).getGuildBannerURL(obj, true);
                  tmp10 = null;
                  if (null != guildBannerURL) {
                    tmp10 = guildBannerURL;
                  }
                  const obj4 = importDefault(dependencyMap[8]);
                }
              }
              if (null !== tmp10) {
                obj.selected_guild_banner_url = tmp10;
              }
              if (obj.guilds.length > closure_10) {
                const guilds = obj.guilds;
                obj.guilds = guilds.slice(0, closure_10);
                obj.truncated = true;
              }
              if (obj.channels.length > closure_10) {
                const channels = obj.channels;
                obj.channels = channels.slice(0, closure_10);
                obj.truncated = true;
              }
              obj1 = {};
              const _JSON = JSON;
              obj1.brand_safety_context = JSON.stringify(obj);
              return obj1;
            }
            found = [];
          }
        }
      }
    }
  }
  return null;
};
