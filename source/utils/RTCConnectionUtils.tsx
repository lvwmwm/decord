// Module ID: 10758
// Function ID: 83629
// Dependencies: []

// Module 10758
const _module = require(dependencyMap[0]);
({ RTCConnectionStates: closure_2, ConnectionStatus: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("utils/RTCConnectionUtils.tsx");

export default {
  getStatus(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (constants.CONNECTING === arg0) {
      let ERROR = constants2.CONNECTING;
      const intl10 = require(dependencyMap[1]).intl;
      let stringResult = intl10.string(require(dependencyMap[1]).t.MzW9sN);
    } else if (constants.AUTHENTICATING === arg0) {
      ERROR = constants2.CONNECTING;
      const intl9 = require(dependencyMap[1]).intl;
      stringResult = intl9.string(require(dependencyMap[1]).t.GxXwE2);
    } else if (constants.AWAITING_ENDPOINT === arg0) {
      ERROR = constants2.CONNECTING;
      const intl8 = require(dependencyMap[1]).intl;
      stringResult = intl8.string(require(dependencyMap[1]).t.xEbu0Q);
    } else if (constants.RTC_CONNECTED === arg0) {
      const intl7 = require(dependencyMap[1]).intl;
      const string = intl7.string;
      const t = require(dependencyMap[1]).t;
      if (flag) {
        let stringResult1 = string(t.HtVOdd);
      } else {
        stringResult1 = string(t.daXg45);
      }
      stringResult = stringResult1;
      ERROR = constants2.CONNECTED;
    } else if (constants.RTC_CONNECTING === arg0) {
      ERROR = constants2.CONNECTING;
      const intl6 = require(dependencyMap[1]).intl;
      stringResult = intl6.string(require(dependencyMap[1]).t.Gp51dl);
    } else if (constants.ICE_CHECKING === arg0) {
      ERROR = constants2.CONNECTING;
      const intl5 = require(dependencyMap[1]).intl;
      stringResult = intl5.string(require(dependencyMap[1]).t.rdCyA/);
    } else if (constants.DTLS_CONNECTING === arg0) {
      ERROR = constants2.CONNECTING;
      const intl4 = require(dependencyMap[1]).intl;
      stringResult = intl4.string(require(dependencyMap[1]).t.UvB3gV);
    } else if (constants.NO_ROUTE === arg0) {
      ERROR = constants2.ERROR;
      const intl3 = require(dependencyMap[1]).intl;
      stringResult = intl3.string(require(dependencyMap[1]).t.mGhOIi);
    } else if (constants.RTC_DISCONNECTED === arg0) {
      ERROR = constants2.ERROR;
      const intl2 = require(dependencyMap[1]).intl;
      stringResult = intl2.string(require(dependencyMap[1]).t.M7LDmE);
    } else {
      const DISCONNECTED = constants.DISCONNECTED;
      ERROR = constants2.ERROR;
      const intl = require(dependencyMap[1]).intl;
      stringResult = intl.string(require(dependencyMap[1]).t.NLKQbx);
    }
    const obj = { connectionStatus: ERROR, connectionStatusText: stringResult };
    return obj;
  },
  getShortHostname(hostname) {
    let str = "";
    if (null != hostname) {
      str = hostname.split(".")[0];
    }
    return str;
  }
};
