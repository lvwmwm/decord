// Module ID: 15972
// Function ID: 122526
// Name: importDefaultResult1
// Dependencies: []
// Exports: queueMessageLinkFetch

// Module 15972 (importDefaultResult1)
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult("codedLinkQueue");
let importDefaultResult1 = importDefault(dependencyMap[1]);
importDefaultResult1 = new importDefaultResult1({ searchProvider: null, CONNECT: null, emoticonsByName: null });
importDefaultResult1.on("add", () => {
  if (importDefaultResult1.size > 0) {
    importDefaultResult.warn("Message link fetch queue backlog:", importDefaultResult1.size);
  }
});
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  importDefaultResult1.add(arg0);
};
