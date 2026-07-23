// Module ID: 13601
// Function ID: 104512
// Name: UserProfileNameplateEditButton
// Dependencies: [31, 27, 1917, 5512, 482, 33, 4130, 689, 566, 7846, 13602, 4098, 13603, 1934, 13589, 1212, 8229, 1273, 7867, 2]
// Exports: default

// Module 13601 (UserProfileNameplateEditButton)
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
_createForOfIteratorHelperLoose = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
_createForOfIteratorHelperLoose.previewContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.noneIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileNameplateEditButton.tsx");

export default function UserProfileNameplateEditButton(user) {
  let guildId;
  let isFetching;
  let nameplateData;
  let nameplateProduct;
  let nameplateRecord;
  let pendingNameplate;
  user = user.user;
  ({ pendingNameplate, guildId } = user);
  let nameplate;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp2;
  let obj = user(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (closure_2) {
      member = outer1_6.getMember(guildId, user.id);
    }
    return member;
  });
  let obj1 = user(7846);
  obj = { pendingValue: pendingNameplate };
  const collectibles = user.collectibles;
  nameplate = undefined;
  if (null != collectibles) {
    nameplate = collectibles.nameplate;
  }
  obj.userValue = nameplate;
  let nameplate1;
  if (null != stateFromStores) {
    const collectibles2 = stateFromStores.collectibles;
    if (null != collectibles2) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj.guildValue = nameplate1;
  obj.guildId = guildId;
  const profilePreviewValue = obj1.getProfilePreviewValue(obj);
  let obj3 = user(13602);
  let skuId;
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchNameplate = obj3.useFetchNameplate(skuId);
  ({ nameplateProduct, nameplateData, nameplateRecord, isFetching } = fetchNameplate);
  if (null != guildId) {
    let nameplate2;
    if (null != stateFromStores) {
      const collectibles4 = stateFromStores.collectibles;
      if (null != collectibles4) {
        nameplate2 = collectibles4.nameplate;
      }
    }
    nameplate = nameplate2;
  } else {
    const collectibles3 = user.collectibles;
    if (null != collectibles3) {
      nameplate = collectibles3.nameplate;
    }
  }
  if (undefined !== pendingNameplate) {
    nameplate = pendingNameplate;
  }
  const items1 = [user, nameplate, guildId];
  if (isFetching) {
    obj = {};
    const intl4 = user(1212).intl;
    obj.label = intl4.string(user(1212).t.x5CoXR);
    const intl5 = user(1212).intl;
    obj.buttonText = intl5.string(user(1212).t.MKDeyL);
    obj.onPress = NOOP;
    obj.leading = <closure_4 animating size="large" />;
    obj.loading = true;
    obj.disabled = true;
    obj.hideArrow = true;
    return jsx(user(13589).UserProfileEditFormButton, {});
  } else {
    let name;
    if (null != nameplateProduct) {
      name = nameplateProduct.name;
    }
    if (null == name) {
      const intl = user(1212).intl;
      name = intl.string(user(1212).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (tmp2) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = user(1212).intl;
        obj1 = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(user(1212).t.ep5D4i, obj1);
      }
    }
    const obj2 = {};
    const intl3 = user(1212).intl;
    obj2.label = intl3.string(user(1212).t.x5CoXR);
    obj2.buttonText = formatToPlainStringResult;
    obj3 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj3;
    obj2.onPress = tmp10;
    if (null != nameplateData) {
      if (null != nameplateRecord) {
        if (null != nameplateProduct) {
          const obj4 = { style: tmp.previewContainer };
          const obj5 = { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true };
          obj4.children = jsx(guildId(8229), { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true });
          let tmp24 = <closure_5 style={tmp.previewContainer} />;
        }
        obj2.leading = tmp24;
        return tmp17(user(13589).UserProfileEditFormButton, obj2);
      }
    }
    const obj6 = { source: guildId(7867), style: tmp.noneIcon };
    tmp24 = jsx(user(1273).Icon, { source: guildId(7867), style: tmp.noneIcon });
    tmp17 = jsx;
  }
};
