// Module ID: 10103
// Function ID: 78224
// Dependencies: [31, 27, 4143, 1348, 3767, 1849, 4146, 9132, 653, 4148, 1905, 9133, 33, 1273, 4130, 689, 1324, 566, 10104, 7668, 10109, 8835, 10110, 10111, 10075, 10076, 4324, 4098, 10126, 1934, 4660, 1212, 5786, 10127, 8340, 3827, 675, 10157, 5791, 4341, 4658, 9134, 9085, 4126, 10159, 2]

// Module 10103
import importAllResult from "getSystemLocale";
import { View } from "showActionSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NO_PARTICIPANTS } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { setIsChannelDetailsSearchActive as closure_11 } from "createChannelState";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import { CHANGELOG_URL } from "CHANGELOG_MODAL_KEY";
import { SearchEntrypointAnalyticsLocations as closure_17 } from "SearchEntrypointAnalyticsLocations";
import jsxProd from "SafetyToolsButton";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_18;
let closure_19;
const require = arg1;
({ AnalyticEvents: closure_12, AnalyticsSections: closure_13, ChannelTypes: closure_14 } = ME);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const tmp4 = require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL];
let closure_20 = tmp4;
let obj = { direction: require("Button").CutoutDirection.RIGHT, radius: tmp4 / 2 + 3, inset: -6 };
let closure_22 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { privateChannelButtonsWrapper: { flexDirection: "row", gap: 12, paddingEnd: 1 } };
  obj = {};
  let prop;
  if (!arg0) {
    prop = importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
  }
  obj.backgroundColor = prop;
  obj.borderRadius = importDefault(689).modules.button.BORDER_RADIUS;
  obj.minHeight = importDefault(689).space.PX_32;
  obj.minWidth = importDefault(689).space.PX_32;
  obj.padding = importDefault(689).space.PX_4;
  obj.justifyContent = "center";
  obj.flexDirection = "row";
  obj.alignItems = "center";
  obj.button = obj;
  obj.disabledButton = { opacity: 0.6 };
  obj = { backgroundColor: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: importDefault(689).radii.round, width: closure_20, height: closure_20, justifyContent: "center", alignItems: "center", marginLeft: -6 };
  obj.overflowBadge = obj;
  return obj;
});
const memoResult = importAllResult.memo(function PrivateChannelButtons(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  let recipientId;
  let inappropriateConversationSafetyToolsWarningForChannel;
  let c6;
  let callParticipants;
  let visibleParticipants;
  let totalParticipantCount;
  let c10;
  let application;
  let callback;
  let closure_13;
  let callback2;
  let tmp = callback3(screenIndex(1324)("PrivateChannelButtons"));
  const dependencyMap = tmp;
  let obj = channelId(566);
  const items = [callParticipants];
  const stateFromStores = obj.useStateFromStores(items, () => callParticipants.getChannel(channelId));
  recipientId = undefined;
  if (null != stateFromStores) {
    recipientId = stateFromStores.getRecipientId();
  }
  let obj2 = channelId(566);
  const items1 = [c10];
  const items2 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let isInChannelResult = null != stateFromStores;
    if (isInChannelResult) {
      isInChannelResult = _undefined.isInChannel(stateFromStores.id);
    }
    return isInChannelResult;
  }, items2);
  let obj3 = channelId(10104);
  inappropriateConversationSafetyToolsWarningForChannel = obj3.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  c6 = tmp5;
  let obj4 = channelId(566);
  const items3 = [visibleParticipants, totalParticipantCount];
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
  let obj5 = channelId(7668);
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const isCallActiveNullable = obj5.useIsCallActiveNullable(id);
  let obj6 = channelId(566);
  const items4 = [inappropriateConversationSafetyToolsWarningForChannel];
  callParticipants = obj6.useStateFromStoresObject(items4, () => {
    const obj = {};
    let isMultiUserDMResult;
    if (null != stateFromStores) {
      isMultiUserDMResult = stateFromStores.isMultiUserDM();
    }
    if (true === isMultiUserDMResult) {
      let participants = inappropriateConversationSafetyToolsWarningForChannel.getParticipants(stateFromStores.id);
    } else {
      participants = c6;
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
  const items5 = [callParticipants];
  const memo = stateFromStores.useMemo(() => {
    const found = callParticipants.filter((type) => type.type === outer2_15.USER);
    return { visibleParticipants: found.slice(0, 5), totalParticipantCount: found.length };
  }, items5);
  visibleParticipants = memo.visibleParticipants;
  totalParticipantCount = memo.totalParticipantCount;
  let isMultiUserDMResult;
  if (null != stateFromStores) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp11 = isMultiUserDMResult;
  if (isMultiUserDMResult) {
    tmp11 = callParticipants.length > 0;
  }
  c10 = tmp11;
  const tmp12 = screenIndex(10109)({ context: { type: "channel", channel: stateFromStores } });
  application = tmp12.application;
  const items6 = [stateFromStores];
  callback = stateFromStores.useCallback(() => {
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
  closure_13 = stateFromStores.useCallback(() => {
    callback(false);
  }, items7);
  const items8 = [callback];
  const items9 = [stateFromStores, channelId, screenIndex];
  const callback1 = stateFromStores.useCallback(() => {
    callback(true);
  }, items8);
  callback2 = stateFromStores.useCallback(() => {
    let obj = channelId(tmp[23]);
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-search-button");
    application(channelId, true, "action");
    if (null != stateFromStores) {
      const guildId = stateFromStores.getGuildId();
      const isThreadResult = stateFromStores.isThread();
      const channelDetailsSearchContext = channelId(tmp[24]).getChannelDetailsSearchContext(channelId, guildId, isThreadResult);
      const obj2 = channelId(tmp[24]);
      obj = { searchContext: channelDetailsSearchContext, searchLocation: outer1_17.INDIVIDUAL_DM };
      screenIndex(tmp[25]).trackSearchOpened(obj);
      const obj3 = screenIndex(tmp[25]);
    }
  }, items9);
  const items10 = [recipientId, stateFromStores, application];
  const items11 = [null != inappropriateConversationSafetyToolsWarningForChannel && null != recipientId, tmp.button, callback2, channelId, recipientId, , ];
  let id1;
  callback3 = stateFromStores.useCallback(() => {
    let tmp = null != recipientId;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null != application;
    }
    if (tmp) {
      let obj = screenIndex(tmp[26]);
      obj = { settings_type: "user", destination_pane: lib.SETTINGS_APP_DMS_MENU, source_page: "app_dm_settings", application_id: application.id };
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
  const memo1 = stateFromStores.useMemo(() => {
    if (c6) {
      let obj = { channelId, recipientId, warningId: inappropriateConversationSafetyToolsWarningForChannel.id, warningType: inappropriateConversationSafetyToolsWarningForChannel.type };
      let tmpResult = tmp(tmp2(tmp3[33]).SafetyToolsButton, obj);
    } else {
      obj = { style: tmp.button, onPress: callback2 };
      const intl = tmp2(tmp3[31]).intl;
      obj.accessibilityLabel = intl.string(tmp2(tmp3[31]).t["5h0QOP"]);
      obj.accessibilityRole = "button";
      obj = { size: "sm" };
      obj.children = tmp(tmp2(tmp3[32]).MagnifyingGlassIcon, obj);
      tmpResult = tmp(tmp2(tmp3[30]).PressableOpacity, obj);
    }
    return tmpResult;
  }, items11);
  if (screenIndex(8340)(channelId)) {
    obj = {
      style: tmp.button,
      onPress() {
          let obj = screenIndex(tmp[35]);
          obj.openURL(outer1_16);
          obj = { cta_type: "channel_header", target: outer1_16 };
          screenIndex(tmp[36]).track(callback.CHANGE_LOG_CTA_CLICKED, obj);
        }
    };
    const intl5 = channelId(1212).intl;
    obj.accessibilityLabel = intl5.string(channelId(1212).t["+KSnWX"]);
    obj = { size: "sm" };
    obj.children = callback(channelId(10157).WindowLaunchIcon, obj);
    let tmp21Result = callback(channelId(4660).PressableOpacity, obj);
  } else if (tmp12.isAppDM) {
    let tmp58 = null;
    if (null != application) {
      const obj1 = { style: tmp.privateChannelButtonsWrapper };
      obj2 = { style: tmp.button, onPress: callback2 };
      const intl3 = channelId(1212).intl;
      obj2.accessibilityLabel = intl3.string(channelId(1212).t["5h0QOP"]);
      obj2.accessibilityRole = "button";
      obj3 = { size: "sm" };
      obj2.children = callback(channelId(5786).MagnifyingGlassIcon, obj3);
      const items12 = [callback(channelId(4660).PressableOpacity, obj2), ];
      obj4 = { style: tmp.button, onPress: callback3 };
      const intl4 = channelId(1212).intl;
      obj4.accessibilityLabel = intl4.string(channelId(1212).t.oCqlGG);
      obj4.accessibilityRole = "button";
      obj5 = { size: "sm" };
      obj4.children = callback(channelId(5791).SettingsIcon, obj5);
      items12[1] = callback(channelId(4660).PressableOpacity, obj4);
      obj1.children = items12;
      tmp58 = callback2(recipientId, obj1);
    }
    tmp21Result = tmp58;
  } else {
    obj6 = { style: tmp.privateChannelButtonsWrapper };
    const obj7 = {};
    let intl = channelId(1212).intl;
    const string = intl.string;
    const t = channelId(1212).t;
    if (tmp11) {
      let stringResult = string(t["0D/6Rz"]);
    } else if (stateFromStores1) {
      stringResult = string(t["4ry6yi"]);
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
        if (c10) {
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
        const unsafe_rawColors2 = screenIndex(689).unsafe_rawColors;
        obj9.color = stateFromStores1 ? unsafe_rawColors2.GREEN_360 : unsafe_rawColors2.BRAND_400;
        let tmp32Result = tmp32(tmp33(4658).VoiceNormalIcon, obj9);
      } else {
        if (stateFromStores1) {
          const obj10 = { size: "sm", color: screenIndex(689).unsafe_rawColors.RED_400 };
          tmp32Result = tmp32(tmp33(9134).PhoneHangUpIcon, obj10);
        } else {
          const obj11 = { size: "sm" };
          let GREEN_360;
          if (isCallActiveNullable) {
            GREEN_360 = screenIndex(689).unsafe_rawColors.GREEN_360;
          }
          obj11.color = GREEN_360;
          tmp32Result = tmp32(tmp33(9085).PhoneCallIcon, obj11);
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
                    const tmp6 = outer1_21;
                  }
                  obj.cutout = tmp6;
                  return outer1_18(channelId(tmp[13]).CutoutableAvatarImage, obj, user.id);
                }),

        ];
        let tmp43 = totalParticipantCount > 5;
        if (tmp43) {
          const obj12 = { style: tmp.overflowBadge };
          const obj13 = { variant: "text-xxs/semibold", color: "button-outline-primary-text" };
          const items15 = ["+", totalParticipantCount - 5];
          obj13.children = items15;
          obj12.children = callback2(channelId(4126).Text, obj13);
          tmp43 = callback(recipientId, obj12);
        }
        items14[2] = tmp43;
        obj7.children = items14;
        const items16 = [tmp21(channelId(4660).PressableOpacity, obj7), , ];
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
            const intl2 = channelId(1212).intl;
            obj14.accessibilityLabel = intl2.string(channelId(1212).t.oCqlGG);
            obj14.accessibilityRole = "button";
            const obj15 = { size: "sm" };
            obj14.children = callback(channelId(10159).VideoIcon, obj15);
            tmp50Result = callback(channelId(4660).PressableOpacity, obj14);
            const tmp50 = callback;
          }
        }
        items16[1] = tmp50Result;
        items16[2] = memo1;
        obj6.children = items16;
        tmp21Result = tmp21(tmp22, obj6);
      }
    } else {
      const unsafe_rawColors = screenIndex(689).unsafe_rawColors;
    }
    tmp22 = recipientId;
  }
  return tmp21Result;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx");

export default memoResult;
