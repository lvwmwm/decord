// Module ID: 5425
// Function ID: 5426
// Name: ContentClassificationToAgeRestriction
// Dependencies: [5426, 5427, 1086, 5428, 5429, 5430, 5431, 5432, 5433, 2]
// Exports: contentClassificationToAgeRestriction

// Module 5425 (ContentClassificationToAgeRestriction)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import AgeRestrictionSource from "AgeRestrictionSource" /* 5426 */;
import AgeRestrictionStatus8 from "AgeRestrictionStatus" /* 5427 */;
import DiscordContentClassificationFlags from "DiscordContentClassificationFlags" /* 5428 */;
import ContentRatingESRBRating from "ContentRatingESRBRating" /* 5429 */;
import ContentRatingPEGIRating from "ContentRatingPEGIRating" /* 5430 */;
import ContentRatingGOPClassification from "ContentRatingGOPClassification" /* 5431 */;
import ContentRatingIGDBTheme from "ContentRatingIGDBTheme" /* 5432 */;
import AgeRestrictionUtilsAll from "AgeRestrictionUtils" /* 5433 */;
import size from "module_2" /* 2 */;

function contentClassificationToAgeRestrictionConclusion(data) {
  let obj;
  let tmp14;
  let tmp16;
  let tmp18;
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
  if (null == data) {
    return obj2;
  } else {
    const items = [];
    data = data.data;
    if (data.type === obj.MINIMAL) {
      if (null != data.discord_classifications) {
        let tmp12;
        const push3 = items.push;
        const DISCORD_CLASSIFICATION = AgeRestrictionSource.AgeRestrictionSource.DISCORD_CLASSIFICATION;
        const discord_classifications = data.discord_classifications;
        const deserializer3 = BigFlagUtilsAll;
        const deserializeResult = deserializer3.deserialize(discord_classifications);
        obj = { source: DISCORD_CLASSIFICATION, status: null };
        const obj12 = BigFlagUtilsAll;
        const tmp34 = importAll;
        if (obj12.has(deserializeResult, DiscordContentClassificationFlags.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
          obj.status = AgeRestrictionStatus8.AgeRestrictionStatus.ADULT;
          tmp12 = obj;
        } else {
          const tmp34Result = tmp34(1086);
          const hasAnyResult = tmp34Result.hasAny(deserializeResult, DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
          const AgeRestrictionStatus3 = tmp32(5427).AgeRestrictionStatus;
          obj.status = hasAnyResult ? AgeRestrictionStatus3.ADULT : AgeRestrictionStatus3.EVERYONE;
          tmp12 = obj;
        }
        push3(tmp12);
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
      const obj3 = { source: MANUAL_CLASSIFICATION, status: null };
      if (obj2.has(deserializeResult1, DiscordContentClassificationFlags.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj3.status = tmp4(5427).AgeRestrictionStatus.ADULT;
        tmp9 = obj3;
      } else {
        const tmp6Result = tmp6(1086);
        const hasAnyResult1 = tmp6Result.hasAny(deserializeResult1, tmp4(5428).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
        const AgeRestrictionStatus2 = tmp4(5427).AgeRestrictionStatus;
        obj3.status = hasAnyResult1 ? AgeRestrictionStatus2.ADULT : AgeRestrictionStatus2.EVERYONE;
        tmp9 = obj3;
      }
      push(tmp9);
    } else if (null != data.automated_classifications) {
      let tmp2;
      const push2 = items.push;
      const AUTOMATED_CLASSIFICATION = AgeRestrictionSource.AgeRestrictionSource.AUTOMATED_CLASSIFICATION;
      const automated_classifications = data.automated_classifications;
      const deserializer2 = BigFlagUtilsAll;
      const deserializeResult2 = deserializer2.deserialize(automated_classifications);
      const obj4 = { source: AUTOMATED_CLASSIFICATION, status: null };
      const obj10 = BigFlagUtilsAll;
      const tmp30 = importAll;
      if (obj10.has(deserializeResult2, DiscordContentClassificationFlags.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
        obj4.status = AgeRestrictionStatus8.AgeRestrictionStatus.ADULT;
        tmp2 = obj4;
      } else {
        const tmp30Result = tmp30(1086);
        const hasAnyResult2 = tmp30Result.hasAny(deserializeResult2, DiscordContentClassificationFlags.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
        const AgeRestrictionStatus = tmp28(5427).AgeRestrictionStatus;
        obj4.status = hasAnyResult2 ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE;
        tmp2 = obj4;
      }
      push2(tmp2);
    }
    if (null != data.agency_ratings) {
      if (null != data.agency_ratings.esrb) {
        const push4 = items.push;
        const esrb = data.agency_ratings.esrb;
        const IS_ADULT_ONLY = ContentRatingESRBRating.ContentRatingESRBRatingSets.IS_ADULT_ONLY;
        const hasItem = IS_ADULT_ONLY.has(esrb.rating);
        const AgeRestrictionStatus5 = AgeRestrictionStatus8.AgeRestrictionStatus;
        const obj5 = { source: AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_ESRB, status: tmp14 };
        tmp14 = hasItem ? AgeRestrictionStatus5.ADULT : AgeRestrictionStatus5.EVERYONE;
        push4(obj5);
      }
      if (null != data.agency_ratings.pegi) {
        const push5 = items.push;
        const pegi = data.agency_ratings.pegi;
        const IS_ADULT_ONLY2 = ContentRatingPEGIRating.ContentRatingPEGIRatingSets.IS_ADULT_ONLY;
        const hasItem1 = IS_ADULT_ONLY2.has(pegi.rating);
        const AgeRestrictionStatus6 = AgeRestrictionStatus8.AgeRestrictionStatus;
        const obj6 = { source: AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_PEGI, status: tmp16 };
        tmp16 = hasItem1 ? AgeRestrictionStatus6.ADULT : AgeRestrictionStatus6.EVERYONE;
        push5(obj6);
      }
      if (null != data.agency_ratings.gop) {
        const push6 = items.push;
        const gop = data.agency_ratings.gop;
        const IS_ADULT = ContentRatingGOPClassification.ContentRatingGOPClassificationSets.IS_ADULT;
        const hasItem2 = IS_ADULT.has(gop.classification);
        const AgeRestrictionStatus7 = AgeRestrictionStatus8.AgeRestrictionStatus;
        const obj7 = { source: AgeRestrictionSource.AgeRestrictionSource.AGENCY_CLASSIFICATION_GOP, status: tmp18 };
        tmp18 = hasItem2 ? AgeRestrictionStatus7.ADULT : AgeRestrictionStatus7.EVERYONE;
        push6(obj7);
      }
      if (null != data.agency_ratings.igdb) {
        let EVERYONE;
        let tmp24;
        let themes = data.agency_ratings.igdb.themes;
        const push7 = items.push;
        if (themes == null) {
          themes = [];
        }
        const someResult = themes.some((item) => {
          const ADULT_THEMES = ContentRatingIGDBTheme.ContentRatingIGDBThemeSets.ADULT_THEMES;
          return ADULT_THEMES.has(item);
        });
        const AgeRestrictionStatus4 = AgeRestrictionStatus8.AgeRestrictionStatus;
        if (someResult) {
          EVERYONE = AgeRestrictionStatus4.ADULT;
          tmp24 = tmp21;
        } else {
          EVERYONE = AgeRestrictionStatus4.EVERYONE;
          tmp24 = tmp21;
        }
        const obj8 = { source: tmp24(5426).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB, status: EVERYONE };
        push7(obj8);
      }
    }
    return _mostRestrictiveConclusion(items);
  }
}
const ContentClassificationVariant = { FULL: "full", MINIMAL: "minimal" };
let obj2 = { source: AgeRestrictionSource.AgeRestrictionSource.NO_CLASSIFICATION, status: AgeRestrictionStatus8.AgeRestrictionStatus.EVERYONE };
const result = size.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx");

export { ContentClassificationVariant };
export const contentClassificationToAgeRestriction = function contentClassificationToAgeRestriction(data) {
  return contentClassificationToAgeRestrictionConclusion(data).status;
};
export { contentClassificationToAgeRestrictionConclusion };
