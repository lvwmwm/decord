// Module ID: 16662
// Function ID: 16663
// Name: VibegrationsDuration
// Dependencies: [1126, 3723, 2]
// Exports: describeDuration, describeElapsedLabel, describeTurnDuration, formatElapsed

// Module 16662 (VibegrationsDuration)
import intl4 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDuration.tsx");

export const describeDuration = function describeDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = intl4.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3723.RsOwXc, obj);
  } else {
    let formatToPlainStringResult;
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = intl4.intl;
      const obj2 = { count: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3723["z+U4YX"], obj2);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const time = { hours: Math.floor(rounded / 60), minutes: rounded % 60 };
      const _Math = Math;
      const prop = _modDef3723["7Q/vz0"];
      formatToPlainStringResult = formatToPlainString(prop, time);
    }
    return formatToPlainStringResult;
  }
};
export const describeTurnDuration = function describeTurnDuration(durationMs) {
  const bound = Math.max(1, Math.round(durationMs / 1000));
  if (bound < 60) {
    const intl3 = intl4.intl;
    const obj = { count: bound };
    return intl3.formatToPlainString(_modDef3723["49T8W0"], obj);
  } else {
    let formatToPlainStringResult;
    const _Math2 = Math;
    const rounded = Math.round(bound / 60);
    if (rounded < 60) {
      const intl2 = intl4.intl;
      const obj2 = { count: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.NkZO2t, obj2);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const time = { hours: Math.floor(rounded / 60), minutes: rounded % 60 };
      const _Math = Math;
      const v2qYUUZ = _modDef3723["2qYUUZ"];
      formatToPlainStringResult = formatToPlainString(v2qYUUZ, time);
    }
    return formatToPlainStringResult;
  }
};
export const formatElapsed = function formatElapsed(vibegrationsElapsedMs) {
  let formatToPlainStringResult;
  let num = 0;
  if (Number.isFinite(vibegrationsElapsedMs)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(vibegrationsElapsedMs / 1000));
  }
  const rounded = Math.floor(num / 3600);
  const result = Math.floor(num / 60) % 60;
  const result1 = num % 60;
  if (rounded > 0) {
    const intl3 = intl4.intl;
    const time = { hours: rounded, minutes: result, seconds: result1 };
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3723.ru1bG9, time);
  } else if (0 < result) {
    const intl2 = intl4.intl;
    const time1 = { minutes: result, seconds: result1 };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3723["9/TJIF"], time1);
  } else {
    const intl = intl4.intl;
    const obj = { seconds: result1 };
    formatToPlainStringResult = intl.formatToPlainString(_modDef3723.FqRCg2, obj);
  }
  return formatToPlainStringResult;
};
export const describeElapsedLabel = function describeElapsedLabel(vibegrationsElapsedMs) {
  let formatToPlainStringResult;
  let num = 0;
  if (Number.isFinite(vibegrationsElapsedMs)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(vibegrationsElapsedMs / 1000));
  }
  const rounded = Math.floor(num / 3600);
  const result = Math.floor(num / 60) % 60;
  if (rounded > 0) {
    const intl3 = intl4.intl;
    const time = { hours: rounded, minutes: result };
    formatToPlainStringResult = intl3.formatToPlainString(_modDef3723.RmLsRf, time);
  } else if (0 < result) {
    const intl2 = intl4.intl;
    const obj = { minutes: result };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3723["/J6kmO"], obj);
  } else {
    const intl = intl4.intl;
    formatToPlainStringResult = intl.string(_modDef3723.gTzQ7A);
  }
  return formatToPlainStringResult;
};
