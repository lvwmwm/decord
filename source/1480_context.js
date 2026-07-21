// Module ID: 1480
// Function ID: 17174
// Name: context
// Dependencies: []
// Exports: default

// Module 1480 (context)
const importAllResult = importAll(dependencyMap[0]);
const context = importAllResult.createContext({
  scheduleUpdate(arg0) {
    const error = new Error("Couldn't find a schedule context.");
    throw error;
  },
  flushUpdates() {
    const error = new Error("Couldn't find a schedule context.");
    throw error;
  }
});

export default function useScheduleUpdate(arg0) {
  const context = importAllResult.useContext(context);
  context.scheduleUpdate(arg0);
  const effect = importAllResult.useEffect(context.flushUpdates);
};
export const ScheduleUpdateContext = context;
