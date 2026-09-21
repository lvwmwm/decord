// Module ID: 8366
// Function ID: 8367
// Name: trackMarkdownParse
// Dependencies: [1078, 8367, 1245, 2]
// Exports: trackMarkdownParse

// Module 8366 (trackMarkdownParse)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import MarkdownParseSampleExperiment from "MarkdownParseSampleExperiment" /* 8367 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/messages/native/renderer/trackMarkdownParse.tsx");

export const trackMarkdownParse = function trackMarkdownParse(arg0) {
  const markdownParseSampleRate = MarkdownParseSampleExperiment.getMarkdownParseSampleRate();
  if (markdownParseSampleRate > 0) {
    ({ durationMs: obj3.duration_ms, path: obj3.path, contentLength: obj3.content_length, hasBailedAst: obj3.has_bailed_ast } = arg0);
    const obj6 = { throttlePercent: markdownParseSampleRate };
    AnalyticsUtilsDefault.track(AnalyticEvents.MESSAGE_MARKUP_PARSE, { duration_ms: null, path: null, content_length: null, has_bailed_ast: null }, obj6);
    const obj4 = { duration_ms: null, path: null, content_length: null, has_bailed_ast: null };
  }
};
