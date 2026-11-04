// Module ID: 16533
// Function ID: 16534
// Name: AndroidCallWifiLockExperiment
// Dependencies: [1449, 2]
// Exports: shouldAcquireCallWifiLock

// Module 16533 (AndroidCallWifiLockExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-android-call-wifi-lock", defaultConfig: { acquireWifiLock: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { acquireWifiLock: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/native/AndroidCallWifiLockExperiment.tsx");

export function shouldAcquireCallWifiLock() {
  return config.getConfig({ location: "VoiceNotificationManager" }).acquireWifiLock;
}
