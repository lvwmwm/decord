// Module ID: 15691
// Function ID: 15692
// Name: useAddableWidgets
// Dependencies: [19, 12174, 1385, 7291, 12157, 5068, 563, 12048, 15692, 15693, 15694, 7871, 12175, 7293, 15695, 7289, 1380, 7294, 7296, 7290, 2]
// Exports: default

// Module 15691 (useAddableWidgets)
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 7291 */;
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 12157 */;
import ApplicationWidgetConfigActions from "ApplicationWidgetConfigActions" /* 12175 */;
import react from "react" /* 19 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 12174 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

function hasAddableApplicationWidgetSurfaces(arg0) {
  const tmp3 = null != arg0.surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_TOP] && null != arg0.surfaces[tmp(undefined, 12157).ApplicationWidgetConfigSurface.WIDGET_BOTTOM] && null != arg0.surfaces[tmp(undefined, 12157).ApplicationWidgetConfigSurface.ADD_WIDGET_PREVIEW];
  return tmp3;
}
const WIDGET_SORT_ORDER = UserProfileWidgetConstants.WIDGET_SORT_ORDER;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useAddableWidgets.tsx");

export default function useAddableWidgets() {
  let closure_1;
  let enabled;
  let setting;
  let stateFromStores2;
  let stateFromStores3;
  let tmp = setting;
  const tmp2 = enabled;
  const DeveloperMode = setting(enabled[5]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  let obj = setting(enabled[6]);
  let items = [stateFromStores3];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores3.getCurrentUser());
  let id;
  const tmp6 = require("useUserProfileWidgets");
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6Result = tmp6(id);
  importDefault = tmp6Result;
  const tmp5Result = require("UserProfilePersonalWidgetExperiment");
  enabled = tmp5Result.useConfig({ location: "useAddableWidgets" }).enabled;
  let tmpResult = tmp(tmp2[6]);
  let items1 = [stateFromStores2];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => stateFromStores2.getAllConfigsByApplication());
  let items2 = [stateFromStores2];
  const tmpResult4 = tmp(tmp2[6]);
  stateFromStores2 = tmpResult4.useStateFromStores(items2, () => stateFromStores2.getFeaturedApplicationIds());
  let items3 = [stateFromStores2];
  const tmpResult5 = tmp(tmp2[6]);
  stateFromStores3 = tmpResult5.useStateFromStores(items3, () => stateFromStores2.getDeveloperApplicationIds());
  const tmpResult6 = tmp(tmp2[9]);
  const isClipsAvailable = tmpResult6.useIsClipsAvailable();
  const tmp5Result2 = require("ClipsOnProfileSetterExperiment");
  let obj2 = { location: tmp5(tmp2[11]).USER_PROFILE_MODAL_V2 };
  const tmp13 = tmp5Result2.useConfig(obj2).enabled && isClipsAvailable;
  let closure_6 = tmp13;
  const items4 = [setting];
  const effect = stateFromStores1.useEffect(() => {
    const obj = ApplicationWidgetConfigActions;
    const featuredWidgetConfigs = obj.fetchFeaturedWidgetConfigs();
    featuredWidgetConfigs.catch(() => {

    });
    const tmp4 = setting;
    if (tmp4) {
      const tmpResult = ApplicationWidgetConfigActions;
      const developerWidgetConfigs = tmpResult.fetchDeveloperWidgetConfigs();
      developerWidgetConfigs.catch(() => {

      });
    }
  }, items4);
  const items5 = [setting, stateFromStores1, stateFromStores2, stateFromStores3, tmp6Result, tmp13, enabled];
  return stateFromStores1.useMemo(() => {
    let set1;
    let found = set1.filter((item) => item instanceof set(enabled[13]).ApplicationWidget);
    set = new Set(found.map((applicationId) => applicationId.applicationId));
    set1 = new Set(set1.map((type) => type.type));
    let found1 = closure_6.filter((item) => {
      const ADDABLE_WIDGET_TYPES = set(enabled[14]).ADDABLE_WIDGET_TYPES;
      return ADDABLE_WIDGET_TYPES.has(item);
    });
    return found1.flatMap(function(type) {
      if (setting(enabled[15]).WidgetType.APPLICATION === type) {
        const items = [];
        const _Set = Set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, stateFromStores2, 0);
        const tmp17 = set ? stateFromStores3 : [];
        HermesBuiltin.arraySpread(items, tmp17, arraySpreadResult);
        const self5 = this;
        const self6 = this;
        const _Set1 = new _Set(items);
        const _Object = Object;
        const values = Object.values(stateFromStores1);
        const mapped = values.map((item) => item[0]);
        const found = mapped.filter(tmp2(tmp3[16]).isNotNullish);
        const found1 = found.filter((application_id) => _Set1.has(application_id.application_id));
        const found2 = found1.filter((application_id) => !_Set1.has(application_id.application_id));
        const found3 = found2.filter(hasAddableApplicationWidgetSurfaces);
        return found3.map((applicationId) => {
          const obj = { applicationId: applicationId.application_id };
          const applicationWidget = new _Set1(closure_1_2[13]).ApplicationWidget(obj);
          return applicationWidget;
        });
      } else if (setting(enabled[15]).WidgetType.PERSONAL === type) {
        let items2;
        const tmp10 = closure_1_2;
        if (tmp10) {
          let items1;
          if (set1.has(type)) {
            items1 = [];
          } else {
            const tmp2Result = setting(enabled[17]);
            items1 = tmp2Result.createDefaultPersonalWidget();
          }
          items2 = items1;
        } else {
          items2 = [];
        }
        return items2;
      } else if (setting(enabled[15]).WidgetType.CLIPS_GALLERY === type) {
        const tmp7 = closure_1_6;
        if (tmp7) {
          let clipsGalleryWidget;
          if (!set1.has(type)) {
            let obj = { clips: [] };
            const self3 = this;
            const self4 = this;
            clipsGalleryWidget = new tmp2(tmp3[18]).ClipsGalleryWidget(obj);
          }
          return clipsGalleryWidget;
        }
        clipsGalleryWidget = [];
      } else {
        let assertNeverResult;
        const tmp2Result3 = setting(enabled[19]);
        if (tmp2Result3.isGameWidgetType(type)) {
          let items3;
          if (set1.has(type)) {
            items3 = [];
          } else {
            const self = this;
            const self2 = this;
            const obj2 = { type, games: [] };
            items3 = new tmp2(tmp3[19]).BaseGameWidget(obj2);
          }
          assertNeverResult = items3;
        } else {
          const tmp2Result4 = setting(enabled[16]);
          assertNeverResult = tmp2Result4.assertNever(type);
        }
        return assertNeverResult;
      }
    });
  }, items5);
};
export { hasAddableApplicationWidgetSurfaces };
