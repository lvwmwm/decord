// Module ID: 13360
// Function ID: 102642
// Dependencies: []

// Module 13360
arg5.XHRInterceptor = undefined;
let c8 = false;
arg5.XHRInterceptor = {
  setOpenCallback(arg0) {
    let closure_0 = arg0;
  },
  setSendCallback(onSend) {
    let closure_1 = onSend;
  },
  setHeaderReceivedCallback(arg0) {
    let closure_3 = arg0;
  },
  setResponseCallback(onResponse) {
    let closure_4 = onResponse;
  },
  setRequestHeaderCallback(arg0) {
    let closure_2 = arg0;
  },
  isInterceptorEnabled() {
    return c8;
  },
  enableInterception() {
    if (!c8) {
      const _XMLHttpRequest = XMLHttpRequest;
      XMLHttpRequest.prototype.open = function(arg0, arg1) {
        const self = this;
        if (outer1_0) {
          outer1_0(arg0, arg1, self);
        }
        outer1_5(...arguments);
      };
      const _XMLHttpRequest2 = XMLHttpRequest;
      XMLHttpRequest.prototype.setRequestHeader = function(arg0, arg1) {
        const self = this;
        if (outer1_2) {
          outer1_2(arg0, arg1, self);
        }
        outer1_7(...arguments);
      };
      const _XMLHttpRequest3 = XMLHttpRequest;
      XMLHttpRequest.prototype.send = function(arg0) {
        let self = this;
        self = this;
        if (outer1_1) {
          outer1_1(arg0, self);
        }
        if (self.addEventListener) {
          const listener = self.addEventListener("readystatechange", () => {
            if (c8) {
              if (self.readyState === self.HEADERS_RECEIVED) {
                const str3 = self.getResponseHeader("Content-Type");
                const responseHeader = self.getResponseHeader("Content-Length");
                if (str3) {
                  const first = str3.split(";")[0];
                }
                if (responseHeader) {
                  const _parseInt = parseInt;
                  const parsed = parseInt(responseHeader, 10);
                }
                if (outer2_3) {
                  outer2_3(first, parsed, self.getAllResponseHeaders(), self);
                }
              }
              if (tmp13) {
                outer2_4(self.status, self.timeout, self.response, self.responseURL, self.responseType, self);
              }
              tmp13 = self.readyState === self.DONE && outer2_4;
            }
          }, false);
        }
        outer1_6(...arguments);
      };
      c8 = true;
    }
  },
  disableInterception() {
    if (c8) {
      c8 = false;
      const _XMLHttpRequest = XMLHttpRequest;
      XMLHttpRequest.prototype.send = send;
      const _XMLHttpRequest2 = XMLHttpRequest;
      XMLHttpRequest.prototype.open = open;
      const _XMLHttpRequest3 = XMLHttpRequest;
      XMLHttpRequest.prototype.setRequestHeader = setRequestHeader;
      let c4 = null;
      let c0 = null;
      let c1 = null;
      let c3 = null;
      let c2 = null;
    }
  }
};
