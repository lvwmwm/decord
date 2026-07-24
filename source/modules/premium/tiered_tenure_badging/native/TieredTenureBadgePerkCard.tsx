// Module ID: 12426
// Function ID: 96461
// Name: TieredTenureBadgePerkCard
// Dependencies: [31, 27, 1849, 653, 33, 4130, 8602, 12427, 566, 8576, 675, 4098, 8575, 1934, 8575, 1212, 12429, 4126, 8601, 12403, 5085, 2]
// Exports: TieredTenureBadgePerkCard

// Module 12426 (TieredTenureBadgePerkCard)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ badgeNameContainer: { flexDirection: "row" }, tenureRequirements: { marginStart: 4 }, image: { width: "100%", height: "100%" }, imageContainer: { height: 238, paddingVertical: 32 }, upcomingBadge: { opacity: 0.4 }, title: { marginTop: 0 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx");

export const TieredTenureBadgePerkCard = function TieredTenureBadgePerkCard() {
  let obj = tieredTenureBadgeData(8602);
  tieredTenureBadgeData = obj.useTieredTenureBadgeData();
  let obj1 = tieredTenureBadgeData(8602);
  const premiumSince = obj1.usePremiumSince();
  let obj2 = tieredTenureBadgeData(12427);
  const timeUntilNextBadge = obj2.useTimeUntilNextBadge();
  const tmp4 = callback3();
  let obj3 = tieredTenureBadgeData(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj3.useStateFromStores(items, () => outer1_5.getCurrentUser());
  let obj4 = tieredTenureBadgeData(8576);
  let id;
  if (null != tieredTenureBadgeData) {
    id = tieredTenureBadgeData.id;
  }
  const mobileTenureBadgeImages = obj4.useMobileTenureBadgeImages(id);
  if (null != mobileTenureBadgeImages) {
    const large = mobileTenureBadgeImages.large;
  }
  const items1 = [stateFromStores, ];
  let id1;
  if (null != tieredTenureBadgeData) {
    id1 = tieredTenureBadgeData.id;
  }
  items1[1] = id1;
  if (null == tieredTenureBadgeData) {
    return null;
  } else {
    if (tieredTenureBadgeData.status === tieredTenureBadgeData(8602).TieredTenureBadgeStatus.UPCOMING) {
      const intl2 = tieredTenureBadgeData(1212).intl;
      let stringResult = intl2.string(tieredTenureBadgeData(1212).t.O9TBwQ);
    } else {
      const intl = tieredTenureBadgeData(1212).intl;
      stringResult = intl.string(tieredTenureBadgeData(1212).t["jyYgZ+"]);
    }
    let tmp15 = large;
    let formatResult = null;
    if (null != premiumSince) {
      const status = tieredTenureBadgeData.status;
      if (tieredTenureBadgeData(8602).TieredTenureBadgeStatus.EARNED === status) {
        const intl5 = tieredTenureBadgeData(1212).intl;
        obj = {};
        const _Date2 = Date;
        const date = new Date(premiumSince);
        obj.date = date;
        formatResult = intl5.format(tieredTenureBadgeData(1212).t.Hu4jfi, obj);
        tmp15 = large;
      } else {
        tmp15 = large;
        formatResult = null;
        if (tieredTenureBadgeData(8602).TieredTenureBadgeStatus.UPCOMING === status) {
          tmp15 = large;
          formatResult = null;
          if (null != timeUntilNextBadge) {
            const intl3 = tieredTenureBadgeData(1212).intl;
            obj = {};
            const intl4 = tieredTenureBadgeData(1212).intl;
            obj1 = { days: timeUntilNextBadge.days };
            obj.timeFrame = intl4.formatToPlainString(tieredTenureBadgeData(1212).t["k2UNz+"], obj1);
            const _Date = Date;
            const date1 = new Date(premiumSince);
            obj.date = date1;
            formatResult = intl3.format(tieredTenureBadgeData(1212).t.vwLvec, obj);
            tmp15 = stateFromStores(12429);
          }
        }
      }
    }
    obj2 = {};
    obj3 = { style: tmp4.badgeNameContainer };
    obj4 = { variant: "heading-md/medium", color: "text-default" };
    const intl6 = tieredTenureBadgeData(1212).intl;
    obj4.children = intl6.string(tieredTenureBadgeData.nameUnformatted);
    const items2 = [callback(tieredTenureBadgeData(4126).Text, obj4), ];
    const obj5 = { variant: "heading-md/medium", color: "text-muted", style: tmp4.tenureRequirements, children: tieredTenureBadgeData(8601).getTenureBadgeRequirementString(tieredTenureBadgeData.id, tieredTenureBadgeData.tenureReqNumMonths) };
    items2[1] = callback(tieredTenureBadgeData(4126).Text, obj5);
    obj3.children = items2;
    const items3 = [callback2(View, obj3), ];
    let tmp41 = null != formatResult;
    if (tmp41) {
      const obj6 = { variant: "heading-sm/normal", color: "text-muted", children: formatResult };
      tmp41 = callback(tieredTenureBadgeData(4126).Text, obj6);
    }
    items3[1] = tmp41;
    obj2.children = items3;
    const obj13 = tieredTenureBadgeData(8601);
    const tmp36 = callback2;
    const tmp37 = View;
    const obj7 = {};
    const tmp36Result = callback2(View, obj2);
    const intl7 = tieredTenureBadgeData(1212).intl;
    obj7.title = intl7.string(tieredTenureBadgeData(1212).t.rnsqpa);
    obj7.titleStyle = tmp4.title;
    obj7.bodyComponent = tmp36Result;
    const intl8 = tieredTenureBadgeData(1212).intl;
    obj7.cta = intl8.string(tieredTenureBadgeData(1212).t.VsY8ZW);
    obj7.buttonOnPress = tmp9;
    const obj8 = { style: tmp4.imageContainer };
    const obj9 = { resizeMode: "contain" };
    const items4 = [tmp4.image, ];
    const tmp49 = stateFromStores(12403);
    const tmp51 = View;
    const tmp52 = stateFromStores(5085);
    items4[1] = tieredTenureBadgeData.status === tieredTenureBadgeData(8602).TieredTenureBadgeStatus.UPCOMING && tmp4.upcomingBadge;
    obj9.style = items4;
    const obj10 = { uri: tmp15 };
    obj9.source = obj10;
    obj8.children = callback(tmp52, obj9);
    obj7.headerComponent = callback(tmp51, obj8);
    obj7.pillText = stringResult;
    return callback(tmp49, obj7);
  }
};
