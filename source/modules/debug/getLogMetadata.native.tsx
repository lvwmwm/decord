// Module ID: 9923
// Function ID: 9924
// Name: getLogMetadata
// Dependencies: [1625, 4324, 2]
// Exports: default

// Module 9923 (getLogMetadata)
const result = require("set").fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let Build;
  let DeviceVendorID;
  let Identifier;
  let Manifest;
  let ReleaseChannel;
  let Version;
  let obj = importAll(1625);
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
  obj[6] = importAll(1625).getBuildNumberLabel();
  obj[7] = DeviceVendorID;
  const obj4 = importAll(1625);
  obj[8] = require(4324) /* DCDDeviceManager */.getDeviceInfo();
  const obj5 = require(4324) /* DCDDeviceManager */;
  obj[9] = require(4324) /* DCDDeviceManager */.getSystemVersion();
  return obj;
};
