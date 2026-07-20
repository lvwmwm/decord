// Module ID: 10088
// Function ID: 78142
// Dependencies: []

// Module 10088
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const NO_PARTICIPANTS = arg1(dependencyMap[2]).NO_PARTICIPANTS;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).setIsChannelDetailsSearchActive;
({ AnalyticEvents: closure_12, AnalyticsSections: closure_13, ChannelTypes: closure_14 } = arg1(dependencyMap[8]));
const ParticipantTypes = arg1(dependencyMap[9]).ParticipantTypes;
const CHANGELOG_URL = arg1(dependencyMap[10]).CHANGELOG_URL;
let closure_17 = arg1(dependencyMap[11]).SearchEntrypointAnalyticsLocations;
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_18, jsxs: closure_19 } = arg1(dependencyMap[12]));
const tmp4 = arg1(dependencyMap[13]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[13]).AvatarSizes.XSMALL];
const obj = { direction: arg1(dependencyMap[13]).CutoutDirection.RIGHT, radius: tmp4 / 2 + 3, inset: -6 };
const tmp3 = arg1(dependencyMap[12]);
let closure_22 = arg1(dependencyMap[14]).createStyles((arg0) => {
  let obj = { privateChannelButtonsWrapper: { SEND_AS_GIFT: null, messagePreviewContainer: null, swc: null } };
  obj = {};
  let prop;
  if (!arg0) {
    prop = importDefault(dependencyMap[15]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
  }
  obj.backgroundColor = prop;
  obj.borderRadius = importDefault(dependencyMap[15]).modules.button.BORDER_RADIUS;
  obj.minHeight = importDefault(dependencyMap[15]).space.PX_32;
  obj.minWidth = importDefault(dependencyMap[15]).space.PX_32;
  obj.padding = importDefault(dependencyMap[15]).space.PX_4;
  obj.justifyContent = "center";
  obj.flexDirection = "row";
  obj.alignItems = "center";
  obj.button = obj;
  obj.disabledButton = { opacity: 0.6 };
  obj = { backgroundColor: importDefault(dependencyMap[15]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(dependencyMap[15]).radii.round, width: tmp4, height: tmp4, justifyContent: "center", alignItems: "center", marginLeft: -6 };
  obj.overflowBadge = obj;
  return obj;
});
const obj3 = arg1(dependencyMap[14]);
const memoResult = importAllResult.memo(function PrivateChannelButtons(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const screenIndex = channelId.screenIndex;
  const importDefault = screenIndex;
  let View;
  let closure_5;
  let NO_PARTICIPANTS;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  let closure_11;
  let callback;
  let closure_13;
  let callback2;
  const tmp = callback3(importDefault(dependencyMap[16])("PrivateChannelButtons"));
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => callParticipants.getChannel(channelId));
  let recipientId;
  if (null != stateFromStores) {
    recipientId = stateFromStores.getRecipientId();
  }
  View = recipientId;
  let obj2 = arg1(dependencyMap[17]);
  const items1 = [closure_10];
  const items2 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let isInChannelResult = null != stateFromStores;
    if (isInChannelResult) {
      isInChannelResult = tmp11.isInChannel(stateFromStores.id);
    }
    return isInChannelResult;
  }, items2);
  let obj3 = arg1(dependencyMap[18]);
  const inappropriateConversationSafetyToolsWarningForChannel = obj3.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  closure_5 = inappropriateConversationSafetyToolsWarningForChannel;
  NO_PARTICIPANTS = tmp5;
  let obj4 = arg1(dependencyMap[17]);
  const items3 = [closure_8, closure_9];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => {
    let type;
    if (null != stateFromStores) {
      type = stateFromStores.type;
    }
    let tmp3 = type === callback2.DM;
    if (tmp3) {
      tmp3 = null != recipientId;
    }
    if (tmp3) {
      let isBlockedResult = visibleParticipants.isBlocked(recipientId);
      if (!isBlockedResult) {
        const user = totalParticipantCount.getUser(recipientId);
        let isProvisional;
        if (null != user) {
          isProvisional = user.isProvisional;
        }
        isBlockedResult = true === isProvisional;
      }
      tmp3 = isBlockedResult;
    }
    return tmp3;
  });
  let obj5 = arg1(dependencyMap[19]);
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const isCallActiveNullable = obj5.useIsCallActiveNullable(id);
  let obj6 = arg1(dependencyMap[17]);
  const items4 = [closure_5];
  const callParticipants = obj6.useStateFromStoresObject(items4, () => {
    const obj = {};
    let isMultiUserDMResult;
    if (null != stateFromStores) {
      isMultiUserDMResult = stateFromStores.isMultiUserDM();
    }
    if (true === isMultiUserDMResult) {
      let participants = inappropriateConversationSafetyToolsWarningForChannel.getParticipants(stateFromStores.id);
      const tmp5 = stateFromStores;
    } else {
      participants = tmp5;
    }
    obj.callParticipants = participants;
    let isMultiUserDMResult1;
    if (null != stateFromStores) {
      isMultiUserDMResult1 = stateFromStores.isMultiUserDM();
    }
    let num = -1;
    if (true === isMultiUserDMResult1) {
      num = inappropriateConversationSafetyToolsWarningForChannel.getParticipantsVersion(stateFromStores.id);
    }
    obj.participantsVersion = num;
    return obj;
  }).callParticipants;
  closure_7 = callParticipants;
  const items5 = [callParticipants];
  const memo = importAllResult.useMemo(() => {
    const found = callParticipants.filter((type) => type.type === constants.USER);
    return { visibleParticipants: found.slice(0, 5), totalParticipantCount: found.length };
  }, items5);
  const visibleParticipants = memo.visibleParticipants;
  closure_8 = visibleParticipants;
  const totalParticipantCount = memo.totalParticipantCount;
  closure_9 = totalParticipantCount;
  let isMultiUserDMResult;
  if (null != stateFromStores) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp11 = isMultiUserDMResult;
  if (isMultiUserDMResult) {
    tmp11 = callParticipants.length > 0;
  }
  closure_10 = tmp11;
  const tmp12 = importDefault(dependencyMap[20])({ context: { type: "channel", channel: stateFromStores } });
  const application = tmp12.application;
  closure_11 = application;
  const items6 = [stateFromStores];
  callback = importAllResult.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (null != stateFromStores) {
      if (stateFromStores.isPrivate()) {
        const obj = screenIndex(tmp[21])(stateFromStores, flag);
        if (obj.inCall) {
          obj.onPress();
        } else {
          channelId(tmp[22]).confirmStartCall(obj.onPress);
          const obj2 = channelId(tmp[22]);
        }
      }
    }
  }, items6);
  const items7 = [callback];
  closure_13 = importAllResult.useCallback(() => {
    callback(false);
  }, items7);
  const items8 = [callback];
  const items9 = [stateFromStores, channelId, screenIndex];
  const callback1 = importAllResult.useCallback(() => {
    callback(true);
  }, items8);
  callback2 = importAllResult.useCallback(() => {
    let obj = channelId(tmp[23]);
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-search-button");
    application(channelId, true, "action");
    if (null != stateFromStores) {
      const guildId = stateFromStores.getGuildId();
      const isThreadResult = stateFromStores.isThread();
      const channelDetailsSearchContext = channelId(tmp[24]).getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      const obj2 = channelId(tmp[24]);
      obj = { searchContext: channelDetailsSearchContext, searchLocation: constants.INDIVIDUAL_DM };
      screenIndex(tmp[25]).trackSearchOpened(obj);
      const obj3 = screenIndex(tmp[25]);
    }
  }, items9);
  const items10 = [recipientId, stateFromStores, application];
  const items11 = [null != inappropriateConversationSafetyToolsWarningForChannel && null != recipientId, tmp.button, callback2, channelId, recipientId, , ];
  let id1;
  const callback3 = importAllResult.useCallback(() => {
    let tmp = null != recipientId;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null != application;
    }
    if (tmp) {
      let obj = screenIndex(tmp[26]);
      obj = { "Null": null, "Null": null, "Null": null, destination_pane: lib.SETTINGS_APP_DMS_MENU, application_id: application.id };
      obj.trackWithMetadata(callback.SETTINGS_PANE_VIEWED, obj);
      obj = { userId: recipientId, channel: stateFromStores, application };
      screenIndex(tmp[27]).openLazy(channelId(tmp[29])(tmp[28], tmp.paths), "AppDMOptionsBottomSheet", obj);
      const obj3 = screenIndex(tmp[27]);
    }
  }, items10);
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    id1 = inappropriateConversationSafetyToolsWarningForChannel.id;
  }
  items11[5] = id1;
  let type;
  if (null != inappropriateConversationSafetyToolsWarningForChannel) {
    type = inappropriateConversationSafetyToolsWarningForChannel.type;
  }
  items11[6] = type;
  const memo1 = importAllResult.useMemo(() => {
    if (tmp5) {
      let obj = { channelId, recipientId, warningId: inappropriateConversationSafetyToolsWarningForChannel.id, warningType: inappropriateConversationSafetyToolsWarningForChannel.type };
      let tmpResult = tmp(tmp2(tmp3[33]).SafetyToolsButton, obj);
    } else {
      obj = { style: tmp.button, onPress: callback2 };
      const intl = tmp2(tmp3[31]).intl;
      obj.accessibilityLabel = intl.string(tmp2(tmp3[31]).t.5h0QOP);
      obj.accessibilityRole = "button";
      obj = { size: "sm" };
      obj.children = tmp(tmp2(tmp3[32]).MagnifyingGlassIcon, obj);
      tmpResult = tmp(tmp2(tmp3[30]).PressableOpacity, obj);
      const tmp5 = callback2;
    }
    return tmpResult;
  }, items11);
  if (importDefault(dependencyMap[34])(channelId)) {
    obj = {
      style: tmp.button,
      onPress() {
          let obj = screenIndex(tmp[35]);
          obj.openURL(closure_16);
          obj = { cta_type: "channel_header", target: closure_16 };
          screenIndex(tmp[36]).track(callback.CHANGE_LOG_CTA_CLICKED, obj);
        }
    };
    const intl5 = arg1(dependencyMap[31]).intl;
    obj.accessibilityLabel = intl5.string(arg1(dependencyMap[31]).t.+KSnWX);
    obj = { size: "sm" };
    obj.children = callback(arg1(dependencyMap[37]).WindowLaunchIcon, obj);
    let tmp21Result = callback(arg1(dependencyMap[30]).PressableOpacity, obj);
  } else if (tmp12.isAppDM) {
    let tmp58 = null;
    if (null != application) {
      const obj1 = { style: tmp.privateChannelButtonsWrapper };
      obj2 = { style: tmp.button, onPress: callback2 };
      const intl3 = arg1(dependencyMap[31]).intl;
      obj2.accessibilityLabel = intl3.string(arg1(dependencyMap[31]).t.5h0QOP);
      obj2.accessibilityRole = "button";
      obj3 = { size: "sm" };
      obj2.children = callback(arg1(dependencyMap[32]).MagnifyingGlassIcon, obj3);
      const items12 = [callback(arg1(dependencyMap[30]).PressableOpacity, obj2), ];
      obj4 = { style: tmp.button, onPress: callback3 };
      const intl4 = arg1(dependencyMap[31]).intl;
      obj4.accessibilityLabel = intl4.string(arg1(dependencyMap[31]).t.oCqlGG);
      obj4.accessibilityRole = "button";
      obj5 = { size: "sm" };
      obj4.children = callback(arg1(dependencyMap[38]).SettingsIcon, obj5);
      items12[1] = callback(arg1(dependencyMap[30]).PressableOpacity, obj4);
      obj1.children = items12;
      tmp58 = callback2(View, obj1);
    }
    tmp21Result = tmp58;
  } else {
    obj6 = { style: tmp.privateChannelButtonsWrapper };
    const obj7 = {};
    const intl = arg1(dependencyMap[31]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[31]).t;
    if (tmp11) {
      let stringResult = string(t.0D/6Rz);
    } else if (stateFromStores1) {
      stringResult = string(t.4ry6yi);
    } else {
      stringResult = string(t.focH1t);
    }
    obj7.accessibilityLabel = stringResult;
    obj7.accessibilityRole = "button";
    const items13 = [tmp.button, , ];
    const obj8 = {};
    let num4;
    if (tmp11) {
      num4 = 1;
    }
    obj8.borderWidth = num4;
    if (!tmp11) {
      obj8.borderColor = undefined;
      items13[1] = obj8;
      let disabledButton = null;
      if (stateFromStores2) {
        disabledButton = tmp.disabledButton;
      }
      items13[2] = disabledButton;
      obj7.style = items13;
      obj7.onPress = function onPress() {
        if (tmp11) {
          if (null != stateFromStores) {
            channelId(tmp[39]).openChannelCallModal(stateFromStores);
            const obj = channelId(tmp[39]);
          }
        }
        lib();
      };
      obj7.disabled = stateFromStores2;
      if (tmp11) {
        const obj9 = { size: "sm" };
        const unsafe_rawColors2 = importDefault(dependencyMap[15]).unsafe_rawColors;
        obj9.color = stateFromStores1 ? unsafe_rawColors2.GREEN_360 : unsafe_rawColors2.BRAND_400;
        let tmp32Result = tmp32(tmp33(tmp34[40]).VoiceNormalIcon, obj9);
      } else {
        if (stateFromStores1) {
          const obj10 = { size: "sm", color: importDefault(tmp34[15]).unsafe_rawColors.RED_400 };
          tmp32Result = tmp32(tmp33(tmp34[41]).PhoneHangUpIcon, obj10);
        } else {
          const obj11 = { size: "sm" };
          let GREEN_360;
          if (isCallActiveNullable) {
            GREEN_360 = importDefault(dependencyMap[15]).unsafe_rawColors.GREEN_360;
          }
          obj11.color = GREEN_360;
          tmp32Result = tmp32(tmp33(tmp34[42]).PhoneCallIcon, obj11);
        }
        const items14 = [
          tmp32Result,
          visibleParticipants.map((user) => {
                  const diff = visibleParticipants.length - 1;
                  let obj = {};
                  obj = {};
                  let num = -6;
                  if (0 === arg1) {
                    num = screenIndex(tmp[15]).space.PX_4;
                  }
                  obj.marginLeft = num;
                  obj.style = obj;
                  obj.user = user.user;
                  obj.guildId = undefined;
                  obj.size = channelId(tmp[13]).AvatarSizes.XSMALL;
                  if (arg1 !== diff) {
                    const tmp6 = closure_21;
                  }
                  obj.cutout = tmp6;
                  return closure_18(channelId(tmp[13]).CutoutableAvatarImage, obj, user.id);
                }),

        ];
        let tmp43 = totalParticipantCount > 5;
        if (tmp43) {
          const obj12 = { style: tmp.overflowBadge };
          const obj13 = { INTEGRATION_CREATE: 1125, ConstraintReasonCode: 1320 };
          const items15 = [true, totalParticipantCount - 5];
          obj13.children = items15;
          obj12.children = callback2(arg1(dependencyMap[43]).Text, obj13);
          tmp43 = callback(View, obj12);
        }
        items14[2] = tmp43;
        obj7.children = items14;
        const items16 = [tmp21(arg1(dependencyMap[30]).PressableOpacity, obj7), , ];
        let tmp50Result = null;
        if (!isMultiUserDMResult) {
          tmp50Result = null;
          if (!stateFromStores1) {
            const obj14 = {};
            const items17 = [tmp.button, ];
            let disabledButton1 = null;
            if (stateFromStores2) {
              disabledButton1 = tmp.disabledButton;
            }
            items17[1] = disabledButton1;
            obj14.style = items17;
            obj14.onPress = callback1;
            obj14.disabled = stateFromStores2;
            const intl2 = arg1(dependencyMap[31]).intl;
            obj14.accessibilityLabel = intl2.string(arg1(dependencyMap[31]).t.oCqlGG);
            obj14.accessibilityRole = "button";
            const obj15 = { size: "sm" };
            obj14.children = callback(arg1(dependencyMap[44]).VideoIcon, obj15);
            tmp50Result = callback(arg1(dependencyMap[30]).PressableOpacity, obj14);
            const tmp50 = callback;
          }
        }
        items16[1] = tmp50Result;
        items16[2] = memo1;
        obj6.children = items16;
        tmp21Result = tmp21(tmp22, obj6);
      }
    } else {
      const unsafe_rawColors = importDefault(dependencyMap[15]).unsafe_rawColors;
    }
    const tmp22 = View;
  }
  return tmp21Result;
});
const result = arg1(dependencyMap[45]).fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx");

export default memoResult;
