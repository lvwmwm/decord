// Module ID: 8422
// Function ID: 67186
// Name: emitClickEventWithCreative
// Dependencies: [5, 5966, 653, 5994, 5983, 5964, 5993, 6000, 675, 491, 477, 5943, 8423, 5995, 5972, 8426, 2]
// Exports: captureAdUserAction

// Module 8422 (emitClickEventWithCreative)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
function emitClickEventWithCreative() {
  return _emitClickEventWithCreative(...arguments);
}
function _emitClickEventWithCreative() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleClickInternalAction() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleClickExternalAdvertiserCtaAction() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function handleViewImpression(minViewTimeSeconds) {
  let adUser;
  let impressionId;
  let isQuestEnrollmentBlocked;
  let questContentPosition;
  let questContentRowIndex;
  let shouldExtendSession;
  let sourceQuestContent;
  let surfaceId;
  let trackGuildAndChannelMetadata;
  ({ surfaceId, sourceQuestContent, shouldExtendSession, adUser, trackGuildAndChannelMetadata } = minViewTimeSeconds);
  let obj = { min_view_time_seconds: minViewTimeSeconds.minViewTimeSeconds, min_viewport_percentage: minViewTimeSeconds.minViewportPercentage, triggered_by_status_change: minViewTimeSeconds.triggeredByStatusChange };
  let advertisingId = null;
  ({ impressionId, isQuestEnrollmentBlocked, questContentPosition, questContentRowIndex } = minViewTimeSeconds);
  if (null != adUser) {
    let obj1 = require(477) /* set */;
    advertisingId = null;
    if (obj1.isIOS()) {
      advertisingId = adUser.advertisingId;
    }
  }
  obj.apple_advertising_id = advertisingId;
  let advertisingId1 = null;
  if (null != adUser) {
    let obj2 = require(477) /* set */;
    advertisingId1 = null;
    if (obj2.isAndroid()) {
      advertisingId1 = adUser.advertisingId;
    }
  }
  obj.android_advertising_id = advertisingId1;
  const merged = Object.assign(importDefault(5943)());
  const merged1 = Object.assign(require(8423) /* getBrandSafetyContext */.getBrandSafetyContext(surfaceId));
  obj["impression_id"] = impressionId;
  obj["is_quest_enrollment_blocked"] = isQuestEnrollmentBlocked;
  const obj4 = require(8423) /* getBrandSafetyContext */;
  const merged2 = Object.assign(require(5993) /* getQuestContentName */.getContentProperties(surfaceId, questContentPosition, questContentRowIndex));
  if (minViewTimeSeconds.adCreativeType !== require(5994) /* AdCreativeType */.AdCreativeType.QUEST) {
    obj = { event: AnalyticEvents.QUEST_CONTENT_VIEWED };
    ({ adCreativeId: obj9.adContentId, adCreativeType: obj9.adCreativeType } = minViewTimeSeconds);
    obj.trackGuildAndChannelMetadata = trackGuildAndChannelMetadata;
    obj.shouldExtendSession = shouldExtendSession;
    obj.sourceQuestContent = sourceQuestContent;
    obj = {};
    const merged3 = Object.assign(obj);
    obj.properties = obj;
    require(5983) /* assignBillingSessionId */.trackAdContentEvent(obj);
    const obj8 = require(5983) /* assignBillingSessionId */;
  } else {
    const adCreativeId = minViewTimeSeconds.adCreativeId;
    obj1 = { event: AnalyticEvents.QUEST_CONTENT_VIEWED, questId: adCreativeId, trackGuildAndChannelMetadata, shouldExtendSession, sourceQuestContent };
    obj2 = {};
    const merged4 = Object.assign(obj);
    const obj11 = require(5983) /* assignBillingSessionId */;
    const adMetadataSealed = require(5964) /* _createForOfIteratorHelperLoose */.getAdMetadataSealed(sourceQuestContent, adCreativeId);
    let tmp10 = null;
    if (null != adMetadataSealed) {
      tmp10 = adMetadataSealed;
    }
    obj2["metadata_sealed"] = tmp10;
    const obj14 = require(5964) /* _createForOfIteratorHelperLoose */;
    const currentQuestHomeSearchSession = require(6000) /* getOrCreateQuestHomeSearchSession */.getCurrentQuestHomeSearchSession();
    let uuid;
    if (null != currentQuestHomeSearchSession) {
      uuid = currentQuestHomeSearchSession.uuid;
    }
    let tmp15 = null;
    if (null != uuid) {
      tmp15 = uuid;
    }
    obj2["search_session_id"] = tmp15;
    const obj6 = require(6000) /* getOrCreateQuestHomeSearchSession */;
    const adTrafficMetadataSealed = require(5964) /* _createForOfIteratorHelperLoose */.getAdTrafficMetadataSealed(sourceQuestContent, adCreativeId);
    let tmp19 = null;
    if (null != adTrafficMetadataSealed) {
      tmp19 = adTrafficMetadataSealed;
    }
    obj2["traffic_metadata_sealed"] = tmp19;
    obj1.properties = obj2;
    obj11.trackQuestEvent(obj1);
    const obj7 = require(5964) /* _createForOfIteratorHelperLoose */;
  }
}
function _handleViewInternalSurfaceImpressionAction() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function reportCaptureAdUserActionError(arg0) {
  const questLogger = require(5972) /* getQuestLogger */.getQuestLogger();
  questLogger.error("captureAdUserAction failed to report an ad user action", arg0);
}
const result = require("ME").fileFinishedImporting("modules/ads/analytics/captureAdUserAction.tsx");

export const captureAdUserAction = function captureAdUserAction(type) {
  type = type.type;
  if (require(8426) /* AdUserActionType */.AdUserActionType.END_CONTENT_LOAD === type) {
    if (type.adCreativeType === require(5994) /* AdCreativeType */.AdCreativeType.QUEST) {
      const adCreativeId = type.adCreativeId;
      let obj = require(5983) /* assignBillingSessionId */;
      obj = { event: AnalyticEvents.QUEST_CONTENT_LOADED, questId: adCreativeId };
      ({ trackGuildAndChannelMetadata: obj2.trackGuildAndChannelMetadata, sourceQuestContent: obj2.sourceQuestContent } = type);
      obj = { triggered_by_status_change: type.triggeredByStatusChange };
      const adMetadataSealed = require(5964) /* _createForOfIteratorHelperLoose */.getAdMetadataSealed(type.sourceQuestContent, adCreativeId);
      let tmp22 = null;
      if (null != adMetadataSealed) {
        tmp22 = adMetadataSealed;
      }
      obj.metadata_sealed = tmp22;
      const obj4 = require(5964) /* _createForOfIteratorHelperLoose */;
      const adTrafficMetadataSealed = require(5964) /* _createForOfIteratorHelperLoose */.getAdTrafficMetadataSealed(type.sourceQuestContent, adCreativeId);
      let tmp26 = null;
      if (null != adTrafficMetadataSealed) {
        tmp26 = adTrafficMetadataSealed;
      }
      obj.traffic_metadata_sealed = tmp26;
      obj.impression_id = type.impressionId;
      obj.is_quest_enrollment_blocked = tmp15;
      obj.content_id = type.surfaceId;
      const obj5 = require(5964) /* _createForOfIteratorHelperLoose */;
      obj.content_name = require(5993) /* getQuestContentName */.getQuestContentName(type.surfaceId);
      ({ questContentPosition: obj3.content_position, questContentRowIndex: obj3.row_index } = type);
      obj.properties = obj;
      obj.trackQuestEvent(obj);
      const obj6 = require(5993) /* getQuestContentName */;
    } else {
      const obj1 = { event: AnalyticEvents.QUEST_CONTENT_LOADED };
      ({ adCreativeId: obj8.adContentId, adCreativeType: obj8.adCreativeType, trackGuildAndChannelMetadata: obj8.trackGuildAndChannelMetadata, sourceQuestContent: obj8.sourceQuestContent } = type);
      const obj2 = {};
      ({ triggeredByStatusChange: obj9.triggered_by_status_change, impressionId: obj9.impression_id } = type);
      obj2.is_quest_enrollment_blocked = tmp15;
      obj2.content_id = type.surfaceId;
      const obj7 = require(5983) /* assignBillingSessionId */;
      obj2.content_name = require(5993) /* getQuestContentName */.getQuestContentName(type.surfaceId);
      ({ questContentPosition: obj9.content_position, questContentRowIndex: obj9.row_index } = type);
      obj1.properties = obj2;
      obj7.trackAdContentEvent(obj1);
      const obj10 = require(5993) /* getQuestContentName */;
    }
  } else if (require(8426) /* AdUserActionType */.AdUserActionType.CLICK_INTERNAL === type) {
    (function handleClickInternalAction(type) {
      return outer1_8(...arguments);
    })(type).catch(reportCaptureAdUserActionError);
    const promise3 = (function handleClickInternalAction(type) {
      return outer1_8(...arguments);
    })(type);
  } else if (require(8426) /* AdUserActionType */.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA === type) {
    (function handleClickExternalAdvertiserCtaAction(type) {
      return outer1_9(...arguments);
    })(type).catch(reportCaptureAdUserActionError);
    const promise2 = (function handleClickExternalAdvertiserCtaAction(type) {
      return outer1_9(...arguments);
    })(type);
  } else if (require(8426) /* AdUserActionType */.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION === type) {
    (function handleViewInternalSurfaceImpressionAction(type) {
      return outer1_11(...arguments);
    })(type).catch(reportCaptureAdUserActionError);
    const promise = (function handleViewInternalSurfaceImpressionAction(type) {
      return outer1_11(...arguments);
    })(type);
  } else if (require(8426) /* AdUserActionType */.AdUserActionType.VIEW_EXTERNAL_PAID_AD_PLACEMENT_IMPRESSION === type) {
    handleViewImpression(type);
  }
};
