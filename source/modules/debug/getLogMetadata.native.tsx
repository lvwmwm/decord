// Module ID: 9876
// Function ID: 9877
// Name: getLogMetadata
// Dependencies: [1606, 4283, 2]
// Exports: default

// Module 9876 (getLogMetadata)
const result = require("set").fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let Build;
  let DeviceVendorID;
  let Identifier;
  let Manifest;
  let ReleaseChannel;
  let Version;
  let obj = importAll(1606);
  const constants = obj.getConstants();
  obj = { logsUploaded: null, Identifier: null, Version: null, Manifest: null, ReleaseChannel: null, Build: null, JSBuildNumber: null, DeviceVendorID: null, DeviceInfo: null, systemVersion: null };
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  obj[0] = new Date().toISOString();
  obj[1] = Identifier;
  obj[2] = Version;
  obj[3] = Manifest;
  obj[4] = ReleaseChannel;
  obj[5] = Build;
  const date = new Date();
  obj[6] = importAll(1606).getBuildNumberLabel();
  obj[7] = DeviceVendorID;
  const obj4 = importAll(1606);
  obj[8] = require(4283) /* DCDDeviceManager */.getDeviceInfo();
  const obj5 = require(4283) /* DCDDeviceManager */;
  obj[9] = require(4283) /* DCDDeviceManager */.getSystemVersion();
  return obj;
};
