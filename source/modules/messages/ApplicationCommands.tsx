// Module ID: 7691
// Function ID: 61374
// Name: getApplicationCommand
// Dependencies: []
// Exports: getApplicationCommand

// Module 7691 (getApplicationCommand)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = /<\/([^\s]+):(\d+)>(?:\s?(.*))?/;
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/messages/ApplicationCommands.tsx");

export const getApplicationCommand = function getApplicationCommand(content) {
  const match = regex.exec(content);
  if (null == match) {
    return null;
  } else {
    const tmp6 = callback(match, 4);
    const first = tmp6[0];
    let tmp2 = null;
    if (null != tmp6[1]) {
      tmp2 = null;
      if (null != tmp9) {
        const obj = {};
        let str2 = "";
        if (null != tmp10) {
          const _HermesInternal = HermesInternal;
          str2 = " " + tmp10;
        }
        const _HermesInternal2 = HermesInternal;
        obj.content = "/" + tmp8 + str2;
        obj.name = tmp8;
        obj.id = tmp9;
        obj.hasOptions = null != tmp10 && "" !== tmp10;
        tmp2 = obj;
      }
    }
    return tmp2;
  }
};
