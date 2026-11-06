// Module ID: 19841
// Function ID: 19842
// Name: codedLinkQueue
// Dependencies: [3, 19842, 2]
// Exports: queueMessageLinkFetch

// Module 19841 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef19842 from "module_19842" /* 19842 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef19842({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
}
