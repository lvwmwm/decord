// Module ID: 12277
// Function ID: 12278
// Name: useTrackAppLauncherItemImpressionOnFirstView
// Dependencies: [19, 558, 568, 11505, 1489, 9078, 1253, 2]

// Module 12277 (useTrackAppLauncherItemImpressionOnFirstView)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1253 */;
import useTrackImpression from "useTrackImpression" /* 9078 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx");

export const useTrackAppLauncherItemImpressionOnFirstView = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = entrypoint(568).c(6);
  let obj = entrypoint(568);
  const tmp = entrypoint;
  entrypoint = entrypoint(11505).useAppLauncherContext().entrypoint;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    const set = new Set();
    cResult[0] = set;
    let first = set;
  } else {
    first = cResult[0];
  }
  dependencyMap = noop.useRef(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const current = ref.current;
      current.clear();
    };
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  let obj2 = entrypoint(11505);
  const focusEffect = tmp(1489).useFocusEffect(tmp9);
  if (cResult[2] !== entrypoint) {
    const fn2 = function p(itemKey) {
      itemKey = itemKey.itemKey;
      const current = ref.current;
      ({ sectionName, sectionPosition, sectionOverallPosition, applicationId, commandId, applicationFlags } = itemKey);
      if (!current.has(itemKey)) {
        const current2 = ref.current;
        current2.add(itemKey);
        const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_ITEM, properties: null };
        const obj3 = { source: entrypoint, section_name: sectionName, section_position: sectionPosition, section_overall_position: sectionOverallPosition, application_id: applicationId, command_id: commandId, application_flags: applicationFlags };
        obj2.properties = obj3;
        useTrackImpression.trackImpression(obj2);
      }
    };
    cResult[2] = entrypoint;
    cResult[3] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp11) {
    let obj3 = { trackAppLauncherItemImpressionOnFirstView: tmp11 };
    cResult[4] = tmp11;
    cResult[5] = obj3;
    let tmp12 = obj3;
  } else {
    tmp12 = cResult[5];
  }
  return tmp12;
}) : (() => {
  entrypoint = entrypoint(11505).useAppLauncherContext().entrypoint;
  let obj = entrypoint(11505);
  dependencyMap = noop.useRef(new Set());
  const set = new Set();
  const focusEffect = entrypoint(1489).useFocusEffect(noop.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  let obj3 = { trackAppLauncherItemImpressionOnFirstView: null };
  const items = [entrypoint];
  obj3.trackAppLauncherItemImpressionOnFirstView = noop.useCallback((itemKey) => {
    itemKey = itemKey.itemKey;
    const current = ref.current;
    ({ sectionName, sectionPosition, sectionOverallPosition, applicationId, commandId, applicationFlags } = itemKey);
    if (!current.has(itemKey)) {
      const current2 = ref.current;
      current2.add(itemKey);
      const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_ITEM, properties: null };
      const obj3 = { source: entrypoint, section_name: sectionName, section_position: sectionPosition, section_overall_position: sectionOverallPosition, application_id: applicationId, command_id: commandId, application_flags: applicationFlags };
      obj2.properties = obj3;
      useTrackImpression.trackImpression(obj2);
    }
  }, items);
  return obj3;
});
