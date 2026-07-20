// Module ID: 13467
// Function ID: 102251
// Name: COLLECTIBLES_PREVIEW_SIZE
// Dependencies: []
// Exports: default

// Module 13467 (COLLECTIBLES_PREVIEW_SIZE)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const COLLECTIBLES_PREVIEW_SIZE = arg1(dependencyMap[3]).COLLECTIBLES_PREVIEW_SIZE;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const NOOP = arg1(dependencyMap[5]).NOOP;
const jsx = arg1(dependencyMap[6]).jsx;
const PX_4 = importDefault(dependencyMap[7]).space.PX_4;
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, paddingVertical: PX_4, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED, justifyContent: "center", alignItems: "center", borderRadius: importDefault(dependencyMap[7]).radii.xs, overflow: "hidden" };
obj.previewContainer = obj;
obj.noneIcon = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
const obj1 = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
obj.newBadge = { paddingTop: 0, marginLeft: importDefault(dependencyMap[7]).space.PX_4 };
let closure_11 = obj.createStyles(obj);
const obj2 = { paddingTop: 0, marginLeft: importDefault(dependencyMap[7]).space.PX_4 };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/user_profile/native/UserProfileFrameEditButton.tsx");

export default function UserProfileFrameEditButton(arg0) {
  let displayProfile;
  let guildId;
  let pendingProfileFrame;
  let user;
  ({ displayProfile, user } = arg0);
  const arg1 = user;
  ({ pendingProfileFrame, guildId } = arg0);
  const importDefault = guildId;
  let callback;
  const tmp = callback2();
  let obj = arg1(dependencyMap[9]);
  const canViewProfileFramesInCollectiblesShop = obj.useCanViewProfileFramesInCollectiblesShop("UserProfileFrameEditButton");
  let obj1 = arg1(dependencyMap[10]);
  const items = [arg1(dependencyMap[11]).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE];
  const tmp3 = callback(obj1.useSelectedDismissibleContent(items), 2);
  const dependencyMap = tmp4;
  let obj2 = arg1(dependencyMap[12]);
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
  let obj4 = arg1(dependencyMap[13]);
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
  if (type === arg1(dependencyMap[14]).CollectiblesItemType.PROFILE_FRAME) {
    const first1 = product.items[0];
  }
  let obj5 = arg1(dependencyMap[12]);
  let userProfileFrame = obj5.useUserProfileFrame({ user, guildId });
  if (undefined !== pendingProfileFrame) {
    userProfileFrame = pendingProfileFrame;
  }
  callback = userProfileFrame;
  const items1 = [userProfileFrame, guildId, user, tmp3[1]];
  if (canViewProfileFramesInCollectiblesShop) {
    let name;
    if (null != product) {
      name = product.name;
    }
    if (null == name) {
      const intl = arg1(dependencyMap[18]).intl;
      name = intl.string(arg1(dependencyMap[18]).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (null != guildId) {
      formatToPlainStringResult = name;
      if (null == userProfileFrame) {
        const intl2 = arg1(dependencyMap[18]).intl;
        obj = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[18]).t.ep5D4i, obj);
      }
    }
    if (fetchCollectiblesProduct.isFetching) {
      obj1 = {};
      const intl5 = arg1(dependencyMap[18]).intl;
      obj1.label = intl5.string(arg1(dependencyMap[18]).t.GWrZOd);
      const intl6 = arg1(dependencyMap[18]).intl;
      obj1.buttonText = intl6.string(arg1(dependencyMap[18]).t.MKDeyL);
      obj1.onPress = NOOP;
      obj1.leading = jsx(arg1(dependencyMap[20]).ActivityIndicator, {});
      obj1.loading = true;
      obj1.disabled = true;
      obj1.hideArrow = true;
      obj2 = obj1;
    } else {
      obj2 = {};
      const intl3 = arg1(dependencyMap[18]).intl;
      obj2.label = intl3.string(arg1(dependencyMap[18]).t.GWrZOd);
      let tmp26;
      if (tmp3[0] === arg1(dependencyMap[11]).DismissibleContent.PROFILE_FRAME_USER_PROFILE_NEW_BADGE) {
        const obj3 = { aria-hidden: true };
        obj4 = {};
        const intl4 = arg1(dependencyMap[18]).intl;
        obj4.text = intl4.string(arg1(dependencyMap[18]).t.y2b7CA);
        obj4.style = tmp.newBadge;
        obj3.children = jsx(arg1(dependencyMap[21]).TextBadge, obj4);
        tmp26 = <View {...obj3} />;
      }
      obj2.labelTrailing = tmp26;
      obj2.buttonText = formatToPlainStringResult;
      obj5 = { text: formatToPlainStringResult };
      obj2.accessibilityValue = obj5;
      obj2.onPress = tmp14;
      if (null != first1) {
        const obj6 = { style: tmp.previewContainer };
        const obj7 = { profileFrame: first1, previewWidth: COLLECTIBLES_PREVIEW_SIZE - 2 * importDefault(dependencyMap[7]).space.PX_8, previewHeight: COLLECTIBLES_PREVIEW_SIZE - 2 * PX_4, profileBackgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
        obj6.children = jsx(importDefault(dependencyMap[22]), obj7);
        let tmp35 = <View {...obj6} />;
        const tmp40 = importDefault(dependencyMap[22]);
      } else {
        const obj8 = { source: importDefault(dependencyMap[23]), style: tmp.noneIcon };
        tmp35 = jsx(arg1(dependencyMap[21]).Icon, obj8);
      }
      obj2.leading = tmp35;
    }
    return jsx(arg1(dependencyMap[19]).UserProfileEditFormButton, obj2);
  } else {
    return null;
  }
};
