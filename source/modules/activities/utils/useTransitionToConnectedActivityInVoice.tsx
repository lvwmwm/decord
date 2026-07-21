// Module ID: 15607
// Function ID: 119169
// Name: useTransitionToConnectedActivityInVoice
// Dependencies: []
// Exports: default

// Module 15607 (useTransitionToConnectedActivityInVoice)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ComponentActions = arg1(dependencyMap[4]).ComponentActions;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx");

export default function useTransitionToConnectedActivityInVoice(onTransition) {
  onTransition = onTransition.onTransition;
  const arg1 = onTransition;
  const items = [onTransition];
  const effect = React.useEffect(() => {
    function handler() {
      return _handler(...arguments);
    }
    const onTransition = handler;
    function _handler() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _handler = obj;
      return obj(...arguments);
    }
    const ComponentDispatch = onTransition(closure_2[9]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.OPEN_EMBEDDED_ACTIVITY, handler);
    return () => {
      const ComponentDispatch = handler(closure_2[9]).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.OPEN_EMBEDDED_ACTIVITY, handler);
    };
  }, items);
};
