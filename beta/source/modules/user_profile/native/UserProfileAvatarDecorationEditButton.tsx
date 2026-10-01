// Module ID: 14182
// Function ID: 14183
// Name: UserProfileAvatarDecorationEditButton
// Dependencies: [19, 17, 2108, 6629, 1085, 21, 4836, 576, 504, 7704, 7611, 10508, 7602, 1115, 14175, 8275, 1177, 12745, 2]
// Exports: default

// Module 14182 (UserProfileAvatarDecorationEditButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 6629 */;
import avatar_decorations_AvatarDecorationUtils from "avatar_decorations/AvatarDecorationUtils" /* 7602 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const COLLECTIBLES_PREVIEW_SIZE = Constants2.COLLECTIBLES_PREVIEW_SIZE;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { previewContainer: size, noneIcon: obj2 };
size = { position: "relative", height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default function UserProfileAvatarDecorationEditButton(user) {
  let avatarDecoration;
  let closure_3;
  let intl3;
  let intl4;
  let intl5;
  let isFetching;
  let isTryItOut;
  let obj5;
  let obj6;
  let pendingAvatarDecoration;
  let product;
  let tmp18Result;
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  let userAvatarDecoration;
  const tmp = closure_10();
  react = tmp2;
  let obj = user(isTryItOut[8]);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (closure_3) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    return member;
  });
  let obj2 = { pendingValue: pendingAvatarDecoration, userValue: user.avatarDecoration, guildValue: avatarDecoration, guildId };
  avatarDecoration = undefined;
  const tmp7 = guildId(isTryItOut[9]);
  const getProfilePreviewValue = user(isTryItOut[10]).getProfilePreviewValue;
  user(isTryItOut[10]);
  if (stateFromStores != null) {
    avatarDecoration = stateFromStores.avatarDecoration;
  }
  const tmp7Result = tmp7(getProfilePreviewValue(obj2));
  let skuId;
  const useFetchCollectiblesProduct = tmp3(tmp4[11]).useFetchCollectiblesProduct;
  user(isTryItOut[11]);
  if (tmp7Result != null) {
    skuId = tmp7Result.skuId;
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct(skuId);
  ({ product, isFetching } = fetchCollectiblesProduct);
  const tmp3Result2 = user(isTryItOut[10]);
  userAvatarDecoration = tmp3Result2.useUserAvatarDecoration({ user, guildId });
  if (undefined !== pendingAvatarDecoration) {
    userAvatarDecoration = pendingAvatarDecoration;
  }
  const items1 = [user, guildId, userAvatarDecoration, isTryItOut];
  let name;
  const callback = react.useCallback(() => {
    const obj = avatar_decorations_AvatarDecorationUtils;
    const obj2 = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
    const result = obj.openAvatarDecorationActionSheet(obj2);
  }, items1);
  if (product != null) {
    name = product.name;
  }
  if (name == null) {
    const intl = tmp3(tmp4[13]).intl;
    name = intl.string(tmp3(tmp4[13]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userAvatarDecoration) {
      const intl2 = tmp3(tmp4[13]).intl;
      const obj3 = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[13]).t.ep5D4i, obj3);
    }
  }
  const UserProfileEditFormButton = tmp3(tmp4[14]).UserProfileEditFormButton;
  if (isFetching) {
    const obj4 = { label: intl4.string(user(isTryItOut[13]).t["7v0T9P"]), buttonText: intl5.string(user(isTryItOut[13]).t.MKDeyL), onPress: NOOP, leading: null, loading: true, disabled: true, hideArrow: true };
    intl4 = tmp3(tmp4[13]).intl;
    intl5 = tmp3(tmp4[13]).intl;
    obj5 = obj4;
  } else {
    obj5 = { label: intl3.string(tmp3(tmp4[13]).t["7v0T9P"]), buttonText: formatToPlainStringResult, accessibilityValue: obj6, onPress: callback, leading: tmp18Result };
    intl3 = tmp3(tmp4[13]).intl;
    obj6 = { text: formatToPlainStringResult };
    if (null != product) {
      const obj7 = { style: tmp.previewContainer, children: null };
      ({ avatarDecoration: tmp7Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(isTryItOut[7]).space.PX_4, animate: false });
      guildId(isTryItOut[15]);
      tmp18Result = tmp18(closure_5, obj7);
    } else {
      const obj9 = { source: guildId(isTryItOut[17]), style: tmp.noneIcon };
      const Icon = tmp3(tmp4[16]).Icon;
      tmp18Result = tmp18(Icon, obj9);
    }
  }
  return <UserProfileEditFormButton {...obj5} />;
};
