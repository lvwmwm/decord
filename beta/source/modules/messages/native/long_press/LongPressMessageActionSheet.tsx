// Module ID: 12123
// Function ID: 12124
// Name: LongPressMessageActionSheet
// Dependencies: [5, 32, 19, 8675, 12124, 11684, 4856, 502, 4784, 4845, 4918, 1071, 21, 7520, 7539, 5650, 12122, 8713, 10136, 504, 6893, 10152, 12125, 5990, 6340, 5477, 575, 12126, 12133, 4738, 6891, 12135, 5968, 1404, 12136, 10630, 12137, 7555, 12138, 7553, 1625, 12164, 12165, 1112, 10343, 5613, 5620, 5609, 11242, 12169, 10077, 7674, 10141, 11235, 12171, 9489, 7694, 11671, 12173, 12175, 12177, 11692, 5622, 12179, 7672, 7690, 5615, 7020, 3440, 10137, 10378, 11892, 10269, 9604, 2958, 7682, 11248, 10175, 12181, 5953, 8224, 8456, 10545, 2]
// Exports: default

// Module 12123 (LongPressMessageActionSheet)
import Fragment from "Fragment" /* 21 */;
import FlagUtils from "FlagUtils" /* 1404 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import MessageRecord from "MessageRecord" /* 4856 */;
import MessageConstants from "MessageConstants" /* 4918 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5650 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7520 */;
import ActionSheet2 from "ActionSheet" /* 7553 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 12122 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 12138 */;
import EmojiRowUtils from "EmojiRowUtils" /* 12164 */;
import EmojiRowDefault from "EmojiRow" /* 12165 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8675 */;
import ReportToModStore from "ReportToModStore" /* 12124 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11684 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, set;

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
let closure_24;
let isMessageComponentsV2 = MessageRecord.isMessageComponentsV2;
let FileUploadErrorTypes = MessageConstants.FileUploadErrorTypes;
({ AnalyticEvents: closure_14, AnalyticsPages: closure_15, ChannelTypes: closure_16, GuildFeatures: closure_17, LOCAL_BOT_ID: closure_18, MessageAttachmentFlags: closure_19, MessageFlags: closure_20, MessageStates: closure_21, MessageTypes: closure_22, MessageTypesSets: closure_23, Permissions: closure_24 } = Constants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  let allTextDisplayContent;
  let analyticsLocations;
  let chatInputRef;
  let closure_13;
  let closure_9;
  let intl;
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
  let intl47;
  let intl6;
  let intl7;
  let intl8;
  let isNonUserBotResult;
  let message;
  let props11;
  let props12;
  let props13;
  let props15;
  let props2;
  let props3;
  let props4;
  let selectedMedia;
  let tmp14;
  let tmp15;
  let tmp27;
  let user;
  const f101522 = (flags) => {
    let tmp = null == flags.flags;
    if (!tmp) {
      obj = analyticsLocation(analyticsLocation[33]);
      tmp = !obj.hasFlag(flags.flags, props8.IS_THUMBNAIL);
    }
    return tmp;
  };
  _require = analyticsLocation;
  let obj = function _handleSaveCheckpointCharacter() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (null != checkpoint2026CharacterFromMessage) {
              const obj2 = tmp(c2[27]);
              const result = obj2.trackCheckpoint2026CharacterSaveClicked();
              GuildStore(true);
              c1 = 1;
              const obj3 = tmp(c2[28]);
              c2 = 1;
              const obj6 = { value: obj3.saveCheckpointCharacterImage(tmp17), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_11(false);
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp13) {
          c2 = 3;
          throw tmp13;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = analyticsLocations;
  let tmp3 = analyticsLocation;
  const tmp4 = analyticsLocations(analyticsLocation[13]);
  analyticsLocations = tmp4(analyticsLocations(analyticsLocation[14]).MESSAGE_LONG_PRESS_MENU).analyticsLocations;
  analyticsLocation = analyticsLocation.analyticsLocation;
  if (undefined === analyticsLocation) {
    analyticsLocation = {};
  }
  ({ user, message } = analyticsLocation);
  const channel = analyticsLocation.channel;
  ({ chatInputRef: react, selectedMedia } = analyticsLocation);
  let actionSheetSource = analyticsLocation.actionSheetSource;
  let tmp5;
  if (undefined !== actionSheetSource) {
    tmp5 = actionSheetSource;
  }
  actionSheetSource = tmp5;
  const canAddNewReactions = analyticsLocation.canAddNewReactions;
  let closure_8 = undefined !== canAddNewReactions && canAddNewReactions;
  let obj2 = react;
  let items = [analyticsLocation, channel];
  const effect = react.useEffect(() => {
    let obj2;
    obj = { channel_id: channel.id, guild_id: channel.guild_id, location: obj2 };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const MESSAGE_ACTION_SHEET_OPENED = props.MESSAGE_ACTION_SHEET_OPENED;
    AppAnalyticsUtilsDefault;
    obj2 = { page: channel.isPrivate() ? props1.DM_CHANNEL : props1.GUILD_CHANNEL };
    const merged = Object.assign(analyticsLocation);
    trackWithMetadata(MESSAGE_ACTION_SHEET_OPENED, obj);
  }, items);
  const items1 = [analyticsLocation];
  isMessageComponentsV2 = react.useCallback(() => {
    obj = showLongPressMessageActionSheet;
    const result = obj.showLongPressMessageActionSheet(analyticsLocation);
  }, items1);
  const tmp8 = _require;
  let obj3 = require("canReplyToMessage");
  const canReplyToMessage = obj3.useCanReplyToMessage(channel, message);
  let obj4 = require("canForwardMessage");
  const canForwardMessage = obj4.useCanForwardMessage(message);
  const guild = GuildStore.getGuild(channel.guild_id);
  let obj5 = require("get initialized");
  const items2 = [closure_8];
  const tmp13 = channel(obj5.useStateFromStoresArray(items2, () => {
    const items = [SavedMessagesStore.isMessageReminder(channel.id, message.id), SavedMessagesStore.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  [tmp14, tmp15] = tmp13;
  let obj6 = require("ThreadHooks");
  const isNonModInLockedThread = obj6.useIsNonModInLockedThread(channel);
  let id1;
  const tmpResult = tmp(tmp3[21]);
  if (channel != null) {
    id1 = channel.id;
  }
  const tmpResultResult = tmpResult(id1);
  const interactionError = message.interactionError;
  const EXPLICIT_CONTENT = FileUploadErrorTypes.EXPLICIT_CONTENT;
  const tmp20 = null != selectedMedia.getMessage(message.id);
  const tmp21 = tmp(tmp3[22])(message);
  const tmp8Result = tmp8(tmp3[23]);
  const checkpoint2026CharacterFromMessage = tmp8Result.getCheckpoint2026CharacterFromMessage(message.getContentMessage());
  let result = null != checkpoint2026CharacterFromMessage;
  if (result) {
    const tmp8Result18 = tmp8(tmp3[24]);
    result = tmp8Result18.isCheckpointCharacterSaveEnabled("message_long_press");
  }
  [tmp27, GuildStore] = channel(obj2.useState(false), 2);
  channel(obj2.useState(false), 2);
  const tmp8Result19 = tmp8(tmp3[25]);
  const token = tmp8Result19.useToken(tmp(tmp3[26]).colors.TABLEROW_ICON_COLOR_DEFAULT);
  const tmp8Result20 = tmp8(tmp3[20]);
  FileUploadErrorTypes = tmp8Result20.useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    isNonUserBotResult = user.isNonUserBot();
  }
  const id3 = checkpoint2026CharacterFromMessage.getId();
  const DeveloperMode = tmp8(tmp3[29]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = obj.can(props15.MANAGE_MESSAGES, channel);
  const canResult1 = obj.can(props15.SEND_MESSAGES, channel);
  const tmp8Result21 = tmp8(tmp3[30]);
  const canToggleGuildOfficialMessages = tmp8Result21.useCanToggleGuildOfficialMessages(message, channel, "LongPressMessageActionSheet");
  const id = message.author.id;
  let hasFlagResult = message.hasFlag(props11.CROSSPOSTED);
  let tmp39 = !hasFlagResult;
  const tmp38 = tmp(tmp3[31])(message, channel);
  if (!hasFlagResult) {
    tmp39 = channel.type === props2.GUILD_ANNOUNCEMENT;
  }
  if (tmp39) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(props3.NEWS);
    }
    tmp39 = hasItem;
  }
  if (tmp39) {
    tmp39 = canResult1;
  }
  if (tmp39) {
    tmp39 = id === id3 || canResult;
  }
  if (tmp39) {
    tmp39 = message.type === props13.DEFAULT;
  }
  if (tmp39) {
    tmp39 = !message.isPoll();
  }
  const tmp8Result22 = tmp8(tmp3[20]);
  const canStartPublicThread = tmp8Result22.computeCanStartPublicThread(channel, message);
  const contentMessage = message.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    const tmp8Result23 = tmp8(tmp3[32]);
    allTextDisplayContent = tmp8Result23.getAllTextDisplayContent(contentMessage.components);
  } else {
    allTextDisplayContent = contentMessage.content;
  }
  let tmp49 = canResult || message.canDeleteOwnMessage(id3);
  if (tmp49) {
    tmp49 = length > 0;
  }
  if (tmp49) {
    tmp49 = message.author.id !== props4;
  }
  if (tmp49) {
    const tmp8Result24 = tmp8(tmp3[33]);
    tmp49 = !tmp8Result24.hasFlag(message.flags, tmp36.EPHEMERAL);
  }
  if (tmp49) {
    tmp49 = tmp(tmp3[34])(message) >= 1;
  }
  let tmp54 = !tmp20 && interactionError !== EXPLICIT_CONTENT;
  if (tmp54) {
    let result1 = null == message.interactionData;
    if (!result1) {
      const tmp8Result25 = tmp8(tmp3[35]);
      result1 = tmp8Result25.canRetryInteractionData(message.interactionData);
    }
    tmp54 = result1;
  }
  const attachments1 = message.attachments;
  let tmp58 = message.author.id === id3;
  if (tmp58) {
    tmp58 = attachments1.filter(f101522).length > 1 || "" !== message.content;
    const tmp59 = attachments1.filter(f101522).length > 1 || "" !== message.content;
  }
  const items3 = [actionSheetSource];
  const tmp8Result26 = tmp8(tmp3[19]);
  const stateFromStores = tmp8Result26.useStateFromStores(items3, () => ReportToModStore.hasReportedMessage(message.channel_id, message.id));
  tmp8(tmp3[36]);
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
    obj = {
      arrow: arrow.arrow,
      icon: props16(analyticsLocation(analyticsLocation[37]).ActionSheetRow.Icon, { IconComponent }),
      label,
      onPress() {
        obj = { actionSheetSource, analyticsLocations, channel, chatInputRef: react, label, message, onBack, onActionExecuted: analyticsLocations, selectedMedia, disabled };
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
    shouldShowEmojiRowResult = obj4.shouldShowEmojiRow(closure_8, message, closure_13);
    const tmp3 = message;
    if (shouldShowEmojiRowResult) {
      const obj5 = { message: tmp3, channel };
      shouldShowEmojiRowResult = tmp(EmojiRowDefault, obj5);
    }
    mapped = undefined;
    if (items5 != null) {
      mapped = items5.map((arr, index) => {
        obj = {
          hasIcons: true,
          children: arr.map((item, index) => {
            let arrow;
            let disabled;
            let icon;
            let label;
            let onPress;
            let variant;
            ({ icon, arrow, label, onPress, variant, disabled } = item);
            return closure_1_25(closure_1_0(closure_1_2[37]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, index);
          })
        };
        const Group = closure_1_0(closure_1_2[37]).ActionSheetRow.Group;
        return props16(Group, obj, index);
      });
    }
    return <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
  if (message.state === props12.SEND_FAILED) {
    const items4 = [];
    if (tmp54) {
      obj = { label: intl21.string(tmp8(tmp3[43]).t["5911Lb"]), IconComponent: tmp8(tmp3[44]).RetryIcon };
      const push3 = items4.push;
      intl21 = tmp8(tmp3[43]).intl;
      push3(getProps(obj));
    }
    let tmp204 = null != allTextDisplayContent;
    if (tmp204) {
      tmp204 = allTextDisplayContent.length > 0;
    }
    if (tmp204) {
      const push4 = items4.push;
      const obj7 = { label: intl22.string(tmp8(tmp3[43]).t.JrGD7E), IconComponent: tmp8(tmp3[45]).CopyIcon };
      intl22 = tmp8(tmp3[43]).intl;
      push4(getProps(obj7));
    }
    const push5 = items4.push;
    const obj8 = { label: intl23.string(require("intl").t.xwMqD7), IconComponent: require("TrashIcon").TrashIcon, variant: "danger" };
    intl23 = tmp7(tmp2[43]).intl;
    push5(getProps(obj8));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp63.SENDING) {
    let tmp194 = null != allTextDisplayContent;
    if (tmp194) {
      tmp194 = allTextDisplayContent.length > 0;
    }
    const items6 = [];
    if (tmp194) {
      const push = items6.push;
      const obj9 = { label: intl19.string(tmp8(tmp3[43]).t.JrGD7E), IconComponent: tmp8(tmp3[45]).CopyIcon };
      intl19 = tmp8(tmp3[43]).intl;
      push(getProps(obj9));
    }
    const push2 = items6.push;
    const obj10 = { label: intl20.string(tmp8(tmp3[43]).t.xwMqD7), IconComponent: tmp8(tmp3[46]).TrashIcon, variant: "danger" };
    intl20 = tmp8(tmp3[43]).intl;
    push2(getProps(obj10));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === props13.THREAD_STARTER_MESSAGE) {
    const obj12 = { label: intl18.string(tmp8(tmp3[43]).t.k5WiPf), IconComponent: tmp8(tmp3[47]).LinkIcon };
    intl18 = tmp8(tmp3[43]).intl;
    const items8 = [getProps(obj12)];
    const items9 = [items8];
    return render(items9);
  } else {
    let tmp236Result;
    let stringResult;
    const obj13 = { label: intl24.string(tmp8(tmp3[43]).t.fsBWmS), IconComponent: tmp8(tmp3[48]).PencilIcon };
    intl24 = tmp8(tmp3[43]).intl;
    const props = getProps(obj13);
    const obj14 = { label: intl25.string(tmp8(tmp3[43]).t.Y8ujqr), IconComponent: tmp8(tmp3[48]).PencilIcon };
    intl25 = tmp8(tmp3[43]).intl;
    const props1 = getProps(obj14);
    const obj15 = { label: intl26.string(tmp8(tmp3[43]).t["5IEsGx"]), IconComponent: tmp8(tmp3[49]).ArrowAngleLeftUpIcon };
    intl26 = tmp8(tmp3[43]).intl;
    props2 = getProps(obj15);
    const obj16 = { label: intl27.string(tmp8(tmp3[43]).t.I3ltXO), IconComponent: tmp(tmp3[50]) };
    intl27 = tmp8(tmp3[43]).intl;
    props3 = getProps(obj16);
    const obj17 = { label: intl28.string(tmp8(tmp3[43]).t.rBIGBL), IconComponent: tmp8(tmp3[51]).ThreadIcon };
    intl28 = tmp8(tmp3[43]).intl;
    props4 = getProps(obj17);
    const obj18 = { label: intl29.string(tmp8(tmp3[43]).t["39d0Wj"]), IconComponent: tmp8(tmp3[51]).ThreadIcon };
    intl29 = tmp8(tmp3[43]).intl;
    const props5 = getProps(obj18);
    const obj19 = { label: intl30.string(tmp8(tmp3[43]).t["+TSRGD"]), IconComponent: tmp8(tmp3[52]).ChatArrowRightIcon };
    intl30 = tmp8(tmp3[43]).intl;
    const props6 = getProps(obj19);
    const obj20 = { label: intl31.string(tmp8(tmp3[43]).t.JrGD7E), IconComponent: tmp8(tmp3[45]).CopyIcon };
    intl31 = tmp8(tmp3[43]).intl;
    const props7 = getProps(obj20);
    const obj21 = { label: intl32.string(tmp8(tmp3[43]).t.RpE9k7), IconComponent: tmp8(tmp3[53]).ChatMarkUnreadIcon };
    intl32 = tmp8(tmp3[43]).intl;
    const props8 = getProps(obj21);
    const obj22 = { label: intl33.string(tmp8(tmp3[43]).t.grdwwt), IconComponent: tmp8(tmp3[54]).ClockXIcon };
    intl33 = tmp8(tmp3[43]).intl;
    const props9 = getProps(obj22);
    const obj23 = { label: intl34.string(tmp8(tmp3[43]).t.gHp0C4), IconComponent: tmp8(tmp3[55]).ReactionIcon };
    intl34 = tmp8(tmp3[43]).intl;
    const props10 = getProps(obj23);
    const obj25 = { label: intl35.string(tmp8(tmp3[43]).t.MFGE51), IconComponent: tmp8(tmp3[56]).AnnouncementsIcon };
    intl35 = tmp8(tmp3[43]).intl;
    props11 = getProps(obj25);
    const obj26 = { label: intl36.string(tmp8(tmp3[43]).t.CvQ18w), IconComponent: tmp8(tmp3[57]).PinIcon };
    intl36 = tmp8(tmp3[43]).intl;
    props12 = getProps(obj26);
    const obj27 = { label: intl37.string(tmp8(tmp3[43]).t["Bse+F/"]), IconComponent: tmp8(tmp3[57]).PinIcon };
    intl37 = tmp8(tmp3[43]).intl;
    props13 = getProps(obj27);
    const obj28 = { label: intl38.string(tmp8(tmp3[43]).t["lE/PG3"]), IconComponent: tmp8(tmp3[58]).StampIcon };
    intl38 = tmp8(tmp3[43]).intl;
    const props14 = getProps(obj28);
    const obj29 = { label: intl39.string(tmp8(tmp3[43]).t["2km5Gf"]), IconComponent: tmp8(tmp3[59]).StampXIcon };
    intl39 = tmp8(tmp3[43]).intl;
    props15 = getProps(obj29);
    const obj30 = { label: intl40.string(tmp8(tmp3[43]).t.tpxJto), IconComponent: tmp8(tmp3[60]).BookmarkOutlineIcon };
    intl40 = tmp8(tmp3[43]).intl;
    const props16 = getProps(obj30);
    const obj31 = { label: intl41.string(tmp8(tmp3[43]).t.SvXS1Z), IconComponent: tmp8(tmp3[61]).BookmarkIcon };
    intl41 = tmp8(tmp3[43]).intl;
    const props17 = getProps(obj31);
    const obj32 = { label: intl42.string(tmp8(tmp3[43]).t.mJ3P0N), IconComponent: tmp8(tmp3[62]).ClockIcon, arrow: true };
    intl42 = tmp8(tmp3[43]).intl;
    const props18 = getProps(obj32);
    const obj33 = { label: intl43.string(tmp8(tmp3[43]).t.vrbqs1), IconComponent: tmp8(tmp3[62]).ClockIcon, arrow: true };
    intl43 = tmp8(tmp3[43]).intl;
    const props19 = getProps(obj33);
    const obj34 = { label: intl44.string(tmp8(tmp3[43]).t.PHjkRE), IconComponent: tmp8(tmp3[63]).RobotIcon, arrow: true };
    intl44 = tmp8(tmp3[43]).intl;
    const props20 = getProps(obj34);
    const obj35 = { label: intl45.string(tmp8(tmp3[43]).t["g33r/P"]), IconComponent: tmp8(tmp3[64]).ChatIcon };
    intl45 = tmp8(tmp3[43]).intl;
    const props21 = getProps(obj35);
    const obj36 = { label: intl46.string(tmp8(tmp3[43]).t.P8tvKG), IconComponent: tmp8(tmp3[65]).AtIcon };
    intl46 = tmp8(tmp3[43]).intl;
    const props22 = getProps(obj36);
    const obj37 = { label: intl47.string(tmp8(tmp3[43]).t["S/xNKV"]), IconComponent: tmp8(tmp3[66]).DownloadIcon };
    intl47 = tmp8(tmp3[43]).intl;
    const props23 = getProps(obj37);
    if (tmp27) {
      const obj38 = { size: "small", color: token };
      tmp236Result = tmp236(tmp8(tmp3[67]).ActivityIndicator, obj38);
    } else {
      const obj39 = { IconComponent: tmp8(tmp3[66]).DownloadIcon };
      const Icon = tmp8(tmp3[37]).ActionSheetRow.Icon;
      tmp236Result = tmp236(Icon, obj39);
    }
    const obj40 = {
      icon: tmp236Result,
      label: intl.string(tmp(tmp3[68]).CYcfZo),
      onPress: function handleSaveCheckpointCharacter() {
          return obj(...arguments);
        },
      disabled: tmp27
    };
    intl = tmp8(tmp3[43]).intl;
    const obj41 = { label: intl2.string(tmp(tmp3[68]).DqUBGM), IconComponent: tmp8(tmp3[69]).ShareIcon };
    intl2 = tmp8(tmp3[43]).intl;
    const props24 = getProps(obj41);
    const obj42 = { label: intl3.string(tmp8(tmp3[43]).t.JVuuz3), IconComponent: tmp8(tmp3[66]).DownloadIcon };
    intl3 = tmp8(tmp3[43]).intl;
    const props25 = getProps(obj42);
    const obj43 = { label: intl4.string(tmp8(tmp3[43]).t.vbAEaA), IconComponent: tmp8(tmp3[66]).DownloadIcon };
    intl4 = tmp8(tmp3[43]).intl;
    const props26 = getProps(obj43);
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
      let isMatch = "image" === mediaType && null != tmp73 && "cdn.discordapp.com" === tmp73.hostname;
      if (isMatch) {
        const obj24 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
        isMatch = obj24.test(uRL.pathname);
      }
      flag = isMatch;
    } catch (err) {
    }
    const intl5 = tmp8(tmp3[43]).intl;
    const string = intl5.string;
    const t = tmp8(tmp3[43]).t;
    const obj45 = { label: string(flag ? t["8xHmxo"] : t["92CPQ+"]), IconComponent: tmp8(tmp3[47]).LinkIcon };
    const props27 = getProps(obj45);
    const obj46 = { label: intl6.string(tmp8(tmp3[43]).t.Xrt5Po), IconComponent: tmp8(tmp3[47]).LinkIcon };
    intl6 = tmp8(tmp3[43]).intl;
    const props28 = getProps(obj46);
    const obj47 = { label: intl7.string(tmp8(tmp3[43]).t.Rjezbz), IconComponent: tmp8(tmp3[62]).ClockIcon, arrow: true };
    intl7 = tmp8(tmp3[43]).intl;
    const props29 = getProps(obj47);
    const obj48 = { label: intl8.string(tmp8(tmp3[43]).t.zBoHlf), IconComponent: tmp8(tmp3[70]).IdIcon };
    intl8 = tmp8(tmp3[43]).intl;
    const props30 = getProps(obj48);
    if (contentMessage.embeds.length > 1) {
      const intl10 = tmp8(tmp3[43]).intl;
      stringResult = intl10.string(tmp8(tmp3[43]).t.wUIMqa);
    } else {
      const intl9 = tmp8(tmp3[43]).intl;
      stringResult = intl9.string(tmp8(tmp3[43]).t["4sxKOb"]);
    }
    const obj49 = { label: stringResult, IconComponent: tmp8(tmp3[71]).XSmallBoldIcon, variant: "danger" };
    const props31 = getProps(obj49);
    const obj50 = { label: intl11.string(tmp8(tmp3[43]).t.ZbtGBm), IconComponent: tmp8(tmp3[46]).TrashIcon, variant: "danger" };
    intl11 = tmp8(tmp3[43]).intl;
    const props32 = getProps(obj50);
    const obj51 = { label: intl12.string(tmp8(tmp3[43]).t.kFwAsa), IconComponent: tmp8(tmp3[46]).TrashIcon, variant: "danger" };
    intl12 = tmp8(tmp3[43]).intl;
    const props33 = getProps(obj51);
    const obj52 = { label: intl13.string(tmp8(tmp3[43]).t["+78Pfm"]), IconComponent: tmp8(tmp3[72]).FlagIcon, variant: "danger" };
    intl13 = tmp8(tmp3[43]).intl;
    const props34 = getProps(obj52);
    const obj53 = { label: intl14.string(tmp8(tmp3[43]).t.n5EBAJ), variant: "danger", IconComponent: tmp8(tmp3[73]).ClydeIcon };
    intl14 = tmp8(tmp3[43]).intl;
    const props35 = getProps(obj53);
    const obj54 = { label: intl15.string(tmp(tmp3[74])["1D+vqy"]), IconComponent: tmp8(tmp3[72]).FlagIcon, disabled: stateFromStores };
    intl15 = tmp8(tmp3[43]).intl;
    const props36 = getProps(obj54);
    const obj55 = { label: intl16.string(tmp8(tmp3[43]).t.ZH7P2h), IconComponent: tmp8(tmp3[75]).ImageWarningIcon };
    intl16 = tmp8(tmp3[43]).intl;
    const props37 = getProps(obj55);
    const obj56 = { label: intl17.string(tmp8(tmp3[43]).t.xwMqD7), IconComponent: tmp8(tmp3[46]).TrashIcon, variant: "danger" };
    intl17 = tmp8(tmp3[43]).intl;
    const props38 = getProps(obj56);
    set = (() => {
      let hasFlagResult = "Preview" === actionSheetSource;
      if (!hasFlagResult) {
        obj = FlagUtils;
        hasFlagResult = obj.hasFlag(message.flags, props11.EPHEMERAL);
      }
      const items = [];
      if (hasFlagResult) {
        items.push(props4, props8, props16, props17, props18, props19, props31, props38, props, props1, props22, props21, props20, props32);
      }
      let tmp22 = closure_13;
      if (tmp22) {
        const obj2 = FlagUtils;
        tmp22 = !obj2.hasFlag(message.flags, props11.EPHEMERAL);
      }
      if (!tmp22) {
        items.push(props, props1, props2, props31, props33, props38, props11, props12, props13, props14, props15, props8, props22, props20, props32);
      }
      const obj3 = FlagUtils;
      if (obj3.hasFlag(message.flags, props11.EPHEMERAL)) {
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
    } else if (message.hasFlag(props11.HAS_THREAD)) {
      items10.unshift(props5);
    }
    items10.unshift(props28);
    if (setting) {
      items10.unshift(props30);
    }
    if (tmp62) {
      const tmp8Result28 = tmp8(tmp3[76]);
      if (tmp8Result28.canReportMessageToMods(message)) {
        items10.unshift(props35);
        items10.unshift(props36);
      }
      items10.unshift(props8);
      const tmp120 = tmp15 || tmp14 || channel.isPrivate() || obj.can(props15.READ_MESSAGE_HISTORY, channel);
      if (tmp120) {
        if (!tmp14) {
          let tmp121 = props16;
          const unshift = items10.unshift;
          if (tmp15) {
            tmp121 = props17;
          }
          unshift(tmp121);
        }
        let tmp123 = props18;
        const unshift2 = items10.unshift;
        if (tmp14) {
          tmp123 = props19;
        }
        unshift2(tmp123);
      }
      if (tmp49) {
        items10.unshift(props31);
      }
      let hasItem1 = !canResult && !message.canDeleteOwnMessage(id3);
      if (!hasItem1) {
        const UNDELETABLE = props14.UNDELETABLE;
        hasItem1 = UNDELETABLE.has(message.type);
      }
      if (!hasItem1) {
        items10.unshift(props38);
      }
      const tmp130 = tmp(tmp3[78])(message, id3) && !isNonModInLockedThread;
      if (tmp130) {
        items10.unshift(props);
      }
      if (tmp39) {
        items10.unshift(props11);
      }
      let tmp135 = channel.isPrivate() && !tmp134;
      if (!tmp135) {
        tmp135 = true === isNonUserBotResult;
      }
      if (!tmp135) {
        const tmp136 = obj.can(props15.SEND_MESSAGES, channel) || channel.type === props2.GROUP_DM;
        if (tmp136) {
          items10.unshift(props22);
        }
        let id4;
        if (user != null) {
          id4 = user.id;
        }
        if (id3 !== id4) {
          items10.unshift(props21);
        }
      }
      if (tmp38) {
        let tmp140 = props12;
        const unshift3 = items10.unshift;
        if (message.pinned) {
          tmp140 = props13;
        }
        unshift3(tmp140);
      }
      if (canToggleGuildOfficialMessages) {
        const unshift4 = items10.unshift;
        let tmp144 = props14;
        const tmp8Result29 = tmp8(tmp3[33]);
        if (tmp8Result29.hasFlag(message.flags, props11.IS_GUILD_OFFICIAL)) {
          tmp144 = props15;
        }
        unshift4(tmp144);
      }
      const tmp146 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
      if (tmp146) {
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
      let tmp151 = "attachment" !== sourceType;
      if (!tmp151) {
        tmp151 = "image" !== selectedMedia.mediaType && "video" !== selectedMedia.mediaType;
        const tmp152 = "image" !== selectedMedia.mediaType && "video" !== selectedMedia.mediaType;
      }
      if (!tmp151) {
        tmp151 = !tmp(tmp3[78])(message, id3);
      }
      if (!tmp151) {
        tmp151 = isNonModInLockedThread;
      }
      if (!tmp151) {
        const attachments = message.attachments;
        tmp151 = !attachments.some((id) => id.id === selectedMedia.source.id);
      }
      if (!tmp151) {
        items10.unshift(props1);
      }
      const tmp155 = null == selectedMedia || tmpResultResult;
      if (!tmp155) {
        items10.unshift(props27);
        if ("image" === selectedMedia.mediaType) {
          items10.unshift(props23);
        } else {
          if ("video" === selectedMedia.mediaType) {
            const tmp8Result30 = tmp8(tmp3[79]);
            if (!tmp8Result30.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
              items10.unshift(props25);
            }
          }
          const tmp160 = "audio" !== selectedMedia.mediaType && "file" !== selectedMedia.mediaType;
          if (!tmp160) {
            items10.unshift(props26);
          }
        }
        const tmp8Result31 = tmp8(tmp3[80]);
        if (tmp8Result31.messageHasObscurableMedia(message)) {
          items10.unshift(props37);
        }
        const tmp166 = "attachment" === selectedMedia.sourceType && tmp58;
        if (tmp166) {
          items10.unshift(props33);
        }
      }
      let tmp168 = message.reactions.length > 0;
      if (tmp168) {
        const isPollResult = message.isPoll();
        let hasNonVoteReactionsResult = !isPollResult;
        if (isPollResult) {
          const tmp8Result32 = tmp8(tmp3[81]);
          hasNonVoteReactionsResult = tmp8Result32.hasNonVoteReactions(message);
        }
        tmp168 = hasNonVoteReactionsResult;
      }
      if (tmp168) {
        items10.unshift(props10);
        if (canResult) {
          items10.unshift(props32);
        }
      }
      if (result) {
        items10.unshift(obj40, props24);
      }
      for (const item10713 of tmp21) {
        if (item10713 === require("usePollMessageContextItemTypes").PollMessageContextItemTypes.END_EARLY) {
          let arr62 = items10.unshift(props9);
        }
        continue;
      }
      items10.unshift(props20);
      const obj44 = require("ApplicationInteractionInfoUtils");
      if (obj44.canViewInteractionInfo(message)) {
        items10.unshift(props29);
      }
      const _Set = Set;
      const self3 = this;
      const self4 = this;
      set = new Set(items10.filter((item) => !set.has(item)));
      const items11 = [props, props1, props2, props3, props4];
      const items12 = [items11, , ];
      const items13 = [props6, props5, props7, props8, props9, props10, props11, props12, props13, props14, props15, props16, props17, props18, props19, props20, props21, props22, props23, props25, props26, obj40, props24, props27, props28, props29, props30];
      items12[1] = items13;
      const items14 = [props31, props32, props33, props34, props35, props36, props37, props38];
      items12[2] = items14;
      let mapped = items12.map((arr) => arr.filter((item) => set.has(item)));
      return render(mapped.filter((item) => item.length > 0));
    }
    let canReportUserResult = null != user;
    if (canReportUserResult) {
      const tmp8Result33 = tmp8(tmp3[77]);
      canReportUserResult = tmp8Result33.canReportUser(user);
    }
    if (canReportUserResult) {
      const tmp8Result34 = tmp8(tmp3[77]);
      canReportUserResult = tmp8Result34.canReportMessage(message);
    }
    if (canReportUserResult) {
      items10.unshift(props34);
    }
  }
};
