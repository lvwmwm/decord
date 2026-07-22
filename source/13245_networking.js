// Module ID: 13245
// Function ID: 100477
// Name: networking
// Dependencies: []
// Exports: default

// Module 13245 (networking)
let closure_2 = require(dependencyMap[0]);
let closure_3 = /^(image)\/.*$/i;
let closure_4 = {};

export default function networking() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_0 = {};
    return (arg0) => {
      let closure_0 = arg0;
      function onSend(data, _url) {
        if (merged.ignoreUrls) {
          const ignoreUrls = merged.ignoreUrls;
          if (ignoreUrls.test(_url._url)) {
            _url._skipReactotron = true;
          }
        }
        const sum = closure_3 + 1;
        closure_3 = sum;
        _url._trackingName = sum;
        closure_4[closure_3] = { data, xhr: _url, stopTimer: data.startTimer() };
      }
      function onResponse(arg0, arg1, _bodyBlob) {
        let _url = arg3;
        const merged = _bodyBlob;
        const regex = arg5;
        if (!arg5._skipReactotron) {
          let closure_3 = null;
          let num2 = -1;
          if (_url) {
            num2 = _url.indexOf("?");
          }
          let tmp2 = null;
          if (num2 > -1) {
            let obj = {};
            closure_3 = obj;
            const parts = _url.substr(num2 + 1).split("&");
            const item = parts.forEach((str) => {
              const tmp = arg5(str.split("="), 2);
              const first = tmp[0];
              let tmp3 = first;
              if (first) {
                tmp3 = undefined !== str;
              }
              if (tmp3) {
                const _decodeURIComponent = decodeURIComponent;
                obj[first] = decodeURIComponent(str.replace(/\+/g, " "));
              }
            });
            tmp2 = obj;
            const str2 = _url.substr(num2 + 1);
          }
          const _trackingName = arg5._trackingName;
          let tmp5 = stopTimer[_trackingName];
          if (!tmp5) {
            obj = { xhr: arg5 };
            tmp5 = obj;
          }
          stopTimer[_trackingName] = null;
          const stopTimer = tmp5.stopTimer;
          obj = {};
          if (!_url) {
            _url = tmp5.xhr._url;
          }
          obj.url = _url;
          obj.method = arg5._method || null;
          obj.data = tmp5.data;
          obj.headers = arg5._headers || null;
          obj.params = tmp2;
          const onSend = obj;
          let str4 = arg5.responseHeaders && arg5.responseHeaders.content-type;
          if (!str4) {
            str4 = arg5.responseHeaders && arg5.responseHeaders.Content-Type;
            const tmp7 = arg5.responseHeaders && arg5.responseHeaders.Content-Type;
          }
          if (!str4) {
            str4 = "";
          }
          function sendResponse(result) {
            let str = "~~~ skipped ~~~";
            if (result) {
              const _JSON = JSON;
              str = JSON.parse(result);
            }
            while (true) {
              let obj = { body: str };
              let tmp2 = result;
              obj.status = result;
              let tmp3 = arg5;
              let responseHeaders = arg5.responseHeaders;
              if (responseHeaders) {
                break;
              } else {
                responseHeaders = null;
                // break
              }
              obj.headers = responseHeaders;
              let tmp7 = stopTimer;
              let tmp8 = null;
              let tmp5 = result;
              let tmp6 = obj;
              if (stopTimer) {
                let tmp9 = stopTimer;
                tmp8 = stopTimer();
              }
              let apiResponseResult = result.apiResponse(tmp6, obj, tmp8);
            }
          }
          const onResponse = sendResponse;
          if ("string" === typeof _bodyBlob) {
            if (!str4) {
              str4 = "";
            }
            if (!regex.test(str4)) {
              if ("blob" === arg4) {
                const _FileReader = FileReader;
                if ("undefined" !== typeof FileReader) {
                  if (_bodyBlob) {
                    const _FileReader2 = FileReader;
                    const fileReader = new FileReader();
                    function brListener() {
                      sendResponse(fileReader.result);
                      const removed = fileReader.removeEventListener("loadend", brListener);
                    }
                    const listener = fileReader.addEventListener("loadend", brListener);
                    const asText = fileReader.readAsText(_bodyBlob);
                  }
                }
              }
              sendResponse(_bodyBlob);
            }
          }
          sendResponse("");
        }
      }
      const merged = Object.assign({}, closure_4, closure_0);
      let closure_2 = merged.ignoreContentTypes || closure_3;
      closure_3 = 1000;
      closure_4 = {};
      return {
        onConnect() {
          const XHRInterceptor = arg0(merged[1]).XHRInterceptor;
          XHRInterceptor.setSendCallback(onSend);
          const XHRInterceptor2 = arg0(merged[1]).XHRInterceptor;
          XHRInterceptor2.setResponseCallback(onResponse);
          const XHRInterceptor3 = arg0(merged[1]).XHRInterceptor;
          XHRInterceptor3.enableInterception();
        }
      };
    };
  }
};
