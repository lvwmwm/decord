// Module ID: 7686
// Function ID: 7687
// Name: NonUserBotProfileContent
// Dependencies: [19, 17, 6629, 6572, 21, 7687, 7635, 4988, 4678, 7688, 7676, 7689, 1613, 7673, 7684, 6610, 4527, 7690, 4566, 7702, 10614, 1115, 10777, 2]

// Module 7686 (NonUserBotProfileContent)
import react_native from "react-native" /* 17 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import useProfileThemeDefault from "useProfileTheme" /* 7673 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 7676 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7687 */;
import useBadgesDefault from "useBadges" /* 7688 */;
import useUserProfileOverscrollStylesDefault from "useUserProfileOverscrollStyles" /* 7689 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10614 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10777 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 6629 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let importDefault;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let View = react_native.View;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty } = Constants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
const memoResult = react.memo(function NonUserBotProfileContent(scrollPosition) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let channel;
  let closure_1;
  let contentAnimatedStyle;
  let displayProfile;
  let guildId;
  let guild_id1;
  let handleCopyUsername;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj8;
  let primaryColor;
  let pronouns;
  let secondaryColor;
  let showBlur;
  let theme;
  let tmpResult2;
  let user;
  ({ user, channel, displayProfile } = scrollPosition);
  let trackUserProfileAction;
  importDefault = undefined;
  scrollPosition = scrollPosition.scrollPosition;
  const tmp3 = UserProfileSharedStylesDefault();
  let obj = trackUserProfileAction(7635);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let guild_id;
  const useName = NicknameUtilsDefault.useName;
  NicknameUtilsDefault;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guild_id, id, user);
  const tmpResult = UserUtilsDefault;
  importDefault = tmpResult.useUserTag(user);
  const tmp9 = useBadgesDefault(displayProfile);
  const tmp10 = useUserProfileBannerHeightDefault(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = useUserProfileOverscrollStylesDefault({ scrollPosition, bannerHeight: tmp10 }));
  useUserProfileOverscrollStylesDefault({ scrollPosition, bannerHeight: tmp10 });
  const bottom = tmp(1613)().bottom;
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user, displayProfile }));
  useProfileThemeDefault({ user, displayProfile });
  const tmp4Result = trackUserProfileAction(7684);
  const userProfileColors = tmp4Result.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null == user) {
    return null;
  } else {
    let obj2 = { user, displayProfile, bannerHeight: tmp10, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
    const items = [closure_7(tmp(7690), obj2), ];
    const obj3 = { style: contentAnimatedStyle, children: items1 };
    View = tmp(4566).View;
    const obj4 = { user, guildId, backgroundColor: tmp14, disableStatus: true };
    guildId = undefined;
    const OpenableUserProfileAvatar = tmp4(7702).OpenableUserProfileAvatar;
    const tmp23 = closure_9;
    if (displayProfile != null) {
      guildId = displayProfile.guildId;
    }
    items1 = [closure_7(OpenableUserProfileAvatar, obj4), ];
    const obj5 = { style: items2, children: items3 };
    items2 = [, , ];
    ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp3);
    const obj6 = { paddingTop, paddingBottom: bottom + closure_4 };
    items2[2] = obj6;
    const obj7 = { style: tmp3.primaryInfo, children: closure_7(tmpResult2, obj8) };
    obj8 = {
      user,
      guildId: guild_id1,
      displayName: name,
      pronouns,
      badges: tmp9,
      badgeContainerBackground: containerBackground,
      displayNameAccessibilityHint: intl.string(trackUserProfileAction(1115).t.y5MwJy),
      onPressDisplayName: handleCopyUsername,
      onPressUserTag: handleCopyUsername,
      onPressPronouns() {
          trackUserProfileAction({ action: "PRESS_PRONOUNS" });
          const obj = ToastUtils;
          obj.presentUserPronouns();
        },
      showBadgeToastOnPress: true
    };
    guild_id1 = undefined;
    tmpResult2 = UserProfilePrimaryInfoDefault;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    pronouns = undefined;
    if (displayProfile != null) {
      pronouns = displayProfile.pronouns;
    }
    handleCopyUsername = function handleCopyUsername() {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      const obj = ClipboardUtils;
      obj.copy(closure_1);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    };
    const obj9 = { children: items };
    intl = tmp4(1115).intl;
    items3 = [closure_7(View, obj7), ];
    const obj10 = { style: tmp3.cards, children: closure_7(UserProfileAboutMeCardDefault, obj11) };
    obj11 = { userId: user.id, displayProfile, channel, style: items4 };
    items4 = [tmp3.card, ];
    const obj12 = { backgroundColor: containerBackground };
    items4[1] = obj12;
    items3[1] = closure_7(View, obj10);
    items1[1] = closure_8(View, obj5);
    items[1] = closure_8(View, obj3);
    return closure_8(tmp23, obj9);
  }
});
let result = size.fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default memoResult;
