// Module ID: 10797
// Function ID: 83870
// Dependencies: [653, 1212, 2]

// Module 10797
import ME from "ME";

let closure_2;
let closure_3;
({ RTCConnectionStates: closure_2, ConnectionStatus: closure_3 } = ME);
const result = require("set").fileFinishedImporting("utils/RTCConnectionUtils.tsx");

export default {
  getStatus(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (constants.CONNECTING === arg0) {
      let ERROR = constants2.CONNECTING;
      const intl10 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl10.string(require(1212) /* getSystemLocale */.t.MzW9sN);
    } else if (constants.AUTHENTICATING === arg0) {
      ERROR = constants2.CONNECTING;
      const intl9 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl9.string(require(1212) /* getSystemLocale */.t.GxXwE2);
    } else if (constants.AWAITING_ENDPOINT === arg0) {
      ERROR = constants2.CONNECTING;
      const intl8 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl8.string(require(1212) /* getSystemLocale */.t.xEbu0Q);
    } else if (constants.RTC_CONNECTED === arg0) {
      const intl7 = require(1212) /* getSystemLocale */.intl;
      const string = intl7.string;
      const t = require(1212) /* getSystemLocale */.t;
      if (flag) {
        let stringResult1 = string(t.HtVOdd);
      } else {
        stringResult1 = string(t.daXg45);
      }
      stringResult = stringResult1;
      ERROR = constants2.CONNECTED;
    } else if (constants.RTC_CONNECTING === arg0) {
      ERROR = constants2.CONNECTING;
      const intl6 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl6.string(require(1212) /* getSystemLocale */.t.Gp51dl);
    } else if (constants.ICE_CHECKING === arg0) {
      ERROR = constants2.CONNECTING;
      const intl5 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl5.string(require(1212) /* getSystemLocale */.t["rdCyA/"]);
    } else if (constants.DTLS_CONNECTING === arg0) {
      ERROR = constants2.CONNECTING;
      const intl4 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl4.string(require(1212) /* getSystemLocale */.t.UvB3gV);
    } else if (constants.NO_ROUTE === arg0) {
      ERROR = constants2.ERROR;
      const intl3 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl3.string(require(1212) /* getSystemLocale */.t.mGhOIi);
    } else if (constants.RTC_DISCONNECTED === arg0) {
      ERROR = constants2.ERROR;
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t.M7LDmE);
    } else {
      const DISCONNECTED = constants.DISCONNECTED;
      ERROR = constants2.ERROR;
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t.NLKQbx);
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
