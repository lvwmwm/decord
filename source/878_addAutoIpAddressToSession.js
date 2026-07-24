// Module ID: 878
// Function ID: 9754
// Name: addAutoIpAddressToSession
// Dependencies: []

// Module 878 (addAutoIpAddressToSession)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addAutoIpAddressToSession = function addAutoIpAddressToSession(attrs) {
  if ("aggregates" in attrs) {
    attrs = attrs.attrs;
    let ip_address;
    if (null != attrs) {
      ip_address = attrs.ip_address;
    }
    if (undefined === ip_address) {
      const _Object = Object;
      const obj = { ip_address: "{{auto}}" };
      attrs.attrs = Object.assign({}, attrs.attrs, obj);
    }
  } else if (undefined === attrs.ipAddress) {
    attrs.ipAddress = "{{auto}}";
  }
};
arg5.addAutoIpAddressToUser = function addAutoIpAddressToUser(user) {
  user = user.user;
  let ip_address;
  if (null != user) {
    ip_address = user.ip_address;
  }
  if (undefined === ip_address) {
    const _Object = Object;
    const obj = { ip_address: "{{auto}}" };
    user.user = Object.assign({}, user.user, obj);
  }
};
