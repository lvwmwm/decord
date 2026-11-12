// Module ID: 17906
// Function ID: 17907
// Dependencies: [8960, 17907]
// Exports: getYoutubeMeta

// Module 17906
import _regeneratorRuntime2 from "_regeneratorRuntime" /* 17907 */;
import module_8960 from "module_8960" /* 8960 */;

let sent;

let _regeneratorRuntime = module_8960(_regeneratorRuntime2);

export function getYoutubeMeta(arg0) {
  let closure_0;
  _regeneratorRuntime = arg0;
  let _default = _regeneratorRuntime.default;
  return _default.async(async function getYoutubeMeta$(next) {
    next = next.next;
    next.prev = next;
    while (0 !== next) {
      if (2 === next) {
        sent = next.sent;
        next.next = 5;
        let _default = _regeneratorRuntime.default;
        return _default.awrap(sent.json());
      } else if (5 === next) {
        let str = "return";
        return next.abrupt("return", next.sent);
      } else {
        return next.stop();
      }
    }
    next.next = 2;
    const _default2 = _regeneratorRuntime.default;
    return _default2.awrap(fetch("https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=" + closure_0 + "&format=json"));
  }, null, null, null, Promise);
}
