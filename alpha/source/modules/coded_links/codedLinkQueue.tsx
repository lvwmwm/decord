// Module ID: 19681
// Function ID: 19682
// Name: codedLinkQueue
// Dependencies: [3, 19682, 2]
// Exports: queueMessageLinkFetch

// Module 19681 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef19682 from "module_19682" /* 19682 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef19682({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
}
