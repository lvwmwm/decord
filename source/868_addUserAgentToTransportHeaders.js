// Module ID: 868
// Function ID: 9677
// Name: addUserAgentToTransportHeaders
// Dependencies: []

// Module 868 (addUserAgentToTransportHeaders)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addUserAgentToTransportHeaders = function addUserAgentToTransportHeaders(_metadata) {
  _metadata = _metadata._metadata;
  let sdk;
  if (null != _metadata) {
    sdk = _metadata.sdk;
  }
  let combined;
  if (null != sdk) {
    if (sdk.name) {
      if (null != sdk) {
        if (sdk.version) {
          let name;
          if (null != sdk) {
            name = sdk.name;
          }
          let version;
          if (null != sdk) {
            version = sdk.version;
          }
          const _HermesInternal = HermesInternal;
          combined = "" + name + "/" + version;
        }
      }
    }
  }
  let obj = {};
  let tmp6 = combined;
  if (combined) {
    obj = { "user-agent": combined };
    tmp6 = obj;
  }
  const transportOptions = _metadata.transportOptions;
  let headers;
  if (null != transportOptions) {
    headers = transportOptions.headers;
  }
  obj.headers = Object.assign({}, tmp6, headers);
  _metadata.transportOptions = Object.assign({}, _metadata.transportOptions, obj);
};
