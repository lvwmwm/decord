// Module ID: 17220
// Function ID: 17221
// Dependencies: [17221, 17224, 17232, 17233, 17234, 11429, 17235, 17236, 17239, 17240, 17242, 10143, 17243, 17244, 17245, 17249, 17250, 17251, 17253, 12395, 12613, 17258, 17259, 17260, 17265, 17266, 7541, 17267, 17269, 17286, 10198, 7705, 9497, 17287, 17288, 17290, 17292, 17293, 17294, 17295, 9710, 17297, 17298, 17299, 17300, 17307, 17308, 17324, 17326, 17327, 17328, 17330, 17332, 17334, 17335, 9870, 17344, 15243, 17345, 17346, 17350, 17352, 17366, 17376, 13692, 17379, 17381, 17386, 17387, 17389, 17390, 17392, 17393, 17396, 17398, 17400, 17401, 17402, 17403, 17404, 13658, 17405, 17406, 9830, 17408, 17411, 17412, 17414, 17415, 17419, 7056, 9768, 17420, 17421, 17422, 8181, 17423, 17237, 17424, 17425, 17720, 17721, 17722, 17724, 17725, 17727, 17729, 17730, 17733, 17735, 17736, 17737, 17741, 17742, 17743, 17744, 14587, 17746, 17747, 17750, 17751, 17773, 17777, 17778, 17781, 17785, 17809, 17810, 17218, 17811, 17812, 17813, 17814, 2]

// Module 17220
import set from "populateMap" /* 17814 */;
import set from "set" /* 2 */;

set = { AcceptInviteManager: obj, AgeGateManager: obj, AgeVerificationManager: obj1, AppAnalyticsManager: obj2, AppIconPremiumManager: obj3, AppStoreOverlayTelemetryManager: obj4, ATTManager: obj5, AudioSessionModeManager: obj6, AudioSettingsManager: obj7, BackgroundSyncManager: obj8, BlockedDomainManager: obj9, BugReportManager: obj10, CallIdleManager: obj11, CacheManager: obj12, ChangelogManager: obj13, ChannelCallManager: obj14, ChannelResyncManager: obj15, ChannelSafetyWarningsManager: obj16, CommonTriggerPointManager: obj17, CommunicationDisabledManager: obj18, ContactSyncLifecycleManager: obj19, CustomStatusManager: obj20, DiceRollLifecycleManager: obj21, DmSettingsUpsellManager: obj22, TopEmojisDataManager: obj23, EntityVersionsManager: obj24, ExplicitMediaManager: obj25, KvBackgroundManager: obj26, FeedbackManager: obj27, ForumManager: obj28, ForumGuidelinesManager: obj29, ForumPostAnalyticsManager: obj30, FramesNativeManager: obj31, FrecencyUserSettingsManager: obj32, GameConsoleManager: obj33, GuildOnboardingHomeManager: obj34, GuildOnboardingManager: obj35, GuildPowerupsManager: obj36, GuildRoomManager: obj37, GuildRoomSpatialAudioManager: obj38, GuildScheduledEventManager: obj39, GuildVerificationManager: obj40, MemberVerificationApplicationManager: obj41, MessageSessionMetadataManager: obj42, HolidayEventsManager: obj43, IAPManager: obj44, InteractionModalManager: obj45, IOSUserIdentifiersManager: obj46, DiskUsageManager: obj47, InstantInviteManager: obj48, JankSessionManager: obj49, JankStatsManager: obj50, JSWatchdogManager: obj51, LoginRequiredActionManager: obj52, MessageCodedLinkManager: obj53, MessageManager: obj54, MessageQueueManager: obj55, MessagePreviewManager: obj56, MetricKitManager: obj57, MultiAccountManagerNative: obj58, NativeOnDemandResourceManager: obj59, NewUserManager: obj60, RedesignNewUserManager: obj61, NotificationPermissionManager: obj62, NUFChannelsManager: obj63, ParentalConsentManager: obj64, ParentalConsentWarningManager: obj65, ParticipantFocusManager: obj66, MobileGiftIntentCardManager: obj67, PromotionsManager: obj68, ProximitySensorManager: obj69, PushNotificationCacheManager: obj70, RelationshipManager: obj71, RTCLatencyTestManager: obj72, SavedMessagesManager: obj73, MessageRemindersNotificationManager: obj74, SearchTokensManager: obj75, SelectedChannelManager: obj76, SelfPresenceStoreManager: obj77, SettingTreeManagerLifecycleManager: obj78, SharedSpacesWarningManager: obj79, StageBoostUpsellManager: obj80, StageChannelRequestToSpeakMessageManager: obj81, StageMusicManager: obj82, StaffMemberPreloaderManager: obj83, SubscriptionManager: obj84, TelecomManager: obj85, ThreadManager: obj86, UrgentSystemDMManagerBase: obj87, FavoriteManager: obj88, UserGuildSettingsManager: obj89, UserSearchManager: obj90, UserSettingsManager: obj91, UserOfferManager: obj92, MobileGameCommunitiesManager: obj93, VideoBackgroundManager: obj94, VoiceChannelSettingsManager: obj95, VoicePermissionManager: obj96, VoiceProcessingErrorManager: set, DeprecatedModalManager: set, VoicePanelManager: set, MediaPostEmbedManager: set, ClipsManager: set, MidjourneyOnboardingManager: set, NativeNotificationsManager: set, FriendOnlineTimerManager: set, InappropriateConversationsManager: set, ContentInventoryManager: set, QuestFetchManager: set, QuestMobileEmbedVisibilityManager: set, MessageSendFailureNotificationManager: set, NativeExperimentBridgeManager: set, SocialRpcNetworkConfigManager: set, ApiRequestConfigManager: set, UserSettingsNativeBridgeManager: set, ForwardGuildBreadcrumbManager: set, PasskeyUpsellManager: set, WebAuthnSignalManager: set, GlobalDiscoveryServersFeaturedSearchManager: set, ReferralMessageManager: set, AVErrorManager: set, ApplicationStreamingManager: set, LibdiscoreExperimentManager: set, NativeIntentsManager: set, NavigationTTIDispatcherManager: set, SafetyFlowsManager: set, UserApplicationIdentityManager: set, LocalMessageCacheStatsManager: set, RestrictedHoursManager: set, SentryExperimentFeatureFlagManager: set, QuestProgressManager: set, AccountLinkManagerNative: set };
obj = {
  actions: ["DISPLAYED_INVITE_SHOW", "DISPLAYED_INVITE_CLEAR", "DEFERRED_INVITE_SHOW", "REGISTER_SUCCESS"],
  inlineRequire() {
    return require(17221) /* prototype */.default;
  }
};
obj = {
  actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "AGE_GATE_MODAL_OPEN", "AGE_GATE_MODAL_CLOSE", "GUILD_UPDATE"],
  inlineRequire() {
    return require(17224) /* handlePostConnectionOpen */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR"],
  inlineRequire() {
    return require(17424) /* prototype */.default;
  }
};
set = {
  actions: ["CONNECTION_OPEN_SUPPLEMENTAL", "GUILD_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "CREATE_INVITE_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "EMAIL_VERIFICATION_MODAL_OPEN", "USER_REQUIRED_ACTION_UPDATE", "GUILD_SETTINGS_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "CREATE_INVITE_MODAL_OPEN"],
  inlineRequire() {
    return require(17425) /* handlePushedModal */.default;
  }
};
set = {
  actions: ["VOICE_CHANNEL_SELECT", "RTC_CONNECTION_STATE"],
  inlineRequire() {
    return require(17720) /* prototype */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS", "LOAD_THREADS_SUCCESS", "LOAD_ARCHIVED_THREADS_SUCCESS", "LOAD_FORUM_POSTS"],
  inlineRequire() {
    return require(17721) /* resolveMediaPostEmbeds */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["RTC_CONNECTION_FLAGS", "RTC_CONNECTION_STATE", "POST_CONNECTION_OPEN", "RTC_CONNECTION_USERS_MERGED", "CLIPS_ALLOW_VOICE_RECORDING_UPDATE", "CLIPS_SETTINGS_UPDATE", "CLIPS_INIT_FAILURE", "STREAM_START", "STREAM_DELETE", "STREAM_CLOSE", "RUNNING_GAMES_CHANGE", "RUNNING_GAME_TOGGLE_DETECTION", "CLIPS_RESTART", "RTC_CONNECTION_VIDEO"],
  inlineRequire() {
    return require(17722) /* showClipsToast */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["CHANNEL_CREATE"],
  inlineRequire() {
    return require(17724) /* handleChannelCreate */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MESSAGE_ACK", "CHANNEL_SELECT", "POST_CONNECTION_OPEN", "EXPERIMENT_OVERRIDE_BUCKET", "EXPERIMENTS_FETCH_SUCCESS", "APP_STATE_UPDATE"],
  inlineRequire() {
    return require(17725) /* getDeliveredNotifications */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "CONNECTION_INTERRUPTED", "SELF_PRESENCE_STORE_UPDATE"],
  inlineRequire() {
    return require(17727) /* _reportSessionMeaningfullyOnline */.default;
  },
  loadRightBeforeConnectionOpen: true
};
set = {
  actions: ["VIBING_WUMPUS_PLAY_MUSIC", "VIBING_WUMPUS_STOP_MUSIC", "VIBING_WUMPUS_PAUSE_MUSIC"],
  inlineRequire() {
    return require(17729) /* fadeIn */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CONNECTION_CLOSED", "IDLE", "WINDOW_FOCUS", "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN", "CONTENT_INVENTORY_MANUAL_REFRESH", "CONTENT_INVENTORY_INBOX_STALE", "SPOTIFY_NEW_TRACK", "GAME_PROFILE_OPEN"],
  inlineRequire() {
    return require(17730) /* getBackoffJitter */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["QUESTS_FETCH_CURRENT_QUESTS_BEGIN", "POST_CONNECTION_OPEN", "RUNNING_GAMES_CHANGE", "RUNNING_NON_GAMES_CHANGE", "USER_SETTINGS_PROTO_UPDATE", "START_SESSION", "LOGOUT"],
  inlineRequire() {
    return require(17733) /* _fetch */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED"],
  inlineRequire() {
    return require(17735) /* log */.default;
  },
  hasStoreChangeListeners: true,
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MESSAGE_CREATE", "MESSAGE_SEND_FAILED"],
  inlineRequire() {
    return require(17736) /* handleMessageSendFailure */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["APP_STATE_UPDATE", "POST_CONNECTION_OPEN"],
  inlineRequire() {
    return require(17737) /* syncYYTextReplacementExperiment */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN"],
  inlineRequire() {
    return require(17741) /* updateSocialRpcNetworkConfig */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "APP_STATE_UPDATE"],
  inlineRequire() {
    return require(17742) /* updateApiRequestConfig */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "USER_SETTINGS_PROTO_UPDATE"],
  inlineRequire() {
    return require(17743) /* prototype */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS"],
  inlineRequire() {
    return require(17744) /* fetchForwardReferencedGuilds */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "LOGIN_SUCCESS", "LOGIN_RESET", "LOGOUT"],
  inlineRequire() {
    return require(14587) /* handlePasskeyUpsellShow */.default;
  },
  neverLoadBeforeConnectionOpen: true,
  hasStoreChangeListeners: true
};
set = {
  actions: ["AUTHENTICATOR_DELETE", "CURRENT_USER_UPDATE", "MFA_WEBAUTHN_CREDENTIALS_LOADED"],
  inlineRequire() {
    return require(17746) /* handleAuthenticatorDelete */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN"],
  inlineRequire() {
    return require(17747) /* prototype */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "MESSAGE_UPDATE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_AROUND_SUCCESS", "LOAD_RECENT_MENTIONS_SUCCESS", "LOAD_PINNED_MESSAGES_SUCCESS", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS"],
  inlineRequire() {
    return require(17750) /* handleReferralMessages */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["MEDIA_ENGINE_SET_AUDIO_ENABLED", "AUDIO_INPUT_DETECTED", "AUDIO_SET_DISPLAY_SILENCE_WARNING", "CERTIFIED_DEVICES_SET", "AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_OUTPUT_DEVICE", "MEDIA_ENGINE_DEVICES", "RTC_CONNECTION_STATE", "VOICE_STATE_UPDATES", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "MEDIA_ENGINE_SOUNDSHARE_FAILED", "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", "MEDIA_ENGINE_VIDEO_FILTER_ERROR", "MEDIA_ENGINE_VIDEO_STATE_CHANGED", "NATIVE_SCREEN_SHARE_PICKER_UPDATE", "NATIVE_SCREEN_SHARE_PICKER_ERROR", "MEDIA_SESSION_JOINED", "RTC_CONNECTION_UPDATE_ID", "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS", "REPORT_AV_ERROR", "VIDEO_STREAM_READY_TIMEOUT", "CLEAR_VIDEO_STREAM_READY_TIMEOUT", "RTC_CONNECTION_VIDEO", "STREAM_CLOSE"],
  inlineRequire() {
    return require(17751) /* setDifference */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["STREAM_WATCH", "STREAM_START", "STREAM_CREATE", "STREAM_UPDATE", "STREAM_DELETE", "STREAM_CLOSE", "CALL_UPDATE", "CHANNEL_UPDATES", "VOICE_CHANNEL_SELECT", "VOICE_STATE_UPDATES", "CONNECTION_CLOSED", "LOGOUT"],
  inlineRequire() {
    return require(17773) /* platformShowStreamFull */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: [],
  inlineRequire() {
    return require(17777) /* experimentStoreUpdateHandler */.default;
  },
  hasStoreChangeListeners: true
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CHANNEL_SELECT", "CHANNEL_CREATE", "CHANNEL_DELETE", "CHANNEL_UPDATES", "GUILD_CREATE", "GUILD_UPDATE", "GUILD_DELETE", "LOGOUT", "RELATIONSHIP_ADD", "RELATIONSHIP_REMOVE", "RELATIONSHIP_UPDATE", "THREAD_CREATE", "THREAD_DELETE", "THREAD_UPDATE", "USER_UPDATE"],
  inlineRequire() {
    return require(17778) /* indexingEnabled */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["CHANNEL_SELECT"],
  inlineRequire() {
    return require(17781) /* handleChannelSelect */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["CONNECTION_OPEN_SUPPLEMENTAL", "SAFETY_FLOWS_MODAL_OPEN", "USER_REQUIRED_ACTION_UPDATE"],
  inlineRequire() {
    return require(17785) /* handleConnectionOpenSupplemental */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["USER_APPLICATION_IDENTITY_UPDATE", "USER_APPLICATION_IDENTITY_REMOVE"],
  inlineRequire() {
    return require(17809) /* handleUserApplicationIdentityGatewayEvent */.default;
  }
};
set = {
  actions: ["APP_STATE_UPDATE"],
  inlineRequire() {
    return require(17810) /* makeLogLine */.default;
  }
};
set = {
  actions: ["POST_CONNECTION_OPEN", "CURRENT_USER_UPDATE", "LOGOUT", "NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER"],
  inlineRequire() {
    return require(17218) /* scheduleUpcomingWarning */.default;
  },
  hasStoreChangeListeners: true,
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: [],
  inlineRequire() {
    return require(17811) /* isLikelyControl */.default;
  },
  hasStoreChangeListeners: true,
  loadRightBeforeConnectionOpen: true
};
set = {
  actions: ["QUESTS_SEND_HEARTBEAT_SUCCESS", "QUESTS_SEND_HEARTBEAT_FAILURE", "QUESTS_ENROLL_SUCCESS", "RUNNING_GAMES_CHANGE", "RUNNING_NON_GAMES_CHANGE", "LOCAL_ACTIVITY_UPDATE", "RPC_APP_DISCONNECTED", "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS", "STREAM_START", "STREAM_CREATE", "STREAM_CLOSE", "PASSIVE_UPDATE_V2", "VOICE_STATE_UPDATES", "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS", "FRAME_LAUNCH", "FRAME_STOP", "EMBEDDED_ACTIVITY_UPDATE_V2", "QUESTS_PREVIEW_UPDATE_SUCCESS", "QUEST_APPLICATION_START_TIMER", "GAME_FETCH_SUCCESS", "APPLICATIONS_FETCH_SUCCESS"],
  inlineRequire() {
    return require(17812) /* isQuestProgressable */.default;
  },
  neverLoadBeforeConnectionOpen: true
};
set = {
  actions: ["ACCOUNT_LINK_AUTHORIZATION_COMPLETED", "OAUTH2_TOKEN_CREATE", "USER_AUTHORIZED_APPS_UPDATE", "APP_STATE_UPDATE"],
  inlineRequire() {
    return require(17813) /* AccountLinkManagerNative */.default;
  },
  loadRightBeforeConnectionOpen: true
};
const populateMap = set.initialize(set);
const result = set.fileFinishedImporting("modules/app_startup/ManagerRegistry.native.tsx");

export default set;
