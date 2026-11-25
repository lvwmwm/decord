// Module ID: 15988
// Function ID: 15989
// Name: useProfileEditorExitHandling
// Dependencies: [5, 32, 19, 9395, 14513, 1081, 9387, 6106, 7307, 14520, 5189, 1501, 1500, 9759, 2]
// Exports: default

// Module 15988 (useProfileEditorExitHandling)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import Constants from "Constants" /* 6106 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7307 */;
import MainTabsConstants from "MainTabsConstants" /* 9387 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 9759 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 14520 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9395 */;
import WidgetStore from "WidgetStore" /* 14513 */;
import size from "module_2" /* 2 */;

let state;

function discardPendingChanges() {
  const obj = UserSettingsAccountActionCreators;
  obj.resetAllPending();
  const obj2 = WidgetActionCreatorsDefault;
  obj2.clearPendingWidgets();
}
let closure_8 = UserSettingsConstants.ProfileCustomizationSubsection;
const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
const UserProfileSections = Constants.UserProfileSections;
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useProfileEditorExitHandling.tsx");

export default function useProfileEditorExitHandling(location) {
  let isSubmitting;
  let onReset;
  let shouldBlockExit;
  const _location = location.location;
  let hasUnsavedChanges = location.hasUnsavedChanges;
  ({ isSubmitting, shouldBlockExit } = location);
  let first;
  let onSave;
  let obj = _location(shouldBlockExit[12]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj2 = first;
  let tmp2 = nativeStackNavigation(first.useState(false), 2);
  first = tmp2[0];
  let closure_6 = tmp2[1];
  const effect = first.useEffect(() => () => {
    const obj = _location(shouldBlockExit[8]);
    const result = obj.resetAndCloseUserProfileForm();
    closure_1_6.resetState();
    const obj2 = hasUnsavedChanges(shouldBlockExit[9]);
    obj2.clearPendingWidgets();
  }, []);
  const items = [onSave];
  onSave = first.useCallback(onSave(function*() {
    let c2;
    function hasPendingBoardChangesOnBoardTab() {
      state = state.getState();
      const hasUnsavedChangesResult = state.subsection === constants.USER_PROFILE && tmp2 === constants2.WIDGETS && closure_1_7.hasUnsavedChanges();
      return hasUnsavedChangesResult;
    }
    function selectYouScreenBoardTab() {
      const obj = closure_1_0(closure_1_2[10]);
      const rootNavigationRef = obj.getRootNavigationRef();
      const tmp = closure_1_0;
      const tmp2 = closure_1_2;
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const routes = rootNavigationRef.getRootState().routes;
          const found = routes.find((name) => name.name === constants.YOU);
          if (null != found) {
            const dispatch = rootNavigationRef.dispatch;
            const obj2 = { source: found.key };
            const CommonActions = tmp(tmp2[11]).CommonActions;
            const obj3 = { initialTab: constants2.WIDGETS };
            const merged = Object.assign(CommonActions.setParams(obj3));
            dispatch(obj2);
          }
        }
      }
    }
    let closure_0 = hasPendingBoardChangesOnBoardTab();
    yield onSave();
    const value = arg1;
    const tmp7 = true === value && closure_0;
    if (tmp7) {
      selectYouScreenBoardTab();
    }
    return value;
  }), items);
  const items1 = [onSave];
  const items2 = [_location, hasUnsavedChanges, onSave];
  const saveAndClose = first.useCallback(onSave(function*() {
    let c2;
    let c3;
    let closure_1;
    const value = yield callback();
    if (false !== value) {
      closure_129_6(true);
    }
    return value;
  }), items1);
  const guardUnsavedChanges = first.useCallback((onContinue) => {
    const obj = { location: _location, hasUnsavedChanges, onReset: discardPendingChanges, onContinue, onSave };
    maybeShowUnsavedChangesAlertDefault(obj);
  }, items2);
  const usePreventRemove = _location(shouldBlockExit[11]).usePreventRemove;
  const tmp8 = _location(shouldBlockExit[11]);
  if (hasUnsavedChanges) {
    let tmp9 = !isSubmitting;
    if (isSubmitting) {
      tmp9 = shouldBlockExit;
    }
    hasUnsavedChanges = tmp9;
  }
  if (hasUnsavedChanges) {
    hasUnsavedChanges = !first;
  }
  const preventRemove = usePreventRemove(hasUnsavedChanges, (data) => {
    const action = data.data.action;
    const tmp = shouldBlockExit;
    if (!tmp) {
      const obj = {
        location: action,
        hasUnsavedChanges,
        onReset,
        onContinue() {
            return nativeStackNavigation.dispatch(action);
          },
        onSave
      };
      hasUnsavedChanges(shouldBlockExit[13])(obj);
    }
  });
  const items3 = [first, nativeStackNavigation];
  const effect1 = obj2.useEffect(() => {
    const tmp = first;
    if (tmp) {
      nativeStackNavigation.goBack();
    }
  }, items3);
  return { saveAndClose, guardUnsavedChanges };
};
