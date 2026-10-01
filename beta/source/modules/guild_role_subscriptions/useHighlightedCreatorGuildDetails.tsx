// Module ID: 17536
// Function ID: 17537
// Name: useHighlightedCreatorGuildDetails
// Dependencies: [19, 1074, 17537, 1397, 2]
// Exports: default

// Module 17536 (useHighlightedCreatorGuildDetails)
import Constants from "Constants" /* 1074 */;
import useFetchHighlightedCreatorGuildDetailsDefault from "useFetchHighlightedCreatorGuildDetails" /* 17537 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let roles, set;

let tmp;
const AvatarUtilsDefault = tmp(1397);
const MarketingURLs = Constants.MarketingURLs;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx");

export default function useHighlightedCreatorGuildDetails(id, arg1, size) {
  let highlightedCreatorDetails;
  let isLoading;
  let obj4;
  let obj5;
  let result;
  let subscriber_count;
  let closure_0 = arg1;
  const tmp = importDefault;
  const tmp2 = dependencyMap;
  const tmp3 = useFetchHighlightedCreatorGuildDetailsDefault(id);
  ({ isLoading, highlightedCreatorDetails } = tmp3);
  let store_page;
  const error = tmp3.error;
  if (highlightedCreatorDetails != null) {
    store_page = highlightedCreatorDetails.store_page;
  }
  let role_subscription1;
  const useMemo = react.useMemo;
  const obj = react;
  if (store_page != null) {
    role_subscription1 = store_page.role_subscription;
  }
  const items = [role_subscription1];
  const memo = useMemo(() => {
    let group_listings;
    if (store_page != null) {
      const role_subscription = tmp.role_subscription;
      if (role_subscription != null) {
        group_listings = role_subscription.group_listings;
      }
    }
    set = new Set();
    if (group_listings != null) {
      let item = group_listings.forEach((subscription_listings) => {
        const prop = subscription_listings.subscription_listings;
        if (prop != null) {
          const item = prop.forEach((role_id) => {
            set.add(role_id.role_id);
          });
        }
      });
    }
    let benefit_emojis;
    if (store_page != null) {
      const role_subscription2 = tmp.role_subscription;
      if (role_subscription2 != null) {
        benefit_emojis = role_subscription2.benefit_emojis;
      }
    }
    let found;
    if (benefit_emojis != null) {
      found = benefit_emojis.filter((roles) => {
        roles = roles.roles;
        return roles.some((item) => set.has(item));
      });
    }
    return found;
  }, items);
  let icon_hash;
  if (store_page != null) {
    icon_hash = store_page.guild.icon_hash;
  }
  const obj2 = { id, icon: icon_hash, size };
  const tmpResult = AvatarUtilsDefault;
  const guildIconURL = tmpResult.getGuildIconURL(obj2);
  const items1 = [memo, arg1];
  let diff = null;
  const memo1 = obj.useMemo(() => {
    let substr = memo;
    if (null != memo) {
      substr = arr;
      if (memo.length > closure_0) {
        substr = arr.slice(0, tmp2);
      }
    }
    return substr;
  }, items1);
  if (null != memo) {
    diff = null;
    if (memo.length > arg1) {
      diff = memo.length - arg1;
    }
  }
  let slug;
  if (highlightedCreatorDetails != null) {
    slug = highlightedCreatorDetails.slug;
  }
  if (null != slug) {
    result = MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(slug);
  }
  let name;
  if (store_page != null) {
    const guild = store_page.guild;
    if (guild != null) {
      name = guild.name;
    }
  }
  if (store_page != null) {
    let role_subscription = store_page.role_subscription;
    if (role_subscription != null) {
      subscriber_count = role_subscription.subscriber_count;
    }
  }
  if (!isLoading && null != name && null != icon_hash && null != guildIconURL) {
    const obj3 = { hasAllImperativeDetails: !isLoading && null != name && null != icon_hash && null != guildIconURL, isLoading, details: obj4 };
    obj5 = obj3;
    obj4 = { guildName: name, guildIcon: icon_hash, guildAvatarUrl: guildIconURL, storePageUrl: result, subscriberCount: subscriber_count, emojisToShow: memo1, notShownEmojiCount: diff };
  } else {
    obj5 = { hasAllImperativeDetails: !isLoading && null != name && null != icon_hash && null != guildIconURL, isLoading, error };
  }
  return obj5;
};
