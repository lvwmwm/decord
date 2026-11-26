// Module ID: 5673
// Function ID: 5674
// Name: ContentClassificationToAgeRestriction
// Dependencies: [5674, 5675, 1083, 5676, 5677, 5678, 5679, 5680, 5681, 5682, 5683, 2]
// Exports: contentClassificationToAgeRestriction

// Module 5673 (ContentClassificationToAgeRestriction)
import BigFlagUtilsAll from "BigFlagUtils" /* 1083 */;
import AgeRestrictionSource from "AgeRestrictionSource" /* 5674 */;
import AgeRestrictionStatus11 from "AgeRestrictionStatus" /* 5675 */;
import DiscordContentClassificationFlags from "DiscordContentClassificationFlags" /* 5676 */;
import ContentRatingESRBRating from "ContentRatingESRBRating" /* 5677 */;
import ContentRatingPEGIRating from "ContentRatingPEGIRating" /* 5678 */;
import ContentRatingGOPClassification from "ContentRatingGOPClassification" /* 5679 */;
import ContentRatingIGDBTheme from "ContentRatingIGDBTheme" /* 5680 */;
import ContentRatingAppleRating from "ContentRatingAppleRating" /* 5681 */;
import ContentRatingRobloxRating from "ContentRatingRobloxRating" /* 5682 */;
import AgeRestrictionUtilsAll from "AgeRestrictionUtils" /* 5683 */;
import size from "module_2" /* 2 */;

function contentClassificationToAgeRestrictionConclusion(arg0) {
  let data;
  let obj;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp26;
  let tmp28;
  let type;
  function _mostRestrictiveConclusion(items) {
    let tmp = null;
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != tmp) {
        let obj = AgeRestrictionUtilsAll;
        if (obj.compare(tmp3.status, tmp.status) > 0) {
          tmp = nextResult;
        }
      } else {
        tmp = nextResult;
      }
      continue;
    }
    if (tmp == null) {
      tmp = obj2;
    }
    return tmp;
  }
  if (null == arg0) {
    return obj2;
  } else {
    const items = [];
    ({ type, data } = arg0);
    if (type === obj.MINIMAL) {
      if (null != data.discord_classifications) {
        let tmp12;
        const push5 = items.push;
        const DISCORD_CLASSIFICATION = AgeRestrictionSource.AgeRestrictionSource.DISCORD_CLASSIFICATION;
        const discord_classifications = data.discord_classifications;
        const deserializer3 = BigFlagUtilsAll;
        const deserializeResult = deserializer3.deserialize(discord_classifications);
        obj = { source: DISCORD_CLASSIFICATION, status: null };
        const obj17 = BigFlagUtilsAll;
        const tmp54 = importAll;
        if (obj17.has(deserializeResult, DiscordContentClassificationFlags.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
          obj.status = AgeRestrictionStatus11.AgeRestrictionStatus.ADULT;
          tmp12 = obj;
        } else {
          const tmp54Result = tmp54(1083);
          const hasAnyResult = tmp54Result.hasAny(deserializeResult, DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
          const AgeRestrictionStatus3 = tmp52(5675).AgeRestrictionStatus;
          obj.status = hasAnyResult ? AgeRestrictionStatus3.ADULT : AgeRestrictionStatus3.EVERYONE;
          tmp12 = obj;
        }
        push5(tmp12);
      }
    } else if (null != data.manual_classifications) {
      let tmp9;
      let tmp4 = require;
      let tmp5 = dependencyMap;
      const push = items.push;
      const MANUAL_CLASSIFICATION = AgeRestrictionSource.AgeRestrictionSource.MANUAL_CLASSIFICATION;
      const manual_classifications = data.manual_classifications;
      let tmp6 = importAll;
      const deserializer = BigFlagUtilsAll;
      const deserializeResult1 = deserializer.deserialize(manual_classifications);
      obj2 = BigFlagUtilsAll;
      obj3 = { source: MANUAL_CLASSIFICATION, status: null };
      if (obj2.has(deserializeResult1, DiscordContentClassificationFlags.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj3.status = tmp4(5675).AgeRestrictionStatus.ADULT;
        tmp9 = obj3;
      } else {
        const tmp6Result = tmp6(1083);
        const hasAnyResult1 = tmp6Result.hasAny(deserializeResult1, tmp4(5676).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
        const AgeRestrictionStatus2 = tmp4(5675).AgeRestrictionStatus;
        obj3.status = hasAnyResult1 ? AgeRestrictionStatus2.ADULT : AgeRestrictionStatus2.EVERYONE;
        tmp9 = obj3;
      }
      push(tmp9);
    } else if (null != data.automated_classifications) {
      let tmp2;
      const push4 = items.push;
      const AUTOMATED_CLASSIFICATION = AgeRestrictionSource.AgeRestrictionSource.AUTOMATED_CLASSIFICATION;
      const automated_classifications = data.automated_classifications;
      const deserializer2 = BigFlagUtilsAll;
      const deserializeResult2 = deserializer2.deserialize(automated_classifications);
      const obj4 = { source: AUTOMATED_CLASSIFICATION, status: null };
      const obj15 = BigFlagUtilsAll;
      const tmp50 = importAll;
      if (obj15.has(deserializeResult2, DiscordContentClassificationFlags.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj4.status = AgeRestrictionStatus11.AgeRestrictionStatus.ADULT;
        tmp2 = obj4;
      } else {
        const tmp50Result = tmp50(1083);
        const hasAnyResult2 = tmp50Result.hasAny(deserializeResult2, DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
        const AgeRestrictionStatus = tmp48(5675).AgeRestrictionStatus;
        obj4.status = hasAnyResult2 ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE;
        tmp2 = obj4;
      }
      push4(tmp2);
    }
    if (null != data.agency_ratings) {
      if (null != data.agency_ratings.esrb) {
        const push6 = items.push;
        const esrb = data.agency_ratings.esrb;
        const IS_ADULT_ONLY = ContentRatingESRBRating.ContentRatingESRBRatingSets.IS_ADULT_ONLY;
        const hasItem = IS_ADULT_ONLY.has(esrb.rating);
        const AgeRestrictionStatus6 = AgeRestrictionStatus11.AgeRestrictionStatus;
        const obj5 = { source: AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_ESRB, status: tmp14 };
        tmp14 = hasItem ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
        push6(obj5);
      }
      if (null != data.agency_ratings.pegi) {
        const push7 = items.push;
        const pegi = data.agency_ratings.pegi;
        const IS_ADULT_ONLY2 = ContentRatingPEGIRating.ContentRatingPEGIRatingSets.IS_ADULT_ONLY;
        const hasItem1 = IS_ADULT_ONLY2.has(pegi.rating);
        const AgeRestrictionStatus7 = AgeRestrictionStatus11.AgeRestrictionStatus;
        const obj6 = { source: AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_PEGI, status: tmp16 };
        tmp16 = hasItem1 ? AgeRestrictionStatus7.ADULT : AgeRestrictionStatus7.EVERYONE;
        push7(obj6);
      }
      if (null != data.agency_ratings.gop) {
        const push8 = items.push;
        const gop = data.agency_ratings.gop;
        const IS_ADULT = ContentRatingGOPClassification.ContentRatingGOPClassificationSets.IS_ADULT;
        const hasItem2 = IS_ADULT.has(gop.classification);
        const AgeRestrictionStatus8 = AgeRestrictionStatus11.AgeRestrictionStatus;
        const obj7 = { source: AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_GOP, status: tmp18 };
        tmp18 = hasItem2 ? AgeRestrictionStatus8.ADULT : AgeRestrictionStatus8.EVERYONE;
        push8(obj7);
      }
      if (null != data.agency_ratings.igdb) {
        let EVERYONE;
        let tmp24;
        let themes = data.agency_ratings.igdb.themes;
        const push9 = items.push;
        if (themes == null) {
          themes = [];
        }
        const someResult = themes.some((item) => {
          const ADULT_THEMES = ContentRatingIGDBTheme.ContentRatingIGDBThemeSets.ADULT_THEMES;
          return ADULT_THEMES.has(item);
        });
        const AgeRestrictionStatus4 = AgeRestrictionStatus11.AgeRestrictionStatus;
        if (someResult) {
          EVERYONE = AgeRestrictionStatus4.ADULT;
          tmp24 = tmp21;
        } else {
          EVERYONE = AgeRestrictionStatus4.EVERYONE;
          tmp24 = tmp21;
        }
        const obj8 = { source: tmp24(5674).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB, status: EVERYONE };
        push9(obj8);
      }
      if (null != data.agency_ratings.apple) {
        const push10 = items.push;
        const apple = data.agency_ratings.apple;
        const IS_ADULT_ONLY3 = ContentRatingAppleRating.ContentRatingAppleRatingSets.IS_ADULT_ONLY;
        const hasItem3 = IS_ADULT_ONLY3.has(apple.rating);
        const AgeRestrictionStatus9 = AgeRestrictionStatus11.AgeRestrictionStatus;
        const obj9 = { source: AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_APPLE, status: tmp26 };
        tmp26 = hasItem3 ? AgeRestrictionStatus9.ADULT : AgeRestrictionStatus9.EVERYONE;
        push10(obj9);
      }
      if (null != data.agency_ratings.roblox) {
        const push11 = items.push;
        const roblox = data.agency_ratings.roblox;
        const IS_ADULT_ONLY4 = ContentRatingRobloxRating.ContentRatingRobloxRatingSets.IS_ADULT_ONLY;
        const hasItem4 = IS_ADULT_ONLY4.has(roblox.rating);
        const AgeRestrictionStatus10 = AgeRestrictionStatus11.AgeRestrictionStatus;
        const obj10 = { source: AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_ROBLOX, status: tmp28 };
        tmp28 = hasItem4 ? AgeRestrictionStatus10.ADULT : AgeRestrictionStatus10.EVERYONE;
        push11(obj10);
      }
      const tmp30 = type === obj.FULL && null != data.agency_ratings.igdb_csr;
      if (tmp30) {
        let EVERYONE2;
        let tmp35;
        const ratings = data.agency_ratings.igdb_csr.ratings;
        const push2 = items.push;
        const someResult1 = ratings.some((severity) => null != obj3[severity.category] && severity.severity >= obj3[severity.category]);
        const AgeRestrictionStatus5 = AgeRestrictionStatus11.AgeRestrictionStatus;
        if (someResult1) {
          EVERYONE2 = AgeRestrictionStatus5.ADULT;
          tmp35 = tmp32;
        } else {
          EVERYONE2 = AgeRestrictionStatus5.EVERYONE;
          tmp35 = tmp32;
        }
        const obj11 = { source: tmp35(5674).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB_CSR, status: EVERYONE2 };
        push2(obj11);
      }
    }
    if (type === obj.MINIMAL) {
      if (true === data.developer_age_restricted) {
        const push3 = items.push;
        const obj12 = { source: AgeRestrictionSource.AgeRestrictionSource.DEVELOPER_SELF_LABEL, status: AgeRestrictionStatus11.AgeRestrictionStatus.ADULT };
        push3(obj12);
      }
    } else {
      const prop = data.developer_self_labels;
      let num;
      if (prop != null) {
        num = prop.length;
      }
      if (num == null) {
        num = 0;
      }
      if (num > 0) {
        let EVERYONE3;
        let tmp39;
        const prop1 = data.developer_self_labels;
        let num3;
        const push12 = items.push;
        if (prop1 != null) {
          num3 = prop1.length;
        }
        if (num3 == null) {
          num3 = 0;
        }
        if (num3 > 0) {
          EVERYONE3 = AgeRestrictionStatus11.AgeRestrictionStatus.ADULT;
          tmp39 = require;
        } else {
          EVERYONE3 = AgeRestrictionStatus11.AgeRestrictionStatus.EVERYONE;
          tmp39 = require;
        }
        const obj13 = { source: tmp39(5674).AgeRestrictionSource.DEVELOPER_SELF_LABEL, status: EVERYONE3 };
        push12(obj13);
      }
    }
    return _mostRestrictiveConclusion(items);
  }
}
const ContentClassificationVariant = { FULL: "full", MINIMAL: "minimal" };
let obj2 = { source: AgeRestrictionSource.AgeRestrictionSource.NO_CLASSIFICATION, status: AgeRestrictionStatus11.AgeRestrictionStatus.EVERYONE };
let obj3 = {};
const result = size.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx");

export { ContentClassificationVariant };
export const IGDB_CSR_ADULT_ONLY_SEVERITY = obj3;
export function contentClassificationToAgeRestriction(arg0) {
  return contentClassificationToAgeRestrictionConclusion(arg0).status;
}
export { contentClassificationToAgeRestrictionConclusion };
