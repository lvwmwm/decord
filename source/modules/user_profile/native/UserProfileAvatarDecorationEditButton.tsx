// Module ID: 13643
// Function ID: 104777
// Name: COLLECTIBLES_PREVIEW_SIZE
// Dependencies: [31, 27, 1917, 5510, 482, 33, 4130, 689, 566, 7968, 7935, 8250, 7927, 1212, 13640, 7960, 1273, 7956, 2]
// Exports: default

// Module 13643 (COLLECTIBLES_PREVIEW_SIZE)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { COLLECTIBLES_PREVIEW_SIZE } from "ARBITRARY_LARGE_OFFSET";
import { NOOP } from "sum";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ ActivityIndicator: closure_4, View: closure_5 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "relative", height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
_createForOfIteratorHelperLoose.previewContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.noneIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default function UserProfileAvatarDecorationEditButton(user) {
  let isTryItOut;
  let pendingAvatarDecoration;
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  let userAvatarDecoration;
  const tmp = _createForOfIteratorHelperLoose();
  const React = tmp2;
  let obj = user(isTryItOut[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (result) {
      member = outer1_6.getMember(guildId, user.id);
    }
    return member;
  });
  let obj1 = user(isTryItOut[10]);
  obj = { pendingValue: pendingAvatarDecoration, userValue: user.avatarDecoration };
  let avatarDecoration;
  if (null != stateFromStores) {
    avatarDecoration = stateFromStores.avatarDecoration;
  }
  obj.guildValue = avatarDecoration;
  obj.guildId = guildId;
  const tmp4Result = guildId(isTryItOut[9])(obj1.getProfilePreviewValue(obj));
  let obj3 = user(isTryItOut[11]);
  let skuId;
  if (null != tmp4Result) {
    skuId = tmp4Result.skuId;
  }
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let obj4 = user(isTryItOut[10]);
  userAvatarDecoration = obj4.useUserAvatarDecoration({ user, guildId });
  if (undefined !== pendingAvatarDecoration) {
    userAvatarDecoration = pendingAvatarDecoration;
  }
  const items1 = [user, guildId, userAvatarDecoration, isTryItOut];
  let name;
  const callback = React.useCallback(() => {
    let obj = user(isTryItOut[12]);
    obj = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
    const result = obj.openAvatarDecorationActionSheet(obj);
  }, items1);
  if (null != product) {
    name = product.name;
  }
  if (null == name) {
    const intl = user(isTryItOut[13]).intl;
    name = intl.string(user(isTryItOut[13]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userAvatarDecoration) {
      const intl2 = user(isTryItOut[13]).intl;
      obj = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(user(isTryItOut[13]).t.ep5D4i, obj);
    }
  }
  if (fetchCollectiblesProduct.isFetching) {
    obj1 = {};
    const intl4 = user(isTryItOut[13]).intl;
    obj1.label = intl4.string(user(isTryItOut[13]).t["7v0T9P"]);
    const intl5 = user(isTryItOut[13]).intl;
    obj1.buttonText = intl5.string(user(isTryItOut[13]).t.MKDeyL);
    obj1.onPress = NOOP;
    obj1.leading = <userAvatarDecoration animating size="large" />;
    obj1.loading = true;
    obj1.disabled = true;
    obj1.hideArrow = true;
    let obj2 = obj1;
  } else {
    obj2 = {};
    const intl3 = user(isTryItOut[13]).intl;
    obj2.label = intl3.string(user(isTryItOut[13]).t["7v0T9P"]);
    obj2.buttonText = formatToPlainStringResult;
    obj3 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj3;
    obj2.onPress = callback;
    if (null != product) {
      obj4 = { style: tmp.previewContainer };
      const obj5 = { avatarDecoration: tmp4Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(isTryItOut[7]).space.PX_4, animate: false };
      obj4.children = jsx(guildId(isTryItOut[15]), { avatarDecoration: tmp4Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * guildId(isTryItOut[7]).space.PX_4, animate: false });
      let tmp24 = <closure_5 style={tmp.previewContainer} />;
      const tmp29 = guildId(isTryItOut[15]);
    } else {
      const obj6 = { source: guildId(isTryItOut[17]), style: tmp.noneIcon };
      tmp24 = jsx(user(isTryItOut[16]).Icon, { source: guildId(isTryItOut[17]), style: tmp.noneIcon });
    }
    obj2.leading = tmp24;
  }
  return jsx(user(isTryItOut[14]).UserProfileEditFormButton, obj2);
};
