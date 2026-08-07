// Module ID: 15897
// Function ID: 15898
// Name: BurstReactionAnimationContainer
// Dependencies: [19, 17, 1372, 4373, 21, 589, 10595, 4152, 10702, 15898, 500, 13770, 1236, 15900, 13765, 13637, 2, 15901, 15902, 15903, 15904, 15912, 15914, 15945]
// Exports: PictureInPictureGlobalContainer, useAppKeyCommands, useScreenReaderEnabled

// Module 15897 (BurstReactionAnimationContainer)
import ActionSheetPresenter from "ActionSheetPresenter";
import { NativeModules } from "BurstReactionAnimationContainerInner";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import { jsx } from "MuteDeafen";

const require = arg1;
let result = require("ensureGuildLoaded").fileFinishedImporting("components_native/MainShared.tsx");

export const BurstReactionAnimationContainer = require("BurstReactionAnimationContainerInner");
export const MenuContainer = require("MenuContainer");
export const ActionSheetContainer = require("ActionSheetPresenter");
export const Alerts = require("StyleSheet");
export const SoundPlayer = require("MuteDeafen");
export const MainViewTooltipActionSheetsV2 = require("trackActionSheetImpression");
export const ToastContainer = require("AnimatedToast");
export const PictureInPictureGlobalContainer = function PictureInPictureGlobalContainer() {
  let obj = require(589) /* initialize */;
  const items = [ensureGuildLoaded, createRTCConnection];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  const hasPipParticipant = require(10595) /* usePipVideoOrStream */.useHasPipParticipant({ isActivityViewFocused: false });
  const obj2 = require(10595) /* usePipVideoOrStream */;
  const isModalOpen = require(4152) /* navigationToRootTabHelper */.useIsModalOpen();
  require(10702) /* isVoicePanelEnabled */;
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
          tmp7 = jsx(importDefault(15898), { channel: null });
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
  const keyCommands = require(13765) /* KeyCommandsView */.useKeyCommands(memo);
};
export const useScreenReaderEnabled = function useScreenReaderEnabled() {
  const effect = React.useEffect(() => {
    const result = callback(table[15]).checkScreenreaderEnabled();
  }, []);
};
