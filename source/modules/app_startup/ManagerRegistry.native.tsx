// Module ID: 16386
// Function ID: 16387
// Dependencies: [16387, 16390, 16398, 16399, 16400, 10589, 16401, 16402, 16405, 16406, 16408, 9900, 16409, 16410, 16411, 16415, 16416, 16417, 16419, 11827, 12039, 16424, 16425, 16426, 16431, 16432, 7070, 16433, 16434, 16451, 9928, 7233, 10983, 16452, 16453, 16455, 16457, 16458, 16459, 16465, 8959, 16467, 16468, 16469, 16470, 16477, 16478, 16494, 16496, 16497, 16498, 16500, 16502, 16503, 9750, 16512, 14563, 16513, 16514, 16518, 16520, 16534, 16544, 13043, 16547, 16560, 16565, 16566, 16568, 16569, 16571, 16572, 16575, 16577, 16579, 16580, 16581, 16582, 16583, 13001, 16584, 16585, 10789, 16587, 16590, 16591, 16593, 16594, 16598, 5259, 7313, 16599, 16600, 16601, 8311, 16602, 16403, 16603, 16604, 16899, 16900, 16901, 16903, 16904, 16906, 16908, 16909, 16912, 16914, 16915, 16916, 16920, 16921, 16922, 16923, 13981, 16925, 16926, 16929, 16930, 16952, 16956, 16957, 16960, 16983, 16984, 16384, 16985, 16986, 16987, 16988, 2]

// Module 16386
import set from "populateMap";
import set from "handleMessageCreate";

set = { AcceptInviteManager: obj, AgeGateManager: obj, AgeVerificationManager: obj1, AppAnalyticsManager: obj2, AppIconPremiumManager: obj3, AppStoreOverlayTelemetryManager: obj4, ATTManager: obj5, AudioSessionModeManager: obj6, AudioSettingsManager: obj7, BackgroundSyncManager: obj8, BlockedDomainManager: obj9, BugReportManager: obj10, CallIdleManager: obj11, CacheManager: obj12, ChangelogManager: obj13, ChannelCallManager: obj14, ChannelResyncManager: obj15, ChannelSafetyWarningsManager: obj16, CommonTriggerPointManager: obj17, CommunicationDisabledManager: obj18, ContactSyncLifecycleManager: obj19, CustomStatusManager: obj20, DiceRollLifecycleManager: obj21, DmSettingsUpsellManager: obj22, TopEmojisDataManager: obj23, EntityVersionsManager: obj24, ExplicitMediaManager: obj25, KvBackgroundManager: obj26, FeedbackManager: obj27, ForumManager: obj28, ForumGuidelinesManager: obj29, ForumPostAnalyticsManager: obj30, FramesNativeManager: obj31, FrecencyUserSettingsManager: obj32, GameConsoleManager: obj33, GuildOnboardingHomeManager: obj34, GuildOnboardingManager: obj35, GuildPowerupsManager: obj36, GuildRoomManager: obj37, GuildRoomSpatialAudioManager: obj38, GuildScheduledEventManager: obj39, GuildVerificationManager: obj40, MemberVerificationApplicationManager: obj41, MessageSessionMetadataManager: obj42, HolidayEventsManager: obj43, IAPManager: obj44, InteractionModalManager: obj45, IOSUserIdentifiersManager: obj46, DiskUsageManager: obj47, InstantInviteManager: obj48, JankStatsManager: obj49, JSWatchdogManager: obj50, LoginRequiredActionManager: obj51, MessageCodedLinkManager: obj52, MessageManager: obj53, MessageQueueManager: obj54, MessagePreviewManager: obj55, MetricKitManager: obj56, MultiAccountManagerNative: obj57, NativeOnDemandResourceManager: obj58, NewUserManager: obj59, RedesignNewUserManager: obj60, NotificationPermissionManager: obj61, NUFChannelsManager: obj62, ParentalConsentManager: obj63, ParentalConsentWarningManager: obj64, ParticipantFocusManager: obj65, MobileGiftIntentCardManager: obj66, PromotionsManager: obj67, ProximitySensorManager: obj68, PushNotificationCacheManager: obj69, RelationshipManager: obj70, RTCLatencyTestManager: obj71, SavedMessagesManager: obj72, MessageRemindersNotificationManager: obj73, SearchTokensManager: obj74, SelectedChannelManager: obj75, SelfPresenceStoreManager: obj76, SettingTreeManagerLifecycleManager: obj77, SharedSpacesWarningManager: obj78, StageBoostUpsellManager: obj79, StageChannelRequestToSpeakMessageManager: obj80, StageMusicManager: obj81, StaffMemberPreloaderManager: obj82, SubscriptionManager: obj83, TelecomManager: obj84, ThreadManager: obj85, UrgentSystemDMManagerBase: obj86, FavoriteManager: obj87, UserGuildSettingsManager: obj88, UserSearchManager: obj89, UserSettingsManager: obj90, UserOfferManager: obj91, MobileGameCommunitiesManager: obj92, VideoBackgroundManager: obj93, VoiceChannelSettingsManager: obj94, VoicePermissionManager: obj95, VoiceProcessingErrorManager: obj96, DeprecatedModalManager: set, VoicePanelManager: set, MediaPostEmbedManager: set, ClipsManager: set, MidjourneyOnboardingManager: set, NativeNotificationsManager: set, FriendOnlineTimerManager: set, InappropriateConversationsManager: set, ContentInventoryManager: set, QuestFetchManager: set, QuestMobileEmbedVisibilityManager: set, MessageSendFailureNotificationManager: set, NativeExperimentBridgeManager: set, SocialRpcNetworkConfigManager: set, ApiRequestConfigManager: set, UserSettingsNativeBridgeManager: set, ForwardGuildBreadcrumbManager: set, PasskeyUpsellManager: set, WebAuthnSignalManager: set, GlobalDiscoveryServersFeaturedSearchManager: set, ReferralMessageManager: set, AVErrorManager: set, ApplicationStreamingManager: set, LibdiscoreExperimentManager: set, NativeIntentsManager: set, SafetyFlowsManager: set, UserApplicationIdentityManager: set, LocalMessageCacheStatsManager: set, RestrictedHoursManager: set, SentryExperimentFeatureFlagManager: set, QuestProgressManager: set, AccountLinkManagerNative: set };
obj = {
  actions: ["DISPLAYED_INVITE_SHOW", "DISPLAYED_INVITE_CLEAR", "DEFERRED_INVITE_SHOW", "REGISTER_SUCCESS"],
  inlineRequire() {
    return require(16387) /* prototype */.default;
  }
};
obj = {
  actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "AGE_GATE_MODAL_OPEN", "AGE_GATE_MODAL_CLOSE", "GUILD_UPDATE"],
  inlineRequire() {
    return require(16390) /* handlePostConnectionOpen */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["CONNECTION_OPEN_SUPPLEMENTAL", "GUILD_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "CREATE_INVITE_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "EMAIL_VERIFICATION_MODAL_OPEN", "USER_REQUIRED_ACTION_UPDATE", "GUILD_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "CREATE_INVITE_MODAL_OPEN"],
  inlineRequire() {
    return require(16604) /* handlePushedModal */.default;
  }
};
set = {
  actions: ["VOICE_CHANNEL_SELECT", "RTC_CONNECTION_STATE"],
  inlineRequire() {
    return require(16899) /* prototype */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS", "LOAD_THREADS_SUCCESS", "LOAD_ARCHIVED_THREADS_SUCCESS", "LOAD_FORUM_POSTS"],
  inlineRequire() {
    return require(16900) /* resolveMediaPostEmbeds */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["RTC_CONNECTION_FLAGS", "RTC_CONNECTION_STATE", "POST_CONNECTION_OPEN", "RTC_CONNECTION_USERS_MERGED", "CLIPS_ALLOW_VOICE_RECORDING_UPDATE", "CLIPS_SETTINGS_UPDATE", "CLIPS_INIT_FAILURE", "STREAM_START", "STREAM_DELETE", "STREAM_CLOSE", "RUNNING_GAMES_CHANGE", "RUNNING_GAME_TOGGLE_DETECTION", "CLIPS_RESTART", "RTC_CONNECTION_VIDEO"],
  inlineRequire() {
    return require(16901) /* showClipsToast */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["CHANNEL_CREATE"],
  inlineRequire() {
    return require(16903) /* handleChannelCreate */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MESSAGE_ACK", "CHANNEL_SELECT", "POST_CONNECTION_OPEN", "EXPERIMENT_OVERRIDE_BUCKET", "EXPERIMENTS_FETCH_SUCCESS", "APP_STATE_UPDATE"],
  inlineRequire() {
    return require(16904) /* getDeliveredNotifications */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "CONNECTION_INTERRUPTED", "SELF_PRESENCE_STORE_UPDATE"],
  inlineRequire() {
    return require(16906) /* _reportSessionMeaningfullyOnline */.default;
  },
  loadRightBeforeConnectionOpen: true
};
set = {
  actions: ["VIBING_WUMPUS_PLAY_MUSIC", "VIBING_WUMPUS_STOP_MUSIC", "VIBING_WUMPUS_PAUSE_MUSIC"],
  inlineRequire() {
    return require(16908) /* fadeIn */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CONNECTION_CLOSED", "IDLE", "WINDOW_FOCUS", "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN", "CONTENT_INVENTORY_MANUAL_REFRESH", "CONTENT_INVENTORY_INBOX_STALE", "SPOTIFY_NEW_TRACK", "GAME_PROFILE_OPEN"],
  inlineRequire() {
    return require(16909) /* getBackoffJitter */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["QUESTS_FETCH_CURRENT_QUESTS_BEGIN", "POST_CONNECTION_OPEN", "RUNNING_GAMES_CHANGE", "RUNNING_NON_GAMES_CHANGE", "USER_SETTINGS_PROTO_UPDATE", "START_SESSION", "LOGOUT"],
  inlineRequire() {
    return require(16912) /* _fetch */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED"],
  inlineRequire() {
    return require(16914) /* log */.default;
  },
  hasStoreChangeListeners: true,
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MESSAGE_CREATE", "MESSAGE_SEND_FAILED"],
  inlineRequire() {
    return require(16915) /* handleMessageSendFailure */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["APP_STATE_UPDATE", "POST_CONNECTION_OPEN"],
  inlineRequire() {
    return require(16916) /* syncYYTextReplacementExperiment */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN"],
  inlineRequire() {
    return require(16920) /* updateSocialRpcNetworkConfig */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "APP_STATE_UPDATE"],
  inlineRequire() {
    return require(16921) /* updateApiRequestConfig */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "USER_SETTINGS_PROTO_UPDATE"],
  inlineRequire() {
    return require(16922) /* prototype */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS"],
  inlineRequire() {
    return require(16923) /* fetchForwardReferencedGuilds */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "LOGIN_SUCCESS", "LOGIN_RESET", "LOGOUT"],
  inlineRequire() {
    return require(13981) /* handlePasskeyUpsellShow */.default;
  },
  neverLoadBeforeConnectionOpen: true,
  hasStoreChangeListeners: true
};
set = {
  actions: ["AUTHENTICATOR_DELETE", "CURRENT_USER_UPDATE", "MFA_WEBAUTHN_CREDENTIALS_LOADED"],
  inlineRequire() {
    return require(16925) /* handleAuthenticatorDelete */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN"],
  inlineRequire() {
    return require(16926) /* prototype */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS"],
  inlineRequire() {
    return require(16929) /* handleReferralMessages */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MEDIA_ENGINE_SET_AUDIO_ENABLED", "AUDIO_INPUT_DETECTED", "AUDIO_SET_DISPLAY_SILENCE_WARNING", "CERTIFIED_DEVICES_SET", "AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_OUTPUT_DEVICE", "MEDIA_ENGINE_DEVICES", "RTC_CONNECTION_STATE", "VOICE_STATE_UPDATES", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "MEDIA_ENGINE_SOUNDSHARE_FAILED", "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", "MEDIA_ENGINE_VIDEO_FILTER_ERROR", "MEDIA_ENGINE_VIDEO_STATE_CHANGED", "NATIVE_SCREEN_SHARE_PICKER_UPDATE", "NATIVE_SCREEN_SHARE_PICKER_ERROR", "MEDIA_SESSION_JOINED", "RTC_CONNECTION_UPDATE_ID", "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS", "REPORT_AV_ERROR", "VIDEO_STREAM_READY_TIMEOUT", "CLEAR_VIDEO_STREAM_READY_TIMEOUT", "RTC_CONNECTION_VIDEO", "STREAM_CLOSE"],
  inlineRequire() {
    return require(16930) /* setDifference */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["STREAM_WATCH", "STREAM_START", "STREAM_CREATE", "STREAM_UPDATE", "STREAM_DELETE", "STREAM_CLOSE", "CALL_UPDATE", "CHANNEL_UPDATES", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES", "CONNECTION_CLOSED", "LOGOUT"],
  inlineRequire() {
    return require(16952) /* platformShowStreamFull */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: [],
  inlineRequire() {
    return require(16956) /* experimentStoreUpdateHandler */.default;
  },
  hasStoreChangeListeners: true
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "GUILD_CREATE", "GUILD_UPDATE", "GUILD_DELETE", "LOGOUT", "RELATIONSHIP_ADD", "RELATIONSHIP_REMOVE", "RELATIONSHIP_UPDATE", "THREAD_CREATE", "THREAD_DELETE", "THREAD_UPDATE", "USER_UPDATE"],
  inlineRequire() {
    return require(16957) /* indexingEnabled */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["CONNECTION_OPEN_SUPPLEMENTAL", "SAFETY_FLOWS_MODAL_OPEN", "USER_REQUIRED_ACTION_UPDATE"],
  inlineRequire() {
    return require(16960) /* handleConnectionOpenSupplemental */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["USER_APPLICATION_IDENTITY_UPDATE", "USER_APPLICATION_IDENTITY_REMOVE"],
  inlineRequire() {
    return require(16983) /* handleUserApplicationIdentityGatewayEvent */.default;
  }
};
set = {
  actions: ["APP_STATE_UPDATE"],
  inlineRequire() {
    return require(16984) /* makeLogLine */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CURRENT_USER_UPDATE", "LOGOUT", "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER"],
  inlineRequire() {
    return require(16384) /* scheduleUpcomingWarning */.default;
  },
  hasStoreChangeListeners: true,
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: [],
  inlineRequire() {
    return require(16985) /* isLikelyControl */.default;
  },
  hasStoreChangeListeners: true,
  loadRightBeforeConnectionOpen: true
};
set = {
  actions: ["QUESTS_SEND_HEARTBEAT_SUCCESS", "QUESTS_SEND_HEARTBEAT_FAILURE", "QUESTS_ENROLL_SUCCESS", "RUNNING_GAMES_CHANGE", "RUNNING_NON_GAMES_CHANGE", "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS", "STREAM_START", "STREAM_CREATE", "STREAM_CLOSE", "PASSIVE_UPDATE_V2", "VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", "FRAME_LAUNCH", "FRAME_STOP", "EMBEDDED_ACTIVITY_UPDATE_V2", "QUESTS_PREVIEW_UPDATE_SUCCESS", "QUEST_APPLICATION_START_TIMER"],
  inlineRequire() {
    return require(16986) /* isQuestProgressable */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["ACCOUNT_LINK_AUTHORIZATION_COMPLETED", "OAUTH2_TOKEN_CREATE", "USER_AUTHORIZED_APPS_UPDATE", "APP_STATE_UPDATE"],
  inlineRequire() {
    return require(16987) /* AccountLinkManagerNative */.default;
  },
  loadRightBeforeConnectionOpen: true
};
const populateMap = set.initialize(set);
const result = set.fileFinishedImporting("modules/app_startup/ManagerRegistry.native.tsx");

export default set;
