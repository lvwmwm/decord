// Module ID: 20304
// Function ID: 20305
// Name: codedLinkQueue
// Dependencies: [3, 20305, 2]
// Exports: queueMessageLinkFetch

// Module 20304 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef20305 from "module_20305" /* 20305 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef20305({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
}
