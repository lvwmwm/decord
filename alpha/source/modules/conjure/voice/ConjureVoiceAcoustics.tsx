// Module ID: 15486
// Function ID: 15487
// Name: ConjureVoiceAcoustics
// Dependencies: [2]
// Exports: getRoomError, toSpatialAudioOverrides

// Module 15486 (ConjureVoiceAcoustics)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/voice/ConjureVoiceAcoustics.tsx");

export const toSpatialAudioOverrides = function toSpatialAudioOverrides(acoustics) {
  let air_absorption;
  let binaural;
  let distance_attenuation;
  let reflections;
  let room;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  ({ binaural, distance_attenuation, air_absorption, reflections } = acoustics);
  if (reflections != null) {
    room = reflections.room;
  }
  let tmp;
  if (null != binaural) {
    const obj = { spatialBlend: null, bilinearInterpolation: null, hrtfVolume: null, hrtfNormalization: null };
    ({ spatial_blend: obj.spatialBlend, bilinear_interpolation: obj.bilinearInterpolation, hrtf_volume: obj.hrtfVolume, hrtf_normalization: obj.hrtfNormalization } = binaural);
    tmp = obj;
  }
  const obj2 = { binaural: tmp, distanceAttenuation: tmp2, airAbsorption: tmp3, reflections: tmp4 };
  tmp2 = undefined;
  if (null != distance_attenuation) {
    const obj11 = { enabled: null, minDistance: null };
    ({ enabled: obj3.enabled, min_distance: obj3.minDistance } = distance_attenuation);
    tmp2 = obj11;
  }
  tmp3 = undefined;
  if (null != air_absorption) {
    const obj12 = { enabled: null, coefficients: null };
    ({ enabled: obj4.enabled, coefficients: obj4.coefficients } = air_absorption);
    tmp3 = obj12;
  }
  tmp4 = undefined;
  if (null != reflections) {
    const obj13 = { enabled: null, durationSeconds: null, numRays: null, numBounces: null, irradianceMinDistance: null, binauralDecode: null, mixLevel: null, room: tmp5 };
    ({ enabled: obj5.enabled, duration_seconds: obj5.durationSeconds, num_rays: obj5.numRays, num_bounces: obj5.numBounces, irradiance_min_distance: obj5.irradianceMinDistance, binaural_decode: obj5.binauralDecode, mix_level: obj5.mixLevel } = reflections);
    tmp5 = undefined;
    if (null != room) {
      const obj14 = { minCorner: null, maxCorner: null, floor: null, ceiling: null, walls: null };
      ({ min_corner: obj6.minCorner, max_corner: obj6.maxCorner, floor: obj6.floor, ceiling: obj6.ceiling, walls: obj6.walls } = room);
      tmp5 = obj14;
    }
    tmp4 = obj13;
  }
  return obj2;
};
export const getRoomError = function getRoomError(reflections) {
  let max_corner;
  let tmp2;
  reflections = reflections.reflections;
  let min_corner;
  if (reflections != null) {
    const room = reflections.room;
    if (room != null) {
      min_corner = room.min_corner;
    }
  }
  const reflections2 = reflections.reflections;
  if (reflections2 != null) {
    const room2 = reflections2.room;
    if (room2 != null) {
      max_corner = room2.max_corner;
    }
  }
  if (null != min_corner) {
    let str2 = "A room needs both min_corner and max_corner";
    if (null != min_corner) {
      str2 = "A room needs both min_corner and max_corner";
      if (null != max_corner) {
        if (min_corner.x < max_corner.x) {
          let str3;
          if (min_corner.y < max_corner.y) {
            str3 = null;
          }
          str2 = str3;
        }
        str3 = "A room min_corner must be below its max_corner on every axis";
      }
    }
    tmp2 = str2;
  } else {
    tmp2 = null;
  }
  return tmp2;
};
