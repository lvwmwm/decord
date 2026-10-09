// Module ID: 9649
// Function ID: 9650
// Name: LongPressMessageActionSheet
// Dependencies: [32, 19, 7734, 9650, 9651, 4720, 502, 2086, 4709, 5084, 1085, 21, 6848, 6872, 5106, 9648, 7975, 9653, 504, 6965, 9654, 9655, 2041, 6963, 9656, 5433, 1403, 9657, 8237, 9658, 6888, 9659, 6892, 1628, 12779, 12780, 1126, 12573, 5044, 5048, 5040, 9694, 12784, 11517, 8184, 12616, 10308, 12786, 8941, 8205, 10299, 12788, 12790, 12792, 12607, 5050, 11388, 8182, 8201, 5046, 9987, 10448, 9545, 10142, 2697, 8192, 6971, 6980, 10747, 5416, 6983, 7879, 9614, 2]
// Exports: default

// Module 9649 (LongPressMessageActionSheet)
import Fragment from "Fragment" /* 21 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import MessageRecord from "MessageRecord" /* 4720 */;
import MessageConstants from "MessageConstants" /* 5084 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5106 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6848 */;
import ActionSheet2 from "ActionSheet" /* 6892 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 9648 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 9659 */;
import EmojiRowUtils from "EmojiRowUtils" /* 12779 */;
import EmojiRowDefault from "EmojiRow" /* 12780 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7734 */;
import ReportToModStore from "ReportToModStore" /* 9650 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9651 */;
import AuthenticationStore_mod from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let map1;
let isMessageComponentsV2 = MessageRecord.isMessageComponentsV2;
let AuthenticationStore = AuthenticationStore_mod;
const FileUploadErrorTypes = MessageConstants.FileUploadErrorTypes;
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16, LOCAL_BOT_ID: closure_17, MessageAttachmentFlags: closure_18, MessageFlags: closure_19, MessageStates: closure_20, MessageTypes: closure_21, MessageTypesSets: closure_22, Permissions: closure_23 } = Constants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  let allTextDisplayContent;
  let analyticsLocations;
  let chatInputRef;
  let closure_8;
  let closure_9;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl36;
  let intl37;
  let intl38;
  let intl39;
  let intl4;
  let intl40;
  let intl41;
  let intl42;
  let intl43;
  let intl44;
  let intl45;
  let intl7;
  let intl8;
  let intl9;
  let isActiveChannelOrUnarchivableThread;
  let isNonUserBotResult;
  let message;
  let selectedMedia;
  let set1;
  let tmp13;
  let tmp14;
  let user;
  const f101744 = () => {
    const items = [SavedMessagesStore.isMessageReminder(channel.id, message.id), SavedMessagesStore.isMessageBookmarked(channel.id, message.id)];
    return items;
  };
  const f101745 = (flags) => {
    let tmp = null == flags.flags;
    if (!tmp) {
      const obj = analyticsLocation(analyticsLocation[26]);
      tmp = !obj.hasFlag(flags.flags, constants.IS_THUMBNAIL);
    }
    return tmp;
  };
  _require = analyticsLocation;
  let tmp = analyticsLocations;
  let tmp3 = analyticsLocation;
  const tmp4 = analyticsLocations(analyticsLocation[12]);
  analyticsLocations = tmp4(analyticsLocations(analyticsLocation[13]).MESSAGE_LONG_PRESS_MENU).analyticsLocations;
  analyticsLocation = analyticsLocation.analyticsLocation;
  if (undefined === analyticsLocation) {
    analyticsLocation = {};
  }
  ({ user, message } = analyticsLocation);
  const channel = analyticsLocation.channel;
  ({ chatInputRef: GuildAutomodMessageStore, selectedMedia } = analyticsLocation);
  let actionSheetSource = analyticsLocation.actionSheetSource;
  let tmp5;
  if (undefined !== actionSheetSource) {
    tmp5 = actionSheetSource;
  }
  actionSheetSource = tmp5;
  const canAddNewReactions = analyticsLocation.canAddNewReactions;
  isMessageComponentsV2 = undefined !== canAddNewReactions && canAddNewReactions;
  let items = [analyticsLocation, channel];
  const effect = channel.useEffect(() => {
    let obj2;
    const obj = { channel_id: channel.id, guild_id: channel.guild_id, location: obj2 };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const MESSAGE_ACTION_SHEET_OPENED = map1.MESSAGE_ACTION_SHEET_OPENED;
    AppAnalyticsUtilsDefault;
    obj2 = { page: channel.isPrivate() ? authStore3.DM_CHANNEL : authStore3.GUILD_CHANNEL };
    const merged = Object.assign(analyticsLocation);
    trackWithMetadata(MESSAGE_ACTION_SHEET_OPENED, obj);
  }, items);
  const items1 = [analyticsLocation];
  AuthenticationStore = channel.useCallback(() => {
    const obj = showLongPressMessageActionSheet;
    const result = obj.showLongPressMessageActionSheet(analyticsLocation);
  }, items1);
  const tmp8 = _require;
  let obj2 = require("canReplyToMessage");
  const canReplyToMessage = obj2.useCanReplyToMessage(channel, message);
  let obj3 = require("canForwardMessage");
  const canForwardMessage = obj3.useCanForwardMessage(message);
  const guild = isActiveChannelOrUnarchivableThread.getGuild(channel.guild_id);
  let obj4 = require("get initialized");
  const items2 = [actionSheetSource];
  [tmp13, tmp14] = message(obj4.useStateFromStoresArray(items2, f101744), 2);
  message(obj4.useStateFromStoresArray(items2, f101744), 2);
  let obj5 = require("ThreadHooks");
  const isNonModInLockedThread = obj5.useIsNonModInLockedThread(channel);
  let id1;
  const tmpResult = tmp(tmp3[20]);
  if (channel != null) {
    id1 = channel.id;
  }
  const interactionError = message.interactionError;
  const EXPLICIT_CONTENT = set1.EXPLICIT_CONTENT;
  const tmpResultResult = tmpResult(id1);
  const tmp19 = null != GuildAutomodMessageStore.getMessage(message.id);
  const tmp20 = tmp(tmp3[21])(message);
  const tmp8Result = tmp8(tmp3[19]);
  isActiveChannelOrUnarchivableThread = tmp8Result.useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    isNonUserBotResult = user.isNonUserBot();
  }
  const id3 = AuthenticationStore.getId();
  const DeveloperMode = tmp8(tmp3[22]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = set.can(constants8.MANAGE_MESSAGES, channel);
  const canResult1 = set.can(constants8.SEND_MESSAGES, channel);
  const tmp8Result18 = tmp8(tmp3[23]);
  const canToggleGuildOfficialMessages = tmp8Result18.useCanToggleGuildOfficialMessages(message, channel, "LongPressMessageActionSheet");
  const id = message.author.id;
  const hasFlagResult = message.hasFlag(constants4.CROSSPOSTED);
  let tmp32 = !hasFlagResult;
  const tmp31 = tmp(tmp3[24])(message, channel);
  if (!hasFlagResult) {
    tmp32 = channel.type === constants2.GUILD_ANNOUNCEMENT;
  }
  if (tmp32) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.NEWS);
    }
    tmp32 = hasItem;
  }
  if (tmp32) {
    tmp32 = canResult1;
  }
  if (tmp32) {
    tmp32 = id === id3 || canResult;
  }
  if (tmp32) {
    tmp32 = message.type === constants6.DEFAULT;
  }
  if (tmp32) {
    tmp32 = !message.isPoll();
  }
  const tmp8Result19 = tmp8(tmp3[19]);
  const canStartPublicThread = tmp8Result19.computeCanStartPublicThread(channel, message);
  const contentMessage = message.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    const tmp8Result20 = tmp8(tmp3[25]);
    allTextDisplayContent = tmp8Result20.getAllTextDisplayContent(contentMessage.components);
  } else {
    allTextDisplayContent = contentMessage.content;
  }
  let tmp42 = (canResult || message.canDeleteOwnMessage(id3)) && length > 0 && message.author.id !== closure_17;
  if (tmp42) {
    const tmp8Result21 = tmp8(tmp3[26]);
    tmp42 = !tmp8Result21.hasFlag(message.flags, tmp29.EPHEMERAL);
  }
  if (tmp42) {
    tmp42 = tmp(tmp3[27])(message) >= 1;
  }
  let tmp47 = !tmp19 && interactionError !== EXPLICIT_CONTENT;
  if (tmp47) {
    let result = null == message.interactionData;
    if (!result) {
      const tmp8Result22 = tmp8(tmp3[28]);
      result = tmp8Result22.canRetryInteractionData(message.interactionData);
    }
    tmp47 = result;
  }
  const attachments1 = message.attachments;
  let tmp51 = message.author.id === id3;
  if (tmp51) {
    tmp51 = attachments1.filter(f101745).length > 1 || "" !== message.content;
    const tmp52 = attachments1.filter(f101745).length > 1 || "" !== message.content;
  }
  const items3 = [selectedMedia];
  const tmp8Result23 = tmp8(tmp3[18]);
  const stateFromStores = tmp8Result23.useStateFromStores(items3, () => ReportToModStore.hasReportedMessage(message.channel_id, message.id));
  tmp8(tmp3[29]);
  if (guild != null) {
    const id2 = guild.id;
  }
  function getProps(arrow) {
    let IconComponent;
    let disabled;
    let onActionExecuted;
    let onBack;
    let variant;
    const label = arrow.label;
    ({ onActionExecuted: analyticsLocations, disabled } = arrow);
    let obj = {
      arrow: arrow.arrow,
      icon: jsx(analyticsLocation(analyticsLocation[30]).ActionSheetRow.Icon, { IconComponent }),
      label,
      onPress() {
        const obj = { actionSheetSource, analyticsLocations, channel, chatInputRef: GuildAutomodMessageStore, label, message, onBack, onActionExecuted: analyticsLocations, selectedMedia, disabled };
        const result = LongPressMessageActionSheetUtils.longPressMessageOptionHandler(obj);
      },
      variant,
      disabled
    };
    ({ IconComponent, variant } = arrow);
    return obj;
  }
  function render(items5) {
    let mapped;
    let obj3;
    let shouldShowEmojiRowResult;
    const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
    ({ showGradient: true, startExpanded: obj3.isMetaQuest(), header: shouldShowEmojiRowResult, children: mapped });
    const ActionSheet = ActionSheet2.ActionSheet;
    obj3 = MetaQuestUtils;
    const obj4 = EmojiRowUtils;
    shouldShowEmojiRowResult = obj4.shouldShowEmojiRow(closure_8, message, isActiveChannelOrUnarchivableThread);
    const tmp3 = message;
    if (shouldShowEmojiRowResult) {
      const obj5 = { message: tmp3, channel };
      shouldShowEmojiRowResult = tmp(EmojiRowDefault, obj5);
    }
    mapped = undefined;
    if (items5 != null) {
      mapped = items5.map((arr, index) => {
        const obj = {
          hasIcons: true,
          children: arr.map((item, index) => {
            let arrow;
            let disabled;
            let icon;
            let label;
            let onPress;
            let variant;
            ({ icon, arrow, label, onPress, variant, disabled } = item);
            return closure_1_24(closure_1_0(closure_1_2[30]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, index);
          })
        };
        const Group = closure_1_0(closure_1_2[30]).ActionSheetRow.Group;
        return closure_1_24(Group, obj, index);
      });
    }
    return <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
  if (message.state === constants5.SEND_FAILED) {
    const items4 = [];
    if (tmp47) {
      let obj = { label: intl17.string(tmp8(tmp3[36]).t["5911Lb"]), IconComponent: tmp8(tmp3[37]).RetryIcon };
      const push3 = items4.push;
      intl17 = tmp8(tmp3[36]).intl;
      push3(getProps(obj));
    }
    const tmp242 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
    if (tmp242) {
      const push4 = items4.push;
      const obj6 = { label: intl18.string(tmp8(tmp3[36]).t.JrGD7E), IconComponent: tmp8(tmp3[38]).CopyIcon };
      intl18 = tmp8(tmp3[36]).intl;
      push4(getProps(obj6));
    }
    const push5 = items4.push;
    const obj8 = { label: intl19.string(require("intl").t.xwMqD7), IconComponent: require("TrashIcon").TrashIcon, variant: "danger" };
    intl19 = tmp7(tmp2[36]).intl;
    push5(getProps(obj8));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp56.SENDING) {
    const items6 = [];
    const tmp232 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
    if (tmp232) {
      const push = items6.push;
      const obj9 = { label: intl15.string(tmp8(tmp3[36]).t.JrGD7E), IconComponent: tmp8(tmp3[38]).CopyIcon };
      intl15 = tmp8(tmp3[36]).intl;
      push(getProps(obj9));
    }
    const push2 = items6.push;
    const obj10 = { label: intl16.string(tmp8(tmp3[36]).t.xwMqD7), IconComponent: tmp8(tmp3[39]).TrashIcon, variant: "danger" };
    intl16 = tmp8(tmp3[36]).intl;
    push2(getProps(obj10));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === constants6.THREAD_STARTER_MESSAGE) {
    const obj11 = { label: intl14.string(tmp8(tmp3[36]).t.k5WiPf), IconComponent: tmp8(tmp3[40]).LinkIcon };
    intl14 = tmp8(tmp3[36]).intl;
    const items8 = [getProps(obj11)];
    const items9 = [items8];
    return render(items9);
  } else {
    let stringResult;
    const obj12 = { label: intl20.string(tmp8(tmp3[36]).t.fsBWmS), IconComponent: tmp8(tmp3[41]).PencilIcon };
    intl20 = tmp8(tmp3[36]).intl;
    const props = getProps(obj12);
    const obj13 = { label: intl21.string(tmp8(tmp3[36]).t.Y8ujqr), IconComponent: tmp8(tmp3[41]).PencilIcon };
    intl21 = tmp8(tmp3[36]).intl;
    const props1 = getProps(obj13);
    const obj15 = { label: intl22.string(tmp8(tmp3[36]).t["5IEsGx"]), IconComponent: tmp8(tmp3[42]).ArrowAngleLeftUpIcon };
    intl22 = tmp8(tmp3[36]).intl;
    const props2 = getProps(obj15);
    const obj16 = { label: intl23.string(tmp8(tmp3[36]).t.I3ltXO), IconComponent: tmp(tmp3[43]) };
    intl23 = tmp8(tmp3[36]).intl;
    const props3 = getProps(obj16);
    const obj17 = { label: intl24.string(tmp8(tmp3[36]).t.rBIGBL), IconComponent: tmp8(tmp3[44]).ThreadIcon };
    intl24 = tmp8(tmp3[36]).intl;
    const props4 = getProps(obj17);
    const obj18 = { label: intl25.string(tmp8(tmp3[36]).t["39d0Wj"]), IconComponent: tmp8(tmp3[44]).ThreadIcon };
    intl25 = tmp8(tmp3[36]).intl;
    const props5 = getProps(obj18);
    const obj19 = { label: intl26.string(tmp8(tmp3[36]).t["+TSRGD"]), IconComponent: tmp8(tmp3[45]).ChatArrowRightIcon };
    intl26 = tmp8(tmp3[36]).intl;
    const props6 = getProps(obj19);
    const obj20 = { label: intl27.string(tmp8(tmp3[36]).t.JrGD7E), IconComponent: tmp8(tmp3[38]).CopyIcon };
    intl27 = tmp8(tmp3[36]).intl;
    const props7 = getProps(obj20);
    const obj21 = { label: intl28.string(tmp8(tmp3[36]).t.RpE9k7), IconComponent: tmp8(tmp3[46]).ChatMarkUnreadIcon };
    intl28 = tmp8(tmp3[36]).intl;
    const props8 = getProps(obj21);
    const obj22 = { label: intl29.string(tmp8(tmp3[36]).t.grdwwt), IconComponent: tmp8(tmp3[47]).ClockXIcon };
    intl29 = tmp8(tmp3[36]).intl;
    const props9 = getProps(obj22);
    const obj23 = { label: intl30.string(tmp8(tmp3[36]).t.gHp0C4), IconComponent: tmp8(tmp3[48]).ReactionIcon };
    intl30 = tmp8(tmp3[36]).intl;
    const props10 = getProps(obj23);
    const obj24 = { label: intl31.string(tmp8(tmp3[36]).t.MFGE51), IconComponent: tmp8(tmp3[49]).AnnouncementsIcon };
    intl31 = tmp8(tmp3[36]).intl;
    const props11 = getProps(obj24);
    const obj25 = { label: intl32.string(tmp8(tmp3[36]).t.CvQ18w), IconComponent: tmp8(tmp3[50]).PinIcon };
    intl32 = tmp8(tmp3[36]).intl;
    const props12 = getProps(obj25);
    const obj26 = { label: intl33.string(tmp8(tmp3[36]).t["Bse+F/"]), IconComponent: tmp8(tmp3[50]).PinIcon };
    intl33 = tmp8(tmp3[36]).intl;
    const props13 = getProps(obj26);
    const obj27 = { label: intl34.string(tmp8(tmp3[36]).t["lE/PG3"]), IconComponent: tmp8(tmp3[51]).StampIcon };
    intl34 = tmp8(tmp3[36]).intl;
    const props14 = getProps(obj27);
    const obj28 = { label: intl35.string(tmp8(tmp3[36]).t["2km5Gf"]), IconComponent: tmp8(tmp3[52]).StampXIcon };
    intl35 = tmp8(tmp3[36]).intl;
    const props15 = getProps(obj28);
    const obj29 = { label: intl36.string(tmp8(tmp3[36]).t.tpxJto), IconComponent: tmp8(tmp3[53]).BookmarkOutlineIcon };
    intl36 = tmp8(tmp3[36]).intl;
    const props16 = getProps(obj29);
    const obj30 = { label: intl37.string(tmp8(tmp3[36]).t.SvXS1Z), IconComponent: tmp8(tmp3[54]).BookmarkIcon };
    intl37 = tmp8(tmp3[36]).intl;
    const props17 = getProps(obj30);
    const obj31 = { label: intl38.string(tmp8(tmp3[36]).t.mJ3P0N), IconComponent: tmp8(tmp3[55]).ClockIcon, arrow: true };
    intl38 = tmp8(tmp3[36]).intl;
    const props18 = getProps(obj31);
    const obj32 = { label: intl39.string(tmp8(tmp3[36]).t.vrbqs1), IconComponent: tmp8(tmp3[55]).ClockIcon, arrow: true };
    intl39 = tmp8(tmp3[36]).intl;
    const props19 = getProps(obj32);
    const obj33 = { label: intl40.string(tmp8(tmp3[36]).t.PHjkRE), IconComponent: tmp8(tmp3[56]).RobotIcon, arrow: true };
    intl40 = tmp8(tmp3[36]).intl;
    const props20 = getProps(obj33);
    const obj34 = { label: intl41.string(tmp8(tmp3[36]).t["g33r/P"]), IconComponent: tmp8(tmp3[57]).ChatIcon };
    intl41 = tmp8(tmp3[36]).intl;
    const props21 = getProps(obj34);
    const obj35 = { label: intl42.string(tmp8(tmp3[36]).t.P8tvKG), IconComponent: tmp8(tmp3[58]).AtIcon };
    intl42 = tmp8(tmp3[36]).intl;
    const props22 = getProps(obj35);
    const obj36 = { label: intl43.string(tmp8(tmp3[36]).t["S/xNKV"]), IconComponent: tmp8(tmp3[59]).DownloadIcon };
    intl43 = tmp8(tmp3[36]).intl;
    const props23 = getProps(obj36);
    const obj38 = { label: intl44.string(tmp8(tmp3[36]).t.JVuuz3), IconComponent: tmp8(tmp3[59]).DownloadIcon };
    intl44 = tmp8(tmp3[36]).intl;
    const props24 = getProps(obj38);
    const obj39 = { label: intl45.string(tmp8(tmp3[36]).t.vbAEaA), IconComponent: tmp8(tmp3[59]).DownloadIcon };
    intl45 = tmp8(tmp3[36]).intl;
    const props25 = getProps(obj39);
    let flag = false;
    try {
      let mediaUrl;
      if (selectedMedia != null) {
        mediaUrl = selectedMedia.mediaUrl;
      }
      let uRL = null;
      if (null != mediaUrl) {
        const _URL = URL;
        const self = this;
        const self2 = this;
        uRL = new URL(selectedMedia.mediaUrl);
      }
      let mediaType;
      if (selectedMedia != null) {
        mediaType = selectedMedia.mediaType;
      }
      let isMatch = "image" === mediaType && null != tmp60 && "cdn.discordapp.com" === tmp60.hostname;
      if (isMatch) {
        const obj14 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
        isMatch = obj14.test(uRL.pathname);
      }
      flag = isMatch;
    } catch (err) {
    }
    const intl = tmp8(tmp3[36]).intl;
    const string = intl.string;
    const t = tmp8(tmp3[36]).t;
    const obj40 = { label: string(flag ? t["8xHmxo"] : t["92CPQ+"]), IconComponent: tmp8(tmp3[40]).LinkIcon };
    const props26 = getProps(obj40);
    const obj41 = { label: intl2.string(tmp8(tmp3[36]).t.Xrt5Po), IconComponent: tmp8(tmp3[40]).LinkIcon };
    intl2 = tmp8(tmp3[36]).intl;
    const props27 = getProps(obj41);
    const obj42 = { label: intl3.string(tmp8(tmp3[36]).t.Rjezbz), IconComponent: tmp8(tmp3[55]).ClockIcon, arrow: true };
    intl3 = tmp8(tmp3[36]).intl;
    const props28 = getProps(obj42);
    const obj43 = { label: intl4.string(tmp8(tmp3[36]).t.zBoHlf), IconComponent: tmp8(tmp3[60]).IdIcon };
    intl4 = tmp8(tmp3[36]).intl;
    const props29 = getProps(obj43);
    if (contentMessage.embeds.length > 1) {
      const intl6 = tmp8(tmp3[36]).intl;
      stringResult = intl6.string(tmp8(tmp3[36]).t.wUIMqa);
    } else {
      const intl5 = tmp8(tmp3[36]).intl;
      stringResult = intl5.string(tmp8(tmp3[36]).t["4sxKOb"]);
    }
    const obj44 = { label: stringResult, IconComponent: tmp8(tmp3[61]).XSmallBoldIcon, variant: "danger" };
    const props30 = getProps(obj44);
    const obj45 = { label: intl7.string(tmp8(tmp3[36]).t.ZbtGBm), IconComponent: tmp8(tmp3[39]).TrashIcon, variant: "danger" };
    intl7 = tmp8(tmp3[36]).intl;
    const props31 = getProps(obj45);
    const obj46 = { label: intl8.string(tmp8(tmp3[36]).t.kFwAsa), IconComponent: tmp8(tmp3[39]).TrashIcon, variant: "danger" };
    intl8 = tmp8(tmp3[36]).intl;
    const props32 = getProps(obj46);
    const obj47 = { label: intl9.string(tmp8(tmp3[36]).t["+78Pfm"]), IconComponent: tmp8(tmp3[62]).FlagIcon, variant: "danger" };
    intl9 = tmp8(tmp3[36]).intl;
    const props33 = getProps(obj47);
    const obj48 = { label: intl10.string(tmp8(tmp3[36]).t.n5EBAJ), variant: "danger", IconComponent: tmp8(tmp3[63]).ClydeIcon };
    intl10 = tmp8(tmp3[36]).intl;
    const props34 = getProps(obj48);
    const obj49 = { label: intl11.string(tmp(tmp3[64])["1D+vqy"]), IconComponent: tmp8(tmp3[62]).FlagIcon, disabled: stateFromStores };
    intl11 = tmp8(tmp3[36]).intl;
    const props35 = getProps(obj49);
    const obj50 = { label: intl12.string(tmp8(tmp3[36]).t.ZH7P2h), IconComponent: tmp8(tmp3[65]).ImageWarningIcon };
    intl12 = tmp8(tmp3[36]).intl;
    const props36 = getProps(obj50);
    const obj51 = { label: intl13.string(tmp8(tmp3[36]).t.xwMqD7), IconComponent: tmp8(tmp3[39]).TrashIcon, variant: "danger" };
    intl13 = tmp8(tmp3[36]).intl;
    const props37 = getProps(obj51);
    let hasFlagResult1 = tmp91;
    if (!hasFlagResult1) {
      const tmp8Result25 = tmp8(tmp3[26]);
      hasFlagResult1 = tmp8Result25.hasFlag(message.flags, tmp29.EPHEMERAL);
    }
    const items10 = [];
    if (hasFlagResult1) {
      items10.push(props4, props8, props16, props17, props18, props19, props30, props37, props, props1, props22, props21, props20, props31);
    }
    if (isActiveChannelOrUnarchivableThread) {
      const tmp8Result26 = tmp8(tmp3[26]);
      isActiveChannelOrUnarchivableThread = !tmp8Result26.hasFlag(message.flags, tmp29.EPHEMERAL);
    }
    if (!isActiveChannelOrUnarchivableThread) {
      items10.push(props, props1, props2, props30, props32, props37, props11, props12, props13, props14, props15, props8, props22, props20, props31);
    }
    const tmp8Result27 = tmp8(tmp3[26]);
    if (tmp8Result27.hasFlag(message.flags, constants4.EPHEMERAL)) {
      items10.push(props3, props2, props27, props33, props34, props35);
    }
    const _Set = Set;
    const self3 = this;
    const self4 = this;
    set = new Set(items10);
    const items11 = [];
    if ("Preview" === tmp5) {
      items11.unshift(props6);
    }
    if (canStartPublicThread) {
      items11.unshift(props4);
    } else if (message.hasFlag(constants4.HAS_THREAD)) {
      items11.unshift(props5);
    }
    items11.unshift(props27);
    if (setting) {
      items11.unshift(props29);
    }
    if (tmp55) {
      const tmp8Result28 = tmp8(tmp3[66]);
      if (tmp8Result28.canReportMessageToMods(message)) {
        items11.unshift(props34);
        items11.unshift(props35);
      }
      items11.unshift(props8);
      const tmp160 = tmp14 || tmp13 || channel.isPrivate() || set.can(constants8.READ_MESSAGE_HISTORY, channel);
      if (tmp160) {
        if (!tmp13) {
          let tmp161 = props16;
          const unshift = items11.unshift;
          if (tmp14) {
            tmp161 = props17;
          }
          unshift(tmp161);
        }
        let tmp163 = props18;
        const unshift2 = items11.unshift;
        if (tmp13) {
          tmp163 = props19;
        }
        unshift2(tmp163);
      }
      if (tmp42) {
        items11.unshift(props30);
      }
      let hasItem1 = !canResult && !message.canDeleteOwnMessage(id3);
      if (!hasItem1) {
        const UNDELETABLE = constants7.UNDELETABLE;
        hasItem1 = UNDELETABLE.has(message.type);
      }
      if (!hasItem1) {
        items11.unshift(props37);
      }
      const tmp170 = tmp(tmp3[68])(message, id3) && !isNonModInLockedThread;
      if (tmp170) {
        items11.unshift(props);
      }
      if (tmp32) {
        items11.unshift(props11);
      }
      const tmp175 = channel.isPrivate() && !tmp174 || true === isNonUserBotResult;
      if (!tmp175) {
        const tmp176 = set.can(constants8.SEND_MESSAGES, channel) || channel.type === constants2.GROUP_DM;
        if (tmp176) {
          items11.unshift(props22);
        }
        let id4;
        if (user != null) {
          id4 = user.id;
        }
        if (id3 !== id4) {
          items11.unshift(props21);
        }
      }
      if (tmp31) {
        let tmp180 = props12;
        const unshift3 = items11.unshift;
        if (message.pinned) {
          tmp180 = props13;
        }
        unshift3(tmp180);
      }
      if (canToggleGuildOfficialMessages) {
        const unshift4 = items11.unshift;
        let tmp184 = props14;
        const tmp8Result29 = tmp8(tmp3[26]);
        if (tmp8Result29.hasFlag(message.flags, constants4.IS_GUILD_OFFICIAL)) {
          tmp184 = props15;
        }
        unshift4(tmp184);
      }
      const tmp186 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
      if (tmp186) {
        items11.unshift(props7);
      }
      if (canReplyToMessage) {
        items11.unshift(props2);
      }
      if (canForwardMessage) {
        items11.unshift(props3);
      }
      let sourceType;
      if (selectedMedia != null) {
        sourceType = selectedMedia.sourceType;
      }
      let tmp191 = "attachment" !== sourceType;
      if (!tmp191) {
        tmp191 = "image" !== selectedMedia.mediaType && "video" !== selectedMedia.mediaType;
        const tmp192 = "image" !== selectedMedia.mediaType && "video" !== selectedMedia.mediaType;
      }
      if (!tmp191) {
        tmp191 = !tmp(tmp3[68])(message, id3);
      }
      if (!tmp191) {
        tmp191 = isNonModInLockedThread;
      }
      if (!tmp191) {
        const attachments = message.attachments;
        tmp191 = !attachments.some((id) => id.id === selectedMedia.source.id);
      }
      if (!tmp191) {
        items11.unshift(props1);
      }
      const tmp195 = null == selectedMedia || tmpResultResult;
      if (!tmp195) {
        items11.unshift(props26);
        if ("image" === selectedMedia.mediaType) {
          items11.unshift(props23);
        } else {
          if ("video" === selectedMedia.mediaType) {
            const tmp8Result30 = tmp8(tmp3[69]);
            if (!tmp8Result30.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
              items11.unshift(props24);
            }
          }
          const tmp200 = "audio" !== selectedMedia.mediaType && "file" !== selectedMedia.mediaType;
          if (!tmp200) {
            items11.unshift(props25);
          }
        }
        const tmp8Result31 = tmp8(tmp3[70]);
        if (tmp8Result31.messageHasObscurableMedia(message)) {
          items11.unshift(props36);
        }
        const tmp206 = "attachment" === selectedMedia.sourceType && tmp51;
        if (tmp206) {
          items11.unshift(props32);
        }
      }
      let tmp208 = message.reactions.length > 0;
      if (tmp208) {
        const isPollResult = message.isPoll();
        let hasNonVoteReactionsResult = !isPollResult;
        if (isPollResult) {
          const tmp8Result32 = tmp8(tmp3[71]);
          hasNonVoteReactionsResult = tmp8Result32.hasNonVoteReactions(message);
        }
        tmp208 = hasNonVoteReactionsResult;
      }
      if (tmp208) {
        items11.unshift(props10);
        if (canResult) {
          items11.unshift(props31);
        }
      }
      for (const item10690 of tmp20) {
        if (item10690 === require("usePollMessageContextItemTypes").PollMessageContextItemTypes.END_EARLY) {
          let arr66 = items11.unshift(props9);
        }
        continue;
      }
      items11.unshift(props20);
      const obj37 = require("ApplicationInteractionInfoUtils");
      if (obj37.canViewInteractionInfo(message)) {
        items11.unshift(props28);
      }
      const _Set2 = Set;
      const self5 = this;
      const self6 = this;
      const items12 = [props, props1, props2, props3, props4];
      const items13 = [items12, , ];
      const items14 = [props6, props5, props7, props8, props9, props10, props11, props12, props13, props14, props15, props16, props17, props18, props19, props20, props21, props22, props23, props24, props25, props26, props27, props28, props29];
      items13[1] = items14;
      const items15 = [props30, props31, props32, props33, props34, props35, props36, props37];
      items13[2] = items15;
      set1 = new Set(items11.filter((item) => !set.has(item)));
      let mapped = items13.map((arr) => arr.filter((item) => set.has(item)));
      return render(mapped.filter((item) => item.length > 0));
    }
    let canReportUserResult = null != user;
    if (canReportUserResult) {
      const tmp8Result33 = tmp8(tmp3[67]);
      canReportUserResult = tmp8Result33.canReportUser(user);
    }
    if (canReportUserResult) {
      const tmp8Result34 = tmp8(tmp3[67]);
      canReportUserResult = tmp8Result34.canReportMessage(message);
    }
    if (canReportUserResult) {
      items11.unshift(props33);
    }
  }
};
