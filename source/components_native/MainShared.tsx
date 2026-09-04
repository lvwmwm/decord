// Module ID: 16830
// Function ID: 16831
// Name: BurstReactionAnimationContainer
// Dependencies: [19, 17, 1386, 4557, 21, 586, 9419, 4335, 9610, 16831, 1234, 14505, 1233, 16833, 14500, 14360, 2, 16834, 16835, 16836, 16837, 16845, 16846, 16876]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 16830 (BurstReactionAnimationContainer)
import initialize from "initialize" /* 586 */;
import coerceMainRoute from "coerceMainRoute" /* 4335 */;
import usePipVideoOrStream from "usePipVideoOrStream" /* 9419 */;
import isVoicePanelEnabled from "isVoicePanelEnabled" /* 9610 */;
import KeyCommandsView from "KeyCommandsView" /* 14500 */;
import PictureInPictureGlobalDefault from "PictureInPictureGlobal" /* 16831 */;
import BurstReactionAnimationContainerInnerDefault from "BurstReactionAnimationContainerInner" /* 16834 */;
import MenuContainerDefault from "MenuContainer" /* 16835 */;
import ActionSheetPresenterDefault from "ActionSheetPresenter" /* 16836 */;
import StyleSheetDefault from "StyleSheet" /* 16837 */;
import MuteDeafenDefault from "MuteDeafen" /* 16845 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16846 */;
import AnimatedToastDefault from "AnimatedToast" /* 16876 */;
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "createRTCConnection" /* 4557 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let result = require("set").fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = BurstReactionAnimationContainerInnerDefault;
export const MenuContainer = MenuContainerDefault;
export const ActionSheetContainer = ActionSheetPresenterDefault;
export const Alerts = StyleSheetDefault;
export const SoundPlayer = MuteDeafenDefault;
export const MainViewTooltipActionSheetsV2 = trackActionSheetImpressionDefault;
export const ToastContainer = AnimatedToastDefault;
export const PictureInPictureGlobalContainer = function PictureInPictureGlobalContainer() {
  let obj = initialize;
  const items = [closure_5, closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const hasPipParticipant = usePipVideoOrStream.useHasPipParticipant({ isActivityViewFocused: false });
  const obj2 = usePipVideoOrStream;
  const isModalOpen = coerceMainRoute.useIsModalOpen();
  isVoicePanelEnabled;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (hasPipParticipant) {
      tmp7 = null;
      if (!isModalOpen) {
        tmp7 = null;
        if (!tmp6) {
          obj = { channel: null };
          obj[0] = stateFromStores;
          tmp7 = jsx(PictureInPictureGlobalDefault, { channel: null });
        }
      }
    }
  }
  return tmp7;
};
export const useAppKeyCommands = function useAppKeyCommands() {
  const memo = React.useMemo(() => {
    let obj = callback(table[10]);
    if (obj.isAndroid()) {
      let keyModifierCommand = callback2(tmp2[11]).getConstants().keyModifierCommand;
      const obj2 = callback2(tmp2[11]);
    } else {
      keyModifierCommand = KeyCommandsView.KeyCommandsView.keyModifierCommand;
    }
    obj = { input: "k", modifierFlags: keyModifierCommand, eventName: "keyCommandShowQuickSwitcher", discoverabilityTitle: null, onKeyCommand: null };
    const intl = tmp(tmp2[12]).intl;
    obj[3] = intl.string(callback(table[12]).t.yYsRlD);
    obj[4] = function onKeyCommand() {
      callback(table[13])();
    };
    const items = [obj];
    return items;
  }, []);
  const keyCommands = KeyCommandsView.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = React.useEffect(() => {
    const result = callback(table[15]).checkScreenreaderEnabled();
  }, []);
};
