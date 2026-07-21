// Module ID: 9442
// Function ID: 73574
// Name: emitClickEventWithCreative
// Dependencies: []
// Exports: captureAdUserAction

// Module 9442 (emitClickEventWithCreative)
function emitClickEventWithCreative() {
  return _emitClickEventWithCreative(...arguments);
}
function _emitClickEventWithCreative() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _emitClickEventWithCreative = obj;
  return obj(...arguments);
}
function _handleClickInternalAction() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleClickInternalAction = obj;
  return obj(...arguments);
}
function _handleClickExternalAdvertiserCtaAction() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleClickExternalAdvertiserCtaAction = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/ads/analytics/captureAdUserAction.tsx");

export const captureAdUserAction = function captureAdUserAction(type) {
  type = type.type;
  if (arg1(dependencyMap[10]).AdUserActionType.END_CONTENT_LOAD === type) {
    if (type.adCreativeType === arg1(dependencyMap[3]).AdCreativeType.QUEST) {
      const adCreativeId = type.adCreativeId;
      let obj = arg1(dependencyMap[4]);
      obj = { event: AnalyticEvents.QUEST_CONTENT_LOADED, questId: adCreativeId };
      ({ trackGuildAndChannelMetadata: obj2.trackGuildAndChannelMetadata, sourceQuestContent: obj2.sourceQuestContent } = type);
      obj = { triggered_by_status_change: type.triggeredByStatusChange };
      const adMetadataSealed = arg1(dependencyMap[5]).getAdMetadataSealed(type.sourceQuestContent, adCreativeId);
      let tmp15 = null;
      if (null != adMetadataSealed) {
        tmp15 = adMetadataSealed;
      }
      obj.metadata_sealed = tmp15;
      const obj4 = arg1(dependencyMap[5]);
      const adTrafficMetadataSealed = arg1(dependencyMap[5]).getAdTrafficMetadataSealed(type.sourceQuestContent, adCreativeId);
      let tmp19 = null;
      if (null != adTrafficMetadataSealed) {
        tmp19 = adTrafficMetadataSealed;
      }
      obj.traffic_metadata_sealed = tmp19;
      obj.impression_id = type.impressionId;
      obj.is_quest_enrollment_blocked = tmp8;
      obj.content_id = type.surfaceId;
      const obj5 = arg1(dependencyMap[5]);
      obj.content_name = arg1(dependencyMap[6]).getQuestContentName(type.surfaceId);
      ({ questContentPosition: obj3.content_position, questContentRowIndex: obj3.row_index } = type);
      obj.properties = obj;
      obj.trackQuestEvent(obj);
      const obj6 = arg1(dependencyMap[6]);
    } else {
      const obj1 = { event: AnalyticEvents.QUEST_CONTENT_LOADED };
      ({ adCreativeId: obj8.adContentId, adCreativeType: obj8.adCreativeType, trackGuildAndChannelMetadata: obj8.trackGuildAndChannelMetadata, sourceQuestContent: obj8.sourceQuestContent } = type);
      const obj2 = {};
      ({ triggeredByStatusChange: obj9.triggered_by_status_change, impressionId: obj9.impression_id } = type);
      obj2.is_quest_enrollment_blocked = tmp8;
      obj2.content_id = type.surfaceId;
      const obj7 = arg1(dependencyMap[4]);
      obj2.content_name = arg1(dependencyMap[6]).getQuestContentName(type.surfaceId);
      ({ questContentPosition: obj9.content_position, questContentRowIndex: obj9.row_index } = type);
      obj1.properties = obj2;
      obj7.trackAdContentEvent(obj1);
      const obj10 = arg1(dependencyMap[6]);
    }
  } else if (arg1(dependencyMap[10]).AdUserActionType.CLICK_INTERNAL === type) {
    !function handleClickInternalAction(type) {
      return callback(...arguments);
    }(type);
  } else if (arg1(dependencyMap[10]).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA === type) {
    !function handleClickExternalAdvertiserCtaAction(type) {
      return callback2(...arguments);
    }(type);
  }
};
