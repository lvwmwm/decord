// Module ID: 15311
// Function ID: 15312
// Name: TieredTenureBadgePerkCard
// Dependencies: [19, 17, 1383, 1072, 21, 5014, 11454, 15312, 11452, 11444, 15313, 504, 11418, 1252, 11462, 8755, 5258, 11417, 1994, 11417, 1113, 15315, 5624, 11443, 15282, 5717, 2]
// Exports: TieredTenureBadgePerkCard

// Module 15311 (TieredTenureBadgePerkCard)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import BadgeId from "BadgeId" /* 8755 */;
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet" /* 11417 */;
import openBadgeDetailsSheet2 from "openBadgeDetailsSheet" /* 11462 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ badgeNameContainer: { flexDirection: "row" }, tenureRequirements: { marginStart: 4 }, image: { width: "100%", height: "100%" }, imageContainer: { height: 238, paddingVertical: 32 }, upcomingBadge: { opacity: 0.4 }, title: { marginTop: 0 } });
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx");

export function TieredTenureBadgePerkCard() {
  let currentUser;
  let date;
  let date1;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let isBadgeDirectoryUpdatesEnabled;
  let items2;
  let large;
  let obj13;
  let obj14;
  let obj15;
  let obj5;
  let stateFromStores;
  let tmp28Result;
  let tmp35;
  let tmpResult10;
  let obj = isBadgeDirectoryUpdatesEnabled(stateFromStores[6]);
  isBadgeDirectoryUpdatesEnabled = obj.useIsBadgeDirectoryUpdatesEnabled({ location: "TieredTenureBadgePerkCard" });
  let obj2 = isBadgeDirectoryUpdatesEnabled(stateFromStores[7]);
  const isNitroHomeBadgeDirectoryEnabled = obj2.useIsNitroHomeBadgeDirectoryEnabled({ location: "TieredTenureBadgePerkCard" });
  let obj3 = isBadgeDirectoryUpdatesEnabled(stateFromStores[8]);
  const isBadgeManagementEnabled = obj3.useIsBadgeManagementEnabled({ location: "TieredTenureBadgePerkCard" });
  if (isBadgeDirectoryUpdatesEnabled) {
    isBadgeDirectoryUpdatesEnabled = isNitroHomeBadgeDirectoryEnabled;
  }
  if (isBadgeDirectoryUpdatesEnabled) {
    isBadgeDirectoryUpdatesEnabled = isBadgeManagementEnabled;
  }
  const tmpResult = isBadgeDirectoryUpdatesEnabled(stateFromStores[9]);
  const tieredTenureBadgeData = tmpResult.useTieredTenureBadgeData();
  const tmpResult6 = isBadgeDirectoryUpdatesEnabled(stateFromStores[9]);
  const premiumSince = tmpResult6.usePremiumSince();
  const tmpResult7 = isBadgeDirectoryUpdatesEnabled(stateFromStores[10]);
  const timeUntilNextBadge = tmpResult7.useTimeUntilNextBadge();
  let tmp9 = closure_9();
  const items = [UserStore];
  const tmpResult8 = isBadgeDirectoryUpdatesEnabled(stateFromStores[11]);
  stateFromStores = tmpResult8.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  const useMobileTenureBadgeImages = tmp(stateFromStores[12]).useMobileTenureBadgeImages;
  isBadgeDirectoryUpdatesEnabled(stateFromStores[12]);
  if (tieredTenureBadgeData != null) {
    id = tieredTenureBadgeData.id;
  }
  const mobileTenureBadgeImages = useMobileTenureBadgeImages(id);
  if (mobileTenureBadgeImages != null) {
    large = mobileTenureBadgeImages.large;
  }
  const items1 = [stateFromStores, , ];
  let id1;
  if (tieredTenureBadgeData != null) {
    id1 = tieredTenureBadgeData.id;
  }
  items1[1] = id1;
  items1[2] = isBadgeDirectoryUpdatesEnabled;
  if (null == tieredTenureBadgeData) {
    return null;
  } else {
    const intl9 = tmp(tmp2[20]).intl;
    let stringResult = intl9.string(tmp(tmp2[20]).t["jyYgZ+"]);
    if (tieredTenureBadgeData.status === isBadgeDirectoryUpdatesEnabled(stateFromStores[9]).TieredTenureBadgeStatus.UPCOMING) {
      const intl2 = tmp(tmp2[20]).intl;
      stringResult = intl2.string(tmp(tmp2[20]).t.O9TBwQ);
    } else if (tieredTenureBadgeData.status === isBadgeDirectoryUpdatesEnabled(stateFromStores[9]).TieredTenureBadgeStatus.WITHHELD) {
      const intl = tmp(tmp2[20]).intl;
      stringResult = intl.string(tmp(tmp2[20]).t.lHYDUu);
    }
    let formatResult = null;
    let tmp18 = large;
    if (null != premiumSince) {
      const status = tieredTenureBadgeData.status;
      if (isBadgeDirectoryUpdatesEnabled(stateFromStores[9]).TieredTenureBadgeStatus.EARNED !== status) {
        if (isBadgeDirectoryUpdatesEnabled(stateFromStores[9]).TieredTenureBadgeStatus.WITHHELD !== status) {
          formatResult = null;
          tmp18 = large;
          if (isBadgeDirectoryUpdatesEnabled(stateFromStores[9]).TieredTenureBadgeStatus.UPCOMING === status) {
            formatResult = null;
            tmp18 = large;
            if (null != timeUntilNextBadge) {
              const intl3 = tmp(tmp2[20]).intl;
              const format = intl3.format;
              const obj4 = { timeFrame: intl4.formatToPlainString(isBadgeDirectoryUpdatesEnabled(stateFromStores[20]).t["k2UNz+"], obj5), date };
              const vwLvec = tmp(tmp2[20]).t.vwLvec;
              intl4 = tmp(tmp2[20]).intl;
              const _Date = Date;
              const self = this;
              const self2 = this;
              obj5 = { days: timeUntilNextBadge.days };
              date = new Date(premiumSince);
              formatResult = format(vwLvec, obj4);
              tmp18 = tieredTenureBadgeData(tmp2[21]);
            }
          }
        }
      }
      const intl5 = tmp(tmp2[20]).intl;
      const format2 = intl5.format;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const obj6 = { date: date1 };
      const Hu4jfi = tmp(tmp2[20]).t.Hu4jfi;
      date1 = new Date(premiumSince);
      const tmp27 = date1;
      formatResult = format2(Hu4jfi, obj6);
      tmp18 = large;
    }
    const obj7 = { style: tmp9.badgeNameContainer, children: items2 };
    const obj8 = { variant: "heading-md/medium", color: "text-default", children: intl6.string(tieredTenureBadgeData.nameUnformatted) };
    const Text = tmp(tmp2[22]).Text;
    intl6 = tmp(tmp2[20]).intl;
    items2 = [closure_7(Text, obj8), ];
    const obj9 = { variant: "heading-md/medium", color: "text-muted", style: tmp9.tenureRequirements, children: tmpResult10.getTenureBadgeRequirementString(tieredTenureBadgeData.id, tieredTenureBadgeData.tenureReqNumMonths) };
    const Text2 = tmp(tmp2[22]).Text;
    tmpResult10 = isBadgeDirectoryUpdatesEnabled(stateFromStores[23]);
    items2[1] = closure_7(Text2, obj9);
    const items3 = [closure_8(View, obj7), ];
    let tmp30Result = null != formatResult;
    const tmp28 = closure_8;
    if (tmp30Result) {
      const obj10 = { variant: "heading-sm/normal", color: "text-muted", children: formatResult };
      tmp30Result = tmp30(tmp(tmp2[22]).Text, obj10);
    }
    const obj11 = { children: items3 };
    items3[1] = tmp30Result;
    const obj12 = { title: intl7.string(isBadgeDirectoryUpdatesEnabled(stateFromStores[20]).t.rnsqpa), titleStyle: tmp9.title, bodyComponent: tmp28Result, cta: intl8.string(isBadgeDirectoryUpdatesEnabled(stateFromStores[20]).t.VsY8ZW), buttonOnPress: tmp15, headerComponent: closure_7(View, obj13), pillText: stringResult };
    tmp28Result = tmp28(View, obj11);
    const tmp34 = tieredTenureBadgeData(stateFromStores[24]);
    intl7 = tmp(tmp2[20]).intl;
    intl8 = tmp(tmp2[20]).intl;
    const items4 = [tmp9.image, ];
    obj13 = { style: tmp9.imageContainer, children: closure_7(tmp35, obj14) };
    tmp35 = tieredTenureBadgeData(stateFromStores[25]);
    const upcomingBadge = (tieredTenureBadgeData.status === tmp(tmp2[9]).TieredTenureBadgeStatus.UPCOMING || tieredTenureBadgeData.status === tmp(tmp2[9]).TieredTenureBadgeStatus.WITHHELD) && tmp9.upcomingBadge;
    obj14 = { resizeMode: "contain", style: items4, source: obj15 };
    items4[1] = upcomingBadge;
    obj15 = { uri: tmp18 };
    return closure_7(tmp34, obj12);
  }
}
