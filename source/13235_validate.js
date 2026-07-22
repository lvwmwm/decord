// Module ID: 13235
// Function ID: 100421
// Name: validate
// Dependencies: []

// Module 13235 (validate)
arg5.default = function validate(createSocket) {
  let host;
  let port;
  ({ host, port } = createSocket);
  if (null != createSocket.createSocket) {
    let tmp7 = "string" === typeof host && host;
    if (tmp7) {
      tmp7 = "" !== host;
    }
    if (tmp7) {
      let tmp13 = "number" === typeof port;
      if (tmp13) {
        tmp13 = port >= 1;
      }
      if (tmp13) {
        tmp13 = port <= 65535;
      }
      if (tmp13) {
        if ("function" !== typeof tmp) {
          const _Error4 = Error;
          const error = new Error("invalid onCommand handler");
          throw error;
        }
      } else {
        const _Error3 = Error;
        const error1 = new Error("invalid port");
        throw error1;
      }
    } else {
      const _Error2 = Error;
      const error2 = new Error("invalid host");
      throw error2;
    }
  } else {
    const _Error = Error;
    const error3 = new Error("invalid createSocket function");
    throw error3;
  }
};
