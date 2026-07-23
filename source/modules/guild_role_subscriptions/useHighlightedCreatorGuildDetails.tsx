// Module ID: 16403
// Function ID: 127887
// Name: useHighlightedCreatorGuildDetails
// Dependencies: [31, 653, 16404, 1392, 2]
// Exports: default

// Module 16403 (useHighlightedCreatorGuildDetails)
import result from "result";
import { MarketingURLs } from "ME";

let result = require("useFetchHighlightedCreatorGuildDetails").fileFinishedImporting("modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx");

export default function useHighlightedCreatorGuildDetails(id, arg1, size) {
  let highlightedCreatorDetails;
  let isLoading;
  const importDefault = arg1;
  const tmp = importDefault(store_page[2])(id);
  ({ isLoading, highlightedCreatorDetails } = tmp);
  store_page = undefined;
  if (null != highlightedCreatorDetails) {
    store_page = highlightedCreatorDetails.store_page;
  }
  let role_subscription;
  if (null != store_page) {
    role_subscription = store_page.role_subscription;
  }
  const items = [role_subscription];
  memo = memo.useMemo(() => {
    let group_listings;
    if (null != store_page) {
      const role_subscription = store_page.role_subscription;
      if (null != role_subscription) {
        group_listings = role_subscription.group_listings;
      }
    }
    let closure_0 = (function getSubscriptionRoleIds(group_listings) {
      const set = new Set();
      if (null != group_listings) {
        let item = group_listings.forEach((subscription_listings) => {
          const prop = subscription_listings.subscription_listings;
          if (null != prop) {
            const item = prop.forEach((role_id) => {
              outer1_0.add(role_id.role_id);
            });
          }
        });
      }
      return set;
    })(group_listings);
    let benefit_emojis;
    if (null != store_page) {
      const role_subscription2 = store_page.role_subscription;
      if (null != role_subscription2) {
        benefit_emojis = role_subscription2.benefit_emojis;
      }
    }
    let found;
    if (null != benefit_emojis) {
      found = benefit_emojis.filter((roles) => {
        roles = roles.roles;
        return roles.some((arg0) => outer1_0.has(arg0));
      });
    }
    return found;
  }, items);
  let icon_hash;
  if (null != store_page) {
    icon_hash = store_page.guild.icon_hash;
  }
  let obj = importDefault(store_page[3]);
  obj = { id, icon: icon_hash, size };
  const guildIconURL = obj.getGuildIconURL(obj);
  const items1 = [memo, arg1];
  let diff = null;
  const memo1 = memo.useMemo(() => {
    if (null != memo) {
      if (memo.length > closure_0) {
        let substr = memo.slice(0, closure_0);
      }
      return substr;
    }
    substr = memo;
  }, items1);
  if (null != memo) {
    diff = null;
    if (memo.length > arg1) {
      diff = memo.length - arg1;
    }
  }
  let slug;
  if (null != highlightedCreatorDetails) {
    slug = highlightedCreatorDetails.slug;
  }
  if (null != slug) {
    const result = MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(slug);
  }
  let name;
  if (null != store_page) {
    const guild = store_page.guild;
    if (null != guild) {
      name = guild.name;
    }
  }
  if (null != store_page) {
    role_subscription = store_page.role_subscription;
    if (null != role_subscription) {
      const subscriber_count = role_subscription.subscriber_count;
    }
  }
  obj = { hasAllImperativeDetails: tmp13, isLoading };
  if (!isLoading && null != name && null != icon_hash && null != guildIconURL) {
    const obj1 = { guildName: name, guildIcon: icon_hash, guildAvatarUrl: guildIconURL, storePageUrl: result, subscriberCount: subscriber_count, emojisToShow: memo1, notShownEmojiCount: diff };
    obj.details = obj1;
    let tmp14 = obj;
  } else {
    obj.error = tmp.error;
    tmp14 = obj;
  }
  return tmp14;
};
