// Module ID: 8132
// Function ID: 8133
// Name: ClipsSpeakerVolume
// Dependencies: [12, 2]
// Exports: getExportTrackVolumes, getNonDefaultSpeakerVolumes, normalizeSpeakerVolume, sanitizeSpeakerVolumes

// Module 8132 (ClipsSpeakerVolume)
import _mod12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const f93011 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const obj = /^\d+$/;
  const tmp3 = obj.test(tmp) && typeof tmp2 === "number";
  return tmp3;
};
const f93012 = (item) => {
  let clampResult;
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp, ];
  if (Number.isFinite(tmp2)) {
    const obj = _mod12;
    clampResult = obj.clamp(tmp2, 0, 200);
  } else {
    clampResult = closure_1_2;
  }
  items[1] = clampResult;
  return items;
};
let c2 = 100;
const result = size.fileFinishedImporting("modules/clips/ClipsSpeakerVolume.tsx");

export const DEFAULT_VOLUME = 100;
export function normalizeSpeakerVolume(scrollLength) {
  let clampResult;
  if (Number.isFinite(scrollLength)) {
    const obj = _mod12;
    clampResult = obj.clamp(scrollLength, 0, 200);
  } else {
    clampResult = c2;
  }
  return clampResult;
}
export function getNonDefaultSpeakerVolumes(arg0) {
  const entries = Object.entries(arg0);
  const found = entries.filter((item) => {
    let tmp;
    [, tmp] = item;
    return tmp !== closure_1_2;
  });
  let fromEntriesResult;
  if (found.length > 0) {
    const _Object = Object;
    fromEntriesResult = Object.fromEntries(found);
  }
  return fromEntriesResult;
}
export function sanitizeSpeakerVolumes(speakerVolumes) {
  if (null != speakerVolumes) {
    if (typeof speakerVolumes === "object") {
      const _Array = Array;
      if (!Array.isArray(speakerVolumes)) {
        const _Object = Object;
        const _Object2 = Object;
        const entries = Object.entries(speakerVolumes);
        const found = entries.filter(f93011);
        fromEntries(found.map(f93012));
      }
      return {};
    }
  }
}
export function getExportTrackVolumes(speakerVolumes) {
  let clampResult;
  let clampResult1;
  speakerVolumes = undefined;
  if (speakerVolumes != null) {
    speakerVolumes = speakerVolumes.speakerVolumes;
  }
  if (null != speakerVolumes) {
    if (typeof speakerVolumes === "object") {
      let fromEntriesResult;
      const _Array = Array;
      if (!Array.isArray(speakerVolumes)) {
        const _Object = Object;
        const _Object2 = Object;
        const entries = Object.entries(speakerVolumes);
        const found = entries.filter(f93011);
        fromEntriesResult = fromEntries(found.map(f93012));
      }
      let obj = { application: clampResult, soundboard: clampResult1 };
      const tmp2 = obj;
      let tmp3 = fromEntriesResult;
      const merged = Object.assign(fromEntriesResult);
      let applicationVolume;
      if (speakerVolumes != null) {
        applicationVolume = speakerVolumes.applicationVolume;
      }
      if (applicationVolume == null) {
        applicationVolume = c2;
      }
      const _Number = Number;
      if (Number.isFinite(applicationVolume)) {
        const obj3 = _mod12;
        clampResult = obj3.clamp(applicationVolume, 0, 200);
      } else {
        clampResult = c2;
      }
      let soundboardVolume;
      if (speakerVolumes != null) {
        soundboardVolume = speakerVolumes.soundboardVolume;
      }
      if (soundboardVolume == null) {
        soundboardVolume = c2;
      }
      const _Number2 = Number;
      if (Number.isFinite(soundboardVolume)) {
        const obj4 = _mod12;
        clampResult1 = obj4.clamp(soundboardVolume, 0, 200);
      } else {
        clampResult1 = c2;
      }
      return obj;
    }
  }
  fromEntriesResult = {};
}
