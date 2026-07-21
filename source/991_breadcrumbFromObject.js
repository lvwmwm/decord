// Module ID: 991
// Function ID: 10643
// Name: breadcrumbFromObject
// Dependencies: []

// Module 991 (breadcrumbFromObject)
arg5.DEFAULT_BREADCRUMB_LEVEL = "info";
arg5.breadcrumbFromObject = function breadcrumbFromObject(type) {
  const obj = {};
  if ("string" === typeof type.type) {
    obj.type = type.type;
  }
  if ("string" === typeof type.level) {
    obj.level = arg1(arg6[0]).severityLevelFromString(type.level);
    const obj2 = arg1(arg6[0]);
  }
  if ("string" === typeof type.event_id) {
    obj.event_id = type.event_id;
  }
  if ("string" === typeof type.category) {
    obj.category = type.category;
  }
  if ("string" === typeof type.message) {
    obj.message = type.message;
  }
  let tmp3 = "object" === typeof type.data;
  if (tmp3) {
    tmp3 = null !== type.data;
  }
  if (tmp3) {
    obj.data = type.data;
  }
  if ("string" === typeof type.timestamp) {
    const _Date = Date;
    const result = Date.parse(type.timestamp) / 1000;
    const _isNaN = isNaN;
    if (!isNaN(result)) {
      obj.timestamp = result;
    }
  }
  return obj;
};
