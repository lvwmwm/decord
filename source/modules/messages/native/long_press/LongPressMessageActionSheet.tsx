// Module ID: 9566
// Function ID: 74392
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 7716, 9567, 9568, 3768, 1194, 1838, 3758, 4123, 653, 33, 5462, 5482, 4324, 9565, 7752, 9570, 9571, 566, 9572, 5650, 9573, 9574, 3803, 5648, 9575, 4353, 1360, 9576, 7889, 9577, 5500, 9578, 5498, 1553, 9976, 9977, 1212, 9981, 4078, 4089, 4074, 9142, 9983, 9912, 4631, 9958, 9985, 9987, 7437, 4651, 9989, 9991, 9993, 7486, 9995, 9965, 4094, 9068, 4629, 4647, 4080, 7609, 7749, 9453, 9776, 2298, 4639, 5655, 5667, 9997, 4317, 5670, 7002, 8004, 2]
// Exports: default

// Module 9566 (_createForOfIteratorHelperLoose)
import BookmarkIcon from "BookmarkIcon";
import useIsReportToModEnabled from "useIsReportToModEnabled";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { isMessageComponentsV2 } from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import { FileUploadErrorTypes } from "MESSAGE_GROUP_SPACING";
import ME from "ME";
import { jsx } from "getContextBarCancelReason";

let closure_13;
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
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
({ AnalyticEvents: closure_13, AnalyticsPages: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16, LOCAL_BOT_ID: closure_17, MessageAttachmentFlags: closure_18, MessageFlags: closure_19, MessageStates: closure_20, MessageTypes: closure_21, MessageTypesSets: closure_22, Permissions: closure_23 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  let _isNativeReflectConstruct;
  let message;
  let selectedMedia;
  let user;
  const _require = analyticsLocation;
  function getProps(guildId, id) {
    let IconComponent;
    let analyticsLocations;
    let disabled;
    let variant;
    const label = guildId.label;
    ({ onActionExecuted: analyticsLocations, disabled } = guildId);
    ({ IconComponent, variant } = guildId);
    return {
      arrow: guildId.arrow,
      icon: outer1_24(analyticsLocation(analyticsLocation[32]).ActionSheetRow.Icon, { IconComponent }),
      label,
      onPress() {
        const result = label(analyticsLocation[33]).longPressMessageOptionHandler({ actionSheetSource: outer1_7, analyticsLocations: outer1_1, channel: outer1_4, chatInputRef: outer1_5, label, message: outer1_3, onBack: outer1_9, onActionExecuted: closure_1, selectedMedia: outer1_6, disabled });
      },
      variant,
      disabled
    };
  }
  function render(items5) {
    let obj = { value: analyticsLocations };
    obj = { showGradient: true, startExpanded: analyticsLocation(analyticsLocation[35]).isMetaQuest() };
    const obj3 = analyticsLocation(analyticsLocation[35]);
    let shouldShowEmojiRowResult = analyticsLocation(analyticsLocation[36]).shouldShowEmojiRow(closure_8, message, isActiveChannelOrUnarchivableThread);
    if (shouldShowEmojiRowResult) {
      obj = { message, channel };
      shouldShowEmojiRowResult = outer1_24(analyticsLocations(analyticsLocation[37]), obj);
    }
    obj.header = shouldShowEmojiRowResult;
    let mapped;
    if (null != items5) {
      mapped = items5.map((arr) => {
        const obj = {
          hasIcons: true,
          children: arr.map((arg0, arg1) => {
            let arrow;
            let disabled;
            let icon;
            let label;
            let onPress;
            let variant;
            ({ icon, arrow, label, onPress, variant, disabled } = arg0);
            return outer3_24(callback(analyticsLocation[32]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, arg1);
          })
        };
        return outer2_24(callback(analyticsLocation[32]).ActionSheetRow.Group, obj, arg1);
      });
    }
    obj.children = mapped;
    obj.children = outer1_24(analyticsLocation(analyticsLocation[34]).ActionSheet, obj);
    return outer1_24(analyticsLocation(analyticsLocation[12]).AnalyticsLocationProvider, obj);
  }
  let props = analyticsLocations(analyticsLocation[12]);
  analyticsLocations = props(analyticsLocations(analyticsLocation[13]).MESSAGE_LONG_PRESS_MENU).analyticsLocations;
  analyticsLocation = analyticsLocation.analyticsLocation;
  if (undefined === analyticsLocation) {
    analyticsLocation = {};
  }
  ({ user, message } = analyticsLocation);
  let obj1 = message;
  const channel = analyticsLocation.channel;
  let obj2 = channel;
  ({ chatInputRef: _isNativeReflectConstruct, selectedMedia } = analyticsLocation);
  const actionSheetSource = analyticsLocation.actionSheetSource;
  let tmp4;
  if (undefined !== actionSheetSource) {
    tmp4 = actionSheetSource;
  }
  let closure_7 = tmp4;
  const canAddNewReactions = analyticsLocation.canAddNewReactions;
  let tmp6 = undefined !== canAddNewReactions;
  if (tmp6) {
    tmp6 = canAddNewReactions;
  }
  const isMessageComponentsV2 = tmp6;
  let items = [analyticsLocation, obj2];
  const effect = channel.useEffect(() => {
    let obj = analyticsLocations(analyticsLocation[14]);
    obj = { channel_id: channel.id, guild_id: channel.guild_id };
    obj = { page: channel.isPrivate() ? tmp.DM_CHANNEL : tmp.GUILD_CHANNEL };
    const merged = Object.assign(analyticsLocation);
    obj.location = obj;
    obj.trackWithMetadata(outer1_13.MESSAGE_ACTION_SHEET_OPENED, obj);
  }, items);
  const items1 = [analyticsLocation];
  let id = channel.useCallback(() => {
    const result = analyticsLocation(analyticsLocation[15]).showLongPressMessageActionSheet(analyticsLocation);
  }, items1);
  let obj3 = _require(analyticsLocation[16]);
  const canReplyToMessage = obj3.useCanReplyToMessage(obj2, obj1);
  let obj4 = _require(analyticsLocation[17]);
  const canForwardMessage = obj4.useCanForwardMessage(obj1);
  const guild = isActiveChannelOrUnarchivableThread.getGuild(obj2.guild_id);
  let obj5 = analyticsLocations(analyticsLocation[18]);
  const enabled = obj5.useConfig({ location: "LongPressMessageActionSheet" }).enabled;
  let obj6 = _require(analyticsLocation[19]);
  const items2 = [closure_7];
  const tmp11 = message(obj6.useStateFromStoresArray(items2, () => {
    const items = [tmp4.isMessageReminder(channel.id, message.id), tmp4.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  const first = tmp11[0];
  let obj7 = _require(analyticsLocation[21]);
  const isNonModInLockedThread = obj7.useIsNonModInLockedThread(obj2);
  id = undefined;
  const tmp14 = !analyticsLocations(analyticsLocation[20])();
  const tmp5 = tmp4;
  if (null != obj2) {
    id = obj2.id;
  }
  const tmp16 = analyticsLocations(analyticsLocation[22]);
  const tmp20 = null != message.getMessage(obj1.id);
  const tmp16Result = analyticsLocations(analyticsLocation[22])(id);
  let obj8 = _require(analyticsLocation[21]);
  isActiveChannelOrUnarchivableThread = obj8.useIsActiveChannelOrUnarchivableThread(obj2);
  let tmp23 = isActiveChannelOrUnarchivableThread;
  let isNonUserBotResult;
  if (null != user) {
    isNonUserBotResult = user.isNonUserBot();
  }
  const id1 = id.getId();
  const DeveloperMode = _require(analyticsLocation[24]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = props.can(constants7.MANAGE_MESSAGES, obj2);
  const tmp21 = analyticsLocations(analyticsLocation[23])(obj1);
  const tmp26 = true === isNonUserBotResult;
  let obj9 = _require(analyticsLocation[25]);
  let tmp33 = obj1.author.id === id1;
  const canToggleGuildOfficialMessages = obj9.useCanToggleGuildOfficialMessages(obj1, obj2, "LongPressMessageActionSheet");
  const canResult1 = props.can(constants7.SEND_MESSAGES, obj2);
  let tmp36 = !obj1.hasFlag(constants3.CROSSPOSTED);
  const hasFlagResult = obj1.hasFlag(constants3.CROSSPOSTED);
  if (tmp36) {
    tmp36 = obj2.type === constants.GUILD_ANNOUNCEMENT;
  }
  if (tmp36) {
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants2.NEWS);
    }
    tmp36 = hasItem;
  }
  if (tmp36) {
    tmp36 = canResult1;
  }
  if (tmp36) {
    if (!tmp33) {
      tmp33 = canResult;
    }
    tmp36 = tmp33;
  }
  if (tmp36) {
    tmp36 = obj1.type === constants5.DEFAULT;
  }
  if (tmp36) {
    tmp36 = !obj1.isPoll();
  }
  let obj10 = _require(analyticsLocation[21]);
  const canStartPublicThread = obj10.computeCanStartPublicThread(obj2, obj1);
  const contentMessage = obj1.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    let obj11 = _require(analyticsLocation[27]);
    let allTextDisplayContent = obj11.getAllTextDisplayContent(contentMessage.components);
  } else {
    allTextDisplayContent = contentMessage.content;
  }
  let canDeleteOwnMessageResult = canResult;
  if (!canResult) {
    canDeleteOwnMessageResult = obj1.canDeleteOwnMessage(tmp28);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = length > 0;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = obj1.author.id !== closure_17;
  }
  if (canDeleteOwnMessageResult) {
    let obj12 = _require(analyticsLocation[28]);
    canDeleteOwnMessageResult = !obj12.hasFlag(obj1.flags, constants3.EPHEMERAL);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = analyticsLocations(analyticsLocation[29])(obj1) >= 1;
  }
  let tmp61 = !tmp20;
  if (!tmp20) {
    tmp61 = obj1.interactionError !== props.EXPLICIT_CONTENT;
  }
  if (tmp61) {
    let result = null == obj1.interactionData;
    if (!result) {
      let obj13 = _require(analyticsLocation[30]);
      result = obj13.canRetryInteractionData(obj1.interactionData);
    }
    tmp61 = result;
  }
  const attachments = obj1.attachments;
  let tmp67 = obj1.author.id === tmp28;
  if (tmp67) {
    let tmp68 = attachments.filter((flags) => {
      let tmp = null == flags.flags;
      if (!tmp) {
        tmp = !analyticsLocation(analyticsLocation[28]).hasFlag(flags.flags, outer1_18.IS_THUMBNAIL);
        const obj = analyticsLocation(analyticsLocation[28]);
      }
      return tmp;
    }).length > 1;
    if (!tmp68) {
      tmp68 = "" !== obj1.content;
    }
    tmp67 = tmp68;
  }
  let obj14 = _require(analyticsLocation[19]);
  const items3 = [selectedMedia];
  const stateFromStores = obj14.useStateFromStores(items3, () => selectedMedia.hasReportedMessage(message.channel_id, message.id));
  _require(analyticsLocation[31]);
  if (null != guild) {
    id = guild.id;
  }
  if (obj1.state === constants4.SEND_FAILED) {
    const items4 = [];
    if (tmp61) {
      props = getProps;
      let obj = {};
      props = _require;
      props = analyticsLocation;
      const intl17 = _require(analyticsLocation[38]).intl;
      obj.label = intl17.string(_require(analyticsLocation[38]).t["5911Lb"]);
      obj.IconComponent = _require(analyticsLocation[39]).RetryIcon;
      props = items4.push(getProps(obj));
    }
    props = allTextDisplayContent;
    props = null != arr5 && allTextDisplayContent.length > 0;
    if (props) {
      props = getProps;
      obj = {};
      props = _require;
      props = analyticsLocation;
      const intl18 = _require(analyticsLocation[38]).intl;
      obj.label = intl18.string(_require(analyticsLocation[38]).t.JrGD7E);
      obj.IconComponent = _require(analyticsLocation[40]).CopyIcon;
      props = items4.push(getProps(obj));
    }
    props = getProps;
    obj1 = {};
    props = _require;
    props = analyticsLocation;
    const intl19 = _require(analyticsLocation[38]).intl;
    obj1.label = intl19.string(_require(analyticsLocation[38]).t.xwMqD7);
    obj1.IconComponent = _require(analyticsLocation[41]).TrashIcon;
    obj1.variant = "danger";
    props = items4.push(getProps(obj1));
    props = render;
    const items5 = [items4];
    return render(items5);
  } else {
    props = message;
    props = constants4;
    if (obj1.state === constants4.SENDING) {
      const items6 = [];
      props = allTextDisplayContent;
      props = null != arr5;
      if (props) {
        props = allTextDisplayContent;
        props = arr5.length > 0;
      }
      if (props) {
        props = getProps;
        obj2 = {};
        props = _require;
        props = analyticsLocation;
        const intl15 = _require(analyticsLocation[38]).intl;
        obj2.label = intl15.string(_require(analyticsLocation[38]).t.JrGD7E);
        obj2.IconComponent = _require(analyticsLocation[40]).CopyIcon;
        props = items6.push(getProps(obj2));
      }
      props = getProps;
      obj3 = {};
      props = _require;
      props = analyticsLocation;
      const intl16 = _require(analyticsLocation[38]).intl;
      obj3.label = intl16.string(_require(analyticsLocation[38]).t.xwMqD7);
      obj3.IconComponent = _require(analyticsLocation[41]).TrashIcon;
      obj3.variant = "danger";
      props = items6.push(getProps(obj3));
      props = render;
      const items7 = [items6];
      return render(items7);
    } else {
      props = message;
      props = constants5;
      if (obj1.type === constants5.THREAD_STARTER_MESSAGE) {
        props = render;
        props = getProps;
        obj4 = {};
        props = _require;
        props = analyticsLocation;
        const intl14 = _require(analyticsLocation[38]).intl;
        obj4.label = intl14.string(_require(analyticsLocation[38]).t.k5WiPf);
        obj4.IconComponent = _require(analyticsLocation[42]).LinkIcon;
        const items8 = [getProps(obj4)];
        const items9 = [items8];
        return render(items9);
      } else {
        props = getProps;
        obj5 = {};
        props = _require;
        props = analyticsLocation;
        const intl20 = _require(analyticsLocation[38]).intl;
        obj5.label = intl20.string(_require(analyticsLocation[38]).t.fsBWmS);
        obj5.IconComponent = _require(analyticsLocation[43]).PencilIcon;
        props = getProps(obj5);
        obj6 = {};
        const intl21 = _require(analyticsLocation[38]).intl;
        obj6.label = intl21.string(_require(analyticsLocation[38]).t["5IEsGx"]);
        obj6.IconComponent = _require(analyticsLocation[44]).ArrowAngleLeftUpIcon;
        props = getProps(obj6);
        obj7 = {};
        const intl22 = _require(analyticsLocation[38]).intl;
        obj7.label = intl22.string(_require(analyticsLocation[38]).t.I3ltXO);
        props = analyticsLocations;
        obj7.IconComponent = analyticsLocations(analyticsLocation[45]);
        props = getProps(obj7);
        obj8 = {};
        const intl23 = _require(analyticsLocation[38]).intl;
        obj8.label = intl23.string(_require(analyticsLocation[38]).t.rBIGBL);
        obj8.IconComponent = _require(analyticsLocation[46]).ThreadIcon;
        props = getProps(obj8);
        obj9 = {};
        const intl24 = _require(analyticsLocation[38]).intl;
        obj9.label = intl24.string(_require(analyticsLocation[38]).t["39d0Wj"]);
        obj9.IconComponent = _require(analyticsLocation[46]).ThreadIcon;
        props = getProps(obj9);
        obj10 = {};
        const intl25 = _require(analyticsLocation[38]).intl;
        obj10.label = intl25.string(_require(analyticsLocation[38]).t["+TSRGD"]);
        obj10.IconComponent = _require(analyticsLocation[47]).ChatArrowRightIcon;
        props = getProps(obj10);
        obj11 = {};
        const intl26 = _require(analyticsLocation[38]).intl;
        obj11.label = intl26.string(_require(analyticsLocation[38]).t.JrGD7E);
        obj11.IconComponent = _require(analyticsLocation[40]).CopyIcon;
        props = getProps(obj11);
        obj12 = {};
        const intl27 = _require(analyticsLocation[38]).intl;
        obj12.label = intl27.string(_require(analyticsLocation[38]).t.RpE9k7);
        obj12.IconComponent = _require(analyticsLocation[48]).ChatMarkUnreadIcon;
        props = getProps(obj12);
        obj13 = {};
        const intl28 = _require(analyticsLocation[38]).intl;
        obj13.label = intl28.string(_require(analyticsLocation[38]).t.grdwwt);
        obj13.IconComponent = _require(analyticsLocation[49]).ClockXIcon;
        props = getProps(obj13);
        obj14 = {};
        const intl29 = _require(analyticsLocation[38]).intl;
        obj14.label = intl29.string(_require(analyticsLocation[38]).t.gHp0C4);
        obj14.IconComponent = _require(analyticsLocation[50]).ReactionIcon;
        props = getProps(obj14);
        let obj15 = {};
        const intl30 = _require(analyticsLocation[38]).intl;
        obj15.label = intl30.string(_require(analyticsLocation[38]).t.MFGE51);
        obj15.IconComponent = _require(analyticsLocation[51]).AnnouncementsIcon;
        props = getProps(obj15);
        const obj16 = {};
        const intl31 = _require(analyticsLocation[38]).intl;
        obj16.label = intl31.string(_require(analyticsLocation[38]).t.CvQ18w);
        obj16.IconComponent = _require(analyticsLocation[52]).PinIcon;
        props = getProps(obj16);
        const obj17 = {};
        const intl32 = _require(analyticsLocation[38]).intl;
        obj17.label = intl32.string(_require(analyticsLocation[38]).t["Bse+F/"]);
        obj17.IconComponent = _require(analyticsLocation[52]).PinIcon;
        props = getProps(obj17);
        const obj18 = {};
        const intl33 = _require(analyticsLocation[38]).intl;
        obj18.label = intl33.string(_require(analyticsLocation[38]).t["lE/PG3"]);
        obj18.IconComponent = _require(analyticsLocation[53]).StampIcon;
        props = getProps(obj18);
        const obj19 = {};
        const intl34 = _require(analyticsLocation[38]).intl;
        obj19.label = intl34.string(_require(analyticsLocation[38]).t["2km5Gf"]);
        obj19.IconComponent = _require(analyticsLocation[54]).StampXIcon;
        props = getProps(obj19);
        const obj20 = {};
        const intl35 = _require(analyticsLocation[38]).intl;
        obj20.label = intl35.string(_require(analyticsLocation[38]).t.tpxJto);
        obj20.IconComponent = _require(analyticsLocation[55]).NitroWheelIcon;
        props = getProps(obj20);
        const obj21 = {};
        const intl36 = _require(analyticsLocation[38]).intl;
        obj21.label = intl36.string(_require(analyticsLocation[38]).t.tpxJto);
        obj21.IconComponent = _require(analyticsLocation[56]).BookmarkOutlineIcon;
        props = getProps(obj21);
        const obj22 = {};
        const intl37 = _require(analyticsLocation[38]).intl;
        obj22.label = intl37.string(_require(analyticsLocation[38]).t.SvXS1Z);
        obj22.IconComponent = _require(analyticsLocation[57]).BookmarkIcon;
        props = getProps(obj22);
        const obj23 = {};
        const intl38 = _require(analyticsLocation[38]).intl;
        obj23.label = intl38.string(_require(analyticsLocation[38]).t.mJ3P0N);
        obj23.IconComponent = _require(analyticsLocation[58]).ClockIcon;
        obj23.arrow = true;
        props = getProps(obj23);
        const obj24 = {};
        const intl39 = _require(analyticsLocation[38]).intl;
        obj24.label = intl39.string(_require(analyticsLocation[38]).t.vrbqs1);
        obj24.IconComponent = _require(analyticsLocation[58]).ClockIcon;
        obj24.arrow = true;
        props = getProps(obj24);
        const obj25 = {};
        const intl40 = _require(analyticsLocation[38]).intl;
        obj25.label = intl40.string(_require(analyticsLocation[38]).t.PHjkRE);
        obj25.IconComponent = _require(analyticsLocation[59]).RobotIcon;
        obj25.arrow = true;
        props = getProps(obj25);
        const obj26 = {};
        const intl41 = _require(analyticsLocation[38]).intl;
        obj26.label = intl41.string(_require(analyticsLocation[38]).t["g33r/P"]);
        obj26.IconComponent = _require(analyticsLocation[60]).ChatIcon;
        props = getProps(obj26);
        const obj27 = {};
        const intl42 = _require(analyticsLocation[38]).intl;
        obj27.label = intl42.string(_require(analyticsLocation[38]).t.P8tvKG);
        obj27.IconComponent = _require(analyticsLocation[61]).AtIcon;
        props = getProps(obj27);
        let obj28 = {};
        const intl43 = _require(analyticsLocation[38]).intl;
        obj28.label = intl43.string(_require(analyticsLocation[38]).t["S/xNKV"]);
        obj28.IconComponent = _require(analyticsLocation[62]).DownloadIcon;
        props = getProps(obj28);
        let obj29 = {};
        const intl44 = _require(analyticsLocation[38]).intl;
        obj29.label = intl44.string(_require(analyticsLocation[38]).t.JVuuz3);
        obj29.IconComponent = _require(analyticsLocation[62]).DownloadIcon;
        props = getProps(obj29);
        let obj30 = {};
        const intl45 = _require(analyticsLocation[38]).intl;
        obj30.label = intl45.string(_require(analyticsLocation[38]).t.vbAEaA);
        obj30.IconComponent = _require(analyticsLocation[62]).DownloadIcon;
        props = getProps(obj30);
        props = selectedMedia;
        let mediaUrl;
        if (null != tmp3) {
          mediaUrl = tmp3.mediaUrl;
        }
        let uRL = null;
        if (null != mediaUrl) {
          const _URL = URL;
          uRL = new URL(tmp3.mediaUrl);
        }
        let mediaType;
        if (null != tmp3) {
          mediaType = tmp3.mediaType;
        }
        let tmp85 = tmp84;
        if ("image" === mediaType) {
          tmp85 = null != tmp80;
        }
        let tmp87 = tmp85;
        if (tmp85) {
          tmp87 = "cdn.discordapp.com" === tmp80.hostname;
        }
        let isMatch = tmp87;
        if (tmp87) {
          obj15 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
          isMatch = obj15.test(uRL.pathname);
        }
        while (true) {
          let tmp91 = getProps;
          let obj31 = {};
          let tmp92 = _require;
          let tmp93 = analyticsLocation;
          let intl = _require(analyticsLocation[38]).intl;
          let tmp94 = _require;
          let tmp95 = analyticsLocation;
          let t = _require(analyticsLocation[38]).t;
          obj31.label = intl.string(isMatch ? t["8xHmxo"] : t["92CPQ+"]);
          let tmp96 = _require;
          let tmp97 = analyticsLocation;
          let num5 = 42;
          obj31.IconComponent = _require(analyticsLocation[42]).LinkIcon;
          props = getProps(obj31);
          let tmp99 = getProps;
          let obj32 = {};
          let intl2 = _require(analyticsLocation[38]).intl;
          obj32.label = intl2.string(_require(analyticsLocation[38]).t.Xrt5Po);
          obj32.IconComponent = _require(analyticsLocation[42]).LinkIcon;
          props = getProps(obj32);
          let obj33 = {};
          let intl3 = _require(analyticsLocation[38]).intl;
          obj33.label = intl3.string(_require(analyticsLocation[38]).t.Rjezbz);
          obj33.IconComponent = _require(analyticsLocation[58]).ClockIcon;
          obj33.arrow = true;
          props = getProps(obj33);
          let obj34 = {};
          let intl4 = _require(analyticsLocation[38]).intl;
          obj34.label = intl4.string(_require(analyticsLocation[38]).t.zBoHlf);
          let num6 = 63;
          obj34.IconComponent = _require(analyticsLocation[63]).IdIcon;
          props = getProps(obj34);
          let obj35 = {};
          if (length > 1) {
            props = _require;
            props = analyticsLocation;
            let intl6 = _require(analyticsLocation[38]).intl;
            props = intl6.string(_require(analyticsLocation[38]).t.wUIMqa);
          } else {
            props = _require;
            props = analyticsLocation;
            let intl5 = _require(analyticsLocation[38]).intl;
            props = intl5.string(_require(analyticsLocation[38]).t["4sxKOb"]);
          }
          obj35.label = props;
          props = _require;
          props = analyticsLocation;
          let num7 = 64;
          obj35.IconComponent = _require(analyticsLocation[64]).XSmallBoldIcon;
          let str4 = "danger";
          obj35.variant = "danger";
          props = getProps(obj35);
          props = getProps;
          let obj36 = {};
          let intl7 = _require(analyticsLocation[38]).intl;
          obj36.label = intl7.string(_require(analyticsLocation[38]).t.ZbtGBm);
          let num8 = 41;
          obj36.IconComponent = _require(analyticsLocation[41]).TrashIcon;
          obj36.variant = "danger";
          props = getProps(obj36);
          let obj37 = {};
          let intl8 = _require(analyticsLocation[38]).intl;
          obj37.label = intl8.string(_require(analyticsLocation[38]).t.kFwAsa);
          obj37.IconComponent = _require(analyticsLocation[41]).TrashIcon;
          obj37.variant = "danger";
          props = getProps(obj37);
          let obj38 = {};
          let intl9 = _require(analyticsLocation[38]).intl;
          obj38.label = intl9.string(_require(analyticsLocation[38]).t["+78Pfm"]);
          let num9 = 65;
          obj38.IconComponent = _require(analyticsLocation[65]).FlagIcon;
          obj38.variant = "danger";
          props = getProps(obj38);
          let obj39 = {};
          let intl10 = _require(analyticsLocation[38]).intl;
          obj39.label = intl10.string(_require(analyticsLocation[38]).t.n5EBAJ);
          obj39.variant = "danger";
          let num10 = 66;
          obj39.IconComponent = _require(analyticsLocation[66]).ClydeIcon;
          props = getProps(obj39);
          let obj40 = {};
          let intl11 = _require(analyticsLocation[38]).intl;
          props = analyticsLocations;
          let num11 = 67;
          obj40.label = intl11.string(analyticsLocations(analyticsLocation[67])["1D+vqy"]);
          obj40.IconComponent = _require(analyticsLocation[65]).FlagIcon;
          obj40.disabled = stateFromStores;
          props = getProps(obj40);
          let obj41 = {};
          let intl12 = _require(analyticsLocation[38]).intl;
          obj41.label = intl12.string(_require(analyticsLocation[38]).t.ZH7P2h);
          let num12 = 68;
          obj41.IconComponent = _require(analyticsLocation[68]).ImageWarningIcon;
          props = getProps(obj41);
          let obj42 = {};
          let intl13 = _require(analyticsLocation[38]).intl;
          obj42.label = intl13.string(_require(analyticsLocation[38]).t.xwMqD7);
          obj42.IconComponent = _require(analyticsLocation[41]).TrashIcon;
          obj42.variant = "danger";
          props = getProps(obj42);
          let items10 = [];
          props = tmp4;
          let str5 = "Preview";
          props = "Preview" === tmp5;
          if (!props) {
            props = _require;
            props = analyticsLocation;
            let num13 = 28;
            obj28 = _require(analyticsLocation[28]);
            props = message;
            props = constants3;
            props = obj28.hasFlag(tmp2.flags, constants3.EPHEMERAL);
          }
          if (props) {
            props = items10;
            props = items10.push(props, props, props, props, props, props, props, props, props, props, props, props, props, props);
          }
          if (tmp23) {
            props = _require;
            props = analyticsLocation;
            let num14 = 28;
            obj29 = _require(analyticsLocation[28]);
            props = message;
            props = constants3;
            tmp23 = !obj29.hasFlag(tmp2.flags, constants3.EPHEMERAL);
          }
          if (!tmp23) {
            props = items10;
            props = items10.push(props, props, props, props, props, props, props, props, props, props, props, props, props, props);
          }
          props = _require;
          props = analyticsLocation;
          let num15 = 28;
          obj30 = _require(analyticsLocation[28]);
          props = constants3;
          if (obj30.hasFlag(message.flags, constants3.EPHEMERAL)) {
            props = items10;
            props = items10.push(props, props, props, props, props, props);
          }
          props = globalThis;
          let _Set = Set;
          props = new.target;
          props = new.target;
          props = items10;
          props = new Set(items10);
          let items11 = [];
          if ("Preview" === tmp4) {
            props = items11;
            props = items11.unshift(props);
          }
          if (canStartPublicThread) {
            props = items11;
            props = items11.unshift(props);
          } else {
            props = message;
            props = constants3;
            if (obj1.hasFlag(constants3.HAS_THREAD)) {
              props = items11;
              props = items11.unshift(props);
            }
          }
          props = items11;
          props = items11.unshift(props);
          if (setting) {
            props = items11;
            props = items11.unshift(props);
          }
          if (tmp72) {
            props = _require;
            props = analyticsLocation;
            let num16 = 69;
            obj31 = _require(analyticsLocation[69]);
            props = message;
            if (obj31.canReportMessageToMods(obj1)) {
              props = items11;
              props = items11.unshift(props);
              props = items11.unshift(props);
            }
            props = items11;
            props = items11.unshift(props);
            props = enabled;
            if (enabled) {
              props = tmp13;
              props = tmp13;
              if (!tmp13) {
                props = first;
              }
              if (!props) {
                props = channel;
                props = obj2.isPrivate();
              }
              if (!props) {
                props = constants7;
                props = channel;
                props = props.can(constants7.READ_MESSAGE_HISTORY, obj2);
              }
            }
            if (props) {
              if (tmp14) {
                props = tmp13;
                if (!tmp13) {
                  props = first;
                  if (!first) {
                    props = items11;
                    props = items11.unshift(props);
                  }
                }
              }
              props = items11;
              props = items11.unshift(tmp13 ? props : props);
              props = items11;
              props = items11.unshift(first ? props : props);
            }
            if (canDeleteOwnMessageResult) {
              props = items11;
              props = items11.unshift(props);
            }
            props = canResult;
            props = !canResult;
            if (props) {
              props = message;
              props = id1;
              props = !obj1.canDeleteOwnMessage(tmp28);
            }
            if (!props) {
              props = constants6;
              let UNDELETABLE = constants6.UNDELETABLE;
              props = message;
              props = UNDELETABLE.has(obj1.type);
            }
            if (!props) {
              props = items11;
              props = items11.unshift(props);
            }
            props = analyticsLocations;
            props = analyticsLocation;
            let num19 = 71;
            props = message;
            props = id1;
            props = analyticsLocations(analyticsLocation[71])(obj1, tmp28);
            if (props) {
              props = !isNonModInLockedThread;
            }
            if (props) {
              props = items11;
              props = items11.unshift(props);
            }
            if (tmp36) {
              props = items11;
              props = items11.unshift(props);
            }
            props = channel;
            props = constants;
            props = obj2.type === constants.GROUP_DM;
            props = obj2.isPrivate();
            if (props) {
              props = !props;
            }
            if (!props) {
              props = tmp26;
            }
            if (!props) {
              props = constants7;
              props = props.can(constants7.SEND_MESSAGES, channel);
              if (props) {
                props = items11;
                props = items11.unshift(props);
              }
              props = id1;
              props = user;
              props = undefined;
              if (null != user) {
                props = user.id;
              }
              if (tmp28 !== props) {
                props = items11;
                props = items11.unshift(props);
              }
            }
            if (!tmp35) {
              if (!canToggleGuildOfficialMessages) {
                props = allTextDisplayContent;
                props = null != arr5;
                if (props) {
                  props = allTextDisplayContent;
                  props = arr5.length > 0;
                }
                if (props) {
                  props = items11;
                  props = items11.unshift(props);
                }
                if (canReplyToMessage) {
                  props = items11;
                  props = items11.unshift(props);
                }
                if (canForwardMessage) {
                  props = items11;
                  props = items11.unshift(props);
                }
                props = selectedMedia;
                props = null == tmp3;
                if (!props) {
                  props = tmp16Result;
                }
                if (!props) {
                  props = items11;
                  props = items11.unshift(props);
                  props = selectedMedia;
                  let str6 = "image";
                  if ("image" === tmp3.mediaType) {
                    props = items11;
                    props = items11.unshift(props);
                  } else {
                    props = selectedMedia;
                    let str12 = "video";
                    if ("video" === tmp3.mediaType) {
                      props = _require;
                      props = analyticsLocation;
                      let num20 = 72;
                      obj35 = _require(analyticsLocation[72]);
                      props = selectedMedia;
                      if (!obj35.isWebPlayerVideoUrl(tmp3.mediaUrl)) {
                        props = items11;
                        props = items11.unshift(props);
                      }
                    }
                    props = selectedMedia;
                    let str7 = "audio";
                    props = "audio" !== tmp3.mediaType;
                    if (props) {
                      props = selectedMedia;
                      let str8 = "file";
                      props = "file" !== tmp3.mediaType;
                    }
                    if (!props) {
                      props = items11;
                      props = items11.unshift(props);
                    }
                  }
                  props = _require;
                  props = analyticsLocation;
                  let num21 = 73;
                  obj36 = _require(analyticsLocation[73]);
                  props = message;
                  if (obj36.messageHasObscurableMedia(obj1)) {
                    props = items11;
                    props = items11.unshift(props);
                  }
                  let str9 = "attachment";
                  props = "attachment" === selectedMedia.sourceType;
                  if (props) {
                    props = tmp67;
                  }
                  if (props) {
                    props = items11;
                    props = items11.unshift(props);
                  }
                }
                props = message;
                props = obj1.reactions.length > 0;
                if (props) {
                  props = message;
                  props = !obj1.isPoll();
                  if (!props) {
                    props = _require;
                    props = analyticsLocation;
                    let num22 = 74;
                    obj37 = _require(analyticsLocation[74]);
                    props = message;
                    props = obj37.hasNonVoteReactions(obj1);
                  }
                }
                if (props) {
                  props = items11;
                  props = items11.unshift(props);
                  if (canResult) {
                    props = items11;
                    props = items11.unshift(props);
                  }
                }
                props = _createForOfIteratorHelperLoose;
                props = _createForOfIteratorHelperLoose(tmp21);
                let iter = props();
                let iter2 = iter;
                if (!iter.done) {
                  do {
                    props = iter2;
                    props = _require;
                    props = analyticsLocation;
                    if (iter2.value === _require(analyticsLocation[23]).PollMessageContextItemTypes.END_EARLY) {
                      props = items11;
                      props = items11.unshift(props);
                    }
                    iter3 = props();
                    iter2 = iter3;
                  } while (!iter3.done);
                }
                props = items11;
                props = items11.unshift(props);
                props = _require;
                props = analyticsLocation;
                let num23 = 75;
                obj38 = _require(analyticsLocation[75]);
                if (obj38.canViewInteractionInfo(message)) {
                  props = items11;
                  props = items11.unshift(props);
                }
                let _Set2 = Set;
                props = items11;
                props = new.target;
                props = new.target;
                props = new Set(items11.filter((arg0) => !props.has(arg0)));
                props = render;
                let items12 = [props, props, props, props];
                let items13 = [items12, , ];
                let items14 = [props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props];
                items13[1] = items14;
                let items15 = [props, props, props, props, props, props, props, props];
                items13[2] = items15;
                let mapped = items13.map((arr) => arr.filter((arg0) => outer1_12.has(arg0)));
                return render(mapped.filter((arg0) => arg0.length > 0));
              } else {
                props = items11;
                props = _require;
                props = analyticsLocation;
                obj34 = _require(analyticsLocation[28]);
                props = message;
                props = constants3;
                props = items11.unshift(obj34.hasFlag(obj1.flags, constants3.IS_GUILD_OFFICIAL) ? props : props);
              }
            } else {
              props = items11;
              props = message;
              props = items11.unshift(obj1.pinned ? props : props);
            }
          }
          props = user;
          props = null != user;
          if (props) {
            props = _require;
            props = analyticsLocation;
            let num17 = 70;
            obj32 = _require(analyticsLocation[70]);
            props = user;
            props = obj32.canReportUser(user);
          }
          if (props) {
            props = _require;
            props = analyticsLocation;
            let num18 = 70;
            obj33 = _require(analyticsLocation[70]);
            props = message;
            props = obj33.canReportMessage(obj1);
          }
          if (props) {
            props = items11;
            props = items11.unshift(props);
          }
        }
      }
    }
  }
};
