// Module ID: 10471
// Function ID: 81039
// Name: getBrandSafetyContext
// Dependencies: [9445, 1348, 1838, 3767, 3947, 1849, 10470, 6940, 1392, 4320, 2]
// Exports: getBrandSafetyContext

// Module 10471 (getBrandSafetyContext)
import SidebarVisibilityMethodStore from "SidebarVisibilityMethodStore";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN as closure_10 } from "MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN";

let closure_3;
let closure_4;
({ getVisibleChannelIdsMethod: closure_3, getVisibleGuildIdsMethod: closure_4 } = SidebarVisibilityMethodStore);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/lib/analytics/BrandSafetyContext.tsx");

export const getBrandSafetyContext = function getBrandSafetyContext(questContent) {
  let obj = require(6940) /* _createForOfIteratorHelperLoose */;
  const result = obj.isBillableQuestContent(questContent);
  let obj1 = require(6940) /* _createForOfIteratorHelperLoose */;
  const adContext = obj1.getAdContext(questContent);
  let tmp3 = callback2();
  require = tmp3;
  const tmp4 = callback();
  if (null != adContext) {
    if (adContext.is_campaign_ias_enabled) {
      if (result) {
        if (undefined !== tmp3) {
          if (undefined !== tmp4) {
            guildId = guildId.getGuildId();
            let guild = null;
            if (null != guildId) {
              guild = guild.getGuild(guildId);
            }
            obj = {
              guilds: (() => {
                          if (undefined === tmp3) {
                            return [];
                          } else {
                            tmp3 = outer1_6.getGuilds();
                            const mapped = tmp3().map((arg0) => {
                              if (undefined === table[arg0]) {
                                return null;
                              } else {
                                let obj = {};
                                ({ id: obj3.id, name: obj3.name } = tmp);
                                if (null !== tmp.description) {
                                  obj.description = tmp.description;
                                }
                                let tmp2 = null;
                                if (null !== tmp.icon) {
                                  obj = outer2_1(outer2_2[8]);
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
                        })()
            };
            if (!tmp20) {
              if (null != guild) {
                let mapped = tmp4().map((channelId) => {
                  const channel = outer1_5.getChannel(channelId);
                  if (undefined === channel) {
                    return null;
                  } else {
                    const obj = { id: channel.id, name: outer1_2(outer1_2[9]).computeChannelName(channel, outer1_9, outer1_7) };
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
                  const guildBannerURL = importDefault(1392).getGuildBannerURL(obj, true);
                  tmp10 = null;
                  if (null != guildBannerURL) {
                    tmp10 = guildBannerURL;
                  }
                  const obj4 = importDefault(1392);
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
