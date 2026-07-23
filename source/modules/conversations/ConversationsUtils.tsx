// Module ID: 6834
// Function ID: 53984
// Name: mapConversationModeration
// Dependencies: [22, 2]
// Exports: mapConversation

// Module 6834 (mapConversationModeration)
function mapConversationModeration(moderation) {
  const prop = moderation.flagged_message_details;
  return { status: moderation.status, statusReason: moderation.status_reason, messageViolationRate: moderation.message_violation_rate, flaggedMessageCount: moderation.flagged_message_count, totalMessageCount: moderation.total_message_count, flaggedMessageIds: moderation.flagged_message_ids, flaggedMessageDetails: prop.map((messageId) => ({ messageId: messageId.message_id, category: messageId.category, severity: messageId.severity, confidence: messageId.confidence, reason: messageId.reason })), flaggedSummaryDetails: moderation.flagged_summary_details, flaggedTitle: moderation.flagged_title, flaggedSummary: moderation.flagged_summary, flaggedKeyPoints: moderation.flagged_key_points, failedMessageIds: moderation.failed_message_ids };
}
const result = require("set").fileFinishedImporting("modules/conversations/ConversationsUtils.tsx");

export const mapConversation = function mapConversation(summary_map) {
  let brief_summary;
  let keywords;
  summary_map = summary_map.summary_map;
  let found;
  if (null != summary_map) {
    const entries = summary_map.entries;
    found = entries.find((summary_type) => "TOPIC_EXTRACTION_SUMMARY" === summary_type.summary_type);
  }
  let tmp2 = null;
  if (null != found) {
    tmp2 = (function parseTopicExtractionSummary(content_json) {
      const parsed = JSON.parse(content_json);
      let filter = parsed;
      let title;
      if (null != parsed) {
        title = filter.title;
      }
      let tmp4 = null;
      if ("string" === typeof title) {
        let brief_summary;
        if (null != filter) {
          brief_summary = filter.brief_summary;
        }
        tmp4 = null;
        if ("string" === typeof brief_summary) {
          const obj = { title: outer1_0(outer1_1[0]).upperFirst(filter.title), brief_summary: filter.brief_summary };
          const _Array = Array;
          if (Array.isArray(filter.key_points)) {
            const key_points = filter.key_points;
            const mapped = key_points.map((text) => {
              text = undefined;
              if (null != text) {
                text = text.text;
              }
              return text;
            });
            filter = mapped.filter;
            let found = filter((arg0) => "string" === typeof arg0);
          } else {
            found = [];
          }
          obj.key_points = found;
          const obj2 = outer1_0(outer1_1[0]);
        }
      }
      return tmp4;
    })(found.content_json);
  }
  let title;
  if (null != tmp2) {
    title = tmp2.title;
  }
  let tmp4 = null;
  if (null != title) {
    tmp4 = null;
    if ("" !== tmp2.title) {
      let obj = { id: summary_map.id };
      ({ title: obj2.title, brief_summary } = tmp2);
      let tmp5 = null;
      if (null != brief_summary) {
        tmp5 = brief_summary;
      }
      obj.briefSummary = tmp5;
      obj.keyPoints = tmp2.key_points;
      ({ channel_id: obj2.channelId, guild_id: obj2.guildId, message_ids: obj2.messageIds, user_ids: obj2.userIds, start_message_id: obj2.startMessageId, end_message_id: obj2.endMessageId, message_count: obj2.messageCount, user_count: obj2.userCount, keywords } = summary_map);
      if (null == keywords) {
        keywords = [];
      }
      obj.keywords = keywords;
      let tmp6 = null;
      if (null != summary_map.summary_map) {
        obj = {};
        const entries1 = summary_map.summary_map.entries;
        obj.entries = entries1.map((summaryType) => ({ summaryType: summaryType.summary_type, contentJson: summaryType.content_json }));
        tmp6 = obj;
      }
      obj.summaryMap = tmp6;
      ({ engagement: obj2.engagement, substance: obj2.substance, dynamics: obj2.dynamics } = summary_map);
      let tmp7 = null;
      if (null != summary_map.moderation) {
        tmp7 = mapConversationModeration(summary_map.moderation);
      }
      obj.moderation = tmp7;
      tmp4 = obj;
    }
  }
  return tmp4;
};
