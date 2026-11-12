// Module ID: 13465
// Function ID: 13466
// Name: RecentBuildOverrides
// Dependencies: [510, 2]
// Exports: getRecentDeviceBuildOverrides, recordDeviceBuildOverride

// Module 13465 (RecentBuildOverrides)
import Storage3 from "Storage" /* 510 */;
import size from "module_2" /* 2 */;

const recentDeviceBuildOverrides = "recentDeviceBuildOverrides";
let result = size.fileFinishedImporting("modules/build_overrides/native/RecentBuildOverrides.tsx");

export function getRecentDeviceBuildOverrides() {
  const Storage = Storage3.Storage;
  let items = Storage.get(recentDeviceBuildOverrides);
  if (!Array.isArray(items)) {
    items = [];
  }
  return items;
}
export function recordDeviceBuildOverride(arg0) {
  let closure_0 = arg0;
  const tmp = require;
  const Storage = Storage3.Storage;
  let items1 = Storage.get(recentDeviceBuildOverrides);
  const tmp3 = recentDeviceBuildOverrides;
  if (!Array.isArray(items1)) {
    items1 = [];
  }
  const Storage2 = Storage3.Storage;
  const items = [arg0, ...items1.filter((id) => id.id !== id.id || id.type !== tmp.type)];
  const result = Storage2.set(tmp3, items.slice(0, 5));
}
