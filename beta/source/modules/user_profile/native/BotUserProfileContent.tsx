// Module ID: 12545
// Function ID: 12546
// Name: BotUserProfileContent
// Dependencies: [19, 17, 1378, 6630, 6573, 21, 7691, 7680, 7693, 1619, 7639, 504, 4989, 4680, 6730, 7692, 10600, 7677, 7688, 6611, 4530, 7694, 4570, 12546, 7706, 10587, 4801, 10599, 1987, 10603, 1127, 12569, 12572, 8716, 12573, 5282, 5386, 588, 5040, 4850, 12574, 10741, 6607, 12624, 12627, 2]

// Module 12545 (BotUserProfileContent)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ToastUtils from "ToastUtils" /* 4530 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4850 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6573 */;
import ClipboardUtils from "ClipboardUtils" /* 6611 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1378 */;
import Constants from "Constants" /* 6630 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
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
  let closure_3;
  let contentAnimatedStyle;
  let currentUser;
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
  ({ displayProfile, showUserProfileActionSheet } = user);
  let trackUserProfileAction;
  react = undefined;
  let guild_id;
  const tmp = channel;
  let tmp2 = trackUserProfileAction;
  ({ disableMessage, scrollPosition } = user);
  const tmp3 = channel(trackUserProfileAction[6])();
  const tmp5 = channel(trackUserProfileAction[7])(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(trackUserProfileAction[8])({ scrollPosition, bannerHeight: tmp5 }));
  channel(trackUserProfileAction[8])({ scrollPosition, bannerHeight: tmp5 });
  const bottom = channel(trackUserProfileAction[9])().bottom;
  let obj = user(trackUserProfileAction[10]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(trackUserProfileAction[11]);
  let items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let guildId;
  const useName = channel(trackUserProfileAction[12]).useName;
  channel(trackUserProfileAction[12]);
  const tmp4 = ACTION_SHEET_MAX_WIDTH;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guildId, id, user);
  const tmpResult = tmp(tmp2[13]);
  react = tmpResult.useUserTag(user);
  if (displayProfile != null) {
    application = displayProfile.application;
  }
  guild_id = undefined;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const items1 = [guild_id, user];
  const memo = react.useMemo(() => {
    if (null != guild_id) {
      if (null != user) {
        const items = [tmp2.id];
        const obj = {};
        obj[tmp] = items;
      }
      return {};
    }
  }, items1);
  const tmp7Result = user(tmp2[14]);
  const subscribeGuildMembers = tmp7Result.useSubscribeGuildMembers(memo, "BotUserProfileContent");
  const tmp16 = tmp(tmp2[15])(displayProfile);
  const tmp17 = tmp(tmp2[16])(user.id);
  ({ primaryColor, theme, secondaryColor } = tmp(tmp2[17])({ user, displayProfile }));
  tmp(tmp2[17])({ user, displayProfile });
  const tmp7Result3 = user(tmp2[18]);
  const userProfileColors = tmp7Result3.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null != user) {
    if (null != stateFromStores) {
      let obj3 = { user, displayProfile, bannerHeight: tmp5, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      const items2 = [closure_9(tmp(tmp2[21]), obj3), , ];
      let obj4 = { style: items3, children: closure_9(tmp(tmp2[23]), obj5) };
      items3 = [tmp3.bannerButtons, bannerAnimatedStyle];
      View = tmp(tmp2[22]).View;
      obj5 = { user, currentUser: stateFromStores, application, displayProfile, channel };
      items2[1] = closure_9(View, obj4);
      const obj6 = { style: contentAnimatedStyle, children: items4 };
      const View2 = tmp(tmp2[22]).View;
      const obj7 = { user, guildId: guildId1, backgroundColor: tmp20, statusStyle: obj8 };
      guildId1 = undefined;
      const OpenableUserProfileAvatar = tmp7(tmp2[24]).OpenableUserProfileAvatar;
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
        onPressTruncatedStatus() {
              let id;
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              ActionSheetActionCreatorsDefault;
              const obj = { user, guildId: guild_id, channelId: id };
              id = undefined;
              const tmp2 = asyncRequire(10599, dependencyMap.paths);
              if (channel != null) {
                id = channel.id;
              }
              openLazy(tmp2, "UserProfileCustomStatusActionSheet", obj, "stack");
            },
        style: null,
        emojiOnlyStyle: null
      };
      ({ customStatusBubble: obj9.style, emojiOnlyCustomStatusBubble: obj9.emojiOnlyStyle } = tmp3);
      items6 = [closure_9(tmp(tmp2[25]), obj12), , ];
      const obj13 = { style: tmp3.primaryInfo, children: items7 };
      const obj14 = { user, guildId: guild_id, displayName: name, pronouns, badges: tmp16, badgeContainerBackground: containerBackground, displayNameAccessibilityHint: intl.string(user(tmp2[30]).t.y5MwJy), onPressDisplayName: handleCopyUsername, onPressUserTag: handleCopyUsername, onPressPronouns: handlePressPronouns, showBadgeToastOnPress: true };
      pronouns = undefined;
      const tmpResult6 = tmp(tmp2[29]);
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      handleCopyUsername = function handleCopyUsername() {
        trackUserProfileAction({ action: "COPY_USERNAME" });
        const obj = ClipboardUtils;
        obj.copy(closure_3);
        const obj2 = ToastUtils;
        const result = obj2.presentUsernameCopied();
      };
      handlePressPronouns = function handlePressPronouns() {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        const obj = ToastUtils;
        obj.presentUserPronouns();
      };
      intl = tmp7(tmp2[30]).intl;
      items7 = [closure_9(tmpResult6, obj14), , ];
      const obj15 = { user };
      items7[1] = closure_9(tmp(tmp2[31]), obj15);
      const obj16 = { style: tmp3.primaryButtons, maxWidth: tmp4, primaryButton: tmp38Result, secondaryButton: closure_9(Button, obj18) };
      tmp38Result = undefined;
      const tmpResult7 = tmp(tmp2[32]);
      if (null != application) {
        const tmp7Result4 = user(tmp2[33]);
        if (tmp7Result4.canInstallApplication(application)) {
          const obj17 = { application, botUserId: user.id, channel: tmp30, guildId: tmp31 };
          const tmpResult8 = tmp(tmp2[34]);
          tmp38Result = tmp38(tmpResult8, obj17);
          tmp30 = channel;
          tmp31 = guild_id;
        }
      }
      obj18 = {
        icon: closure_9(ChatIcon, obj19),
        text: intl2.string(user(tmp2[30]).t.zROXEV),
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
              const obj4 = { recipientIds: user.id };
              obj3.openPrivateChannel(obj4);
            }
      };
      Button = tmp7(tmp2[35]).Button;
      obj19 = { size: "sm", color: tmp(tmp2[37]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      ChatIcon = tmp7(tmp2[36]).ChatIcon;
      intl2 = tmp7(tmp2[30]).intl;
      const intl3 = tmp7(tmp2[30]).intl;
      formatToPlainString = intl3.formatToPlainString;
      obj20 = { name: tmpResult9.getName(user) };
      zFfSFQ = tmp7(tmp2[30]).t.zFfSFQ;
      tmpResult9 = tmp(tmp2[13]);
      items7[2] = closure_9(tmpResult7, obj16);
      items6[1] = closure_10(guild_id, obj13);
      let tmp36Result2 = null;
      if (null != stateFromStores) {
        const items8 = [tmp3.card, ];
        const obj21 = { backgroundColor: containerBackground };
        items8[1] = obj21;
        const obj22 = { style: tmp3.cards, children: items9 };
        const obj23 = { user, currentUser: stateFromStores, guildId: guild_id, style: items8 };
        items9 = [closure_9(tmp(tmp2[40]), obj23), , , ];
        const obj24 = { userId: user.id, displayProfile, channel, style: items8 };
        items9[1] = closure_9(tmp(tmp2[41]), obj24);
        let tmp36Result = null != guild_id;
        if (tmp36Result) {
          const obj25 = { userId: user.id, guildId: guild_id, style: items8 };
          const items10 = [closure_9(tmp(tmp2[42]), obj25), ];
          const obj26 = { user, currentUser: stateFromStores, guildId: guild_id, channelId: id1, showUserProfile: showUserProfileActionSheet, style: items8 };
          id1 = undefined;
          const tmpResult10 = tmp(tmp2[43]);
          if (channel != null) {
            id1 = channel.id;
          }
          const obj27 = { children: items10 };
          items10[1] = closure_9(tmpResult10, obj26);
          tmp36Result = tmp36(tmp37, obj27);
        }
        items9[2] = tmp36Result;
        const obj28 = { userId: user.id, onBack: showUserProfileActionSheet };
        items9[3] = closure_9(tmp(tmp2[44]), obj28);
        tmp36Result2 = tmp36(tmp23, obj22);
      }
      const obj29 = { children: items2 };
      items6[2] = tmp36Result2;
      items4[1] = closure_10(guild_id, obj10);
      items2[2] = closure_10(View2, obj6);
      return closure_10(closure_11, obj29);
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/user_profile/native/BotUserProfileContent.tsx");

export default memoResult;
