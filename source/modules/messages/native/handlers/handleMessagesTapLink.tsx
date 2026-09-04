// Module ID: 11548
// Function ID: 11549
// Name: handleMessagesTapURLLink
// Dependencies: [9219, 4522, 7869, 11277, 1934, 1386, 4465, 4743, 1921, 673, 1497, 1393, 6537, 1232, 11546, 4461, 7668, 11547, 8616, 8610, 8300, 11476, 8110, 4448, 9114, 2008, 5372, 4670, 11549, 10850, 11550, 7390, 7122, 11551, 1625, 11552, 4754, 1219, 7923, 11555, 11578, 2]
// Exports: handleMessagesTapLink

// Module 11548 (handleMessagesTapURLLink)
import set from "set" /* 2 */;
import transitionTo from "transitionTo" /* 1219 */;
import AbortCodes from "AbortCodes" /* 1232 */;
import set2 from "set" /* 1393 */;
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1497 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;
import parseQueryDefault from "parseQuery" /* 4461 */;
import watchStream from "watchStream" /* 4670 */;
import _modDef5372 from "module_5372" /* 5372 */;
import str22 from "str2" /* 6537 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7122 */;
import trackInviteDefault from "trackInvite" /* 7390 */;
import identityHook from "identityHook" /* 7923 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8110 */;
import isLinkTrusted from "isLinkTrusted" /* 8300 */;
import _mod8610 from "module_8610" /* 8610 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 8616 */;
import getIndexKey from "getIndexKey" /* 9219 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10850 */;
import isAlertOrActionSheetOpen from "isAlertOrActionSheetOpen" /* 11476 */;
import isLinkTrusted2 from "isLinkTrusted" /* 11546 */;
import openPinnedMessagesDefault from "openPinnedMessages" /* 11549 */;
import removeAutomodMessageNotice from "removeAutomodMessageNotice" /* 11550 */;
import canViewInteractionInfo from "canViewInteractionInfo" /* 11551 */;
import showExecutedApplicationCommandPopoutDefault from "showExecutedApplicationCommandPopout" /* 11552 */;
import openGuildHighlightNotificationForPush from "openGuildHighlightNotificationForPush" /* 11555 */;
import closure_4 from "addApplication" /* 4522 */;
import closure_5 from "handleMessageSendFailedAutomod" /* 7869 */;
import closure_6 from "handleQuickSwitcherUpdate" /* 11277 */;
import closure_7 from "createdAt" /* 1934 */;
import closure_8 from "ensureGuildLoaded" /* 1386 */;
import closure_9 from "updateInvite" /* 4465 */;
import closure_10 from "reinjectEphemerals" /* 4743 */;
import closure_11 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;

function handleMessagesTapURLLink(data, channelId) {
  let flag = null != data.url;
  if (flag) {
    flag = "" !== data.url;
  }
  if (flag) {
    const node = data.node;
    let flag2 = false;
    if (null != node) {
      let obj = isLinkTrusted2;
      flag2 = false;
      if (obj.isLinkTrusted(node)) {
        const payload = parseQueryDefault(tmp).payload;
        flag2 = false;
        if (payload.type === constants2.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            invite = invite.getInvite(payload.inviteCode);
            let num = null == invite;
            if (!num) {
              num = !tmp2(7668).isGuildScheduledEventInviteEmbed(invite);
              const tmp2Result = tmp2(7668);
            }
            if (!num) {
              tmp4(11547)(invite);
              num = 0;
            }
            flag2 = !num;
          }
        }
        tmp4 = importDefault;
      }
      tmp2 = require;
    }
    if (!flag2) {
      const payload2 = parseQueryDefault(data.url).payload;
      let flag3 = false;
      if (payload2.type === constants2.GAME_PROFILE) {
        const gameId = payload2.gameId;
        let tmp13;
        if (null != channelId) {
          if (null != data.messageId) {
            message = message.getMessage(channelId, data.messageId);
            let id;
            if (message != null) {
              id = message.author.id;
            }
            tmp13 = id;
          }
        }
        obj = { gameId: null, source: null, sourceUserId: null, gameProfileModalChecks: null };
        obj[0] = gameId;
        obj[1] = GameProfileEmbedAction.GameProfileSources.Deeplink;
        obj[2] = tmp13;
        obj = { shouldOpenGameProfile: true, gameId: null };
        obj[1] = gameId;
        obj[3] = obj;
        _mod8610.default.openGameProfileModal(obj);
        flag3 = true;
        const _default = _mod8610.default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      obj1 = { href: null, trusted: null, messageId: null, channelId: null };
      obj1[0] = data.url;
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = tmp19(11546).isLinkTrusted(data.node);
        const tmp19Result = tmp19(11546);
      }
      obj1[1] = isLinkTrustedResult;
      obj1[2] = data.messageId;
      obj1[3] = channelId;
      isLinkTrusted.handleClick(obj1);
      flag = true;
      const obj5 = isLinkTrusted;
      tmp19 = require;
    }
  }
  return flag;
}
const getSection = getIndexKey.getSection;
({ AnalyticsLocations: closure_12, LinkingTypes: map1, Routes: closure_14 } = ME);
const AppLauncherRouteName = APP_LAUNCHER_BUILT_IN_SECTION_ICON.AppLauncherRouteName;
const StaticChannelRoute = set2.StaticChannelRoute;
const NotificationTypes = str22.NotificationTypes;
let closure_18 = AbortCodes.OpenThreadAnalyticsLocations;
let result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapLink.tsx");

export { handleMessagesTapURLLink };
export const handleMessagesTapLink = function handleMessagesTapLink(tapLinkData) {
  ({ chatInputRef, message, messageChannel, selectedChannelId } = tapLinkData);
  const data = tapLinkData.tapLinkData.data;
  if (true === tapLinkData.allowWithinModal) {
    let tmp4 = handleMessagesTapURLLink;
    let id;
    if (messageChannel != null) {
      id = messageChannel.id;
    }
    if (!tmp4(data, id)) {
      if (null != data.action) {
        let getMessage = data.action;
        switch (getMessage) {
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
            message = getMessage(selectedChannelId.id);
            let isBlockedEdit;
            if (message != null) {
              isBlockedEdit = message.isBlockedEdit;
            }
            if (isBlockedEdit) {
              let obj14 = removeAutomodMessageNotice;
              const message3 = data.message;
              let id1;
              if (message3 != null) {
                id1 = message3.id;
              }
              const result = obj14.removeAutomodMessageNotice(id1);
            } else {
              let obj13 = trackInviteDefault;
              const result1 = obj13.dismissAutomatedMessage(data.message);
            }
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
            let obj = { userId: null, channelId: null, messageId: null };
            ({ userId: obj21[0], messageChannelId: obj21[1], messageId: obj21[2] } = data);
            showUserProfileActionSheetDefault(obj);
          break;
          case "REQUIRED_OPTIONS_FOR_START_PAYMENT":
          break;
          case "PAYMENT_FLOW_STEP":
            if (null != data.messageReference) {
              let guild_id = data.messageReference.guild_id;
              if (null != guild_id) {
                const _HermesInternal = HermesInternal;
                const obj19 = ACTION_SHEET_HEIGHT_HALFDefault;
                obj = { guildId: null };
                obj[0] = guild_id;
                obj19.openLazy(asyncRequireImpl(9114, dependencyMap.paths), "GuildProfileActionSheet:" + guild_id, obj);
                const tmp94 = asyncRequireImpl(9114, dependencyMap.paths);
              }
            }
          break;
          case "STEP_DISPLAY":
          break;
          case "DISPLAY_MEDIA_UPLOADS":
            const stream = data.stream;
            if (null != stream) {
              const voiceChannel = _modDef5372.selectVoiceChannel(stream.channelId);
              const obj17 = _modDef5372;
              const result2 = watchStream.watchStreamAndTransitionToStream(stream);
              const obj18 = watchStream;
            }
          break;
          case "access":
          break;
          case "accessibilityLabelCalendarFormat":
            openPinnedMessagesDefault(data.messageChannelId, "pinned-message-system-message");
          break;
          case "cc":
          break;
          case "bi":
            obj1 = { channelId: null };
            obj1[0] = data.messageChannelId;
            showChatGDMCustomizeActionSheetDefault(obj1);
          break;
          case "bil":
          break;
          case "lit":
            tmp4 = getMessage;
            getMessage = getMessage.getMessage;
          break;
          case "Label":
          break;
          case "ab":
            let obj2 = { userId: null, channelId: null, messageId: null, sourceAnalyticsLocations: null };
            ({ userId: obj13[0], messageChannelId: obj13[1], messageId: obj13[2] } = data);
            const items = [QUICK_SWITCHERDefault.USERNAME];
            obj2[3] = items;
            showUserProfileActionSheetDefault(obj2);
            const tmp69 = showUserProfileActionSheetDefault;
          break;
          case "abe":
          break;
          case "bel":
            let interaction;
            if (message != null) {
              interaction = message.interaction;
            }
            if (null != interaction) {
              if (null != messageChannel) {
                user = user.getUser(data.userId);
                if (null != user) {
                  user = require;
                  user = dependencyMap;
                  if (obj24.isPrimaryEntryPointCommandMessage(message)) {
                    if (null != message.applicationId) {
                      user = store;
                      user = store.getChannel(data.messageChannelId);
                      if (null != user) {
                        user = getSection;
                        const obj3 = { channel: null, type: "channel" };
                        obj3[0] = user;
                        user = getSection(obj3, message.applicationId);
                        const descriptor = user.descriptor;
                        let application;
                        if (descriptor != null) {
                          application = descriptor.application;
                        }
                        if (null != application) {
                          if (chatInputRef != null) {
                            const current4 = chatInputRef.current;
                            if (current4 != null) {
                              let obj4 = { type: null, context: null };
                              obj4[0] = user(1625).KeyboardTypes.APP_LAUNCHER;
                              let obj5 = { initialRouteName: null, initiallyExpanded: true, application: null, installOnDemand: null };
                              user = AppLauncherRouteName;
                              obj5[0] = AppLauncherRouteName.APPLICATION_VIEW;
                              obj5[2] = user.descriptor.application;
                              const isGuildInstalled = user.isGuildInstalled;
                              let tmp65 = !isGuildInstalled;
                              if (!isGuildInstalled) {
                                tmp65 = !user.isUserInstalled;
                              }
                              obj5[3] = tmp65;
                              obj4[1] = obj5;
                              current4.openCustomKeyboard(obj4);
                            }
                          }
                        } else if (chatInputRef != null) {
                          const current3 = chatInputRef.current;
                          if (current3 != null) {
                            let obj6 = { type: null, context: null };
                            obj6[0] = user(1625).KeyboardTypes.APP_LAUNCHER;
                            const obj7 = { initialRouteName: null, initiallyExpanded: true, applicationId: null, installOnDemand: true };
                            user = AppLauncherRouteName;
                            obj7[0] = AppLauncherRouteName.APPLICATION_VIEW;
                            obj7[2] = message.applicationId;
                            obj6[1] = obj7;
                            user = current3.openCustomKeyboard(obj6);
                          }
                        }
                      }
                    }
                  } else {
                    let author;
                    if (message != null) {
                      author = message.author;
                    }
                    if (null != author) {
                      user = importDefault;
                      const obj8 = { author: null, channelId: null, chatInputRef: null, messageId: null, user: null, applicationUser: null, guildId: null, messageType: null };
                      user = showExecutedApplicationCommandPopoutDefault;
                      obj8[0] = user(4754).getUserAuthor(message.interaction.user, messageChannel);
                      obj8[1] = data.messageChannelId;
                      obj8[2] = chatInputRef;
                      obj8[3] = data.messageId;
                      obj8[4] = user;
                      let author1;
                      user = closure_7;
                      if (message != null) {
                        author1 = message.author;
                      }
                      user = new user(author1);
                      obj8[5] = user;
                      const guildId = messageChannel.getGuildId();
                      obj8[6] = guildId;
                      obj8[7] = data.messageType;
                      user(obj8);
                      const userResult = user(4754);
                    }
                  }
                  obj24 = canViewInteractionInfo;
                }
              }
            }
          break;
          case "PREMIUM_TIER_0_HEADER_GRADIENT_2":
          break;
          case "Role":
            const application1 = application.getApplication(data.applicationUserId);
            if (chatInputRef != null) {
              const current2 = chatInputRef.current;
              if (current2 != null) {
                if (null == application1) {
                  const obj9 = { type: null, context: null };
                  obj9[0] = KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
                  const obj10 = { initialRouteName: null, applicationId: null, initiallyExpanded: true };
                  obj10[0] = AppLauncherRouteName.APPLICATION_VIEW;
                  obj10[1] = data.applicationUserId;
                  obj9[1] = obj10;
                  let obj11 = obj9;
                } else {
                  obj11 = { type: null, context: null };
                  obj11[0] = KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
                  const obj12 = { initialRouteName: null, application: null, initiallyExpanded: true };
                  obj12[0] = AppLauncherRouteName.APPLICATION_VIEW;
                  obj12[1] = application1;
                  obj11[1] = obj12;
                }
                current2.openCustomKeyboard(obj11);
              }
            }
          break;
          case "RoleFlags":
          break;
          case "scrollTargetPinnedRange":
            const channel = store.getChannel(data.threadId);
            if (null != channel) {
              guild_id = undefined;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              user(guild_id, channel.id, constants3.EMBED);
            }
          break;
          case "getAvailablePlanForItems":
          break;
          case "bundlePreviewContainer":
            obj6 = trackInviteDefault;
            obj13 = { channelId: null, messageId: null, flash: true, returnMessageId: null };
            ({ targetChannelId: obj8[0], targetMessageId: obj8[1], messageId: obj8[3] } = data);
            obj6.jumpToMessage(obj13);
          break;
          case "reviewContainer":
          break;
          case "viewContainerStyle":
            obj4 = transitionTo;
            obj4.transitionTo(closure_14.CHANNEL(data.guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
            obj5 = identityHook;
            const result3 = obj5.trackRoleSubscriptionPurchaseMessageTierClick(data.guildId, data.channelId, data.messageId, data.roleSubscriptionListingId);
          break;
          case "accessibleDismiss":
          break;
          case "accessibleDismissStyle":
            const channel1 = store.getChannel(data.message.channel_id);
            let guild_id1;
            if (channel1 != null) {
              guild_id1 = channel1.guild_id;
            }
            if (null != guild_id1) {
              const notificationType2 = data.notificationType;
              user = NotificationTypes;
              if (NotificationTypes.TRENDING_CONTENT_PUSH === notificationType2) {
                obj2 = openGuildHighlightNotificationForPush;
                ({ message: message2, notificationType } = data);
                const MESSAGE_EMBED = constants.MESSAGE_EMBED;
                const selectedSummaryResult = closure_6.selectedSummary(data.message.channel_id);
                let str2;
                if (selectedSummaryResult != null) {
                  str2 = selectedSummaryResult.id;
                }
                if (str2 == null) {
                  str2 = "unknown";
                }
                obj14 = { summary_id: null };
                obj14[0] = str2;
                const result4 = obj2.openGuildHighlightNotificationForPush(guild_id1, message2, notificationType, MESSAGE_EMBED, obj14);
              } else if (user.TOP_MESSAGE_PUSH === notificationType2) {
                obj1 = openGuildHighlightNotificationForPush;
                const result5 = obj1.openGuildHighlightNotificationForPush(guild_id1, data.message, data.notificationType, constants.MESSAGE_EMBED);
              } else {
                user = require;
                user = dependencyMap;
                user = importDefault;
                user = asyncRequireImpl(11578, dependencyMap.paths);
                const obj15 = { location: null, messageId: null, notificationType: null };
                user = constants;
                obj15[0] = constants.MESSAGE_EMBED;
                obj15[1] = data.message.id;
                let TOP_MESSAGE_PUSH = data.notificationType;
                if (TOP_MESSAGE_PUSH == null) {
                  TOP_MESSAGE_PUSH = user.TOP_MESSAGE_PUSH;
                }
                obj15[2] = TOP_MESSAGE_PUSH;
                ACTION_SHEET_HEIGHT_HALFDefault.openLazy(user, "NotificationSurvey", obj15);
                const obj22 = ACTION_SHEET_HEIGHT_HALFDefault;
              }
            }
          break;
          case "ble":
          break;
          case "leg_tone3":
            if (chatInputRef != null) {
              const current = chatInputRef.current;
              if (current != null) {
                let flag = data.addSpace;
                if (flag == null) {
                  flag = true;
                }
                current.insertText(data.text, null, flag);
              }
            }
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
          break;
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
          case "aria-labelledby":
          break;
          case "lab":
          break;
          case "byAppEntry":
          break;
          case "tryItOutBanner":
          break;
          case "Buf8":
          break;
          case "f8wNDl":
          break;
          case "DlcqlU":
          break;
          case "lcq":
          break;
          case "HYPESQUAD":
          break;
          case "HYPESQUAD_HOUSE_1":
          break;
          case "HOUSE_1":
          break;
          case "analyticsLocationStack":
          break;
          case "location_page":
          break;
          case "page up":
          break;
          case "up_left_arrow":
          break;
          case "left_arrow":
          break;
          case "arrow_left":
          break;
          case "leftBoundary":
          break;
          case "garlic":
          break;
          case "selectedColor":
          break;
          case "selectedColors":
          break;
          case "_$esjava$I_length":
          break;
          case "I_length":
          break;
          case "_l":
          break;
          case "_length":
          break;
          case "len":
          break;
          case "lengthComputable":
          break;
          case "analyticsId":
          break;
          case "disableImageViewPreallocationAndroid":
          break;
          case "cheese":
          break;
          case "cheese_wedge":
          break;
          case "edgeMode":
          break;
          case "defaultMessageNotifications":
          break;
          case "load":
          break;
          case "J":
          break;
          case "setDebugTrackedData":
          break;
          case "action_location":
          break;
          case "loc":
          break;
          case "locationAnalyticsObject":
          break;
          case "AnalyticsObjects":
          break;
          case "__mapperRegistry":
          break;
          case "_map":
          break;
          case "mar":
          break;
          case "margin":
          break;
          case "arg":
          break;
          case "gi":
          break;
          case "_$esjava$B_found_a_match":
          break;
          case "B_found_a_match":
          break;
          case "matchAnyPattern":
          break;
          case "heap_max":
          break;
          case "_max":
          break;
          case "_maxLength":
          break;
          case "maxLength":
          break;
          case "maxLengthIndicator":
          break;
          case "__memo":
          break;
          case "mo":
          break;
          case "messageIds":
          break;
          case "sag":
          break;
          case "_$esjava$method":
          break;
          case "_$esjava$methodobject":
          break;
          case "ho":
          break;
          case "hod":
          break;
          case "dob":
          break;
          case "obj":
          break;
          case "object":
          break;
          case "objectAssign":
          break;
          case "avatarDecorationPreview":
          break;
          case "ActionStatusSubLabel":
          break;
          case "onStatus":
          break;
          case "Status":
          break;
          case "SubLabel":
          break;
          case "lineHeight":
          break;
          case "Omnibutton":
          break;
          case "OmnibuttonCoachmarkRive":
          break;
          case "mni":
          break;
          case "nib":
          break;
          case "button":
          break;
          case "footerPortrait":
          break;
          case "trait":
          break;
          case "voicePanelsFullscreen":
          break;
          case "screenIsLandscape":
          break;
          case "Ambient":
          break;
          case "Ambient_Lightmode":
          break;
          case "bie":
          break;
          case "tm":
          break;
          case "mod":
          break;
          case "modeOptions":
          break;
          case "contact_names":
          break;
          case "nam":
          break;
          case "LegacyRawButton":
          break;
          case "RawButton":
          break;
          case "hasNewContent":
          break;
          case "track_next":
          break;
          case "_nextChannelId":
          break;
          case "didRetrySilentInitialScroll":
          break;
          case "BounceOutLeft":
          break;
          case "snapToAlignment":
          break;
          case "Alignment":
          break;
          case "$ZodUnknown":
          break;
          case "ZodUnknown":
          break;
          case "Unknown":
          break;
          case "kn":
          break;
          case "$input":
          break;
          case "inp":
          break;
          case "input":
          break;
          case "put":
          break;
          case "last4":
          break;
          case "cardholderName":
          break;
          case "expirationMonth":
          break;
          case "expirationYear":
          break;
          case "binData":
          break;
          case "useLegacyChatInput":
          break;
          case "ChatInputExpressionPressed":
          break;
          case "res":
          break;
          case "relationship_type":
          break;
          case "_opacityActive":
          break;
          case "opa":
          break;
          case "city":
          break;
          case "emitTimeout":
          break;
          case "claimed_at":
          break;
          case "gift_info_options":
          break;
          case "_options":
          break;
          case "opt":
          break;
          case "option":
          break;
          case "_parent":
          break;
          case "_parentSpanId":
          break;
          case "par":
          break;
          case "parentSpan":
          break;
          case "parentSpanId":
          break;
          case "did_force_clear_guild_hashes":
          break;
          case "hashes":
          break;
          case "_observationTargets":
          break;
          case "preview_asset_paths":
          break;
          case "path":
          break;
          case "currentUsernameInvalid":
          break;
          case "InvalidRegexPatternError":
          break;
          case "Pattern":
          break;
          case "cacheComposition":
          break;
          case "positionComponentInternal":
          break;
          case "_props":
          break;
          case "_propsStack":
          break;
          case "pr":
          break;
          case "pro":
          break;
          case "prop":
          break;
          case "propsStack":
          break;
          case "ops":
          break;
          case "ps":
          break;
          case "StackRouter":
          break;
          case "outerRow":
          break;
          case "woman_and_man_holding_hands_medium_light_skin_tone_medium_skin_tone":
          break;
          case "isAnyVoicePanelOpen":
          break;
          case "FePointLight":
          break;
          case "LightSpeedIn":
          break;
          case "LightSpeedInData":
          break;
          case "proto":
          break;
          case "prototypeInitialized":
          break;
          case "lastCursorTimestamp":
          break;
          case "parseEnvelope":
          break;
          case "openGuildVoiceModal":
          break;
          case "_pushCells":
          break;
          case "pus":
          break;
          case "rad":
          break;
          case "ii":
          break;
          case "DrawerActions":
          break;
          case "aw":
          break;
          case "awe":
          break;
          case "verifiedBot":
          break;
          case "$ZodPrefault":
          break;
          case "ZodPrefault":
          break;
          case "reg":
          break;
          case "register":
          break;
          case "recipients":
          break;
          case "reject":
          break;
          case "eject":
          break;
          case "ErrorNumber":
          break;
          case "__replaceAnimatedNodeWithValues":
          break;
          case "place":
          break;
          case "lac":
          break;
          case "ace":
          break;
          case "isCamera":
          break;
          case "couple_with_heart_mm":
          break;
          case "kiss_person_person_medium_dark_skin_tone_dark_skin_tone":
          break;
          case "_resolve":
          break;
          case "_resolveEmpty":
          break;
          case "sol":
          break;
          case "resultName":
          break;
          case "_$esjava$result":
          break;
          case "resultCount":
          break;
          case "sul":
          break;
          case "getBrightness":
          break;
          case "BrightnessDown":
          break;
          case "ownerId":
          break;
          case "removeFrame":
          break;
          case "run":
          break;
          case "actionStatusAccessibilityLabel":
          break;
          case "scale":
          break;
          case "ale":
          break;
          case "shape":
          break;
          case "hap":
          break;
          case "ape":
          break;
          case "pes":
          break;
          case "ariaDescription":
          break;
          case "stringifyUrl":
          break;
          case "minUserInstallCommandCount":
          break;
          case "sku":
          break;
          case "skuIds":
          break;
          case "fromByteArray":
          break;
          case "sl":
          break;
          case "sliceBody":
          break;
          case "ice":
          break;
          case "minPressDuration":
          break;
          case "getGenreText":
          break;
          case "extractMediaSourcesFromEmbed":
          break;
          case "isPerformanceResourceTiming":
          break;
          case "PerformanceResourceTiming":
          break;
          case "PerformanceResourceTiming_public":
          break;
          case "sou":
          break;
          case "public_flags":
          break;
          case "flags_":
          break;
          case "flags_new":
          break;
          case "_new_centroid":
          break;
          case "new":
          break;
          case "centroidDimension":
          break;
          case "onJumpToMedia":
          break;
          case "MediaSkipBackward":
          break;
          case "Skip":
          break;
          case "kip":
          break;
          case "AUDIO_TOGGLE_SELF_DEAF":
          break;
          case "DEAF":
          break;
          case "_splitColorsIntoChannels":
          break;
          case "purchase_token":
          break;
          case "MMlhsr":
          break;
          case "sr-Cyrl":
          break;
          case "sr-Cyrl-BA":
          break;
          case "BATTLENET_MIGRATION":
          break;
          case "MIGRATION_DESTINATION_ORIGIN":
          break;
          case "INPUT_FIELD_TEXT_STYLE_MD":
          break;
          case "hasTakenDecoupledClip":
          break;
          case "ClipsRecordingRestartNeeded":
          break;
          case "star":
          break;
          case "art":
          break;
          case "client_app_state":
          break;
          case "app_state":
          break;
          case "_state":
          break;
          case "stat":
          break;
          case "stateActionComplete":
          break;
          case "woman_cartwheeling_tone5":
          break;
          case "man_cartwheeling_tone5":
          break;
          case "appeal_status":
          break;
          case "_status":
          break;
          case "statusAllowsPerks":
          break;
          case "HOIST":
          break;
          case "_$esjava$s":
          break;
          case "_$esjava$substring_i":
          break;
          case "sub":
          break;
          case "substr":
          break;
          case "substring":
          break;
          case "bs":
          break;
          case "bst":
          break;
          case "string_id":
          break;
          case "CUSTOM_GIFT":
          break;
          case "CUSTOM_GIFT_MESSAGE_MAX_LENGTH":
          break;
          case "DEPRECATED_style":
          break;
          case "_style":
          break;
          case "sty":
          break;
          case "styleAttr":
          break;
          case "embedId":
          break;
          case "embedIds":
          break;
          case "surrogate":
          break;
          case "rog":
          break;
          case "gat":
          break;
          case "gate":
          break;
          case "isStickerPackAnimated":
          break;
          case "AnimatedStartStagePrompt":
          break;
          case "StartStagePrompt":
          break;
          case "Prompt":
          break;
          case "_createExtraStyles":
          break;
          case "canSend":
          break;
          case "canSendGuildOfficialMessages":
          break;
          case "FastestListPropsPlaceholderType":
          break;
          case "est":
          break;
          case "person_walking_facing_right_tone2":
          break;
          case "flag_ae":
          break;
          case "IRRELEVANT_USER":
          break;
          case "USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE":
          break;
          case "DEoVWZ":
          break;
          case "XAkOo2":
          break;
          case "Soft2":
          break;
          case "t2":
          break;
          case "epochAuthenticator":
          break;
          case "AuthenticatorType":
          break;
          case "the":
          break;
          case "people_holding_hands_medium_skin_tone_medium_dark_skin_tone":
          break;
          case "priceId":
          break;
          case "EntitlementFeatureNames":
          break;
          case "useOnPreventRemove":
          break;
          case "moveInto":
          break;
          case "ja":
          break;
          case "java":
          break;
          case "av":
          break;
          case "$":
          break;
          case "flag_to":
          break;
          case "_toLowerCase":
          break;
          case "ase":
          break;
          case "deleteVerification":
          break;
          case "VerificationVendorName":
          break;
          case "implySimilarTime":
          break;
          case "flying_saucer":
          break;
          case "sau":
          break;
          case "_uint64":
          break;
          case "uint64":
          break;
          case "int64toString":
          break;
          case "supportsInAppBrowser":
          break;
          case "BrowserStop":
          break;
          case "Stop":
          break;
          case "StopWatch":
          break;
          case "WatchdogTimeout":
          break;
          case "dog":
          break;
          case "couple_with_heart_woman_woman_medium_skin_tone_light_skin_tone":
          break;
          case "next_track":
          break;
          case "_trackIfSessionMetadataExists":
          break;
          case "tra":
          break;
          case "rac":
          break;
          case "shouldTriggerResponderTransferOnScrollAndroid":
          break;
          case "shareURI":
          break;
          case "RIOT":
          break;
          case "RIOT_CONNECTION_DEPRECATION":
          break;
          case "RIOT_CONNECTION_DEPRECATION_ADMIN":
          break;
          case "IOT":
          break;
          case "ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY":
          break;
          case "ACTIVITY_APPLICATION_HOST":
          break;
          case "APPLICATION":
          break;
          case "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED":
          break;
          case "SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES":
          break;
          case "TEXT_CHANNEL_TYPES":
          break;
          case "_transformMetadataToCamelCase":
          break;
          case "sf":
          break;
          case "mel":
          break;
          case "searchTokenType":
          break;
          case "sim":
          break;
          case "similarGames":
          break;
          case "handleChannelUpdates":
          break;
          case "USER_SETTINGS_MODAL_OPEN":
          break;
          case "OPEN_APP_LAUNCHER":
          break;
          case "APP_LAUNCHER":
          break;
          case "APP_LAUNCHER_ACTIVITY_ITEM_SELECTED":
          break;
          case "DCDSecurityKeyManager":
          break;
          case "guildOnboardingProgress":
          break;
          case "../lib/create-assets-url":
          break;
          case "IN_APP_GUILD_TEMPLATES_MODAL_KEY":
          break;
          case "GUILD_TEMPLATE":
          break;
          case "GUILD_TEMPLATES":
          break;
          case "useFocus":
          break;
          case "useFocusEffect":
          break;
          case "use":
          break;
          case "Call":
          break;
          case "effectClick":
          break;
          case "ClickImage":
          break;
          case "Image Height":
          break;
          case "eight_pointed_black_star":
          break;
          case "star2":
          break;
          case "useEffectEvent":
          break;
          case "ff":
          break;
          case "fec":
          break;
          case "CloudKeypadSpotIllustration":
          break;
          case "useMemoArray":
          break;
          case "Memo":
          break;
          case "ReactNative":
          break;
          case "ReactNativeBridgeEventPlugin":
          break;
          case "Plugin":
          break;
          case "lug":
          break;
          case "plugins":
          break;
          case "encodeDotInKeys":
          break;
          case "useStateFromStoresArray":
          break;
          case "State":
          break;
          case "Store":
          break;
          case "ore":
          break;
          case "isFetchingRewardCode":
          break;
          case "default_thread_rate_limit_per_user":
          break;
          case "rate_limit_per_user":
          break;
          case "_limit":
          break;
          case "_userId":
          break;
          case "_userIds":
          break;
          case "userIds":
          break;
          case "userIdsAndWishlistIds":
          break;
          case "__sentry_template_values__":
          break;
          case "_value":
          break;
          case "va":
          break;
          case "val":
          break;
          case "lue":
          break;
          case "__await":
          break;
          case "__awaiter":
          break;
          case "wait":
          break;
          case "base_variant_name":
          break;
          case "ia":
          break;
          case "ian":
          break;
          case "ant":
          break;
          case "namePlaceholder":
          break;
          case "older_adult_tone1":
          break;
          case "adult_tone1":
          break;
          case "_handleBandwidthEstimationExperiment":
          break;
          case "BandwidthEstimationExperiment":
          break;
          case "dt":
          break;
          case "tim":
          break;
          case "selected_time_window":
          break;
          case "win":
          break;
          case "windowId":
          break;
          case "dow":
          break;
          case "soundPromise":
          break;
          case "setNotificationSettings":
          break;
          case "exit_description":
          break;
          case "transitionCleanUp":
          break;
          case "wit":
          break;
          case "with":
          break;
          case "ACTIVITY_LAYOUT_PHYSICS_DEFAULT":
          break;
          case "LAYOUT_PHYSICS":
          break;
          case "IS_IOS":
          break;
          case "transitionState":
          break;
          case "YEETED":
          break;
          case "ACTIVITY_LAYOUT_PHYSICS_GESTURE":
          break;
          case "GESTURE":
          break;
          case "wrapperDimensions":
          break;
          case "isWindowLandscape":
          break;
          case "borderTopStartRadius":
          break;
          case "borderTopEndRadius":
          break;
          case "topBorder":
          break;
          case "topBorderRadius":
          break;
          case "flattenIssue":
          break;
          case "flattenIssuePath":
          break;
          case "thunder_cloud_rain":
          break;
          case "cloud_rain":
          break;
          case "handleChannelRecipientAdd":
          break;
          case "\r":
          break;
          case "getPlayerState":
          break;
          case "ReactNativeWebView":
          break;
          case "\n":
          break;
          case "\t":
          break;
          case "__sentry_captured__":
          break;
          case "captured":
          break;
          case "__active":
          break;
          case "_activeItems":
          break;
          case "activeItem":
          break;
          case ",":
          break;
          case "\"":
          break;
          case "authenticationInsight":
          break;
          case "peers":
          break;
          case "baseVariantName":
          break;
          case "#":
          break;
          case "#000000":
          break;
          case "00":
          break;
          case "$ZodIPv4":
          break;
          case "ZodIPv4":
          break;
          case "IPv4address":
          break;
          case "address":
          break;
          case "dress":
          break;
          case "#11806a":
          break;
          case "USER_BULK_RELATIONSHIPS":
          break;
          case "USER_BULK_RELATIONSHIPS_UPDATE":
          break;
          case "#1abc9c":
          break;
          case "abc":
          break;
          case "#1f8b4c":
          break;
          case "f8":
          break;
          case "#206694":
          break;
          case "06":
          break;
          case "handshake_tone5_tone2":
          break;
          case "banner":
          break;
          case "bannerAdjustment":
          break;
          case "mentionBadge":
          break;
          case "imageBanner":
          break;
          case "unsafe_getResolvedRawColor":
          break;
          case "#2ecc71":
          break;
          case "FAVORITES_GUILD_TOGGLE":
          break;
          case "GUILD_TOGGLE_COLLAPSE_MUTED":
          break;
          case "client_version":
          break;
          case "messageLoaded":
          break;
          case "#3498db":
          break;
          case "freezeCount":
          break;
          case "trackGuildRoomUpdated":
          break;
          case "#546e7a":
          break;
          case "#5865f2":
          break;
          case "f2":
          break;
          case "f20":
          break;
          case "#607d8b":
          break;
          case "GUILD_ROOM_NOTE_OUTCOME":
          break;
          case "MEDIA_VIEWER_LINK_COPIED":
          break;
          case "BeakerIllocon":
          break;
          case "_forceFlush":
          break;
          case "force":
          break;
          case "forceFlush":
          break;
          case "../../lib/frame-service/external":
          break;
          case "fr":
          break;
          case "frame":
          break;
          case "ram":
          break;
          case "vi":
          break;
          case "external":
          break;
          case "woman_kneeling_facing_right_tone2":
          break;
          case "man_kneeling_facing_right_tone2":
          break;
          case "useCurrentUserCommunicationDisabled":
          break;
          case "#71368a":
          break;
          case "#95a5a6":
          break;
          case "useComponentState":
          break;
          case "useComponentStateContext":
          break;
          case "#979c9f":
          break;
          case "couple_with_heart_woman_man_tone3_tone5":
          break;
          case "6MwJo/":
          break;
          case "#992d22":
          break;
          case "#99aab5":
          break;
          case "aa":
          break;
          case "#9b59b6":
          break;
          case "b64ToDeclarativeSettingsProto":
          break;
          case "DeclarativeSettings":
          break;
          case "ProtoAudioSettingsContextTypes":
          break;
          case "#a84300":
          break;
          case "xyz":
          break;
          case "label_from":
          break;
          case "_fromValue":
          break;
          case "from":
          break;
          case "beforeSpanEnd":
          break;
          case "#ad1457":
          break;
          case "getSystemVersionMinor":
          break;
          case "blockEnd":
          break;
          case "#c27c0e":
          break;
          case "#e":
          break;
          case "#e67e22":
          break;
          case "#e74c3c":
          break;
          case "_lastSentSSRC":
          break;
          case "DeviceEventEmitter":
          break;
          case "EventEmitter":
          break;
          case "#e91e63":
          break;
          case "isPremiumAtMost":
          break;
          case "MostCommonForumPostReaction":
          break;
          case "ReactionLocations":
          break;
          case "actionLocation":
          break;
          case "scrollPerfTag":
          break;
          case "CLIENT_SCRIPT_FAILED_TO_LOAD":
          break;
          case "LOAD_ARCHIVED_THREADS_SUCCESS":
          break;
          case "USER_PROFILE_CUSTOM_STATUS_BUBBLE":
          break;
          case "CUSTOM_STATUS_BUBBLE_BG":
          break;
          case "BUBBLE":
          break;
          case "blockStart":
          break;
          case "#f1c40f":
          break;
          case "f1":
          break;
          case "URLSearchParams":
          break;
          case "$$typeof":
          break;
          case "typeofJsonValue":
          break;
          case "onValueUpdated":
          break;
          case "$ZodAny":
          break;
          case "Z":
          break;
          case "ZodAny":
          break;
          case "Any":
          break;
          case "ny":
          break;
          case "notificationItem":
          break;
          case "onItemSizeChanged":
          break;
          case "ProfileFrameLayerType":
          break;
          case "formats":
          break;
          case "baa":
          break;
          case "hsla":
          break;
          case "properties":
          break;
          case "useOriginalIfSmaller":
          break;
          case "$ZodArray":
          break;
          case "ZodArray":
          break;
          case "|":
          break;
          case "%WeakMap%":
          break;
          case "WeakMap":
          break;
          case "%AsyncGeneratorFunction%":
          break;
          case "%":
          break;
          case "%AsyncGenerator%":
          break;
          case "ene":
          break;
          case "eventId":
          break;
          case "knownValues":
          break;
          case "$ZodAsyncError":
          break;
          case "sy":
          break;
          case "syn":
          break;
          case "sync":
          break;
          case "$ZodBase64":
          break;
          case "$ZodBase64URL":
          break;
          case "ZodBase64":
          break;
          case "ZodBase64URL":
          break;
          case "URL":
          break;
          case "MRO":
          break;
          case "RTC_PANEL_VIEWED":
          break;
          case "handleStoreChange":
          break;
          case "calculateProfileEffectHeight":
          break;
          case "$ZodBigInt":
          break;
          case "$ZodBigIntFormat":
          break;
          case "ZodBigInt":
          break;
          case "ZodBigIntFormat":
          break;
          case "BigInt":
          break;
          case "Form":
          break;
          case "FormatBuilder":
          break;
          case "favoritesSuggestionsNoticeHeight":
          break;
          case "$ZodCIDRv4":
          break;
          case "ZodCIDRv4":
          break;
          case "CI":
          break;
          case "ID":
          break;
          case "IDR":
          break;
          case "v4":
          break;
          case "setInPassiveListenerFlag":
          break;
          case "$ZodCIDRv6":
          break;
          case "ZodCIDRv6":
          break;
          case "v6":
          break;
          case "$ZodCUID":
          break;
          case "$ZodCUID2":
          break;
          case "ZodCUID":
          break;
          case "ZodCUID2":
          break;
          case "2IW3C5":
          break;
          case "C5q+pW":
          break;
          case "pW3Ip3":
          break;
          case "hasViewManagerConfig":
          break;
          case "$ZodCatch":
          break;
          case "ZodCatch":
          break;
          case "Cat":
          break;
          case "$ZodCheck":
          break;
          case "$ZodCheckBigIntFormat":
          break;
          case "FormatJsNodeType":
          break;
          case "person_walking_facing_right_tone4":
          break;
          case "$ZodCheckEndsWith":
          break;
          case "End":
          break;
          case "nds":
          break;
          case "WithLocalSvg":
          break;
          case "LocalSvg":
          break;
          case "Svg":
          break;
          case "SvgAst":
          break;
          case "onFocusMessage":
          break;
          case "getAppliedGuildBoostsForGuild":
          break;
          case "encrypted":
          break;
          case "sandbox":
          break;
          case "onload":
          break;
          case "$ZodCheckGreaterThan":
          break;
          case "G":
          break;
          case "$ZodCheckIncludes":
          break;
          case "deserialize":
          break;
          case "deserializeCache":
          break;
          case "_sentVideo":
          break;
          case "VideoEmptyTypes":
          break;
          case "harvestType":
          break;
          case "iii":
          break;
          case "$ZodCheckLengthEquals":
          break;
          case "q":
          break;
          case "qu":
          break;
          case "qua":
          break;
          case "alsoForwardToChannelId":
          break;
          case "ls":
          break;
          case "disableHighlightOnPress":
          break;
          case "$ZodCheckLessThan":
          break;
          case "hand_with_index_finger_and_thumb_crossed_tone3":
          break;
          case "$ZodCheckLowerCase":
          break;
          case "USER_PROFILE_EDIT_SAVED":
          break;
          case "EDIT_SAVED":
          break;
          case "$ZodCheckMaxSize":
          break;
          case "useNewUserDismissibleContent":
          break;
          case "$ZodCheckMimeType":
          break;
          case "peekGradient":
          break;
          case "$ZodCheckMinLength":
          break;
          case "Mi":
          break;
          case "third_place":
          break;
          case "third_place_medal":
          break;
          case "navigationKey":
          break;
          case "$ZodCheckMinSize":
          break;
          case "$ZodCheckMultipleOf":
          break;
          case "Multiple":
          break;
          case "tip":
          break;
          case "coerceAudioContextForProto":
          break;
          case "ProtoClass":
          break;
          case "$ZodCheckOverwrite":
          break;
          case "rw":
          break;
          case "write":
          break;
          case "writeASCII":
          break;
          case "IS_FETCHING":
          break;
          case "FETCHING":
          break;
          case "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS":
          break;
          case "SlideOutDown":
          break;
          case "string2buf":
          break;
          case "errorBoundary":
          break;
          case "$ZodCheckProperty":
          break;
          case "eventDescriptionContainer":
          break;
          case "$ZodCheckRegex":
          break;
          case "SOCIAL_LAYER_CONNECTIONS":
          break;
          case "CONNECTIONS_ROLE_POPOUT":
          break;
          case "POPOUT_HIDE":
          break;
          case "HIDE_CHANNEL_DETAILS":
          break;
          case "CHANNEL_DETAILS":
          break;
          case "CHANNEL_DETAILS_HEADER":
          break;
          case "HEADERS_RECEIVED":
          break;
          case "callbackCode":
          break;
          case "debuglog":
          break;
          case "glog":
          break;
          case "$ZodCheckSizeEquals":
          break;
          case "$ZodCheckStartsWith":
          break;
          case "backgroundAssetUrl":
          break;
          case "tav":
          break;
          case "$ZodCheckStringFormat":
          break;
          case "FormatNumeric":
          break;
          case "FormatNumericToString":
          break;
          case "ToString":
          break;
          case "expectedCurrency":
          break;
          case "currencyIsoCode":
          break;
          case "deepseek":
          break;
          case "see":
          break;
          case "seek":
          break;
          case "seekTimeout":
          break;
          case "$ZodCheckUpperCase":
          break;
          case "seis":
          break;
          case "startSampling":
          break;
          case "getLayoutMap":
          break;
          case "applyRelationProp":
          break;
          case "getNewestTokens":
          break;
          case "getNewestTokensForNonChildrenApplications":
          break;
          case "$ZodCodec":
          break;
          case "ZodCodec":
          break;
          case "Code":
          break;
          case "dec":
          break;
          case "decay":
          break;
          case "decayInterval":
          break;
          case "validateSecureFramesKeyConsistent":
          break;
          case "Avatar04/Username":
          break;
          case "Avatar04/UsernameVisibility":
          break;
          case "$ZodCustom":
          break;
          case "$ZodCustomStringFormat":
          break;
          case "ZodCustom":
          break;
          case "ZodCustomStringFormat":
          break;
          case "Custom":
          break;
          case "sto":
          break;
          case "$ZodDefault":
          break;
          case "ZodDefault":
          break;
          case "Default":
          break;
          case "DefaultCreatorMonetizationRestrictions":
          break;
          case "CreatorMonetizationRestrictions":
          break;
          case "getDebugOptionsHeaderValue":
          break;
          case "$ZodDiscriminatedUnion":
          break;
          case "ZodDiscriminatedUnion":
          break;
          case "nat":
          break;
          case "nio":
          break;
          case "$ZodE164":
          break;
          case "ZodE164":
          break;
          case "$ZodEmail":
          break;
          case "ZodEmail":
          break;
          case "mai":
          break;
          case "ail":
          break;
          case "keyedListeners":
          break;
          case "resetContextMenuState":
          break;
          case "setContext":
          break;
          case "$ZodEmoji":
          break;
          case "ZodEmoji":
          break;
          case "Emoji":
          break;
          case "EmojiEntranceAnimation":
          break;
          case "oj":
          break;
          case "ji":
          break;
          case "Animation Main":
          break;
          case "Main":
          break;
          case "MainDrawers":
          break;
          case "scrollContainer":
          break;
          case "scrollContainerGradient":
          break;
          case "$ZodEncodeError":
          break;
          case "ncode":
          break;
          case "sessionTimingIntegration":
          break;
          case "$ZodEnum":
          break;
          case "ZodEnum":
          break;
          case "num lock":
          break;
          case "lockState":
          break;
          case "$ZodError":
          break;
          case "ZodError":
          break;
          case "woman_kneeling_facing_right_tone4":
          break;
          case "man_kneeling_facing_right_tone4":
          break;
          case "$ZodExactOptional":
          break;
          case "ZodExactOptional":
          break;
          case "act":
          break;
          case "REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE":
          break;
          case "UNKNOWN_MESSAGE":
          break;
          case "MESSAGE_LOG_PRIVATE_CHANNELS":
          break;
          case "PRIVATE_CHANNELS_LIST":
          break;
          case "STAGE_MUSIC_MUTE":
          break;
          case "virtualOffset0Based":
          break;
          case "$ZodFile":
          break;
          case "ZodFile":
          break;
          case "File":
          break;
          case "handleRelationshipRemove":
          break;
          case "$ZodFunction":
          break;
          case "ZodFunction":
          break;
          case "Function":
          break;
          case "getViewProp":
          break;
          case "commandType":
          break;
          case "commandTypes":
          break;
          case "spanToTraceparentHeader":
          break;
          case "woman_construction_worker_tone3":
          break;
          case "man_construction_worker_tone3":
          break;
          case "construction_worker_tone3":
          break;
          case "four_oclock":
          break;
          case "clock2":
          break;
          case "clock230":
          break;
          case "$ZodGUID":
          break;
          case "ZodGUID":
          break;
          case "GU":
          break;
          case "ID_REGEX":
          break;
          case "EXPERIMENT_FETCH_IGNORED":
          break;
          case "IGNORED_GROUP":
          break;
          case "createInteractionHandle":
          break;
          case "right_fist_tone2":
          break;
          case "$ZodIPv6":
          break;
          case "ZodIPv6":
          break;
          case "IPv6address":
          break;
          case "imageHeight":
          break;
          case "$ZodISODate":
          break;
          case "$ZodISODateTime":
          break;
          case "ZodISODate":
          break;
          case "ZodISODateTime":
          break;
          case "IS":
          break;
          case "SO":
          break;
          case "Time":
          break;
          case "javascript":
          break;
          case "javascript:":
          break;
          case "$ZodISODuration":
          break;
          case "ZodISODuration":
          break;
          case "Duration":
          break;
          case "DurationEnabled":
          break;
          case "$ZodISOTime":
          break;
          case "ZodISOTime":
          break;
          case "ISOTimezoneParser":
          break;
          case "service_dog":
          break;
          case "createMessageRecord":
          break;
          case "$ZodIntersection":
          break;
          case "ZodIntersection":
          break;
          case "sec":
          break;
          case "section":
          break;
          case "rootCommand":
          break;
          case "NotifyFriendsOnProfileUpdate":
          break;
          case "showUnread":
          break;
          case "$ZodJWT":
          break;
          case "ZodJWT":
          break;
          case "StreamingTier5LargeBadge":
          break;
          case "a_7":
          break;
          case "{":
          break;
          case "$ZodKSUID":
          break;
          case "ZodKSUID":
          break;
          case "K":
          break;
          case "SU":
          break;
          case "ID_VERIFICATION":
          break;
          case "VERIFICATION_INFO":
          break;
          case "FORUM_CHANNEL_MORE_POSTS_LOADED":
          break;
          case "UNREAD_LESS_IMPORTANT":
          break;
          case "fonts":
          break;
          case "$ZodLazy":
          break;
          case "ZodLazy":
          break;
          case "Lazy":
          break;
          case "LazyViewManagersEnabled":
          break;
          case "XjXqzh":
          break;
          case "zh":
          break;
          case "zh-Hant":
          break;
          case "zh-Hant-HK":
          break;
          case "$ZodLiteral":
          break;
          case "ZodLiteral":
          break;
          case "Literal":
          break;
          case "maxBudgetHour":
          break;
          case "getHours":
          break;
          case "removeMany":
          break;
          case "anyChannelRecordsObfuscated":
          break;
          case "fKYRlM":
          break;
          case "lMrv96":
          break;
          case "activityPreview":
          break;
          case "OCEAN":
          break;
          case "ANDROID_NO_BORDER":
          break;
          case "NO_BORDER_OR_MARGIN":
          break;
          case "INPUT_PLACEHOLDER_TEXT_DEFAULT":
          break;
          case "DEFAULT_FLUSH_INTERVAL":
          break;
          case "VALIDATING":
          break;
          case "GUILD_HUB_HEADER_OPTIONS":
          break;
          case "StretchOutX":
          break;
          case "tXXD6v":
          break;
          case "6vrfgt":
          break;
          case "gt":
          break;
          case "smiling_face_with_tear":
          break;
          case "_teardown":
          break;
          case "_teardownRegistry":
          break;
          case "teardown":
          break;
          case "tryItOutAvatarDecoration":
          break;
          case "$ZodMAC":
          break;
          case "ZodMAC":
          break;
          case "MA":
          break;
          case "MAC":
          break;
          case "AC":
          break;
          case "$ZodNaN":
          break;
          case "ZodNaN":
          break;
          case "NaN":
          break;
          case "maxBufferMs":
          break;
          case "stickySession":
          break;
          case "$ZodNanoID":
          break;
          case "ZodNanoID":
          break;
          case "ano":
          break;
          case "$ZodNever":
          break;
          case "ZodNever":
          break;
          case "Never":
          break;
          case "ev":
          break;
          case "getEventTypePropName":
          break;
          case "$ZodNonOptional":
          break;
          case "ZodNonOptional":
          break;
          case "$ZodNull":
          break;
          case "$ZodNullable":
          break;
          case "ZodNull":
          break;
          case "ZodNullable":
          break;
          case "trackColor":
          break;
          case "trackColorForFalse":
          break;
          case "setOpenH264Enabled":
          break;
          case "$ZodNumber":
          break;
          case "$ZodNumberFormat":
          break;
          case "ZodNumber":
          break;
          case "ZodNumberFormat":
          break;
          case "getQuestContentName":
          break;
          case "forwardedRef":
          break;
          case "$ZodOptional":
          break;
          case "ZodOptional":
          break;
          case "allowedNativeProps":
          break;
          case "$ZodPipe":
          break;
          case "ZodPipe":
          break;
          case "customProfile":
          break;
          case "customProfileUpsellImage":
          break;
          case "$ZodReadonly":
          break;
          case "ZodReadonly":
          break;
          case "only":
          break;
          case "onlyActivityApps":
          break;
          case "nl":
          break;
          case "unstable_DiscreteEventPriority":
          break;
          case "$ZodRealError":
          break;
          case "ZodRealError":
          break;
          case "GiftingTier6SmallBadge":
          break;
          case "baseType":
          break;
          case "$ZodRecord":
          break;
          case "ZodRecord":
          break;
          case "RecordSpeedNext":
          break;
          case "Google":
          break;
          case "Google TV":
          break;
          case "TV":
          break;
          case "$ZodRegistry":
          break;
          case "try":
          break;
          case "tryActivateLayoutTransition":
          break;
          case "ry":
          break;
          case "USE_MPF":
          break;
          case "$ZodString":
          break;
          case "$ZodStringFormat":
          break;
          case "ZodString":
          break;
          case "ZodStringFormat":
          break;
          case "$ZodSuccess":
          break;
          case "ZodSuccess":
          break;
          case "docx":
          break;
          case "pages":
          break;
          case "ppt":
          break;
          case "pptx":
          break;
          case "$ZodTemplateLiteral":
          break;
          case "ZodTemplateLiteral":
          break;
          case "lat":
          break;
          case "allowedPaymentMethods":
          break;
          case "showDoubleTapEmojiUpdatedToast":
          break;
          case "stuffed_pita":
          break;
          case "updated_setting":
          break;
          case "xls":
          break;
          case "xlsx":
          break;
          case "csv":
          break;
          case "sv":
          break;
          case "$ZodTransform":
          break;
          case "ZodTransform":
          break;
          case "flag_gs":
          break;
          case "contentId":
          break;
          case "contentIdentifier":
          break;
          case "$ZodTuple":
          break;
          case "ZodTuple":
          break;
          case "up":
          break;
          case "pleading_face":
          break;
          case "$ZodType":
          break;
          case "ZodType":
          break;
          case "peer":
          break;
          case "peerDependencies":
          break;
          case "section_name":
          break;
          case "$ZodULID":
          break;
          case "ZodULID":
          break;
          case "appDmSettings":
          break;
          case "drawableIconResourceName":
          break;
          case "sourceName":
          break;
          case "viewerData":
          break;
          case "$ZodURL":
          break;
          case "ZodURL":
          break;
          case "$ZodUUID":
          break;
          case "ZodUUID":
          break;
          case "$ZodUndefined":
          break;
          case "ZodUndefined":
          break;
          case "ned":
          break;
          case "maxCount":
          break;
          case "CONTROL_CRITICAL_PRIMARY_BORDER_ACTIVE":
          break;
          case "mostReadable":
          break;
          case "$ZodUnion":
          break;
          case "ZodUnion":
          break;
          case "getPreviewStorefrontId":
          break;
          case "$ZodVoid":
          break;
          case "ZodVoid":
          break;
          case "maxDate":
          break;
          case "$ZodXID":
          break;
          case "ZodXID":
          break;
          case "X":
          break;
          case "totalParticipants":
          break;
          case "$ZodXor":
          break;
          case "ZodXor":
          break;
          case "safelyMakeUrlHumanReadable":
          break;
          case "_handleClose":
          break;
          case "handleClose":
          break;
          case "handleCloseModal":
          break;
          case "queryInAppNavigations":
          break;
          case "_$esjava$b":
          break;
          case "_$esjava$bra":
          break;
          case "$b":
          break;
          case "$brand":
          break;
          case "br":
          break;
          case "bra":
          break;
          case "brand":
          break;
          case "brandBackground":
          break;
          case "and":
          break;
          case "woman_in_motorized_wheelchair_light_skin_tone":
          break;
          case "man_in_motorized_wheelchair_light_skin_tone":
          break;
          case "jfif":
          break;
          case "$code":
          break;
          case "codeBlock":
          break;
          case "purchases":
          break;
          case "countryData":
          break;
          case "$defs":
          break;
          case "defs":
          break;
          case "fs":
          break;
          case "$del":
          break;
          case "delayV":
          break;
          case "pray_tone3":
          break;
          case "$i":
          break;
          case "$id":
          break;
          case "idx":
          break;
          case "$link":
          break;
          case "link":
          break;
          case "linkAccountIcon":
          break;
          case "contentType":
          break;
          case "contentTypeToText":
          break;
          case "extraButtonProps":
          break;
          case "verticalInset":
          break;
          case "$modal":
          break;
          case "modal":
          break;
          case "dal":
          break;
          case "$output":
          break;
          case "out":
          break;
          case "output":
          break;
          case "outputDeviceId":
          break;
          case "rowWidth":
          break;
          case "$p":
          break;
          case "$ref":
          break;
          case "baseMaxSize":
          break;
          case "$schema":
          break;
          case "sch":
          break;
          case "schema":
          break;
          case "schemaPath":
          break;
          case "che":
          break;
          case "associatedEventId":
          break;
          case "disableMountItemReorderingAndroid":
          break;
          case "ordering":
          break;
          case "getAckedEndOffsetStorageKey":
          break;
          case "StorageKeys":
          break;
          case "scrollToTopTimeout":
          break;
          case "&":
          break;
          case "&#39;":
          break;
          case ";":
          break;
          case ";)":
          break;
          case "Apple":
          break;
          case "AppleIllocon":
          break;
          case "&amp;":
          break;
          case ";-)":
          break;
          case "&gt;":
          break;
          case "&lt;":
          break;
          case "&quot;":
          break;
          case "hour24h":
          break;
          case "FlingNativeProperties":
          break;
          case "mediaIndex":
          break;
          case "expressiveRiveRef":
          break;
          case "effectiveEndDate":
          break;
          case ">":
          break;
          case "'":
          break;
          case "https":
          break;
          case "[":
          break;
          case "[[Configurable]]":
          break;
          case "]":
          break;
          case "(":
          break;
          case "numpad *":
          break;
          case "*":
          break;
          case "AvatarCapExample":
          break;
          case "BURGUNDY":
          break;
          case "+1":
          break;
        }
      }
    }
  } else {
    obj = isAlertOrActionSheetOpen;
  }
};
