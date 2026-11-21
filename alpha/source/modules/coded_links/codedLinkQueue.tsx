// Module ID: 19564
// Function ID: 19565
// Name: codedLinkQueue
// Dependencies: [3, 19565, 2]
// Exports: queueMessageLinkFetch

// Module 19564 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef19565 from "module_19565" /* 19565 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef19565({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
}
