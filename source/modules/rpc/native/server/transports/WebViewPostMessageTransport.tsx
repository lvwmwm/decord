// Module ID: 10482
// Function ID: 81210
// Name: importDefaultResult1
// Dependencies: [686227456, 687669248, 131072, 611450880, 33554439, 1929379840]

// Module 10482 (importDefaultResult1)
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult("RPCServer:PostMessage");
let importDefaultResult1 = importDefault(dependencyMap[2]);
importDefaultResult1 = new importDefaultResult1(arg1(dependencyMap[3]).validateSocketClient, importDefaultResult, importDefault(dependencyMap[4]), (arg0, info, id) => {
  const combined = "Socket Message: " + id.id;
  info.info(combined, importDefault(dependencyMap[1])(arg0));
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/rpc/native/server/transports/WebViewPostMessageTransport.tsx");

export default importDefaultResult1;
