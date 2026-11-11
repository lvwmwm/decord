// Module ID: 10160
// Function ID: 10161
// Name: trackFeedLoaded
// Dependencies: [1072, 10159, 1252, 10142, 2]
// Exports: trackFeedLoaded

// Module 10160 (trackFeedLoaded)
import ICYMITypes from "ICYMITypes" /* 10142 */;
import ICYMIAnalyticsItemId from "ICYMIAnalyticsItemId" /* 10159 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let type;

let c3;
let closure_4;
({ AnalyticEvents: c3, ChannelTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/icymi/trackFeedLoaded.tsx");

export function trackFeedLoaded(unreadFeedItems) {
  const items = [];
  const items1 = [];
  const items2 = [];
  const items3 = [];
  unreadFeedItems = unreadFeedItems.unreadFeedItems;
  const item = unreadFeedItems.forEach((type) => {
    const obj = ICYMIAnalyticsItemId;
    const dehydratedAnalyticsItemId = obj.getDehydratedAnalyticsItemId(type);
    if (null != dehydratedAnalyticsItemId) {
      let str;
      items.push(dehydratedAnalyticsItemId);
      type = type.type;
      const push = items2.push;
      if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
        let str2 = "message";
        if (type.data.channel_type === constants.GUILD_ANNOUNCEMENT) {
          str2 = "announcement";
        }
        str = str2;
      } else {
        str = "hotwheels_gaming_activity";
        if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
          str = "hotwheels_custom_status";
          if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
            str = "guild_event";
            if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT !== type) {
              str = "recommended_guilds";
              if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS !== type) {
                if (ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM === type) {
                  str = "discover_item";
                }
              }
            }
          }
        }
      }
      push(str);
    }
  });
  const readFeedItems = unreadFeedItems.readFeedItems;
  const item1 = readFeedItems.forEach((type) => {
    const obj = ICYMIAnalyticsItemId;
    const dehydratedAnalyticsItemId = obj.getDehydratedAnalyticsItemId(type);
    if (null != dehydratedAnalyticsItemId) {
      let str;
      items1.push(dehydratedAnalyticsItemId);
      type = type.type;
      const push = items3.push;
      if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
        let str2 = "message";
        if (type.data.channel_type === constants.GUILD_ANNOUNCEMENT) {
          str2 = "announcement";
        }
        str = str2;
      } else {
        str = "hotwheels_gaming_activity";
        if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
          str = "hotwheels_custom_status";
          if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
            str = "guild_event";
            if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT !== type) {
              str = "recommended_guilds";
              if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS !== type) {
                if (ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM === type) {
                  str = "discover_item";
                }
              }
            }
          }
        }
      }
      push(str);
    }
  });
  let obj = { unread_feed_item_ids: items, read_feed_item_ids: items1, unread_feed_item_types: items2, read_feed_item_types: items3 };
  const track = items1(items2[2]).track;
  const FEED_LOADED = items3.FEED_LOADED;
  items1(items2[2]);
  const merged = Object.assign(unreadFeedItems.newTrackingProps);
  ({ homeSessionId: obj.home_session_id, hasNewContent: obj.tab_badged } = unreadFeedItems);
  track(FEED_LOADED, obj);
}
