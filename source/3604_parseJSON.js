// Module ID: 3604
// Function ID: 27811
// Name: parseJSON
// Dependencies: []
// Exports: default

// Module 3604 (parseJSON)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function parseJSON(defaultResult1) {
  closure_1.default(1, arguments);
  if ("string" === typeof defaultResult1) {
    const match = defaultResult1.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
    let _Date = Date;
    if (match) {
      const _Date2 = Date;
      let num5 = +match[9];
      if (!num5) {
        num5 = 0;
      }
      let num7 = 1;
      if ("-" == match[8]) {
        num7 = -1;
      }
      let num10 = +match[10];
      if (!num10) {
        num10 = 0;
      }
      let num11 = 1;
      if ("-" == match[8]) {
        num11 = -1;
      }
      const text = `${tmp14}00`;
      const prototype2 = _Date.prototype;
      _Date = new _Date(Date.UTC(tmp8, +match[2] - 1, tmp10, +match[4] - num5 * num7, +match[5] - num10 * num11, tmp13, +`${tmp14}00`.substring(0, 3)));
      const tmp11 = +match[4];
      const tmp12 = +match[5];
      const tmp9 = +match[2];
    } else {
      const _NaN = NaN;
      const prototype = _Date.prototype;
      _Date = new _Date(NaN);
    }
    return _Date;
  } else {
    return closure_0.default(defaultResult1);
  }
};
export default exports.default;
