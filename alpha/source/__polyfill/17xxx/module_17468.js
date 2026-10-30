// Module ID: 17468
// Function ID: 17469
// Dependencies: [8844, 17469]
// Exports: getYoutubeMeta

// Module 17468
import _regeneratorRuntime2 from "_regeneratorRuntime" /* 17469 */;
import module_8844 from "module_8844" /* 8844 */;

let sent;

let _regeneratorRuntime = module_8844(_regeneratorRuntime2);

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
