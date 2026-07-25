// Module ID: 9407
// Function ID: 73435
// Name: emitClickEventWithCreative
// Dependencies: [5, 5932, 653, 5960, 5949, 5930, 5959, 5966, 675, 491, 9408, 2]
// Exports: captureAdUserAction

// Module 9407 (emitClickEventWithCreative)
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
const result = require("ME").fileFinishedImporting("modules/ads/analytics/captureAdUserAction.tsx");

export const captureAdUserAction = function captureAdUserAction(type) {
  type = type.type;
  if (require(9408) /* AdUserActionType */.AdUserActionType.END_CONTENT_LOAD === type) {
    if (type.adCreativeType === require(5960) /* AdCreativeType */.AdCreativeType.QUEST) {
      const adCreativeId = type.adCreativeId;
      let obj = require(5949) /* assignBillingSessionId */;
      obj = { event: AnalyticEvents.QUEST_CONTENT_LOADED, questId: adCreativeId };
      ({ trackGuildAndChannelMetadata: obj2.trackGuildAndChannelMetadata, sourceQuestContent: obj2.sourceQuestContent } = type);
      obj = { triggered_by_status_change: type.triggeredByStatusChange };
      const adMetadataSealed = require(5930) /* _createForOfIteratorHelperLoose */.getAdMetadataSealed(type.sourceQuestContent, adCreativeId);
      let tmp15 = null;
      if (null != adMetadataSealed) {
        tmp15 = adMetadataSealed;
      }
      obj.metadata_sealed = tmp15;
      const obj4 = require(5930) /* _createForOfIteratorHelperLoose */;
      const adTrafficMetadataSealed = require(5930) /* _createForOfIteratorHelperLoose */.getAdTrafficMetadataSealed(type.sourceQuestContent, adCreativeId);
      let tmp19 = null;
      if (null != adTrafficMetadataSealed) {
        tmp19 = adTrafficMetadataSealed;
      }
      obj.traffic_metadata_sealed = tmp19;
      obj.impression_id = type.impressionId;
      obj.is_quest_enrollment_blocked = tmp8;
      obj.content_id = type.surfaceId;
      const obj5 = require(5930) /* _createForOfIteratorHelperLoose */;
      obj.content_name = require(5959) /* getQuestContentName */.getQuestContentName(type.surfaceId);
      ({ questContentPosition: obj3.content_position, questContentRowIndex: obj3.row_index } = type);
      obj.properties = obj;
      obj.trackQuestEvent(obj);
      const obj6 = require(5959) /* getQuestContentName */;
    } else {
      const obj1 = { event: AnalyticEvents.QUEST_CONTENT_LOADED };
      ({ adCreativeId: obj8.adContentId, adCreativeType: obj8.adCreativeType, trackGuildAndChannelMetadata: obj8.trackGuildAndChannelMetadata, sourceQuestContent: obj8.sourceQuestContent } = type);
      const obj2 = {};
      ({ triggeredByStatusChange: obj9.triggered_by_status_change, impressionId: obj9.impression_id } = type);
      obj2.is_quest_enrollment_blocked = tmp8;
      obj2.content_id = type.surfaceId;
      const obj7 = require(5949) /* assignBillingSessionId */;
      obj2.content_name = require(5959) /* getQuestContentName */.getQuestContentName(type.surfaceId);
      ({ questContentPosition: obj9.content_position, questContentRowIndex: obj9.row_index } = type);
      obj1.properties = obj2;
      obj7.trackAdContentEvent(obj1);
      const obj10 = require(5959) /* getQuestContentName */;
    }
  } else if (require(9408) /* AdUserActionType */.AdUserActionType.CLICK_INTERNAL === type) {
    !(function handleClickInternalAction(type) {
      return outer1_8(...arguments);
    })(type);
  } else if (require(9408) /* AdUserActionType */.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA === type) {
    !(function handleClickExternalAdvertiserCtaAction(type) {
      return outer1_9(...arguments);
    })(type);
  }
};
