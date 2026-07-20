// Module ID: 10476
// Function ID: 81165
// Name: stripSensitiveLoggingData
// Dependencies: []
// Exports: default

// Module 10476 (stripSensitiveLoggingData)
const RPCCommands = require(dependencyMap[0]).RPCCommands;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/stripSensitiveLoggingData.tsx");

export default function stripSensitiveLoggingData(arg0) {
  let str = {};
  const merged = Object.assign(arg0);
  let tmp2 = "object" === typeof str.args;
  if (tmp2) {
    tmp2 = "string" === typeof str.cmd;
  }
  let str3 = str;
  if (!tmp2) {
    let tmp14 = "object" === typeof str3.data;
    if (tmp14) {
      tmp14 = "string" === typeof str3.cmd;
    }
    if (!tmp14) {
      return str3;
    } else {
      const cmd2 = str3.cmd;
      if (RPCCommands.AUTHENTICATE !== cmd2) {
        if (RPCCommands.GET_PROVIDER_ACCESS_TOKEN !== cmd2) {
          let obj = {};
          const merged1 = Object.assign(str3);
        }
      }
      obj = {};
      const merged2 = Object.assign(str3);
      const obj1 = {};
      const merged3 = Object.assign(str3.data);
      obj1["access_token"] = "<removed>";
      str3 = "data";
      obj["data"] = obj1;
    }
  } else {
    const cmd = str.cmd;
    if (RPCCommands.AUTHENTICATE !== cmd) {
      if (RPCCommands.GET_PROVIDER_ACCESS_TOKEN !== cmd) {
        obj = {};
        const merged4 = Object.assign(str);
      }
    }
    const obj2 = {};
    const merged5 = Object.assign(str);
    const obj3 = {};
    const merged6 = Object.assign(str.args);
    obj3["access_token"] = "<removed>";
    str = "args";
    obj2["args"] = obj3;
    obj = obj2;
  }
};
