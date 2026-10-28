// Module ID: 16164
// Function ID: 16165
// Name: UserProfileNameplateEditButton
// Dependencies: [19, 17, 4916, 7340, 1095, 21, 5004, 587, 504, 8692, 16165, 5246, 16166, 1999, 16136, 1125, 9442, 1199, 14756, 2]
// Exports: default

// Module 16164 (UserProfileNameplateEditButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1095 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import Constants2 from "Constants" /* 7340 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 4916 */;
import createStyles_mod from "createStyles" /* 5004 */;
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
  const getProfilePreviewValue = user(8692).getProfilePreviewValue;
  user(8692);
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
  const useFetchNameplate = tmp3(16165).useFetchNameplate;
  user(16165);
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
    const UserProfileEditFormButton2 = tmp3(16136).UserProfileEditFormButton;
    const intl4 = tmp3(1125).intl;
    const intl5 = tmp3(1125).intl;
    return <UserProfileEditFormButton2 label={intl4.string(user(1125).t.x5CoXR)} buttonText={intl5.string(user(1125).t.MKDeyL)} onPress={NOOP} leading={null} loading disabled hideArrow />;
  } else {
    let name;
    if (nameplateProduct != null) {
      name = nameplateProduct.name;
    }
    if (name == null) {
      const intl = tmp3(1125).intl;
      name = intl.string(tmp3(1125).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (null != guildId) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = tmp3(1125).intl;
        const obj4 = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(tmp3(1125).t.ep5D4i, obj4);
      }
    }
    const obj5 = { label: intl3.string(user(1125).t.x5CoXR), buttonText: formatToPlainStringResult, accessibilityValue: obj6, onPress: tmp14, leading: null };
    const UserProfileEditFormButton = tmp3(16136).UserProfileEditFormButton;
    intl3 = tmp3(1125).intl;
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
    const obj9 = { source: guildId(14756), style: tmp.noneIcon };
    const Icon = tmp3(1199).Icon;
    tmp17Result = tmp17(Icon, obj9);
  }
};
