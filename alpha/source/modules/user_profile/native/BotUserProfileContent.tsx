// Module ID: 14807
// Function ID: 14808
// Name: BotUserProfileContent
// Dependencies: [19, 17, 1383, 7377, 5273, 21, 8814, 8803, 8816, 1625, 8761, 504, 6041, 5068, 7482, 8815, 11410, 8800, 8811, 7358, 5711, 8817, 5095, 14808, 8828, 11395, 5258, 11409, 1994, 11412, 1113, 14833, 14836, 11737, 14837, 5634, 8643, 575, 6744, 7485, 14838, 11491, 7354, 14900, 14903, 2]

// Module 14807 (BotUserProfileContent)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5273 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7485 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 7377 */;
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
  const tmp3 = channel(8814)();
  const tmp5 = channel(8803)(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(8816)({ scrollPosition, bannerHeight: tmp5 }));
  channel(8816)({ scrollPosition, bannerHeight: tmp5 });
  const bottom = channel(1625)().bottom;
  let obj = user(8761);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(504);
  let items = [guild_id];
  const stateFromStores = obj2.useStateFromStores(items, () => guild_id.getCurrentUser());
  let guildId;
  const useName = channel(6041).useName;
  channel(6041);
  const tmp4 = ACTION_SHEET_MAX_WIDTH;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guildId, id, user);
  const tmpResult = tmp(5068);
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
  const tmp7Result = user(7482);
  const subscribeGuildMembers = tmp7Result.useSubscribeGuildMembers(memo, "BotUserProfileContent");
  const tmp16 = tmp(8815)(displayProfile);
  const tmp17 = tmp(11410)(user.id);
  ({ primaryColor, theme, secondaryColor } = tmp(8800)({ user, displayProfile }));
  tmp(8800)({ user, displayProfile });
  const tmp7Result3 = user(8811);
  const userProfileColors = tmp7Result3.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null != user) {
    if (null != stateFromStores) {
      let obj3 = { user, displayProfile, bannerHeight: tmp5, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      const items2 = [closure_9(tmp(8817), obj3), , ];
      let obj4 = { style: items3, children: closure_9(tmp(14808), obj5) };
      items3 = [tmp3.bannerButtons, bannerAnimatedStyle];
      View = tmp(5095).View;
      obj5 = { user, currentUser: stateFromStores, application, displayProfile, channel };
      items2[1] = closure_9(View, obj4);
      const obj6 = { style: contentAnimatedStyle, children: items4 };
      const View2 = tmp(5095).View;
      const obj7 = { user, guildId: guildId1, backgroundColor: tmp20, statusStyle: obj8 };
      guildId1 = undefined;
      const OpenableUserProfileAvatar = tmp7(8828).OpenableUserProfileAvatar;
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
              const tmp2 = asyncRequire(11409, dependencyMap.paths);
              if (channel != null) {
                id = channel.id;
              }
              openLazy(tmp2, "UserProfileCustomStatusActionSheet", obj, "stack");
            },
        style: null,
        emojiOnlyStyle: null
      };
      ({ customStatusBubble: obj9.style, emojiOnlyCustomStatusBubble: obj9.emojiOnlyStyle } = tmp3);
      items6 = [closure_9(tmp(11395), obj12), , ];
      const obj13 = { style: tmp3.primaryInfo, children: items7 };
      const obj14 = { user, guildId: guild_id, displayName: name, pronouns, badges: tmp16, badgeContainerBackground: containerBackground, displayNameAccessibilityHint: intl.string(user(1113).t.y5MwJy), onPressDisplayName: handleCopyUsername, onPressUserTag: handleCopyUsername, onPressPronouns: handlePressPronouns, showBadgeToastOnPress: true };
      pronouns = undefined;
      const tmpResult6 = tmp(11412);
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
      items7 = [closure_9(tmpResult6, obj14), , ];
      const obj15 = { user };
      items7[1] = closure_9(tmp(14833), obj15);
      const obj16 = { style: tmp3.primaryButtons, maxWidth: tmp4, primaryButton: tmp38Result, secondaryButton: closure_9(Button, obj18) };
      tmp38Result = undefined;
      const tmpResult7 = tmp(14836);
      if (null != application) {
        const tmp7Result4 = user(11737);
        if (tmp7Result4.canInstallApplication(application)) {
          const obj17 = { application, botUserId: user.id, channel: tmp30, guildId: tmp31 };
          const tmpResult8 = tmp(14837);
          tmp38Result = tmp38(tmpResult8, obj17);
          tmp30 = channel;
          tmp31 = guild_id;
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
      Button = tmp7(5634).Button;
      obj19 = { size: "sm", color: tmp(575).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      ChatIcon = tmp7(8643).ChatIcon;
      intl2 = tmp7(1113).intl;
      const intl3 = tmp7(1113).intl;
      formatToPlainString = intl3.formatToPlainString;
      obj20 = { name: tmpResult9.getName(user) };
      zFfSFQ = tmp7(1113).t.zFfSFQ;
      tmpResult9 = tmp(5068);
      items7[2] = closure_9(tmpResult7, obj16);
      items6[1] = closure_10(closure_4, obj13);
      let tmp36Result2 = null;
      if (null != stateFromStores) {
        const items8 = [tmp3.card, ];
        const obj21 = { backgroundColor: containerBackground };
        items8[1] = obj21;
        const obj22 = { style: tmp3.cards, children: items9 };
        const obj23 = { user, currentUser: stateFromStores, guildId: guild_id, style: items8 };
        items9 = [closure_9(tmp(14838), obj23), , , ];
        const obj24 = { userId: user.id, displayProfile, channel, style: items8 };
        items9[1] = closure_9(tmp(11491), obj24);
        let tmp36Result = null != guild_id;
        if (tmp36Result) {
          const obj25 = { userId: user.id, guildId: guild_id, style: items8 };
          const items10 = [closure_9(tmp(7354), obj25), ];
          const obj26 = { user, currentUser: stateFromStores, guildId: guild_id, channelId: id1, showUserProfile: showUserProfileActionSheet, style: items8 };
          id1 = undefined;
          const tmpResult10 = tmp(14900);
          if (channel != null) {
            id1 = channel.id;
          }
          const obj27 = { children: items10 };
          items10[1] = closure_9(tmpResult10, obj26);
          tmp36Result = tmp36(tmp37, obj27);
        }
        items9[2] = tmp36Result;
        const obj28 = { userId: user.id, onBack: showUserProfileActionSheet };
        items9[3] = closure_9(tmp(14903), obj28);
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
