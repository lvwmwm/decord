// Module ID: 19923
// Function ID: 19924
// Name: codedLinkQueue
// Dependencies: [3, 19924, 2]
// Exports: queueMessageLinkFetch

// Module 19923 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef19924 from "module_19924" /* 19924 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef19924({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
}
