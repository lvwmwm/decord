// Module ID: 15736
// Function ID: 15737
// Name: AndroidCallWifiLockExperiment
// Dependencies: [1455, 2]
// Exports: shouldAcquireCallWifiLock

// Module 15736 (AndroidCallWifiLockExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-android-call-wifi-lock", defaultConfig: { acquireWifiLock: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { acquireWifiLock: true };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/native/AndroidCallWifiLockExperiment.tsx");

export const shouldAcquireCallWifiLock = function shouldAcquireCallWifiLock() {
  return config.getConfig({ location: "VoiceNotificationManager" }).acquireWifiLock;
};
