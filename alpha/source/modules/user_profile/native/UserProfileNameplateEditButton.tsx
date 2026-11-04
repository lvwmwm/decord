// Module ID: 16741
// Function ID: 16742
// Name: UserProfileNameplateEditButton
// Dependencies: [19, 17, 5053, 7513, 1083, 21, 5141, 575, 504, 8878, 16742, 5382, 16743, 2123, 16713, 1113, 9661, 1187, 15300, 2]
// Exports: default

// Module 16741 (UserProfileNameplateEditButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import Constants2 from "Constants" /* 7513 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
  const getProfilePreviewValue = user(8878).getProfilePreviewValue;
  user(8878);
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
  const useFetchNameplate = tmp3(16742).useFetchNameplate;
  user(16742);
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
    const UserProfileEditFormButton2 = tmp3(16713).UserProfileEditFormButton;
    const intl4 = tmp3(1113).intl;
    const intl5 = tmp3(1113).intl;
    return <UserProfileEditFormButton2 label={intl4.string(user(1113).t.x5CoXR)} buttonText={intl5.string(user(1113).t.MKDeyL)} onPress={NOOP} leading={null} loading disabled hideArrow />;
  } else {
    let name;
    if (nameplateProduct != null) {
      name = nameplateProduct.name;
    }
    if (name == null) {
      const intl = tmp3(1113).intl;
      name = intl.string(tmp3(1113).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (null != guildId) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = tmp3(1113).intl;
        const obj4 = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(tmp3(1113).t.ep5D4i, obj4);
      }
    }
    const obj5 = { label: intl3.string(user(1113).t.x5CoXR), buttonText: formatToPlainStringResult, accessibilityValue: obj6, onPress: tmp14, leading: null };
    const UserProfileEditFormButton = tmp3(16713).UserProfileEditFormButton;
    intl3 = tmp3(1113).intl;
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
    const obj9 = { source: guildId(15300), style: tmp.noneIcon };
    const Icon = tmp3(1187).Icon;
    tmp17Result = tmp17(Icon, obj9);
  }
};
