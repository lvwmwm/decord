// Module ID: 14245
// Function ID: 107698
// Name: getYoutubeMeta
// Dependencies: []
// Exports: getYoutubeMeta

// Module 14245 (getYoutubeMeta)
const _module = require(dependencyMap[0]);
let closure_0 = _module(require(dependencyMap[1]));

export const getYoutubeMeta = function getYoutubeMeta(arg0) {
  const mod = arg0;
  return mod.default.async(function getYoutubeMeta$(next) {
    next = next.next;
    next.prev = next;
    while (0 !== next) {
      if (2 === next) {
        let sent = next.sent;
        next.next = 5;
        let tmp = next;
        let _default = next.default;
        let tmp2 = sent;
        return _default.awrap(sent.json());
      } else if (5 === next) {
        let str = "return";
        return next.abrupt("return", next.sent);
      } else {
        return next.stop();
      }
    }
    next.next = 2;
    return next.default.awrap(fetch("https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=" + next + "&format=json"));
  }, null, null, null, Promise);
};
