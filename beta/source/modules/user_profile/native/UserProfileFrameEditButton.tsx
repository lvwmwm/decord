// Module ID: 14933
// Function ID: 14934
// Name: UserProfileFrameEditButton
// Dependencies: [32, 19, 17, 7487, 2042, 1089, 21, 580, 4790, 7664, 2031, 8472, 11378, 1977, 4757, 14934, 1984, 1119, 14921, 5828, 9133, 1181, 13515, 2]
// Exports: default

// Module 14933 (UserProfileFrameEditButton)
import nativeDefault from "native" /* 580 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const COLLECTIBLES_PREVIEW_SIZE = fn(7487).COLLECTIBLES_PREVIEW_SIZE;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const NOOP = fn(1089).NOOP;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(4790);
let obj2 = { previewContainer: null, noneIcon: null };
let size = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, paddingVertical: PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.previewContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFrameEditButton.tsx");

export default function UserProfileFrameEditButton(arg0) {
  ({ displayProfile, user } = arg0);
  ({ pendingProfileFrame, guildId } = arg0);
  let userProfileFrame;
  const tmp = closure_11();
  const items = [user(2031).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE];
  const tmp4 = userProfileFrame(user(7664).useSelectedDismissibleContent(items), 2);
  dependencyMap = tmp5;
  const obj = user(7664);
  const obj3 = { pendingValue: pendingProfileFrame, userValue: null, guildValue: null, guildId: null };
  let profileFrame;
  if (displayProfile != null) {
    const _userProfile = displayProfile._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj3.userValue = profileFrame;
  let profileFrame1;
  if (displayProfile != null) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj3.guildValue = profileFrame1;
  obj3.guildId = guildId;
  const profilePreviewValue = user(8472).getProfilePreviewValue(obj3);
  const obj2 = user(8472);
  let skuId;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = user(11378).useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (product != null) {
    const first = product.items[0];
    if (first != null) {
      type = first.type;
    }
  }
  if (type === user(1977).CollectiblesItemType.PROFILE_FRAME) {
    const first1 = product.items[0];
  }
  const tmp2Result = user(11378);
  userProfileFrame = user(8472).useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  const items1 = [userProfileFrame, guildId, user, tmp4[1]];
  let name;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14934, dependencyMap.paths), "Profile Frame", { user, currentProfileFrame: userProfileFrame, guildId });
    closure_2(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = tmp2(1119).intl;
    name = intl.string(tmp2(1119).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userProfileFrame) {
      const intl2 = tmp2(1119).intl;
      const obj4 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1119).t.ep5D4i, obj4);
    }
  }
  if (fetchCollectiblesProduct.isFetching) {
    const obj5 = { label: null, buttonText: null, onPress: null, leading: null, loading: true, disabled: true, hideArrow: true };
    const intl4 = tmp2(1119).intl;
    obj5.label = intl4.string(tmp2(1119).t.GWrZOd);
    const intl5 = tmp2(1119).intl;
    obj5.buttonText = intl5.string(tmp2(1119).t.MKDeyL);
    obj5.onPress = NOOP;
    obj5.leading = tmp18(tmp2(5828).ActivityIndicator, { animating: true, size: "large" });
    let obj6 = obj5;
  } else {
    obj6 = { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null };
    const intl3 = tmp2(1119).intl;
    obj6.label = intl3.string(tmp2(1119).t.GWrZOd);
    const obj7 = { showNewBadge: tmp4[0] === tmp2(2031).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE };
    obj6.labelTrailing = tmp18(tmp2(14921).UserProfileEditFormLabelBadges, obj7);
    obj6.buttonText = formatToPlainStringResult;
    const obj8 = { text: formatToPlainStringResult };
    obj6.accessibilityValue = obj8;
    obj6.onPress = callback;
    if (null != first1) {
      const obj9 = { style: tmp.previewContainer, children: null };
      const obj10 = { profileFrame: first1, previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(580).space.PX_8, previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4, profileBackgroundColor: guildId(580).colors.BACKGROUND_SURFACE_HIGH };
      obj9.children = tmp18(guildId(9133), obj10);
      let tmp18Result = tmp18(View, obj9);
      const tmp23 = guildId(9133);
    } else {
      const obj11 = { source: guildId(13515), style: tmp.noneIcon };
      tmp18Result = tmp18(tmp2(1181).Icon, obj11);
    }
    obj6.leading = tmp18Result;
  }
  return jsx(user(14921).UserProfileEditFormButton, obj6);
};
