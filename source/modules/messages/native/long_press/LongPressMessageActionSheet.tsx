// Module ID: 9522
// Function ID: 74118
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 9522 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const isMessageComponentsV2 = arg1(dependencyMap[5]).isMessageComponentsV2;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const FileUploadErrorTypes = arg1(dependencyMap[9]).FileUploadErrorTypes;
({ AnalyticEvents: closure_13, AnalyticsPages: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16, LOCAL_BOT_ID: closure_17, MessageAttachmentFlags: closure_18, MessageFlags: closure_19, MessageStates: closure_20, MessageTypes: closure_21, MessageTypesSets: closure_22, Permissions: closure_23 } = arg1(dependencyMap[10]));
const jsx = arg1(dependencyMap[11]).jsx;
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[76]).fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  let FileUploadErrorTypes;
  let closure_11;
  let message;
  let selectedMedia;
  let user;
  const arg1 = analyticsLocation;
  function getProps(guildId, id) {
    let IconComponent;
    let disabled;
    let variant;
    const label = guildId.label;
    guildId = label;
    ({ onActionExecuted: closure_1, disabled } = guildId);
    const analyticsLocation = disabled;
    ({ IconComponent, variant } = guildId);
    return {
      arrow: guildId.arrow,
      icon: callback(guildId(analyticsLocation[32]).ActionSheetRow.Icon, { IconComponent }),
      label,
      onPress() {
        const result = label(disabled[33]).longPressMessageOptionHandler({ actionSheetSource: closure_7, analyticsLocations: closure_1, channel: closure_4, chatInputRef: closure_5, label, message: closure_3, onBack: closure_9, onActionExecuted: closure_1, selectedMedia: closure_6, disabled });
      },
      variant,
      disabled
    };
  }
  function render(items5) {
    let obj = { value: analyticsLocations };
    obj = { showGradient: true, startExpanded: items5(analyticsLocation[35]).isMetaQuest() };
    const obj3 = items5(analyticsLocation[35]);
    let shouldShowEmojiRowResult = items5(analyticsLocation[36]).shouldShowEmojiRow(tmp6, message, isActiveChannelOrUnarchivableThread);
    if (shouldShowEmojiRowResult) {
      obj = { message, channel };
      shouldShowEmojiRowResult = callback(analyticsLocations(analyticsLocation[37]), obj);
      const tmp6 = message;
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
            return callback2(callback(closure_2[32]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, arg1);
          })
        };
        return callback2(callback(closure_2[32]).ActionSheetRow.Group, obj, arg1);
      });
    }
    obj.children = mapped;
    obj.children = callback(items5(analyticsLocation[34]).ActionSheet, obj);
    return callback(items5(analyticsLocation[12]).AnalyticsLocationProvider, obj);
  }
  let props = importDefault(dependencyMap[12]);
  const importDefault = props(importDefault(dependencyMap[13]).MESSAGE_LONG_PRESS_MENU).analyticsLocations;
  analyticsLocation = analyticsLocation.analyticsLocation;
  if (undefined === analyticsLocation) {
    analyticsLocation = {};
  }
  const dependencyMap = analyticsLocation;
  ({ user, message } = analyticsLocation);
  let obj1 = message;
  const callback = message;
  const channel = analyticsLocation.channel;
  let obj2 = channel;
  const React = channel;
  ({ chatInputRef: closure_5, selectedMedia } = analyticsLocation);
  let closure_6 = selectedMedia;
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
  const items = [analyticsLocation, obj2];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(analyticsLocation[14]);
    obj = { channel_id: channel.id, guild_id: channel.guild_id };
    obj = { page: channel.isPrivate() ? tmp.DM_CHANNEL : tmp.GUILD_CHANNEL };
    const merged = Object.assign(analyticsLocation);
    obj.location = obj;
    obj.trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPENED, obj);
  }, items);
  const items1 = [analyticsLocation];
  let id = React.useCallback(() => {
    const result = arg0(analyticsLocation[15]).showLongPressMessageActionSheet(arg0);
  }, items1);
  let obj3 = arg1(dependencyMap[16]);
  const canReplyToMessage = obj3.useCanReplyToMessage(obj2, obj1);
  let obj4 = arg1(dependencyMap[17]);
  const canForwardMessage = obj4.useCanForwardMessage(obj1);
  let guild = guild.getGuild(obj2.guild_id);
  let obj5 = importDefault(dependencyMap[18]);
  const enabled = obj5.useConfig({ location: "LongPressMessageActionSheet" }).enabled;
  let obj6 = arg1(dependencyMap[19]);
  const items2 = [closure_7];
  const tmp11 = callback(obj6.useStateFromStoresArray(items2, () => {
    const items = [tmp4.isMessageReminder(channel.id, message.id), tmp4.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  const first = tmp11[0];
  let obj7 = arg1(dependencyMap[21]);
  const isNonModInLockedThread = obj7.useIsNonModInLockedThread(obj2);
  id = undefined;
  const tmp14 = !importDefault(dependencyMap[20])();
  const tmp5 = tmp4;
  if (null != obj2) {
    id = obj2.id;
  }
  const tmp16 = importDefault(dependencyMap[22]);
  const tmp20 = null != message.getMessage(obj1.id);
  const tmp16Result = importDefault(dependencyMap[22])(id);
  let obj8 = arg1(dependencyMap[21]);
  const isActiveChannelOrUnarchivableThread = obj8.useIsActiveChannelOrUnarchivableThread(obj2);
  let tmp23 = isActiveChannelOrUnarchivableThread;
  guild = isActiveChannelOrUnarchivableThread;
  let isNonUserBotResult;
  if (null != user) {
    isNonUserBotResult = user.isNonUserBot();
  }
  const id1 = id.getId();
  const DeveloperMode = arg1(dependencyMap[24]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = closure_11.can(constants7.MANAGE_MESSAGES, obj2);
  const tmp21 = importDefault(dependencyMap[23])(obj1);
  const tmp26 = true === isNonUserBotResult;
  let obj9 = arg1(dependencyMap[25]);
  let tmp33 = obj1.author.id === id1;
  const canToggleGuildOfficialMessages = obj9.useCanToggleGuildOfficialMessages(obj1, obj2, "LongPressMessageActionSheet");
  const canResult1 = closure_11.can(constants7.SEND_MESSAGES, obj2);
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
  let obj10 = arg1(dependencyMap[21]);
  const canStartPublicThread = obj10.computeCanStartPublicThread(obj2, obj1);
  const contentMessage = obj1.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    let obj11 = arg1(dependencyMap[27]);
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
    let obj12 = arg1(dependencyMap[28]);
    canDeleteOwnMessageResult = !obj12.hasFlag(obj1.flags, constants3.EPHEMERAL);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = importDefault(dependencyMap[29])(obj1) >= 1;
  }
  let tmp61 = !tmp20;
  if (!tmp20) {
    tmp61 = obj1.interactionError !== FileUploadErrorTypes.EXPLICIT_CONTENT;
  }
  if (tmp61) {
    let result = null == obj1.interactionData;
    if (!result) {
      let obj13 = arg1(dependencyMap[30]);
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
        tmp = !flags(analyticsLocation[28]).hasFlag(flags.flags, constants2.IS_THUMBNAIL);
        const obj = flags(analyticsLocation[28]);
      }
      return tmp;
    }).length > 1;
    if (!tmp68) {
      tmp68 = "" !== obj1.content;
    }
    tmp67 = tmp68;
  }
  let obj14 = arg1(dependencyMap[19]);
  const items3 = [closure_6];
  const stateFromStores = obj14.useStateFromStores(items3, () => selectedMedia.hasReportedMessage(message.channel_id, message.id));
  arg1(dependencyMap[31]);
  if (null != guild) {
    id = guild.id;
  }
  if (obj1.state === constants4.SEND_FAILED) {
    const items4 = [];
    if (tmp61) {
      props = getProps;
      let obj = {};
      props = arg1;
      props = dependencyMap;
      const intl17 = arg1(dependencyMap[38]).intl;
      obj.label = intl17.string(arg1(dependencyMap[38]).t.5911Lb);
      obj.IconComponent = arg1(dependencyMap[39]).RetryIcon;
      props = items4.push(getProps(obj));
    }
    props = allTextDisplayContent;
    props = null != arr5 && allTextDisplayContent.length > 0;
    if (props) {
      props = getProps;
      obj = {};
      props = arg1;
      props = dependencyMap;
      const intl18 = arg1(dependencyMap[38]).intl;
      obj.label = intl18.string(arg1(dependencyMap[38]).t.JrGD7E);
      obj.IconComponent = arg1(dependencyMap[40]).CopyIcon;
      props = items4.push(getProps(obj));
    }
    props = getProps;
    obj1 = {};
    props = arg1;
    props = dependencyMap;
    const intl19 = arg1(dependencyMap[38]).intl;
    obj1.label = intl19.string(arg1(dependencyMap[38]).t.xwMqD7);
    obj1.IconComponent = arg1(dependencyMap[41]).TrashIcon;
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
        props = arg1;
        props = dependencyMap;
        const intl15 = arg1(dependencyMap[38]).intl;
        obj2.label = intl15.string(arg1(dependencyMap[38]).t.JrGD7E);
        obj2.IconComponent = arg1(dependencyMap[40]).CopyIcon;
        props = items6.push(getProps(obj2));
      }
      props = getProps;
      obj3 = {};
      props = arg1;
      props = dependencyMap;
      const intl16 = arg1(dependencyMap[38]).intl;
      obj3.label = intl16.string(arg1(dependencyMap[38]).t.xwMqD7);
      obj3.IconComponent = arg1(dependencyMap[41]).TrashIcon;
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
        props = arg1;
        props = dependencyMap;
        const intl14 = arg1(dependencyMap[38]).intl;
        obj4.label = intl14.string(arg1(dependencyMap[38]).t.k5WiPf);
        obj4.IconComponent = arg1(dependencyMap[42]).LinkIcon;
        const items8 = [getProps(obj4)];
        const items9 = [items8];
        return render(items9);
      } else {
        props = getProps;
        obj5 = {};
        props = arg1;
        props = dependencyMap;
        const intl20 = arg1(dependencyMap[38]).intl;
        obj5.label = intl20.string(arg1(dependencyMap[38]).t.fsBWmS);
        obj5.IconComponent = arg1(dependencyMap[43]).PencilIcon;
        props = getProps(obj5);
        obj6 = {};
        const intl21 = arg1(dependencyMap[38]).intl;
        obj6.label = intl21.string(arg1(dependencyMap[38]).t.5IEsGx);
        obj6.IconComponent = arg1(dependencyMap[44]).ArrowAngleLeftUpIcon;
        props = getProps(obj6);
        obj7 = {};
        const intl22 = arg1(dependencyMap[38]).intl;
        obj7.label = intl22.string(arg1(dependencyMap[38]).t.I3ltXO);
        props = importDefault;
        obj7.IconComponent = importDefault(dependencyMap[45]);
        props = getProps(obj7);
        obj8 = {};
        const intl23 = arg1(dependencyMap[38]).intl;
        obj8.label = intl23.string(arg1(dependencyMap[38]).t.rBIGBL);
        obj8.IconComponent = arg1(dependencyMap[46]).ThreadIcon;
        props = getProps(obj8);
        obj9 = {};
        const intl24 = arg1(dependencyMap[38]).intl;
        obj9.label = intl24.string(arg1(dependencyMap[38]).t.39d0Wj);
        obj9.IconComponent = arg1(dependencyMap[46]).ThreadIcon;
        props = getProps(obj9);
        obj10 = {};
        const intl25 = arg1(dependencyMap[38]).intl;
        obj10.label = intl25.string(arg1(dependencyMap[38]).t.+TSRGD);
        obj10.IconComponent = arg1(dependencyMap[47]).ChatArrowRightIcon;
        props = getProps(obj10);
        obj11 = {};
        const intl26 = arg1(dependencyMap[38]).intl;
        obj11.label = intl26.string(arg1(dependencyMap[38]).t.JrGD7E);
        obj11.IconComponent = arg1(dependencyMap[40]).CopyIcon;
        props = getProps(obj11);
        obj12 = {};
        const intl27 = arg1(dependencyMap[38]).intl;
        obj12.label = intl27.string(arg1(dependencyMap[38]).t.RpE9k7);
        obj12.IconComponent = arg1(dependencyMap[48]).ChatMarkUnreadIcon;
        props = getProps(obj12);
        obj13 = {};
        const intl28 = arg1(dependencyMap[38]).intl;
        obj13.label = intl28.string(arg1(dependencyMap[38]).t.grdwwt);
        obj13.IconComponent = arg1(dependencyMap[49]).ClockXIcon;
        props = getProps(obj13);
        obj14 = {};
        const intl29 = arg1(dependencyMap[38]).intl;
        obj14.label = intl29.string(arg1(dependencyMap[38]).t.gHp0C4);
        obj14.IconComponent = arg1(dependencyMap[50]).ReactionIcon;
        props = getProps(obj14);
        let obj15 = {};
        const intl30 = arg1(dependencyMap[38]).intl;
        obj15.label = intl30.string(arg1(dependencyMap[38]).t.MFGE51);
        obj15.IconComponent = arg1(dependencyMap[51]).AnnouncementsIcon;
        props = getProps(obj15);
        const obj16 = {};
        const intl31 = arg1(dependencyMap[38]).intl;
        obj16.label = intl31.string(arg1(dependencyMap[38]).t.CvQ18w);
        obj16.IconComponent = arg1(dependencyMap[52]).PinIcon;
        props = getProps(obj16);
        const obj17 = {};
        const intl32 = arg1(dependencyMap[38]).intl;
        obj17.label = intl32.string(arg1(dependencyMap[38]).t.Bse+F/);
        obj17.IconComponent = arg1(dependencyMap[52]).PinIcon;
        props = getProps(obj17);
        const obj18 = {};
        const intl33 = arg1(dependencyMap[38]).intl;
        obj18.label = intl33.string(arg1(dependencyMap[38]).t.lE/PG3);
        obj18.IconComponent = arg1(dependencyMap[53]).StampIcon;
        props = getProps(obj18);
        const obj19 = {};
        const intl34 = arg1(dependencyMap[38]).intl;
        obj19.label = intl34.string(arg1(dependencyMap[38]).t.2km5Gf);
        obj19.IconComponent = arg1(dependencyMap[54]).StampXIcon;
        props = getProps(obj19);
        const obj20 = {};
        const intl35 = arg1(dependencyMap[38]).intl;
        obj20.label = intl35.string(arg1(dependencyMap[38]).t.tpxJto);
        obj20.IconComponent = arg1(dependencyMap[55]).NitroWheelIcon;
        props = getProps(obj20);
        const obj21 = {};
        const intl36 = arg1(dependencyMap[38]).intl;
        obj21.label = intl36.string(arg1(dependencyMap[38]).t.tpxJto);
        obj21.IconComponent = arg1(dependencyMap[56]).BookmarkOutlineIcon;
        props = getProps(obj21);
        const obj22 = {};
        const intl37 = arg1(dependencyMap[38]).intl;
        obj22.label = intl37.string(arg1(dependencyMap[38]).t.SvXS1Z);
        obj22.IconComponent = arg1(dependencyMap[57]).BookmarkIcon;
        props = getProps(obj22);
        const obj23 = {};
        const intl38 = arg1(dependencyMap[38]).intl;
        obj23.label = intl38.string(arg1(dependencyMap[38]).t.mJ3P0N);
        obj23.IconComponent = arg1(dependencyMap[58]).ClockIcon;
        obj23.arrow = true;
        props = getProps(obj23);
        const obj24 = {};
        const intl39 = arg1(dependencyMap[38]).intl;
        obj24.label = intl39.string(arg1(dependencyMap[38]).t.vrbqs1);
        obj24.IconComponent = arg1(dependencyMap[58]).ClockIcon;
        obj24.arrow = true;
        props = getProps(obj24);
        const obj25 = {};
        const intl40 = arg1(dependencyMap[38]).intl;
        obj25.label = intl40.string(arg1(dependencyMap[38]).t.PHjkRE);
        obj25.IconComponent = arg1(dependencyMap[59]).RobotIcon;
        obj25.arrow = true;
        props = getProps(obj25);
        const obj26 = {};
        const intl41 = arg1(dependencyMap[38]).intl;
        obj26.label = intl41.string(arg1(dependencyMap[38]).t.g33r/P);
        obj26.IconComponent = arg1(dependencyMap[60]).ChatIcon;
        props = getProps(obj26);
        const obj27 = {};
        const intl42 = arg1(dependencyMap[38]).intl;
        obj27.label = intl42.string(arg1(dependencyMap[38]).t.P8tvKG);
        obj27.IconComponent = arg1(dependencyMap[61]).AtIcon;
        props = getProps(obj27);
        let obj28 = {};
        const intl43 = arg1(dependencyMap[38]).intl;
        obj28.label = intl43.string(arg1(dependencyMap[38]).t.S/xNKV);
        obj28.IconComponent = arg1(dependencyMap[62]).DownloadIcon;
        props = getProps(obj28);
        let obj29 = {};
        const intl44 = arg1(dependencyMap[38]).intl;
        obj29.label = intl44.string(arg1(dependencyMap[38]).t.JVuuz3);
        obj29.IconComponent = arg1(dependencyMap[62]).DownloadIcon;
        props = getProps(obj29);
        let obj30 = {};
        const intl45 = arg1(dependencyMap[38]).intl;
        obj30.label = intl45.string(arg1(dependencyMap[38]).t.vbAEaA);
        obj30.IconComponent = arg1(dependencyMap[62]).DownloadIcon;
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
          let tmp92 = arg1;
          let tmp93 = dependencyMap;
          let intl = arg1(dependencyMap[38]).intl;
          let tmp94 = arg1;
          let tmp95 = dependencyMap;
          let t = arg1(dependencyMap[38]).t;
          obj31.label = intl.string(isMatch ? t.8xHmxo : t.92CPQ+);
          let tmp96 = arg1;
          let tmp97 = dependencyMap;
          let num5 = 42;
          obj31.IconComponent = arg1(dependencyMap[42]).LinkIcon;
          props = getProps(obj31);
          let tmp99 = getProps;
          let obj32 = {};
          let intl2 = arg1(dependencyMap[38]).intl;
          obj32.label = intl2.string(arg1(dependencyMap[38]).t.Xrt5Po);
          obj32.IconComponent = arg1(dependencyMap[42]).LinkIcon;
          props = getProps(obj32);
          let obj33 = {};
          let intl3 = arg1(dependencyMap[38]).intl;
          obj33.label = intl3.string(arg1(dependencyMap[38]).t.Rjezbz);
          obj33.IconComponent = arg1(dependencyMap[58]).ClockIcon;
          obj33.arrow = true;
          props = getProps(obj33);
          let obj34 = {};
          let intl4 = arg1(dependencyMap[38]).intl;
          obj34.label = intl4.string(arg1(dependencyMap[38]).t.zBoHlf);
          let num6 = 63;
          obj34.IconComponent = arg1(dependencyMap[63]).IdIcon;
          props = getProps(obj34);
          let obj35 = {};
          if (length > 1) {
            props = arg1;
            props = dependencyMap;
            let intl6 = arg1(dependencyMap[38]).intl;
            props = intl6.string(arg1(dependencyMap[38]).t.wUIMqa);
          } else {
            props = arg1;
            props = dependencyMap;
            let intl5 = arg1(dependencyMap[38]).intl;
            props = intl5.string(arg1(dependencyMap[38]).t.4sxKOb);
          }
          obj35.label = props;
          props = arg1;
          props = dependencyMap;
          let num7 = 64;
          obj35.IconComponent = arg1(dependencyMap[64]).XSmallBoldIcon;
          let str4 = "danger";
          obj35.variant = "danger";
          props = getProps(obj35);
          props = getProps;
          let obj36 = {};
          let intl7 = arg1(dependencyMap[38]).intl;
          obj36.label = intl7.string(arg1(dependencyMap[38]).t.ZbtGBm);
          let num8 = 41;
          obj36.IconComponent = arg1(dependencyMap[41]).TrashIcon;
          obj36.variant = "danger";
          props = getProps(obj36);
          let obj37 = {};
          let intl8 = arg1(dependencyMap[38]).intl;
          obj37.label = intl8.string(arg1(dependencyMap[38]).t.kFwAsa);
          obj37.IconComponent = arg1(dependencyMap[41]).TrashIcon;
          obj37.variant = "danger";
          props = getProps(obj37);
          let obj38 = {};
          let intl9 = arg1(dependencyMap[38]).intl;
          obj38.label = intl9.string(arg1(dependencyMap[38]).t.+78Pfm);
          let num9 = 65;
          obj38.IconComponent = arg1(dependencyMap[65]).FlagIcon;
          obj38.variant = "danger";
          props = getProps(obj38);
          let obj39 = {};
          let intl10 = arg1(dependencyMap[38]).intl;
          obj39.label = intl10.string(arg1(dependencyMap[38]).t.n5EBAJ);
          obj39.variant = "danger";
          let num10 = 66;
          obj39.IconComponent = arg1(dependencyMap[66]).ClydeIcon;
          props = getProps(obj39);
          let obj40 = {};
          let intl11 = arg1(dependencyMap[38]).intl;
          props = importDefault;
          let num11 = 67;
          obj40.label = intl11.string(importDefault(dependencyMap[67]).1D+vqy);
          obj40.IconComponent = arg1(dependencyMap[65]).FlagIcon;
          obj40.disabled = stateFromStores;
          props = getProps(obj40);
          let obj41 = {};
          let intl12 = arg1(dependencyMap[38]).intl;
          obj41.label = intl12.string(arg1(dependencyMap[38]).t.ZH7P2h);
          let num12 = 68;
          obj41.IconComponent = arg1(dependencyMap[68]).ImageWarningIcon;
          props = getProps(obj41);
          let obj42 = {};
          let intl13 = arg1(dependencyMap[38]).intl;
          obj42.label = intl13.string(arg1(dependencyMap[38]).t.xwMqD7);
          obj42.IconComponent = arg1(dependencyMap[41]).TrashIcon;
          obj42.variant = "danger";
          props = getProps(obj42);
          let items10 = [];
          props = tmp4;
          let str5 = "Preview";
          props = "Preview" === tmp5;
          if (!props) {
            props = arg1;
            props = dependencyMap;
            let num13 = 28;
            obj28 = arg1(dependencyMap[28]);
            props = message;
            props = constants3;
            props = obj28.hasFlag(tmp2.flags, constants3.EPHEMERAL);
          }
          if (props) {
            props = items10;
            props = items10.push(props, props, props, props, props, props, props, props, props, props, props, props, props, props);
          }
          if (tmp23) {
            props = arg1;
            props = dependencyMap;
            let num14 = 28;
            obj29 = arg1(dependencyMap[28]);
            props = message;
            props = constants3;
            tmp23 = !obj29.hasFlag(tmp2.flags, constants3.EPHEMERAL);
          }
          if (!tmp23) {
            props = items10;
            props = items10.push(props, props, props, props, props, props, props, props, props, props, props, props, props, props);
          }
          props = arg1;
          props = dependencyMap;
          let num15 = 28;
          obj30 = arg1(dependencyMap[28]);
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
          closure_11 = props;
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
            props = arg1;
            props = dependencyMap;
            let num16 = 69;
            obj31 = arg1(dependencyMap[69]);
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
                props = closure_11;
                props = constants7;
                props = channel;
                props = closure_11.can(constants7.READ_MESSAGE_HISTORY, obj2);
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
              if (!tmp13) {
                props = first;
                if (!first) {
                  props = items11;
                  props = items11.unshift(props);
                }
                props = items11;
                let unshift = items11.unshift;
                if (first) {
                  props = unshift(props);
                } else {
                  props = unshift(props);
                }
              }
              props = items11;
              props = items11.unshift(props);
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
            props = importDefault;
            props = dependencyMap;
            let num19 = 71;
            props = message;
            props = id1;
            props = importDefault(dependencyMap[71])(obj1, tmp28);
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
              props = closure_11;
              props = constants7;
              props = closure_11.can(constants7.SEND_MESSAGES, channel);
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
                      props = arg1;
                      props = dependencyMap;
                      let num20 = 72;
                      obj35 = arg1(dependencyMap[72]);
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
                  props = arg1;
                  props = dependencyMap;
                  let num21 = 73;
                  obj36 = arg1(dependencyMap[73]);
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
                    props = arg1;
                    props = dependencyMap;
                    let num22 = 74;
                    obj37 = arg1(dependencyMap[74]);
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
                    props = closure_0;
                    props = closure_2;
                    if (iter2.value === closure_0(closure_2[23]).PollMessageContextItemTypes.END_EARLY) {
                      props = items11;
                      props = items11.unshift(props);
                    }
                    let iter3 = props();
                    iter2 = iter3;
                  } while (!iter3.done);
                }
                props = items11;
                props = items11.unshift(props);
                props = arg1;
                props = dependencyMap;
                let num23 = 75;
                obj38 = arg1(dependencyMap[75]);
                if (obj38.canViewInteractionInfo(message)) {
                  props = items11;
                  props = items11.unshift(props);
                }
                let _Set2 = Set;
                props = items11;
                props = new.target;
                props = new.target;
                props = new Set(items11.filter((arg0) => !props.has(arg0)));
                FileUploadErrorTypes = props;
                props = render;
                let items12 = [props, props, props, props];
                let items13 = [items12, , ];
                let items14 = [props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props];
                items13[1] = items14;
                let items15 = [props, props, props, props, props, props, props, props];
                items13[2] = items15;
                let mapped = items13.map((arr) => arr.filter((arg0) => set.has(arg0)));
                return render(mapped.filter((arg0) => arg0.length > 0));
              } else {
                props = items11;
                props = arg1;
                props = dependencyMap;
                obj34 = arg1(dependencyMap[28]);
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
            props = arg1;
            props = dependencyMap;
            let num17 = 70;
            obj32 = arg1(dependencyMap[70]);
            props = user;
            props = obj32.canReportUser(user);
          }
          if (props) {
            props = arg1;
            props = dependencyMap;
            let num18 = 70;
            obj33 = arg1(dependencyMap[70]);
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
