// Module ID: 11153
// Function ID: 11154
// Name: LongPressMessageActionSheet
// Dependencies: [32, 19, 7380, 11154, 11155, 4480, 502, 2067, 4469, 4829, 1074, 21, 6583, 6603, 5016, 11152, 7418, 11156, 7275, 504, 6687, 11157, 11158, 2021, 6685, 11159, 5060, 1385, 11160, 7573, 11161, 6620, 11162, 6618, 1610, 11229, 11230, 1115, 9640, 4779, 4790, 4775, 9713, 11234, 11185, 5387, 11236, 9707, 11238, 8219, 5408, 10416, 11240, 11242, 8122, 11244, 11207, 4795, 8738, 5385, 5404, 4781, 10092, 7415, 8124, 10278, 2619, 5395, 6694, 6707, 11246, 4986, 6710, 7180, 11114, 2]
// Exports: default

// Module 11153 (LongPressMessageActionSheet)
import Fragment from "Fragment" /* 21 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import MessageRecord from "MessageRecord" /* 4480 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6583 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11152 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 11162 */;
import EmojiRowUtils from "EmojiRowUtils" /* 11229 */;
import EmojiRowDefault from "EmojiRow" /* 11230 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7380 */;
import ReportToModStore from "ReportToModStore" /* 11154 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11155 */;
import AuthenticationStore_mod from "AuthenticationStore" /* 502 */;
import GuildStore_mod from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
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
let GuildStore = GuildStore_mod;
const FileUploadErrorTypes = MessageConstants.FileUploadErrorTypes;
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16, LOCAL_BOT_ID: closure_17, MessageAttachmentFlags: closure_18, MessageFlags: closure_19, MessageStates: closure_20, MessageTypes: closure_21, MessageTypesSets: closure_22, Permissions: closure_23 } = Constants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  let allTextDisplayContent;
  let analyticsLocations;
  let chatInputRef;
  let closure_10;
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
  let intl46;
  let intl7;
  let intl8;
  let intl9;
  let isNonUserBotResult;
  let message;
  let props;
  let props1;
  let props11;
  let props13;
  let props14;
  let props15;
  let props17;
  let props4;
  let props8;
  let selectedMedia;
  let tmp14;
  let tmp15;
  let user;
  const f92974 = () => {
    const items = [SavedMessagesStore.isMessageReminder(channel.id, message.id), SavedMessagesStore.isMessageBookmarked(channel.id, message.id)];
    return items;
  };
  const f92975 = (flags) => {
    let tmp = null == flags.flags;
    if (!tmp) {
      const obj = analyticsLocation(analyticsLocation[27]);
      tmp = !obj.hasFlag(flags.flags, props12.IS_THUMBNAIL);
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
    obj2 = { page: channel.isPrivate() ? authStore2.DM_CHANNEL : authStore2.GUILD_CHANNEL };
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
  const guild = GuildStore.getGuild(channel.guild_id);
  let obj4 = require("ForLaterExperiment");
  let isForLaterExperimentOn = obj4.useIsForLaterExperimentOn("LongPressMessageActionSheet");
  let obj5 = require("get initialized");
  const items2 = [actionSheetSource];
  [tmp14, tmp15] = message(obj5.useStateFromStoresArray(items2, f92974), 2);
  const tmp13 = message(obj5.useStateFromStoresArray(items2, f92974), 2);
  const obj6 = require("ForLaterExperiment");
  const hasForLaterAccess = obj6.useHasForLaterAccess("LongPressMessageActionSheet");
  const obj7 = require("ThreadHooks");
  const isNonModInLockedThread = obj7.useIsNonModInLockedThread(channel);
  let id1;
  const tmpResult = tmp(tmp3[21]);
  if (channel != null) {
    id1 = channel.id;
  }
  const tmpResultResult = tmpResult(id1);
  const interactionError = message.interactionError;
  const EXPLICIT_CONTENT = props1.EXPLICIT_CONTENT;
  const tmp21 = null != GuildAutomodMessageStore.getMessage(message.id);
  const tmp22 = tmp(tmp3[22])(message);
  const tmp8Result = tmp8(tmp3[20]);
  GuildStore = tmp8Result.useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    isNonUserBotResult = user.isNonUserBot();
  }
  const id3 = AuthenticationStore.getId();
  const DeveloperMode = tmp8(tmp3[23]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = props.can(props17.MANAGE_MESSAGES, channel);
  const canResult1 = props.can(props17.SEND_MESSAGES, channel);
  const tmp8Result15 = tmp8(tmp3[24]);
  const canToggleGuildOfficialMessages = tmp8Result15.useCanToggleGuildOfficialMessages(message, channel, "LongPressMessageActionSheet");
  const id = message.author.id;
  let hasFlagResult = message.hasFlag(props13.CROSSPOSTED);
  let tmp33 = !hasFlagResult;
  const tmp32 = tmp(tmp3[25])(message, channel);
  if (!hasFlagResult) {
    tmp33 = channel.type === props4.GUILD_ANNOUNCEMENT;
  }
  if (tmp33) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(props8.NEWS);
    }
    tmp33 = hasItem;
  }
  if (tmp33) {
    tmp33 = canResult1;
  }
  if (tmp33) {
    tmp33 = id === id3 || canResult;
    const tmp37 = id === id3 || canResult;
  }
  if (tmp33) {
    tmp33 = message.type === props15.DEFAULT;
  }
  if (tmp33) {
    tmp33 = !message.isPoll();
  }
  const tmp8Result16 = tmp8(tmp3[20]);
  const canStartPublicThread = tmp8Result16.computeCanStartPublicThread(channel, message);
  const contentMessage = message.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    const tmp8Result17 = tmp8(tmp3[26]);
    allTextDisplayContent = tmp8Result17.getAllTextDisplayContent(contentMessage.components);
  } else {
    allTextDisplayContent = contentMessage.content;
  }
  let tmp43 = (canResult || message.canDeleteOwnMessage(id3)) && length > 0 && message.author.id !== props11;
  if (tmp43) {
    const tmp8Result18 = tmp8(tmp3[27]);
    tmp43 = !tmp8Result18.hasFlag(message.flags, tmp30.EPHEMERAL);
  }
  if (tmp43) {
    tmp43 = tmp(tmp3[28])(message) >= 1;
  }
  let tmp48 = !tmp21 && interactionError !== EXPLICIT_CONTENT;
  if (tmp48) {
    let result = null == message.interactionData;
    if (!result) {
      const tmp8Result19 = tmp8(tmp3[29]);
      result = tmp8Result19.canRetryInteractionData(message.interactionData);
    }
    tmp48 = result;
  }
  const attachments1 = message.attachments;
  let tmp52 = message.author.id === id3;
  if (tmp52) {
    tmp52 = attachments1.filter(f92975).length > 1 || "" !== message.content;
    const tmp53 = attachments1.filter(f92975).length > 1 || "" !== message.content;
  }
  const items3 = [selectedMedia];
  const tmp8Result20 = tmp8(tmp3[19]);
  const stateFromStores = tmp8Result20.useStateFromStores(items3, () => ReportToModStore.hasReportedMessage(message.channel_id, message.id));
  tmp8(tmp3[30]);
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
      icon: props18(analyticsLocation(analyticsLocation[31]).ActionSheetRow.Icon, { IconComponent }),
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
    shouldShowEmojiRowResult = obj4.shouldShowEmojiRow(closure_8, message, closure_10);
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
            return closure_1_24(closure_1_0(closure_1_2[31]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, index);
          })
        };
        const Group = closure_1_0(closure_1_2[31]).ActionSheetRow.Group;
        return props18(Group, obj, index);
      });
    }
    return <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
  if (message.state === props14.SEND_FAILED) {
    const items4 = [];
    if (tmp48) {
      let obj = { label: intl17.string(tmp8(tmp3[37]).t["5911Lb"]), IconComponent: tmp8(tmp3[38]).RetryIcon };
      const push3 = items4.push;
      intl17 = tmp8(tmp3[37]).intl;
      push3(getProps(obj));
    }
    const tmp192 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
    if (tmp192) {
      const push4 = items4.push;
      const obj8 = { label: intl18.string(tmp8(tmp3[37]).t.JrGD7E), IconComponent: tmp8(tmp3[39]).CopyIcon };
      intl18 = tmp8(tmp3[37]).intl;
      push4(getProps(obj8));
    }
    const push5 = items4.push;
    const obj10 = { label: intl19.string(require("intl").t.xwMqD7), IconComponent: require("TrashIcon").TrashIcon, variant: "danger" };
    intl19 = tmp7(tmp2[37]).intl;
    push5(getProps(obj10));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp57.SENDING) {
    const items6 = [];
    const tmp182 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
    if (tmp182) {
      const push = items6.push;
      const obj11 = { label: intl15.string(tmp8(tmp3[37]).t.JrGD7E), IconComponent: tmp8(tmp3[39]).CopyIcon };
      intl15 = tmp8(tmp3[37]).intl;
      push(getProps(obj11));
    }
    const push2 = items6.push;
    const obj12 = { label: intl16.string(tmp8(tmp3[37]).t.xwMqD7), IconComponent: tmp8(tmp3[40]).TrashIcon, variant: "danger" };
    intl16 = tmp8(tmp3[37]).intl;
    push2(getProps(obj12));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === props15.THREAD_STARTER_MESSAGE) {
    const obj13 = { label: intl14.string(tmp8(tmp3[37]).t.k5WiPf), IconComponent: tmp8(tmp3[41]).LinkIcon };
    intl14 = tmp8(tmp3[37]).intl;
    const items8 = [getProps(obj13)];
    const items9 = [items8];
    return render(items9);
  } else {
    let stringResult;
    const obj14 = { label: intl20.string(tmp8(tmp3[37]).t.fsBWmS), IconComponent: tmp8(tmp3[42]).PencilIcon };
    intl20 = tmp8(tmp3[37]).intl;
    props = getProps(obj14);
    const obj15 = { label: intl21.string(tmp8(tmp3[37]).t.Y8ujqr), IconComponent: tmp8(tmp3[42]).PencilIcon };
    intl21 = tmp8(tmp3[37]).intl;
    props1 = getProps(obj15);
    const obj17 = { label: intl22.string(tmp8(tmp3[37]).t["5IEsGx"]), IconComponent: tmp8(tmp3[43]).ArrowAngleLeftUpIcon };
    intl22 = tmp8(tmp3[37]).intl;
    const props2 = getProps(obj17);
    const obj18 = { label: intl23.string(tmp8(tmp3[37]).t.I3ltXO), IconComponent: tmp(tmp3[44]) };
    intl23 = tmp8(tmp3[37]).intl;
    const props3 = getProps(obj18);
    const obj19 = { label: intl24.string(tmp8(tmp3[37]).t.rBIGBL), IconComponent: tmp8(tmp3[45]).ThreadIcon };
    intl24 = tmp8(tmp3[37]).intl;
    props4 = getProps(obj19);
    const obj20 = { label: intl25.string(tmp8(tmp3[37]).t["39d0Wj"]), IconComponent: tmp8(tmp3[45]).ThreadIcon };
    intl25 = tmp8(tmp3[37]).intl;
    const props5 = getProps(obj20);
    const obj21 = { label: intl26.string(tmp8(tmp3[37]).t["+TSRGD"]), IconComponent: tmp8(tmp3[46]).ChatArrowRightIcon };
    intl26 = tmp8(tmp3[37]).intl;
    const props6 = getProps(obj21);
    const obj22 = { label: intl27.string(tmp8(tmp3[37]).t.JrGD7E), IconComponent: tmp8(tmp3[39]).CopyIcon };
    intl27 = tmp8(tmp3[37]).intl;
    const props7 = getProps(obj22);
    const obj23 = { label: intl28.string(tmp8(tmp3[37]).t.RpE9k7), IconComponent: tmp8(tmp3[47]).ChatMarkUnreadIcon };
    intl28 = tmp8(tmp3[37]).intl;
    props8 = getProps(obj23);
    const obj24 = { label: intl29.string(tmp8(tmp3[37]).t.grdwwt), IconComponent: tmp8(tmp3[48]).ClockXIcon };
    intl29 = tmp8(tmp3[37]).intl;
    const props9 = getProps(obj24);
    const obj25 = { label: intl30.string(tmp8(tmp3[37]).t.gHp0C4), IconComponent: tmp8(tmp3[49]).ReactionIcon };
    intl30 = tmp8(tmp3[37]).intl;
    const props10 = getProps(obj25);
    const obj26 = { label: intl31.string(tmp8(tmp3[37]).t.MFGE51), IconComponent: tmp8(tmp3[50]).AnnouncementsIcon };
    intl31 = tmp8(tmp3[37]).intl;
    props11 = getProps(obj26);
    const obj27 = { label: intl32.string(tmp8(tmp3[37]).t.CvQ18w), IconComponent: tmp8(tmp3[51]).PinIcon };
    intl32 = tmp8(tmp3[37]).intl;
    const props12 = getProps(obj27);
    const obj28 = { label: intl33.string(tmp8(tmp3[37]).t["Bse+F/"]), IconComponent: tmp8(tmp3[51]).PinIcon };
    intl33 = tmp8(tmp3[37]).intl;
    props13 = getProps(obj28);
    const obj29 = { label: intl34.string(tmp8(tmp3[37]).t["lE/PG3"]), IconComponent: tmp8(tmp3[52]).StampIcon };
    intl34 = tmp8(tmp3[37]).intl;
    props14 = getProps(obj29);
    const obj30 = { label: intl35.string(tmp8(tmp3[37]).t["2km5Gf"]), IconComponent: tmp8(tmp3[53]).StampXIcon };
    intl35 = tmp8(tmp3[37]).intl;
    props15 = getProps(obj30);
    const obj31 = { label: intl36.string(tmp8(tmp3[37]).t.tpxJto), IconComponent: tmp8(tmp3[54]).NitroWheelIcon };
    intl36 = tmp8(tmp3[37]).intl;
    const props16 = getProps(obj31);
    const obj32 = { label: intl37.string(tmp8(tmp3[37]).t.tpxJto), IconComponent: tmp8(tmp3[55]).BookmarkOutlineIcon };
    intl37 = tmp8(tmp3[37]).intl;
    props17 = getProps(obj32);
    const obj33 = { label: intl38.string(tmp8(tmp3[37]).t.SvXS1Z), IconComponent: tmp8(tmp3[56]).BookmarkIcon };
    intl38 = tmp8(tmp3[37]).intl;
    const props18 = getProps(obj33);
    const obj34 = { label: intl39.string(tmp8(tmp3[37]).t.mJ3P0N), IconComponent: tmp8(tmp3[57]).ClockIcon, arrow: true };
    intl39 = tmp8(tmp3[37]).intl;
    const props19 = getProps(obj34);
    const obj35 = { label: intl40.string(tmp8(tmp3[37]).t.vrbqs1), IconComponent: tmp8(tmp3[57]).ClockIcon, arrow: true };
    intl40 = tmp8(tmp3[37]).intl;
    const props20 = getProps(obj35);
    const obj37 = { label: intl41.string(tmp8(tmp3[37]).t.PHjkRE), IconComponent: tmp8(tmp3[58]).RobotIcon, arrow: true };
    intl41 = tmp8(tmp3[37]).intl;
    const props21 = getProps(obj37);
    const obj38 = { label: intl42.string(tmp8(tmp3[37]).t["g33r/P"]), IconComponent: tmp8(tmp3[59]).ChatIcon };
    intl42 = tmp8(tmp3[37]).intl;
    const props22 = getProps(obj38);
    const obj39 = { label: intl43.string(tmp8(tmp3[37]).t.P8tvKG), IconComponent: tmp8(tmp3[60]).AtIcon };
    intl43 = tmp8(tmp3[37]).intl;
    const props23 = getProps(obj39);
    const obj40 = { label: intl44.string(tmp8(tmp3[37]).t["S/xNKV"]), IconComponent: tmp8(tmp3[61]).DownloadIcon };
    intl44 = tmp8(tmp3[37]).intl;
    const props24 = getProps(obj40);
    const obj41 = { label: intl45.string(tmp8(tmp3[37]).t.JVuuz3), IconComponent: tmp8(tmp3[61]).DownloadIcon };
    intl45 = tmp8(tmp3[37]).intl;
    const props25 = getProps(obj41);
    const obj42 = { label: intl46.string(tmp8(tmp3[37]).t.vbAEaA), IconComponent: tmp8(tmp3[61]).DownloadIcon };
    intl46 = tmp8(tmp3[37]).intl;
    const props26 = getProps(obj42);
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
      let isMatch = "image" === mediaType && null != tmp61 && "cdn.discordapp.com" === tmp61.hostname;
      if (isMatch) {
        const obj16 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
        isMatch = obj16.test(uRL.pathname);
      }
      flag = isMatch;
    } catch (err) {
    }
    const intl = tmp8(tmp3[37]).intl;
    const string = intl.string;
    const t = tmp8(tmp3[37]).t;
    const obj43 = { label: string(flag ? t["8xHmxo"] : t["92CPQ+"]), IconComponent: tmp8(tmp3[41]).LinkIcon };
    const props27 = getProps(obj43);
    const obj44 = { label: intl2.string(tmp8(tmp3[37]).t.Xrt5Po), IconComponent: tmp8(tmp3[41]).LinkIcon };
    intl2 = tmp8(tmp3[37]).intl;
    const props28 = getProps(obj44);
    const obj45 = { label: intl3.string(tmp8(tmp3[37]).t.Rjezbz), IconComponent: tmp8(tmp3[57]).ClockIcon, arrow: true };
    intl3 = tmp8(tmp3[37]).intl;
    const props29 = getProps(obj45);
    const obj46 = { label: intl4.string(tmp8(tmp3[37]).t.zBoHlf), IconComponent: tmp8(tmp3[62]).IdIcon };
    intl4 = tmp8(tmp3[37]).intl;
    const props30 = getProps(obj46);
    if (contentMessage.embeds.length > 1) {
      const intl6 = tmp8(tmp3[37]).intl;
      stringResult = intl6.string(tmp8(tmp3[37]).t.wUIMqa);
    } else {
      const intl5 = tmp8(tmp3[37]).intl;
      stringResult = intl5.string(tmp8(tmp3[37]).t["4sxKOb"]);
    }
    const obj47 = { label: stringResult, IconComponent: tmp8(tmp3[63]).XSmallBoldIcon, variant: "danger" };
    const props31 = getProps(obj47);
    const obj48 = { label: intl7.string(tmp8(tmp3[37]).t.ZbtGBm), IconComponent: tmp8(tmp3[40]).TrashIcon, variant: "danger" };
    intl7 = tmp8(tmp3[37]).intl;
    const props32 = getProps(obj48);
    const obj49 = { label: intl8.string(tmp8(tmp3[37]).t.kFwAsa), IconComponent: tmp8(tmp3[40]).TrashIcon, variant: "danger" };
    intl8 = tmp8(tmp3[37]).intl;
    const props33 = getProps(obj49);
    const obj50 = { label: intl9.string(tmp8(tmp3[37]).t["+78Pfm"]), IconComponent: tmp8(tmp3[64]).FlagIcon, variant: "danger" };
    intl9 = tmp8(tmp3[37]).intl;
    const props34 = getProps(obj50);
    const obj51 = { label: intl10.string(tmp8(tmp3[37]).t.n5EBAJ), variant: "danger", IconComponent: tmp8(tmp3[65]).ClydeIcon };
    intl10 = tmp8(tmp3[37]).intl;
    const props35 = getProps(obj51);
    const obj52 = { label: intl11.string(tmp(tmp3[66])["1D+vqy"]), IconComponent: tmp8(tmp3[64]).FlagIcon, disabled: stateFromStores };
    intl11 = tmp8(tmp3[37]).intl;
    const props36 = getProps(obj52);
    const obj53 = { label: intl12.string(tmp8(tmp3[37]).t.ZH7P2h), IconComponent: tmp8(tmp3[67]).ImageWarningIcon };
    intl12 = tmp8(tmp3[37]).intl;
    const props37 = getProps(obj53);
    const obj54 = { label: intl13.string(tmp8(tmp3[37]).t.xwMqD7), IconComponent: tmp8(tmp3[40]).TrashIcon, variant: "danger" };
    intl13 = tmp8(tmp3[37]).intl;
    const props38 = getProps(obj54);
    set = (() => {
      let hasFlagResult = "Preview" === actionSheetSource;
      if (!hasFlagResult) {
        const obj = FlagUtils;
        hasFlagResult = obj.hasFlag(message.flags, props13.EPHEMERAL);
      }
      const items = [];
      if (hasFlagResult) {
        items.push(props4, props8, props17, props18, props16, props19, props20, props31, props38, props, props1, props23, props22, props21, props32);
      }
      let tmp23 = closure_10;
      if (tmp23) {
        const obj2 = FlagUtils;
        tmp23 = !obj2.hasFlag(message.flags, props13.EPHEMERAL);
      }
      if (!tmp23) {
        items.push(props, props1, props2, props31, props33, props38, props11, props12, props13, props14, props15, props8, props23, props21, props32);
      }
      const obj3 = FlagUtils;
      if (obj3.hasFlag(message.flags, props13.EPHEMERAL)) {
        items.push(props3, props2, props28, props34, props35, props36);
      }
      set = new Set(items);
      return set;
    })();
    const items10 = [];
    if ("Preview" === tmp5) {
      items10.unshift(props6);
    }
    if (canStartPublicThread) {
      items10.unshift(props4);
    } else if (message.hasFlag(props13.HAS_THREAD)) {
      items10.unshift(props5);
    }
    items10.unshift(props28);
    if (setting) {
      items10.unshift(props30);
    }
    if (tmp56) {
      const tmp8Result22 = tmp8(tmp3[68]);
      if (tmp8Result22.canReportMessageToMods(message)) {
        items10.unshift(props35);
        items10.unshift(props36);
      }
      items10.unshift(props8);
      if (isForLaterExperimentOn) {
        isForLaterExperimentOn = tmp15 || tmp14 || channel.isPrivate() || props.can(tmp26.READ_MESSAGE_HISTORY, channel);
        tmp15 || tmp14 || channel.isPrivate() || props.can(props17.READ_MESSAGE_HISTORY, channel);
      }
      if (isForLaterExperimentOn) {
        if (!hasForLaterAccess) {
          if (!tmp15) {
            if (!tmp14) {
              items10.unshift(props16);
            }
          }
        }
        let tmp110 = props17;
        const unshift = items10.unshift;
        if (tmp15) {
          tmp110 = props18;
        }
        unshift(tmp110);
        let tmp112 = props19;
        const unshift2 = items10.unshift;
        if (tmp14) {
          tmp112 = props20;
        }
        unshift2(tmp112);
      }
      if (tmp43) {
        items10.unshift(props31);
      }
      let hasItem1 = !canResult && !message.canDeleteOwnMessage(id3);
      if (!hasItem1) {
        const UNDELETABLE = props16.UNDELETABLE;
        hasItem1 = UNDELETABLE.has(message.type);
      }
      if (!hasItem1) {
        items10.unshift(props38);
      }
      const tmp119 = tmp(tmp3[70])(message, id3) && !isNonModInLockedThread;
      if (tmp119) {
        items10.unshift(props);
      }
      if (tmp33) {
        items10.unshift(props11);
      }
      const tmp124 = channel.isPrivate() && !tmp123 || true === isNonUserBotResult;
      if (!tmp124) {
        const tmp125 = props.can(props17.SEND_MESSAGES, channel) || channel.type === props4.GROUP_DM;
        if (tmp125) {
          items10.unshift(props23);
        }
        let id4;
        if (user != null) {
          id4 = user.id;
        }
        if (id3 !== id4) {
          items10.unshift(props22);
        }
      }
      if (tmp32) {
        let tmp129 = props12;
        const unshift3 = items10.unshift;
        if (message.pinned) {
          tmp129 = props13;
        }
        unshift3(tmp129);
      }
      if (canToggleGuildOfficialMessages) {
        const unshift4 = items10.unshift;
        let tmp133 = props14;
        const tmp8Result23 = tmp8(tmp3[27]);
        if (tmp8Result23.hasFlag(message.flags, props13.IS_GUILD_OFFICIAL)) {
          tmp133 = props15;
        }
        unshift4(tmp133);
      }
      const tmp135 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
      if (tmp135) {
        items10.unshift(props7);
      }
      if (canReplyToMessage) {
        items10.unshift(props2);
      }
      if (canForwardMessage) {
        items10.unshift(props3);
      }
      let sourceType;
      if (selectedMedia != null) {
        sourceType = selectedMedia.sourceType;
      }
      let tmp140 = "attachment" !== sourceType;
      if (!tmp140) {
        tmp140 = "image" !== selectedMedia.mediaType && "video" !== selectedMedia.mediaType;
        const tmp141 = "image" !== selectedMedia.mediaType && "video" !== selectedMedia.mediaType;
      }
      if (!tmp140) {
        tmp140 = !tmp(tmp3[70])(message, id3);
      }
      if (!tmp140) {
        tmp140 = isNonModInLockedThread;
      }
      if (!tmp140) {
        const attachments = message.attachments;
        tmp140 = !attachments.some((id) => id.id === selectedMedia.source.id);
      }
      if (!tmp140) {
        items10.unshift(props1);
      }
      const tmp144 = null == selectedMedia || tmpResultResult;
      if (!tmp144) {
        items10.unshift(props27);
        if ("image" === selectedMedia.mediaType) {
          items10.unshift(props24);
        } else {
          if ("video" === selectedMedia.mediaType) {
            const tmp8Result24 = tmp8(tmp3[71]);
            if (!tmp8Result24.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
              items10.unshift(props25);
            }
          }
          const tmp149 = "audio" !== selectedMedia.mediaType && "file" !== selectedMedia.mediaType;
          if (!tmp149) {
            items10.unshift(props26);
          }
        }
        const tmp8Result25 = tmp8(tmp3[72]);
        if (tmp8Result25.messageHasObscurableMedia(message)) {
          items10.unshift(props37);
        }
        const tmp155 = "attachment" === selectedMedia.sourceType && tmp52;
        if (tmp155) {
          items10.unshift(props33);
        }
      }
      let tmp157 = message.reactions.length > 0;
      if (tmp157) {
        const isPollResult = message.isPoll();
        let hasNonVoteReactionsResult = !isPollResult;
        if (isPollResult) {
          const tmp8Result26 = tmp8(tmp3[73]);
          hasNonVoteReactionsResult = tmp8Result26.hasNonVoteReactions(message);
        }
        tmp157 = hasNonVoteReactionsResult;
      }
      if (tmp157) {
        items10.unshift(props10);
        if (canResult) {
          items10.unshift(props32);
        }
      }
      for (const item10626 of tmp22) {
        if (item10626 === require("usePollMessageContextItemTypes").PollMessageContextItemTypes.END_EARLY) {
          let arr62 = items10.unshift(props9);
        }
        continue;
      }
      items10.unshift(props21);
      const obj36 = require("ApplicationInteractionInfoUtils");
      if (obj36.canViewInteractionInfo(message)) {
        items10.unshift(props29);
      }
      const _Set = Set;
      const self3 = this;
      const self4 = this;
      set = new Set(items10.filter((item) => !set.has(item)));
      const items11 = [props, props1, props2, props3, props4];
      const items12 = [items11, , ];
      const items13 = [props6, props5, props7, props8, props9, props10, props11, props12, props13, props14, props15, props16, props17, props18, props19, props20, props21, props22, props23, props24, props25, props26, props27, props28, props29, props30];
      items12[1] = items13;
      const items14 = [props31, props32, props33, props34, props35, props36, props37, props38];
      items12[2] = items14;
      let mapped = items12.map((arr) => arr.filter((item) => set.has(item)));
      return render(mapped.filter((item) => item.length > 0));
    }
    let canReportUserResult = null != user;
    if (canReportUserResult) {
      const tmp8Result27 = tmp8(tmp3[69]);
      canReportUserResult = tmp8Result27.canReportUser(user);
    }
    if (canReportUserResult) {
      const tmp8Result28 = tmp8(tmp3[69]);
      canReportUserResult = tmp8Result28.canReportMessage(message);
    }
    if (canReportUserResult) {
      items10.unshift(props34);
    }
  }
};
