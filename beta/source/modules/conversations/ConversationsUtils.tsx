// Module ID: 7769
// Function ID: 7770
// Name: ConversationsUtils
// Dependencies: [12, 2]
// Exports: mapConversation

// Module 7769 (ConversationsUtils)
import _mod12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let text;

const result = size.fileFinishedImporting("modules/conversations/ConversationsUtils.tsx");

export function mapConversation(rawConversation) {
  let brief_summary;
  let entries1;
  let keywords;
  let tmp5;
  function parseTopicExtractionSummary(content_json) {
    let found;
    let obj2;
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(content_json);
      let title;
      if (parsed != null) {
        title = parsed.title;
      }
      let tmp7 = null;
      if (typeof title === "string") {
        let brief_summary;
        if (parsed != null) {
          brief_summary = tmp4.brief_summary;
        }
        tmp7 = null;
        if (typeof brief_summary === "string") {
          const obj = { title: obj2.upperFirst(parsed.title), brief_summary: parsed.brief_summary, key_points: found };
          const _Array = Array;
          obj2 = _mod12;
          if (Array.isArray(parsed.key_points)) {
            const key_points = parsed.key_points;
            const mapped = key_points.map((text) => {
              text = undefined;
              if (text != null) {
                text = text.text;
              }
              return text;
            });
            found = mapped.filter((item) => typeof item === "string");
          } else {
            found = [];
          }
          tmp7 = obj;
        }
      }
      return tmp7;
    } catch (err) {
      return null;
    }
  }
  const summary_map = rawConversation.summary_map;
  let found;
  if (summary_map != null) {
    const entries = summary_map.entries;
    found = entries.find((summary_type) => "TOPIC_EXTRACTION_SUMMARY" === summary_type.summary_type);
  }
  let tmp2 = null;
  if (null != found) {
    tmp2 = parseTopicExtractionSummary(found.content_json);
  }
  let title;
  if (tmp2 != null) {
    title = tmp2.title;
  }
  let tmp4 = null;
  if (null != title) {
    tmp4 = null;
    if ("" !== tmp2.title) {
      const obj3 = { id: rawConversation.id, title: null, briefSummary: brief_summary, keyPoints: tmp2.key_points, channelId: null, guildId: null, messageIds: null, userIds: null, startMessageId: null, endMessageId: null, messageCount: null, userCount: null, keywords, summaryMap: tmp5, engagement: null, substance: null, dynamics: null };
      ({ title: obj2.title, brief_summary } = tmp2);
      if (brief_summary == null) {
        brief_summary = null;
      }
      ({ channel_id: obj2.channelId, guild_id: obj2.guildId, message_ids: obj2.messageIds, user_ids: obj2.userIds, start_message_id: obj2.startMessageId, end_message_id: obj2.endMessageId, message_count: obj2.messageCount, user_count: obj2.userCount, keywords } = rawConversation);
      if (keywords == null) {
        keywords = [];
      }
      tmp5 = null;
      if (null != rawConversation.summary_map) {
        let obj = { entries: entries1.map((summaryType) => ({ summaryType: summaryType.summary_type, contentJson: summaryType.content_json })) };
        entries1 = rawConversation.summary_map.entries;
        tmp5 = obj;
      }
      ({ engagement: obj2.engagement, substance: obj2.substance, dynamics: obj2.dynamics } = rawConversation);
      tmp4 = obj3;
    }
  }
  return tmp4;
}
