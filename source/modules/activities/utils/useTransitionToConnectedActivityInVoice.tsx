// Module ID: 15782
// Function ID: 121746
// Name: useTransitionToConnectedActivityInVoice
// Dependencies: [5, 31, 1348, 1906, 653, 3748, 10467, 10854, 10556, 1207, 2]
// Exports: default

// Module 15782 (useTransitionToConnectedActivityInVoice)
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ComponentActions } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx");

export default function useTransitionToConnectedActivityInVoice(onTransition) {
  onTransition = onTransition.onTransition;
  const items = [onTransition];
  const effect = React.useEffect(() => {
    function handler() {
      return _handler(...arguments);
    }
    function _handler() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_3(tmp);
      return obj(...arguments);
    }
    let ComponentDispatch = onTransition(outer1_2[9]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(outer1_7.OPEN_EMBEDDED_ACTIVITY, handler);
    return () => {
      const ComponentDispatch = onTransition(outer2_2[9]).ComponentDispatch;
      ComponentDispatch.unsubscribe(outer2_7.OPEN_EMBEDDED_ACTIVITY, handler);
    };
  }, items);
};
