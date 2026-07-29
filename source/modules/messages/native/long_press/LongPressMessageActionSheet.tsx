// Module ID: 9551
// Function ID: 9552
// Name: LongPressMessageActionSheet
// Dependencies: [32, 19, 7719, 9552, 9553, 3827, 1218, 1862, 3817, 4182, 676, 21, 5515, 5535, 4384, 9550, 7757, 9555, 9556, 589, 9557, 6048, 9558, 9559, 3862, 6046, 9560, 4411, 1384, 9561, 7895, 9562, 5553, 9563, 5551, 1577, 9966, 9967, 1236, 9971, 4137, 4148, 4133, 9102, 9973, 9901, 4688, 9948, 9975, 9977, 6576, 4708, 9979, 9981, 9983, 6627, 9985, 9955, 4153, 9026, 4686, 4704, 4139, 6776, 7754, 9441, 9762, 2323, 4696, 6052, 6061, 9987, 4377, 5877, 6072, 8013, 2]
// Exports: default

// Module 9551 (LongPressMessageActionSheet)
import ActionSheetRowIcon from "ActionSheetRowIcon";
import initialize from "initialize";
import handleMessageSendFailedAutomod from "handleMessageSendFailedAutomod";
import handleSelectedGuildChange from "handleSelectedGuildChange";
import getTimeSafe from "getTimeSafe";
import { isMessageComponentsV2 } from "hasFlag";
import fetchFingerprint from "fetchFingerprint";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { FileUploadErrorTypes } from "MESSAGE_GROUP_SPACING";
import ME from "ME";
import { jsx } from "useCanUnarchiveThread";

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
const require = arg1;
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16, LOCAL_BOT_ID: closure_17, MessageAttachmentFlags: closure_18, MessageFlags: closure_19, MessageStates: closure_20, MessageTypes: closure_21, MessageTypesSets: closure_22, Permissions: closure_23 } = ME);
let result = require("handleMessageSendFailedAutomod").fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  let handleMessageSendFailedAutomod;
  let message;
  let selectedMedia;
  let tmp13;
  let tmp14;
  let user;
  const _require = analyticsLocation;
  let props = analyticsLocations;
  const tmp3 = analyticsLocation;
  analyticsLocations = analyticsLocations(analyticsLocation[12])(analyticsLocations(analyticsLocation[13]).MESSAGE_LONG_PRESS_MENU).analyticsLocations;
  analyticsLocation = analyticsLocation.analyticsLocation;
  if (undefined === analyticsLocation) {
    analyticsLocation = {};
  }
  ({ user, message } = analyticsLocation);
  const channel = analyticsLocation.channel;
  ({ chatInputRef: handleMessageSendFailedAutomod, selectedMedia } = analyticsLocation);
  const actionSheetSource = analyticsLocation.actionSheetSource;
  let tmp5;
  if (undefined !== actionSheetSource) {
    tmp5 = actionSheetSource;
  }
  let getTimeSafe = tmp5;
  const canAddNewReactions = analyticsLocation.canAddNewReactions;
  const isMessageComponentsV2 = undefined !== canAddNewReactions && canAddNewReactions;
  let items = [analyticsLocation, channel];
  const effect = channel.useEffect(() => {
    let obj = analyticsLocations(analyticsLocation[14]);
    obj = { channel_id: channel.id, guild_id: channel.guild_id, location: null };
    obj = { page: channel.isPrivate() ? tmp.DM_CHANNEL : tmp.GUILD_CHANNEL };
    const merged = Object.assign(analyticsLocation);
    obj[2] = obj;
    obj.trackWithMetadata(props.MESSAGE_ACTION_SHEET_OPENED, obj);
  }, items);
  const items1 = [analyticsLocation];
  let id = channel.useCallback(() => {
    const result = analyticsLocation(analyticsLocation[15]).showLongPressMessageActionSheet(analyticsLocation);
  }, items1);
  const tmp8 = _require;
  let obj1 = _require(tmp3[16]);
  const canReplyToMessage = obj1.useCanReplyToMessage(channel, message);
  let obj2 = _require(tmp3[17]);
  const canForwardMessage = obj2.useCanForwardMessage(message);
  guild = guild.getGuild(channel.guild_id);
  const tmp4 = analyticsLocations(analyticsLocation[12]);
  let enabled = props(tmp3[18]).useConfig({ location: "LongPressMessageActionSheet" }).enabled;
  let obj4 = _require(tmp3[19]);
  const items2 = [getTimeSafe];
  const arrResult = props(tmp3[18]);
  [tmp13, tmp14] = message(obj4.useStateFromStoresArray(items2, () => {
    const items = [tmp5.isMessageReminder(channel.id, message.id), tmp5.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  const tmp12 = message(obj4.useStateFromStoresArray(items2, () => {
    const items = [tmp5.isMessageReminder(channel.id, message.id), tmp5.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  let obj5 = _require(tmp3[21]);
  const isNonModInLockedThread = obj5.useIsNonModInLockedThread(channel);
  id = undefined;
  const tmp15 = props(tmp3[20])();
  if (channel != null) {
    id = channel.id;
  }
  const arrResult1 = props(tmp3[22]);
  const tmp20 = null != message.getMessage(message.id);
  const tmp21 = props(tmp3[23])(message);
  let tmp8Result = tmp8(tmp3[21]);
  guild = tmp8Result.useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    const isNonUserBotResult = user.isNonUserBot();
  }
  const id1 = id.getId();
  const DeveloperMode = tmp8(tmp3[24]).DeveloperMode;
  let obj7 = props;
  const setting = DeveloperMode.getSetting();
  const canResult = props.can(props.MANAGE_MESSAGES, channel);
  const tmpResult1Result = props(tmp3[22])(id);
  tmp8Result = tmp8(tmp3[25]);
  const canToggleGuildOfficialMessages = tmp8Result.useCanToggleGuildOfficialMessages(message, channel, "LongPressMessageActionSheet");
  let hasFlagResult = message.hasFlag(props.CROSSPOSTED);
  let tmp32 = !hasFlagResult;
  const canResult1 = props.can(props.SEND_MESSAGES, channel);
  if (!hasFlagResult) {
    tmp32 = channel.type === props.GUILD_ANNOUNCEMENT;
  }
  if (tmp32) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(props.NEWS);
    }
    tmp32 = hasItem;
  }
  if (tmp32) {
    tmp32 = canResult1;
  }
  if (tmp32) {
    tmp32 = message.author.id === id1 || canResult;
    const tmp36 = message.author.id === id1 || canResult;
  }
  if (tmp32) {
    tmp32 = message.type === props.DEFAULT;
  }
  if (tmp32) {
    tmp32 = !message.isPoll();
  }
  const tmp31 = props(tmp3[26])(message, channel);
  const canStartPublicThread = tmp8(tmp3[21]).computeCanStartPublicThread(channel, message);
  const contentMessage = message.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    let allTextDisplayContent = tmp8(tmp3[27]).getAllTextDisplayContent(contentMessage.components);
    const tmp8Result2 = tmp8(tmp3[27]);
  } else {
    allTextDisplayContent = contentMessage.content;
  }
  let canDeleteOwnMessageResult = canResult;
  if (!canResult) {
    canDeleteOwnMessageResult = message.canDeleteOwnMessage(id1);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = length > 0;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = message.author.id !== props;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = !tmp8(tmp3[28]).hasFlag(message.flags, tmp29.EPHEMERAL);
    const tmp8Result3 = tmp8(tmp3[28]);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = props(tmp3[29])(message) >= 1;
  }
  let tmp47 = !tmp20;
  if (!tmp20) {
    tmp47 = message.interactionError !== props.EXPLICIT_CONTENT;
  }
  if (tmp47) {
    let result = null == message.interactionData;
    if (!result) {
      result = tmp8(tmp3[30]).canRetryInteractionData(message.interactionData);
      const tmp8Result4 = tmp8(tmp3[30]);
    }
    tmp47 = result;
  }
  const attachments = message.attachments;
  let tmp51 = message.author.id === id1;
  if (tmp51) {
    let tmp52 = attachments.filter((flags) => {
      let tmp = null == flags.flags;
      if (!tmp) {
        tmp = !analyticsLocation(analyticsLocation[28]).hasFlag(flags.flags, props.IS_THUMBNAIL);
        const obj = analyticsLocation(analyticsLocation[28]);
      }
      return tmp;
    }).length > 1;
    if (!tmp52) {
      tmp52 = "" !== message.content;
    }
    tmp51 = tmp52;
  }
  const tmp8Result1 = tmp8(tmp3[21]);
  const items3 = [selectedMedia];
  const stateFromStores = tmp8(tmp3[19]).useStateFromStores(items3, () => selectedMedia.hasReportedMessage(message.channel_id, message.id));
  tmp8(tmp3[31]);
  if (guild != null) {
    id = guild.id;
  }
  function getProps(arrow) {
    let IconComponent;
    let analyticsLocations;
    let disabled;
    let variant;
    const label = arrow.label;
    ({ onActionExecuted: analyticsLocations, disabled } = arrow);
    ({ IconComponent, variant } = arrow);
    return {
      arrow: arrow.arrow,
      icon: props(analyticsLocation(analyticsLocation[32]).ActionSheetRow.Icon, { IconComponent }),
      label,
      onPress() {
        const result = label(analyticsLocation[33]).longPressMessageOptionHandler({ actionSheetSource: outer1_7, analyticsLocations: outer1_1, channel: outer1_4, chatInputRef: outer1_5, label, message: outer1_3, onBack: outer1_9, onActionExecuted: closure_1, selectedMedia: outer1_6, disabled });
      },
      variant,
      disabled
    };
  }
  function render(items5) {
    let obj = { value: analyticsLocations, children: null };
    obj = { showGradient: true, startExpanded: null, header: null, children: null };
    obj[1] = analyticsLocation(analyticsLocation[35]).isMetaQuest();
    const obj3 = analyticsLocation(analyticsLocation[35]);
    const tmp2 = analyticsLocation;
    let shouldShowEmojiRowResult = analyticsLocation(analyticsLocation[36]).shouldShowEmojiRow(closure_8, message, createGuildRecordFromRust);
    if (shouldShowEmojiRowResult) {
      obj = { message: null, channel: null };
      obj[0] = message;
      obj[1] = channel;
      shouldShowEmojiRowResult = tmp(analyticsLocations(tmp2[37]), obj);
    }
    obj[2] = shouldShowEmojiRowResult;
    let mapped;
    if (items5 != null) {
      mapped = items5.map((arr) => {
        const obj = { hasIcons: true, children: null };
        obj[1] = arr.map((arg0, arg1) => {
          let arrow;
          let disabled;
          let icon;
          let label;
          let onPress;
          let variant;
          ({ icon, arrow, label, onPress, variant, disabled } = arg0);
          return callback2(callback(table[32]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, arg1);
        });
        return callback2(callback(table[32]).ActionSheetRow.Group, obj, arg1);
      });
    }
    obj[3] = mapped;
    obj[1] = props(analyticsLocation(analyticsLocation[34]).ActionSheet, obj);
    return props(analyticsLocation(analyticsLocation[12]).AnalyticsLocationProvider, obj);
  }
  if (message.state === props.SEND_FAILED) {
    const items4 = [];
    if (tmp47) {
      let obj = { label: null, IconComponent: null };
      props = tmp7;
      props = tmp2;
      const intl17 = tmp8(tmp3[38]).intl;
      obj[0] = intl17.string(tmp8(tmp3[38]).t["5911Lb"]);
      obj[1] = tmp8(tmp3[39]).RetryIcon;
      props = items4.push(getProps(obj));
    }
    props = null != allTextDisplayContent;
    if (props) {
      props = allTextDisplayContent.length > 0;
    }
    if (props) {
      obj = { label: null, IconComponent: null };
      props = tmp7;
      props = tmp2;
      const intl18 = tmp8(tmp3[38]).intl;
      obj[0] = intl18.string(tmp8(tmp3[38]).t.JrGD7E);
      obj[1] = tmp8(tmp3[40]).CopyIcon;
      props = items4.push(getProps(obj));
    }
    obj1 = { label: null, IconComponent: null, variant: "danger" };
    const intl19 = tmp7(tmp2[38]).intl;
    obj1[0] = intl19.string(tmp7(tmp2[38]).t.xwMqD7);
    obj1[1] = tmp7(tmp2[41]).TrashIcon;
    props = items4.push(getProps(obj1));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp56.SENDING) {
    props = null != allTextDisplayContent;
    if (props) {
      props = allTextDisplayContent.length > 0;
    }
    const items6 = [];
    if (props) {
      obj2 = { label: null, IconComponent: null };
      props = tmp7;
      props = tmp2;
      const intl15 = tmp8(tmp3[38]).intl;
      obj2[0] = intl15.string(tmp8(tmp3[38]).t.JrGD7E);
      obj2[1] = tmp8(tmp3[40]).CopyIcon;
      props = items6.push(getProps(obj2));
    }
    let obj3 = { label: null, IconComponent: null, variant: "danger" };
    props = tmp7;
    props = tmp2;
    const intl16 = tmp8(tmp3[38]).intl;
    obj3[0] = intl16.string(tmp8(tmp3[38]).t.xwMqD7);
    obj3[1] = tmp8(tmp3[41]).TrashIcon;
    props = items6.push(getProps(obj3));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === props.THREAD_STARTER_MESSAGE) {
    obj4 = { label: null, IconComponent: null };
    props = tmp7;
    props = tmp2;
    const intl14 = tmp8(tmp3[38]).intl;
    obj4[0] = intl14.string(tmp8(tmp3[38]).t.k5WiPf);
    obj4[1] = tmp8(tmp3[42]).LinkIcon;
    const items8 = [getProps(obj4)];
    const items9 = [items8];
    return render(items9);
  } else {
    obj5 = { label: null, IconComponent: null };
    props = tmp7;
    props = tmp2;
    const intl20 = tmp8(tmp3[38]).intl;
    obj5[0] = intl20.string(tmp8(tmp3[38]).t.fsBWmS);
    obj5[1] = tmp8(tmp3[43]).PencilIcon;
    props = getProps(obj5);
    const obj6 = { label: null, IconComponent: null };
    const intl21 = tmp8(tmp3[38]).intl;
    obj6[0] = intl21.string(tmp8(tmp3[38]).t["5IEsGx"]);
    obj6[1] = tmp8(tmp3[44]).ArrowAngleLeftUpIcon;
    props = getProps(obj6);
    obj7 = { label: null, IconComponent: null };
    const intl22 = tmp8(tmp3[38]).intl;
    obj7[0] = intl22.string(tmp8(tmp3[38]).t.I3ltXO);
    obj7[1] = props(tmp3[45]);
    props = getProps(obj7);
    const obj8 = { label: null, IconComponent: null };
    const intl23 = tmp8(tmp3[38]).intl;
    obj8[0] = intl23.string(tmp8(tmp3[38]).t.rBIGBL);
    obj8[1] = tmp8(tmp3[46]).ThreadIcon;
    props = getProps(obj8);
    const obj9 = { label: null, IconComponent: null };
    const intl24 = tmp8(tmp3[38]).intl;
    obj9[0] = intl24.string(tmp8(tmp3[38]).t["39d0Wj"]);
    obj9[1] = tmp8(tmp3[46]).ThreadIcon;
    props = getProps(obj9);
    const obj10 = { label: null, IconComponent: null };
    const intl25 = tmp8(tmp3[38]).intl;
    obj10[0] = intl25.string(tmp8(tmp3[38]).t["+TSRGD"]);
    obj10[1] = tmp8(tmp3[47]).ChatArrowRightIcon;
    props = getProps(obj10);
    const obj11 = { label: null, IconComponent: null };
    const intl26 = tmp8(tmp3[38]).intl;
    obj11[0] = intl26.string(tmp8(tmp3[38]).t.JrGD7E);
    obj11[1] = tmp8(tmp3[40]).CopyIcon;
    props = getProps(obj11);
    const obj12 = { label: null, IconComponent: null };
    const intl27 = tmp8(tmp3[38]).intl;
    obj12[0] = intl27.string(tmp8(tmp3[38]).t.RpE9k7);
    obj12[1] = tmp8(tmp3[48]).ChatMarkUnreadIcon;
    props = getProps(obj12);
    const obj13 = { label: null, IconComponent: null };
    const intl28 = tmp8(tmp3[38]).intl;
    obj13[0] = intl28.string(tmp8(tmp3[38]).t.grdwwt);
    obj13[1] = tmp8(tmp3[49]).ClockXIcon;
    props = getProps(obj13);
    let obj14 = { label: null, IconComponent: null };
    const intl29 = tmp8(tmp3[38]).intl;
    obj14[0] = intl29.string(tmp8(tmp3[38]).t.gHp0C4);
    obj14[1] = tmp8(tmp3[50]).ReactionIcon;
    props = getProps(obj14);
    const obj15 = { label: null, IconComponent: null };
    const intl30 = tmp8(tmp3[38]).intl;
    obj15[0] = intl30.string(tmp8(tmp3[38]).t.MFGE51);
    obj15[1] = tmp8(tmp3[51]).AnnouncementsIcon;
    props = getProps(obj15);
    const obj16 = { label: null, IconComponent: null };
    const intl31 = tmp8(tmp3[38]).intl;
    obj16[0] = intl31.string(tmp8(tmp3[38]).t.CvQ18w);
    obj16[1] = tmp8(tmp3[52]).PinIcon;
    props = getProps(obj16);
    const obj17 = { label: null, IconComponent: null };
    const intl32 = tmp8(tmp3[38]).intl;
    obj17[0] = intl32.string(tmp8(tmp3[38]).t["Bse+F/"]);
    obj17[1] = tmp8(tmp3[52]).PinIcon;
    props = getProps(obj17);
    const obj18 = { label: null, IconComponent: null };
    const intl33 = tmp8(tmp3[38]).intl;
    obj18[0] = intl33.string(tmp8(tmp3[38]).t["lE/PG3"]);
    obj18[1] = tmp8(tmp3[53]).StampIcon;
    props = getProps(obj18);
    const obj19 = { label: null, IconComponent: null };
    const intl34 = tmp8(tmp3[38]).intl;
    obj19[0] = intl34.string(tmp8(tmp3[38]).t["2km5Gf"]);
    obj19[1] = tmp8(tmp3[54]).StampXIcon;
    props = getProps(obj19);
    const obj20 = { label: null, IconComponent: null };
    const intl35 = tmp8(tmp3[38]).intl;
    obj20[0] = intl35.string(tmp8(tmp3[38]).t.tpxJto);
    obj20[1] = tmp8(tmp3[55]).NitroWheelIcon;
    props = getProps(obj20);
    const obj21 = { label: null, IconComponent: null };
    const intl36 = tmp8(tmp3[38]).intl;
    obj21[0] = intl36.string(tmp8(tmp3[38]).t.tpxJto);
    obj21[1] = tmp8(tmp3[56]).BookmarkOutlineIcon;
    props = getProps(obj21);
    const obj22 = { label: null, IconComponent: null };
    const intl37 = tmp8(tmp3[38]).intl;
    obj22[0] = intl37.string(tmp8(tmp3[38]).t.SvXS1Z);
    obj22[1] = tmp8(tmp3[57]).BookmarkIcon;
    props = getProps(obj22);
    const obj23 = { label: null, IconComponent: null, arrow: true };
    const intl38 = tmp8(tmp3[38]).intl;
    obj23[0] = intl38.string(tmp8(tmp3[38]).t.mJ3P0N);
    obj23[1] = tmp8(tmp3[58]).ClockIcon;
    props = getProps(obj23);
    const obj24 = { label: null, IconComponent: null, arrow: true };
    const intl39 = tmp8(tmp3[38]).intl;
    obj24[0] = intl39.string(tmp8(tmp3[38]).t.vrbqs1);
    obj24[1] = tmp8(tmp3[58]).ClockIcon;
    props = getProps(obj24);
    const obj25 = { label: null, IconComponent: null, arrow: true };
    const intl40 = tmp8(tmp3[38]).intl;
    obj25[0] = intl40.string(tmp8(tmp3[38]).t.PHjkRE);
    obj25[1] = tmp8(tmp3[59]).RobotIcon;
    props = getProps(obj25);
    const obj26 = { label: null, IconComponent: null };
    const intl41 = tmp8(tmp3[38]).intl;
    obj26[0] = intl41.string(tmp8(tmp3[38]).t["g33r/P"]);
    obj26[1] = tmp8(tmp3[60]).ChatIcon;
    props = getProps(obj26);
    const obj27 = { label: null, IconComponent: null };
    const intl42 = tmp8(tmp3[38]).intl;
    obj27[0] = intl42.string(tmp8(tmp3[38]).t.P8tvKG);
    obj27[1] = tmp8(tmp3[61]).AtIcon;
    props = getProps(obj27);
    const obj28 = { label: null, IconComponent: null };
    const intl43 = tmp8(tmp3[38]).intl;
    obj28[0] = intl43.string(tmp8(tmp3[38]).t["S/xNKV"]);
    obj28[1] = tmp8(tmp3[62]).DownloadIcon;
    props = getProps(obj28);
    const obj29 = { label: null, IconComponent: null };
    const intl44 = tmp8(tmp3[38]).intl;
    obj29[0] = intl44.string(tmp8(tmp3[38]).t.JVuuz3);
    obj29[1] = tmp8(tmp3[62]).DownloadIcon;
    props = getProps(obj29);
    const obj30 = { label: null, IconComponent: null };
    const intl45 = tmp8(tmp3[38]).intl;
    obj30[0] = intl45.string(tmp8(tmp3[38]).t.vbAEaA);
    obj30[1] = tmp8(tmp3[62]).DownloadIcon;
    props = getProps(obj30);
    try {
      let mediaUrl;
      if (selectedMedia != null) {
        mediaUrl = selectedMedia.mediaUrl;
      }
      let uRL = null;
      if (null != mediaUrl) {
        const _URL = URL;
        uRL = new URL(selectedMedia.mediaUrl);
      }
      let mediaType;
      if (selectedMedia != null) {
        mediaType = selectedMedia.mediaType;
      }
      let isMatch = "image" === mediaType;
      if (isMatch) {
        isMatch = null != tmp62;
      }
      if (isMatch) {
        isMatch = "cdn.discordapp.com" === tmp62.hostname;
      }
      if (isMatch) {
        obj14 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
        isMatch = obj14.test(uRL.pathname);
      }
      const intl = tmp8(tmp3[38]).intl;
      const t = tmp8(tmp3[38]).t;
      if (tmp67) {
      } else {
      }
      const obj31 = { label: null, IconComponent: null };
      obj31[0] = intl.string(_92CPQ_);
      obj31[1] = tmp8(tmp3[42]).LinkIcon;
      props = getProps(obj31);
      const obj32 = { label: null, IconComponent: null };
      const intl2 = tmp8(tmp3[38]).intl;
      obj32[0] = intl2.string(tmp8(tmp3[38]).t.Xrt5Po);
      obj32[1] = tmp8(tmp3[42]).LinkIcon;
      const props1 = getProps(obj32);
      const obj33 = { label: null, IconComponent: null, arrow: true };
      const intl3 = tmp8(tmp3[38]).intl;
      obj33[0] = intl3.string(tmp8(tmp3[38]).t.Rjezbz);
      obj33[1] = tmp8(tmp3[58]).ClockIcon;
      const props2 = getProps(obj33);
      let obj34 = { label: null, IconComponent: null };
      const intl4 = tmp8(tmp3[38]).intl;
      obj34[0] = intl4.string(tmp8(tmp3[38]).t.zBoHlf);
      obj34[1] = tmp8(tmp3[63]).IdIcon;
      const props3 = getProps(obj34);
      if (length > 1) {
        const intl6 = tmp8(tmp3[38]).intl;
        let stringResult = intl6.string(tmp8(tmp3[38]).t.wUIMqa);
      } else {
        const intl5 = tmp8(tmp3[38]).intl;
        stringResult = intl5.string(tmp8(tmp3[38]).t["4sxKOb"]);
      }
      const obj35 = { label: null, IconComponent: null, variant: "danger" };
      obj35[0] = stringResult;
      obj35[1] = tmp8(tmp3[64]).XSmallBoldIcon;
      const props4 = getProps(obj35);
      const obj36 = { label: null, IconComponent: null, variant: "danger" };
      const intl7 = tmp8(tmp3[38]).intl;
      obj36[0] = intl7.string(tmp8(tmp3[38]).t.ZbtGBm);
      obj36[1] = tmp8(tmp3[41]).TrashIcon;
      const props5 = getProps(obj36);
      const obj37 = { label: null, IconComponent: null, variant: "danger" };
      const intl8 = tmp8(tmp3[38]).intl;
      obj37[0] = intl8.string(tmp8(tmp3[38]).t.kFwAsa);
      obj37[1] = tmp8(tmp3[41]).TrashIcon;
      const props6 = getProps(obj37);
      const obj38 = { label: null, IconComponent: null, variant: "danger" };
      const intl9 = tmp8(tmp3[38]).intl;
      obj38[0] = intl9.string(tmp8(tmp3[38]).t["+78Pfm"]);
      obj38[1] = tmp8(tmp3[65]).FlagIcon;
      const props7 = getProps(obj38);
      const obj39 = { label: null, variant: "danger", IconComponent: null };
      const intl10 = tmp8(tmp3[38]).intl;
      obj39[0] = intl10.string(tmp8(tmp3[38]).t.n5EBAJ);
      obj39[2] = tmp8(tmp3[66]).ClydeIcon;
      const props8 = getProps(obj39);
      const obj40 = { label: null, IconComponent: null, disabled: null };
      const intl11 = tmp8(tmp3[38]).intl;
      obj40[0] = intl11.string(props(tmp3[67])["1D+vqy"]);
      obj40[1] = tmp8(tmp3[65]).FlagIcon;
      obj40[2] = stateFromStores;
      const props9 = getProps(obj40);
      const obj41 = { label: null, IconComponent: null };
      const intl12 = tmp8(tmp3[38]).intl;
      obj41[0] = intl12.string(tmp8(tmp3[38]).t.ZH7P2h);
      obj41[1] = tmp8(tmp3[68]).ImageWarningIcon;
      const props10 = getProps(obj41);
      const obj42 = { label: null, IconComponent: null, variant: "danger" };
      const intl13 = tmp8(tmp3[38]).intl;
      obj42[0] = intl13.string(tmp8(tmp3[38]).t.xwMqD7);
      obj42[1] = tmp8(tmp3[41]).TrashIcon;
      const props11 = getProps(obj42);
      let closure_37 = (() => {
        let hasFlagResult = "Preview" === getTimeSafe;
        if (!hasFlagResult) {
          hasFlagResult = analyticsLocation(analyticsLocation[28]).hasFlag(message.flags, props.EPHEMERAL);
          const obj = analyticsLocation(analyticsLocation[28]);
        }
        const items = [];
        if (hasFlagResult) {
          items.push(props, props, props, props, props, props, props, props4, props11, props, props, props, props, props5);
        }
        let tmp22 = createGuildRecordFromRust;
        if (createGuildRecordFromRust) {
          tmp22 = !analyticsLocation(analyticsLocation[28]).hasFlag(message.flags, props.EPHEMERAL);
          const obj2 = analyticsLocation(analyticsLocation[28]);
        }
        if (!tmp22) {
          items.push(props, props, props4, props6, props11, props, props, props, props, props, props, props, props, props5);
        }
        if (obj3.hasFlag(message.flags, props.EPHEMERAL)) {
          items.push(props, props, props1, props7, props8, props9);
        }
        obj3 = analyticsLocation(analyticsLocation[28]);
        return new Set(items);
      })();
      const items10 = [];
      if ("Preview" === tmp5) {
        items10.unshift(props);
      }
      if (canStartPublicThread) {
        items10.unshift(props);
      } else if (message.hasFlag(tmp29.HAS_THREAD)) {
        items10.unshift(props);
      }
      items10.unshift(props1);
      if (setting) {
        items10.unshift(props3);
      }
      if (tmp55) {
        props = tmp2;
        if (tmp8Result7.canReportMessageToMods(message)) {
          props = items10.unshift(props8);
          props = items10.unshift(props9);
        }
        props = items10.unshift(props);
        if (enabled) {
          props = tmp14;
          if (!tmp14) {
            props = tmp13;
          }
          if (!props) {
            props = channel.isPrivate();
          }
          if (!props) {
            props = obj7.can(tmp25.READ_MESSAGE_HISTORY, channel);
          }
          enabled = props;
        }
        if (enabled) {
          if (!tmp15) {
            if (!tmp14) {
              if (!tmp13) {
                props = items10.unshift(props);
              }
            }
          }
          props = items10.unshift(props);
          props = items10.unshift(props);
        }
        if (canDeleteOwnMessageResult) {
          props = items10.unshift(props4);
        }
        props = !canResult;
        if (!canResult) {
          props = !message.canDeleteOwnMessage(id1);
        }
        if (!props) {
          const UNDELETABLE = props.UNDELETABLE;
          props = UNDELETABLE.has(message.type);
        }
        if (!props) {
          props = items10.unshift(props11);
        }
        props = tmp2;
        props = props(tmp3[71])(message, id1);
        if (props) {
          props = !isNonModInLockedThread;
        }
        if (props) {
          props = items10.unshift(props);
        }
        if (tmp32) {
          props = items10.unshift(props);
        }
        props = channel.type === props.GROUP_DM;
        props = channel.isPrivate();
        if (props) {
          props = !props;
        }
        if (!props) {
          props = true === isNonUserBotResult;
        }
        if (!props) {
          props = obj7.can(tmp25.SEND_MESSAGES, channel);
          if (props) {
            props = items10.unshift(props);
          }
          props = undefined;
          if (user != null) {
            props = user.id;
          }
          if (id1 !== props) {
            props = items10.unshift(props);
          }
        }
        if (tmp31) {
          props = items10.unshift(props);
        }
        if (canToggleGuildOfficialMessages) {
          props = tmp7;
          props = tmp2;
          props = items10.unshift(props);
          const tmp8Result8 = tmp8(tmp3[28]);
        }
        props = null != allTextDisplayContent;
        if (props) {
          props = allTextDisplayContent.length > 0;
        }
        if (props) {
          props = items10.unshift(props);
        }
        if (canReplyToMessage) {
          props = items10.unshift(props);
        }
        if (canForwardMessage) {
          props = items10.unshift(props);
        }
        props = null == selectedMedia;
        if (!props) {
          props = tmpResult1Result;
        }
        if (!props) {
          props = items10.unshift(props);
          if ("image" === selectedMedia.mediaType) {
            props = items10.unshift(props);
          } else {
            if ("video" === selectedMedia.mediaType) {
              props = tmp7;
              props = tmp2;
              if (!tmp8Result9.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
                props = items10.unshift(props);
              }
              tmp8Result9 = tmp8(tmp3[72]);
            }
            props = "audio" !== selectedMedia.mediaType;
            if (props) {
              props = "file" !== selectedMedia.mediaType;
            }
            if (!props) {
              props = items10.unshift(props);
            }
          }
          props = tmp7;
          props = tmp2;
          if (tmp8Result10.messageHasObscurableMedia(message)) {
            props = items10.unshift(props10);
          }
          props = "attachment" === selectedMedia.sourceType;
          if (props) {
            props = tmp51;
          }
          if (props) {
            props = items10.unshift(props6);
          }
          tmp8Result10 = tmp8(tmp3[73]);
        }
        props = message.reactions.length > 0;
        if (props) {
          props = message.isPoll();
          props = !props;
          if (props) {
            props = tmp7;
            props = tmp2;
            props = tmp8(tmp3[74]).hasNonVoteReactions(message);
            const tmp8Result11 = tmp8(tmp3[74]);
          }
        }
        if (props) {
          props = items10.unshift(props);
          if (canResult) {
            props = items10.unshift(props5);
          }
        }
        props = tmp21;
        props = tmp21;
        for (const item10609 of tmp21) {
          props = _require;
          props = _require;
          props = analyticsLocation;
          props = analyticsLocation;
          if (item10609 === _require(analyticsLocation[23]).PollMessageContextItemTypes.END_EARLY) {
            props = items10.unshift(props);
          }
          continue;
        }
        props = items10.unshift(props);
        props = _require;
        props = _require;
        props = analyticsLocation;
        props = analyticsLocation;
        obj34 = _require(analyticsLocation[75]);
        if (obj34.canViewInteractionInfo(message)) {
          props = items10.unshift(props2);
        }
        props = globalThis;
        const _Set = Set;
        props = new.target;
        props = new.target;
        props = new Set(items10.filter((arg0) => !set.has(arg0)));
        const items11 = [props, props, props, props];
        const items12 = [items11, , ];
        const items13 = [props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props1, props2, props3];
        items12[1] = items13;
        const items14 = [props4, props5, props6, props7, props8, props9, props10, props11];
        items12[2] = items14;
        let mapped = items12.map((arr) => arr.filter((arg0) => set.has(arg0)));
        return render(mapped.filter((arg0) => arg0.length > 0));
      }
      props = null != user;
      if (props) {
        props = tmp7;
        props = tmp2;
        props = tmp8(tmp3[70]).canReportUser(user);
        const tmp8Result12 = tmp8(tmp3[70]);
      }
      if (props) {
        props = tmp7;
        props = tmp2;
        props = tmp8(tmp3[70]).canReportMessage(message);
        const tmp8Result13 = tmp8(tmp3[70]);
      }
      if (props) {
        props = items10.unshift(props7);
      }
      tmp67 = isMatch;
    } catch (err) {
    }
  }
};
