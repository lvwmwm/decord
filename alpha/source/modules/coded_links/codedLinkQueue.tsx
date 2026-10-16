// Module ID: 18480
// Function ID: 18481
// Name: codedLinkQueue
// Dependencies: [3, 18481, 2]
// Exports: queueMessageLinkFetch

// Module 18480 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef18481 from "module_18481" /* 18481 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef18481({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};
