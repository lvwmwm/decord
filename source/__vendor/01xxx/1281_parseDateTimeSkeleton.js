// Module ID: 1281
// Function ID: 1282
// Name: parseDateTimeSkeleton
// Dependencies: []

// Module 1281 (parseDateTimeSkeleton)
arg5.parseDateTimeSkeleton = undefined;
const re0 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
arg5.parseDateTimeSkeleton = function parseDateTimeSkeleton(str) {
  const obj = {};
  const replaced = str.replace(obj, (arg0) => {
    let str = arg0[0];
    switch (str) {
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
        let str19 = "long";
        if (4 !== length) {
          let str20 = "short";
          if (5 === length) {
            str20 = "narrow";
          }
          str19 = str20;
        }
        obj.era = str19;
        return "";
      case "B":
      break;
      case "le":
        let str18 = "numeric";
        if (2 === length) {
          str18 = "2-digit";
        }
        obj.year = str18;
        const tmp61 = obj;
      break;
      case "an":
      break;
      case "n":
        let _RangeError8 = RangeError;
        let rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "useActionBarPrimaryButton":
      break;
      case "ActionBarPrimaryButton":
        _RangeError8 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "u":
      break;
      case "tt":
        _RangeError8 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "on":
      break;
      case "$ZodDate":
        _RangeError8 = RangeError;
        rangeError = new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        throw rangeError;
      case "ZodDate":
      break;
      case "D":
        let _RangeError7 = RangeError;
        let rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      case "DateToSystemTimezoneSetter":
      break;
      case "at":
        _RangeError7 = RangeError;
        rangeError1 = new RangeError("`q/Q` (quarter) patterns are not supported");
        throw rangeError1;
      case "te":
      break;
      case "mez":
        let diff = length - 1;
        let items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
      break;
      case "Setter":
      break;
      case "useDeferredValue":
        diff = length - 1;
        items = ["numeric", "2-digit", "short", "long", "narrow"];
        obj.month = items[diff];
      break;
      case "MarkupParserNodeTypeError":
        let tmp2 = obj;
        let tmp3 = length < 4;
        let str3 = "long";
        if (tmp3) {
          str3 = "short";
        }
        tmp2.timeZoneName = str3;
      break;
      case "E":
        let _RangeError6 = RangeError;
        let rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      case "Err":
      break;
      case "ro":
        _RangeError6 = RangeError;
        rangeError2 = new RangeError("`w/W` (week) patterns are not supported");
        throw rangeError2;
      case "or":
        str = new _RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        throw str;
      case "khr":
        obj.day = ["numeric", "2-digit"][length - 1];
      break;
      case "BOT_HTTP_INTERACTIONS":
        tmp17.hourCycle = str;
        tmp17.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "H":
        let _RangeError5 = RangeError;
        let rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "HT":
      break;
      case "TP":
        _RangeError5 = RangeError;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "P":
      break;
      case "INTERACTIONS":
        _RangeError5 = RangeError;
        rangeError3 = new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        throw rangeError3;
      case "NSFW_SPACE_WARNING_MODAL_CLICKED":
      break;
      case "rm":
        let str12 = "long";
        if (4 !== length) {
          let str13 = "short";
          if (5 === length) {
            str13 = "narrow";
          }
          str12 = str13;
        }
        obj.weekday = str12;
        const tmp37 = obj;
      break;
      case "m":
      break;
      case "me":
        if (length < 4) {
          const rangeError4 = new RangeError("`e..eee` (weekday) patterns are not supported");
          throw rangeError4;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][length - 4];
        }
      break;
      case "mes":
        _RangeError = str.RangeError;
      break;
      case "I":
        if (length < 4) {
          const _RangeError4 = RangeError;
          const rangeError5 = new RangeError("`c..ccc` (weekday) patterns are not supported");
          throw rangeError5;
        } else {
          obj.weekday = ["short", "long", "narrow", "short"][length - 4];
        }
      break;
      case "InternalCard":
      break;
      case "ter":
        obj.hour12 = true;
      break;
      case "na":
      break;
      case "al":
        let _RangeError3 = RangeError;
        let rangeError6 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError6;
      case "CardA11yWrapper":
      break;
      case "perGuildMaxCount":
        _RangeError3 = RangeError;
        rangeError6 = new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        throw rangeError6;
      case "closeSuspendedUser":
      break;
      case "getChannelIcon":
        obj.hourCycle = "h12";
        obj.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "getChannelIconComponent":
      break;
      case "getChannelIconComponentWithGuild":
        obj.hourCycle = "h23";
        obj.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "co":
      break;
      case "C":
        str = "h11";
      break;
      case "Component":
      break;
      case "om":
        obj.hourCycle = "h24";
        obj.hour = ["numeric", "2-digit"][length - 1];
      break;
      case "mp":
      break;
      case "po":
        let _RangeError2 = RangeError;
        let rangeError7 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError7;
      case "pon":
      break;
      case "one":
        _RangeError2 = RangeError;
        rangeError7 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError7;
      case "ne":
      break;
      case "en":
        _RangeError2 = RangeError;
        rangeError7 = new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        throw rangeError7;
      case "$ZodCheckMaxLength":
      break;
      case "kMaxLength":
        obj.minute = ["numeric", "2-digit"][length - 1];
      break;
      case "L":
      break;
      case "eng":
        obj.second = ["numeric", "2-digit"][length - 1];
      break;
      case "ng":
      break;
      case "el":
        let rangeError8 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        throw rangeError8;
      case "li":
      break;
      case "lim":
        rangeError8 = new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        throw rangeError8;
      case "limited":
      break;
      case "limitedTimeBadge":
        tmp2 = obj;
        tmp3 = length < 4;
        str3 = "long";
        if (tmp3) {
          str3 = "short";
        }
        tmp2.timeZoneName = str3;
      break;
      case "mi":
      break;
      case "mit":
        str = globalThis;
      break;
      case "getAppUIViewed":
      break;
      case "wedding":
        str = globalThis;
      break;
      case "getMediaPostEmbedChannelId":
      break;
      case "createGuildReportRaidSystemMessage":
        str = globalThis;
      break;
      case "$ZodMap":
      break;
      case "ZodMap":
        str = globalThis;
      break;
      case "M":
      break;
      case "ap":
        str = globalThis;
      break;
      case "useToolbarContext":
      break;
      case "ToolbarContext":
        str = globalThis;
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
        str = globalThis;
      break;
      case "V":
      break;
      case "W":
        str = globalThis;
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
        str = globalThis;
      break;
      case "person_in_bed_tone1":
      break;
      case "_w":
        str = globalThis;
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
      break;
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
    }
  });
  return obj;
};
