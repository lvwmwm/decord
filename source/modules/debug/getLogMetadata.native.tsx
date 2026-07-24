// Module ID: 10360
// Function ID: 79938
// Name: getLogMetadata
// Dependencies: [1554, 4110, 2]
// Exports: default

// Module 10360 (getLogMetadata)
const result = require("set").fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let Build;
  let DeviceVendorID;
  let Identifier;
  let Manifest;
  let ReleaseChannel;
  let Version;
  let obj = importAll(1554);
  const constants = obj.getConstants();
  obj = {};
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  obj.logsUploaded = new Date().toISOString();
  obj.Identifier = Identifier;
  obj.Version = Version;
  obj.Manifest = Manifest;
  obj.ReleaseChannel = ReleaseChannel;
  obj.Build = Build;
  const date = new Date();
  obj.JSBuildNumber = importAll(1554).getBuildNumberLabel();
  obj.DeviceVendorID = DeviceVendorID;
  const obj4 = importAll(1554);
  obj.DeviceInfo = require(4110) /* getSystemVersion */.getDeviceInfo();
  const obj5 = require(4110) /* getSystemVersion */;
  obj.systemVersion = require(4110) /* getSystemVersion */.getSystemVersion();
  return obj;
};
