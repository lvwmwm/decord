// Module ID: 12913
// Function ID: 12914
// Name: SemVer
// Dependencies: [12905]

// Module 12913 (SemVer)

export default (version, pre, major2) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 !== "init") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    let tmp7 = require(12905) /* SemVer */;
    if (version instanceof require(12905) /* SemVer */) {
      version = version.version;
    }
    tmp7 = new tmp7(version, tmp3);
    return tmp7.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
