// Module ID: 20349
// Function ID: 20350
// Name: codedLinkQueue
// Dependencies: [3, 20350, 2]
// Exports: queueMessageLinkFetch

// Module 20349 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef20350 from "module_20350" /* 20350 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef20350({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
}
