// Module ID: 14197
// Function ID: 14198
// Name: BotUserProfileContent
// Dependencies: [19, 17, 1392, 7289, 5252, 21, 8712, 8701, 8714, 1633, 8659, 504, 5975, 5018, 7393, 8713, 11048, 8698, 8709, 7270, 5648, 8715, 5038, 14198, 8726, 11031, 5196, 11047, 2002, 11051, 1128, 14222, 14225, 11359, 14226, 5230, 8528, 587, 6657, 7396, 14227, 11132, 7266, 14281, 14284, 2]

// Module 14197 (BotUserProfileContent)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5252 */;
import ToastUtils from "ToastUtils" /* 5648 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import ClipboardUtils from "ClipboardUtils" /* 7270 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7396 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 7289 */;
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
  let application;
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
  let tmp30;
  let tmp31;
  let tmp38Result;
  let tmpResult9;
  let zFfSFQ;
  user = user.user;
  const channel = user.channel;
  ({ displayProfile, showUserProfileActionSheet, navigationReplace: dependencyMap } = user);
  let closure_4;
  let guild_id;
  const tmp = channel;
  let tmp2 = dependencyMap;
  ({ disableMessage, scrollPosition } = user);
  const tmp3 = channel(8712)();
  const tmp5 = channel(8701)(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(8714)({ scrollPosition, bannerHeight: tmp5 }));
  channel(8714)({ scrollPosition, bannerHeight: tmp5 });
  const bottom = channel(1633)().bottom;
  let obj = user(8659);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(504);
  let items = [guild_id];
  const stateFromStores = obj2.useStateFromStores(items, () => guild_id.getCurrentUser());
  let guildId;
  const useName = channel(5975).useName;
  channel(5975);
  const tmp4 = ACTION_SHEET_MAX_WIDTH;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guildId, id, user);
  const tmpResult = tmp(5018);
  closure_4 = tmpResult.useUserTag(user);
  if (displayProfile != null) {
    application = displayProfile.application;
  }
  guild_id = undefined;
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
  const tmp7Result = user(7393);
  const subscribeGuildMembers = tmp7Result.useSubscribeGuildMembers(memo, "BotUserProfileContent");
  const tmp16 = tmp(8713)(displayProfile);
  const tmp17 = tmp(11048)(user.id);
  ({ primaryColor, theme, secondaryColor } = tmp(8698)({ user, displayProfile }));
  tmp(8698)({ user, displayProfile });
  const tmp7Result3 = user(8709);
  const userProfileColors = tmp7Result3.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null != user) {
    if (null != stateFromStores) {
      let obj3 = { user, displayProfile, bannerHeight: tmp5, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      const items2 = [closure_9(tmp(8715), obj3), , ];
      let obj4 = { style: items3, children: closure_9(tmp(14198), obj5) };
      items3 = [tmp3.bannerButtons, bannerAnimatedStyle];
      View = tmp(5038).View;
      obj5 = { user, currentUser: stateFromStores, application, displayProfile, channel };
      items2[1] = closure_9(View, obj4);
      const obj6 = { style: contentAnimatedStyle, children: items4 };
      const View2 = tmp(5038).View;
      const obj7 = { user, guildId: guildId1, backgroundColor: tmp20, statusStyle: obj8 };
      guildId1 = undefined;
      const OpenableUserProfileAvatar = tmp7(8726).OpenableUserProfileAvatar;
      if (displayProfile != null) {
        guildId1 = displayProfile.guildId;
      }
      obj8 = { backgroundColor: tmp21 };
      items4 = [closure_9(OpenableUserProfileAvatar, obj7), ];
      const items5 = [, , ];
      ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
      let num = 0;
      if (null == tmp17) {
        num = closure_7;
      }
      const obj10 = { style: items5, children: items6 };
      const obj11 = { paddingTop: num, paddingBottom: bottom + closure_6 };
      items5[2] = obj11;
      const obj12 = {
        customStatusActivity: tmp17,
        hasCustomProfileTheme: null != primaryColor,
        onPressTruncatedStatus: function handlePressTruncatedStatus() {
              let id;
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              ActionSheetActionCreatorsDefault;
              const obj = { user, guildId: guild_id, channelId: id };
              id = undefined;
              const tmp2 = asyncRequire(11047, dependencyMap.paths);
              if (channel != null) {
                id = channel.id;
              }
              openLazy(tmp2, "UserProfileCustomStatusActionSheet", obj, "stack");
            },
        style: null,
        emojiOnlyStyle: null
      };
      ({ customStatusBubble: obj9.style, emojiOnlyCustomStatusBubble: obj9.emojiOnlyStyle } = tmp3);
      items6 = [closure_9(tmp(11031), obj12), , ];
      const obj13 = { style: tmp3.primaryInfo, children: items7 };
      const obj14 = { user, guildId: guild_id, displayName: name, pronouns, badges: tmp16, badgeContainerBackground: containerBackground, displayNameAccessibilityHint: intl.string(user(1128).t.y5MwJy), onPressDisplayName: handleCopyUsername, onPressUserTag: handleCopyUsername, onPressPronouns: handlePressPronouns, showBadgeToastOnPress: true };
      pronouns = undefined;
      const tmpResult6 = tmp(11051);
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
      intl = tmp7(1128).intl;
      items7 = [closure_9(tmpResult6, obj14), , ];
      const obj15 = { user };
      items7[1] = closure_9(tmp(14222), obj15);
      const obj16 = { style: tmp3.primaryButtons, maxWidth: tmp4, primaryButton: tmp38Result, secondaryButton: closure_9(Button, obj18) };
      tmp38Result = undefined;
      const tmpResult7 = tmp(14225);
      if (null != application) {
        const tmp7Result4 = user(11359);
        if (tmp7Result4.canInstallApplication(application)) {
          const obj17 = { application, botUserId: user.id, channel: tmp30, guildId: tmp31 };
          const tmpResult8 = tmp(14226);
          tmp38Result = tmp38(tmpResult8, obj17);
          tmp30 = channel;
          tmp31 = guild_id;
        }
      }
      obj18 = {
        icon: closure_9(ChatIcon, obj19),
        text: intl2.string(user(1128).t.zROXEV),
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
      Button = tmp7(5230).Button;
      obj19 = { size: "sm", color: tmp(587).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      ChatIcon = tmp7(8528).ChatIcon;
      intl2 = tmp7(1128).intl;
      const intl3 = tmp7(1128).intl;
      formatToPlainString = intl3.formatToPlainString;
      obj20 = { name: tmpResult9.getName(user) };
      zFfSFQ = tmp7(1128).t.zFfSFQ;
      tmpResult9 = tmp(5018);
      items7[2] = closure_9(tmpResult7, obj16);
      items6[1] = closure_10(closure_4, obj13);
      let tmp36Result2 = null;
      if (null != stateFromStores) {
        const items8 = [tmp3.card, ];
        const obj21 = { backgroundColor: containerBackground };
        items8[1] = obj21;
        const obj22 = { style: tmp3.cards, children: items9 };
        const obj23 = { user, currentUser: stateFromStores, guildId: guild_id, style: items8 };
        items9 = [closure_9(tmp(14227), obj23), , , ];
        const obj24 = { userId: user.id, displayProfile, channel, style: items8 };
        items9[1] = closure_9(tmp(11132), obj24);
        let tmp36Result = null != guild_id;
        if (tmp36Result) {
          const obj25 = { userId: user.id, guildId: guild_id, style: items8 };
          const items10 = [closure_9(tmp(7266), obj25), ];
          const obj26 = { user, currentUser: stateFromStores, guildId: guild_id, channelId: id1, showUserProfile: showUserProfileActionSheet, style: items8 };
          id1 = undefined;
          const tmpResult10 = tmp(14281);
          if (channel != null) {
            id1 = channel.id;
          }
          const obj27 = { children: items10 };
          items10[1] = closure_9(tmpResult10, obj26);
          tmp36Result = tmp36(tmp37, obj27);
        }
        items9[2] = tmp36Result;
        const obj28 = { userId: user.id, onBack: showUserProfileActionSheet };
        items9[3] = closure_9(tmp(14284), obj28);
        tmp36Result2 = tmp36(tmp23, obj22);
      }
      const obj29 = { children: items2 };
      items6[2] = tmp36Result2;
      items4[1] = closure_10(closure_4, obj10);
      items2[2] = closure_10(View2, obj6);
      return closure_10(closure_11, obj29);
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/user_profile/native/BotUserProfileContent.tsx");

export default memoResult;
