// Module ID: 787
// Function ID: 788
// Name: valueOf
// Dependencies: [608, 788, 752, 789, 790, 781]

// Module 787 (valueOf)
let prototype;
if (require("module_608")) {
  prototype = require("module_608").prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function equalByTag(byteLength, byteLength2, arg2, arg3, arg4, arg5, get) {
  let buffer = byteLength2;
  let buffer2 = byteLength;
  switch (arg2) {
    case "to":
      return false;
    case "Date":
    break;
    case "TypeError":
    break;
    case "Error":
    break;
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
    case "LIGHT":
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
      if (byteLength.byteLength == byteLength2.byteLength) {
        if (byteLength.byteOffset == byteLength2.byteOffset) {
          buffer2 = byteLength.buffer;
          buffer = byteLength2.buffer;
          let tmp34 = buffer2.byteLength != buffer.byteLength;
          if (!tmp34) {
            const tmp40 = new require(788)(buffer2);
            const tmp44 = new require(788)(buffer);
            tmp34 = !arg5(tmp40, tmp44);
          }
          return !tmp34;
        }
      }
      return false;
    case "fileFinishedImporting":
    break;
    case "fill":
    break;
    case "find":
    break;
    case "ind":
      let tmp30 = require(752) /* eq */;
      let tmp31 = +byteLength;
      let tmp32 = +byteLength2;
      let tmp30Result = tmp30(tmp31, tmp32);
      return tmp30Result;
    case "flags":
    break;
    case "forEach":
      tmp30 = require(752) /* eq */;
      tmp31 = +byteLength;
      tmp32 = +byteLength2;
      tmp30Result = tmp30(tmp31, tmp32);
      return tmp30Result;
    case "gap":
    break;
    case "get":
      tmp30 = require(752) /* eq */;
      tmp31 = +byteLength;
      tmp32 = +byteLength2;
      tmp30Result = tmp30(tmp31, tmp32);
      return tmp30Result;
    case "getChannel":
    break;
    case "getCurrentUser":
      let tmp27 = byteLength.name == byteLength2.name;
      if (tmp27) {
        tmp27 = byteLength.message == byteLength2.message;
      }
      return tmp27;
    case "getGuild":
    break;
    case "guild":
      let text = `${byteLength2}`;
      let tmp26 = byteLength == `${byteLength2}`;
      return tmp26;
    case "guildId":
    break;
    case "guild_id":
      text = `${byteLength2}`;
      tmp26 = byteLength == `${byteLength2}`;
      return tmp26;
    case "has":
    break;
    case "hasDiversityParent":
      let tmp = require(789) /* mapToArray */;
      if (!tmp) {
        tmp = require(790) /* setToArray */;
      }
      if (byteLength.size != byteLength2.size) {
        if (!tmp8) {
          return false;
        }
      }
      const value = get.get(byteLength);
      if (value) {
        return value == byteLength2;
      } else {
        const result = get.set(byteLength, byteLength2);
        const tmpResult = tmp(byteLength);
        const tmp14 = arg3 | 2;
        const tmp18 = require(781) /* equalArrays */;
        get.delete(byteLength);
        return require(781) /* equalArrays */(tmpResult, tmp(byteLength2), arg3 | 2, arg4, arg5, get);
      }
      tmp8 = 1 & arg3;
    break;
    case "hash":
    break;
    case "hd":
    break;
    case "header":
    break;
    case "height":
      if (valueOf) {
        const call = tmp2.call;
        if (typeof call === "unknown") {
          let callResult = tmp2();
        } else {
          callResult = call(byteLength);
        }
        const call2 = tmp2.call;
        if (typeof call2 === "unknown") {
          let tmp2Result = tmp2();
        } else {
          tmp2Result = call2(byteLength2);
        }
        return callResult == tmp2Result;
      }
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
    case "ml":
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
    case "warn":
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
    case "getVoiceStateVersion":
    break;
    case "emojiLineHeight":
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
    case "ary":
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
    case "DateParser":
    break;
    case "at":
    break;
    case "te":
    break;
    case "serializeDate":
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
    case "_createRenderMask":
    break;
    case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
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
    case "CardVerticalSeparator":
    break;
    case "SeparatorAction":
    break;
    case "onBeforeGoBack":
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
    case "pillLocalized":
    break;
    case "FrecencyUserSettings":
    break;
    case "FrecencyUserSettingsActionCreators":
    break;
    case "UserSettingsActionCreatorsByType":
    break;
    case "USE_APP_COMMAND":
    break;
    case "ANDROID_NOTIFICATION_LIGHTS":
    break;
    case "L":
    break;
    case "LI":
    break;
    case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
    break;
    case "REQUIRE_REVERIFIED_EMAIL":
    break;
    case "REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE":
    break;
    case "PHONE_VERIFY_NO_PASSWORD":
    break;
    case "NEUTRAL":
    break;
    case "NEUTRAL_1":
    break;
    case "NEUTRAL_10":
    break;
    case "NEUTRAL_100":
    break;
    case "qZ+7BA":
    break;
    case "BATTLENET_MIGRATION":
    break;
    case "MIGRATION_DESTINATION_ORIGIN":
    break;
    case "INVALID_BILLING_ADDRESS":
    break;
    case "ADDRESS_CITY":
    break;
    case "TYPOGRAPHY_EXPERIMENT_REMAPS":
    break;
    case "$ZodCheckMaxLength":
    break;
    case "kMaxLength":
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
    case "getAppearanceSettings":
    break;
    case "shower":
    break;
    case "$ZodMap":
    break;
    case "ZodMap":
    break;
    case "M":
    break;
    case "ap":
    break;
    case "$ZodCheckGreaterThan":
    break;
    case "getItemCount":
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
    case "getFetchedSKUIDs":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "getEntry":
    break;
    case "getEntryDuration":
    break;
    case "onTapVoiceChannelBadge":
    break;
    case "getAudioMixerSettings":
    break;
    case "setUser":
    break;
    case "setUserId":
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
    case "perGuildMaxCount":
    break;
    case "matchedSupportedLocale":
    break;
    case "rawDescription":
    break;
    case "addMatchingCardsToResults":
    break;
    case "showBorder":
    break;
    case "showBorderBottom":
    break;
    case "SvgFromUri":
    break;
    case "EMPTY_SOUND_LIST":
    break;
    case "STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY":
    break;
    case "flag_gn":
    break;
    case "PREMIUM_PLANS":
    break;
    case "ANSWER_HAS":
    break;
    case "HAS_APPLICATION":
    break;
    case "APPLICATION_COMMAND_INDEX_CHANNEL":
    break;
    case "CHANNEL_ACTION_BANNER_HEIGHT":
    break;
    case "BANNER_HEIGHT":
    break;
    case "fgClip":
    break;
    case "ClipViewAnimated":
    break;
    case "AnimatedFlashList":
    break;
    case "FlashList":
    break;
    case "FlashListRef":
    break;
    case "las":
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
    case "verification_request_id":
    break;
    case "$ZodSet":
    break;
    case "ZodSet":
    break;
    case "S":
    break;
    case "et":
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
    case "langtag":
    break;
    case "tagIcon":
    break;
    case "tagIconUrl":
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
    case "QUEST_BAR_V2":
    break;
    case "fromSerializedGuildRecord":
    break;
    case "ActionSheetHeaderPressableText":
    break;
    case "Pressable":
    break;
    case "ex":
    break;
    case "ext":
    break;
    case "isIOS":
    break;
    case "isIOSPushNotificationRawPayloadFixExperimentEnabled":
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
    case "sob":
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
    default:
      return false;
  }
};
