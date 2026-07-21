// Module ID: 10317
// Function ID: 79660
// Name: getLogMetadata
// Dependencies: []
// Exports: default

// Module 10317 (getLogMetadata)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let Build;
  let DeviceVendorID;
  let Identifier;
  let Manifest;
  let ReleaseChannel;
  let Version;
  let obj = importAll(dependencyMap[0]);
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
  obj.JSBuildNumber = importAll(dependencyMap[0]).getBuildNumberLabel();
  obj.DeviceVendorID = DeviceVendorID;
  const obj4 = importAll(dependencyMap[0]);
  obj.DeviceInfo = require(dependencyMap[1]).getDeviceInfo();
  const obj5 = require(dependencyMap[1]);
  obj.systemVersion = require(dependencyMap[1]).getSystemVersion();
  return obj;
};
