// Module ID: 11525
// Function ID: 89791
// Name: useShowGuildPowerupRollbackSheet
// Dependencies: []
// Exports: default

// Module 11525 (useShowGuildPowerupRollbackSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default function useShowGuildPowerupRollbackSheet(arg0, arg1) {
  let modalConfig;
  let shouldShow;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  arg1 = undefined;
  let importDefault;
  let dependencyMap;
  let callback;
  ({ shouldShow, modalConfig } = importDefault(dependencyMap[3])(arg0, arg1));
  arg1 = modalConfig;
  const items = [];
  if (shouldShow) {
    shouldShow = null != modalConfig;
  }
  if (shouldShow) {
    shouldShow = !flag;
  }
  if (shouldShow) {
    items.push(modalConfig.dismissibleContent);
  }
  const tmp = importDefault(dependencyMap[3])(arg0, arg1);
  const tmp4 = callback(arg1(dependencyMap[4]).useSelectedDismissibleContent(items), 2);
  const first = tmp4[0];
  importDefault = first;
  dependencyMap = tmp6;
  callback = React.useRef(false);
  const items1 = [first, modalConfig, tmp4[1]];
  const effect = React.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = null == modalConfig;
    }
    if (!current) {
      current = null == modalConfig.primaryButtonText;
    }
    if (!current) {
      current = first !== modalConfig.dismissibleContent;
    }
    if (!current) {
      ref.current = true;
      const obj = { header: modalConfig.header };
      const bodies = modalConfig.bodies;
      obj.body = bodies.join("\n\n");
      obj.ctaText = modalConfig.primaryButtonText;
      obj.onCtaPress = function onCtaPress() {
        callback3(constants.TAKE_ACTION);
        callback2(callback3[6]).hideActionSheet(callback(callback3[5]).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
      };
      obj.onDismiss = function onDismiss() {
        callback3(constants.USER_DISMISS);
      };
      first(tmp6[5])(obj);
      const tmp10 = first(tmp6[5]);
    }
  }, items1);
};
