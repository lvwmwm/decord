// Module ID: 19800
// Function ID: 19801
// Name: codedLinkQueue
// Dependencies: [3, 19801, 2]
// Exports: queueMessageLinkFetch

// Module 19800 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef19801 from "module_19801" /* 19801 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef19801({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
}
