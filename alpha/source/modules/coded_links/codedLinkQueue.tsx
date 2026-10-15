// Module ID: 18438
// Function ID: 18439
// Name: codedLinkQueue
// Dependencies: [3, 18439, 2]
// Exports: queueMessageLinkFetch

// Module 18438 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef18439 from "module_18439" /* 18439 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef18439({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};
