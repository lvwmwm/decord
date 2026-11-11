// Module ID: 15560
// Function ID: 15561
// Name: BotUserProfileContent
// Dependencies: [19, 17, 1385, 7896, 5504, 21, 8540, 8527, 8542, 1627, 8479, 504, 6288, 5309, 15561, 13366, 13380, 14047, 8541, 15355, 8524, 8535, 7877, 5951, 8543, 1652, 15562, 8555, 9465, 5489, 15354, 2118, 15356, 1113, 15588, 15591, 12611, 15592, 5873, 8004, 575, 6785, 8069, 15593, 15367, 7874, 15653, 15656, 2]

// Module 15560 (BotUserProfileContent)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5504 */;
import ToastUtils from "ToastUtils" /* 5951 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ClipboardUtils from "ClipboardUtils" /* 7877 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8069 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 7896 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let View = react_native.View;
({ PROFILE_CONTENT_BOTTOM_PADDING: metroRequire, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: metroImportDefault } = Constants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const memoResult = react.memo(function BotUserProfileContent(user) {
  let Button;
  let ChatIcon;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let contentAnimatedStyle;
  let disableMessage;
  let displayProfile;
  let formatToPlainString;
  let guildId1;
  let handleCopyUsername;
  let handlePressPronouns;
  let id1;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items6;
  let items7;
  let items9;
  let navigationReplace;
  let obj18;
  let obj19;
  let obj20;
  let obj5;
  let obj8;
  let primaryColor;
  let pronouns;
  let scrollPosition;
  let secondaryColor;
  let showBlur;
  let showUserProfileActionSheet;
  let theme;
  let tmp36;
  let tmp37;
  let tmp44Result;
  let tmpResult11;
  let zFfSFQ;
  user = user.user;
  const channel = user.channel;
  ({ displayProfile, showUserProfileActionSheet, navigationReplace: dependencyMap } = user);
  let closure_4;
  let guild_id;
  const tmp = channel;
  let tmp2 = dependencyMap;
  ({ disableMessage, scrollPosition } = user);
  const tmp3 = channel(8540)();
  const tmp5 = channel(8527)(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(8542)({ scrollPosition, bannerHeight: tmp5 }));
  channel(8542)({ scrollPosition, bannerHeight: tmp5 });
  const bottom = channel(1627)().bottom;
  let obj = user(8479);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(504);
  let items = [guild_id];
  const stateFromStores = obj2.useStateFromStores(items, () => guild_id.getCurrentUser());
  let guildId;
  const useName = channel(6288).useName;
  channel(6288);
  const tmp4 = ACTION_SHEET_MAX_WIDTH;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guildId, id, user);
  const tmpResult = tmp(5309);
  closure_4 = tmpResult.useUserTag(user);
  let application;
  if (displayProfile != null) {
    application = displayProfile.application;
  }
  tmp(15561)(user, "BotUserProfileContent");
  let result = tmp(13366)(application);
  guild_id = undefined;
  const tmpResult7 = tmp(13380);
  const tmpResult1Result = tmpResult7(channel);
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const items1 = [guild_id, user];
  const memo = trackUserProfileAction.useMemo(() => {
    if (null != guild_id) {
      if (null != user) {
        const items = [tmp2.id];
        const obj = {};
        obj[tmp] = items;
      }
      return {};
    }
  }, items1);
  const tmp7Result = user(14047);
  const subscribeGuildMembers = tmp7Result.useSubscribeGuildMembers(memo, "BotUserProfileContent");
  const tmp22 = tmp(8541)(displayProfile);
  const tmp23 = tmp(15355)(user.id);
  ({ primaryColor, theme, secondaryColor } = tmp(8524)({ user, displayProfile }));
  tmp(8524)({ user, displayProfile });
  const tmp7Result3 = user(8535);
  const userProfileColors = tmp7Result3.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null != user) {
    if (null != stateFromStores) {
      let obj3 = { user, displayProfile, bannerHeight: tmp5, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      const items2 = [closure_9(tmp(8543), obj3), , ];
      let obj4 = { style: items3, children: closure_9(tmp(15562), obj5) };
      items3 = [tmp3.bannerButtons, bannerAnimatedStyle];
      View = tmp(1652).View;
      obj5 = { user, currentUser: stateFromStores, application, displayProfile, channel };
      items2[1] = closure_9(View, obj4);
      const obj6 = { style: contentAnimatedStyle, children: items4 };
      const View2 = tmp(1652).View;
      const obj7 = { user, guildId: guildId1, backgroundColor: tmp26, statusStyle: obj8 };
      guildId1 = undefined;
      const OpenableUserProfileAvatar = tmp7(8555).OpenableUserProfileAvatar;
      if (displayProfile != null) {
        guildId1 = displayProfile.guildId;
      }
      obj8 = { backgroundColor: tmp27 };
      items4 = [closure_9(OpenableUserProfileAvatar, obj7), ];
      const items5 = [, , ];
      ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
      let num = 0;
      if (null == tmp23) {
        num = closure_7;
      }
      const obj10 = { style: items5, children: items6 };
      const obj11 = { paddingTop: num, paddingBottom: bottom + closure_6 };
      items5[2] = obj11;
      const obj12 = {
        customStatusActivity: tmp23,
        hasCustomProfileTheme: null != primaryColor,
        onPressTruncatedStatus: function handlePressTruncatedStatus() {
              let id;
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              ActionSheetActionCreatorsDefault;
              const obj = { user, guildId: guild_id, channelId: id };
              id = undefined;
              const tmp2 = asyncRequire(15354, dependencyMap.paths);
              if (channel != null) {
                id = channel.id;
              }
              openLazy(tmp2, "UserProfileCustomStatusActionSheet", obj, "stack");
            },
        style: null,
        emojiOnlyStyle: null
      };
      ({ customStatusBubble: obj9.style, emojiOnlyCustomStatusBubble: obj9.emojiOnlyStyle } = tmp3);
      items6 = [closure_9(tmp(9465), obj12), , ];
      const obj13 = { style: tmp3.primaryInfo, children: items7 };
      const obj14 = { user, guildId: guild_id, displayName: name, pronouns, badges: tmp22, badgeContainerBackground: containerBackground, displayNameAccessibilityHint: intl.string(user(1113).t.y5MwJy), onPressDisplayName: handleCopyUsername, onPressUserTag: handleCopyUsername, onPressPronouns: handlePressPronouns, showBadgeToastOnPress: true };
      pronouns = undefined;
      const tmpResult8 = tmp(15356);
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      handleCopyUsername = function handleCopyUsername() {
        trackUserProfileAction({ action: "COPY_USERNAME" });
        const obj = ClipboardUtils;
        obj.copy(closure_4);
        const obj2 = ToastUtils;
        const result = obj2.presentUsernameCopied();
      };
      handlePressPronouns = function handlePressPronouns() {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        const obj = ToastUtils;
        obj.presentUserPronouns();
      };
      intl = tmp7(1113).intl;
      items7 = [closure_9(tmpResult8, obj14), , ];
      const obj15 = { user };
      items7[1] = closure_9(tmp(15588), obj15);
      const obj16 = { style: tmp3.primaryButtons, maxWidth: tmp4, primaryButton: tmp44Result, secondaryButton: closure_9(Button, obj18) };
      tmp44Result = undefined;
      const tmpResult9 = tmp(15591);
      if (null != application) {
        if (tmpResult1Result) {
          const tmp7Result4 = user(12611);
          result = tmp7Result4.hasInstallConfiguration(application);
        }
        if (result) {
          const obj17 = { application, botUserId: user.id, channel: tmp36, guildId: tmp37 };
          const tmpResult10 = tmp(15592);
          tmp44Result = tmp44(tmpResult10, obj17);
          tmp36 = channel;
          tmp37 = guild_id;
        }
      }
      obj18 = {
        icon: closure_9(ChatIcon, obj19),
        text: intl2.string(user(1113).t.zROXEV),
        variant: "secondary",
        disabled: disableMessage,
        grow: true,
        accessibilityHint: formatToPlainString(zFfSFQ, obj20),
        onPress() {
              trackUserProfileAction({ action: "SEND_MESSAGE" });
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              const obj2 = ModalActionCreatorsDefault;
              obj2.popAll();
              const obj3 = ChannelActionCreatorsDefault;
              const obj4 = { recipientIds: user.id, navigationReplace: dependencyMap };
              obj3.openPrivateChannel(obj4);
            }
      };
      Button = tmp7(5873).Button;
      obj19 = { size: "sm", color: tmp(575).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      ChatIcon = tmp7(8004).ChatIcon;
      intl2 = tmp7(1113).intl;
      const intl3 = tmp7(1113).intl;
      formatToPlainString = intl3.formatToPlainString;
      obj20 = { name: tmpResult11.getName(user) };
      zFfSFQ = tmp7(1113).t.zFfSFQ;
      tmpResult11 = tmp(5309);
      items7[2] = closure_9(tmpResult9, obj16);
      items6[1] = closure_10(closure_4, obj13);
      let tmp42Result2 = null;
      if (null != stateFromStores) {
        const items8 = [tmp3.card, ];
        const obj21 = { backgroundColor: containerBackground };
        items8[1] = obj21;
        const obj22 = { style: tmp3.cards, children: items9 };
        const obj23 = { user, currentUser: stateFromStores, guildId: guild_id, style: items8 };
        items9 = [closure_9(tmp(15593), obj23), , , ];
        const obj24 = { userId: user.id, displayProfile, channel, style: items8 };
        items9[1] = closure_9(tmp(15367), obj24);
        let tmp42Result = null != guild_id;
        if (tmp42Result) {
          const obj25 = { userId: user.id, guildId: guild_id, style: items8 };
          const items10 = [closure_9(tmp(7874), obj25), ];
          const obj26 = { user, currentUser: stateFromStores, guildId: guild_id, channelId: id1, showUserProfile: showUserProfileActionSheet, style: items8 };
          id1 = undefined;
          const tmpResult12 = tmp(15653);
          if (channel != null) {
            id1 = channel.id;
          }
          const obj27 = { children: items10 };
          items10[1] = closure_9(tmpResult12, obj26);
          tmp42Result = tmp42(tmp43, obj27);
        }
        items9[2] = tmp42Result;
        const obj28 = { userId: user.id, onBack: showUserProfileActionSheet };
        items9[3] = closure_9(tmp(15656), obj28);
        tmp42Result2 = tmp42(tmp29, obj22);
      }
      const obj29 = { children: items2 };
      items6[2] = tmp42Result2;
      items4[1] = closure_10(closure_4, obj10);
      items2[2] = closure_10(View2, obj6);
      return closure_10(closure_11, obj29);
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/user_profile/native/BotUserProfileContent.tsx");

export default memoResult;
