// Module ID: 11257
// Function ID: 87560
// Name: useIsAppDM
// Dependencies: []
// Exports: default

// Module 11257 (useIsAppDM)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default function useIsAppDM(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  return arg1(dependencyMap[1]).useStateFromStores(items, (self) => {
    let isDMResult = null != self;
    if (isDMResult) {
      isDMResult = self.isDM();
    }
    if (isDMResult) {
      isDMResult = 1 === self.recipients.length;
    }
    if (isDMResult) {
      const user = user.getUser(self.recipients[0]);
      let bot;
      if (null != user) {
        bot = user.bot;
      }
      isDMResult = true === bot;
    }
    return isDMResult;
  });
};
