// Module ID: 16097
// Function ID: 124741
// Name: importDefaultResult1
// Dependencies: [3, 16098, 2]
// Exports: queueMessageLinkFetch

// Module 16097 (importDefaultResult1)
import importDefaultResult from "timestamp";
import importDefaultResult1 from "_isNativeReflectConstruct";

importDefaultResult = new importDefaultResult("codedLinkQueue");
importDefaultResult1 = new importDefaultResult1({ concurrency: 5, intervalCap: 10, interval: 2000 });
importDefaultResult1.on("add", () => {
  if (importDefaultResult1.size > 0) {
    importDefaultResult.warn("Message link fetch queue backlog:", importDefaultResult1.size);
  }
});
const result = require("set").fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  importDefaultResult1.add(arg0);
};
