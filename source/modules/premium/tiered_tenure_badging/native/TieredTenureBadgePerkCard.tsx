// Module ID: 12244
// Function ID: 93909
// Name: TieredTenureBadgePerkCard
// Dependencies: []
// Exports: TieredTenureBadgePerkCard

// Module 12244 (TieredTenureBadgePerkCard)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ badgeNameContainer: { flexDirection: "row" }, tenureRequirements: { marginStart: 4 }, image: {}, imageContainer: { position: "String", bottom: "Array" }, upcomingBadge: { opacity: 0.4 }, title: { marginTop: 0 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx");

export const TieredTenureBadgePerkCard = function TieredTenureBadgePerkCard() {
  let obj = arg1(dependencyMap[6]);
  const tieredTenureBadgeData = obj.useTieredTenureBadgeData();
  const arg1 = tieredTenureBadgeData;
  let obj1 = arg1(dependencyMap[6]);
  const premiumSince = obj1.usePremiumSince();
  let obj2 = arg1(dependencyMap[7]);
  const timeUntilNextBadge = obj2.useTimeUntilNextBadge();
  const tmp4 = callback3();
  let obj3 = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  const importDefault = stateFromStores;
  let obj4 = arg1(dependencyMap[9]);
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
    if (tieredTenureBadgeData.status === arg1(dependencyMap[6]).TieredTenureBadgeStatus.UPCOMING) {
      const intl2 = arg1(dependencyMap[15]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[15]).t.O9TBwQ);
    } else {
      const intl = arg1(dependencyMap[15]).intl;
      stringResult = intl.string(arg1(dependencyMap[15]).t.jyYgZ+);
    }
    let tmp15 = large;
    let formatResult = null;
    if (null != premiumSince) {
      const status = tieredTenureBadgeData.status;
      if (arg1(dependencyMap[6]).TieredTenureBadgeStatus.EARNED === status) {
        const intl5 = arg1(dependencyMap[15]).intl;
        obj = {};
        const _Date2 = Date;
        const date = new Date(premiumSince);
        obj.date = date;
        formatResult = intl5.format(arg1(dependencyMap[15]).t.Hu4jfi, obj);
        tmp15 = large;
      } else {
        tmp15 = large;
        formatResult = null;
        if (arg1(dependencyMap[6]).TieredTenureBadgeStatus.UPCOMING === status) {
          tmp15 = large;
          formatResult = null;
          if (null != timeUntilNextBadge) {
            const intl3 = arg1(dependencyMap[15]).intl;
            obj = {};
            const intl4 = arg1(dependencyMap[15]).intl;
            obj1 = { days: timeUntilNextBadge.days };
            obj.timeFrame = intl4.formatToPlainString(arg1(dependencyMap[15]).t.k2UNz+, obj1);
            const _Date = Date;
            const date1 = new Date(premiumSince);
            obj.date = date1;
            formatResult = intl3.format(arg1(dependencyMap[15]).t.vwLvec, obj);
            tmp15 = importDefault(dependencyMap[16]);
          }
        }
      }
    }
    obj2 = {};
    obj3 = { style: tmp4.badgeNameContainer };
    obj4 = {};
    const intl6 = arg1(dependencyMap[15]).intl;
    obj4.children = intl6.string(tieredTenureBadgeData.nameUnformatted);
    const items2 = [callback(arg1(dependencyMap[17]).Text, obj4), ];
    const obj5 = { style: tmp4.tenureRequirements, children: arg1(dependencyMap[18]).getTenureBadgeRequirementString(tieredTenureBadgeData.id, tieredTenureBadgeData.tenureReqNumMonths) };
    items2[1] = callback(arg1(dependencyMap[17]).Text, obj5);
    obj3.children = items2;
    const items3 = [callback2(View, obj3), ];
    let tmp41 = null != formatResult;
    if (tmp41) {
      const obj6 = { children: formatResult };
      tmp41 = callback(arg1(dependencyMap[17]).Text, obj6);
    }
    items3[1] = tmp41;
    obj2.children = items3;
    const obj13 = arg1(dependencyMap[18]);
    const tmp36 = callback2;
    const tmp37 = View;
    const obj7 = {};
    const tmp36Result = callback2(View, obj2);
    const intl7 = arg1(dependencyMap[15]).intl;
    obj7.title = intl7.string(arg1(dependencyMap[15]).t.rnsqpa);
    obj7.titleStyle = tmp4.title;
    obj7.bodyComponent = tmp36Result;
    const intl8 = arg1(dependencyMap[15]).intl;
    obj7.cta = intl8.string(arg1(dependencyMap[15]).t.VsY8ZW);
    obj7.buttonOnPress = tmp9;
    const obj8 = { style: tmp4.imageContainer };
    const obj9 = { resizeMode: "contain" };
    const items4 = [tmp4.image, ];
    const tmp49 = importDefault(dependencyMap[19]);
    const tmp51 = View;
    const tmp52 = importDefault(dependencyMap[20]);
    items4[1] = tieredTenureBadgeData.status === arg1(dependencyMap[6]).TieredTenureBadgeStatus.UPCOMING && tmp4.upcomingBadge;
    obj9.style = items4;
    const obj10 = { uri: tmp15 };
    obj9.source = obj10;
    obj8.children = callback(tmp52, obj9);
    obj7.headerComponent = callback(tmp51, obj8);
    obj7.pillText = stringResult;
    return callback(tmp49, obj7);
  }
};
