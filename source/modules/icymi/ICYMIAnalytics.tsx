// Module ID: 8322
// Function ID: 65938
// Name: listItemToType
// Dependencies: []

// Module 8322 (listItemToType)
function listItemToType(data) {
  const kind = data.data.kind;
  if ("end" === kind) {
    return "end";
  } else if ("loading" === kind) {
    return "loading";
  } else {
    let str10 = "message";
    if ("message" === kind) {
      if (data.channelType === constants.GUILD_ANNOUNCEMENT) {
        str10 = "announcement";
      }
      return str10;
    } else if ("guildEvent" === kind) {
      return "guild_event";
    } else if ("contentInventory" === kind) {
      let str8 = "hotwheels_gaming_activity";
      if (data.data.content.content_type === arg1(dependencyMap[2]).ContentInventoryEntryType.CUSTOM_STATUS) {
        str8 = "hotwheels_custom_status";
      }
      return str8;
    } else if ("recommendedGuilds" === kind) {
      return "recommended_guilds";
    } else if ("forumThread" === kind) {
      return "forum_thread";
    } else if ("icymiHeader" === kind) {
      return "icymi_header";
    } else {
      return "unknown";
    }
  }
}
function dehydratedItemToType(type) {
  type = type.type;
  if (arg1(dependencyMap[3]).ICYMIItemTypes.MESSAGE === type) {
    let str5 = "message";
    if (type.data.channel_type === constants.GUILD_ANNOUNCEMENT) {
      str5 = "announcement";
    }
    return str5;
  } else if (arg1(dependencyMap[3]).ICYMIItemTypes.ACTIVITY === type) {
    return "hotwheels_gaming_activity";
  } else if (arg1(dependencyMap[3]).ICYMIItemTypes.CUSTOM_STATUS === type) {
    return "hotwheels_custom_status";
  } else if (arg1(dependencyMap[3]).ICYMIItemTypes.GUILD_EVENT === type) {
    return "guild_event";
  } else if (arg1(dependencyMap[3]).ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
    return "recommended_guilds";
  }
}
let closure_3 = importDefault(dependencyMap[0]);
({ ChannelTypes: closure_4, AnalyticEvents: closure_5 } = arg1(dependencyMap[1]));
const obj = {
  trackItemInteraction(itemId, itemType, actionType) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), feed_item_type: itemId.type, feed_item_id: itemId.id, home_session_id: "gravity", action_type: itemId.actionType, feed_item_index: store.getIndexInHydratedFeed(itemId.id), icymi_session_id: itemId.icymiSessionId, impression_id: itemId.impressionId, ux_variation: itemId.uxVariation, session_interaction_index: itemId.sessionInteractionIndex };
    obj.track(closure_5.FEED_ITEM_INTERACTED, obj);
  },
  trackItemShortImpression(viewableItems, viewableFeedItemsArray, stateFromStores) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), home_session_id: "gravity", feed_item_ids: viewableItems.map((item) => item.item.id), feed_item_types: viewableItems.map((item) => callback(item.item)), num_items: viewableItems.length, all_feed_item_ids: viewableFeedItemsArray.map((id) => id.id), all_feed_item_types: viewableFeedItemsArray.map((type) => type.type), num_all_items: viewableFeedItemsArray.length, all_feed_item_indices: viewableFeedItemsArray.map((arg0, arg1) => arg1), feed_version: stateFromStores, version: 3 };
    obj.track(closure_5.FEED_ITEM_SEEN_BATCH, obj);
  },
  trackItemLongImpression(viewableItems, viewableFeedItemsArray, stateFromStores) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), home_session_id: "gravity", feed_item_ids: viewableItems.map((item) => item.item.id), feed_item_types: viewableItems.map((item) => callback(item.item)), num_items: viewableItems.length, all_feed_item_ids: viewableFeedItemsArray.map((id) => id.id), all_feed_item_types: viewableFeedItemsArray.map((type) => type.type), num_all_items: viewableFeedItemsArray.length, all_feed_item_indices: viewableFeedItemsArray.map((arg0, arg1) => arg1), feed_version: stateFromStores, version: 3 };
    obj.track(closure_5.FEED_ITEM_SEEN_LONG, obj);
  },
  trackFeedLoaded(unreadFeedItems) {
    const items = [];
    const arg1 = items;
    const items1 = [];
    const importDefault = items1;
    const items2 = [];
    const dependencyMap = items2;
    const items3 = [];
    let closure_3 = items3;
    unreadFeedItems = unreadFeedItems.unreadFeedItems;
    const item = unreadFeedItems.forEach((id) => {
      items.push(id.id);
      items2.push(callback(id));
    });
    const readFeedItems = unreadFeedItems.readFeedItems;
    const item1 = readFeedItems.forEach((id) => {
      items1.push(id.id);
      items3.push(callback(id));
    });
    let obj = importDefault(dependencyMap[4]);
    obj = {};
    const merged = Object.assign(unreadFeedItems.newTrackingProps);
    obj["home_session_id"] = unreadFeedItems.homeSessionId;
    obj["tab_badged"] = unreadFeedItems.hasNewContent;
    obj["unread_feed_item_ids"] = items;
    obj["read_feed_item_ids"] = items1;
    obj["unread_feed_item_types"] = items2;
    obj["read_feed_item_types"] = items3;
    obj.track(closure_5.FEED_LOADED, obj);
  },
  trackFeedShown(homeSessionId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), home_session_id: homeSessionId.homeSessionId, variant: homeSessionId.variant };
    obj.track(closure_5.FEED_SHOWN, obj);
  },
  trackFeedFirstScrollStarted() {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), home_session_id: "gravity" };
    obj.track(closure_5.HOME_FIRST_SCROLL_STARTED, obj);
  },
  trackFeedFeedbackPromptViewed() {
    importDefault(dependencyMap[4]).track(closure_5.HOME_FEEDBACK_PROMPT_VIEWED);
  },
  trackFeedFeedbackSubmitted(arg0) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), home_session_id: "gravity" };
    const merged = Object.assign(arg0);
    obj.track(closure_5.HOME_FEEDBACK_SUBMITTED, obj);
  },
  trackFeedOnboardingScreenSkipped(location) {
    let obj = importDefault(dependencyMap[4]);
    obj = { location: location.location };
    obj.track(closure_5.ICYMI_ONBOARDING_SCREEN_SKIPPED, obj);
  },
  trackFeedOnboardingGuildToggled(guildId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { guild_id: guildId.guildId, toggled: guildId.toggled };
    obj.track(closure_5.ICYMI_ONBOARDING_GUILD_TOGGLED, obj);
  },
  trackFeedOnboardingCategoryToggled(categoryId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { category_id: categoryId.categoryId, toggled: categoryId.toggled };
    obj.track(closure_5.ICYMI_ONBOARDING_CATEGORY_TOGGLED, obj);
  },
  trackFeedEmptyLoadingSeen() {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), version: store.getVersion() };
    obj.track(closure_5.ICYMI_FEED_EMPTY_LOADING_SEEN, obj);
  },
  trackFeedEmptyLoadingComplete(dwellTimeMs) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), dwell_time_ms: dwellTimeMs.dwellTimeMs, version: store.getVersion() };
    obj.track(closure_5.ICYMI_FEED_EMPTY_LOADING_COMPLETE, obj);
  },
  trackFeedEmptyLoadingAbandoned(dwellTimeMs) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), dwell_time_ms: dwellTimeMs.dwellTimeMs, version: store.getVersion() };
    obj.track(closure_5.ICYMI_FEED_EMPTY_LOADING_ABANDONED, obj);
  },
  trackFeedSessionStarted(sessionStartTimeMs) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), version: store.getVersion(), session_start_time_ms: sessionStartTimeMs.sessionStartTimeMs, icymi_session_id: sessionStartTimeMs.icymiSessionId, previous_icymi_session_count: sessionStartTimeMs.previousIcymiSessionCount, ux_variation: sessionStartTimeMs.uxVariation };
    obj.track(closure_5.FEED_SESSION_STARTED, obj);
  },
  trackFeedSessionCompleted(sessionDurationMs) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), version: store.getVersion(), session_duration_ms: sessionDurationMs.sessionDurationMs, session_start_time_ms: sessionDurationMs.sessionStartTimeMs, session_end_time_ms: sessionDurationMs.sessionEndTimeMs, impression_count: sessionDurationMs.impressionCount, unique_impression_count: sessionDurationMs.uniqueImpressionCount, icymi_session_id: sessionDurationMs.icymiSessionId, feed_reload_count: sessionDurationMs.feedReloadCount, feed_visible_items_changed_count: sessionDurationMs.feedDwelledItemsChangedCount, feed_fetch_count: sessionDurationMs.feedFetchCount, impression_item_types: sessionDurationMs.impressionItemTypes, latest_dwell_start_time_ms: sessionDurationMs.latestDwellStartTimeMs, previous_icymi_session_count: sessionDurationMs.previousIcyMiSessionCount, ux_variation: sessionDurationMs.uxVariation, interaction_count: sessionDurationMs.interactionCount, dwelled_count: sessionDurationMs.dwelledCount, unique_dwelled_count: sessionDurationMs.uniqueDwelledCount };
    obj.track(closure_5.FEED_SESSION_COMPLETED, obj);
  },
  trackFeedItemDwell1s(impressionId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), version: store.getVersion(), impression_id: impressionId.impressionId, item_id: impressionId.itemId, item_type: impressionId.itemType, dwell_start_time_ms: impressionId.dwellStartTimeMs, icymi_session_id: impressionId.icymiSessionId, trigger_type: impressionId.triggerType, item_occurence_count_in_session: impressionId.itemOccurenceCountInSession, item_feed_index: impressionId.itemFeedIndex, is_initially_visible: impressionId.isInitiallyVisible, item_score: impressionId.itemScore };
    const itemChannelType = impressionId.itemChannelType;
    let tmp = null;
    if (null != itemChannelType) {
      tmp = itemChannelType;
    }
    obj.item_channel_type = tmp;
    ({ itemCardHeight: obj2.item_card_height, isDwelling: obj2.is_dwelling, interactionActionTypes: obj2.interaction_action_types, interactionCount: obj2.interaction_count, uxVariation: obj2.ux_variation, sessionImpressionIndex: obj2.session_impression_index } = impressionId);
    obj.track(closure_5.FEED_ITEM_1S_DWELLED, obj);
  },
  trackFeedItemDwelled(impressionId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), version: store.getVersion(), impression_id: impressionId.impressionId, dwell_time_ms: impressionId.dwellTimeMs, item_id: impressionId.itemId, item_type: impressionId.itemType, dwell_start_time_ms: impressionId.dwellStartTimeMs, dwell_end_time_ms: impressionId.dwellEndTimeMs, icymi_session_id: impressionId.icymiSessionId, trigger_type: impressionId.triggerType, item_occurence_count_in_session: impressionId.itemOccurenceCountInSession, item_feed_index: impressionId.itemFeedIndex, is_initially_visible: impressionId.isInitiallyVisible, item_score: impressionId.itemScore };
    const itemChannelType = impressionId.itemChannelType;
    let tmp = null;
    if (null != itemChannelType) {
      tmp = itemChannelType;
    }
    obj.item_channel_type = tmp;
    ({ itemCardHeight: obj2.item_card_height, uxVariation: obj2.ux_variation, interactionActionTypes: obj2.interaction_action_types, interactionCount: obj2.interaction_count, sessionImpressionIndex: obj2.session_impression_index } = impressionId);
    obj.track(closure_5.FEED_ITEM_DWELLED, obj);
  },
  trackFeedItemActioned(icymiSessionId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), icymi_session_id: icymiSessionId.icymiSessionId, ux_variation: icymiSessionId.uxVariation, version: store.getVersion(), session_action_index: icymiSessionId.sessionActionIndex, item_id: icymiSessionId.itemId, item_type: icymiSessionId.itemType };
    const impressionId = icymiSessionId.impressionId;
    let tmp = null;
    if (null != impressionId) {
      tmp = impressionId;
    }
    obj.impression_id = tmp;
    obj.action_gesture_type = icymiSessionId.actionParameters.actionGestureType;
    obj.action_target_element = icymiSessionId.actionParameters.actionTargetElement;
    obj.action_intent_type = icymiSessionId.actionParameters.actionIntentType;
    obj.action_destination_type = icymiSessionId.actionParameters.actionDestinationType;
    obj.track(closure_5.FEED_ITEM_ACTIONED, obj);
  },
  trackFeedFilterActioned(icymiSessionId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), icymi_session_id: icymiSessionId.icymiSessionId, ux_variation: icymiSessionId.uxVariation, version: store.getVersion(), session_action_index: icymiSessionId.sessionActionIndex, filter_setting_context: icymiSessionId.filterParameters.filterSettingContext, filter_target_type: icymiSessionId.filterParameters.filterTargetType };
    const targetGuildId = icymiSessionId.filterParameters.targetGuildId;
    let tmp = null;
    if (null != targetGuildId) {
      tmp = targetGuildId;
    }
    obj.target_guild_id = tmp;
    const targetChannelId = icymiSessionId.filterParameters.targetChannelId;
    let tmp2 = null;
    if (null != targetChannelId) {
      tmp2 = targetChannelId;
    }
    obj.target_channel_id = tmp2;
    const previousTuneSetting = icymiSessionId.filterParameters.previousTuneSetting;
    let tmp3 = null;
    if (null != previousTuneSetting) {
      tmp3 = previousTuneSetting;
    }
    obj.previous_tune_setting = tmp3;
    const newTuneSetting = icymiSessionId.filterParameters.newTuneSetting;
    let tmp4 = null;
    if (null != newTuneSetting) {
      tmp4 = newTuneSetting;
    }
    obj.new_tune_setting = tmp4;
    const previousOutSetting = icymiSessionId.filterParameters.previousOutSetting;
    let tmp5 = null;
    if (null != previousOutSetting) {
      tmp5 = previousOutSetting;
    }
    obj.previous_out_setting = tmp5;
    const newOutSetting = icymiSessionId.filterParameters.newOutSetting;
    let tmp6 = null;
    if (null != newOutSetting) {
      tmp6 = newOutSetting;
    }
    obj.new_out_setting = tmp6;
    const itemId = icymiSessionId.itemId;
    let tmp7 = null;
    if (null != itemId) {
      tmp7 = itemId;
    }
    obj.item_id = tmp7;
    const itemType = icymiSessionId.itemType;
    let tmp8 = null;
    if (null != itemType) {
      tmp8 = itemType;
    }
    obj.item_type = tmp8;
    const impressionId = icymiSessionId.impressionId;
    let tmp9 = null;
    if (null != impressionId) {
      tmp9 = impressionId;
    }
    obj.impression_id = tmp9;
    obj.track(closure_5.FEED_FILTER_ACTIONED, obj);
  },
  trackFeedPageActioned(icymiSessionId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { load_id: store.getLoadId(), icymi_session_id: icymiSessionId.icymiSessionId, ux_variation: icymiSessionId.uxVariation, version: store.getVersion(), session_action_index: icymiSessionId.sessionActionIndex, action_gesture_type: icymiSessionId.actionParameters.actionGestureType, action_target_element: icymiSessionId.actionParameters.actionTargetElement, action_intent_type: icymiSessionId.actionParameters.actionIntentType, action_destination_type: icymiSessionId.actionParameters.actionDestinationType };
    obj.track(closure_5.FEED_PAGE_ACTIONED, obj);
  }
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/icymi/ICYMIAnalytics.tsx");

export const DEFAULT_UX_VARIATION = "default";
export const ICYMIAnalytics = obj;
