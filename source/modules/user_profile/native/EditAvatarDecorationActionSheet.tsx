// Module ID: 7828
// Function ID: 62399
// Name: EditAvatarDecorationInner
// Dependencies: []
// Exports: default

// Module 7828 (EditAvatarDecorationInner)
function EditAvatarDecorationInner(user) {
  let selectedAvatarDecoration;
  let setSelectedAvatarDecoration;
  user = user.user;
  const arg1 = user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = user);
  const importDefault = setSelectedAvatarDecoration;
  const guildId = user.guildId;
  const dependencyMap = guildId;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let closure_3 = flag;
  let obj = arg1(dependencyMap[21]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = arg1(dependencyMap[22]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  let obj2 = arg1(dependencyMap[22]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = member.getMember(guildId, user.id);
    }
    return member;
  });
  let obj3 = arg1(dependencyMap[24]);
  obj = { pendingValue: selectedAvatarDecoration };
  let avatarDecoration;
  if (null != user) {
    avatarDecoration = user.avatarDecoration;
  }
  obj.userValue = avatarDecoration;
  let avatarDecoration1;
  if (null != stateFromStores1) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj.guildValue = avatarDecoration1;
  obj.guildId = guildId;
  const profilePreviewValue = obj3.getProfilePreviewValue(obj);
  const items2 = [setSelectedAvatarDecoration, guildId, flag];
  obj = {};
  obj1 = {};
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return callback(user(guildId[25]).EditAvatarDecorationRow, { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut: flag });
  }, items2);
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  obj1.previewSkuId = skuId;
  obj1.user = user;
  obj1.guildId = guildId;
  obj1.pendingAvatarSrc = user.pendingAvatarSrc;
  const items3 = [closure_10(AvatarDecorationSectionPreview, obj1), , ];
  obj2 = { user };
  let skuId1;
  const tmp10 = closure_12;
  const tmp11 = closure_10;
  const tmp12 = AvatarDecorationSectionPreview;
  const tmp14 = closure_10;
  const tmp3 = importDefault(dependencyMap[23])();
  const tmp9 = closure_11;
  if (null != profilePreviewValue) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj2.previewSkuId = skuId1;
  const intl = arg1(dependencyMap[19]).intl;
  obj2.nitroJoinCTA = intl.string(arg1(dependencyMap[19]).t.FyBDiY);
  const intl2 = arg1(dependencyMap[19]).intl;
  obj2.nitroUpgradeCTA = intl2.string(arg1(dependencyMap[19]).t.e1UiOa);
  items3[1] = tmp14(importDefault(dependencyMap[26]), obj2);
  obj3 = { sections: tmp3 };
  let skuId2;
  if (null != selectedAvatarDecoration) {
    skuId2 = selectedAvatarDecoration.skuId;
  }
  obj3.selectedSkuId = skuId2;
  obj3.renderRow = callback;
  obj3.isFetching = stateFromStores;
  items3[2] = closure_10(arg1(dependencyMap[27]).EditCollectiblesPickerList, obj3);
  obj.children = items3;
  return tmp9(tmp10, obj);
}
function AvatarDecorationSectionPreview(previewSkuId) {
  let guildId;
  let pendingAvatarSrc;
  let user;
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  const tmp2 = importDefault(dependencyMap[28])(previewSkuId.previewSkuId);
  const product = tmp2.product;
  const arg1 = product;
  const purchase = tmp2.purchase;
  const importDefault = purchase;
  const items = [purchase, product];
  const memo = React.useMemo(() => {
    let first;
    if (null != product) {
      first = product.items[0];
    }
    if (null == first) {
      let first1;
      if (null != purchase) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp6 = null;
    if (callback(first)) {
      tmp6 = first;
    }
    return tmp6;
  }, items);
  let obj = { style: callback4().avatarDisplayContainer };
  if (null != memo) {
    const intl2 = arg1(dependencyMap[19]).intl;
    obj = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[19]).t.Do2lxE, obj);
  } else {
    const intl = arg1(dependencyMap[19]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[19]).t.7hRBmC);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.accessibilityRole = "image";
  obj.accessible = true;
  obj = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo };
  const tmp = callback4();
  const tmp4 = closure_11;
  const tmp5 = View;
  obj.size = arg1(dependencyMap[30]).AvatarSizes.EDIT_AVATAR_DECORATION;
  const items1 = [callback2(importDefault(dependencyMap[29]), obj), callback2(importDefault(dependencyMap[31]), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  obj.children = items1;
  return tmp4(tmp5, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const isAvatarDecorationRecord = arg1(dependencyMap[4]).isAvatarDecorationRecord;
let closure_8 = importDefault(dependencyMap[5]);
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
obj.bounceOffset = { 1532122209: "row", 1663392805: "center", 1364614395: "flex-start", 996279293: 40, -936095340: null };
const tmp2 = arg1(dependencyMap[7]);
obj.title = { color: importDefault(dependencyMap[9]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.avatarDisplayContainer = { Visa: "ILLO_GREEN_50", MasterCard: 0.25, Discover: "ILLO_GREEN_50", American Express: 0.3, name: "ILLO_NITRO_BLUE" };
let closure_13 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[9]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default function EditAvatarDecorationActionSheet(arg0) {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let isTryItOut;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  const tmp = callback4();
  let obj = { analyticsLocations, isTryItOut, guildId };
  const tmp2 = importDefault(dependencyMap[10])(obj);
  const setPendingAvatarDecoration = tmp2.setPendingAvatarDecoration;
  const arg1 = setPendingAvatarDecoration;
  let obj1 = arg1(dependencyMap[11]);
  obj = { userId: user.id, image: tmp2.pendingAvatar };
  const pendingAvatarSrc = obj1.getPendingAvatarSrc(obj);
  const tmp4 = callback(React.useState(currentAvatarDecoration), 2);
  const first = tmp4[0];
  const importDefault = first;
  let obj3 = arg1(dependencyMap[12]);
  if (null == analyticsLocations) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = importDefault(dependencyMap[13])(analyticsLocations, importDefault(dependencyMap[14]).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [first, setPendingAvatarDecoration];
  const callback = React.useCallback(() => {
    let obj = first(closure_2[15]);
    obj = { type: first(closure_2[14]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let tmp2 = null;
    if (null != first) {
      tmp2 = first;
    }
    setPendingAvatarDecoration(tmp2);
  }, items);
  obj = {};
  obj1 = { value: analyticsLocations2 };
  const obj2 = { scrollable: true, ref: obj3.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true };
  obj3 = { style: tmp.container };
  const items1 = [callback2(View, { style: tmp.bounceOffset }), , ];
  const obj5 = { style: tmp.title };
  const intl = arg1(dependencyMap[19]).intl;
  obj5.children = intl.string(arg1(dependencyMap[19]).t.HykynS);
  items1[1] = callback2(arg1(dependencyMap[18]).Text, obj5);
  items1[2] = callback2(EditAvatarDecorationInner, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration: first, setSelectedAvatarDecoration: tmp4[1], isTryItOut });
  obj3.children = items1;
  const items2 = [callback3(View, obj3), ];
  const obj6 = { user };
  let skuId;
  const obj4 = { style: tmp.bounceOffset };
  const tmp10 = callback2;
  const tmp11 = callback3;
  const tmp12 = callback2;
  const tmp6 = importDefault(dependencyMap[13]);
  const tmp9 = callback2;
  if (null != currentAvatarDecoration) {
    skuId = currentAvatarDecoration.skuId;
  }
  obj6.currentSkuId = skuId;
  let skuId1;
  if (null != first) {
    skuId1 = first.skuId;
  }
  obj6.selectedSkuId = skuId1;
  obj6.isTryItOut = isTryItOut;
  obj6.onApply = callback1;
  obj6.analyticsLocations = analyticsLocations2;
  obj6.analyticsSource = importDefault(dependencyMap[14]).EDIT_AVATAR_DECORATION_SHEET;
  items2[1] = tmp12(importDefault(dependencyMap[20]), obj6);
  obj2.children = items2;
  obj1.children = tmp11(arg1(dependencyMap[17]).BottomSheet, obj2);
  obj.children = tmp10(arg1(dependencyMap[13]).AnalyticsLocationProvider, obj1);
  return tmp9(arg1(dependencyMap[16]).ThemeContextProvider, obj);
};
