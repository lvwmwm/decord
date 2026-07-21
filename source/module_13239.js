// Module ID: 13239
// Function ID: 100453
// Dependencies: []

// Module 13239
arg5.XHRInterceptor = undefined;
let closure_8 = false;
arg5.XHRInterceptor = {
  setOpenCallback(arg0) {

  },
  setSendCallback(onSend) {

  },
  setHeaderReceivedCallback(arg0) {

  },
  setResponseCallback(onResponse) {

  },
  setRequestHeaderCallback(arg0) {

  },
  isInterceptorEnabled() {
    return closure_8;
  },
  enableInterception() {
    if (!closure_8) {
      const _XMLHttpRequest = XMLHttpRequest;
      XMLHttpRequest.prototype.open = function(arg0, arg1) {
        const self = this;
        if (callback) {
          callback(arg0, arg1, self);
        }
        callback4(...arguments);
      };
      const _XMLHttpRequest2 = XMLHttpRequest;
      XMLHttpRequest.prototype.setRequestHeader = function(arg0, arg1) {
        const self = this;
        if (callback3) {
          callback3(arg0, arg1, self);
        }
        callback6(...arguments);
      };
      const _XMLHttpRequest3 = XMLHttpRequest;
      XMLHttpRequest.prototype.send = function(arg0) {
        let self = this;
        self = this;
        if (callback2) {
          callback2(arg0, self);
        }
        if (self.addEventListener) {
          const listener = self.addEventListener("readystatechange", () => {
            if (closure_8) {
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
                if (callback) {
                  callback(first, parsed, self.getAllResponseHeaders(), self);
                }
              }
              if (tmp13) {
                callback2(self.status, self.timeout, self.response, self.responseURL, self.responseType, self);
              }
              const tmp13 = self.readyState === self.DONE && callback2;
            }
          }, false);
        }
        callback5(...arguments);
      };
      closure_8 = true;
    }
  },
  disableInterception() {
    if (closure_8) {
      closure_8 = false;
      const _XMLHttpRequest = XMLHttpRequest;
      XMLHttpRequest.prototype.send = send;
      const _XMLHttpRequest2 = XMLHttpRequest;
      XMLHttpRequest.prototype.open = open;
      const _XMLHttpRequest3 = XMLHttpRequest;
      XMLHttpRequest.prototype.setRequestHeader = setRequestHeader;
      let closure_4 = null;
      let closure_0 = null;
      let closure_1 = null;
      let closure_3 = null;
      let closure_2 = null;
    }
  }
};
