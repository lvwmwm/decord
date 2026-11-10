// Module ID: 15014
// Function ID: 15015
// Name: ProtocolUtils
// Dependencies: [6003, 2]

// Module 15014 (ProtocolUtils)
import _modDef6003 from "module_6003" /* 6003 */;
import size from "module_2" /* 2 */;

const os = _modDef6003.os;
let family;
if (os != null) {
  family = os.family;
}
function launchMobile(href, arg1) {
  let closure_0 = arg1;
  location.href = href;
  process.nextTick(() => closure_0(true));
}
let tmp3 = launchMobile;
if ("Android" !== family) {
  const os2 = _modDef6003.os;
  let family1;
  if (os2 != null) {
    family1 = os2.family;
  }
  tmp3 = launchMobile;
  if ("iOS" !== family1) {
    function launchFirefox(href, arg1) {
      let closure_0 = arg1;
      if (href.startsWith("discord:")) {
        const _document = document;
        const tmp = null;
        if (null == body) {
          const _process4 = process;
          return process.nextTick(() => closure_0(false));
        } else {
          const _document2 = document;
          const element = <iframe />;
          body.appendChild(element);
          try {
            if (null != element.contentWindow) {
              element.contentWindow.location.href = href;
            }
            const _process2 = process;
            process.nextTick(() => closure_0(true));
          } catch (tmp3) {
            if ("NS_ERROR_UNKNOWN_PROTOCOL" === tmp3.name) {
              const _process3 = process;
              process.nextTick(() => closure_0(false));
            }
          }
          const _window = window;
          const timerId = window.setTimeout(() => {
            let parentElement;
            if (element != null) {
              parentElement = tmp.parentElement;
            }
            if (parentElement == null) {
              parentElement = null;
            }
            if (null !== parentElement) {
              body.removeChild(element);
            }
          }, 1000);
        }
      } else {
        const _location = location;
        location.href = href;
        const _process = process;
        return process.nextTick(() => closure_0(true));
      }
    }
    if ("Gecko" !== _modDef6003.layout) {
      function launchChrome(href, arg1) {
        let closure_0 = arg1;
        function handleBlur() {
          c1 = true;
        }
        let c1 = false;
        const listener = window.addEventListener("blur", handleBlur);
        location.href = href;
        const timerId = setTimeout(() => {
          const removed = window.removeEventListener("blur", handleBlur);
          closure_0(c1);
        }, 1000);
      }
      let launchSteam = launchChrome;
      if (null != _modDef6003.ua) {
        const ua = _modDef6003.ua;
        launchSteam = launchChrome;
        if (-1 !== ua.indexOf("Valve Steam GameOverlay")) {
          launchSteam = function launchSteam(arg0, fn) {
            fn(false);
          };
        }
      }
      launchFirefox = launchSteam;
    }
    tmp3 = launchFirefox;
  }
}
const result = size.fileFinishedImporting("utils/web/ProtocolUtils.tsx");

export default { launch: tmp3 };
