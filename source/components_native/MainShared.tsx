// Module ID: 15649
// Function ID: 120656
// Name: BurstReactionAnimationContainer
// Dependencies: [31, 27, 1348, 4203, 33, 566, 10459, 3982, 10626, 15650, 477, 13566, 1212, 15652, 13561, 13431, 2, 15653, 15654, 15655, 15656, 15664, 15666, 15693]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 15649 (BurstReactionAnimationContainer)
import result from "result";
import { NativeModules } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = require("BurstReactionAnimationContainerInner");
export const MenuContainer = require("MenuContainer");
export const ActionSheetContainer = require("ActionSheetPresenter");
export const Alerts = require("_isNativeReflectConstruct");
export const SoundPlayer = require("useSound");
export const MainViewTooltipActionSheetsV2 = require("getActionSheetType");
export const ToastContainer = require("AnimatedToast");
export const PictureInPictureGlobalContainer = function PictureInPictureGlobalContainer() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(outer1_6.getChannelId()));
  const hasPipParticipant = require(10459) /* usePipVideoOrStream */.useHasPipParticipant({ isActivityViewFocused: false });
  const obj2 = require(10459) /* usePipVideoOrStream */;
  const isModalOpen = require(3982) /* _createForOfIteratorHelperLoose */.useIsModalOpen();
  require(10626) /* isVoicePanelEnabled */;
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = null;
    if (hasPipParticipant) {
      tmp6 = null;
      if (!isModalOpen) {
        tmp6 = null;
        if (!tmp5) {
          obj = { channel: stateFromStores };
          tmp6 = jsx(importDefault(15650), { channel: stateFromStores });
        }
      }
    }
  }
  return tmp6;
};
export const useAppKeyCommands = function useAppKeyCommands() {
  const memo = React.useMemo(() => {
    const obj = { input: "k", modifierFlags: null, eventName: "keyCommandShowQuickSwitcher" };
    if (obj2.isAndroid()) {
      let keyModifierCommand = outer1_1(outer1_2[11]).getConstants().keyModifierCommand;
      const obj3 = outer1_1(outer1_2[11]);
    } else {
      keyModifierCommand = outer1_4.KeyCommandsView.keyModifierCommand;
    }
    obj.modifierFlags = keyModifierCommand;
    const intl = outer1_0(outer1_2[12]).intl;
    obj.discoverabilityTitle = intl.string(outer1_0(outer1_2[12]).t.yYsRlD);
    obj.onKeyCommand = function onKeyCommand() {
      outer2_1(outer2_2[13])();
    };
    const items = [obj];
    return items;
  }, []);
  const keyCommands = require(13561) /* _createForOfIteratorHelperLoose */.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = React.useEffect(() => {
    const result = outer1_1(outer1_2[15]).checkScreenreaderEnabled();
  }, []);
};
