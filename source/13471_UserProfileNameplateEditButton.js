// Module ID: 13471
// Function ID: 102278
// Name: UserProfileNameplateEditButton
// Dependencies: []
// Exports: default

// Module 13471 (UserProfileNameplateEditButton)
let closure_3 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const COLLECTIBLES_PREVIEW_SIZE = arg1(dependencyMap[3]).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = arg1(dependencyMap[4]).NOOP;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: importDefault(dependencyMap[7]).radii.xs, overflow: "hidden" };
obj.previewContainer = obj;
const tmp2 = arg1(dependencyMap[1]);
obj.noneIcon = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
let closure_9 = obj.createStyles(obj);
const obj1 = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/user_profile/native/UserProfileNameplateEditButton.tsx");

export default function UserProfileNameplateEditButton(user) {
  let guildId;
  let isFetching;
  let nameplateData;
  let nameplateProduct;
  let nameplateRecord;
  let pendingNameplate;
  user = user.user;
  const arg1 = user;
  ({ pendingNameplate, guildId } = user);
  const importDefault = guildId;
  let closure_3;
  const tmp = callback();
  const dependencyMap = tmp2;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (tmp2) {
      member = member.getMember(guildId, user.id);
      const tmp2 = member;
    }
    return member;
  });
  let obj1 = arg1(dependencyMap[9]);
  obj = { pendingValue: pendingNameplate };
  const collectibles = user.collectibles;
  let nameplate;
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
  let obj3 = arg1(dependencyMap[10]);
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
  closure_3 = nameplate;
  const items1 = [user, nameplate, guildId];
  if (isFetching) {
    obj = {};
    const intl4 = arg1(dependencyMap[15]).intl;
    obj.label = intl4.string(arg1(dependencyMap[15]).t.x5CoXR);
    const intl5 = arg1(dependencyMap[15]).intl;
    obj.buttonText = intl5.string(arg1(dependencyMap[15]).t.MKDeyL);
    obj.onPress = NOOP;
    obj.leading = <closure_4 />;
    obj.loading = true;
    obj.disabled = true;
    obj.hideArrow = true;
    return jsx(arg1(dependencyMap[14]).UserProfileEditFormButton, obj);
  } else {
    let name;
    if (null != nameplateProduct) {
      name = nameplateProduct.name;
    }
    if (null == name) {
      const intl = arg1(dependencyMap[15]).intl;
      name = intl.string(arg1(dependencyMap[15]).t.PoWNfe);
    }
    let formatToPlainStringResult = name;
    if (tmp2) {
      formatToPlainStringResult = name;
      if (null == nameplate) {
        const intl2 = arg1(dependencyMap[15]).intl;
        obj1 = { label: name };
        formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[15]).t.ep5D4i, obj1);
      }
    }
    const obj2 = {};
    const intl3 = arg1(dependencyMap[15]).intl;
    obj2.label = intl3.string(arg1(dependencyMap[15]).t.x5CoXR);
    obj2.buttonText = formatToPlainStringResult;
    obj3 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj3;
    obj2.onPress = tmp10;
    if (null != nameplateData) {
      if (null != nameplateRecord) {
        if (null != nameplateProduct) {
          const obj4 = { style: tmp.previewContainer };
          const obj5 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, nameplate: nameplateData };
          obj4.children = jsx(importDefault(dependencyMap[16]), obj5);
          let tmp24 = <closure_5 {...obj4} />;
        }
        obj2.leading = tmp24;
        return tmp17(arg1(dependencyMap[14]).UserProfileEditFormButton, obj2);
      }
    }
    const obj6 = { source: importDefault(dependencyMap[18]), style: tmp.noneIcon };
    tmp24 = jsx(arg1(dependencyMap[17]).Icon, obj6);
    const tmp17 = jsx;
  }
};
