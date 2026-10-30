// Module ID: 16453
// Function ID: 16454
// Name: UserProfileNameplateEditButton
// Dependencies: [19, 17, 4921, 7371, 1083, 21, 5009, 575, 504, 8729, 16454, 5253, 16455, 1995, 16425, 1114, 9492, 1188, 15035, 2]
// Exports: default

// Module 16453 (UserProfileNameplateEditButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Constants2 from "Constants" /* 7371 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const COLLECTIBLES_PREVIEW_SIZE = Constants2.COLLECTIBLES_PREVIEW_SIZE;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { previewContainer: size, noneIcon: obj2 };
size = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNameplateEditButton.tsx");

export default function UserProfileNameplateEditButton(user) {
  let closure_2;
  let guildId;
  let intl3;
  let isFetching;
  let nameplate1;
  let nameplate2;
  let nameplateData;
  let nameplateProduct;
  let nameplateRecord;
  let obj6;
  let pendingNameplate;
  user = user.user;
  ({ pendingNameplate, guildId } = user);
  let nameplate;
  const tmp = closure_9();
  dependencyMap = tmp2;
  let obj = user(504);
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (closure_2) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    return member;
  });
  let obj2 = { pendingValue: pendingNameplate, userValue: nameplate1, guildValue: nameplate2, guildId };
  const collectibles = user.collectibles;
  nameplate1 = undefined;
  const getProfilePreviewValue = user(8729).getProfilePreviewValue;
  user(8729);
  if (collectibles != null) {
    nameplate1 = collectibles.nameplate;
  }
  nameplate2 = undefined;
  if (stateFromStores != null) {
    const collectibles2 = stateFromStores.collectibles;
    if (collectibles2 != null) {
      nameplate2 = collectibles2.nameplate;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj2);
  let skuId;
  const useFetchNameplate = tmp3(16454).useFetchNameplate;
  user(16454);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchNameplate = useFetchNameplate(skuId);
  ({ nameplateProduct, nameplateData, nameplateRecord, isFetching } = fetchNameplate);
  if (null != guildId) {
    let nameplate3;
    if (stateFromStores != null) {
      const collectibles4 = stateFromStores.collectibles;
      if (collectibles4 != null) {
        nameplate3 = collectibles4.nameplate;
      }
    }
    nameplate = nameplate3;
  } else {
    const collectibles3 = user.collectibles;
    if (collectibles3 != null) {
      nameplate = collectibles3.nameplate;
    }
  }
  if (undefined !== pendingNameplate) {
    nameplate = pendingNameplate;
  }
  const items1 = [user, nameplate, guildId];
  if (isFetching) {
    const UserProfileEditFormButton2 = tmp3(16425).UserProfileEditFormButton;
    const intl4 = tmp3(1114).intl;
    const intl5 = tmp3(1114).intl;
    return <UserProfileEditFormButton2 label={intl4.string(user(1114).t.x5CoXR)} buttonText={intl5.string(user(1114).t.MKDeyL)} onPress={NOOP} leading={null} loading disabled hideArrow />;
  } else {
    let name;
    if (nameplateProduct != null) {
      name = nameplateProduct.name;
    }
    if (name == null) {
      const intl = tmp3(1114).intl;
      name = intl.string(tmp3(1114).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (null != guildId) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = tmp3(1114).intl;
        const obj4 = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(tmp3(1114).t.ep5D4i, obj4);
      }
    }
    const obj5 = { label: intl3.string(user(1114).t.x5CoXR), buttonText: formatToPlainStringResult, accessibilityValue: obj6, onPress: tmp14, leading: null };
    const UserProfileEditFormButton = tmp3(16425).UserProfileEditFormButton;
    intl3 = tmp3(1114).intl;
    obj6 = { text: formatToPlainStringResult };
    if (null != nameplateData) {
      if (null != nameplateRecord) {
        let tmp17Result;
        if (null != nameplateProduct) {
          const obj7 = { style: tmp.previewContainer, children: null };
          tmp17Result = tmp17(closure_5, obj7);
        }
        obj5.leading = tmp17Result;
        return <UserProfileEditFormButton {...obj5} />;
      }
    }
    const obj9 = { source: guildId(15035), style: tmp.noneIcon };
    const Icon = tmp3(1188).Icon;
    tmp17Result = tmp17(Icon, obj9);
  }
};
