// Module ID: 20301
// Function ID: 20302
// Name: codedLinkQueue
// Dependencies: [3, 20302, 2]
// Exports: queueMessageLinkFetch

// Module 20301 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef20302 from "module_20302" /* 20302 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef20302({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
}
