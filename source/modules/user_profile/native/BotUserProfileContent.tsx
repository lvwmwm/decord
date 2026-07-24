// Module ID: 11919
// Function ID: 92262
// Dependencies: [31, 27, 1849, 5510, 5188, 33, 8282, 8545, 8554, 1557, 8310, 566, 4319, 3969, 5687, 8298, 11920, 8280, 8284, 5490, 3830, 8555, 3991, 11921, 8307, 11925, 4098, 11935, 1934, 8557, 1212, 11940, 11943, 8235, 11944, 4543, 4629, 689, 4337, 4140, 11945, 11914, 5485, 11997, 12000, 2]

// Module 11919
import importAllResult from "UserProfileMutualGuilds";
import { View } from "UserProfileCustomStatusActionSheet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "canInstallApplication";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_6, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const memoResult = importAllResult.memo(function BotUserProfileContent(user) {
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let contentAnimatedStyle;
  let disableMessage;
  let displayProfile;
  let scrollPosition;
  let secondaryColor;
  let showBlur;
  let showUserProfileActionSheet;
  let theme;
  user = user.user;
  const channel = user.channel;
  ({ displayProfile, showUserProfileActionSheet } = user);
  let trackUserProfileAction;
  let importAllResult;
  let guild_id;
  function handleCopyUsername() {
    trackUserProfileAction({ action: "COPY_USERNAME" });
    user(trackUserProfileAction[19]).copy(closure_3);
    const obj = user(trackUserProfileAction[19]);
    const result = user(trackUserProfileAction[20]).presentUsernameCopied();
  }
  ({ disableMessage, scrollPosition } = user);
  const tmp = channel(trackUserProfileAction[6])();
  const tmp2 = channel(trackUserProfileAction[7])(ACTION_SHEET_MAX_WIDTH);
  const tmp3 = channel(trackUserProfileAction[8])({ scrollPosition, bannerHeight: tmp2 });
  const bannerAnimatedStyle = tmp3.bannerAnimatedStyle;
  ({ bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp3);
  let obj = user(trackUserProfileAction[10]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = user(trackUserProfileAction[11]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getCurrentUser());
  let obj2 = channel(trackUserProfileAction[12]);
  let guildId;
  if (null != displayProfile) {
    guildId = displayProfile.guildId;
  }
  let id;
  if (null != channel) {
    id = channel.id;
  }
  const name = obj2.useName(guildId, id, user);
  let obj3 = channel(trackUserProfileAction[13]);
  importAllResult = obj3.useUserTag(user);
  if (null != displayProfile) {
    const application = displayProfile.application;
  }
  guild_id = undefined;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const items1 = [guild_id, user];
  const memo = importAllResult.useMemo(() => {
    if (null != guild_id) {
      if (null != user) {
        const obj = {};
        const items = [user.id];
        obj[guild_id] = items;
      }
      return {};
    }
  }, items1);
  let obj4 = user(trackUserProfileAction[14]);
  const subscribeGuildMembers = obj4.useSubscribeGuildMembers(memo, "BotUserProfileContent");
  const tmp12 = channel(trackUserProfileAction[16])(user.id);
  const tmp13 = channel(trackUserProfileAction[17])({ user, displayProfile });
  const primaryColor = tmp13.primaryColor;
  ({ theme, secondaryColor } = tmp13);
  let obj5 = user(trackUserProfileAction[18]);
  const userProfileColors = obj5.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null != user) {
    if (null != stateFromStores) {
      obj = {};
      obj = { user, displayProfile, bannerHeight: tmp2, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      const items2 = [callback(channel(trackUserProfileAction[21]), obj), , ];
      obj1 = {};
      const items3 = [tmp.bannerButtons, bannerAnimatedStyle];
      obj1.style = items3;
      obj2 = { user, application, channel };
      obj1.children = callback(channel(trackUserProfileAction[23]), obj2);
      items2[1] = callback(channel(trackUserProfileAction[22]).View, obj1);
      obj3 = { style: contentAnimatedStyle };
      obj4 = { user };
      let guildId1;
      if (null != displayProfile) {
        guildId1 = displayProfile.guildId;
      }
      let tmp18;
      if (null != guildId1) {
        tmp18 = guildId1;
      }
      obj4.guildId = tmp18;
      obj4.backgroundColor = tmp15;
      obj5 = { backgroundColor: tmp16 };
      obj4.statusStyle = obj5;
      const items4 = [callback(user(trackUserProfileAction[24]).OpenableUserProfileAvatar, obj4), ];
      const obj6 = {};
      const items5 = [, , ];
      ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp);
      const obj7 = {};
      let num = 0;
      if (null == tmp12) {
        num = closure_7;
      }
      obj7.paddingTop = num;
      obj7.paddingBottom = channel(trackUserProfileAction[9])().bottom + closure_6;
      items5[2] = obj7;
      obj6.style = items5;
      const obj8 = {
        customStatusActivity: tmp12,
        hasCustomProfileTheme: null != primaryColor,
        onPressTruncatedStatus(arg0) {
              let obj = channel(trackUserProfileAction[26]);
              obj = { user, guildId: guild_id };
              let id;
              if (null != channel) {
                id = channel.id;
              }
              obj.channelId = id;
              obj.openLazy(user(trackUserProfileAction[28])(trackUserProfileAction[27], trackUserProfileAction.paths), "UserProfileCustomStatusActionSheet", obj, "stack");
            }
      };
      ({ customStatusBubble: obj10.style, emojiOnlyCustomStatusBubble: obj10.emojiOnlyStyle } = tmp);
      const items6 = [callback(channel(trackUserProfileAction[25]), obj8), , ];
      const obj9 = { style: tmp.primaryInfo };
      const obj10 = { user, guildId: guild_id, displayName: name };
      let pronouns;
      if (null != displayProfile) {
        pronouns = displayProfile.pronouns;
      }
      obj10.pronouns = pronouns;
      obj10.badges = tmp11;
      obj10.badgeContainerBackground = containerBackground;
      const intl = user(trackUserProfileAction[30]).intl;
      obj10.displayNameAccessibilityHint = intl.string(user(trackUserProfileAction[30]).t.y5MwJy);
      obj10.onPressDisplayName = handleCopyUsername;
      obj10.onPressUserTag = handleCopyUsername;
      obj10.onPressPronouns = function handlePressPronouns() {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        user(trackUserProfileAction[20]).presentUserPronouns();
      };
      obj10.showBadgeToastOnPress = true;
      const items7 = [callback(channel(trackUserProfileAction[29]), obj10), , ];
      const obj11 = { user };
      items7[1] = callback(channel(trackUserProfileAction[31]), obj11);
      const obj12 = { style: tmp.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH };
      let tmp38Result;
      const tmp19 = closure_10;
      const tmp20 = guild_id;
      const tmp22 = callback;
      const tmp25 = closure_10;
      const tmp26 = guild_id;
      const tmp27 = channel(trackUserProfileAction[29]);
      const tmp31 = callback;
      const tmp66 = closure_11;
      const tmp67 = callback;
      if (null != application) {
        let obj14 = user(trackUserProfileAction[33]);
        if (obj14.canInstallApplication(application)) {
          const obj13 = { application, botUserId: user.id };
          let tmp42;
          if (null != channel) {
            tmp42 = channel;
          }
          obj13.channel = tmp42;
          let tmp43;
          if (null != guild_id) {
            tmp43 = guild_id;
          }
          obj13.guildId = tmp43;
          tmp38Result = callback(channel(trackUserProfileAction[34]), obj13);
          const tmp38 = callback;
          const tmp41 = channel(trackUserProfileAction[34]);
        }
      }
      obj12.primaryButton = tmp38Result;
      obj14 = {};
      const obj15 = { size: "sm", color: channel(trackUserProfileAction[37]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      obj14.icon = callback(user(trackUserProfileAction[36]).ChatIcon, obj15);
      const intl2 = user(trackUserProfileAction[30]).intl;
      obj14.text = intl2.string(user(trackUserProfileAction[30]).t.zROXEV);
      obj14.variant = "secondary";
      obj14.disabled = disableMessage;
      obj14.grow = true;
      const intl3 = user(trackUserProfileAction[30]).intl;
      const obj16 = {};
      let obj19 = channel(trackUserProfileAction[13]);
      obj16.name = obj19.getName(user);
      obj14.accessibilityHint = intl3.formatToPlainString(user(trackUserProfileAction[30]).t.zFfSFQ, obj16);
      obj14.onPress = function onPress() {
        trackUserProfileAction({ action: "SEND_MESSAGE" });
        let obj = channel(trackUserProfileAction[26]);
        obj.hideActionSheet();
        channel(trackUserProfileAction[38]).popAll();
        const obj2 = channel(trackUserProfileAction[38]);
        obj = { recipientIds: user.id };
        channel(trackUserProfileAction[39]).openPrivateChannel(obj);
      };
      obj12.secondaryButton = callback(user(trackUserProfileAction[35]).Button, obj14);
      items7[2] = tmp31(channel(trackUserProfileAction[32]), obj12);
      obj9.children = items7;
      items6[1] = tmp25(tmp26, obj9);
      let tmp49Result = null;
      if (null != stateFromStores) {
        const items8 = [tmp.card, ];
        const obj17 = { backgroundColor: containerBackground };
        items8[1] = obj17;
        const obj18 = { style: tmp.cards };
        obj19 = { user, currentUser: stateFromStores, guildId: guild_id, style: items8 };
        const items9 = [callback(channel(trackUserProfileAction[40]), obj19), , , ];
        const obj20 = { userId: user.id, displayProfile, channel, style: items8 };
        items9[1] = callback(channel(trackUserProfileAction[41]), obj20);
        let tmp55Result = null != guild_id;
        if (tmp55Result) {
          const obj21 = {};
          const obj22 = { userId: user.id, guildId: guild_id, style: items8 };
          const items10 = [callback(channel(trackUserProfileAction[42]), obj22), ];
          const obj23 = { user, currentUser: stateFromStores, guildId: guild_id };
          let id1;
          if (null != channel) {
            id1 = channel.id;
          }
          obj23.channelId = id1;
          obj23.showUserProfile = showUserProfileActionSheet;
          obj23.style = items8;
          items10[1] = callback(channel(trackUserProfileAction[43]), obj23);
          obj21.children = items10;
          tmp55Result = closure_10(closure_11, obj21);
          const tmp55 = closure_10;
          const tmp56 = closure_11;
          const tmp57 = callback;
          const tmp60 = channel(trackUserProfileAction[43]);
        }
        items9[2] = tmp55Result;
        const obj24 = { userId: user.id, style: items8, onBack: showUserProfileActionSheet };
        items9[3] = callback(channel(trackUserProfileAction[44]), obj24);
        obj18.children = items9;
        tmp49Result = closure_10(guild_id, obj18);
        const tmp49 = closure_10;
        const tmp50 = guild_id;
      }
      items6[2] = tmp49Result;
      obj6.children = items6;
      items4[1] = tmp19(tmp20, obj6);
      obj3.children = items4;
      items2[2] = closure_10(channel(trackUserProfileAction[22]).View, obj3);
      obj.children = items2;
      return closure_10(tmp66, obj);
    }
  }
  return null;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/BotUserProfileContent.tsx");

export default memoResult;
