// Module ID: 9603
// Function ID: 9604
// Name: CampaignDevToolsUtils
// Dependencies: [9558, 1387, 7013, 9604, 1234, 9561, 9605, 9606, 9607, 2107, 1113, 9608, 9609, 5076, 9610, 11, 2]
// Exports: campaignDetails, campaignDismissibleContents, campaignPreviewActions, campaignPromotionDismissalStatus, filterCampaigns, groupCampaignPreviewActions, groupCampaigns, resolveCampaignComponents, resolveCampaignPreviewComponents

// Module 9603 (CampaignDevToolsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl from "intl" /* 1113 */;
import ProtoUtils from "ProtoUtils" /* 1234 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import _extends from "_extends" /* 7013 */;
import premium_marketing_component_properties from "premium_marketing_component_properties" /* 9561 */;
import MarketingComponentPlatform from "MarketingComponentPlatform" /* 9604 */;
import resolveLocalizedProperties2 from "resolveLocalizedProperties" /* 9605 */;
import MarketingComponentType from "MarketingComponentType" /* 9608 */;
import MarketingStringFormat from "MarketingStringFormat" /* 9609 */;
import MobileBottomSheetDismissibleContent from "MobileBottomSheetDismissibleContent" /* 9610 */;
import MarketingComponentRecord from "MarketingComponentRecord" /* 9558 */;
import size from "module_2" /* 2 */;

let _require, dependencyMap, map1, premium_type, set, set2;

function campaignState(start_date, timestamp) {
  let UPCOMING;
  start_date = start_date.start_date;
  let tmp = null;
  if (null != start_date) {
    const _Date = Date;
    const parsed = Date.parse(start_date);
    const _Number = Number;
    let tmp4 = null;
    if (!Number.isNaN(parsed)) {
      tmp4 = parsed;
    }
    tmp = tmp4;
  }
  const end_date = start_date.end_date;
  let tmp5 = null;
  if (null != end_date) {
    const _Date2 = Date;
    const parsed1 = Date.parse(end_date);
    const _Number2 = Number;
    let tmp8 = null;
    if (!Number.isNaN(parsed1)) {
      tmp8 = parsed1;
    }
    tmp5 = tmp8;
  }
  if (null != tmp5) {
    if (timestamp > tmp5) {
      UPCOMING = obj.ENDED;
    }
    return UPCOMING;
  }
  if (2 !== start_date.lifecycle_state) {
    UPCOMING = obj.DRAFT;
  } else {
    if (null != tmp) {
      if (null != tmp5) {
        if (timestamp >= tmp) {
          UPCOMING = obj.ACTIVE;
        }
      }
    }
    UPCOMING = obj.UPCOMING;
  }
}
function componentProperties(nextResult) {
  obj = ProtoUtils;
  return obj.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, nextResult.properties);
}
function campaignLocalDate(end_date) {
  if (null === end_date) {
    return "Not set";
  } else {
    let tmp4 = null;
    if (null != end_date) {
      const _Date = Date;
      const parsed = Date.parse(end_date);
      const _Number = Number;
      let tmp3 = null;
      if (!Number.isNaN(parsed)) {
        tmp3 = parsed;
      }
      tmp4 = tmp3;
    }
    let str = "Unavailable";
    if (null != tmp4) {
      const _Date2 = Date;
      const self = this;
      const self2 = this;
      const date = new Date(tmp4);
      str = date.toLocaleString(intl.intl.currentLocale, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
    }
    return str;
  }
}
function surfaceIsTimed(surface_start_date) {
  return null != (undefined === surface_start_date.surface_start_date ? surface_start_date.start_date : surface_start_date.surface_start_date) || null != (undefined === surface_start_date.surface_end_date ? surface_start_date.end_date : surface_start_date.surface_end_date);
}
function componentTypeName(component_type, properties) {
  let str2;
  let str = component_type;
  if (typeof component_type === "number") {
    str = MarketingComponentType.MarketingComponentType[component_type];
  }
  if (str == null) {
    let oneofKind;
    if (properties != null) {
      oneofKind = properties.properties.oneofKind;
    }
    str = oneofKind;
  }
  if (null != str) {
    const replaced = str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
    const str7 = replaced.replaceAll("_", " ");
    const str8 = str7.toLowerCase();
    const str9 = str8.charAt(0);
    const formatted = str9.toUpperCase();
    const str10 = str8.slice(1);
    str2 = formatted + str10.replace(/\bnitro\b/g, "Nitro");
  } else {
    str2 = "Unknown surface";
    if (null != component_type) {
      const _HermesInternal = HermesInternal;
      str2 = "Surface type " + component_type;
    }
  }
  return str2;
}
function campaignStateLabel(lifecycle_state, timestamp) {
  if (null == lifecycle_state.lifecycle_state) {
    return "Unavailable";
  } else {
    const tmp3 = campaignState(lifecycle_state, timestamp);
    const tmp4 = { 0: "Draft", 2: "Published" }[lifecycle_state.lifecycle_state];
    let combined = tmp3;
    if (null != tmp4) {
      combined = tmp3;
      if (tmp4 !== tmp3) {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp4 + " (" + tmp3 + ")";
      }
    }
    return combined;
  }
}
function componentDismissibleContents(component_type, properties) {
  if (component_type.component_type === MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET) {
    properties = properties.properties;
    let mobileBottomSheet = null;
    const getMobileBottomSheetDismissibleContent = MobileBottomSheetDismissibleContent.getMobileBottomSheetDismissibleContent;
    MobileBottomSheetDismissibleContent;
    if ("mobileBottomSheet" === properties.oneofKind) {
      mobileBottomSheet = properties.mobileBottomSheet;
    }
    const items = [getMobileBottomSheetDismissibleContent(mobileBottomSheet)];
    return items;
  } else {
    let items5;
    if (component_type.component_type === MarketingComponentType.MarketingComponentType.GIFT_ICON) {
      let items2;
      if (component_type.platform === MarketingComponentPlatform.MarketingComponentPlatform.MOBILE) {
        const items1 = [dismissible_content.DismissibleContent.GIFTING_PROMOTION_ICON];
        items2 = items1;
      } else {
        items2 = [];
      }
      items5 = items2;
    } else if (component_type.component_type === MarketingComponentType.MarketingComponentType.GIFT_ICON_COACHMARK) {
      let items4;
      if (component_type.platform === MarketingComponentPlatform.MarketingComponentPlatform.MOBILE) {
        const items3 = [dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET];
        items4 = items3;
      } else {
        items4 = [dismissible_content.DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK];
      }
      items5 = items4;
    } else {
      items5 = obj2[component_type.component_type];
      if (items5 == null) {
        items5 = [];
      }
    }
    return items5;
  }
}
function campaignDismissibleContentLabel(component_type, properties, item10028) {
  if (item10028 === dismissible_content.DismissibleContent.GUILD_BOOST_TAB_HIGHLIGHT) {
    return "Guild boost tab highlight";
  } else {
    const tmp10 = componentTypeName(component_type.component_type, properties);
    let tmp6 = tmp10;
    if (component_type.component_type === MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET) {
      let combined;
      if (item10028 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL) {
        const _HermesInternal2 = HermesInternal;
        combined = "" + tmp10 + ": announcement";
      } else if (item10028 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL) {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp10 + ": reminder";
      } else {
        const str6 = dismissible_content.DismissibleContent[item10028];
        const replaced = str6.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
        const str10 = replaced.replaceAll("_", " ");
        const str11 = str10.toLowerCase();
        const str12 = str11.charAt(0);
        const formatted = str12.toUpperCase();
        const _HermesInternal3 = HermesInternal;
        const str13 = str11.slice(1);
        combined = "" + tmp10 + ": " + formatted + str13.replace(/\bnitro\b/g, "Nitro");
      }
      tmp6 = combined;
    }
    return tmp6;
  }
}
const PremiumTypes = PremiumConstants.PremiumTypes;
let obj = { DRAFT: "Draft", UPCOMING: "Upcoming", ACTIVE: "Active", ENDED: "Ended" };
let closure_6 = { [obj.DRAFT]: "start_date", [obj.UPCOMING]: "start_date", [obj.ACTIVE]: "end_date", [obj.ENDED]: "end_date" };
let obj2 = {};
const ANNOUNCEMENT_MODAL = MarketingComponentType.MarketingComponentType.ANNOUNCEMENT_MODAL;
let items = [dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL];
obj2[ANNOUNCEMENT_MODAL] = items;
const PREMIUM_TAB = MarketingComponentType.MarketingComponentType.PREMIUM_TAB;
let items1 = [dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE];
obj2[PREMIUM_TAB] = items1;
const PREMIUM_TAB_POPOVER = MarketingComponentType.MarketingComponentType.PREMIUM_TAB_POPOVER;
let items2 = [dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL];
obj2[PREMIUM_TAB_POPOVER] = items2;
const NAGBAR = MarketingComponentType.MarketingComponentType.NAGBAR;
let items3 = [dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL];
obj2[NAGBAR] = items3;
const GIFT_REMINDER_COACHMARK = MarketingComponentType.MarketingComponentType.GIFT_REMINDER_COACHMARK;
let items4 = [dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER];
obj2[GIFT_REMINDER_COACHMARK] = items4;
const GIFT_REMINDER_NAGBAR = MarketingComponentType.MarketingComponentType.GIFT_REMINDER_NAGBAR;
let items5 = [dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER];
obj2[GIFT_REMINDER_NAGBAR] = items5;
const SHOP_NAGBAR = MarketingComponentType.MarketingComponentType.SHOP_NAGBAR;
const items6 = [dismissible_content.DismissibleContent.PREMIUM_SHOP_NAGBAR_NOTICE];
obj2[SHOP_NAGBAR] = items6;
const SHOP_TAB_TOOLTIP = MarketingComponentType.MarketingComponentType.SHOP_TAB_TOOLTIP;
const items7 = [dismissible_content.DismissibleContent.SHOP_TAB_TOOLTIP];
obj2[SHOP_TAB_TOOLTIP] = items7;
const SHOP_COACHMARK = MarketingComponentType.MarketingComponentType.SHOP_COACHMARK;
const items8 = [dismissible_content.DismissibleContent.SHOP_TAB_TOOLTIP];
obj2[SHOP_COACHMARK] = items8;
const GUILD_HEADER_COACHMARK = MarketingComponentType.MarketingComponentType.GUILD_HEADER_COACHMARK;
const items9 = [dismissible_content.DismissibleContent.GUILD_HEADER_COACHMARK];
obj2[GUILD_HEADER_COACHMARK] = items9;
const GUILD_BOOST_TAB_BANNER = MarketingComponentType.MarketingComponentType.GUILD_BOOST_TAB_BANNER;
const items10 = [dismissible_content.DismissibleContent.GUILD_BOOST_TAB_BANNER, dismissible_content.DismissibleContent.GUILD_BOOST_TAB_HIGHLIGHT];
obj2[GUILD_BOOST_TAB_BANNER] = items10;
let result = size.fileFinishedImporting("modules/devtools/CampaignDevToolsUtils.tsx");

export function filterCampaigns(campaigns, query, arg2) {
  let items;
  obj2 = {
    keys: items,
    sorter(arr) {
      return arr.sort((index, index2) => index.index - index2.index);
    }
  };
  items = [arg2, "id"];
  obj = _extends;
  return obj.matchSorter(campaigns, query, obj2);
}
export function groupCampaigns(arg0) {
  let closure_0 = arg0;
  let closure_1 = Date.now();
  const values = Object.values(obj);
  const mapped = values.map((label) => {
    let found;
    closure_0 = label;
    obj = {
      label,
      campaigns: found.sort((arg0, arg1) => {
        let num = Infinity;
        if (label === obj.ENDED) {
          num = -Infinity;
        }
        let tmp3 = null;
        if (null != arg1[closure_6[label]]) {
          const _Date = Date;
          const parsed = Date.parse(tmp2);
          const _Number = Number;
          let tmp6 = null;
          if (!Number.isNaN(parsed)) {
            tmp6 = parsed;
          }
          tmp3 = tmp6;
        }
        if (tmp3 == null) {
          tmp3 = num;
        }
        let tmp8 = null;
        if (null != arg0[closure_6[label]]) {
          const _Date2 = Date;
          const parsed1 = Date.parse(tmp7);
          const _Number2 = Number;
          let tmp11 = null;
          if (!Number.isNaN(parsed1)) {
            tmp11 = parsed1;
          }
          tmp8 = tmp11;
        }
        if (tmp8 == null) {
          tmp8 = num;
        }
        return tmp3 - tmp8;
      })
    };
    found = closure_0.filter((item) => campaignState(item, closure_1) === label);
    return obj;
  });
  return mapped.filter((campaigns) => campaigns.campaigns.length > 0);
}
export function resolveCampaignComponents(components, arg1, arg2, endDate, arg4) {
  let closure_0;
  _require = arg1;
  let closure_1 = arg2;
  dependencyMap = endDate;
  let closure_3 = arg4;
  const MOBILE = require("MarketingComponentPlatform").MarketingComponentPlatform.MOBILE;
  let found = components.filter((platform) => {
    let tmp = platform.platform === MOBILE;
    if (tmp) {
      obj = ProtoUtils;
      tmp = !obj.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, platform.properties).isDefaultBase;
    }
    return tmp;
  });
  map = new Map();
  const iter = found[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let component_type = nextResult.component_type;
    let tmp3 = nextResult;
    let tmp4 = component_type;
    let items = map.get(component_type);
    if (items == null) {
      items = [];
    }
    let arr = items.push(tmp3);
    let tmp7 = component_type;
    let result = map.set(tmp4, items);
    continue;
  }
  const arr3 = Array.from(map.values());
  return arr3.flatMap((arr) => {
    let found = arr.filter((premium_type) => {
      let flag = false;
      if (null != premium_type.premium_type) {
        let isPremiumExactlyResult;
        let premiumState;
        if (0 === premium_type.premium_type) {
          obj2 = closure_0(endDate[9]);
          isPremiumExactlyResult = !obj2.isPremium(tmp);
        } else {
          obj = closure_0(endDate[9]);
          isPremiumExactlyResult = obj.isPremiumExactly(tmp, premium_type.premium_type);
        }
        if (undefined !== closure_1_3) {
          let num2 = tmp2;
          premium_type = premium_type.premium_type;
          if (closure_1_3 == null) {
            num2 = 0;
          }
          isPremiumExactlyResult = premium_type === num2;
        }
        if (undefined === closure_1_3) {
          premiumState = tmp.premiumState;
        } else if (null === closure_1_3) {
          premiumState = { premiumSource: closure_0(endDate[7]).PremiumSource.NONE, premiumSubscriptionType: closure_0(endDate[8]).PremiumSubscriptionType.NONE };
          const obj3 = { premiumSource: closure_0(endDate[7]).PremiumSource.NONE, premiumSubscriptionType: closure_0(endDate[8]).PremiumSubscriptionType.NONE };
        } else {
          const obj4 = {};
          obj4[MOBILE.TIER_0] = closure_0(endDate[8]).PremiumSubscriptionType.TIER_0;
          obj4[MOBILE.TIER_1] = closure_0(endDate[8]).PremiumSubscriptionType.TIER_1;
          obj4[MOBILE.TIER_2] = closure_0(endDate[8]).PremiumSubscriptionType.TIER_2;
          premiumState = { premiumSource: closure_0(endDate[7]).PremiumSource.SUBSCRIPTION, premiumSubscriptionType: obj4[closure_1_3] };
        }
        if (isPremiumExactlyResult) {
          let premiumSource;
          if (premiumState != null) {
            premiumSource = premiumState.premiumSource;
          }
          isPremiumExactlyResult = null == premiumSource || premium_type.premium_source === premiumState.premiumSource;
        }
        if (isPremiumExactlyResult) {
          let prop;
          if (premiumState != null) {
            prop = premiumState.premiumSubscriptionType;
          }
          isPremiumExactlyResult = null == prop || premium_type.premium_subscription_type === premiumState.premiumSubscriptionType;
        }
        flag = isPremiumExactlyResult;
      }
      return flag;
    });
    if (found.length <= 0) {
      found = arr.filter((premium_type) => null == premium_type.premium_type && null == premium_type.premium_source && null == premium_type.premium_subscription_type);
    }
    return found.map(function(id) {
      let date;
      const resolveLocalizedProperties = closure_0(closure_2[6]).resolveLocalizedProperties;
      closure_0(closure_2[6]);
      let tmp4 = null;
      obj = closure_0(closure_2[4]);
      const localizedProperties = resolveLocalizedProperties(obj.b64ToProto(closure_0(closure_2[5]).PremiumMarketingComponentProperties, id.properties), closure_1_1);
      const tmp = closure_1_2;
      if (null != closure_1_2) {
        const _Date = Date;
        const parsed = Date.parse(tmp);
        const _Number = Number;
        let tmp7 = null;
        if (!Number.isNaN(parsed)) {
          tmp7 = parsed;
        }
        tmp4 = tmp7;
      }
      obj2 = { id: id.id, componentType: id.component_type, properties: localizedProperties, promotionId: id.promotion_id, startDate: null, endDate: null, effectiveStartDate: null, effectiveEndDate: null, promotionEndDate: date, promotionPriority: 0 };
      date = null;
      const tmp8 = closure_3;
      if (null != tmp4) {
        const _Date2 = Date;
        const self = this;
        const self2 = this;
        date = new Date(tmp4);
      }
      const tmp82 = new tmp8(obj2);
      return tmp82;
    });
  });
}
export function resolveCampaignPreviewComponents(stateFromStoresArray, stateFromStores1, end_date) {
  _require = stateFromStores1;
  let closure_1 = end_date;
  let MOBILE = arg3;
  if (arg3 === undefined) {
    let tmp = _require;
    MOBILE = require("MarketingComponentPlatform").MarketingComponentPlatform.MOBILE;
  }
  const found = stateFromStoresArray.filter((platform) => {
    let tmp = platform.platform === MOBILE;
    if (tmp) {
      obj = ProtoUtils;
      tmp = !obj.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, platform.properties).isDefaultBase;
    }
    return tmp;
  });
  return found.map(function(id) {
    let date;
    const resolveLocalizedProperties = resolveLocalizedProperties2.resolveLocalizedProperties;
    resolveLocalizedProperties2;
    let tmp4 = null;
    obj = ProtoUtils;
    const localizedProperties = resolveLocalizedProperties(obj.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, id.properties), stateFromStores1);
    const tmp = end_date;
    if (null != end_date) {
      const _Date = Date;
      const parsed = Date.parse(tmp);
      const _Number = Number;
      let tmp7 = null;
      if (!Number.isNaN(parsed)) {
        tmp7 = parsed;
      }
      tmp4 = tmp7;
    }
    obj2 = { id: id.id, componentType: id.component_type, properties: localizedProperties, promotionId: id.promotion_id, startDate: null, endDate: null, effectiveStartDate: null, effectiveEndDate: null, promotionEndDate: date, promotionPriority: 0 };
    date = null;
    const tmp8 = MarketingComponentRecord;
    if (null != tmp4) {
      const _Date2 = Date;
      const self = this;
      const self2 = this;
      date = new Date(tmp4);
    }
    const tmp82 = new tmp8(obj2);
    return tmp82;
  });
}
export function campaignDetails(found, stateFromStoresArray) {
  const timestamp = Date.now();
  map = new Map();
  found = stateFromStoresArray.filter((properties) => {
    obj = ProtoUtils;
    return !obj.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, properties.properties).isDefaultBase;
  });
  const everyResult = found.every((surface_id) => null != surface_id.surface_id);
  const require = everyResult;
  const iter = found[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let id = nextResult.surface_id;
    set = map.set;
    if (id == null) {
      id = tmp4.id;
    }
    let result = set(id, tmp4);
    continue;
  }
  map1 = new Map();
  let num = 0;
  const values = map.values();
  const iter2 = values[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp10 = nextResult1;
    let tmp13 = componentTypeName(nextResult1.component_type, componentProperties(nextResult1));
    set2 = map1.set;
    let num2 = map1.get(tmp13);
    if (num2 == null) {
      num2 = 0;
    }
    let set2Result = set2(tmp13, num2 + 1);
    if (surfaceIsTimed(tmp10)) {
      num = num + 1;
    }
    continue;
  }
  obj = { label: "Starts", value: campaignLocalDate(found.start_date) };
  const items = [obj, { label: "Ends", value: campaignLocalDate(found.end_date) }, ];
  ({ label: "Ends", value: campaignLocalDate(found.end_date) });
  items[2] = { label: "State", value: campaignStateLabel(found, timestamp) };
  ({ label: "State", value: campaignStateLabel(found, timestamp) });
  if (null != found.localization_status) {
    let str = { 0: "Draft", 1: "Out for localization", 2: "Localized" }[found.localization_status];
    const push = items.push;
    if (str == null) {
      str = "Unknown";
    }
    const obj4 = { label: "Localization", value: str };
    push(obj4);
  }
  const push2 = items.push;
  let str2 = "Unavailable";
  if (everyResult) {
    const _String = String;
    str2 = String(map.size);
  }
  const items1 = [{ label: "Surfaces", value: str2 }, ];
  const arr2 = Array.from(map1);
  const sorted = arr2.sort((arg0, arg1) => {
    let tmp;
    [obj] = arg0;
    [tmp] = arg1;
    return obj.localeCompare(tmp);
  });
  let str3 = "Timed variants";
  const arraySpreadResult = HermesBuiltin.arraySpread(items1, sorted.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    let combined = tmp;
    if (!require) {
      const _HermesInternal = HermesInternal;
      combined = "" + tmp + " variants";
    }
    obj = { label: combined, value: String(tmp2) };
    return obj;
  }), 1);
  if (everyResult) {
    str3 = "Timed surfaces";
  }
  items1[arraySpreadResult] = { label: str3, value: String(num) };
  ({ label: str3, value: String(num) });
  push2.apply(items1);
  return items;
}
export function campaignPreviewActions(arr, stateFromStoresArray, found) {
  let closure_0 = found;
  map = new Map(stateFromStoresArray.map((id) => {
    const items = [id.id, id];
    return items;
  }));
  set = new Set();
  return arr.flatMap(function(componentType) {
    let items;
    if (componentType.componentType !== MarketingComponentType.MarketingComponentType.ANNOUNCEMENT_MODAL) {
      if (componentType.componentType !== MarketingComponentType.MarketingComponentType.MOBILE_BOTTOM_SHEET) {
        return [];
      }
    }
    const value = map.get(componentType.id);
    obj = map;
    if (null != value) {
      const tmpResult = ProtoUtils;
      if (tmpResult.b64ToProto(premium_marketing_component_properties.PremiumMarketingComponentProperties, value.properties).isDefaultBase) {
        return [];
      }
    }
    const combined = "" + componentType.componentType + ":" + componentType.id;
    const obj3 = set;
    if (set.has(combined)) {
      items = [];
    } else {
      obj3.add(combined);
      obj2 = { component: componentType };
      const value2 = obj.get(componentType.id);
      let str = "Unknown";
      if (null != value2) {
        let str2 = "Everyone";
        if (null != value2.premium_type) {
          let str3 = "Non-Nitro";
          if (0 !== value2.premium_type) {
            let str4 = "Nitro Basic";
            if (value2.premium_type !== PremiumTypes.TIER_0) {
              let str5 = "Nitro Classic";
              if (value2.premium_type !== PremiumTypes.TIER_1) {
                let str6 = "Nitro";
                if (value2.premium_type !== PremiumTypes.TIER_2) {
                  const _HermesInternal = HermesInternal;
                  str6 = "Premium tier " + value2.premium_type;
                }
                str5 = str6;
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        str = str2;
      }
      let str8 = "Unavailable";
      let str9 = "Unavailable";
      if (null != value2) {
        str9 = "Untimed";
        const tmp9 = null != (undefined === value2.surface_start_date ? value2.start_date : value2.surface_start_date) || null != (undefined === value2.surface_end_date ? value2.end_date : value2.surface_end_date);
        if (tmp9) {
          let tmp10 = undefined === value2.surface_start_date ? value2.start_date : value2.surface_start_date;
          let tmp11 = undefined === value2.surface_end_date ? value2.end_date : value2.surface_end_date;
          if (tmp10 == null) {
            let start_date;
            if (found != null) {
              start_date = tmp7.start_date;
            }
            tmp10 = start_date;
          }
          let str10 = "Not set";
          let str11 = "Not set";
          if (null !== tmp10) {
            let tmp15 = null;
            if (null != tmp10) {
              const _Date = Date;
              const parsed = Date.parse(tmp10);
              const _Number = Number;
              let tmp14 = null;
              if (!Number.isNaN(parsed)) {
                tmp14 = parsed;
              }
              tmp15 = tmp14;
            }
            let toLocaleStringResult = str8;
            if (null != tmp15) {
              const _Date2 = Date;
              const self = this;
              const self2 = this;
              const date = new Date(tmp15);
              toLocaleStringResult = date.toLocaleString(tmp(1113).intl.currentLocale, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
            }
            str11 = toLocaleStringResult;
          }
          if (tmp11 == null) {
            let end_date;
            if (found != null) {
              end_date = tmp7.end_date;
            }
            tmp11 = end_date;
          }
          if (null !== tmp11) {
            let tmp22 = null;
            if (null != tmp11) {
              const _Date3 = Date;
              const parsed1 = Date.parse(tmp11);
              const _Number2 = Number;
              let tmp21 = null;
              if (!Number.isNaN(parsed1)) {
                tmp21 = parsed1;
              }
              tmp22 = tmp21;
            }
            if (null != tmp22) {
              const _Date4 = Date;
              const self3 = this;
              const self4 = this;
              const date1 = new Date(tmp22);
              str8 = date1.toLocaleString(tmp(1113).intl.currentLocale, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
            }
            str10 = str8;
          }
          const _HermesInternal2 = HermesInternal;
          str9 = "" + str11 + " to " + str10;
        }
      }
      let experiment_id;
      if (value2 != null) {
        experiment_id = value2.experiment_id;
      }
      let tmp26 = null;
      if (null != experiment_id) {
        tmp26 = null;
        if (null != value2.experiment_variation_id) {
          const experiment_variation_id = value2.experiment_variation_id;
          let str13 = "Control";
          if (0 !== experiment_variation_id) {
            const _HermesInternal3 = HermesInternal;
            str13 = "Treatment " + experiment_variation_id;
          }
          tmp26 = str13;
        }
      }
      const properties = componentType.properties.properties;
      let str16 = "";
      if ("announcementModalVariant1" === properties.oneofKind) {
        str16 = properties.announcementModalVariant1.header;
      }
      if ("mobileBottomSheet" === properties.oneofKind) {
        str16 = properties.mobileBottomSheet.header;
      }
      let content = componentTypeName(componentType.componentType, componentType.properties);
      let tmp29 = content;
      if ("" !== str16.trim()) {
        const tmpResult2 = MarketingStringFormat;
        const result = tmpResult2.formatMarketingPlainString(str16, componentType.getFormatVariableValues(tmp(1113).intl.currentLocale));
        if (result.ok) {
          content = result.content;
        }
        tmp29 = content;
      }
      const obj4 = { title: tmp29, target: str, timing: str9, variant: tmp26 };
      const merged = Object.assign(obj4);
      items = [obj2];
    }
    return items;
  });
}
export function groupCampaignPreviewActions(found1) {
  map = new Map();
  const iter = found1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let items = map.get(nextResult.title);
    if (items == null) {
      items = [];
    }
    let arr = items.push(tmp2);
    let result = map.set(tmp2.title, items);
    continue;
  }
  return Array.from(map, (arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return { title, variants };
  });
}
export function campaignDismissibleContents(arg0) {
  function add(item10028, arg1) {
    set = map.get(item10028);
    obj = map;
    if (set == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    }
    set.add(arg1);
    const result = obj.set(item10028, set);
  }
  map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp5 = componentProperties(nextResult);
    let tmp6 = tmp5;
    if (!tmp5.isDefaultBase) {
      let tmp10 = componentDismissibleContents(tmp3, tmp6);
      for (const item10028 of tmp10) {
        let addResult = add(item10028, campaignDismissibleContentLabel(tmp3, tmp6, item10028));
        continue;
      }
    }
    continue;
  }
  return Array.from(map, (arg0) => {
    let arr;
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    obj = { content: tmp, label: arr.join(", ") };
    arr = Array.from(tmp2);
    return obj;
  });
}
export function campaignPromotionDismissalStatus(arg0, lastDismissedObjectId) {
  let lastDismissedAtMs;
  let tmp = null != lastDismissedObjectId;
  if (tmp) {
    obj = SnowflakeUtilsDefault;
    tmp = obj.compare(arg0, lastDismissedObjectId.lastDismissedObjectId) <= 0;
  }
  if (lastDismissedObjectId != null) {
    lastDismissedAtMs = lastDismissedObjectId.lastDismissedAtMs;
  }
  let str = "Not dismissed";
  if (tmp) {
    const _Number = Number;
    const NumberResult = Number(lastDismissedAtMs);
    const _Number2 = Number;
    let str3 = "Dismissed";
    if (Number.isFinite(NumberResult)) {
      str3 = "Dismissed";
      if (NumberResult > 0) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(NumberResult);
        const toISOStringResult = date.toISOString();
        let str4 = "Not set";
        if (null !== toISOStringResult) {
          let tmp12 = null;
          if (null != toISOStringResult) {
            const _Date2 = Date;
            const parsed = Date.parse(toISOStringResult);
            const _Number3 = Number;
            let tmp11 = null;
            if (!Number.isNaN(parsed)) {
              tmp11 = parsed;
            }
            tmp12 = tmp11;
          }
          let str5 = "Unavailable";
          if (null != tmp12) {
            const _Date3 = Date;
            const self3 = this;
            const self4 = this;
            const date1 = new Date(tmp12);
            str5 = date1.toLocaleString(intl.intl.currentLocale, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
          }
          str4 = str5;
        }
        const _HermesInternal = HermesInternal;
        str3 = "Dismissed: " + str4;
      }
    }
    str = str3;
  }
  return str;
}
