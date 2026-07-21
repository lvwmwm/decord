// Module ID: 8260
// Function ID: 65139
// Name: getProfileProperties
// Dependencies: []
// Exports: maybeTrackUserProfileUiViewed, trackDmProfileToggled, trackUserProfileActivityAction, trackUserProfileActivityJoined, trackUserProfileBadgeAction, trackUserProfileEditAction, trackUserProfileEditSaved, trackUserProfileWishlistAction

// Module 8260 (getProfileProperties)
function getProfileProperties(arg0) {
  let guildMember;
  let guildMemberProfile;
  let user;
  let userProfile;
  ({ user, userProfile, guildMember, guildMemberProfile } = arg0);
  if (null != userProfile) {
    guildMemberProfile = userProfile;
  }
  const items = [];
  let nick;
  if (null != guildMember) {
    nick = guildMember.nick;
  }
  if (Boolean(nick)) {
    items.push(constants.NICKNAME);
  }
  let pronouns;
  if (null != guildMemberProfile) {
    pronouns = guildMemberProfile.pronouns;
  }
  if (Boolean(pronouns)) {
    items.push(constants.PRONOUNS);
  }
  let avatar;
  if (null != user) {
    avatar = user.avatar;
  }
  if (!Boolean(avatar)) {
    let banner;
    if (null != guildMemberProfile) {
      banner = guildMemberProfile.banner;
    }
    if (!Boolean(banner)) {
      let bio;
      if (null != guildMemberProfile) {
        bio = guildMemberProfile.bio;
      }
      if (Boolean(bio)) {
        items.push(constants.BIO);
      }
      let themeColors;
      if (null != guildMemberProfile) {
        themeColors = guildMemberProfile.themeColors;
      }
      let tmp23 = null != themeColors;
      if (tmp23) {
        const themeColors1 = guildMemberProfile.themeColors;
        tmp23 = undefined !== themeColors1.find((arg0) => null !== arg0);
      }
      if (tmp23) {
        items.push(constants.THEME);
      }
      let avatarDecoration;
      if (null != user) {
        avatarDecoration = user.avatarDecoration;
      }
      if (null != avatarDecoration) {
        items.push(constants.AVATAR_DECORATION);
      }
      let profileEffect;
      if (null != guildMemberProfile) {
        profileEffect = guildMemberProfile.profileEffect;
      }
      if (null != profileEffect) {
        items.push(constants.PROFILE_EFFECT);
      }
      return items;
    } else {
      let banner1;
      if (null != guildMemberProfile) {
        banner1 = guildMemberProfile.banner;
      }
      items.push(arg1(dependencyMap[12]).isAnimatedIconHash(banner1) ? constants.ANIMATED_BANNER : constants.BANNER);
      const obj2 = arg1(dependencyMap[12]);
    }
  } else {
    let avatar1;
    if (null != user) {
      avatar1 = user.avatar;
    }
    items.push(arg1(dependencyMap[12]).isAnimatedIconHash(avatar1) ? constants.ANIMATED_AVATAR : constants.AVATAR);
    const obj = arg1(dependencyMap[12]);
  }
}
function getUserStatus(id) {
  const status = store.getStatus(id);
  if (status === StatusTypes.ONLINE) {
    if (store.isMobileOnline(id)) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + status + "-mobile";
    }
    return combined;
  }
  combined = status;
  if (status === StatusTypes.ONLINE) {
    const _HermesInternal = HermesInternal;
    combined = "" + status + "-desktop";
  }
}
function getActivityType(activityType) {
  let tmp = activityType;
  if (null != activityType) {
    let str = "VOICE";
    if ("VOICE" !== activityType) {
      const _Object = Object;
      const _Object2 = Object;
      const keys = Object.keys(closure_14);
      const values = Object.values(closure_14);
      str = keys[values.indexOf(values, activityType)];
    }
    tmp = str;
  }
  return tmp;
}
function getTrackUserProfileProperties(voiceChannelId) {
  let guildId;
  let layout;
  let sessionId;
  let showGuildProfile;
  let sourceSessionId;
  let userId;
  ({ guildId, showGuildProfile } = voiceChannelId);
  ({ layout, userId, sessionId, sourceSessionId } = voiceChannelId);
  if (showGuildProfile === undefined) {
    showGuildProfile = true;
  }
  const user = user.getUser(userId);
  if (null == user) {
    return {};
  } else {
    let id;
    if (null != user) {
      id = user.id;
    }
    let tmp3;
    if (showGuildProfile) {
      tmp3 = guildId;
    }
    const displayProfile = arg1(dependencyMap[13]).getDisplayProfile(id, tmp3);
    let member = null;
    if (showGuildProfile) {
      member = null;
      if (null != guildId) {
        let id1;
        if (null != user) {
          id1 = user.id;
        }
        member = member.getMember(guildId, id1);
      }
    }
    let obj = { profile_layout: layout, profile_session_id: sessionId, source_profile_session_id: sourceSessionId };
    obj = { user };
    let _userProfile;
    if (null != displayProfile) {
      _userProfile = displayProfile._userProfile;
    }
    obj.userProfile = _userProfile;
    obj.profile_properties = getProfileProperties(obj);
    const obj1 = { guildMember: member };
    let _guildMemberProfile;
    if (null != displayProfile) {
      _guildMemberProfile = displayProfile._guildMemberProfile;
    }
    obj1.guildMemberProfile = _guildMemberProfile;
    obj.guild_profile_properties = getProfileProperties(obj1);
    const activities = store.getActivities(user.id);
    const mapped = activities.map((type) => type.type);
    obj.profile_activity_types = mapped.filter((arg0) => undefined !== arg0);
    let found;
    if (null != displayProfile) {
      const badges = displayProfile.getBadges();
      if (null != badges) {
        const mapped1 = badges.map((id) => id.id);
        found = mapped1.filter((arg0) => "string" === typeof arg0);
      }
    }
    if (null == found) {
      found = [];
    }
    obj.profile_badges = found;
    const avatarDecoration = user.avatarDecoration;
    let skuId;
    if (null != avatarDecoration) {
      skuId = avatarDecoration.skuId;
    }
    obj.avatar_decoration_sku_id = skuId;
    let skuId1;
    if (null != displayProfile) {
      const profileEffect = displayProfile.profileEffect;
      if (null != profileEffect) {
        skuId1 = profileEffect.skuId;
      }
    }
    obj.profile_effect_sku_id = skuId1;
    let skuId2;
    if (null != displayProfile) {
      const profileFrame = displayProfile.profileFrame;
      if (null != profileFrame) {
        skuId2 = profileFrame.skuId;
      }
    }
    obj.profile_frame_sku_id = skuId2;
    obj.user_status = getUserStatus(user.id);
    guildId = undefined;
    if (null != displayProfile) {
      guildId = displayProfile.guildId;
    }
    obj.is_guild_profile = null != guildId;
    obj.is_bot_profile = user.bot;
    let _private;
    if (null != displayProfile) {
      _private = displayProfile.private;
    }
    obj.is_private_to_viewer = null != _private && _private;
    return obj;
  }
}
function getTrackUserRelationshipProperties(userId) {
  userId = userId.userId;
  if (null == userId) {
    return {};
  } else {
    const userAffinity = userAffinity.getUserAffinity(userId);
    const obj = { related_user_id: userId, relationship_type: store2.getRelationshipType(userId), related_since: store2.getSince(userId), num_mutual_friends: store3.getMutualFriendsCount(userId) };
    const mutualGuilds = store3.getMutualGuilds(userId);
    let length;
    if (null != mutualGuilds) {
      length = mutualGuilds.length;
    }
    obj.num_mutual_guilds = length;
    let prop;
    if (null != userAffinity) {
      prop = userAffinity.communicationProbability;
    }
    obj.communication_probability = prop;
    let communicationRank;
    if (null != userAffinity) {
      communicationRank = userAffinity.communicationRank;
    }
    obj.communication_rank = communicationRank;
    return obj;
  }
}
function getTrackUserProfileApplicationProperties(applicationId) {
  const obj = { application_id: applicationId };
  let tmp = null;
  if (null != applicationId) {
    tmp = null;
    if (authStore.getFetchStateForApplication(applicationId) === FetchState.FETCHED) {
      tmp = null != authStore.getNewestTokenForApplication(applicationId);
    }
  }
  obj.application_linked = tmp;
  return obj;
}
function trackUserProfileAction(voiceChannelId) {
  let action;
  let analyticsLocations;
  let applicationId;
  let channelId;
  let guildId;
  let messageId;
  let roleId;
  let section;
  let widgetType;
  ({ guildId, channelId, messageId, roleId, widgetType, analyticsLocations, action, section, applicationId } = voiceChannelId);
  let obj = importDefault(dependencyMap[14]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[15]).collectGuildAnalyticsMetadata(guildId));
  const obj3 = arg1(dependencyMap[15]);
  const merged1 = Object.assign(arg1(dependencyMap[15]).collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(voiceChannelId));
  const merged3 = Object.assign(getTrackUserRelationshipProperties(voiceChannelId));
  const merged4 = Object.assign(getTrackUserProfileApplicationProperties(applicationId));
  obj["location_stack"] = analyticsLocations;
  obj["profile_action"] = action;
  obj["profile_section"] = section;
  obj["source_message_id"] = messageId;
  obj["source_role_id"] = roleId;
  obj["widget_type"] = widgetType;
  obj.track(constants3.USER_PROFILE_ACTION, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FetchState = arg1(dependencyMap[1]).FetchState;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = arg1(dependencyMap[9]).TrackUserProfileProperties;
({ ActivityTypes: closure_14, AnalyticEvents: closure_15 } = arg1(dependencyMap[10]));
const StatusTypes = arg1(dependencyMap[11]).StatusTypes;
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_profile/UserProfileAnalyticsUtils.tsx");

export { getActivityType };
export { getTrackUserRelationshipProperties };
export { trackUserProfileAction };
export const maybeTrackUserProfileUiViewed = function maybeTrackUserProfileUiViewed(voiceChannelId) {
  let analyticsLocations;
  let channelId;
  let fetchStartedAt;
  let guildId;
  let profileUi;
  let timeToFetchMs;
  let timeToInteractiveMs;
  let timeToLoadMs;
  let viewStartedAt;
  let obj = arg1(dependencyMap[16]);
  if (obj.isUserProfilePerformanceAnalyticsEnabled("UserProfileAnalyticsUtils")) {
    ({ timeToInteractiveMs, timeToLoadMs, timeToFetchMs } = voiceChannelId);
    let num2 = 0;
    ({ guildId, channelId, analyticsLocations, profileUi, viewStartedAt, fetchStartedAt } = voiceChannelId);
    if (null != timeToInteractiveMs) {
      num2 = timeToInteractiveMs;
    }
    let tmp2 = num2 <= 0;
    if (!tmp2) {
      let num3 = 0;
      if (null != timeToLoadMs) {
        num3 = timeToLoadMs;
      }
      tmp2 = num3 <= 0;
    }
    if (!tmp2) {
      let num4 = 0;
      if (null != timeToFetchMs) {
        num4 = timeToFetchMs;
      }
      tmp2 = num4 <= 0;
    }
    if (!tmp2) {
      obj = {};
      const obj2 = importDefault(dependencyMap[14]);
      const merged = Object.assign(arg1(dependencyMap[15]).collectGuildAnalyticsMetadata(guildId));
      const obj4 = arg1(dependencyMap[15]);
      const merged1 = Object.assign(arg1(dependencyMap[15]).collectChannelAnalyticsMetadataFromId(channelId));
      const merged2 = Object.assign(getTrackUserProfileProperties(voiceChannelId));
      const merged3 = Object.assign(getTrackUserRelationshipProperties(voiceChannelId));
      obj["location_stack"] = analyticsLocations;
      obj["profile_ui"] = profileUi;
      obj["view_started_at"] = viewStartedAt;
      obj["fetch_started_at"] = fetchStartedAt;
      obj["time_to_interactive_ms"] = timeToInteractiveMs;
      obj["time_to_load_ms"] = timeToLoadMs;
      obj["time_to_fetch_ms"] = timeToFetchMs;
      obj2.track(constants3.USER_PROFILE_UI_VIEWED, obj);
      const obj5 = arg1(dependencyMap[15]);
    }
  }
};
export const trackUserProfileActivityJoined = function trackUserProfileActivityJoined(voiceChannelId) {
  let activityName;
  let activityPlatform;
  let activitySessionId;
  let activityType;
  let analyticsLocations;
  let applicationId;
  let channelId;
  let guildId;
  voiceChannelId = voiceChannelId.voiceChannelId;
  ({ guildId, channelId, analyticsLocations, activityType, activityName, activityPlatform, activitySessionId, applicationId } = voiceChannelId);
  let obj = importDefault(dependencyMap[14]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[15]).collectGuildAnalyticsMetadata(guildId));
  const obj3 = arg1(dependencyMap[15]);
  const merged1 = Object.assign(arg1(dependencyMap[15]).collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(voiceChannelId));
  const merged3 = Object.assign(getTrackUserRelationshipProperties(voiceChannelId));
  obj["location_stack"] = analyticsLocations;
  let str = "VOICE";
  if (null == voiceChannelId) {
    str = getActivityType(activityType);
  }
  obj["activity_type"] = str;
  obj["activity_name"] = activityName;
  obj["activity_platform"] = activityPlatform;
  obj["activity_session_id"] = activitySessionId;
  obj["application_id"] = applicationId;
  obj["voice_channel_id"] = voiceChannelId;
  obj.track(constants3.USER_PROFILE_ACTIVITY_JOINED, obj);
};
export const trackUserProfileActivityAction = function trackUserProfileActivityAction(voiceChannelId) {
  let action;
  let activity;
  let analyticsLocations;
  let channelId;
  let display;
  let entry;
  let guildId;
  let outbox;
  let stream;
  ({ activity, entry, outbox } = voiceChannelId);
  ({ guildId, channelId, analyticsLocations, action, display, stream, voiceChannelId } = voiceChannelId);
  let obj = importDefault(dependencyMap[14]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[15]).collectGuildAnalyticsMetadata(guildId));
  const obj3 = arg1(dependencyMap[15]);
  const merged1 = Object.assign(arg1(dependencyMap[15]).collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(voiceChannelId));
  const merged3 = Object.assign(getTrackUserRelationshipProperties(voiceChannelId));
  obj["location_stack"] = analyticsLocations;
  obj["activity_action"] = action;
  obj["activity_display"] = display;
  if (null != stream) {
    let type = constants2.STREAMING;
  } else if (null != activity) {
    type = activity.type;
  }
  obj["activity_type"] = getActivityType(type);
  let name;
  if (null != activity) {
    name = activity.name;
  }
  obj["activity_name"] = name;
  let platform;
  if (null != activity) {
    platform = activity.platform;
  }
  obj["activity_platform"] = platform;
  let session_id;
  if (null != activity) {
    session_id = activity.session_id;
  }
  obj["activity_session_id"] = session_id;
  let application_id;
  if (null != activity) {
    application_id = activity.application_id;
  }
  obj["activity_application_id"] = application_id;
  let id;
  if (null != entry) {
    id = entry.id;
  }
  obj["item_id"] = id;
  let author_id;
  if (null != entry) {
    author_id = entry.author_id;
  }
  obj["author_id_v2"] = author_id;
  let mapped;
  if (null != outbox) {
    const entries = outbox.entries;
    mapped = entries.map((id) => id.id);
  }
  obj["item_ids"] = mapped;
  let mapped1;
  if (null != outbox) {
    const entries1 = outbox.entries;
    mapped1 = entries1.map((author_id) => author_id.author_id);
  }
  obj["author_ids_v2"] = mapped1;
  obj["voice_channel_id"] = voiceChannelId;
  obj.track(constants3.USER_PROFILE_ACTIVITY_ACTION, obj);
};
export const trackUserProfileBadgeAction = function trackUserProfileBadgeAction(voiceChannelId) {
  let analyticsLocations;
  let badgeAction;
  let badgeId;
  let channelId;
  let guildId;
  let position;
  let userId;
  ({ badgeId, userId } = voiceChannelId);
  let tmp;
  ({ guildId, channelId, analyticsLocations, badgeAction, position } = voiceChannelId);
  if (null != badgeId) {
    if (null != userId) {
      const badgeById = badgeById.getBadgeById(badgeId, userId);
      let current_tier;
      if (null != badgeById) {
        current_tier = badgeById.current_tier;
      }
      tmp = current_tier;
    }
  }
  let obj = importDefault(dependencyMap[14]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[15]).collectGuildAnalyticsMetadata(guildId));
  const obj3 = arg1(dependencyMap[15]);
  const merged1 = Object.assign(arg1(dependencyMap[15]).collectChannelAnalyticsMetadataFromId(channelId));
  const merged2 = Object.assign(getTrackUserProfileProperties(voiceChannelId));
  const merged3 = Object.assign(getTrackUserRelationshipProperties(voiceChannelId));
  obj["location_stack"] = analyticsLocations;
  obj["badge_action"] = badgeAction;
  obj["badge_id"] = badgeId;
  obj["badge_tier"] = tmp;
  obj["position"] = position;
  obj.track(constants3.USER_PROFILE_BADGE_ACTION, obj);
};
export const trackDmProfileToggled = function trackDmProfileToggled(displayProfile) {
  displayProfile = displayProfile.displayProfile;
  let arg1;
  let userId;
  if (null != displayProfile) {
    userId = displayProfile.userId;
  }
  arg1 = userId;
  let findActivityResult = null;
  if (null != userId) {
    findActivityResult = store.findActivity(userId, (type) => {
      type = type.type;
      if (null != anyStreamForUser.getAnyStreamForUser(userId)) {
        let tmp2 = type === constants.PLAYING;
      } else {
        tmp2 = type !== constants.CUSTOM_STATUS;
      }
      return tmp2;
    });
  }
  let obj = importDefault(dependencyMap[14]);
  obj = {};
  obj = { userId };
  const merged = Object.assign(getTrackUserProfileProperties(obj));
  obj["is_profile_open"] = displayProfile.isProfileOpen;
  let large_image;
  if (null != findActivityResult) {
    const assets = findActivityResult.assets;
    if (null != assets) {
      large_image = assets.large_image;
    }
  }
  if (null == large_image) {
    let small_image;
    if (null != findActivityResult) {
      const assets2 = findActivityResult.assets;
      if (null != assets2) {
        small_image = assets2.small_image;
      }
    }
    large_image = small_image;
  }
  obj["has_images"] = Boolean(large_image);
  obj["is_friend"] = store2.isFriend(userId);
  obj["viewed_profile_user_id"] = userId;
  let result;
  if (null != displayProfile) {
    result = displayProfile.hasPremiumCustomization();
  }
  obj["profile_has_nitro_customization"] = result;
  let hasThemeColorsResult;
  if (null != displayProfile) {
    hasThemeColorsResult = displayProfile.hasThemeColors();
  }
  obj["profile_has_theme_color_customized"] = hasThemeColorsResult;
  let prop;
  if (null != displayProfile) {
    prop = displayProfile.popoutAnimationParticleType;
  }
  obj["profile_has_theme_animation"] = null != prop;
  obj.track(constants3.DM_PROFILE_TOGGLED, obj);
};
export const trackUserProfileEditAction = function trackUserProfileEditAction(voiceChannelId) {
  let action;
  let analyticsLocations;
  let applicationId;
  let channelId;
  let gameId;
  let guildId;
  let numCharacters;
  let numResults;
  let widgetEdited;
  ({ action, applicationId } = voiceChannelId);
  let obj = {};
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameId, numResults, numCharacters } = voiceChannelId);
  const merged = Object.assign(voiceChannelId);
  obj["action"] = action;
  trackUserProfileAction(obj);
  obj = {};
  const obj2 = importDefault(dependencyMap[14]);
  const merged1 = Object.assign(arg1(dependencyMap[15]).collectGuildAnalyticsMetadata(guildId));
  const obj4 = arg1(dependencyMap[15]);
  const merged2 = Object.assign(arg1(dependencyMap[15]).collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(voiceChannelId));
  const merged4 = Object.assign(getTrackUserProfileApplicationProperties(applicationId));
  obj["location_stack"] = analyticsLocations;
  obj["edit_action"] = action;
  obj["widget_edited"] = widgetEdited;
  obj["game_id"] = gameId;
  obj["num_results"] = numResults;
  obj["num_characters"] = numCharacters;
  obj["application_id"] = applicationId;
  obj2.track(constants3.USER_PROFILE_EDIT_ACTION, obj);
};
export const trackUserProfileEditSaved = function trackUserProfileEditSaved(voiceChannelId) {
  let analyticsLocations;
  let channelId;
  let gameIds;
  let guildId;
  let isWidgetRemoved;
  let numCharactersCommentary;
  let tags;
  let widgetEdited;
  let obj = {};
  ({ guildId, channelId, analyticsLocations, widgetEdited, gameIds, tags, numCharactersCommentary, isWidgetRemoved } = voiceChannelId);
  const merged = Object.assign(voiceChannelId);
  obj["action"] = "EDIT_SAVED";
  trackUserProfileAction(obj);
  obj = {};
  const obj2 = importDefault(dependencyMap[14]);
  const merged1 = Object.assign(arg1(dependencyMap[15]).collectGuildAnalyticsMetadata(guildId));
  const obj4 = arg1(dependencyMap[15]);
  const merged2 = Object.assign(arg1(dependencyMap[15]).collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(voiceChannelId));
  obj["location_stack"] = analyticsLocations;
  obj["widget_edited"] = widgetEdited;
  obj["game_ids"] = gameIds;
  obj["tags"] = tags;
  obj["num_characters_commentary"] = numCharactersCommentary;
  obj["is_widget_removed"] = isWidgetRemoved;
  obj2.track(constants3.USER_PROFILE_EDIT_SAVED, obj);
};
export const trackUserProfileWishlistAction = function trackUserProfileWishlistAction(voiceChannelId) {
  let action;
  let analyticsLocations;
  let channelId;
  let guildId;
  let productLines;
  let skuId;
  let wishlistId;
  ({ action, productLines } = voiceChannelId);
  let obj = {};
  ({ guildId, channelId, analyticsLocations, wishlistId, skuId } = voiceChannelId);
  const merged = Object.assign(voiceChannelId);
  obj["action"] = action;
  trackUserProfileAction(obj);
  obj = {};
  const obj2 = importDefault(dependencyMap[14]);
  const merged1 = Object.assign(arg1(dependencyMap[15]).collectGuildAnalyticsMetadata(guildId));
  const obj4 = arg1(dependencyMap[15]);
  const merged2 = Object.assign(arg1(dependencyMap[15]).collectChannelAnalyticsMetadataFromId(channelId));
  const merged3 = Object.assign(getTrackUserProfileProperties(voiceChannelId));
  obj["location_stack"] = analyticsLocations;
  obj["action_type"] = action;
  obj["wishlist_id"] = wishlistId;
  obj["sku_id"] = skuId;
  if (null != productLines) {
    const _Array = Array;
    let items = Array.from(productLines);
  } else {
    items = [];
  }
  obj["product_lines"] = items;
  obj2.track(constants3.USER_PROFILE_WISHLIST_ACTION, obj);
};
