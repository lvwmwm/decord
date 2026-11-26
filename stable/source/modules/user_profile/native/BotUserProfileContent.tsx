// Module ID: 15673
// Function ID: 15674
// Name: BotUserProfileContent
// Dependencies: [19, 17, 1388, 7962, 5557, 21, 8607, 8593, 8609, 1630, 8545, 504, 6341, 5362, 15674, 13467, 13481, 14152, 8608, 15468, 8590, 8601, 7943, 6004, 8610, 1655, 15675, 8622, 9531, 5542, 15467, 2121, 15469, 1113, 15701, 15704, 12703, 15705, 5926, 8069, 575, 6838, 8134, 15706, 15480, 7940, 15771, 15774, 2]

// Module 15673 (BotUserProfileContent)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5557 */;
import ToastUtils from "ToastUtils" /* 6004 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8134 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import Constants from "Constants" /* 7962 */;
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
  const tmp3 = channel(8607)();
  const tmp5 = channel(8593)(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(8609)({ scrollPosition, bannerHeight: tmp5 }));
  channel(8609)({ scrollPosition, bannerHeight: tmp5 });
  const bottom = channel(1630)().bottom;
  let obj = user(8545);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(504);
  let items = [guild_id];
  const stateFromStores = obj2.useStateFromStores(items, () => guild_id.getCurrentUser());
  let guildId;
  const useName = channel(6341).useName;
  channel(6341);
  const tmp4 = ACTION_SHEET_MAX_WIDTH;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guildId, id, user);
  const tmpResult = tmp(5362);
  closure_4 = tmpResult.useUserTag(user);
  let application;
  if (displayProfile != null) {
    application = displayProfile.application;
  }
  tmp(15674)(user, "BotUserProfileContent");
  let result = tmp(13467)(application);
  guild_id = undefined;
  const tmpResult7 = tmp(13481);
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
  const tmp7Result = user(14152);
  const subscribeGuildMembers = tmp7Result.useSubscribeGuildMembers(memo, "BotUserProfileContent");
  const tmp22 = tmp(8608)(displayProfile);
  const tmp23 = tmp(15468)(user.id);
  ({ primaryColor, theme, secondaryColor } = tmp(8590)({ user, displayProfile }));
  tmp(8590)({ user, displayProfile });
  const tmp7Result3 = user(8601);
  const userProfileColors = tmp7Result3.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null != user) {
    if (null != stateFromStores) {
      let obj3 = { user, displayProfile, bannerHeight: tmp5, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      const items2 = [closure_9(tmp(8610), obj3), , ];
      let obj4 = { style: items3, children: closure_9(tmp(15675), obj5) };
      items3 = [tmp3.bannerButtons, bannerAnimatedStyle];
      View = tmp(1655).View;
      obj5 = { user, currentUser: stateFromStores, application, displayProfile, channel };
      items2[1] = closure_9(View, obj4);
      const obj6 = { style: contentAnimatedStyle, children: items4 };
      const View2 = tmp(1655).View;
      const obj7 = { user, guildId: guildId1, backgroundColor: tmp26, statusStyle: obj8 };
      guildId1 = undefined;
      const OpenableUserProfileAvatar = tmp7(8622).OpenableUserProfileAvatar;
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
              const tmp2 = asyncRequire(15467, dependencyMap.paths);
              if (channel != null) {
                id = channel.id;
              }
              openLazy(tmp2, "UserProfileCustomStatusActionSheet", obj, "stack");
            },
        style: null,
        emojiOnlyStyle: null
      };
      ({ customStatusBubble: obj9.style, emojiOnlyCustomStatusBubble: obj9.emojiOnlyStyle } = tmp3);
      items6 = [closure_9(tmp(9531), obj12), , ];
      const obj13 = { style: tmp3.primaryInfo, children: items7 };
      const obj14 = { user, guildId: guild_id, displayName: name, pronouns, badges: tmp22, badgeContainerBackground: containerBackground, displayNameAccessibilityHint: intl.string(user(1113).t.y5MwJy), onPressDisplayName: handleCopyUsername, onPressUserTag: handleCopyUsername, onPressPronouns: handlePressPronouns, showBadgeToastOnPress: true };
      pronouns = undefined;
      const tmpResult8 = tmp(15469);
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
      items7[1] = closure_9(tmp(15701), obj15);
      const obj16 = { style: tmp3.primaryButtons, maxWidth: tmp4, primaryButton: tmp44Result, secondaryButton: closure_9(Button, obj18) };
      tmp44Result = undefined;
      const tmpResult9 = tmp(15704);
      if (null != application) {
        if (tmpResult1Result) {
          const tmp7Result4 = user(12703);
          result = tmp7Result4.hasInstallConfiguration(application);
        }
        if (result) {
          const obj17 = { application, botUserId: user.id, channel: tmp36, guildId: tmp37 };
          const tmpResult10 = tmp(15705);
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
      Button = tmp7(5926).Button;
      obj19 = { size: "sm", color: tmp(575).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      ChatIcon = tmp7(8069).ChatIcon;
      intl2 = tmp7(1113).intl;
      const intl3 = tmp7(1113).intl;
      formatToPlainString = intl3.formatToPlainString;
      obj20 = { name: tmpResult11.getName(user) };
      zFfSFQ = tmp7(1113).t.zFfSFQ;
      tmpResult11 = tmp(5362);
      items7[2] = closure_9(tmpResult9, obj16);
      items6[1] = closure_10(closure_4, obj13);
      let tmp42Result2 = null;
      if (null != stateFromStores) {
        const items8 = [tmp3.card, ];
        const obj21 = { backgroundColor: containerBackground };
        items8[1] = obj21;
        const obj22 = { style: tmp3.cards, children: items9 };
        const obj23 = { user, currentUser: stateFromStores, guildId: guild_id, style: items8 };
        items9 = [closure_9(tmp(15706), obj23), , , ];
        const obj24 = { userId: user.id, displayProfile, channel, style: items8 };
        items9[1] = closure_9(tmp(15480), obj24);
        let tmp42Result = null != guild_id;
        if (tmp42Result) {
          const obj25 = { userId: user.id, guildId: guild_id, style: items8 };
          const items10 = [closure_9(tmp(7940), obj25), ];
          const obj26 = { user, currentUser: stateFromStores, guildId: guild_id, channelId: id1, showUserProfile: showUserProfileActionSheet, style: items8 };
          id1 = undefined;
          const tmpResult12 = tmp(15771);
          if (channel != null) {
            id1 = channel.id;
          }
          const obj27 = { children: items10 };
          items10[1] = closure_9(tmpResult12, obj26);
          tmp42Result = tmp42(tmp43, obj27);
        }
        items9[2] = tmp42Result;
        const obj28 = { userId: user.id, onBack: showUserProfileActionSheet };
        items9[3] = closure_9(tmp(15774), obj28);
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
