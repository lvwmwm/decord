// Module ID: 13482
// Function ID: 102329
// Name: EditNameplateInner
// Dependencies: []
// Exports: default

// Module 13482 (EditNameplateInner)
function EditNameplateInner(user) {
  let selectedNameplate;
  let setSelectedNameplate;
  user = user.user;
  const arg1 = user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const importDefault = setSelectedNameplate;
  const guildId = user.guildId;
  const dependencyMap = guildId;
  let obj = arg1(dependencyMap[19]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = arg1(dependencyMap[20]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  let obj2 = arg1(dependencyMap[20]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = member.getMember(guildId, user.id);
    }
    return member;
  });
  let obj3 = arg1(dependencyMap[22]);
  obj = { pendingValue: selectedNameplate };
  let nameplate;
  if (null != user) {
    const collectibles = user.collectibles;
    if (null != collectibles) {
      nameplate = collectibles.nameplate;
    }
  }
  obj.userValue = nameplate;
  let nameplate1;
  if (null != stateFromStores1) {
    const collectibles2 = stateFromStores1.collectibles;
    if (null != collectibles2) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj.guildValue = nameplate1;
  obj.guildId = guildId;
  const profilePreviewValue = obj3.getProfilePreviewValue(obj);
  const items2 = [setSelectedNameplate, guildId];
  obj = {};
  obj1 = {};
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return callback(user(guildId[23]).EditNameplateRow, { items, size, selectedSkuId, setSelectedNameplate, guildId });
  }, items2);
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  obj1.previewSkuId = skuId;
  obj1.user = user;
  obj1.guildId = guildId;
  const items3 = [closure_10(NameplateActionSheetPreview, obj1), , ];
  obj2 = { user };
  let skuId1;
  const tmp10 = closure_12;
  const tmp11 = closure_10;
  const tmp12 = NameplateActionSheetPreview;
  const tmp14 = closure_10;
  const tmp3 = importDefault(dependencyMap[21])();
  const tmp9 = closure_11;
  if (null != profilePreviewValue) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj2.previewSkuId = skuId1;
  const intl = arg1(dependencyMap[17]).intl;
  obj2.nitroJoinCTA = intl.string(arg1(dependencyMap[17]).t.V+IE93);
  const intl2 = arg1(dependencyMap[17]).intl;
  obj2.nitroUpgradeCTA = intl2.string(arg1(dependencyMap[17]).t.a6SrkR);
  items3[1] = tmp14(importDefault(dependencyMap[24]), obj2);
  obj3 = { sections: tmp3 };
  let skuId2;
  if (null != selectedNameplate) {
    skuId2 = selectedNameplate.skuId;
  }
  obj3.selectedSkuId = skuId2;
  obj3.renderRow = callback;
  obj3.isFetching = stateFromStores;
  items3[2] = closure_10(arg1(dependencyMap[25]).EditCollectiblesPickerList, obj3);
  obj.children = items3;
  return tmp9(tmp10, obj);
}
function NameplateActionSheetPreview(arg0) {
  let guildId;
  let previewSkuId;
  let user;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[26])(previewSkuId);
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
  let obj = { style: tmp.nameplatePreviewContainer };
  if (null != memo) {
    const intl2 = arg1(dependencyMap[17]).intl;
    obj = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[17]).t.YJig7C, obj);
  } else {
    const intl = arg1(dependencyMap[17]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[17]).t.aqlsGS);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.accessibilityRole = "image";
  obj.accessible = true;
  obj = { style: tmp.nameplateGradientContainer };
  const items1 = [callback2(arg1(dependencyMap[27]).NameplateDummyUserPreview, { width: 100 }), callback2(arg1(dependencyMap[27]).NameplateDummyUserPreview, { width: 140 }), ];
  const obj1 = { style: tmp.nameplatePreviewGradient, start: {}, end: {} };
  const items2 = [tmp.nameplatePreviewGradient.color, "" + tmp.nameplatePreviewGradient.color + "00"];
  obj1.colors = items2;
  items1[2] = callback2(importDefault(dependencyMap[28]), obj1);
  obj.children = items1;
  const items3 = [callback3(View, obj), callback2(arg1(dependencyMap[29]).NameplatePreview, { nameplate: memo, user, guildId, animate: true, aria-hidden: true }), ];
  const obj2 = { style: tmp.nameplateGradientContainer };
  const items4 = [callback2(arg1(dependencyMap[27]).NameplateDummyUserPreview, { width: 140 }), callback2(arg1(dependencyMap[27]).NameplateDummyUserPreview, { width: 100 }), ];
  const obj3 = { style: tmp.nameplatePreviewGradient, start: {}, end: {} };
  const tmp11 = importDefault(dependencyMap[28]);
  const tmp4 = callback3;
  const tmp5 = View;
  const items5 = ["" + tmp.nameplatePreviewGradient.color + "00", tmp.nameplatePreviewGradient.color];
  obj3.colors = items5;
  items4[2] = callback2(importDefault(dependencyMap[28]), obj3);
  obj2.children = items4;
  items3[2] = callback3(View, obj2);
  obj.children = items3;
  return tmp4(tmp5, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const isNameplateRecord = arg1(dependencyMap[4]).isNameplateRecord;
let closure_8 = importDefault(dependencyMap[5]);
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
obj.bounceOffset = { "Null": "row", "Null": "center", "Null": "flex-start", flexDirection: 40, gap: null };
const tmp2 = arg1(dependencyMap[7]);
obj.title = { color: importDefault(dependencyMap[9]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.nameplatePreviewContainer = { 9223372036854775807: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0443", 0: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432", 0: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432", 9223372036854775807: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u0456\u043A" };
obj.nameplateGradientContainer = { width: "100%" };
const obj1 = { color: importDefault(dependencyMap[9]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.nameplatePreviewGradient = { color: importDefault(dependencyMap[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default function EditNameplateActionSheet(arg0) {
  let currentNameplate;
  let guildId;
  let user;
  ({ user, currentNameplate, guildId } = arg0);
  const arg1 = guildId;
  const tmp = callback4();
  let obj = arg1(dependencyMap[10]);
  const tmp2 = callback(React.useState(undefined), 2);
  const first = tmp2[0];
  const importDefault = first;
  let tmp4 = currentNameplate;
  if (undefined !== first) {
    tmp4 = first;
  }
  const analyticsLocations = importDefault(dependencyMap[11])(importDefault(dependencyMap[12]).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  const callback = React.useCallback(() => {
    let obj = first(closure_2[13]);
    obj = { type: first(closure_2[12]).EDIT_NAMEPLATE_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = guildId(closure_2[14]);
    obj = { guildId };
    let tmp = null;
    if (null != first) {
      tmp = first;
    }
    obj.nameplate = tmp;
    obj.setPendingChanges(obj);
  }, items);
  obj = { value: analyticsLocations };
  obj = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true };
  const obj1 = { style: tmp.container };
  const items1 = [callback2(View, { style: tmp.bounceOffset }), , ];
  const obj3 = { "Null": "<string:552206337>", "Null": "<string:621281281>", "Null": "<string:1643511809>", style: tmp.title };
  const intl = arg1(dependencyMap[17]).intl;
  obj3.children = intl.string(arg1(dependencyMap[17]).t.BwdeM1);
  items1[1] = callback2(arg1(dependencyMap[16]).Text, obj3);
  const obj4 = { user, selectedNameplate: tmp4, setSelectedNameplate: tmp2[1], guildId };
  items1[2] = callback2(EditNameplateInner, obj4);
  obj1.children = items1;
  const items2 = [callback3(View, obj1), ];
  const obj5 = { user };
  let skuId;
  const obj2 = { style: tmp.bounceOffset };
  const tmp10 = callback2;
  const tmp5 = importDefault(dependencyMap[11]);
  const tmp8 = callback2;
  const tmp9 = callback3;
  if (null != currentNameplate) {
    skuId = currentNameplate.skuId;
  }
  obj5.currentSkuId = skuId;
  let skuId1;
  if (null != tmp4) {
    skuId1 = tmp4.skuId;
  }
  obj5.selectedSkuId = skuId1;
  obj5.onApply = callback1;
  obj5.analyticsLocations = analyticsLocations;
  obj5.analyticsSource = importDefault(dependencyMap[12]).EDIT_NAMEPLATE_SHEET;
  items2[1] = tmp10(importDefault(dependencyMap[18]), obj5);
  obj.children = items2;
  obj.children = tmp9(arg1(dependencyMap[15]).BottomSheet, obj);
  return tmp8(arg1(dependencyMap[11]).AnalyticsLocationProvider, obj);
};
