// Module ID: 14187
// Function ID: 14188
// Name: UserProfileFrameEditButton
// Dependencies: [32, 19, 17, 6629, 2042, 1085, 21, 576, 4836, 6806, 2029, 7611, 10508, 1974, 4800, 14188, 1981, 1115, 14175, 5889, 8285, 1177, 12745, 2]
// Exports: default

// Module 14187 (UserProfileFrameEditButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Constants2 from "Constants" /* 6629 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let obj2;
let size;
const View = react_native.View;
const COLLECTIBLES_PREVIEW_SIZE = Constants2.COLLECTIBLES_PREVIEW_SIZE;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
let createStyles = createStyles_mod;
let obj = { previewContainer: size, noneIcon: obj2 };
size = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, paddingVertical: PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFrameEditButton.tsx");

export default function UserProfileFrameEditButton(arg0) {
  let closure_2;
  let displayProfile;
  let first2;
  let guildId;
  let intl3;
  let intl4;
  let intl5;
  let obj4;
  let obj6;
  let pendingProfileFrame;
  let profileFrame;
  let profileFrame1;
  let tmp22Result;
  let user;
  ({ displayProfile, user } = arg0);
  ({ pendingProfileFrame, guildId } = arg0);
  let userProfileFrame;
  const tmp = closure_11();
  const useSelectedDismissibleContent = user(6806).useSelectedDismissibleContent;
  const items = [];
  user(6806);
  items[0] = user(2029).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
  const tmp5 = userProfileFrame(useSelectedDismissibleContent(items), 2);
  dependencyMap = tmp7;
  const first = tmp5[0];
  let obj = { pendingValue: pendingProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId };
  profileFrame = undefined;
  const getProfilePreviewValue = user(7611).getProfilePreviewValue;
  user(7611);
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  profileFrame1 = undefined;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj);
  let skuId;
  const useFetchCollectiblesProduct = tmp2(10508).useFetchCollectiblesProduct;
  user(10508);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  const isFetching = fetchCollectiblesProduct.isFetching;
  if (product != null) {
    const first1 = product.items[0];
    if (first1 != null) {
      type = first1.type;
    }
  }
  if (type === user(1974).CollectiblesItemType.PROFILE_FRAME) {
    first2 = product.items[0];
  }
  const tmp2Result2 = user(7611);
  userProfileFrame = tmp2Result2.useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  const items1 = [userProfileFrame, guildId, user, tmp5[1]];
  let name;
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { user, currentProfileFrame: userProfileFrame, guildId };
    obj.openLazy(asyncRequire(14188, dependencyMap.paths), "Profile Frame", obj2);
    closure_2(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = tmp2(1115).intl;
    name = intl.string(tmp2(1115).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userProfileFrame) {
      const intl2 = tmp2(1115).intl;
      let obj2 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t.ep5D4i, obj2);
    }
  }
  const UserProfileEditFormButton = tmp2(14175).UserProfileEditFormButton;
  if (isFetching) {
    const obj3 = { label: intl4.string(user(1115).t.GWrZOd), buttonText: intl5.string(user(1115).t.MKDeyL), onPress: NOOP, leading: null, loading: true, disabled: true, hideArrow: true };
    intl4 = tmp2(1115).intl;
    intl5 = tmp2(1115).intl;
    obj4 = obj3;
  } else {
    obj4 = { label: intl3.string(tmp2(1115).t.GWrZOd), labelTrailing: null, buttonText: formatToPlainStringResult, accessibilityValue: obj6, onPress: callback, leading: tmp22Result };
    intl3 = tmp2(1115).intl;
    ({ showNewBadge: first === user(2029).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE });
    const UserProfileEditFormLabelBadges = tmp2(14175).UserProfileEditFormLabelBadges;
    obj6 = { text: formatToPlainStringResult };
    if (null != first2) {
      const obj7 = { style: tmp.previewContainer, children: null };
      ({ profileFrame: first2, previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(576).space.PX_8, previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4, profileBackgroundColor: guildId(576).colors.BACKGROUND_SURFACE_HIGH });
      guildId(8285);
      tmp22Result = tmp22(View, obj7);
    } else {
      const obj9 = { source: guildId(12745), style: tmp.noneIcon };
      const Icon = tmp2(1177).Icon;
      tmp22Result = tmp22(Icon, obj9);
    }
  }
  return <UserProfileEditFormButton {...obj4} />;
};
