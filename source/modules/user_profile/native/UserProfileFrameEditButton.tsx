// Module ID: 13648
// Function ID: 104809
// Name: COLLECTIBLES_PREVIEW_SIZE
// Dependencies: [57, 31, 27, 5510, 1345, 482, 33, 689, 4130, 8744, 5802, 1334, 7935, 8250, 1876, 4098, 13649, 1934, 1212, 13640, 5584, 1273, 8738, 7956, 2]
// Exports: default

// Module 13648 (COLLECTIBLES_PREVIEW_SIZE)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { COLLECTIBLES_PREVIEW_SIZE } from "ARBITRARY_LARGE_OFFSET";
import { ContentDismissActionType } from "ContentDismissActionType";
import { NOOP } from "sum";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const PX_4 = require("_createForOfIteratorHelperLoose").space.PX_4;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, paddingVertical: PX_4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
_createForOfIteratorHelperLoose.previewContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.noneIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.newBadge = { paddingTop: 0, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingTop: 0, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileFrameEditButton.tsx");

export default function UserProfileFrameEditButton(arg0) {
  let displayProfile;
  let guildId;
  let pendingProfileFrame;
  let user;
  ({ displayProfile, user } = arg0);
  ({ pendingProfileFrame, guildId } = arg0);
  let userProfileFrame;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = user(8744);
  const canViewProfileFramesInCollectiblesShop = obj.useCanViewProfileFramesInCollectiblesShop("UserProfileFrameEditButton");
  let obj1 = user(5802);
  const items = [user(1334).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE];
  const tmp3 = userProfileFrame(obj1.useSelectedDismissibleContent(items), 2);
  const dependencyMap = tmp4;
  let obj2 = user(7935);
  obj = { pendingValue: pendingProfileFrame };
  let profileFrame;
  if (null != displayProfile) {
    const _userProfile = displayProfile._userProfile;
    if (null != _userProfile) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj.userValue = profileFrame;
  let profileFrame1;
  if (null != displayProfile) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (null != _guildMemberProfile) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj.guildValue = profileFrame1;
  obj.guildId = guildId;
  const profilePreviewValue = obj2.getProfilePreviewValue(obj);
  let obj4 = user(8250);
  let skuId;
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = obj4.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (null != product) {
    const first = product.items[0];
    if (null != first) {
      type = first.type;
    }
  }
  if (type === user(1876).CollectiblesItemType.PROFILE_FRAME) {
    const first1 = product.items[0];
  }
  let obj5 = user(7935);
  userProfileFrame = obj5.useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  const items1 = [userProfileFrame, guildId, user, tmp3[1]];
  if (canViewProfileFramesInCollectiblesShop) {
    let name;
    if (null != product) {
      name = product.name;
    }
    if (null == name) {
      const intl = user(1212).intl;
      name = intl.string(user(1212).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (null != guildId) {
      formatToPlainStringResult = name;
      if (null == userProfileFrame) {
        const intl2 = user(1212).intl;
        obj = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(user(1212).t.ep5D4i, obj);
      }
    }
    if (fetchCollectiblesProduct.isFetching) {
      obj1 = {};
      const intl5 = user(1212).intl;
      obj1.label = intl5.string(user(1212).t.GWrZOd);
      const intl6 = user(1212).intl;
      obj1.buttonText = intl6.string(user(1212).t.MKDeyL);
      obj1.onPress = NOOP;
      obj1.leading = jsx(user(5584).ActivityIndicator, { animating: true, size: "large" });
      obj1.loading = true;
      obj1.disabled = true;
      obj1.hideArrow = true;
      obj2 = obj1;
    } else {
      obj2 = {};
      const intl3 = user(1212).intl;
      obj2.label = intl3.string(user(1212).t.GWrZOd);
      let tmp26;
      if (tmp3[0] === user(1334).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE) {
        const obj3 = { "aria-hidden": true };
        obj4 = {};
        const intl4 = user(1212).intl;
        obj4.text = intl4.string(user(1212).t.y2b7CA);
        obj4.style = tmp.newBadge;
        obj3.children = jsx(user(1273).TextBadge, {});
        tmp26 = <View aria-hidden />;
      }
      obj2.labelTrailing = tmp26;
      obj2.buttonText = formatToPlainStringResult;
      obj5 = { text: formatToPlainStringResult };
      obj2.accessibilityValue = obj5;
      obj2.onPress = tmp14;
      if (null != first1) {
        const obj6 = { style: tmp.previewContainer };
        const obj7 = { profileFrame: first1, previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(689).space.PX_8, previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4, profileBackgroundColor: guildId(689).colors.BACKGROUND_SURFACE_HIGH };
        obj6.children = jsx(guildId(8738), { profileFrame: first1, previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(689).space.PX_8, previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4, profileBackgroundColor: guildId(689).colors.BACKGROUND_SURFACE_HIGH });
        let tmp35 = <View style={tmp.previewContainer} />;
        const tmp40 = guildId(8738);
      } else {
        const obj8 = { source: guildId(7956), style: tmp.noneIcon };
        tmp35 = jsx(user(1273).Icon, { source: guildId(7956), style: tmp.noneIcon });
      }
      obj2.leading = tmp35;
    }
    return jsx(user(13640).UserProfileEditFormButton, obj2);
  } else {
    return null;
  }
};
