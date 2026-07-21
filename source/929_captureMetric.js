// Module ID: 929
// Function ID: 10105
// Name: captureMetric
// Dependencies: []

// Module 929 (captureMetric)
function captureMetric(distribution, name, value, unit) {
  let obj = name(arg6[0]);
  obj = { type: distribution, name, value };
  unit = undefined;
  if (null != unit) {
    unit = unit.unit;
  }
  obj.unit = unit;
  let attributes;
  if (null != unit) {
    attributes = unit.attributes;
  }
  obj.attributes = attributes;
  obj = {};
  let scope;
  if (null != unit) {
    scope = unit.scope;
  }
  obj.scope = scope;
  const result = obj._INTERNAL_captureMetric(obj, obj);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.count = function count(arg0) {
  let num = 1;
  if (arguments.length > 1) {
    num = 1;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  let tmp2;
  if (arguments.length > 2) {
    tmp2 = arguments[2];
  }
  captureMetric("counter", arg0, num, tmp2);
};
arg5.distribution = function distribution(name, value, unit) {
  captureMetric("distribution", name, value, unit);
};
arg5.gauge = function gauge(name, value, unit) {
  captureMetric("gauge", name, value, unit);
};
