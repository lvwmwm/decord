// Module ID: 4942
// Function ID: 4943
// Name: styleProperties
// Dependencies: [19, 4481, 4205, 709, 1362, 4197, 4218, 4935, 4939, 4941, 4943, 4938, 4477, 1234, 2]
// Exports: useButtonPillStyles, useButtonPressAnimationProps, useButtonScaleStyles, useButtonTextColorStyles, useForegroundColor, useGradientPillStyles, useIconSizeStyles, useIconTintStyles, useProfileThemedButtonStyles

// Module 4942 (styleProperties)
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import closure_3 from "noop" /* 19 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
let c4 = "rgba(0,0,0,0.001)";
let closure_5 = createCacheKey.experimental_createToken(() => "#161CBB");
let closure_6 = createCacheKey.experimental_createToken(() => "#1318A0");
createCacheKey = { primary: ThemesDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT, "experimental_welcome-secondary": ThemesDefault.unsafe_rawColors.WHITE, secondary: ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, tertiary: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT, destructive: ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-primary": ThemesDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT, "critical-secondary": ThemesDefault.colors.CONTROL_CRITICAL_SECONDARY_TEXT_DEFAULT, active: ThemesDefault.colors.CONTROL_CONNECTED_TEXT_DEFAULT, "primary-overlay": ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, "secondary-overlay": ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, "experimental_premium-primary": ThemesDefault.colors.WHITE, "experimental_premium-basic": ThemesDefault.colors.WHITE, "experimental_premium-secondary": ThemesDefault.colors.TEXT_BRAND, "icon-only": ThemesDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT, expressive: ThemesDefault.colors.CONTROL_EXPRESSIVE_TEXT_DEFAULT };
const styleProperties = createCacheKey.createStyleProperties((arg0) => {
  let obj = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
  switch (obj) {
    case "HTTP":
    break;
    case "T":
    break;
    case "HermesInternal":
    break;
    case "Icon":
    break;
    case "IconComponent":
    break;
    case "c":
    break;
    case "p":
    break;
    case "LengthDelimited":
    break;
    case "limit":
    break;
    case "i":
    break;
    case "it":
    break;
    case "d":
    break;
    case "Map":
    break;
    case "Math":
    break;
    case "h":
    break;
    case "Number":
    break;
    case "Object":
    break;
    case "ct":
    break;
    case "PX_16":
    break;
    case "flex":
    break;
    case "flexDirection":
    break;
    case "PX_8":
    break;
    case "Path":
    break;
    case "Promise":
    break;
    case "s":
    break;
    case "Reflect":
    break;
    case "Set":
    break;
    case "format":
    break;
    case "formatToPlainString":
    break;
    case "String":
    break;
    case "Symbol":
    break;
    case "Text":
    break;
    case "x":
    break;
    case "View":
    break;
    case "w":
    break;
    case "WireType":
    break;
    case "__closure":
    break;
    case "__d":
    break;
    case "__esModule":
    break;
    case "__initData":
    break;
    case "filter":
    break;
    case "__packager_asset":
    break;
    case "k":
    break;
    case "set":
    break;
    case "__workletHash":
    break;
    case "_desired":
    break;
    case "_distance":
    break;
    case "st":
    break;
    case "accessibilityLabel":
    break;
    case "accessibilityRole":
    break;
    case "accessible":
    break;
    case "padding":
    break;
    case "paddingHorizontal":
    break;
    case "add":
    break;
    case "alignItems":
    break;
    case "ao":
    break;
    case "applicationId":
    break;
    case "ti":
    break;
    case "apply":
    break;
    case "assign":
    break;
    case "backgroundColor":
    break;
    case "round":
    break;
    case "bm":
    break;
    case "body":
    break;
    case "borderRadius":
    break;
    case "bottom":
    break;
    case "call":
    break;
    case "channel":
    break;
    case "channelId":
    break;
    case "channel_id":
    break;
    case "id":
    break;
    case "children":
    break;
    case "cix":
    break;
    case "ix":
    break;
    case "unicodeVersion":
    break;
    case "code":
    break;
    case "color":
    break;
    case "colors":
    break;
    case "concat":
    break;
    case "construct":
    break;
    case "constructor":
    break;
    case "container":
    break;
    case "content":
    break;
    case "context":
    break;
    case "text":
    break;
    case "count":
    break;
    case "create":
    break;
    case "createStyles":
    break;
    case "ty":
    break;
    case "current":
    break;
    case "cursor":
    break;
    case "data":
    break;
    case "ddd":
    break;
    case "default":
    break;
    case "defineProperty":
    break;
    case "op":
    break;
    case "delete":
    break;
    case "description":
    break;
    case "ip":
    break;
    case "disabled":
    break;
    case "sa":
    break;
    case "dispatch":
    break;
    case "displayName":
    break;
    case "diversity":
    break;
    case "v":
    break;
    case "done":
    break;
    case "duration":
    break;
    case "enabled":
    break;
    case "end":
    break;
    case "enumerable":
    break;
    case "error":
    break;
    case "exports":
    break;
    case "fileFinishedImporting":
    break;
    case "fill":
    break;
    case "find":
    break;
    case "ind":
    break;
    case "flags":
    break;
    case "forEach":
    break;
    case "gap":
    break;
    case "get":
    break;
    case "getChannel":
    break;
    case "getCurrentUser":
    break;
    case "guild":
    break;
    case "guildId":
    break;
    case "guild_id":
    break;
    case "has":
    break;
    case "hasDiversityParent":
    break;
    case "hash":
    break;
    case "hd":
    break;
    case "header":
    break;
    case "height":
    break;
    case "httpServerLocation":
    break;
    case "icon":
    break;
    case "includes":
    break;
    case "index":
    break;
    case "indexOf":
    break;
    case "intl":
    break;
    case "items":
    break;
    case "join":
    break;
    case "jsx":
    break;
    case "jsxs":
    break;
    case "justifyContent":
    break;
    case "key":
    break;
    case "keys":
    break;
    case "kind":
    break;
    case "ks":
    break;
    case "space":
    break;
    case "label":
    break;
    case "lc":
    break;
    case "left":
    break;
    case "length":
    break;
    case "lj":
    break;
    case "loadJsonAsset":
    break;
    case "location":
    break;
    case "map":
    break;
    case "marginTop":
    break;
    case "marginBottom":
    break;
    case "match":
    break;
    case "max":
    break;
    case "memo":
    break;
    case "message":
    break;
    case "messageId":
    break;
    case "method":
    break;
    case "methodobject":
    break;
    case "withTiming":
    break;
    case "min":
    break;
    case "mn":
    break;
    case "mode":
    break;
    case "name":
    break;
    case "names":
    break;
    case "next":
    break;
    case "nm":
    break;
    case "no":
    break;
    case "now":
    break;
    case "np":
    break;
    case "onPress":
    break;
    case "opacity":
    break;
    case "options":
    break;
    case "parent":
    break;
    case "paths":
    break;
    case "pos":
    break;
    case "position":
    break;
    case "props":
    break;
    case "prototype":
    break;
    case "type":
    break;
    case "push":
    break;
    case "radii":
    break;
    case "raw":
    break;
    case "ref":
    break;
    case "registerAsset":
    break;
    case "rejectWithError":
    break;
    case "replace":
    break;
    case "resizeMode":
    break;
    case "size":
    break;
    case "resolve":
    break;
    case "result":
    break;
    case "right":
    break;
    case "runOnJS":
    break;
    case "scales":
    break;
    case "shapes":
    break;
    case "sk":
    break;
    case "skuId":
    break;
    case "slice":
    break;
    case "source":
    break;
    case "split":
    break;
    case "spriteIndex":
    break;
    case "sr":
    break;
    case "start":
    break;
    case "state":
    break;
    case "status":
    break;
    case "substring_i":
    break;
    case "string":
    break;
    case "style":
    break;
    case "surrogates":
    break;
    case "tag":
    break;
    case "test":
    break;
    case "then":
    break;
    case "title":
    break;
    case "toCharArray$esjava$1":
    break;
    case "toLowerCase":
    break;
    case "toString":
    break;
    case "top":
    break;
    case "track":
    break;
    case "transform":
    break;
    case "uri":
    break;
    case "url":
    break;
    case "useCallback":
    break;
    case "useEffect":
    break;
    case "useMemo":
    break;
    case "useRef":
    break;
    case "useState":
    break;
    case "useStateFromStores":
    break;
    case "user":
    break;
    case "userId":
    break;
    case "value":
    break;
    case "values":
    break;
    case "variant":
    break;
    case "width":
    break;
    case "window":
    break;
    case "withSpring":
    break;
    case "":
    break;
    case "isArrayBuffer":
    break;
    case "A":
    break;
    case "ay":
    break;
    case "guildVerificationRoleEnabled":
    break;
    case "extraBottomHeight":
    break;
    case "$ZodBoolean":
    break;
    case "ZodBoolean":
    break;
    case "B":
    break;
    case "le":
    break;
    case "an":
    break;
    case "n":
    break;
    case "useActionBarPrimaryButton":
    break;
    case "ActionBarPrimaryButton":
    break;
    case "u":
    break;
    case "tt":
    break;
    case "on":
    break;
    case "$ZodDate":
    break;
    case "ZodDate":
    break;
    case "D":
    break;
    case "DateToSystemTimezoneSetter":
    break;
    case "at":
    break;
    case "te":
    break;
    case "mez":
    break;
    case "Setter":
    break;
    case "useDeferredValue":
    break;
    case "MarkupParserNodeTypeError":
    break;
    case "E":
    break;
    case "Err":
    break;
    case "ro":
    break;
    case "or":
    break;
    case "khr":
    break;
    case "BOT_HTTP_INTERACTIONS":
    break;
    case "H":
    break;
    case "HT":
    break;
    case "TP":
    break;
    case "P":
    break;
    case "INTERACTIONS":
    break;
    case "NSFW_SPACE_WARNING_MODAL_CLICKED":
    break;
    case "rm":
    break;
    case "m":
    break;
    case "me":
    break;
    case "mes":
    break;
    case "I":
    break;
    case "InternalCard":
    break;
    case "ter":
    break;
    case "na":
    break;
    case "al":
    break;
    case "CardA11yWrapper":
    break;
    case "perGuildMaxCount":
    break;
    case "closeSuspendedUser":
    break;
    case "getChannelIcon":
    break;
    case "getChannelIconComponent":
    break;
    case "getChannelIconComponentWithGuild":
    break;
    case "co":
    break;
    case "C":
    break;
    case "Component":
    break;
    case "om":
    break;
    case "mp":
    break;
    case "po":
    break;
    case "pon":
    break;
    case "one":
    break;
    case "ne":
    break;
    case "en":
    break;
    case "$ZodCheckMaxLength":
    break;
    case "kMaxLength":
    break;
    case "L":
    break;
    case "eng":
    break;
    case "ng":
    break;
    case "el":
    break;
    case "li":
    break;
    case "lim":
    break;
    case "limited":
    break;
    case "limitedTimeBadge":
    break;
    case "mi":
    break;
    case "mit":
    break;
    case "getAppUIViewed":
    break;
    case "wedding":
    break;
    case "getMediaPostEmbedChannelId":
    break;
    case "createGuildReportRaidSystemMessage":
    break;
    case "$ZodMap":
    break;
    case "ZodMap":
    break;
    case "M":
    break;
    case "ap":
    break;
    case "useToolbarContext":
    break;
    case "ToolbarContext":
    break;
    case "ToIntlMathematicalValue":
    break;
    case "th":
    break;
    case "ValueSetter":
    break;
    case "$ZodCheckNumberFormat":
    break;
    case "N":
    break;
    case "NumberFormat":
    break;
    case "um":
    break;
    case "b":
    break;
    case "be":
    break;
    case "$ZodObject":
    break;
    case "$ZodObjectJIT":
    break;
    case "ZodObject":
    break;
    case "O":
    break;
    case "j":
    break;
    case "je":
    break;
    case "IT":
    break;
    case "MEDIA_PICKER_SEND_BUTTON_SPRING":
    break;
    case "marginHorizontal":
    break;
    case "Direction":
    break;
    case "rect":
    break;
    case "isUnderLockdown":
    break;
    case "AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING":
    break;
    case "BY":
    break;
    case "PROCESSING":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "tagTextInverted":
    break;
    case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
    break;
    case "RNSVGClipPath":
    break;
    case "ClipPath":
    break;
    case "$ZodPromise":
    break;
    case "ZodPromise":
    break;
    case "PromiseDeduper":
    break;
    case "is":
    break;
    case "se":
    break;
    case "dup":
    break;
    case "perUserFpsWindow":
    break;
    case "woman_and_man_holding_hands_medium_skin_tone_medium_dark_skin_tone":
    break;
    case "GUILD_ROLE_MEMBER_ADD":
    break;
    case "ADD_QUICK_REACTION":
    break;
    case "QUICK":
    break;
    case "REACT":
    break;
    case "REACTION":
    break;
    case "REACTION_ACTION_SHEET_OPENED":
    break;
    case "PREMIUM_STANDARD":
    break;
    case "APPLICATION_ONLY":
    break;
    case "ONLY_GUILD_EMOJIS_ALLOWED":
    break;
    case "LY":
    break;
    case "HubEmailConnectionSteps":
    break;
    case "DownloadIllocon":
    break;
    case "invalidEmojis":
    break;
    case "isAVI":
    break;
    case "isAVIF":
    break;
    case "IFD_TYPE_GPS":
    break;
    case "GPSAltitude":
    break;
    case "GPSAltitudeRef":
    break;
    case "Altitude":
    break;
    case "R":
    break;
    case "ReflectionBinaryReader":
    break;
    case "ef":
    break;
    case "f":
    break;
    case "BinaryReader":
    break;
    case "stopAnimation":
    break;
    case "woman_factory_worker_medium_skin_tone":
    break;
    case "man_factory_worker_medium_skin_tone":
    break;
    case "factory_worker_medium_skin_tone":
    break;
    case "$ZodSet":
    break;
    case "ZodSet":
    break;
    case "S":
    break;
    case "et":
    break;
    case "canUseEmojisEverywhere":
    break;
    case "postformat":
    break;
    case "form":
    break;
    case "orm":
    break;
    case "ma":
    break;
    case "mat":
    break;
    case "lai":
    break;
    case "StringBuilder":
    break;
    case "tr":
    break;
    case "tri":
    break;
    case "ring":
    break;
    case "in":
    break;
    case "ing":
    break;
    case "g":
    break;
    case "$ZodSymbol":
    break;
    case "ZodSymbol":
    break;
    case "SymbolLock":
    break;
    case "bo":
    break;
    case "bol":
    break;
    case "QUEST_BAR_MOBILE":
    break;
    case "QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT":
    break;
    case "INTERACTIVE_MUTED":
    break;
    case "GiftCardWallet3dIllustration":
    break;
    case "orbsBalance":
    break;
    case "lastFetchTimeMs":
    break;
    case "head_shaking_vertically":
    break;
    case "verticallyInverted":
    break;
    case "gameSessionId":
    break;
    case "ActionSheetHeaderPressableText":
    break;
    case "Pressable":
    break;
    case "ex":
    break;
    case "ext":
    break;
    case "isPurchase":
    break;
    case "isPurchaseDisabled":
    break;
    case "AccessibilityFocusView":
    break;
    case "V":
    break;
    case "W":
    break;
    case "ir":
    break;
    case "re":
    break;
    case "reType":
    break;
    case "pe":
    break;
    case "_clientPromise":
    break;
    case "maxDynamicContentSize":
    break;
    case "ACTION_SHEET_START_HEIGHT_RATIO":
    break;
    case "STAR":
    break;
    case "START":
    break;
    case "IO":
    break;
    case "__":
    break;
    case "__c":
    break;
    case "cl":
    break;
    case "clo":
    break;
    case "lo":
    break;
    case "los":
    break;
    case "os":
    break;
    case "su":
    break;
    case "sur":
    break;
    case "ur":
    break;
    case "isExpanded":
    break;
    case "__data__":
    break;
    case "_d":
    break;
    case "_data":
    break;
    case "__REMOTEDEV__":
    break;
    case "__DISCORD_WINDOW_ID":
    break;
    case "__iteratees__":
    break;
    case "_iter":
    break;
    case "_iterate":
    break;
    case "iteratee":
    break;
    case "tee":
    break;
    case "__SENTRY_RELEASE__":
    break;
    case "SENTRY_RELEASE":
    break;
    case "__INTERNAL_SLOT_MAP__":
    break;
    case "__BUNDLE_START_TIME__":
    break;
    case "__e":
    break;
    case "Mo":
    break;
    case "ModuleNotFoundError":
    break;
    case "du":
    break;
    case "GroupGamingSpotIllustration":
    break;
    case "__i":
    break;
    case "__init":
    break;
    case "_i":
    break;
    case "_init":
    break;
    case "init":
    break;
    case "ni":
    break;
    case "nit":
    break;
    case "ta":
    break;
    case "__filtered__":
    break;
    case "lte":
    break;
    case "__SENTRY_DEBUG__":
    break;
    case "__FORMATJS_LISTFORMAT_DATA__":
    break;
    case "TJS":
    break;
    case "pa":
    break;
    case "pack":
    break;
    case "package":
    break;
    case "ack":
    break;
    case "ka":
    break;
    case "age":
    break;
    case "ge":
    break;
    case "ger":
    break;
    case "_a":
    break;
    case "as":
    break;
    case "ass":
    break;
    case "asset":
    break;
    case "assetContainer":
    break;
    case "ss":
    break;
    case "person_in_bed_tone1":
    break;
    case "_w":
    break;
    case "wo":
    break;
    case "work":
    break;
    case "worklet":
    break;
    case "kl":
    break;
    case "let":
    break;
    case "Hash":
    break;
    case "sh":
    break;
    case "initialScrollToTop":
    break;
    case "flag_de":
    break;
    case "de":
    break;
    case "desired":
    break;
    case "es":
    break;
    case "si":
    break;
    case "sir":
    break;
    case "red":
    break;
    case "redBoxV2Android":
    break;
    case "getExperimentBucketName":
    break;
    case "di":
    break;
    case "dist":
    break;
    case "distance":
    break;
    case "distanceAttenuationEnabled":
    break;
    case "sta":
    break;
    case "tan":
    break;
    case "ce":
    break;
    case "ACTIVITY_SESSION_JOIN_FAILED":
    break;
    case "FAIL":
    break;
    case "FAILED":
    break;
    case "FAILED_ACTIVITY_LAUNCH_CHECKS":
    break;
    case "CHECKS_REQUIRED":
    break;
    case "REQUIRED_OPTIONS_FOR_START_PAYMENT":
    break;
    case "PAYMENT_FLOW_STEP":
    break;
    case "STEP_DISPLAY":
    break;
    case "DISPLAY_MEDIA_UPLOADS":
    break;
    case "access":
    break;
    case "accessibilityLabelCalendarFormat":
    break;
    case "cc":
    break;
    case "bi":
    break;
    case "bil":
    break;
    case "lit":
    break;
    case "Label":
    break;
    case "ab":
    break;
    case "abe":
    break;
    case "bel":
    break;
    case "PREMIUM_TIER_0_HEADER_GRADIENT_2":
    break;
    case "Role":
    break;
    case "RoleFlags":
    break;
    case "scrollTargetPinnedRange":
    break;
    case "getAvailablePlanForItems":
    break;
    case "bundlePreviewContainer":
    break;
    case "reviewContainer":
    break;
    case "viewContainerStyle":
    break;
    case "accessibleDismiss":
    break;
    case "accessibleDismissStyle":
    break;
    case "ble":
    break;
    case "leg_tone3":
    break;
    case "FAB_BUTTON_SIZE":
    break;
    case "minWidth":
    break;
    case "pad":
    break;
    case "ad":
    break;
    case "adding":
    break;
    case "dd":
    break;
    case "din":
    break;
    case "z":
    break;
    case "zo":
    break;
    case "zon":
    break;
    case "tal":
    break;
    case "collapseText":
    break;
    case "paddingVertical":
    break;
    case "SETTINGS_CHANGELOG":
    break;
    case "GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_JOINED":
    break;
    case "PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED":
    break;
    case "MISC":
    break;
    case "RED_NEW_34":
    break;
    case "ali":
    break;
    case "align":
    break;
    case "alignItemsAtEnd":
    break;
    case "alignItemsAtEndPaddingEnabled":
    break;
    case "ig":
    break;
    case "em":
    break;
    case "ms":
    break;
    case "USER_SETTINGS_SEARCH_PRESS":
    break;
    case "PRESS_ADD_COMMENTARY":
    break;
    case "COMMENTARY_EDITED":
    break;
    case "GuildEntityDao":
    break;
    case "EntityDao":
    break;
    case "Dao":
    break;
    case "unableToSyncDeletes":
    break;
    case "gradientOverride":
    break;
    case "renderOptions":
    break;
    case "app":
    break;
    case "application":
    break;
    case "applicationIdToGuildIds":
    break;
    case "pl":
    break;
    case "ca":
    break;
    case "cat":
    break;
    case "tio":
    break;
    case "io":
    break;
    case "showGuildEventModeratorActionSheet":
    break;
    case "GuildEventModeratorAction":
    break;
    case "_applyCombination":
    break;
    case "ly":
    break;
    case "backoffTimeSec":
    break;
    case "../../../../lib/assign":
    break;
    case "../../../lib/assign":
    break;
    case "../../lib/assign":
    break;
    case "../lib/assign":
    break;
    case ".":
    break;
    case "./":
    break;
    case "lib":
    break;
    case "assignSimilarDate":
    break;
    case "sign":
    break;
    case "gn":
    break;
    case "acceptedRequestLabel":
    break;
    case "foi":
    break;
    case "ios_backgroundColor":
    break;
    case "ba":
    break;
    case "back":
    break;
    case "background":
    break;
    case "backgroundColorGradient":
    break;
    case "kg":
    break;
    case "gr":
    break;
    case "un":
    break;
    case "und":
    break;
    case "Color":
    break;
    case "ACTIVITY_LAUNCH_UNKNOWN_CHANNEL":
    break;
    case "UNKNOWN":
    break;
    case "UNKNOWN_CHANNEL":
    break;
    case "DISCORD_CONSENT":
    break;
    case "_listRef":
    break;
    case "listRef":
    break;
    case "listRefHappeningNow":
    break;
    case "HappeningNowCardHeader":
    break;
    case "HeaderSubmittingIndicator":
    break;
    case "onViewAllSelected":
    break;
    case "_bodyArrayBuffer":
    break;
    case "dy":
    break;
    case "safeAreaRight":
    break;
    case "bor":
    break;
    case "border":
    break;
    case "order":
    break;
    case "der":
    break;
    case "Radius":
    break;
    case "iu":
    break;
    case "maxE":
    break;
    case "isCurrentUserTeen":
    break;
    case "Teen Screen Time Illo":
    break;
    case "overflow_bottom":
    break;
    case "_bottom":
    break;
    case "bot":
    break;
    case "bottom-right":
    break;
    case "ott":
    break;
    case "otto":
    break;
    case "tom":
    break;
    case "right shift":
    break;
    case "shiftLeft":
    break;
    case "DynamicallyInjectedByGestureHandler":
    break;
    case "cal":
    break;
    case "all":
    break;
    case "ll":
    break;
    case "_channelId":
    break;
    case "ch":
    break;
    case "cha":
    break;
    case "ha":
    break;
    case "ann":
    break;
    case "nn":
    break;
    case "isExtensionAnimated":
    break;
    case "addMembersContainer":
    break;
    case "r_mark_yUz$esjava$0":
    break;
    case "CRUNCHYROLL_LINK_DEST_ORIGIN":
    break;
    case "ORIGIN":
    break;
    case "isSelf":
    break;
    case "isSelfDeaf":
    break;
    case "afk_channel_id":
    break;
    case "_id":
    break;
    case "family_adult_adult_child":
    break;
    case "family_adult_adult_child_child":
    break;
    case "_children":
    break;
    case "_childrenToCellKey":
    break;
    case "child":
    break;
    case "hi":
    break;
    case "dr":
    break;
    case "ren":
    break;
    case "authorRow":
    break;
    case "wMWyci":
    break;
    case "ci":
    break;
    case "ix8XIj":
    break;
    case "uni":
    break;
    case "Version":
    break;
    case "endTime_":
    break;
    case "me_burst":
    break;
    case "burst":
    break;
    case "burst_colors":
    break;
    case "col":
    break;
    case "ors":
    break;
    case "rs":
    break;
    case "isAudioRouteEnabled":
    break;
    case "isOGG":
    break;
    case "addUserId":
    break;
    case "disableGuildSelect":
    break;
    case "GuildSelectDefaultIcon":
    break;
    case "concatSettings":
    break;
    case "subscriptionRoleId":
    break;
    case "$constructor":
    break;
    case "const":
      obj[0] = ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
      obj[1] = ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE;
      obj[2] = c4;
      obj[3] = c4;
    break;
    case "constr":
    break;
    case "ons":
    break;
    case "str":
    break;
    case "ru":
    break;
    case "tor":
    break;
    case "windowLength":
    break;
    case "_container":
    break;
    case "contain":
    break;
    case "containerBorderColor":
    break;
    case "ai":
    break;
    case "ner":
    break;
    case "hasAction":
    break;
    case "hasActionSheetOpen":
    break;
    case "numFinished":
    break;
    case "channelContainer":
    break;
    case "output_text":
    break;
    case "MagicWandIcon":
    break;
    case "creative_content":
    break;
    case "_contentAvailable":
    break;
    case "ten":
    break;
    case "tent":
    break;
    case "__wrapped__":
    break;
    case "__context":
    break;
    case "_context":
    break;
    case "contextBarRow":
    break;
    case "withActiveSpan":
    break;
    case "is_first_party":
    break;
    case "party":
    break;
    case "partyId":
    break;
    case "enablePanDownToClose":
    break;
    case "AccountAgeTier10LargeBadge":
    break;
    case "cou":
    break;
    case "Badge":
    break;
    case "trialSubText":
    break;
    case "trialSubTextContainer":
    break;
    case "getAdTrafficMetadataSealed":
    break;
    case "cr":
    break;
    case "les":
    break;
    case "message_type":
    break;
    case "_$esjava$current":
    break;
    case "cu":
    break;
    case "currentApp":
    break;
    case "currentAppIcon":
    break;
    case "containerInfo":
    break;
    case "foot_tone3":
    break;
    case "exclusions":
    break;
    case "settingsContainer":
    break;
    case "_$esjava$cursor":
    break;
    case "cursorColor":
    break;
    case "so":
    break;
    case "binding":
    break;
    case "NitroSupergraphicLogo":
    break;
    case "_clientSdkMetadata":
    break;
    case "MetadataFields":
    break;
    case "tada":
    break;
    case "da":
    break;
    case "dddd":
    break;
    case "columnNumber":
    break;
    case "nativeRow":
    break;
    case "withoutXY":
    break;
    case "__defaultLocale":
    break;
    case "_default":
    break;
    case "def":
    break;
    case "defaultLocale":
    break;
    case "fa":
    break;
    case "au":
    break;
    case "lt":
    break;
    case "localeIdentifier":
    break;
    case "define":
    break;
    case "efi":
    break;
    case "fi":
    break;
    case "fin":
    break;
    case "unwrap":
    break;
    case "flag_km":
    break;
    case "undelete":
    break;
    case "del":
    break;
    case "deleteAllExcept":
    break;
    case "ele":
    break;
    case "ptt_start":
    break;
    case "_startMs":
    break;
    case "startMs":
    break;
    case "shouldTrackRichPresenceInviteEmbedViews":
    break;
    case "kiss_woman_man_tone2_tone3":
    break;
    case "VIBEGRATIONS_PROJECT_REMIX_TICKET":
    break;
    case "avatar_description":
    break;
    case "_description":
    break;
    case "desc":
    break;
    case "descriptionContainer":
    break;
    case "descriptionContainerStyle":
    break;
    case "esc":
    break;
    case "sc":
    break;
    case "scr":
    break;
    case "script":
    break;
    case "cri":
    break;
    case "pt":
    break;
    case "isOnReverseTrial":
    break;
    case "aria-disabled":
    break;
    case "disable":
    break;
    case "disabledAccessibilityHint":
    break;
    case "isa":
    break;
    case "sab":
    break;
    case "led":
    break;
    case "interestedIcon":
    break;
    case "contentSelectPlan":
    break;
    case "couple_with_heart":
    break;
    case "couple_with_heart_dark_skin_tone":
    break;
    case "paypalEnabled":
    break;
    case "_dispatch":
    break;
    case "_dispatchFrame":
    break;
    case "dispatchFrameUrl":
    break;
    case "spa":
    break;
    case "pat":
    break;
    case "patch":
    break;
    case "tc":
    break;
    case "_performanceLogger":
    break;
    case "sanitizeEmbed":
    break;
    case "time_to_full_display":
    break;
    case "_displayName":
    break;
    case "display":
    break;
    case "displayNameAccessibilityHint":
    break;
    case "spl":
    break;
    case "play":
    break;
    case "la":
    break;
    case "am":
    break;
    case "internalBinaryRead":
    break;
    case "div":
    break;
    case "diversityChildren":
    break;
    case "ve":
    break;
    case "ver":
    break;
    case "renderConfirmButton":
    break;
    case "createStripeSetupIntent":
    break;
    case "createdAt":
    break;
    case "createdAtMs":
    break;
    case "swatch":
    break;
    case "swatchSelected":
    break;
    case "toExpPos":
    break;
    case "do":
    break;
    case "don":
    break;
    case "doneButton":
    break;
    case "doneButtonContainer":
    break;
    case "__duration":
    break;
    case "_duration":
    break;
    case "dur":
    break;
    case "durationContainer":
    break;
    case "ura":
    break;
    case "rat":
    break;
    case "ratio":
    break;
    case "assetFormat":
    break;
    case "app_hardware_acceleration_enabled":
    break;
    case "_enabled":
    break;
    case "_enabledPaymentMethods":
    break;
    case "enable":
    break;
    case "shouldRestrictUpdatingCreatorMonetizationSettings":
    break;
    case "@braintree/extended-promise":
    break;
    case "extend":
    break;
    case "extended":
    break;
    case "ended":
    break;
    case "nd":
    break;
    case "promise":
    break;
    case "promiseProcessor":
    break;
    case "checkoutFailed":
    break;
    case "enum":
    break;
    case "nu":
    break;
    case "num":
    break;
    case "mer":
    break;
    case "era":
    break;
    case "referrerPolicy":
    break;
    case "../../../lib/braintree-error":
    break;
    case "../../lib/braintree-error":
    break;
    case "../lib/braintree-error":
    break;
    case "brain":
    break;
    case "braintree":
    break;
    case "tre":
    break;
    case "tree":
    break;
    case "ee":
    break;
    case "err":
    break;
    case "errorApplyingMediaFilterSettings":
    break;
    case "FilterSettingsGraph":
    break;
    case "phoenix":
    break;
    case "googleAuthorizationFingerprint":
    break;
    case "printer":
    break;
    case "exp":
    break;
    case "expo":
    break;
    case "port":
    break;
    case "rtsState":
    break;
    case "ts":
    break;
    case "fil":
    break;
    case "file":
    break;
    case "F":
    break;
    case "Finish":
    break;
    case "he":
    break;
    case "ServerIconLilQuackSPondverseExample":
    break;
    case "GiftingTier6LargeBadge":
    break;
    case "forwardRef":
    break;
    case "EntitlementTenantFulfillmentStatus":
    break;
    case "ill":
    break;
    case "__findAnimatedPropsNodes":
    break;
    case "channel_overrides":
    break;
    case "overrides":
      obj = { backgroundInactive: null, backgroundPressed: null, borderInactive: null, borderPressed: null };
      obj[0] = ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT;
      obj[1] = ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_ACTIVE;
      obj[2] = c4;
      obj[3] = c4;
      return obj;
    case "overridesFormatted":
    break;
    case "MONOCHROME":
    break;
    case "CHROME":
    break;
    case "MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES":
    break;
    case "system_channel_flags":
    break;
    case "channel_flags":
    break;
    case "_flags":
    break;
    case "flag":
    break;
    case "lag":
    break;
    case "gs":
    break;
    case "_oldestUnreadMessageId":
    break;
    case "oldestUnreadMessageId":
    break;
    case "oldestUnreadMessageIdStale":
    break;
    case "addPageListener":
    break;
    case "fo":
    break;
    case "for":
    break;
    case "forEachChannel":
    break;
    case "DiscountsMegaphoneSpotIllustration":
    break;
    case "counts":
    break;
    case "ga":
    break;
    case "pho":
    break;
    case "phone":
    break;
    case "videoStoppedReason":
    break;
    case "remoteAddress":
    break;
    case "favoriteGuildVisibleSetting":
    break;
    case "getChannelA11yHint":
    break;
    case "Channel":
    break;
    case "interpretNumericEntities":
    break;
    case "getCurrent":
    break;
    case "getCurrentUserActiveStream":
    break;
    case "U":
    break;
    case "Use":
    break;
    case "User":
    break;
    case "ser":
    break;
    case "StreamVolumeItem":
    break;
    case "_guildId":
    break;
    case "gu":
    break;
    case "current_guild_id":
    break;
    case "getConsoleIconForVoicePlatform":
    break;
    case "VoicePlatforms":
    break;
    case "selectionStates":
    break;
    case "hasDiversity":
    break;
    case "Parent":
    break;
    case "ParentalControlledDefaultGuildsRestrictedV2":
    break;
    case "ar":
    break;
    case "DefaultGuildsRestricted":
    break;
    case "DefaultGuildsRestrictedV2":
    break;
    case "getMentionGames":
    break;
    case "avatar_hash":
    break;
    case "_hash":
    break;
    case "hashKey":
    break;
    case "bhd":
    break;
    case "INVITE_RESOLVE":
    break;
    case "INVITE_RESOLVED":
    break;
    case "connectionsList":
    break;
    case "_header":
    break;
    case "_headerLayoutYs":
    break;
    case "head":
    break;
    case "ade":
    break;
    case "YsCuyF":
    break;
    case "FAMILY_CENTER_ERROR_CODE_TO_FAILURE":
    break;
    case "REACT_COMPILER":
    break;
    case "RPC_VIDEO_WRITE":
    break;
    case "TREATMENT_B":
    break;
    case "getChannelRecords":
    break;
    case "player_height":
    break;
    case "hei":
    break;
    case "heightAverageWindow":
    break;
    case "eight":
    break;
    case "ht":
    break;
    case "withMonitor":
    break;
    case "addNode":
    break;
    case "debugLogCs2GsiPayload":
    break;
    case "loadAllGuildAndPrivateChannelsFromDisk":
    break;
    case "FadeOutRight":
    break;
    case "http":
    break;
    case "oc":
    break;
    case "oca":
    break;
    case "NonConvert":
    break;
    case "Convert":
      obj[0] = c4;
      obj[1] = c4;
      obj[2] = c4;
      obj[3] = c4;
      return obj;
    case "ConvertEmoticons":
    break;
    case "mot":
    break;
    case "icons":
    break;
    case "strategy":
    break;
    case "getFramesToPop":
    break;
    case "starSmall":
    break;
    case "allMediaResults":
    break;
    case "showConfirmModal":
    break;
    case "_include":
    break;
    case "_includes":
    break;
    case "inc":
    break;
    case "include":
    break;
    case "includesBounties":
    break;
    case "lu":
    break;
    case "lud":
    break;
    case "Bounties Scroll Indicator":
    break;
    case "origin_pane":
    break;
    case "rejectResponderTermination":
    break;
    case "__internalInstanceHandle":
    break;
    case "_int":
    break;
    case "_internalInstanceHandle":
    break;
    case "internal":
    break;
    case "internalInstanceHandle":
    break;
    case "base64StringFromByteArray":
    break;
    case "indexOfSingleActiveTouch":
    break;
    case "TouchPad":
    break;
    case "deleteKeyFromRecyclePool":
    break;
    case "pronouns":
    break;
    case "pronounsAccessibilityHint":
    break;
    case "int":
    break;
    case "intlMessage":
    break;
    case "tl":
    break;
    case "getAnyErrorMessage":
    break;
    case "getAnyErrorMessageAndField":
    break;
    case "activity_items":
    break;
    case "_items":
    break;
    case "_itemsForType":
    break;
    case "item":
    break;
    case "bow_tone3":
    break;
    case "activeUnjoinedThreads":
    break;
    case "jo":
    break;
    case "js":
    break;
    case "xs":
    break;
    case "isRendered":
    break;
    case "gradientOverlay":
    break;
    case "yOffset":
    break;
    case "hasInputText":
    break;
    case "targetHeight":
    break;
    case "getHeight":
    break;
    case "jus":
    break;
    case "justify":
    break;
    case "if":
    break;
    case "Content":
    break;
    case "checkoutInitParameters":
    break;
    case "showThreadNotificationsBottomSheet":
    break;
    case "BottomSheetFlatList":
    break;
    case "FlatList":
    break;
    case "PasskeysSpotIllustration":
    break;
    case "ke":
    break;
    case "useStorekitResubscribe":
    break;
    case "subscribeFromItem":
    break;
    case "embedded_activity_location_kind":
    break;
    case "ki":
    break;
    case "kin":
    break;
    case "deleteNodeOnBackspace":
    break;
    case "Backspace":
    break;
    case "spacer":
    break;
    case "spacerStyle":
    break;
    case "aria-label":
    break;
    default:
  }
});
let closure_9 = { code: "function ButtonHooksNativeTsx1(){const{themedStyles,colors,interpolateColor,pressed}=this.__closure;var _themedStyles$backgro,_themedStyles,_themedStyles$borderC,_themedStyles2;const backgroundColor=(_themedStyles$backgro=(_themedStyles=themedStyles)===null||_themedStyles===void 0?void 0:_themedStyles.backgroundColor)!==null&&_themedStyles$backgro!==void 0?_themedStyles$backgro:[colors.backgroundInactive,colors.backgroundPressed];const borderColor=(_themedStyles$borderC=(_themedStyles2=themedStyles)===null||_themedStyles2===void 0?void 0:_themedStyles2.borderColor)!==null&&_themedStyles$borderC!==void 0?_themedStyles$borderC:[colors.borderInactive,colors.borderPressed];return{backgroundColor:interpolateColor(pressed.get(),[0,1],backgroundColor),borderColor:interpolateColor(pressed.get(),[0,1],borderColor)};}" };
let closure_10 = { code: "function ButtonHooksNativeTsx2(){const{width,scaleAmountInPx,withSpring,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const scale=width.get()>0?(width.get()-scaleAmountInPx)/width.get():1;return{transform:[{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING,'animate-always')}]};}" };
let result = require("set").fileFinishedImporting("design/components/Button/native/ButtonHooks.native.tsx");

export const SAFE_TRANSPARENT_COLOR = "rgba(0,0,0,0.001)";
export const useProfileThemedButtonStyles = function useProfileThemedButtonStyles(arg0) {
  const _require = arg0;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, arg0];
  return React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(709).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4205).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4205).getContrastingColor(tmp, obj);
      const obj8 = variant(4205);
      const darkenColorResult = variant(4205).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1362);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1362).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4205).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4205);
      const obj6 = variant(1362);
      const isThemeLightResult1 = variant(1362).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4205).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1362);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4205).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1362);
      const tmp8 = variant(4205);
      let obj2 = variant(4205);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
};
export const useForegroundColor = function useForegroundColor(variant) {
  return map.useToken(createCacheKey[variant]);
};
export const useButtonColorStyles = styleProperties;
export const useButtonTextColorStyles = function useButtonTextColorStyles(style) {
  const _require = style;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, style];
  const memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(709).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4205).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4205).getContrastingColor(tmp, obj);
      const obj8 = variant(4205);
      const darkenColorResult = variant(4205).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1362);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1362).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4205).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4205);
      const obj6 = variant(1362);
      const isThemeLightResult1 = variant(1362).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4205).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1362);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4205).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1362);
      const tmp8 = variant(4205);
      let obj2 = variant(4205);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const obj = _require(theme[2]);
  let color;
  const token = _require(theme[5]).useToken(createCacheKey[style]);
  if (memo != null) {
    color = memo.color;
  }
  if (color == null) {
    color = token;
  }
  return { color };
};
export const useIconTintStyles = function useIconTintStyles(arg0) {
  const _require = arg0;
  const themeContext = _require(theme[2]).useThemeContext();
  const primaryColor = themeContext.primaryColor;
  theme = themeContext.theme;
  const items = [theme, primaryColor, arg0];
  const memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(709).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4205).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4205).getContrastingColor(tmp, obj);
      const obj8 = variant(4205);
      const darkenColorResult = variant(4205).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1362);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1362).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4205).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4205);
      const obj6 = variant(1362);
      const isThemeLightResult1 = variant(1362).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4205).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1362);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4205).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1362);
      const tmp8 = variant(4205);
      let obj2 = variant(4205);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const obj = _require(theme[2]);
  let tintColor;
  const token = _require(theme[5]).useToken(createCacheKey[arg0]);
  if (memo != null) {
    tintColor = memo.color;
  }
  if (tintColor == null) {
    tintColor = token;
  }
  return { tintColor };
};
export const useGradientPillStyles = function useGradientPillStyles(variant) {
  return { borderColor: styleProperties(variant).borderInactive };
};
export const useButtonPillStyles = function useButtonPillStyles(variant, pressed) {
  const _require = variant;
  let obj = _require(4205);
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  let memo = primaryColor;
  const theme = themeContext.theme;
  dependencyMap = theme;
  let items = [theme, primaryColor, variant];
  memo = React.useMemo(() => {
    if (null == memo) {
      return null;
    } else if ("primary" === variant) {
      const WHITE = memo(709).unsafe_rawColors.WHITE;
      let obj = { base: null, contrastRatio: null };
      obj[0] = WHITE;
      obj[1] = variant(4205).WCAGContrastRatios.HighContrastText;
      const contrastingColor = variant(4205).getContrastingColor(tmp, obj);
      const obj8 = variant(4205);
      const darkenColorResult = variant(4205).darkenColor(contrastingColor, 0.5);
      obj = { backgroundColor: null, borderColor: null, color: null };
      const items = [contrastingColor, darkenColorResult];
      obj[0] = items;
      const items1 = [contrastingColor, darkenColorResult];
      obj[1] = items1;
      obj[2] = WHITE;
      return obj;
    } else if ("secondary" === tmp45) {
      const obj5 = variant(1362);
      const tmp20 = dependencyMap;
      const isThemeLightResult = variant(1362).isThemeLight(dependencyMap);
      const setColorOpacity2 = variant(4205).setColorOpacity;
      if (isThemeLightResult) {
        let setColorOpacity2Result = setColorOpacity2("white", 0.72);
      } else {
        setColorOpacity2Result = setColorOpacity2("white", 0.24);
      }
      const items2 = [setColorOpacity2Result, ];
      const tmp24 = variant(4205);
      const obj6 = variant(1362);
      const isThemeLightResult1 = variant(1362).isThemeLight(tmp20);
      const setColorOpacity3 = variant(4205).setColorOpacity;
      if (isThemeLightResult1) {
        let setColorOpacity3Result = setColorOpacity3("white", 0.62);
      } else {
        setColorOpacity3Result = setColorOpacity3("white", 0.34);
      }
      obj1 = { backgroundColor: null, borderColor: null, color: "Array" };
      items2[1] = setColorOpacity3Result;
      obj1[0] = items2;
      const items3 = [closure_1_4, closure_1_4];
      obj1[1] = items3;
      return obj1;
    } else if ("tertiary" === tmp45) {
      obj = variant(1362);
      const isThemeLightResult2 = obj.isThemeLight(dependencyMap);
      const tmp4 = dependencyMap;
      const setColorOpacity = variant(4205).setColorOpacity;
      if (isThemeLightResult2) {
        let setColorOpacityResult = setColorOpacity(tmp, 0.4);
      } else {
        setColorOpacityResult = setColorOpacity("white", 0.1);
      }
      const items4 = [setColorOpacityResult, ];
      obj1 = variant(1362);
      const tmp8 = variant(4205);
      let obj2 = variant(4205);
      if (isThemeLightResult3) {
        let darkenColorResult1 = obj2.darkenColor(setColorOpacityResult, 0.3);
      } else {
        darkenColorResult1 = obj2.setColorOpacity("white", 0.2);
      }
      obj2 = { backgroundColor: null, borderColor: null, color: "Array" };
      items4[1] = darkenColorResult1;
      obj2[0] = items4;
      const items5 = [closure_1_4, closure_1_4];
      obj2[1] = items5;
      return obj2;
    } else {
      return null;
    }
  }, items);
  const tmp3 = styleProperties(variant);
  dependencyMap = tmp3;
  const fn = function s() {
    let backgroundColor;
    if (memo != null) {
      backgroundColor = tmp.backgroundColor;
    }
    if (backgroundColor == null) {
      const items = [, ];
      ({ backgroundInactive: arr[0], backgroundPressed: arr[1] } = dependencyMap);
      backgroundColor = items;
    }
    let borderColor;
    if (memo != null) {
      borderColor = tmp.borderColor;
    }
    if (borderColor == null) {
      const items1 = [, ];
      ({ borderInactive: arr2[0], borderPressed: arr2[1] } = dependencyMap);
      borderColor = items1;
    }
    const obj = { backgroundColor: variant(4218).interpolateColor(variant.get(), [0, 1], backgroundColor), borderColor: null };
    const obj2 = variant(4218);
    obj[1] = variant(4218).interpolateColor(variant.get(), [0, 1], borderColor);
    return obj;
  };
  obj = { themedStyles: memo, colors: tmp3, interpolateColor: _require(4218).interpolateColor, pressed };
  fn.__closure = obj;
  fn.__workletHash = 2383933325137;
  fn.__initData = closure_9;
  return _require(4218).useAnimatedStyle(fn);
};
export const useButtonScaleStyles = function useButtonScaleStyles(pressed, width, scaleAmountInPx) {
  const _require = pressed;
  closure_1 = width;
  dependencyMap = scaleAmountInPx;
  let obj = _require(4218);
  const fn = function n() {
    let obj = sharedValue1;
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    obj = { transform: null };
    obj = { scale: null };
    const obj4 = sharedValue(num[7]);
    const items = [1, num];
    const obj5 = sharedValue(num[6]);
    obj[0] = obj4.withSpring(sharedValue(num[6]).interpolate(sharedValue.get(), [0, 1], items), sharedValue(num[8]).ON_PRESS_SPRING, "animate-always");
    const items1 = [obj];
    obj[0] = items1;
    return obj;
  };
  obj = { width, scaleAmountInPx, withSpring: _require(4935).withSpring, interpolate: _require(4218).interpolate, pressed, ON_PRESS_SPRING: _require(4939).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17256006845494;
  fn.__initData = closure_10;
  return obj.useAnimatedStyle(fn);
};
export const useButtonPressAnimationProps = function useButtonPressAnimationProps(sharedValue, scaleAmountInPx, onLayout, onPressIn, onPressOut) {
  let num = scaleAmountInPx;
  if (scaleAmountInPx === undefined) {
    num = 8;
  }
  sharedValue = onLayout;
  let sharedValue1 = onPressIn;
  num = onPressOut;
  sharedValue = undefined;
  sharedValue1 = undefined;
  let obj = sharedValue(4218);
  sharedValue = obj.useSharedValue(0);
  let tmpResult = tmp(4218);
  sharedValue1 = tmpResult.useSharedValue(0);
  obj = {
    onPressIn: sharedValue.useCallback((arg0) => {
      const result = sharedValue.set(1);
      if (sharedValue1 != null) {
        tmp2(arg0);
      }
    }, items),
    onPressOut: sharedValue.useCallback((arg0) => {
      const result = sharedValue.set(0);
      if (num != null) {
        tmp2(arg0);
      }
    }, items1),
    onLayout: sharedValue.useCallback((nativeEvent) => {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
      if (sharedValue != null) {
        tmp2(nativeEvent);
      }
    }, items2),
    style: null
  };
  items = [sharedValue, onPressIn];
  items1 = [sharedValue, onPressOut];
  items2 = [sharedValue1, onLayout];
  tmpResult = tmp(4218);
  const fn = function n() {
    let obj = sharedValue1;
    num = 1;
    if (sharedValue1.get() > 0) {
      const diff = obj.get() - num;
      num = diff / obj.get();
    }
    obj = { transform: null };
    obj = { scale: null };
    const obj4 = sharedValue(num[7]);
    const items = [1, num];
    const obj5 = sharedValue(num[6]);
    obj[0] = obj4.withSpring(sharedValue(num[6]).interpolate(sharedValue.get(), [0, 1], items), sharedValue(num[8]).ON_PRESS_SPRING, "animate-always");
    const items1 = [obj];
    obj[0] = items1;
    return obj;
  };
  obj = { width: sharedValue1, scaleAmountInPx: num, withSpring: tmp(4935).withSpring, interpolate: tmp(4218).interpolate, pressed: sharedValue, ON_PRESS_SPRING: tmp(4939).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17256006845494;
  fn.__initData = closure_10;
  obj[3] = tmpResult.useAnimatedStyle(fn);
  return obj;
};
export const useIconSizeStyles = (arg0) => {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = arg2;
  if (arg2 === undefined) {
    BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = _require(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[9]).BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  let fontScale;
  fontScale = _require(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[10]).useFontScale();
  const items = [arg0, flag, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER, fontScale];
  return fontScale.useMemo(() => {
    callback(BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER[11]);
    if ("sm" === callback) {
      let tmpResult = tmp(tmp2[11]);
      let iconSize = tmpResult.getIconSize(tmp(tmp2[9]).SMALL_BUTTON_ICON_SIZE);
    } else {
      iconSize = tmp4;
      if ("lg" === tmp5) {
        tmpResult = tmp(tmp2[11]);
        iconSize = tmpResult.getIconSize(tmp(tmp2[9]).LARGE_BUTTON_ICON_SIZE);
      }
    }
    let width = iconSize;
    if (flag) {
      width = iconSize;
      if (fontScale > 1) {
        const tmpResult1 = tmp(tmp2[9]);
        const tmp13 = tmp(tmp2[12]).TextStyleSheet[tmpResult1.getButtonDefaultTextVariant(tmpResult1, tmp5)];
        const tmp9 = tmp(tmp2[13]).isAndroid() ? tmp13.fontSize : tmp13.lineHeight;
        width = iconSize;
        if (null != iconSize) {
          width = iconSize;
          if (null != tmp9) {
            const _Math = Math;
            const _Math2 = Math;
            width = Math.max(iconSize, tmp9 * Math.min(tmp8, BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER));
          }
        }
        const tmpResult2 = tmp(tmp2[13]);
      }
    }
    return { width, height: width };
  }, items);
};
