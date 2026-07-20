// Module ID: 557
// Function ID: 6720
// Name: ResponseBase
// Dependencies: []

// Module 557 (ResponseBase)
class ResponseBase {
  constructor() {
    return;
  }
  get(arg0) {
    return this.header[global.toLowerCase(global)];
  }
  _setHeaderProperties(arg0) {
    self = this;
    str = global.content-type;
    tmp = global;
    if (!str) {
      str = "";
    }
    obj = require(dependencyMap[0]);
    self.type = obj.type(str);
    obj2 = require(dependencyMap[0]);
    paramsResult = obj2.params(str);
    for (const key10019 in paramsResult) {
      tmp5 = key10019;
      _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(paramsResult, key10019)) {
        continue;
      } else {
        self[key10019] = paramsResult[key10019];
        // continue
      }
      continue;
    }
    self.links = {};
    if (tmp.link) {
      tmp3 = require;
      tmp4 = dependencyMap;
      obj3 = require(dependencyMap[0]);
      self.links = obj3.parseLinks(global.link);
    }
    return;
  }
  _setStatusProperties(arg0) {
    self = this;
    truncResult = Math.trunc(global / 100);
    this.statusCode = global;
    this.status = this.statusCode;
    this.statusType = truncResult;
    this.info = 1 === truncResult;
    this.ok = 2 === truncResult;
    this.redirect = 3 === truncResult;
    toErrorResult = 4 === truncResult;
    this.clientError = toErrorResult;
    tmp3 = 5 === truncResult;
    this.serverError = tmp3;
    if (!toErrorResult) {
      toErrorResult = tmp3;
    }
    if (toErrorResult) {
      toErrorResult = self.toError();
    }
    self.error = toErrorResult;
    self.created = 201 === global;
    self.accepted = 202 === global;
    self.noContent = 204 === global;
    self.badRequest = 400 === global;
    self.unauthorized = 401 === global;
    self.notAcceptable = 406 === global;
    self.forbidden = 403 === global;
    self.notFound = 404 === global;
    self.unprocessableEntity = 422 === global;
    return;
  }
}

export default ResponseBase;
