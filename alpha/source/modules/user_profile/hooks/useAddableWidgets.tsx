// Module ID: 14433
// Function ID: 14434
// Name: useAddableWidgets
// Dependencies: [19, 10212, 1386, 6840, 10197, 4619, 563, 10093, 14434, 14435, 7419, 10216, 6842, 14436, 6838, 1254, 6843, 6839, 2]
// Exports: default

// Module 14433 (useAddableWidgets)
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 6840 */;
import ApplicationWidgetConfigSurface from "ApplicationWidgetConfigSurface" /* 10197 */;
import ApplicationWidgetConfigActions from "ApplicationWidgetConfigActions" /* 10216 */;
import react from "react" /* 19 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 10212 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

function hasAddableApplicationWidgetSurfaces(arg0) {
  const tmp3 = null != arg0.surfaces[ApplicationWidgetConfigSurface.ApplicationWidgetConfigSurface.WIDGET_TOP] && null != arg0.surfaces[tmp(undefined, 10197).ApplicationWidgetConfigSurface.WIDGET_BOTTOM] && null != arg0.surfaces[tmp(undefined, 10197).ApplicationWidgetConfigSurface.ADD_WIDGET_PREVIEW];
  return tmp3;
}
const WIDGET_SORT_ORDER = UserProfileWidgetConstants.WIDGET_SORT_ORDER;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useAddableWidgets.tsx");

export default function useAddableWidgets() {
  let closure_1;
  let currentUser;
  let setting;
  let stateFromStores1;
  let stateFromStores3;
  let tmp = setting;
  const tmp2 = stateFromStores1;
  const DeveloperMode = setting(stateFromStores1[5]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  let obj = setting(stateFromStores1[6]);
  let items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  const tmp6 = require("useUserProfileWidgets");
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6Result = tmp6(id);
  importDefault = tmp6Result;
  let tmpResult = tmp(tmp2[6]);
  let items1 = [stateFromStores3];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => stateFromStores3.getAllConfigsByApplication());
  const items2 = [stateFromStores3];
  const tmpResult4 = tmp(tmp2[6]);
  const stateFromStores2 = tmpResult4.useStateFromStores(items2, () => stateFromStores3.getFeaturedApplicationIds());
  const items3 = [stateFromStores3];
  const tmpResult5 = tmp(tmp2[6]);
  stateFromStores3 = tmpResult5.useStateFromStores(items3, () => stateFromStores3.getDeveloperApplicationIds());
  const tmpResult6 = tmp(tmp2[8]);
  const isClipsAvailable = tmpResult6.useIsClipsAvailable();
  const tmp5Result = require("ClipsOnProfileSetterExperiment");
  let obj2 = { location: tmp5(tmp2[10]).USER_PROFILE_MODAL_V2 };
  const tmp13 = tmp5Result.useConfig(obj2).enabled && isClipsAvailable;
  currentUser = tmp13;
  const items4 = [setting];
  const effect = stateFromStores2.useEffect(() => {
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
  const items5 = [setting, stateFromStores1, stateFromStores2, stateFromStores3, tmp6Result, tmp13];
  return stateFromStores2.useMemo(() => {
    let set1;
    let found = set1.filter((item) => item instanceof set(stateFromStores1[12]).ApplicationWidget);
    set = new Set(found.map((applicationId) => applicationId.applicationId));
    set1 = new Set(set1.map((type) => type.type));
    let found1 = WIDGET_SORT_ORDER.filter((item) => {
      const ADDABLE_WIDGET_TYPES = set(stateFromStores1[13]).ADDABLE_WIDGET_TYPES;
      return ADDABLE_WIDGET_TYPES.has(item);
    });
    return found1.flatMap(function(type) {
      if (setting(stateFromStores1[14]).WidgetType.APPLICATION === type) {
        const items = [];
        const _Set = Set;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, stateFromStores2, 0);
        const tmp15 = set ? stateFromStores3 : [];
        HermesBuiltin.arraySpread(items, tmp15, arraySpreadResult);
        const self5 = this;
        const self6 = this;
        const _Set1 = new _Set(items);
        const _Object = Object;
        const values = Object.values(closure_1_2);
        const mapped = values.map((item) => item[0]);
        const found = mapped.filter(tmp2(tmp3[15]).isNotNullish);
        const found1 = found.filter((application_id) => _Set1.has(application_id.application_id));
        const found2 = found1.filter((application_id) => !_Set1.has(application_id.application_id));
        const found3 = found2.filter(hasAddableApplicationWidgetSurfaces);
        return found3.map((applicationId) => {
          const obj = { applicationId: applicationId.application_id };
          const applicationWidget = new _Set1(closure_1_2[12]).ApplicationWidget(obj);
          return applicationWidget;
        });
      } else if (setting(stateFromStores1[14]).WidgetType.CLIPS_GALLERY === type) {
        const tmp7 = currentUser;
        if (tmp7) {
          let clipsGalleryWidget;
          if (!set1.has(type)) {
            let obj = { clips: [] };
            const self3 = this;
            const self4 = this;
            clipsGalleryWidget = new tmp2(tmp3[16]).ClipsGalleryWidget(obj);
          }
          return clipsGalleryWidget;
        }
        clipsGalleryWidget = [];
      } else {
        let assertNeverResult;
        const tmp2Result = setting(stateFromStores1[17]);
        if (tmp2Result.isGameWidgetType(type)) {
          let items1;
          if (set1.has(type)) {
            items1 = [];
          } else {
            const self = this;
            const self2 = this;
            const obj2 = { type, games: [] };
            items1 = new tmp2(tmp3[17]).BaseGameWidget(obj2);
          }
          assertNeverResult = items1;
        } else {
          const tmp2Result2 = setting(stateFromStores1[15]);
          assertNeverResult = tmp2Result2.assertNever(type);
        }
        return assertNeverResult;
      }
    });
  }, items5);
};
export { hasAddableApplicationWidgetSurfaces };
